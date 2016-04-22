import Vorpal from 'vorpal';

export default function (vorpal, options = { command: '#' }) {
  const comment = vorpal.command(options.command, 'A comment line');
  if (options.alias) {
    comment.alias(options.alias);
  }
  comment
    .hidden()
    .action(function (args, callback) {
      callback();
    });
}
