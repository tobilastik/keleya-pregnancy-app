# Coding Challenge Solution

## How to run locally

1. clone repo
2. On the project root folder, run `yarn install` or `npm install`
3. run `npx pod-install` to install iOS Pods.
4. run `yarn ios` to run on iPhone Simulator
5. run `yarn android` to run on android emulator

## Default login details

email: `raji@gmail.com`
password: `12345`

## Features

1. State Management(Redux) to store user data
2. Two Languagee(English and German) Support - The language depends on the user's phone configuration.
3. Unit and Component testing with `@testing-library/react-native`
4. UI testing with `detox` (the test was only set up and tested on iOS)

## How to run unit testing

Use the following command:

`yarn test`

To watch

`yarn test:watch`

## How to E2E testing

To run this test, you should have xcode install on your machine

1. For test build on iOS:
   `yarn e2e:build-ios`

2. Next, run the following command to start testing:
   `yarn e2e:run-ios`

## How the task went

I think this is going to be a long list, if you don't mind :(

1. The test is super impressive because it is actually testing developer's knowledge on example of what he/she will be handling on everyday basis at work.

2. At first, I thought the 2 weeks was too much for this kind of test, but I later got to understand that not everybody has much time to engage in other side tasks as I only had the weekend to work on it myself.
   So thanks for giving so much time!!

3. Giving developer's the discretion to choose how to store data is also good, this would show if the developer has experience using state management libraries.

   Alternatively, I would have used Firebase, but then, that will still be backend write? 😁

   I chose redux and used redux-persist to persist data, so even if the app is closed, users can still signin with the data they used in signing up.

## Challenges faced 😔

1. Apparently detox is not supporting the latest version of React Native (or some associated libraries), so I had to downgrade my react native version to "0.64.1"

It worked like magic after downgrading it 😁

## What I would have done better

1. Use the git flow, instead of pushing all my commits into main stright up
2. Divide work between my commits
