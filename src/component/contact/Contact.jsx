import React from "react";
import GoogleMapReact from 'google-map-react';

import { Link } from "react-router-dom";
import { IoArrowRedoCircle } from "react-icons/io5";



const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'red',
    padding: '10px 15px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className="relative h-[600px]">
      <div className="card bg-white shadow-lg rounded-md h-full overflow-y-auto overflow-x-hidden">

        
        <div className="p-5">
          <h1 className="text-black text-xl font-bold">
            Get <span className="text-[#1b8c73]">in touch</span>
          </h1>
        </div>
        <hr />

        <div className="p-5">
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
        </div>

        <div className="p-5">
          <h1 className="text-black text-xl font-bold">
            Contact  <span className="text-[#1b8c73]">me</span>
          </h1>
        </div>
        <hr />

        <div className="px-4 pb-5">
          <form>


            <div className="flex items-center gap-2 py-5">
              <input type="text" placeholder="Full Name" className="border-0 focus:outline-none  h-10 outline-none text-black bg-white w-full border-b focus:border-b-2 focus:border-green-800 transition-all" />
              <input type="email" placeholder="e-mail" className="border-0 focus:outline-none h-10 outline-none text-black bg-white w-full border-b focus:border-b-2 focus:border-green-800 transition-all" />
            </div>
          
            <textarea placeholder="Your message"
              className="border-0 focus:outline-none outline-none text-black placeholder-gray-500 border-b w-full bg-white focus:border-b-2 focus:border-green-800 transition-all" name="dfd" id=""></textarea>

            <hr />
            <Link className="text-lg flex items-center hover:text-green-800 gap-2 text-black py-3 cursor-pointer">Send message <IoArrowRedoCircle /></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
