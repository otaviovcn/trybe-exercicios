import React from "react";
import Greeting from "./Greeting";
import Image from "./Image";
import Album from './Album'
import albums from "./data";

const arrName = ['Edvaldo', 'Otávio', 'Terezinha']

const listAlbums = albums.map((album) => {
  return <Album album={album} />
});

class App extends React.Component {
  render() {
    return (
      <>
        <Greeting name={arrName[2]} lastName="Nascimento" />
        <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring," />
        <div>
          {listAlbums};
        </div>
      </>
    );
  }
}

export default App;
