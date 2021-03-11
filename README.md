# Azure Boards Planning Poker

This is a revivival of [Azure Boards Estimate](https://github.com/cschleiden/azure-boards-estimate) by [Christopher Schleiden](https://github.com/cschleiden). Thanks for the great starting point!

**to do**: gh action workflow and status badge
## Contributing

<span style="color: green">To test your work, first [follow these steps to set up a DevOps marketplace publisher account](https://docs.microsoft.com/en-us/azure/devops/extend/publish/overview?view=azure-devops) (if you already have an account move on).


Be sure to update the `manifest.json` to use your publisher's ID before running the script.

## local dev build

You need: nodejs, npm, make. I used a debian slim image and installed this as starting point:

```
apt-get install -y curl 
curl -sL https://deb.nodesource.com/setup_15.x | sudo bash -
apt-get -y install nodejs npm
apt-get -y install build-essential
```

1. Run `npm install` to setup your build environment

2. Ensure you have a `build` folder in the project root. The output of the `package-dev` script is there.

3. Run `npm run package-dev` 

4. Upload the package as a private extension to your Azure DevOps publisher account
  
5. Install the private extension on your Azure DevOps oragnization and test your changes.


## Release & Github Actions Workflow

Needs fixing when run in Github Actions Workflow, runs locally.

- run: npm install # ci
- run: npm run build
- run: npm run package-release

# pending before usable

## cleanup & upgrade dependencies

### npm audit fix

found 1823 vulnerabilities (1790 low, 19 moderate, 14 high)
  run `npm audit fix` to fix them, or `npm audit` for details
root@busybox:/data/azure-boards-planning-poker# npm audit fix
npm WARN deprecated mkdirp@0.5.1: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
npm WARN tslint-react@4.0.0 requires a peer of tslint@^5.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/sane/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/@cschleiden/azure-devops-react-scripts/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 194 packages from 66 contributors, removed 14 packages, updated 167 packages and moved 1 package in 136.054s

29 packages are looking for funding
  run `npm fund` for details

fixed 1734 of 1823 vulnerabilities in 2438 scanned packages
  86 vulnerabilities required manual review and could not be updated
  3 package updates for 3 vulnerabilities involved breaking changes
  (use `npm audit fix --force` to install breaking changes; or refer to `npm audit` for steps to fix these manually)
root@busybox:/data/azure-boards-planning-poker# 

### Browserslist

Browserslist: caniuse-lite is outdated. Please run next command `npm update caniuse-lite browserslist`

## Error on uploading extension to marketplace

Funny enough the local build is working and producing an extension when using the `npm run package-dev` command. But it's not uploading, error shown is:

```
The asset type 'build/static/js/runtime~main.4a686d48.js' is invalid. Asset types may only contain 'A' through 'Z', 'a' through 'z', '0' through '9', '.', '@' and '-'. The asset type can't have more than one consecutive '.'.
```

## Error on Github Actions Workflow

Error `Type error: Cannot access ambient const enums when the '--isolatedModules' flag is provided.  TS2748` was avoided by updateing package `azure-devops-ui` to latest. I guess that broke something as this needed to done manually. New issues that arose, thus reverted the change and sitting back on the old one. I guess its important now to propperly upgrade dependencies and clean up things first.
