import emailjs from "@emailjs/browser";

import { FC, useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact: FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      from_name: form.name,
      to_name: "Ali",
      form_email: form.email,
      to_email: "muhammadalialam14@gmail.com",
      message: form.message,
    };

    emailjs
      .send("service_3nl22bw", "template_ga59a1c", config, "oOI78c0zjmhFMcjiM")
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message, I will get back to you soon");
          console.log("Message sent successfully");
          setForm({ name: "", email: "", message: "" });
        },
        (error: any) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong, please try again later");
        }
      );

    // const config = {
    //   SecureToken: "b852718c-6418-47af-92d7-6e3a57851332",
    //   To: "muhammadalialam14@gmail.com",
    //   From: form.email,
    //   Subject: `${form.name} messaged you through your website`,
    //   Body: form.message,
    // };

    // if (Email) {
    //   Email.send(config).then(
    //     () => {
    //       setLoading(false);
    //       alert("Message sent successfully, I will get back to you soon");

    //       console.log("Message sent successfully");

    //       setForm({ name: "", email: "", message: "" });
    //     },
    //     (error: any) => {
    //       setLoading(false);
    //       console.error(error);
    //       alert("Something went wrong, please try again later");
    //     }
    //   );
    // } else {
    //   setLoading(false);
    //   console.error("Email object not found");
    //   alert("Email sending service is not available");
    // }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          {/* name placeholder and input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          {/* email placeholder and input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          {/* message placeholder and input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
