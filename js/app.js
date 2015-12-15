 (function (angular) {
var avenue = angular.module('avenue', ['ngRoute']);

avenue.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        }).
        when('/about', {
            templateUrl: 'templates/about.html'
        }).
        when('/resume', {
            templateUrl: 'templates/resume.html'
        }).
        when('/detailedView/:id', {
            templateUrl: 'templates/detailView.html',
            controller: 'detailedViewController'
        }).
        when('/food', {
            templateUrl: 'templates/food.html',
            controller: 'foodController'
        }).
        when('/interfaces', {
            templateUrl: 'templates/interface.html',
            controller: 'interfaceController'
        }).
        when('/ethnography', {
            templateUrl: 'templates/ethnography.html',
            controller: 'ethnographyController'
        }).
        when('/Error', {
        templateUrl: 'templates/error.html'
    }).
        otherwise({
            redirectTo: '/#/'
        });
});

avenue.controller("homeController", ['$scope', '$http', function ($scope, $http) {
    $http.get("data/homepage.json", { cache: true }).success(function (data) {
        $scope.items = data.items;
    }).error(function (data) {
        $window.location.href = '#/Error';
    });
}]);

avenue.controller("foodController", ['$scope', '$http', function($scope, $http) {
    $http.get("data/food.json", {cache: true}).success(function(data){
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
}]);
     
avenue.controller("interfaceController", ['$scope', '$http', function($scope, $http) {
    $http.get("data/interfaces.json", {cache: true}).success(function(data){
        debugger
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
}]);
     
avenue.controller("ethnographyController", ['$scope', '$http', function($scope, $http) {
    $http.get("data/ethnography.json", {cache: true}).success(function(data){
        debugger
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
}]);
     
avenue.controller("detailedViewController", ['$scope', '$http', '$window', '$routeParams', function ($scope, $http, $window, $routeParams) {
 
    $scope.item = [];
    debugger
    $scope.slider = new IdealImageSlider.Slider('#slider');
//    $scope.url = 'data/detailedView.json';
//    $scope.getIframeSrc = function (videoURL) {
//        return 'videoURL';
//    };
    debugger
    $http.get("data/detailedView.json", {cache: true}).success(function (data) {
        debugger
        for (var i = 0; i < data.items.length; i++) {
                debugger
                if (data.items[i].detailedLinkID == $routeParams.id) {
                    debugger
                    $scope.item = data.items[i];
                    // setCookie("html_player", 1, 365);
                    break;
                }
            }
        }).error(function (data) {
            $window.location.href = '#/Error';
        });
//    $scope.fetchContent = function () {
//        debugger
//        
//    }
//    $scope.fetchContent();

//    $http.get("data/homepage.json", { cache: true }).success(function (data) {
//        $scope.list = data.items;
//    }).error(function (data) {
//        $scope.noDataFound = "No data found";
//       // $window.location.href = '#/Error';
//    });
}]);

avenue.filter("nl2br", ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);


avenue.filter('youtubeEmbedUrl', function ($sce) {
    return function (videoURL) {
        return $sce.trustAsResourceUrl(videoURL);
    };
});

 })(window.angular);