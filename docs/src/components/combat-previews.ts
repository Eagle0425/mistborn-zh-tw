// Keys match glossary.json; target fragments are checked against docs/dist.
type Preview = {
	summary: string;
	target: string;
	related: string[];
	requireOriginal?: boolean;
};

const conditions = 'handbook/adventuring/overview/';
const combat = 'handbook/combat/';

export const combatPreviews: Record<string, Preview> = {
	Prone: {
		summary: '倒地時同時減速，對你的近戰攻擊獲得優勢，無掩護也能架防。可用自由行動起身，之後移動速率降低 5，直到下個輪次開始。',
		target: conditions + '#倒地',
		related: ['Slowed', 'Brace', 'Free Action'],
	},
	Stunned: {
		summary: '戰鬥中失去所有反應，自己的輪次少獲得兩個行動，也無法取得反應。戰鬥外由 GM 判定影響。',
		target: conditions + '#震懾',
		related: ['Action', 'Reaction', 'Condition'],
	},
	Restrained: {
		summary: '移動速率變為零。除了掙脫束縛的檢定，其餘檢定皆獲得劣勢。',
		target: conditions + '#束縛',
		related: ['Grapple', 'Disadvantage', 'Immobilized'],
	},
	Unconscious: {
		summary: '失去對周遭的知覺，無法移動、溝通或使用行動與反應。PC 可依規則選擇恢復意識。',
		target: conditions + '#昏迷',
		related: ['Health', 'Injury', 'Prone'],
	},
	Diminished: {
		summary: '暫時降低指定屬性，影響相關檢定與能力；不改變防禦或生命值、專注點、授予的上限。',
		target: conditions + '#減損',
		related: ['Enhanced', 'Condition', 'Exhausted'],
		requireOriginal: true,
	},
	Disoriented: {
		summary: '無法使用反應，感官視為受到遮蔽，感知及類似感官運用的檢定獲得劣勢。',
		target: conditions + '#迷惑',
		related: ['Reaction', 'Disadvantage', 'Condition'],
		requireOriginal: true,
	},
	Enhanced: {
		summary: '暫時提高指定屬性，影響相關檢定與能力；不改變防禦或生命值、專注點、授予的上限。',
		target: conditions + '#增益',
		related: ['Diminished', 'Condition'],
		requireOriginal: true,
	},
	Exhausted: {
		summary: '所有技能檢定承受指定減值，可累積。每次長休息後減值減輕 1，歸零時移除。',
		target: conditions + '#精疲力竭',
		related: ['Long Rest', 'Diminished', 'Condition'],
	},
	Focused: {
		summary: '使用需要花費專注點的能力時，專注點成本減少 1。',
		target: conditions + '#集中',
		related: ['Focus', 'Condition'],
		requireOriginal: true,
	},
	Immobilized: {
		summary: '移動速率變為零，無法自行移動，也無法被其他效果移動。',
		target: conditions + '#定身',
		related: ['Restrained', 'Slowed', 'Condition'],
	},
	Slowed: {
		summary: '移動速率減半。移動途中受到減速時，剩餘移動距離減半並無條件進位。',
		target: conditions + '#減速',
		related: ['Prone', 'Immobilized', 'Condition'],
	},
	Afflicted: {
		summary: '持續受到指定傷害；戰鬥中在自己輪次結束時結算。不同折磨效果可同時存在並分別結算。',
		target: conditions + '#折磨',
		related: ['Damage', 'Turn', 'Condition'],
		requireOriginal: true,
	},
	Determined: {
		summary: '檢定失敗後，可為結果增加一個機遇；使用後移除堅定狀態。',
		target: conditions + '#堅定',
		related: ['Opportunity', 'Condition'],
		requireOriginal: true,
	},
	Brace: {
		summary: '花費一個行動躲在附近掩護後，使適用的來襲攻擊獲得劣勢。攻擊或移動會結束好處。',
		target: combat + '#架防-1行動',
		related: ['Action', 'Disadvantage', 'Prone'],
		requireOriginal: true,
	},
	Disengage: {
		summary: '花費一個行動小心移動 5 呎，這段移動不觸發反擊機會。',
		target: combat + '#脫離-1行動',
		related: ['Reactive Strike', 'Action', 'Reach'],
		requireOriginal: true,
	},
	'Gain Advantage': {
		summary: '以合適技能對抗目標防禦。成功後，下一次以不同技能對該目標進行的檢定獲得優勢。',
		target: combat + '#獲取優勢-1行動',
		related: ['Advantage', 'Action', 'Difficulty Class'],
	},
	Grapple: {
		summary: '花費兩個行動，以運動對抗觸及範圍內角色的實體防禦；成功時使對方受到束縛。',
		target: combat + '#擒抱-2行動',
		related: ['Restrained', 'Reach', 'Shove'],
	},
	Ready: {
		summary: '先支付預備及所選行動的成本，等待指定條件發生，在下個輪次開始前依觸發條件行動。',
		target: combat + '#預備-1行動',
		related: ['Action', 'Free Action', 'Turn'],
		requireOriginal: true,
	},
	Recover: {
		summary: '每場景一次，花費兩個行動擲恢復骰，如同完成短休息般恢復生命值或專注點。',
		target: combat + '#恢復-2行動',
		related: ['Recovery Die', 'Short Rest', 'Health', 'Focus'],
		requireOriginal: true,
	},
	Shove: {
		summary: '花費兩個行動，以運動對抗目標的實體防禦；成功時將對方水平推開或拉近 5 呎。',
		target: combat + '#推撞-2行動',
		related: ['Physical Defense', 'Grapple', 'Reach'],
	},
	Strike: {
		summary: '以持用武器或徒手攻擊目標的實體防禦。同輪次可多次使用，但每次須用不同的手。',
		target: combat + '#打擊-1行動',
		related: ['Physical Defense', 'Action', 'Damage'],
		requireOriginal: true,
	},
	Aid: {
		summary: '盟友進行技能檢定前，花費反應與 1 點專注點給予優勢；你必須能合理提供協助。',
		target: combat + '#援助-反應',
		related: ['Reaction', 'Focus', 'Advantage'],
		requireOriginal: true,
	},
	'Avoid Danger': {
		summary: '以反應進行敏捷檢定，嘗試避開環境危險。若危險來自檢定，難度依該結果，否則通常為 15。',
		target: combat + '#閃避危險-反應',
		related: ['Reaction', 'Difficulty Class', 'Dodge'],
	},
	Dodge: {
		summary: '敵人以攻擊選你為目標前，花費反應與 1 點專注點，使該攻擊檢定獲得劣勢。範圍及多目標攻擊不適用。',
		target: combat + '#閃避-反應',
		related: ['Reaction', 'Disadvantage', 'Avoid Danger'],
		requireOriginal: true,
	},
	Drop: {
		summary: '用自由行動放下手中或其他附肢拿著的物品。要在別人的輪次放下物品，須先預備。',
		target: combat + '#放下-自由行動',
		related: ['Free Action', 'Ready', 'Turn'],
		requireOriginal: true,
	},
};
