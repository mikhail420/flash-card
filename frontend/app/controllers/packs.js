import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByCity(param) {
			if(param !== '') {
				return this.get('store')
          			.query('pack', { city: param }).then((results) => {
            		return { query: param, results: results };
          	});
			} else {
				// return this.get('store').findAll('pack');
				return this.get('store')
          			.findAll('pack').then((results) => {
            		return { query: param, results: results };
          		});
			}
		}
	}
});
