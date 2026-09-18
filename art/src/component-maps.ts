import type { ComponentType, SVGProps } from "react";
import type { EquipmentId } from "./equipments/index.ts";

const files = import.meta.glob<ComponentType<SVGProps<SVGSVGElement>>>("./equipments/*/*/art.svg", {
  eager: true,
  query: "?react",
  import: "default",
});
export const equipmentComponents = Object.fromEntries(
  Object.entries(files).map(([path, component]) => [path.split("/").at(-2)!, component]),
) as Readonly<Record<EquipmentId, ComponentType<SVGProps<SVGSVGElement>>>>;
