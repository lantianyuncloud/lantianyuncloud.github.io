// 禁止按F12调试
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if (e && e.keyCode == 123) {
		mAlert();
		e.returnValue = false;
		return (false);
	}
}
function mAlert() {
	alert("感谢使用管理平台，禁止对控制台进行操作！");
}

// 防止鼠标右键浏览器‘检查’操作
setInterval(function () {
	debugger;
}, 100)

// 禁止右键
document.oncontextmenu = function () { return false; };
