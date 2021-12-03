import Card from './Card';
import { useContext, useState } from 'react';
import UserContext from './context';

function Transfer() {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
  
    return (
      <div className="content">
      <Card
        bgcolor="danger"
        header="Transfer"
        status={status}
        body={
          show ? (
            <TransferForm setShow={setShow} setStatus={setStatus} />
          ) : (
            <TransferMsg setShow={setShow} setStatus={setStatus} />
          )
        }
      />
      </div>
    );
  }
  function TransferForm(props) {
    const [amount, setAmount] = useState('');
    const [emailToTransfer, setEmailToTransfer] = useState('');
    const userContext = useContext(UserContext);
    const { setLoggedIn } = useContext(UserContext);

    function handle() {
        if (isNaN(amount) || amount <= 0 || amount > userContext.loggedIn.balance) {
          props.setStatus('Invalid amount');
          return;
        }
        fetch(`/account/transfer/${userContext.loggedIn.email}/${emailToTransfer}/${amount}`)
          .then((response) => response.text())
          .then((text) => {
            try {
              const data = JSON.parse(text);
              props.setStatus(`Transfer of $${amount}`);
              props.setShow(false);
              console.log('JSON:', data);
              setLoggedIn({
                id: userContext.loggedIn.id,
                name: userContext.loggedIn.name,
                email: userContext.loggedIn.email,
                balance: userContext.loggedIn.balance - parseInt(amount),
              });
            } catch (err) {
              props.setStatus('Transfer failed');
              console.log('err:', text);
            }
          });
      }
    
      return (
        <>
          Balance
          <br />
          <p>${userContext.loggedIn.balance}</p>
          <input 
            type="text"
            className="form-control"
            placeholder="Enter email to transfer to"
            value={emailToTransfer}
            onChange={(e) => setEmailToTransfer(e.currentTarget.value)}
          />
          <br />
          Amount
          <br />
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
          />
          <br />
          <button type="submit" className="btn btn-light" onClick={handle}>
            Transfer
          </button>
        </>
      );
  }
  function TransferMsg(props) {
      return (
          <>
            <h5>Success</h5>
            <button
                type="submit"
                className="btn btn-light"
                onClick={() => {
                props.setShow(true);
                props.setStatus('');
                }}
            >
                Transfer again
            </button>
          </>
      );
  }

  export default Transfer;