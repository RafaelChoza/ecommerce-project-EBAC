const menuIcon = document.getElementById("menu__icon");
const cartIcon = document.getElementById("cart__icon");
const menuContent = document.querySelector(".main__menu");
const cartContent = document.querySelector(".main__cart");
const menuCLoseIcon = document.querySelector(".close2");
const cartCloseIcon = document.querySelector(".close");

menuIcon.addEventListener(`click`, () => {
    menuContent.classList.add("show");
});

menuCLoseIcon.addEventListener(`click`, () =>{
    menuContent.classList.remove("show");
});

cartIcon.addEventListener(`click`, () => {
    cartContent.classList.add("show");
});

cartCloseIcon.addEventListener(`click`, () =>{
    cartContent.classList.remove("show");
});

document.addEventListener('click', function(event) {
    const isClickInsideMenu = menuContent.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);
  
    if (!isClickInsideMenu && !isClickOnMenuIcon) {
        menuContent.classList.remove('show');
    }
});

function updateCartCounter() {
    const productsOnCart = document.querySelectorAll(".cart__item");
    const numberItemsCart = productsOnCart.length;
    const counterCart = document.querySelector(".counter");
    counterCart.textContent = numberItemsCart;
}

function formatCurrency(value) {
    return value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

const divEmptyButton = document.createElement("div");
divEmptyButton.classList.add("div__emptyButton");
const emptyCartButton = document.createElement("span");
emptyCartButton.textContent = "Vaciar Carrito";
emptyCartButton.classList.add("empty__button");
cartContent.appendChild(divEmptyButton);
divEmptyButton.appendChild(emptyCartButton);

emptyCartButton.addEventListener("click", () => {
    const productsOnCart = document.querySelectorAll(".cart__item");
    productsOnCart.forEach(item => item.remove());
    totalToPay = 0;
    const showTotalPay = document.querySelector(".total__pay");
    showTotalPay.textContent = formatCurrency(totalToPay);
    updateCartCounter();
});


document.addEventListener('click', function(event) {
    const isClickInsideCart = cartContent.contains(event.target);
    const isClickOnCartIcon = cartIcon.contains(event.target);
    const isClickOnDeleteIcon = event.target.classList.contains('delete__item');
  
    if (!isClickInsideCart && !isClickOnCartIcon && !isClickOnDeleteIcon) {
        cartContent.classList.remove('show');
    }
});

document.querySelectorAll(".add__Cart").forEach((button) => {
    totalToPay = 0;

    button.addEventListener("click", function() {

        const productArticle = this.parentElement;

        const cartItem = document.createElement("div")
        cartItem.classList.add("cart__item")

        const productImage = productArticle.querySelector(".img__Art").cloneNode(true); 
        const producTitle =  productArticle.querySelector("h3").cloneNode(true);
        const productPrice = productArticle.querySelector(".price").cloneNode(true);
        const deleteItemIcon = document.createElement("span");

        const productPriceElement = productArticle.querySelector(".price");
        const productPriceText = productPriceElement.textContent.trim();
        const cleanedPriceText = productPriceText.replace(/[$,]/g, '');
        const productPriceNumber = parseFloat(cleanedPriceText);

        totalToPay = totalToPay + productPriceNumber;
        const showTotalPay = document.querySelector(".total__pay");
        showTotalPay.textContent = formatCurrency(totalToPay);


        deleteItemIcon.textContent = "Quitar";
        deleteItemIcon.classList.add("delete__item");
        deleteItemIcon.addEventListener("click", () => {

            totalToPay = totalToPay - productPriceNumber;
            showTotalPay.textContent = formatCurrency(totalToPay);

            cartItem.remove();
            updateCartCounter();
 
        });

        cartItem.appendChild(producTitle);
        cartItem.appendChild(productImage);
        cartItem.appendChild(productPrice);
        cartItem.appendChild(deleteItemIcon);

        document.querySelector('.row__Product').appendChild(cartItem);

        const productsOnCart = document.querySelectorAll(".cart__item");
        const numberItemsCart = productsOnCart.length;

        const counterCart = document.querySelector(".counter")
        counterCart.textContent = numberItemsCart; 
    });      
});

