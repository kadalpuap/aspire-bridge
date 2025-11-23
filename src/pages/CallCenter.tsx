import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Phone, PhoneOutgoing, Mail, Users, BarChart, Clock, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-4.png";

const CallCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-accent/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-accent-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Delivering Exceptional Customer Experiences, 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Aspire Bridge provides end-to-end Call Center Services designed to improve customer satisfaction and drive business growth. We combine technology, analytics, and human expertise to provide fast, reliable, and empathetic customer interactions.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 animate-fade-in">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Call Center Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Our Call Center Solutions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">Live Chat Support Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Real-time chat support to engage customers and resolve queries instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">Inbound Call Center Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Professional handling of customer inquiries, support requests, and order processing.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <PhoneOutgoing className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">Outbound Call Center Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Proactive outreach for sales, surveys, appointment scheduling, and follow-ups.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">Email Support Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Comprehensive email management with quick response times and high accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Benefits of Working with Aspire Bridge
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Trained Agents</h3>
              <p className="text-muted-foreground text-sm">
                Skilled professionals with strong communication skills and product knowledge.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Advanced CRM Tools</h3>
              <p className="text-muted-foreground text-sm">
                State-of-the-art CRM and automation tools for efficient operations.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Monitoring</h3>
              <p className="text-muted-foreground text-sm">
                Data-driven quality monitoring and continuous improvement processes.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexible Time Zones</h3>
              <p className="text-muted-foreground text-sm">
                Support across multiple time zones ensuring 24/7 availability.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Dedicated Account Managers</h3>
              <p className="text-muted-foreground text-sm">
                Personal account managers for every project ensuring seamless communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            What Our Clients Say
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

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a Free Consultation</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Looking for a trusted call center partner? Reach out to Aspire Bridge today and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Contact Us Now
              </Button>
            </Link>
            <a href="mailto:info@aspirebridge.info">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Email: info@aspirebridge.info
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallCenter;
