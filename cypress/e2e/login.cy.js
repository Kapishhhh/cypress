import { loginSelector } from "../support/selector";

describe('login page', () => {
  it('Verify login functionality', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    // cy.xpath("//a[normalize-space()='Sign In']").click();  
    // cy.get(loginSelector.username_field).type('okk')
    // cy.get(loginSelector.password_field).clear().type('123')
    // cy.get(loginSelector.signon_button).click()
cy.login ('okk', '123')
  })
  
    it('verify failed login', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.xpath("//a[normalize-space()='Sign In']").click();  
    cy.get(loginSelector.username_field).type('kapish')
    cy.get(loginSelector.password_field).clear().type('wrongpassword')
    cy.get(loginSelector.signon_button).click()

  })
  
  
})

