/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AgendaConsultoriaInputValues = {
    agendarConsulta?: {
        name?: string;
        email?: string;
        mobile?: string;
        start?: string;
    };
};
export declare type AgendaConsultoriaValidationValues = {
    agendarConsulta?: {
        name?: ValidationFunction<string>;
        email?: ValidationFunction<string>;
        mobile?: ValidationFunction<string>;
        start?: ValidationFunction<string>;
    };
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgendaConsultoriaOverridesProps = {
    AgendaConsultoriaGrid?: PrimitiveOverrideProps<GridProps>;
    agendarConsulta?: PrimitiveOverrideProps<HeadingProps>;
    "agendarConsulta.name"?: PrimitiveOverrideProps<TextFieldProps>;
    "agendarConsulta.email"?: PrimitiveOverrideProps<TextFieldProps>;
    "agendarConsulta.mobile"?: PrimitiveOverrideProps<TextFieldProps>;
    "agendarConsulta.start"?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AgendaConsultoriaProps = React.PropsWithChildren<{
    overrides?: AgendaConsultoriaOverridesProps | undefined | null;
} & {
    onSubmit: (fields: AgendaConsultoriaInputValues) => void;
    onChange?: (fields: AgendaConsultoriaInputValues) => AgendaConsultoriaInputValues;
    onValidate?: AgendaConsultoriaValidationValues;
} & React.CSSProperties>;
export default function AgendaConsultoria(props: AgendaConsultoriaProps): React.ReactElement;
