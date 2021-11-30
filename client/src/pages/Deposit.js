import { useContext, useState } from "react";
import UserContext from "../context";

function Deposit() {
  const userContext = useContext(UserContext);

  const [deposit, setDeposit] = useState(0);

  function validate() {
    // if (deposit > user.balance) return false;
    // if (deposit < 1) return false;
    // return true;
  }
  function handleCreate() {
    fetch(`/account/update/${userContext.loggedIn.email}/${deposit}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          console.log("JSON:", data);
          alert(`${deposit} added`);
        } catch (err) {
          console.log("err:", text);
        }
      });
  }
  function clearForm() {
    setDeposit(0);
  }
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <h1>Deposit</h1>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Insert the amount of money you want to deposit to this acccount
          </h5>
          Amount
          <br />
          <input
            type="number"
            className="form-control"
            id="deposit"
            placeholder="Enter amount to deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.currentTarget.value)}
          />
          <br />
          <p className="card-text">
            Your balance is: ${userContext.loggedIn.balance}
          </p>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleCreate}
          >
            Deposit
          </button>
        </div>
        <div className="card-footer text-muted">
          Full Stack Development with MERN
        </div>
      </div>
    </div>
  );
}

export default Deposit;
