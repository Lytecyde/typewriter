String.prototype.rot13 = function(){
    return this.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
};

window.onload = function () {
	window.sound = new Audio("typeclick.wav");

	window.onkeypress = function (e) {
		var letter = e.key,
			span = $("span.hidden:contains(" + letter + "):first");
		span.removeClass("hidden");
		window.sound.play();
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
};

