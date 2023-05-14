import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
class Product extends Component {
    renderCardProduct = (data) => {
        return data.map(( object, index ) => {
            return <Card object={object} key={index}/>
        })
    }
    renderQuantity = () => {
      return this.props.cart.reduce((quantity,product,index) => {
        return quantity += product.quantity;
      },0)
    }
    phone = this.renderCardProduct(this.props.data.phone);
    smartWatch = this.renderCardProduct(this.props.data.smartWatch);
    tablet = this.renderCardProduct(this.props.data.tablet);
    laptop = this.renderCardProduct(this.props.data.laptop);
  render() {
    return (
      <section>
        <div className="sectionCart">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addToCart">cart  ({this.renderQuantity()})<i className="fa fa-shopping-cart"></i></button>
        </div>
        <div id='tabs'>
          <ul className="nav nav-pills" id="listNavProductTabs" role="tablist">
            <li className="tabsItem" role="presentation">
              <button className="nav-link active" id="arrayPhoneTab"
               data-bs-toggle="pill" data-bs-target="#arrayPhone"
               type="button" role="tab" aria-controls="arrayPhone" aria-selected="true">phone</button>
            </li>
            <li className="tabsItem" role="presentation">
              <button className="nav-link" id="arraySmartWatchTab"
                data-bs-toggle="pill" data-bs-target="#arraySmartWatch" 
                type="button" role="tab" aria-controls="arraySmartWatch" aria-selected="false">smart watch</button>
            </li>
            <li className="tabsItem" role="presentation">
              <button className="nav-link" id="arrayTabletTab"
                data-bs-toggle="pill" data-bs-target="#arrayTablet" 
                type="button" role="tab" aria-controls="arrayTablet" aria-selected="false">tablet</button>
            </li>
            <li className="tabsItem" role="presentation">
              <button className="nav-link" id="arrayLaptopTab"
               data-bs-toggle="pill" data-bs-target="#arrayLaptop"
               type="button" role="tab" aria-controls="arrayLaptop" aria-selected="false">laptop</button>
            </li>
          </ul>
          <div className="tab-content" id="listProductTabs">
            <div className="tab-pane fade show active" id="arrayPhone" role="tabpanel" aria-labelledby="arrayPhoneTab">
              <div className='tabContent'>{this.phone}</div>
            </div>
            <div className="tab-pane fade" id="arraySmartWatch" role="tabpanel" aria-labelledby="arraySmartWatchTab">
              <div className='tabContent'>{this.smartWatch}</div>
            </div>
            <div className="tab-pane fade" id="arrayTablet" role="tabpanel" aria-labelledby="arrayTabletTab">
              <div className='tabContent'>{this.tablet}</div>
            </div>
            <div className="tab-pane fade" id="arrayLaptop" role="tabpanel" aria-labelledby="arrayLaptopTab">
              <div className='tabContent'>{this.laptop}</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
const mapStateToProps = state => {
  return {
    data : state.stateData,
    cart : state.stateCart.cart
  }
}
export default connect(mapStateToProps)(Product);