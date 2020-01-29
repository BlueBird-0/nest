import React from 'react';
import Proptypes from 'prop-types';

function Food({name, url, rating}) {
  return (
      <div>
        <h1> I like {name} </h1>
          <h4>{rating}/5.0</h4>
        <img src={url} />
      </div>
      )
}
Food.propTypes = {
    name: Proptypes.string.isRequired,
    url: Proptypes.string.isRequired,
    rating: Proptypes.number.isRequired
}

const foodILike = [{
    id: 1,
    name: "kimchi",
    rating : 5
}, {
    id: 2,
    name: "ramen",
    rating : 5.3
}, {
    id: 3,
    name: "samgiopsal",
    rating : 4.7
}]
const defaultImageUrl = "profile/Kunal_Chaudhury/publication/221935879/figure/fig1/AS:305325572935680@1449806697160/Test-image-Checker-of-size-256-256-consisting-of-black-intensity-0-and-white.png"

function renderFood(dish) {
  console.log(dish)
  return  <Food key={dish.id} name={dish.name} url={defaultImageUrl} rating={dish.rating}/>
}


function App() {
  return (
    <div>

      {foodILike.map(renderFood)}
      {/*{foodILike.map(dish=> (<Food name={dish} url={defaultImageUrl}/> ))}*/}
      {/*<Food fav={"kimchi"} />*/}

    </div>
  );
}

export default App;
