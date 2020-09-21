import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TelInput } from "../";

export default {
  component: TelInput,
  title: "TelInput"
};

export const Basic = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TelInput id="1" name="1" label="Default" />
      </form>
    </FormProvider>
  );
};
