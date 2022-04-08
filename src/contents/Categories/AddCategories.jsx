import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import styles from './addcategories.module.css';
import Loader from '../../components/Loader/Loader';
import Link from 'next/link';

const Option = ({ id, name }) => (
    <option key={id} value={id}>{name}</option>
);

const Addcategories = ({ fileName, setFormData, formData, handleFileUpload, handleSubmit, title }) => {
    const category = useSelector(state => state.category);
    return (
        <>
            {category.loading && <Loader />}
            <div className={styles.maindiv}>
                <div className={styles.tablediv}>
                    <div className={styles.heading}>
                        <h1>{title} your Category</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.tablecontainer}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Category Name :</th>
                                        <td className={styles.inptxt}>
                                            <input
                                                type="text"
                                                name='categoryName'
                                                placeholder="eg: MobilePhones, Laptop"
                                                value={formData.categoryName}
                                                onChange={(e) => setFormData({ ...formData, categoryName: e.target.value })}
                                            />
                                        </td>

                                        <th>Parent Category :</th>
                                        <td className={styles.inptxt}>
                                            <select name="parentId" value={formData.parentId} onChange={e => setFormData({ ...formData, parentId: e.target.value })}>
                                                <option value="">Choose One</option>
                                                {category.categories && category.categories.map((val) => (
                                                    <Option id={val.id} name={val.name} key={val.id} />
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Upload Category Image :</th>
                                        <td className={styles.inpfile}>
                                            <label htmlFor="file-upload" className={styles.customfileupload} title={fileName}>
                                                <span><FaCloudUploadAlt /></span> {fileName ? (fileName.slice(0, 10) + ' ...') : 'upload image'}
                                            </label>
                                            <input id="file-upload" type="file" onChange={handleFileUpload} multiple />
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className={styles.submitbtn}>
                            <button type='submit' className={styles.submit}>Submit</button>
                            <Link href="/categories">
                                <button type='button' className={styles.cancel}>Go to Categories</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addcategories;
