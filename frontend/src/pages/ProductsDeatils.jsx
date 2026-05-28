import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

const ProductDetail = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        fetchProduct();

    }, []);

    const fetchProduct = async () => {

        try {

            const response = await API.get(`/products/${id}`);

            setProduct(response.data);

        } catch (error) {

            console.log(error);
        }
    }

    if(!product) {
        return <h1>Loading...</h1>
    }

    return (
        <div>

            <h1>{product.name}</h1>

            <p>{product.description}</p>

            <h2>₹ {product.price}</h2>

        </div>
    )
}

export default ProductDetail;