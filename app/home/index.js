import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { theme } from '../../constants/theme'
import { hp, wp } from '../../helpers/common'
import Animated, { FadeIn, FadeInDown, FadeInRight } from 'react-native-reanimated'
import Categories from '../../components/categories'
const HomeScreen = () => {
  const {top} = useSafeAreaInsets()
  const paddingTop = top>0? top + 10 : 30; 
  const [searchText, setSearchText] = useState('')  
  const searchInputRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState(null) 

  const handleChangeCategory = (cat)=>{
    setActiveCategory(cat)
  }
  // console.log("active catr", activeCategory)
    


  return (
    <View
    style = {[styles.contianer,{paddingTop}]}
    >
      {/* Header */}
      <View style = {styles.header}>
            <Pressable>
              <Text style = {styles.title}>Wollie</Text>
            </Pressable>

            <Pressable>
              <FontAwesome6 name = "bars-staggered" size = {22} color = {theme.colors.neutral(0.7)}/>
            </Pressable>
      </View>

      {/* Content */}
        <ScrollView contentContainerStyle={{gap:15}}>

          {/* SearchBar */}
          <View style={styles.searchBar}>
              <View style={styles.searchIcon}>
                <Feather name = "search" size = {20} color = {theme.colors.neutral(0.7)}/>
                 </View>
                 <TextInput 
                  placeholder = "Search"
                  style = {styles.searchInput}
                  ref={searchInputRef}
                  onChangeText={(text) => setSearchText(text)}
                  value={searchText}
                  />
                 { searchText &&
                //  <Animated.View
                //   entering={FadeIn.duration(300)}
                //   exiting={FadeIn.duration(300)}
                //  >
                   <TouchableOpacity
                  style = {styles.closeIcon}
                  >
                    <Ionicons name="close" size = {22} color = {theme.colors.neutral(0.7)}/>
                  </TouchableOpacity>
                //  </Animated.View>
                 }
          </View>


          {/* Categories */}
          <Categories 
          activeCategory={activeCategory} 
          handleChangeCategory={handleChangeCategory}
          />

        </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  contianer:{
    flex:1,
    gap:15,
    // backgroundColor:theme.colors.neutral(0.05),
  },
  header:{
    marginHorizontal:wp(4),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  title:{
    fontSize:hp(4),
    fontWeight:'bold',
    color:theme.colors.neutral(0.9),
    fontWeight:theme.fontWeight.semibold,
  },
  searchBar:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderColor:theme.colors.grayBG,
    backgroundColor:theme.colors.white,
    marginHorizontal:wp(4),
    padding:6,
    borderRadius:theme.radius.lg,
    // paddingHorizontal:15,
    paddingLeft:10,
  },
  searchIcon:{
    padding:8,
  },
  searchInput:{
    flex:1,
    borderRadius:theme.radius.sm,
    paddingVertical:10,
    fontSize:hp(1.8),
  },
  closeIcon:{
    padding:8,
    backgroundColor:theme.colors.neutral(0.1),
    borderRadius:theme.radius.sm,
  }
})