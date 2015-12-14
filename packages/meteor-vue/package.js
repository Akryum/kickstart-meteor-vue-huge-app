Package.describe({
    name: "akryum:vue-patch",
    summary: "Vue Patch for Meteor. It provides data-driven components with a simple and flexible API. Use it in webpack entry.",
    version: "0.0.1",
    git: ""
});

Package.onUse(function (api) {
    api.versionsFrom('1.0');
    api.use(['underscore@1.0.0']);
    api.addFiles('lib/client.js', 'client');
    api.export(['PatchVue', 'RootVue'], 'client');
});