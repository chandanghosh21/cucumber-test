const { After } = require('cucumber');

After(async function (scenario) {
   await this.driver.quit();
});
