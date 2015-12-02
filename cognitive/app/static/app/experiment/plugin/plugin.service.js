(function () {
  'use strict';

  angular.module('cognitive.experiment')
    .factory('CognitiveComponentService', CognitiveComponentService);

  function CognitiveComponentService(
    IntroductionService, FileInputService,
    RowAdditionService, NormalizationService,
    ProjectionService, DuplicateRemovalService,
    MissingDataRemovalService,
    FormulaService, MachineLearningService) {

    var CognitiveComponentService = {};

    var components = [
      IntroductionService.definition,
      FileInputService.definition,
      RowAdditionService.definition,
      FormulaService.definition,
      NormalizationService.definition,
      ProjectionService.definition,
      DuplicateRemovalService.definition,
      MissingDataRemovalService.definition,
      MachineLearningService.definition,
    ];

    CognitiveComponentService = {
      getCognitiveComponents: function () {
        return components
      },
      pushCognitiveComponent: function (component) {
        components.push(component)
      }
    };

    return CognitiveComponentService;
  };

})();
