import React from "react";
import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};
const AllUsers = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 5;
  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=100");
      const data = await response.json();

      setItems(data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(items);
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  if (loading) {
    return <MoonLoader loading={loading} cssOverride={override} size={150} />;
  }
  return (
    <div>
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
            className="prevNext"
          >
            Prev
          </button>
        </li>
        {renderPageNumbers}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
            className="prevNext"
          >
            Next
          </button>
        </li>
      </ul>

      {currentItems.map((item, k) => {
        return (
          <div key={k} className="container">
            <div className="photos">
              <img src={item.picture.medium} alt="pictures" />
            </div>

            <div className="test">
              <p>
                {item?.name?.title} {item?.name?.first} {item.name?.last}
              </p>

              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.dob.age}Years</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllUsers;
