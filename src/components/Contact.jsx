import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleBlur = (e) => {
    if (!e.target.value) {
      setErrors({ ...errors, [e.target.name]: "This field is required" });
    } else if (e.target.name === "email" && !validateEmail(e.target.value)) {
      setErrors({ ...errors, email: "Invalid email address" });
    } else {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold">Contact Me</h2>
      <form className="mt-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="block w-full p-2 border"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="block w-full p-2 border"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Message"
          className="block w-full p-2 border"
          onBlur={handleBlur}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message}</p>}

        <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
