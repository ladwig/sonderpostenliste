import { Component } from 'react'
import Link from 'next/link'
import firebase from '../components/firebase'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
       items: []
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
          number: items[item].number
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


  render () {
    return (
      <div>
        <h1>Sonderpostenliste</h1>
        <section className='display-item'>
          <div className="wrapper">
            <ul>
              {this.state.items.map((item) => {
                return (
                  <li key={item.id}>
                    <h3>{item.product}</h3>
                    <div>
                      <div>{item.state}{item.price}</div><div>{item.productid}</div>
                        <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default Index
