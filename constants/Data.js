export const user = (name, description, profilePicture, id) => {
    this.name = name;
    this.description = description;
    this.profilePicture = profilePicture;
    this.id = id;
}

const product = (title, description, price, seller, image) => {
    this.title = title;
    this.description = description;
    this.price = price;
    this.seller = seller;
    this.image = image;
}

export const users = [
    {
        name: "MobileGamer",
        description: "Also know as Somto Duru",
        profilePicture: require("../assets/icon.png"),
        location: "----",
        productList: suggestedProducts,
        id: "1",
    }
]

export const products = [
    {
        title: "Oreos",
        description: "dark creamy chocolate biscuits, so sweat that you wont want anything else",
        price: "100",
        seller: "----",
        image: "../assets/icon.png",
        id: "1",
    },

    {
        title: "Fanta",
        description: "Orange flavored soda, with a sweet taste and incredible ",
        price: "100",
        seller: "----",
        image: "../assets/icon.png",
        id: "2",
    }
]

export const suggestedProducts = [
    {
        title: "Pencil",
        description: "Stationaries",
        price: "50",
        seller: "----",
        image: "../assets/icon.png",
        id: "1",
    },
    {
        title: "Fanta",
        description: "Snack",
        price: "50",
        seller: "----",
        image: "../assets/icon.png",
        id: "2",
    },
    {
        title: "Cookies",
        description: "Stationaries",
        price: "50",
        seller: "----",
        image: "../assets/icon.png",
        id: "3",
    },
    {
        title: "Coke",
        description: "Snacks",
        price: "50",
        seller: "----",
        image: "../assets/icon.png",
        id: "4",
    }
]

export const categories = [
    {
        name: "Stationaries",
        image: require("../assets/icon.png"),
        id: "1",
    },

    {
        name: "Snacks",
        image: require("../assets/icon.png"),
        id: "1",
    },

    {
        name: "Homework",
        image: require("../assets/icon.png"),
        id: "1",
    },
]

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
    defaultBG2: "#ecf0f1",
    defaultTC: "black",
}

export const images = {
    logo: require("../assets/icon.png"),
    background: require("../assets/icon.png"),
    defaultProfile: require("../assets/icon.png"),
    cart: require("../assets/icon.png"),

}

export const fonts ={
    default: "Arial, Helvetica, sans-seri",
}

export const sizes = {
    ExtraSmall: 10,
    Small: 15,
    Medium: 20,
    Large: 30,
    ExtraLarge: 50,
}


