import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Form.css';



const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: '',

};

const PromotionForm = () => {
    const [values, setValues] = useState( initialValue );
    const history = useHistory();

    function onChange(ev) {
        const { name, value}  = ev.target;

        setValues({...values, [name]: value});
    }  

    function onSubmit(ev) {
        ev.preventDefault();

        axios.post('http://localhost:5000/promotions', values)
        .then((Response) =>{
            history.push('/')

        });

    }

    return (
        <div>
            <h1>Canal de descontos</h1>
            <h2>Nova Promoção</h2>

            <form onSubmit={onSubmit}>
                <div className="promotion-form__group">
                    <label htmlfor="title" >Titulo</label>
                    <input id="title" name='title' type="text" onChange={onChange} />
                </div>
                <div className="promotion-form__group">
                    <label htmlfor="url" >Link</label>
                    <input id="url" name='url' type="text" onChange={onChange} />
                </div>
                <div className="promotion-form__group">
                    <label htmlfor="imageUrl" >Image (URL)</label>
                    <input id="imageUrl" name='imageUrl' type="text" onChange={onChange} />
                </div>
                <div className="promotion-form__group">
                    <label htmlfor="price" >Preço</label>
                    <input id="price" name='price' type="text" onChange={onChange} />
                </div>
                <div class="promotion-form__salvar">
                    <button type="submit" >Salvar</button>
                </div>
            </form>
        </div>
    )
};

export default PromotionForm;