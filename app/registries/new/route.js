import Ember from 'ember';

export default Ember.Route.extend({
  model: function(/*params, transition*/) {
    var registry = this.get('store').createRecord({
      type:'registry',
      serverAddress: '',
    });

    var credential = this.get('store').createRecord({
      type:'registryCredential',
      registryId: 'tbd',
    });

    return this.store.find('registry').then((registries) => {
      return Ember.Object.create({
        allRegistries: registries,
        registry: registry,
        credential: credential
      });
    });
  },

  setupController: function(controller, model) {
    controller.set('model',model);
    controller.send('selectDriver','dockerhub');
  },

  resetController: function (controller, isExiting/*, transition*/) {
    if (isExiting)
    {
      controller.set('errors', null);
    }
  },
});
