///<reference types="Cypress"/>
import Login from "../POM/Login_PO";
import { faker } from "@faker-js/faker";

  const login = new Login();

  before(function () {
    cy.visitMainPage();
  });

  Cypress.Cookies.defaults({
    preserve: "csrftoken",
  });

  describe("Test for login page", () => {

  const username = faker.internet.email();
  const password = faker.internet.password();

  it("should validate empty login error message", () => {
    login.clickSubmitBtn().verifyInvalidCredentials();
  });

  it("Empty email validation testing", () => {
    login.typePassword(password);
    login.clickSubmitBtn().verifyemptyEmail();
  });

  it("Empty password validation testing", () => {
    cy.get("#id_password").clear();
    login.typeUserName(username);
    login.clickSubmitBtn().verifyemptyPassword();
  });

  it("Worng email and password validation testing", () => {
    login.typeUserName(username).typePassword(password);
    login.clickSubmitBtn().verifyInvalidLogin();
  });

  it("verify google login testing", () => {
    login.verifyGoogleLogin();
  });

  it("verify forgot password testing", () => {
    login.verifyForgotPassword();
  });

  it("should validate valid login sucess message", () => {
    cy.visitMainPage();
    cy.login();
  });
});

