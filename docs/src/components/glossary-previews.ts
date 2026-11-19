import { metallicPreviews } from './metallic-previews';
import { rulePreviews } from './rule-previews';
import { settingPreviews } from './setting-previews';

// Keys come from glossary.json so previews use the project's current translations.
type Preview = {
	summary: string;
	target: string;
	related: string[];
	requireOriginal?: boolean;
};

const history = 'world-guide/history-of-scadrial/era-2-after-the-catacendre/';
const metals = 'handbook/metallic-arts/overview/';
const basics = 'handbook/introduction/welcome-to-scadrial/';
const technology = 'world-guide/the-world/harmonys-world-era-2/';
const luthadel = 'world-guide/points-of-interest-in-era-1/luthadel/#克雷迪克霄';

export const previews: Record<string, Preview> = {
	...metallicPreviews,
	...rulePreviews,
	...settingPreviews,
	'Reactive Strike': {
		summary: '敵人自願離開你的觸及範圍時，可花費 1 點專注點，以反應進行近戰武器攻擊或徒手打擊。瞬間移動不觸發這項反應。',
		target: 'handbook/combat/#反擊機會-反應',
		related: ['Opportunity'],
	},
	Opportunity: {
		summary: '檢定可以出現的有利轉折，即使檢定本身失敗，也可能有機遇可花費。',
		target: basics + '#花費機遇',
		related: ['Complication'],
	},
	Complication: {
		summary: '檢定可以出現的不利轉折，即使檢定成功，也可能需要處理變故。',
		target: basics + '#面對變故',
		related: ['Opportunity'],
	},
	Allomancy: {
		summary: '藉由燃燒攝入體內的金屬來發動能力，不同金屬產生不同效果。',
		target: metals + '#第6章金屬技藝metallic-arts',
		related: ['Feruchemy', 'Primer Cube'],
	},
	Feruchemy: {
		summary: '將自己的特質儲存在金屬意識庫中，之後可以汲取，暫時強化該特質。',
		target: metals + '#第6章金屬技藝metallic-arts',
		related: ['Metalmind', 'Tap'],
	},
	Tap: {
		summary: '從金屬意識庫取用已儲存的特質。可汲取的效果、消耗和時間依金屬及能力而異。',
		target: 'handbook/metalborn-paths/overview/#汲取金屬意識庫',
		related: ['Feruchemy', 'Metalmind'],
	},
	Metalmind: {
		summary: '藏金術師用來儲存特質的金屬物件，所用金屬決定可儲存哪種特質。',
		target: 'handbook/metalborn-paths/overview/#取得金屬意識庫',
		related: ['Feruchemy', 'Tap'],
	},
	'Primer Cube': {
		summary: '南方稱呼。鎔金術師可將力量注入方塊，讓它在之後重現該效果。',
		target: technology + '#授予技術',
		related: ['Allomantic Grenade', 'Allomancy'],
	},
	'Allomantic Grenade': {
		summary: '北方對鎔金術方塊的稱呼。它可以重現注入其中的鎔金效果，用途依能力而異。',
		target: technology + '#運河與航運',
		related: ['Primer Cube', 'Allomancy'],
	},
	Catacendre: {
		summary: '第一時代末，和諧重塑司卡德利亞的事件。它改變了地貌與氣候，也成為第二時代紀年的分界。',
		target: history + '#重塑世界',
		related: ['Harmony', 'Ice Death'],
	},
	Harmony: {
		summary: '沙賽德結合存留與滅絕的力量後所成為的存在。',
		target: history + '#和諧的昇華harmonys-ascension',
		related: ['Catacendre'],
		requireOriginal: true,
	},
	'Ice Death': {
		summary: '落灰之終後，南司卡德利亞大幅降溫，危及當地人民生存的災難。',
		target: history + '#冰殲時代the-ice-death',
		related: ['Catacendre', 'Sovereign'],
	},
	Sovereign: {
		summary: '南司卡德利亞人對一位救命恩人的稱號。他在冰殲時代後帶來能協助族人取暖的技術。',
		target: history + '#冰殲時代the-ice-death',
		related: ['Ice Death', 'Catacendre'],
		requireOriginal: true,
	},
	'Hill of a Thousand Spires': {
		summary: '統御主在陸沙德的宮殿，以高矮不一的眾多尖塔聞名。這是克雷迪克．霄的古泰瑞司語含義。',
		target: luthadel,
		related: ['Kredik Shaw'],
	},
	'Kredik Shaw': {
		summary: '統御主位於陸沙德的宮殿，名稱在古泰瑞司語中意為「千塔之山」。',
		target: luthadel,
		related: ['Hill of a Thousand Spires'],
	},
};
