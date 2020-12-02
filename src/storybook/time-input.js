import React from "react";
import { storiesOf } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { TimeInput } from "../";

storiesOf("Input | Time Input", module)
  .addParameters({ component: TimeInput })
  .add("Basic", () => {
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
  });
