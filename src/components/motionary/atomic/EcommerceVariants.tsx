'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, Heart, CreditCard, Truck, Package, Star, Tag, Filter } from 'lucide-react';

// 1. Add to Cart (Bounce)
export const AddToCartBounce = () => {
    const [count, setCount] = useState(0);
    return (
        <button 
            onClick={() => setCount(count + 1)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-full font-bold hover:bg-white transition-colors group"
        >
            <motion.div 
                key={count} 
                initial={{ scale: 1 }} 
                animate={{ scale: [1, 1.5, 1] }} 
                transition={{ duration: 0.3 }}
            >
                <ShoppingCart size={18} />
            </motion.div>
            <span>Add {count > 0 && `(${count})`}</span>
        </button>
    )
}

// 2. Product Card Hover (Lift)
export const ProductCardHover = () => (
    <div className="group relative w-40 bg-surface-100 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border border-white/5">
        <div className="h-32 bg-white/10 flex items-center justify-center text-4xl">👟</div>
        <div className="p-3">
            <div className="h-4 w-3/4 bg-white/20 rounded mb-2" />
            <div className="h-3 w-1/2 bg-primary/50 rounded" />
        </div>
        <button className="absolute bottom-2 right-2 bg-white text-black p-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
            <Plus size={14} />
        </button>
    </div>
);

// 3. Quantity Stepper
export const QuantityStepper = () => {
    const [q, setQ] = useState(1);
    return (
        <div className="flex items-center bg-surface-200 rounded-lg border border-white/10">
            <button onClick={() => setQ(Math.max(1, q-1))} className="p-2 hover:text-primary transition-colors"><Minus size={14}/></button>
            <motion.span 
                key={q}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-6 text-center text-sm font-mono"
            >
                {q}
            </motion.span>
            <button onClick={() => setQ(q+1)} className="p-2 hover:text-primary transition-colors"><Plus size={14}/></button>
        </div>
    )
}

// 4. Price Tag Flip
export const PriceTag = () => (
    <div className="group perspective-1000 cursor-default">
        <div className="relative transition-transform duration-500 transform-style-3d group-hover:rotate-x-180">
            <span className="block px-3 py-1 bg-primary text-black font-bold rounded backface-hidden">$99.00</span>
            <span className="block px-3 py-1 bg-red-500 text-white font-bold rounded absolute inset-0 backface-hidden rotate-x-180 flex items-center justify-center">SALE</span>
        </div>
    </div>
);

// 5. Wishlist Toggle
export const WishlistToggle = () => {
    const [saved, setSaved] = useState(false);
    return (
        <button 
            onClick={() => setSaved(!saved)}
            className={`p-2 rounded-full border transition-all ${saved ? 'bg-pink-500 border-pink-500 text-white' : 'border-white/20 text-white/50 hover:text-white hover:border-white'}`}
        >
            <motion.div animate={saved ? { scale: [1, 1.4, 1] } : {}}>
                <Heart size={18} className={saved ? 'fill-white' : ''} />
            </motion.div>
        </button>
    )
}

// 6. Checkout Progress
export const CheckoutProgress = () => (
    <div className="flex items-center gap-2 text-xs">
        <div className="flex flex-col items-center text-primary">
            <div className="w-4 h-4 bg-primary rounded-full mb-1" />
            <span>Cart</span>
        </div>
        <div className="w-8 h-0.5 bg-primary/50" />
        <div className="flex flex-col items-center text-white">
            <div className="w-4 h-4 border-2 border-white rounded-full mb-1" />
            <span>Pay</span>
        </div>
        <div className="w-8 h-0.5 bg-white/20" />
        <div className="flex flex-col items-center text-white/50">
            <div className="w-4 h-4 border-2 border-white/20 rounded-full mb-1" />
            <span>Done</span>
        </div>
    </div>
);

// 7. Size Selector
export const SizeSelector = () => {
    const [size, setSize] = useState("M");
    return (
        <div className="flex gap-2">
            {["S", "M", "L", "XL"].map(s => (
                <button 
                    key={s}
                    onClick={() => setSize(s)}
                    className={`w-8 h-8 rounded border text-xs font-bold transition-all ${size === s ? 'bg-white text-black border-white' : 'border-white/20 text-white/50 hover:border-white hover:text-white'}`}
                >
                    {s}
                </button>
            ))}
        </div>
    )
}

// 8. Color Swatch
export const ColorSwatch = () => {
    const [color, setColor] = useState(0);
    const colors = ["#EF4444", "#3B82F6", "#10B981", "#F59E0B"];
    return (
        <div className="flex gap-2">
            {colors.map((c, i) => (
                <button 
                    key={c}
                    onClick={() => setColor(i)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${color === i ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                    style={{ backgroundColor: c }}
                />
            ))}
        </div>
    )
}

// 9. Shipping Truck
export const ShippingTruck = () => (
    <div className="relative w-full h-8 overflow-hidden bg-surface-100 rounded flex items-center px-2">
        <motion.div 
            animate={{ x: ["-100%", "200%"] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute text-primary"
        >
            <Truck size={20} />
        </motion.div>
        <span className="text-[10px] text-white/30 z-10 ml-1">Free Shipping</span>
    </div>
);

// 10. Coupon Code
export const CouponInput = () => (
    <div className="flex border border-dashed border-white/30 rounded p-1 focus-within:border-primary/50 transition-colors">
        <Tag size={16} className="text-white/50 mt-1.5 ml-1" />
        <input type="text" placeholder="PROMO20" className="bg-transparent outline-none text-sm text-white px-2 w-20 uppercase" />
        <button className="text-xs bg-white/10 hover:bg-white/20 px-2 rounded">Apply</button>
    </div>
);

// 11. Quick View Modal (Trigger)
export const QuickView = () => (
    <div className="group relative w-24 h-24 bg-surface-200 rounded-lg flex items-center justify-center cursor-pointer">
        <div className="text-4xl grayscale group-hover:grayscale-0 transition-all">📦</div>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg backdrop-blur-sm">
            <span className="text-[10px] font-bold bg-white text-black px-2 py-1 rounded-full">VIEW</span>
        </div>
    </div>
);

// 12. Rating Stars Interactive
export const InteractiveRating = () => {
    const [hover, setHover] = useState(0);
    return (
        <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
                <Star 
                    key={i} 
                    size={16} 
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(0)}
                    className={`transition-colors cursor-pointer ${i <= hover ? 'fill-yellow-400 text-yellow-400' : 'text-white/20'}`}
                />
            ))}
        </div>
    )
}

// 13. Cart Fly Animation
export const FlyToCart = () => {
    const [flying, setFlying] = useState(false);
    return (
        <button onClick={() => { setFlying(true); setTimeout(() => setFlying(false), 1000); }} className="relative px-4 py-2 border border-white/20 rounded hover:bg-white/5">
            Buy Now
            {flying && (
                <motion.div 
                    className="absolute top-2 left-4 w-4 h-4 bg-primary rounded-full z-50"
                    initial={{ scale: 1, x: 0, y: 0 }}
                    animate={{ scale: 0.2, x: 100, y: -100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
            )}
        </button>
    )
}

// 14. Stock Meter
export const StockMeter = () => (
    <div className="w-full">
        <div className="flex justify-between text-[10px] mb-1 text-red-400 font-bold">
            <span>Hurry!</span>
            <span>3 left</span>
        </div>
        <div className="h-1.5 bg-surface-100 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 w-[10%] animate-pulse" />
        </div>
    </div>
);

// 15. Payment Method Select
export const PaymentSelect = () => {
    const [selected, setSelected] = useState(0);
    return (
        <div className="flex gap-2">
            {[0, 1].map(i => (
                <div 
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`w-12 h-8 rounded border flex items-center justify-center cursor-pointer transition-all ${selected === i ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 text-white/30'}`}
                >
                    <CreditCard size={16} />
                </div>
            ))}
        </div>
    )
}

// 16. Filter Chip
export const FilterChip = () => {
    const [active, setActive] = useState(false);
    return (
        <button 
            onClick={() => setActive(!active)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs border transition-all ${active ? 'bg-white text-black border-white' : 'bg-transparent border-white/20 text-white/70'}`}
        >
            {active && <Check size={10} />}
            Best Seller
        </button>
    )
}

// 17. Category Pill
export const CategoryPill = () => (
    <div className="flex gap-2 overflow-hidden w-32 mask-image-r">
        {["New", "Men", "Women", "Kids"].map(c => (
            <span key={c} className="px-3 py-1 bg-surface-100 rounded-full text-xs whitespace-nowrap hover:bg-surface-200 cursor-pointer transition-colors">
                {c}
            </span>
        ))}
    </div>
);

// 18. Product Image Gallery
export const MiniGallery = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="flex gap-1">
            {[0,1,2].map(i => (
                <div 
                    key={i}
                    onMouseEnter={() => setActive(i)}
                    className={`w-8 h-8 bg-surface-200 rounded cursor-pointer border-2 transition-colors ${active === i ? 'border-primary' : 'border-transparent'}`}
                />
            ))}
        </div>
    )
}

// 19. Order Status
export const OrderStatus = () => (
    <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs text-white/70 line-through">Confirmed</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs text-white/70 line-through">Shipped</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-bold text-white">Out for Delivery</span>
        </div>
    </div>
);

// 20. Compare Sticky
export const CompareSticky = () => (
    <div className="flex items-center gap-2 p-2 bg-surface-100 rounded border border-white/10 w-full justify-between">
        <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-white/20 border border-black" />
            <div className="w-6 h-6 rounded-full bg-white/40 border border-black" />
        </div>
        <button className="text-[10px] bg-primary text-black px-2 py-1 rounded">Compare (2)</button>
    </div>
);

import { Check } from 'lucide-react';

