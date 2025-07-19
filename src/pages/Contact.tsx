import { useState } from 'react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create WhatsApp message
      const message = `
*PESAN KONTAK - TravelPro*

*Dari:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Pesan:*
${formData.message}

Mohon direspon via email atau WhatsApp. Terima kasih!
      `.trim();

      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      
      toast({
        title: "Pesan berhasil dikirim!",
        description: "Tim kami akan segera menghubungi Anda.",
      });

      // Redirect to WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      toast({
        title: "Gagal mengirim pesan",
        description: "Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Hubungi Kami
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-up">
              Siap membantu merencanakan perjalanan impian Anda. Jangan ragu untuk menghubungi tim professional kami.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-travel">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Informasi Kontak</span>
                </CardTitle>
                <CardDescription>
                  Hubungi kami melalui berbagai channel yang tersedia
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Alamat Kantor</p>
                    <p className="text-muted-foreground text-sm">
                      Jl. Sudirman No. 123<br/>
                      Jakarta Pusat 10220<br/>
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Telepon</p>
                    <p className="text-muted-foreground text-sm">+62 21 123 4567</p>
                    <p className="text-muted-foreground text-sm">+62 812 3456 7890 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm">info@travelpro.id</p>
                    <p className="text-muted-foreground text-sm">booking@travelpro.id</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Jam Operasional</p>
                    <p className="text-muted-foreground text-sm">
                      Senin - Jumat: 09:00 - 18:00<br/>
                      Sabtu: 09:00 - 15:00<br/>
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-travel">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-secondary" />
                  <span>Kontak Cepat</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://wa.me/6281234567890?text=Halo! Saya ingin bertanya tentang layanan TravelPro."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Chat WhatsApp
                  </Button>
                </a>
                <a href="tel:+622112345678">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Telepon Sekarang
                  </Button>
                </a>
                <a href="mailto:info@travelpro.id">
                  <Button variant="outline" className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Kirim Email
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-travel">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan kami akan merespon dalam 24 jam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Topik yang ingin dibicarakan"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                    variant="hero"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Pesan Anda akan dikirim melalui WhatsApp untuk respon yang lebih cepat.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="shadow-travel">
            <CardHeader>
              <CardTitle>Lokasi Kantor</CardTitle>
              <CardDescription>
                Kunjungi kantor kami di Jakarta Pusat untuk konsultasi langsung
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 rounded-b-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4978094936835!2d106.81954731476853!3d-6.207915995492899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42e90af2d5b%3A0x81d5dddeb0d24849!2sJl.%20Jend.%20Sudirman%2C%20Jakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1634567890123!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor TravelPro"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;