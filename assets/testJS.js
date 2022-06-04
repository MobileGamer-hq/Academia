class product {
    constructor(title, description, price, seller, image, tags){
        this.title = title;
        this.description = description;
        this.price = price;
        this.seller = seller;
        this.image = image;
        this.tag = tags;
    }
}

let list = []

somto = new product("somto", "name","1000", "somto", "-----", ["name", "test"])
let User = [
    somto,
    new product("Kachi", "name","500", "Kachi", "-----", ["new", "deku"])
]

console.log(User);
