const { Given, Then } = require('cucumber');


Given('I visit Nazmul website', async function () {
    //console.log(process.env.HOME_PAGE);
        await this.driver.get('https://github.com/nazmulb/cucumber');
        //await this.driver.quit();
});

Given('I visit Nazmul website1', async function () {
    //console.log(process.env.HOME_PAGE);
        await this.driver.get('https://youtube.com');
        //await this.driver.quit();
});

Then('I see title {string}', function (expectedTitle) {
    self = this;
    return this.driver.getTitle().then(function (actualTitle) {
        self.expect(actualTitle).to.equal(expectedTitle);
    });
});