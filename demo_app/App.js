import React from "react";
import { StyleSheet, Button } from "react-native";
import {
  Header,
  Content,
  Container,
  Form,
  Item,
  Input,
  Label,
  Body,
  Title
} from "native-base";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  sendText = () => {
    fetch("http://192.168.0.115:3000/demo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        text: this.state.text
      })
    })
      .then(response => response.json())
      .then(data => alert(data.response));
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title> Demo </Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Texto</Label>
              <Input onChangeText={text => this.setState({ text: text })} />
            </Item>
          </Form>
          <Button title="Enviar" onPress={() => this.sendText()} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});
