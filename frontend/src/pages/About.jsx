import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const About = () => {
  const form = useRef();
  const [formSent, setFormSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      emailjs.sendForm("BlogNest", "template_prreglq", form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });
      setFormSent(true);
      form.current.reset();
    } catch (error) {
      toast.error("Error in sending message!!");
      console.log("FAILED...", error.text);
    }
  };
  const handleGoBack = () => {
    setFormSent(!formSent)
  }
  return (
    <div className="my-5 flex flex-col md:flex-row w-full">
      {/* ABOUT */}
      <div className="p-4 pt-8 md:p-0 w-full flex flex-col items-center justify-center bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-6 ">
          About This Blog Website!
        </h1>
        <p className="md:max-w-2xl text-lg text-gray-600 mb-6 text-center">
          Welcome to the BlogNest! My name is{" "}
          <span className="font-semibold">Piyush Yadav</span>, and I am
          passionate about sharing my experiences, and knowledge with the world.
          BlogNest is a space where I and you can share various topics,
          from technology and programming to personal development and lifestyle.
        </p>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
          Thank you for visiting, and I look forward to sharing my thoughts with
          you all!
        </p>
        <p className="text-lg text-gray-600 text-center">
          Feel free to reach out to me through the contact page if you have any
          questions or feedback.
        </p>
      </div>

      {/* CONTACT FORM */}
      <div className="h-96 md:w-6/12 mt-14 mb-4 mx-5 p-4 px-5 flex flex-col justify-center border rounded-xl bg-gray-300">
        {/* TITLE */}
        <h2 className="text-center text-2xl font-medium text-gray-700 my-5">
          Contact Me
        </h2>

        {formSent ? (
          // AFTER SUBMISSION MESSAGE
          <div className="flex flex-col items-center">
            <p className="mt-12 text-center">Form submitted successfully!</p>
            <button onClick={handleGoBack} className="m-4 px-3 py-2 bg-slate-400 hover:bg-slate-500 rounded-md">
              Go back
            </button>
          </div>
        ) : (
          // MAIN FORM
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col item-center gap-6"
          >
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
              className="p-2 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              className="p-2 rounded-md outline-none"
            />
            <textarea
              placeholder="Message"
              name="message"
              required
              className="p-2 h-24 rounded-md outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="mb-4 px-3 py-2 text-white bg-slate-700 hover:bg-slate-800 rounded-md"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default About;
