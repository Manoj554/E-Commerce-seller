import React from 'react';
import styles from './categories.module.css';
import { useDispatch } from 'react-redux';
import { deleteCategoryAction } from '../../redux/actions';
import Link from 'next/link';

const TableRow = ({ id, did, name, parentName, status }) => {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        dispatch(deleteCategoryAction(e.target.value));
    }

    return (
        <tr key={id}>
            <td className={styles.id}>{did}</td>
            <td>{name}</td>
            <td>{parentName}</td>
            <td className={styles.inactive}>{status}</td>
            <td className={styles.delete}>
                <button value={id} onClick={handleDelete}>
                    Delete
                </button>
            </td>
            <td className={styles.edit}>
                <Link as={`/categories/edit-category/${id}`} href={`/categories/edit-category?id=${id}`}>
                    <button>
                        Edit
                    </button>
                </Link>
            </td>
        </tr>
    );
}

export default TableRow;