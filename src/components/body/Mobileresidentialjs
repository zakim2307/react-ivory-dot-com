import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "../vertical1.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-vertical-carousel-component-in-react
 */

const VerticalCarousel = ({ data, leadingText }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 1);

  // Usd to determine the height/spacing of each item
  const itemHeight = 125;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 1;
  console.log(halfwayIndex, itemHeight, shuffleThreshold, visibleStyleThreshold)
  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };

  useEffect(() => {
    const interval_id = setInterval(handleClick, 3000);
     return () => {
       clearInterval(interval_id)
     }
  }, []);

  return (
    <>
   {/* <div className="container" style={{position:""}}> */}
   <div className="container">
      <section className="outer-container1 outer-container-mobile1">
      <div className="content1">
          <img
            src={data[activeIndex].content.image}
            alt={data[activeIndex].content.introline}
          />
        </div>
        <div className="carousel-wrapper1">
          <div className="carousel1">
            <div className="slides1">
              <div className="carousel-inner1">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn("carousel-item", {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                    })}
                    key={item.id}
                    style={{
                      transform: `translateX(${determinePlacement(i)}px)`
                    }}
                  >
                    {item.introline}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
    </>
  );
};

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  // leadingText: PropTypes.string.isRequired
};

export default VerticalCarousel;
