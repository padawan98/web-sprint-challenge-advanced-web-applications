import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {axiosWithAuth} from '../helpers/axiosWithAuth'


const PrivateRoute = () => {

    const {push} = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .get('/colors')
        .then(res => {
            push('/bubble-page')
        })
        .catch(err => {
            console.log(err)
            push('/')
        })
    }, [])

    return(
        <div>
            <h1>Redirecting User...</h1>
        </div>
    )
}

export default PrivateRoute;








//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in