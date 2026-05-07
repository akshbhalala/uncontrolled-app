import React, { useRef } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {

  // Uncontrolled Components
  const fullnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const doctorRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const messageRef = useRef();

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullname: fullnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      doctor: doctorRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      message: messageRef.current.value,
    };

    // Toast
    toast.success("Appointment Booked Successfully 🎉");

    // Sweet Alert
    Swal.fire({
      title: "Appointment Confirmed ✅",
      html: `
        <div style="text-align:left;font-size:16px">
          <b>👨 Patient:</b> ${formData.fullname}<br/><br/>
          <b>📧 Email:</b> ${formData.email}<br/><br/>
          <b>📱 Phone:</b> ${formData.phone}<br/><br/>
          <b>🩺 Doctor:</b> ${formData.doctor}<br/><br/>
          <b>📅 Date:</b> ${formData.date}<br/><br/>
          <b>⏰ Time:</b> ${formData.time}<br/><br/>
          <b>💬 Message:</b> ${formData.message}
        </div>
      `,
      icon: "success",
      confirmButtonColor: "#0d6efd",
      confirmButtonText: "Done",
    });

    // Reset Form
    e.target.reset();
  };

  return (
    <>
      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />

      <section className="appointment-section">
        <div className="container py-5">

          <div className="row align-items-center bg-white rounded-4 shadow-lg overflow-hidden">

            {/* Left Side */}
            <div className="col-lg-6 p-5">

              <span className="badge bg-primary px-4 py-2 mb-3 fs-6">
                Best Medical Service
              </span>

              <h1 className="fw-bold display-5 mb-3">
                Book Your
                <span className="text-primary"> Appointment</span>
              </h1>

              <p className="text-muted mb-4">
                Get instant appointments with experienced doctors.
                Trusted healthcare service available 24/7.
              </p>

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control custom-input"
                      ref={fullnameRef}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control custom-input"
                      ref={emailRef}
                      required
                    />
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="form-control custom-input"
                      ref={phoneRef}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <select
                      className="form-select custom-input"
                      ref={doctorRef}
                      required
                    >
                      <option value="">Choose Doctor</option>
                      <option>Dr. Smith</option>
                      <option>Dr. John</option>
                      <option>Dr. Emily</option>
                      <option>Dr. Anderson</option>
                    </select>
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="date"
                      className="form-control custom-input"
                      ref={dateRef}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="time"
                      className="form-control custom-input"
                      ref={timeRef}
                      required
                    />
                  </div>

                </div>

                <div className="mb-4">
                  <textarea
                    rows="4"
                    placeholder="Additional Message"
                    className="form-control custom-input"
                    ref={messageRef}
                  ></textarea>
                </div>

                <button className="btn btn-primary custom-btn w-100">
                  Book Appointment
                </button>

              </form>
            </div>

            {/* Right Side */}
            <div className="col-lg-6 p-0 position-relative">

              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop"
                alt="Doctor"
                className="img-fluid doctor-img"
              />

              <div className="overlay-card">
                <h3 className="fw-bold mb-2">
                  24/7 Emergency Care
                </h3>

                <p className="mb-0">
                  Professional doctors available anytime
                  for your healthcare support.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}