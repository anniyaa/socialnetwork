import React, {useState} from "react";
import './aboutme.scss'
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import usericon from '../../../assets/icons/usericon.png'
import ProfileDataForm from "./ProfileDataForm";

const Aboutme = (props) => {
    console.log('saveProfile prop:', props.saveProfile);

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        return props.saveProfile(formData)
            .then(() => {
                setEditMode(false);
            })
            .catch(error => {
                alert(error);
            });
    };

    return (<div className="aboutme">

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <img src={(props.profile.photos && props.profile.photos.large) ? props.profile.photos.large : usericon} alt="User avatar" />
        {props.isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}

        {editMode
            ? <ProfileDataForm
                initialValues={props.profile}
                profile={props.profile}
                onSubmit={onSubmit}
            />
            : <ProfileData
                goToEditMode={()=>{setEditMode(true)}}
                profile={props.profile}
                isOwner={props.isOwner}
            />}

    </div>);
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner &&<div><button onClick={goToEditMode}>Edit</button></div>}
            <div>
                <b>My name is</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob && (
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <b>About me:</b>
            </div>
            <div>
                <b>Contacts:</b>{Object.keys(profile.contacts).map(key=>{
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:{contactValue}</b></div>
}

export default Aboutme;