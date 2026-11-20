const arts = 'handbook/metallic-arts/overview/';
const powers = 'handbook/metalborn-paths/overview/';
const twinborn = 'handbook/metalborn-paths/twinborn/';
const hemalurgy = 'handbook/metallic-arts/hemalurgy/#血金術hemalurgy';
const technology = 'world-guide/the-world/harmonys-world-era-2/';

const paths = 'handbook/metalborn-paths/overview/';
const allomancy = (metal: string, section: string) => `handbook/metallic-arts/${metal}-allomancy/#${section}`;

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
	'Lurcher': {
		summary: '燃燒鐵的鎔金術師，能用鐵拉牽引附近的金屬，也能藉固定的金屬物體拉動自己。',
		target: allomancy('iron', '鐵鎔金術iron-allomancy'),
		related: ['Ironpull', 'Coinshot', 'Misting'],
	},
	'Coinshot': {
		summary: '燃燒鋼的鎔金術師，能將附近金屬推開，常用小型金屬物件作為投射物。',
		target: allomancy('steel', '鋼鎔金術steel-allomancy'),
		related: ['Steelpush', 'Lurcher', 'Misting'],
	},
	'Tineye': {
		summary: '燃燒錫的鎔金術師，能強化視覺、聽覺等感官，常擔任守衛或斥候。',
		target: allomancy('tin', '錫鎔金術tin-allomancy'),
		related: ['Allomancy', 'Misting'],
	},
	'Pewterarm': {
		summary: '燃燒白鑞的鎔金術師，能強化力量、速度與體質。',
		target: allomancy('pewter', '白鑞鎔金術pewter-allomancy'),
		related: ['Allomancy', 'Misting', 'Grapple'],
	},
	'Rioter': {
		summary: '燃燒鋅的鎔金術師，能加強他人既有的情緒。',
		target: allomancy('zinc', '鋅鎔金術zinc-allomancy'),
		related: ['Emotional Allomancy', 'Soother'],
	},
	'Soother': {
		summary: '燃燒黃銅的鎔金術師，能壓低他人既有的情緒。',
		target: allomancy('brass', '黃銅鎔金術brass-allomancy'),
		related: ['Emotional Allomancy', 'Rioter'],
	},
	'Seeker': {
		summary: '燃燒青銅的鎔金術師，能感知動態授予的脈動，例如附近有人正在燃燒金屬。',
		target: allomancy('bronze', '青銅鎔金術bronze-allomancy'),
		related: ['Kinetic Investiture', 'Smoker'],
	},
	'Smoker': {
		summary: '燃燒紅銅的鎔金術師，能用紅銅雲遮蔽他人對範圍內授予活動的偵測。',
		target: allomancy('copper', '紅銅鎔金術copper-allomancy'),
		related: ['Coppercloud', 'Seeker'],
	},
	'Slider': {
		summary: '燃燒彎管合金的鎔金術師，可以形成讓時間加快的速度圈。',
		target: allomancy('bendalloy', '彎管合金鎔金術bendalloy-allomancy'),
		related: ['Time Bubble', 'Pulser'],
		requireOriginal: true,
	},
	'Pulser': {
		summary: '燃燒鎘的鎔金術師，可以形成讓時間減慢的速度圈。',
		target: allomancy('cadmium', '鎘鎔金術cadmium-allomancy'),
		related: ['Time Bubble', 'Slider'],
		requireOriginal: true,
	},
	'Leecher': {
		summary: '燃燒鉻的鎔金術師，可以透過接觸耗盡目標的授予儲備。',
		target: allomancy('chromium', '鉻鎔金術chromium-allomancy'),
		related: ['Investiture', 'Nicroburst'],
		requireOriginal: true,
	},
	'Nicroburst': {
		summary: '燃燒鎳鉻的鎔金術師，能透過接觸使目標正在使用的授予能力瞬間爆發，耗盡儲備。',
		target: allomancy('nicrosil', '鎳鉻鎔金術nicrosil-allomancy'),
		related: ['Investiture', 'Leecher'],
	},
	'Oracle': {
		summary: '燃燒電金的鎔金術師，能看見自己的行動在接下來幾秒可能如何發展。',
		target: allomancy('electrum', '電金鎔金術electrum-allomancy'),
		related: ['Seer', 'Augur'],
		requireOriginal: true,
	},
	'Augur': {
		summary: '燃燒金的鎔金術師，能窺見自己若曾做出不同選擇，可能成為什麼樣的人。',
		target: allomancy('gold', '金鎔金術gold-allomancy'),
		related: ['Oracle', 'Misting'],
	},
	'Seer': {
		summary: '燃燒天金的迷霧人，能藉天金影子預見周遭幾秒內可能發生的變化。',
		target: allomancy('atium', '天金鎔金術atium-allomancy'),
		related: ['Atium Shadow', 'Oracle'],
		requireOriginal: true,
	},
	'Aluminum Gnat': {
		summary: '燃燒鋁的迷霧人。燃燒鋁會清空自身金屬儲備。',
		target: allomancy('aluminum', '鋁鎔金術aluminum-allomancy'),
		related: ['Metal Reserve', 'Duralumin Gnat'],
	},
	'Duralumin Gnat': {
		summary: '燃燒硬鋁的迷霧人。硬鋁能讓另一項授予能力爆發，前提是使用者也能施展那項能力。',
		target: allomancy('duralumin', '硬鋁鎔金術duralumin-allomancy'),
		related: ['Aluminum Gnat', 'Investiture'],
	},
	'Metal Vial': {
		summary: '裝有可吞服的金屬碎屑與液體的小瓶。鎔金術師會用它補充金屬儲備。',
		target: 'handbook/items/metal-vials/#金屬瓶metal-vials',
		related: ['Drink Vial', 'Metal Reserve', 'Rare Metal Vial'],
	},
	'Rare Metal Vial': {
		summary: '含稀有鎔金金屬的小瓶。這類金屬通常要另外取得，可查裝備章的價格表。',
		target: 'handbook/items/metal-vials/#稀有金屬瓶',
		related: ['Metal Vial', 'Drink Vial'],
	},
	'Metal Reserve': {
		summary: '鎔金術師吞下、可供之後燃燒的金屬。金屬種類會影響你目前可以使用哪些能力。',
		target: powers + '#補充金屬儲備',
		related: ['Metal Vial', 'Drink Vial', 'Depleted'],
	},
	Flare: {
		summary: '短時間猛烈燃燒金屬，讓鎔金能力以更強的效果發動，同時快速消耗儲備。',
		target: powers + '#花費授予',
		related: ['Metal Reserve', 'Investiture', 'Allomantic Savant'],
	},
	'Allomantic Savant': {
		summary: '經年累月頻繁或持續驟燒金屬而改變自身的鎔金術師。停止燃燒這種金屬時，可能出現戒斷反應。',
		target: 'handbook/metalborn-paths/misting/',
		related: ['Flare', 'Misting'],
	},
	'Nascent Power': {
		summary: '金屬技藝在受訓前能展現的初步能力，通常只有輕微的敘事效果。完整能力的取得方式見金屬之子路徑。',
		target: arts + '#初萌能力nascent-power',
		related: ['Metallic Art Power', 'Key Talent'],
	},
	Steelpush: {
		summary: '鋼鎔金術將金屬物件往遠離自己的方向推。雙方的體型與重量會影響哪一方移動。',
		target: allomancy('steel', '鋼推'),
		related: ['Coinshot', 'Ironpull', 'Forced Movement'],
	},
	Ironpull: {
		summary: '鐵鎔金術將金屬物件往自己的方向拉。雙方的體型與重量會影響你拉動物件，還是被拉向物件。',
		target: allomancy('iron', '鐵拉'),
		related: ['Lurcher', 'Steelpush', 'Forced Movement'],
	},
	'Kinetic Investiture': {
		summary: '處於作用中的授予，例如鎔金術師正在燃燒金屬所產生的脈動。搜尋者能透過青銅鎔金術感知。',
		target: allomancy('bronze', '青銅鎔金術bronze-allomancy'),
		related: ['Investiture', 'Seeker', 'Coppercloud'],
	},
	Coppercloud: {
		summary: '紅銅鎔金術形成的無形區域，能讓區域中的授予活動較難被偵測。',
		target: allomancy('copper', '紅銅鎔金術copper-allomancy'),
		related: ['Smoker', 'Seeker', 'Kinetic Investiture'],
	},
	'Emotional Allomancy': {
		summary: '以黃銅減弱情緒，或以鋅加強情緒的鎔金技藝。這些能力的基本用途是影響情緒強弱。',
		target: allomancy('brass', '黃銅鎔金術brass-allomancy'),
		related: ['Rioter', 'Soother', 'Coppercloud'],
	},
	'Time Bubble': {
		summary: '改變一塊區域時間流速的鎔金效果。鎘使圈內時間減慢，彎管合金則使圈內時間加快。',
		target: allomancy('bendalloy', '彎管合金鎔金術bendalloy-allomancy'),
		related: ['Slider', 'Pulser', 'Area Effect'],
	},
	'Atium Shadow': {
		summary: '燃燒天金時所見的影像，顯示視線內的人物與物件在下一瞬間可能出現的變化。',
		target: allomancy('atium', '天金鎔金術atium-allomancy'),
		related: ['Seer', 'God Metal', 'Oracle'],
	},
	'Unkeyed Metalmind': {
		summary: '解除使用者綁定的金屬意識庫。具對應藏金能力者可以汲取；儲入新充能會讓它與儲存者綁定。',
		target: 'handbook/goals-and-rewards/goals/#未綁定金屬意識庫',
		related: ['Metalmind', 'Tap', 'Medallion'],
	},
	Excisor: {
		summary: '南司卡德利亞製作藏金術徽章所需的神祕工具，具體用法未公開。',
		target: 'handbook/goals-and-rewards/goals/#藏金術徽章',
		related: ['Medallion', 'Southern Scadrial'],
	},
};
