/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgendaConsultoriaOverridesProps = {
    AgendaConsultoriaGrid?: FormProps<GridProps>;
    agendarConsulta?: FormProps<HeadingProps>;
    "agendarConsulta.name"?: FormProps<TextFieldProps>;
    "agendarConsulta.email"?: FormProps<TextFieldProps>;
    "agendarConsulta.mobile"?: FormProps<TextFieldProps>;
    "agendarConsulta.start"?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AgendaConsultoriaProps = React.PropsWithChildren<{
    overrides?: AgendaConsultoriaOverridesProps | undefined | null;
} & {
    onSubmit: (fields: AgendaConsultoriaInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: AgendaConsultoriaInputValues) => AgendaConsultoriaInputValues;
    onValidate?: AgendaConsultoriaValidationValues;
}>;
export default function AgendaConsultoria(props: AgendaConsultoriaProps): React.ReactElement;
