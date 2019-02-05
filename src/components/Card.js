import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

const MODE = {
    DEFAULT: 'DEFAULT',
    CREATE: 'CREATE',
    EDIT: 'EDIT',
};

export default class Card extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        classNames: PropTypes.arrayOf(PropTypes.string),
        definitionFields: PropTypes.object,
        handleSubmit: PropTypes.func,
    };

    static defaultProps = {
        classNames: [],
        definitionFields: {},
        handleSubmit: () => {
        }
    };

    state = {
        mode: MODE.DEFAULT,
        isBig: false
    };

    toggleCreate = () => {
        const newMode = this.state.mode === MODE.CREATE ? MODE.DEFAULT : MODE.CREATE;
        this.setState({ mode: newMode });
    };

    toggleBig = () => {
        this.setState({ isBig: !this.state.isBig });
    };

    render() {
        const { title } = this.props;
        const classNames = [ ...this.props.classNames ];

        classNames.push('card');

        if (this.state.isBig) {
            classNames.push('big')
        }

        return (
            <section className={ classNames.join(' ') }>
                <div className="control">
                    <button onClick={ this.toggleCreate }>+</button>
                    <button onClick={ this.toggleBig }>^</button>
                </div>

                <h2>{ title }</h2>

                { this.whichRender(this.state.mode) }
            </section>
        );
    }

    whichRender = (currentState) => {
        switch (currentState) {
            case MODE.CREATE:
                return (
                    <div className="content create">
                        <span>creating</span>

                        <Form definitionFields={ this.props.definitionFields }
                              handleSubmit={ this.props.handleSubmit }/>
                    </div>
                );
            default:
                return (<div className="content">{ this.props.children }</div>);
        }
    };

}
