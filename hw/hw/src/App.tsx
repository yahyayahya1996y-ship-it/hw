function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Home Address
          </a>

          <button
            className="btn btn-outline-light ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#hiddenContent"
            aria-expanded="false"
            aria-controls="hiddenContent"
          >
            Show Content
          </button>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="collapse" id="hiddenContent">
          <div className="card card-body">
            This is hidden content. It appears when you click the button in the navbar.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;