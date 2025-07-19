import { useState } from 'react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, MapPin } from 'lucide-react';

// Import service images
import privateLandTourImg from '@/assets/private-land-tour.jpg';
import photographerImg from '@/assets/photographer.jpg';
import dailyGuideImg from '@/assets/daily-guide.jpg';
import airportTransferImg from '@/assets/airport-transfer.jpg';
import privateCarDriverImg from '@/assets/private-car-driver.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import testimonialAvatars from '@/assets/testimonial-avatars.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Indira',
    location: 'Jakarta',
    service: 'Private Land Tour',
    rating: 5,
    comment: 'Pengalaman yang luar biasa! Guide sangat profesional dan ramah. Destinasi yang dikunjungi sangat indah dan rute perjalanan sangat efisien. Highly recommended!',
    image: testimonialAvatars,
    date: 'November 2024'
  },
  {
    id: 2,
    name: 'Budi Santoso',
    location: 'Surabaya',
    service: 'Airport Transfer',
    rating: 5,
    comment: 'Pelayanan tepat waktu dan driver sangat profesional. Mobil bersih dan nyaman. Pasti akan menggunakan layanan ini lagi di masa depan.',
    image: testimonialAvatars,
    date: 'Oktober 2024'
  },
  {
    id: 3,
    name: 'Lisa Maharani',
    location: 'Bandung',
    service: 'Photographer',
    rating: 5,
    comment: 'Hasil foto sangat memuaskan! Fotografer sangat kreatif dan profesional. Momen liburan kami terabadikan dengan sempurna. Terima kasih TravelPro!',
    image: testimonialAvatars,
    date: 'September 2024'
  },
  {
    id: 4,
    name: 'Ahmad Rizki',
    location: 'Medan',
    service: 'Visa Assistance',
    rating: 5,
    comment: 'Proses pengurusan visa sangat mudah dan cepat. Tim sangat membantu dari awal hingga visa approved. Recommended untuk yang butuh bantuan visa!',
    image: testimonialAvatars,
    date: 'Agustus 2024'
  },
  {
    id: 5,
    name: 'Dewi Sartika',
    location: 'Yogyakarta',
    service: 'Private Car + Driver',
    rating: 5,
    comment: 'Driver sangat berpengalaman dan sopan. Perjalanan keluarga kami menjadi sangat nyaman dan aman. Mobil dalam kondisi sangat baik dan bersih.',
    image: testimonialAvatars,
    date: 'Juli 2024'
  }
];

const galleryImages = [
  {
    id: 1,
    src: privateLandTourImg,
    alt: 'Beautiful mountain landscape tour',
    location: 'Bromo, Jawa Timur',
    category: 'Tour'
  },
  {
    id: 2,
    src: photographerImg,
    alt: 'Professional travel photography',
    location: 'Pantai Kuta, Bali',
    category: 'Photography'
  },
  {
    id: 3,
    src: dailyGuideImg,
    alt: 'Cultural temple visit with guide',
    location: 'Borobudur, Yogyakarta',
    category: 'Tour'
  },
  {
    id: 4,
    src: airportTransferImg,
    alt: 'Airport transfer service',
    location: 'Bandara Soekarno-Hatta',
    category: 'Transfer'
  },
  {
    id: 5,
    src: gallery1,
    alt: 'Group travel photography',
    location: 'Malioboro, Yogyakarta',
    category: 'Photography'
  },
  {
    id: 6,
    src: gallery2,
    alt: 'Traditional cultural tour',
    location: 'Pasar Floating Banjarmasin',
    category: 'Tour'
  },
  {
    id: 7,
    src: privateCarDriverImg,
    alt: 'Private car service',
    location: 'Jakarta City Tour',
    category: 'Transport'
  },
  {
    id: 8,
    src: gallery3,
    alt: 'Adventure photography',
    location: 'Kawah Ijen, Jawa Timur',
    category: 'Photography'
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Tour', 'Photography', 'Transfer', 'Transport'];
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Galeri & Testimoni
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-up">
              Lihat dokumentasi perjalanan dan pengalaman pelanggan yang telah mempercayai layanan kami
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Apa Kata Mereka
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah testimoni dari mereka yang telah menggunakan layanan TravelPro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-card border-border/50 hover:shadow-travel transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>

                  <Quote className="h-5 w-5 text-primary mb-2" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {testimonial.comment}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Galeri Perjalanan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Dokumentasi visual dari berbagai layanan dan destinasi yang telah kami kunjungi bersama para pelanggan.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="px-6"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold text-sm">{image.location}</p>
                  <p className="text-xs opacity-90">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ingin Pengalaman Serupa?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pelanggan yang telah merasakan pengalaman travel terbaik bersama TravelPro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking">
              <Button variant="accent" size="lg" className="px-8">
                Mulai Perjalanan
              </Button>
            </a>
            <a href="/services">
              <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                Lihat Layanan
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;