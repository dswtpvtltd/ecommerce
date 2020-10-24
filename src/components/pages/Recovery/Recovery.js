import React from 'react';

import AuthWrapper from '../../AuthWrapper/AuthWrapper';
import EmailPassword from './../../EmailPassword/EmailPassword';

const Recovery = () => {

    const configAuthWrapper = {
        headline: 'Email Password'
    }

    return (<div className="recovery">
        <AuthWrapper {...configAuthWrapper}>
            <EmailPassword />
        </AuthWrapper>
    </div>);
}

export default Recovery;