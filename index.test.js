import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Hello from "./components/hello";

configure({ adapter: new Adapter() });

test("Message present", () => {
  const Wrapper = shallow(<Hello />);
  expect(Wrapper.text()).toEqual("Hello world");
});
