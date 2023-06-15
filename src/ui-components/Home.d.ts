/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeOverridesProps = {
    Home?: PrimitiveOverrideProps<FlexProps>;
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "NavBar/Variant2"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Card18322247?: PrimitiveOverrideProps<FlexProps>;
    Card18322177?: PrimitiveOverrideProps<FlexProps>;
    Card18322142?: PrimitiveOverrideProps<FlexProps>;
    Card18322212?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type HomeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HomeOverridesProps | undefined | null;
}>;
export default function Home(props: HomeProps): React.ReactElement;
