import { useState } from "react/cjs/react.development";

export const blogContent = [
    {
        title: "Who is MobileGamer",
        content: "This is MobileGamers first post, MobileGamer also known as Somto Duru is a software developer who has worked with many tools and programming languages.",
        key: "1",
    },
    {
        title: "What is MobileGamer Studio",
        content: "MobileGamer Studios is a game company created by MobileGamer with the aim of making games that the players want.",
        key: "2",
    }
]

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
        id: "1",
    }
]

export const products = [
    {
        title: "Oreos",
        description: "Biscuits",
        price: "100",
        seller: "----",
        image: "----",
        id: "1",
    }
]

export const suggestedProducts = [
    {
        title: "Pencil",
        description: "Stationaries",
        price: "50",
        seller: "----",
        image: "----",
        id: "1",
    }
]

export const recommendedProducts = useState([
    new product("","","","",require("../assets/images")),
    
])

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
    logo: require("../assets/images/"),
    background: require("../assets/images/"),
    defaultProfile: require("../assets/images/"),
    cart: require("../assets/images/"),

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


