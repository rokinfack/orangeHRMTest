/// <reference types="cypress" />

class recruitmentPage {
    elements ={
        firstname : () => cy.get('[name=firstName]'), 
        middlename : () => cy.get('[name=middleName]'),
        lastname : () => cy.get('[name=lastName]'),
        addBtn : () => cy.get('[type="submit"]'),
        mail : () => cy.get('.oxd-form-row:nth-child(3) input')
     } 
     enterfirstname(firstname){
        this.elements.firstname().clear().type(firstname);
     }
     entermiddlename(middlename){
        this.elements.middlename().clear().type(middlename);
     }
     enterlastname(lastname){
        this.elements.lastname().clear().type(lastname);
     }
     entermail(mail){
        this.elements.mail().clear().type(mail);
     }

   
     clickaddBtn(){
        this.elements.addBtn().click();
     }
}
module.exports = new recruitmentPage();