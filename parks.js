var button = $(".button");
var body = $("body");
button.on("click",changeBackground);
function changeBackground(){
  body.css("background-color", "#99e6ff");
}
