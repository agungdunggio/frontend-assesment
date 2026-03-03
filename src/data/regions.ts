export interface Province {
  id: number;
  name: string;
}

export interface Regency {
  id: number;
  name: string;
  province_id: number;
}

export interface District {
  id: number;
  name: string;
  regency_id: number;
}

export interface RegionsData {
  provinces: Province[];
  regencies: Regency[];
  districts: District[];
}

export interface LoaderData {
  provinces: Province[];
  regencies: Regency[];
  districts: District[];
  selectedProvince: Province | null;
  selectedRegency: Regency | null;
  selectedDistrict: District | null;
  provinceId: string;
  regencyId: string;
  districtId: string;
}
