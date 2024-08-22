// // components/FormLayout.jsx
// import '../styles/components/FormLayout.css';


// const FormLayout = ({ title, children }) => {
//   return (
//     <div className="form-layout-container">
//       <p className="form-layout-title">{title}</p>
//       <div className="form-layout-inner">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default FormLayout;
import "../styles/components/FormLayout.css";

const FormLayout = ({ title, children }) => {
  return (
    <div className="form-layout-container">
      <p className="form-layout-title">{title}</p>
      <div className="form-layout-inner">
        {children}
      </div>
    </div>
  );
};

export default FormLayout;

