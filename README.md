# Meteor + Webpack + Vue (for a big app)

Example project featuring flow-router, code-splitting, vue.js components hot-reloading

## Usage

```
meteor
```

The example app has two lazy loaded modules, thanks to webpack code-splitting. However, the flow-router routes are all included in the initial load.

Most of your Vue components will be fully hot-reloaded (template, style and code).

## TODO

- Server-side rendering for progressive enhancement
- Server-side caching
- Fix not hot-reloaded Vue components (module roots)
- Unit Tests
- Test mobile target
- Make a node package?
- Publish akryum:vue-patch on atmosphere