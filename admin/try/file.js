function read(path) {
var content = "";
try{
var fso = new ActiveXObject("Scripting.FileSystemObject");
var reader = fso.openTextFile(path, 1);
while(!reader.AtEndofStream) {
content += reader.readline();
content += "\n";
}
// close the reader
reader.close();
}catch(e){
if(document.implementation && document.implementation.createDocument){
try {
netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
var lf = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
lf.initWithPath(path);
if (lf.exists() == false) {
alert("File does not exist");
}                               
var fis = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
fis.init(lf, 0x01, 00004, null);
var sis = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStream);                                 sis.init(fis);                                 var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Components.interfaces.nsIScriptableUnicodeConverter);                                 content = converter.ConvertToUnicode(sis.read(sis.available()));                                 converter.charset = "UTF-8";                         }                         catch (e) {                                 alert("Mozilla Firefox read local file error: \n" + e);                         }                 }         }         return content; } function write(arrstr,path){         try{            var fso  = new ActiveXObject("Scripting.FileSystemObject");            var fh = fso.CreateTextFile(path, true);            fh.WriteLine(arrstr);            fh.Close();         }catch(e){             try {                 var pm = netscape.security.PrivilegeManager;                 pm.enablePrivilege('UniversalXPConnect');             }catch(e)             {                 alert("!!被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");             }             var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
// alert("create file object");
if(file instanceof Components.interfaces.nsILocalFile)
file.initWithPath(path);
else
{
alert("erro");
return;
}
//alert("init file object");
var outputStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
//alert("create fout object");
try
{
outputStream.init(file,0x04|0x08|0x20,420,0);
}catch(e){alert(e);}
try
{
for(var i=0; i < arrstr.length; i++)
{
arrstr[i]+="\r\n";
outputStream.write(arrstr[i],arrstr[i].length);
}
}catch(e){alert(e);};
outputStream.close();
} }
