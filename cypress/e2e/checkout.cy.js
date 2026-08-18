describe('Checkout functionality', () => {

    beforeEach(() => {

        // Open website
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

        // Login
        cy.login('okk', '123');

        // Fish
        cy.xpath("//img[contains(@src,'sm_fish.gif')]").click();

        // Fish product
        cy.xpath("//a[normalize-space()='FI-SW-01']").click();

        // Fish item
        cy.xpath("//a[normalize-space()='EST-1']").click();

        // Add to cart
        cy.xpath("//a[normalize-space()='Add to Cart']")
            .first()
            .click();

        // Proceed to checkout
        cy.xpath("//a[normalize-space()='Proceed to Checkout']")
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