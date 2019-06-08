
/*slider*/
jQuery(document).ready(function(){
  jQuery('.bxslider').bxSlider({
  	controls: false
  });
});

var cusLink = document.querySelector(".catalog");
var secondMenu = document.querySelector(".header-secondMenu");
var styleElem = document.head.appendChild(document.createElement("style"));

cusLink.addEventListener("click", function(){
	if(secondMenu.classList.contains("header-secondMenu--close")) {
		secondMenu.classList.remove("header-secondMenu--close");
		styleElem.innerHTML = ".catalog::after {content: '-'; top: 40%;}";
	}
	else {
		secondMenu.classList.add("header-secondMenu--close");
		styleElem.innerHTML = ".catalog::after {content: '+';}";
	}
})



