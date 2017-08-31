import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media, genWidth } from '../utils/media';

const ColStyle = styled.div`
  box-sizing: border-box;
  margin: ${props => props.gutter}px;
  max-height: 100%;
  order: ${props => props.order};

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
  >
    {props.children}
  </ColStyle>
);


Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  gutter: PropTypes.number.isRequired,
  columnDivisions: PropTypes.number.isRequired,
  order: PropTypes.number,
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  className: PropTypes.string,
  style: PropTypes.object,
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
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
