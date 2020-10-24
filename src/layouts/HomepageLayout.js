import React from 'react';

import Aux from '../hoc/Aux';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const HomepageLayout = (props) => {
    return (
        <Aux>
            <Header {...props} />
            {props.children}
            <Footer />
        </Aux>
    );
};

export default HomepageLayout;