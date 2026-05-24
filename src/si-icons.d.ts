declare module "@icons-pack/react-simple-icons/icons/*" {
  import type { ComponentType, SVGAttributes } from "react";
  const icon: ComponentType<SVGAttributes<SVGElement>>;
  export default icon;
  export const defaultColor: string;
}
