window.onload = function () {
	window.onkeypress = function (e) {
		var letter = e.key;  
		var span = $("span.hidden:contains(" + letter + "):first");
		span.removeClass("hidden");
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