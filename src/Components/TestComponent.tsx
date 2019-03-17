import * as React from 'react';

export interface testProps {
    compiler: string,
    frameWork: string
}
export class TestComponent extends React.Component<testProps, {}> {
    render() {
        return <h1>Hai Harish im running on {this.props.frameWork} with {this.props.compiler}</h1>
    }
}