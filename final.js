function ending(state) {
	console.log(state);
	var txt;
	var end = ' ';
	switch( state ) {
		case 0: 
			txt = 'By staying along the East Coast, questions over the expansion of slavery never arose. This kept sectional tensions from tearing apart the country. The country was able to pass legislation that slowly phased out slavery, and the Union was kept. Eventually, the 14th amendment was passed, giving all formerly enslaved people citizenship.';
			break;
		case 1:
			txt = 'Though there were some debates over the expansion of slavery in the Louisiana Territory, the U.S. was able to calmly navigate the conflict. New farming technology developed in the 2nd industrial revolution slowly made the South less reliant on slavery. The 14th amendment was passed, giving all formerly enslaved people citizenship.';
			break;
		case 2:
			txt = 'Despite aggressive expansion policies, cooler heads prevailed when it came to determining the fate of new states and slavery. Through a series of compromises, the North was able to eventually outlaw slavery in the South. By 1870, the 14th amendment was passed, giving formerly enslaved people citizenship.';
			break;
		case 3:
			txt = 'After a long fought battle, the North was able to overtake the South. While the North was able to pass an amendment to give African Americans citizenship, they were unable to pass legislation for voting rights before the Union reunited. It would be another decade before formerly enslaved people were given suffrage.';
			break;
		case 4:
			txt = 'The North was able to capture the South, with Sherman\'s March to the Sea playing a key role in the victory. The U.S. passed the 14th amendment, giving formerly enslaved people citizenship. Legislators were also able to pass an amendment giving them suffrage. Support was beginning to wane, though, so literacy tests and other limitations quickly negated the impact of the amendment.';
			break;
		case 5:
			txt = 'After a long war, the South surrendered at Appomattox Courthouse. A supermajority in Congress was able to pass 3 amendments which gave African Americans citizenship, suffrage, and protection. Unfortunately for implementation, Lincoln was assassinated just months after his second term began.';
			break;
		case 6:
			end = ' NOT ';
			txt = 'The North fought hard to keep the Union together, but it was unable to. Further, the French to the West used the civil war as an opportunity to invade, taking the West portion of the country. In order to stay united as a country, the North accepted slavery as an institution.';
			break;
		case 7:
			end = ' NOT ';
			txt = 'The North fought hard to keep the Union together. Texas, still salty about not being let into the Union, joined forced with the South in order to defeat the North. The North remained as the United States of America, but the South became a seperate country - the Confederate States of America.';
			break;
		case 8:
			end = ' NOT ';
			txt = 'The North fought hard to keep the Union together, but the South had homefield advantage. After 4 years of consistent losses without any end in sight, Lincoln lost the election. The new president withdrew from the war, leaving the South as its own nation.';
			break;
		case 9:
			end = ' NOT ';
			txt = 'The South seceded, but the North was heavily reliant on importing their crops. In a last ditch measure to stay together, the North passed an amendment to include slavery in the constitution. The South, satisfied, rejoined the Union. The country, having lost much of its industrial power, was unable to maintain its Western borders. Native Americans pushed settlers back towards the coast, forcing the U.S. to cede lands.';
			break;
		case 10:
			end = ' NOT ';
			txt = 'Many in the North wanted to fight to preserve the Union, but there was not enough support. The South seceded. Support for Texan annexation was popular in the South, so Texas joined the Confederate States as a slave state. The two countries maintained peaceful relations.';
			break;
		case 11:
			end = ' NOT ';
			txt = 'The two countries maintained a hostile relationship, with constant skirmishes along the borders. While the North passed amendments giving African Americans citizenship and suffrage, the South remained heavily racist for hundreds of years.';
			break;
		default:
			end = ' Maybe? ';
			txt = 'Your presidential policies were too good, so we lost track of your data. Try playing again.';
			return;
	}
	document.querySelector('.end_content').textContent = txt;
	document.querySelector('.end').classList.remove('no_show');
	document.querySelector('.end_status').textContent = `Union${end}Preserved`;
	var path = 'src/';
	path += `${presidentMap[d.president]}_`;
	path += `${d.louisiana}_`;
	path += `${d.missouri}_`;
	path += `${d.texas}_`;
	path += `${d.unite}`;
	path += '.png'
	document.getElementById('end_map').src = path;
}

function getEnding() {
	if (s.resistance < 5) {
		d.unite = 1;
		if (d.louisiana == 0) {
			ending(0);
		} else {
			if (d.texas == 0) {
				ending(1);
			} else {
				ending(2);
			}
		}
	} else if (d.fight == 1) {
		if (2*s.north - 9 >= s.south + s.resistance) {
			d.unite = 1;
			if (d.louisiana == 0) {
				ending(3);
			} else {
				if (d.texas == 0) {
					ending(4);
				} else {
					ending(5);
				}
			}
		} else {
			if (d.louisiana == 0) {
				ending(6);
			} else {
				if (d.texas == 0) {
					ending(7);
				} else {
					ending(8);
				}
			}
		}
	} else {
		if (d.louisiana == 0) {
			ending(9);
		} else {
			if (d.texas == 0) {
				ending(10);
			} else {
				ending(11);
			}
		}
	}
}
