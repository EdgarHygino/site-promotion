import React, {useState, useEffect} from 'react';
import PromotionList from '../List/list';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Search.css';


const PromotionSearch = () => {
    const [promotions, setPromotions] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const params = {};
        if (search) {
            params.title_like = search;
        }
        axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id', { params })
            .then((response) => {
                setPromotions(response.data)
        });
    }, [search]);
    return (
        <div className='promotion-search'>
            <header className='promotion-search__header'>
                <h1>Canal de Descontos</h1>
                <Link className='promotion-search__nova-promocao' to='/create'>Nova Promomoção</Link>    
            </header>
                <input 
                    type='search' 
                    className='promotion-search__input' 
                    placeholder="Buscar" 
                    value={search}
                    onChange={(ev) => setSearch(ev.target.value)}
                    />
            <PromotionList promotions={promotions} loanding={!promotions.length} />
        </div>
    );
};

export default PromotionSearch;