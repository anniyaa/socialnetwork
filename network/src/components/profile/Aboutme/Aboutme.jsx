import React from "react";
import './aboutme.scss'
import ptica from "../../../assets/images/ptica.jpg"; // <img className={'ptica-content'} src={ptica} alt=""/>
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import usericon from '../../../assets/icons/usericon.png'

const Aboutme = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (<div className="aboutme">

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <img src={(props.profile.photos && props.profile.photos.large) ? props.profile.photos.large : usericon} alt="User avatar" />
        {props.isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
        <p>About me</p>

    </div>);
}

export default Aboutme;