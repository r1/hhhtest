import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

export default function Product() {
  return (
    <div className="max-w-sm mx-auto bg-white overflow-auto">
      <img src="https://hhh-test.vercel.app/images/1.png" alt="" />
      <div className="grid grid-cols-6 py-4 px-3">
        <div>
          <img
            src="https://hhh-test.vercel.app/images/1.png"
            alt=""
            className="rounded-[4px] w-[3rem] border border-[#9A1320]"
          />
        </div>
        <div>
          <img
            src="https://hhh-test.vercel.app/images/2.png"
            alt=""
            className="rounded-[4px] w-[3rem]"
          />
        </div>
        <div>
          <img
            src="https://hhh-test.vercel.app/images/3.png"
            alt=""
            className="rounded-[4px] w-[3rem]"
          />
        </div>
        <div>
          <img
            src="https://hhh-test.vercel.app/images/4.png"
            alt=""
            className="rounded-[4px] w-[3rem]"
          />
        </div>
        <div>
          <img
            src="https://hhh-test.vercel.app/images/4.png"
            alt=""
            className="rounded-[4px] w-[3rem]"
          />
        </div>
        <div className="mr-3">
          <img
            src="https://hhh-test.vercel.app/images/4.png"
            alt=""
            className="rounded-[4px] w-[3rem]"
          />
        </div>
      </div>
      <div className="border-t mb-4 py-4 px-5">
        <h2 className="leaguegothic-regular text-[2.7rem] leading-none text-[#9A1320]">
          ENERGY
        </h2>
        <div className="flex flex-row mt-1 items-center space-x-3">
          <div className="flex flex-row space-x-1">
            <svg
              width="18"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.3125L7.2124 6.61865L0.375 7.3313L5.48828 11.9404L4.04883 18.6875L10 15.2268L15.9512 18.6875L14.5117 11.9404L19.625 7.3313L12.7876 6.61865L10 0.3125Z"
                fill="#FF542F"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.3125L7.2124 6.61865L0.375 7.3313L5.48828 11.9404L4.04883 18.6875L10 15.2268L15.9512 18.6875L14.5117 11.9404L19.625 7.3313L12.7876 6.61865L10 0.3125Z"
                fill="#FF542F"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.3125L7.2124 6.61865L0.375 7.3313L5.48828 11.9404L4.04883 18.6875L10 15.2268L15.9512 18.6875L14.5117 11.9404L19.625 7.3313L12.7876 6.61865L10 0.3125Z"
                fill="#FF542F"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.3125L7.2124 6.61865L0.375 7.3313L5.48828 11.9404L4.04883 18.6875L10 15.2268L15.9512 18.6875L14.5117 11.9404L19.625 7.3313L12.7876 6.61865L10 0.3125Z"
                fill="#FF542F"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M10 0.3125L7.2124 6.61865L0.375 7.3313L5.48828 11.9404L4.04883 18.6875L10 15.2268L15.9512 18.6875L14.5117 11.9404L19.625 7.3313L12.7876 6.61865L10 0.3125Z"
                fill="#FF542F"
              />
            </svg>
          </div>
          <span className="underline decoration-2 hkgrotesk-semibold text-[1.1rem] leading-1 text-[#9A1320] overflow-auto">
            4503 Reviews
          </span>
        </div>
        <div className="flex flex-col mt-2">
          <h2 className="hkgrotesk-semibold text-lg text-[#9A1320]">
            For natural crash-free energy.
          </h2>
          <h3 className="mt-1 hkgrotesk-regular text-md text-[#8C595E]">
            + A targeted blend of 11 nutrients
          </h3>
          <h3 className="hkgrotesk-regular text-md text-[#8C595E]">
            + 60 vegan gummies - 30 day supply
          </h3>
          <h3 className="hkgrotesk-regular text-md text-[#8C595E]">
            + Natural rasberry flavour
          </h3>
          <div className="mt-4 space-y-3">
            <div class="flex items-center border border-[#E5E9EA] py-3 px-3 rounded-lg">
              <input type="checkbox" value="" className="checkmark" />
              <label class="text-[#9A1320] ml-2 text-lg hkgrotesk-semibold">
                One-time Purchase
              </label>
              <div className="flex flex-col leading-5 ml-14 items-center">
                <label className="text-[#9A1320] text-lg justify-end hkgrotesk-semibold">
                  £18.99
                </label>
                <label className="text-[#9A1320] text-[0.55rem] leading-3 justify-end hkgrotesk-semibold">
                  ONE-TIME
                </label>
              </div>
            </div>
            <div className="border border-[#FF542F] rounded-lg">
              <div className="flex items-center py-3 px-3">
                <input
                  type="checkbox"
                  value=""
                  className="checkmark"
                  checked="checked"
                />
                <label class="text-[#9A1320] ml-2 text-lg hkgrotesk-semibold">
                  Subscribe & Save 10%
                </label>
                <div className="flex flex-col leading-5 ml-9 items-center">
                  <label className="text-[#9A1320] text-lg justify-end hkgrotesk-semibold">
                    £16.99
                  </label>
                  <label className="text-[#9A1320] text-[0.55rem] leading-3 justify-end hkgrotesk-semibold">
                    PER MONTH
                  </label>
                </div>
              </div>
              <div className="flex flex-row bg-[#FF542F] items-center py-1 justify-center space-x-4 rounded-b-[5px] w-full">
                <div className="flex items-center space-x-2">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <rect
                        x="0.830566"
                        y="0.989014"
                        width="19.8203"
                        height="19.8203"
                        rx="9.91016"
                        fill="#ff6b3e"
                      />
                    </g>
                    <path
                      d="M15.344 6.85742L9.3337 12.8677L6.13755 9.67158L5.1427 10.6664L9.3337 14.8574L16.3389 7.85227L15.344 6.85742Z"
                      fill="white"
                    />
                  </svg>

                  <span className="uppercase text-white hkgrotesk-semibold text-xs">
                    Cancel Anytime
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <rect
                        x="0.830566"
                        y="0.989014"
                        width="19.8203"
                        height="19.8203"
                        rx="9.91016"
                        fill="#ff6b3e"
                      />
                    </g>
                    <path
                      d="M15.344 6.85742L9.3337 12.8677L6.13755 9.67158L5.1427 10.6664L9.3337 14.8574L16.3389 7.85227L15.344 6.85742Z"
                      fill="white"
                    />
                  </svg>

                  <span className="uppercase text-white hkgrotesk-semibold text-xs">
                    Free Delivery
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-[#FF542F] rounded-full w-full items-center py-2 text-white hkgrotesk-semibold">
              Add to Cart <span className="hkgrotesk-regular">(£16.99)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Wrapper = styled.div``;
