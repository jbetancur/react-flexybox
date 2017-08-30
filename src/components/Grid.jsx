import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fluid } from '../utils/media';

const GridStyle = styled.div`
  margin-right: auto;
  margin-left: auto;
  ${props => props.fluid && 'width: 100%;'};

  ${props => !props.fluid && fluid.xs`
    width: 100%;
  `}

  ${props => !props.fluid && fluid.greaterXS`
    max-width: 34rem;
  `}

  ${props => !props.fluid && fluid.greaterSM`
    max-width: 45rem;
  `}

  ${props => !props.fluid && fluid.greaterMD`
    max-width: 60rem;
  `}

  ${props => !props.fluid && fluid.greaterLG`
    max-width: 72.25rem;
  `}
};
`;

const Grid = props => (
  <GridStyle fluid={props.fluid}>
    {props.children}
  </GridStyle>
);

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  fluid: PropTypes.bool,
};

Grid.defaultProps = {
  fluid: true,
};

export default Grid;
