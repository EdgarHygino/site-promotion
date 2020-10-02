import React from 'react';
import PromotionCard from '../Card/Card';
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