import Ember from 'ember';

export default Ember.Controller.extend({
    init: function() {
        // Update the time.
        this.updateTime();
    },

    updateTime: function() {
        var _this = this;
 
        // Update the time every second.
        Ember.run.later(function() {
            _this.set('localTime', moment().format('h:mm:ss a'));
 
            _this.get('model').forEach(function(model) {
                model.set('time',
                          moment().tz(model.get('name')).format('h:mm:ss a'));
            });
 
            _this.updateTime();
        }, 1000);
    },

   localTime: moment().format('h:mm:ss a')
});