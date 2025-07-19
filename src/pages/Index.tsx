import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { Star, Users, Shield, Award, ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';

const Index = () => {
  const featuredServices = services.filter(service => service.popular).slice(0, 3);
  const allServices = services.slice(0, 6);

  const stats = [
    { number: '1000+', label: 'Pelanggan Puas', icon: Users },
    { number: '50+', label: 'Destinasi', icon: MapPin },
    { number: '5', label: 'Tahun Pengalaman', icon: Award },
    { number: '24/7', label: 'Customer Support', icon: Clock }
  ];

  const whyChooseUs = [
    {
      title: 'Layanan Profesional',
      description: 'Tim berpengalaman dan berlisensi resmi untuk memberikan layanan terbaik.',
      icon: Award
    },
    {
      title: 'Harga Transparan',
      description: 'Tidak ada biaya tersembunyi. Semua sudah termasuk dalam paket yang ditawarkan.',
      icon: Shield
    },
    {
      title: 'Support 24/7',
      description: 'Customer service siap membantu Anda kapan saja selama perjalanan.',
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Beautiful travel destination" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container mx-auto px-4 pt-16">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-fade-up">
              ✨ Trusted Travel Partner
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
              Wujudkan Perjalanan 
              <span className="bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent"> Impian Anda</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-up">
              Dari tour privat hingga asuransi perjalanan, kami menyediakan layanan travel terlengkap 
              dengan standar profesional untuk pengalaman yang tak terlupakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
              <Link to="/booking">
                <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
                  Book Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                  Lihat Layanan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center animate-scale-in">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Layanan Populer
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Layanan Terfavorit
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilihan pelanggan untuk pengalaman travel yang tak terlupakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                price={service.price}
                image={service.image}
                icon={service.icon}
                features={service.features}
                popular={service.popular}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2">
                Lihat Semua Layanan
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Mengapa Memilih TravelPro?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman travel terbaik dengan standar profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="bg-white/10 border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-primary-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-primary-foreground/80">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Layanan Lengkap Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dari A hingga Z, semua kebutuhan travel Anda tersedia di sini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                price={service.price}
                image={service.image}
                icon={service.icon}
                features={service.features}
                popular={service.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Siap Memulai Petualangan?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Konsultasikan rencana perjalanan Anda dengan tim profesional kami. 
            Dapatkan penawaran terbaik dan layanan prima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button variant="hero" size="lg" className="px-8">
                Book Sekarang
              </Button>
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo! Saya ingin konsultasi tentang layanan travel."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="px-8">
                Konsultasi Gratis
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">T</span>
                </div>
                <span className="text-xl font-bold">TravelPro</span>
              </div>
              <p className="text-background/80 mb-4">
                Partner terpercaya untuk semua kebutuhan perjalanan Anda dengan layanan profesional dan berkualitas.
              </p>
              <div className="flex space-x-4">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <Star className="h-5 w-5 text-accent fill-accent" />
                <Star className="h-5 w-5 text-accent fill-accent" />
                <Star className="h-5 w-5 text-accent fill-accent" />
                <Star className="h-5 w-5 text-accent fill-accent" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/services" className="hover:text-primary transition-colors">Private Land Tour</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Visa Assistance</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Airport Transfer</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Travel Insurance</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/gallery" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
                <li><Link to="/gallery" className="hover:text-primary transition-colors">Galeri</Link></li>
                <li><Link to="/gallery" className="hover:text-primary transition-colors">Testimoni</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-background/80">
                <li>📍 Jl. Sudirman No. 123, Jakarta</li>
                <li>📞 +62 21 123 4567</li>
                <li>📱 +62 812 3456 7890</li>
                <li>✉️ info@travelpro.id</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 TravelPro. All rights reserved. Made with ❤️ in Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
