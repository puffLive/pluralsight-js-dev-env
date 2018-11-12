import {expect} from 'chai';

const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const uri = './src/index.html';
var h1 = '';

const options = {
  runScripts: 'dangerously',
  resources: "usable"
};

JSDOM.fromFile(uri, options).then((dom) => {
  h1 = dom.window.document.getElementsByTagName('h1')[0].innerHTML;
});

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Should say Hello', () => {
    it('should pass', () => {
      expect(h1).to.equal('Hello World!');
    });
});
