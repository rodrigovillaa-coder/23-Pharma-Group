export function QuemSomos() {
  return (
    <section id="quem-somos">
      <div style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="quem-grid">
            <div className="quem-content reveal">
              <div className="section-tag">Quem Somos</div>
              <h2 className="section-title">Parceiros estratégicos<br/>no setor da saúde</h2>
              <div className="quem-text">
                <p>Somos uma empresa dedicada a fornecer soluções hospitalares com segurança, transparência e alto padrão de qualidade.</p>
                <p>Trabalhamos com insumos de procedência garantida, assegurando confiabilidade e eficiência para hospitais, clínicas e instituições de saúde.</p>
                <p>Nossa logística é ágil e estruturada para atender com rapidez, garantindo abastecimento contínuo mesmo em cenários de alta demanda.</p>
              </div>
              <div className="quem-highlight">
                "Mais do que fornecedores — somos parceiros estratégicos comprometidos com a continuidade operacional da sua instituição."
              </div>
            </div>
            <div className="quem-visual reveal reveal-delay-2">
              <div className="quem-img-wrap">
                <div className="quem-img-inner">
                  <img 
                    src="https://i.postimg.cc/W1G5RwCN/23-Polo.jpg" 
                    alt="Polo 23 Pharma" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
