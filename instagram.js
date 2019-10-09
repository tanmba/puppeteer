const pupeteer = require('puppeteer');

const BASE_URL = 'https://www.instagram.com/'

function like() {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await pupeteer.launch({headless: false})
            const page = await browser.newPage()
            await page.setViewport({width:1920, height: 1080})
            // Load Instagram
            await page.goto('https://www.instagram.com/accounts/login/');
            const context = browser.defaultBrowserContext()
            await context.overridePermissions(BASE_URL, ['notifications'])
            await page.waitFor(2500);

            //Login
            await page.waitFor(2500);   
            await page.type('input[name="username', '');
            await page.type('input[name="password', '');
            await page.waitFor('body');
            await page.click('button[type="submit');
            await page.waitForNavigation()
            await page.waitFor(2500); 
            await page.click("article:nth-child(1) span[aria-label=J’aime]")
            await page.waitFor(2500); 
            await page.click("article:nth-child(2) span[aria-label=J’aime]")
            await page.waitFor(2500); 
            await page.click("article:nth-child(3) span[aria-label=J’aime]")

            await browser.close()
            
        }   
        catch (e) {
            return reject(e)
        }
    })
}

like()
.then(console.log)
.catch(console.error)