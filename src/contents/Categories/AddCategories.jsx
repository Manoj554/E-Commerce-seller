
import React from 'react'
import {FaCloudUploadAlt} from 'react-icons/fa'
import styles from './addcategories.module.css';

const Addcategories = () => {
  return (
    <>
        <div className={styles.maindiv}>
            <div className={styles.tablediv}>
                <div className={styles.heading}>
                    <h1>Add your Categories</h1>
                </div>
                <div className={styles.tablecontainer}>
                <table>
                    <tr>
                        <th>Category Name :</th>
                        <td className={styles.inptxt}><input type="text" placeholder="eg. Men Round Neck T-shirt"/></td>
                        <th>Parent Category :</th>
                        <td className={styles.inptxt}>
                            <select name="category" >
                                <option >
                                    Choose Category
                                </option>
                                <option >
                                    Electronics
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Upload Product Image :</th>
                        <td className={styles.inpfile}>
                            <label htmlFor="file-upload" className={styles.customfileupload}>
                                <span><FaCloudUploadAlt/></span> Image upload
                            </label>
                            <input id="file-upload" type="file"/>
                        </td>
                    </tr>
                </table>
                </div>
                <div className={styles.submitbtn}> 
                    <button className={styles.submit}>Submit</button>
                    <button className={styles.cancel}>Cancel</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Addcategories
