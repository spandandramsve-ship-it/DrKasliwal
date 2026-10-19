interface MedicalReviewBoxProps {
  lastUpdated?: string;
  className?: string;
}

export default function MedicalReviewBox({
  lastUpdated = "October 2026",
  className = "",
}: MedicalReviewBoxProps) {
  return (
    <div className={`rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs text-slate-600 sm:text-sm ${className}`}>
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-navy">
          <span className="font-bold">Medically reviewed by:</span> Dr. Vishal Kasliwal, M.S. Orthopaedics · Reg. No. MMC/2005/02/1098
        </p>
        <p className="text-slate-500">Last updated: {lastUpdated}</p>
      </div>
      <p className="mt-2 border-t border-slate-200/60 pt-2 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
        <strong>Medical Disclaimer:</strong> This information is for educational purposes only and does not replace an individual medical consultation. Diagnosis, treatment options, and recovery timelines differ between patients.
      </p>
    </div>
  );
}
