const items = 'legacy/items/';
const trials = 'legacy/desire-of-a-hungry-soul/';
const fashion = 'legacy/fatal-fashion/eyes-on-tekiel/';

export const adventurePreviews = {
	'Eternity Spike': {
		summary: '貫穿《迷霧之子傳承》兩個時代的一枚血金術尖刺。附錄詳列它的特性，含主持人用的劇情資訊。',
		target: 'legacy/eternity-spike/#永恆尖刺',
		related: ['Hemalurgy', 'Gilded Map'],
	},
	'Gilded Map': {
		summary: '《迷霧之子傳承》冒險中由三塊碎片組成的地圖，是尋找永恆尖刺的線索。',
		target: fashion + '#地圖與迷霧披風',
		related: ['Eternity Spike', 'Gilded Trio'],
	},
	'Gilded Trio': {
		summary: '第二時代冒險中的三人組，由 Bayron Conrad、Kwylliam Elariel 和 Lysarra Tekiel 組成。',
		target: 'legacy/introduction/notable-characters/#bayron-conrad第二時代',
		related: ['Order of a Thousand Eyes', 'Young Ascendants'],
	},
	'Order of a Thousand Eyes': {
		summary: '依藍戴大學的菁英兄弟會，從貴族家族邀請新成員，並以午夜試煉作為入會儀式。詳情含主持人用的劇情資訊。',
		target: trials + 'overview/#千眼會',
		related: ['Elendel', 'Gilded Trio'],
	},
	'Young Ascendants': {
		summary: 'Lysarra 經營的依藍戴大學社團兼慈善組織，提供獎學金，也是埃拉瑞爾春季沙龍拍賣的募款對象。',
		target: fashion + '#young-ascendants-辦公室',
		related: ['Midnight Mistcloak', 'Gilded Trio'],
	},
	'Midnight Mistcloak': {
		summary: '一件帶有藍色披肩的特殊護甲，在黑暗和霧中有助於隱匿。第二時代的春季沙龍以它為拍賣焦點。',
		target: items + '#午夜迷霧披風',
		related: ['Young Ascendants'],
	},
	'Founder’s Key': {
		summary: '《迷霧之子傳承》的特殊裝備。這把金鑰匙的柄上有一隻眼睛，虹膜呈星形。',
		target: items + '#創始者之鑰',
		related: ['Order of a Thousand Eyes'],
	},
	'National Archives': {
		summary: '依藍戴收藏與展出歷史文物的機構，也是《迷霧之子傳承》第二時代的冒險場景。',
		target: 'legacy/engines-and-espionage/high-society-heist/#國家檔案館',
		related: ['Elendel', 'National Archives Badge'],
	},
	'National Archives Badge': {
		summary: '國家檔案館發給董事的金屬徽章，可以開啟館內房間的門鎖。',
		target: items + '#國家檔案館徽章第二時代',
		related: ['National Archives'],
	},
	'Unity Medal': {
		summary: '由司卡工匠打造的紀念章，刻有一圈黑色手印，紀念最後帝國時期的一場勞工權益抗議。',
		target: items + '#團結勳章',
		related: ['skaa', 'Final Empire'],
	},
	'Raven Mask': {
		summary: '以深色金屬製成的舞會面具，外形像一群飛翔的渡鴉。',
		target: items + '#渡鴉面具',
		related: ['Raven Whistle'],
	},
	'Raven Whistle': {
		summary: '一支黑色木哨，吹響時會發出像渡鴉啼叫的聲音。',
		target: items + '#渡鴉哨',
		related: ['Raven Mask'],
	},
};
