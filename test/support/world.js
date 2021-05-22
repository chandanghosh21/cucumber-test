const {setWorldConstructor} = require('cucumber');
const {Builder} = require('selenium-webdriver');

class World {
        constructor({attach, parameters}) {
                this.attach = attach; // attaching screenshots to report
                this.parameters = parameters;
                
       this.driver = new Builder().forBrowser('chrome').build();
        }

}
setWorldConstructor(World)