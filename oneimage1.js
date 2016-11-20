(function() {
    var src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEH0lEQVRIS6WUaWxVRRzFXzUacQkGo5GI4hKNn/ziBrKUIkiRuAVNg3ELKDYqLoioGDdIKxWpVlBRWkWBYIpgqy0UqoBCF7q3ULuCMQaR0nfnzn2vnblP6fHM3Gvqh9qQ10n+mdve+87vv5yZlMgw6+S26zHU65SBgUgEiKQMMDAQGTPvaMpwOv/7zgCUHwsjzr0PKmFC2dB8djZfNWQSpwW0AC3hNj4Lt+EpuPUL4dYtgKh9DM7Bh6G1B7Fp/AgBKgrZtASy8TkLEXVPBICah6CVgPvVFSMDaNUL79AyyOYlthJRn0nA/KCCvh7IL8eNFBCF1/o25KFX4Ta9wDaxitrHIWoegY4fg/zisuQBvVuvQ0I7iLWthHf4jaCKhqfZJgJMBd5v8D4fOzzADHKoMOK9hdcS4CLWsYpVvEXAUgKeCSsgQB5FLP9SxD67BPFPL0bfJxeh/+Mx6F97IdSa0dB5FyBincJBKtUD3d8Dv/8kEvw74UtGLKjAAt4crKCWTuKQfbcTvjzC6A6enRboP/dDn6hgVEF/cH4IoLBseh6y5RWbaaw9B/GuPMYaxDvfZ4uyOOjX+I2ZQSYdRBdVP4ho1f2IVt6HaMW9iB64G85Pc+Dsmw1nb7oF+bnnBQDdd4KlL2KGL3KYyyzE+yWLwtncV7D/r/PdS3TRImtThwN2qjMoPpfi9yC6/y6KzobYkw5nzyw4P94B//heJFaP+hdw3GZmBGTTYlbysrWmtSerMmCTgKhbyNY8Sosy+8oHKMys990JQUEbP8yEUz4Dovx2+MfKkVh1TgiI/8HBLeApfTI4sQbEgyUb2Tbr/fCAVWRAHJhL0Tk2W2HFAkGx28R0iF1pEGXT4P9eir9yzkbEuEV1b4dbng65aybkzunwSlPhfT8JXtFExgR4390GWTIZcsdUuDunwS1LC8KIhWGfKSzKUiH4neoswN8rzyKAVlTd3xAwi4AZBKTBK5lKUQK+vTWI4omQBMrSKXANxIJSbYhwN/8TO6ZAmG+YjKpfjlPZZyIS/foaqK5CqPaN0K350M1roetzoWvfga5eDl3FU2wqMAALmQzXiDB0ewF0xwboLv72yBboX7dCdayHauDvyufjVNYZiDhbrobYfCXExvG8uC6H3DDOHn+vYKw9RLomOwSEkJJJNkPTMt2eb62YeG+UHajpuWmLydyID6yIDH/KzQnV9e8yc4qbKmwlg2EARvy07v6hPjLHXzeuHhS2EM6Du8tdt60PrJjsMneLbs77TwUUNwMvnmBBqjknsGKyy1xc+vBHYdaDwrKIztp+M1Tl4sCKyS5zK+rWdWxH2JpiY9tb4G27EfHCG6DKMgIrJrvUh6Oh2tZBteRa66mDS6F+zoTaPQ+qKB3+ppsCKya7zH1urlw/99ykrfgPnC94eGZEWg4AAAAASUVORK5CYII=";
    var hx = 30; //マウスに対する画像の横位置。
    var hy = 20; //マウスに対する画像の縦位置。

	var currentX = 0;
	var currentY = 0;
	
    document.write("<img src='" + src + "' id='mouseImg' style='position:absolute; top:-100px; left:-100px;' width=20px height=20px>");
    document.onmousemove = mouseMove;
	
	function mouseMove(e) {
		currentX = e.pageX;
		currentY = e.pageY;
	}
	
	function loadEvent() {
		var mouseImgObj = document.getElementById("mouseImg");
		mouseImgObj.style.left = currentX + hx + "px";
		mouseImgObj.style.top = currentY + hy + "px";
		setTimeout(loadEvent, 150);
	}
	loadEvent();
}());