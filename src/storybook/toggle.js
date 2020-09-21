import React from "react";
import { storiesOf } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { Toggle } from "../";

import mdx from "../docs/toggle.mdx";

storiesOf("Input | Toggle", module)
  .addParameters({
    component: Toggle,
    docs: mdx
  })
  .add("Unchecked", () => {
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
  })
  .add("Checked", () => {
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
  });
