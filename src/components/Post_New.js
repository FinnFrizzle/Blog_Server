import React from 'react';
import { Field, reduxForm } from 'redux-form';

function renderField(field) {
  return (
    <div className="form-group">
      <label> {field.label} </label>
      <input
        className="form-control"
        type="type"
        { ...field.input }
      />
      <div className="text-help">
        {field.meta.touched ? field.meta.error : ''}
      </div>
    </div>
  );
}

class PostNew extends React.Component {
  // our own side of the submit, to save the data etc.
  onSubmit(values) {
    console.log(values)
  }

  render() {
    // let redux-form handle validation etc (this.probs is comming from redux-form)
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title'
          name="title"
          component={this.renderField} />
        <Field
          label='Categories'
          name="categories"
          component={this.renderField} />
        <Field
          label='Contents'
          name="contents"
          component={this.renderField} />
        <button type="submit" className="btn-primary"> Submit </button>
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
  if (!value.content) {
    error.categories = "Enter some categories"
  }
  if (!value.contents) {
    error.title = "Enter some contents"
  }

  // if error = {}, form is valid! If any other stuff, not vaild!
  return error;
}

export default reduxForm({
  validate,
  form: "postNewForm"
})(PostNew);
