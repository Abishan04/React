import "./App.css";

function Abishan(props) {
   
  return (
    <div>
      <h1>Student {props.id} Details</h1>
      <b>firstname :</b><i> {props.fname}</i><br />
      <b>lastname :</b><i> {props.lname}</i>
    </div>
  );
}

export default Abishan;
