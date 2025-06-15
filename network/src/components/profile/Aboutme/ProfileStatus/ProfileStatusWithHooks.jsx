import './profile-status.scss'
import {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className="profile-status">
            {
                !editMode &&
                <span onDoubleClick={activateMode}>{props.status || 'my status'}</span>
            }
            {
                editMode &&
                <input onBlur={deactivateEditMode} onChange={onStatusChange} autoFocus={true}
                       value={status}/>
            }
        </div>)
}

export default ProfileStatusWithHooks;