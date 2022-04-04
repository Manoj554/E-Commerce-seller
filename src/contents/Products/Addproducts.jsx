import React from 'react'
import {FaCloudUploadAlt} from 'react-icons/fa'
import styles from './addproducts.module.css';

const Addproducts = () => {
  return (
    <>
        <div className={styles.maindiv}>
            <div className={styles.tablediv}>
                <div className={styles.heading}>
                    <h1>Add your products</h1>
                </div>
                <div className={styles.tablecontainer}>
                <table>
                    <tr>
                        <th>Product Name :</th>
                        <td className={styles.inptxt}><input type="text" placeholder="eg. Men Round Neck T-shirt" required/></td>
                        <th>Category :</th>
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
                        <th>Retail price (INR)  :</th>
                        <td className={styles.inptxt}><input type="text" placeholder="Rupees" /></td>
                        <th>Offered price (INR)  :</th>
                        <td className={styles.inptxt}><input type="text" placeholder="Rupees"/></td>
                    </tr>
                    <tr>
                        <th>Quantity  :</th>
                        <td className={styles.inptxt}><input type="number"  min="0" /></td>
                        <th>Upload Product Image :</th>
                        <td className={styles.inpfile}>
                            <label htmlFor="file-upload" className={styles.customfileupload}>
                                <span><FaCloudUploadAlt/></span> Image upload
                            </label>
                            <input id="file-upload" type="file"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Description  :</th>
                        <td className={styles.inptxt}><textarea name="description"  ></textarea></td>
                        
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

export default Addproducts