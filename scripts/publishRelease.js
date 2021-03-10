"use strict";

var exec = require("child_process").exec;

var manifest = require("../azure-devops-extension.json");
var extensionId = manifest.id;
var extensionPublisher = manifest.publisher;
var extensionVersion = manifest.version;

// Package extension
var command = `tfx extension create --overrides-file ../configs/release.json --manifest-globs ./azure-devops-extension.json --no-prompt --json --rev-version`;
exec(command, { 
    "cwd": "./dist"
}, (error, stdout) => {
    if (error) {
        console.error(`Could not create package: '${error}'`);
        return;
    }
    
    let output = JSON.parse(stdout);
    
    console.log(`Package created ${output.path}`);
    
    var command = `tfx extension publish --vsix ${output.path} --no-prompt`;
    exec(command, (error, stdout) => {
        if (error) {
            console.error(`Could not create package: '${error}'`);
            return;
        }
        
        console.log("Package published.");
    });
});