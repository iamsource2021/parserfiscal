/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SideBarProps } from "./SideBar";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBarVariant2OverridesProps = {
    SideBarVariant2?: PrimitiveOverrideProps<FlexProps>;
    SideBarVariant237813084?: SideBarProps;
} & EscapeHatchProps;
export declare type SideBarVariant2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarVariant2OverridesProps | undefined | null;
}>;
export default function SideBarVariant2(props: SideBarVariant2Props): React.ReactElement;
