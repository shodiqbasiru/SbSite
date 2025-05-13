import React from "react";

export default function ContactPage() {
  return (
    <section className="mx-auto flex w-full flex-col gap-4 rounded-lg bg-slate-800 font-body shadow-lg md:flex-row">
      <div className="w-full md:w-[40%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1143.2452949787669!2d112.603488668594!3d-7.9349947100380485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882111eeb091d%3A0x9a036805a7c575f6!2sJl.%20Permata%20Tlogomas%20No.11%2C%20Tlogomas%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065144!5e0!3m2!1sid!2sid!4v1728419069062!5m2!1sid!2sid"
          width="100%"
          height="100%"
          className="w-full rounded-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex flex-1 flex-col p-8 text-white">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl font-subHeading">
          Contact Me
        </h2>
        <p className="mb-6 text-sm text-slate-400 sm:text-base">
          Feel free to reach out to me
        </p>
        <form className="flex flex-col space-y-4" action="" method="POST">
          <label className="flex flex-col">
            <span className="mb-2 text-sm sm:text-base">Subject:</span>
            <input
              type="text"
              name="subject"
              className="rounded border border-slate-600 bg-slate-700 p-2 text-sm text-white sm:text-base"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-2 text-sm sm:text-base">Name:</span>
            <input
              type="text"
              name="name"
              className="rounded border border-slate-600 bg-slate-700 p-2 text-sm text-white sm:text-base"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-2 text-sm sm:text-base">Message:</span>
            <textarea
              name="message"
              className="rounded border border-slate-600 bg-slate-700 p-2 text-sm text-white sm:text-base"
              rows={5}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="rounded bg-amber-500 p-2 text-sm text-white transition-colors hover:bg-amber-600 sm:text-base font-button"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
