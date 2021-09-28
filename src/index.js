import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [state, setState] = useState({ loading: false });

  const [UserName, setUserName] = useState("");
  const [EmailId, setEmailId] = useState("");
  const [MobileNo, setMobileNo] = useState("");

  async function submitForm() {
    setState({ ...state, loading: true });
    const response = await fetch(`http://localhost:4500/api/users/createuser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: { UserName: UserName, EmailId: EmailId, MobileNo: MobileNo }
    });
    const content = await response.json();
    setState({ ...state, loading: false });
  }

  return (
    <React.Fragment>
      <h1 style={{margin:"5px 50px 5px"}}>User Details</h1>
      <div className="container" style={{padding:"50px 50px 50px" ,border:"2px solid black",color:"blueviolet"}}>
     <div className="row">
     <div className="col-md-8">
      <div > 
        <label>UserName:  </label>
        <input 
        placeholder="enter username"
          value={UserName}
          onChange={e => setUserName(e.target.value)}
          type="input"
          id="UserName"
        />
      </div>
      <br/>
      <div>
        <label>Email:   </label>
        <input
        placeholder="enter emailId"
          value={EmailId}
          onChange={e => setEmailId(e.target.value)}
          type="input"
          id="EmailId"
        />
      </div>
      <br/>
      <div>
        <label>Mobile No: </label>
        <input
        placeholder="enter mobileNo"
          value={MobileNo}
          onChange={e => setMobileNo(e.target.value)}
          type="number"
          id="MobileNo"
        />
      </div>
     <br/>
      <button className="btn-join" onClick={submitForm}>
        {!state.loading ? "Submit" : "Loading"}
      </button>
      </div>
     </div>
      </div>
      
     
    </React.Fragment>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
