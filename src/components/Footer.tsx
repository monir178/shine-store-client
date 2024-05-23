import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-4 mt-6">
      <hr className="my-4 border-green-400" />
      <div className=" mx-auto pb-10 ">
        <div className="grid grid-cols-2 lg:grid-cols-3 pt-10 gap-y-16 uppercase tracking-wide">
          <div>
            <h5 className="font-semibold mb-2 text-green-400">
              Shop Categories
            </h5>
            <ul className="list-none  space-y-1">
              <li>
                <Link
                  href="/flash-sale"
                  className="hover:scale-110 underline-offset-2 underline text-blue-500">
                  <small>Flash Sale Products</small>
                </Link>
              </li>
              <li>
                <small>Pest Controllers</small>
              </li>
              <li>
                <small>Toilet Cleaners</small>
              </li>
              <li>
                <small>Bug Spray</small>
              </li>
              <li>
                <small>Home Cleaners</small>
              </li>
              <li>
                <small>Napkins</small>
              </li>
            </ul>
          </div>
          <div className="lg:ml-20">
            <h5 className="font-semibold mb-2 text-green-400">
              Customer Service
            </h5>
            <ul className="list-none  space-y-1">
              <li>
                <small>Contact Us</small>
              </li>
              <li>
                <small>Shipping Policy</small>
              </li>
              <li>
                <small>Returns and Exchange</small>
              </li>

              <li>
                <small>Terms & Conditions</small>
              </li>
              <li>
                <small>FAQs</small>
              </li>
            </ul>
          </div>
          <div className="normal-case lg:justify-self-end">
            <h5 className="font-semibold mb-2 uppercase text-green-400">
              Contact Us
            </h5>
            <ul className="list-none  space-y-1">
              <li className="flex gap-4 items-center"></li>
              <li>
                <p className="leading-4">
                  <small>example@gmail.com</small> <br />
                  <small>+88004493898943</small>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-green-400" />

        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="md:text-right mb-4 md:mb-0 text-green-400">
            <small> @ 2024. All rights reserved.</small>
          </div>
          <div className="flex flex-wrap justify-between gap-6">
            <small>Terms</small>
            <small>Privacy</small>
            <small>Contact</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
