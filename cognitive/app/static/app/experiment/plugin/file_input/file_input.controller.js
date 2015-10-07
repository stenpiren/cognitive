(function() {
  'use strict';
  angular.module('cognitive.experiment')
    .controller('DataInputController', DataInputController);

  function DataInputController (
    $scope, CognitiveWorkspaceService,
    FileInputService, UserService) {
    var vm = this;
    vm.user = UserService.getCurrentUser();

    $scope.createNode = function() {
      var workspace = CognitiveWorkspaceService.getCurrentWorkspace()
      FileInputService.createNode(
        vm.user.id, workspace.id,
        vm.user.token, file_name, file_body);
    };

    $scope.uploadFile = function (event) {
      var file = event.target.files[0];
      $scope.file_name = file.name;
      var reader = new FileReader();
      reader.onload = function (event) {
        file_body = event.target.result;
        $scope.file_body = file_body
        parsed_file = $.csv.toArrays(file_body);
        $scope.parsed_file = parsed_file
      };
      reader.readAsText(file);
      file_name = file.name;
    }
  };

})();
