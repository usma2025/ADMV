"use client";

import Header from "@/src/shared/components/ui/header";

import Footer from "@/src/shared/components/ui/footer";
import WhatsAppNotes from "../components/notes";

export default function NotesPage() {
  return (
    <>
      <Header />
      <WhatsAppNotes />
      <Footer />
    </>
  );
}
