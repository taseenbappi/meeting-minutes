import React from 'react';
import './LetterHead.css';
import logo from "../../images/logo.png";
import { FaLocationArrow } from 'react-icons/fa';
import { MdOutlineCall, MdOutlineEmail } from 'react-icons/md';
import parse from 'html-react-parser';
import jsPDF from 'jspdf';

const LetterHead = ({ meetingData, setMeetingData, projectName, setProjectName, meetingPartcipants, setMeetingPartcipants, meetingDiscussion, setMeetingDiscussion, meetingOutcomes }) => {
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const d = (event.toLocaleDateString(undefined, options));

    // pdf genartor code
    const pdfGenerate = () => {

        let doc = new jsPDF('p', 'pt', 'a4');
        doc.html(document.querySelector("#content"), {
            callback: function (doc) {
                // doc.setFont("Poppins");
                // doc.setFontType("normal")
                // var pageCount = doc.internal.getNumber0fPages();
                // pdf.deletePage(pageCount);
                doc.save("meeting-minutes.pdf");

            }
        });

    }
    return (
        <>
            <div id="content" className='container-fluid  full-page'>
                <div className='form-border ps-2  pb-2'>
                    <div className='container  py-4 m-0 ms-0 p-0'>
                        <div className='d-flex align-items-center justify-content-between m-0 p-1'>
                            <div>
                                <img className='img-fluid' src={logo} alt="" width={"120"} />
                            </div>
                            <div className='text-start'>
                                <p className='information'>Location: <span className=' location-text'>{meetingData.location}</span></p>
                                <p className='information'> Date: <span className='location-text'>{d}</span></p>

                                <p className='information'>Time: <span className='location-text'>{meetingData.meetingTime}</span></p>

                            </div>
                        </div>
                        <div className='py-5'>  <h3 className='meeting-header text-center '>MEETING <span className='ms-1'>MINUTES</span></h3>
                        </div>

                        {/* <div className=''>
                            <h3 className='meeting-information py-2'>Project: <span className='project-text'>{parse(projectName)}</span> </h3>
                            <h3 className='meeting-information'>Client: <span className='project-text'>{meetingData.name}</span></h3>
                            <h3 className='meeting-information py-2'>Meeting Participants : <span className='project-text'> {parse(meetingPartcipants)}</span></h3>

                            <h3 className='meeting-information  pb-5'>Discussion:<span className='project-text'>{parse(meetingDiscussion)}</span></h3>


                        </div>
                        <h3 className='meeting-information'>Meeting Outcomes : </h3>

                        <div id="table-headers" className=' pb-5 table-design  text-center'>

                            {
                                parse(meetingOutcomes)


                            }



                        </div> */}

                    </div>


                    {/* footer form start------------------------ */}

                    <div className=' footer-minutes pt-5 '>

                        <div className='row pt-5 text-muted'>
                            <div className='col-4 col-sm-4 col-md-4 col-lg-4 '>
                                <div className=' d-flex justify-content-center align-items-center'>
                                    <div>
                                        <MdOutlineCall className='call-logo' />
                                    </div>
                                    <div className=' ps-2 '>
                                        <h3 className=' text-black mobile-text text-muted'>  Mobile: +8801678494</h3>
                                        <h4 className=' text-black mobile-text text-muted'>+8801344777</h4>
                                    </div>

                                </div>

                            </div>
                            <div className='col-4 col-sm-4 col-md-4 col-lg-4 '>
                                <div className=' d-flex justify-content-center align-items-center'>
                                    <div>
                                        <FaLocationArrow className='call-logo' />
                                    </div>
                                    <div className=' ps-2 '>
                                        <h3 className=' text-black mobile-text text-muted'>Corporate office: Lavel 4, House-546/2, Lane-13,Baridhara DOHS,Dhaka-1206</h3>

                                    </div>

                                </div>
                            </div>
                            <div className='col-4 col-sm-4 col-md-4 col-lg-4 '>
                                <div className=' d-flex justify-content-center align-items-center'>
                                    <div>
                                        <MdOutlineEmail className='call-logo' />
                                    </div>
                                    <div className=' ps-2 '>
                                        <h3 className=' text-black mobile-text text-muted'>Email: infotechsistltd.com</h3>
                                        <h4 className=' text-black mobile-text text-muted'>Website:WWW.techsistltd.com</h4>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <br />
            <button className='buttons-pdf p-2  ' onClick={pdfGenerate}>Download Pdf</button>
        </>
    );
};

export default LetterHead;