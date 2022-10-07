import { timeouts } from "../../support/general_constants"

class LoginPage {

    companyLogoInitialPage() {
        return cy.get('img.auth0-lock-header-logo', { timeout: timeouts.TWENTY_SECONDS })
    }

    tklLogo() {
        return cy.get('div#ge-logo', { timeout: timeouts.TWENTY_SECONDS })
    }

    get header() {
        return cy.get('h1')
    }

    get userName() {
        return cy.get('input[name="email"]')
    }

    get password() {
        return cy.get('input[name="password"]')
    }

    get loginButton() {
        return cy.get('button.auth0-lock-submit')
    }

    get logoutButton() {
        return cy.get('.logout > a')
    }

    get accountHolder() {
        return cy.get('div.logout')
    }

}

export const loginPage = new LoginPage()