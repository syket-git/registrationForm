import React, { useState } from "react";
import AdminUser from "./AdminUser/AdminUser";
function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleAccount = e => {
    setAccount(e.target.value);
  };

  const handleCompanyName = e => {
    setCompanyName(e.target.value);
  };
  const handleCompanyAddress = e => {
    setCompanyAddress(e.target.value);
  };

  return (
    <div className="mt-4">
      <form>
        <input
          type="text"
          required
          placeholder="Full Name"
          value={name}
          onChange={handleName}
        />
        <br />
        <br />
        <input
          type="email"
          required
          value={email}
          placeholder="Email"
          onChange={handleEmail}
        />
        <br />
        <br />
        <input
          type="password"
          required
          value={password}
          placeholder="Password"
          onChange={handlePassword}
        />

        <p className="mt-4">Select your account</p>

        <div className="d-flex justify-content-center">
          <table>
            <tr>
              <td>
                <input
                  required
                  onChange={handleAccount}
                  type="radio"
                  id="male"
                  name="gender"
                  value="Admin User"
                />
              </td>

              <td>
                <label for="male">Admin User</label>
              </td>
              <br />
            </tr>
            <tr>
              <td>
                <input
                  required
                  onChange={handleAccount}
                  type="radio"
                  id="female"
                  name="gender"
                  value="Employee User"
                />
              </td>

              <td>
                {" "}
                <label className="ml-4" for="female">
                  Employee User
                </label>
              </td>
              <br />
            </tr>
            <tr>
              <td>
                <input
                  required
                  onChange={handleAccount}
                  type="radio"
                  id="other"
                  name="gender"
                  value="Vendor User"
                />
              </td>

              <td>
                <label for="other">Vendor User</label>
              </td>
            </tr>
          </table>
        </div>

        {account === "Admin User" && (
          <div>
            <input
              type="text"
              required
              value={companyName}
              placeholder="Company Name"
              onChange={handleCompanyName}
            />
            <br />
            <br />
            <input
              type="text"
              required
              value={companyAddress}
              placeholder="Company Address"
              onChange={handleCompanyAddress}
            />
            <br />
            <br />
            <input type="text" required placeholder="Payment Method" />
          </div>
        )}

        {account === "Employee User" && (
          <div>
            <input type="text" required placeholder="Job Title" />
            <br />
            <br />
            <textarea
              type="textarea"
              rows="3"
              placeholder="Job Description"
              cols="22"
            />
          </div>
        )}

        {account === "Vendor User" && (
          <div>
            <input
              type="text"
              required
              value={companyName}
              placeholder="Company Name"
              onChange={handleCompanyName}
            />
            <br />
            <br />
            <input
              type="text"
              required
              value={companyAddress}
              placeholder="Company Address"
              onChange={handleCompanyAddress}
            />
            <br />
            <br />
            <input type="file" required />
            <br />
            <br />
            <textarea
              type="textarea"
              rows="3"
              placeholder="Job Description"
              cols="22"
            />
            <br />
            <br />
            <input type="text" required placeholder="Opening Hours" />
            <br />

            <br />
            <input type="text" required placeholder="Payment Method" />
          </div>
        )}

        <button className="btn mt-4 btn-success">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
