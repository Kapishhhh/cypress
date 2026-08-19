import { checkoutSelector } from "../support/selector";

describe('Checkout functionality', () => {

    beforeEach(() => {

        // Open website
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

        // Login
        cy.login('okk', '123');

        // Fish
        cy.xpath(checkoutSelector.fish_category).click();

        // Fish product
        cy.xpath(checkoutSelector.angelfish_product).click();

        // Fish item
        cy.xpath(checkoutSelector.angelfish_item).click();

        // Add to cart
        cy.xpath(checkoutSelector.addToCart_button)
            .first()
            .click();

        // Proceed to checkout
        cy.xpath(checkoutSelector.proceedToCheckout_button)
            .first()
            .click();
    });


    it('Verify users can checkout successfully', () => {

        // Checkout test will be written here

    });


    it('Verify checkout should not proceed with empty first name', () => {

        // Empty first name test will be written here

    });


    it('Verify checkout should not proceed with empty card number', () => {

        // Empty card number test will be written here

    });


    it('Verify checkout should not proceed with empty last name', () => {

        // Empty last name test will be written here

    });


    it('Verify checkout should not proceed with alphabetic zip code', () => {

        // Alphabetic zip code test will be written here

    });


    it('Verify checkout accepts alphabetic zip code', () => {

        // Zip code test will be written here

    });

});
