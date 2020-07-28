import React from 'react';
import { Icon } from '@iconify/react';

const Tag = ({name, logo}) => (
    <figcaption><Icon icon={logo} /> {name}</figcaption>
);

export default Tag;