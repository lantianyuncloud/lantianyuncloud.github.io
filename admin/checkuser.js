//引入\./package/cookie.js
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
//引入结束

function checkuser(){
  var user=get_cookie('user')
  var password=get_cookie('password')
  if(user==null||user=''||password==null||password='') {
    window.location.href="\\./admin/login"
    alert('未登录，非法访问，请登录！')
  }
}
