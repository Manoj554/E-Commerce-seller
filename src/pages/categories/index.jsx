import React, { useState } from 'react';
import PrivatePage from '../../layout/PrivatePage';
import Categories from '../../contents/Categories/Categories';

const category = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <PrivatePage>
            <Categories />
        </PrivatePage>
    )
}

export default category;