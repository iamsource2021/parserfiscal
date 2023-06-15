/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBarCustomOverridesProps = {
    SideBarCustom?: PrimitiveOverrideProps<ViewProps>;
    "Soy parte de una generaci\u00F3n 37633096"?: PrimitiveOverrideProps<TextProps>;
    "Group 28"?: PrimitiveOverrideProps<ViewProps>;
    Divider37643181?: PrimitiveOverrideProps<DividerProps>;
    "EDUCACI\u00D3N37643175"?: PrimitiveOverrideProps<TextProps>;
    "Soy parte de una generaci\u00F3n 37643184"?: PrimitiveOverrideProps<TextProps>;
    "Group 29"?: PrimitiveOverrideProps<ViewProps>;
    Divider37643204?: PrimitiveOverrideProps<DividerProps>;
    "EDUCACI\u00D3N37643205"?: PrimitiveOverrideProps<TextProps>;
    IDEAL?: PrimitiveOverrideProps<TextProps>;
    "yo.jpg"?: PrimitiveOverrideProps<ImageProps>;
    "Group 30"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon37653209?: MyIconProps;
    "eduardooa1980@gmail.com"?: PrimitiveOverrideProps<TextProps>;
    "Group 31"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon37653228?: MyIconProps;
    "(33) 33026567"?: PrimitiveOverrideProps<TextProps>;
    "Group 32"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon37653310?: MyIconProps;
    "https://www.linkedin.com/in/eduardo-ortiz-792784204"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBarCustomProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SideBarCustomOverridesProps | undefined | null;
}>;
export default function SideBarCustom(props: SideBarCustomProps): React.ReactElement;
