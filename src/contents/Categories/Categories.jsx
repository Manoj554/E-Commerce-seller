import React, { useState } from 'react';
import Input from '../../components/InputField/Input';
import Modal from '../../components/Modals/Modal';
import styles from './categories.module.css';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCategory } from '../../redux/actions';

const Categories = () => {
    const initialFormData = { categoryName: '', parentId: '', categoryImage: '' };
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(addNewCategory(formData, setOpenModal, setFormData, initialFormData));
    }

    return (
        <>
            <button onClick={() => setOpenModal(true)}>Open</button>
            <Modal open={openModal} setOpen={setOpenModal} >
                <div className={styles.formbox}>
                    <h2 className={styles.title}>Add a New Category</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Input
                            label="Category Name"
                            name="categoryName"
                            type="text"
                            placeholder="Enter a category name"
                            value={formData.categoryName}
                            onChange={(e) => setFormData({ ...formData, categoryName: e.target.value })}
                        />
                        <div className={styles.selectbox}>
                            <label htmlFor="parentId">Parent Category</label>
                            <select value={formData.parentId} onChange={(e) => setFormData({ ...formData, parentId: e.target.value })} name="parentId">
                                <option value={10}>Ten</option>
                                <option value={20}>Tensdsd</option>
                                <option value={30}>Tensdfsdfsd</option>
                            </select>
                        </div>
                        <div className={styles.media}>
                            <label htmlFor="categoryImage">Category Image</label>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setFormData({ ...formData, categoryImage: base64 })}
                            />
                        </div>
                        <div className={styles.actionButtons}>
                            <div>
                                <button className={styles.modalBtn}>Submit</button>
                                <button type='button' onClick={() => setOpenModal(false)} className={`${styles.modalBtn} ${styles.cancelBtn}`} >Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>

            </Modal>
        </>
    )
}

export default Categories