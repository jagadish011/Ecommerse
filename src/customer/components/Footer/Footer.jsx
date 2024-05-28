import { useState } from "react";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
function FooterButton({ href, children, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#08071b] from-white to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span
        className={`absolute opacity-0 group-hover:opacity-100 group-white:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700 ${
          isHovered ? "opacity-100" : ""
        }`}
      >
        {text}
      </span>
    </a>
  );
}

export default function Footer() {
    return (
      <footer className="relative w-full bg-gray-900 text-white pt-10">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li>About</li>
                <li>Careers</li>
                <li>Brand Center</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Help Center</h3>
              <ul className="space-y-2">
                <li>Discord Server</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Licensing</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Download</h3>
              <ul className="space-y-2">
                <li>iOS</li>
                <li>Android</li>
                <li>Windows</li>
                <li>MacOS</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <div className="flex gap-4 text-white sm:justify-center pt-4">
              <FooterButton href="#" text="Facebook">
                <FacebookIcon/>
              </FooterButton>
              <FooterButton href="#" text="LinkedIn">
                <LinkedInIcon/>
              </FooterButton>
              <FooterButton href="#" text="Twitter">
                <XIcon/>
              </FooterButton>
              <FooterButton href="#" text="Instagram">
                <InstagramIcon/>
              </FooterButton>
              
            </div>
            <div className="text-center md:text-right mt-4 md:mt-0 text-sm">
              &copy; 2024 Cart4U. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }
