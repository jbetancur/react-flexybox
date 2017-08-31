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
`;

const Row = (props) => {
  const renderChildren = () => {
    const { gutter, columnDivisions, minColWidths, children } = props;

    return React.Children.map(children, (child) => {
      if (child.type === Col) {
        return React.cloneElement(child, {
          gutter,
          columnDivisions,
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
    >
      {renderChildren(props)}
    </RowStyle>
  );
};

Row.propTypes = {
  gutter: PropTypes.number,
  columnDivisions: PropTypes.number,
  minColWidths: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  className: PropTypes.string,
  style: PropTypes.object,
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),
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
};

export default Row;
