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

const cosmologyOverview = 'world-guide/cosmology-and-religion/overview/';
const religions = 'world-guide/cosmology-and-religion/major-religions/';
const ashHistory = 'world-guide/history-of-scadrial/era-1-the-world-of-ash/';
const rebirthHistory = 'world-guide/history-of-scadrial/era-2-after-the-catacendre/';

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

	'The Roughs': {
		summary: '依藍戴盆地之外的廣大邊地，遍布礦場、牧場與聚落。當地社群往往自行維持秩序，執法者與犯法者都活躍其中。',
		target: 'world-guide/regions-and-cultures/the-roughs-era-2/#蠻橫區the-roughs第二時代',
		related: ['Elendel Basin', 'koloss-blooded', 'Terris'],
	},
	Urteau: {
		summary: '北方統御區的首府，以乾涸運河形成的街溝聞名。城中貴族街區與擁擠的司卡居所，呈現截然不同的生活。',
		target: 'world-guide/regions-and-cultures/northern-dominance-era-1/#政府',
		related: ['Final Empire', 'skaa', 'House Venture'],
	},
	'Fadrex City': {
		summary: '西方統御區的城市，擁有便利的運河貿易與天然岩石屏障。最後帝國覆亡後，它成為當地新的首府。',
		target: 'world-guide/regions-and-cultures/southern-dominance-era-1/#最後帝國之後-1',
		related: ['Final Empire', 'Lord Ruler', 'Luthadel'],
	},
	Bilming: {
		summary: '依藍戴盆地的重要港都，工業與商業蓬勃。它也是外圍城市反對依藍戴擴張影響力的重要中心。',
		target: 'world-guide/points-of-interest-in-era-2/bilming/#概覽',
		related: ['Elendel', 'Elendel Basin', 'New Seran'],
	},
	'New Seran': {
		summary: '盆地東南方的噴泉之城，建在層層岩石臺地上，溪流與瀑布穿行其間。富裕貴族、學者與工人共同塑造城市生活。',
		target: 'world-guide/points-of-interest-in-era-2/new-seran/#概覽',
		related: ['Elendel Basin', 'Bilming', 'The Roughs'],
	},
	'Pits of Hathsin': {
		summary: '最後帝國的洞穴礦區與勞改營。囚犯在惡劣環境中採礦，泛圖爾家族負責管理這項嚴密保密的作業。',
		target: 'world-guide/points-of-interest-in-era-1/pits-of-hathsin/#概覽',
		related: ['Final Empire', 'House Venture', 'Kelsier'],
	},
	Ghostbloods: {
		summary: '以保護司卡德利亞為宗旨的祕密組織，活動範圍遍及寰宇。成員各有所長，重視內部合作，也嚴守組織情報。',
		target: 'world-guide/allies-and-organizations/ghostbloods-era-2/#宗旨',
		related: ['Scadrial', 'cosmere', 'Worldhopper'],
	},
	'Elendel Constabulary': {
		summary: '依藍戴的主要執法機關，分成八個分區警署。它的管轄權延伸至盆地，與其他城市的警隊時有摩擦。',
		target: 'world-guide/allies-and-organizations/elendel-constabulary-era-2/#組織架構',
		related: ['Elendel', 'Elendel Basin', 'The Roughs'],
	},
	Kelsier: {
		summary: '一名魅力十足的迷霧之子與盜賊團隊領袖。他組織各有所長的夥伴，策畫反抗最後帝國的行動。',
		target: 'world-guide/allies-and-organizations/kelsier-and-his-crew-era-1/#卡西爾的團隊',
		related: ['Mistborn', 'Final Empire', 'Vin'],
	},
	Vin: {
		summary: '在街頭艱難求生的年輕迷霧之子，後來加入卡西爾的團隊。她敏銳謹慎，逐步學習運用自己的金屬技藝。',
		target: 'world-guide/allies-and-organizations/tindwyl-era-1/#第一時代的紋',
		related: ['Mistborn', 'Kelsier', 'Allomancy'],
		requireOriginal: true,
	},
	Sazed: {
		summary: '泰瑞司守護者，也是卡西爾團隊的一員。他珍視歷史與宗教知識，待人溫厚，並以藏金術保存和運用自己的特質。',
		target: 'world-guide/allies-and-organizations/quellion-era-1/#沙賽德第一時代',
		related: ['Terris', 'Keeper', 'Feruchemy'],
	},
	Tindwyl: {
		summary: '研究歷史領袖生平的泰瑞司守護者。她見識深厚、態度嚴謹，擅長從過往人物的事蹟教導領導者。',
		target: 'world-guide/allies-and-organizations/tindwyl-era-1/#_top',
		related: ['Terris', 'Keeper', 'Sazed'],
	},
	'Waxillium Ladrian': {
		summary: '出身依藍戴貴族、曾在蠻橫區執法的雙生師。他結合槍法、鋼鎔金術與鐵藏金術追查案件。',
		target: 'world-guide/allies-and-organizations/waxillium-ladrian-era-2/#曉擊dawnshot',
		related: ['Twinborn', 'Elendel', 'The Roughs'],
	},
	Malwish: {
		summary: '南司卡德利亞的一個國家及其人民，以面具文化和授予科技聞名。飛空艇與特殊金屬裝置讓他們得以跨越遙遠地域。',
		target: 'world-guide/regions-and-cultures/southern-scadrial-era-2/#malwish',
		related: ['Southern Scadrial', 'Medallion', 'ettmetal'],
	},
	'House Venture': {
		summary: '最後帝國最具影響力的貴族大家族之一，在北方統御區擁有世襲領地，並參與帝國重要的貿易與政治。',
		target: eraOne + '#泛圖爾家族',
		related: ['Great Houses', 'Final Empire', 'Urteau'],
	},
	'Great Houses': {
		summary: '最後帝國最有權勢的貴族家族。他們在陸沙德興建城堡，以貿易、聯姻與政治競爭維持地位。',
		target: eraOne + '#大家族',
		related: ['Noble', 'House Venture', 'Luthadel'],
		requireOriginal: true,
	},
	'Well of Ascension': {
		summary: '與泰瑞司傳說及巨大力量相關的神祕所在。它在司卡德利亞的歷史與宗教中占有重要地位。',
		target: 'world-guide/history-of-scadrial/era-1-the-world-of-ash/#昇華之井',
		related: ['Preservation', 'Lord Ruler', 'Terris'],
	},
	Noble: {
		summary: '最後帝國的統治階級，享有司卡欠缺的權利與資源。貴族家族透過血緣、財富與政治關係維持影響力。',
		target: cultures + '#貴族',
		related: ['Great Houses', 'skaa', 'Final Empire'],
		requireOriginal: true,
	},
	Adonalsium: {
		summary: '寰宇的創世之力，也是所有授予的源頭。祂的力量後來分成十六股碎力。',
		target: cosmologyOverview + '#雅多納西adonalsium',
		related: ['Shattering of Adonalsium', 'Shard', 'Investiture'],
	},
	'Shattering of Adonalsium': {
		summary: '寰宇歷史上的轉折。雅多納西被一群密謀者擊敗，創世之力分成十六股各有不同本質的碎力。',
		target: cosmologyOverview + '#雅多納西碎裂shattering-of-adonalsium',
		related: ['Adonalsium', 'Shard', 'cosmere'],
	},
	Ascension: {
		summary: '凡人取得碎力時所經歷的轉變，身體被吸收，心智隨著力量擴展。',
		target: cosmologyOverview + '#昇華',
		related: ['Shard', 'Sliver'],
	requireOriginal: true,
	},
	Sliver: {
		summary: '曾持有碎力之力的人。即使已經交出力量，這段經歷仍會永久改變其靈魂。',
		target: cosmologyOverview + '#殘體',
		related: ['Ascension', 'Shard', 'Lord Ruler'],
	requireOriginal: true,
	},
	Survivorism: {
		summary: '尊卡西爾為倖存者的信仰，以活下去為核心，也重視獨立思考與質疑權威。',
		target: religions + '#倖存者教會',
		related: ['Church of the Survivor', 'Kelsier'],
	},
	'Church of the Survivor': {
		summary: '崇敬卡西爾的宗教組織，起源於最後帝國末年。到了第二時代，教會已遍及依藍戴盆地。',
		target: religions + '#倖存者教會',
		related: ['Survivorism', 'Kelsier', 'Elendel Basin'],
	},
	Sliverism: {
		summary: '由前聖務官在落灰之終後創立的宗教，尊統御主為抵禦滅絕的捍衛者，也重視為社群服務。',
		target: religions + '#碎刺教-第二時代',
		related: ['Lord Ruler', 'obligator', 'Sliver'],
	},
	'the Path': {
		summary: '落灰之終後出現的司卡德利亞信仰。道徒重視與和諧的個人連結，並以行善與自省實踐信仰。',
		target: religions + '#道教-第二時代',
		related: ['Harmony', 'Words of Founding'],
	},
	Trelagism: {
		summary: 'Nelazan 人的古老信仰，以代表星辰與太陽的兩位手足神祇為中心，尤其崇敬以星辰為眼的 Trell。',
		target: religions + '#trelagismnelazan人的宗教',
		related: ['Trellism', 'Words of Founding'],
	},
	Trellism: {
		summary: '第二時代由「組織」創立的信仰。它重視獨立自主、膽識與實踐遠大目標，沒有祭司和神殿。',
		target: religions + '#trellism自主的宗教-第二時代',
		related: ['Trelagism', 'The Set'],
	},
	obligator: {
		summary: '鋼鐵教廷的官員，兼任祭司、行政人員或法律專家，在各統御區執行統御主的政策。',
		target: ashHistory + '#根深蒂固的官僚體系',
		related: ['Steel Ministry', 'Canton', 'Lord Ruler'],
	},
	Canton: {
		summary: '鋼鐵教廷的分支。不同聖務廷各管一類事務，教廷將聖務官派到各廷維持最後帝國的統治。',
		target: ashHistory + '#根深蒂固的官僚體系',
		related: ['obligator', 'Steel Ministry'],
	},
	'Words of Founding': {
		summary: '和諧留給落灰之終倖存者的一套書，記錄歷史、古代信仰與和諧累積的知識，也提供重建文明的指引。',
		target: rebirthHistory + '#形塑文明',
		related: ['Harmony', 'Catacendre', 'Originators'],
	},
	Worldbringer: {
		summary: '早於最後帝國的泰瑞司知識傳承者，保存古老信仰與預言。後來的守護者延續了他們保存知識的志業。',
		target: ashHistory + '#守護者教團',
		related: ['Terris', 'Keeper'],
	},
	Preservers: {
		summary: '第二時代對紋、沙賽德、卡西爾及團隊其他成員的集體稱號。他們的事蹟影響依藍戴盆地的宗教與政治。',
		target: rebirthHistory + '#依藍戴盆地elendel-basin的建立',
		related: ['Originators', 'Kelsier', 'Sazed'],
	},
	Originators: {
		summary: '挺過落灰之終的最後帝國居民。他們在重塑後的依藍戴盆地定居，建立了第二時代的社會。',
		target: rebirthHistory + '#依藍戴盆地elendel-basin的建立',
		related: ['Preservers', 'Elendel Basin', 'Catacendre'],
	requireOriginal: true,
	},
	'The Set': {
		summary: '第二時代由依藍戴貴族創立的祕密團體，在盆地各地設有分部，勢力主要集中在 Bilming。',
		target: rebirthHistory + '#組織the-set',
		related: ['Elendel Basin', 'Bilming', 'Trellism'],
	},
	Worktide: {
		summary: '南方統御區的司卡每年兩次在種植園與碼頭間遷徙換工。途中露營與歡聚，是強迫勞動之間難得的喘息。',
		target: 'world-guide/regions-and-cultures/southern-dominance-era-1/#季節性勞工',
		related: ['skaa', 'Final Empire'],
	},
};
