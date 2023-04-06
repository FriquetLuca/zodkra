# Zodkra

> An easier way to handle forms using Chakra UI and zod in a react environment.

## FormControlInput

Using our carefuly crafted `FormHook`, you can just plugged in some inputs and the job's done.
Check [GitHub](https://github.com/FriquetLuca/zodkra/) to keep in check with the project and it's ongoing documentation in progress.

```tsx
import { z } from "zod";
const relevantInformationsSchema = z.object({
  name: z.string().min(1),
  email: z.string().email()
});

type MyFormComponentProps = {
  submitLabel?: string,
  onSubmit?: () => void
};

export default function MyFormComponent({ submitLabel, onSubmit }: MyFormComponentProps) {
  return (
    <FormHook
      fields={relevantInformationSchema}
      onSubmit={(data) => {
        // Stonk data, fully typed
        onSubmit && onSubmit();
      }}
    >
    {
      (register, errors, isSubmitting) => (
        {/* This is your starting form here. */}
        <FormControlInput
          required={true}
          id={"name"}
          w={96}
          label={"Your name"}
          placeholder={"Enter your name"}
          register={register}
          error={errors.name}
        />
        <FormControlInput
          required={true}
          id={"email"}
          w={96}
          label={"Your email"}
          placeholder={"Enter your email"}
          register={register}
          error={errors.email}
        />
      );
    }
    </FormHook>
  );
}
```