$(document).ready(function(){
	$('.header').height($(window).height());
})

$(".navbar a").click(function(){
	$("body,html").animate({
		scrollTop:$("#" + $(this)
			.data('value')).offset().top}, 1000) 
})

var head = document.getElementById('main_img');

function changeBgImage(){
    head.style.backgroundImage="url('https://cdn.pixabay.com/photo/2019/11/26/18/44/input-4655216_960_720.jpg')";
}

changeBgImage();

var sect = document.getElementById('sect');
sect.parentNode.removeChild(sect);

var navbarColor=document.getElementById('navbarColor');
navbarColor.style.backgroundColor = "rgba(41, 90, 250, 1)";

var paragrafColor=document.getElementById('paragrafColor');
paragrafColor.style.color="white";

var portfolio=document.getElementById('portfolio');
portfolio.style.backgroundColor="rgba(41, 90, 250, 1)";

var blogImg=document.getElementById('blogImg');
blogImg.style.backgroundImage="url('https://cdn.pixabay.com/photo/2017/06/23/11/41/lights-2434376_960_720.jpg')";

var teamImg=document.getElementById('teamImg');
teamImg.style.backgroundImage="url('https://cdn.pixabay.com/photo/2016/11/19/16/52/architecture-1840297_960_720.jpg')";
