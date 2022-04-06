import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Addcategories from '../../contents/Categories/AddCategories';
import convertToBase64 from '../../helper/convertToBase64';
import { editCategoryAction, getCategoryInfoAction } from '../../redux/actions';


const EditCategory = () => {
    const initialFormData = { categoryName: '', parentId: '', categoryImage: '', id: '' };
    const [fileName, setFileName] = useState('');
    const [formData, setFormData] = useState(initialFormData);
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const router = useRouter();

    useEffect(() => {
        let { id } = router.query;
        dispatch(getCategoryInfoAction(id));
        const { _id, name, parentId, } = category.categoryInfo;
        setFormData({ ...formData, categoryName: name, parentId: parentId, id: _id });
    }, [router.query]);

    const handleFileUpload = async (e) => {
        let file = e.target.files[0];
        let fileInfo = await convertToBase64(file);
        setFormData({ ...formData, categoryImage: fileInfo.base64 });
        setFileName(fileInfo.name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        dispatch(editCategoryAction(formData));
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