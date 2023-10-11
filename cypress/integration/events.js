///<reference types="Cypress"/>

import Dashboard from "../POM/Events_PO";

describe("Test for footer links", () => {
    const dashboard = new Dashboard();

    before(function () {
        cy.visitMainPage();
        //cy.login();
    });

    beforeEach(function () {
        Cypress.Cookies.defaults({
            preserve: "sessionid",
        });
    });
      
    it.only("should redirect to the Event List", () => {
        dashboard.EventList();
      });

      it.only("should redirect to the Create Event Page", () => {
        dashboard.CreateEvent();
        // cy.get('input#id_title').type('Dashain')
        // cy.get('.select2-search__field').first().click()
        // cy.get('ul#select2-id_category-results > li:nth-of-type(4)').click();
        // cy.get('.select2-search__field').eq(1).click()
        // cy.get('ul#select2-id_tags-results > li:nth-of-type(2)').click()
        // cy.get('.select2-search__field').last().click()
        // cy.get('ul#select2-id_event_type-results > li:nth-of-type(3)').click()
        // cy.get('input#getCities').type('Nepal');
        // cy.get('#id_is_free_0').click()
        // cy.get('#id_start_date').type("2079-02-05")
        // cy.get('#id_end_date').type("2079-02-09")
        
// cy.get('#id_sale_ends_on_date').type("2079-02-08")
//cy.wait(3000)
cy.get('body[role="textbox"] > p').click().type('how are you')
// cy.get("p")
// .should('be.visible')
// .should('not.be.empty')
// .then(($iframe) => {
//     const $body = $iframe.contents().find('body')

// cy.wrap($body)
// .find(`input[name='s']`)
// .type('Cypress{enter}')

// })
        // cy.wait(3000)
        // cy.get('.fa.fa-plus').click({ force: true });
        // //cy.get("[type='submit']").click()
        // cy.wait(3000)
        
        // function getRandomInt(min, max){      
        //     return Math.floor(Math.random() * (max - min + 1)) + min;    
        //   } 
        
        //   cy.get('.select2-search__field').first().click() // we get the select/option by finding the select by id
        //   .then(listing => {        
        //     const randomNumber = getRandomInt(0, listing.length-1); //generate a rendom number between 0 and length-1. In this case 0,1,2
        //     cy.get('#select2-id_category-results li').eq(randomNumber).then(($select) => {              //choose an option randomly
        //       const text = $select.text()       //get the option's text. For ex. "A"
        //       cy.get(`#select2-id_category-results li`).select(text)       // select the option on UI
        //     });    
        //   })
     });

      it("should redirect to the Archivent Event List", () => {
        dashboard.ArchivedEvent();
      });
      it("should redirect to the Event Gallary", () => {
        dashboard.EventGallary();
      });

      it("should redirect to the Organizer F&Q", () => {
        dashboard.OrganizerFQ();
      });
      it("should redirect to the Invitation Page", () => {
        dashboard.InvitationAttch().Logout()

      });

});