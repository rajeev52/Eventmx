///<reference types="Cypress"/>
///<reference types="cypress-xpath"/>

Cypress.Commands.add("visitMainPage", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#navbar li:nth-of-type(6) .btn-primary").click();
  });
  
  Cypress.Commands.add("login", () => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");

    cy.get("#id_login").clear().type(username);
    cy.get("#id_password").clear().type(password);
    cy.get("button").click();
    cy.request("GET", "https://events.kodiary.com/accounts/login/")
    .then(response => {
        expect(response.status).to.eq(200);
    })
     cy.get(".alert-success").should("have.text", "Successfully signed in as test6.");
    cy.url().should("include", "events.kodiary.com");
  });
  
  Cypress.Commands.add("preserveCookies", () => {
    Cypress.Cookies.preserveOnce("ASP.NET_SessionId");
    cy.url().should("include", "azurewebsites.net/Dashboard");
  });
  
  Cypress.Commands.add("preserveCookies", () => {
    Cypress.Cookies.preserveOnce("ASP.NET_SessionId");
  });

  Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
    // Wait until the iframe (Google reCAPTCHA) is totally loaded
    cy.wait(1000);
    cy.get('.grecaptcha-logo iframe')
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.rc-anchor-invisible-hover')
          .should('be.visible')
          .click();
      });
  });
