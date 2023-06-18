import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const Dados = () => {

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        }
    })
    axios.post('https://flickr.photos.search',{
        name: form.name.value
         
    }).then(() =>{
        console.log('ok')
    })
}