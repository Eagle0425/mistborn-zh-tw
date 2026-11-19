type Entry = {
	original: string;
	label: string;
	summary: string;
	target: string;
	related: string[];
	requireOriginal?: boolean;
};

const ignored = 'a, button, code, pre, script, style, svg, h1, h2, h3, h4, h5, h6, [hidden], [data-pagefind-ignore]';

function markTerms(content: HTMLElement, dialog: HTMLDialogElement, entries: Entry[]) {
	const labels = new Map(entries.map(entry => [entry.label, entry]));
	const pattern = new RegExp([...labels.keys()]
		.sort((a, b) => b.length - a.length)
		.map(label => label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
		.join('|'), 'g');
	const walker = document.createTreeWalker(content, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
	const seen = new Set<string>();
	const replacements: Array<[Text, DocumentFragment]> = [];

	for (let node = walker.nextNode(); node; node = walker.nextNode()) {
		if (node instanceof Element) {
			if (/^H[2-6]$/.test(node.tagName)) seen.clear();
			continue;
		}
		if (!(node instanceof Text) || node.parentElement?.closest(ignored)) continue;

		const text = node.data;
		const fragment = document.createDocumentFragment();
		let offset = 0;
		for (const match of text.matchAll(pattern)) {
			const entry = labels.get(match[0])!;
			if (seen.has(entry.original)) continue;
			const end = match.index! + entry.label.length;
			const following = text.slice(end).trimStart().toLowerCase();
			const original = entry.original.toLowerCase();
			if (entry.requireOriginal && !following.startsWith(`（${original}）`) && !following.startsWith(`(${original})`)) {
				continue;
			}
			fragment.append(text.slice(offset, match.index));
			const button = document.createElement('button');
			button.type = 'button';
			button.className = 'term-trigger';
			button.dataset.term = entry.original;
			button.textContent = entry.label;
			button.setAttribute('aria-haspopup', 'dialog');
			button.setAttribute('aria-controls', dialog.id);
			button.setAttribute('aria-label', `查看術語預覽：${entry.label}`);
			fragment.append(button);
			seen.add(entry.original);
			offset = end;
		}
		if (offset) {
			fragment.append(text.slice(offset));
			replacements.push([node, fragment]);
		}
	}

	for (const [node, fragment] of replacements) node.replaceWith(fragment);
}

function installPreview() {
	const dialog = document.querySelector<HTMLDialogElement>('dialog[data-terms]');
	const content = document.querySelector<HTMLElement>('main .sl-markdown-content');
	if (!dialog || !content || typeof dialog.showModal !== 'function') return;
	const entries: Entry[] = JSON.parse(dialog.dataset.terms!);
	if (!entries.length) return;
	const byOriginal = new Map(entries.map(entry => [entry.original, entry]));
	const title = dialog.querySelector<HTMLElement>('[data-term-title]')!;
	const original = dialog.querySelector<HTMLElement>('[data-term-original]')!;
	const summary = dialog.querySelector<HTMLElement>('[data-term-summary]')!;
	const related = dialog.querySelector<HTMLElement>('[data-term-related]')!;
	const back = dialog.querySelector<HTMLButtonElement>('[data-term-back]')!;
	const close = dialog.querySelector<HTMLButtonElement>('[data-term-close]')!;
	const target = dialog.querySelector<HTMLAnchorElement>('[data-term-target]')!;
	const mobile = window.matchMedia('(max-width: 50rem)');
	const trail: Entry[] = [];
	let trigger: HTMLButtonElement | null = null;

	function position() {
		if (!dialog.open || !trigger) return;
		if (mobile.matches) {
			dialog.style.removeProperty('top');
			dialog.style.removeProperty('left');
			return;
		}
		const anchor = trigger.getBoundingClientRect();
		const { width, height } = dialog.getBoundingClientRect();
		const margin = 12;
		const below = anchor.bottom + 8;
		const preferredTop = below + height <= innerHeight - margin ? below : anchor.top - height - 8;
		dialog.style.left = `${Math.max(margin, Math.min(anchor.left, innerWidth - width - margin))}px`;
		dialog.style.top = `${Math.max(margin, Math.min(preferredTop, innerHeight - height - margin))}px`;
	}

	function render(entry: Entry) {
		title.textContent = entry.label;
		original.textContent = entry.original;
		summary.textContent = entry.summary;
		target.href = entry.target;
		back.hidden = trail.length < 2;
		related.replaceChildren();
		for (const key of entry.related) {
			const next = byOriginal.get(key);
			if (!next) continue;
			const button = document.createElement('button');
			button.type = 'button';
			button.textContent = next.label;
			button.addEventListener('click', () => {
				trail.push(next);
				render(next);
				title.focus({ preventScroll: true });
			});
			related.append(button);
		}
		dialog.scrollTop = 0;
		position();
	}

	markTerms(content, dialog, entries);
	content.addEventListener('click', event => {
		if (!(event.target instanceof Element)) return;
		const button = event.target.closest<HTMLButtonElement>('button[data-term]');
		const entry = byOriginal.get(button?.dataset.term || '');
		if (!button || !entry) return;
		trigger = button;
		trail.splice(0, trail.length, entry);
		render(entry);
		dialog.showModal();
		position();
	});
	back.addEventListener('click', () => {
		if (trail.length < 2) return;
		trail.pop();
		render(trail[trail.length - 1]);
		title.focus({ preventScroll: true });
	});
	close.addEventListener('click', () => dialog.close());
	dialog.addEventListener('click', event => {
		if (event.target !== dialog) return;
		const bounds = dialog.getBoundingClientRect();
		if (event.clientX < bounds.left || event.clientX > bounds.right ||
			event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
	});
	dialog.addEventListener('close', () => {
		trigger?.focus({ preventScroll: true });
		trigger = null;
		trail.length = 0;
	});
	window.addEventListener('resize', position);
}

installPreview();
