import { useState } from 'react'

// // Write your Color component here
// const Color = (props) => {
//   return <div
//     className={props.color}
//     onClick={() =>
//       props.setSelectedColor(props.color)

//     }>
//   </div>
// }

// Object deconstruction method:
const Color = ({ color, setSelectedColor, selectedColor }) => {
  return (
    <div
      className={color}
      onClick={() => 
        setSelectedColor(color)
      }
    ></div>
  )
}
const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
      </div>
    </div>
  );
};

export default App;
