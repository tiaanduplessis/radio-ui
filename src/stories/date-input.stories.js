import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DateInput } from "../";

export default {
  component: DateInput,
  title: "DateInput"
};

export const Basic = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DateInput id="1" name="1" label="Default" />
      </form>
    </FormProvider>
  );
};
