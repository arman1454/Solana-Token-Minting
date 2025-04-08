"use client"
import * as React from "react";
import { Button, Form, Input } from "@heroui/react";

const NormalForm = () => {
    const [submitted, setSubmitted] = React.useState(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent default browser page refresh.
        e.preventDefault();

        // Get form data as an object.
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Submit data to your backend API.
        setSubmitted(data);
    };
  return (
      <Form onSubmit={onSubmit}>
          <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
          />
          <Button type="submit">Submit</Button>
          {submitted && (
              <div className="text-small text-default-500">
                  You submitted: <code>{JSON.stringify(submitted)}</code>
              </div>
          )}
      </Form>
  )
}

export default NormalForm
