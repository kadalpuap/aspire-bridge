import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-2.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-accent/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-accent-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            About Aspire Bridge
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Your Trusted Partner in Global Business Process Outsourcing
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2">
            <CardContent className="pt-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Aspire Bridge is a Bangalore-based outsourcing partner providing world-class Call Center, Customer Support, and Healthcare BPO solutions. We empower global businesses to scale efficiently by combining skilled manpower, smart processes, and advanced technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <Card className="hover-scale">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-primary-foreground" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4 text-primary">Our Mission</h2>
                <p className="text-center text-muted-foreground">
                  To deliver reliable and affordable business process outsourcing solutions that help organizations achieve operational excellence.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="hover-scale">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="text-primary-foreground" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4 text-primary">Our Vision</h2>
                <p className="text-center text-muted-foreground">
                  To be recognized as a trusted global partner that bridges businesses with efficiency, empathy, and innovation.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="hover-scale">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-primary-foreground" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4 text-primary">Our Values</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Integrity and Transparency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Customer-Centric Approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Commitment to Quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Continuous Improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Why Work With Aspire Bridge?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Global Experience</h3>
                  <p className="text-muted-foreground text-sm">
                    Serving clients across USA, UK, and international markets with proven track record.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Round-the-clock operations ensuring your business never sleeps.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Technology-Driven</h3>
                  <p className="text-muted-foreground text-sm">
                    Leveraging AI, automation, and advanced CRM systems for optimal efficiency.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Skilled Workforce</h3>
                  <p className="text-muted-foreground text-sm">
                    Trained professionals with expertise in various industries and processes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
