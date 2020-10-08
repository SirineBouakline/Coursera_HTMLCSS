(function () {
	var GoodByeSpeaker = { };
	var TheWord = "Good Bye";
	GoodByeSpeaker.speak = function (name) {
		document.write(TheWord + " " + name + '<br>');
	}
	window.GoodByeSpeaker = GoodByeSpeaker;
})();