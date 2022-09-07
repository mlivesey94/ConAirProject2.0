const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

beforeEach(async () => {
    browser.browserBuild();
    await browser.browserNavigate('http://localhost:8080/');
}, timeout);

afterEach(async () => {
    await browser.browserExit();
}, timeout);

test("initially nothing in password field", async () =>{
	await expect(() => browser.getElement())
});

test("initially nothing in username field", async () =>{
	await expect(() => browser.getElement())
})

test("Check there is a submit button", async () => {	
	const element = await browser.getElementByCss();
	const tagName = await element.getTagName();
	expect(tagName).toBe();
})

test("Correct Password and Username", async () => {
	const user = driver.findElement(by.id(""));
	const password = driver.findElement(by.id(""));
	user.sendKeys("admin");
	password.sendKeys("HelloWorld");
})

test("Empty fields login", async () => {
    driver.findElement(by.id()).click;
})

test("Special characters in username input", async () => {
    const user = driver.findElement(by.id(""));
    user.sendKeys("@!!!?")
})

test("Correct Username no password", async () => {
	const user = driver.findElement(by.id(""));
	user.sendKeys("admin");
})