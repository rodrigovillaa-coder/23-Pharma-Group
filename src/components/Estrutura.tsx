export function Estrutura() {
  return (
    <section id="estrutura">
      <div style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="estrutura-inner reveal">
            <div className="estrutura-grid">
              <div className="estrutura-content">
                <div className="section-tag">Nossa Estrutura</div>
                <h2 className="section-title">Infraestrutura preparada para distribuição eficiente</h2>
                <p className="estrutura-sub">Contamos com estrutura própria para garantir agilidade, organização e rastreabilidade em todas as etapas do fornecimento.</p>
                <div className="estrutura-items">
                  <div className="estrutura-item">
                    <span className="estrutura-bullet"></span>
                    Galpão próprio com controle de temperatura e umidade
                  </div>
                  <div className="estrutura-item">
                    <span className="estrutura-bullet"></span>
                    Frota de veículos para entregas regionais e urgências
                  </div>
                  <div className="estrutura-item">
                    <span className="estrutura-bullet"></span>
                    Sistema de gestão de estoque com rastreamento em lote
                  </div>
                  <div className="estrutura-item">
                    <span className="estrutura-bullet"></span>
                    Equipe treinada e processos certificados
                  </div>
                </div>
              </div>
              <div className="estrutura-pillars">
                <div className="estrutura-pillar">
                  <div className="pillar-number">01</div>
                  <div className="pillar-title">Armazenamento</div>
                  <p className="pillar-text">Galpão com controle climático e segregação por categoria de produto</p>
                </div>
                <div className="estrutura-pillar">
                  <div className="pillar-number">02</div>
                  <div className="pillar-title">Logística</div>
                  <p className="pillar-text">Processos otimizados de separação, embalagem e expedição</p>
                </div>
                <div className="estrutura-pillar">
                  <div className="pillar-number">03</div>
                  <div className="pillar-title">Frota</div>
                  <p className="pillar-text">Veículos próprios para entregas ágeis no prazo combinado</p>
                </div>
                <div className="estrutura-pillar">
                  <div className="pillar-number">04</div>
                  <div className="pillar-title">Rastreabilidade</div>
                  <p className="pillar-text">Controle total do lote e validade de cada item fornecido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
