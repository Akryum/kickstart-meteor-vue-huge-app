import Module from '../common/module';
import ModuleComponent from './components/Admin.vue';

class AdminModule extends Module {

    constructor() {
        super();
        this.Component = ModuleComponent;
    }

    index = () => {
        console.log("welcome to admin");
    }

}

var module = new AdminModule();

export function getModule() {
    return module;
}