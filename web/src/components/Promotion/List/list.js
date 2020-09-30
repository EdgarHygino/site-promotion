import React from 'react';
import PromotionCard from '../Card/Card';
import PromotionSearch from '../Search/Search';
import './list.css';

const PromotionList = ({ loanding, promotions }) => {
    if (loanding) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='promotion-list'>
            { promotions.map((promotion) => (
            <PromotionCard promotion={promotion} />
            ))}
        </div>
    );
}

export default PromotionList;