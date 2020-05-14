import React from 'react'

import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIn,inverted,...otherProps}) => (
    <button className={`${inverted? 'inverted':''}${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps} type='submit'>
        {children}
    </button>
)


export default CustomButton;
