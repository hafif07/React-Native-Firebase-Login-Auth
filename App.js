import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA7wS9h3FH4KriVNnv-_c1SQDvT0zamw5k",
  authDomain: "react-firebase-b5f5b.firebaseapp.com",
  databaseURL: "https://react-firebase-b5f5b.firebaseio.com",
  projectId: "react-firebase-b5f5b",
  storageBucket: "",

}

firebase.initializeApp(firebaseConfig)
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'


class App extends React.Component {
  state = {
    email: '',
    password: ''
  }

  signupUser = (email, password) => {
    try {
      if (this.state.password < 6) {
        alert('Password harus lebih dari 6')
        return
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (er) {
      console.log(er.toString())
    }
  }
  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then((user)=>console.log(user))
      .catch(er=>alert('pasword atau email salah'))
    }
    catch (er) {
      console.log(er.toString())
    }
  }
  render() {
    const { email, password } = this.state
    return (

      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ email: text })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ password: text })}
            />
          </Item>
          <Button style={{ marginTop: 30 }}
            full
            rounded
            success
            onPress={() => this.loginUser(email, password)}
          >
            <Text style={{ color: 'white', fontSize: 16 }}> Login </Text>
          </Button>
          <Button style={{ marginTop: 20 }}
            full
            rounded
            primary
            onPress={() => this.signupUser(email, password)}
          >
            <Text style={{ color: 'white', fontSize: 16 }}> Sign Up </Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
