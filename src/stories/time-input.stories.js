import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TimeInput } from "../";

export default {
  component: TimeInput,
  title: "TimeInput"
};

export const Basic = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TimeInput id="1" name="time" label="Default" />
      </form>
    </FormProvider>
  );
};
