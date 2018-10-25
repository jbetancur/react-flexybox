import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createComponent } from '../utils/styled';
import { fluid as fluidMedia } from '../utils/media';

const agnosticComponent = createComponent({
  propsToOmit: [
    'wrap',
    'component',
    'fluid',
  ],
});

const ContainerStyle = styled(agnosticComponent)`
  margin-right: auto;
  margin-left: auto;
  ${props => props.fluid && 'width: 100%;'};
  ${props => !props.fluid && fluidMedia.xs`
    width: 100%;
  `};
  ${props => !props.fluid && fluidMedia.greaterXS`
    max-width: 34rem;
  `};
  ${props => !props.fluid && fluidMedia.greaterSM`
    max-width: 45rem;
  `};
  ${props => !props.fluid && fluidMedia.greaterMD`
    max-width: 60rem;
  `};
  ${props => !props.fluid && fluidMedia.greaterLG`
    max-width: 72.25rem;
  `};
`;

const Container = ({
  fluid,
  className,
  style,
  component,
  children,
  ...rest,
}) => (
  <ContainerStyle
    fluid={fluid}
    className={className}
    style={style}
    component={component}
    {...rest}
  >
    {children}
  </ContainerStyle>
);

Container.propTypes = {
  /**
   * react/html elements
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

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
  children: [],
  fluid: false,
  className: '',
  style: {},
  component: 'div',
};

export default Container;
