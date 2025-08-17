import React from "react";

const BuyProduct = () => {
  return (
    <div className=" flex flex-col gap-4  w-[514px] p-8">
      <h1 className="font-headings text-[24px] text-secondary">
        Buy Ayaka (20 cm * 60 cm)
      </h1>
      <form className="flex flex-col h-full gap-4 ">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input className="bg-gray-200" />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input className="bg-gray-200" />
        </div>
        <div className="flex flex-col gap-1">
          <label>Phone Number</label>
          <input className="bg-gray-200" />
        </div>
        <div className="flex flex-col gap-1">
          <label>Message</label>
          <textarea className="bg-gray-200 h-[156px]" />
        </div>
        <button className="bg-black text-tertiary">
          Send Purchase Request
        </button>
      </form>
    </div>
  );
};

export default BuyProduct;
