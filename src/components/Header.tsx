import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="header-inner">
            <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src={scrolled ? "https://i.postimg.cc/pdC1cxnR/23-logo-azul.png" : "https://i.postimg.cc/c4Qq7phP/23-logo-branco.png"} 
                alt="23 Pharma Group" 
                style={{ height: '62px', width: 'auto' }} 
              />
            </a>
            <nav>
              <a href="#quem-somos">Quem Somos</a>
              <a href="#segmentos">Segmentos</a>
              <a href="#estrutura">Estrutura</a>
              <a href="#contato">Contato</a>
            </nav>
            <div className="header-cta">
              <a href="#contato" className="btn-primary">Solicitar Orçamento</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <button className="mobile-close" onClick={closeMenu}>✕</button>
        <a href="#quem-somos" onClick={closeMenu}>Quem Somos</a>
        <a href="#segmentos" onClick={closeMenu}>Segmentos</a>
        <a href="#estrutura" onClick={closeMenu}>Estrutura</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
        <a href="#contato" onClick={closeMenu} style={{ marginTop: '16px', background: 'rgba(255,255,255,0.1)', opacity: 1 }}>Solicitar Orçamento</a>
      </div>
    </>
  );
}
