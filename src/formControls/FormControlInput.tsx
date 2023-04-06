import { Input } from "@chakra-ui/react";
import type { FieldError } from "react-hook-form";
import type { z } from "zod";
import FormControlDefaultTemplate from "@/templates/FormControlDefaultTemplate";
import type { FormRegister, FormZod } from "@/FormHook";
import React from "react";

type InputFormControlProps<T extends FormZod> = {
    required?: boolean,
    id: keyof z.infer<T>,
    label: string,
    placeholder?: string,
    defaultValue?: string,
    register: FormRegister<T>,
    error: FieldError | undefined
};
/**
 * A FormControl input used to make form input easier to register.
 * @returns A FormControlInput react component.
 */
export default function FormControlInput<U extends FormZod>({
    required,
    id, label,
    register, error,
    placeholder,
    defaultValue,
    ...rest
  }: InputFormControlProps<U>) {
  return (
    <FormControlDefaultTemplate
      required={required}
      forName={id as string}
      label={label}
      error={error}
    >
      <Input
        id={id as string}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(id as z.infer<U>)}
      />
    </FormControlDefaultTemplate>
  );
}