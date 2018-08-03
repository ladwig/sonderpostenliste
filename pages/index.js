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

  itemState(state) {
    switch(state) {
      case "new":
        return <div className="itemState">Neu/Neuwertig</div>
      case "used":
        return <div className="itemState">Rückläufer</div>
      case "demo":
        return <div className="itemstate">Demoartikel</div>
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
                        <div className="itemDescription">{this.itemState(item.state)}{item.price + "€"}</div><div className="itemtId">{item.productid}</div>
                          <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>
        </main>
        <style jsx global>{`
          body {
            width: 100%;
            height: 100%;
            background: rgb(240, 240, 240);
            z-index: -999;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          }

          main {
            margin: auto;
            margin-left: 3vh;
          }

          itemInfo {

          }

          itemDescription {

          }

          itemState {

          }

          itemId {

          }

        `}
        </style>
      </div>
    )
  }
}

export default Index
