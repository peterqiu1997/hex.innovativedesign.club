var app = angular.module('hex', [])
    .controller('MainCtrl', ['$scope', '$document', function($scope, $document) {

        $scope.saturday = [

        ];

        $scope.sunday = [

        ];

        function scrollAnimate(container) {
            $('html, body').animate({
                scrollTop: $(container).offset().top
            }, 'slow');
        };

        $(document).ready(function() {

            $('#image-wrapper').click(function() {
                scrollAnimate('#about-container');
            });

            $('#about').click(function() {
                scrollAnimate('#about-container');
            });

            $('#schedule').click(function() {
                scrollAnimate('#schedule-container')
            });

        });

    }]);
