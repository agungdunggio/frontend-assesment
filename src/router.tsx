import { createBrowserRouter } from "react-router-dom";
import FilterPage from "./pages/FilterPage";
import type { RegionsData } from "./data/regions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FilterPage />,
    async loader({ request }) {
      const res = await fetch("/data/indonesia_regions.json");
      const data: RegionsData = await res.json();

      const url = new URL(request.url);
      const provinceId = url.searchParams.get("province") || "";
      const regencyId = url.searchParams.get("regency") || "";
      const districtId = url.searchParams.get("district") || "";

      const selectedProvince =
        data.provinces.find((p) => String(p.id) === provinceId) || null;

      const regencies = selectedProvince
        ? data.regencies.filter((r) => r.province_id === selectedProvince.id)
        : [];

      const selectedRegency =
        regencies.find((r) => String(r.id) === regencyId) || null;

      const districts = selectedRegency
        ? data.districts.filter((d) => d.regency_id === selectedRegency.id)
        : [];

      const selectedDistrict =
        districts.find((d) => String(d.id) === districtId) || null;

      return {
        provinces: data.provinces,
        regencies,
        districts,
        selectedProvince,
        selectedRegency,
        selectedDistrict,
        provinceId,
        regencyId,
        districtId,
      };
    },
  },
]);

export default router;
