import { Component } from 'react'
import Link from 'next/link'
import firebase from '../components/firebase'
import styles from '../components/css'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
       items: [],
       showbutton: 'block'
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


  render () {
    return (
      <div>
        <main>
          <Link href="addproduct"><a>Artikel hinzufügen</a></Link>
          <h1>Sonderpostenliste</h1>
            <section className="wrapper">
              <select name="whichOne">
                <option value="all">Alle</option>
                <option value="iphone">iPhone</option>
                <option value="ipad">iPad</option>
                <option value="mac">Mac</option>
                <option value="watch">Watch</option>
                <option value="accessories">Zubehör</option>
              </select>
              <ul>
                { this.state.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <h3>{item.product}</h3>
                      <div className="itemtInfo">
                        <div className="itemDescription">{this.itemState(item.state)}{item.price + "€"}</div><div className="itemId">{item.productid}</div>
                          <div ClassName="removeItemButton">Entfernen</div>
                          <div ClassName="confirmRemoveButton" onClick={() => this.removeItem(item.id)} style={{ display: this.state.showbutton }}>Bestätigen</div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>
        </main>
        <style jsx global>{styles}</style>
      </div>
    )
  }
}

export default Index
