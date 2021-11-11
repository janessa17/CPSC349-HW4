(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    class RemoteDataStore {
        constructor(url) {
            firebase.initializeApp({
                apiKey: 'AIzaSyBdUSTDGCiUuUin6ZSvx1PXTj5AFnv2LuI',
                projectId: 'COFFEERUN-3v98q',
              });

            this.collection = firebase.firestore().collection('orders');

            console.log('Loading');

            if (!url) {
                throw new Error('URL not provided');
            }

            this.serverURL = url;
        }
        async add(key, val) {
            return await this.collection.doc(key).set(val);
        }
        async get(key, cb) {
            return await this.collection.doc(key).get();
        }
        async getAll(cb) {
            var snapshot = await this.collection.get();
            var data = [];

            snapshot.forEach(function(doc) {
                data.push(doc.data());
            });

            return data
        }
        async remove(key) {
            return await this.collection.doc(key).delete();
        }
    }
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;

})(window);
