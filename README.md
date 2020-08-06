# Radio UI

> Radio Retail Component Library

## About

Radio UI is a Component Library which provides developers with the easiest possible way of building [Radio Retail](http://www.zapop.com/service/radioretail/)’s products.

## Motivation

In order to create a great experience for our users, the component library is intented to be a single source of truth for all stakeholders.

## Goals

- Create consistency across products.
- Speed up design and development velocity.
- Improve overall quality of the codebase.
- Provide a base set of components that can be reused in many contexts.

## Install

The following peer dependencies are required:

- [React](https://www.npmjs.com/package/react)
- [React DOM](https://www.npmjs.com/package/react-dom)
- [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [Styled Components](https://www.npmjs.com/package/styled-components)
- [@lessondesk/material-icons](https://www.npmjs.com/package/@lessondesk/material-icons)

Afterwards, you can install the library:

```sh
npm install @radio-retail/ui
# OR
yarn add @radio-retail/ui
```

## Contributing

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

For all contributors, please be sure to read the
[Contributing](CONTRIBUTING.md) doc.

## Credits

This component library was heavily inspired by the excellent [Priceline.com Design System](https://github.com/pricelinelabs/design-system).

## Publishing

This module uses the [Automated releases for npm packages](https://github.com/marketplace/actions/automated-releases-for-npm-packages) Github action for releasing when pushed to the `master` branch.

### Versioning

- If the string "BREAKING CHANGE" is found anywhere in any of the commit messages or descriptions the major version will be incremented.
- If a commit message begins with the string "feat" then the minor version will be increased. This works for most common commit metadata for feature additions: "feat: new API" and "feature: new API".
- All other changes will increment the patch version.

### FAQS

- What is going on with the `package.json` version? See the [Script does not update package.json issue](https://github.com/mikeal/merge-release/issues/12)

## License

MIT
