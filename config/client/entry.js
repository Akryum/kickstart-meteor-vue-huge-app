// Vue+Meteor patch
const useBlaze = false;
import Vue from 'vue';
import {patchVue} from './meteor-vue';
patchVue(Vue, useBlaze);

// Start
import 'main/client/main';
