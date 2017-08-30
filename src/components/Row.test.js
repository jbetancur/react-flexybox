/* global describe, it, before */

import chai from 'chai';
import { Row } from '../../dist/react-flexybox.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of Row', () => {
  before(() => {
    lib = new Row();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Row');
    });
  });
});
