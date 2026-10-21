"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/constants";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    speciality: "Robotic Knee Replacement (VELYS™)",
    timeSlot: "Morning OPD (10:00 AM – 2:00 PM)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState("");

  const buildWhatsappUrl = () => {
    const formattedNotes = formData.notes.trim()
      ? `\n• *Symptoms / Scans:* ${formData.notes.trim()}`
      : "";

    const message =
      `*OPD Consultation Request — Kasliwal Joint Institute*\n\n` +
      `• *Patient Name:* ${formData.name.trim()}\n` +
      `• *Phone Number:* +91 ${formData.phone.trim()}\n` +
      `• *Joint Area / Concern:* ${formData.speciality}\n` +
      `• *Preferred Slot:* ${formData.timeSlot}` +
      formattedNotes +
      `\n\n_Please confirm the appointment availability at Kasliwal Super Speciality Hospital, Gangapur Road, Nashik._`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappUrl = buildWhatsappUrl();
    setLastWhatsappUrl(whatsappUrl);
    setSubmitted(true);

    // Directly open WhatsApp with all filled details
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8 text-center shadow-soft">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold text-navy">
          Opening WhatsApp Chat...
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Your appointment request for <strong className="text-navy">{formData.name}</strong> (+91 {formData.phone}) has been prepared. Please click below if WhatsApp did not open automatically.
        </p>

        <div className="mt-5 pt-4 border-t border-emerald-200/60 flex flex-wrap justify-center gap-3">
          <a
            href={lastWhatsappUrl || buildWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#20ba5a] active:scale-[0.99] transition-all"
          >
            <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Open WhatsApp Chat Now</span>
            <span aria-hidden="true">→</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                speciality: "Robotic Knee Replacement (VELYS™)",
                timeSlot: "Morning OPD (10:00 AM – 2:00 PM)",
                notes: "",
              });
            }}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Submit Another Request
          </button>
        </div>

        <p className="mt-4 text-[11px] text-slate-500">
          Or call hospital reception directly at{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-clinical-blue hover:underline">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-soft flex flex-col justify-between"
    >
      <div>
        <div className="border-b border-slate-100 pb-3 mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
            Online Consultation Booking
          </span>
          <h3 className="mt-1 font-heading text-lg sm:text-xl font-bold text-navy">
            Request an OPD Appointment
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Submit your details to connect directly with Kasliwal Joint Institute on WhatsApp.
          </p>
        </div>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="patient-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Patient Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="patient-name"
              type="text"
              required
              placeholder="e.g. Ramesh Patil"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-clinical-blue focus:bg-white focus:outline-none focus:ring-1 focus:ring-clinical-blue"
            />
          </div>

          {/* Contact Phone */}
          <div>
            <label htmlFor="patient-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Mobile Contact Number <span className="text-red-500">*</span>
            </label>
            <div className="mt-1.5 relative flex rounded-xl border border-slate-200 bg-slate-50/50 focus-within:border-clinical-blue focus-within:bg-white focus-within:ring-1 focus-within:ring-clinical-blue">
              <span className="inline-flex items-center px-3 text-xs sm:text-sm font-semibold text-slate-500 border-r border-slate-200">
                +91
              </span>
              <input
                id="patient-phone"
                type="tel"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                className="w-full bg-transparent px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Clinical Interest / Speciality */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="speciality-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Joint Area / Concern
              </label>
              <select
                id="speciality-select"
                value={formData.speciality}
                onChange={(e) => setFormData({ ...formData, speciality: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-clinical-blue focus:bg-white focus:outline-none focus:ring-1 focus:ring-clinical-blue"
              >
                <option>Robotic Knee Replacement (VELYS™)</option>
                <option>Partial Knee Replacement (UKR)</option>
                <option>Total Hip Replacement</option>
                <option>ACL &amp; Ligament Arthroscopy</option>
                <option>Meniscus &amp; Cartilage Repair</option>
                <option>Shoulder Arthroscopy</option>
                <option>Second Opinion / Revision Consultation</option>
                <option>General Joint Pain Assessment</option>
              </select>
            </div>

            <div>
              <label htmlFor="timeslot-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Preferred OPD Slot
              </label>
              <select
                id="timeslot-select"
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-clinical-blue focus:bg-white focus:outline-none focus:ring-1 focus:ring-clinical-blue"
              >
                <option>Morning OPD (10:00 AM – 2:00 PM)</option>
                <option>Evening OPD (5:00 PM – 8:00 PM)</option>
                <option>Earliest Available Slot</option>
              </select>
            </div>
          </div>

          {/* Optional Notes */}
          <div>
            <label htmlFor="patient-notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Brief Symptoms or Previous Scans <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <textarea
              id="patient-notes"
              rows={2}
              placeholder="e.g. Left knee pain for 2 years, recent X-ray available..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-clinical-blue focus:bg-white focus:outline-none focus:ring-1 focus:ring-clinical-blue resize-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-soft hover:bg-[#20ba5a] active:scale-[0.99] transition-all cursor-pointer"
        >
          <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Send Request on WhatsApp</span>
        </button>

        <p className="text-[11px] text-slate-500 leading-tight">
          Directly forwards to hospital WhatsApp at{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-clinical-blue hover:underline">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </form>
  );
}
