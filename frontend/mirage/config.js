export default function() {
    this.namespace = '/api';

    let packs = [{
        type: 'packs',
        id: 'Chemistry',
        attributes: {
            title: 'Organic Chemistry: Proteins & Nucleic Acids',
            owner: 'Veruca Salt',
            // city: 'San Francisco',
            category: 'TEACHER',
            terms: 15,
            userimage: 'https://gimg.quizlet.com/-AzVJVfe_TK8/AAAAAAAAAAI/AAAAAAAAABk/zCTl3f4zxNE/photo.jpg?sz=16',
            image: 'https://o.quizlet.com/vJB2Em559uWHyrHniwZ-fQ.jpg'
            }
        }, {
        type: 'packs',
        id: 'Economics',
        attributes: {
            title: 'Germany Sentences of the Day',
            owner: 'Mike Teavee',
            // city: 'Seattle',
            category: 'TEACHER',
            terms: 2,
            image: 'https://o.quizlet.com/X3EV9UITbgLPHW1AQjMjpA.jpg'
            }
        }, {
        type: 'packs',
        id: 'downtown-charm',
        attributes: {
            title: 'Landmark Supreme Court Class',
            owner: 'Violet Beauregarde',
            // city: 'Portland',
            category: '',
            terms: 3,
            image: ''
            }
        },{
        type: 'packs',
        id: 'urban-living',
        attributes: {
            title: 'Urban Living',
            owner: 'Mike Teavee',
            city: 'Seattle',
            category: '',
            terms: 1,
            image: 'https://o.quizlet.com/DV0cZJx4OONoFVB8KIzIWQ.jpg'
            }
        },{
        type: 'packs',
        id: 'urving',
        attributes: {
            title: 'Urban Living',
            owner: 'Mike Teavee',
            city: 'Seattle',
            category: 'Condo',
            terms: 1,
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
            }
        },{
        type: 'packs',
        id: 'iving',
        attributes: {
            title: 'Urban Living',
            owner: 'Mike Teavee',
            city: 'Seattle',
            category: 'Condo',
            terms: 1,
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
            }
        },{
        type: 'packs',
        id: 'living',
        attributes: {
            title: 'Urban Living',
            owner: 'Mike Teavee',
            city: 'Seattle',
            category: 'Condo',
            terms: 1,
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
            }
        }]
    this.get('/packs', function(db, request) {
        if (request.queryParams.city !== undefined) {
            let filteredPacks = packs.filter(function(i) {
                return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
            });
            return {data: filteredPacks};
        } else {
            return {data:packs};
        }
    });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
