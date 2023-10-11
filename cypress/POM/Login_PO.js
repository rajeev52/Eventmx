class Login {
  typeUserName(username) {
    cy.get("#id_login").clear().type(username);
    return this;
  }

  typePassword(password) {
    cy.get("#id_password").clear().type(password);
    return this;
  }

  verifyForgotPassword() {
    cy.visitMainPage();
    cy.get(".text-center > a").click();
    cy.get("h3 > span").should("have.text", "Password Reset Page");
    return this;
  }

  verifyGoogleLogin() {
    cy.get(".fa-google").click();
    cy.get("h3").should("have.text", "Sign In Via Google");
    return this;
  }

  clickSubmitBtn() {
    cy.get("button").click();
    return this;
  }

  verifyInvalidCredentials() {
    cy.get("#id_login").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
    return this;
  }

  emptyFields() {
    cy.get("#id_login").should("be.empty");
    cy.get("#id_password").should("be.empty");
    return this;
  }

  verifyemptyEmail() {
    cy.get("#id_login").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  }
  verifyInvalidLogin() {
    cy.get("p > span").should(
      "have.text",
      "The e-mail address and/or password you specified are not correct."
    );
    return this;
  }

  verifyemptyPassword() {
    cy.get("#id_password").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  }
}
export default Login;
