import React, { useEffect, useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Flame, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CatchDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    subtotal,
  } = useCart();

  const [isReserved, setIsReserved] = useState(false);

  // Reset confirmation state when drawer opens/closes
  useEffect(() => {
    if (!isCartOpen) {
      setIsReserved(false);
    }
  }, [isCartOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto select-none">
      {/* Dimmed translucent backdrop */}
      <div 
        className="absolute inset-0 bg-black/35 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#071626]/40 backdrop-blur-2xl border-l border-white/25 shadow-[-15px_0_50px_rgba(0,0,0,0.5),inset_1px_0_0_rgba(255,255,255,0.25)] flex flex-col text-white animate-slideLeft">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-400/40 shadow-[0_0_20px_rgba(245,166,35,0.25),inset_0_1px_0_rgba(255,255,255,0.3)] flex items-center justify-center text-amber-300">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  Your Catch
                  {totalCount > 0 && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold backdrop-blur-md">
                      {totalCount} {totalCount === 1 ? 'item' : 'items'}
                    </span>
                  )}
                </h2>
                <p className="text-xs text-white/50">Beachside grill reserves</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/70 hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Close Catch drawer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content Area: Either Reservation Confirmation OR Cart Items & Checkout */}
          {isReserved ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/30 to-orange-500/30 blur-2xl animate-pulse" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 border border-amber-300/50 backdrop-blur-2xl flex items-center justify-center text-amber-300 shadow-[0_0_30px_rgba(245,166,35,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                  <CheckCircle2 size={40} className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                  <Sparkles size={12} />
                  Table & Catch Reserved
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Your Coastal Hearth Awaits
                </h3>
                <p className="text-sm text-white/70 max-w-xs leading-relaxed mx-auto">
                  Your catch has been slated for preparation over fresh charcoal embers. We look forward to hosting you at OceanRare.
                </p>
              </div>

              {/* Reservation summary card */}
              <div className="w-full rounded-2xl bg-white/[0.06] border border-white/15 p-4 backdrop-blur-xl text-left space-y-2.5 shadow-inner">
                <div className="flex justify-between items-center text-xs text-white/60">
                  <span>Hearth Experience:</span>
                  <span className="text-amber-300 font-semibold">Oceanfront Table</span>
                </div>
                <div className="flex justify-between items-center text-xs text-white/60">
                  <span>Pre-ordered Items:</span>
                  <span className="text-white font-semibold">{totalCount} {totalCount === 1 ? 'Cut' : 'Cuts'}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-white/60">
                  <span>Estimated Total:</span>
                  <span className="text-amber-400 font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  clearCart();
                  setIsCartOpen(false);
                  setIsReserved(false);
                }}
                className="w-full py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border border-white/25 shadow-[0_10px_25px_rgba(245,166,35,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Done & Return to OceanRare
              </button>
            </div>
          ) : (
            <>
              {/* Cart Item List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-5">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-amber-500/20 blur-xl animate-pulse" />
                      <div className="relative w-20 h-20 rounded-2xl bg-white/[0.07] backdrop-blur-2xl flex items-center justify-center text-amber-400 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)]">
                        <Flame size={32} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Your Catch is Empty</h3>
                      <p className="text-sm text-white/60 max-w-[260px] leading-relaxed">
                        Scroll through the grill and click any fresh catch to add it to your reserve basket.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="mt-3 px-7 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-amber-400/50 text-amber-300 hover:text-white font-bold text-xs tracking-wider uppercase backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all cursor-pointer"
                    >
                      Explore The Grill
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-2xl border border-white/15 hover:border-amber-400/40 shadow-[0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all group"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-20 h-20 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-md flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-inner">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain filter brightness-105 contrast-110 drop-shadow-md group-hover:scale-105 transition-transform"
                        />
                      </div>

                      {/* Info & Quantity Controls */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold text-white truncate">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-white/40 hover:text-red-400 p-1 transition-colors cursor-pointer"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        <div className="text-xs text-amber-400 font-bold mt-0.5">
                          ₹{item.price}
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity buttons */}
                          <div className="flex items-center gap-2 rounded-lg bg-white/[0.08] p-1 border border-white/15 backdrop-blur-md shadow-inner">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-bold px-2 text-white min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          {/* Line Item Total */}
                          <span className="text-xs font-semibold text-white/90">
                            ₹{(parseFloat(String(item.price).replace(/[^0-9.]/g, '')) * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer with Subtotal and Checkout CTA */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.3)] space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Catch Subtotal</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-[#F45B2A] drop-shadow-sm">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <p className="text-[11px] text-white/40">
                    Includes beachside open-fire charcoal preparation & chef service.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setIsReserved(true);
                    }}
                    className="w-full py-4 px-6 rounded-full font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-orange-500 via-amber-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white flex items-center justify-center gap-2 border border-white/20 shadow-[0_10px_28px_rgba(244,91,42,0.45),inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Reserve Table & Savor Catch</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-xs text-white/40 hover:text-white/70 underline underline-offset-4 transition-colors cursor-pointer"
                    >
                      Clear All Items
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}

