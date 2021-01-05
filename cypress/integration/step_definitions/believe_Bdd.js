import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps"

    
//test steps 
Given('I navigate believe Home Page', () => {
    cy.visit("https://www.believemusic.com/");
})
When('I click service menu', () => {
    cy.get('#menu-item-247 > .sf-with-ul').click();
})
Then('I verify Distribution link', () => {
    cy.get('#menu-item-249 > a').should('contain', 'Distribution');
})