import React from "react";
import { storiesOf } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { Select } from "../";

const options = [
  { label: "option 1", value: "1" },
  { label: "option 2", value: "2" }
];

storiesOf("Input | Select", module)
  .addParameters({ component: Select })

  .add("Empty", () => {
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
  })

  .add("With options", () => {
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
  })

  .add("Disabled", () => {
    const methods = useForm();
    const onSubmit = data => {
      console.log(data);
    };

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Select disabled options={options} />
        </form>
      </FormProvider>
    );
  });
