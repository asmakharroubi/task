import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 
import { useDispatch } from "react-redux";

import Movie from "../Components/Movie/Movie";


jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

 

describe("Movie Component", () => {
  let dispatchMock;
  const movie = {
    id: "1",
    img: "example.com/image.jpg",
    title: "Test Movie",
    isDone: false,
  };

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  it("renders the component properly", () => {
    const { getByText, getByAltText } = render(<Movie movie={movie} />);
    expect(getByText("Test Movie")).toBeInTheDocument();
    expect(getByAltText("Test Movie")).toBeInTheDocument();
  });





});
