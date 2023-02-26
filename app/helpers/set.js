import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';
import { set as emberSet } from '@ember/object';

function set(positional) {
  const [target, path, maybeValue] = positional;

  assert(
    'you must pass a path to {{set}}. You can pass a path statically, as in `{{set this "foo"}}`, or with the path dynamically, as in `{{set this this.greetingPath "Hello"}}`',
    (typeof path === 'string' && path.length > 0) ||
      typeof path === 'symbol' ||
      typeof path === 'number'
  );

  return positional.length === 3
    ? () => emberSet(target, path, maybeValue)
    : (value) => {
        const nextValue = value instanceof Event ? value.target.value : value;
        emberSet(target, path, nextValue);
      };
}

export default helper(set);
