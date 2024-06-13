function updateNews() {
	// Reset news
	var news = document.querySelector('.news_content');
	news.innerHTML = '';
	// Update news if prerequisite is met
	for ( let i=0; i< pres.news.length; i++ ) {
		if( n[ pres.news[i] ].prerequisite.length > 0 ) {
			var prerequisite = n[pres.news[i]].prerequisite;
			if ( d[prerequisite[0]] == prerequisite[1]) {
				var shell = document.createElement('div'); shell.classList.add('article'); news.append(shell);
				var title = document.createElement('div'); title.textContent = n[ pres.news[i] ].title; title.classList.add('article_title');
				var content = document.createElement('div'); content.textContent = n[ pres.news[i] ].content; content.classList.add('article_content');
				shell.append(title, content);
			}
		} else {
			var shell = document.createElement('div'); shell.classList.add('article'); news.append(shell);
			var title = document.createElement('div'); title.textContent = n[ pres.news[i] ].title; title.classList.add('article_title');
			var content = document.createElement('div'); content.textContent = n[ pres.news[i] ].content; content.classList.add('article_content');
			shell.append(title, content);
		}
	}
}