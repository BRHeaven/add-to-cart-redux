import React from 'react'
import {connect} from 'react-redux';
function Card(props) {
    let {id,name,price,src} = props.object;
    const truncateString = (string, num) => {
        if (string.length > num) {
            return string.slice( 0, num ) + "...";
        } else {
            return string;
        }
    }
  return (
    <div className='card'>
        <div className="cardImage">
            <img src={src} alt={id} />
        </div>
        <div className='cardInfo'>
            <h3>{truncateString(name,23)}</h3>
            <p>{price.toLocaleString()} VNĐ</p>
        </div>
        <div className='cardButton'>
            <button type="button" className="detailCard" data-bs-toggle="modal" data-bs-target="#detail" onClick={() => {props.modalCard(props.object)}}>detail</button>
            <button type="submit" className='addToCartCard' onClick={() => {props.addToCart(props.object)}}>add to cart</button>
        </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (product) => {
            let infoProduct = {
              id : product.id,
              name : product.name,
              price : product.price,
              quantity : 1,
              src : product.src
            }
            let action = {
              type : "addToCart",
              infoProduct
            }
            dispatch(action);
        },
        modalCard : (product) => {
            let infoModalCard = {};
            if (product.id < 200) {
                infoModalCard = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    chip: product.chip,
                    ram: product.ram,
                    sim: product.sim,
                    pin: product.pin,
                    cameraBefore: product.cameraBefore,
                    cameraAfter: product.cameraAfter,
                    src: product.src
                };
            } else if (product.id < 300) {
                infoModalCard = {
                    id : product.id,
                    name : product.name,
                    price : product.price,
                    cpu : product.cpu,
                    memory : product.memory,
                    operatingSystem : product.operatingSystem,
                    techScreen : product.techScreen,
                    screenResolution : product.screenResolution,
                    faceSize: product.faceSize,
                    pin : product.pin,
                    src : product.src
                };
            } else if (product.id < 400) {
                infoModalCard = {
                    id : product.id,
                    name : product.name,
                    price : product.price,
                    cpu : product.cpu,
                    gpu : product.gpu,
                    ram : product.ram,
                    techScreen : product.techScreen,
                    screenResolution : product.screenResolution,
                    operatingSystem : product.operatingSystem,
                    storageCapacity : product.storageCapacity,
                    src : product.src
                };
            } else if (product.id < 500) {
                infoModalCard = {
                    id : product.id,
                    name : product.name,
                    price : product.price,
                    cpu : product.cpu,
                    ram : product.ram,
                    techScreen : product.techScreen,
                    scanFrequency : product.scanFrequency,
                    screenResolution : product.screenResolution,
                    hardDrive : product.hardDrive,
                    src : product.src
                };
            } else {
                infoModalCard = product;
            }
            let action = {
                type : "setModalCard",
                infoModalCard
            }
            dispatch(action);
        }
    }
}
export default connect(null,mapDispatchToProps)(Card);