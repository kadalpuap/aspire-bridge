import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, DollarSign, ClipboardList, Mic, BarChart3, Shield, Cloud, CheckCircle, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-3.png";

const HealthcareBPO = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Streamline Your Healthcare Operations with Aspire Bridge
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            At Aspire Bridge, we offer specialized Healthcare BPO services to hospitals, clinics, and healthcare organizations worldwide. Our goal is to simplify administrative workloads while maintaining 100% accuracy, compliance, and data confidentiality.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 animate-fade-in">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Healthcare BPO Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Our Healthcare BPO Solutions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="text-primary" size={24} />
                </div>
                <CardTitle>Medical Data Entry Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Accurate and efficient data entry for patient records, medical histories, and administrative documents.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="text-primary" size={24} />
                </div>
                <CardTitle>Medical Billing & Coding Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Professional billing and coding services ensuring proper reimbursement and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardList className="text-primary" size={24} />
                </div>
                <CardTitle>Claims Processing & Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Streamlined claims processing to reduce denials and accelerate payment cycles.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mic className="text-primary" size={24} />
                </div>
                <CardTitle>Medical Transcription Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Fast and accurate transcription of medical records and physician notes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-primary" size={24} />
                </div>
                <CardTitle>Healthcare Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Data-driven insights to improve patient care and operational efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance & Quality */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Compliance & Quality
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold mb-2">HIPAA-Compliant Operations</h3>
              <p className="text-muted-foreground text-sm">
                Fully compliant with HIPAA regulations ensuring patient data privacy.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Secure Cloud Infrastructure</h3>
              <p className="text-muted-foreground text-sm">
                State-of-the-art cloud security protecting sensitive healthcare data.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Multi-Level Quality Checks</h3>
              <p className="text-muted-foreground text-sm">
                Rigorous quality assurance processes at every stage.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Data Accuracy up to 99.9%</h3>
              <p className="text-muted-foreground text-sm">
                Industry-leading accuracy standards for all healthcare data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Outsource */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Why Outsource to Aspire Bridge?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reduce Administrative Costs</h3>
                    <p className="text-muted-foreground text-sm">
                      Save up to 50% on operational costs while maintaining quality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Maintain Compliance</h3>
                    <p className="text-muted-foreground text-sm">
                      Stay compliant with international healthcare standards and regulations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Improve Turnaround Time</h3>
                    <p className="text-muted-foreground text-sm">
                      Faster processing with dedicated healthcare professionals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Access Skilled Professionals</h3>
                    <p className="text-muted-foreground text-sm">
                      Trained specialists with expertise in U.S. healthcare processes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let Aspire Bridge handle your healthcare back-office tasks while you focus on patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get in Touch
              </Button>
            </Link>
            <a href="mailto:info@aspirebridge.info">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareBPO;
