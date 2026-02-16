"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Footer from "../components/Footer";
import demoIllustration from "../assets/image/requestdemo-bg.avif";
import CustomDropdown from "../components/CustomDropdown";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Form Submitted:", formData);
            setIsSubmitting(false);
            setIsSubmitted(true);
        }
    };

    const inputClasses = (error) => `
    w-full px-6 py-3 rounded-full
    bg-black text-gray-100
    border
    ${error ? "border-red-500 focus:ring-red-400" : "border-gray-700 focus:border-[#2563EB] focus:ring-[#2563EB]/40"}
    focus:ring-2
    focus:outline-none
    transition-all
    placeholder-gray-400
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
        <div className="min-h-screen w-full bg-black flex flex-col lg:flex-row font-sans">
            {/* Left Image Section */}
            <div className="lg:w-1/2 relative w-full h-96 lg:h-auto">
                <img
                    src={demoIllustration}
                    alt="Demo Illustration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-center px-10 backdrop-blur-sm">
                    <h2 className="text-[#2563EB] text-3xl md:text-4xl font-bold mb-4 leading-snug">

                    </h2>
                    <p className="text-gray-300 text-base md:text-lg max-w-md">

                    </p>

                </div>
            </div>

            {/* Right Form Section */}
            <div className="w-full lg:w-1/2 bg-black p-10 flex flex-col justify-center">
                <h2 className="text-3xl text-[#2563EB] font-semibold mb-2">Request a Demo</h2>
                <p className="text-gray-400 mb-6 text-sm">Fill the form and our team will reach out to schedule a session.</p>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4 w-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClasses(errors.name)}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClasses(errors.email)}
                        />
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className={inputClasses(errors.phoneNumber)}
                        />
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={handleChange}
                            className={inputClasses(errors.companyName)}
                        />
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
                                { value: "Consignment & Appraisals", label: "Consignment & Appraisals" },
                            ]}
                            placeholder="Select Industry"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className={labelClasses}>Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            className="w-full px-6 py-5 rounded-2xl border border-gray-700 bg-black text-gray-100 focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] resize-none"
                        />
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
        </div>
    );
};

export default RequestDemo;