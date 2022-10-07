export const timeouts = {
    SHORT_DELAY: 100,
    DELAY: 500,
    ONE_SECOND: 1000,
    TWO_SECONDS: 2000,
    FIVE_SECONDS: 5000,
    TEN_SECONDS: 10000,
    TWENTY_SECONDS: 20000
}

export const keys = {
    ENTER: '{enter}',
    BACKSPACE: '{backspace}',
    ESCAPE: '{escape}'
}

export const paths = {
    FIXTURES: 'cypress/fixtures',
    DOWNLOADS: 'cypress/downloads'
}

export const users = {
    username: 'Cypress TKLTester01',
    EMAIL: 'cypress-tkl01@renewfund.com',
    PASSWORD: Cypress.env('password')
}