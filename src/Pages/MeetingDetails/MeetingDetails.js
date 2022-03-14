import React, { useState } from 'react';
import './MeetingDetails.css';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import JoditEditor from "jodit-react";
import img from '../../images/meeting-vector-img.png'

const MeetingDetails = ({ meetingData, setMeetingData, projectName, setProjectName, meetingPartcipants, setMeetingPartcipants, meetingDiscussion, setMeetingDiscussion, meetingOutcomes, setMeetingOutcomes }) => {

    const projectNameEditor = useRef(null);
    const meetingPartcipantsEditor = useRef(null);
    const meetingDiscussionEditor = useRef(null);
    const meetingOutcomesEditor = useRef(null);

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("location", data.location);
        formData.append("project_name", data.project_name);
        formData.append("meeting_participate", data.meeting_participate);
        formData.append("meeting_discussion", data.meeting_discussion);
        formData.append("meeting_outcomes", data.meeting_outcomes);
        // formData.append("digital_profile", data.digital_profile[0]);

        fetch(`http://digitalbackend.techsistltd.com/meeting_details/`, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                alert(data?.msg);
                reset();
            })
            .catch((error) => console.error("Error -> ", error));
    }
    // console.log(meetingData)

    return (
        <div className='container mt-5 '>
            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-12 col-sm-12 col-md-6 col-lg-7 text-start '>

                    <form onSubmit={handleSubmit(onSubmit)} className="">

                        <h2 className='text-white mb-3 client-name'>Client Name :  {meetingData.name}</h2>
                        <br />
                        <h2 className='text-white mb-3 client-name'> Meeting Location</h2>
                        <input className='mb-4 ps-2 editors-background'   {...register("location")}
                            name="location"
                            placeholder="Location"
                            value={meetingData.location}
                            onChange={(e) => {
                                setMeetingData({ ...meetingData, location: e.target.value })
                            }} />
                        <h2 className='text-white mb-3 client-name'>Meeting Time</h2>
                        <input className='mb-4 ps-2 editors-background' {...register("meetingTime")} placeholder="Meeting Time"
                            value={meetingData.meetingTime}
                            onChange={(e) => {
                                setMeetingData({ ...meetingData, meetingTime: e.target.value })
                            }} />

                        <h2 className='meeting-text'>Project Name:</h2>
                        <div className='editor-background'>
                            <textarea className=' ps-2 editors-background' {...register("project_name")}
                                name="project_name"
                                placeholder="Project Name"
                                value={meetingData.project_name}
                                onChange={(e) => {
                                    setMeetingData({ ...meetingData, project_name: e.target.value })
                                }} />
                            {/* <JoditEditor
                                ref={projectNameEditor}
                                value={projectName}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onChange={(newContent) => {
                                    setProjectName(newContent)
                                    setMeetingData({ ...meetingData, project_name: newContent });
                                }}
                            /> */}

                        </div>

                        <br />


                        <h2 className='meeting-text'>Meeting Partcipants:</h2>
                        <div className='editor-background'>
                            <textarea className=' ps-2 editors-background' {...register("meeting_participate")} name="meeting_participate"
                                placeholder="Meeting Partcipants"
                                value={meetingData.meeting_participate}
                                onChange={(e) => {
                                    setMeetingData({ ...meetingData, meeting_participate: e.target.value })
                                }} />
                            {/* <JoditEditor
                                ref={meetingPartcipantsEditor}
                                value={meetingPartcipants}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onChange={newContent => {
                                    setProjectName(newContent)
                                    setMeetingData({ ...meetingData, meeting_participate: newContent });
                                }}
                            /> */}
                        </div>




                        <br />

                        <h2 className='meeting-text'>Meeting Discussion:</h2>
                        <div className='editor-background'>
                            <textarea className=' ps-2 editors-background' {...register("meeting_discussion")} placeholder="Meeting Discussion"
                                name='meeting_discussion'
                                value={meetingData.meeting_discussion}
                                onChange={(e) => {
                                    setMeetingData({ ...meetingData, meeting_discussion: e.target.value })
                                }} />
                            {/* <JoditEditor
                                ref={meetingDiscussionEditor}
                                value={meetingDiscussion}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onChange={newContent => {
                                    setProjectName(newContent)
                                    setMeetingData({ ...meetingData, meeting_discussion: newContent });
                                }}
                            /> */}
                        </div>


                        <br />
                        <br />
                        <h2 className='meeting-text'>Meeting Outcomes:</h2>
                        <div className='editor-background'>
                            <textarea className=' ps-2 editors-background' {...register("meeting_outcomes")}
                                name="meeting_outcomes"
                                placeholder="Meeting Outcomes"
                                rows="3"
                                cols="50"
                                value={meetingData.meeting_outcomes}
                                onChange={(e) => {
                                    setMeetingData({ ...meetingData, meeting_outcomes: e.target.value })
                                }} />
                            {/* <JoditEditor
                                ref={meetingOutcomesEditor}
                                value={meetingOutcomes}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onChange={newContent => {
                                    setProjectName(newContent)
                                    setMeetingData({ ...meetingData, meeting_outcomes: newContent });
                                }}
                            /> */}
                        </div>
                        <br />
                        <input id="next" type="Submit" placeholder='' value="submit" className='submit-btn p-3' />

                    </form>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-5'>
                    <img className='img-fluid p-3' src={img} alt="" />

                </div>

            </div>

        </div>
    );
};

export default MeetingDetails;