import React, { useEffect, useState } from 'react'
import styles from './styles/recombar.module.css';
import Link from 'next/link';
import { GoSearch } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductAction, searchFieldAction, searchProductByCategoryAction } from '../../redux/actions';

const Recombar = () => {
	const category = useSelector(state => state.category);
	const [searchField, setSearrchField] = useState('');
	const [searchByCategory, setSearchByCategory] = useState('');
	const dispatch = useDispatch();

	const handleSetCategory = (e) => {
		setSearchByCategory(e.target.value);
		if (e.target.value === 'all') {
			dispatch(getAllProductAction());
		} else {
			if (e.target.value !== '') {
				dispatch(searchProductByCategoryAction(e.target.value));
			}
		}
	}

	useEffect(() => {
		if (searchField.length >= 3) {
			dispatch(searchFieldAction(searchField));
		}
	}, [searchField]);
	return (
		<>
			<div className={styles.recombardiv}>
				<div className={styles.adddiv}>
					<Link href="/products/add-new-product">
						<button>+ Add products</button>
					</Link>
				</div>
				<div className={styles.searchdiv}>
					<ul>
						<li >
							<div className={styles.searchbox}>
								<button ><GoSearch /></button>
								<input type="search"
									placeholder="Search for products and brands"
									name="search"
									value={searchField}
									onChange={(e) => setSearrchField(e.target.value)}
								/>
							</div>
						</li>
						<li >
							<select value={searchByCategory} onChange={handleSetCategory} name="sortby">
								<option value={''}>Sort By: Category</option>
								<option value={'all'}>All</option>
								{category.categories.length > 0 && (
									category.categories.map((val) => {
										if (val.level > 2) {
											return <option key={val.id} value={val.id}>{val.name}</option>;
										}
									}
									))}
							</select>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Recombar