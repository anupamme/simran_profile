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
        when('/graphics', {
            templateUrl: 'templates/graphics.html',
            controller: 'graphicsController'
        }).
        when('/investigationsdetailedView', {
            templateUrl: 'templates/investigations.html',
            controller: 'investigationsController'
        }).
        when('/olfactorydetailedView', {
            templateUrl: 'templates/olfactory.html',
            controller: 'olfactoryController'
        }).
        when('/animationdetailedView', {
            templateUrl: 'templates/animation.html',
            controller: 'animationController'
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
     
avenue.controller("graphicsController", ['$scope', '$http', function($scope, $http) {
    $http.get("data/graphics.json", {cache: true}).success(function(data){
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

avenue.controller("investigationsController", ['$scope', '$http', function($scope, $http) {
    debugger
    $http.get("data/investigations.json", {cache: true}).success(function(data){
        debugger
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
}]);
     
avenue.controller("olfactoryController", ['$scope', '$http', function($scope, $http) {
    debugger
    $http.get("data/olfactory.json", {cache: true}).success(function(data){
        debugger
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
}]);
     
avenue.controller("animationController", ['$scope', '$http', function($scope, $http) {
    debugger
    $http.get("data/animation.json", {cache: true}).success(function(data){
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
//    $scope.slider = new IdealImageSlider.Slider('#slider');
//    $scope.url = 'data/detailedView.json';
//    $scope.getIframeSrc = function (videoURL) {
//        return 'videoURL';
//    };
    
        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    debugger
    $scope.detail_page_id = $routeParams.id
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
}]).animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });

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