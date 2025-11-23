import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headset, Heart, Shield, Clock, TrendingUp, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-1.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Empowering Global Businesses with Smart Outsourcing Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            At Aspire Bridge, we help companies streamline operations and improve customer experience through expert Call Center, Customer Support, and Healthcare BPO services. Based in Bangalore, India, our trained professionals deliver round-the-clock support for clients across the USA, UK, and beyond — combining technology, empathy, and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Headset className="text-primary-foreground" size={24} />
                </div>
                <CardTitle className="text-2xl">Call Center & Customer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We handle inbound, outbound, live chat, and email support for growing businesses. Our process-driven approach and trained agents ensure faster resolutions, higher CSAT, and smooth communication that builds customer trust.
                </CardDescription>
                <Link to="/call-center">
                  <Button className="mt-4" variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-primary-foreground" size={24} />
                </div>
                <CardTitle className="text-2xl">Healthcare BPO Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  From medical data entry to claims processing, we provide secure and compliant back-office healthcare operations. Our specialists maintain data accuracy and confidentiality, helping healthcare providers focus on patient care while we manage the details.
                </CardDescription>
                <Link to="/healthcare-bpo">
                  <Button className="mt-4" variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Why Choose Aspire Bridge?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-card border border-border hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Experienced Support Teams</h3>
              <p className="text-muted-foreground text-sm">
                Skilled agents trained for U.S. and international processes.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Data Security</h3>
              <p className="text-muted-foreground text-sm">
                HIPAA-compliant systems for healthcare operations.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Process Optimization</h3>
              <p className="text-muted-foreground text-sm">
                Using AI, NLP, and automation to reduce turnaround time.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Affordable Pricing</h3>
              <p className="text-muted-foreground text-sm">
                Global quality at cost-effective rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            Client Testimonials
          </h2>
          <Card className="max-w-4xl mx-auto border-2 shadow-lg">
            <CardContent className="pt-12 pb-12 px-8">
              <div className="flex justify-center mb-6 text-yellow-500 text-3xl">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-xl mb-8 italic text-center leading-relaxed">
                "Aspire Bridge has been our backbone for live chat and phone support. Their team understands our customers and handles every inquiry with professionalism and speed."
              </p>
              <p className="font-bold text-primary text-center text-xl">
                First Choice Used Auto Parts (USA)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to outsource your operations and scale efficiently? Contact Aspire Bridge today to discuss your needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
