import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../";

export default {
  component: Input,
  title: "Input"
};

export const WithoutLabel = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input id="1" name="foo" placeholder="Without label" />
      </form>
    </FormProvider>
  );
};

export const WithLabel = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input id="2" label="Label" name="bar" />
      </form>
    </FormProvider>
  );
};

export const WithRequired = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input id="2" label="Label" name="baz" required />
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
        <Input id="3" label="Disabled" name="bar" disabled />
      </form>
    </FormProvider>
  );
};

export const WithAlert = () => {
  const methods = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
          id="4"
          label="With Alert"
          name="foo"
          alertText="Invalid input given"
        />
      </form>
    </FormProvider>
  );
};
