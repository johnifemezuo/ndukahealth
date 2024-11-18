import React from "react";
import { Navigation } from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
