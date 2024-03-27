import { BiArrowToTop, BiArrowToBottom } from "react-icons/bi";

import "./index.css";

const FaqItem = (props) => {
  const { faqItem, toggleItem, isActive } = props;
  const { questionText, answerText, id } = faqItem;
  const onDisplayQuestion = () => {
    toggleItem(id);
  };

  const image = isActive ? <BiArrowToTop /> : <BiArrowToBottom />;

  return (
    <li className="faq-list">
      <div className="faq-question-list">
        <div className="faq-button-container">
          <button className="plus-btn" onClick={onDisplayQuestion}>
            {image}
          </button>
          <h1 className="faq-question-heading"> {questionText} </h1>
        </div>

        <button className="plus-btn">
          <img src="https://templesofindia.org/assets/icons/mdi_pencil.svg" />
        </button>
      </div>
      {isActive ? (
        <div className="faq-answer">
          <hr />
          <p className="faq-answer-para"> {answerText} </p>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};
export default FaqItem;
