import type { ChangeEvent } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import type { LoaderData } from "../data/regions";
import FilterSidebar from "../components/FilterSidebar";
import Breadcrumb from "../components/Breadcrumb";
import RegionContent from "../components/RegionContent";

export default function FilterPage() {
  const data = useLoaderData() as LoaderData;
  const [, setSearchParams] = useSearchParams();

  const {
    provinces,
    regencies,
    districts,
    selectedProvince,
    selectedRegency,
    selectedDistrict,
    provinceId,
    regencyId,
  } = data;

  function handleProvinceChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value) {
      setSearchParams({ province: value });
    } else {
      setSearchParams({});
    }
  }

  function handleRegencyChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value) {
      setSearchParams({ province: provinceId, regency: value });
    } else {
      setSearchParams({ province: provinceId });
    }
  }

  function handleDistrictChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value) {
      setSearchParams({
        province: provinceId,
        regency: regencyId,
        district: value,
      });
    } else {
      setSearchParams({ province: provinceId, regency: regencyId });
    }
  }

  function handleReset() {
    setSearchParams({});
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <div className="w-64 shrink-0 border-r border-surface-200 flex flex-col bg-[#F9FAFC]">
        {/* Logo inside sidebar */}
        <div className="px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-surface-800 tracking-tight">Frontend Assessment</span>
          </div>
        </div>

        {/* Filter controls */}
        <FilterSidebar
          provinces={provinces}
          regencies={regencies}
          districts={districts}
          provinceId={data.provinceId}
          regencyId={data.regencyId}
          districtId={data.districtId}
          onProvinceChange={handleProvinceChange}
          onRegencyChange={handleRegencyChange}
          onDistrictChange={handleDistrictChange}
          onReset={handleReset}
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb header */}
        <header className="border-b border-surface-200 px-6 py-6">
          <Breadcrumb
            selectedProvince={selectedProvince}
            selectedRegency={selectedRegency}
            selectedDistrict={selectedDistrict}
          />
        </header>

        {/* Content */}
        <RegionContent
          provinces={provinces}
          selectedProvince={selectedProvince}
          selectedRegency={selectedRegency}
          selectedDistrict={selectedDistrict}
        />
      </div>
    </div>
  );
}
