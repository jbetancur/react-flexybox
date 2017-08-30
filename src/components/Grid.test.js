/* global describe, it, before */

import chai from 'chai';
import { Grid } from '../../dist/react-flexybox.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of Grid', () => {
  before(() => {
    lib = new Grid();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Grid');
    });
  });
});

