window.onload = function () {
	window.sound = new Audio("typeclick.wav");

	window.onkeypress = function (e) {
		var letter = e.key;  
		var span = $("span.hidden:contains(" + letter + "):first");
		span.removeClass("hidden");
		window.sound.play();
	}

	$("p").each(function () {
	    var p = $(this), 
	    	text = p.text(),
	    	spanned = "";

	    for (var i = 0; i < text.length; i++) {
	    	var c = text[i];
	    	spanned = spanned + '<span class="hidden">' + c + "</span>";
	    }

	    p.html(spanned);
	});
}