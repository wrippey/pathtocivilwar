function updateMap() {
	var path = 'src/';
	path += `${presidentMap[d.president]}_`;
	path += `${d.lousiana}_`;
	path += `${d.missouri}_`;
	path += `${d.texas}_`;
	path += `${d.fight}`;
	path += '.png'
	document.getElementById('map').src = path;
}

const presidentMap = {
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	4: 3,
	5: 4,
	6: 4,
	7: 4,
	8: 4,
	9: 5,
	10: 6,
	11: 7,
	12: 7,
	13: 8,
	14: 9
}
