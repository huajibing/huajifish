window.onload = function() {
	var mainLinkId = "link_" + pageName;
	document.getElementById(mainLinkId).className = "main_link";
	console.log("%c小伙子看啥看，这里是你能来的地方？","font-size:2em;color:#ff0000;");
	console.log("%c对了帮我看一下有没有报错","font-size:2em;color:#ff0000;");
	console.log("%c哈哈哈哈哈哈逗你玩的"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:4em");
}

document.querySelector(".background_pic").onload = function() {
	setTimeout(function(){document.querySelector(".background_pic").style = 'filter: blur(4px)'},400);
}

function om(obj) {
	if (obj.dataset.t == "c") {
		document.getElementById("mnt").style.width = "0";
		document.getElementById("mnb").style.width = "0";
		setTimeout(function() {
			document.getElementById("mnca").style.transform = "rotate(45deg)";
			document.getElementById("mncb").style.transform = "rotate(-45deg)";
			document.getElementsByClassName("background_pic")[0].style.opacity = "0";
			document.getElementsByClassName("menu_bar")[0].style.position = "fixed";
			document.getElementsByClassName("menu_bar")[0].style.top = "0";
			document.getElementsByClassName("menu_bar")[0].style.left = "0";
			document.getElementById("links_a").style.height = "40%";
			obj.dataset.t = "o";
		},100);
	} else if (obj.dataset.t == "o") {
		document.getElementById("mnca").style.transform = "rotate(0deg)";
		document.getElementById("mncb").style.transform = "rotate(0deg)";
		setTimeout(function() {
			document.getElementById("mnt").style.width = "80%";
			document.getElementById("mnb").style.width = "80%";
			document.getElementsByClassName("background_pic")[0].style.opacity = "1";
			document.getElementById("links_a").style.height = "0";
			setTimeout(function() {
				document.getElementsByClassName("menu_bar")[0].style.position = "absolute";
			},400);
			obj.dataset.t = "c";
		},100);
	}
}

// 以下代码弃坑

function hexToRgb(hexCode) {
	var x = 0;
	if (hexCode.substr(0,1) == "#") {x = 1}
	var y = [];
	for (var i = 0; i <= hexCode.length - x; i++) {
		//if (!parseInt(hexCode.substr(i,1),16)) {return "非十六进制"}
		y[i] = parseInt(hexCode.substr(i+x,1),16);
		console.log(y[i]);
	}
	if (y.length == 3) {
		return ("rgb(" + y[0] + "," + y[1] + "," + y[2] + ")");
	}
	if (y.length == 6) {
		var rgbNum = [];
		rgbNum[0] = y[0]*16+y[1];
		alert(rgbNum[0]);
		rgbNum[1] = y[2]*16+y[3];
		rgbNum[2] = y[4]*16+y[5];
		var rgb = "rgb(" + rgbNum[0].toString() + rgbNum[1].toString() + rgbNum[2].toString() + ")";
		return rgb;
	}
	//return "位数不正确";
}