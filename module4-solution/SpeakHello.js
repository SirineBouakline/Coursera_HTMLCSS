// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
(function(){
var HelloSpeaker = { };
	var TheWord = "Hello";
	HelloSpeaker.speak = function (name) {
		document.write(TheWord + " " + name + '<br>');
	}
	window.HelloSpeaker = HelloSpeaker;
})();