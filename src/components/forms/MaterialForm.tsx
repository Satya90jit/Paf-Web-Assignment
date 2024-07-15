import React from "react";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import { Add, Remove } from "@mui/icons-material";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  names: Yup.array().of(
    Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
    })
  ),
});

const initialValues = {
  email: "",
  names: [{ firstName: "", lastName: "" }],
};

const MaterialForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form data", values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form className="flex flex-col gap-6 bg-blue-100 p-10">
          <Box mb={2}>
            <Field
              name="email"
              as={TextField}
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </Box>
          <FieldArray name="names">
            {({ remove, push }) => (
              <>
                {values.names.map((name, index) => (
                  <Box
                    key={index}
                    border={1}
                    borderColor="grey.400"
                    borderRadius={2}
                    p={2}
                    mb={2}
                    display="flex"
                    alignItems="center"
                  >
                    <Field
                      name={`names.${index}.firstName`}
                      as={TextField}
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name={`names.${index}.firstName`}
                      component="div"
                      className="text-red-500"
                    />
                    <Box mx={2} />
                    <Field
                      name={`names.${index}.lastName`}
                      as={TextField}
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name={`names.${index}.lastName`}
                      component="div"
                      className="text-red-500"
                    />
                    {values.names.length > 1 && (
                      <IconButton
                        color="secondary"
                        onClick={() => remove(index)}
                      >
                        <Remove />
                      </IconButton>
                    )}
                  </Box>
                ))}
                <IconButton
                  color="primary"
                  onClick={() => push({ firstName: "", lastName: "" })}
                >
                  <Add />
                </IconButton>
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

export default MaterialForm;
