import "./category-item.styles.scss";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const goToPage = (event) => {
    const category = event.target.classList[1];
    navigate(`shop/${category}`);
  };
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div onClick={goToPage} className={`category-body-container ${title}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
