import Ember from 'ember';

export default Ember.Route.extend({
    //ova funkcija prosiruje Ember.Route i dodaje metodu koja ce raditi redirekciju zahteva prema root app folderu  
    redirect: function() {
        this.transitionTo('clock'); //ova metoda radi redirekciju ka clock.js-u
    }
});
