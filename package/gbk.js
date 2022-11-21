function gbkEncode(str) {
  return str.replace(/./g, function (a) {
    var code = a.charCodeAt(0);
    if (isAscii(code)) {
      return encodeURIComponent(a);
    } else {
      var key = code.toString(16);
      if (key.length != 4)key = ('000' + key).match(/....$/)[0];
      return U2Ghash[key] || a;
    }
  });
}
 
function gbkDecode(str, callback) {
  return str.replace(/%[0-9A-F]{2}%[0-9A-F]{2}/g, function (a) {
    if (a in G2Uhash) {
      return String.fromCharCode('0x' + G2Uhash[a]);
    } else {
      return a;
    }
  }).replace(/%[\w]{2}/g, function (a) {
 
    return decodeURIComponent(a);
 
  });
}
