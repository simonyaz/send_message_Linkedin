describe("Sending a message", () => {


    it("Logging in Linkedin", () => {       
        // Find the Sign In button

        cy.visit("/")
        cy.get('.nav__button-secondary').click()

        //Filling username
        cy.get('#username')
        .type('emailchallengee@gmail.com')
        .should('have.value', 'emailchallengee@gmail.com')

        //Filling password
        cy.get('#password')
        .type('Challenge123')
        .should('have.value', 'Challenge123')

        //Pressing Sign in button
        cy.get('.btn__primary--large').click()

        //Verifying success login
        cy.url()
        .should('include', '/feed/?trk=guest_homepage-basic_nav-header-signin')

        //Access messaging tab
        cy.get('#messaging-tab-icon').click()

        
        //cy.url()
        //.should('eq', 'https://www.linkedin.com/messaging/thread/new/')
       
        //Filling Name field and pressing Enter
        cy.get('.msg-connections-typeahead__top-fixed-section > .scrollable')
        .type('Simony de Almeida Azevedo')
        cy.wait(3000) 
        cy.get('.msg-connections-typeahead__top-fixed-section > .scrollable')
        .type('{downarrow}{enter}')

        
        cy.get('.msg-connections-typeahead__top-fixed-section > .scrollable')
        .find('.artdeco-pill__text')
        .should('contain', 'Simony de Almeida Azevedo')

        cy.get('.msg-form__contenteditable')
        .type('Apenas uma mensagem de teste :)')
        .should('contain', 'Apenas uma mensagem de teste :)')

        //Pressing Send button
        cy.get('.msg-form__send-button').click()

       // cy.contains('Sair').click()
        


        //Logging out
       // cy.get('#ember24').click()
       // cy.contains('Sair').click()
    })

       
    });