import React, { useRef } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
  const fullnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const doctorRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const messageRef = useRef();

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

    toast.success("Appointment Booked Successfully 🎉");

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

    e.target.reset();
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <section className="appointment-section">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center">

            {/* Left Side */}
            <div className="col-lg-5 mb-4">
              <div className="text-white pe-lg-4">
                <span className="badge bg-light text-primary px-3 py-2 fs-6 mb-3">
                  Best Healthcare Service
                </span>

                <h1 className="fw-bold display-5">
                  Book Your Doctor Appointment Easily
                </h1>

                <p className="mt-3 fs-5">
                  Trusted doctors available 24/7. Quick booking, secure
                  appointments, and best medical support for your family.
                </p>

                <div className="mt-4">
                  <p>✔ Expert Doctors</p>
                  <p>✔ Instant Booking</p>
                  <p>✔ Emergency Support</p>
                  <p>✔ 100% Trusted Service</p>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="col-lg-7">
              <div className="bg-white rounded-4 shadow-lg p-5 form-box">

                <div className="text-center mb-4">
                  <h2 className="fw-bold">
                    Get <span className="text-primary">Appointment</span>
                  </h2>
                  <p className="text-muted">
                    Fill the form and confirm your booking instantly.
                  </p>
                </div>

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
            </div>

          </div>
        </div>
      </section>
    </>
  );
}