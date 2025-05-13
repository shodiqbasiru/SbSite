import { GOOGLE_MAPS_EMBED } from "@/constant";
import React from "react";

export default function ContactPage() {
  return (
    <section className="mx-auto flex w-full flex-col gap-4 rounded-lg bg-slate-800 font-body shadow-lg md:flex-row">
      <div className="w-full md:w-[40%]">
        <iframe
          src={GOOGLE_MAPS_EMBED}
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
