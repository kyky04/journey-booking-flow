import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Clock, Users, Star } from 'lucide-react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/services';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Layanan tidak ditemukan</h1>
          <Link to="/services">
            <Button>Kembali ke Layanan</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <div className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/services"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Layanan
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                {service.popular && (
                  <Badge className="bg-accent text-accent-foreground">
                    Populer
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-up">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 animate-fade-up">
                {service.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {service.duration && (
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                )}
                {service.groupSize && (
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{service.groupSize}</span>
                  </div>
                )}
              </div>

              <div className="bg-card p-6 rounded-lg border border-border mb-8">
                <div className="text-3xl font-bold text-primary mb-2">
                  {service.price}
                </div>
                <p className="text-muted-foreground">
                  {service.priceDetail}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/booking" 
                  state={{ serviceId: service.id, serviceName: service.title }}
                  className="flex-1"
                >
                  <Button variant="hero" className="w-full">
                    Book Sekarang
                  </Button>
                </Link>
                <a
                  href={`https://wa.me/6281234567890?text=Halo! Saya tertarik dengan layanan ${service.title}. Bisa minta info lebih detail?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    Tanya via WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-80 object-cover rounded-lg shadow-travel"
              />
              
              {/* Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {service.gallery.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`${service.title} ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features & Included */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Fitur Unggulan
                </h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Yang Termasuk
                </h2>
                <div className="space-y-4">
                  {service.included.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Jangan tunggu lagi! Book sekarang dan dapatkan pengalaman travel terbaik bersama kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" state={{ serviceId: service.id, serviceName: service.title }}>
                <Button variant="accent" size="lg" className="px-8">
                  Book Sekarang
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;