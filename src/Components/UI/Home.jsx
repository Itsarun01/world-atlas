import {FaArrowRightToBracket} from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <main className="hero-section main">
        <div className="container grid grid-two-col">
          <div className="hero-content">
            <h1 className="heading-xl">
              Explore the World, One Country at a Time.
            </h1>
            <p className="paragraph">
              Discover the history, culture, and beauty of every nation. Sort,
              search, and filter through countries to find the details you need.
            </p>
            <button className="">
              Start Exploring <FaArrowRightToBracket />
            </button>
          </div>
          <div className="hero-image">
            <img
              className="banner-image"
              src="/images/img.png"
              alt="Earth Image..."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
