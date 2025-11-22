import React, { useState } from "react";
import "./FAQ.css";
import { IoSearch, IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are your shipping options within Sri Lanka?",
      answer:
        "We offer standard and express shipping options for all domestic orders. Standard shipping typically takes 3–5 business days, while express shipping arrives within 1–2 business days. All orders are dispatched from our Colombo warehouse.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has shipped, you will receive an email confirmation with a tracking number. You can use this number on the courier's website to check the status of your delivery.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 14 days of receipt for a full refund or exchange, provided the item is in its original, unworn condition with all tags attached. Please visit our returns portal to initiate a return.",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards (Visa, Mastercard, American Express), as well as direct bank transfers and cash on delivery for orders within Sri Lanka.",
    },
    {
      question: "How do I find the right size?",
      answer:
        "Each product page includes a detailed size guide with specific measurements. We recommend comparing these measurements to a similar garment you own to ensure the best fit. If you're still unsure, our customer service team is happy to help.",
    },
  ];

  return (
    <div className="faq-page">
      <main className="faq-content">
        <h1>How can we help?</h1>
        <p>Find answers to your questions about shipping, returns, and more.</p>

        {/* Search Bar */}
        <div className="faq-search-wrapper">
          <IoSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for a question..."
            className="faq-search"
          />
        </div>

        {/* Category Tags */}
        <div className="faq-tags">
          {[
            "Shipping",
            "Returns & Exchanges",
            "Payments",
            "Product & Sizing",
            "Account & Privacy",
          ].map((tag, i) => (
            <span key={i} className="faq-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                {openIndex === i ? (
                  <IoChevronUp className="icon" />
                ) : (
                  <IoChevronDown className="icon" />
                )}
              </div>
              {openIndex === i && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="faq-contact">
          <h2>Still have questions?</h2>
          <p>
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <button>Contact Us</button>
        </div>
      </main>
    </div>
  );
}
