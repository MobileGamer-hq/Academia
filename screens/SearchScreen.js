import React, {useState} from 'react'
import { StyleSheet, Text, View , FlatList} from 'react-native'
import { SearchBar, RoundButton } from '../constants/Components'
import { categories, products } from '../constants/Data';
import { ProductCategory} from '../constants/Objects';


const SearchResult = (props) => {
    return(
        <View>
            <FlatList
                Vertical
                showsHorizontalScrollIndicator = {false}
                keyExtractor={(item)=>item.id}
                data={props.list}
                renderItem = {({item}) => {
                    return(
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
}


export default function SearchScreen({navigation, route}) {
    const [searchResult, setSearchResult] = useState([])

    const [searchText, setSearchText] = useState(route.params.search);

    const Search = (val) => {
        let items  = []
        setSearchText(val);
        for (let item in products) {
            if(item.tag.includes(searchText)) {
                items.push(item)
            }
        }
        setSearchResult(items)
        console.log(searchText)
    }
    return (
        <View style = {styles.container}>
            <SearchBar
                method = {(val)=>Search(val)}
            />
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item)=>item.id}
                    data={categories}
                    renderItem = {({item}) => {
                        return(
                            <ProductCategory
                                image = {item.image}
                                method = {()=>navigation.navigate("Search", {search: item.name})}
                            />
                        );
                    }}
                />
            </View>
            <Text>
                {searchText}
            </Text>
            <SearchResult list = {searchResult}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
    }
})
