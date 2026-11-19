const arts = 'handbook/metallic-arts/overview/';
const powers = 'handbook/metalborn-paths/overview/';
const twinborn = 'handbook/metalborn-paths/twinborn/';
const hemalurgy = 'handbook/metallic-arts/hemalurgy/#血金術hemalurgy';
const technology = 'world-guide/the-world/harmonys-world-era-2/';

export const metallicPreviews = {
	'Metallic Arts': {
		summary: '司卡德利亞以金屬為媒介的三種技藝，分別是鎔金術、藏金術和血金術。',
		target: arts + '#第6章金屬技藝metallic-arts',
		related: ['Allomancy', 'Feruchemy', 'Hemalurgy'],
	},
	Hemalurgy: {
		summary: '以金屬尖刺從一個生物奪取部分力量，再把這股力量轉移給他人的禁忌技藝。',
		target: hemalurgy,
		related: ['Hemalurgic Spike', 'Metallic Arts'],
	},
	'Hemalurgic Spike': {
		summary: '血金術用來承載與轉移力量的金屬尖刺。金屬種類和穿刺的位置都會影響效果。',
		target: hemalurgy,
		related: ['Hemalurgy'],
	},
	Metalborn: {
		summary: '擁有鎔金術或藏金術等金屬技藝能力的人。角色可藉金屬之子路徑選擇與發展能力。',
		target: powers + '#金屬之子路徑選項',
		related: ['Allomancer', 'Feruchemist', 'Twinborn'],
	},
	Allomancer: {
		summary: '能燃燒金屬來發動鎔金術的人。能使用哪些金屬，取決於自己的能力。',
		target: arts + '#第6章金屬技藝metallic-arts',
		related: ['Allomancy', 'Misting', 'Mistborn'],
	},
	Misting: {
		summary: '天生只能燃燒一種鎔金金屬的鎔金術師。',
		target: 'handbook/metalborn-paths/misting/',
		related: ['Mistborn', 'Allomancer', 'Metalborn'],
	},
	Mistborn: {
		summary: '能使用各種金屬施展鎔金術的人，能力範圍比迷霧人更廣。',
		target: 'handbook/metalborn-paths/mistborn/#迷霧之子mistborn',
		related: ['Misting', 'Allomancy'],
		requireOriginal: true,
	},
	Feruchemist: {
		summary: '會使用藏金術的人。在介紹金屬之子路徑時，完整藏金術師能運用多種金屬。',
		target: powers + '#藏金術使用金屬意識庫',
		related: ['Feruchemy', 'Ferring', 'Metalmind'],
	},
	Ferring: {
		summary: '只能運用一種藏金金屬、儲存與汲取相應特質的藏金術使用者。',
		target: 'handbook/metalborn-paths/ferring/#單藏金術師ferring',
		related: ['Feruchemist', 'Feruchemy', 'Twinborn'],
	},
	Twinborn: {
		summary: '兼具一種鎔金能力及一種藏金能力的人。兩種能力可能使用相同或不同的金屬。',
		target: twinborn + '#雙生師twinborn',
		related: ['Compounding', 'Resonance', 'Metalborn'],
	},
	Compounding: {
		summary: '雙生師若能對同一種金屬使用兩種技藝，可燃燒儲有特質的金屬意識庫來增強藏金效果。',
		target: twinborn + '#複合師',
		related: ['Twinborn', 'Metalmind'],
	},
	Resonance: {
		summary: '兩種能力相互作用，讓雙生師可能表現出原本任一能力都不具備的額外特性。',
		target: twinborn + '#探索共鳴',
		related: ['Twinborn'],
		requireOriginal: true,
	},
	Investiture: {
		summary: '寰宇的魔法力量。在鎔金術規則中，授予也是施展能力時可花費的資源。',
		target: powers + '#鎔金術使用授予',
		related: ['Allomancy', 'Metallic Art Limit'],
	},
	Burn: {
		summary: '鎔金術師運用已攝入的金屬，啟動該金屬所對應的能力。',
		target: powers + '#鎔金術使用授予',
		related: ['Allomancy', 'Investiture'],
		requireOriginal: true,
	},
	Store: {
		summary: '把自己的特質存進相應的金屬意識庫，累積可供日後汲取的充能。',
		target: powers + '#將特質儲存於金屬意識庫',
		related: ['Tap', 'Metalmind', 'Charge'],
		requireOriginal: true,
	},
	Charge: {
		summary: '以金屬意識庫儲存特質所累積的單位。可在汲取時花費，以取得相應效果。',
		target: powers + '#汲取金屬意識庫',
		related: ['Store', 'Tap', 'Metallic Art Limit'],
	},
	'Metallic Art Limit': {
		summary: '限制一次施展金屬技藝可花費的授予或充能。查表時使用相應技能的等級。',
		target: arts + '#金屬技藝上限metallic-art-limit',
		related: ['Metallic Art Die', 'Investiture', 'Charge'],
	},
	'Metallic Art Die': {
		summary: '能力指定使用金屬技藝骰時，依相應技能等級決定骰種，並查該能力的用法。',
		target: arts + '#金屬技藝骰metallic-art-die',
		related: ['Metallic Art Limit', 'Metallic Art Power'],
	},
	'Metallic Art Power': {
		summary: '某一種金屬技藝提供的能力，包括基本動作，以及天賦增加的用途。',
		target: arts + '#金屬技藝能力metallic-art-power',
		related: ['Metallic Arts', 'Metallic Art Limit'],
	},
	'Metallic Art Range': {
		summary: '能力可影響目標的距離。施展時應依該項能力及金屬技藝距離規則判定。',
		target: arts + '#金屬技藝距離metallic-art-range',
		related: ['Metallic Art Power'],
	},
	'God Metal': {
		summary: '由碎神力量凝成的金屬，可能具有常見金屬沒有的特性。',
		target: arts + '#神金屬',
		related: ['ettmetal', 'Metallic Arts'],
	},
	ettmetal: {
		summary: '與和諧相關的神金屬，也是南方鎔金術方塊及浮空船技術的重要材料。',
		target: technology + '#ettmetal',
		related: ['God Metal', 'Harmony', 'Primer Cube'],
	},
	Medallion: {
		summary: '南司卡德利亞製作的授予器具。佩戴特定徽章可能讓非金屬之子使用某種藏金能力。',
		target: technology + '#進階金屬意識庫',
		related: ['Metalmind', 'Feruchemy', 'Sovereign'],
		requireOriginal: true,
	},
};
