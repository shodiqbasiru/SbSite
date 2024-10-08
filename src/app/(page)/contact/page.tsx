import React from "react";

export default function ContactPage() {
  return (
    <section className="w-[calc(100%-4rem)] rounded-lg bg-slate-800 p-8 shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1143.2452949787669!2d112.603488668594!3d-7.9349947100380485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882111eeb091d%3A0x9a036805a7c575f6!2sJl.%20Permata%20Tlogomas%20No.11%2C%20Tlogomas%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065144!5e0!3m2!1sid!2sid!4v1728419069062!5m2!1sid!2sid"
        width="1000"
        height="500"
        className="mb-8 w-full rounded-lg"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="mt-8 flex flex-col text-white">
        <h2 className="mb-4 text-4xl font-bold">Contact Me</h2>
        <p className="mb-6 text-slate-400">Feel free to reach out to me</p>
        <form className="flex flex-col space-y-4" action="" method="POST">
          <label className="flex flex-col">
            <span className="mb-2">Subject:</span>
            <input
              type="text"
              name="subject"
              className="rounded border border-slate-600 bg-slate-700 p-2 text-white"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-2">Name:</span>
            <input
              type="text"
              name="name"
              className="rounded border border-slate-600 bg-slate-700 p-2 text-white"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-2">Message:</span>
            <textarea
              name="message"
              className="rounded border border-slate-600 bg-slate-700 p-2 text-white"
              rows={5}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="rounded bg-amber-500 p-2 text-white transition-colors hover:bg-amber-600"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
