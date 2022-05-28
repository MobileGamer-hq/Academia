import React, {useState} from 'react'
import { StyleSheet, Text, View , FlatList} from 'react-native'
import { SearchBar, RoundButton } from '../constants/Components'
import { categories } from '../constants/Data';
import { ProductCategory} from '../constants/Objects';


const [searchResult, setSearchResult] = useState([])

export default function SearchScreen({navigation, route}) {
    
    const search = route.params.search;
    return (
        <View style = {styles.container}>
            <SearchBar />
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item)=>item.id}
                    data={categories} 
                    renderItem = {({item}) => {
                        return(
                            <ProductCategory method = {()=>navigation.navigate("Search", {search: item.name})} />
                        )
                    }}
                />
            </View>
            <View>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item)=>item.id}
                    data={searchResult} 
                    renderItem = {({item}) => {
                        return(
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        )
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