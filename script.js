const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products =[
    {
    id:1,
    title: "Play Station 2",
    price: "9,999",
    colors:[
        {
        code:"rgb(67, 67, 244)",
        img:"images/ps2blue.jpg",
        },
        
        {
        code:"black",
        img:"images/aaps2i.webp",
    },
    ],
},
{
    id:2,
    title:"Play Station 3",
    price:"15,000",
    colors:[
        {
            code:"black",
            img:"images/ps3bx.jpg",
        },
        {
            code:"purple",
            img:"images/ps3pink.webp",
        },
    ],
},
{
    id:3,
    title:"Play Station 4",
    price:"39,999",
    colors:[
        {
            code:"pink",
            img:"images/ps4pink.webp",
        },
        {
            code:"rgb(216, 38, 38)",
            img:"images/ps4red.webp",
        },
    ],
},
{
    id:4,
    title:"Play Station 5",
    price:"75,500",
    colors:[
        {
            code:"rgb(100, 239, 100)",
            img:"images/ps5green.jpg",
        },
        {
            code:"red",
            img:"images/ps5red.jpg",
        },
    ],
},
{
    id:5,
    title:"Controllers",
    price:"3,999",
    colors:[
        {
            code:"whitesmoke",
            img:"images/cons4.webp",
           
        },
        {
            code:"lightblue",
            img:"images/glow3.jpeg",
        },
    ],
},
];

let chosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //changing the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`
        //changing the choosing product
        chosenProduct = products[index]

        //change text of current product
        currentProductTitle.textContent =chosenProduct.title
        currentProductPrice.textContent ="Birr: " + " " + chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img

        //assigning colors
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code
        })
    })
})

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white"
            size.style.color ="green"
        })
        size.style.backgroundColor = "green"
        size.style.color ="white"
    })
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})

