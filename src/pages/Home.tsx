import Hero from '../components/home/Hero';
import Partners from '../components/home/Partners';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedServices from '../components/home/FeaturedServices';
import CaseStudiesCarousel from '../components/home/CaseStudiesCarousel';
import BlogPreview from '../components/home/BlogPreview';
import ContactBanner from '../components/home/ContactBanner';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Partners />
      <AboutPreview />
      <FeaturedServices />
      <CaseStudiesCarousel />
      <BlogPreview />
      <ContactBanner />
    </div>
  );
};

export default Home;