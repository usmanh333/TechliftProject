import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

const UpdateServiceForm = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  // Image state

  const [getImage, setGetImage] = useState(null);

  // Select States

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [options, setOptions] = useState([
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
        "Electrician",
        "Labours",
        "Pakistan Post",
        "Plumber",
        "Web Developers",
        "Other",
      ],
    },
  ]);
  // Checkbox state
  const [checked, setChecked] = useState(true);

  // Input Handler State

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState();
  const [number, setNumber] = useState();

  // image handler
  const handleImage = async (e) => {
    setGetImage(e.target.files[0]);
  };

  // Select start from here

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedArea("");
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectCategory(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const getDistrictOptions = () => {
    return options
      .find((option) => option.category === "districts")
      .options.map((district) => (
        <option key={district} value={district}>
          {district}
        </option>
      ));
  };

  const getAreaOptions = () => {
    if (!selectedDistrict) {
      return null;
    }
    const areas = options.find((option) => option.category === "areas").options[
      selectedDistrict
    ];
    return areas.map((area) => (
      <option key={area} value={area}>
        {area}
      </option>
    ));
  };

  const handleCategories = () => {
    return options
      .find((option) => option.category === "productsCategory")
      .options.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ));
  };

  // Select Ends here

  //   Getting Data from BE
  const getUserDetail = async () => {
    try {
      let res = await fetch(`http://localhost:4000/cardsdata/${id}`);
      console.log(res);
      let card = await res.json();
      console.log(card);
      setName(card.name);
      setDesc(card.desc);
      setPrice(card.price);
      setNumber(card.number);
      setSelectedDistrict(card.selectedDistrict);
      setSelectedArea(card.selectedArea);
      setSelectCategory(card.selectCategory);
      setGetImage(card.getImage);
    } catch (error) {
      console.log(error);
    }
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // upload image and post the data to the server
      const formData = new FormData();
      formData.append("image", getImage);
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("price", price);
      formData.append("number", number);
      formData.append("selectDistrict", selectedDistrict);
      formData.append("selectArea", selectedArea);
      formData.append("selectCategory", selectCategory);

      const response = await Axios.put(
        `http://localhost:4000/cardsdata/${id}`,
        formData
      );

      console.log(name);
      navigate("/servicesAll/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div className="container" >
      <form
      className="container w-50 mt-5 fixingBottom"
        onSubmit={SubmitHandler}
        encType="multipart/form-data"
        method="POST"
      >
        {/* <!-- Name input --> */}
        <div class="form-outline mb-4">
          <label class="form-label" for="form4Example1">
            Enter Services Title:
          </label>
          <input
            type="text"
            id="form4Example1"
            name="name"
            class="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* <!-- Message input --> */}
        <div class="form-outline mb-4">
          <label class="form-label" for="form4Example3">
            Enter Skills/Work Description *
          </label>
          <textarea
            class="form-control"
            id="form4Example3"
            rows="4"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        {/* <!-- Price input --> */}
        <div class="form-outline mb-4">
          <label class="form-label" for="form4Example2">
            Enter Prices :-
          </label>
          <input
            type="text"
            id="form4Example2"
            class="form-control"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        {/* <!-- Contact input --> */}
        <div class="form-outline mb-4">
          <label class="form-label" for="form4Example2">
            Enter Contact No :-
          </label>
          <input
            type="number"
            id="form4Example2"
            class="form-control"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        {/* Select Starts from here  */}
        <div>
          <label className="form-label" htmlFor="district-select">
            Select District:
          </label>
          <select
            class="form-control mb-4"
            aria-label=".form-select-sm example"
            name="selectDistrict"
            id="district-select"
            value={selectedDistrict}
            onChange={handleDistrictChange}
          >
            <option value="option1">Select a district</option>
            {getDistrictOptions()}
          </select>

          {selectedDistrict && (
            <div>
              <label className="form-label" htmlFor="area-select">
                Select Area:
              </label>
              <select
                class="form-control mb-4"
                aria-label=".form-select-sm example"
                name="selectArea"
                id="area-select"
                value={selectedArea}
                onChange={handleAreaChange}
              >
                <option value="option1">Select an area</option>
                {getAreaOptions()}
              </select>
            </div>
          )}
          {/* Category Section */}
          <label className="form-label" htmlFor="category-select">
            Select Category:
          </label>
          <select
            class="form-control mb-4"
            aria-label=".form-select-sm example"
            name="selectDistrict"
            id="district-select"
            value={selectCategory}
            onChange={handleCategoryChange}
          >
            <option value="option1">Select a Category</option>
            {handleCategories()}
          </select>
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
          name="image"
          // value={inputHandler.price}
          onChange={handleImage}
        />

        {/* CheckBox */}
        <div class="input-group mb-3">
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
              name="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
          <label class="form-label ps-2 pt-2" for="form4Example2">
            Please Check the Box if You have fill the Complete Informations
            Properly.!!!
          </label>
        </div>

        {/* <!-- Submit button --> */}

        <button type="submit" class="btn btn-primary btn-block mb-4">
          Update Now
        </button>
      </form>
    </div>
  );
};

export default UpdateServiceForm;
