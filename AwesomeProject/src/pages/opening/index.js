import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from './../../assets/Icon/logo.png'
import LinearGradient from 'react-native-linear-gradient'
const Opening = () => {
 
    return (
        <LinearGradient colors={['#FDA4A4', '#C25151', '#973C3C']} style={styles.linearGradient}>
          <View style={styles.container}>
            <View style={styles.item}>
                <Image source ={Logo} style={styles.logo}/>
                <Text style={{textAlign:'center'}}>Unklab Hymnal</Text>
             </View>  
          </View>
        </LinearGradient>
    )
}

export default Opening

const styles = StyleSheet.create({
    container:{
        color: 'black',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title:{
        color: 'black'
    },
    item:{
        margin: 200
    },
    logo: {
        width: 170,
        height: 170
    },
    linearGradient: {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5
    }

})
