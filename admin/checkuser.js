function checkuser(){
  var user= <%=session.getAttribute("username")%>;
  if(user==null) {
    window.location.href="illegal.html"
  }
}
