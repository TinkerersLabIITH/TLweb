// import { items } from "./imagescroll.json";
// import Carousel from "react-elastic-carousel";
// import styles from "../styles/Elastic.module.css";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 1, itemsToScroll: 1 },
//   { width: 768, itemsToShow: 1 },
//   { width: 1200, itemsToShow: 1 },
// ];
// export default function ElasticCarousel() {
//   const { elastic } = items;
//   return (
//     <div className={styles.container}>
//       <div>
//         <h1>Gallery</h1>
//       </div>

//       {/* <hr className={styles.seperator} /> */}
//       <div className={styles.contWrapper}>
//         <Carousel breakPoints={breakPoints}>
//           {elastic.map((item) => (
//             <div key={item.id} className={styles.card}>
//               <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 className={styles.backgroundImage}
//               />
//               {/* <div className={styles.title}>
//                 <h3>{item.title} </h3>
//               </div> */}
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// }

/*
.container {
  margin: 25vh 5vw;
  width: 90%;
  padding: 20px;
  border-radius: 15px;
}

.container h1 {
  
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
text-align: center;

color: #000000;
padding-bottom: 20px;
}

.carousWrapper {
  width: 80%;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  background-color: rgba(4, 4, 4, 0.228);
  border-radius: 15px;
}
.title h3 {
  padding: 2rem;
  color: #fff;
}
.backgroundImage{
  width:100%;
  height:auto;
}
 */
