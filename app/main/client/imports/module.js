import Vue from 'vue';
import {root} from 'main/client/main';

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
            root.currentView = this.Component.name;
        });
    };

    needInit = () => {
        return (this.component === null || Module.current !== this);
    };

    startup = () => {
        return new Promise((resolve) => {
            if (this.needInit()) {
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
