import React from "react";
import map from '../../../assets/images/contact_us/map.jpg'

const ContactUs = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center bg-gray-300 rounded mt-12">Location & Direction</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={map}
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-orange-500">Contact Us</h1>
            <p className="py-6">
            Bashundhara City, often marketed as Bashundhara City Shopping Complex or Bashundhara City Shopping Mall, it is a shopping mall in Dhaka. The mall is located in Panthapath, near Kawran Bazar, and was opened to the public on 6 August 2004. The building complex is 19 stories tall and covers an area of 17,763 m2 (191,200 sq ft), making it the second largest shopping mall in Bangladesh.
            </p>
            <button className="btn bg bg-slate-500">Explore Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
