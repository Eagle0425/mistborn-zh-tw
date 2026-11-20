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
const goals = 'handbook/goals-and-rewards/goals/';
const paths = 'handbook/heroic-paths/overview/';
const basics = 'handbook/introduction/welcome-to-scadrial/';
const gear = 'handbook/items/currency/';

export const rulePreviews: Record<string, Preview> = {
	'Plot Die': {
		summary: '技能檢定時可與 d20 一起擲的特殊骰。它可能帶來機遇或變故，影響這次檢定如何推進故事。',
		target: basics + '#劇情骰',
		related: ['Raise the Stakes', 'Opportunity', 'Complication'],
	},
	'Raise the Stakes': {
		summary: 'GM 藉此凸顯一次檢定在故事中的重要性，讓玩家加擲劇情骰。',
		target: basics + '#提高賭注',
		related: ['Plot Die', 'Skill Test'],
	},
	'Skill Test': {
		summary: '結果不確定時，擲 d20 並套用技能修正值，再依難度等級或對抗檢定的規則判定。',
		target: basics + '#進行技能檢定skill-test',
		related: ['Skill Modifier', 'Difficulty Class', 'Opposed Test'],
	},
	'Skill Rank': {
		summary: '代表角色在一項技能上的訓練與經驗。與對應屬性合計，得到該技能的修正值。',
		target: statistics + 'skills/#技能等級與修正值',
		related: ['Skill Modifier', 'attribute', 'Tier'],
	},
	'Skill Modifier': {
		summary: '技能檢定所加的修正值，等於該技能對應的屬性值加上技能等級。',
		target: statistics + 'skills/#技能等級與修正值',
		related: ['Skill Rank', 'Skill Test'],
	},
	attribute: {
		summary: '描述角色基本能力的數值，影響技能修正與防禦等衍生數據。',
		target: statistics + 'attributes/',
		related: ['Skill Modifier', 'Physical Defense', 'Cognitive Defense', 'Spiritual Defense'],
		requireOriginal: true,
	},
	Expertise: {
		summary: '角色熟悉的特定知識、文化或裝備。專長可提供實際優勢，效果要看種類與情境。',
		target: statistics + 'expertises/#專長的益處',
		related: ['cultural expertise', 'Weapon Expertise', 'Skill Rank'],
	},
	'cultural expertise': {
		summary: '對某個地區或群體的習俗、日常與社會規範的熟悉程度，可由成長背景或長期生活取得。',
		target: statistics + 'expertises/#文化專長',
		related: ['Expertise', 'ancestry'],
	},
	'Weapon Expertise': {
		summary: '對特定武器的熟悉程度，讓角色能使用該武器需要專長才可發揮的效果。',
		target: statistics + 'expertises/#武器專長',
		related: ['Expertise', 'Skill Rank'],
	},
	ancestry: {
		summary: '角色的族群傳承，影響創角時可選的天賦與特質。',
		target: 'handbook/origins/overview/#血統',
		related: ['cultural expertise', 'talent'],
		requireOriginal: true,
	},
	Path: {
		summary: '角色用來選擇與發展天賦的進程。英雄路徑與金屬之子路徑涵蓋不同能力。',
		target: paths + '#英雄路徑與金屬之子路徑',
		related: ['talent', 'Key Talent', 'Metalborn'],
		requireOriginal: true,
	},
	talent: {
		summary: '透過角色成長選取的能力。天賦條目會列出啟動方式與可以使用它的條件。',
		target: paths + '#天賦的組成',
		related: ['Path', 'Prerequisite', 'Key Talent'],
	},
	'Key Talent': {
		summary: '開啟某條路徑的基礎天賦，也是該路徑後續天賦的重要前提。',
		target: paths + '#關鍵天賦',
		related: ['Path', 'Prerequisite', 'talent'],
	},
	Prerequisite: {
		summary: '選取天賦前需要符合的條件，例如某項技能等級或先取得另一個天賦。',
		target: paths + '#取得其他天賦的資格',
		related: ['Skill Rank', 'talent'],
	},
	goal: {
		summary: '角色在冒險中可以推進並結束的一項具體目標，常和角色成長或取得獎勵相關。',
		target: goals + '#短期目標',
		related: ['Reward'],
	},
	Reward: {
		summary: '角色因短期目標或冒險成果而獲得的外部資源，例如物品、夥伴、贊助或據點。',
		target: goals + '#獎勵',
		related: ['goal', 'Companion', 'Patron', 'Hideout'],
		requireOriginal: true,
	},
	Companion: {
		summary: '以獎勵等方式與角色結伴的動物或人物，可以提供協助或參與場景。',
		target: goals + '#夥伴',
		related: ['Reward', 'Patron'],
		requireOriginal: true,
	},
	Patron: {
		summary: '能給予角色資源、資訊或其他支援的人或勢力，也可能對角色有所期待。',
		target: goals + '#贊助者',
		related: ['Reward', 'Organization'],
	},
	Organization: {
		summary: '角色可以加入、管理或建立的團體。組織有自己的規模，能提供的好處因團體而異。',
		target: goals + '#組織',
		related: ['Patron', 'Hideout'],
		requireOriginal: true,
	},
	Hideout: {
		summary: '角色可作為據點使用的場所，能依據點用途與需要進行升級。',
		target: goals + '#藏身處',
		related: ['Reward', 'Organization'],
	},
	Boxing: {
		summary: '司卡德利亞的貨幣單位之一，物品價格和冒險報酬常以盒金表示。',
		target: gear + '#貨幣',
		related: ['Reward', 'starting kit'],
	},
	'starting kit': {
		summary: '創角時可挑選的一組起始裝備。不同套組適合不同身分與冒險需求。',
		target: gear + '#起始套組',
		related: ['Boxing', 'Path'],
	},
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
	Scene: {
		summary: '讓玩家逐步演出角色行動的故事段落。常見類型有戰鬥、對話與試煉，GM 可依情境混用規則。',
		target: 'handbook/adventuring/overview/#場景',
		related: ['Conversation', 'Endeavor', 'Downtime'],
		requireOriginal: true,
	},
	Event: {
		summary: 'GM 可用來預告場景中的變化，例如援軍將至。投入足夠的機遇或變故後，事件就會觸發。',
		target: 'handbook/adventuring/overview/#事件',
		related: ['Event Track', 'Scene', 'Opportunity', 'Complication'],
		requireOriginal: true,
	},
	'Event Track': {
		summary: '追蹤事件的進度。玩家與 GM 可把機遇或變故填入對應的格子，填滿適用的格子後觸發事件。',
		target: 'handbook/adventuring/overview/#事件進度軌',
		related: ['Event', 'Opportunity', 'Complication'],
	},
	Downtime: {
		summary: '重要場景之間較長的空檔。玩家可讓角色休養、研究、工作，或推進個人的短期目標。',
		target: 'handbook/adventuring/overview/#休整期',
		related: ['Scene', 'goal', 'Long Rest'],
	},
	Conversation: {
		summary: '角色透過交談達成目標的場景，例如談判、欺騙或審問。場景以逐次貢獻推進，關鍵行動可能需要檢定。',
		target: 'handbook/conversations/overview/#何時使用對話',
		related: ['Scene', 'Contribution', 'Skill Test'],
		requireOriginal: true,
	},
	Contribution: {
		summary: '角色在對話或試煉中有意義的一次參與，例如支持盟友、提出說法或嘗試解決問題。關鍵貢獻可能需要檢定。',
		target: 'handbook/conversations/overview/#貢獻',
		related: ['Conversation', 'Endeavor', 'Skill Test'],
		requireOriginal: true,
	},
	Pursuit: {
		summary: '追捕或逃脫類的試煉。GM 用距離軌追蹤雙方的差距，直接對抗時也可用對抗檢定。',
		target: 'handbook/endeavors/pursuit-endeavors/#追逐試煉',
		related: ['Distance Track', 'Endeavor', 'Opposed Test'],
		requireOriginal: true,
	},
	'Distance Track': {
		summary: '追逐中以抽象數值記錄雙方差距。降到 0 時抓住目標，達到 GM 設定的逃脫距離時目標逃離。',
		target: 'handbook/endeavors/pursuit-endeavors/#特殊規則縮短距離',
		related: ['Pursuit', 'Collective Threshold'],
	},
	'Collective Threshold': {
		summary: '幫助 GM 掌握試煉節奏的工具。累計團隊的檢定成功與失敗次數，視情節判斷何時收尾。',
		target: 'handbook/endeavors/order-of-endeavors/#團體門檻',
		related: ['Endeavor', 'Contribution', 'Skill Test'],
	},
	purpose: {
		summary: '引導角色選擇的長期動機，可用來構思短期目標，以及角色在遭遇兩難時的反應。',
		target: 'handbook/goals-and-rewards/overview/#核心目的',
		related: ['obstacle', 'goal'],
	},
	obstacle: {
		summary: '反覆阻礙角色實踐核心目的或追求短期目標的內在特質或難題。',
		target: 'handbook/goals-and-rewards/overview/#內在障礙',
		related: ['purpose', 'goal'],
	},
	adversary: {
		summary: '可由 GM 帶入場景的對手。角色資料提供背景和戰術建議，數據與特殊規則則列在資料區塊。',
		target: 'handbook/gamemastering/using-adversaries/#運用敵手',
		related: ['Stat Block', 'Threat'],
	},
	'Stat Block': {
		summary: '集中列出敵手或動物夥伴的數據與特殊規則，供 GM 在場景中快速查用。',
		target: 'handbook/gamemastering/using-adversaries/#資料區塊',
		related: ['adversary', 'Companion', 'Threat'],
	},
	Threat: {
		summary: 'GM 用來估計戰鬥難度的敵手數值。將個別威脅值加總，再依玩家角色數量與雙方遊戲階層評估。',
		target: 'handbook/gamemastering/using-adversaries/#決定場景難度',
		related: ['adversary', 'Tier'],
	},
	'Specialist Expertise': {
		summary: '涵蓋一般人難以接觸的知識，例如罕見武器或失傳歷史。可由天賦、獎勵或 GM 許可取得。',
		target: 'handbook/character-statistics/expertises/#特殊專長',
		related: ['Expertise', 'Weapon Expertise', 'Reward'],
	},
	'Carrying Capacity': {
		summary: '由力量決定，代表步行時可輕鬆攜帶的重量。超過此重量移動會減速，累積過久會精疲力竭。',
		target: 'handbook/character-statistics/attributes/#負重能力',
		related: ['Lifting Capacity', 'Slowed', 'Exhausted'],
	},
	'Lifting Capacity': {
		summary: '由力量決定，代表角色獨自一次最多能舉起的重量。此重量通常只能短暫承受。',
		target: 'handbook/character-statistics/attributes/#舉重能力',
		related: ['Carrying Capacity', 'attribute'],
	},
	'Senses Range': {
		summary: '主要感官完全被遮蔽時，角色仍能用其他感官輕易偵測事物的範圍，由察覺決定。',
		target: 'handbook/character-statistics/expertises/#感知範圍',
		related: ['attribute', 'Line of Effect', 'Disadvantage'],
	},
};
