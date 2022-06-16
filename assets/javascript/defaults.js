function defaults() {
	// ======================================================================
	// Script
	for(let script of scriptList) {
		var scriptCreate = document.createElement('script');
		scriptCreate.src = `https://hgvn23.github.io/new-design-preview/assets/javascript/${script}.js`;
		scriptCreate.src = `../assets/javascript/${script}.js`;
		scriptCreate.src = `assets/javascript/${script}.js`;
		document.getElementById("script").appendChild(scriptCreate);
	};
	// ======================================================================
	// Header
	document.getElementsByTagName("header")[0].innerHTML = header;
	// ======================================================================
	// Sidebar
	document.getElementById("sidebar").innerHTML = sidebar;
	// ======================================================================
	// Footer
	document.getElementsByTagName("footer")[0].innerHTML = footer;
	document.querySelector(".year").innerHTML = new Date().getFullYear();
	// ======================================================================
	// Go top
	const goTopCreate = document.createElement('a');
	goTopCreate.classList.add('goTop', 'goTopIcon');
	goTopCreate.href = "#";
	document.querySelector("body").appendChild(goTopCreate);
	// ======================================================================
}
const scriptList = [
	"theme",
	"cursor",
	"sidebar",
	"filter",
	"search",
	"dropdown",
	// "sound",
	"ads"
];
const header = `
	<div class="sidebarIcon sidebarIconClose"></div>
	<a class="logoWiki" href="https://hgvn23.github.io"></a>
	<a class="headerTitle" href="https://hgvn23.github.io">MCBE Command Wiki</a>
	<div class="themeIcon themeIconDark"></div>
	<div class="search">
		<div class="searchBar">
			<div class="searchIcon" onclick="searchEnter()"></div>
			<input class="searchInput" placeholder="Nhập để tìm kiếm..." type="search">
		</div>
		<div class="searchBox searchBoxHide"></div>
	</div>
`;
const sidebar = `
	<div class="sidebar sidebarClose">
		<h2 class="sidebarTitle">Mục lục</h2>
		<div class="sidebarLine"></div>
		<a id="sidebarTrangChu" class="contentText textLink" href="https://hgvn23.github.io">Trang chủ</a>
		<div class="sidebarDropdown">
			<p class="contentText dropdown">Commands</p>
			<div class="dropdownTab dropdownHide">
			<div>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/1help.html">/?</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/ability.html">/ability</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/alwaysday.html">/alwaysday</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/camerashake.html">/camerashake</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/clear.html">/clear</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/clearspawnpoint.html">/clearspawnpoint</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/clone.html">/clone</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/connect.html">/connect</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/damage.html">/damage</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/daylock.html">/daylock</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/deop.html">/deop</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/dialogue.html">/dialogue</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/difficulty.html">/difficulty</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/effect.html">/effect</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/enchant.html">/enchant</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/event.html">/event</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/execute.html">/execute</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/fill.html">/fill</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/fog.html">/fog</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/function.html">/function</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/gamemode.html">/gamemode</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/gamerule.html">/gamerule</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/gametest.html">/gametest</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/give.html">/give</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/help.html">/help</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/immutableworld.html">/immutableworld</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/kick.html">/kick</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/kill.html">/kill</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/list.html">/list</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/locate.html">/locate</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/loot.html">/loot</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/me.html">/me</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/mobevent.html">/mobevent</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/msg.html">/msg</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/music.html">/music</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/op.html">/op</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/particle.html">/particle</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/playanimation.html">/playanimation</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/playsound.html">/playsound</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/reload.html">/reload</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/replaceitem.html">/replaceitem</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/ride.html">/ride</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/say.html">/say</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/schedule.html">/schedule</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/scoreboard.html">/scoreboard</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/script.html">/script</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/setblock.html">/setblock</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/setmaxplayers.html">/setmaxplayers</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/setworldspawn.html">/setworldspawn</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/spawnpoint.html">/spawnpoint</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/spreadplayers.html">/spreadplayers</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/stopsound.html">/stopsound</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/structure.html">/structure</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/summon.html">/summon</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/tag.html">/tag</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/teleport.html">/teleport</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/tell.html">/tell</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/tellraw.html">/tellraw</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/testfor.html">/testfor</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/testforblock.html">/testforblock</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/testforblocks.html">/testforblocks</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/tickingarea.html">/tickingarea</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/time.html">/time</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/title.html">/title</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/titleraw.html">/titleraw</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/toggledownfall.html">/toggledownfall</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/tp.html">/tp</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/volumearea.html">/volumearea</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/w.html">/w</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/wb.html">/wb</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/weather.html">/weather</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/worldbuilder.html">/worldbuilder</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/wsserver.html">/wsserver</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/commands/xp.html">/xp</a>
				<div class="dropdownEnd"></div>
			</div>
			</div>
		</div>
		<div class="sidebarDropdown">
			<p class="contentText dropdown">Danh sách Id</p>
			<div class="dropdownTab dropdownHide">
			<div>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/animationId.html">Animation</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/blockStateId.html">Block state</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/componentId.html">Component</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/damageId.html">Damage</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/effectId.html">Effect</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/enchantmentId.html">Enchantment</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/eventId.html">Event</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/fogId.html">Fog</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/gameruleId.html">Gamerule</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/lootId.html">Loot</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/particleId.html">Particle</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/rawMessageId.html">Raw message</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/target.html">Target</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/soundId.html">Sound</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/danhSachId/trackId.html">Track</a>
				<div class="dropdownEnd"></div>
			</div>
			</div>
		</div>
		<div class="sidebarDropdown">
			<p class="contentText dropdown">Thông tin liên quan</p>
			<div class="dropdownTab dropdownHide">
			<div>
				<a class="contentText textLink" href="https://hgvn23.github.io/thongTinLienQuan/toanTuKiTu.html">Toán tử kí tự</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/thongTinLienQuan/cauTrucCommand.html">Cấu trúc Command</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/thongTinLienQuan/commandBlock.html">Command Block</a>
				<div class="dropdownEnd"></div>
			</div>
			</div>
		</div>
		<div class="sidebarDropdown">
			<p class="contentText dropdown">Web Tool</p>
			<div class="dropdownTab dropdownHide">
			<div>
				<a class="contentText textLink" href="https://hgvn23.github.io/webTool/uuidV4Generator.html">Tạo UUID</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/webTool/glyph.html">Tra kí tự glyph</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/webTool/color.html">Hex -> Dec Color Code</a>
				<a class="contentText textLink" href="https://hgvn23.github.io/webTool/dialogueGenerator.html">Tạo dialogue.json</a>
				<div class="dropdownEnd"></div>
			</div>
			</div>
		</div>
		<div class="sidebarEnd"></div>
	</div>
	<div class="sidebarBlur sidebarClose" onclick="sidebarClose()"></div>
`;
const footer = `
	<div>
		<a class="socialLogo logoYoutube" href="https://youtube.com/c/HgVN23?sub_confirmation=1" target="_blank"></a>
		<a class="socialLogo logoDiscord" href="https://discordapp.com/users/451348781460619264/" target="_blank"></a>
		<a class="socialLogo logoTwitter" href="https://twitter.com/HgVN23?s=0" target="_blank"></a>
		<a class="socialLogo logoFacebook" href="https://www.facebook.com/HgVN23" target="_blank"></a>
	</div>
	<div class="copyright">
		<div class="copyright1">Copyright © 2021-<div class="year"></div></div>
		<div class="copyrightSide"></div>
		<p class="copyright2">Wiki by <a class="textLink" href="https://hgvn23.github.io/fromHg/Hg.html">Hg</a></p>
		<div class="copyrightSide"></div>
		<p class="copyright3">Hosted by <a class="textLink" href="https://github.com/" target="_blank">Github</a></p>
	</div>
`;