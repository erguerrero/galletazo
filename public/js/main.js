var App = function() {

	var _counter = 0;
	var _loop = function() {

		$('.cookieCounter').text(_counter + ' ' + 'Galletas');
		$('.cookie').css({
				opacity: 1
			});

		setTimeout(_loop, 100);
	};

	this.init = function() {


		var clicker = $('.cookie').click(function() {

			_counter++;
			$('.cookie').css({
				opacity: 0.7
			})

		});

		_loop();
	};
}

$(document).ready(function() {

	var app = new App();
	app.init();
	
});



