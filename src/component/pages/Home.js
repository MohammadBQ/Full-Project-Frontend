// // import React from "react";
// // import BeefAndPepperStirFry from "../../assets/images/BeefAndPepperStirFry.jpg";
// // import Shakshuka from "../../assets/images/Shakshuka.jpg";
// // import EasySpaghettiBolognese from "../../assets/images/EasySpaghettiBolognese.jpg";
// // import AirFryerCrispyChickenBurger from "../../assets/images/AirFryerCrispyChickenBurger.jpg";
// // import BakedSweetPotato from "../../assets/images/BakedSweetPotato.jpg";
// // import ChickpeaFattoush from "../../assets/images/ChickpeaFattoush.jpg";

// // const Home = () => {
// //   return (
// //     <div>
// //       <div class="bg-image img1">
// //         <img src={BeefAndPepperStirFry} alt="BeefAndPepperStirFryImage"></img>
// //       </div>
// //       <div class="bg-image img2">
// //         <img src={Shakshuka} alt="ShakshukaImage"></img>
// //       </div>
// //       <div class="bg-image img3">
// //         <img
// //           src={EasySpaghettiBolognese}
// //           alt="EasySpaghettiBologneseImage"
// //         ></img>
// //       </div>
// //       <div class="bg-image img4">
// //         <img
// //           src={AirFryerCrispyChickenBurger}
// //           alt="AirFryerCrispyChickenBurgerImage"
// //         ></img>
// //       </div>
// //       <div class="bg-image img5">
// //         <img src={BakedSweetPotato} alt="BakedSweetPotatoImage"></img>
// //       </div>
// //       <div class="bg-image img6">
// //         <img src={ChickpeaFattoush} alt="ChickpeaFattoushImage"></img>
// //       </div>
// //       <br />
// //       <div class="bg-text">
// //         <h2>A NICE MEAL</h2>
// //         <p>
// //           The aim of this Application is to make meals as pleasurable to prepare
// //           as they are to eat
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="bg-gray-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Navbar content */}
//           {/* ... */}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-gray-800 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-bold text-white">
//             Welcome to Food Delight!
//           </h1>
//           <p className="mt-2 text-lg text-gray-300">
//             Explore our delicious recipes and satisfy your taste buds.
//           </p>

//           <div className="mt-8">
//             <NavLink>
//               <a
//                 href="recipes"
//                 className="bg-white hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded-full"
//               >
//                 View Recipes
//               </a>
//             </NavLink>
//           </div>
//         </div>
//       </header>

//       {/* Featured Recipes Section */}
//       <section className="bg-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">
//             Featured Recipes
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {/* Recipe cards */}
//             {/* ... */}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Footer content */}
//           {/* ... */}
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import chesseBurger from "../../assets/images/cheese burger.jpeg";
import pasta from "../../assets/images/pasta.jpeg";
import pizza from "../../assets/images/pizza.jpeg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navbar content */}
          {/* ... */}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">
            Welcome to A Nice Meal!
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Explore our delicious recipes and satisfy your taste buds.
          </p>
          <div className="mt-8">
            <NavLink to="/recipes">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                View Recipes
              </button>
            </NavLink>
          </div>
        </div>
      </header>

      {/* Featured Recipes Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Recipe cards */}
            <div className="bg-white rounded-lg shadow-md">
              <img
                src={chesseBurger}
                alt="chesseBurger"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  chesseBurger
                </h3>
                <p className="text-gray-600">
                  Description of Recipe 1. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src={pasta}
                alt="pasta"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Pasta </h3>
                <p className="text-gray-600">
                  Description of Recipe 2. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src={pizza}
                alt="pizza"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Pizza</h3>
                <p className="text-gray-600">
                  Description of Recipe 3. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer content */}
          {/* ... */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
