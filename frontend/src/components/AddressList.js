import React from "react";

const AddressList = ({ arrayList }) => {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {arrayList.map((item) => (
          <li key={item.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <input
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {item.street}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                Phone: {item.phone}
              </p>
              <p className="text-sm leading-6 text-gray-900">{item.state}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
