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
        when('/ethnography2', {
            templateUrl: 'templates/ethnography2.html',
            controller: 'ethnography2Controller'
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
        when('/mediadetailedView', {
            templateUrl: 'templates/media.html',
            controller: 'mediaController'
        }).
        when('/advertizingdetailedView', {
            templateUrl: 'templates/wip.html'
        }).
        when('/graphicdetailedView', {
            templateUrl: 'templates/wip.html'
        }).
        when('/human', {
            templateUrl: 'templates/wip.html'
        }).
        when('/aurallifedetailedView/:id', {
            templateUrl: 'templates/detail_landscape.html',
            controller: 'detailLandscapeController'
        }).
        when('/detailedView/:id', {
            templateUrl: 'templates/detailView.html',
            controller: 'detailedViewController'
        }).
        when('/Error', {
        templateUrl: 'templates/error.html'
    }).
        otherwise({
            redirectTo: '/'
        });
});

avenue.controller("bannerController", ['$scope', '$window', function ($scope, $window) {
    var key = 'wipBannerDismissed';
    $scope.showBanner = !$window.sessionStorage.getItem(key);
    $scope.dismissBanner = function () {
        $window.sessionStorage.setItem(key, '1');
        $scope.showBanner = false;
    };
}]);

avenue.controller("homeController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/homepage.json", { cache: true }).success(function (data) {
        $scope.items = data.items;
    }).error(function (data) {
        $window.location.href = '#/Error';
    });

    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);

avenue.controller("foodController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/food.json", { cache: true }).success(function (data) {
        $scope.items = data.items;
    }).error(function (data) {
        $window.location.href = '#/Error';
    });
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);
     
avenue.controller("graphicsController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/graphics.json", {cache: true}).success(function(data){
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);
     
avenue.controller("interfaceController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/interfaces.json", {cache: true}).success(function(data){
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);

avenue.controller("investigationsController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/investigations.json", {cache: true}).success(function(data){
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);
     
avenue.controller("olfactoryController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/olfactory.json", {cache: true}).success(function(data){
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);
     
avenue.controller("animationController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/animation.json", {cache: true}).success(function(data){
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);
     
avenue.controller("mediaController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/media.json", {cache: true}).success(function(data){
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);
     
avenue.controller("graphicDetailController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $window.location.href = 'https://www.behance.net/simranchopra'
}]);

avenue.controller("advertizingController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/advertizing.json", {cache: true}).success(function(data){
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);
    
avenue.controller("graphicDetailsController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/aurallife.json", {cache: true}).success(function(data){
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);
     
avenue.controller("detailLandscapeController", ['$scope', '$http', '$window', '$routeParams', function($scope, $http, $window, $routeParams) {
    $scope.items = [];
    $scope.detail_page_id = $routeParams.id
    $http.get("data/freeform.json", {cache: true}).success(function(data){
        for (var i = 0; i < data.length; i++) {
                        if (data[i].detail_landscape_id == $routeParams.id) {
                                $scope.items = data[i];
                    // setCookie("html_player", 1, 365);
                    break;
                }
            }
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
}]);
     

     
avenue.controller("detailedViewController", ['$scope', '$http', '$window', '$routeParams', function ($scope, $http, $window, $routeParams) {
 
    $scope.item = [];
    $scope.detail_page_id = $routeParams.id
    $http.get("data/detailedView.json", {cache: true}).success(function (data) {
        for (var i = 0; i < data.items.length; i++) {
                        if (data.items[i].detailedLinkID == $routeParams.id) {
                                $scope.item = data.items[i];
                    // setCookie("html_player", 1, 365);
                    break;
                }
            }
        }).error(function (data) {
            $window.location.href = '#/Error';
        });
    
}])
     
avenue.controller("ethnographyController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/ethnography.json", {cache: true}).success(function(data){
        $scope.items = data.items;
    }).error(function(data) {
        $window.location.href = '#/Error';
    })
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);
     
avenue.controller("ethnography2Controller", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get("data/ethnography2.json", { cache: true }).success(function (data) {
        $scope.items = data.items;
    }).error(function (data) {
        $window.location.href = '#/Error';
    });
    $scope.hoverIn = function () {
        this.hoverEdit = true;
    }
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
}]);

avenue.controller("slideshowController", ['$scope', '$http', function ($scope, $http, $window, $routeParams) {
    $scope.detail_page_id = 5
    $http.get("data/detailedView.json", {cache: true}).success(function (data) {
        $scope.item = data.items[4];
        }).error(function (data) {
            $window.location.href = '#/Error';
        })
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