import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const verticalAlignment = 'vertical-align: middle;'

const StyledIcon = styled(Icon)`
    ${verticalAlignment}
`;

const StyledText = styled.span`
    ${verticalAlignment}
    display: inline-block;
    margin-left: 0.5rem;
`

const Tag = ({ className, name, logo }) => (
    <figcaption className={className}>
        <StyledIcon icon={logo} width="3rem" height="3rem" />
        <StyledText>{name}</StyledText>
    </figcaption>
);


const StyledTag = styled(Tag)`
    border-radius: 5rem;
    color: #fff;
    background-color: ${props => (props.bgColor ? props.bgColor : '#000')};
    width: fit-content;
    padding: 0.5rem 0.9rem;
    font-size: 1.3rem;
`;

export default StyledTag;