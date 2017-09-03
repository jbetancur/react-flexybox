import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media, genWidth } from '../utils/media';

const ColStyle = styled.div`
  box-sizing: border-box;
  margin: ${props => props.gutter}px;
  max-height: 100%;
  order: ${props => props.order};
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
    flex={props.flex}
    xs={props.xs}
    sm={props.sm}
    md={props.md}
    lg={props.lg}
    gutter={props.gutter}
    columnDivisions={props.columnDivisions}
    order={props.order}
    minWidth={props.minWidth}
    className={props.className}
    style={props.style}
    debug={props.debug}
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
  ]).isRequired,

  /**
   * inherited from `Row`
   */
  gutter: PropTypes.number.isRequired,

  /**
   * inherited from `Row`
   */
  columnDivisions: PropTypes.number.isRequired,

  /**
   * inherited from `Row`
   */
  debug: PropTypes.bool.isRequired,

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
  order: 0,
  minWidth: false,
  className: '',
  style: {},
  flex: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
};

export default Col;
