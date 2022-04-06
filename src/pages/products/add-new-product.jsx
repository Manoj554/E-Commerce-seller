import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddProducts from '../../contents/Products/Addproducts';
import convertToBase64 from '../../helper/convertToBase64';
import { addNewProductAction } from '../../redux/actions';

const AddNewProducts = () => {
    const initialFormData = { productName: '', category: '', offeredPrice: '', retailPrice: '', quantity: '', description: '', productImage: '' };
    const [formData, setFormData] = useState(initialFormData);
    const [fileName, setFileName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFiles = async (e) => {
        let file = e.target.files[0];
        let fileInfo = await convertToBase64(file);
        setFormData({ ...formData, productImage: fileInfo.base64 });
        setFileName(fileInfo.name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewProductAction(formData, setFormData, initialFormData));
    }

    return (
        <div>
            <AddProducts
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={formData}
                handleFiles={handleFiles}
                fileName={fileName}
            />
        </div>
    )
}

export default AddNewProducts;