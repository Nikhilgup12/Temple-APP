import { Component } from "react";
import Slider from "react-slick";
import Navbar from "../Navbar";
import FaqItem from "../FaqItem";
import Footer from "../Footer";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const faqsList = [
  {
    id: 0,
    questionText: "Special Features",
    answerText:
      "Foundation Year, Sthala Tree, Theertham, Ratham, Architecture, Kerala Style, Other Speciality It is the earliest available epigraphical record mentioning a Kodungallur Chera king and written in the Malayalam language. According to folklore, sage Parashurama has installed the idol of Lord Shiva in the Treta Yuga. The temple is a part of the 108 famous Shiva temples in Kerala.",
  },

  {
    id: 1,
    questionText: "Sthala Puran",
    answerText:
      "The Goddess is a family deity as well as mostly considered a Pallavi of many Brahmins. According to local legends, it was once said that Shri Shantadurga of Keloshi who is now worshiped in Kavlem wanted to venture out in the Arabian sea and from the coast head to Colva to meet her sister Mahalakshmi which was then located in Colva, now in (Bandivade/Bandora). The Goddess sought permission from her husband Shri Mangesh Maharudra, (which was then located in Kushasthali, now in Mangeshi) and took her leave. In order to reach the sea, the Goddess had to cross Murgaon - Sankwal (modern day Mormugoa -Sancoale). On her way, the Goddess witnessed a very gruesome scene, a demon (asura) named Kaal-antak/Kalantakasura(the destroyer) was harassing the Saraswat Brahmins – impeding their rituals and causing great catastrophe to Sancoale. The Saraswats brahmins from sancoale had their Kuldevi as Shri Shantadurga of Keloshi and Lakshmi Narasimha as their Kuldev. One of the Brahmin peasants who was troubled witnessed the Goddess and knelt before her and prayed to save Sankwal and its inhabitants. He promised to build a temple in her honour.",
  },
  {
    id: 2,
    questionText: "Architecture",
    answerText:
      "Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.",
  },
  {
    id: 3,
    questionText: "Alankar of Deity",
    answerText:
      "Shantadurga of Sankhavali is never seated on a carnivore (tiger or lion), but instead an elephant which is associated and assumed to be her vahana. Shantadurga with her divine powers transformed herself into a Mahishasurmardhini mounted on an elephant and commanded the demon to stop. A fierce war was fought between the demon and the Goddess. Shantadurga was victorious, the inhabitants ofsancoale graced the Goddess and called her 'Vijaya'.",
  },
  {
    id: 3,
    questionText: "Prayers and Benefits",
    answerText:
      "Special Vratas and Prayers Offerings to Deity Stotras and Mantras",
  },
];

class ImageDetail extends Component {
  state = { activeItem: {}, activeStar: false };

  toggleItem = (id) => {
    this.setState((preVstate) => ({
      activeItem: { ...preVstate.activeItem, [id]: !preVstate.activeItem[id] },
    }));
  };

  onStarClick = () => {
    this.setState((prevState) => ({
      activeStar: !prevState.activeStar,
    }));
  };

  render() {
    const { activeItem, activeStar } = this.state;

    return (
      <>
        <Navbar />
        <div className="slider-container">
          <Slider slidesToShow={1} dots={true}>
            <div className="carousel-list-container">
              <img
                src="https://templesofindia.org/assets/compressed/tofi-banner.jpg"
                className="carousel-image"
              />{" "}
            </div>
            <div className="carousel-list-container">
              <img
                src="https://templesofindia.org/assets/compressed/689b122e67e71ed35a15f1f41f977302_1151.jpg"
                className="carousel-image"
              />{" "}
            </div>
            <div className="carousel-list-container">
              <img
                src="https://templesofindia.org/assets/compressed/tofi-banner.jpg"
                className="carousel-image"
              />{" "}
            </div>
          </Slider>
        </div>
        <div className="temple-detail-container">
          <div>
            <h1 className="image-detail-heading"> Vijayadurga Temple </h1>
            <p className="image-detail-para">Maninath Baba </p>
          </div>

          <div className="star-container">
            <img src="https://templesofindia.org/assets/icons/custom_visited.svg" />
            <button onClick={this.onStarClick} className="active-button">
              <img src="https://templesofindia.org/assets/icons/custom_favorite.svg" />
            </button>
          </div>
        </div>

        <div className="image-detail-container">
          <div className="faq-question-container">
            <ul className="faq-list-container">
              {faqsList.map((each) => (
                <FaqItem
                  faqItem={each}
                  key={each.id}
                  toggleItem={this.toggleItem}
                  isActive={activeItem[each.id]}
                />
              ))}
            </ul>
          </div>

          <div className="location-container">
            <div>
              <h3>View on Maps</h3>
              <p>Amarkhande, Keri, Ponda, Betki, Goa 403401, India</p>
            </div>
            <div>
              <h3>Open Timings</h3>
              <p>Pooja Timings</p>
            </div>
            <div>
              <h3>Other Deities</h3>
              <p>Amenities</p>
              <button>close</button>
            </div>
            <div>
              <h3>Drinking Water</h3>
              <button>close</button>
            </div>
            <div>
              <h3>Pooja Item Shops</h3>
              <button>close</button>
            </div>
            <div>
              <h3>Restaurants Nearby</h3>
              <button>close</button>
            </div>
            <div>
              <h3>Restroom</h3>
              <button>close</button>
            </div>
            <div>
              <h3>How to reach?</h3>
              <p>
                Nearest Bus Station <i className="fas fa-directions-bus"></i>
              </p>
              <p>
                Nearest Railway Station{" "}
                <i className="fas fa-directions-railway"></i>
              </p>
              <p>
                Nearest Airport <i className="fas fa-local-airport"></i>
              </p>
            </div>
            <div>
              <h3>Contact Details</h3>
              <p>
                Website:{" "}
                <a href="http://www.shrivijayadurga.org/">
                  http://www.shrivijayadurga.org/
                </a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ImageDetail;
