import { useSelector } from "react-redux";

export const Progress = () => {
  
 const { displayName, email, address, floor} =  useSelector(state => state.steps);
  
  return (
    <>
      <h1>Proceso Formulario</h1>
    <hr />
      <ol className="mt-5">
        <li>{ displayName }</li>
        <li className="mt-5">{ email }</li>
        <li className="mt-5">{ address }</li>
        <li className="mt-5">{ floor }</li>
        <li className="mt-5"></li>
      </ol>
    </>
  );
};
