import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { type ReactNode } from "react";
import { type DeepRequired, type FieldErrorsImpl, type SubmitHandler, useForm, type UseFormRegister } from "react-hook-form";
import type { z, ZodType } from "zod";

type UnPackAsyncDefaultValues<TFieldValues> = TFieldValues extends () => Promise<infer U> ? U : TFieldValues;

export type FormZod = ZodType<any, any, any>;
export type FormRegister<T extends FormZod> = UseFormRegister<z.TypeOf<T>>;
export type FormError<T extends FormZod> = Partial<FieldErrorsImpl<DeepRequired<UnPackAsyncDefaultValues<z.TypeOf<T>>>>>;
export type FormSubmit<T extends FormZod> = SubmitHandler<z.TypeOf<T>>;

type FormTemplateProps<U extends FormZod> = {
  fields: U,
  children?: (register: FormRegister<U>, errors: FormError<U>, isSubmitting:boolean) => ReactNode,
  onSubmit: FormSubmit<U>
};
/**
 * Create a hook to make a template faster using zod.
 * @param params The hook params consist on a `fields` param that takes a zod object representing your form datas. It also has a field `onSubmit` to handle the data at submition.
 * @returns A formhook react component.
 */
export default function FormHook<U extends FormZod>({ fields, children, onSubmit }: FormTemplateProps<U>) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.infer<z.TypeOf<U>>>({ resolver: zodResolver(fields) });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children && children(register, errors, isSubmitting)}
    </form>
  );
}