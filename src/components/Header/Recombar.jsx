import React from 'react'
import styles from './styles/recombar.module.css'

const Recombar = () => {
  return (
    <>
        <div className={styles.recombardiv}>
			<div className={styles.adddiv}>
				<button>+ Add products</button>
			</div>
			<div className={styles.searchdiv}>
				<ul>
					<li>
						<input type="search" placeholder="Search Products, brands and more..." name="search"/>
					</li>
					<li >
						<select  name="sortby">
							<option>Sort by</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
    </>
  )
}

export default Recombar