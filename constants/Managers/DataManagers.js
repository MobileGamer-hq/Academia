import {suggestedProducts, products, categories, users, suggestedUsers} from "../Data"
import {sever} from "../Managers/SeverManager"

const manageSuggestedProducts = (newValue) => {
    suggestedProducts.push(newValue);
    console.log(suggestedProducts)
}

const manageSuggestedUsers = (newValue) => {
    suggestedUsers.push(newValue);
    console.log(suggestedUsers);
}
