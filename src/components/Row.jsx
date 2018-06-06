import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createComponent } from '../utils/styled';
import Col from './Col';

const agnosticComponent = createComponent({
  propsToOmit: [
    'wrap',
    'direction',
    'justifyContent',
    'alignContent',
    'alignItems',
    'minColWidths',
    'debug',
    'height',
    'padding',
    'paddingTop',
    'paddingLeft',
    'paddingBottom',
    'paddingRight',
    'center',
    'fill',
    'component',
    'gutter',
    'columnDivisions',
  ]
});

const RowStyle = styled(agnosticComponent)`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => (props.center ? 'center' : props.justifyContent)};
  align-items: ${props => (props.center ? 'center' : props.alignItems)};
  align-content: ${props => props.alignContent};
  ${props => props.debug && 'border: 1px solid red'};
  ${props => props.paddingTop && `padding-top: ${props.paddingTop}`};
  ${props => props.paddingLeft && `padding-left: ${props.paddingLeft}`};
  ${props => props.paddingBottom && `padding-bottom: ${props.paddingBottom}`};
  ${props => props.paddingRight && `padding-right: ${props.paddingRight}`};
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.height && `height: ${props.height}`};
  ${props => props.fill && 'height: 100%'};
`;

const Row = (props) => {
  const renderChildren = () => {
    const { gutter, columnDivisions, debug, minColWidths, children } = props;

    return React.Children.map(children, (child) => {
      if (child && child.type === Col) {
        return React.cloneElement(child, {
          gutter,
          columnDivisions,
          debug,
          minWidth: minColWidths,
        });
      }

      return child;
    });
  };

  return (
    <RowStyle
      wrap={props.wrap}
      direction={props.direction}
      justifyContent={props.justifyContent}
      alignContent={props.alignContent}
      alignItems={props.alignItems}
      minColWidths={props.minColWidths}
      className={props.className}
      style={props.style}
      debug={props.debug}
      height={props.height}
      padding={props.padding}
      paddingTop={props.paddingTop}
      paddingLeft={props.paddingLeft}
      paddingBottom={props.paddingBottom}
      paddingRight={props.paddingRight}
      center={props.center}
      fill={props.fill}
      component={props.component}
      {...props}
    >
      {renderChildren(props)}
    </RowStyle>
  );
};

Row.propTypes = {
  /**
   * children
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

  /**
   * sets the margins for flex items
   */
  gutter: PropTypes.number,

  /**
   * controls the size of each flex division. 1/12 divisions yeilds ~8% section of screen size.
   * 1/24 would yield ~4%
   */
  columnDivisions: PropTypes.number,

  /**
   * sets the min-width for all `Col` flex items. This also forces wrapping when the screen size is adjusted
   * and the flex item reaches its min-width
   */
  minColWidths: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /**
   * overide the `className` on the root element of Row
   */
  className: PropTypes.string,

  /**
   * override the `style` on the root element of Row
   */
  style: PropTypes.object,

  /**
   * set the wrapping type
   */
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * The component to render the `Row` as
   */
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /**
   * set the `Row` direction
   */
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /**
   * jusify `Col` items on the min x axis (hotizontally)
   */
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),

  /**
   * aligns the whole structure according to its value and has no effect when items are in a single line
   */
  alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),

  /**
   * aligns the items inside a flex container along the y axis just like justifyContent does along the x axis
   */
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', 'baseline']),

  /**
   * enables bounding boxes for `Row` and `Col` to help debug layout issues
   */
  debug: PropTypes.bool,

  /**
   * set the height of the `Row`
   */
  height: PropTypes.string,

  /**
   * set the padding of the `Row`
   */
  padding: PropTypes.string,

  /**
   * set the padding-top of the `Row`
   */
  paddingTop: PropTypes.string,

  /**
   * set the padding-left of the `Row`
   */
  paddingLeft: PropTypes.string,

  /**
   * set the padding-bottom of the `Row`
   */
  paddingBottom: PropTypes.string,

  /**
   * set the padding-right of the `Row`
   */
  paddingRight: PropTypes.string,

  /**
   * shortcut to center the `Col` items within a `Row`
   */
  center: PropTypes.bool,

  /**
   * shortcut to fill the `Row` to `height: 100%`
   */
  fill: PropTypes.bool,
};

Row.defaultProps = {
  children: [],
  gutter: 0,
  columnDivisions: 12,
  minColWidths: false,
  className: '',
  style: {},
  wrap: 'wrap',
  component: 'div',
  direction: 'row',
  justifyContent: 'flex-start',
  alignContent: 'stretch',
  alignItems: 'stretch',
  debug: false,
  height: '',
  padding: '',
  paddingTop: '',
  paddingLeft: '',
  paddingBottom: '',
  paddingRight: '',
  center: false,
  fill: false,
};

export default Row;
