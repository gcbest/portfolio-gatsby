import React from 'react';

const Tag = ({name, logo}) => (
    <figcaption><img src={logo} alt={name}/> {name}</figcaption>
);