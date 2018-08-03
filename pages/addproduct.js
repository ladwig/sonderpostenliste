import { Component } from 'react'
import Link from 'next/link'
import firebase from '../components/firebase'
import styles from '../components/css'


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
       items: []
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
          number: items[item].number
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
    });
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
      number: this.state.number
    }
    itemsRef.push(item)
    this.setState({
      product: '',
      type: 'iPhone',
      productid: '',
      price: '',
      state: 'new',
      number: '1'
    });
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
        <input type="text" name="product" placeholder="Produktname" onChange={this.handleChange} />
        <input type="number" name="price" placeholder="Preis" onChange={this.handleChange}  />
        <input type="number" name="productid" placeholder="ID" onChange={this.handleChange}  />
        <select name="state" onChange={this.handleChange} >
          <option value="new">Neu</option>
          <option value="used">Rückläufer</option>
          <option value="demo">Demogerät</option>
        </select>
        <input type="text" name="number" placeholder="Anzahl" onChange={this.handleChange} />
       <button>Hinzufügen</button>
     </form>
     <style jsx global>{styles}</style>
    </div>
    )
  }
}

export default AddProduct
