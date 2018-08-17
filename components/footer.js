import { Component } from 'react'
import Link from 'next/link'
import firebase from '../config/firebase'
import Head from 'next/head'
import Login from '../components/login'
import { Button, List, Container, Label, Icon, Input, Header, Image, Segment} from 'semantic-ui-react'

class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user:{}
     }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({user: null })
      }
    })
  }

  logout = (e) => {
    firebase.auth().signOut()
    console.log("ausgeloggt")
  }

  render () {
    return (
      <Container>
      <Head>
        <title>Sonderpostenliste Comacs </title>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
      </Head>
      <Segment>
        {!this.state.user && <Login/> }
        {this.state.user &&  <Button animated onClick={this.logout}>
          <Button.Content visible>Logout</Button.Content>
          <Button.Content hidden>
          <Icon name="log out" />
          </Button.Content>
          </Button>
        }
        {this.state.user && <Link prefetch href="/addproduct"><Button animated>
        <Button.Content visible>Artikel hinzufügen</Button.Content>
        <Button.Content hidden>
        <Icon name="plus" />
        </Button.Content>
        </Button></Link>
        }
      </Segment>
      </Container>
    )
  }
}

export default Footer
