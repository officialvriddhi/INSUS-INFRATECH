import { Image } from "@imagekit/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import scrollToTop from "../utils/ScrollToTop";



const Contact = () => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"consultation"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

    useEffect(()=>{
    scrollToTop();
  },[])

  return (
    <>
    <section className="w-full py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- Heading ---------- */}
<div className="text-center mb-14">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
    Get in Touch
  </h1>

  {/* Underline */}
  <div className="mt-3 flex justify-center">
    <span className="block h-1 w-40 rounded-full bg-blue-600"></span>
  </div>

  <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
    Let’s discuss your next construction or infrastructure project.
    Our team is ready to assist you.
  </p>
</div>


        {/* ---------- Quick Contact Cards ---------- */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Call */}
          <a
            href="tel:+919702755165"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <FaPhoneAlt className="text-green-600 text-2xl" />
            <div>
              <h4 className="font-semibold text-gray-900">Call Us</h4>
              <p className="text-gray-600">+91 9702613313</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@insusinfratech.com"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <FaEnvelope className="text-blue-600 text-2xl" />
            <div>
              <h4 className="font-semibold text-gray-900">Email Us</h4>
              <p className="text-gray-600">contact@insusinfratech.com</p>
            </div>
          </a>

          {/* WhatsApp */}
<button
  className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
    data-cal-namespace="consultation"
    data-cal-link="shubham-sinha-xxiobo/consultation"
    
    data-cal-config='{"layout":"month_view"}'
>
  <div className="rounded-full">
    <SiGooglemeet className="text-green-600 text-2xl " />
  </div>

  <div className="text-left">
    <h4 className="font-semibold text-gray-900">
      Book a Google Meet
    </h4>
    <p className="text-gray-600 text-sm">
      Schedule a virtual consultation
    </p>
  </div>
</button>


        </div>

        {/* ---------- Form + Address ---------- */}
<div className="grid md:grid-cols-2 gap-10 items-start">

  {/* ---------- Social Media Links ---------- */}
<div className="bg-white p-8 rounded-xl shadow-md border">
  <h3 className="text-2xl font-semibold mb-6 text-gray-900">
    Connect With Us
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

    {/* Facebook */}
    <a
      href="https://facebook.com/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition group"
    >
      <span className="bg-blue-600 text-white p-3 rounded-full group-hover:scale-110 transition">
        <FaFacebookF className="text-lg" />
      </span>
      <div>
        <p className="font-semibold text-gray-900">Facebook</p>
        <p className="text-sm text-gray-600">Follow our updates</p>
      </div>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition group"
    >
      <span className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-3 rounded-full group-hover:scale-110 transition">
        <FaInstagram className="text-lg" />
      </span>
      <div>
        <p className="font-semibold text-gray-900">Instagram</p>
        <p className="text-sm text-gray-600">Project visuals</p>
      </div>
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition group"
    >
      <span className="bg-blue-700 text-white p-3 rounded-full group-hover:scale-110 transition">
        <FaLinkedinIn className="text-lg" />
      </span>
      <div>
        <p className="font-semibold text-gray-900">LinkedIn</p>
        <p className="text-sm text-gray-600">Corporate presence</p>
      </div>
    </a>

    {/* X / Twitter */}
    <a
      href="https://x.com/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition group"
    >
      <span className="bg-black text-white p-3 rounded-full group-hover:scale-110 transition">
        <FaXTwitter className="text-lg" />
      </span>
      <div>
        <p className="font-semibold text-gray-900">X (Twitter)</p>
        <p className="text-sm text-gray-600">Latest announcements</p>
      </div>
    </a>
  </div>
</div>


  {/* ---------- Address & Info (UNCHANGED) ---------- */}
  <div className="bg-white px-4 py-2 rounded-xl shadow-md border lg:py-5">
    <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center justify-between lg:text-2xl">
      <span className="tracking-wide">Office Address</span>
        <Image
            src="/logo3.jpeg"
            alt="logo"
            className="size-12 rounded-full object-contain shadow-md cursor-pointer lg:size-16"
              loading="lazy"
                />
    </h3>

    <div className="flex items-start gap-4 mb-6">
      <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
      <p className="text-gray-600 leading-relaxed">
        INSUS INFRATECH Private Limited<br />
        Vidyalay Nagar, Jaipur<br />
        Rajasthan, India
      </p>
    </div>


    <div className="mt-8 rounded-lg overflow-hidden">
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="w-full h-48 border-0"
        loading="lazy"
      ></iframe>
    </div>
  </div>

</div>

      </div>
    </section>

    </>
  );
};

export default Contact;



  