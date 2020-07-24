import React from 'react';
type AppState = {
    name: string;
    email: string;
}

class App extends React.PureComponent<{}, AppState> {
    state = {
        name: "siva",
        email: "digitivy@gmail.com"
    }
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
            </div>
        );
    }
}

export default App;
