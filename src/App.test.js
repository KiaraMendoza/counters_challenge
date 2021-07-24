import React from "react";
import { render } from "@testing-library/react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

test("App should show 3 initial 0s", () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText("0");
  expect(linkElement.length === 3);
});

test("On click add-button, counter's count should increase by 1", () => {
  const wrapper = mount(<App />);
  const incrementBtn = wrapper.find(".add-button").at(1);
  incrementBtn.simulate("click");
  const text = wrapper.find(".counter__count").at(1).text();
  expect(text).toEqual("1");
});

test("On click subtract-button, counter's count should decrease by 1", () => {
  const wrapper = mount(<App />);
  const incrementBtn = wrapper.find(".subtract-button").at(1);
  incrementBtn.simulate("click");
  const text = wrapper.find(".counter__count").at(1).text();
  expect(text).toEqual("-1");
});

