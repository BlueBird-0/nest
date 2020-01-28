import React from 'react';

function Food({name, url}) {
  return (
      <div>
        <h1> I like {name} </h1>
        <img src={url} />
      </div>
      )
}

const foodILike = ["kimchi", "ramen", "samgiopsal"]
const defaultImageUrl = "profile/Kunal_Chaudhury/publication/221935879/figure/fig1/AS:305325572935680@1449806697160/Test-image-Checker-of-size-256-256-consisting-of-black-intensity-0-and-white.png"

function renderFood(dish) {
  console.log(dish)
  return  <Food name={dish} url={defaultImageUrl}/>
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
