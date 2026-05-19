export function Segmentos() {
  return (
    <section id="segmentos">
      <div style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="segmentos-header reveal">
            <div className="section-tag" style={{ justifyContent: 'center' }}>Segmentos de Atuação</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>O que fornecemos</h2>
            <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>Soluções completas e integradas para todas as necessidades do setor de saúde, da unidade básica ao hospital de grande porte.</p>
          </div>
          <div className="segmentos-grid">
            {/* Card 1 - Featured */}
            <div className="seg-card featured reveal">
              <div className="seg-img seg-theme-1">
                <div className="seg-img-inner">
                  <img src="https://i.postimg.cc/W1cz97Ty/A3-Medicamentos.jpg" alt="Material Médico Hospitalar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="seg-body">
                <div className="seg-icon seg-icon-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="seg-title">Material Médico Hospitalar</h3>
                <p className="seg-text">Soluções completas para abastecimento hospitalar com qualidade, segurança e eficiência logística. Atendemos desde clínicas de pequeno porte até grandes hospitais.</p>
                <div className="seg-tags">
                  <span className="seg-tag">Gaze</span>
                  <span className="seg-tag">Soro</span>
                  <span className="seg-tag">Curativos</span>
                  <span className="seg-tag">Materiais de enfermagem</span>
                  <span className="seg-tag">EPIs</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="seg-card reveal reveal-delay-1">
              <div className="seg-img seg-theme-2">
                <div className="seg-img-inner">
                  <img src="https://i.postimg.cc/LXxvDXf9/23-Odontologia.jpg" alt="Material Odontológico" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="seg-body">
                <div className="seg-icon seg-icon-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="seg-title">Material Odontológico</h3>
                <p className="seg-text">Linha completa para clínicas e consultórios, com produtos de alto desempenho e biossegurança certificada.</p>
                <div className="seg-tags">
                  <span className="seg-tag">Descartáveis</span>
                  <span className="seg-tag">Instrumentais</span>
                  <span className="seg-tag">Biossegurança</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="seg-card reveal reveal-delay-1">
              <div className="seg-img seg-theme-3">
                <div className="seg-img-inner">
                  <img src="https://i.postimg.cc/NGWCzKVV/Limpeza.jpg" alt="Limpeza Profissional" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="seg-body">
                <div className="seg-icon seg-icon-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3v1m0 16v1M4.22 4.22l.71.71m14.14 14.14l.71.71M3 12H2m20 0h-1M4.22 19.78l.71-.71M18.36 5.64l.71-.71" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" /></svg>
                </div>
                <h3 className="seg-title">Limpeza Profissional</h3>
                <p className="seg-text">Produtos e equipamentos para higienização eficiente de ambientes hospitalares e institucionais.</p>
                <div className="seg-tags">
                  <span className="seg-tag">Desinfetantes</span>
                  <span className="seg-tag">Cloro</span>
                  <span className="seg-tag">Equipamentos Mop</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="seg-card reveal reveal-delay-2">
              <div className="seg-img seg-theme-4">
                <div className="seg-img-inner">
                  <img src="https://i.postimg.cc/KzCfwW9s/Higiene.jpg" alt="Higiene" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="seg-body">
                <div className="seg-icon seg-icon-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 3l14 9-14 9V3z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="seg-title">Higiene</h3>
                <p className="seg-text">Itens essenciais para manutenção da higiene com praticidade, economia e qualidade garantida.</p>
                <div className="seg-tags">
                  <span className="seg-tag">Papel toalha</span>
                  <span className="seg-tag">Papel higiênico</span>
                  <span className="seg-tag">Sabonete líquido</span>
                  <span className="seg-tag">Álcool em gel</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="seg-card reveal reveal-delay-3">
              <div className="seg-img seg-theme-5">
                <div className="seg-img-inner">
                  <img src="https://i.postimg.cc/mk0YpFrG/Alimentacao.jpg" alt="Alimentação & Descartáveis" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="seg-body">
                <div className="seg-icon seg-icon-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8v4h8V3z" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="seg-title">Alimentação &amp; Descartáveis</h3>
                <p className="seg-text">Suprimentos para apoio operacional e bem-estar de equipes e pacientes nas dependências da instituição.</p>
                <div className="seg-tags">
                  <span className="seg-tag">Café e Chá</span>
                  <span className="seg-tag">Açúcar</span>
                  <span className="seg-tag">Bolachas</span>
                  <span className="seg-tag">Copos descartáveis</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
