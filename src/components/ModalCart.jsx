import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { connect } from 'react-redux';
function ModalCart(props) {
    const renderCart = () => {
      return props.stateCart.cart.map( (object, index) => {
          return (
              <tr className="cardCart" key={index}>
                <td>
                  <p>{object.id}</p>
                </td>
                <td>
                  <img src={object.src} alt={index} />
                </td>
                <td>
                  <p>{object.name}</p>
                </td>
                <td>
                  <p>{object.price.toLocaleString()}</p>
                </td>
                <td>
                  <div className="quantity">
                    <button className="reduceQuantity" onClick={()=>{props.quantityChange(false,object.id)}}>-</button>
                    <p>{object.quantity}</p>
                    <button className="addQuantity" onClick={()=>{props.quantityChange(true,object.id)}}>+</button>
                  </div>
                </td>
                <td>
                  <p>{(object.price * object.quantity).toLocaleString()}</p>
                </td>
                <td>
                  <button onClick={() => {props.removeItemInCart(object.id)}}>xoá</button>
                </td>
              </tr>
          );
      });
    };
    const totalPrice = () => {
        let total = 0; 
        let array = props.stateCart.cart;
        for ( let i = 0; i < array.length; i++ ) {
          total += (array[i].price * array[i].quantity);
        }
        return total.toLocaleString();
    };
    return (
        <section>
          <div className="modal fade" id="addToCart"
            data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
            aria-labelledby="modalTitleAddToCart" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitleAddToCart">Giỏ Hàng</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div className="modal-body">
                  <table className="modalCart">
                    <thead>
                      <tr className="title">
                        <th>
                          <p>code</p>
                        </th>
                        <th>
                          <p>name</p>
                        </th>
                        <th>
                          <p>image</p>
                        </th>
                        <th>
                          <p>price</p>
                        </th>
                        <th>
                          <p>quantity</p>
                        </th>
                        <th>
                          <p>total price</p>
                        </th>
                        <th>
                          <p></p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderCart()}
                    </tbody>
                    <tfoot>
                      <tr className='totalPriceCart'>
                        <th colSpan={5}></th>
                        <th>{totalPrice()}</th>
                        <th></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">payment</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};
const mapStateToProps = state => {
  return {
    stateCart : state.stateCart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItemInCart : (id) => {
      let action = {
        type :"removeItem",
        id
      }
      dispatch(action);
    },
    quantityChange : (flag, id) => {
      let action = {};
      action = {
        type : "quantityChange",
        id,
        flag
      };
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(ModalCart);