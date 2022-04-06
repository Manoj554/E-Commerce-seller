import React from 'react';
import Products from '../contents/Products/Products';
import Card from '../components/Card/Card';
import Categories from '../contents/Categories/Categories';
import Addcategories from '../contents/Categories/Addcategories';
import Addproducts from '../contents/Products/Addproducts';
import Productdesc from '../contents/Products/Productdesc';


const test = () => {
    const [file, setFile] = useState('');
    return (
        <div>

            <Productdesc />
            <Categories />
            <Addproducts />
            <Addcategories />
        </div >

    )
}

export default test