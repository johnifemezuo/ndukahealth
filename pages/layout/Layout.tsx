import React from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
