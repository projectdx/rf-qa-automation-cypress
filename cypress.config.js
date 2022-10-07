const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      redirectUrl: 'https://tkl-staging.us.auth0.com/login?state=hKFo2SBxcnZiWXljeHpHM2ptc2lUQXdrMlNRQTVxdDl3YVlIQ6FupWxvZ2luo3RpZNkgUXZ4SndLV0VmanM4bWNQdTdwV0lBNmtGVkhPVEg1Yi2jY2lk2SBzOEdRS0VZa205VnJDZHZVeHlRR0tMU2E1QjYzTk5hQw&client=s8GQKEYkm9VrCdvUxyQGKLSa5B63NNaC&protocol=oauth2&redirect_uri=https%3A%2F%2Fusaenterprise.turnkey-lender.com%3A8090%2FOidcClientApp%2FRedirect&response_type=code&scope=openid%20profile%20role%20email%20client_id&code_challenge=VJOLD00xupGJqrTWS9kcZQVA3s0IsWAhdmeRRoGmzi0&code_challenge_method=S256&response_mode=form_post&nonce=638006646705866089.YzI5MDBhMjYtNzZhNy00MGJjLTkyZDUtMDk0ZGMxOTE2MjMwNDdlZmQ1OGYtNzAxNC00NWJhLTkyODUtM2NhMDI1NzkwYWRl&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.7.1.0',
      baseUrl: 'https://usaenterprise.turnkey-lender.com/PluginWebapp/Dashboard.aspx?SystemClient=0ca4416b-d939-476f-9b50-bf3e1ce01409',
      password: 'Rainforest22'
    },
    projectId: '6rnbvc',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
})
