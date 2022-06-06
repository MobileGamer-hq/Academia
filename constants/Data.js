export const colors = {
    //
    black: "black",
    white: "white",
    blue: "blue",
    red: "red",
    green: "green",
    purple: "purple",
    pink: "pink",
    yellow: "yellow",
    grey: "grey",
    gold: "gold",
    darkCyan: "darkcyan",
    darkblue:  "darkblue",
    darkslategray: "darkslategray",
    mediumslateblue: "mediumslateblue",

    //
    defaultBG: "#c4d8dd",
    defaultBG2: "#f6f6f6",
    defaultBG3: "#f6e5e5",
    defaultTC: "black",
};

export const images = {
    logo: require("../assets/icon.png"),
    defaultProfile: require("../images/profileIcon.png"),
    cartBlack: require("../images/ShopingCartBlackIcon.png"),
    cartWhite: require("../images/ShopingCartWhiteIcon.png"),
    stationaries: require("../images/stationariesIcon.png"),
    homework: require("../images/homeworkIcon.png"),
    snacks: require("../images/sancksIcon.png"),
};

export const fonts ={
    default: "Arial, Helvetica, sans-seri",
};

export const sizes = {
    ExtraSmall: 10,
    Small: 15,
    Medium: 20,
    Large: 30,
    ExtraLarge: 50,
};


class user {
    constructor(name, description, profilePicture, loginDetails, id){
        this.name = name;
        this.description = description;
        this.profilePicture = profilePicture;
        this.loginDetail = loginDetails;
        this.id = id;
    }
};

class product {
    constructor(title, description, price, category, seller, image, tags){
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
        this.seller = seller;
        this.image = image;
        this.tag = tags;

        this.tag.push(this.title);
        this.tag.push(this.seller);
    }
};

export const products = [
    {
        title: "Oreo's",
        description: "dark creamy chocolate biscuits, so sweat that you wont want anything else",
        price: "100",
        seller: "----",
        image: require("../images/othersIcon.png"),
        id: "1",
    },

    {
        title: "Fanta",
        description: "Orange flavored soda, with a sweet taste and incredible ",
        price: "100",
        seller: "----",
        image: require("../images/othersIcon.png"),
        id: "2",
    }
];

export const suggestedProducts = [
    {
        title: "Pencil",
        description: "Stationaries",
        price: "50",
        seller: "Rick",
        image: require("../images/othersIcon.png"),
        id: "1",
    },
    {
        title: "Fanta",
        description: "Snack",
        price: "150",
        seller: "----",
        image: require("../images/othersIcon.png"),
        id: "2",
    },
    {
        title: "Oreo",
        description: "Stationaries",
        price: "500",
        seller: "----",
        image: require("../images/oreos.jpg"),
        id: "3",
    },
    {
        title: "Coke",
        description: "Snacks",
        price: "150",
        seller: "----",
        image: require("../images/othersIcon.png"),
        id: "4",
    }
];

export const categories = [
    {
        name: "Stationaries",
        image: images.stationaries,
        id: "1",
    },

    {
        name: "Snacks",
        image: images.snacks,
        id: "2",
    },

    {
        name: "Homework",
        image: images.homework,
        id: "3",
    },
];

export const users = [
    {
        name: "Brandon",
        description: "........",
        profilePicture: require("../images/profile1.jpg"),
        loginDetails : {
            email: "durulego@gmail",
            password: "1234",
        },
        followers: "1,000,000",
        location: "----",
        colors: colors.white,
        sellerInfo: {
            rating: 5,
            productList: suggestedProducts,
        },
        id: "1",
    },
    {
        name: "Nick",
        description: "Game Developer and UI designer",
        profilePicture: require("../images/profile2.png"),
        loginDetails : {
            email: "----",
            password: "----",
        },
        followers: "10,000",
        location: "----",
        colors: colors.red,
        sellerInfo: {
            rating: 5,
            productList: suggestedProducts,
        },
        id: "2",
    },
    {
        name: "Amy",
        description: "School supplies distributor",
        profilePicture: require("../images/profile2.jpg"),
        loginDetails : {
            email: "----",
            password: "----",
        },
        followers: "1,000",
        location: "----",
        colors: colors.yellow,
        sellerInfo: {
            rating: 5,
            productList: [
                {
                    title: "Pens",
                    description: "Stationaries",
                    price: "50",
                    seller: "----",
                    image: require("../images/othersIcon.png"),
                    id: "1",
                },
                {
                    title: "Ruller",
                    description: "Stationaries",
                    price: "100",
                    seller: "----",
                    image: require("../images/othersIcon.png"),
                    id: "2",
                },
            ],
        },
        id: "3",
    }
];

export const suggestedUsers = [

];

export const cart = [

];

export const settings = {
    currency: " naira",
};

export const InitialState = {
    currentUser : users[0],
};

const dataObject = {
    users: users,
    products: [products, suggestedProducts],
    categories: categories,
    cart: cart,
    settings: settings,
};