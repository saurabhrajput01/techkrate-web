"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Footer from "../components/Footer";
import demoIllustration from "../assets/image/requestdemo-bg.avif";
import CustomDropdown from "../components/CustomDropdown";
import emailjs from "@emailjs/browser";

const RequestDemo = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        companyName: "",
        phoneNumber: "",
        industry: "",
        message: "",
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // State for OTP verification
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [otpError, setOtpError] = useState("");

    const validate = () => {
        let newErrors = {};
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Invalid email format";

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.companyName) newErrors.companyName = "Company name is required";
        if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
        else if (!/^\d+$/.test(formData.phoneNumber))
            newErrors.phoneNumber = "Invalid phone number";

        if (!formData.industry) newErrors.industry = "Please select an industry";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
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
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OTP;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (serviceId && templateId && publicKey) {
                await emailjs.send(
                    serviceId,
                    templateId,
                    {
                        to_email: formData.email,
                        otp: newOtp,
                    },
                    publicKey
                );
                alert(`OTP sent to ${formData.email}.`);
            } else {
                console.warn("EmailJS is not configured. Please check your environment variables.");
                console.log("Generated OTP:", newOtp);
            }
        } catch (error) {
            console.error("Error sending OTP email:", error);
            alert("Failed to send OTP. Please try again.");
            setIsPopupVisible(false);
        }
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otp.trim() === generatedOtp.trim()) {
            setIsEmailVerified(true);
            setIsPopupVisible(false);
            setOtpError("");
            alert("Email verified successfully!");
        } else {
            setOtpError("Invalid OTP. Please try again.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            if (!isEmailVerified) {
                alert("Please verify your email address before submitting the form.");
                return;
            }

            setIsSubmitting(true);

            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FORM;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (serviceId && templateId && publicKey) {
                try {
                    await emailjs.send(serviceId, templateId, formData, publicKey);
                    console.log("Form Submitted Successfully");
                    setIsSubmitting(false);
                    setIsSubmitted(true);
                } catch (error) {
                    console.error("Error sending email:", error);
                    alert("There was an error sending your request. Please try again.");
                    setIsSubmitting(false);
                }
            } else {
                // Fallback for local testing without keys
                console.log("Form Submitted (Demo):", formData);
                await new Promise((resolve) => setTimeout(resolve, 1500));
                setIsSubmitting(false);
                setIsSubmitted(true);
            }
        }
    };

    const inputClasses = (error) => `
    w-full px-6 py-4 rounded-xl
    bg-black text-gray-100
    border
    ${error ? "border-red-500 focus:ring-red-400" : "border-gray-700 focus:border-[#2563EB] focus:ring-[#2563EB]/40"}
    focus:ring-2
    focus:outline-none
    transition-all
    placeholder-transparent
    peer
  `;

    const labelClasses = "block text-sm font-medium text-gray-300 mb-2";

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-black flex flex-col">
                <div className="bg-white py-24 px-6 text-center shadow-sm">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Thank You!</h1>
                </div>
                <div className="flex-grow flex items-center justify-center p-6">
                    <div className="max-w-xl w-full text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Request Received</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Your demo request has been submitted successfully. Our team will get back to you shortly.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                        >
                            Back to Form
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-black flex flex-col lg:flex-row">
            {/* Left Image Section */}
            <div className="lg:w-1/2 relative w-full h-96 lg:h-auto">
                <img
                    src={demoIllustration}
                    alt="Demo Illustration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-center items-center text-center px-10 backdrop-blur-sm">
                    <h2 className="text-[#2563EB] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        Request a demo
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-md">
                        Fill the form and our team will reach out to schedule a session.
                    </p>
                </div>
            </div>

            {/* Right Form Section */}
        <div className="w-full lg:w-1/2 bg-black p-10 flex flex-col justify-center pt-[110px] lg:pt-[120px]">                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4 w-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={inputClasses(errors.name)}
                            />
                            <label
                                htmlFor="name"
                                className={`absolute left-6 top-4 text-gray-400 transition-all duration-300 pointer-events-none 
                                    peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#2563EB] peer-focus:bg-black peer-focus:px-2
                                    peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#2563EB] peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-2
                                    ${formData.name ? "-top-2.5 left-4 text-xs text-[#2563EB] bg-black px-2" : ""}`}
                            >
                                Full Name *
                            </label>
                            {errors.name && <p className="text-red-500 text-xs mt-1 ml-4">{errors.name}</p>}
                        </div>

                        <div className="relative">
                            <div className="flex items-center gap-3">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`${inputClasses(errors.email)} ${isEmailVerified ? "bg-gray-900 border-green-500/50" : ""}`}
                                    disabled={isEmailVerified}
                                />
                                <button
                                    type="button"
                                    onClick={handleVerifyClick}
                                    disabled={isEmailVerified}
                                    className={`flex-shrink-0 text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-300 whitespace-nowrap ${isEmailVerified
                                        ? "bg-green-600/20 text-green-400 border border-green-500/30 cursor-not-allowed"
                                        : "bg-[#2563EB] text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                                        }`}
                                >
                                    {isEmailVerified ? "✓ Verified" : "Verify"}
                                </button>
                                <label
                                    htmlFor="email"
                                    className={`absolute left-6 top-4 text-gray-400 transition-all duration-300 pointer-events-none 
                                        peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#2563EB] peer-focus:bg-black peer-focus:px-2
                                        peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#2563EB] peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-2
                                        ${formData.email ? "-top-2.5 left-4 text-xs text-[#2563EB] bg-black px-2" : ""}`}
                                >
                                    Email Address *
                                </label>
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1 ml-4">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className={inputClasses(errors.phoneNumber)}
                            />
                            <label
                                htmlFor="phoneNumber"
                                className={`absolute left-6 top-4 text-gray-400 transition-all duration-300 pointer-events-none 
                                    peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#2563EB] peer-focus:bg-black peer-focus:px-2
                                    peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#2563EB] peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-2
                                    ${formData.phoneNumber ? "-top-2.5 left-4 text-xs text-[#2563EB] bg-black px-2" : ""}`}
                            >
                                Phone Number *
                            </label>
                            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1 ml-4">{errors.phoneNumber}</p>}
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                placeholder="Company Name"
                                value={formData.companyName}
                                onChange={handleChange}
                                className={inputClasses(errors.companyName)}
                            />
                            <label
                                htmlFor="companyName"
                                className={`absolute left-6 top-4 text-gray-400 transition-all duration-300 pointer-events-none 
                                    peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#2563EB] peer-focus:bg-black peer-focus:px-2
                                    peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#2563EB] peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-2
                                    ${formData.companyName ? "-top-2.5 left-4 text-xs text-[#2563EB] bg-black px-2" : ""}`}
                            >
                                Company Name *
                            </label>
                            {errors.companyName && <p className="text-red-500 text-xs mt-1 ml-4">{errors.companyName}</p>}
                        </div>
                    </div>

                    {/* Industry Dropdown */}
                    <div>
                        <label className={labelClasses}></label>
                        <CustomDropdown
                            label="Industry"
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            options={[
                                { value: "Motor Claims", label: "Motor Claims" },
                                { value: "Chartered Engineering", label: "Chartered Engineering" },
                            ]}
                            placeholder="Select Industry"
                        />
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            className="peer w-full px-6 py-5 rounded-2xl border border-gray-700 bg-black text-gray-100 focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] resize-none placeholder-transparent"
                        />
                        <label
                            htmlFor="message"
                            className={`absolute left-6 top-5 text-gray-400 transition-all duration-300 pointer-events-none 
                                peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#2563EB] peer-focus:bg-black peer-focus:px-2
                                peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#2563EB] peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-2
                                ${formData.message ? "-top-2.5 left-4 text-xs text-[#2563EB] bg-black px-2" : ""}`}
                        >
                            How can we help you?
                        </label>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center">
                        {/* Checkbox */}

                        {/* Privacy & Consent Section */}
                        <div className="flex flex-col gap-4 mt-4 text-gray-300 text-sm">
                            <p>
                                Techkrate is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us.
                            </p>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    className="mt-1 h-5 w-5 text-[#2563EB] border-gray-600 rounded focus:ring-[#2563EB] bg-black"
                                />
                                <label htmlFor="agree" className="text-gray-300 leading-relaxed">
                                    I agree to receive other communications from <span className="font-semibold">Techkrate</span>.
                                </label>
                            </div>

                            <p className="text-gray-400 text-xs leading-snug">
                                By clicking submit below, you consent to allow <span className="font-semibold">Techkrate</span> to store and process the personal information submitted above to provide you the content requested.
                            </p>
                        </div>


                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg"
                    >
                        {isSubmitting ? "Submitting..." : "Request Demo"}
                    </button>
                </motion.form>
            </div>

            {/* OTP Popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl border border-white/10 w-full max-w-sm"
                    >
                        <h3 className="text-2xl font-bold mb-2">Verify Your Email</h3>
                        <p className="text-gray-400 mb-6 text-sm">
                            Enter the 6-digit code sent to <span className="text-blue-400 break-all">{formData.email}</span>
                        </p>

                        <form onSubmit={handleOtpSubmit} className="space-y-4">
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength="6"
                                className="w-full text-center tracking-[0.5em] bg-black border border-gray-700 focus:border-[#2563EB] outline-none py-4 rounded-2xl text-white text-xl font-bold"
                                placeholder="000000"
                                autoFocus
                            />
                            {otpError && <p className="text-red-400 text-sm text-center font-medium">{otpError}</p>}
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsPopupVisible(false)}
                                    className="flex-1 px-4 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors text-white font-semibold"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 transition-colors text-white font-bold shadow-lg shadow-blue-500/20"
                                >
                                    Verify
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default RequestDemo;