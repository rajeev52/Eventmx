//import { faker } from "@faker-js/faker";

class Signup {

    typeFirstName(firstName) {
        cy.get("#id_first_name").clear().type(firstName);
        return this;
      }
    
      typeLastName(lastName) {
        cy.get("#id_last_name").clear().type(lastName);
        return this;
      }
    
      typeEmail(email) {
        cy.get("#id_email").clear().type(email);
        return this;
      }
    
      typeMobile(phone) {
        cy.get("#id_phone_number").clear().type(phone);
        return this;
      }
    
      typeProvince(province) {
        cy.get("#id_province").clear().type(province);
        return this;
      }
      typeZipcode(zipCode) {
        cy.get("#id_zip_code").clear().type(zipCode);
        return this;
      }
      typeCity(city) {
        cy.get("#id_city").clear().type(city);
        return this;
      }
      selectCountry(country) {
        cy.get("#id_country").select(country);
        return this;
      }
      typeProvince(province) {
        cy.get("#id_province").clear().type(province);
        return this;
      }
    
      typePassword(password) {
        cy.get("#id_password1").clear().type(password);
        return this;
      }
    
      typeConfirmPassword(password) {
        cy.get("#id_password2").clear().type(password);
        return this;
      }
    
      clickOnSignUpButton() {
        cy.get("button").click()
        return this;
      }
    
      verifySuccessMessage() {
        cy.get('.errorlist > li').should("have.text", "Error verifying reCAPTCHA, please try again.");
        return this;
      }
    }
//     // Fill out the form with random data
//     cy.get("#id_first_name").type(firstName);
//     cy.get("#id_last_name").type(lastName);
//     cy.get("#id_phone_number").type(phone);
//     cy.get("#id_country").select(country);
//     cy.get("#id_province").type(province);
//     cy.get("#id_zip_code").type(zipCode);
//     cy.get("#id_city").type(city);
//     cy.get("#id_email").type(email);
//     cy.get("#id_password1").type(password);
//     cy.get("#id_password2").type(password);
//     cy.get("button").dblclick({ force: true })
   
//         cy.get("#id_first_name").type("Rajeev")
//         cy.get("#id_last_name").type("Lamichana")
//         cy.get("#id_phone_number").type(9888888888)
//         cy.get("#id_country").select('Nepal');
//         cy.get('#id_country').should('include.text', 'Nepal');
//         cy.get("#id_province").type("Gandaki")
//         cy.get("#id_zip_code").type("40000")
//         cy.get("#id_city").type("Beghnas")
//         cy.get("#id_email").type("eventmx@mailinator.com")
//         cy.get("#id_password1").type("asd@123!")
//         cy.get("#id_password2").type("asd@123!")
//         cy.get("button").dblclick();
//         cy.wait(2000);
//         cy.get("p.error").should('be.visible').and('include.text', 'A user is already registered with this e-mail address.')
//         // cy.get("p.error").should('include.text', 'A user is already registered with this e-mail address.')
//         cy.get("#id_email").clear();
//         cy.get("#id_email").type("aaa@mailinator.com")
//         cy.get("button").dblclick({force: true});
  

//      it('Empty validation testing', () => {
//         cy.get("button").dblclick({force: true});
//     });

//     it('field validation testing', () => {
//             cy.get("#id_first_name").type("12@")
//             cy.get("#id_last_name").type("35$#")
//             cy.get("#id_phone_number").type("abchdddd79")
//             cy.get("#id_province").type("1@!@@@")
//             cy.get("#id_zip_code").type("@asd!")
//             cy.get("#id_city").type("!#$1")
//             cy.get("#id_email").type("eventmx")
//             cy.get("#id_password1").type("asd@123!")
//             cy.get("#id_password2").type("asd@123!")
//             cy.get("button").dblclick({force: true});
//             cy.wait(2000);
//        });

//     it('Password length testing', () => {
//             cy.get("#id_first_name").type("aaaa")
//             cy.get("#id_last_name").type("bbb")
//             cy.get("#id_phone_number").type("1234567896")
//             cy.get("#id_country").select('Nepal');
//             cy.get("#id_province").type("aaa")
//             cy.get("#id_zip_code").type("55555")
//             cy.get("#id_city").type("aaa")
//             cy.get("#id_email").type("eve@mailinator.com")
//             cy.get("#id_password1").type("a3")
//             cy.get("#id_password2").type("a3")
//             cy.get("button").dblclick({force: true});
//             cy.wait(2000);
//        });

//        it('Password and confirm password mismatch testing', () => {
//             cy.get("#id_first_name").type("aaaa")
//             cy.get("#id_last_name").type("bbb")
//             cy.get("#id_phone_number").type("1234567896")
//             cy.get("#id_country").select('Nepal');
//             cy.get("#id_province").type("aaa")
//             cy.get("#id_zip_code").type("55555")
//             cy.get("#id_city").type("aaa")
//             cy.get("#id_email").type("eve@mailinator.com")
//             cy.get("#id_password1").type("asd@123!")
//             cy.get("#id_password2").type("asd@123")
//             cy.get("button").dblclick({force: true});
//             cy.wait(2000);
//        });

//     it('Selecting desire country from the country dropdown testing', () => {
//       cy.get("#id_country").select('Nepal');
//       cy.get('#id_country').should('include.text', 'Nepal');
//     });

//     it('should randomly select a country and assert the selection', () => {
//       cy.get('#id_country').then(countryDropdown => {
//         const options = countryDropdown.find('option:not(:disabled)'); // Exclude disabled options
//         const randomIndex = Math.floor(Math.random() * options.length);
//         const randomCountry = options[randomIndex].text;
//         cy.get('#id_country').select(randomCountry);
//         cy.get('#id_country').should('include.text', randomCountry); });
//     });
// });
// })
export default Signup;