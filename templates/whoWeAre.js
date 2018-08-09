function setUpWhoWeAre(){
  var card = document.getElementById("whoWeAreCard")
  let configHeaders = new Headers();
  configHeaders.append('Cache-Control', 'max-age=20')
  // console.log(configHeaders);
  console.log(configHeaders.get('Cache-Control'));
  let config = {
    method: 'GET',
    // headers: configHeaders,
    cache: "no-cache"
  }
	file = fetch('https://raw.githubusercontent.com/RecursiveThinking/recursive_thinking_website_tech_docs/master/markdown/whoWeAre.md', config)
	// file = fetch('https://raw.githubusercontent.com/RecursiveThinking/recursive_thinking_website_tech_docs/master/markdown/whoWeAre.md')
		.then(response => response.text())
		.then(text => md.render(text))
		.then(renderedHTML => card.innerHTML = renderedHTML);
}