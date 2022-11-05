import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const FormControl = () => {
    return (
     
      <section
      className="py-12 w-full"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="text-center">
        <h3 className="text-xl text-secondary font-bold uppercase">
          Contact Us
        </h3>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
      </div>
      <div className="text-center my-3">
        <form>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-md "
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-md"
          />
          <br />
          <br />
          <textarea
            className="textarea textarea-white"
            placeholder="Your Message"
          ></textarea>
          <br />
          <br />
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>
      </div>
    </section>
    );
};

export default FormControl;
