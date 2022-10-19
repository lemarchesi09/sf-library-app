import "./dashboard.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../features/books/booksSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Dashboard = () => {
  const books = useSelector((state) => state.books);
  const usersFromStore = useSelector((state) => state.users);
  const userFinded = usersFromStore.find((usuario) => usuario.active === true);
  console.log(userFinded);

  const dispatch = useDispatch();

  const handleDelete = (title) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8c7851",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBook(title));
        MySwal.fire({
          title: "Delete book",
          text: "the book was successfully removed",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    });
  };

  const primerAuthor = (stringToSplit, separator) => {
    const arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings[0];
  };
  const comma = "-";

  // useEffect( () => {
    
  // }, [books])

  return (
    <div className="dashboard">
      <div className="dashboard-text">
        <h2>Libros</h2>
        {userFinded ? (
          <button className="btn-crt">
            <Link to="/createBook">ADD Book</Link>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="dashboard-cont">
        {books.map((book, index) => {
          return (
            <div key={index} className="book-item">
              <h3>{book.title}</h3>
              <p>
                <span>Author: </span>
                {primerAuthor(book.author, comma)}
              </p>
              <img src={book.imageLink} alt="img-card" />

              <Link to={`/details/${index}`}>
                <button className="button btn-info">More info</button>
              </Link>
              {userFinded ? (
                <div className="button-cont">
                  <button className="button btn-upd">
                    <Link to={`/update/${index}`}>Update</Link>
                  </button>
                  <button
                    className="button btn-dlt"
                    onClick={() => {
                      handleDelete(book.title);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
