const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

// test("initially nothing in password field", async() =>{
// 	await expect(() => browser.getElement(password))
// })

// test("initially nothing in username field", async() =>{
// 	await expect(() => browser.getElement(username))
// })

// test("Check there is a submit button", async () => {	
// 	const element = await browser.getElementByCss();
// 	const tagName = await element.getTagName();
// 	expect(tagName).toBe();
// })


test("Sign in" , async () => {
	const user = browser.findElement(username);
	const passwrd = browser.findElement(password);
	user.sendKeys("admin");
	password.sendKeys("HelloWorld");
	const SubButton = driver.findElement(By.id(login())).click();
	
})

// test("Add customer" , async () => {
// 	const user = driver.findElement(by.id(username));
// 	const password = driver.findElement(by.id(password));
// 	user.sendKeys("admin");
// 	password.sendKeys("HelloWorld");
// 	const SubButton = driver.findElement(By.id(login())).click();
// 	const NewCustButton = driver.findElement(By.id()).click();
// 	const NewCustName = driver.findElement(by.id());
// 	NewCustName.sendkeys("Delta Limited.");
// 	const SaveButton = driver.findElement(By.id()).click();
// })

// test("Create entity with name of special characters" , async() => {
// 	const user = driver.findElement(by.id(username));
// 	const password = driver.findElement(by.id(password));
// 	user.sendKeys("admin");
// 	password.sendKeys("HelloWorld");
// 	const SubButton = driver.findElement(By.id()).click();
// 	const NewCustButton = driver.findElement(By.id()).click();
// 	const NewCustName = driver.findElement(by.id());
// 	NewCustName.sendkeys("@!@@!@");
// 	const SaveButton = driver.findElement(By.id()).click();
// })

// test("Add customer with same name as current customer" , async() => {
// 	const user = driver.findElement(by.id(username));
// 	const password = driver.findElement(by.id(password));
// 	user.sendKeys("admin");
// 	password.sendKeys("HelloWorld");
// 	const SubButton = driver.findElement(By.id()).click();
// 	const NewCustButton = driver.findElement(By.id()).click();
// 	const NewCustName = driver.findElement(by.id());
// 	NewCustName.sendkeys(SAMENAMEASOTHERCUSTOMER);
// 	const SaveButton = driver.findElement(By.id()).click();
// })

// test("Add customer with extremely long name" , async() => {
// 	const user = driver.findElement(by.id(username));
// 	const password = driver.findElement(by.id(password));
// 	user.sendKeys("admin");
// 	password.sendKeys("HelloWorld");
// 	const SubButton = driver.findElement(By.id()).click();
// 	const NewCustButton = driver.findElement(By.id()).click();
// 	const NewCustName = driver.findElement(by.id());
// 	NewCustName.sendkeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
// 	const SaveButton = driver.findElement(By.id()).click();
// })