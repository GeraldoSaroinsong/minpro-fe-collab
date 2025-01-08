/* eslint-disable @typescript-eslint/no-explicit-any */
/*eslint-disable @typescript-eslint/no-unused-vars*/
"use client";
import * as React from "react";
import FormInput from "@/components/InputForm";
import { callAPI } from "@/config/axios";
// import Link from "next/link";

const CreateEvent = () => {
  const [image, setImage] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [desc, setDesc] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [eventType, setEventType] = React.useState<string>("");
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");
  const [city, setCity] = React.useState<number>(1);
  const [cityList, setCityList] = React.useState<any>([]);
  const [categoryList, setCategoryList] = React.useState<any>([]);
  const [category, setCategory] = React.useState<number>(1);

  const getCities = async () => {
    const res = await callAPI.get("/city/all");
    setCityList(res.data.result);
  };

  const getCategories = async () => {
    const res = await callAPI.get("/category/all");
    setCategoryList(res.data.result);
  };

  const onCheckout = async () => {
    console.log({
      image,
      title,
      desc,
      category,
      eventType,
      price,
      startDate,
      endDate,
      city,
    });

    // await callAPI.post(
    //   "/event/create",
    //   {
    //     image: image,
    //     title: title,
    //     desc: desc,
    //     category: category,
    //     isPaidEvent: eventType === "paid" ? true : false,
    //     price: price,
    //     startDate: startDate,
    //     endDate: endDate,
    //     id_city: city,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJnZXJhbGRvQG1haWwuY29tIiwicm9sZSI6Im9yZ2FuaXplciIsImlhdCI6MTczNjM1MzQ1NCwiZXhwIjoxNzM2MzU3MDU0fQ.c1pCsvWgx8xkV6ytsu_Ogyu2kVIuCkV4kzFbPWtgcRY`,
    //     },
    //   }
    // );
  };

  React.useEffect(() => {
    getCities();
    getCategories();
  }, []);

  return (
    <div className="flex flex-col gap-6 md:w-[70%] px-4">
      <h1 className="text-3xl font-semibold">Create Event</h1>
      <div className="p-4 flex flex-col gap-4 outline outline-gray-300 rounded-md">
        <FormInput
          name="Event Banner"
          type="text"
          label="Event Banner"
          placeholder="insert an image link"
          onChange={(e: any) => {
            setImage(e.target.value);
          }}
        />
        <FormInput
          name="Title"
          type="text"
          label="Title"
          placeholder="insert your event title"
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />
        <FormInput
          name="Description"
          type="textarea"
          label="Description"
          placeholder="describe your event"
          onChange={(e: any) => {
            setDesc(e.target.value);
          }}
        />
        <div className="flex flex-col text-gray-700">
          <label htmlFor="category" className="text-sm">
            Category
          </label>
          <select
            className="border p-2 rounded-md shadow-md bg-white w-full"
            name="category"
            id="category"
            onChange={(e: any) => {
              setCategory(e.target.value);
            }}
          >
            {categoryList?.map((e: any, index: number) => {
              return (
                <option value={e.id} key={index}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Event Type</p>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="eventType"
              id="Paid"
              value={"paid"}
              className="w-fit"
              onClick={(e: any) => {
                setEventType(e.target.value);
              }}
            />
            <label htmlFor="Paid">Paid</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="eventType"
              id="Free"
              value={"free"}
              className="w-fit"
              onClick={(e: any) => {
                setEventType(e.target.value);
              }}
            />
            <label htmlFor="Free">Free</label>
          </div>
        </div>
        <FormInput
          name="Price"
          type={eventType === "paid" ? "number" : "hidden"}
          label={eventType === "paid" ? "Price" : " "}
          onChange={(e: any) => {
            setPrice(e.target.value);
          }}
        />
        <FormInput
          name="Start Date"
          type="datetime-local"
          label="Start Date"
          onChange={(e: any) => {
            setStartDate(e.target.value);
          }}
        />
        <FormInput
          name="End Date"
          type="datetime-local"
          label="End Date"
          onChange={(e: any) => {
            setEndDate(e.target.value);
          }}
        />
        <div className="flex flex-col text-gray-700">
          <label htmlFor="amount" className="text-sm">
            City
          </label>
          <select
            className="border p-2 rounded-md shadow-md bg-white w-full"
            name="amount"
            id="amount"
            onChange={(e: any) => {
              setCity(e.target.value);
            }}
          >
            {cityList?.map((e: any, index: number) => {
              return (
                <option value={e.id} key={index}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
        <button
          type="submit"
          onClick={onCheckout}
          className="p-4 w-fit bg-red-400 text-white hover:bg-red-500 rounded-md shadow-md"
        >
          Create Event
        </button>
      </div>
    </div>
  );
};
export default CreateEvent;
