import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  icon: LucideIcon;
  features: string[];
  popular?: boolean;
}

const ServiceCard = ({ 
  id, 
  title, 
  description, 
  price, 
  image, 
  icon: Icon, 
  features, 
  popular = false 
}: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
      {popular && (
        <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
          Populer
        </Badge>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-2">
            <Icon className="h-6 w-6" />
            <span className="font-semibold">{title}</span>
          </div>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-primary">{price}</div>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-sm text-muted-foreground">
                +{features.length - 3} fitur lainnya
              </li>
            )}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Link to={`/services/${id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            Detail
          </Button>
        </Link>
        <Link to="/booking" state={{ serviceId: id, serviceName: title }} className="flex-1">
          <Button className="w-full">
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;