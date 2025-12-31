"use client";

import { useState } from "react";


import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false)


  return(
    <>
      <Header />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Problems />
      <About />
      <Services />
      <Testimonials />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ContactForm />
      </Modal>
    </>
  )
}