"use client";

import { PageContainer } from "../../common/general_container";
import { PrimaryButton } from "../../common/primary_button";
import { SectionLabel } from "../../common/sections_label";
import { servicesData } from "../../core";

export const Services = () => {
  const { servicesItems, label, title } = servicesData;

  return (
    <div id="ourservices" className="mt-[120px] md:mt-[150px]">
      <PageContainer>
        <div className="flex flex-col items-start md:items-center">
          <SectionLabel label={label} />
          <div className="mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
            {title}
          </div>
          <p className="text-start md:text-center max-w-[850px] text-subTextColor text-[16px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-normal leading-[26px] md:leading-[18px] lg:leading-[26px] mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
            {servicesData.description}
          </p>
          <div className="mt-[30px] lg:mt-[60px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {servicesItems.map((ser) => (
              <div
                key={ser.title}
                className="relative bg-white border border-borderColor rounded-[16px]"
              >
                <div className="relative w-full h-[260px] xl:h-[291px]">
                  <div
                    className="absolute right-[20px] bottom-[-20px] h-[52px] w-[52px] rounded-[20px] flex items-center justify-center"
                    style={{
                      backgroundColor: ser.bgColor,
                    }}
                  >
                    <img src={ser.icon} alt={ser.title} />
                  </div>
                  <img
                    className="w-full h-full object-cover rounded-tl-[16px] rounded-tr-[16px] rounded-br-0 rounded-bl-0"
                    src={ser.imgUrl}
                    alt={ser.title}
                  />
                </div>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-primary font-semibold leading-[32px] mb-[12px] text-[24px]">
                      {ser.title}
                    </h5>
                  </a>
                  <p className="text-textcolor font-normal text-[16px] leading-[23px] mb-[24px]">
                    {ser.description}
                  </p>
                  <div className="flex flex-col items-center gap-[16px]">
                    {ser.actions.map((action, index) => (
                      <div
                        key={index}
                        className="flex gap-[10px] items-center justify-start w-full"
                      >
                        <div className="w-[14px]">
                          <img
                            className="w-full h-full"
                            src="assets/services/ok.svg"
                            alt=""
                          />
                        </div>
                        <span className="flex-1 text-[16px] text-neutralGray text-normal leading-[23px]">
                          {" "}
                          {action}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[30px] md:mt-[60px] flex items-center justify-center flex-col md:flex-row gap-[16px] md:gap-[20px] self-center">
            <p className="text-center text-subTextColor text-[14px] lg:text-[18px] xl:text-[20px] font-semibold leading-[26px]]">
              {servicesData.footerText}
            </p>
            <PrimaryButton
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              {servicesData.footerButtonText}
            </PrimaryButton>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};
