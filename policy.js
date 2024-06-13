function updatePolicy() {
	// Add to policy number
	d.policy += 1;
	// Remove html content
	document.querySelector('.policy').innerHTML = '';
	// pres = president data
	let pres = c[ d.president ];
	// If current policy is greater than the largest policy
	if ( d.policy > pres.policies.length - 1 ) {
		policy = document.querySelector('.policy');
		var done = document.createElement('div'); done.classList.add('policy_done'); done.textContent = `It looks like there\'s no more major decisions under the ${c[d.president].name} administration.`;
		policy.append(done);
		document.querySelector('.next_btn').classList.remove('no_show');
	} else {
		if (meetPrerequisite(p[ pres.policies[d.policy] ].prerequisite) == true) {
			var title = document.createElement('div'); title.classList.add('policy_title'); title.textContent = p[ pres.policies[d.policy]].title;
			var content = document.createElement('div'); content.classList.add('policy_content'); content.textContent = p[ pres.policies[d.policy] ].content;
			var answer = document.createElement('div'); answer.classList.add('policy_answer');
			document.querySelector('.policy').append(title, content, answer);
			var yes = document.createElement('div'); yes.classList.add('policy_approve'); yes.textContent = "Yes"; 
			var no = document.createElement('div'); no.classList.add('policy_veto'); no.textContent = "No";
			answer.append( yes, no );

			var obj = p[ c[ d.president ].policies[ d.policy ] ];
			var curr;
			yes.addEventListener('click', () => {curr = 'yes'; policyImpact(curr)});
			no.addEventListener('click', () => {curr = 'no'; policyImpact(curr)});
		}
		
	}
	updateNews();
	function meetPrerequisite(prerequisite) {
		if (prerequisite.length == 0) return true;
		if (d[prerequisite[0]] == prerequisite[1]) return true;
		updatePolicy();
	}
}

function policyImpact(curr) {
	var obj = p[ c[ d.president ].policies[ d.policy ] ];
	s.north += obj[curr][0];
	document.getElementById('north').style.height = `${Math.round( s.north / 19 * 100)}px`;
	s.south += obj[curr][1];
	document.getElementById('south').style.height = `${Math.round( s.south / 16 * 100)}px`;
	s.resistance += obj[curr][2];
	document.getElementById('resistance').style.height = `${Math.round( s.resistance / 13 * 100)}px`;

	var policy = document.querySelector('.policy')
	policy.innerHTML = '';

	var impact = document.createElement('div'); impact.classList.add('policy_impact'); impact.textContent = obj[curr][3];
	var okay = document.createElement('div'); okay.classList.add('policy_okay'); okay.textContent = "Okay";
	policy.append(impact, okay);
	okay.addEventListener('click', () => {
		updatePolicy();
	});

	if(obj[curr].length > 4) {
		d[ obj[curr][4] ] = obj[curr][5];
	}
}
