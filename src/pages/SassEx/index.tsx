import * as React from 'react';

// Your props are your public API, so it's worth taking the
// time to use JSDoc to explain how it works:

export interface Props {
  name: string;
  priority?: boolean;
}

const PrintName: React.FC<Props> = (props) => {
  return (
    <div>
      <p style={{ fontSize: props.priority ? '50px' : 'normal' }}>
        {props.name}
      </p>
    </div>
  );
};

// You can play with the new component's usage below:



// TypeScript supports providing intellisense inside
// the {} in an attribute

let username = 'Cersei';
const SassEx: React.FC<Props> = (props) => {
  return (
    <div>
      <PrintName name={username} priority />
      <PrintName name={username} />
      <h3>{}</h3>
    </div>
  );
};

export default SassEx;
