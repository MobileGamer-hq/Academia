const  fs = require("fs")

const suggestedProducts = [
    {
        title: "Pencil",
        description: "Stationaries",
        price: "50",
        seller: "----",
        image: "../images/othersIcon.png",
        id: "1",
    },
    {
        title: "Fanta",
        description: "Snack",
        price: "150",
        seller: "----",
        image: "../images/othersIcon.png",
        id: "2",
    },
    {
        title: "Cookies",
        description: "Stationaries",
        price: "500",
        seller: "----",
        image: "../images/othersIcon.png",
        id: "3",
    },
    {
        title: "Coke",
        description: "Snacks",
        price: "150",
        seller: "----",
        image: "../images/othersIcon.png",
        id: "4",
    }
]

const users = [
    {
        name: "MobileGamer",
        description: "Also know as Somto Duru",
        loginDetails : {
            email: "durulego@gmail",
            password: "1234",
        },
        followers: "1,000,000",
        location: "----",
        sellerInfo: {
            rating: 5,
            productList: suggestedProducts,
        },
        id: "1",
    },
    {
        name: "Somto Duru",
        description: "Game Developer and UI designer",
        loginDetails : {
            email: "----",
            password: "----",
        },
        followers: "10,000",
        location: "----",
        sellerInfo: {
            rating: 5,
            productList: suggestedProducts,
        },
        id: "2",
    },
    {
        name: "Deku",
        description: "Also know as Midoriya",
        loginDetails : {
            email: "----",
            password: "----",
        },
        followers: "1,000",
        location: "----",
        sellerInfo: {
            rating: 5,
            productList: [
                {
                    title: "Pens",
                    description: "Stationaries",
                    price: "50",
                    seller: "----",
                    image: "../images/othersIcon.png",
                    id: "1",
                },
                {
                    title: "Ruller",
                    description: "Stationaries",
                    price: "100",
                    seller: "----",
                    image: "../images/othersIcon.png",
                    id: "1",
                },
            ],
        },
        id: "3",
    }
]

const dataObject = {
    users : users,
    products: suggestedProducts
}
const convertObject = (dataObject) => {
    let jsonObject = JSON.stringify(dataObject);

    fs.writeFile("user.json",jsonObject,"utf8",(err)=>{
        if(err){
            console.log("it did not work")
            return console.log(err);
        }
        console.log("fill has been saved");
    })
}

convertObject(dataObject)
