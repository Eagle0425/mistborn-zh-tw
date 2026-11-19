// Keys match glossary.json. Targets were verified against the built docs/dist pages.
type Preview = {
	summary: string;
	target: string;
	related: string[];
	requireOriginal?: boolean;
};

const combat = 'handbook/combat/';
const statistics = 'handbook/character-statistics/';
const adventuring = 'handbook/adventuring/';

export const rulePreviews: Record<string, Preview> = {
	Round: {
		summary: '戰鬥中讓所有角色各進行一次輪次的完整循環，依序處理快速與慢速輪次。',
		target: combat + '#回合與輪次',
		related: ['Turn', 'Fast Turn', 'Slow Turn'],
		requireOriginal: true,
	},
	Turn: {
		summary: '一名角色在回合中行動的時段。輪次開始時取得行動與新的反應。',
		target: combat + '#回合與輪次',
		related: ['Round', 'Action', 'Reaction'],
		requireOriginal: true,
	},
	Focus: {
		summary: '代表心智決心的資源，可用來啟動能力、抵抗影響，或支付特定行動的成本。',
		target: statistics + 'expertises/#專注點',
		related: ['Recovery Die', 'Short Rest', 'Long Rest'],
		requireOriginal: true,
	},
	Tier: {
		summary: '概括角色能力與故事規模的成長階段，由角色等級決定，也會影響部分能力的效果。',
		target: 'handbook/character-creation/character-advancement/#遊戲階層tier',
		related: ['Health', 'Recovery Die'],
		requireOriginal: true,
	},
	'Physical Defense': {
		summary: '通常用作抵抗實體類檢定的難度，也常是武器攻擊的目標防禦。',
		target: statistics + 'attributes/#防禦',
		related: ['Cognitive Defense', 'Spiritual Defense', 'Difficulty Class'],
	},
	'Cognitive Defense': {
		summary: '通常用作抵抗意識類檢定的難度。特定能力也可能指定以它作為攻擊難度。',
		target: statistics + 'attributes/#防禦',
		related: ['Physical Defense', 'Spiritual Defense', 'Difficulty Class'],
	},
	'Spiritual Defense': {
		summary: '通常用作抵抗靈魂類檢定的難度，實際使用哪項防禦仍依能力與情境決定。',
		target: statistics + 'attributes/#防禦',
		related: ['Physical Defense', 'Cognitive Defense', 'Difficulty Class'],
	},
	Condition: {
		summary: '描述角色目前受到的規則效果，例如減速、堅定或昏迷；各狀態有自己的效果與解除條件。',
		target: adventuring + 'overview/#狀態',
		related: ['Injury', 'Surprised'],
		requireOriginal: true,
	},
	Injury: {
		summary: '嚴重傷害留下的持續後果。生命值降至零，或在零生命值時再受傷害，都會承受傷勢。',
		target: adventuring + 'durations/#承受傷勢',
		related: ['Health', 'Damage', 'Condition'],
	},
	Advantage: {
		summary: '每個優勢可選一顆檢定用骰，改擲兩顆並自選保留結果；可選 d20、劇情骰或傷害骰，同一顆骰不能重複選。',
		target: statistics + 'skills/#帶著優勢檢定',
		related: ['Disadvantage', 'Difficulty Class'],
		requireOriginal: true,
	},
	Disadvantage: {
		summary: '每個劣勢由 GM 選一顆檢定用骰，改擲兩顆，再由 GM 決定保留結果；同一顆骰不能重複選。',
		target: statistics + 'skills/#帶著劣勢檢定',
		related: ['Advantage', 'Difficulty Class'],
		requireOriginal: true,
	},
	Endeavor: {
		summary: '以多次行動與檢定推進共同目標的場景。GM 安排情勢、門檻與適用的特殊規則。',
		target: 'handbook/endeavors/overview/#布置場景',
		related: ['Difficulty Class', 'Opportunity', 'Complication'],
	},
	Health: {
		summary: '代表體力與承受輕傷能力的資源。受到傷害通常會減少生命值，降至零時會有嚴重後果。',
		target: statistics + 'expertises/#生命值',
		related: ['Damage', 'Injury', 'Recovery Die'],
	},
	Deflect: {
		summary: '用來減少衝擊、銳利與能量傷害的數值。特定能力或攻擊可以忽略它。',
		target: combat + '#傷害類型與偏轉值',
		related: ['Damage', 'Health'],
	},
	Damage: {
		summary: '使角色失去生命值的傷害量。攻擊的命中、擦傷與傷害類型都會影響結算。',
		target: adventuring + 'durations/#傷害',
		related: ['Health', 'Deflect', 'Injury'],
		requireOriginal: true,
	},
	'Recovery Die': {
		summary: '恢復時使用的骰子，骰型由意志決定；短休息或某些能力會要求擲此骰。',
		target: statistics + 'attributes/#恢復骰',
		related: ['Short Rest', 'Health', 'Focus'],
	},
	'Short Rest': {
		summary: '短暫停下來喘息與恢復的休息。通常可擲恢復骰，恢復部分生命值或專注點。',
		target: adventuring + 'overview/#短休息',
		related: ['Recovery Die', 'Long Rest', 'Focus'],
	},
	'Long Rest': {
		summary: '較完整的休養時間，可恢復資源並結束部分效果；傷勢與特殊能力另有各自規則。',
		target: adventuring + 'overview/#長休息',
		related: ['Short Rest', 'Health', 'Focus'],
	},
	'Difficulty Class': {
		summary: '檢定需要達到的目標數值，常由固定難度、目標防禦或 GM 判定。',
		target: statistics + 'skills/#難度等級',
		related: ['Opposed Test', 'Physical Defense'],
	},
	'Opposed Test': {
		summary: '雙方各自擲骰，以檢定結果比較直接對抗的行動，依對抗檢定規則判定勝負。',
		target: statistics + 'skills/#對抗檢定',
		related: ['Difficulty Class', 'Endeavor'],
	},
	'Fast Turn': {
		summary: '戰鬥中取得兩個行動的輪次，PC 的快速輪次在 NPC 快速輪次之前處理。',
		target: combat + '#回合與輪次',
		related: ['Slow Turn', 'Turn', 'Action'],
	},
	'Slow Turn': {
		summary: '戰鬥中取得三個行動的輪次，在快速輪次之後處理。',
		target: combat + '#回合與輪次',
		related: ['Fast Turn', 'Turn', 'Action'],
	},
	Action: {
		summary: '角色在自己的輪次執行任務所需的資源。各能力列出行動成本，未用完的行動在輪次結束時失去。',
		target: combat + '#行動',
		related: ['Free Action', 'Reaction', 'Turn'],
		requireOriginal: true,
	},
	Reaction: {
		summary: '回應指定觸發條件所用的行動資源，可在自己或別人的輪次使用，通常同時持有一個。',
		target: combat + '#反應',
		related: ['Turn', 'Action', 'Reactive Strike'],
		requireOriginal: true,
	},
	'Free Action': {
		summary: '不消耗一般行動的行動，通常在自己的輪次使用；每種自由行動仍有使用次數限制。',
		target: combat + '#自由行動',
		related: ['Action', 'Turn'],
	},
	Reach: {
		summary: '能直接觸及的範圍，通常是佔位周圍 5 呎且具有效果線的區域。武器或能力可改變距離。',
		target: combat + '#觸及範圍',
		related: ['Line of Effect', 'Reactive Strike'],
		requireOriginal: true,
	},
	'Line of Effect': {
		summary: '身體與目標之間可直接連通的路徑。實心障礙物或過窄的開口可能阻斷它。',
		target: combat + '#效果線',
		related: ['Reach', 'Physical Defense'],
	},
	Surprised: {
		summary: '失去所有反應，也無法取得新的反應；不能採取快速輪次，且少獲得一個行動。下次輪次之後移除此狀態。',
		target: adventuring + 'overview/#措手不及',
		related: ['Condition', 'Reaction', 'Fast Turn'],
	},
};
