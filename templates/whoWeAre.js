function setUpWhoWeAre(){
  var card = document.getElementById("whoWeAreCard")
	file = fetch('https://raw.githubusercontent.com/RecursiveThinking/recursive_thinking_website_tech_docs/master/markdown/whoWeAre.md')
		.then(response => response.text())
		.then(text => md.render(text))
		.then(renderedHTML => card.innerHTML = renderedHTML);
}