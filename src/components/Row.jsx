import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Col from './Col';

const RowStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justifyContent};
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItems};
  ${props => props.debug && 'border: 1px solid red'};
`;

const Row = (props) => {
  const renderChildren = () => {
    const { gutter, columnDivisions, debug, minColWidths, children } = props;

    return React.Children.map(children, (child) => {
      if (child.type === Col) {
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
    >
      {renderChildren(props)}
    </RowStyle>
  );
};

Row.propTypes = {
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
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),

  /**
   * enables bounding boxes for `Row` and `Col` to help debug layout issues
   */
  debug: PropTypes.bool,
};

Row.defaultProps = {
  gutter: 0,
  columnDivisions: 12,
  minColWidths: false,
  className: '',
  style: {},
  wrap: 'wrap',
  direction: 'row',
  justifyContent: 'flex-start',
  alignContent: 'stretch',
  alignItems: 'stretch',
  debug: false,
};

export default Row;
