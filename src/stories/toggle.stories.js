import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Toggle } from "../";

export default {
  component: Toggle,
  title: "Toggle"
};

export const Unchecked = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Toggle label="Closed" />
      </form>
    </FormProvider>
  );
};

export const Checked = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Toggle label="Closed" checked={true} />
      </form>
    </FormProvider>
  );
};
