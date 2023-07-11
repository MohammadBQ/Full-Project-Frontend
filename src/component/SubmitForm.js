// import React from "react";

// const SubmitForm = () => {

//     const [input, setInput] = useState({
//         username: '',
//         password: '',
//         confirmPassword: ''
//       });

//       const [error, setError] = useState({
//         username: '',
//         password: '',
//         confirmPassword: ''
//       })
////* name is var changed based on input parsed to it : once recipeTitle then recipeInstructions and so on

//       const onInputChange = e => {
//         const { name, value } = e.target;
//         setInput(prev => ({
//           ...prev,
//           [name]: value
//         }));
//         validateInput(e);
//       }

//       const validateInput = e => {
//         let { name, value } = e.target;
//         setError(prev => {
//           const stateObj = { ...prev, [name]: "" };

//           switch (name) {

//             case "recipeImage":
//               if (!value) {
//                 stateObj[name] = "Please Add Recipe Image.";
//               }
//               break;

//             case "recipeTitle":
//               if (!value) {
//                 stateObj[name] = "Please enter Recipe title.";
//               }
//               break;

//             case "recipeIngredients":
//               if (!value) {
//                 stateObj[name] = "Please enter Recipe Ingredients.";

//               break;

//             case "recipeInstructions":
//               if (!value) {
//                 stateObj[name] = "Please enter Recipe Instructions.";
//               break;

//             default:
//               break;
//           }

//           return stateObj;
//         });
//       }

//       return (
//         <div className="app">
//           <h4>Recipe Form Validation</h4>
//           <form>

//             <input
//               type="file"
//               name="recipeImage"
//               placeholder='Recipe Image'
//               value={input.recipeImage}
//               onChange={onInputChange}
//             {error.recipeImage && <span className='err'>{error.recipeImage}</span>}

//             <input
//               type="recipeTitle"
//               name="recipeTitle"
//               placeholder='Enter Recipe Title'
//               value={input.recipeTitle}
//               onChange={onInputChange}

//             {error.recipeTitle && <span className='err'>{error.recipeTitle}</span>}

//             <input
//               type="recipeIngredients"
//               name="recipeIngredients"
//               placeholder='Enter Recipe Ingredients'
//               value={input.recipeIngredients}
//               onChange={onInputChange}
//             {error.recipeIngredients && <span className='err'>{error.recipeIngredients}</span>}

//         <input
//               type="recipeInstructions"
//               name="recipeInstructions"
//               placeholder='Enter Recipe Instructions'
//               value={input.recipeInstructions}
//               onChange={onInputChange}
//             {error.recipeInstructions && <span className='err'>{error.recipeInstructions}</span>}

//             <button>Submit</button>
//           </form>
//         </div>
//       );
//     }

// export default SubmitForm;
import React from "react";

const SubmitForm = () => {
  return <div>SubmitForm</div>;
};

export default SubmitForm;
