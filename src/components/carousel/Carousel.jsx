// import { useState, useCallback } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';



// const Carousel = ({ items, active }) => {
//   cconst items = [
//     { image: 'https://source.unsplash.com/random/1', name: 'Item 1', description: 'Description 1' },
//     { image: 'https://source.unsplash.com/random/2', name: 'Item 2', description: 'Description 2' },
//     { image: 'https://source.unsplash.com/random/3', name: 'Item 3', description: 'Description 3' },
//     { image: 'https://source.unsplash.com/random/4', name: 'Item 4', description: 'Description 4' },
//     { image: 'https://source.unsplash.com/random/5', name: 'Item 5', description: 'Description 5' },
//     { image: 'https://source.unsplash.com/random/6', name: 'Item 6', description: 'Description 6' },
//     { image: 'https://source.unsplash.com/random/7', name: 'Item 7', description: 'Description 7' },
//   ];

//   const [state, setState] = useState({
//     items,
//     active: 0,
//     direction: '',
//   });

//   const generateItems = useCallback(() => {
//     let level;
//     const itemsToRender = [];
//     for (let i = state.active - 2; i < state.active + 3; i++) {
//       let index = i;
//       if (i < 0) {
//         index = state.items.length + i;
//       } else if (i >= state.items.length) {
//         index = i % state.items.length;
//       }
//       level = state.active - i;
//       itemsToRender.push(<Item key={index} item={state.items[index]} level={level} />);
//     }
//     return itemsToRender;
//   }, [state]);

//   const moveLeft = () => {
//     setState((prevState) => {
//       const newActive = prevState.active - 1;
//       return {
//         ...prevState,
//         active: newActive < 0 ? prevState.items.length - 1 : newActive,
//         direction: 'left',
//       };
//     });
//   };

//   const moveRight = () => {
//     setState((prevState) => {
//       const newActive = prevState.active + 1;
//       return {
//         ...prevState,
//         active: newActive % prevState.items.length,
//         direction: 'right',
//       };
//     });
//   };
//   const moveRight = () => {
//     setState((prevState) => {
//       const newActive = prevState.active + 1;
//       return {
//         ...prevState,
//         active: newActive % prevState.items.length,
//         direction: 'right',
//       };
//     });
//   };

//   return (
//     <div id="carousel" className="noselect">
//       <div className="arrow arrow-left" onClick={moveLeft}>
//         <i className="fi-arrow-left"></i>
//       </div>
//       <TransitionGroup className="carousel-group" component={null}>
//         {generateItems()}
//       </TransitionGroup>
//       <div className="arrow arrow-right" onClick={moveRight}>
//         <i className="fi-arrow-right"></i>
//       </div>
      
//     </div>
//   );
// };

// export default Carousel;

