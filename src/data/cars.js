import toyotaCorollaImg from "../assets/images/toyota-corolla.jpeg"; 
import HyundaiElantraImg from "../assets/images/hyundai-elantra.jpeg";
import HondCivicImg from "../assets/images/honda-civic.jpeg";
import NissanSentraImg from "../assets/images/nissan-sentra.avif";
import KiaRioImg from "../assets/images/kia-rio.jpeg";
import ChevySparkImg from "../assets/images/chevy-spark.jpeg";
import FordFiestaImg from "../assets/images/ford-fiesta.jpeg";
import VolswagenPoloImg from "../assets/images/volswagen-polo.jpeg";
import SuzukiSwiftImg from "../assets/images/suzuki-swift.jpeg";
import RenaultKwidImg from "../assets/images/renault-kwid.jpeg";
import JeepWranglerImg  from "../assets/images/jeep-wrangler.jpeg";
import ChevytTahoeImg from "../assets/images/chevy-tahoe.jpeg";
import KiaSeltosImg from "../assets/images/kia-seltos.jpeg";
import MazdaCX5Img from "../assets/images/mazda-cx5.jpeg";
import NissanRogueImg from "../assets/images/nissan-rogue.jpeg";
import FordEscapeImg from "../assets/images/ford-escape.jpeg";
import SubaruForesterImg from "../assets/images/subaru-forester.jpeg";
import HondaCRVImg from "../assets/images/honda-crv.jpeg";
import HyundaiTucsonImg from "../assets/images/hyundai-tucson.jpeg";
import ToyotaRAV4 from "../assets/images/toyota-rav4.jpeg";
import FordMustang from "../assets/images/ford-mustang.jpeg";
import TeslaModel3 from "../assets/images/tesla-model3.jpeg";
import BMW5Series from "../assets/images/bmw-5-series.jpeg";
import AudiQ5 from "../assets/images/audi-q5.jpeg";
import BenzCClass from "../assets/images/benz-c-class.jpeg";
import JaguarFPace from "../assets/images/jaguar-f-pace.jpeg";
import LexusRx from "../assets/images/lexus-rx.jpeg";
import PorsheMacan from "../assets/images/porshe-macan.jpeg";
import VolvoXC90 from "../assets/images/volvo-xc90.jpeg";
import TeslaModelX from "../assets/images/tesla-model-x.jpeg";



const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    category: "Sedan",
    tier: "Normal",
    pricePerDay: 2500,
    rating: 4.5,
    availability: true,
    image: toyotaCorollaImg, 
    description: "Reliable and fuel-efficient sedan for everyday use.",
  },


  {
    id: 2,
    name: "Hyundai Elantra",
    brand: "Hyundai",
    category: "Sedan",
    tier: "Normal",
    pricePerDay: 2000,
    rating: 4.4,
    availability: true,
    image: HyundaiElantraImg ,
    description: "Affordable and efficient car for daily commuting."
  },
  {
    id: 3,
    name: "Honda Civic",
    brand: "Honda",
    category: "Sedan",
    tier: "Normal",
    pricePerDay: 3000,
    rating: 4.6,
    availability: true,
    image: HondCivicImg ,
    description: "Smooth and stylish with excellent handling."
  },
  {
    id: 4,
    name: "Nissan Sentra",
    brand: "Nissan",
    category: "Sedan",
    tier: "Normal",
    pricePerDay: 2000,
    rating: 4.3,
    availability: true,
    image: NissanSentraImg,
    description: "Compact sedan with practical features."
  },
  {
    id: 5,
    name: "Kia Rio",
    brand: "Kia",
    category: "Hatchback",
    tier: "Normal",
    pricePerDay: 1500,
    rating: 4.2,
    availability: true,
    image: KiaRioImg,
    description: "Budget-friendly car with good mileage."
  },
  {
    id: 6,
    name: "Chevrolet Spark",
    brand: "Chevrolet",
    category: "Hatchback",
    tier: "Normal",
    pricePerDay: 1350,
    rating: 4.1,
    availability: true,
    image:ChevySparkImg ,
    description: "Compact and easy to park in city areas."
  },
  {
    id: 7,
    name: "Ford Fiesta",
    brand: "Ford",
    category: "Hatchback",
    tier: "Normal",
    pricePerDay: 2000,
    rating: 4.3,
    availability: true,
    image: FordFiestaImg,
    description: "Light, efficient, and fun to drive."
  },
  {
    id: 8,
    name: "Volkswagen Polo",
    brand: "Volkswagen",
    category: "Hatchback",
    tier: "Normal",
    pricePerDay: 2500,
    rating: 4.5,
    availability: true,
    image: VolswagenPoloImg,
    description: "German quality compact car."
  },
  {
    id: 9,
    name: "Suzuki Swift",
    brand: "Suzuki",
    category: "Hatchback",
    tier: "Normal",
    pricePerDay: 2500,
    rating: 4.4,
    availability: true,
    image: SuzukiSwiftImg,
    description: "Sporty and agile compact car."
  },
  {
    id: 10,
    name: "Renault Kwid",
    brand: "Renault",
    category: "Mini SUV",
    tier: "Normal",
    pricePerDay: 1000,
    rating: 4.0,
    availability: true,
    image:RenaultKwidImg ,
    description: "Economical small SUV for city drives."
  },

  // 🟡 Medium Tier Cars
  {
    id: 11,
    name: "Jeep Wrangler",
    brand: "Jeep",
    category: "SUV",
    tier: "Medium",
    pricePerDay: 5000,
    rating: 4.6,
    availability: true,
    image:JeepWranglerImg  ,
    description: "Perfect for off-road adventures and rugged terrain."
  },
  {
    id: 12,
    name: "Chevrolet Tahoe",
    brand: "Chevrolet",
    category: "SUV",
    tier: "Medium",
    pricePerDay: 6500,
    rating: 4.7,
    availability: true,
    image: ChevytTahoeImg,
    description: "Spacious SUV with plenty of storage and comfort."
  },
  {
    id: 13,
    name: "Kia Seltos",
    brand: "Kia",
    category: "Compact SUV",
    tier: "Medium",
    pricePerDay: 5000,
    rating: 4.5,
    availability: true,
    image: KiaSeltosImg ,
    description: "Compact SUV with great mileage and stylish design."
  },
  {
    id: 14,
    name: "Mazda CX-5",
    brand: "Mazda",
    category: "SUV",
    tier: "Medium",
    pricePerDay: 5500,
    rating: 4.6,
    availability: true,
    image: MazdaCX5Img,
    description: "Stylish SUV with sporty handling."
  },
  {
    id: 15,
    name: "Nissan Rogue",
    brand: "Nissan",
    category: "SUV",
    tier: "Medium",
    pricePerDay: 5000,
    rating: 4.4,
    availability: true,
    image:NissanRogueImg ,
    description: "Well-rounded SUV for family trips."
  },
  {
    id: 16,
    name: "Ford Escape",
    brand: "Ford",
    category: "SUV",
    tier: "Medium",
    pricePerDay: 5500,
    rating: 4.5,
    availability: true,
    image: FordEscapeImg,
    description: "Balanced SUV for city and highway."
  },
  {
    id: 17,
    name: "Subaru Forester",
    brand: "Subaru",
    category: "SUV",
    tier: "Medium",
    pricePerDay: 6500,
    rating: 4.7,
    availability: true,
    image: SubaruForesterImg,
    description: "Safe and capable with all-wheel drive."
  },
  {
    id: 18,
    name: "Honda CR-V",
    brand: "Honda",
    category: "SUV",
    tier: "Medium",
    pricePerDay: 6500,
    rating: 4.7,
    availability: true,
    image: HondaCRVImg,
    description: "Spacious, efficient, and reliable."
  },
  {
    id: 19,
    name: "Hyundai Tucson",
    brand: "Hyundai",
    category: "SUV",
    tier: "Medium",
    pricePerDay: 6000,
    rating: 4.6,
    availability: true,
    image: HyundaiTucsonImg ,
    description: "Smart and connected compact SUV."
  },
  {
    id: 20,
    name: "Toyota RAV4",
    brand: "Toyota",
    category: "SUV",
    tier: "Medium",
    pricePerDay: 7000,
    rating: 4.8,
    availability: true,
    image: ToyotaRAV4,
    description: "Top-selling SUV with reliability and efficiency."
  },

  // 🟣 Premium Tier Cars
  {
    id: 21,
    name: "Ford Mustang",
    brand: "Ford",
    category: "Sports",
    tier: "Premium",
    pricePerDay: 9000,
    rating: 4.8,
    availability: true,
    image: FordMustang,
    description: "Powerful performance and classic design."
  },
  {
    id: 22,
    name: "Tesla Model 3",
    brand: "Tesla",
    category: "Electric",
    tier: "Premium",
    pricePerDay: 10000,
    rating: 4.9,
    availability: true,
    image: TeslaModel3,
    description: "Electric car with advanced features and great range."
  },
  {
    id: 23,
    name: "BMW 5 Series",
    brand: "BMW",
    category: "Luxury",
    tier: "Premium",
    pricePerDay: 9500,
    rating: 4.8,
    availability: true,
    image: BMW5Series,
    description: "Luxury sedan with high performance and comfort."
  },
  {
    id: 24,
    name: "Audi Q5",
    brand: "Audi",
    category: "Luxury SUV",
    tier: "Premium",
    pricePerDay: 8000,
    rating: 4.7,
    availability: true ,
    image: AudiQ5,
    description: "Premium SUV with style and technology."
  },
  {
    id: 25,
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes",
    category: "Luxury Sedan",
    tier: "Premium",
    pricePerDay: 10000,
    rating: 4.9,
    availability: true,
    image: BenzCClass ,
    description: "Elegant and powerful luxury sedan."
  },
  {
    id: 26,
    name: "Jaguar F-Pace",
    brand: "Jaguar",
    category: "Luxury SUV",
    tier: "Premium",
    pricePerDay: 9000,
    rating: 4.8,
    availability: true,
    image: JaguarFPace,
    description: "Sporty luxury SUV with premium features."
  },
  {
    id: 27,
    name: "Lexus RX",
    brand: "Lexus",
    category: "Luxury SUV",
    tier: "Premium",
    pricePerDay: 8000,
    rating: 4.7,
    availability: true,
    image:LexusRx ,
    description: "Smooth ride with hybrid efficiency."
  },
  {
    id: 28,
    name: "Porsche Macan",
    brand: "Porsche",
    category: "Luxury SUV",
    tier: "Premium",
    pricePerDay: 9000,
    rating: 4.9,
    availability: true,
    image: PorsheMacan,
    description: "High-performance luxury crossover."
  },
  {
    id: 29,
    name: "Volvo XC90",
    brand: "Volvo",
    category: "Luxury SUV",
    tier: "Premium",
    pricePerDay: 9000,
    rating: 4.8,
    availability: true,
    image: VolvoXC90,
    description: "Elegant SUV with safety and comfort."
  },
  {
    id: 30,
    name: "Tesla Model X",
    brand: "Tesla",
    category: "Electric SUV",
    tier: "Premium",
    pricePerDay: 11000,
    rating: 5.0,
    availability: true,
    image: TeslaModelX,
    description: "Luxury electric SUV with autopilot."
  }
];

 export default cars;