import React, {createRef} from "react";
import './profile-status.scss'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode:true,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode:false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render () {

        return (
            <div className="profile-status">
                {
                    !this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'my status'}</span>
                }
                {
                    this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                }
            </div>)
    }
}

export default ProfileStatus;