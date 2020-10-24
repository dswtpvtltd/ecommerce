import React from 'react';
import './Directory.scss';

import Image1 from './../../assets/category/3_1.png';
import Image2 from './../../assets/category/3.png';


const Directory = props => {
    return (<div className="directory">
        <div className="wrap">
            <div className="item"
                style={{
                    backgroundImage: `url(${Image1})`
                }}
            >
                <a href="/">Shop for Women</a>
            </div>
            <div className="item"
                style={{
                    backgroundImage: `url(${Image2})`
                }}
            >
                <a href="/">Shop for Men</a>
            </div>
        </div>
    </div>);
};

export default Directory;