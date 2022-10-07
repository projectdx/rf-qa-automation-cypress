const { users } = require("../../support/general_constants")
const { loginHelper } = require("../helpers/LoginHelper")

describe('The login feature', () => {
  it('Verify the login functionality', () => {
    loginHelper.loginToTkl(users.EMAIL, users.PASSWORD)
  })

  it('verify the users profile loaded', () => {
    loginHelper.loginToTkl(users.EMAIL, users.PASSWORD)
    loginHelper.verifyAccountHolder(users.username)
  })

  afterEach(() => {
    loginHelper.logoutTkl()
  })

}) 
