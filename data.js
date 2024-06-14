
var c /*content*/ = [
	{
		name: "Jefferson",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/3/0/Main%20Index/Portraits/55.tif.mSecwe7jMVNB6c1hQA0A.mcwa0iqVzN.jpg",
		policies: [0, 1],
		news: [0, 1]
	},
	{
		name: "Madison",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/a/F/Main%20Index/Portraits/24.tif.mSfv1PLjMVtJ6c1hQA0A.SZxQheNkhi.jpg",
		policies: [2],
		news: [2, 3]
	},
	{
		name: "Monroe",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/N/T/Main%20Index/Portraits/31.tif.mSeIkvrjMf856c1hQA0A.5CIVoAnCw1.jpg",
		policies: [3, 4],
		news: [4, 5]
	},
	{
		name: "Adams",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/g/V/Main%20Index/Presidents/John%20Quincy%20Adams/33.tif.mSfhm_zjMa0PL-lhQA0A.izNOegqtT0.jpg",
		policies: [5],
		news: [6]
	},
	{
		name: "Jackson",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/O/q/Main%20Index/Presidents/Andrew%20Jackson/4.tif.mSfNr_TjMbXXIethQA0A.DAB1KbWBnC.jpg",
		policies: [6, 7],
		news: [7, 8]
	},
	{
		name: "Van Buren",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/f/T/Main%20Index/Presidents/Martin%20Van%20Buren/40.tif.mSfI6fvjMb8PL-lhQA0A.hFSSWTVB4M.jpg",
		policies: [8, 9],
		news: [9]
	},
	{
		name: "Harrison",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/b/Y/Main%20Index/Portraits/60.tif.mSeJ-vbjMSk76c1hQA0A._k2Gg7Z45K.jpg",
		policies: [],
		news: [10]
	},
	{
		name: "Tyler",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/-/M/Main%20Index/Presidents/John%20Tyler/659.tif.mSe0h_LjMZUTL-lhQA0A.4iE0pgb0Za.jpg",
		policies: [10, 11],
		news: [11]
	},
	{
		name: "Polk",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/_/L/Main%20Index/Portraits/30.tif.mSfyoPzjMQE76c1hQA0A.LfJIRKpqKe.jpg",
		policies: [12, 13],
		news: [12]
	},
	{
		name: "Taylor",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/b/s/Main%20Index/Portraits/64.tif.mSfg-fDjMRc76c1hQA0A.mtYdM-dDaI.jpg",
		policies: [],
		news: [13]
	},
	{
		name: "Fillmore",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/E/v/Main%20Index/Portraits/38.tif.mSem1_PjMU1J6c1hQA0A.3HUrO_FS5V.jpg",
		policies: [14],
		news: [14, 15]
	},
	{
		name: "Pierce",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/W/9/Main%20Index/Portraits/14.tif.mSewnPXjMQNH6c1hQA0A.0i3mfa-3mN.jpg",
		policies: [15],
		news: [16, 17, 18]
	},
	{
		name: "Buchanon",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/X/K/Main%20Index/Portraits/122.tif.mSedlvTjMc856c1hQA0A.81-trc56vp.jpg",
		policies: [16],
		news: [19]
	},
	{
		name: "Lincoln",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/R/q/Main%20Index/Portraits/5.tif.mSfCkv3jMS1H6c1hQA0A.cqW8KHu9Um.jpg",
		policies: [17],
		news: [20]
	}
]





// north power, southern power, southern resistance
var p /*policies*/ = [
	{
	 	title: "Do you approve the purchase of the Lousiana territory?",
	 	content: "The Lousiana territory, owned by France, is being offered to the United States for a price of $15 million. The French, with their ongoing revolution, are looking for some quick cash. It would be instrumental in future growth of the United States by doubling total U.S lands and setting pace for future land grabs, but it might raise questions about slavery in new territories.",
	 	yes: [0,0,0, "You made the right choice! All this new territory will help the U.S. grow & expand", "louisiana", 1],
	 	no: [0,0,0, "The young nation has already been through a lot. You chose right by taking it easy"],
		prerequisite: []
	},
	{
		title: "Do you support the end of transatlantic slave trade?",
		content: "In 1807, Congress passed a bill that would put an end to the importation of slaves, following prescedent in the Constitution. Domestic slavery would be allowed to continue. It would be a step in the right direction, but it will not put and end to the question of slavery.",
		yes: [1,0,1, "Slave importation is no more! The North and South are both happy campers. The North feels good about themselves, while the South still has a prosperous internal slave trade."],
		no: [0,1,0, "Although slave trade still exists, it is a dying industry. A saturated American market means that less imports are required every year."],
		prerequisite: []
	},
	{
		title: "Do you want to declare war on Britain in reponse to their naval aggression?",
		content: "Britain, fighting an ongoing war with France, has been capturing American sailors and forcing them to fight for them. Congress would like to declare war against Britain for the impressment, but it could be risky. The U.S. would have to fight the worlds greatest naval power on land and sea.",
		yes: [1,1,0, "The U.S. fought well, but the power of Britain was too much. The war of 1812, as it became known, ended in a draw. On the plus side, the victory at the Battle of New Orleans boosted American pride.", "1812", 1],
		no: [0,0,0, "British impressment ended in 1815 with British victory in the Napoleonic wars. However, now the world knows the U.S. is willing to be pushed around."],
		prerequisite: []
	},
	{
		title: "Do you want to fund infrastructure development proposed by Henry Clay?",
		content: "The American System, proposed by Henry Clay, is a series of legislation that will strengthen connections within the U.S. It consists of protective tariffs, a national bank, and infrastrucutre projects. The infrastructure includes roads and canals.",
		yes: [2,1,-1, "The legislation is working. U.S. agriculture and insutrial strength is continuing to grow and prosper through the better trade systems."],
		no: [-1,-1,0, "You probably should\'ve supported the American System. The U.S. economy is growing more slowly than other nations, putting its future at risk."],
		prerequisite: []
	},
	{
		title: "Would you like to admit Missouri as a slave state (Y) or as a free state (N)?",
		content: "Previous agreements, like the Northwest Ordinance, limited slavery in territories north of the Ohio river. Questions are rising over whether states coming out of the Lousiana territory will be free or slave states. This decision could have a lot of future impact by setting prescedent for whether new states will be slave owning or free.",
		yes: [0,1,1, "In the Compromise of 1820, Missouri was admitted as a slave state. The rest of the Lousiana territory was split into slave and free territories. Land north of the 36th parallel will be free, while those south of it will be slave owning.", "missouri", 1],
		no: [1,0,2, "In the Compromise of 1819, Missouri was admitted as a free state. When other states enter the Union from the Lousiana territory, their status will be left up to popular sovereignty: when being admitted, they will chose whether to be free or not."],
		prerequisite: ["louisiana", 1]
	},
	{
		title: "Do you want to implement a series of proposed Tariffs?",
		content: "This series of taxes is in a package called the Tariff of 1828. It is a protective tariff that would increase the taxes on imported goods.",
		yes: [1,0,1, "The Tariff of 1828 became known as the Tariff of Abominations in the South. The tariff heavily benefited industrial growth, but it crippled the agrarian South with high prices.", "1828", 1],
		no: [0,0,0, "The U.S. continues to steadily grow its economy, becoming more self-sufficient. The South produces goods for northern factories, and the North produces goods used on southern farms."],
		prerequisite: []
	},
	{
		title: "Do you want to pass the Force Bill, forcing states to enforce federal tariffs?",
		content: "South Carolina, in response to the Tariff of 1828, refused to enforce the law. They are nullifying the law. The Force Bill would authorize military action to enforce the federal law, proving the power of the federal government over that of the state.",
		yes: [2,0,1, "The Nullification crisis ended in peaceful legislation, but it is a testimate to Southern resistance to federal power."],
		no: [-1,1,0, "The South is emboldened by the federal government\'s appeasement. Be careful in the future, this could get ugly."],
		prerequisite: ["1828", 1]
	},
	{
		title: "Do you support the South in implementing stricter slave codes?",
		content: "In Southamptom county, Virginia, a slave named Nat Turner led a rebellion, leading to dozens of deaths. Though supressed, it incited fear among many slave owners. They are calling for harsher codes to prevent a similar event from happening again.",
		yes: [0,1,-1, "Tensions in the South are easing after all the new slave codes."],
		no: [0,1,0, "Though you did not support them at a federal level, the South implemented harsher codes anyways. Fear in white communities continues to grow."],
		prerequisite: []
	},
	{
		title: "Do you want to swing the Supreme Court in favor of freeing those onboard the La Amistad slave ship?",
		content: "A slave ship traveling from Havana, Cuba was overthrown by its passengers and sailed to New York City. Now on U.S. land, they are demanding that they be treated as freedman.",
		yes: [1,0,0, "The Court ruled in favor of the enslaved passengers. They were declared illegally enslaved and are now free. While support in the North is heavy, it controversial in the South."],
		no: [0,1,0, "The Court ruled that they illegally overthrew the ship. They were handed over the their captors and returned to Cuba. The North is outraged, while the South quietly agrees."],
		prerequisite: []
	},
	{
		title: "Do you want to send Sam Houston to Texas to fight for Texan indepndence?",
		content: "In decades prior, many American settlers have made home in Texas. They have recently revoluted against Mexico, who has claims over the land. Sending support to American settlers would help hasten Texan independence, but it would spark conflict with Mexico.",
		yes: [0,0,0, "Sam Houston was able to overpower Santa Anna\'s army in the Battle of San Jacinto. The soldiers were heard crying \"Remeber the Alamo!\"", "texasfree", 1],
		no: [0,0,0, "The revolution in Texas was fought hard, but without a strong military leadership, the rebellion fell apart"],
		prerequisite: ["louisiana", 1]
	},
	{
		title: "Do you approve of the Webster-Ashburton Treaty?",
		content: "The Webster-Ashburton treaty was negotiated to solve border disputed between the U.S. and British North America. This treaty would ease relations between the U.S. and Britain.",
		yes: [0,0,0, "The treaty was successful, and relations with Britain continue to grow. The treaty further solidified the U.S. boundaries."],
		no: [-1,0,0, "Britain sent a militia into the disputed territory, and war broke out between the U.S. and Britain. The war, known as the Battles for Superior, ended in a draw. Diplomatic relations led to an agreeable boundary for both sides, but thousands of lives were lost." ],
		prerequisite: ["louisiana", 1]
	},
	{
		title: "Do you support an increase in immigration quotas in response to events in Europe?",
		content: "The Irish Potato famine has led to mass starvation and hardship in Ireland. In response, a large number of Irish are seeking refuge in the United States.",
		yes: [1,0,0, "Many of the Irish are moving to dense urban centers, fostering an increase in urbanization, as well as cheap labor."],
		no: [0,0,0, "Life goes on as normal. The Irish have begun to find refuge in Canada instead."],
		prerequisite: []
	},
	{
		title: "Do you want to annex Texas into the United States?",
		content: "After gaining independence from Mexico, the Republic of Texas is seeking to join the Union. It is currently a very popular policy, with ideas about Manifest Destiny circulating the U.S.",
		yes: [0,0,0, "Texas has joined the Union! However, it led to a border dispute and an ensuing war. The Mexican-American war ended in U.S. victory, as well as the cession of massive amounts of land. The question of slavery in these new lands might cause a lot of conflict as it did with the Lousiana Purchase.", "texas", 1],
		no: [0,0,0, "Though the Republic of Texas is salty about it, it remains an independent Republic. Manifest Destiny is no more."],
		prerequisite: ["texasfree", 1]
	},
	{
		title: "Do you want to negotiate with Britain on the Oregon territory?",
		content: "The Oregon treaty is a disputed land between the U.S. and Britain. The border between the countries to the east is at the 49th parallel. A treaty would aim to extend this parallel to the coast.",
		yes: [0,0,0, "Polk famously claimed 54\'40 or fight. This aggressive ask from Britain led to a calm negotiation at the 49th parellel, as originally intended."],
		no: [0,0,0, "Britain continued to pressure for the treaty. The U.S., not wanting to start another war, obligated. The border was established at the 49th parallel."],
		prerequisite: ["texas", 1]
	},
	{
		title: "Do you support slavery friendly legislation in a compromise to admit California as a free state?",
		content: "California is seeking to be admitted as a state to the Union; however, it would disrupt the balance of free and slave states. A compromise, containing 5 seperate bills, is being discussed as a way to keep balance. The legislation would include a harsh fugitive slave law and the right to self determination for future states.",
		yes: [0,1,0, "California has joined the Union. The fugitive slave law has angered the North because it establishes a national presence of treating enslaved people as property despite slavery being outlawed in the North."],
		no: [0,0,2, "California has joined the Union, but the South is in uproar. Without enough compromise, the South is threatening to secede from the Union."],
		prerequisite: ["texas", 1]
	},
	{
		title: "Do you support popular sovereignty in the Kansas and Nebraska territories?",
		content: "Though above the 36th parallel established in the Missouri Compromise, southern politicians are pushing for popular sovereignty in these territories, allowing its constituants to decide the status of the state. Such a decision would repeal the Missouri Compromise and may cause heated tensions.",
		yes: [0,1,1, "Popular sovereignty has torn apart the territory. The land has experienced a number of violent conflicts as a result of tensions between pro and anti slavery factions that settled the land.", "kansas", 1],
		no: [1,0,1, "Following existing prescedent under the Missouri Compromise, the Kansas and Nebraska territories will remain as free states. The South, though, is upset because the balance of free to slave states will shift in favor of free states."],
		prerequisite: ["louisiana", 1]
	},
	{
		title: "Do you support Scott (Y) or Sandford (N) in the Supreme Court?",
		content: "Dred Scott, an enslaved person owned by Sandford was traveling in free territories when Sandford died. Scott declared himself a freed man, but Sandford\'s wife claimed otherwise. They are currently in court trying to fight for ownership of Scott.",
		yes: [1,0,1, "Scott is now a free man. The court ruled that since he was in free territory for an extended amount of time, he is declared free. While the North celebrates the decision, the South is angry."],
		no: [0,1,0, "The court ruled that African Americans were not U.S. citizens, and did not have the right to sue in court. Scott was declared in posession of Sandford. The South was emboldened by this decision, while the North was angry."],
		prerequisite: []
	},
	{
		title: "Do you want to fight to preserve the Union?",
		content: "After Lincoln\'s election, 7 southern states seceded from the Union. There is no prescedent or language in the Constitution that you can use as guidance. You must choose whether to fight for the Union or not.",
		yes: [0,0,0, "Lincoln thought the war would be over quickly, but it is dragging on longer than he thought. Support is starting to wane in the North. His Anaconda plan is slowly working, but it might not be in time. Lincoln might be voted out of office in the upcoming election", "fight", 1],
		no: [0,0,0, "The country has been split in two. The United States of America is slave free, while the Confederate States of America is built upon the institution of slavery."],
		prerequisite: []
	}
];





var n /*news*/ = [
	{
		title: "1803 | Supreme Court Asserts Dominance",
		content: "The Supreme Court ruled in a 4-0 decision against William Marbury, saying he does not get a spot on the ciruit court. This decision asserted the court\'s right to review and nullify the law it finds unconstitutional",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "1805 | War is Won in Tripoli",
		content: "The war against the Barbary Pirates, started after the U.S. refused to pay tribute, has finally been won. American transatlantic merchants can now trade without fear of being attacked.",
		result: [1, 1, 0],
		prerequisite: []
	},
	{
		title: "1814 | U.S. Capital Burned to The Ground",
		content: "British troops invaded and burned Washington D.C. to the ground, including the White House. This is a critical moment for the country, as it must rebuild and become stronger against further defenses.",
		result: [0, 0, -1],
		prerequisite: ["1812", 1]
	},
	{
		title: "1815 | Federalists Embarass Themselves in Hartford",
		content: "The Federalists convene at the Hartford Convention to discuss an end to the war of 1812, as well as amendments to lessen federal power. It was viewed as betrayal to the country, undermining Federalist power for decades.",
		result: [-1, 0, 0],
		prerequisite: ["1812", 1]
	},
	{
		title: "1819 | Court Supports Federal Authority",
		content: "The Supreme Court ruled in McCulloch v. Maryland that states cannot tax the national bank. The court held that Congress has implied powers through the \"Necessary and Proper\" clause.",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "1819 | United States Reaches the Gulf",
		content: "The Floridan peninsula has been ceded by Spain to the United States. This marks a continued expansion of the country, as well highlighting the growing power of the U.S. to negotiate with world powers.",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "1825 | Religious Movement Sweeps Nation",
		content: "Rivivalist Charles Finney sparks widespread social reform. The religious rivival characterized by the Second Great Awakening accompanies a strengthened popularity for abolition, women\'s right, and temperance.",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "1830 | Natives Forced to Retreat",
		content: "Jackson forces the relocation of Native Tribes to lands west of the Mississippi River. These tribes will have to walk thousands of miles from their home lands.",
		result: [0, 0, 0],
		prerequisite: ["louisiana", 1]
	},
	{
		title: "1833 | National Bank is No More",
		content: "The 2nd national bank has been dismantled. All funds have been withdrawn and placed into private banks.",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "1838 | Grimke Claims the Equality of Women",
		content: "Sarah Grimke\'s publication, Letters on the Equality of the Sexes and the Condition of Woman, has sparked heated nationwide debates on the role and rights of women.",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "1841 | Harrison Dead! Tyler Assumes Office",
		content: "Just a month into his term, William Harrison died of pneumonia. John Tyler, his vice president, has been sworn in as the new president.",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "1842 | Is God Within Each of Us?",
		content: "A movement known as transcendentalism is growing in New England. The movement believes in God\'s prescence in each one of us. Through God\'s will, society can accomplish great goods and unity.",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "1848 | U.S. Stretches Coast to Coast",
		content: "After the Mexican-American war, the U.S. paid $15 million to acquire new lands. These lands contributed over 500,000 miles to the U.S., sparking new debates over slavery",
		result: [0, 0, 1],
		prerequisite: ["texas", 1]
	},
	{
		title: "1849 | Gold Discovered in California",
		content: "The discovery of gold in California has sparked mass migration to the territory. Thousands flock in search of wealth, including many Asian immigrants.",
		result: [1, 0, 0],
		prerequisite: ["texas", 1]
	},
	{
		title: "1853 | Book Sparks Debates Over Slavery",
		content: "The book, Uncle Tom\'s Cabin, depicts the harsh realities of slavery, which much of the North was unaware of. It is sparking a stronger, more empathetic abolition movement in the North.",
		result: [0, 0, 1],
		prerequisite: []
	},
	{
		title: "1853 | Japan Opens to Trade",
		content: "An expedition to Japan led by Commodore Matthew Perry has forced the country to open to trade after centuries of isolation.",
		result: [0, 0, 0],
		prerequisite: ["texas", 1]
	},
	{
		title: "1856 | Kansas Town Attacked",
		content: "The town of Lawrence, Kansas was sacked by pro-slavery forces. Kansas is seeing a rise in tensions over the popular sovereignty decision.",
		result: [0, 0, 1],
		prerequisite: ["kansas", 1]
	},
	{
		title: "1856 | Five Killed by Abolitionist",
		content: "Abolitionist John Brown, trying to strike fear in pro-slavery Kansas settlers, led a raid, killing 5 slavery sympathizers. Worries over further violent conflicts are growing.",
		result: [0, 0, 1],
		prerequisite: ["kansas", 1]
	},
	{
		title: "1856 | Congressional Hearing Turns Violent",
		content: "Representative Preston Brooks attacks Senator Charles Sumner with his cane on the Senate floor in response to Sumner\'s anti-slavery remarks.",
		result: [0, 0, 1],
		prerequisite: []
	},
	{
		title: "1860 | Hail Mary Fails in Congress",
		content: "A compromise proposed by John Crittenden attempted to extend the Missouri Compromise line to the Pacific. Northern politicians refused to expand slavery, while southern politicians say it\'s not enough.",
		result: [0, 0, 1],
		prerequisite: ["texas", 1]
	},
	{
		title: "1860 | South Declares Independence",
		content: "With the rising sectional tensions, and fear over Lincoln pushing for abolition, 7 states have seceded from the United States.",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "",
		content: "",
		result: [0, 0, 0],
		prerequisite: []
	}
]






var s /*stats*/ = {
	north: 5,
	south: 5,
	resistance: 0
}

var d /*data*/ = {
	president: -1,
	policy: 0,
	"louisiana": 0,
	"1812": 0,
	"missouri": 0,
	"1828": 0,
	"texasfree": 0,
	"texas": 0,
	"kansas": 0,
	"fight": 0,
	"unite": 0
}
