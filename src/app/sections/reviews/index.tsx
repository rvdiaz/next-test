"use client";

import { PageContainer } from "../../common/general_container";
import { DialogFrame } from "../../common/dialog_frame";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { ReviewForm } from "./review_form";
import { ReviewCardSkeletons } from "./reviews_card_skeleton";
import { clientInfo } from "../../core";

export interface IReview {
  _id: string;
  name: string;
  organization: string;
  score: number;
  message: string;
  status: string;
}

export const Reviews = () => {
  const reviewLimitAmount = 6;

  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(false);

  const onReviewAdded = (newReview: IReview) => {
    setReviews((prev) => [...prev, newReview]);
  };

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      const clientHandler = clientInfo.clientHandler;
      const solution = clientInfo.solution;
      //const url = import.meta.env.VITE_APP_GRAPHQL_API_ENDPOINT;
      const url = "";
      const query = `
        query getReview($tenant: TenantData!) {
          getReviews(tenant: $tenant) {
            _id
            message
            name
            createdAt
            organization
            score
            status
          }
        }
      `;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "domain-origin": "roseTopCleaning.info",
          },
          body: JSON.stringify({
            query: query,
            variables: {
              tenant: {
                tenantId: clientHandler,
                solutionId: solution,
              },
            },
          }),
        });

        const { data } = await response.json();

        if (response.ok && !data.errors) {
          setReviews(data.getReviews);
          setLoading(false);

          return {
            statusCode: 200,
            body: "Contact form submitted successfully.",
          };
        } else {
          setLoading(false);
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
        setLoading(false);
      }
    };

    getReviews();
  }, []);

  const approvedReviews =
    reviews?.filter((rev) => rev?.status === "approved") ?? [];

  return (
    <div className="mt-[50px] md:mt-[80px] lg:mt-[100px] bg-textcolor py-[80px] lg:py-[100px]">
      <PageContainer>
        {showModal && (
          <DialogFrame
            onClose={() => {
              setShowModal(false);
            }}
          >
            <ReviewForm onReviewAdded={onReviewAdded} />
          </DialogFrame>
        )}
        <h1 className="text-center font-sans text-white text-[36px] md:text-[24px] lg:text-[36px] xl:text-[64px] font-semibold leading-[45px] md:leading-[30px] lg:leading-[45px] xl:leading-[67px] mb-[60px]">
          Trusted by thousand <br />
          of
          <span className="ml-[10px] font-sansSerif italic">
            people & companies
          </span>
        </h1>
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-[19px]">
            <ReviewCardSkeletons />
            <ReviewCardSkeletons />
            <ReviewCardSkeletons />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-[19px]">
            {approvedReviews.length !== 0 &&
              approvedReviews.map(
                (rev, index) =>
                  index < reviewLimitAmount && (
                    <div key={rev._id} className="bg-white rounded-[16px]">
                      <div className="flex flex-col justify-center">
                        <div className="p-[20px] flex items-center justify-between">
                          <div>
                            {" "}
                            <p className="text-textColor leading-[31px] text-[18px] md:text-[24px] font-semibold">
                              {rev.name}
                            </p>
                            <p className="uppercase text-neutralGray leading-[24px] text-[14px] md:text-[16px] font-normal">
                              {rev.organization}
                            </p>
                          </div>
                          <div
                            style={{
                              direction: "ltr",
                              fontFamily: "sans-serif",
                              touchAction: "none",
                            }}
                          >
                            <Rating
                              fillColorArray={[
                                "#f14f45",
                                "#f16c45",
                                "#f18845",
                                "#f1b345",
                                "#f1d045",
                              ]}
                              size={20}
                              initialValue={rev.score}
                              readonly
                            />
                          </div>
                        </div>
                        <div className="border-t-[1px] border-borderNeutralColor px-[24px] md:px-[32px] py-[20px]">
                          <p className="text-DMSans text-[16px] md:text-[20px] text-textColor font-light leading-[20px] md:leading-[30px]">
                            {rev.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
              )}
          </div>
        )}

        <div className="mt-[24px] flex justify-center">
          <button
            className="cursor-pointer rounded-[16px] border border-white p-[10px] text-white"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Write a Review
          </button>
        </div>
      </PageContainer>
    </div>
  );
};
