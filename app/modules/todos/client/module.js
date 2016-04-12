import Module from 'main/client/imports/module'
import ModuleComponent from './components/Module.vue'

class ThisModule extends Module {

    constructor() {
        super();
        this.Component = ModuleComponent;
    }

    index = () => {
        this.startup().then(() => {
            console.log("welcome to todolist");
            this.component.view = 'home';
        });
    }

    about = () => {
        this.startup().then(() => {
            console.log("about");
            this.component.view = 'about';
        });
    }

    list = () => {
        this.startup().then(() => {
            console.log("todos list");
            this.component.view = 'todos-list';
        });
    }
}

module.exports = new ThisModule();
