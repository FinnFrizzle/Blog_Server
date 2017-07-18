import React from 'react';
import { Field, reduxForm } from 'redux-form';

function renderTitleField(field) {
  return (
    <div>
      <input type="type"
        { ...field.input }
      />
    </div>
  );
}

class PostNew extends React.Component {
  render() {
    return (
      <form>
        <Field name="title" component={this.renderTitleField} />
      </form>
    );
  }
}

export default reduxForm({
  form: "postNewForm"
})(PostNew);
