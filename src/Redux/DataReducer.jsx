import data from '../Data/data.json';
const stateDataProducts = {
    phone : data.phone,
    smartWatch : data.smartWatch,
    tablet : data.tablet,
    laptop : data.laptop,
}
const dataReducer = ( state = stateDataProducts, action ) => {
    return {...state};
}
export default dataReducer;