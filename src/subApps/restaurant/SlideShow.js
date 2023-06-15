import {useState} from 'react';

export function SlideShow() {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleClickRight(){
        if (activeIndex === 2){
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex+1);
        }
    }

    function handleCLickLeft(){
        if (activeIndex === 0){
            setActiveIndex(2);
        } else {
            setActiveIndex(activeIndex-1);
        }
    }
    return (
        <>
      <div className="slideshow">
        <Image name="donut1.webp" isActive = {activeIndex === 0} /> 
        <Image name="donut2.webp" isActive = {activeIndex === 1} />
        <Image name="donut3.webp" isActive = {activeIndex === 2} />
        <button onClick = {handleCLickLeft} className="arrow-left">{"\u276E"}</button>
        <button onClick = {handleClickRight} className="arrow-right">{"\u276F"}</button>
      </div>
    </>
  );
}

function Image({ name, isActive}) {
    
  return (
    <>
    {isActive ? 
      <img
        className="donutImg"
        src={require(`../../images/${name}`)}
        alt="donuts"
        style = {{display: 'inline-block'}}
      />
      : null}
    </>
  );
}
