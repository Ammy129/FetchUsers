import React from "react";

const SingleUser = ({ id, email, first_name, last_name, avatar }) => {
  return (
    <article className="user p-6 rounded-lg bg-white shadow-md hover:bg-yellow-100 transition duration-200 flex items-center gap-4 grid place-items-center text-center ">
      <figure className="user-img w-20 h-20 rounded-full bg-gray-300 overflow-hidden border-2 border-yellow-500">
        <img src={avatar} alt="user-img" className="w-full object-cover" />
      </figure>
      <header className="">
        <h3 className="user-name text-xl font-semibold text-gray-600">
          {first_name + " " + last_name}
        </h3>
        <p className="user-email text-blue-500">{email}</p>
      </header>
    </article>
  );
};

export default SingleUser;
