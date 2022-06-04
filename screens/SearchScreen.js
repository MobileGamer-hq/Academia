import React, {useState} from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity, Image} from 'react-native'
import { SearchBar} from '../constants/Components'
import { categories, products, colors, sizes} from '../constants/Data';
import { ProductCategory, SearchResult} from '../constants/Objects';

export default function SearchScreen({navigation, route}) {
    let items  = [];
    const [searchResult, setSearchResult] = useState(products)

    const searchText = useState(route.params.search);

    const Search = (val) => {
        if(!val.length) return setSearchResult(products);
        val = val.toLowerCase()
        for (let i = 0; i < products.length; i++) {
            let item =  products[i].tags
            for (let x = 0; x < item.length; x++) {
                if(item[x].toLowerCase().includes(val) ){
                    items.push(products[i])
                    continue;
                }
            }
        }
        setSearchResult(items)
        console.log(searchText, searchResult);
    }

    const goThroughData = (val) => {
        if(!val.length) return setSearchResult(products);

        const filterData =  products.filter(item => item.tags.filter(tag => tag.toLowerCase().includes(val)));

        if(filterData.length) {setSearchResult(filterData)}
        console.log(filterData, "\n", searchResult);
    }

    Search(searchText);
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
            <View>
                <FlatList
                    vertical
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item)=>item.id}
                    data={searchResult}
                    renderItem = {({item}) => {
                        return(
                            <TouchableOpacity 
                                style = {{
                                    backgroundColor: colors.white,
                                    marginVertical: sizes.Small,
                                }}
                            >
                                <View style = {{
                                    height: 100,
                                }}>
                                    <Image 
                                        style = {{
                                            flex: 1,
                                        }}
                                        resizeMode = "contain"
                                        source = {item.image}/>
                                </View>
                                <View>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
    }
})
