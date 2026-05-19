export function Responsavel() {
  return (
    <section id="responsavel">
      <div style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '52px' }} className="reveal">
            <div className="section-tag" style={{ justifyContent: 'center' }}>Responsabilidade Técnica</div>
            <h2 className="section-title">Credenciamento e Conformidade</h2>
            <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>Nossa operação conta com responsável técnico habilitado, assegurando conformidade com todas as exigências regulatórias do setor.</p>
          </div>
          <div className="resp-card reveal reveal-delay-1">
            <div className="resp-avatar">
              <img src="https://i.postimg.cc/XJQwX6hv/dra-juliana.png" alt="Dra. Juliana de Moraes Masiero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              <div className="resp-badge-cert">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
              </div>
            </div>
            <div className="resp-content">
              <span className="resp-label">Responsável Técnico</span>
              <h3 className="resp-name">Dra. Juliana de Moraes Masiero</h3>
              <p className="resp-role">COREN SP - 433916</p>
              <div style={{ marginTop: '16px' }}>
                <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.6', fontStyle: 'italic' }}>"Nosso compromisso não é apenas fornecer materiais, mas atuar como elo fundamental na cadeia de cuidados e preservação da vida. Cada etapa de nossa logística reflete o compromisso rigoroso com a saúde e segurança."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
