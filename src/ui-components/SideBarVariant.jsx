/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SideBar from "./SideBar";
import { Flex } from "@aws-amplify/ui-react";
export default function SideBarVariant(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SideBarVariant")}
      {...rest}
    >
      <SideBar
        display="flex"
        gap="10px"
        direction="row"
        width="385px"
        height="762px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SideBarVariant37802886")}
      ></SideBar>
    </Flex>
  );
}
