var app = angular.module('hex', [])
    .controller('MainCtrl', ['$scope', '$document', function($scope, $document) {

        $scope.saturday = [

        ];

        $(document).ready(function() {
            $('.image-wrapper').click(function() {
                $('html, body').animate({
                    scrollTop: $('.schedule-container').offset().top
                }, 'slow');
            });
        });

    }]);
