import type { Province, Regency, District } from "../data/regions";

interface RegionContentProps {
  provinces: Province[];
  selectedProvince: Province | null;
  selectedRegency: Regency | null;
  selectedDistrict: District | null;
}

export default function RegionContent({
  provinces,
  selectedProvince,
  selectedRegency,
  selectedDistrict,
}: RegionContentProps) {
  
  const items: { label: string; value: string }[] = [];

  if (selectedProvince) {
    items.push({ label: "Provinsi", value: selectedProvince.name });
  }
  if (selectedRegency) {
    items.push({ label: "Kota / Kabupaten", value: selectedRegency.name });
  }
  if (selectedDistrict) {
    items.push({ label: "Kecamatan", value: selectedDistrict.name });
  }


  if (items.length === 0) {
    return (
      <main className="flex-1 overflow-y-auto p-8 bg-[#F9FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[11px] font-semibold text-primary-500 uppercase tracking-[0.18em] mb-2">
              Semua Provinsi
            </p>
            <h2 className="text-4xl font-extrabold text-surface-900">
              Indonesia
            </h2>
            <p className="text-sm text-surface-400 mt-2">
              {provinces.length} provinsi
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {provinces.map((province) => (
              <span
                key={province.id}
                className="px-3.5 py-1.5 bg-[#F9FAFC] border border-surface-200 rounded-full text-[13px] font-medium text-surface-600 shadow-sm transition-all cursor-default"
              >
                {province.name}
              </span>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 bg-[#F9FAFC]">
      {items.map((item, index) => (
        <div key={index} className="flex mb-6 flex-col items-center">
          {index > 0 && <DownArrow />}
          <p className="text-[11px] font-semibold text-primary-500 uppercase tracking-[0.18em] mb-1">
            {item.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900">
            {item.value}
          </h2>
        </div>
      ))}
    </main>
  );
}

function DownArrow() {
  return (
    <div className="my-5 text-surface-300 mb-10">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  );
}
