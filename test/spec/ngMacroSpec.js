describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("ngMacro", function(){
    //define our scope and controller
    var $scope, ctrl;

    //before each test
     beforeEach(function(){
        //load our module
        module('ngMacro');
        //inject our scope and controller with that of our 'macroCtrl'
        inject(function ($rootScope, $controller) {

              $scope = $rootScope.$new();

              ctrl = $controller('macroCtrl', {
                $scope: $scope
              });
          });
    });

    it("Check ng-macro module exists", function(){

        expect($scope.goals.current.title).toBe("Mainteance");
    });


});