import { timeouts } from "../../support/general_constants"
import { loginPage } from "../pages/LoginPage"

class LoginHelper {

    loginToTkl(userEmail, userPassword) {
        cy.visit(Cypress.env('baseUrl'))
        loginPage.companyLogoInitialPage().should('exist')
        cy.url().should('include', 'tkl')
        loginPage.userName.clear().type(userEmail)
        loginPage.password.clear().type(userPassword)
        loginPage.loginButton.click()
        loginPage.tklLogo().should('exist')
        loginPage.header.invoke('text').should('eq', 'Innovative Financing Solutions')
    }

    logoutTkl() {
        loginPage.logoutButton.click()
        loginPage.companyLogoInitialPage().should('exist')
    }

    verifyAccountHolder(holderName) {
        loginPage.accountHolder.invoke('text').should('contain', holderName)
    }
}

export const loginHelper = new LoginHelper()