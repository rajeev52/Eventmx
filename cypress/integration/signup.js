///<reference types="Cypress"/>
import Signup from "../POM/Signup_PO";
import { faker } from "@faker-js/faker";

describe("Test for signup page", () => {
  const signup = new Signup();

  before(function () {
    cy.visitMainPage();
    cy.get(".mb-4 a").click();
  });

  Cypress.Cookies.defaults({
    preserve: "csrftoken",
  });

  it("should validate empty signup error message", () => {
    const selector = [
      "#id_first_name-error",
      "#id_last_name-error",
      "#id_phone_number-error",
      "#id_country.form-control.error",
      "#id_country-error",
      "#id_province-error",
      "#id_zip_code-error",
      "#id_city-error",
      "#id_email-error",
      "#id_password1-error",
      "#id_password1-error",
    ];
    const errorMessage = [
      "First name is required",
      "Last name is required",
      "Phone number is required",
      "---------",
      "This field is required.",
      "Province is required",
      "This field is required.",
      "City is required",
      "Email is required",
      "This field is required.",
      "This field is required.",
    ];

    signup.clickOnSignUpButton();

    cy.get(selector).each((selector, index) => {
      cy.get(selector).should("include.text", errorMessage[index]);
    });
  });

  it("should validate not matching password and confirm password error message", () => {
    const password = faker.internet.password();

    signup.typeConfirmPassword(password).clickOnSignUpButton();
    cy.get("#id_password2-error").should(
      "have.text",
      "Password and Confirm Password value doesn't match"
    );
  });

  context("Signup form fill dependent test", () => {
    // Generate random data using Faker
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phone = faker.phone.number("977##########");
    const email = faker.internet.email();
    const country = faker.address.country();
    const province = faker.address.state();
    const zipCode = faker.address.zipCode("#####");
    const city = faker.address.city();
    const password = faker.internet.password();

    beforeEach(() => {
      signup
        .typeFirstName(firstName)
        .typeLastName(lastName)
        .typeEmail(email)
        .typeMobile(phone)
        .typeProvince(province)
        .typeZipcode(zipCode)
        .selectCountry(country)
        .typeCity(city)
        .typePassword(password)
        .typeConfirmPassword(password);
      cy.solveGoogleReCAPTCHA();
      signup.clickOnSignUpButton()
      .clickOnSignUpButton()
    });

    it.only("should validate sufficient data signup sucessfull message", () => {});

    it("should validate already exist username signup error message", () => {
      signup
        .typeFirstName(firstName)
        .typeLastName(lastName)
        .typeEmail(email)
        .typeMobile(phone)
        .typeProvince(province)
        .typeZipcode(zipCode)
        .selectCountry(country)
        .typeCity(city)
        .typePassword(password)
        .typeConfirmPassword(password)
        .clickOnSignUpButton();
      cy.get(".errorlist > li").should(
        "have.text",
        "Error verifying reCAPTCHA, please try again."
      );
    });
  });
});
