import { Component } from 'react'
import Link from 'next/link'
import firebase from '../components/firebase'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
       type: '',
       product: '',
       productid: '',
       price: '',
       state: '',
       number: ''
     }
  this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
}

handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}

  render () {
    return (
      <div>
        <h1>Sonderpostenliste</h1>
        <Link href="/addproduct">
          <a>Artikel hinzufügen</a>
        </Link>

        <form>
        <select name="type" onChange={this.handleChange} value={this.state.type}>
          <option value="iphone">iPhone</option>
          <option value="ipad">iPad</option>
          <option value="mac">Mac</option>
          <option value="watch">Watch</option>
          <option value="accessories">Zubehör</option>
        </select>
        <input type="text" name="name" placeholder="Produktname" onChange={this.handleChange} value={this.state.name} />
        <input type="text" name="price" placeholder="Preis" onChange={this.handleChange} value={this.state.price} />
        <input type="text" name="productid" placeholder="ID" onChange={this.handleChange} value={this.state.productid} />
        <select name="state" onChange={this.handleChange} value={this.state.state}>
          <option value="new">Neu</option>
          <option value="used">Rückläufer</option>
          <option value="demo">Demogerät</option>
        </select>
        <input type="text" name="number" placeholder="Anzahl" onChange={this.handleChange} value={this.state.number} />
       <input type="submit"/>
       <ul>
       </ul>
     </form>
      </div>
    )
  }

}

export default Index
