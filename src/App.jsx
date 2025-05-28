import './App.css'
import Navbar from './Navbar'
import Slider from './Slider'
import HomeSections from './HomeSections'
import Footer from './Footer'
import ChatBot from './components/ChatBot'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CarCare from './CarCare'
import HomeCare from './HomeCare'
import PersonalCare from './PersonalCare'
import AboutUs from './AboutUs'
import ProductDetails from './ProductDetails'
import Cart from './Cart'
import Account from './Account'
import SearchResults from './SearchResults'
import Checkout from './Checkout'
import { CartProvider } from './context/CartContext'
import { SearchProvider } from './context/SearchContext'
import ScrollToTop from './components/ScrollToTop'

// Footer Pages
const Contact = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
    <p className="text-gray-600">Contact page content coming soon...</p>
  </div>
);

const Shipping = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Shipping Policy</h1>
    <p className="text-gray-600">Shipping policy content coming soon...</p>
  </div>
);

const Returns = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Returns & Refunds</h1>
    <p className="text-gray-600">Returns and refunds policy content coming soon...</p>
  </div>
);

const FAQ = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
    <p className="text-gray-600">FAQ content coming soon...</p>
  </div>
);

const Privacy = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
    <p className="text-gray-600">Privacy policy content coming soon...</p>
  </div>
);

const Terms = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
    <p className="text-gray-600">Terms of service content coming soon...</p>
  </div>
);

const Cookies = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
    <p className="text-gray-600">Cookie policy content coming soon...</p>
  </div>
);

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <BrowserRouter>
          <ScrollToTop />
          <ChatBot />
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Slider />
                <HomeSections />
                <Footer />
              </>
            } />
            <Route path="/car-care" element={
              <>
                <Navbar />
                <CarCare />
                <Footer />
              </>
            } />
            <Route path="/home-care" element={
              <>
                <Navbar />
                <HomeCare />
                <Footer />
              </>
            } />
            <Route path="/personal-care" element={
              <>
                <Navbar />
                <PersonalCare />
                <Footer />
              </>
            } />
            <Route path="/about-us" element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            } />
            <Route path="/product/:productId" element={
              <>
                <Navbar />
                <ProductDetails />
                <Footer />
              </>
            } />
            <Route path="/cart" element={
              <>
                <Navbar />
                <Cart />
                <Footer />
              </>
            } />
            <Route path="/checkout" element={
              <>
                <Navbar />
                <Checkout />
                <Footer />
              </>
            } />
            <Route path="/account" element={
              <>
                <Navbar />
                <Account />
                <Footer />
              </>
            } />
            <Route path="/search" element={
              <>
                <Navbar />
                <SearchResults />
                <Footer />
              </>
            } />
            {/* Footer Links Routes */}
            <Route path="/contact" element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/shipping" element={
              <>
                <Navbar />
                <Shipping />
                <Footer />
              </>
            } />
            <Route path="/returns" element={
              <>
                <Navbar />
                <Returns />
                <Footer />
              </>
            } />
            <Route path="/faq" element={
              <>
                <Navbar />
                <FAQ />
                <Footer />
              </>
            } />
            <Route path="/privacy" element={
              <>
                <Navbar />
                <Privacy />
                <Footer />
              </>
            } />
            <Route path="/terms" element={
              <>
                <Navbar />
                <Terms />
                <Footer />
              </>
            } />
            <Route path="/cookies" element={
              <>
                <Navbar />
                <Cookies />
                <Footer />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </CartProvider>
  )
}

export default App
