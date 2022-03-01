import React from 'react';
import { useParams } from "react-router-dom";

const ProductItem = () => {
    let params = useParams();

    return (
        <div>ProductItem {params.productItemId}</div>
    )
}

export default ProductItem