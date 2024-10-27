import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
 <Stack>
    <Stack.Screen name="index" options={{
        headerShown: false,
animation: 'fade'
    }} />
    <Stack.Screen name="home/index" options={{
        headerShown: false, animation:'fade'
    }} />
 </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})