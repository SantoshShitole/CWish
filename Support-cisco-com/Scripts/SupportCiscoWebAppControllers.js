angular.module("SupportCiscoWebAppControllers", [])
.controller("SupportCiscoWebAppController", function ($scope) {
    $scope.selectedTags = [];
    $scope.selectedProducts = [];
    $scope.similarIdeas = [];

    //prepare list of tags
    $scope.tags = [
        "PRODUCT",
        "CUCM",
        "FUNCTIONALITY",
        "MONGO DB"
    ];

    $scope.products = [      
        "CUCM",      
        "MONGO DB"
    ];

    $scope.ideas = [
        { "title": "", "ideaTags": [], "description": "" },
        { "title": "Mongo DB Support for CUCM", "ideaTags": ["MONGO DB", "CUCM"], "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor." },
        { "title": "CUCM Persistent Chat Advanced Logging", "ideaTags": ["CUCM"], "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet." },
        { "title": "Cybersecurity as a Growth Advantage", "ideaTags": ["CYBERSECURITY"], "description": "In an era of unparalleled disruption, companies need to begin viewing cybersecurity differently—beyond its traditional defensive role. Those that do will have a competitive advantage. These Secure Digitizers are strongly committed to growth through digital business models and offerings, with cybersecurity as a critical foundation. Learn how they are leading way in today’s digital economy." }
    ];


    $scope.onIdeaChange = function () {
        $scope.selectedTags = [];
        $scope.selectedProducts = [];
        $scope.similarIdeas = [];

        //alert($scope.ideas[0].description);
        
        var arrayLen = $scope.tags.length;
        
        for (var i = 0; i < arrayLen ; i++) {
            if ($scope.ideaText.toUpperCase().indexOf($scope.tags[i]) !== -1){
                $scope.selectedTags.push($scope.tags[i]);
            }            
        }

        arrayLen = $scope.products.length;

        for (var i = 0; i < arrayLen ; i++) {
            if ($scope.ideaText.toUpperCase().indexOf($scope.products[i]) !== -1) {
                $scope.selectedProducts.push($scope.products[i]);
            }
        }

        arrayLen = $scope.ideas.length;
        var ideaTagLen = 0;
        //var selectedTagLen = $scope.selectedTags.length;

        for (var i = 0; i < arrayLen ; i++) {
            ideaTagLen = $scope.ideas[i].ideaTags.length;

            for (var t = 0; t < ideaTagLen; t++) {
                if ($scope.selectedTags.indexOf($scope.ideas[i].ideaTags[t]) > -1) {
                    $scope.similarIdeas.push($scope.ideas[i]);
                }
            }            
        }


    }

})//end of SupportCiscoWebAppController
