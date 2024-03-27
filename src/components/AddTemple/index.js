import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

const AddTemple = () => {
  return (
    <>
      <Navbar />
      <div className="nearBySearch-container">
        <div className="addTemple-search-container">
          <img
            src="https://i.stack.imgur.com/HILmr.png"
            className="addtemple-google-image"
          />
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label> <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input-search"
                />
              </div>
              <div className="form-group">
                <label htmlFor="godname">God Name:</label>
                <br />
                <input
                  type="text"
                  id="godname"
                  name="godname"
                  required
                  className="input-search"
                />
              </div>
              <div className="form-latitude-container">
                <div className="form-group">
                  <label htmlFor="latitude">Latitude:</label> <br />
                  <input
                    type="text"
                    id="latitude"
                    name="latitude"
                    required
                    className="input-search"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="longitude">Longitude:</label> <br />
                  <input
                    type="text"
                    id="longitude"
                    name="longitude"
                    required
                    className="input-search"
                  />
                </div>
              </div>
              <div className="form-city-container">
                <div className="form-latitude-container">
                  <div className="form-group">
                    <label htmlFor="city">City:</label> <br />
                    <input type="text" id="city" name="city" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State:</label> <br />
                    <input type="text" id="state" name="state" required />
                  </div>
                </div>
                <div className="form-latitude-container">
                  <div className="form-group">
                    <label htmlFor="country">Country:</label> <br />
                    <input type="text" id="country" name="country" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="district">District:</label> <br />
                    <input type="text" id="district" name="district" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="locality">Locality:</label> <br />
                  <input type="text" id="locality" name="locality" required />
                </div>
              </div>
              <button type="submit" className="add-button">
                Add New Temple
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddTemple;
