import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, Modal} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {} from 'react-native-gesture-handler';

export default class Registration extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            account_name: '',
            account_email:'',
            account_password:'',
        };
    }
    insertData = () => {
        var account_name = this.state.account_name;
        var account_email = this.state.account_email;
        var account_password = this.state.account_password;

        if(account_name.length == 0 || account_email.length == 0 || account_password == 0){
            alert("Required field is missing!");
        }
        else{
            var insertAPI = "http://192.168.1.198/react/connection.php";

            var headers = {
                'Accept' : 'application/json',
                'Content-Type' : 'application.json'

            };

            var data = {
                account_name : account_name,
                account_email : account_email,
                account_password : account_password
            };

            fetch(insertAPI,
            {
                method:'POST',
                headers: headers,
                body: JSON.stringify(data),
            }
            )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                alert(response[0].Message);
            }
            ).catch((error)=>{
                alert("Error: " + error);
            })
        }

    }

    // state = {
    //     modal : false
    // }

    // handleModal = () => {
    //     this.setState({
    //         modal: !this.state.modal ? true: false
    //     })
    // }
    
    render(){

        const {navigate} = this.props.navigation


        return(
            
                <View>
                    <Image source = {require('../images/LORMA.png')}
                    style={{width:"100%", height:"40%"}}/>
                    <Text style={styles.text}>
                        Your Path for a Brigther FUTURE
                    </Text>

                    <View style={styles.viewText}>
                        <TextInput style={styles.inputText} 
                        placeholder="Full Name"
                        placeholderTextColor="#00716F"
                        onChangeText = {account_name => this.setState({account_name})}
                        />
                    </View>
                    <View style={styles.viewText}>
                        <TextInput style={styles.inputText} 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        onChangeText = {account_email => this.setState({account_email})}
                        />
                    </View>
                    <View style={styles.viewText}>
                        <TextInput style={styles.inputText} 
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        secureTextEntry
                        onChangeText = {account_password => this.setState({account_password})}
                        />
                    </View>

                    <TouchableOpacity>
                        <View style={styles.loginBtn}>
                            <Text 
                            onPress = {this.insertData}
                            style={{
                                color:'white',
                                fontFamily:"SemiBold",
                            }}>Create</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <Modal transparent = {true} onRequestClose={this.handleModal} visible={this.state.modal} animationType="slide">
                        <View style={styles.showModal}>
                        <Text style = {{color:"black", fontSize:24, fontFamily:"ExtraBold"}}>Thank you for registering!</Text>
                        <TouchableOpacity style={{
                            marginHorizontal:55,
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop: 30,
                            backgroundColor:"#00716F",
                            paddingVertical:8,
                            borderRadius:24,
                            width:"50%",
                            color:"white"}}>
                            <Text onPress ={this.handleModal, ()=>navigate('Login')} style={{color:"white", fontSize:24, fontFamily:"ExtraBold"}}>OK</Text>
                        </TouchableOpacity>
                        </View>
                    </Modal> */}
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
        marginHorizontal:50,
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
        fontSize:15,
        fontFamily:"SemiBold",

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
    showModal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    }
})