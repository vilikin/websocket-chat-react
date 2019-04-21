import { Button, Form, Input, InputGroup, InputGroupAddon } from "reactstrap";
import React, { FormEventHandler, useState } from "react";

interface InputFieldProps {
  inputPlaceholderText: string;
  buttonText: string;
  onSubmit: (text: string) => void;
}

function InputField(props: InputFieldProps) {
  const [value, setValue] = useState("");

  const onValueChange = (event: any) => {
    setValue(event.target.value);
  };

  const onSubmit: FormEventHandler = event => {
    event.preventDefault();
    props.onSubmit(value);
    setValue("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <Input
          placeholder={props.inputPlaceholderText}
          value={value}
          onChange={onValueChange}
        />
        <InputGroupAddon addonType="append">
          <Button type="submit" color="secondary">
            {props.buttonText}
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}

export default InputField;
