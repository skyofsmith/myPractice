class HelloWorld extends React.component {
    render(){
        return (
            <h1>Hello world!!!</h1>
        );
    }
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
);