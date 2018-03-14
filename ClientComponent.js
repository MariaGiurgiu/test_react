class ClientComponent extends React.Component {
    render() {
        return (
            React.createElement("h1", null, "Hello, world!")
        );
    }
}
if(typeof window !== 'undefined') {
    ReactDOM.render(React.createElement(ClientComponent), document.getElementById("react"));
}