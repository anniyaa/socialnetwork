import React from "react";
import {Input, TextArea} from "../../common/FormsControls/FormsControls";
import { Field, reduxForm } from 'redux-form';

const ProfileDataForm = ({profile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button type='submit'>Save</button>
            </div>

            <div>
                <b>My name is:</b>
                <Field
                    name='fullName'
                    component={Input}
                    type='text'
                    placeholder='Full name'
                />
            </div>

            <div>
                <b>Looking for a job:</b>
                <Field
                    name="lookingForAJob"
                    component={Input}
                    type="checkbox"
                />

            </div>

            <div>
                <b>My professional skills:</b>
                <Field
                    name="lookingForAJobDescription"
                    component={TextArea}
                    placeholder="Professional skills"
                />
            </div>


            <div>
                <b>About me:</b>
                <Field
                    name="aboutMe"
                    component={TextArea}
                    placeholder="About me"
                />
            </div>

            <div>
                <b>Contacts:</b>
                {profile && profile.contacts &&
                Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key}>
                            <b>{key}:</b>
                            <Field
                                name={`contacts.${key}`}
                                component={Input}
                                type="text"
                                placeholder={key}
                            />
                        </div>
                    );
                })
                }
            </div>

        </form>
    )
}

export default reduxForm({ form: 'myForm' })(ProfileDataForm);