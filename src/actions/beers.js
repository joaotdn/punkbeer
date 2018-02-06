import * as ActionsTypes from '../constants/actions-types'
import * as config from '../constants/config'
import axios from 'axios'

const receiveBeers = beers => ({
    type: ActionsTypes.RECEIVE_BEERS,
    beers
})

export const getAllBeers = () => dispatch => {
    axios.get(config.API_BASE_URL + 'beers')
    //axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res => {
            if (res.status === 200)
                dispatch(receiveBeers(res.data))
            else
                throw new Error('Server error!')
        })
        .catch(error => {
            console.log('Error: ', error)
        })
}