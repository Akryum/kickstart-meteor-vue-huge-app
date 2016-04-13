import Module from 'main/client/imports/module'
import ModuleComponent from './components/Module.vue'

class AdminModule extends Module {

    constructor() {
        super();
        this.Component = ModuleComponent;
    }

    index = () => {
        this.startup().then(() => {
            console.log("admin index");
            this.component.view = 'home';
        });
    }

    about = () => {
        this.startup().then(() => {
            console.log("about");
            this.component.view = 'about';
        });
    }
}

module.exports = new AdminModule();
