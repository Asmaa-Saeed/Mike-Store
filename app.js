const wrapperEl = document.querySelector(".slider-wrapper");
const storeItems = document.querySelectorAll(".store-item");

// wrapperEl.style.transform = "translateX(-400vw)";


    const products = [
        {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
            code: "black",
            img: "./img/air.png",
            },
            {
            code: "darkblue",
            img: "./img/air2.png",
            },
        ],
        },
        {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
            code: "lightgray",
            img: "./img/jordan.png",
            },
            {
            code: "green",
            img: "./img/jordan2.png",
            },
        ],
        },
        {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
            code: "lightgray",
            img: "./img/blazer.png",
            },
            {
            code: "green",
            img: "./img/blazer2.png",
            },
        ],
        },
        {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
            code: "black",
            img: "./img/crater.png",
            },
            {
            code: "lightgray",
            img: "./img/crater2.png",
            },
        ],
        },
        {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
            code: "gray",
            img: "./img/hippie.png",
            },
            {
            code: "black",
            img: "./img/hippie2.png",
            },
        ],
        },
    ];

    let chosenProduct = products[0];
    
    const currentProductImg = document.querySelector('.productImg');
    const currentProductTitle = document.querySelector(".productTitle");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductColors = document.querySelectorAll(".color");
    const currentProductSizes = document.querySelectorAll(".size");
storeItems.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapperEl.style.transform = `translateX(${-100 * index}vw)`;

        //change the chosen product
        chosenProduct = products[index];

        //change text of current product
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = `$${chosenProduct.price}`;
        currentProductImg.src = chosenProduct.colors[0].img;

        //assign new colors // change color background without functionality
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

// change img according to color chosen
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

//change the size
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
            size.style.backgroundColor = "black";
            size.style.color = "white";
    });
});

// open and close the payment form
const productButton = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const closeButton = document.querySelector(".close");

// to open the payment form
productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

// to close the payment form
closeButton.addEventListener("click", () => {
    payment.style.display = "none";
});