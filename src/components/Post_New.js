import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index.js'


class PostNew extends React.Component {
  renderField(field) {
    const {meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label> {field.label} </label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  // our own side of the submit, to save the data etc.
  onSubmit(values) {
    this.props.cratePost(values, () => this.props.history.push("/"))
  }

  render() {
    // let redux-form handle validation etc (this.probs is comming from redux-form)
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title'
          name="title"
          component={this.renderField.bind(this)} />
        <Field
          label='Categories'
          name="categories"
          component={this.renderField.bind(this)} />
        <Field
          label='Contents'
          name="contents"
          component={this.renderField.bind(this)} />
        <button type="submit" className="btn btn-primary"> Submit </button>
        <Link to="/" className="btn btn-danger"> Cancel </Link>
      </form>
    );
  }
}

function validate(value) {
  const error = {};
  // validate
  if (!value.title) {
    error.title = "Enter a title-name"
  }
  if (!value.categories) {
    error.categories = "Enter some categories"
  }
  if (!value.contents) {
    error.contents = "Enter some contents"
  }

  // if error = {}, form is valid! If any other stuff, not vaild!
  return error;
}

export default reduxForm({
  validate,
  form: "postNewForm"
})(
  connect(null, { createPost } ) (PostNew)
);
