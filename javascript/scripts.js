const scriptList = [
	"header",
	"sidebar",
	"goTop",
	"ads",
	"cursor",
	"dropdown",
	"theme",
	"filter",
	"search",
	// "sound",
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