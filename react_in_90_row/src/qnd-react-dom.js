import * as snabbdom from 'snabbdom';
import propsModule from 'snabbdom/modules/props';

// propsModule -> this helps in patching text attributes
const reconcile = snabbdom.init([propsModule]);

// React.render(<App />, document.getElementById('root'));
// el -> <App />
// rootDomElement -> document.getElementById('root')
const render = (el, rootDomElement) => {
  // logic to put el into the rootDomElement
  reconcile(rootDomElement, el);
}

// to be exported like ReactDom.render
const QndReactDom =  { 
  render
};

export default QndReactDom;