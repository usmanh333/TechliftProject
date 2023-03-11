import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const PostAServiceForm = () => {
  // Validation function Starts

  const formValidation = yup.object({
    name: yup.string().required("The Service title is required...!!!"),
    desc: yup.string().max(500).required("The Service description is required"),
    price: yup
      .string()
      .min(1, "The minimum price should be 100")
      .required("The Service price is required and should be above then 100RS"),
    number: yup.number().required("The number is required"),
    selectDistrict: yup
      .string()
      .required("Please select your District Above...!!!"),
    selectArea: yup.string().required("Please select your Area Above...!!!"),
    selectCategory: yup
      .string()
      .required("Please select your Category Above...!!!"),
    checkbox: yup
      .string()
      .required(
        "Please tick the checkbox if you have filled the correct information."
      ),
      image:yup.string().required('The image is required')
  });

  // Validation function End

  let navigate = useNavigate();
  const initialValues = {
    name: "",
    desc: "",
    price: "",
    number: "",
    selectDistrict: "",
    selectArea: "",
    selectCategory: "",
    checkbox: "",
    image: null,
  };
  const options = [
    {
      category: "districts",
      options: ["Lahore", "Jhang", "Vehari", "Kasur"],
    },
    {
      category: "areas",
      options: {
        Lahore: ["Lhr Cantonment", "Model Town", "Raiwind", "Shalimar"],
        Jhang: [
          "Tehsil Jhang",
          "Shorkot",
          "Ahmadpur Sial",
          "18-Hazari",
          "Mandi Shah Jeewana",
        ],
        Vehari: ["Burewala", "Mailsi", "Vehari Tehsil"],
        Kasur: ["City Kasur", "Chunian", "Pattoki", "Raiwind"],
      },
    },
    {
      category: "productsCategory",
      options: [
        "Electrician",
        "Pizza Shops",
        "Cab/Car Services",
        "Coffe Shops",
        "Hajj n Ummra",
        "Supermarts",
        "Rent A Car",
        "SEO",
        "Restaurants",
        "AC Repair",
        "Clinics Doctors",
        "Courier",
        "Security",
        "Graphic Designers",
        "Buses",
        "Wifi Provider",
        "Fruit Shops",
        "Labours",
        "Pakistan Post",
        "Plumber",
        "Web Developers",
        "Other",
      ],
    },
  ];

  return (
    <div className="container w-50 mt-5 fixingBottom">
      <Formik
        validationSchema={formValidation}
        initialValues={initialValues}
        onSubmit={async (values) => {
          try {
            await Axios.post("http://localhost:4000/cards", values, {
              headers: { "Content-Type": "multipart/form-data" },
            });
            navigate("/servicesAll/");
            window.scrollTo(0, 0);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="fixingBottom">
            {/* <!-- Name input --> */}
            <div class="form-outline mb-4">
              <label class="form-label" for="form4Example1">
                Enter Services Title:
              </label>
              <Field
                type="text"
                id="form4Example1"
                name="name"
                class="form-control"
              />
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="name" />
              </span>
            </div>

            {/* <!-- Message input --> */}
            <div class="form-outline mb-4">
              <label class="form-label" for="form4Example3">
                Enter Skills/Work Description *
              </label>
              <Field
                class="form-control"
                id="form4Example3"
                rows="4"
                name="desc"
                as="textarea"
              ></Field>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="desc" />
              </span>
            </div>

            {/* <!-- Price input --> */}
            <div class="form-outline mb-4">
              <label class="form-label" for="form4Example2">
                Enter Prices :-
              </label>
              <Field
                type="text"
                id="form4Example2"
                class="form-control"
                name="price"
              />
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="price" />
              </span>
            </div>
            {/* <!-- Contact input --> */}
            <div class="form-outline mb-4">
              <label class="form-label" for="form4Example2">
                Enter Contact No :-
              </label>
              <Field
                type="number"
                id="form4Example2"
                class="form-control"
                name="number"
              />
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="number" />
              </span>
            </div>

            {/* Select Starts from here  */}

            <div>
              <label className="form-lable" htmlFor="district">
                District
              </label>
              <Field
                as="select"
                id="district"
                name="selectDistrict"
                className="form-control mb-4"
              >
                <option value="">Select District</option>
                {options
                  .find((option) => option.category === "districts")
                  .options.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
              </Field>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="selectDistrict" />
              </span>
            </div>
            <div>
              <label className="form-lable" htmlFor="area">
                Area
              </label>
              <Field
                as="select"
                id="area"
                name="selectArea"
                disabled={!values.selectDistrict}
                className="form-control mb-4"
              >
                <option value="">Select Area</option>
                {values.selectDistrict &&
                  options
                    .find((option) => option.category === "areas")
                    .options[values.selectDistrict].map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
              </Field>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="selectArea" />
              </span>
            </div>
            <div>
              <label className="form-lable" htmlFor="category">
                Category
              </label>
              <Field
                as="select"
                id="category"
                name="selectCategory"
                className="form-control mb-4"
              >
                <option value="">Select Category</option>
                {options
                  .find((option) => option.category === "productsCategory")
                  .options.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </Field>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="selectCategory" />
              </span>
            </div>

            {/* Select Starts from here  */}

            {/* Image Input */}
            <label class="form-label" for="form4Example2">
              Select Image
            </label>
            <input
              type="file"
              id="form4Example2"
              class="form-control mb-4"
              onChange={(event) => {
                setFieldValue("image", event.currentTarget.files[0]);
              }}
            />
            <span style={{ color: "red", fontStyle: "italic" }}>
              <ErrorMessage name="image" />
            </span>
            

            {/* CheckBox */}
            <div class="input-group mb-3">
              <div class="input-group-text">
                <Field
                  class="form-check-input mt-0"
                  type="checkbox"
                  name="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </div>
              <label class="form-label ps-2 pt-2" for="form4Example2">
                Please Check the Box if You have fill the Complete Informations
                Properly.!!!
              </label>
              <br />
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="checkbox" />
              </span>
              <br />
            </div>

            {/* <!-- Submit button --> */}

            <button type="submit" class="btn btn-primary btn-block mb-4">
              Post Service Now
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostAServiceForm;
