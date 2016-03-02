!function ($) {
	$(document.getElementById('back-to-top')).find('button').click(function () {
		$('html, body').animate({
			scrollTop: 0
		})
	});
}(jQuery);
