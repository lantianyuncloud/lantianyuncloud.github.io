function set_cookie(name, value, daysToLive) {
    // 对 cookie 值进行编码以转义其中的分号、逗号和空格
    var cookie = name + "=" + encodeURIComponent(value);
    cookie += "; path=/"
    if(typeof daysToLive === "number") {
        /* 设置 max-age 属性 */
        cookie += "; max-age=" + (daysToLive*24*60*60);
    }
    document.cookie = cookie;
}

function get_cookie(name) {
    // 拆分 cookie 字符串
    var cookieArr = document.cookie.split(";");
   
    // 循环遍历数组元素
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
       
        /* 删除 cookie 名称开头的空白并将其与给定字符串进行比较 */
        if(name == cookiePair[0].trim()) {
            // 解码cookie值并返回
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // 如果未找到，则返回null
    return null;
}

function del_cookie(name) {
    set_cookie(name,null,0)
}

function login(){
	set_cookie('user',null.5)
	set_cookie('password',null,5)
	var user=document.getElementById("#useri").value
	var password=document.getElementById("#passwordi").value
	console.info(user,password)
	set_cookie('user',user,5)
	set_cookie('password',password,5)
}
