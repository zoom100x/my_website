import React, { Component, useState } from "react";
import "./Contact.scss";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xqkwjybr",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main id="contact" className="contact-container">
      <div className="contact-title">
        <Flip bottom cascade>
          <h1>CONTACT-ME</h1>
        </Flip>
      </div>
      <div className="contact-form-map">
        <div className="contact-form">
          <Fade bottom cascade>
            <div className="contact-description">
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to use the form.
            </div>
          </Fade>
          <form className="form" onSubmit={handleOnSubmit}>
            <Fade bottom cascade>
              <div className="input1">
                <input
                  id="name"
                  type="text"
                  name="_name"
                  placeholder="NAME"
                  onChange={handleOnChange}
                  required
                  value={inputs.name}
                />
                <span className="line1" />
              </div>
              <div className="input2">
                <input
                  id="email"
                  type="email"
                  name="_replyto"
                  placeholder="EMAIL"
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                />
                <span className="line2" />
              </div>
              <div className="input3">
                <input
                  id="subject"
                  type="text"
                  name="_subject"
                  placeholder="SUBJECT"
                  onChange={handleOnChange}
                  required
                  value={inputs.subject}
                />
                <span className="line3"></span>
              </div>
              <div className="textarea">
                <textarea
                  id="message"
                  name="_message"
                  placeholder="MESSAGE"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                />
                <span className="line4"></span>
              </div>
              <div className="space-100"></div>
              <button
                className="bw-btn"
                type="submit"
                disabled={status.submitting}
              >
                <span>
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting..."}
                </span>
              </button>
            </Fade>
          </form>
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </div>
        <Fade right>
          <div className="contact-map" id="map">
            <MapContainer
              style={{ height: "100%", zIndex: 1 }}
              center={[33.87570354015534, -5.577701135814783]}
              zoom={15}
              scrollWheelZoom={false}
              dragging={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                draggable={false}
                position={[33.87570354015534, -5.577701135814783]}
              >
                <Popup style={{ zIndex: 2 }}>
                  <h2>It's HOME.</h2>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Fade>
      </div>
    </main>
  );
}
