import { mySocials } from "../constant";

const Footer = () => {
  return (
    <footer className="w-full py-10 border-t border-white/5 bg-primary/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {mySocials.map((social, index) => (
            <a 
              href={social.href} 
              key={index} 
              target="_blank" 
              rel="noreferrer" 
              className="group flex flex-col items-center gap-2 transition-all"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all border border-white/5 group-hover:border-white/20">
                <img src={social.icon} className="w-6 h-6 opacity-60 group-hover:opacity-100" alt={social.name} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300 font-medium">{social.name}</span>
            </a>
          ))}
        </div>
        
        <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 text-xs font-medium tracking-wide text-neutral-500 uppercase">
          <p className="order-first sm:order-none text-neutral-400">© 2025 Anu Soni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;