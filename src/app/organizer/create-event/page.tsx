/* eslint-disable @typescript-eslint/no-explicit-any */
/*eslint-disable @typescript-eslint/no-unused-vars*/
"use client";
import * as React from "react";
import FormInput from "@/components/InputForm";
// import Link from "next/link";

const CreateEvent = () => {
  const [title, setTitle] = React.useState<string>("");
  const [desc, setDesc] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [eventType, setEventType] = React.useState<string>("");
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");
  return (
    <div className="flex flex-col gap-6 md:w-[70%] px-4">
      <h1 className="text-3xl font-semibold">Create Event</h1>
      <div className="p-4 flex flex-col gap-4 outline outline-gray-300 rounded-md">
        <FormInput name="Event Banner" type="file" label="Event Banner" />
        <FormInput
          name="Title"
          type="text"
          label="Title"
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />
        <FormInput
          name="Description"
          type="textarea"
          label="Description"
          onChange={(e: any) => {
            setDesc(e.target.value);
          }}
        />
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
          type={eventType === "Paid" ? "number" : "hidden"}
          label={eventType === "Paid" ? "Price" : ""}
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
      </div>
    </div>
  );
};
export default CreateEvent;
