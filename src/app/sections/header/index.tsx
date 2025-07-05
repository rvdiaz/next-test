"use client";

import { PageContainer } from "../../common/general_container";
import { PrimaryButton } from "../../common/primary_button";
import { SectionLabel } from "../../common/sections_label";
import { clientInfo, headerText } from "../../core";

export const Header = () => {
  const { label, title, description, buttonText } = headerText;

  // Create a mailto link with optional subject and body
  const mailtoLink = `mailto:${clientInfo.email}?subject=${encodeURIComponent(
    "Cleaning Service Inquiry"
  )}&body=${encodeURIComponent(
    "Hello, I'm interested in your cleaning services. Please let me know more details."
  )}`;

  return (
    <div id="header" className="bg-surfaceColor pb-[5px] md:pb-0">
      <PageContainer>
        <section className="mb-[50px] lg:mb-[100px] mt-[80px] md:mt-[100px] flex items-center justify-between flex-col md:flex-row gap-[10px] md:gap-[50px] lg:gap-[100px]">
          <div className="m-0 lg:gap-8 xl:gap-0 xl:py-[100px] lg:grid-cols-12">
            <div className="drop-shadow-lg mr-auto place-self-center py-[40px] md:py-[80px] rounded-2xl">
              <SectionLabel label={label} />
              <div className="mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
                {title}
              </div>
              <p className="max-w-[650px] text-subTextColor text-[16px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-semibold leading-[26px] md:leading-[18px] lg:leading-[26px] mb-[16px] md:mb-[8px] lg:mb-[16px] xl:mb-[24px]">
                {description}
              </p>

              <PrimaryButton
                onClick={() => {
                  window.location.href = mailtoLink;
                }}
              >
                {buttonText}
              </PrimaryButton>
            </div>
          </div>
          <div>
            <img src="/assets/header/main.png" alt="Rose Cleaning Services" />
          </div>
        </section>
      </PageContainer>
    </div>
  );
};
