app.controller('newFieldController', function ($scope, $route) {
    $scope.dataType = 'STRING';
    $scope.addToFields = function () {
        $scope.form.fields.push({ name: $scope.name, required: $scope.required, dataType: $scope.dataType })
        $scope.name = null;
        $scope.required = null;
        $scope.dataType = 'STRING';
    }
    $scope.saveForm = function () {
        const forms = JSON.parse(localStorage.getItem('forms'));
        forms.filter(x => x.name === formName)[0] = $scope.form;
        localStorage.setItem('forms', forms);
    }
    $scope.go = function () {
        window.location = 'index.html';
    };
    const formName = $route.current.params.name;
    if (formName === 'new') {

    } else {
        $scope.form = getFormByFormName(formName);
    }
});


function getFormByFormName(formName) {
    const forms = JSON.parse(localStorage.getItem('forms'));
    return forms.filter(x => x.name === formName)[0];
}