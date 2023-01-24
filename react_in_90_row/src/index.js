// QndReact needs to be in scope for JSX to work
import QndReact from './qnd-react';
import QndReactDom from './qnd-react-dom';

const App = (
  <div>
    <h1 className="primary">
      QndReact is Quick and dirty react
    </h1>
    <p>It is about building your own React in 90 lines of JavsScript</p>
  </div>
);

// App compile to ->
// const App = createElement(
//   'div', 
//    null, 
//    createElement(
//      'h1', 
//      { className: 'primary' },
//       'QndReact is Quick and dirty react'
//    ),
//    createElement(
//    'p', 
//    null,
//    'It is about building your own React in 90 lines of JavsScript'
//  ),
//  );

QndReactDom.render(App, document.getElementById('root'));