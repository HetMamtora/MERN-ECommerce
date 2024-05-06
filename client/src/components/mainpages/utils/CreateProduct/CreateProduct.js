import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    const [productData, setProductData] = useState({
        product_id: '',
        title: '',
        price: '',
        description: '',
        content: '',
        category: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/products', productData);
            // Redirect to the product list page after successful creation
            navigate('/');
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="product_id">Product ID:</label>
                    <input type="text" id="product_id" name="product_id" value={productData.product_id} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={productData.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={productData.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={productData.description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content" value={productData.content} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={productData.category} onChange={handleChange} />
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
