let React = require('react');
class ServerComponent extends React.Component {
  render() {	
    	return (
	React.createElement("h1", null, "Hello, world!")
	);
  }
}
module.exports.component = ServerComponent;


