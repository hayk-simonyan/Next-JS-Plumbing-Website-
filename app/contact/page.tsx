export default function ContactPage() {
  return (
    <section className="contact-section">

      <h1 className="text-center text-3xl font-bold mt-3 mb-3">Contact Us</h1>
      <p className="text-center mt-3 mb-3">
        Have a plumbing issue or need a quote? Reach out using the form below and our team will get back to you quickly.
      </p>

      <div className="contact-container">

        {/* Contact Form */}
        <form className="text-center border-2">

          <div className="mt-4 mb-6">
            <label htmlFor="name" className="text-2xl">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
             className="border border-black rounded text-2xl"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mt-4 mb-6 gap-7">
            <label htmlFor="email" className="text-2xl">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
            className="border border-black rounded text-2xl"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mt-4 mb-6 gap-7">
            <label htmlFor="phone" className="text-2xl">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border border-black rounded text-2xl"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mt-4 mb-6 gap-7">
            <label htmlFor="service" className="text-2xl gap-6">Service Needed:</label>
            <select id="service" name="service" required className="text-2xl border border-black rounded">
              <option value="">Select a service</option>
              <option value="Drain Cleaning">Drain Cleaning</option>
              <option value="Leak Detection">Leak Detection</option>
              <option value="Water Heater">Water Heater Installation</option>
              <option value="Pipe Repair">Pipe Repair</option>
              <option value="Sewer Line Repair">Sewer Line Repair</option>
              <option value="Emergency Plumbing">Emergency Plumbing</option>
            </select>
          </div>

          <div className="mt-10 mb-5 flex justify-center">
            <label htmlFor="message" className="text-3xl text-center px-2">Message:</label>
            <textarea 
              id="message"
              name="message"
              className="w-full h-40 px-4 py-3 text-2xl border border-black rounded leading-none align-text-top focus:placeholder-transparent"
              placeholder="Describe your plumbing issue"
              required
            ></textarea>
          </div>

          <button type="submit" className="bg-yellow-300 p-8 rounded-full text-2xl font-semibold mb-4">
            Send Message
          </button>
        </form>

        {/* Contact Info Sidebar */}
        <div className="contact-info">
          <h2 className="text-center text-2xl font-semibold mt-5">Get In Touch</h2>
          <p className="text-center">We're available 7 days a week for plumbing emergencies and general service calls.</p>

          <ul className="text-center">
            <li><strong>Phone:</strong> (555) 123-4567</li>
            <li><strong>Email:</strong> support@plumbingco.com</li>
            <li><strong>Location:</strong> River Road, NC</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
