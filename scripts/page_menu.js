$(document).ready(function(){
	autoHoverMenu();
	mobileMenuSwitch();
});

//menu auto hover
function autoHoverMenu(){
	for(var i=0;i<$('.menu_blcok').find('a').length;i++){
		if( window.location.pathname.match( $('.menu_blcok').find('a').eq(i).attr('href') ) ){
			if( $('.menu_blcok').find('a').eq(i).parent().prop('className').match(/menu_level2/g) ){
				$('.menu_blcok').find('a').eq(i).parent().siblings('.menu').addClass('hover');
			}else{
				$('.menu_blcok').find('a').eq(i).addClass('hover');
			}
		}
	}
}

//header menu
function mobileMenuSwitch(){
	$('.mobile_menu_btn').on('click', function(){
		$('.menu_blcok').toggleClass('show');
	});
}

