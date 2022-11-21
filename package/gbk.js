function urldecode(str, charset, callback) {

window._urlDecodeFn_ = callback;

var script = document.createElement('script');

script.id = '_urlDecodeFn_';

var src = 'data:text/javascript;charset=' + charset + ',_urlDecodeFn_("' + str + '");'

src += 'document.getElementById("_urlDecodeFn_").parentNode.removeChild(document.getElementById("_urlDecodeFn_"));';

script.src = src;

document.body.appendChild(script);

}
