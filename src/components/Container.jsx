import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createComponent } from '../utils/styled';
import { fluid } from '../utils/media';

const agnosticComponent = createComponent({
  propsToOmit: [
    'wrap',
    'component',
  ]
});

const ContainerStyle = styled(agnosticComponent)`
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
    component={props.component}
    {...props}
  >
    {props.children}
  </ContainerStyle>
);

Container.propTypes = {
  /**
   * react/html elements
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,

  /**
   * The component to render the `Container` as.
   */
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /**
   * full width or controlled width layout
   */
  fluid: PropTypes.bool,

  /**
   * override the `className` on the root element of Row
   */
  className: PropTypes.string,

  /**
   * overide the `style` on the root element of Row
   */
  style: PropTypes.object,
};

Container.defaultProps = {
  fluid: false,
  className: '',
  style: {},
  component: 'div',
};

export default Container;
