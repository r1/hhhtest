import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Product from "./Product";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wrapper className="my-8 mx-8">
        <Product />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div``;
