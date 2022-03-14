import React from 'react';
import './TechsistLetterHead..css';
import logo from '../../images/logo.png';
import { FaLocationArrow } from 'react-icons/fa';
import jsPDF from 'jspdf';

const TechsistLetterHead = ({ meetingData, setMeetingData }) => {
    // console.log(meetingData);
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const d = (event.toLocaleDateString(undefined, options));

    // pdf genartor code
    const meetingPdfGenetor = () => {

        let doc = new jsPDF('p', 'pt');
        doc.html(document.querySelector("#letter-content"), {
            callback: function (pdf) {
                pdf.setFont("Poppins");
                // doc.setFontType("normal")
                // var pageCount = doc.internal.getNumber0fPages();
                // pdf.deletePage(pageCount);
                pdf.save("meeting-minutes.pdf");

            }
        });

    }
    return (
        <>
            <div id="letter-content" className='container-fluid '>
                <div id="letter-content-body">
                    <div className='letter-content-body-1'>
                        <div className='d-flex align-items-center justify-content-between m-0 py-5 px-4'>
                            <div>
                                <img className='img-fluid' src={logo} alt="" width={"120"} />
                            </div>
                            <div className='text-start'>
                                <p className='information fw-bolder'>Location: <span className=' location-text'>{meetingData.location}</span></p>
                                <p className='information fw-bolder'> Date: <span className='location-text'>{d}</span></p>

                                <p className='information fw-bolder'>Time: <span className='location-text'>{meetingData.meetingTime}</span></p>

                            </div>
                        </div>
                        <h3 className='m-0'>MEETING MINUTES</h3>
                        <div className='letter-body-text px-4'>
                            <p><span className='fw-bolder'>Project:</span> {meetingData.project_name}</p>
                            <p><span className='fw-bolder'>Client:</span> {meetingData.name}</p>
                            <p><span className='fw-bolder'>Meeting Participants:</span> {meetingData.meeting_participate}</p>
                            <p><span className='fw-bolder'>Key Discussions</span> </p>
                            <p>
                                {meetingData.meeting_discussion}
                            </p>
                            <p><span className='fw-bolder'>Meeting Outcomes:</span> </p>
                            <p>
                                {meetingData.meeting_outcomes}
                            </p>
                        </div>

                        <div className="letter-footer-text row px-3 g-0">
                            <div className='mobile col-4 col-sm-4 col-md-4 col-lg-4 text-start'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <FaLocationArrow className="footer-icon"></FaLocationArrow>
                                    <div className='p-1'>
                                        <p className='m-0'><span className='fw-bolder'>Mobile:</span> +(880) 1777993895</p>
                                        <p className='m-0'><span className='fw-bolder'>Mobile:</span> +(880) 1757041234</p>
                                    </div>
                                </div>

                            </div>
                            <div className="office-adress col-4 col-sm-4 col-md-4 col-lg-4 text-start">
                                <div className='d-flex justify-content-center'>
                                    <div className='pt-3'>
                                        <FaLocationArrow className="footer-icon"></FaLocationArrow>
                                    </div>
                                    <div className='p-1'>
                                        <p className='m-0 text-justify'><span className='fw-bolder'>Corporate Office:</span> Level-4, House-546/2, Lane-13, Baridhara DOHS, Dhaka-1206</p>
                                    </div>
                                </div>

                            </div>

                            <div className="email-web col-4 col-sm-4 col-md-4 col-lg-4 text-start">
                                <div className='d-flex align-items-center justify-content-center'>
                                    <FaLocationArrow className=' footer-icon'></FaLocationArrow>
                                    <div className='p-1'>
                                        <p className='m-0'><span className='fw-bolder'>Email:</span> info@techsistltd.com</p>
                                        <p className='m-0'><span className='fw-bolder'>Website:</span> www.techsistltd.com</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* <div className='text-start'>
                <button className='pdf-download-btn p-2 btn btn-primary' onClick={meetingPdfGenetor}>Download Meeting Minutes</button>
            </div> */}
        </>
    );
};

export default TechsistLetterHead;