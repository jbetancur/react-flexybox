import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../utils/media';

const ColStyle = styled.div`
  box-sizing: border-box;
  margin: ${props => props.gutter}px;
  max-height: 100%;
  order: ${props => props.order};

  ${props => props.flex && media.flex`
    --width: ${`calc(${(props.flex / 12) * 100}% - ${props.gutter * 2}px)`};
    flex: 0 1 var(--width);
    min-width: var(--width);
  `}

  // if flex is just true then set to stretch
  ${props => !Number.isInteger(props.flex) && props.flex && 'flex: 1'};

  ${props => props.xs && media.xs`
    --width: ${`calc(${(props.xs / 12) * 100}% - ${props.gutter * 2}px)`};
    flex: 0 1 var(--width);
    min-width: var(--width);
  `}

  ${props => props.sm && media.sm`
    --width: ${`calc(${(props.sm / 12) * 100}% - ${props.gutter * 2}px)`};
    flex: 0 1 var(--width);
    min-width: var(--width);
  `}

  ${props => props.md && media.md`
    --width: ${`calc(${(props.md / 12) * 100}% - ${props.gutter * 2}px)`};
    flex: 0 1 var(--width);
    min-width: var(--width);
  `}

  ${props => props.lg && media.lg`
    --width: ${`calc(${(props.lg / 12) * 100}% - ${props.gutter * 2}px)`};
    flex: 0 1 var(--width);
    min-width: var(--width);
  `}
`;

const Col = props => (
  <ColStyle
    flex={props.flex}
    xs={props.xs}
    sm={props.sm}
    md={props.md}
    lg={props.lg}
    gutter={props.gutter}
    order={props.order}
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
  order: PropTypes.number,
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

Col.defaultProps = {
  order: 0,
  flex: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
};

export default Col;
