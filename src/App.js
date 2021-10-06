import React, { useEffect, useState } from "react";
import SinglePagination from "./SinglePagination";
import SingleUser from "./SingleUser";

const App = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [users, setUsers] = useState([]);
  const [curPage, setCurPage] = useState(1);

  const url = `https://reqres.in/api/users?page=${curPage}`;

  const fetchUsers = async () => {
    const response = await fetch(url);
    const resJson = await response.json();
    setTotalPages(resJson.total_pages);
    setUsers(resJson.data);
  };

  useEffect(() => {
    fetchUsers();
  }, [curPage]);

  return (
    <main className="main ">
      <article className="title text-center text-4xl font-semibold my-12 ">
        <h1 className=" mb-2">List Of Users</h1>
        <div className="underline h-0.5 mx-auto w-32 bg-yellow-500 "></div>
      </article>
      <section className="user-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:gap-10 my-16">
        {users.map(user => (
          <SingleUser key={user.id} {...user} />
        ))}
      </section>

      <div className="pagination text-center flex items-center justify-center gap-1 mb-16">
        {Array(totalPages)
          .fill()
          .map((page, index) => {
            const pageNum = ++index;
            let active = "";

            if (curPage === pageNum) active = "active";
            else active = "";

            return (
              <SinglePagination
                key={index}
                pageNum={pageNum}
                active={active}
                setCurPage={setCurPage}
              />
            );
          })}
      </div>
    </main>
  );
};

export default App;
