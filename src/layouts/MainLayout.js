import React from 'react';

import Aux from '../hoc/Aux';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = (props) => {
    return (
        <Aux>
            <Header {...props} />
            <div className="main">
                {props.children}
            </div>
            <Footer />
        </Aux>
    );
};

export default MainLayout;