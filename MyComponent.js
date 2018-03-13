let React = require('react');
class MyComponent extends React.Component {
  render() {	
    	return (
	React.createElement("h1", null, "Hello, world!")
	);
  }
}
if(typeof window !== 'undefined') {
    ReactDOM.render(React.createElement(MyComponent), document.getElementById("react"));
}

module.exports.component = MyComponent;


