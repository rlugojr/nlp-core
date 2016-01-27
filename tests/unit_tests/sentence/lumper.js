'use strict';
let mocha = require('mocha');
let should = require('should');
let nlp = require('../../../src/index.js');

describe('lumper test', function() {

  it('fancy lumps', function(done) {
    let tests = [
      ['John Baseball', ['Person']],
      ['John sr.', ['Person']],
      ['Dr. John', ['Person']],
      ['she said "dutch oven"', ['Person', 'PastTense', 'Noun']],
      ['she said "huge dutch oven"', ['Person', 'PastTense', 'Noun']],
      ['the Captain of Jamaica', ['Determiner', 'Noun']],
      ['joe will have walked', ['Person', 'PluperfectTense']],
      ['joe had walked', ['Person', 'PastTense']],
      ['joe had 5 books', ['Person', 'PastTense', 'Value']],
    ];
    tests.forEach(function(a) {
      let n = nlp.text(a[0]);
      let tags = n.tags()[0];
      (a[1]).should.deepEqual(tags);
    });

    done();
  });


});
