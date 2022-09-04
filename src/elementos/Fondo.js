import React from 'react';
import styled from 'styled-components';
import {ReactComponent as gridd} from '../img/grid.svg';

const GridArriba = styled(gridd)`
    position: fixed;
    width: 200rem;
    height: 200rem;
    z-index: 1;
    top: -1000px; /* 40px */
    left: -10px; /* 40px */
`;

function Fondo() {
    return ( 
        <>
            <GridArriba />
        </>
     );
}

export default Fondo;