# Chapter 1 Demo: npm audit

## Objectives:
* Walk through steps to update a project with security vulnerabilities

## Steps

1. This is a project which has security vulnerabilities. Copy this project to your `WIP` directory to make changes that will not be tracked. Do all of your work in this new `WIP\npm-audit` directory. 

1. Confirm your npm verson is > 6. From command prompt issue `npm -v`

    If it is out of ate you can update npm using `npm i npm@latest -g`

1. Take a look at the dependencies in `package.json`. Write down the version of mocha. 

1. Try to do an npm install and note the warnings about deprecations and vulnerabilities.

1. Do an `npm audit` to find out more details.

1. Read the output. Notice the given command will update mocha and there is a warning that with semantic versioning, there is potentially a breaking change.
What are the 3 vulnerabilities?

1. Now run `npm audit fix` - notice why this action is blocked. 

1. Run this command again, passing the specified flag to install breaking changes.

1. Open package.json, what version is mocha now?

1. You can also check for outdated packages in general. Try the command `npm outdated`.

1. Make note of the versions of nyc. Use `npm update`. This is a strict update, it will follow your semver rules in package.json.

1. In package.json change the ~ to ^ for the sinon package. What is teh current listd version? Now do an an `npm update --save`. What is the new version?

1. This project is really old. We coudl either change the symbol to * whih would get potetially breaking changes, or we can use another package called Non-Strict Versioned Updates ncu.

    Look at this package on npm. 

1. Install it globally    `npm i npm-check-updates`

1. Use it in your working project with ncu

1. Now update package.json using `ncu -u`

1. ^1.0.0 is a range that will includes all non-major updates. If you run npm update, it will install 1.0.1 without changing the dependency listed in your package file. You don't need to update your package file if the latest version is satisfied by the specified dependency range. If you really want to upgrade your package file (even though it's not necessary), you can run ncu --upgradeAll.