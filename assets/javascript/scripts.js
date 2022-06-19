const scriptList = [
	"ads",
	"header",
	"theme",
	"filter",
	"search",
	// "sound",
	"sidebar",
	"goTop",
	"cursor",
	"dropdown",
	"footer"
];

window.onload = function() {
	const scriptsCreate = document.createElement('div');
	scriptsCreate.setAttribute('id','script')
	document.querySelector("body").insertBefore(scriptsCreate, document.querySelector("body").children[0]);

	for(let script of scriptList) {
		var scriptCreate = document.createElement('script');
		scriptCreate.src = `https://hgvn23.github.io/new-design-preview/assets/javascript/${script}.js`;
		// scriptCreate.src = `../assets/javascript/${script}.js`;
		// scriptCreate.src = `assets/javascript/${script}.js`;
		document.getElementById("script").appendChild(scriptCreate);
	};
}