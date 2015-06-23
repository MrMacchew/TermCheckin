$(window).load(function () {
	$('div.startTest').each(function(){
		//$(this).css('opacity', 0);
		$(this).css('width', $(this).siblings('img').width());
		$(this).parent().css('width', $(this).siblings('img').width());
		//$(this).css('display', 'block');
	});

	$('div.wrapper').hover(function(){
		$(this).children('.startTest').stop().slideToggle('fast');
	}, function(){
		$(this).children('.startTest').stop().slideToggle('fast');
	});
});