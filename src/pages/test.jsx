import React from 'react';
import Products from '../contents/Products/Products';
import Card from '../components/Card/Card';
import Categories from '../contents/Categories/Categories';
import Addcategories from '../contents/Categories/Addcategories';
import Addproducts from '../contents/Products/Addproducts';

const test = () => {
    const [file, setFile] = useState('');
    return (
        <div>
<<<<<<< HEAD
    <FileBase64
        multiple={false}
        onDone={(base) => setFile(base)}
    />
    { console.log(file) }
=======
           <Addproducts/>
            <Addcategories/>
>>>>>>> 2d03b14db0908f52e34681024586d81e56efd2ec
        </div >

    )
}

export default test