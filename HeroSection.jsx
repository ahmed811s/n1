import { Button } from "@/components/ui/button";
import name from './';
const HeroSection = () => (
  <div className="text-center p-6">
    <h2 className="text-2xl font-bold">50% Rabatt: Komplett Minirekond</h2>
    <p className="text-lg mt-2">Skydda din bil i vinter mot slask & vägsalt!</p>
    <Button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full">
      Hämta Erbjudande
    </Button>
  </div>
);

export default HeroSection;
