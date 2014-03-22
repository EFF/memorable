function HomeController($scope, $http){    
    var datasets = ['Quebec', 'Gatineau', 'Montreal', 'Sherbrook'];
    $scope.events = [];
    $scope.categories = [];
    
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
    
    $scope.$watch('events', function() {
        $scope.categories = window.Enumerable
                                  .From($scope.events)
                                  .SelectMany(function(x) {
                                      return (typeof x.CATEG === 'object' ? x.CATEG : [x.CATEG])
                                  }).Distinct().ToArray();
        
        console.log($scope.categories);
    });
}