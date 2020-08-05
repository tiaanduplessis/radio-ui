import React from "react";
import { storiesOf } from "@storybook/react";
import { useForm, FormContext } from "react-hook-form";
import { TelInput } from "../";

storiesOf("Input | Tel Input", module)
  .addParameters({ component: TelInput })
  .add("Basic", () => {
    const methods = useForm();
    const onSubmit = data => {
      console.log(data);
    };

    return (
      <FormContext {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TelInput id="1" name="1" label="Default" />
        </form>
      </FormContext>
    );
  });
