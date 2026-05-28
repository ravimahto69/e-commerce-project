import { useEffect, useState } from "react";
import API from "../api/axios";
import ProductCard from "../components/ProductCard";

const Products = () => {

    const [ products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const response = await API.get("/products");

            setProducts(Array.isArray(response.data) ? response.data : []);

        } catch (error) {

            console.log(error);
        }
    }

    return (
        <div>

            <h1>Products</h1>

            <div style={{
                display:"flex",
                gap:"20px",
                flexWrap:"wrap"
            }}>

                {products.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </div>
    )
}

export default Products;