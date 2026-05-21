/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Products from './components/Products';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProductDetail from './components/ProductDetail';
import ProductCataloguePage from './components/ProductCataloguePage';

function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <About />
      <Products />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <Contact />
      <FAQ />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-white selection:bg-industrial-accent selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/products/industrial-gearboxes" element={<ProductCataloguePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

