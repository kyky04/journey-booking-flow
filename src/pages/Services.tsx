import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Layanan Travel Terlengkap
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-up">
              Dari tour privat hingga asuransi perjalanan, kami menyediakan semua kebutuhan traveling Anda dengan layanan profesional dan terpercaya.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
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
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Butuh Paket Khusus?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kami juga menyediakan paket custom sesuai kebutuhan Anda. 
            Hubungi tim kami untuk konsultasi gratis dan penawaran khusus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo! Saya ingin konsultasi untuk paket custom travel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
                Konsultasi Gratis
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;