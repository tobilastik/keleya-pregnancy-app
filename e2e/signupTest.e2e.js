describe('Signup Flow', () => {
    beforeAll(async () => {
        await device.launchApp({
            newInstance: true
        });
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    describe('Signup Steps', () => {
        it('should sign up users', async () => {
            await element(by.id('SignupButton')).atIndex(0).tap();

            //signup screen test
            await waitFor(element(by.id('signupScreen'))).toBeVisible();
            await element(by.id('email')).typeText('test@detox.com');
            await element(by.id('password')).typeText('12345');
            await element(by.id('acceptPolicy')).atIndex(0).tap();
            await element(by.id('acceptTerms')).atIndex(0).tap();
            await element(by.id('signupBtn')).atIndex(0).tap();

            //name screen test
            await waitFor(element(by.id('nameScreen'))).toBeVisible();
            await element(by.id('name')).typeText('Raji');
            await element(by.id('continueBtn')).atIndex(0).tap();

            //date screen test
            await waitFor(element(by.id('dateScreen'))).toBeVisible();
            await element(by.id('datePickerBtn')).atIndex(0).tap();
            await expect(element(by.type('UIPickerView'))).toBeVisible();
            await element(by.type('UIPickerView')).setColumnToValue(1, "6");
            await element(by.type('UIPickerView')).setColumnToValue(2, "34");
            await element(by.label('Confirm')).atIndex(1).tap();
            await element(by.id('continueBtn')).atIndex(0).tap();


            //workout screen test
            await waitFor(element(by.id('workoutScreen'))).toBeVisible();
            await waitFor(element(by.type('UIPickerView'))).toBeVisible();
            await element(by.type('UIPickerView')).setColumnToValue(0, '3 times a week');
            await element(by.id('continueBtn')).atIndex(0).tap();

            //success screen test
            await waitFor(element(by.id('successScreen'))).toBeVisible();

        });
    });
});