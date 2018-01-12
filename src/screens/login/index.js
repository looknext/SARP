import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Toast,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import styles from "./styles";

class Login extends Component {
    _onPressButton() {
        console.log("You tapped the button!");
    }

    constructor(props) {
   super(props);
   this.userName = "";
   this.password = "";

 }


 onPressCallback = () => {
   let formData = new FormData();
   formData.append("loginName",this.userName);
   formData.append("pwd",this.password);
   let url = "http://localhost:8080/loginApp";
   // NetUitl.postJson(url,formData,(responseText) => {
   //       alert(responseText);
   //       this.onLoginSuccess();
   // })
   if(this.userName!='youbiai'){
     Toast.show({
       text: "Wrong password!",
       buttonText: "Okay"
     })
   }else if(this.password!='sarp**'){
     Toast.show({
       text: "Wrong password!",
       buttonText: "Okay"
     })

   }else{
     this.props.navigation.navigate("Main")

   }

 };
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Floating Label</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item  floatingLabel  >
              <Label>Username</Label>
              <Input
              onPress={()=>{

                this.setState({untext:'Useless Multiline Placeholder'})}}
              onChangeText={(text) => {this.userName = text;  }}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text) => {
            this.password = text;
        }} secureTextEntry />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}
                  onPress={() =>this.onPressCallback() }

          >
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
