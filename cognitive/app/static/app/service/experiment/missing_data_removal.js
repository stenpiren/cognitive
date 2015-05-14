cognitive.factory('MissingDataRemovalService', function (
    $http, CognitiveWorkspaceService) {

    var MissingDataRemovalService = {};
    var definition = {
        name: "Remove Missing Value",
        type:"remove_missing_value",
        icon_class:"fa fa-sliders",
        template: "/static/app/partial/whiteboard/experiment/missing_value_removal.html"
    }

    var createNode = function(user_id, experiment_id, token, method) {
        $http.post('/api/v1/operations/remove_missing/', {
            user_id: user_id,
            token: token,
            experiment: experiment_id,
            op_action: method
        }).success(function (data, status, headers, config) {
            console.log(data);
            CognitiveWorkspaceService.appendNode(
                data.id, definition)
        });
    };

    MissingDataRemovalService = {
        definition: definition,
        createNode: createNode
    };

    return MissingDataRemovalService;
});