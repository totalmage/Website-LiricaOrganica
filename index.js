// Play Music on Hover
var aIOAlbulm = document.getElementById("ai-original");
var aIPAlbulm = document.getElementById("ai-piano");

var aIOClip = document.getElementById("ai-original-clip");
var aIPClip = document.getElementById("ai-piano-clip");

aIOAlbulm.addEventListener('mouseover', function() {
        aIOClip.play();
}, false);

aIOAlbulm.addEventListener('mouseleave', function(){
    aIOClip.pause();
    aIOClip.currentTime = 0;
}, false);

aIPAlbulm.addEventListener('mouseover', function() {
    aIPClip.play();
}, false);

aIPAlbulm.addEventListener('mouseleave', function(){
    aIPClip.pause();
    aIPClip.currentTime = 0;
}, false);


//Fade in on scroll
let elementsArray = document.querySelectorAll(".fadeyboi");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();