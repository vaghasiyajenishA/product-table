import coffee1 from '../image/Coffee1.jpg'
import coffee2 from '../image/Coffee2.webp'
import coffee3 from '../image/Coffee3.jpg'
import coffee4 from '../image/Coffee4.webp'
import coffee5 from '../image/Coffee5.jpg'
import coffee6 from '../image/Coffee6.webp'
import coffee7 from '../image/Coffee7.webp'
import coffee8 from '../image/Coffee8.webp'
import coffee9 from '../image/Coffee9.webp'
import coffee10 from '../image/Coffee10.webp'
import coffee11 from '../image/Coffee11.jpg'
import coffee12 from '../image/Coffee12.png'
import coffee13 from '../image/Coffee13.webp'

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount)
}

export const columns = [
    { id: 'title', label: 'Product Title', minWidth: 170 },
    { id: 'price', label: 'Price', minWidth: 100 },
    {
        id: 'description',
        label: 'Description',
        minWidth: 170,
    },
    {
        id: 'category',
        label: 'Category',
        minWidth: 170,
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 170,
    },
];

export const categoryData = [
  {
    name: "men's clothing",
    icon: "👕",        
    color: "#6366f1",
  },
  {
    name: "jewelery",
    icon: "💍",        
    color: "#ec4899",    
  },
  {
    name: "electronics",
    icon: "📱",       
    color: "#10b981",  
  },
  {
    name: "women's clothing",
    icon: "👗",         
    color: "#f59e0b",   
  },
];



export const LS = {
  get(key, fallback = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch {
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Failed to set ${key}:`, e);
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },
};

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const TOKEN_PREFIX = "token_";


export  const carouselImages = [
  {
    src: coffee1,
    title: "Summer Collection 2024",
    description: "Discover our latest summer arrivals with up to 50% off",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    src: coffee2,
    title: "Tech Gadgets & More",
    description: "Latest technology at your fingertips with free shipping",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    src: coffee3,
    title: "Home & Living Essentials",
    description: "Transform your living space with our premium collection",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    src: coffee4,
    title: "Elegant Women's Fashion",
    description: "Curated styles for modern women",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
  },
  {
    src: coffee5,
    title: "Men's Urban Wear",
    description: "Streetwear trends with bold statements",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    src: coffee6,
    title: "Smart Home Devices",
    description: "Upgrade your home with AI-powered solutions",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    src: coffee7,
    title: "Modern Lifestyle Goods",
    description: "Accessories that complement your daily life",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  },
  {
    src: coffee8,
    title: "Travel Must-Haves",
    description: "Explore the world with the right gear",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  },
  {
    src: coffee9,
    title: "Flash Deals This Week",
    description: "Don't miss our daily mega discounts",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  },
  {
    src: coffee10,
    title: "Sports & Outdoors",
    description: "Gear up for performance and adventure",
    gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
  },
  {
    src: coffee11,
    title: "Baby Essentials",
    description: "Comfort and safety for your little one",
    gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
  },
  {
    src: coffee12,
    title: "Books & Stationery",
    description: "Everything for curious minds and creatives",
    gradient: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
  },
  {
    src: coffee13,
    title: "Decor & Accents",
    description: "Give your home a fresh aesthetic",
    gradient: "linear-gradient(135deg, #ffdde1 0%, #ee9ca7 100%)",
  }
]