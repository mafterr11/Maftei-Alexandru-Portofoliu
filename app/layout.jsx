import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return children;
}
