"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Address from "@/components/Forms/Address";
import { ErrorFlag } from "@/components/Flag/Error";
import  Flag  from "@/components/Flag/Success";
import Link from "next/link";
// import sendEmail from "../api/email/route";
// import notification from "../api/notification/route";
function Contact() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    number:"",
    message:""
  });
   const [showErrorFlag, setShowErrorFlag] = useState(false);
  const [showFlag, setShowFlag] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorDesc, setErrorDesc] = useState("");

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (validateForm(formData.name, formData.email, formData.number, formData.message, setShowErrorFlag, setErrorTitle, setErrorDesc, showErrorFlag)){
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        <Flag 
          title = "Success"
          desc ="Your Query Has Been Forwarded"
          showFlag = {showFlag}
          setShowFlag = {setShowFlag}
          />
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        setShowErrorFlag(true);
        setErrorTitle("Error");
        setErrorDesc("Error Sending Message");
        setTimeout(() => {
          setShowErrorFlag(false);
          setErrorTitle("");
          setErrorDesc("");
        },3000)
        console.error('Error sending email:', response.statusText);
      }
      }
    } catch (error) {
      setShowErrorFlag(true);
        setErrorTitle("Error");
        setErrorDesc("Error Sending Message");
      setTimeout(() => {
          setShowErrorFlag(false);
          setErrorTitle("");
          setErrorDesc("");
        },3000)
        console.error('Error sending email:', error);
    }
  };

  return (
    <>
    <div className="relative py-12 md:py-16 overflow-hidden  ">
      <div className="flex  px-4 w-full">
        <div className="max-w-7xl px-5 py-5 mx-auto bg-white bg-opacity-10 backdrop-blur-2xl shadow-lg rounded-3xl">
             <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-heading bg-orange-50 rounded-full">
              CONTACT US
            </span>
          <div className=" mb-12 md:mb-16 text-center">
            <h1 className="font-heading text-5xl xs:text-6xl font-bold text-heading mb-4">
              <span className="text-heading">Don’t hesitate </span>
              <span className="font-serif text-font italic">to talk with us</span>
            </h1>
            <p className="text-xl text-font">
            Have questions or ready to discuss your project? <br></br> Fill out the form below, and we&apos;ll get back to you promptly.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 justify-center items-center">
          
            <div className="w-full lg:w-1/2 px-4">
              <div className=" lg:max-w-xl lg:ml-auto">
                <form>
                  <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                      <div>
                        <label
                          className="block mb-1.5 text-sm font-semibold"
                          for=""
                        >
                          <span>Full Name</span>
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="w-full py-3 px-4 text-sm text-heading placeholder-gray-400 border border-gray-200 focus:border-heading focus:outline-heading rounded-lg"
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                      <div>
                        <label
                          className="block mb-1.5 text-sm font-semibold"
                          for=""
                        >
                          <span>Email</span>
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="w-full py-3 px-4 text-sm text-heading placeholder-gray-400 border border-gray-200 focus:border-heading focus:outline-heading rounded-lg"
                          type="text"
                          placeholder="Type your email"
                          id="email"
                           name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                      <div>
                        <label
                          className="block mt-1 mb-1.5 text-sm font-semibold"
                          for=""
                        >
                          <span>Number</span>
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="w-full py-3 px-4 text-sm text-heading placeholder-gray-400 border border-gray-200 focus:border-heading focus:outline-heading rounded-lg"
                          type="number"
                          placeholder="Type your number"
                          id="number"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-9">
                    <label
                      className="block mb-1.5 text-sm font-semibold"
                      for=""
                    >
                      <span>Message</span>
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      className="w-full h-12 py-3 px-4 resize-none text-sm text-heading placeholder-gray-400 border border-gray-200 focus:border-heading focus:outline-heading rounded-lg"
                      type="text"
                      placeholder="Type your message"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      
                    ></textarea>
                  </div>
                  <button
                    className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-orange-900 rounded-md overflow-hidden"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-heading transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">Submit</span>
                  </button>
                </form>
              </div>
            </div>
            <Address />
          </div>
          <div className="flex flex-wrap items-center -mx-4 mt-12 mb-9">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="flex items-center lg:justify-center">
                <div className="flex group flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-15 h-16 sm:h-15 rounded-full bg-pink-200">
                  <Image
                    className="group-hover:animate-shake"
                    src="/forms/icon-phone.svg"
                    alt=""
                    width={32}
                    height={32}
                  />{" "}
                </div>
                <div>
                  <span className="text-sm text-gray-200">Phone</span>
                  <span className="block text-2xl font-semibold text-white">
                    <Link href="tel:+919897732444">
                        +91 98977 32444 
                    </Link>
                    <br /> 
                    <Link href="tel:+918630207918">
                      +91 86302 07918
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="flex items-center lg:justify-center">
                <div className="flex group flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-15 h-16 sm:h-15 rounded-full bg-yellow-100">
                  <Image
                    className="group-hover:animate-shake"
                    src="/forms/icon-email.svg"
                    alt=""
                    width={32}
                    height={32}
                  />{" "}
                </div>
                <div>
                  <span className="text-sm text-gray-200">Email</span>
                  <Link className="block text-2xl font-semibold text-white" href='mailto:mothers2001@gmail.com'>
                   mothers2001@gmail.com   
                   </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="flex items-center lg:justify-center">
                <div className="flex group flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-15 h-16 sm:h-15 rounded-full bg-blue-200">
                  <Image
                    className="group-hover:animate-shake"
                    src="/forms/icon-location.svg"
                    alt=""
                    width={32}
                    height={32}
                  />{" "}
                </div>
                <div>
                  <span className="text-sm text-gray-200">Location</span>
                  <span className="block text-2xl font-semibold text-white">
                    HCL Compound, Niranjanpur Saharanpur Road, Dehradun (UK) - 248001

                  </span>
                </div>
              </div>
            </div>
                



          </div>
        </div>
       
      </div>
      <ErrorFlag
        title={errorTitle}
        desc={errorDesc}
        showErrorFlag={showErrorFlag}
        setShowErrorFlag={setShowErrorFlag}
      />
      
    </div>
   
    </>
  );
}

const validateForm = (name, email, number, message, setShowErrorFlag, setErrorTitle, setErrorDesc, showErrorFlag) => {
  if (!name || !email || !number || !message){
    setShowErrorFlag(true);
    setErrorTitle("Error");
    setErrorDesc("All fields are required");
    return false
  }
  if (!email.includes("@") || !email.includes(".")) {
    setShowErrorFlag(true);
    setErrorTitle("Error");
    setErrorDesc("Invalid email");
    return false
    
  }
  if (number.length < 10) {
    setShowErrorFlag(true);
    setErrorTitle("Error");
    setErrorDesc("Invalid number");
    return false
  }
  if (message.length > 500) {
    setShowErrorFlag(true);
    setErrorTitle("Error");
    setErrorDesc("Message too long, max 500 characters");
    return false
  }
  return true
};

export default Contact;
