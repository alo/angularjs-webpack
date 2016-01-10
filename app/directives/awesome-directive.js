export default ngModule => {
    ngModule.directive('awesomeDirecitve', function($log) {
        require('./awesome-directive.css');
        return {
            restrict: 'E',
            scope:{},
            template: require('./awesome-directive.html'),
            controllerAs:'vm',
            controller:function(){
                var vm = this;
                vm.hola = 'Hola! desde la directiva que cargamos con webpack!';
                $log.info('Dependency Injection', vm.hola);
            }
        }
    })
};