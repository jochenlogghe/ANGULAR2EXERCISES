System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rabbit;
    return {
        setters:[],
        execute: function() {
            Rabbit = (function () {
                function Rabbit(name, age, gender, desexed, vaccinated, adoptionFee) {
                    this.name = name;
                    this.age = age;
                    this.gender = gender;
                    this.desexed = desexed;
                    this.vaccinated = vaccinated;
                    this.adoptionFee = adoptionFee;
                }
                return Rabbit;
            }());
            exports_1("Rabbit", Rabbit);
        }
    }
});
