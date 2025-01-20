"use client";
import {
  checkemail,
  checktransactionid,
  createUserAndTransaction,
} from "@/lib/serveractions";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import axios from "axios";

const RegistrationForm = ({
  formope,
  setformope,
}: {
  formope: boolean;
  setformope: any;
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "",
    rollNumber: "",
    phoneNumber: "",
    whatsappNumber: "",
    gender: "",
    transaction_id: "",
    email: "",
    idCard: null as File | null,
    foodPreference: "",
    paymentss: null as File | null,
  });

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
  });

  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate email
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    // Validate phone numbers
    if (name === "phoneNumber" || name === "whatsappNumber") {
      if (!validatePhoneNumber(value)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Phone number must be exactly 10 digits",
        }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, idCard: file });
  };

  const handlefileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, paymentss: file });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields before submission
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    if (!validatePhoneNumber(formData.whatsappNumber)) {
      toast.error("Please enter a valid 10-digit WhatsApp number");
      return;
    }

    setLoading(true);

    try {
      const res = await checktransactionid(formData.transaction_id);
      if (res) {
        toast.error("Transaction ID already exists. Please try again!");
        setLoading(false);
        return;
      }

      const respons = await checkemail({
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        whatsappNumber: formData.whatsappNumber,
      });
      if (respons) {
        toast.error(
          "Email or phoneNumber or whatsappNumber already exists. Please try again!"
        );
        setLoading(false);
        return;
      }

      if (!formData.paymentss || !formData.idCard) {
        toast.error("Please upload both payment screenshot and ID card.");
        setLoading(false);
        return;
      }

      if (formData.idCard.size > 10 * 1024 * 1024) {
        toast.error("File size should not exceed 10MB!");
        setLoading(false);
        return;
      }

      const formdata = new FormData();
      formdata.append("firstName", formData.firstName);
      formdata.append("lastName", formData.lastName);
      formdata.append("college", formData.college);
      formdata.append("rollNumber", formData.rollNumber);
      formdata.append("phoneNumber", formData.phoneNumber);
      formdata.append("whatsappNumber", formData.whatsappNumber);
      formdata.append("gender", formData.gender);
      formdata.append("transaction_id", formData.transaction_id);
      formdata.append("idCard", formData.idCard);
      formdata.append("foodPreference", formData.foodPreference);
      formdata.append("paymentss", formData.paymentss);
      formdata.append("email", formData.email);

      try {
        const response = await axios.post("/api/registeruser", formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const data = response.data;
        console.log(data);
        const apiresponse = {
          userdata: data.userdata,
          transaction: data.transaction,
        };

        const result = await createUserAndTransaction(apiresponse);

        if (result.status === "success") {
          toast.success("Registered successfully!");
          setformope(false);
        } else {
          throw new Error(
            result.message || "Failed to register in the database."
          );
        }
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to register user.";
        console.error(errorMessage);
        toast.error("Something went wrong. Please try again!");
      }
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error.message || "Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[90%] bg-custom-gradient backdrop-blur-29 text-white relative z-10 slide-down">
      <form
        onSubmit={handleSubmit}
        className="w-full px-4 md:px-10 py-5 rounded-lg border border-red-600"
      >
        <div className="absolute right-0 top-0">
          <button
            type="button"
            onClick={() => {
              formope && setformope(false);
            }}
            className="text-white bg-red-600 w-8 h-8 flex items-center justify-center hover:bg-red-700"
          >
            ✕
          </button>
        </div>

        <div className="group2 flex flex-wrap gap-4 mb-4">
          <div className="w-full border border-red-600 bg-transparent p-2 rounded-md text-red-400 flex flex-col items-center">
            <label className="block text-sm font-bold text-white mb-2">
              Payment Options
            </label>
            <Image
              src="https://res.cloudinary.com/dgtdkqfsx/image/upload/v1735632093/WhatsApp_Image_2024-12-31_at_12.08.39_8b8c32a8_znclgz.jpg"
              alt="Scan QR Code"
              width={200}
              height={200}
              className="w-32 h-32 object-cover border border-red-600 rounded-md"
            />
            <p className="text-sm mt-2 text-white">
              Scan the QR code above for payment. (Rs 1300 only per participant)
            </p>
            <p className="text-sm text-white mt-2">UPI id: 85002429435@sbi</p>
          </div>
        </div>

        <div className="group2 flex flex-wrap gap-4 mb-4">
          <div className="w-full border border-red-600 bg-transparent p-2 rounded-md text-red-400">
            <label className="block text-sm text-white font-bold">
              Account Details
            </label>
            <p className="text-sm text-white mt-2">
              <span className="font-bold">Account Number:</span> 37377186107
            </p>
            <p className="text-sm text-white">
              <span className="font-bold">IFSC Code:</span> SBIN0002109
            </p>
            <p className="text-sm text-red-400 mt-2">
              Use the above details for direct bank transfer if the QR code is
              not working.
            </p>
          </div>
        </div>

        {[
          {
            label1: "First Name",
            name1: "firstName",
            label2: "Last Name",
            name2: "lastName",
          },
          {
            label1: "College Name",
            name1: "college",
            label2: "Roll Number",
            name2: "rollNumber",
          },
          {
            label1: "Phone Number",
            name1: "phoneNumber",
            label2: "WhatsApp Number",
            name2: "whatsappNumber",
          },
          {
            label1: "Transaction Id",
            name1: "transaction_id",
            label2: "Email Address",
            name2: "email",
          },
        ].map((field) => (
          <div
            key={field.label1}
            className="group2 flex flex-col md:flex-row gap-4 mb-4"
          >
            <div className="w-full md:w-1/2 border border-red-600 bg-transparent p-2 rounded-md text-red-400">
              <label className="block text-sm text-white">{field.label1}</label>
              <input
                type={field.name1.includes("phone") ? "tel" : "text"}
                name={field.name1}
                placeholder={`Your ${field.label1}`}
                className="w-full bg-transparent text-red-400 placeholder-red-500"
                onChange={handleChange}
                required
              />
              {errors[field.name1 as keyof typeof errors] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field.name1 as keyof typeof errors]}
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 border border-red-600 bg-transparent p-2 rounded-md text-red-400">
              <label className="block text-sm text-white">{field.label2}</label>
              <input
                type={field.name2 === "email" ? "email" : "text"}
                name={field.name2}
                placeholder={`Your ${field.label2}`}
                className="w-full bg-transparent text-red-700 placeholder-red-500"
                onChange={handleChange}
                required
              />
              {errors[field.name2 as keyof typeof errors] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field.name2 as keyof typeof errors]}
                </p>
              )}
            </div>
          </div>
        ))}

        <div className="group2 flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full md:w-1/2 border bg-transparent p-2 border-red-600 rounded-md">
            <label className="block text-sm font-mono">ID Card</label>
            <input
              type="file"
              name="idCard"
              className="w-full bg-transparent text-red-400"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 border bg-transparent p-2 border-red-600 rounded-md">
            <label className="block text-sm font-mono">
              Payment Screenshot
            </label>
            <input
              type="file"
              name="paymentss"
              className="w-full bg-transparent text-red-400"
              onChange={handlefileChange}
              required
            />
          </div>
        </div>

        <div className="group mb-4 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 border bg-transparent p-2 border-red-600 font-mono rounded-md">
            <label className="block text-sm font-mono">Gender</label>
            <select
              name="gender"
              className="w-full bg-transparent text-red-400"
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 border bg-transparent p-2 border-red-600 rounded-md">
            <label className="block text-sm font-mono">Food Preference</label>
            <select
              name="foodPreference"
              className="w-full bg-transparent text-red-400"
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
            </select>
          </div>
        </div>

        <div className="button flex justify-center">
          <button
            type="submit"
            disabled={
              loading || Object.values(errors).some((error) => error !== "")
            }
            className="w-fit text-center py-3 px-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div
                className="spinner-border text-white flex items-center gap-2 font-Urbanist"
                role="status"
              >
                Submitting{" "}
                <div className="flex flex-row gap-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            ) : (
              "Register"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
