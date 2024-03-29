/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, Heading, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function AgendaConsultoria(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    agendarConsulta: {},
  };
  const [agendarConsulta, setAgendarConsulta] = React.useState(
    initialValues.agendarConsulta
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAgendarConsulta(initialValues.agendarConsulta);
    setErrors({});
  };
  const validations = {
    "agendarConsulta.name": [
      {
        type: "GreaterThanChar",
        numValues: [1],
        validationMessage: "The value must be at least 1 characters",
      },
    ],
    "agendarConsulta.email": [{ type: "Email" }],
    "agendarConsulta.mobile": [{ type: "Phone" }],
    "agendarConsulta.start": [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          agendarConsulta,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "AgendaConsultoria")}
      {...rest}
    >
      <Heading
        level={3}
        children="Agendar Consulta"
        {...getOverrideProps(overrides, "agendarConsulta")}
      ></Heading>
      <TextField
        label="Nombre *"
        value={agendarConsulta["name"]}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              agendarConsulta: { ...agendarConsulta, name: value },
            };
            const result = onChange(modelFields);
            value = result?.agendarConsulta?.name ?? value;
          }
          if (errors["agendarConsulta.name"]?.hasError) {
            runValidationTasks("agendarConsulta.name", value);
          }
          setAgendarConsulta({ ...agendarConsulta, name: value });
        }}
        onBlur={() =>
          runValidationTasks("agendarConsulta.name", agendarConsulta["name"])
        }
        errorMessage={errors["agendarConsulta.name"]?.errorMessage}
        hasError={errors["agendarConsulta.name"]?.hasError}
        {...getOverrideProps(overrides, "agendarConsulta.name")}
      ></TextField>
      <TextField
        label="Email *"
        value={agendarConsulta["email"]}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              agendarConsulta: { ...agendarConsulta, email: value },
            };
            const result = onChange(modelFields);
            value = result?.agendarConsulta?.email ?? value;
          }
          if (errors["agendarConsulta.email"]?.hasError) {
            runValidationTasks("agendarConsulta.email", value);
          }
          setAgendarConsulta({ ...agendarConsulta, email: value });
        }}
        onBlur={() =>
          runValidationTasks("agendarConsulta.email", agendarConsulta["email"])
        }
        errorMessage={errors["agendarConsulta.email"]?.errorMessage}
        hasError={errors["agendarConsulta.email"]?.hasError}
        {...getOverrideProps(overrides, "agendarConsulta.email")}
      ></TextField>
      <TextField
        label="Telefono *"
        type="tel"
        value={agendarConsulta["mobile"]}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              agendarConsulta: { ...agendarConsulta, mobile: value },
            };
            const result = onChange(modelFields);
            value = result?.agendarConsulta?.mobile ?? value;
          }
          if (errors["agendarConsulta.mobile"]?.hasError) {
            runValidationTasks("agendarConsulta.mobile", value);
          }
          setAgendarConsulta({ ...agendarConsulta, mobile: value });
        }}
        onBlur={() =>
          runValidationTasks(
            "agendarConsulta.mobile",
            agendarConsulta["mobile"]
          )
        }
        errorMessage={errors["agendarConsulta.mobile"]?.errorMessage}
        hasError={errors["agendarConsulta.mobile"]?.hasError}
        {...getOverrideProps(overrides, "agendarConsulta.mobile")}
      ></TextField>
      <TextField
        label="Fecha y Hora *"
        type="datetime-local"
        value={agendarConsulta["start"]}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              agendarConsulta: { ...agendarConsulta, start: value },
            };
            const result = onChange(modelFields);
            value = result?.agendarConsulta?.start ?? value;
          }
          if (errors["agendarConsulta.start"]?.hasError) {
            runValidationTasks("agendarConsulta.start", value);
          }
          setAgendarConsulta({ ...agendarConsulta, start: value });
        }}
        onBlur={() =>
          runValidationTasks("agendarConsulta.start", agendarConsulta["start"])
        }
        errorMessage={errors["agendarConsulta.start"]?.errorMessage}
        hasError={errors["agendarConsulta.start"]?.hasError}
        {...getOverrideProps(overrides, "agendarConsulta.start")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Agendar"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
