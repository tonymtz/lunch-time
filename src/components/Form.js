import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {

    static propTypes = {
        definitionFields: PropTypes.object.isRequired
    };

    state = {
        form: {}
    };

    render() {
        const { definitionFields } = this.props;

        const formElements = [];

        for (let field in definitionFields) {
            if (definitionFields.hasOwnProperty(field)) {
                formElements.push(this.renderField({
                    id: field,
                    name: field,
                    ...definitionFields[ field ]
                }));
            }
        }

        return (
            <form onSubmit={ this.handleSubmit }>

                { formElements }

                <input type="submit" value='Send'/>
            </form>
        );
    }

    renderField = (field) => {
        switch (field.type) {
            default:
                return <input
                    type="text"
                    key={ field.id }
                    name={ field.id }
                    placeholder={ field.label }
                    value={ this.state.form[ field.id ] || '' }
                    onChange={ this.handleChange }
                />;
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            form: {
                ...this.state.form,
                [ e.target.name ]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state.form });
    };
}
