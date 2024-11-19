/* eslint-disable @next/next/no-html-link-for-pages */
import { Logo } from "../Logo/Logo";
import { Twitter } from "lucide-react";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { EmailIcon } from "../Icons/EmailIcon";
import { MapIcon } from "../Icons/MapIcon";
import { BrowseIcon } from "../Icons/BrowseIcon";
import Link from "next/link";
import { Container } from "../layout/Container";

export default function Footer() {
  return (
    <footer className="bg-green-100 relative z-50 px-4 lg:px-0 lg:pt-20 pt-12 pb-6 lg:pb-12 mt-12 rounded-3xl">
      <Container>
        <div className="lg:flex justify-between ">
          {/* Left Section */}
          <div>
            <Logo />

            <p className=" text-gray-700 mt-5">
              Get the best Features on Google Play Store and App Store
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a
                href="#"
                className="text-gray-600 hover:text-green-600"
                target="_blank"

              >
                <FacebookIcon />
              </a>
              <a
                href="https://x.com/ndukahealth"
                className="text-gray-600 hover:text-green-600"
                target="_blank"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/nduka-health"
                className="text-gray-600 hover:text-green-600"
                target="_blank"

              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="lg:flex justify-between lg:space-x-44 mt-8">
            {/* Middle Section */}
            <div>
              <h3 className="text-gray-800 font-semibold text-lg">Company</h3>
              <ul className="mt-4 space-y-2 lg:space-y-4">
                <li>
                  <a href="/" className="text-gray-600 hover:text-green-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#About" className="text-gray-600 hover:text-green-600">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/#Feature" className="text-gray-600 hover:text-green-600">
                    Features
                  </a>
                </li>
                <li>
                  <Link href="/#Testimonials" className="text-gray-600 hover:text-green-600">
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="mt-6 lg:mt-0">
              <h3 className="text-gray-800 font-semibold text-lg">
                Contact Information
              </h3>
              <ul className="mt-4 space-y-2 lg:space-y-3">
                <li className="flex items-center space-x-2">
                  <PhoneIcon />
                  <span className="text-gray-600">+234 534 5455</span>
                </li>
                <li className="flex items-center space-x-2">
                  <EmailIcon />
                  <span className="text-gray-600">contact@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapIcon />
                  <span className="text-gray-600">
                    123 Thompson Bridge Awka
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <BrowseIcon />
                  <Link href="/" className="text-gray-600">Ndukahealth.com</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 lg:mt-12 lg:px-12 rounded-2xl lg:rounded-full bg-white px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="mt-4 md:mt-0 text-center text-gray-600 text-sm">
            Copyright © 2024 Nduka Company. All rights reserved.
          </p>

          <div className="lg:flex space-x-4 lg:mt-0 mt-8 text-sm lg:text-base">
            <a
              href="privacy-policy"
              className="text-gray-600 hover:text-green-600"
            >
              Privacy Policy
            </a>
            <a
              href="terms-and-condition"
              className="text-gray-600 hover:text-green-600"
            >
              Terms and Conditions
            </a>
          </div>
        </div>

      </Container>
    </footer>
  );
};
