export const selector = {
username_field: '[name="username"]',

password_field: '[name="password"]',
repassword_field: '[name="repeatedPassword"]',
firstName_field: '[name="account.firstName"]',
lastName_field: '[name="account.lastName"]',    
email_field: '[name="account.email"]',
phone_field: '[name="account.phone"]',
address1_field: '[name="account.address1"]',
address2_field: '[name="account.address2"]',    
city_field: '[name="account.city"]',
state_field: '[name="account.state"]',
zip_field: '[name="account.zip"]',
country_field: '[name="account.country"]',
languagePreference_field: '[name="account.languagePreference"]',
};

  export const loginSelector = {
    username_field: '[name="username"]',
    password_field: '[name="password"]',
    signon_button: '[name="signon"]',
  };

// export const cartSelector = {

//     addToCart_button: "//a[normalize-space()='Add to Cart']",

//     remove_button: "//a[normalize-space()='Remove']",

//     updateCart_button: "//input[@value='Update Cart']",

// };

    // abc: "//a[normalize-space()='EST-1']",
    
export const cartSelector = {

    // Fish
    fish_category: "//img[contains(@src,'sm_fish.gif')]",
    angelfish_product: "//a[normalize-space()='FI-SW-01']",
    angelfish_item: "//a[normalize-space()='EST-1']",

    // Dog
    dog_category: "//img[contains(@src,'sm_dogs.gif')]",
    bulldog_product: "//a[normalize-space()='K9-BD-01']",
    bulldog_item: "//a[normalize-space()='EST-6']",

    // Cart actions
    addToCart_button: "//a[normalize-space()='Add to Cart']",
    remove_button: "//a[normalize-space()='Remove']",
    updateCart_button: "//input[@value='Update Cart']",

    // Quantity
    angelfish_quantity: "input[name='EST-1']"

};
  
export const checkoutSelector = {

    // Fish
    fish_category: "//img[contains(@src,'sm_fish.gif')]",

    // Fish product
    angelfish_product: "//a[normalize-space()='FI-SW-01']",

    // Fish item
    angelfish_item: "//a[normalize-space()='EST-1']",

    // Cart
    addToCart_button: "//a[normalize-space()='Add to Cart']",

    // Checkout
    proceedToCheckout_button:
        "//a[normalize-space()='Proceed to Checkout']"

};


export const validCheckoutSelector = {

    // Fish
    fish_category: "//img[contains(@src,'sm_fish.gif')]",

    // Fish product
    angelfish_product: "//a[normalize-space()='FI-SW-01']",

    // Fish item
    angelfish_item: "//a[normalize-space()='EST-1']",

    // Cart
    addToCart_button: "//a[normalize-space()='Add to Cart']",

    // Checkout
    proceedToCheckout_button: "//a[normalize-space()='Proceed to Checkout']",

    // Continue order
    continue_button: "//input[@name='newOrder']",

    // Confirm order
    confirm_button: "//a[normalize-space()='Confirm']",

    // Success message
    order_success_message:
        "//li[contains(text(),'Thank you, your order has been submitted.')]"

};