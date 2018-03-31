window.app = {};

window.app.onkeypress = function (e) {
	var letter = e.key,
		span = $("span.hidden:contains(" + letter + "):first");
	span.removeClass("hidden");
	window.app.sound.play();
	window.app.lastInput = new Date().getTime();
};

window.app.markup = function () {
	$("p").each(function () {
	    var p = $(this), 
	    	text = p.text(),
	    	spanned = "",
	    	i,
	    	c;

	    for (i = 0; i < text.length; i++) {
	    	c = text[i];
	    	if (c !== " ") {
	    		spanned = spanned + '<span class="hidden">' + c + "</span>";
	    	} else {
	    		spanned = spanned + '<span>' + c + "</span>";
	    	}
	    }

	    p.html(spanned);
	    p.removeClass('hidden');
	});
};

window.app.lastInput = 0;
window.app.timeoutMillis = 5000;

window.onload = function () {
	window.app.sound = new Audio("typeclick.wav");
	window.onkeypress = window.app.onkeypress;
	window.app.markup();
};
