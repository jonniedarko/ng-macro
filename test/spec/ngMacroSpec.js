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

    it("Testing getMetaRate()", function(){

        $scope.user.weight = 95;
        $scope.user.height = 193;
        $scope.user.age = 27;
        $scope.user.sex = "male";

        expect($scope.getMetaRate()).toBe('2327.01');
        expect(typeof $scope.user.bmr).toBe('number');

        expect(($scope.user.bmr).toFixed(2)).toBe('2327.01');


    });

    it("Testing getMetaRate()", function(){

        $scope.user.weight = 95;
        $scope.user.height = 193;
        $scope.user.age = 27;
        $scope.user.sex = "male";

        expect($scope.getMetaRate()).toBe('2327.01');
        expect(typeof $scope.user.bmr).toBe('number');
        expect(($scope.user.bmr).toFixed(2)).toBe('2327.01');

        $scope.user.sex = "female";
        expect($scope.getMetaRate()).toBe('1807.06');
        expect(typeof $scope.user.bmr).toBe('number');

        expect(($scope.user.bmr).toFixed(2)).toBe('1807.06');

    });

    it("Testing updateNutrition()", function(){

        $scope.user.weight = 95;
        $scope.user.height = 193;
        $scope.user.age = 27;
        $scope.user.sex = "male";
        $scope.getMetaRate();
        $scope.user.activityLevel = 1.2;
        $scope.updateNutrition();
        expect($scope.goals.current.calories.toFixed(0)).toBe((2792).toFixed(0));
        expect($scope.goals.current.protein.toFixed(0)).toBe((209).toFixed(0));
        expect($scope.goals.current.fats.toFixed(0)).toBe((124).toFixed(0));
        expect($scope.goals.current.carbs.toFixed(0)).toBe((209).toFixed(0));

    });

});