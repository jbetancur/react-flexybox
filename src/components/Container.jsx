import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fluid } from '../utils/media';

const ContainerStyle = styled.div`
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

const Container = props => (
  <ContainerStyle
    fluid={props.fluid}
    className={props.className}
    style={props.style}
  >
    {props.children}
  </ContainerStyle>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

Container.defaultProps = {
  fluid: false,
  className: '',
  style: {},
};

export default Container;
