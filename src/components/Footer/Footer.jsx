import React from 'react';
import style from './styles/footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.left}>
                        <div className={style.logo}>
                            <img src="/logo.png" alt="Logo" />
                            <span className={style.title}>CartAny</span>
                        </div>
                        <p className={style.text}>Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div className={style.right}>
                        Box-2
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer