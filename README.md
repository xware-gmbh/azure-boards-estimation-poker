# Azure Boards Planning Poker

This is a revivival of [Azure Boards Estimate](https://github.com/cschleiden/azure-boards-estimate) by [Christopher Schleiden](https://github.com/cschleiden). Thanks for the great starting point!

**to do**: gh action workflow and status badge
## Contributing

<span style="color: green">To test your work, first [follow these steps to set up a DevOps marketplace publisher account](https://docs.microsoft.com/en-us/azure/devops/extend/publish/overview?view=azure-devops) (if you already have an account move on).


Be sure to update the `manifest.json` to use your publisher's ID before running the script.

## local build

1. Run `npm install` to setup your build environment

2. Ensure you have a `build` folder in the project root. The output of the `package-dev` script is there.

3. Run `npm run package-dev` 

4. Upload the package as a private extension to your  Azure DevOps publisher account
  
5. Install the private extension on your Azure DevOps oragnization and test your changes.


## Github Actions Workflow

- apt-get update
- apt-get install curl

- node 14

    curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
    apt-get install -y nodejs

# TODO

## npm audit fix

audited 2507 packages in 108.839s

3 packages are looking for funding
  run `npm fund` for details

found 1863 vulnerabilities (1830 low, 19 moderate, 14 high)
  run `npm audit fix` to fix them, or `npm audit` for details



