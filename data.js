
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
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/T/V/Main%20Index/Portraits/31.tif.mSeIqerjMf856c1hQA0A.Cl1OEYWopj.jpg",
		policies: [3, 4],
		news: [4, 5]
	},
	{
		name: "Adams",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/0/Z/Main%20Index/Presidents/John%20Quincy%20Adams/33.tif.mSfhsuzjMa0PL-lhQA0A.hbaBVXhgll.jpg",
		policies: [5],
		news: [6]
	},
	{
		name: "Jackson",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/O/q/Main%20Index/Presidents/Andrew%20Jackson/4.tif.mSfNr_TjMbXXIethQA0A.DAB1KbWBnC.jpg",
		policies: [6, 7],
		news: [7, 8, 9]
	},
	{
		name: "Van Buren",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/m/t/Main%20Index/Presidents/Martin%20Van%20Buren/40.tif.mSfIgOzjMb8PL-lhQA0A.mJzWVJDG4f.jpg",
		policies: [8, 9],
		news: [10]
	},
	{
		name: "Harrison",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/b/Y/Main%20Index/Portraits/60.tif.mSeJ-vbjMSk76c1hQA0A._k2Gg7Z45K.jpg",
		policies: [],
		news: [11]
	},
	{
		name: "Tyler",
		img: "https://library.whitehousehistory.org/fotoweb/cache/v2/-/M/Main%20Index/Presidents/John%20Tyler/659.tif.mSe0h_LjMZUTL-lhQA0A.4iE0pgb0Za.jpg",
		policies: [10, 11],
		news: [13]
	},
	{
		name: "",
		img: "",
		policies: [1],
		news: [1]
	},
	{
		name: "",
		img: "",
		policies: [1],
		news: [1]
	},
	{
		name: "",
		img: "",
		policies: [1],
		news: [1]
	},
	{
		name: "",
		img: "",
		policies: [1],
		news: [1]
	}
]





// north power, southern power, southern resistance
var p /*policies*/ = [
	{
	 	title: "Do you approve the purchase of the Lousiana territory?",
	 	content: "The Lousiana territory, owned by France, is being offered to the United States for a price of $15 million. The French, with their ongoing revolution, are looking for some quick cash. It would be instrumental in future growth of the United States by doubling total U.S lands and setting pace for future land grabs, but it might raise questions about slavery in new territories.",
	 	yes: [0,0,0, "You made the right choice! All this new territory will help the U.S. grow & expand", "lousiana", 1],
	 	no: [0,0,0, "The young nation has already been through a lot. You chose right by taking it easy"],
		prerequisite: []
	},
	{
		title: "Do you support the end of transatlantic slave trade?",
		content: "In 1807, Congress passed a bill that would put an end to the importation of slaves, following prescedent in the Constitution. Domestic slavery would be allowed to continue. It would be a step in the right direction, but it will not put and end to the question of slavery.",
		yes: [0,0,1, "Slave importation is no more! The North and South are both happy campers. The North feels good about themselves, while the South still has a prosperous internal slave trade."],
		no: [0,0.5,0, "Although slave trade still exists, it is a dying industry. A saturated American market means that less imports are required every year."],
		prerequisite: []
	},
	{
		title: "Do you want to declare war on Britain in reponse to their naval aggression?",
		content: "Britain, fighting an ongoing war with France, has been capturing American sailors and forcing them to fight for them. Congress would like to declare war against Britain for the impressment, but it could be risky. The U.S. would have to fight the worlds greatest naval power on land and sea.",
		yes: [0.5,0.5,0, "The U.S. fought well, but the power of Britain was too much. The war of 1812, as it became known, ended in a draw. On the plus side, the victory at the Battle of New Orleans boosted American pride.", "1812", 1],
		no: [0,0,0, "British impressment ended in 1815 with British victory in the Napoleonic wars. However, now the world knows the U.S. is willing to be pushed around."],
		prerequisite: []
	},
	{
		title: "Do you want to fund infrastructure development proposed by Henry Clay?",
		content: "The American System, proposed by Henry Clay, is a series of legislation that will strengthen connections within the U.S. It consists of protective tariffs, a national bank, and infrastrucutre projects. The infrastructure includes roads and canals.",
		yes: [2,1,0, "The legislation is working. U.S. agriculture and insutrial strength is continuing to grow and prosper through the better trade systems."],
		no: [-1,-1,0, "You probably should\'ve supported the American System. The U.S. economy is growing more slowly than other nations, putting its future at risk."],
		prerequisite: []
	},
	{
		title: "Would you like to admit Missouri as a slave state (Y) or as a free state (N)",
		content: "Previous agreements, like the Northwest Ordinance, limited slavery in territories north of the Ohio river. Questions are rising over whether states coming out of the Lousiana territory will be free or slave states. This decision could have a lot of future impact by setting prescedent for whether new states will be slave owning or free.",
		yes: [0,0.5,1, "In the Compromise of 1820, Missouri was admitted as a slave state. The rest of the Lousiana territory was split into slave and free territories. Land north of the 36th parallel will be free, while those south of it will be slave owning.", "missouri", 1],
		no: [0.5,0,1.5, "In the Compromise of 1819, Missouri was admitted as a free state. When other states enter the Union from the Lousiana territory, their status will be left up to popular sovereignty: when being admitted, they will chose whether to be free or not."],
		prerequisite: ["lousiana", 1]
	},
	{
		title: "Do you want to implement a series of proposed Tariffs?",
		content: "This series of taxes is in a package called the Tariff of 1828. It is a protective tariff that would increase the taxes on imported goods.",
		yes: [1,0,0.5, "The Tariff of 1828 became known as the Tariff of Abominations in the South. The tariff heavily benefited industrial growth, but it crippled the agrarian South with high prices.", "1828", 1],
		no: [0,0,0, "The U.S. continues to steadily grow its economy, becoming more self-sufficient. The South produces goods for northern factories, and the North produces goods used on southern farms."],
		prerequisite: []
	},
	{
		title: "Do you want to pass the Force Bill, forcing states to enforce federal tariffs?",
		content: "South Carolina, in response to the Tariff of 1828, refused to enforce the law. They are nullifying the law. The Force Bill would authorize military action to enforce the federal law, proving the power of the federal government over that of the state.",
		yes: [0.5,0,0.5, "The Nullification crisis ended in peaceful legislation, but it is a testimate to Southern resistance to federal power."],
		no: [-1,0.5,0.5, "The South is emboldened by the federal government\'s appeasement. Be careful in the future, this could get ugly."],
		prerequisite: ["1828", 1]
	},
	{
		title: "Do you support the South in implementing stricter slave codes?",
		content: "In Southamptom county, Virginia, a slave named Nat Turner led a rebellion, leading to dozens of deaths. Though supressed, it incited fear among many slave owners. They are calling for harsher codes to prevent a similar event from happening again.",
		yes: [0,0, -0.5, "Tensions in the South are easing after all the new slave codes."],
		no: [0,0,0, "Though you did not support them at a federal level, the South implemented harsher codes anyways. Fear in white communities continues to grow."],
		prerequisite: []
	},
	{
		title: "Do you want to swing the Supreme Court in favor of freeing those onboard the La Amistad slave ship?",
		content: "A slave ship traveling from Havana, Cuba was overthrown by its passengers and sailed to New York City. Now on U.S. land, they are demanding that they be treated as freedman.",
		yes: [0.5,0,0, "The Court ruled in favor of the enslaved passengers. They were declared illegally enslaved and are now free. While support in the North is heavy, it controversial in the South."],
		no: [1,0,0, "The Court ruled that they illegally overthrew the ship. They were handed over the their captors and returned to Cuba. The North is outraged, while the South quietly agrees."],
		prerequisite: []
	},
	{
		title: "Do you want to send Sam Houston to Texas to fight for Texan indepndence?",
		content: "In decades prior, many American settlers have made home in Texas. They have recently revoluted against Mexico, who has claims over the land. Sending support to American settlers would help hasten Texan independence, but it would spark conflict with Mexico.",
		yes: [0,0,0, "Sam Houston was able to overpower Santa Anna\'s army in the Battle of San Jacinto. The soldiers were heard crying \"Remeber the Alamo!\"", "texasfree", 1],
		no: [0,0,0, "The revolution in Texas was fought hard, but without a strong military leadership, the rebellion fell apart"],
		prerequisite: ["lousiana", 1]
	},
	{
		title: "Webster Ashburton",
		content: "",
		yes: [0,0,0, ""],
		no: [0,0,0, ""],
		prerequisite: []
	},
	{
		title: "",
		content: "",
		yes: [0,0,0, ""],
		no: [0,0,0, ""],
		prerequisite: []
	},
	{
		title: "",
		content: "",
		yes: [0,0,0, ""],
		no: [0,0,0, ""],
		prerequisite: []
	},
	{
		title: "",
		content: "",
		yes: [0,0,0, ""],
		no: [0,0,0, ""],
		prerequisite: []
	},
	{
		title: "",
		content: "",
		yes: [0,0,0, ""],
		no: [0,0,0, ""],
		prerequisite: []
	},
	{
		title: "",
		content: "",
		yes: [0,0,0, ""],
		no: [0,0,0, ""],
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
		result: [0, 0, 0],
		prerequisite: ["1812", 1]
	},
	{
		title: "1815 | Federalists Embarass Themselves in Hartford",
		content: "The Federalists convene at the Hartford Convention to discuss an end to the war of 1812, as well as amendments to lessen federal power. It was viewed as betrayal to the country, undermining Federalist power for decades.",
		result: [0, 0, 0],
		prerequisite: ["1812", 1]
	},
	{
		title: "McCulloch v. maryland",
		content: "asdf",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "Adams-Onis Treaty",
		content: "asdf",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "Great Awakening Charles Finney",
		content: "asdf",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "Frederick Douglass North Star",
		content: "asdf",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "Indian Removal Act",
		content: "asdf",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "End of National Bank",
		content: "asdf",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "Grimke Claims the Equality of Women",
		content: "",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "Harrison Dead! Tyler Assumes Office",
		content: "Just a month into his term, William Harrison died of pneumonia. John Tyler, his vice president, has been sworn in as the new president.",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "",
		content: "",
		result: [0, 0, 0],
		prerequisite: []
	},
	{
		title: "",
		content: "",
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
	"lousiana": 0,
	"1812": 0,
	"missouri": 0,
	"1828": 0,
	"texasfree": 0,
	"texas": 0,
	"fight": 0
}