import React from "react";
import { Navigation } from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 md:px-8 py-2 md:py-8">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
