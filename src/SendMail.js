import React from "react";
import "./SendMail.css";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To:"
          type="email"
          ref={register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required!</p>}

        <input
          placeholder="Subject"
          type="text"
          ref={register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required!</p>
        )}

        <input
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          ref={register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required!</p>
        )}

        <div className="sendMail__option">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
