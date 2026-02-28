import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Q1. Can office staff print or share a certificate before Admin approval?",
    answer: "No. The letterhead is locked at the system level. It cannot be accessed, printed, or downloaded by office staff or the Chartered Engineer until the Admin has approved the certificate."
  },
  {
    question: "Q2. Who can update Port, CHA, and Terms & Conditions master data?",
    answer: "Only the Admin. Office staff and CEs have read-only access — these fields are auto-populated into certificates and cannot be manually overridden."
  },
  {
    question: "Q3. Can the Admin reject a draft and send it back for correction?",
    answer: "Yes. Both the CE and the Admin can reject a draft with remarks, returning it to office staff for correction. The assignment status reflects this at every step."
  },
  {
    question: "Q4. How does CARS work across offices in different cities?",
    answer: "All offices access the same centralised platform via a web browser. Each branch's staff operates under their own login, while the Admin has complete cross-office visibility and control from a single dashboard."
  },
  {
    question: "Q5. Are certificates issued through CARS accepted by Customs and DGFT?",
    answer: "Yes. Certificates are formatted to comply with DGFT and Customs requirements and carry the digital signature of the issuing Chartered Engineer, making them legally valid for all regulatory submissions."
  },
  {
    question: "Q6. How does CARS calculate the current market value of a machine?",
    answer: "The platform applies age-wise depreciation schedules and applicable regulatory norms to the declared year of manufacture to compute the current market value automatically. The Chartered Engineer reviews the calculated figure and can adjust it if warranted before certifying."
  },
  {
    question: "Q7. What format should the Excel file be in for bulk machinery import?",
    answer: "CARS provides a standard Excel import template that maps directly to the Machinery Detail fields in the platform. Office staff download the template, fill in the machine details, and upload it against the consignment. The data is validated on import and any errors are flagged for correction before the draft is generated."
  },
  {
    question: "Q8. Can a Customs officer raise a query from any location by scanning the QR code?",
    answer: "Yes. The QR code on every issued certificate is linked to that specific certification record on the CARS platform. Any Customs officer at any port can scan the QR code using a standard smartphone to access the certificate details and submit a query. The query is routed directly to the issuing Chartered Engineer in real time."
  },
  {
    question: "Q9. How does the auto-generated consignee link work, and who controls when it expires?",
    answer: "Once the Admin approves a CE certificate and the final assessed value is confirmed, CARS automatically generates a secure, unique sharing link for that consignment. The Admin sets a custom expiry period for the link — for example, 24 hours, 7 days, or any duration appropriate to the transaction. The consignee can open the link during the valid period to view the assessed value and certificate details without requiring a platform login. Once the link expires, it becomes inaccessible — ensuring the firm retains full control over document availability and preventing indefinite circulation of sensitive valuation data."
  }
];
export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="relative bg-black py-24 overflow-hidden">

            {/* soft blue glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[900px] h-[900px] bg-[#2563EB] opacity-10 blur-[220px] rounded-full" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12"
                >
                    <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.15] text-white">
                        Do you have <span className="text-[#2563EB]">any questions?</span>
                    </h2>
                </motion.div>

                {/* FAQ List */}
                <div className="divide-y divide-white/10">

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="py-6">

                                {/* Question */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between text-left"
                                >
                                    <span className="text-lg font-medium text-white">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`w-5 h-5 text-[#2563EB] transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
