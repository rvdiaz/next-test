"use client";

import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { PageContainer } from "../../common/general_container";
import { PrimaryButton } from "../../common/primary_button";
import { clientInfo, servicesData } from "../../core";

export const ContactForm = () => {
  const servicesItems = servicesData.servicesItems;

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    const time = setTimeout(() => {
      setConfirmation("");
    }, 4000);

    return () => {
      clearTimeout(time);
    };
  }, [confirmation]);

  const selectorOptions = servicesItems.map((ser) => ({
    label: ser.title,
    value: ser.title,
  }));

  selectorOptions.push({
    label: "Other",
    value: "Other",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataForm: FieldValues) => {
    setLoadingSubmit(true);
    const clientHandler = clientInfo.clientHandler;
    const solution = clientInfo.solution;
    const formData = {
      name: dataForm.name,
      email: dataForm.email,
      message: dataForm.message ?? "",
    };

    //const url = import.meta.env.VITE_APP_GRAPHQL_API_ENDPOINT;
    const url = "";
    const query = `
      mutation contactSubmission($tenant: TenantData!, $formData: ContactFormData!){
        contactSubmission(tenant: $tenant, formData: $formData)
      }
    `;

    const variables = {
      formData,
      tenant: {
        solutionId: solution,
        tenantId: clientHandler,
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "domain-origin": "roseTopCleaning.info",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      });

      const data = await response.json();

      if (response.ok && data) {
        setLoadingSubmit(false);
        setConfirmation("We'll get in touch with you soon.");
        reset();
        return {
          statusCode: 200,
          body: "Contact form submitted successfully.",
        };
      } else {
        setLoadingSubmit(false);
        console.error("Error:", data.errors);
        return {
          statusCode: 500,
          body: `Error: ${data.errors[0].message}`,
        };
      }
    } catch (error) {
      console.error("Fetch error:", error);
      return {
        statusCode: 500,
        body: "An error occurred while sending the request.",
      };
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <div id="contact" className="bg-surfaceColor">
      <PageContainer>
        <div className="py-16 mx-auto lg:py-20">
          <div className="bg-white rounded-[16px] grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="flex-1 px-[40px] lg:px-[60px] py-[40px] md:py-[20px] xl:py-[60px]">
              <div>
                <h1 className="font-sans text-textcolor text-[36px] md:text-[24px] lg:text-[36px] xl:text-[64px] font-semibold leading-[45px] md:leading-[30px] lg:leading-[45px] xl:leading-[67px]">
                  Get
                  <span className="ml-[10px] font-sansSerif italic">
                    in touch
                  </span>
                </h1>
                <p className="max-w-[650px] text-subTextColor text-[16px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-normal leading-[26px] md:leading-[18px] lg:leading-[26px] mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
                  We take pride in delivering top-quality cleaning services
                  tailored to your needs.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
                    <label className="inline-block mb-[8px] text-[14px] leading-[20px] font-normal text-subTextColor">
                      Name
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="name"
                      type="text"
                      className="text-[16px] leading-[24px] placeholder:text-borderNeutralColor font-normal flex-grow w-full h-[48px] md:h-[34px] lg:h-[48px] xl:h-[64px] px-4 transition duration-200 bg-white border border-borderNeutralColor rounded-[8px] appearance-none focus:border-primary focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && (
                      <span className="absolute right-0 bottom-[-30px] text-redColor font-semibold text-[16px]">
                        {errors.name.message as string}
                      </span>
                    )}
                  </div>
                  <div className="relative mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
                    <label className="inline-block mb-[8px] text-[14px] leading-[20px] font-normal text-subTextColor">
                      Email
                    </label>
                    <input
                      className="text-[16px] leading-[24px] placeholder:text-borderNeutralColor font-normal flex-grow w-full h-[48px] md:h-[34px] lg:h-[48px] xl:h-[64px] px-4 transition duration-200 bg-white border border-borderNeutralColor rounded-[8px] appearance-none focus:border-primary focus:outline-none focus:shadow-outline"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      placeholder="name@gmail.com"
                      type="email"
                    />
                    {errors.email && (
                      <span className="absolute right-0 bottom-[-30px] text-redColor font-semibold text-[16px]">
                        {errors.email.message as string}
                      </span>
                    )}
                  </div>

                  <div className="mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
                    <label className="inline-block mb-[8px] text-[14px] leading-[20px] font-normal text-subTextColor">
                      Message (Optional)
                    </label>
                    <textarea
                      {...register("message")}
                      placeholder="Details about expected service"
                      className="max-h-[104px] text-[16px] leading-[24px] placeholder:text-borderNeutralColor font-normal flex-grow w-full p-4 transition duration-200 bg-white border border-borderNeutralColor rounded-[8px] appearance-none focus:border-primary focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="">
                    <PrimaryButton
                      className="min-w-[200px] flex items-center justify-center"
                      loading={loadingSubmit}
                      type="submit"
                    >
                      Send Message
                    </PrimaryButton>

                    {confirmation && (
                      <div
                        className="mt-[16px] p-[10px] text-base text-successColor rounded-lg bg-green-50"
                        role="alert"
                      >
                        <span className="text-[14px] lg:text-[18px] xl:text-[20px]">
                          {confirmation}
                        </span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div>
              <img
                className="object-cover h-[500px] lg:h-[600px] xl:h-[820px] w-full rounded-bl-[16px] rounded-br-[16px] md:rounded-bl-0 md:rounded-tr-[16px] md:rounded-br-[16px]"
                src="assets/contact/contact.png"
                alt="Contect Rose Cleaning"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};
