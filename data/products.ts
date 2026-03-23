export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Premium Wireless Headphones",
    description: "Experience immersive sound with our latest noise-cancelling wireless headphones. Features 30-hour battery life and ultra-comfortable ear cushions.",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    category: "Electronics"
  },
  {
    id: "p2",
    name: "Minimalist Smartwatch",
    description: "Track your fitness, receive notifications, and look stylish with this sleek minimalist smartwatch. Water-resistant up to 50 meters.",
    price: 199.50,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    category: "Wearables"
  },
  {
    id: "p3",
    name: "Ergonomic Mechanical Keyboard",
    description: "Boost your productivity with custom tactile switches, RGB backlighting, and an ergonomic design that reduces wrist strain.",
    price: 149.00,
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop",
    category: "Computers"
  },
  {
    id: "p4",
    name: "Ultra-Thin Laptop Stand",
    description: "A foldable, ultra-thin aluminum laptop stand that improves posture and device cooling. Fits all laptops from 10 to 15.6 inches.",
    price: 45.00,
    imageUrl: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=800&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    id: "p5",
    name: "Professional Camera Lens",
    description: "Capture stunning portraits with stunning bokeh using this 50mm f/1.8 prime lens. Fast autofocus and crisp image quality.",
    price: 499.00,
    imageUrl: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800&auto=format&fit=crop",
    category: "Photography"
  },
  {
    id: "p6",
    name: "Portable Bluetooth Speaker",
    description: "Take your music everywhere. This rugged, waterproof speaker delivers 360-degree sound and 12 hours of playtime.",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop",
    category: "Electronics"
  },
  {
    id: "p7",
    name: "Leather Messenger Bag",
    description: "Handcrafted from genuine full-grain leather. Features a padded laptop sleeve and multiple compartments for organized storage.",
    price: 125.00,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    category: "Fashion"
  },
  {
    id: "p8",
    name: "Ceramic Coffee Mug",
    description: "Start your day right with this artisan-crafted ceramic mug. Keeps your beverage warm for longer and feels great in hand.",
    price: 24.00,
    imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop",
    category: "Home"
  }
];
