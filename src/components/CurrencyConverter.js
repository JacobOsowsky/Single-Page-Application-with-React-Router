import React, {Component} from 'react';
import Item from '../components/Item'

class CurrencyConverter extends Component {
    state = {
        amount: "",
        select: "electricity"
      }
      
      static defaultProps = {
        currencies : [
          {
            id: 1,
            name: "zloty",
            ratio: 1,
            title: "wartość w złotych:"
          },
          {
            id: 2,
            name: "euro",
            ratio: 3.9,
            title: "wartość w euro:"
          },
          {
            id: 3,
            name: "dollar",
            ratio: 3,
            title: "wartość w dolarach:"
          },
          {
            id: 4,
            name: "pound",
            ratio: 3.6,
            title: "wartość w funtach:"
          }
        ],
        prices: {
          gas: 0.5,
          electricity: 1.52,
          oranges: 3.79
    
        }
      }
      
    
    handleChange = (e) => {
      this.setState({
        select: e.target.value,
        amount: ""
      })
    }
    
    handleInputChange = (e) => {
      this.setState({
        amount: e.target.value
      })
    }
    
    handleSuffix = () => {
      if(this.state.select==="electricity") return <em>kWh</em>
      else if(this.state.select==="gas") return <em>litrów</em>
      else if(this.state.select==="oranges") return <em>kilogramów</em>
      else return null
    }
    
    selectPrice=(select) => {
      const price = this.props.prices[select]
      return price
    }
    
      render() {
        const currenciesPrices = this.props.currencies.map(item=>
          <Item
          key={item.id}
          title={item.title}
          ratio={item.ratio}
          cash={this.state.amount}
          price={this.selectPrice(this.state.select)}
          />)
        return (
          <>
          <label>Wybierz produkt</label>
          <select onChange={this.handleChange}>
            <option value="electricity">prąd</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarańcze</option>
          </select>
          <br></br>
          <input 
          type="number"
          value={this.state.amount}
          onChange ={this.handleInputChange}
          >
          </input>
          {this.handleSuffix()}
            {currenciesPrices}
          </>
        )
      }
}
 
export default CurrencyConverter;