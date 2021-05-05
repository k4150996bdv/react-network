import React from 'react';
import { Field, reduxForm, reset} from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

let maxLength5 = maxLengthCreator(5)
const afterSubmit = (result, dispatch) =>
  dispatch(reset('ordersTradesSearchForm'));

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[ required , maxLength5 ]} name="newMessageBody" placeholder="Enter your message" ></Field>
            </div>
            <button>Send</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({ form: "dialogsReduxForm" })(DialogsForm)

export default DialogsReduxForm;