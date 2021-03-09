# Azure Boards Planning Poker

This is a revivival of [Azure Boards Estimate](https://github.com/cschleiden/azure-boards-estimate) by [Christopher Schleiden](https://github.com/cschleiden). Thanks for the great starting point!

**to do**: gh action workflow and status badge
## Contributing

<span style="color: green">To test your work, first [follow these steps to set up a DevOps marketplace publisher account](https://docs.microsoft.com/en-us/azure/devops/extend/publish/overview?view=azure-devops) (if you already have an account move on).

1. Run `npm run package-dev` and upload the package as a private extension to your  Azure DevOps publisher account
> Note: You may need to add a directory called `build` to the project root when running the script. The output of the `package-dev` script is there.
 - Be sure to update the `manifest.json` to use your publisher's ID before running the script.
 
2. Install the private extension on your Azure DevOps oragnization and test your changes.





