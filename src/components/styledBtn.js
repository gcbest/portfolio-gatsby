import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    border-radius: 1rem;
    border: 0.5rem solid #fff;
    background-color: ${props => (props.bgColor ? props.bgColor : '#303844')};
    color: #fff;
    padding: 0.75rem;
`;

export default StyledBtn;