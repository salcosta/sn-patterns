/**
 * File: angular.client.js
 *
 * Description: Client script for 'angular' UI page.  See angular.xhtml
 */
function IncidentCtrl($scope, $http) {
    $scope.incidents = [];
    $scope.new_incident = {sys_id: "", number: "", priority: 1, state: 0, short_description: ""};
    $scope.priority_options = [1, 2, 3, 4, 5];

    $scope.read = function (query) {
        $http.get("/incident.do?JSON&sysparm_action=getRecords&sysparm_query=" + query).
            success(function (data) {
                $scope.incidents = data.records;
            });
    };

    $scope.create = function () {
        $http.post('/incident.do?JSON&sysparm_action=insert', $scope.new_incident).
            success(function (data) {
                $scope.incidents.unshift(data.records[0]);
                console.log(data.records[0]);
            });
    };

    $scope.update = function (item) {
        $http.post('/incident.do?JSON&sysparm_action=update&sysparm_query=sys_id=' + item.sys_id, item).
            success(function (data) {
                // No need to update locally since its already there
                console.log(data.records[0]);
            });
    };

    $scope.remove = function (item) {
        if (!confirm("Really Delete This Record?")) return;
        $http.post("/incident.do?JSON&sysparm_action=deleteRecord&sysparm_sys_id=" + item.sys_id).
            success(function (data) {
                $scope.incidents.splice($scope.incidents.indexOf(item), 1);
                console.log(data.records[0]);
            });
    };

    $scope.read("priority=1^ORDERBYDESCnumber");
}
