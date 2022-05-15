import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Addcategories from '../../contents/Categories/AddCategories';
import convertToBase64 from '../../helper/convertToBase64';
import { editCategoryAction } from '../../redux/actions';


const EditCategory = (props) => {
    const initialFormData = { categoryName: '', parentId: '', categoryImage: '', id: '' };
    const [fileName, setFileName] = useState('');
    const [formData, setFormData] = useState(initialFormData);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (props.categoryInfo) {
            const { _id, name, parentId, } = props.categoryInfo;
            setFormData({ ...formData, categoryName: name, parentId: parentId, id: _id });
        }
    }, []);

    const handleFileUpload = async (e) => {
        let file = e.target.files[0];
        let fileInfo = await convertToBase64(file);
        setFormData({ ...formData, categoryImage: fileInfo.base64 });
        setFileName(fileInfo.name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editCategoryAction(formData, router));
    }

    return (
        <div>
            <Addcategories
                fileName={fileName}
                setFormData={setFormData}
                formData={formData}
                handleFileUpload={handleFileUpload}
                handleSubmit={handleSubmit}
                title="Edit"
            />
        </div>
    )
}

export default EditCategory;

export async function getServerSideProps(context) {
    const id = context.query.id;
    const baseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL : process.env.NEXT_PUBLIC_LOCAL_BASE_URL;

    try {
        const { data } = await axios.get(`${baseUrl}/category/get-category-info/${id}`);
        return {
            props: {
                categoryInfo: data.categoryInfo
            },
        }
    } catch (error) {
        console.log(error);
    }
    return {
        props: {
            categoryInfo: null
        },
    }
}