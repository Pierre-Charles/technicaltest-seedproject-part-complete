# Notes:

- I have completed the test to what I think is a good standard, however I am looking forward to hearing feedback on how I have approached this task.
- I have added a couple of extra tests to further check whether the filtering worked as expected.
- While creating the unit tests I have also made a helper function `getProviderId` which simply returned the provider's id when given its name, this was made for passing in the name of the providers into the tests rather than its id.
- I have also spent some time making the frontend look aesthetically pleasing. Although this wansn't required, I felt it was needed to add an overall good experience and also get a chance to show how passionate I am towards UX/UI.
- The following addiional items were added to the front end:
  - Provider logo along with function that returns the provider's logo `getImage()`
  - Cost per month section that was worked out by using the already provided contract length and total cost `calculateMonthlyCost`
  - Call to Action button that simply takes the user to the provider's website, this is done through the `getProviderSite` function which simply returns the provider's website given its id
  - A rather more fun font has also been added to the public folder `Quicksand`. The reasoning behind this was the font would add a more appealing look to the website along with using Decision Tech's purple colour in a few places (header, cta button, hover colour, etc.)

## Future implementations:

- Add option to clear filters
- Add sorting by contract length
- Add sorting by lowest/highest cost (overall, monthly, upfront)
- Add icons to the features section (better UX)

# Decision Technologies Front-End Technical Test

## Getting started

Please fork this repository to get started.

### Prerequisites

- NodeJS (at least latest LTS)
- Modern browser that supports ES6+ (classes, arrow functions etc)

## Scenario

The aim of this exercise is to implement the filter logic for a 'broadband deals' grid.

![screenshot](screenshot.PNG)

This codebase is written in vanilla JavaScript. We would like you to avoid using any frameworks or libraries for this task (e.g. lodash, underscore etc). You are free to use any modern JavaScript language features that are supported in modern evergreen browsers (the compile step does not transpile ES6 to ES5, so experimental language features may not work). We will be assessing your submission in Chrome.

You shouldn't need to do any work with styling or markup as the focus is on implementing the filter logic. However, if you get time and you'd like to flesh out the UI/site in anyway to show off your skills, feel free!

### Mininum expectations

We are expecting a submission that shows an understanding of TDD principles. Please provide a public link to a git repository for us to download and analyse your code (GitHub or similar). Please commit to this repository as you complete the exercise. We are not looking for elapsed time, but we are looking for good source control habits.

The tests are written in [Jest](https://jestjs.io/) and an initial test suite can be found in `src/scripts/__tests__`.

> ℹ️ NOTE: You will find the JSON data for the deals in `public/db.json`

### Filter criteria

- **WHEN** no filters applied **THEN** show all **11** deals
- **WHEN** filtering by _broadband_ **THEN** show the **4** broadband only deals
- **WHEN** filtering by _broadband_ **AND** _tv_ **THEN** show the **4** deals for broadband and tv only
- **WHEN** filtering by _broadband_ **AND** _mobile_ **THEN** show the **1** deal for broadband and mobile only
- **WHEN** filtering by _Sky_ **THEN** show the **1** deal for Sky only
- **WHEN** filtering by _BT_, _broadband_ **AND** _tv_ **THEN** show the **2** deals for BT with broadband and tv only

> ℹ️ NOTE: 'Broadband' and 'Fibre Broadband' should be considered the same product. 'Phone' should be ignored.

## Getting set up

To get the site up and running, follow these simple steps:

```bash
# Install dependencies
npm install

# The following steps will need to be run in different processes

# Serve JSON data
npm run db

# Serve site in 'watch' mode, automatically open default browser
npm run serve
```

By default, the JSON server runs at `http://localhost:3000`, and the site is served from `http://localhost:5000`.

To run the test suites, you can use the following commands:

```bash
# Single run of test suites
npm run test

# Run test suites in 'watch' mode
npm run test:watch
```

## Commands

Run commands via NPM e.g. `npm run test:watch` from the project root.

| Command      | Description                                    |
| ------------ | ---------------------------------------------- |
| `test`       | Single run of test suites                      |
| `test:watch` | Run test suites in 'watch' mode                |
| `clean`      | Delete compiled assets                         |
| `db`         | Serve JSON data                                |
| `serve`      | Serve site, automatically open default browser |
