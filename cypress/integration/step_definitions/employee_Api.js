import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps'

Given(/^I access api request end point to get all employees$/, () => {
  cy.request({
    method:'GET',
    url:`${Cypress.env('URL')}api/v1/employees`
  }).then(function(response){
    cy.log(response.body);
    expect(response.status).to.eq(200)
  });
});













//
  //const url=`${Cypress.env('URL')}api/v1/employees`
  //const url=`http://dummy.restapiexample.com/api/v1/employees`
  //cy.request(url).as('page')


/*   describe('Make a Get Request to get all Employees', () => {
      it('GET employees', () => {
        cy.request({
          method:'GET',
          url:'http://dummy.restapiexample.com/employees'
        }).then(function(response){
          cy.log(response.body);
        });
      });
  }); */
//});