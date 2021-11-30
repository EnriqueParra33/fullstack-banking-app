import { useContext, useState } from "react";
import UserContext from "../context";

function Withdraw() {
  const userContext = useContext(UserContext);

  const [withdraw, setWithdraw] = useState(0);

  function validate() {
    // if (withdraw > user.balance) return false;
    // if (withdraw < 1) return false;
    // return true;
  }
  function handleCreate() {
    fetch(`/account/update/${userContext.loggedIn.email}/-${withdraw}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          console.log("JSON:", data);
          alert(`${withdraw} withdrawed`);
        } catch (err) {
          console.log("err:", text);
        }
      });
  }

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <h1>Withdraw</h1>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Insert the amount of money you want to withdraw from this acccount
          </h5>
          Amount
          <br />
          <input
            type="number"
            className="form-control"
            id="withdraw"
            placeholder="Enter amount to be withdrawn"
            value={withdraw}
            onChange={(e) => setWithdraw(e.currentTarget.value)}
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
            Withdraw
          </button>
        </div>
        <div className="card-footer text-muted">
          Full Stack Development with MERN
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
