import Module from '../common/module';
import ModuleComponent from './components/ModuleComponent.vue';

class MainModule extends Module {

    constructor() {
        super();
        this.Component = ModuleComponent;
    }

    home = () => {
        this.component.currentView = 'home';
    }

    about = () => {
        this.component.currentView = 'about';
    }

}

var module = new MainModule();

export function getModule() {
    return module;
}