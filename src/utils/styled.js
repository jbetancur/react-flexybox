import React from 'react';
import omit from 'lodash.omit';

/**
 * createComponent
 * @param {String} component
 * @param {Array} propsToOmit
 */
export const createComponent = ({ component = 'div', propsToOmit = [] } = {}) => (
  // eslint-disable-next-line react/prop-types
  { children, ...otherProps }
) => {
  const props = omit(otherProps, propsToOmit);
  const tag = otherProps.component || component;

  return React.createElement(tag, props, children);
};
