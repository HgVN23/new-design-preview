const ads = `
	<div class="contentGroup">
		<div class="contentIcon iconAds"></div>
		<p class="contentTitle">Ads</p>
	</div>
	<!-- Ads 1 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2430509461017367" data-ad-slot="6618344666" data-ad-format="auto" data-full-width-responsive="true"></ins>
	<!-- Ads 2 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2430509461017367" data-ad-slot="1982672065" data-ad-format="auto" data-full-width-responsive="true"></ins>
	<!-- Ads 3 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2430509461017367" data-ad-slot="7686386895" data-ad-format="auto" data-full-width-responsive="true"></ins>
`;

// Ads
const adsCreate = document.createElement('section');
adsCreate.classList.add('contentBox');
adsCreate.innerHTML = ads;
document.getElementsByTagName('article')[0].appendChild(adsCreate);

for (var i = 0; i < 3; i++)
	(adsbygoogle = window.adsbygoogle || []).push({});