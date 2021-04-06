import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {} from 'react-native-gesture-handler';

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            session_name: '',
            account_password:'',
        };

    }
    loginHandler = () => {
        const {navigate} = this.props.navigation;
        
        var Session_Name = this.state.session_name;
        var Account_Password = this.state.account_password;

        if(Session_Name.length == 0 && Account_Password.length == 0) {
            alert("Required Field is Missing!");
        }
        else{
            
            var loginAPI = "http://192.168.1.198/react/login.php";

            var headers = {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'

            };
            var data = {
                session_name : Session_Name,
                account_password : Account_Password,
            };
            
            fetch(loginAPI,{
                method : 'POST',
                headers : headers,
                body : JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((response) => {
                if(response[0].session_name.length != 0){
                    alert("Welcome " + response[0].session_name);
                    setTimeout(() => {
                        navigate('Welcome');
                    },1000);
                }
                else{
                    alert("Invalid Account!");
                }
                
            })
            .catch((error) =>{
                alert("Invalid Account!");
                console.log("Error: " + error);
            })
        }
    }
    navigateHandlerRegister = () => {
        const {navigate} = this.props.navigation;
        navigate('Register');
    }
    render(){

        return(
            <View>
                <Image source = {require('../images/LORMA.png')}
                style={{width:"100%", height:"40%"}}/>
                <Text style={styles.text}>
                    Your Path for a Brigther FUTURE
                </Text>

                <View style={styles.viewText}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput style={styles.inputText} 
                    placeholderTextColor="#00716F" 
                    placeholder="Email" 
                    onChangeText = {session_name => this.setState({session_name})}
                    />
                </View>
                <View style={styles.viewText}>
                    <Icon name="lock" color="#00716F" size={24}/>
                    <TextInput style={styles.inputText} 
                    placeholderTextColor="#00716F" 
                    placeholder="Password" 
                    onChangeText = {account_password => this.setState({account_password})}
                    secureTextEntry/>
                </View>
                
                <TouchableOpacity>
                    <View style={styles.loginBtn}>
                        <Text 
                        onPress ={this.loginHandler}
                        style={{
                            color:'white',
                            fontFamily:"SemiBold",
                        }}>Log In</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text
                    onPress={this.navigateHandlerRegister}
                    style={{
                        alignSelf:'center',
                        color:'#00716F',
                        fontFamily:'Medium',
                        paddingVertical:30
                    }}
                >Create Account</Text>
                </TouchableOpacity>
            </View>
            
        );
    }

}
const styles = StyleSheet.create({
    text:{
        fontFamily:"SemiBold",
        fontSize:20,
        alignSelf:'center',
        marginVertical: 4,
        opacity: .5,
    },
    viewText:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:55,
        borderWidth:2,
        marginTop:20,
        paddingHorizontal:10,
        borderColor:'black',
        borderRadius:24,
        paddingVertical:2,
    },
    inputText:{
        width:"100%",
        paddingHorizontal:10,
    },
    loginBtn:{
        marginHorizontal:55,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 30,
        backgroundColor:"#00716F",
        paddingVertical:8,
        borderRadius:24,
    },
})