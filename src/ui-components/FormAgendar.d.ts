/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormAgendarOverridesProps = {
    FormAgendar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    TextField37922784?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37922785?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37922854?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37922861?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormAgendarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormAgendarOverridesProps | undefined | null;
}>;
export default function FormAgendar(props: FormAgendarProps): React.ReactElement;
