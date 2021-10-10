describe('Login flow', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true
    });
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should go through login flow', async () => {
    await expect(element(by.id('welcomeImage'))).toBeVisible();
    await element(by.text("Or Login")).tap();
    await expect(element(by.text("Welcome back!"))).toBeVisible();
    await element(by.id("email")).typeText("raji@gmail.com");
    await element(by.id("password")).typeText("12345");
    await element(by.id("loginBtn")).tap();
    await expect(element(by.text("Get notifications to boost your motivation"))).toBeVisible();

  });
});
