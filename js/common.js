head.ready(function() {

	// modals init

	$('.js-popup').on('click', function(){
		var popupId = $(this).data('popup');

		$('#' + popupId).show();
		$('body').addClass('no-scroll');

		return false;
	});

	$('.js-popup-close').on('click', function() {
		$(this).parents('.overlay').hide();
		$('body').removeClass('no-scroll');
	});
	$('.overlay i').on('click', function() {
		$(this).parents('.overlay').hide();
		$('body').removeClass('no-scroll');
	});

});