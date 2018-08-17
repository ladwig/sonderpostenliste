import { Component } from 'react'
import Link from 'next/link'
import firebase from '../config/firebase'
import Head from 'next/head'
import { Button, Container, Label, Icon, Form, Input } from 'semantic-ui-react'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:''
     }
     this.handleChange = this.handleChange.bind(this)
     this.login = this.login.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login(e) {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
        console.log(error)
      })
  }

  render () {
    return (
      <Container>
      <Head>
        <title>Sonderpostenliste Comacs </title>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
      </Head>
      <Form onSubmit={this.login}>
        <Form.Group>
          <Form.Input label="E-Mail" placeholder="max@comacs.de" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          <Form.Input label="Passwort" placeholder="Passwort" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <Button animated type="submit">
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
            <Icon name="sign in" />
            </Button.Content>
            </Button>
        </Form.Group>
      </Form>
      </Container>
    )
  }
}

export default Login
