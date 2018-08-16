import { Component } from 'react'
import Link from 'next/link'
import firebase from '../components/firebase'
import Head from 'next/head'
import { Button, List, Container, Label, Icon, Input, Header, Image, Segment } from 'semantic-ui-react'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
       items: [],
       showbutton: 'block',
       whichtype: 'all'
     }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items')
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val()
      let newState = []
      for (let item in items) {
        newState.push({
          id: item,
          type: items[item].type,
          product: items[item].product,
          productid: items[item].productid,
          price: items[item].price,
          state: items[item].state,
          number: items[item].number,
          notnewinfo: items[item].notnewinfo
        })
      }
      this.setState({
        items: newState
      })
    })
  }

  removeItem(itemId) {
  const itemRef = firebase.database().ref(`/items/${itemId}`);
  itemRef.remove();
  }

  confirmRemoveItem(itemId) {

  }

  itemState(state) {
    switch(state) {
      case "new":
        return "Neu/Neuwertig"
      case "used":
        return "Rückläufer"
      case "demo":
        return "Demogerät"
    }
  }

  itemSold(itemid) {
    if (confirm("Ist das Produkt wirklich verkauft?")) {
      this.removeItem(itemid)
    }
  }

  handleChange = (e) => {
    this.setState({
      whichtype: e.target.value
    })
  }


  render () {
    return (
      <Container>
      <Head>
        <title>Sonderpostenliste Comacs </title>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
      </Head>
        <main>
        <Header as="h1">
          <Image size="massive" spaced src="https://www.comacs.de/fileadmin/user_upload/comacs/01_Logos/comacs-logo.png" />
          Sonderpostenliste
          <Header.Subheader>Geräte zu besonderen Preisen in neuwertigem oder gebrauchtem Zustand</Header.Subheader>
        </Header>
            <Segment attached>
            <select name="whichtype" onChange={this.handleChange}>
              <option value="all">Alle</option>
              <option value="iphone">iPhone</option>
              <option value="ipad">iPad</option>
              <option value="mac">Mac</option>
              <option value="watch">Watch</option>
              <option value="accessories">Zubehör</option>
            </select>
            <Container>
              <List divided verticalAlign="middle" size="large" relaxed="very">
                { this.state.items.map((item) => {
                      if (item.type !== this.state.whichtype && this.state.whichtype !=='all') {
                        return null;
                      }
                  return (
                    <List.Item>
                      <List.Content floated="right">
                        <Button as='div' labelPosition='left'>
                          <Input labelPosition='right' className="numberinput" value={item.number} />
                          <Button icon onClick={ () => this.itemSold(item.id)}>
                            {item.price}
                            <Icon name='euro' />
                          </Button>
                        </Button>
                      </List.Content>
                      <List.Content>
                        <List.Header>{item.product}</List.Header>
                        <List.Description>{this.itemState(item.state)}{ item.notnewinfo}</List.Description>
                      </List.Content>
                    </List.Item>
                  )
                })}
              </List>
            </Container>
            </Segment>
        </main>
        <style jsx global>{`
          .numberinput {
            width: 3em;
          }
       `}</style>
       <Link href="addproduct"><a>Artikel hinzufügen</a></Link>
      </Container>
    )
  }
}

export default Index
