type Talent = {
    id: string;
    label: string;
    notes: string[];
    href?: string;
    root: boolean;
};

const svgNamespace = 'http://www.w3.org/2000/svg';

function talentGraph(table: HTMLTableElement) {
    const talents = new Map<string, Talent>();
    const edges = new Set<string>();
    let hasAlternatives = false;

    function add(label: string, notes: string[], href?: string, root = false) {
        const talent = { id: `n${talents.size}`, label, notes, href, root };
        if (talents.has(label)) throw new Error(`Duplicate talent: ${label}`);
        talents.set(label, talent);
        return talent;
    }

    const rows = Array.from(table.tBodies).flatMap(body => Array.from(body.rows));
    const entries = rows.map(row => {
        const [name, source, ...details] = Array.from(row.cells);
        const label = name.textContent.trim();
        const href = name.querySelector('a')?.getAttribute('href') ?? undefined;
        const notes = details.flatMap(cell => cell.textContent.trim().split('；'))
            .filter(text => text && text !== '—');
        return { talent: add(label, notes, href, source.textContent.trim() === '關鍵天賦'), source };
    });

    for (const { talent, source } of entries) {
        if (talent.root) continue;
        const links = Array.from(source.querySelectorAll('a'));
        const parents = source.textContent.split(/\s*或\s*/).map(text => text.trim()).filter(Boolean);
        hasAlternatives ||= parents.length > 1;
        for (const label of parents) {
            const href = links.find(link => link.textContent.trim() === label)?.getAttribute('href') ?? undefined;
            const parent = talents.get(label) ?? add(label, [], href, true);
            edges.add(`  ${parent.id} --> ${talent.id}`);
        }
    }

    const nodes = Array.from(talents.values());
    const escape = (text: string) => text.replace(/["`<>[\]#&]/g, char => `#${char.charCodeAt(0)};`);
    const lines = nodes.map(talent => {
        const content = [`**${escape(talent.label)}**`, ...talent.notes.map(escape)].join('\n');
        return `  ${talent.id}["` + '`' + content + '`' + `"]${talent.root ? ':::key' : ''}`;
    });

    return {
        nodes,
        hasAlternatives,
        source: ['flowchart TB', ...lines, ...edges,
            ...nodes.map(node => `  class ${node.id} talent-node-${node.id}`),
            '  classDef key fill:#43351f,stroke:#705d3d,color:#fff',
        ].join('\n'),
    };
}

function linkNodes(svg: SVGSVGElement, talents: Talent[]) {
    for (const { id, href, label } of talents) {
        if (!href?.startsWith('#')) continue;
        const group = svg.querySelector(`g.talent-node-${id}`);
        if (!group) throw new Error(`Missing diagram node: ${label}`);
        const link = document.createElementNS(svgNamespace, 'a');
        link.setAttribute('href', href);
        link.setAttribute('aria-label', label);
        group.replaceWith(link);
        link.append(group);
    }
}

export async function renderTalentTrees() {
    const tables = Array.from(document.querySelectorAll<HTMLTableElement>('.sl-markdown-content table'))
        .filter(table => {
            const headers = table.tHead?.rows[0]?.cells;
            return headers?.[0]?.textContent.trim() === '天賦' &&
                headers[1]?.textContent.trim() === '解鎖來源';
        });
    if (!tables.length) return;

    try {
        const { default: mermaid } = await import('mermaid');
        mermaid.initialize({
            startOnLoad: false,
            securityLevel: 'strict',
            theme: 'base',
            themeVariables: {
                fontFamily: '"Segoe UI", "Microsoft JhengHei", sans-serif',
                fontSize: '15px',
                primaryColor: '#fffbef',
                primaryTextColor: '#2c251a',
                primaryBorderColor: '#ac9365',
                lineColor: '#695737',
            },
            flowchart: { htmlLabels: false, useMaxWidth: false, wrappingWidth: 190 },
        });

        for (const [index, table] of tables.entries()) {
            try {
                const { source, nodes, hasAlternatives } = talentGraph(table);
                const { svg } = await mermaid.render(`mistborn-talent-tree-${index + 1}`, source);
                const diagram = document.createElement('div');
                diagram.className = 'talent-tree';
                diagram.setAttribute('role', 'region');
                diagram.setAttribute('aria-label', '天賦樹，可橫向捲動');
                diagram.tabIndex = 0;
                diagram.innerHTML = svg;
                const graphic = diagram.querySelector('svg');
                if (!graphic) throw new Error('No SVG in the rendered talent tree');
                linkNodes(graphic, nodes);
                const naturalWidth = graphic.viewBox.baseVal.width;
                if (naturalWidth > 0) {
                    graphic.style.minWidth = `${Math.round(naturalWidth * 0.83)}px`;
                }

                const fallback = document.createElement('details');
                fallback.className = 'talent-tree-table';
                const summary = document.createElement('summary');
                summary.textContent = '查看天賦表';
                fallback.append(summary);
                table.before(diagram, fallback);
                fallback.append(table);
                if (hasAlternatives) {
                    const note = document.createElement('p');
                    note.textContent = '同一節點有多條前置箭線時，取得其中一項前置天賦即可，仍須符合節點列出的額外前提。';
                    note.className = 'talent-tree-note';
                    diagram.before(note);
                }
            } catch (error) {
                // Leave the published table visible if the diagram cannot be drawn.
                console.error('Talent tree rendering failed', error);
            }
        }
    } catch (error) {
        console.error('Unable to load talent tree renderer', error);
    }
}
