function HomeController($scope, $http){    
    var datasets = ['Quebec', 'Gatineau', 'Montreal', 'Sherbrook'];
    $scope.events = [];

    var getData = function(dataset){
        $http.get("/client/javascripts/data/" + dataset + ".json")
            .success(function(data){
                var eventsArray = data.EVTS.EVT;
                $scope.events = $scope.events.concat(eventsArray);
            })
            .error(function(){
                console.log("error");
            });
        };

    for(var i in datasets){
        getData(datasets[i]);
    }
}