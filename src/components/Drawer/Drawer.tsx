// import { useEffect } from "react";

// const Drawer = ({ show, title, items = [], onClose }) => {
//   useEffect(() => {
//     document.body.style.overflowY = show ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflowY = "unset";
//     };
//   }, [show]);

//   return (
//     <>
//       <S.Drawer show={show} className="active">
//         <Menu title={title} items={items} onClose={onClose} />
//       </S.Drawer>
//     </>
//   );
// };

const Drawer = () => {
  return <h1>Drawer</h1>;
};
export default Drawer;
