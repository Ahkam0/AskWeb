var contactmapClick  = document.getElementById('contact-mapClick');
var contactphoneClick = document.getElementById('contact-phoneClick');
var contactmailClick = document.getElementById('contact-mailClick');


var contactmap = document.getElementById('contact-map');
var contactphone = document.getElementById('contact-phone');
var contactmail = document.getElementById('contact-mail');

contactmap.style.display = "block";
contactphone.style.display = "none";
contactmail.style.display = "none";

contactmapClick.onclick = function(){
contactmap.style.display = "block";
contactphone.style.display = "none";
contactmail.style.display = "none";
}
contactphoneClick.onclick = function(){
contactmap.style.display = "none";
contactphone.style.display = "block";
contactmail.style.display = "none";
}
contactmailClick.onclick = function(){
contactmap.style.display = "none";
contactphone.style.display = "none";
contactmail.style.display = "block";
}
