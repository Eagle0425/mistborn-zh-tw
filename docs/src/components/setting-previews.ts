// Keys match glossary.json; targets are verified against the built docs/dist HTML.
type SettingPreview = {
	summary: string;
	target: string;
	related: string[];
	requireOriginal?: boolean;
};

const cultures = 'world-guide/regions-and-cultures/overview/';
const cosmology = 'world-guide/introduction/about-the-cosmere/';
const shards = 'world-guide/cosmology-and-religion/scadrials-shards/';
const eraOne = 'world-guide/regions-and-cultures/lands-of-scadrial-in-era-1/';
const eraTwo = 'world-guide/regions-and-cultures/lands-of-scadrial-in-era-2/';

export const settingPreviews: Record<string, SettingPreview> = {
	Scadrial: {
		summary: '《迷霧之子》故事發生的行星。存留與滅絕共同創造了這個世界，金屬技藝深刻影響著當地的歷史與生活。',
		target: 'world-guide/cosmology-and-religion/overview/#司卡德利亞行星',
		related: ['cosmere', 'Preservation', 'Ruin'],
	},
	'Lord Ruler': {
		summary: '統治最後帝國長達千年的君主，以神明自居，透過貴族與鋼鐵教廷掌控帝國。',
		target: 'world-guide/cosmology-and-religion/the-lord-ruler-era-1/#統御主第一時代',
		related: ['Final Empire', 'Steel Ministry', 'Luthadel'],
	},
	'Final Empire': {
		summary: '統御主建立的政權，將北方領土劃分為十大統御區。貴族掌握權力，多數司卡則遭到奴役。',
		target: eraOne + '#十大統御區',
		related: ['Lord Ruler', 'skaa', 'Luthadel'],
	},
	Luthadel: {
		summary: '最後帝國的首都，也是統御主宮殿與貴族大家族城堡的所在地。城市同時聚集著商業、政治與地下勢力。',
		target: 'world-guide/points-of-interest-in-era-1/luthadel/#概覽',
		related: ['Final Empire', 'Lord Ruler', 'Kredik Shaw'],
	},
	Elendel: {
		summary: '落灰之終後興起的盆地大城，以依藍德命名。到了第二時代，它是北方政治、工業與航運的重要中心。',
		target: 'world-guide/regions-and-cultures/elendel-basin-era-2/#依藍戴',
		related: ['Elendel Basin', 'Catacendre', 'Northern Scadrial'],
	},
	kandra: {
		summary: '能改變身體形貌、模仿其他生物的智慧族群。最後帝國時期常依契約替人類服務，之後逐漸走向不同的生活。',
		target: cultures + '#坎得拉',
		related: ['Hemalurgy', 'Lord Ruler', 'Harmony'],
	},
	Terris: {
		summary: '重視知識、歷史與文化傳承的族群，許多家系傳承藏金術。泰瑞司也用於稱呼其故土與文化。',
		target: cultures + '#泰瑞司',
		related: ['Feruchemy', 'Keeper', 'Terris Dominance'],
		requireOriginal: true,
	},
	koloss: {
		summary: '統御主藉血金術創造的藍膚族群，曾被迫充當帝國軍隊。落灰之終後，他們逐漸建立自己的氏族與傳統。',
		target: cultures + '#克羅司',
		related: ['Hemalurgy', 'koloss-blooded', 'Catacendre'],
	},
	cosmere: {
		summary: '包含司卡德利亞及其他世界的共同宇宙。各世界擁有不同文化與授予之術，也能透過界域旅行彼此往來。',
		target: cosmology + '#關於寰宇cosmere',
		related: ['Scadrial', 'Shard', 'Worldhopper'],
	},
	skaa: {
		summary: '最後帝國中遭統御主奴役的人類群體，與貴族受到不同待遇。落灰之終後，這種身分區分逐漸失去原有意義。',
		target: cultures + '#司卡',
		related: ['Final Empire', 'Lord Ruler', 'Catacendre'],
	},
	'Steel Ministry': {
		summary: '統御主的宗教與統治機構，透過各聖務廷監管帝國事務，並以宗教權威維繫他的統治。',
		target: eraOne + '#十大統御區',
		related: ['Lord Ruler', 'Final Empire', 'Steel Inquisitor'],
	},
	'Steel Inquisitor': {
		summary: '身上植有多根血金術尖刺的強大人物，眼部尖刺是鮮明標誌。最後帝國時期，他們是令人畏懼的追捕者與統御主代理人。',
		target: 'world-guide/cosmology-and-religion/steel-inquisitors-era-1/#第一時代的鋼鐵審判者steel-inquisitors-era-1',
		related: ['Steel Ministry', 'Hemalurgy', 'Lord Ruler'],
	},
	Keeper: {
		summary: '秘密保存並傳授歷史與知識的泰瑞司藏金術師。他們將記憶存入金屬意識庫，讓遭壓制的文化得以延續。',
		target: 'world-guide/regions-and-cultures/terris-dominance-era-1/#泰瑞司守護者',
		related: ['Terris', 'Feruchemy', 'Metalmind'],
		requireOriginal: true,
	},
	Preservation: {
		summary: '與滅絕共同創造司卡德利亞的碎力，傾向維持事物而非改變。鎔金術的力量源自存留。',
		target: shards + '#存留第一時代',
		related: ['Shard', 'Ruin', 'Allomancy'],
		requireOriginal: true,
	},
	Ruin: {
		summary: '代表毀滅、熵增與衰敗的碎力，曾與存留共同創造司卡德利亞。血金術由滅絕的力量驅動。',
		target: shards + '#滅絕第一時代',
		related: ['Shard', 'Preservation', 'Hemalurgy'],
		requireOriginal: true,
	},
	Shard: {
		summary: '雅多納西碎裂後形成的神性力量，通常由持有者承接。每道碎力都有影響其行動傾向的碎旨。',
		target: 'world-guide/cosmology-and-religion/overview/#雅多納西的碎力',
		related: ['Preservation', 'Ruin', 'Harmony'],
		requireOriginal: true,
	},
	'Physical Realm': {
		summary: '粒子、質量與星球等有形事物所在的界域，也是凡人最容易直接感知的現實。',
		target: cosmology + '#實體界',
		related: ['Cognitive Realm', 'Spiritual Realm', 'cosmere'],
	},
	'Cognitive Realm': {
		summary: '事物的思想與意識面向所在的界域。生物與非生物在此都有對應的存在，並非只有人的心智。',
		target: cosmology + '#意識界',
		related: ['Physical Realm', 'Spiritual Realm', 'Worldhopper'],
	},
	'Spiritual Realm': {
		summary: '事物本質所在、超越時空的界域。身分與牽繫等概念在此呈現，而一切存在之物都有靈魂面向。',
		target: cosmology + '#靈魂界',
		related: ['Physical Realm', 'Cognitive Realm', 'cosmere'],
	},
	Worldhopper: {
		summary: '往返寰宇不同世界的旅人，其中有人經營貿易、研究各地力量，或替跨世界組織工作。',
		target: 'world-guide/cosmology-and-religion/other-worlds/#司卡德利亞與躍界者',
		related: ['cosmere', 'Scadrial', 'Cognitive Realm'],
	},
	'Southern Scadrial': {
		summary: '司卡德利亞南方各國所在的地區。落灰之終後的劇烈降溫造成冰殲時代，當地人民後來發展出獨特的授予科技。',
		target: 'world-guide/regions-and-cultures/southern-scadrial-era-2/#南司卡德利亞第二時代',
		related: ['Ice Death', 'Sovereign', 'Northern Scadrial'],
	},
	'Northern Scadrial': {
		summary: '最後帝國及後來依藍戴盆地所在的北方地區。它與南方長期隔絕，雙方在第二時代重新接觸。',
		target: eraTwo + '#北方與南方',
		related: ['Southern Scadrial', 'Final Empire', 'Elendel Basin'],
	},
	'Elendel Basin': {
		summary: '落灰之終後形成的肥沃盆地，依藍戴與多座城市坐落其中。第二時代北方的政治與經濟多圍繞此地發展。',
		target: eraTwo + '#依藍戴盆地',
		related: ['Elendel', 'Catacendre', 'Northern Scadrial'],
	},
	Ashmount: {
		summary: '第一時代不斷噴出火山灰的巨大火山。統御主利用它們改變世界環境，和諧重塑世界時則將其封閉。',
		target: 'world-guide/the-world/metallic-arts/#灰山',
		related: ['Lord Ruler', 'Final Empire', 'Catacendre'],
	},
	'koloss-blooded': {
		summary: '具有克羅司血統、外貌較接近人類的人。他們生來就是克羅司混血，部分人日後選擇接受尖刺成為完整克羅司。',
		target: cultures + '#克羅司混血',
		related: ['koloss', 'Hemalurgy', 'Catacendre'],
	},
	'Terris Dominance': {
		summary: '最後帝國北方的多山凍原，也是泰瑞司人的故鄉。第一時代由鋼鐵教廷直接統治。',
		target: 'handbook/origins/culture/#泰瑞司統御區第一時代',
		related: ['Terris', 'Keeper', 'Steel Ministry'],
	},
};
