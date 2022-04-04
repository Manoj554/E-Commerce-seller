import React from 'react'
import styles from './styles/recombar.module.css';
import { GoSearch } from 'react-icons/go';

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
						<li >
							<div className={styles.searchbox}>
								<button ><GoSearch /></button>
								<input type="search" placeholder="Search for products and brands" name="search" />
							</div>
						</li>
						<li >
							<select name="sortby">
								<option>Sort By: Recommemded</option>
								<option>Category - 1</option>
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