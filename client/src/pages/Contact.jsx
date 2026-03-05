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
  href="tel:+919304561465"
  className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
>
  <FaPhoneAlt className="text-green-600 text-2xl" />

  <div>
    <h4 className="font-semibold text-gray-900">Call Us</h4>

    <p className="text-gray-600">
      <a href="tel:+919929005173" className="hover:text-indigo-400">
        +91 9929005173
      </a>
    </p>

    <p className="text-gray-600">
      <a href="tel:+917340302074" className="hover:text-indigo-400">
        +91 7340302074
      </a>
    </p>
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
<div className="grid md:grid-cols-1 gap-10 items-start">

  {/* ---------- Social Media Links ---------- */}



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
        B41 Vinayak Tower, Vidhyadhar Nagar, Jaipur<br />
        Rajasthan, India
      </p>
    </div>


    <div className="mt-8 rounded-lg overflow-hidden">

      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.9784389837378!2d75.78379509999999!3d26.9675821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db23589bcbba5%3A0x9836ec72e0731931!2sVinayak%20Tower%20B-7%2C%20Sector%202%2C%20Central%20Spine%2C%20Vidyadhar%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302039!5e0!3m2!1sen!2sin!4v1772735146003!5m2!1sen!2sin"
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



  