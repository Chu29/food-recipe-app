import { useState } from "react";
import { useNavigate } from "react-router";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import CallToAction from "../components/CallToAction";
import Header from "../components/Header";

const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // TODO: Implement Toast to display message
    navigate("/recipes");
  };
  return (
    <>
      <Header />
      <main className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
        <Hero email={email} setEmail={setEmail} handleSubmit={handleSubmit} />

        {/* Features Section */}
        <section className="min-h-screen max-w-7xl mx-auto px-4 ">
          <h2 className="text-4xl font-bold text-center mb-16 bg-orange-500 bg-clip-text text-transparent">
            Everything You Need to Cook Better
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Smart Search"
              description="Find the perfect recipe with our intelligent search. Filter by
              ingredients, dietary preferences, or cooking time."
            />
            <FeatureCard
              title="Save Favorites"
              description="Build your personal cookbook by saving recipes you love. Access
              them anytime, anywhere."
            />
            <FeatureCard
              title="Step-by-Step"
              description="Follow clear, detailed instructions with photos. Perfect for
              beginners and experienced cooks alike."
            />
            <FeatureCard
              title="Expert Curated"
              description="Every recipe is tested and reviewed by professional chefs to
              ensure delicious results every time."
            />
            <FeatureCard
              title="AI Suggestions"
              description="Get personalized recipe recommendations based on your taste
              preferences and cooking history."
            />
            <FeatureCard
              title="Community"
              description="Join a vibrant community of food enthusiasts. Share tips, ask
              questions, and inspire others."
            />
          </div>
        </section>

        <Stats />
        <CallToAction handleSubmit={handleSubmit} />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
