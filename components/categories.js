import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { data } from '../constants/data'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated'

const Categories = ({activeCategory, handleChangeCategory}) => {

  return (
   <FlatList
    horizontal
    showsHorizontalScrollIndicator = {false}
    data = {data.categories}
    keyExtractor = {(item) => item}
    contentContainerStyle = {styles.flatlistContainer}
    renderItem = {({item, index}) => (
     <CategoryItem title = {item}
     isActive={activeCategory==item}
     handleChangeCategory={handleChangeCategory}
     index = {index}
      />
    )}
    />
  )
}

const CategoryItem = ({title, index, isActive, handleChangeCategory}) => {
    let color = isActive? theme.colors.white : theme.colors.neutral(0.8)  
    let backgroundColor = isActive? theme.colors.neutral(0.8) : theme.colors.white
    return (
        <Animated.View
        entering={FadeInRight.duration(1000).delay(index*200).springify().damping(10)}
        >
            <TouchableOpacity style = {[styles.category,{backgroundColor}]}
            onPress={()=>
            {
                handleChangeCategory(isActive? null:title)
            }
            }
            >
        <Text style = {[styles.title,{color}]}>{title}</Text>
        </TouchableOpacity>
        </Animated.View>
    )
}

export default Categories

const styles = StyleSheet.create({
    flatlistContainer:{
        paddingHorizontal: wp(4),
        gap: 8
    },
    category:{
        padding:12,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:theme.colors.grayBG,
        // backgroundColor:theme.colors.white,
        borderRadius:theme.radius.lg,
        borderCurve:'continuous',
    },
    title:{
        fontSize:hp(1.8),
        fontWeight:theme.fontWeight.medium,
    }
})