import { expect } from 'chai';
import comment from '../src/comment';
import Vorpal from 'vorpal';
import { stdout } from 'test-console';

describe('vorpal-comment', function() {

  it('should be properly imported as a function', () => {
    expect(comment).to.be.instanceof(Function);
  });

  it('should be imported by Vorpal', () => {
    expect(() => {
      new Vorpal().use(comment);
      new Vorpal().use(comment, { command: '!' });
      new Vorpal().use(comment, { alias: '//' });
      new Vorpal().use(comment, { command: '!', alias: '//' });
      new Vorpal().use(comment, { command: '!', alias: [ '//', '--', '<<' ] });
    }).to.not.throw();
  });

  it('should allow comments starting with #', () => {
    const output = stdout.inspectSync(() => {
      const vorpal = new Vorpal();
      vorpal.use(comment);
      vorpal.exec('# a comment line');
    });
    // no output
    expect(output).to.have.length(0);
  });

  it('should allow comments starting with ? instead of #', () => {
    const output = stdout.inspectSync(() => {
      const vorpal = new Vorpal();
      vorpal.use(comment, { command: '?' });
      vorpal.exec('? a comment line');
    });
    // no output
    expect(output).to.have.length(0);
  });

  it('should allow comments starting with an alias of //', () => {
    const output = stdout.inspectSync(() => {
      const vorpal = new Vorpal();
      vorpal.use(comment, { alias: '//' });
      vorpal.exec('// a comment line');
    });
    // no output
    expect(output).to.have.length(0);
  });

  it('should allow comments starting with aliases of // -- <<', () => {
    const output = stdout.inspectSync(() => {
      const vorpal = new Vorpal();
      vorpal.use(comment, { alias: [ '//', '--', '<<' ] });
      vorpal.exec('// a comment line');
      vorpal.exec('-- a comment line');
      vorpal.exec('<< a comment line');
    });
    // no output
    expect(output).to.have.length(0);
  });
});
