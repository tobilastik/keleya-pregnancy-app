describe('Signup Flow', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    describe('Signup Steps', () => {
        it('should go with all register process', async () => {
            await element(by.id('SignupButton')).atIndex(0).tap();
            await waitFor(element(by.id('signup'))).toBeVisible();

            await element(by.id('email')).typeText('test@test.com');
            await element(by.id('password')).typeText('123456');

            await element(by.id('acceptPolicy')).atIndex(0).tap();
            await element(by.id('acceptTerms')).atIndex(0).tap();

            await element(by.id('signupBtn')).atIndex(0).tap();


        });
    });
});