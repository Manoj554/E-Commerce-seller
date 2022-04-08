import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Addproducts from '../../contents/Products/Addproducts';
import convertToBase64 from '../../helper/convertToBase64';
import { editProductAction } from '../../redux/actions';



const EditProduct = (props) => {
    const initialFormData = { productName: '', category: '', offeredPrice: '', retailPrice: '', quantity: '', description: '', productImage: '', id: '' };
    const [formData, setFormData] = useState(initialFormData);
    const [fileName, setFileName] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();


    useEffect(() => {
        if (props.productInfo) {
            const { _id, name, parentId, category, priceOffered, price, quantity, description, productImage } = props.productInfo;
            setFormData({
                ...formData,
                productName: name,
                category: category,
                offeredPrice: priceOffered,
                retailPrice: price,
                quantity: quantity,
                description: description,
                productImage: productImage,
                id: _id,
                parentId: parentId
            });
        }
    }, []);

    const handleFileUpload = async (e) => {
        let file = e.target.files[0];
        let fileInfo = await convertToBase64(file);
        setFormData({ ...formData, productImage: fileInfo.base64 });
        setFileName(fileInfo.name);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProductAction(formData, router));
    }

    return (
        <div>
            <Addproducts
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={formData}
                handleFiles={handleFileUpload}
                fileName={fileName}
                edit
            />
        </div>
    )
}

export default EditProduct;

export async function getServerSideProps(context) {
    const id = context.query.id;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    try {
        const { data } = await axios.get(`${baseUrl}/product/get-product-info/${id}`);
        return {
            props: {
                productInfo: data.productInfo
            },
        }
    } catch (error) {
        console.log(error);
    }
    return {
        props: {
            productInfo: null
        },
    }
}