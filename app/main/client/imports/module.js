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

            this._componentReady = () => {
                resolve();
            };

            if(!this.__hooksApplied) {

                // Created hook
                if(!this.Component.created) {
                    this.Component.created = [];
                }
                this.Component.created.push(function() {
                    module.component = this;
                    module._componentReady();
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

                this.__hooksApplied = true;
            }

            // Switch to component in the root component
            root.currentView = this.Component.name;
        });
    };

    needInit = () => {
        return (this.component === null);
    };

    startup = () => {
        return new Promise((resolve) => {
            Module.current = this;
            if (this.needInit()) {
                this.createComponent().then(resolve);
            } else {
                resolve();
            }
        });
    };

}
