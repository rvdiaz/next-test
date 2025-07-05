"use client";

import { Instagram } from "lucide-react";
import { PageContainer } from "../../common/general_container";
import { clientInfo } from "../../core";

export const Footer = () => {
  return (
    <div className="bg-textcolor">
      <PageContainer>
        <div className="grid gap-[30px] md:gap-[50px] row-gap-[30px] py-[50px] md:py-[80px] grid-cols-1 md:groid-col-2 lg:grid-cols-4">
          <div className="sm:col-span-2 flex flex-col items-center md:items-start">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="assets/footer/logo.svg"
                alt="rose cleaning"
                className="w-[160px] lg:w-[222px]"
              />
            </a>
            <p className="text-center lg:text-left text-white w-[345px] text-[14px] leading-[23px] font-normal">
              Expert cleaning solutions for homes and business, ensuring
              spotless results with ease and care
            </p>
          </div>
          <div className="space-y-2 text-sm flex flex-col items-center md:items-start justify-center">
            <p className="text-base font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-white">Phone:</p>
              <a
                href={`tel:${clientInfo.phone}`}
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-white"
              >
                {clientInfo.phone}
              </a>
            </div>
            <div className="flex ">
              <p className="mr-1 text-white">Email:</p>
              <a
                href={`mailto:${clientInfo.email}`}
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-white"
              >
                {clientInfo.email}
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <span className="text-base font-bold tracking-wide text-white">
              Social
            </span>
            <div className="flex items-center mt-3 space-x-3">
              <a
                href={clientInfo.socialNetworks.instagram}
                className="text-white transition-colors duration-300"
              >
                <Instagram />
              </a>
            </div>
            <p className="mt-4 text-sm text-white">
              Follow us to stay updated on our offers and services.
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};
