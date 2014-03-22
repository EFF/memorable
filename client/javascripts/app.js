function HomeController($scope) {
    var dateStart = null;
    var dateEnd = null;

    $scope.today = function () {
        dateStart = moment(new Date()).toDate();
        dateEnd = moment(new Date()).toDate();

        $scope.selectedMoment = "aujourd'hui";
    };

    $scope.tomorrow = function () {
        dateStart = moment(new Date()).add('days', 1).toDate();
        dateEnd = moment(new Date()).add('days', 1).toDate();

        $scope.selectedMoment = "demain";
    };

    $scope.thisWeek = function () {
        dateStart = moment(new Date()).startOf('week').add('days', 1).toDate();
        dateEnd = moment(new Date()).endOf('week').add('days', 1).toDate();

        $scope.selectedMoment = "cette semaine";
    };

    $scope.nextWeek = function () {
        dateStart = moment(new Date()).startOf('week').add('days', 1).add('weeks', 1).toDate();
        dateEnd = moment(new Date()).endOf('week').add('days', 1).add('weeks', 1).toDate();

        $scope.selectedMoment = "la semaine prochaine";
    };

    $scope.thisWeekEnd = function () {
        dateStart = moment(new Date()).endOf('week').add('days', -1).toDate();
        dateEnd = moment(new Date()).endOf('week').add('days', 1).toDate();

        $scope.selectedMoment = "en fin de semaine";
    };

    $scope.today();

}
