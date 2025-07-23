import { ArrowRight, ShoppingBag, Zap } from "lucide-react";

const EcommerceHero = () => {
  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background: 'hsl(0 0% 100%)',
        color: 'hsl(0 0% 3.9%)'
      }}
    >
      {/* Background decoration */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(0,0,0,0.03) 0%, transparent 50%)'
        }}
      />
      <div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl"
        style={{
          background: 'rgba(0,0,0,0.05)'
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'rgba(0,0,0,0.03)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-6 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium animate-[fadeInUp_0.8s_ease-out]"
            style={{
              background: 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.1)',
              color: 'hsl(0 0% 3.9%)'
            }}
          >
            <Zap size={16} style={{ color: 'hsl(0 0% 3.9%)' }} />
            Next-Generation Commerce Platform
          </div>
          
          {/* Main heading */}
          <div 
            className="space-y-4 animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Beautiful
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, hsl(0 0% 3.9%), hsl(0 0% 15%))'
                }}
              >
                {" "}Commerce
              </span>
              <br />
              Made Simple
            </h1>
            <p 
              className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'rgba(0,0,0,0.7)' }}
            >
              Build stunning ecommerce experiences that convert. 
              <br className="hidden sm:block" />
              Powerful, flexible, and designed for growth.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
          >
            {/* Primary Button */}
            <button 
              className="group inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_32px_rgba(0,0,0,0.2)]"
              style={{
                background: 'linear-gradient(135deg, hsl(0 0% 3.9%), hsl(0 0% 15%))',
                color: 'hsl(0 0% 98%)'
              }}
            >
              Start Building
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Secondary Button */}
            <button 
              className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-medium transition-all duration-300 hover:bg-[rgba(0,0,0,0.05)]"
              style={{
                background: 'transparent',
                border: '1px solid rgba(0,0,0,0.2)',
                color: 'hsl(0 0% 3.9%)'
              }}
            >
              <ShoppingBag size={18} />
              View Demo
            </button>
          </div>
          
          {/* Stats */}
          <div 
            className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both]"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold">99.9%</div>
              <div style={{ color: 'rgba(0,0,0,0.6)' }} className="mt-1">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold">50k+</div>
              <div style={{ color: 'rgba(0,0,0,0.6)' }} className="mt-1">Active Stores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold">$2B+</div>
              <div style={{ color: 'rgba(0,0,0,0.6)' }} className="mt-1">Processed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default EcommerceHero;