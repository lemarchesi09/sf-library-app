import "./dashboard.css";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const [libros, setLibros] = useState([]);

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

  useEffect(() => {
    setLibros(books);
  }, [books]);

  return (
    <section className="dashboard wrapper">
      <div className="dashboard-text ">
        <div className="container">
          <h2>All books</h2>
          {userFinded ? (
            <button className="btn-crt button__add">
              <Link to="/createBook">Add Book</Link>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="dashboard-cont container">
        {libros.map((book, index) => {
          return (
            <div key={index} className="book-item book__card">
              <h3>{book.title}</h3>
              <p>
                <span>Author: </span>
                {primerAuthor(book.author, comma)}
              </p>
              <img src={book.imageLink} alt="img-card" />

              <div>
                <Link to={`/details/${index}`}>
                  <button className="button btn-info button__card">More info</button>
                </Link>
                {userFinded ? (
                  <div className="button-cont">
                    <button className="button btn-upd button__card">
                      <Link to={`/update/${index}`}>Update</Link>
                    </button>
                    <button
                      className="button btn-dlt button__card"
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
            </div>
          );
        })}
      </div>
    </section>
  );
};
