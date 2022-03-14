import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ComanyInfo from '../ComanyInfo/ComanyInfo';
import LetterHead from '../LetterHead/LetterHead';
import MeetingDetails from '../MeetingDetails/MeetingDetails';
import MeetingFiles from '../MeetingFiles/MeetingFiles';
import './MeetingMinutes.css';

const MeetingMinutes = () => {

    const [page, setPage] = useState(0);

    const FormTitles = ["companyInfo", "meetingDetails", "letterHead", "meetingFiles"];

    const [projectName, setProjectName] = useState("");
    const [meetingPartcipants, setMeetingPartcipants] = useState("");
    const [meetingDiscussion, setMeetingDiscussion] = useState("");
    const [meetingOutcomes, setMeetingOutcomes] = useState("");

    const [meetingData, setMeetingData] = useState({

        name: "",
        email: "",
        phone: "",
        company_name: "",
        location: "",
        project_name: "",
        meeting_participate: "",
        meeting_discussion: "",
        meeting_outcomes: "",
        digital_profile: "",
        meeting_minutes: "",
        initial_work_proposal: "",
        memorandum_of_understanding: "",
        non_disclosure_agreement: "",
        work_order: "",
        work_quotation: "",
        payment_detail: "",
    });


    // console.log(meetingData);

    const submitHandler = () => {


        axios.post('https://digitalbackend.techsistltd.com/meeting_minute/', meetingData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const PageDisplay = () => {

        if (page === 0) {
            return <ComanyInfo setMeetingData={setMeetingData} meetingData={meetingData}></ComanyInfo>

        } else if (page === 1) {
            return <MeetingDetails
                setMeetingData={setMeetingData}
                meetingData={meetingData}

                projectName={projectName}
                meetingPartcipants={meetingPartcipants}
                meetingDiscussion={meetingDiscussion}
                meetingOutcomes={meetingOutcomes}

                setProjectName={setProjectName}
                setMeetingPartcipants={setMeetingPartcipants}
                setMeetingDiscussion={setMeetingDiscussion}
                setMeetingOutcomes={setMeetingOutcomes}

            ></MeetingDetails>
        }
        else if (page === 2) {

            return <LetterHead setMeetingData={setMeetingData} meetingData={meetingData}></LetterHead>
        }
        else if (page === 3) {
            return <MeetingFiles setMeetingData={setMeetingData} meetingData={meetingData}></MeetingFiles>

        }
    };

    return (
        <div className='container-fluid pt-3 meeting-form-body '>

            <div className="container mx-auto">
                <div className="progressbar mx-auto">
                    <div
                        style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}
                        className="d-flex"
                    >
                    </div>
                </div>
                <div className="form-container">

                    {/* form header */}
                    <div className="header">
                        {/* <h1>{FormTitles[page]}</h1> */}
                    </div>
                    {/* form body */}
                    <div className="meeting-form">{PageDisplay()}</div>

                    {/* form footer */}
                    <div className=" text-end py-3">
                        <button
                            className='control-btn'
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                        >
                            Prev
                        </button>

                        <button

                            className='control-btn'
                            onClick={() => {
                                if (page === FormTitles.length - 1) {

                                    Swal.fire(
                                        'Thank You!',
                                        'Check Your Mail Inbox!',
                                        'success'
                                    ).then(function () {
                                        window.location = "/home";
                                    });

                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingMinutes;