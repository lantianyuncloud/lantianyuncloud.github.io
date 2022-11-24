function checkuser(){
  var user=get_cookie('user')
  var password=get_cookie('password')
  if(user==null||password==null) {
    window.location.href="\./admin/login"
  }
}
