import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import styles from './addproducts.module.css';

const Addproducts = ({ handleSubmit, handleChange, formData, handleFiles, fileName }) => {
    const { categories } = useSelector(state => state.category);
    return (
        <>
            <div className={styles.maindiv}>
                <div className={styles.tablediv}>
                    <div className={styles.heading}>
                        <h1>Add your products</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.tablecontainer}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Product Name :</th>
                                        <td className={styles.inptxt}>
                                            <input
                                                type="text"
                                                placeholder="eg. Men Round Neck T-shirt"
                                                name='productName'
                                                required
                                                value={formData.productName}
                                                onChange={handleChange}
                                            />
                                        </td>
                                        <th>Category :</th>
                                        <td className={styles.inptxt}>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                            >
                                                <option >
                                                    Choose Category
                                                </option>
                                                {categories.length > 0 && categories.map((val) => {
                                                    return (
                                                        <option key={val.id} value={val.id}>{val.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Retail price (INR)  :</th>
                                        <td className={styles.inptxt}>
                                            <input
                                                type="text"
                                                placeholder="Rupees"
                                                name='retailPrice'
                                                value={formData.retailPrice}
                                                onChange={handleChange}
                                            />
                                        </td>
                                        <th>Offered price (INR)  :</th>
                                        <td className={styles.inptxt}>
                                            <input
                                                type="text"
                                                placeholder="Rupees"
                                                name='offeredPrice'
                                                value={formData.offeredPrice}
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Quantity  :</th>
                                        <td className={styles.inptxt}>
                                            <input
                                                type="number"
                                                min="0"
                                                name='quantity'
                                                value={formData.quantity}
                                                onChange={handleChange}
                                            />
                                        </td>
                                        <th>Upload Product Image :</th>
                                        <td className={styles.inpfile}>
                                            <label htmlFor="file-upload" className={styles.customfileupload}>
                                                <span><FaCloudUploadAlt /></span> {fileName ? (fileName.slice(0, 10) + ' ...') : 'Upload Image'}
                                            </label>
                                            <input
                                                id="file-upload"
                                                type="file"
                                                multiple
                                                onChange={handleFiles}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Description  :</th>
                                        <td className={styles.inptxt}>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                            />
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.submitbtn}>
                            <button type='submit' className={styles.submit}>Submit</button>
                            <button type='button' className={styles.cancel}>Cancel</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Addproducts