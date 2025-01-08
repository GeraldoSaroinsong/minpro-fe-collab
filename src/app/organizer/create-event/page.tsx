/* eslint-disable @typescript-eslint/no-explicit-any */
/*eslint-disable @typescript-eslint/no-unused-vars*/
"use client";
import * as React from "react";
import FormInput from "@/components/InputForm";
import { callAPI } from "@/config/axios";
import { useAppSelector } from "@/lib/redux/hooks";
// import Link from "next/link";

const CreateEvent = () => {
  const [image, setImage] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [desc, setDesc] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [eventType, setEventType] = React.useState<string>("");
  // const [startDate, setStartDate] = React.useState<string>("");
  // const [endDate, setEndDate] = React.useState<string>("");
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
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

  const userData = useAppSelector((state) => state.userReducer);

  const id_organizer = userData.id;

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

    const token = localStorage.getItem("tkn");
    console.log("CREATE EVENT TOKEN", token);

    const response = await callAPI.post(
      "/event/create",
      {
        id_category: category,
        id_city: city,
        title: title,
        desc: desc,
        price: price,
        isPaidEvent: eventType === "paid" ? true : false,
        startDate: startDate,
        endDate: endDate,
        image: image,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("EVENT TERBUAT", response);
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
              setCategory(parseInt(e.target.value));
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
            setPrice(parseInt(e.target.value));
          }}
        />
        <FormInput
          name="Start Date"
          type="date"
          label="Start Date"
          onChange={(e: any) => {
            setStartDate(new Date(e.target.value));
          }}
        />
        <FormInput
          name="End Date"
          type="date"
          label="End Date"
          onChange={(e: any) => {
            setEndDate(new Date(e.target.value));
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
              setCity(parseInt(e.target.value));
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
