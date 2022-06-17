const scriptList = [
	"header",
	"sidebar",
	"goTop",
	"theme",
	"cursor",
	"dropdown",
	"filter",
	"search",
	// "sound",
	"ads",
	"footer"
];

window.onload = function() {
	const body = document.getElementsByTagName('body')[0];
	const scriptsCreate = document.createElement('div');
	scriptsCreate.setAttribute('id','script')
	body.insertBefore(scriptsCreate, body.children[0]);

	for(let script of scriptList) {
		var scriptCreate = document.createElement('script');
		scriptCreate.src = `https://hgvn23.github.io/new-design-preview/assets/javascript/${script}.js`;
		// scriptCreate.src = `../assets/javascript/${script}.js`;
		// scriptCreate.src = `assets/javascript/${script}.js`;
		document.getElementById("script").appendChild(scriptCreate);
	};
}