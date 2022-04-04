import React from 'react'
import styles from './styles/recombar.module.css';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const Recombar = () => {
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
						<li className={styles.searchbox}>
							<button><FaSearch /></button>
							<input type="search" placeholder="Search Products and brands" name="search" />
						</li>
						<li >
							<select name="sortby">
								<option>Sort By: Recomemded</option>
								<option className={styles.option}>Category - 1</option>
								<option>Category - 2</option>
								<option>Category - 3</option>
								<option>Category - 4</option>
								<option>Category - 5</option>
							</select>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Recombar