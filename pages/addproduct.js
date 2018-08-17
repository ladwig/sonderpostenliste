import { Component } from 'react'
import Link from 'next/link'
import firebase from '../config/firebase'
import Head from 'next/head'
import { Button, Container, Grid ,Header, Icon, Image, Item, Label, Menu,Segment,Step, Message, Form,} from 'semantic-ui-react'

class AddProduct extends Component {

  constructor(props) {
    super(props)
    this.state = {
       type: 'iphone',
       product: '',
       productid: '',
       price: '',
       state: 'new',
       number: '1',
       items: [],
       notnewinfo: '',
       notNewInput: 'true'
     }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
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


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    if(e.target.name == "state") {
      this.notNewInput(e)
    }
  }

  notNewInput = (e) => {
    let value = e.target.options[e.target.selectedIndex].value
    if (value == "used" || "demo") {
      this.setState({
        notNewInput: ''
      })
    }
    if (value == "new") {
      this.setState({
        notNewInput: 'true'
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items')
    const item = {
      product: this.state.product,
      type: this.state.type,
      productid: this.state.productid,
      price: this.state.price,
      state: this.state.state,
      number: this.state.number,
      notnewinfo: this.state.notnewinfo,
    }
    itemsRef.push(item)
    this.setState({
      product: '',
      type: 'iphone',
      productid: '',
      price: '',
      state: 'new',
      number: '1',
      notnewinfo: ''
    })
  }

  render () {

    return (
      <Container>
      <Head>
        <title>Sonderpostenliste Comacs | Artikel hinzufügen </title>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
      </Head>
      <Header as="h1">
        Artikel hinzufügen
        <Header.Subheader>Geräte zu besonderen Preisen in neuwertigem oder gebrauchtem Zustand</Header.Subheader>
      </Header>
        <Link href="index"><a>Zurück</a></Link>
        <Segment attached>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field label="Produktklasse" control="select" name="type" onChange={this.handleChange}>
            <option value="iphone">iPhone</option>
            <option value="ipad">iPad</option>
            <option value="mac">Mac</option>
            <option value="watch">Watch</option>
            <option value="accessories">Zubehör</option>
         </Form.Field>
         <Form.Input label="Produktname" type="text" name="product" placeholder="iPhone SE 32GB"  required onChange={this.handleChange}/>
         <Form.Input label="Preis" type="number" name="price" placeholder="345" icon="euro"  required onChange={this.handleChange}/>
         <Form.Group widths='equal'>
         <Form.Input fluid label="Proukt-ID" type="number" name="productid" placeholder="12" icon="hashtag"  required onChange={this.handleChange}/>
           <Form.Field fluid label="Zustand" control="select" name="state" required onChange={this.handleChange}>
            <option value="new">Neu</option>
            <option value="used">Rückläufer</option>
            <option value="demo">Demogerät</option>
          </Form.Field>
          <Form.Input fluid label="Garantieinformationen" disabled={this.state.notNewInput} required={!this.state.notNewInput} type="text" name="notnewinfo" placeholder="AppleCare, Garantie (wenn Gerät nicht neu)" onChange={this.handleChange}/>
         <Form.Input fluid label="Anzahl" type="number" name="number" placeholder="1" icon="tag"  required onChange={this.handleChange}/>
        </Form.Group>
        <Button fluid content="Hinzufügen" icon="plus" labelPosition="right" />
      </Form>
    </Segment>
    <style jsx global>{`
      .container {
        margin-top: 1em;
      }
   `}</style>
    </Container>
    )
  }
}

export default AddProduct
