import React from 'react';
import './MeetingFiles.css';
import { useForm } from "react-hook-form";
import img from '../../images/meeting-vector-img.png'

const MeetingFiles = ({ meetingData, setMeetingData, projectName, setProjectName, meetingPartcipants, setMeetingPartcipants, meetingDiscussion, setMeetingDiscussion, meetingOutcomes }) => {

    // console.log(meetingData);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("digital_profile", data.digital_profile[0]);
        formData.append("meeting_minutes", data.meeting_minutes[0]);
        formData.append("initial_work_proposal", data.initial_work_proposal[0]);
        formData.append("memorandum_of_understanding", data.memorandum_of_understanding[0]);
        formData.append("non_disclosure_agreement", data.non_disclosure_agreement[0]);
        formData.append("work_order", data.work_order[0]);
        formData.append("work_quotation", data.work_quotation[0]);
        formData.append("payment_detail", data.payment_detail[0]);

        // formData.append("digital_profile", data.digital_profile[0]);

        fetch(`http://digitalbackend.techsistltd.com/meeting_file/`, {
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
        // console.log(data)

    };
    return (
        <div className='container my-5 bg-color'>

            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                    <img className='img-fluid p-2' src={img} alt="" />

                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 third-form text-start'>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group'>
                            <label className='button-design-five p-3 w-75'>Techsist Digital Profile
                                <input type="file" name="digital_profile" className='ps-5 form-control'

                                    {...register("digital_profile")}
                                // value={formData.profile}
                                // onChange={(e) => {
                                //     setMeetingData({ ...meetingData, digital_profile: e.target.files[0] })
                                // }}
                                />
                            </label>
                        </div>
                        <br />
                        <div className='form-group'>
                            <label className='button-design-five p-3 w-75'>Meeting Minutes
                                <input type="file" name="meeting_minutes" className='ps-5 form-control'

                                    {...register("meeting_minutes")}
                                // value={formData.profile}
                                // onChange={(e) => {
                                //     setMeetingData({ ...meetingData, digital_profile: e.target.files[0] })
                                // }}
                                />
                            </label>
                        </div>

                        <br />
                        <div className='form-group'>
                            <label className='button-design-five p-3 w-75'>Initial Work Proposal
                                <input type="file" className='ps-5 form-control'
                                    {...register("initial_work_proposal")}
                                    name="initial_work_proposal"
                                // value={formData.profile}
                                // onChange={(e) => {
                                //     setMeetingData({ ...meetingData, initial_work_proposal: e.target.files[0] })
                                // }}
                                />
                            </label>
                        </div>
                        <br />

                        <div className='form-group'>
                            <label className='button-design-five p-3 w-75'>Memorandum of Understanding (MOU)
                                <input type="file" className='ps-5 form-control' name='memorandum_of_understanding'

                                    {...register("memorandum_of_understanding")}
                                // value={formData.profile}
                                // onChange={(e) => {
                                //     setMeetingData({ ...meetingData, memorandum_of_understanding: e.target.files[0] })
                                // }}
                                />
                            </label>
                        </div>

                        <br />

                        <div className='form-group'>
                            <label className='button-design-five p-3 w-75'>Non-Disclosure Agreement (NDA)

                                <input type="file" className='ps-5 form-control' name='non_disclosure_agreement'
                                    {...register("non_disclosure_agreement")}
                                // value={formData.profile}
                                // onChange={(e) => {
                                //     setMeetingData({ ...meetingData, non_disclosure_agreement: e.target.files[0] })
                                // }}
                                />
                            </label>
                        </div>

                        <br />
                        <div className='form-group'>
                            <label className='button-design-five p-3 w-75'>Work Order

                                <input type="file" className='ps-5 form-control' name='work_order'
                                    {...register("work_order")}
                                // value={formData.profile}
                                // onChange={(e) => {
                                //     setMeetingData({ ...meetingData, work_order: e.target.files[0] })
                                // }}
                                />
                            </label>
                        </div>
                        <br />

                        <div className='form-group'>
                            <label className='button-design-five p-3 w-75'>Work Quotation

                                <input type="file" className='ps-5 form-control' name='work_quotation'

                                    {...register("work_quotation")}
                                // value={formData.profile}
                                // onChange={(e) => {
                                //     setMeetingData({ ...meetingData, work_quotation: e.target.files[0] })
                                // }}

                                />
                            </label>
                        </div>

                        <br />
                        <div className='form-group'>
                            <label className='button-design-five p-3 w-75'>Payment Details
                                <input type="file" className='ps-5 form-control' name='payment_detail'


                                    {...register("payment_detail")}
                                // value={formData.profile}
                                // onChange={(e) => {
                                //     setMeetingData({ ...meetingData, payment_detail: e.target.files[0] })
                                // }}
                                />
                            </label>
                        </div>

                        <input type="submit" className='submit-btn p-3 mt-3 ' value={"Upload All File"} />
                    </form>
                    {/* <input id="next" type="Submit" placeholder='' /> */}

                    {/* <button>submit</button> */}


                </div>

            </div>

        </div>
    );
};

export default MeetingFiles;