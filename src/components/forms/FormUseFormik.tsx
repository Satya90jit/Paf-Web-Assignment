import React from "react";
import { Formik, Form, FieldArray, useFormik } from "formik";
import { Add, Remove } from "@mui/icons-material";
import * as Yup from "yup";
import TextInput from "./TextInput";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  names: Yup.array().of(
    Yup.object({
      firstName: Yup.string().required("first name Required"),
      lastName: Yup.string().required("last name Required"),
    })
  ),
});

const initialValues = {
  email: "",
  names: [{ firstName: "", lastName: "" }],
};

const TestForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form data", values);
      }}
    >
      {({ values }) => (
        <Form className="flex flex-col gap-6 bg-blue-100 p-10">
          <TextInput
            label="Email"
            name="email"
            type="text"
            placeholder="Enter email"
          />
          <FieldArray name="names">
            {({ remove, push }) => (
              <>
                {values.names.map((name: any, index: any) => (
                  <div
                    key={index}
                    className="border border-gray-400 rounded-lg m-2 p-2 flex gap-4 items-center"
                  >
                    <TextInput
                      label="First Name"
                      name={`names.${index}.firstName`}
                      placeholder="First Name"
                    />
                    <TextInput
                      label="Last Name"
                      name={`names.${index}.lastName`}
                      placeholder="Last Name"
                    />
                    {values.names.length > 1 && (
                      <Remove
                        className="bg-red-500 p-2 !text-4xl text-white rounded-3xl common-transition hover:bg-red-700 cursor-pointer"
                        onClick={() => remove(index)}
                      />
                    )}
                  </div>
                ))}
                <div>
                  <Add
                    className="bg-blue-700 text-white p-2 rounded-lg !text-4xl hover:bg-blue-600 cursor-pointer mt-5 w-full common-transition"
                    onClick={() => push({ firstName: "", lastName: "" })}
                  />
                </div>
              </>
            )}
          </FieldArray>
          <button
            type="submit"
            className="bg-green-500 p-2 rounded-lg text-white hover:bg-green-600"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TestForm;
