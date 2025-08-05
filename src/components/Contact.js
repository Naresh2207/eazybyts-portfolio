import React from "react";
import { Link } from "react-router-dom";
import "../style/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="wrap">
        <div className="color">
          <h1>FILL YOUR DETAILS BELOW</h1>

          <form>
            <label htmlFor="name">NAME</label>
            <input type="text" placeholder="Enter your name" />
            <br />

            <label htmlFor="email">EMAIL</label>
            <input type="text" placeholder="Enter your email" />
            <br />

            <label htmlFor="address">ADDRESS</label>
            <input type="text" placeholder="Enter your address" />
            <br />

            <label htmlFor="number">CONTACT</label>
            <input type="number" placeholder="Enter your number" />
            <br />

            <div className="gender">
              <label>GENDER :</label>
              <label>Male</label>
              <input type="radio" value="male" name="gender" />

              <label>Female</label>
              <input type="radio" value="female" name="gender" />
            </div>

            <br />

            <button type="submit">SUBMIT</button>
          </form>
        </div>

        {/* Use Link instead of anchor tag */}
        <Link to="/">
          <button>BACK</button>
        </Link>
      </div>
    </>
  );
};

export default Contact;
