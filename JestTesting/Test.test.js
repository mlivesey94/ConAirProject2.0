const Browser = require("./browser");
const browser = new Browser();
const timeout = 20000;

beforeEach(async () => {
    browser.browserBuild();
    await browser.browserNavigate('http://localhost:8080/');
    jest.setTimeout(500000);
}, timeout);

afterEach(async () => {
    await browser.browserExit();
}, timeout);

// test("initially nothing in password field", async () =>{
// 	await expect(() => browser.getElement(username))
// });

// test("initially nothing in username field", async () =>{
// 	await expect(() => browser.getElement(password))
// })

// test("Sign in" , async () => {
// 	const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();
	
// })

// test("Sign in with nothing in fields" , async () => {
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();
	
// })

// test("Incorrect password login", async () =>{
//     const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("Bingo");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();
// })

// test("Incorrect username login", async () =>{
//     const user = await browser.getElement("username");
//     await user.sendKeys("Bingo");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();
// })

// test("Incorrect username and password login", async () =>{
//     const user = await browser.getElement("username");
//     await user.sendKeys("Bingo");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("Bingo");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();
// })

// test("Incorrect username with special charaters", async () =>{
//     const user = await browser.getElement("username");
//     await user.sendKeys("@dmin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();
// })

// test("Add customer" , async () => {
// 	const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();
//     await browser.waitForElementByCss("bar > button", 20000);
// 	const NewCustButton = await browser.getElementByCss("button");
//     await NewCustButton.click();
//     await browser.waitForElementByCss("#placeholder1", 20000);
// 	const NewCustName = await browser.getElement("placeholder1");
// 	await NewCustName.sendKeys("Delta Limited.");
// 	const SaveButton = await browser.getElementByCss("fields > buttons > button:nth-child(2)");
//     await SaveButton.click();
// })

// test("Click Customer", async () => {
//     const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click()
//     await browser.waitForElementByCss("bar > button", 20000);
//     const CustButton = await browser.getElement("27828019-4e08-42a1-a536-d773ecf83d4d");
//     await CustButton.click();
// })

// test("Click a site", async () => {
//     const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click()
//     await browser.waitForElementByCss("bar > button", 20000);
//     const CustButton = await browser.getElement("27828019-4e08-42a1-a536-d773ecf83d4d");
//     await CustButton.click();
//     await browser.waitForElementByCss("bar > button", 20000);
//     const SiteButton = await browser.getElement("b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b");
//     await SiteButton.click();
// })

// test("Click a machine", async () => {
//     const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click()

//     await browser.waitForElementByCss("bar > button", 20000);
//     const CustButton = await browser.getElement("27828019-4e08-42a1-a536-d773ecf83d4d");
//     await CustButton.click();
//     await browser.waitForElementByCss("bar > button", 20000);
//     const SiteButton = await browser.getElement("b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b");
//     await SiteButton.click();

//     await browser.waitForElementByCss("#a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2", 20000);
//     const MachineButton = await browser.getElement("a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2");
//     await MachineButton.click();
// })


// test("Follow breadcrumb till the end", async () => {
//     const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click()

//     await browser.waitForElementByCss("bar > button", 20000);
//     const CustButton = await browser.getElement("27828019-4e08-42a1-a536-d773ecf83d4d");
//     await CustButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const SiteButton = await browser.getElement("b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b");
//     await SiteButton.click();

//     await browser.waitForElementByCss("#a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2", 20000);
//     const MachineButton = await browser.getElement("a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2");
//     await MachineButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const MachineButton2 = await browser.getElement("291a277c-d920-4c7b-a5f7-6111298a1f8b");
//     await MachineButton2.click();
// })

// test ("Can click a previous page in the breadcrumb", async () =>{
//     const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click()

//     await browser.waitForElementByCss("bar > button", 20000);
//     const CustButton = await browser.getElement("27828019-4e08-42a1-a536-d773ecf83d4d");
//     await CustButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const SiteButton = await browser.getElement("b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b");
//     await SiteButton.click();

//     await browser.waitForElementByCss("#a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2", 20000);
//     const MachineButton = await browser.getElement("a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2");
//     await MachineButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const MachineButton2 = await browser.getElement("291a277c-d920-4c7b-a5f7-6111298a1f8b");
//     await MachineButton2.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const breadcrumbButton = await browser.getElement("b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b");
//     await breadcrumbButton.click();
// })

// test("Click back button", async () => {
//     const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click()

//     await browser.waitForElementByCss("bar > button", 20000);
//     const CustButton = await browser.getElement("27828019-4e08-42a1-a536-d773ecf83d4d");
//     await CustButton.click();

//     await browser.waitForElementByCss("#b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b", 20000);
//     const BackButton = await browser.getElementByCss("root > home > img");
//     await BackButton.click();

// })

// test("Create entity with name of special characters" , async () => {
//     const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();
//     await browser.waitForElementByCss("bar > button", 20000);
// 	const NewCustButton = await browser.getElementByCss("button");
//     await NewCustButton.click();
//     await browser.waitForElementByCss("#placeholder1", 20000);
// 	const NewCustName = await browser.getElement("placeholder1");
// 	await NewCustName.sendKeys("@@@??!!!?!");
// 	const SaveButton = await browser.getElementByCss("fields > buttons > button:nth-child(2)");
//     await SaveButton.click();
// })

// test("Add customer with same name as current customer" , async () => {
// 	const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();
//     await browser.waitForElementByCss("bar > button", 20000);
// 	const NewCustButton = await browser.getElementByCss("button");
//     await NewCustButton.click();
//     await browser.waitForElementByCss("#placeholder1", 20000);
// 	const NewCustName = await browser.getElement("placeholder1");
// 	await NewCustName.sendKeys("Charlie Ltd");
// 	const SaveButton = await browser.getElementByCss("fields > buttons > button:nth-child(2)");
//     await SaveButton.click();
// })

// test("Add customer with extremely long name" , async () => {
// 	const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();
//     await browser.waitForElementByCss("bar > button", 20000);
// 	const NewCustButton = await browser.getElementByCss("button");
//     await NewCustButton.click();
//     await browser.waitForElementByCss("#placeholder1", 20000);
// 	const NewCustName = await browser.getElement("placeholder1");
// 	await NewCustName.sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
// 	const SaveButton = await browser.getElementByCss("fields > buttons > button:nth-child(2)");
//     await SaveButton.click();
// })

// test("Add location", async() =>{
// 	const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const CustButton = await browser.getElement("27828019-4e08-42a1-a536-d773ecf83d4d");
//     await CustButton.click();
//     await browser.waitForElementByCss("bar > button", 20000);
//     const NewLocButton = await browser.getElementByCss("bar > button");
//     await NewLocButton.click();
//     await browser.waitForElementByCss("#placeholder1", 20000);
// 	const NewSiteName = await browser.getElement("placeholder1");
// 	await NewSiteName.sendKeys("Liverpool Docks");
//     const NewSiteAddress = await browser.getElement("placeholder2");
// 	await NewSiteAddress.sendKeys("Liverpool, L3 4BB");
// 	const OkButton = await browser.getElementByCss("fields > buttons > button:nth-child(2)");
//     await OkButton.click();
// })

// test("Add Machine", async() =>{
// 	const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const CustButton = await browser.getElement("27828019-4e08-42a1-a536-d773ecf83d4d");
//     await CustButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const SiteButton = await browser.getElement("b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b");
//     await SiteButton.click();

//     await browser.waitForElementByCss("#a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2", 20000);
//     const LocButton = await browser.getElement("a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2");
//     await LocButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const NewMachButton = await browser.getElementByCss("bar > button");
//     await NewMachButton.click();
//     await browser.waitForElementByCss("#placeholder1", 20000);
// 	const NewMachName = await browser.getElement("placeholder1");
// 	await NewMachName.sendKeys("Stairwell");
//     const NewMachLocName = await browser.getElement("placeholder2");
// 	await NewMachLocName.sendKeys("By the stairs");
//     const OkButton = await browser.getElementByCss("fields > buttons > button:nth-child(2)");
//     await OkButton.click();
// })

// test("Add Machine with no name or location input", async() =>{
// 	const user = await browser.getElement("username");
//     await user.sendKeys("admin");
// 	const password = await browser.getElement("password");
// 	await password.sendKeys("HelloWorld");
// 	const SubButton = await browser.getElementByCss("button");
//     await SubButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const CustButton = await browser.getElement("27828019-4e08-42a1-a536-d773ecf83d4d");
//     await CustButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const SiteButton = await browser.getElement("b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b");
//     await SiteButton.click();

//     await browser.waitForElementByCss("#a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2", 20000);
//     const LocButton = await browser.getElement("a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2");
//     await LocButton.click();

//     await browser.waitForElementByCss("bar > button", 20000);
//     const NewMachButton = await browser.getElementByCss("bar > button");
//     await NewMachButton.click();
//     await browser.waitForElementByCss("#placeholder1", 20000);
// 	const NewMachName = await browser.getElement("placeholder1");
// 	await NewMachName.sendKeys("");
//     const NewMachLocName = await browser.getElement("placeholder2");
// 	await NewMachLocName.sendKeys("");
//     const OkButton = await browser.getElementByCss("fields > buttons > button:nth-child(2)");
//     await OkButton.click();
// })

test("Add 100 Machines", async() =>{
    i = 0;
    const user = await browser.getElement("username");
    await user.sendKeys("admin");
	const password = await browser.getElement("password");
	await password.sendKeys("HelloWorld");
	const SubButton = await browser.getElementByCss("button");
    await SubButton.click();

    await browser.waitForElementByCss("bar > button", 20000);
    const CustButton = await browser.getElement("27828019-4e08-42a1-a536-d773ecf83d4d");
    await CustButton.click();

    await browser.waitForElementByCss("bar > button", 20000);
    const SiteButton = await browser.getElement("b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b");
    await SiteButton.click();

    await browser.waitForElementByCss("#a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2", 20000);
    const LocButton = await browser.getElement("a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2");
    await LocButton.click();

    while(i < 100){
    await browser.waitForElementByCss("bar:not(.creating) > button", 20000);
    const NewMachButton = await browser.getElementByCss("bar > button");
    await NewMachButton.click();
    await browser.waitForElementByCss("#placeholder1", 20000);
	const NewMachName = await browser.getElement("placeholder1");
	await NewMachName.sendKeys("Machine "+i);
    const NewMachLocName = await browser.getElement("placeholder2");
	await NewMachLocName.sendKeys("Location" + i);
    const OkButton = await browser.getElementByCss("fields > buttons > button:nth-child(2)");
    await OkButton.click();
    i++;
    }
}, 500000)