# Functional-Tests-with-Taiko and Gauge
This repository will help you to setup a new Functional Test BDD framework using Taiko and Gauge. This also includes reporting and some advance concepts.

I used macbook , following isntructions will work for mac.



### To install nvm, follow these steps: ###
1. Run `brew install nvm` <br> 
2. To check if nvm is successfully install, use `nvm -v`<br>
### To install node.js, follow these steps: ###
1. To install node.js (stable version), use `nvm install <node_version>` <br>
E.g., `nvm install 14`, this will install node.js version 14.X <br>
2. To check if node.js is successfully install, use `node -v`<br>
### To install taiko, follow these steps: ###
1. Run `npm install -g taiko`<br>
2. To check if taiko is successfully install, use `taiko --version` <br>
### To install gauge, follow these steps: ###
1. Run `brew install gauge` .<br> 
2. To check if gauge is successfully install, use `gauge -v` <br>
### To run functional tests, do the following: ###
1. Navigate to functional_tests folder using `cd functional_tests`. <br>
2. Run using the command, `gauge run specs/ --env <env-name>` in default headless mode on dev environment.<br>
(Note: You can change environment by replacing --env value.)<br>
4. To run specific spec file, `gauge run specs/<SPEC-FILE> --env <env-name>`<br>
5. To run all specs parallely, `gauge run specs/ --env <env-name> -p`.<br>
6. To run with headless mode off, in `tests/sample_step.js` file `const headless = process.env.headless_chrome.toLowerCase() === 'true';`, replace true with false.<br>

Note: 
    - All environment related properties are in the `functional_tests/env` folder.<br>
    - reports will be generated in reports folder under reports folder in html format <br>
    - to implement reports in circle ci (ci cd tool) --> dump the complete folder in the artifacts <br>
    - screenshot will be taken in reports directory if tests fails will be in the same report folder itself . Code for this is written in the stepfile <br>
    - in default.properties file you can change the report path and other deault properties. <br>
    - In manifest.json you can define language used and plugins required for the Gauge project. <br>
    
