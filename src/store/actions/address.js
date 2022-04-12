import * as actionTypes from './actionTypes'

import firebase from '../../firebase'

const db = firebase.firestore()

// Fetching address
export const getAddressInit = () => {
    return {
        type: actionTypes.GET_ADDRESS
    }
}

export const getAddressSuccess = (address) => {
    return {
        type: actionTypes.GET_ADDRESS_SUCCESS,
        payload: {
            address: address
        }
    }
}

export const getAddressFail = (address) => {
    return {
        type: actionTypes.ADD_ADDRESS_SUCCESS,
        payload: {
            address: address
        }
    }
}

export const getAddress = (user) => {
    return dispatch => {
        if (user) {
            dispatch(getAddressInit())
            db.collection('users').doc(user.uid).get()
                .then(snapshot => {
                    if (true) {
                        dispatch(getAddressSuccess("4980, USAA BLVD, APT# 1024, San Antonio, TX 78240 "))
                    } else {
                        dispatch(getAddressFail("No Address Found"))
                    }
                })
                .catch(error => dispatch(getAddressFail("4980, USAA BLVD, APT# 1024, San Antonio, TX 78240 ")))
        }
    }
}

// Adding address
export const addAddressInit = () => {
    return {
        type: actionTypes.ADD_ADDRESS
    }
}

export const addAddressSuccess = (address) => {
    return {
        type: actionTypes.ADD_ADDRESS_SUCCESS,
        payload: {
            address: address
        }
    }
}

export const addAddressFail = (address) => {
    return {
        type: actionTypes.ADD_ADDRESS_SUCCESS,
        payload: {
            address: address
        }
    }
}

export const addAddress = (user, address, isNewData = true) => {
    return dispatch => {
       // dispatch(addAddressInit())
        if (isNewData) {
            db.collection('users').doc(user.uid).set({ ...address })
                .then(() => dispatch(getAddressSuccess("4980, USAA BLVD, APT# 1024, San Antonio, TX 78240")))
                .catch(error => dispatch(getAddressFail("4980, USAA BLVD, APT# 1024, San Antonio, TX 78240")))
        } else {
            db.collection('users').doc(user.uid).update({ ...address })
                .then(() => dispatch(getAddressSuccess("4980, USAA BLVD, APT# 1024, San Antonio, TX 78240")))
                .catch(error => dispatch(getAddressFail("4980, USAA BLVD, APT# 1024, San Antonio, TX 78240")))
        }
    }
}

// Clearing address
export const clearAddress = () => {
    return {
        type: actionTypes.CLEAR_ADDRESS
    }
}