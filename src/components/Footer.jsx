import React from "react";
import { Footer as Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Compnaylogo from "../../public/images/Icon.png";

const CustomFooter = () => {
  return (
    <Footer>
      <div className="w-full">
        <div className="grid  w-11/12 mx-auto  justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div data-aos="fade-up" className="space-y-4 mt-4 mb-8">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={Compnaylogo}
                alt="logo"
                className="w-10 inline-block items-center"
              />
              <span className="text-[#263238]">NEXTCENT</span>
            </a>
            <div>
              <p className="mb-1">Copyright © 2020 Landify UI Kit.</p>
              <p>All rights reserved</p>
            </div>
            <div className=" flex space-x-6">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div data-aos="fade-up" data-aos-delay="200">
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div data-aos="fade-up" data-aos-delay="250">
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex place-content-center sm:place-content-start p-4">
          <Footer.Copyright href="#" by="sengcode™" year={2024} />
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
