import React, { useEffect, useRef } from 'react';
import { portfolio } from './Data';
import './Cover.scss';

const Cover = ({ on, setOn }) => {
    const cover = useRef(null)
    const wheelStop = e => {
        e.stopPropagation();
    }
    useEffect(() => {
        cover.current.addEventListener('wheel', wheelStop);
        return () => {
            cover.current.removeEventListener('wheel', wheelStop);
        }
    }, [])
    return (
        <div className={`Cover ${on ? "on" : ""}`} ref={cover}>
            <div className="container">
                <div className="window">
                    <ul className="dots">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className='xicon'></div>
                </div>
                <ul className='con'>
                    <li onClick={() => setOn(!on)}>
                        <a href={`#cover`}>HOME</a>
                    </li>
                    <ul className='folder'>
                        {
                            portfolio.map((it, idx) => {
                                return (
                                    <li key={idx} onClick={() => setOn(!on)}>
                                        <a href={`#${it.title}`}>
                                            <img src={process.env.PUBLIC_URL + "/img/folder0" + it.id + ".png"} alt="" />
                                            <p>{it.title}</p>
                                            <h2>{it.brand}</h2>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <li onClick={() => setOn(!on)}>
                        <a href={`#footer`}>ABOUT</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Cover