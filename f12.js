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
	alert("F12开发者工具已禁用，如需管理网站，请与管理员联系！");
}

// 防止鼠标右键浏览器‘检查’操作
setInterval(function () {
	debugger;
}, 100)

// 禁止右键
document.oncontextmenu = function () { return false; };
