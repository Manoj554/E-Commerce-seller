import React from 'react'
import styles from './categories.module.css'
import { RiDeleteBin6Fill } from "react-icons/ri";
import {RiEdit2Fill} from "react-icons/ri"

const Categories = () => {
  return (
    <>
        <div className={styles.categoriesdiv}>
            <div className={styles.container}>
            <div className={styles.buttondiv}>
                <button>Add Category</button>
            </div>
            <div className={styles.tablediv}>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Parent Category</th>
                        <th>Section</th>
                        <th>Status</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    <tr>
                        <td id={styles.id}>1</td>
                        <td>T-Shirts</td>
                        <td>Shirts</td>
                        <td>Men</td>
                        <td id={styles.active}>Active</td>
                        <td id={styles.delete}><RiDeleteBin6Fill/></td>
                        <td id={styles.edit}><RiEdit2Fill/></td>
                    </tr>
                    <tr>
                        <td id={styles.id}>2</td>
                        <td>T-Shirts</td>
                        <td>Shirts</td>
                        <td>Men</td>
                        <td id={styles.inactive}>Inactive</td>
                        <td id={styles.delete}><RiDeleteBin6Fill/></td>
                        <td id={styles.edit}><RiEdit2Fill/></td>
                    </tr>
                    <tr>
                        <td id={styles.id}>1</td>
                        <td>T-Shirts</td>
                        <td>Shirts</td>
                        <td>Men</td>
                        <td id={styles.active}>Active</td>
                        <td id={styles.delete}><RiDeleteBin6Fill/></td>
                        <td id={styles.edit}><RiEdit2Fill/></td>
                    </tr>
                    <tr>
                        <td id={styles.id}>1</td>
                        <td>T-Shirts</td>
                        <td>Shirts</td>
                        <td>Men</td>
                        <td id={styles.active}>Active</td>
                        <td id={styles.delete}><RiDeleteBin6Fill/></td>
                        <td id={styles.edit}><RiEdit2Fill/></td>
                    </tr>

                    
                </table>
            </div>
            </div>
            
        </div>
    </>
  )
}

export default Categories