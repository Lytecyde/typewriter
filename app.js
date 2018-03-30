window.onload = function () {
	window.onkeypress = function (e) {
		console.log(e);
		var letter = e.key;   
	}

	$("p").each(function () {
	    var p = $(this), 
	    	text = p.text(),
	    	spanned = "";

	    for (var i = 0; i < text.length; i++) {
	    	var c = text[i];
	    	spanned = spanned + "<span>" + c + "</span>";
	    }

	    p.html(spanned);
	});
}


