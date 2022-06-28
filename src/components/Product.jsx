import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

export default function Product() {
  return (
    <div className="max-w-sm mx-auto bg-white border-2 border-red-600">
      <img
        src="https://raw.githubusercontent.com/r1/hhh-test/main/public/images/1.png?token=GHSAT0AAAAAABNYHPCDEWGD76D7P6VG6246YV3JTJA"
        alt=""
      />
      <div className="flex flex-row py-4 px-6">
        <div className="">
          <img
            src="https://raw.githubusercontent.com/r1/hhh-test/main/public/images/1.png?token=GHSAT0AAAAAABNYHPCDEWGD76D7P6VG6246YV3JTJA"
            alt=""
            className="rounded-lg border-2 border-[#9A1320] w-[50rem]"
          />
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/r1/hhh-test/main/public/images/2.png?token=GHSAT0AAAAAABNYHPCDEWGD76D7P6VG6246YV3JTJA"
            alt=""
          />
        </div>
        <div>
          {" "}
          <img
            src="https://raw.githubusercontent.com/r1/hhh-test/main/public/images/3.png?token=GHSAT0AAAAAABNYHPCDEWGD76D7P6VG6246YV3JTJA"
            alt=""
          />
        </div>
        <div>
          {" "}
          <img
            src="https://raw.githubusercontent.com/r1/hhh-test/main/public/images/1.png?token=GHSAT0AAAAAABNYHPCDEWGD76D7P6VG6246YV3JTJA"
            alt=""
          />
        </div>
        <div>
          {" "}
          <img
            src="https://raw.githubusercontent.com/r1/hhh-test/main/public/images/1.png?token=GHSAT0AAAAAABNYHPCDEWGD76D7P6VG6246YV3JTJA"
            alt=""
          />
        </div>
        <div>
          {" "}
          <img
            src="https://raw.githubusercontent.com/r1/hhh-test/main/public/images/1.png?token=GHSAT0AAAAAABNYHPCDEWGD76D7P6VG6246YV3JTJA"
            alt=""
          />
        </div>
      </div>
      <div className="border-t mb-4">
        <h2>ENERGY</h2>
        <div></div>
        <div></div>

      </div>
    </div>
  );
}

const Wrapper = styled.div``;
