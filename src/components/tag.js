import React from 'react';
import styled from 'styled-components';
import StyledIcon from './styledIcon'

const StyledText = styled.span`
    vertical-align: middle;
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
    margin: 0.3rem 0.3rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
`;

export default StyledTag;