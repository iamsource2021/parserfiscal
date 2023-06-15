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
export declare type SideBarVariantOverridesProps = {
    SideBarVariant?: PrimitiveOverrideProps<FlexProps>;
    SideBarVariant37802886?: SideBarProps;
} & EscapeHatchProps;
export declare type SideBarVariantProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarVariantOverridesProps | undefined | null;
}>;
export default function SideBarVariant(props: SideBarVariantProps): React.ReactElement;
