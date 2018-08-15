import { Component } from 'react'
import Link from 'next/link'
import firebase from '../components/firebase'


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
console.log(this.state.whichtype)
    return (
      <div>
        <main>
        <h1>Sonderpostenliste</h1>
          <Link href="addproduct"><a>Artikel hinzufügen</a></Link>
            <section className="wrapper">
            <select name="whichtype" onChange={this.handleChange}>
              <option value="all">Alle</option>
              <option value="iphone">iPhone</option>
              <option value="ipad">iPad</option>
              <option value="mac">Mac</option>
              <option value="watch">Watch</option>
              <option value="accessories">Zubehör</option>
            </select>

              <ul>
                {

                
                  this.state.items.map((item) => {
                    if (this.state.whichtype === 'all') {
                      return (
                        <li key={item.id}>
                          <h3>{item.product}</h3>
                          <div className="itemtInfo">
                            <div className="itemDescription">{this.itemState(item.state)}{ item.notnewinfo + '  ' + item.price + "€"}</div><div className="itemId">{item.productid}</div>
                              <div className="removeItemButton" onClick={ () => this.itemSold(item.id)}>Verkaufen</div>
                          </div>
                        </li>
                      )
                    }

                    if (item.type !== this.state.whichtype) {
                      return null;
                    }

                  return (
                    <li key={item.id}>
                      <h3>{item.product}</h3>
                      <div className="itemtInfo">
                        <div className="itemDescription">{this.itemState(item.state)}{ item.notnewinfo + '  ' + item.price + "€"}</div><div className="itemId">{item.productid}</div>
                          <div className="removeItemButton" onClick={ () => this.itemSold(item.id)}>Verkaufen</div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>
        </main>

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

export default Index
