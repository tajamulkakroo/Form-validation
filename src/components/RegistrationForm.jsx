import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().nonempty().min(1, "First Name is required"),
  lastName: z.string().nonempty().min(1, "Last Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty()
    .min(1, "Email is required"),
  gender: z.string().nonempty(),
  mobileNumber: z
    .string()
    .length(10, "Mobile number should be 10 digits")
    .nonempty(),
  dateOfBirth: z.string().nonempty(),
  subjects: z.string().nonempty(),
  hobbies: z.array(z.string()).nonempty(),
  picture: z.any().nullable(),
  currentAddress: z.string().nonempty(),
  state: z.string().nonempty(),
  city: z.string().nonempty(),
});

const RegistrationForm = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);

    switch (selectedState) {
      case "Jammu & Kashmir":
        setCities(["Srinagar", "Jammu"]);
        break;
      case "Punjab":
        setCities(["Amritsar", "Ludhiana", "Chandigarh"]);
        break;
      case "Haryana":
        setCities(["Gurgaon", "Faridabad", "Panipat"]);
        break;
      case "Rajasthan":
        setCities(["Jaipur", "Udaipur", "Jodhpur"]);
        break;
      default:
        setCities([]);
        break;
    }
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center text-slate-500">Student Registration Form</h1>
      </div>

      <div className="mb-6">
        <label
          htmlFor="firstName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", { required: true })}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs italic">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="lastName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", { required: true })}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs italic">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Gender
        </label>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="male"
            value="Male"
            {...register("gender", { required: true })}
            className="mr-2 leading-tight"
          />
          <label htmlFor="male" className="text-sm text-gray-700">
            Male
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="female"
            value="Female"
            {...register("gender", { required: true })}
            className="mr-2 leading-tight"
          />
          <label htmlFor="female" className="text-sm text-gray-700">
            Female
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="other"
            value="Other"
            {...register("gender", { required: true })}
            className="mr-2 leading-tight"
          />
          <label htmlFor="other" className="text-sm text-gray-700">
            Other
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="mobileNumber"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Mobile Number (10 Digits)
        </label>
        <input
          type="tel"
          id="mobileNumber"
          {...register("mobileNumber", { required: true })}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.mobileNumber && (
          <p className="text-red-500 text-xs italic">
            {errors.mobileNumber.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="dateOfBirth"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          {...register("dateOfBirth", { required: true })}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-xs italic">
            {errors.dateOfBirth.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="subjects"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Subjects
        </label>
        <input
          type="text"
          id="subjects"
          {...register("subjects", { required: true })}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.subjects && (
          <p className="text-red-500 text-xs italic">
            {errors.subjects.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Hobbies
        </label>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="sports"
            value="Sports"
            {...register("hobbies", { required: true })}
            className="mr-2 leading-tight"
          />
          <label htmlFor="sports" className="text-sm text-gray-700">
            Sports
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="reading"
            value="Reading"
            {...register("hobbies", { required: true })}
            className="mr-2 leading-tight"
          />
          <label htmlFor="reading" className="text-sm text-gray-700">
            Reading
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="music"
            value="Music"
            {...register("hobbies", { required: true })}
            className="mr-2 leading-tight"
          />
          <label htmlFor="music" className="text-sm text-gray-700">
            Music
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="picture"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Picture
        </label>
        <input
          type="file"
          id="picture"
          {...register("picture", { required: true })}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.picture && (
          <p className="text-red-500 text-xs italic">
            {errors.picture.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="currentAddress"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Current Address
        </label>
        <textarea
          id="currentAddress"
          {...register("currentAddress", { required: true })}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.currentAddress && (
          <p className="text-red-500 text-xs italic">
            {errors.currentAddress.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="state"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          State
        </label>
        <select
          id="state"
          {...register("state", { required: true })}
          value={selectedState}
          onChange={handleStateChange}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select State</option>
          <option value="Jammu & Kashmir">Jammu & Kashmir</option>
          <option value="Punjab">Punjab</option>
          <option value="Haryana">Haryana</option>
          <option value="Rajasthan">Rajasthan</option>
        </select>
        {errors.state && (
          <p className="text-red-500 text-xs italic">{errors.state.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="city"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          City
        </label>
        <select
          id="city"
          {...register("city", { required: true })}
          value={selectedCity}
          onChange={handleCityChange}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.city && (
          <p className="text-red-500 text-xs italic">{errors.city.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
