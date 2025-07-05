"use client";

import { PageContainer } from "../../common/general_container";
import { PrimaryButton } from "../../common/primary_button";
import { SectionLabel } from "../../common/sections_label";
import { clientInfo, whyChooseUsData } from "../../core";

export const WhyChooseUs = () => {
  const { label, title, description, features, buttonText } = whyChooseUsData;

  return (
    <div id="whychooseus">
      <PageContainer>
        <section className="flex items-center justify-between flex-col-reverse md:flex-row gap-[10px] md:gap-[50px] lg:gap-[100px] mt-[20px] md:mt-0">
          <div className="relative flex flex-1 w-auto m-auto md:m-0 pr-[40%] md:pr-0">
            <div className="w-[200px] xl:w-[280px] 2xl:w-[365px] align-middle">
              <img
                src="/assets/why_choose_us/left.png"
                alt="Why choose Rose Cleaning Services"
              />
            </div>
            <div className="w-[200px] xl:w-[280px] 2xl:w-[365px] absolute top-[60px] lg:top-[100px] left-[40%] xl:left-auto md:left-auto right-auto md:right-[10px] lg:right-[20px] xl:right-0 z-[-1]">
              <img
                src="/assets/why_choose_us/right.png"
                alt="Why choose Rose Cleaning Services"
              />
            </div>
            <div className="absolute bottom-[-80px] lg:bottom-[-100px] left-[20%] w-[100px] lg:w-[120px] 2xl:w-[211px]">
              <img
                src="/assets/why_choose_us/single_logo.png"
                alt="Rose Cleaning Service logo"
              />
            </div>
          </div>
          <div className="py-8 m-0 lg:gap-8 md:w-1/2">
            <div className="drop-shadow-lg mr-auto place-self-center rounded-2xl">
              <SectionLabel label={label} />
              <div className="mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
                {title}
              </div>
              <p className="max-w-[650px] text-subTextColor text-[16px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-normal leading-[26px] md:leading-[18px] lg:leading-[26px] mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
                {description}
              </p>
              <div className="mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px] grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[14px] lg:gap-[20px] xl:gap-[30px]">
                {features.map((feat) => (
                  <div
                    className="flex items-center gap-[12px] xl:gap-[17px]"
                    key={feat.title}
                  >
                    {feat.icon}{" "}
                    <p className="text-DMSans text-textcolor text-[14px] xl:text-[20px] font-semibold leading-[26px]">
                      {feat.title}
                    </p>
                  </div>
                ))}
              </div>
              <PrimaryButton
                onClick={() => {
                  window.location.href = `tel:${clientInfo.phone}`;
                }}
                className="flex items-center gap-[9px]"
              >
                <img
                  className="h-[20px] w-[20px]"
                  src="assets/why_choose_us/call.svg"
                  alt="call"
                />
                {buttonText}
              </PrimaryButton>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  );
};
