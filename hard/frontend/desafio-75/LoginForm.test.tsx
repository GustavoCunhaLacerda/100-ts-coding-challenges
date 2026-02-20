import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import LoginForm from "./LoginForm";

const server = setupServer();
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("LoginForm", () => {
  it("should show validation error when fields are empty", async () => {
    // TODO: implement
  });

  it("should show loading state during submission", async () => {
    // TODO: implement
  });

  it("should call onSuccess with token on successful login", async () => {
    // TODO: implement
  });

  it("should show error message on invalid credentials", async () => {
    // TODO: implement
  });

  it("should show network error message on fetch failure", async () => {
    // TODO: implement
  });
});
