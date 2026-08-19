// import { cartSelector } from "../support/selector";

// describe('add to cart', () => {

//     it('Continue shopping after adding item', () => {

//         cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

//         // Fish
//         cy.xpath("//img[contains(@src,'sm_fish.gif')]").click();
//         cy.xpath("//a[normalize-space()='FI-SW-01']").click();
//         cy.xpath("//a[normalize-space()='EST-1']").click();

//         cy.xpath(cartSelector.addToCart_button).first().click();

//         // Go back to Catalog
//         cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

//         // Dog
//         cy.xpath("//img[contains(@src,'sm_dogs.gif')]").click();
//         cy.xpath("//a[normalize-space()='K9-BD-01']").click();
//         cy.xpath("//a[normalize-space()='EST-6']").click();

//         cy.xpath(cartSelector.addToCart_button).first().click();
//     });


//     it('Remove product from cart', () => {

//         cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

//         // Fish
//         cy.xpath("//img[contains(@src,'sm_fish.gif')]").click();
//         cy.xpath("//a[normalize-space()='FI-SW-01']").click();
//         cy.xpath("//a[normalize-space()='EST-1']").click();

//         cy.xpath(cartSelector.addToCart_button).first().click();

//         // Remove product
//         cy.xpath(cartSelector.remove_button).first().click();
//     });


//     it('Update quantity of product in cart', () => {

//         cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

//         // Fish
//         cy.xpath("//img[contains(@src,'sm_fish.gif')]").click();
//         cy.xpath("//a[normalize-space()='FI-SW-01']").click();
//         cy.xpath("//a[normalize-space()='EST-1']").click();

//         // Add product to cart
//         cy.xpath(cartSelector.addToCart_button).first().click();

//         // Change quantity from 1 to 2
//         cy.get('input[name="EST-1"]')
//             .clear()
//             .type('2');

//         // Click Update Cart
//         cy.xpath(cartSelector.updateCart_button)
//             .first()
//             .click();
//     });


//     it('Add available product to cart', () => {

//         cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

//         // Fish
//         cy.xpath("//img[contains(@src,'sm_fish.gif')]").click();
//         cy.xpath("//a[normalize-space()='FI-SW-01']").click();
//         cy.xpath("//a[normalize-space()='EST-1']").click();

//         // Add to cart
//         cy.xpath(cartSelector.addToCart_button).first().click();

//         //kapish
//     });

// });

import { cartSelector } from "../support/selector";

describe('add to cart', () => {

    it('Continue shopping after adding item', () => {

        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

        // Fish
        cy.xpath(cartSelector.fish_category).click();
        cy.xpath(cartSelector.angelfish_product).click();
        cy.xpath(cartSelector.angelfish_item).click();

        cy.xpath(cartSelector.addToCart_button).first().click();

        // Go back to Catalog
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

        // Dog
        cy.xpath(cartSelector.dog_category).click();
        cy.xpath(cartSelector.bulldog_product).click();
        cy.xpath(cartSelector.bulldog_item).click();

        cy.xpath(cartSelector.addToCart_button).first().click();

    });


    it('Remove product from cart', () => {

        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

        // Fish
        cy.xpath(cartSelector.fish_category).click();
        cy.xpath(cartSelector.angelfish_product).click();
        cy.xpath(cartSelector.angelfish_item).click();

        cy.xpath(cartSelector.addToCart_button).first().click();

        // Remove product
        cy.xpath(cartSelector.remove_button).first().click();

    });


    it('Update quantity of product in cart', () => {

        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

        // Fish
        cy.xpath(cartSelector.fish_category).click();
        cy.xpath(cartSelector.angelfish_product).click();
        cy.xpath(cartSelector.angelfish_item).click();

        // Add product to cart
        cy.xpath(cartSelector.addToCart_button).first().click();

        // Change quantity from 1 to 2
        cy.get(cartSelector.angelfish_quantity)
            .clear()
            .type('2');

        // Click Update Cart
        cy.xpath(cartSelector.updateCart_button)
            .first()
            .click();

    });


    it('Add available product to cart', () => {

        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

        // Fish
        cy.xpath(cartSelector.fish_category).click();
        cy.xpath(cartSelector.angelfish_product).click();
        cy.xpath(cartSelector.angelfish_item).click();

        // Add to cart
        cy.xpath(cartSelector.addToCart_button).first().click();

    });

});