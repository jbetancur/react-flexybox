import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createComponent } from '../utils/styled';
import { media, genWidth } from '../utils/media';

const agnosticComponent = createComponent({
  propsToOmit: [
    'alignSelf',
    'flex',
    'xs',
    'sm',
    'md',
    'lg',
    'gutter',
    'columnDivisions',
    'order',
    'minWidth',
    'debug',
    'component',
  ]
});

const ColStyle = styled(agnosticComponent)`
  box-sizing: border-box;
  margin: ${props => props.gutter}px;
  max-height: 100%;
  order: ${props => props.order};
  align-self: ${props => props.alignSelf};
  ${props => props.debug && 'border: 1px solid green'};

  ${props => props.flex && media.flex`
    --width: ${genWidth(props.flex, props.columnDivisions, props.gutter)};
    flex: 0 1 var(--width);
    min-width: var(--width);
  `}

  // if flex is just true then set flex to auto
  ${props => !Number.isInteger(props.flex) && props.flex && 'flex: 1'};

  ${props => Number.isInteger(props.xs) && media.xs`
    --width: ${genWidth(props.xs, props.columnDivisions, props.gutter)};
    flex: 0 1 var(--width);
    min-width: var(--width);
  `}

  ${props => Number.isInteger(props.sm) && media.sm`
    --width: ${genWidth(props.sm, props.columnDivisions, props.gutter)};
    flex: 0 1 var(--width);
    min-width: var(--width);
  `}

  ${props => Number.isInteger(props.md) && media.md`
    --width: ${genWidth(props.md, props.columnDivisions, props.gutter)};
    flex: 0 1 var(--width);
    min-width: var(--width);
  `}

  ${props => Number.isInteger(props.lg) && media.lg`
    --width: ${genWidth(props.lg, props.columnDivisions, props.gutter)};
    flex: 0 1 var(--width);
    min-width: var(--width);
  `}

  // Allows min-width to be overridden
  ${props => props.minWidth && `min-width: ${props.minWidth}px`};
`;

const Col = props => (
  <ColStyle
    alignSelf={props.alignSelf}
    flex={props.flex}
    xs={props.xs}
    sm={props.sm}
    md={props.md}
    lg={props.lg}
    gutter={props.gutter}
    columnDivisions={props.columnDivisions}
    order={props.order}
    className={props.className}
    style={props.style}
    minWidth={props.minWidth}
    debug={props.debug}
    component={props.component}
    {...props}
  >
    {props.children}
  </ColStyle>
);


Col.propTypes = {
  /**
   * react/html elements
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

  /**
   * aligns the whole structure according to its value and has no effect when items are in a single line
   */
  alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),

  /**
   * inherited from `Row`
   */
  gutter: PropTypes.number.isRequired,

  /**
   * inherited from `Row`
   */
  columnDivisions: PropTypes.number.isRequired,

  /**
   * The component to render the `Col` as
   */
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /**
   * inherited from `Row`
   */
  debug: PropTypes.bool,

  /**
   * allows overriding the `Col` item order
   */
  order: PropTypes.number,

  /**
   * sets the min-width on a `Col` item - this overrides `Row` `minColWidths` for a specific `Col`
   */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /**
   * overide the `className` on the root element of Row
   */
  className: PropTypes.string,

  /**
   * override the `style` on the root element of Row
   */
  style: PropTypes.object,

  /**
   * sets the default flex-basis and min-width percentage of the flex-item
   */
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /**
   * sets the default flex-basis and min-width percentage of the flex-item when the screen size is 0-599-px
   */
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /**
   * sets the default flex-basis and min-width percentage of the flex-item when the screen size is 600-959px
   */
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /**
   * sets the default flex-basis and min-width percentage of the flex-item when the screen size is 960-1280px
   */
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /**
   * sets the default flex-basis and min-width percentage of the flex-item when the screen size is 1280px or greater
   */
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

Col.defaultProps = {
  alignSelf: 'auto',
  children: [],
  order: 0,
  minWidth: false,
  className: '',
  style: {},
  component: 'div',
  flex: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  gutter: 0,
  columnDivisions: 12,
  debug: false,
};

export default Col;
