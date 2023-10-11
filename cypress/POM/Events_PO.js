class Dashboard {
    EventList() {
        cy.get("#navbar").contains('Dashboard').click()
        return this;
    }

    CreateEvent() {
        cy.get("li:nth-of-type(1) > .nav-link > p").click()
         cy.get(".btn.btn-blue.mr-0").click()
         cy.wait(2000)
         return this;
        }

    ArchivedEvent() {
       
        cy.get("li:nth-of-type(2) > .nav-link > p").click()
        cy.wait(2000)
        return this;
    }

    EventGallary() {
       
        cy.get("li:nth-of-type(3) > .nav-link > p").click()
        cy.wait(2000)
        return this;
    }

    OrganizerFQ() {
       
        cy.get("li:nth-of-type(4) > .nav-link > p").click()
        cy.wait(2000)
        return this;
    }


    InvitationAttch() {
       
        cy.get("li:nth-of-type(5) > .nav-link > p").click()
        cy.wait(2000)
        return this;
    }
    Logout() {
        cy.get('.nav-link > .fa-user.far').click({ force: true });
        cy.wait(2000)
        cy.get(".dropdown-item:nth-of-type(2)").click({ force: true });
        
        return this;
}


};
export default Dashboard;