import React from "react";
import { Link } from "react-router-dom";
import "../style/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="wrapcontact">
        <div className="color">
          <h1>FILL YOUR DETAILS BELOW</h1>

          <form>
            <label htmlFor="name">NAME*</label>
            <input type="text" placeholder="Enter your name" required />
            <br />

            <label htmlFor="email">EMAIL*</label>
            <input type="text" placeholder="Enter your email" required />
            <br />

            <label htmlFor="address">ADDRESS</label>
            <input type="text" placeholder="Enter your address" />
            <br />

            <label htmlFor="number">CONTACT*</label>
            <input type="number" placeholder="Enter your number" required />
            <br />

            <div className="gender">
              <label>GENDER* :</label>
              <label>Male</label>
              <input type="radio" value="male" name="gender" required />

              <label>Female</label>
              <input type="radio" value="female" name="gender" required />
            </div>

            <br />

            <button type="submit">SUBMIT</button>
          </form>
        </div>

        {/* {
          <Link to="/">
            <button>BACK</button>
          </Link>
        } */}
      </div>
    </>
  );
};

export default Contact;
