import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
const maxLength10 = maxLengthCreator(10)


const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText" validate={[ required, maxLength10 ]}></Field>
      </div>
      <button>Add post</button>
    </form>
  )
}

const ReduxPostForm = reduxForm({ form: "AddNewPostForm" })(PostForm)

export default ReduxPostForm;