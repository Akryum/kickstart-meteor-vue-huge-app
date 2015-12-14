var Vue = require('vue');

export default class Module {
    // Current active module
    static current = null;

    // Name
    name = null;

    // Component class
    Component = null;

    // Component instance
    component = null;

    constructor() {

    }

    // Destroys the module component (taking into account transitions)
    /*destroy = () => {
        return new Promise((resolve) => {
            this.component.$remove(() => {
                this.component.$destroy();
                resolve();
            });
        });
    };*/

    // Destroys the current module if any
    /*static destroyCurrent() {
        return new Promise((resolve) => {
            var current = Module.current;
            if (current) {
                current.destroy().then(resolve);
            } else {
                resolve();
            }
        });
    }*/

    createComponent = () => {
        return new Promise((resolve) => {
            // Alias for hooks
            var module = this;

            // Created hook
            this.Component.created.push(function() {
                module.component = this;
                resolve();
            });

            // Destroyed hook
            if(!this.Component.destroyed) {
                this.Component.destroyed = [];
            }
            this.Component.destroyed.push(function() {
                module.component = null;
            });

            // Register component
            Vue.component(this.Component.name, this.Component);

            // Switch to component in the root component
            RootVue.currentView = this.Component.name;
        });
    };

    needInit = () => {
        return (this.component === null || Module.current !== this);
    };

    startup = () => {
        return new Promise((resolve) => {
            if (this.needInit()) {
                /*Module.destroyCurrent()
                    .then(this.createComponent)
                    .then(() => {
                        resolve();
                    });*/
                this.createComponent().then(() => {
                    Module.current = this;
                    resolve();
                });
            } else {
                resolve();
            }
        });
    };

}