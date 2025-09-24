import React, { useRef, useState } from "react";
// import GoogleMapReact from 'google-map-react';
import { Link } from "react-router-dom";
import { IoArrowRedoCircle } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clicksond from "../../assets/clicksound.mp3";
import useSound from "use-sound";

const Contact = () => {
  const [play] = useSound(clicksond);

  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    play();

    const name = formRef.current.from_name.value.trim();
    const email = formRef.current.from_email.value.trim();
    const userMessage = formRef.current.message.value.trim();

    if (!name || !email || !userMessage) {
      toast.error("Please fill in all fields!");
      return; // Stop the form submission
    }

    setMessage(true);
    emailjs
      .sendForm(
        "service_78u6hyn",
        "template_u6748rs",
        formRef.current,
        "riMlUvx_eS5ivAWtU"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="h-[600px] card bg-gray-800 rounded-md  overflow-y-auto overflow-x-hidden">
      <div className="p-5">
        <h1 className="text-text_color_light text-xl font-bold">
          Get <span className="text-bg_secondary">in touch</span>
        </h1>
      </div>
      <hr />

      {/* <div className="p-5">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Our Location</h2>
          <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAc3SB1bUnNVNwIJseu8Frtfk4HxcIW1a4" }} // Add your Google Maps API key here
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={10.99835602}
                lng={77.01502627}
                text="Our Office"
              />
            </GoogleMapReact>
          </div>
        </div> */}

      <div className="px-4 pb-5">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" p-6 rounded-lg mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <input
              type="text"
              name="from_name"
              placeholder="Full Name"
              className="focus:outline-none px-3 py-2 h-12 rounded-md border border-gray-300 w-full bg-transparent text-black focus:border-bg_secondary transition-all duration-300 placeholder-gray-400"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              className="focus:outline-none px-3 py-2 h-12 rounded-md border border-gray-300 w-full bg-transparent text-black focus:border-bg_secondary transition-all duration-300 placeholder-gray-400"
            />
          </div>

          <textarea
            placeholder="Your Message"
            name="message"
            className="focus:outline-none px-3 py-2 rounded-md border border-gray-300 w-full bg-transparent text-black placeholder-gray-400 focus:border-bg_secondary transition-all duration-300 mb-5"
            rows={5}
          ></textarea>


          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="flex items-center gap-2 bg-bg_secondary text-white px-5 py-2 rounded-md text-lg font-medium hover:bg-bg_secondary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message <IoArrowRedoCircle className="text-xl" />
            </button>
            {message && (
              <span className="text-green-600 text-sm font-medium">
                Message sent successfully!
              </span>
            )}
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default Contact;
