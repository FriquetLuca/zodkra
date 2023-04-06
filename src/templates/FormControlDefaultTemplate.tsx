import { Text, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import type { ReactNode } from "react";
import React from "react";
import type { FieldError } from "react-hook-form";

type FCT = {
  required?: boolean,
  label: string,
  forName?: string,
  error: FieldError|undefined,
  children?: ReactNode
};
/**
 * A default FormControl template taking a form label and a children if needed.
 * @returns A FormControlDefaultTemplate react component.
 */
export default function FormControlDefaultTemplate({ required, label, forName, error, children }: FCT) {
  return (
    <FormControl paddingTop={5} isInvalid={!!error}>
      {required ? 
        <FormLabel display={"flex"} gap={"1"} mb={"2"}
          htmlFor={forName}
        >
          {label} <Text color="red.700">*</Text>
        </FormLabel>
      :
        <FormLabel display={"flex"} gap={"1"} mb={"2"}
          htmlFor={forName}
        >
          {label}
        </FormLabel>
      }
      {children}
      <FormErrorMessage>
        {!!error && error.message}
      </FormErrorMessage>
    </FormControl>
  );
}