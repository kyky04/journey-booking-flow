import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Check } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { services } from '@/data/services';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const location = useLocation();
  const { toast } = useToast();
  const initialService = location.state?.serviceId || '';
  const initialServiceName = location.state?.serviceName || '';

  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceId: initialService,
    serviceName: initialServiceName,
    date: undefined as Date | undefined,
    guests: '1',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - in real app, this would send to backend
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create WhatsApp message
      const selectedService = services.find(s => s.id === formData.serviceId);
      const message = `
*BOOKING REQUEST - TravelPro*

*Detail Pemesanan:*
• Nama: ${formData.customerName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Layanan: ${selectedService?.title || formData.serviceName}
• Tanggal: ${formData.date ? format(formData.date, 'dd MMMM yyyy', { locale: id }) : 'Belum ditentukan'}
• Jumlah Orang: ${formData.guests}
• Catatan: ${formData.notes || 'Tidak ada'}

Mohon konfirmasi ketersediaan dan detail lebih lanjut. Terima kasih!
      `.trim();

      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      
      toast({
        title: "Booking berhasil dikirim!",
        description: "Anda akan dialihkan ke WhatsApp untuk konfirmasi lebih lanjut.",
      });

      // Redirect to WhatsApp after a short delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);

      // Reset form
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        serviceId: '',
        serviceName: '',
        date: undefined,
        guests: '1',
        notes: ''
      });

    } catch (error) {
      toast({
        title: "Gagal mengirim booking",
        description: "Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.",
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
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-up">
                Form Booking
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up">
                Isi formulir di bawah ini untuk melakukan pemesanan layanan travel
              </p>
            </div>

            {/* Booking Form */}
            <Card className="shadow-travel">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Detail Pemesanan</span>
                </CardTitle>
                <CardDescription>
                  Pastikan semua informasi yang Anda masukkan sudah benar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Customer Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Nama Lengkap *</Label>
                      <Input
                        id="customerName"
                        value={formData.customerName}
                        onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor WhatsApp *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="08xxxxxxxxxx"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Pilih Layanan *</Label>
                    <Select 
                      value={formData.serviceId} 
                      onValueChange={(value) => {
                        const service = services.find(s => s.id === value);
                        setFormData({
                          ...formData, 
                          serviceId: value,
                          serviceName: service?.title || ''
                        });
                      }}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih layanan yang diinginkan" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id} className="hover:bg-muted">
                            <div className="flex flex-col items-start">
                              <span className="font-medium">{service.title}</span>
                              <span className="text-sm text-muted-foreground">{service.price}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Guests */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Tanggal Perjalanan</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.date ? (
                              format(formData.date, "dd MMMM yyyy", { locale: id })
                            ) : (
                              <span>Pilih tanggal</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.date}
                            onSelect={(date) => setFormData({...formData, date})}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests">Jumlah Orang *</Label>
                      <Select 
                        value={formData.guests} 
                        onValueChange={(value) => setFormData({...formData, guests: value})}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
                            <SelectItem key={num} value={num.toString()} className="hover:bg-muted">
                              {num} {num === 1 ? 'orang' : 'orang'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Catatan Tambahan</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="Permintaan khusus, alergi makanan, dll..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
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
                        <Check className="mr-2 h-4 w-4" />
                        Kirim Booking Request
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Setelah submit, Anda akan dialihkan ke WhatsApp untuk konfirmasi lebih lanjut dengan tim kami.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;