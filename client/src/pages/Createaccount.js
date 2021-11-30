import { useState } from "react";

function Createaccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    if (label === "password" && password.length < 8) {
      setStatus("Error: password length must be at least 8 chars");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }
  function handleCreate() {
    if (!validate(name, "name is missing")) return;
    if (!validate(email, "email is missing")) return;
    if (!validate(password, "password")) return;
    console.log(name, email, password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
    })();
    setShow(false);
  }
  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <h1>Create Account</h1>
        </div>
        <div className="card-body">
          {show ? (
            <>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter Username"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <br />
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleCreate}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-outline-primary"
                onClick={clearForm}
              >
                Add another account
              </button>
            </>
          )}
        </div>
        <div className="card-status">{status}</div>
        <div className="card-footer text-muted">
          Full Stack Development with MERN
        </div>
      </div>
    </div>
  );
}

export default Createaccount;
