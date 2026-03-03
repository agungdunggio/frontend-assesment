import type { ChangeEvent } from "react";
import type { Province, Regency, District } from "../data/regions";
import Combobox from "./Combobox";

interface FilterSidebarProps {
  provinces: Province[];
  regencies: Regency[];
  districts: District[];
  provinceId: string;
  regencyId: string;
  districtId: string;
  onProvinceChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onRegencyChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onDistrictChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onReset: () => void;
}

export default function FilterSidebar({
  provinces,
  regencies,
  districts,
  provinceId,
  regencyId,
  districtId,
  onProvinceChange,
  onRegencyChange,
  onDistrictChange,
  onReset,
}: FilterSidebarProps) {
  return (
    <div className="flex-1 p-6 flex flex-col">
      <p className="text-[10px] font-semibold text-surface-400 uppercase tracking-[0.15em] mb-5">
        Filter Wilayah
      </p>

      <Combobox
        name="province"
        label="Provinsi"
        placeholder="Pilih Provinsi"
        value={provinceId}
        options={provinces}
        onChange={onProvinceChange}
        icon={<GridIcon />}
        className="mb-4"
      />

      <Combobox
        name="regency"
        label="Kota/Kabupaten"
        placeholder="Pilih Kota/Kab"
        value={regencyId}
        options={regencies}
        onChange={onRegencyChange}
        disabled={!provinceId}
        icon={<BuildingIcon />}
        className="mb-4"
      />

      <Combobox
        name="district"
        label="Kecamatan"
        placeholder="Pilih Kecamatan"
        value={districtId}
        options={districts}
        onChange={onDistrictChange}
        disabled={!regencyId}
        icon={<PinIcon />}
        className="mb-6"
      />

      <button
        onClick={onReset}
        className="w-full py-2.5 border border-surface-200 rounded-lg text-sm font-medium text-surface-600 hover:bg-surface-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        RESET
      </button>
    </div>
  );
}

function GridIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
