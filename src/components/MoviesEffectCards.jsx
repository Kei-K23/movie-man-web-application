// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";

// // import required modules
// import { EffectCards } from "swiper/modules";
// import { useRef, useState } from "react";

// const MoviesEffectCards = ({ trendingMovies }) => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [offsetX, setOffsetX] = useState(0);
//   // const [offsetY, setOffsetY] = useState(0);

//   const onMouseDown = (e) => {
//     isDragging = true;
//     offsetX = e.clientX - draggable.getBoundingClientRect().left;
//     offsetY = e.clientY - draggable.getBoundingClientRect().top;

//     // Add event listeners for mousemove and mouseup on the entire document
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//   };

//   return (
//     <>
//       <Swiper
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper w-[200px]"
//       >
//         {trendingMovies &&
//           trendingMovies.map((movie) => (
//             <SwiperSlide key={movie.id} className="w-full h-[300px]">
//               <img
//                 onMouseDown={(e) => {
//                   document.addEventListener("mousemove");
//                   document.addEventListener("mouseup");
//                 }}
//                 onMouseMove={(e) => {
//                   console.log(e.clientX);
//                 }}
//                 // ref={refImg}
//                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//               />
//             </SwiperSlide>
//           ))}
//       </Swiper>
//     </>
//   );
// };

// export default MoviesEffectCards;
