import type { Province, Regency, District } from "../data/regions";

interface BreadcrumbProps {
  selectedProvince: Province | null;
  selectedRegency: Regency | null;
  selectedDistrict: District | null;
}

export default function Breadcrumb({
  selectedProvince,
  selectedRegency,
  selectedDistrict,
}: BreadcrumbProps) {
  const crumbs: string[] = ["Indonesia"];

  if (selectedProvince) crumbs.push(selectedProvince.name);
  if (selectedRegency) crumbs.push(selectedRegency.name);
  if (selectedDistrict) crumbs.push(selectedDistrict.name);

  return (
    <nav className="breadcrumb flex items-center gap-1.5 text-xs text-surface-400">
      {crumbs.map((crumb, index) => (
        <span key={index} className="flex items-center gap-1.5">
          {index > 0 && (
            <span className="text-surface-300">›</span>
          )}
          <span
            className={
              index === crumbs.length - 1 && crumbs.length > 1
                ? "font-medium text-primary-600"
                : "text-surface-400"
            }
          >
            {crumb}
          </span>
        </span>
      ))}
    </nav>
  );
}
