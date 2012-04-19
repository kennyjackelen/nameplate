/* Author: Kenny Jackelen

*/

$(function onPageLoad()
	{
		// deobfuscate the email address for usability
		var addy = $('#aEmail').attr('href').replace('[at]','@').replace('[dot]','.');
		$('#aEmail').attr('href',addy);

		// initialize tooltip options
		var options = [];
		options.placement = 'bottom';

		// set up tooltips
		options.title = 'Send me an email';
		$('#aEmail').tooltip(options);
		options.title = 'Take a look at my photos';
		$('#aPhotos').tooltip(options);
		options.title = 'Check out my code on GitHub';
		$('#aCode').tooltip(options);
	}
);



