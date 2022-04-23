import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native'

export default function FirstScreen(){
    return(
        <View style={styles.container}>
                <TouchableHighlight style={styles.LoginBox}>
                    <Text style={styles.LoginBoxText}>SignIn with Email and Password</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.LoginBox}>
                    <Text style={styles.LoginBoxText}>SignIn using Phone No. and OTP</Text>
                </TouchableHighlight>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    LoginBox:{
        borderWidth:2,
        borderColor:'#ff408c',
        margin:5,
        width:'90%',
        height:50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffb5d4'
    },
    LoginBoxText:{
        fontSize:20,
        fontWeight:'bold'
    }
})