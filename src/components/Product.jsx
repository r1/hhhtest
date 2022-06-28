import React, { useState } from "react";
import styled from "styled-components";

export default function Product() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="mx-auto max-w-sm overflow-auto bg-white">
      <img src="https://hhh-test.vercel.app/images/1.png" alt="" />
      <div className="grid grid-cols-6 py-4 px-3">
        <button>
          <img
            src="https://hhh-test.vercel.app/images/1.png"
            alt=""
            className="w-[3rem] rounded-[4px] border border-[#9A1320]"
          />
        </button>
        <button>
          <img
            src="https://hhh-test.vercel.app/images/2.png"
            alt=""
            className="w-[3rem] rounded-[4px]"
          />
        </button>
        <button>
          <img
            src="https://hhh-test.vercel.app/images/3.png"
            alt=""
            className="w-[3rem] rounded-[4px]"
          />
        </button>
        <button>
          <img
            src="https://hhh-test.vercel.app/images/placeholder.png"
            alt=""
            className="w-[3rem] rounded-[4px]"
          />
        </button>
        <button>
          <img
            src="https://hhh-test.vercel.app/images/placeholder.png"
            alt=""
            className="w-[3rem] rounded-[4px]"
          />
        </button>
        <button>
          <img
            src="https://hhh-test.vercel.app/images/placeholder.png"
            alt=""
            className="w-[3rem] rounded-[4px]"
          />
        </button>
      </div>
      <div className="mb-4 border-t px-5 pt-4">
        <h2 className="leaguegothic-regular text-[2.7rem] leading-none text-[#9A1320]">
          ENERGY
        </h2>
        <div className="mt-1 flex flex-row items-center space-x-3">
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
          <a
            href="/"
            className="hkgrotesk-semibold leading-1 overflow-auto text-[1rem] text-[#9A1320] underline decoration-[#9a132083] decoration-2"
          >
            4503 Reviews
          </a>
        </div>
        <div className="mt-2 flex flex-col">
          <h2 className="hkgrotesk-semibold text-lg text-[#9A1320]">
            For natural crash-free energy.
          </h2>
          <h3 className="hkgrotesk-regular text-md mt-1 text-[#8C595E]">
            + A targeted blend of 11 nutrients
          </h3>
          <h3 className="hkgrotesk-regular text-md text-[#8C595E]">
            + 60 vegan gummies - 30 day supply
          </h3>
          <h3 className="hkgrotesk-regular text-md text-[#8C595E]">
            + Natural rasberry flavour
          </h3>
          <div className="mt-4 space-y-3">
            <div
              className="flex cursor-pointer select-none items-center rounded-lg border border-[#E5E9EA] py-4 px-3"
              onClick={() => setChecked(!checked)}
            >
              <input
                type="checkbox"
                value=""
                className="checkmark"
                checked={checked}
              />
              <label className="hkgrotesk-semibold ml-2 cursor-pointer text-lg text-[#9A1320]">
                One-time Purchase
              </label>
              <div className="mr-0 ml-auto flex flex-col items-center">
                <span className="hkgrotesk-semibold cursor-pointer justify-end text-lg leading-6 text-[#9A1320]">
                  £18.<span className="text-sm">99</span>
                </span>
                <span className="hkgrotesk-semibold cursor-pointer justify-end text-[0.55rem] leading-3 text-[#9A1320]">
                  ONE-TIME
                </span>
              </div>
            </div>
            <div
              className="cursor-pointer select-none rounded-lg border border-[#FF542F]"
              onClick={() => setChecked2(!checked2)}
            >
              <div className="flex items-center py-3 px-4">
                <input
                  type="checkbox"
                  value=""
                  className="checkmark"
                  checked={checked2}
                />
                <label className="hkgrotesk-semibold ml-2 cursor-pointer select-none text-lg text-[#9A1320]">
                  Subscribe & Save 10%
                </label>
                <div className="mr-0 ml-auto flex flex-col items-center">
                  <span className="hkgrotesk-semibold cursor-pointer justify-end text-lg leading-6 text-[#9A1320]">
                    £16.<span className="text-sm">99</span>
                  </span>
                  <span className="hkgrotesk-semibold cursor-pointer justify-end text-[0.55rem] leading-3 text-[#9A1320]">
                    PER MONTH
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-row items-center justify-center space-x-4 rounded-b-[5px] bg-[#FF542F] py-1">
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

                  <span className="hkgrotesk-semibold text-xs uppercase text-white">
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

                  <span className="hkgrotesk-semibold text-xs uppercase text-white">
                    Free Delivery
                  </span>
                </div>
              </div>
            </div>
            <button className="hkgrotesk-semibold w-full items-center rounded-full bg-[#FF542F] py-2 text-white">
              Add to Cart <span className="hkgrotesk-regular">(£16.99)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Wrapper = styled.div``;
