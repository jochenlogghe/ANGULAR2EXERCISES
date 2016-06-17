System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Movie;
    return {
        setters:[],
        execute: function() {
            Movie = (function () {
                function Movie(title, rating, numberOfVotes) {
                    this.title = title;
                    this.rating = rating;
                    this.numberOfVotes = numberOfVotes;
                }
                return Movie;
            }());
            exports_1("Movie", Movie);
        }
    }
});
