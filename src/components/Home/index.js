import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

const apiConstrants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
};

class Home extends Component {
  state = { getImageList: [], apiStatus: apiConstrants.initial };

  componentDidMount() {
    this.getAllTempleImage();
  }

  getAllTempleImage = async () => {
    const response = await fetch(
      "https://temple-backend-production.up.railway.app/image"
    );
    if (response.ok === true) {
      const data = await response.json();
      const formatedData = data.map((each) => ({
        id: each.id,
        description: each.description,
        imageUrl: each.image_url,
        location: each.location,
        name: each.name,
      }));
      this.setState({
        getImageList: formatedData,
        apiStatus: apiConstrants.success,
      });
    } else {
      this.setState({ apiStatus: apiConstrants.failure });
    }
  };

  renderThumbnailContainer = () => (
    <div className="home-thumbnail-container">
      <img
        src="https://templesofindia.org/assets/images/NewHomeTemple.png"
        className="home-thumbnail-image"
      />
      <div className="home-thumbnail-counting">
        <p className="temple-counting-heading">
          7,50,000 Plus Temples and Counting...{" "}
        </p>
        <Link to="/addTemple">
          <button className="add-temple-button"> Add Your Temple </button>
        </Link>
      </div>
    </div>
  );

  renderFeatureContainer = () => (
    <>
      <Link to="/featured-temple">
        <div className="feature-image-container">
          <img src="https://templesofindia.org/assets/images/newFeatured.png" />
          <img src="https://templesofindia.org/assets/images/newRecentlyEdited.png" />
        </div>
      </Link>
    </>
  );

  renderTempleImage = () => {
    const { getImageList } = this.state;
    return (
      <>
        <ul className="temple-list-image-container">
          {getImageList.map((each) => (
            <Link to={`/image-detail/${each.id}`} key={each.id}>
              <li className="image-list">
                <h1 className="temple-name"> {each.name} </h1>
                <p className="temple-location"> {each.location} </p>
                <img src={each.imageUrl} className="temple-image" />
                <p className="temple-para"> {each.description} </p>
              </li>
            </Link>
          ))}
        </ul>
      </>
    );
  };

  renderFilterContainer = () => (
    <>
      <div className="filter-container">
        <h1>Posts </h1>
        <div
          onclick="location.href='https://blog.templesofindia.org/post/16-divine-darshans-of-unique-shivlingas/'"
          class="post-box"
        >
          16 Divine Darshans of Unique Shivlingas
        </div>
        <div
          onclick="location.href='https://blog.templesofindia.org/post/top-10-tallest-statues-of-hindu-gods-in-the-world/'"
          class="post-box"
        >
          Top 10 Tallest Statues of Hindu Gods in the World
        </div>
        <div
          onclick="location.href='https://blog.templesofindia.org/post/12-famous-and-beautiful-hindu-temples-outside-india/'"
          class="post-box"
        >
          12 famous and beautiful Hindu Temples outside India
        </div>
        <div
          onclick="location.href='https://blog.templesofindia.org/post/arulmigu-subramaniya-swamy-temple-tiruchendur/'"
          class="post-box"
        >
          Arulmigu Subramaniya Swamy Temple, Tiruchendur
        </div>
        <div
          onclick="location.href='https://blog.templesofindia.org/post/kopeshwar-temple/'"
          class="post-box"
        >
          Kopeshwar Temple
        </div>
        <div>
          <h1> Tags </h1>
          <ul className="tag-list">
            <li className="tag">
              {" "}
              <button className="tag-button"> Bhoodevi </button>
            </li>
            <li className="tag">
              {" "}
              <button className="tag-button"> Mumbai </button>
            </li>
            <li className="tag">
              {" "}
              <button className="tag-button"> Shiva </button>
            </li>
            <li className="tag">
              {" "}
              <button className="tag-button"> 2022 </button>
            </li>
            <li className="tag">
              {" "}
              <button className="tag-button"> kailasa </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  render() {
    return (
      <>
        <Navbar />
        <div className="home-main-container">
          {this.renderThumbnailContainer()}
          <div className="home-container">
            {this.renderFeatureContainer()}
            {this.renderFilterContainer()}
            {this.renderTempleImage()}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;

//    {this.renderTempleImage()}
//
