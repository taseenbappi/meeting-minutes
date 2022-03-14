import React from 'react';
import './ComanyInfo.css';
import { useForm } from "react-hook-form";
import img from '../../images/meeting-vector-img.png'

const ComanyInfo = ({ meetingData, setMeetingData }) => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("company_name", data.company_name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        // formData.append("digital_profile", data.digital_profile[0]);

        fetch(`http://digitalbackend.techsistltd.com/company_info/`, {
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


    };
    // console.log(meetingData)

    return (
        <div className='container  mt-5'>
            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-12 col-sm-12 col-lg-6 col-md-6'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='col-12 col-sm-12 col-lg-6 col-md-6 text-start'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-4 ps-2 meetings-information' type="text"  {...register("name")} placeholder="Client Name"
                            value={meetingData.name}
                            onChange={(e) => {
                                setMeetingData({ ...meetingData, name: e.target.value })
                            }} />
                        <br />
                        <input className='mb-4 ps-2 meetings-information' placeholder="Company Name" type="text"  {...register("company_name")}

                            value={meetingData.company_name}
                            onChange={(e) => {
                                setMeetingData({ ...meetingData, company_name: e.target.value })
                            }}

                        />
                        <br />
                        <input className='mb-4 ps-2 meetings-information' type="number" {...register("phone")} placeholder="Phone Number"
                            value={meetingData.phone}
                            onChange={(e) => {
                                setMeetingData({ ...meetingData, phone: e.target.value })
                            }} />
                        <br />

                        <input className='mb-4 ps-2 meetings-information' placeholder="Email" type="email"  {...register("email")}
                            value={meetingData.email}
                            onChange={(e) => {
                                setMeetingData({ ...meetingData, email: e.target.value })
                            }}

                        />
                        {/* <div className='form-group'>
                            <label className='button-design-five p-3 w-75'>Techsist Digital Profile
                                <input type="file" name="digital_profile" className='ps-5 form-control'

                                    {...register("digital_profile")}
                                    // value={formData.profile}
                                    onChange={(e) => {
                                        setMeetingData({ ...meetingData, digital_profile: e.target.files[0] })
                                    }}
                                />
                            </label>
                        </div> */}
                        <input type="submit" className='submit-btn  p-3 ' />
                    </form>

                </div>

            </div>

        </div>
    );
};

export default ComanyInfo;