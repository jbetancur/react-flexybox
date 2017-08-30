/* global describe, it, before */

import chai from 'chai';
import { Col } from '../../dist/react-flexybox.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of Col', () => {
  before(() => {
    lib = new Col();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Col');
    });
  });
});

