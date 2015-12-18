import Ember from 'ember';

export default Ember.Controller.extend({
	init: function() {
		//azurira vreme; poziva funkciju koju cemo kasnije kreirati kao metodu
		this.updateTime();
	},
    //anonimna funkcija, kao metoda updateTime property-a
	updateTime: function() { 
		var _this = this; //varijabla _this se deklarise kao this 
		
		//Koristeci Ember.run.later(deo ember-a) podesavamo da se vreme azurira u milisekundama
		Ember.run.later(function() {
			_this.set('localTime', new Date().toLocaleTimeString()); //set metoda ember-a
			_this.updateTime(); //ovo mi je maglovito... 
		}, 1000);//vreme osvezavanja
	},
	localTime: new Date().toLocaleTimeString() //ovde je deo koji  hadlebar template-u menja localTime u h2 tag-u koristeci Date js-a
});
