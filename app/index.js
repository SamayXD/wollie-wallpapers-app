import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { wp,hp} from '../helpers/common'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { theme } from '../constants/theme'
import { useRouter } from 'expo-router'

const WelcomeScreen = () => {
    const router = useRouter()
   return(
        <View style={styles.container}>
             <StatusBar style='light'/>
             <Image
             source={require('../assets/images/welcome.png')}
                style={styles.bgImage}
                resizeMode='cover' />

            <Animated.View
            entering={FadeInDown.duration(600)}

            style={{flex:1}}
            >
                {/* BG GRADIENT*/}
                <LinearGradient
                colors={['rgba(255,255,255,0)','rgba(255,255,255,0.5)','white','white']}
                style={styles.gradient}
                start={{x:0.5,y:0}}
                end={{x:0.5,y:0.8}}
                />  

                {/* CONTENT */}
                <View style={styles.contentContainer}>
                    <Animated.Text 
                    entering={FadeInDown.delay(400).springify()}
                    style={styles.title}>Wollie
                    </Animated.Text>
                    <Animated.Text 
                                        entering={FadeInDown.delay(500).springify()}

                     style={styles.subtitle}>
                     Every Wall needs a Paper</Animated.Text>
                    <Animated.View
                    entering={FadeInDown.delay(600).springify()}  >  
                        <TouchableOpacity onPress={() => router.push('home')
    

                        }
                        style={styles.btn}>
                           <Text style={styles.btnText}>Get Started</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>




            </Animated.View>
        </View>
   )
}


const styles = StyleSheet.create({
  container: {
    flex:1,    
  },
  bgImage: {
    width:wp(100),
    height:hp(100),
    position:'absolute',
  }, gradient: {
    width:wp(100),
    height:hp(65),
    position:'absolute',
    bottom:0,
  },
  contentContainer: {
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    gap:14,
  },
  title: {
    fontSize: hp(7),
    fontWeight:'bold',
    color:theme.colors.neutral(0.9),
    fontWeight:theme.fontWeight.bold,
  },
    subtitle: {
        fontSize: hp(2),
        color:theme.colors.neutral(0.8),
        fontWeight:theme.fontWeight.medium,
        letterSpacing:1,
        marginBottom:hp(5),
    },
    btn: {
       marginBottom:hp(5),
       backgroundColor:theme.colors.neutral(0.9),
         paddingVertical:hp(2),
            paddingHorizontal:wp(26),
            padding:15,
            borderRadius:theme.radius.xl,
        borderCurve:'continuous',
    },

    btnText: {
        color:theme.colors.white,
        fontWeight:theme.fontWeight.medium,
        letterSpacing:1,
        fontSize:hp(2),
    },
})

export default WelcomeScreen