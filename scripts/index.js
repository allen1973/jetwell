$(window).load(function(){
	setScrollEvent();
});

var scrollTopNow=0;
var scrollTopSpeed=2000;
var scrollTypeNow=true;
function setScrollEvent(){
	scrollTopNow=$( window ).scrollTop();
	$( window ).scroll(function( event ) {
		if( scrollTypeNow ){
			scrollTypeNow=false;
			if( scrollTopNow<$( window ).scrollTop() ){
				$('body, html').animate({ scrollTop: $('.footer').offset().top }, scrollTopSpeed);
			}else{
				$('body, html').animate({ scrollTop: 0 }, scrollTopSpeed);
			}
			setTimeout(function(){ scrollTypeNow=true; scrollTopNow=$( window ).scrollTop(); }, scrollTopSpeed+10);
		}else{
			event.preventDefault();
		}
	});
}

function iEsc(){ return false; }
function iRec(){ return true; }
function DisableKeys() {
	if(event.ctrlKey || event.shiftKey || event.altKey) {
	window.event.returnValue=false;
	iEsc();
	}
}
$(document).ready(function(){
	document.ondragstart=iEsc;
	document.onkeydown=DisableKeys;
	document.oncontextmenu=iEsc;
	if (typeof document.onselectstart !="undefined"){
			document.onselectstart=iEsc;
		}else{
			document.onmousedown=iEsc;
			document.onmouseup=iRec;
		}
		function DisableRightClick(qsyzDOTnet){
		if (window.Event){
			if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3){
				iEsc();
			}
		}else if (event.button == 2 || event.button == 3){
			event.cancelBubble = true
			event.returnValue = false;
			iEsc();
		}
	}
});