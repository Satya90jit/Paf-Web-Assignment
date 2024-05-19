import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const ShareComponent = () => {
  return (
    <section className="space-y-6">
      <h4 className="text-xl font-medium text-gray-500">Share this series :</h4>
      <div className="flex items-center gap-5 text-gray-200">
        <a href="" target="_blank" rel="noreferrer noopener">
          <FaFacebookF className="text-3xl text-facebook hover:scale-110 common-transition" />
        </a>
        <a href="" target="_blank" rel="noreferrer noopener">
          <FaTwitter className="text-3xl text-twitter hover:scale-110 common-transition" />
        </a>
        <a href="" target="_blank" rel="noreferrer noopener">
          <FaInstagram className="text-3xl text-instagram hover:scale-110 common-transition" />
        </a>
        <a href="" target="_blank" rel="noreferrer noopener">
          <FaLinkedinIn className="text-3xl text-linkedin hover:scale-110 common-transition" />
        </a>
        <a href="" target="_blank" rel="noreferrer noopener">
          <FaYoutube className="text-3xl text-youtube hover:scale-110 common-transition" />
        </a>
        <a href="" target="_blank" rel="noreferrer noopener">
          <FaWhatsapp className="text-3xl text-whatsapp hover:scale-110 common-transition" />
        </a>
        <a href="" target="_blank" rel="noreferrer noopener">
          <FaPinterest className="text-3xl text-pinterest hover:scale-110 common-transition" />
        </a>
      </div>
    </section>
  );
};

export default ShareComponent;
