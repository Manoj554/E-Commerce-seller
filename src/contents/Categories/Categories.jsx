import React from 'react';
import styles from './categories.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';
import { Skeleton } from '@mui/material';

const Categories = () => {
    const category = useSelector(state => state.category);

    return (
        <>
            <div className={styles.categoriesdiv}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h1>Your Categories</h1>
                    </div>
                    <div className={styles.buttondiv}>
                        <Link href="/categories/add-new-category">
                            <button>Add Category</button>
                        </Link>
                    </div>
                    <div className={styles.tablediv}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Category</th>
                                    <th>Parent Category</th>
                                    <th>Status</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                                {category.loading ?
                                    <tr>
                                        <td colSpan={6}>
                                            <Skeleton height={40} />
                                            <Skeleton />
                                            <Skeleton height={150} />
                                            <Skeleton /><Skeleton />
                                            <Skeleton height={80} />
                                            <Skeleton /><Skeleton />
                                            <Skeleton /><Skeleton />

                                        </td>
                                    </tr>
                                    : (
                                        category.categories.length > 0 ? (
                                            category.categories.map((val, index) =>
                                                <TableRow
                                                    id={val.id}
                                                    did={index + 1}
                                                    name={val.name}
                                                    parentName={val.parentName}
                                                    status={val.status}
                                                    key={val.id}
                                                />
                                            )
                                        ) : (
                                            <tr>
                                                <td colSpan={6}>No data Found</td>
                                            </tr>
                                        )
                                    )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;