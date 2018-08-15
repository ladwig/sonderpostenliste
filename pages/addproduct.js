import { Component } from 'react'
import Link from 'next/link'
import firebase from '../components/firebase'


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
       notNewInput: 'none'
     }
  this.handleChange = this.handleChange.bind(this);
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
  }

  notNewInput = (e) => {
    let value = e.target.options[e.target.selectedIndex].value
    if (value == "used" || "demo") {
      this.setState({
        notNewInput: 'block'
      })
    }
    if (value == "new") {
      this.setState({
        notNewInput: 'none'
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
      type: 'iPhone',
      productid: '',
      price: '',
      state: 'new',
      number: '1',
      notnewinfo: ''
    })
  }

  render () {
    return (
      <div>
        <Link href="index"><a>Zurück</a></Link>
        <h1>Artikel Hinzufügen</h1>
        <form onSubmit={this.handleSubmit}>
        <select name="type" onChange={this.handleChange}>
          <option value="iphone">iPhone</option>
          <option value="ipad">iPad</option>
          <option value="mac">Mac</option>
          <option value="watch">Watch</option>
          <option value="accessories">Zubehör</option>
        </select>
        <input type="text" name="product" placeholder="Produktname" required onChange={this.handleChange} />
        <input type="number" name="price" placeholder="Preis" required onChange={this.handleChange}  />
        <input type="number" name="productid" placeholder="ID" required onChange={this.handleChange}  />
        <select name="state" required onChange={this.handleChange, this.notNewInput} >
          <option value="new">Neu</option>
          <option value="used">Rückläufer</option>
          <option value="demo">Demogerät</option>
        </select>
        <input  style={{ display: this.state.notNewInput  }} type="text" name="notnewinfo" placeholder="AppleCare, Garantie" onChange={this.handleChange} />
        <input type="text" name="number" placeholder="Anzahl" required onChange={this.handleChange} />
       <button>Hinzufügen</button>
     </form>

     <style jsx global>{`
       @import url('https://fonts.googleapis.com/css?family=Roboto');
       body {
         font-family: 'Roboto', sans-serif;
       }
    `}</style>

    </div>
    )
  }
}

export default AddProduct
