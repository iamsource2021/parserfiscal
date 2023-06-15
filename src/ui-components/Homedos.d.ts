/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomedosOverridesProps = {
    Homedos?: PrimitiveOverrideProps<FlexProps>;
    NavBar?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type HomedosProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HomedosOverridesProps | undefined | null;
}>;
export default function Homedos(props: HomedosProps): React.ReactElement;
