import { validCheckoutSelector } from "../support/selector";

describe('Checkout functionality', () => {

    beforeEach(() => {

        // Open website
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

        // Login
        cy.login();

        // Select Fish
        cy.xpath(validCheckoutSelector.fish_category).click();

        // Select Fish product
        cy.xpath(validCheckoutSelector.angelfish_product).click();

        // Select Fish item
        cy.xpath(validCheckoutSelector.angelfish_item).click();

        // Add to cart
        cy.xpath(validCheckoutSelector.addToCart_button)
            .first()
            .click();

        // Proceed to checkout
        cy.xpath(validCheckoutSelector.proceedToCheckout_button)
            .first()
            .click();

    });


    it('Verify users can checkout successfully', () => {

        // Continue order
        cy.xpath(validCheckoutSelector.continue_button).click();

        // Confirm order
        cy.xpath(validCheckoutSelector.confirm_button).click();

        // Verify successful order
        cy.xpath(validCheckoutSelector.order_success_message)
            .should('be.visible');

    });

});