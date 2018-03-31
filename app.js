window.app = {};

window.app.code = function(){
    return this.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
};

window.app.lastInput = 0;
window.app.timeoutMillis = 5000;

window.onload = function () {
	window.app.sound = new Audio("typeclick.wav");

	window.onkeypress = function (e) {
		var letter = e.key,
			span = $("span.hidden:contains(" + letter + "):first");
		span.removeClass("hidden");
		window.app.sound.play();
		window.app.lastInput = new Date().getTime();
	};

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

	window.setInterval(function () {
		var diff = new Date().getTime() - window.lastInput;
		if (diff < window.app.timeoutMillis) {
			return;
		}

		var span = $('span').not('hidden').filter(':last');
		span.addClass('hidden');
	}, window.app.timeoutMillis);
};

