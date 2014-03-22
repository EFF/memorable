function HomeController($scope) {

    var dayOfTheWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    var monthsOfTheYear = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];


    var setCurrentDateTo = function (date) {
        $scope.currentDate = date;
        $scope.currentDateAsString = dayOfTheWeek[$scope.currentDate.getDay()] + ' ' + $scope.currentDate.getDate() + ' ' + monthsOfTheYear[$scope.currentDate.getMonth()];
    };

    $scope.today = function () {
        setCurrentDateTo(new Date());
    };

    $scope.tomorrow = function () {
        setCurrentDateTo(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
    };

    $scope.today();

}
