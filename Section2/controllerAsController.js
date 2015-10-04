/**
 * Created by randy on 10/3/15.
 */
angular.module('DemoApp')
    .controller('ParentCtrl', function() {
        var Prt = this;
        Prt.name = 'Randy';
    })

    .controller('SonCtrl', function() {
        var Son = this;
        Son.name = 'Champ';
    });