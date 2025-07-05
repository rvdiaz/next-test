"use client";

import { useEffect, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { IReview } from ".";
import { PrimaryButton } from "../../common/primary_button";
import { clientInfo } from "../../core";

export const ReviewForm = (props: {
  onReviewAdded: (newReview: IReview) => void;
}) => {
  const { onReviewAdded } = props;

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

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (ratingForm: FieldValues) => {
    setLoadingSubmit(true);
    const clientHandler = clientInfo.clientHandler;
    const solution = clientInfo.solution;
    const ratingFormInput = {
      name: ratingForm.name,
      score: ratingForm.ratingScore,
      organization: ratingForm.organization,
      message: ratingForm.message ?? "",
    };

    //const url = import.meta.env.VITE_APP_GRAPHQL_API_ENDPOINT;
    const url = "";
    const query = `
      mutation createReview($tenant: TenantData!, $input: ReviewInput!) {
        createReview(tenant: $tenant, input: $input) {
          _id
          message
          name
          organization
          score
          status
        }
      }
    `;

    const variables = {
      tenant: {
        tenantId: clientHandler,
        solutionId: solution,
      },
      input: ratingFormInput,
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

      const { data } = await response.json();

      if (response.ok && !data.errors) {
        onReviewAdded(data.createReview);
        setValue("ratingScore", 0);
        reset();
        setLoadingSubmit(false);
        setConfirmation("Thanks for you review");
        return {
          statusCode: 200,
          body: "Contact form submitted successfully.",
        };
      } else {
        setValue("ratingScore", 0);
        reset();
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
      setValue("ratingScore", 0);
      reset();
      setLoadingSubmit(false);
    }
  };

  return (
    <div className="p-10">
      <h3 className="font-sans text-textcolor text-[32px] md:text-[18px] lg:text-[32px] xl:text-[32px] font-semibold leading-[45px] md:leading-[30px] lg:leading-[45px] xl:leading-[45px]">
        Share Your Experience with Our
        <span className="ml-[10px] font-sansSerif italic">
          Cleaning Services
        </span>
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[16px]">
        <div className="flex flex-col mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
          <label className="inline-block mb-[8px] text-[14px] leading-[20px] font-normal text-subTextColor">
            Rating
          </label>
          <div
            className="flex items-center justify-between"
            style={{
              direction: "ltr",
              fontFamily: "sans-serif",
              touchAction: "none",
            }}
          >
            <Controller
              name="ratingScore"
              control={control}
              rules={{
                required: "Fill your rating score",
              }}
              render={() => (
                <Rating
                  fillColorArray={[
                    "#f14f45",
                    "#f16c45",
                    "#f18845",
                    "#f1b345",
                    "#f1d045",
                  ]}
                  onClick={(rate: number) => {
                    setValue("ratingScore", rate);
                  }}
                  initialValue={watch("ratingScore")}
                  transition
                />
              )}
            />
            {!watch("ratingScore") && errors.ratingScore && (
              <span className="text-redColor font-semibold text-[16px]">
                {errors.ratingScore.message as string}
              </span>
            )}
          </div>
        </div>
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
            Organization
          </label>
          <input
            className="text-[16px] leading-[24px] placeholder:text-borderNeutralColor font-normal flex-grow w-full h-[48px] md:h-[34px] lg:h-[48px] xl:h-[64px] px-4 transition duration-200 bg-white border border-borderNeutralColor rounded-[8px] appearance-none focus:border-primary focus:outline-none focus:shadow-outline"
            {...register("organization", {
              required: "Organization is required",
            })}
            placeholder="Organization"
            type="text"
          />
          {errors.organization && (
            <span className="absolute right-0 bottom-[-30px] text-redColor font-semibold text-[16px]">
              {errors.organization.message as string}
            </span>
          )}
        </div>

        <div className="relative mb-[16px] md:mb-[12px] lg:mb-[16px] xl:mb-[24px]">
          <label className="inline-block mb-[8px] text-[14px] leading-[20px] font-normal text-subTextColor">
            Your Review
          </label>
          <textarea
            {...register("message", {
              required: "Message is mandatory",
            })}
            placeholder="Please describe your experience with our cleaning services."
            className="max-h-[104px] text-[16px] leading-[24px] placeholder:text-borderNeutralColor font-normal flex-grow w-full p-4 transition duration-200 bg-white border border-borderNeutralColor rounded-[8px] appearance-none focus:border-primary focus:outline-none focus:shadow-outline"
          />
          {errors.message && (
            <span className="absolute right-0 bottom-[-25px] text-redColor font-semibold text-[16px]">
              {errors.message.message as string}
            </span>
          )}
        </div>
        <div className="">
          <PrimaryButton
            className="min-w-[200px] flex items-center justify-center"
            loading={loadingSubmit}
            type="submit"
          >
            Send Review
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
  );
};
