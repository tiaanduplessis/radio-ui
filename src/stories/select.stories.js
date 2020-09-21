import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Select } from "../";

const options = [
  { label: "option 1", value: "1" },
  { label: "option 2", value: "2" }
];

export default {
  component: Select,
  title: "Select"
};

export const Empty = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Select name="1" placeholder="Empty" />
      </form>
    </FormProvider>
  );
};

export const WithOptions = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Select options={options} label="Label" name="2" />
      </form>
    </FormProvider>
  );
};

export const Disabled = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Select disabled options={options} name="3" />
      </form>
    </FormProvider>
  );
};
