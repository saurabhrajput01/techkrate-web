"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import carBg from "../assets/image/Cars-bg.jpg";

function Contact() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const videoRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    relationship: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // State for OTP verification
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
      if (formRef.current) {
        gsap.fromTo(formRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.4 });
      }
    });
    
    // Attempt to autoplay video with fallback
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.log("Auto-play prevented, video will play on user interaction");
        }
      };
      playVideo();
    }
    
    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[A-Za-z\s]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!namePattern.test(formData.firstName.trim())) {
      newErrors.firstName = "First name must contain only letters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!namePattern.test(formData.lastName.trim())) {
      newErrors.lastName = "Last name must contain only letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }

    if (formData.phoneNumber.trim()) {
      if (!phonePattern.test(formData.phoneNumber.trim())) {
        newErrors.phoneNumber = "Phone number must be 10 digits";
      }
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleVerifyClick = async () => {
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      setErrors({ ...errors, email: "Please enter a valid email to verify." });
      return;
    }

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setOtp("");
    setOtpError("");
    setIsPopupVisible(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_OTP_TEMPLATE_ID",
        {
          to_email: formData.email,
          otp: newOtp,
        },
        "YOUR_USER_ID"
      );
      alert(`OTP sent to ${formData.email}. (For demo, OTP is: ${newOtp})`);
    } catch (error) {
      console.error("Error sending OTP email:", error);
      alert("Failed to send OTP. Please try again.");
      setIsPopupVisible(false);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      setIsEmailVerified(true);
      setIsPopupVisible(false);
      setOtpError("");
      alert("Email verified successfully!");
    } else {
      setOtpError("Invalid OTP. Please try again.");
    }
  };


  const sendEmail = (e) => {
    e.preventDefault();
    
    // Check if the form is valid and the email is verified
    if (validateForm()) {
      if (!isEmailVerified) {
        alert("Please verify your email address before submitting the form.");
        return;
      }

      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID").then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert( "Message Sent Successfully! Thank you for contacting us. We've received your inquiry, and our team will review it shortly. You can expect a response from us within 24 hours. If you need immediate assistance, please call us at +91-9990547098.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            companyName: "",
            message: "",
          });
          setErrors({});
          setIsEmailVerified(false);
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("There was an error sending your message. Please try again.");
        }
      );
    }
  };

  return (
    <div 
      className="relative min-h-screen text-white overflow-hidden pt-20 lg:pt-24"
      style={{
        fontFamily: "Inter, sans-serif",
        letterSpacing: "-0.01em",
      }}
    >
      {/* Background Image */}
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center"
  style={{ backgroundImage: `url(${carBg})` }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
            <h2 ref={titleRef} className="text-3xl sm:text-4xl font-normal mb-8 text-white">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-400 w-5" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+91-9990547098</p>
                  <p className="text-white">+91-1203107109</p>
                </div>

              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 w-5" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">support@techkrate.com</p>
                </div>

              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <FontAwesomeIcon icon={faLocationDot} className="text-blue-400 w-5" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white">416, Sector 1, Vasundhara,<br/>Ghaziabad - 201012 Delhi NCR</p>
                </div>

              </div>
              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://www.linkedin.com/company/techkrate/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-white/20 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </a>
                <a 
                  href="https://www.youtube.com/@techkrate4281" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white/20 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`peer w-full bg-white text-gray-900 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300 focus:border-blue-500"
                } outline-none px-4 py-3 rounded-lg shadow-sm transition`}
                    placeholder=" "
                    required
                  />
                  <label className={`absolute left-3 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-400 ${
                    formData.firstName ? "-top-5 text-sm text-blue-400" : ""
                  }`}>
                    First Name *
                  </label>
                  {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`peer w-full bg-white text-gray-900 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300 focus:border-blue-500"
                  } outline-none px-4 py-3 rounded-lg shadow-sm transition`}
                    required
                  />
                  <label className={`absolute left-3 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-400 ${
                    formData.lastName ? "-top-5 text-sm text-blue-400" : ""
                  }`}>
                    Last Name *
                  </label>
                  {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`peer w-full bg-white text-gray-900 border ${
                      errors.email ? "border-red-500" : "border-gray-300 focus:border-blue-500"
                    } outline-none px-4 py-3 rounded-lg shadow-sm transition`}
                    placeholder=" "
                    required
                    disabled={isEmailVerified}
                  />
                  <button
                    type="button"
                    onClick={handleVerifyClick}
                    disabled={isEmailVerified}
                    className={`flex-shrink-0 text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      isEmailVerified
                        ? "bg-green-600 text-white cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isEmailVerified ? "✓ Verified" : "Verify"}
                  </button>
                </div>
                <label className={`absolute left-3 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-400 ${
                  formData.email ? "-top-5 text-sm text-blue-400" : ""
                }`}>
                  Email *
                </label>
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
              className={`peer w-full bg-white text-gray-900 border ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300 focus:border-blue-500"
                } outline-none px-4 py-3 rounded-lg shadow-sm transition`}                    placeholder=" "
                  />
                  <label className={`absolute left-3 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-400 ${
                    formData.phoneNumber ? "-top-5 text-sm text-blue-400" : ""
                  }`}>
                    Phone Number (Optional)
                  </label>
                  {errors.phoneNumber && <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`peer w-full bg-white text-gray-900 border ${
                    errors.companyName ? "border-red-500" : "border-gray-300 focus:border-blue-500"
                  } outline-none px-4 py-3 rounded-lg shadow-sm transition`}
                    placeholder=" "
                    required
                  />
                  <label className={`absolute left-3 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-400 ${
                    formData.companyName ? "-top-5 text-sm text-blue-400" : ""
                  }`}>
                    Company Name *
                  </label>
                  {errors.companyName && <p className="text-red-400 text-xs mt-1">{errors.companyName}</p>}
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`peer w-full bg-white text-gray-900 border ${
                    errors.message ? "border-red-500" : "border-gray-300 focus:border-blue-500"
                  } outline-none px-4 py-3 rounded-lg shadow-sm transition`}
                  placeholder=" "
                  required
                ></textarea>
                <label className={`absolute left-3 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-400 ${
                  formData.message ? "-top-5 text-sm text-blue-400" : ""
                }`}>
                  Message *
                </label>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* OTP Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 w-full max-w-sm animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Verify Your Email</h3>
            <p className="text-gray-400 mb-6">
              Enter the 6-digit code sent to <span className="text-blue-400">{formData.email}</span>
            </p>
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
                className="w-full text-center tracking-[0.5em] bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none py-3 rounded-lg text-white text-lg"
                placeholder="000000"
                autoFocus
              />
              {otpError && <p className="text-red-400 text-sm text-center">{otpError}</p>}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsPopupVisible(false)}
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold"
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default Contact;

