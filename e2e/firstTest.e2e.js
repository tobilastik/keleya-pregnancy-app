describe('Login flow', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true
    });
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcomeImage'))).toBeVisible();
    await element(by.text("Or Login")).tap();
    await expect(element(by.text("Welcome back!"))).toBeVisible();
    // await element(by.id("emailInput")).typeText("raji@test.com");
    // await element(by.id("passwordInput")).typeText("123456");
    // await element(by.id("loginBtn")).tap();
    // await expect(element(by.text("Get notifications to boost your motivation"))).toBeVisible();

  });

  // it("should show navigate to login screen after get started is pressed", async () => {
  //   await element(by.text("Or Login")).tap();
  //   await expect(element(by.text("Welcome back!"))).toBeVisible();
  //   // await element(by.id("emailInput")).typeText("raji@test.com");
  //   // await element(by.id("passwordInput")).typeText("123456");
  //   await element(by.id("loginBtn")).tap();
  //   await expect(element(by.text("Get notifications to boost your motivation"))).toBeVisible();

  // });

  // it("should enter login details and log users in", async () => {

  // })

});
