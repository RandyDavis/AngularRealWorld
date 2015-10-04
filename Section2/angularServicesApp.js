/*** Created by randy on 10/4/15.*/
angular.module('myFirstApp', [])

    .factory('personService', function() {

        var person = {};

        person.printName = function(firstName, lastName) {
            return firstName + ' ' + lastName;
        }

        return person;
    })



