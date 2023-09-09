import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

function renderCoursesForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderCoursesForm();

  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it("labels save button as 'Saving...' when saving", () => {
  const wrapper = renderCoursesForm({ saving: true });

  expect(wrapper.find("button").text()).toBe("Saving...");
});
