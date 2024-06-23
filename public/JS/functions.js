//Select elements

//console.log("Hello World!");

const title = document.getElementById("txt");
//console.log(title);

const image = document.getElementsByClassName("logo");
//console.log(image[1]);

const tags = document.getElementsByTagName("section");
//console.log(tags[2]);

const elem = document.querySelectorAll(".logo");
//console.log(elem);

//Create element and add attributes
const parent = document.querySelector(".main__products");
const newElem = document.createElement("article");
newElem.setAttribute("class", "new")

parent.append(newElem);


// Attributes

const logo = document.querySelector(".logo");
//logo.setAttribute("src","img/jersey.png");
//console.log(logo.getAttribute("src"));
//console.log(logo.hasAttribute("src"));
//logo.removeAttribute("src");

if(logo.hasAttribute("src")) {
    //alert("TieneSRC");
}

// Clases de CSS

const parent2 = document.querySelector(".main__products");
const parent3 = parent2.firstElementChild;
const price = parent3.lastElementChild;

//console.log(price);

price.classList.add("red");
price.classList.replace("red", "blue");

price.classList.remove("blue")

//Modificar texto

const button = document.getElementsByTagName("button");
//console.log(button[0].innerText);

//button[0].innerText = "BUY";

//Modificar Style

//console.log(button[0].style);

//button[0].style.backgroundColor = "gray";

//Eventos

const elemButton = button[0];

button[0].addEventListener('click', () => {
    elemButton.classList.toggle("toggle");
});



const header = document.querySelector("header");
const carIcon = header.lastElementChild;
const cart = document.querySelector(".main__cart")

carIcon.addEventListener('click', () => { 
    if(cart.classList.contains("hide")){
        cart.classList.remove("hide")
    }; 
    cart.classList.toggle("show");
})

const closeIcon = document.getElementsByClassName("close");

closeIcon[0].addEventListener('click', () => {
    if(cart.classList.contains("show")){
        cart.classList.remove("show")
    }
    cart.classList.add("hide");
})





const menuIcon = header.firstElementChild;
const menu = document.querySelector(".main__menu");

menuIcon.addEventListener('click', () => { 
    if(menu.classList.contains("hide")){
        menu.classList.remove("hide");
    }; 
    menu.classList.toggle("show");
});

const closeIcon2 = document.getElementsByClassName("close2");

closeIcon2[0].addEventListener('click', () => {
    if(menu.classList.contains("show")){
        menu.classList.remove("show");
    }
    menu.classList.add("hide");
});


const rowProducts = document.querySelector(".row__Product");
const productList = document.querySelector(".main__products");
const totalPrice = document.querySelector(".total");
const counterProducts = document.querySelector(".counter");

let allProducts = [];

let totalPagar = document.querySelector(".total__pagar");


productList.addEventListener('click', e => {
    if (e.target.classList.contains("add__Cart")) {
        const product = e.target.parentElement;

        const infoProduct = {
            id: Date.now(),
            quantity: 1,
            img: product.querySelector("img").src,
            title: product.querySelector("h3").textContent,
            price: parseFloat(product.querySelector("p").textContent.replace(/[$,]/g, ''))
        };

        allProducts = [...allProducts, infoProduct];

        showHTML();
    }
});

const showHTML = () => {
    rowProducts.innerHTML = "";

    let total = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement("div");
        containerProduct.classList.add("product__Cart");

        containerProduct.innerHTML = `
            <div class="product__Cart" data-id="${product.id}">
                <p>${product.quantity}</p>
                <img class="img__Cart" src="${product.img}" alt="${product.title}">
                <p>${product.title}</p>
                <p>$${product.price}</p>
                <i class="remove"><img class="delete__Icon" src="img/trash.png" alt="Icono quitar" ></i>
            </div>
        `;

        rowProducts.append(containerProduct);

        total = total + product.price;

        const removeIcon = containerProduct.querySelector(".remove");

        removeIcon.addEventListener("click", () => {
            removeProduct(product.id);
        });

       

          
    });

    

    counterProducts.textContent = allProducts.length;

   
    totalPagar.textContent = total.toFixed(2);
};



const removeProduct = (id) => {
    allProducts = allProducts.filter(product => product.id !== id);
    showHTML();
};

const onImage = document.querySelectorAll(".img__Art");

onImage.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.scale = 1.05;
        element.style.boxShadow = "5px 10px 10px 5px #000000"
        element.style.overflow = "hidden"
    });
    element.addEventListener("mouseleave", () => {
        element.style.scale = 1;
        element.style.boxShadow = "0px 0px 0px #FFFFFF";
    });
});

const buttonSize = document.querySelectorAll("button");

buttonSize.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.borderRadius = "20px";
        element.style.scale = 1.2;
        element.style.boxShadow = "0px 0px 20px #000000"
    });
    element.addEventListener("mouseleave", () => {
        element.style.borderRadius = "0px";
        element.style.scale = 1;
        element.style.boxShadow = "0px 0px 0px #000000"
    });
});

const buttonHeader = document.querySelectorAll(".button__header");

buttonHeader.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.scale = 1.2;
    });
    element.addEventListener("mouseleave", () => {
        element.style.scale = 1;
    });
});

const menuSections = document.querySelectorAll(".size");

menuSections.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.color = "#0079FF";
    });
    element.addEventListener("mouseleave", () => {
        element.style.color = "#000000";
    });
});

const buttonClose1 = document.querySelectorAll(".close");

buttonClose1.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.scale = 2;
    });
    element.addEventListener("mouseleave", () => {
        element.style.scale = 1;
    });
});

const buttonClose2 = document.querySelectorAll(".close2");

buttonClose2.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.scale = 2;
    });
    element.addEventListener("mouseleave", () => {
        element.style.scale = 1;
    });
});

const showModal = document.querySelectorAll(".img__Art");
const hideModal = document.querySelector(".modal i")


showModal.forEach(picProduct => {
    picProduct.addEventListener("click", () => {
        const modalHi = document.querySelector(".modal")
        if(modalHi.classList.contains("hide")) {
            modalHi.classList.remove("hide");
        };
        modalHi.classList.add("show"); 
    });
});

hideModal.addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hide");
});




