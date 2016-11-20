(function() {
    var fc = "blue"; //文字の色
    var fx = 30; //マウスに対する文字の横位置
    var fy = 10; //マウスに対する文字の縦位置
    var sc = 22; //文字の間隔
    var testStr = "Javascript世界へようこそ！";
	var moji = testStr.split('');
    var x = [], y = [];
    var htmlString = "";
    for (var i = 0, len = moji.length; i < len; i++) {
        htmlString += "<span style='position:absolute; top:-100px; left:-100px; color:" + fc + ";' id='moji" + i + "'>" + moji[i] + "</span>";
    }
    document.write(htmlString);
    document.onmousemove = mouseMove

	function mouseMove(e) {
		x[0] = e.pageX + fx;
        y[0] = e.pageY + fy;
	}
	
    function loadEvent() {
        for (i = moji.length - 1; i >= 0; i--) {
            if (i) {
                x[i] = x[i - 1] + sc;
                y[i] = y[i - 1];
            }
			var curElement = document.getElementById("moji" + i);
            curElement.style.top = y[i] + "px"; 
            curElement.style.left = x[i] + "px";
        }
        setTimeout(loadEvent, 100);
    }
    loadEvent();
}());
