/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeNewsOverridesProps = {
    HomeNews?: PrimitiveOverrideProps<ViewProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Card34572929?: PrimitiveOverrideProps<FlexProps>;
    Card34572930?: PrimitiveOverrideProps<FlexProps>;
    Card34572931?: PrimitiveOverrideProps<FlexProps>;
    Card34572932?: PrimitiveOverrideProps<FlexProps>;
    Card34572933?: PrimitiveOverrideProps<FlexProps>;
    Card34572934?: PrimitiveOverrideProps<FlexProps>;
    Card34572935?: PrimitiveOverrideProps<FlexProps>;
    Card34572936?: PrimitiveOverrideProps<FlexProps>;
    Card34572937?: PrimitiveOverrideProps<FlexProps>;
    Card34572938?: PrimitiveOverrideProps<FlexProps>;
    Card34572939?: PrimitiveOverrideProps<FlexProps>;
    Card34572940?: PrimitiveOverrideProps<FlexProps>;
    "NavBar/Variant2"?: PrimitiveOverrideProps<FlexProps>;
    SideBar?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type HomeNewsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomeNewsOverridesProps | undefined | null;
}>;
export default function HomeNews(props: HomeNewsProps): React.ReactElement;
