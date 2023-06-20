import { useState, useEffect, useCallback } from "react";

export function SlideShow({ imageArr }) {
  const [activeIndex, setActiveIndex] = useState(0);

  var indexSetup = -1;

const handleClickRight = useCallback(() => {
    if (activeIndex === imageArr.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }, [activeIndex,imageArr])

  function handleCLickLeft() {
    if (activeIndex === 0) {
      setActiveIndex(imageArr.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(handleClickRight,5000);
    return () => clearInterval(interval);
  },[handleClickRight])

  return (
    <>
      <div className="slideshow">
        {imageArr.map((image) => {
          indexSetup += 1;
          return (
            <Image
              key={image.name}
              name={image.name}
              isActive={activeIndex === indexSetup}
            />
          );
        })}
        <button onClick={handleCLickLeft} className="arrow-left">
          {"\u276E"}
        </button>
        <button onClick={handleClickRight} className="arrow-right">
          {"\u276F"}
        </button>
      </div>
    </>
  );
}

function Image({ name, isActive }) {
  return (
    <>
      {isActive ? (
        <img
          className="slideshow-image"
          src={require(`../../images/${name}`)}
          alt={name}
        />
      ) : null}
    </>
  );
}
