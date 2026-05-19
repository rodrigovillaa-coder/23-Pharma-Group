export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo" style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <img 
                src="https://i.postimg.cc/c4Qq7phP/23-logo-branco.png" 
                alt="23 Pharma Group" 
                style={{ height: '48px', width: 'auto' }} 
              />
            </div>
            <p className="footer-desc">Fornecimento estratégico de materiais hospitalares, higiene, limpeza e suprimentos essenciais para o setor da saúde.</p>
            <div style={{ marginTop: '24px', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>
              <p>Rua Joaquim Brasilio de Camargo, 117 - JD. XI de Agosto - Tatuí/SP.</p>
              <p style={{ marginTop: '4px' }}>CNPJ: 34.498.770/0001-28</p>
            </div>
          </div>
          <div>
            <div className="footer-nav-title">Navegação</div>
            <div className="footer-links">
              <a href="#quem-somos">Quem Somos</a>
              <a href="#segmentos">Segmentos</a>
              <a href="#diferenciais">Diferenciais</a>
              <a href="#estrutura">Estrutura</a>
              <a href="#contato">Contato</a>
            </div>
          </div>
          <div>
            <div className="footer-nav-title">Segmentos</div>
            <div className="footer-links">
              <a href="#segmentos">Material Médico Hospitalar</a>
              <a href="#segmentos">Material Odontológico</a>
              <a href="#segmentos">Limpeza Profissional</a>
              <a href="#segmentos">Higiene</a>
              <a href="#segmentos">Alimentação &amp; Descartáveis</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span className="footer-copy">© 2025 23 Pharma Group. Todos os direitos reservados.</span>
            <span className="footer-copy" style={{ opacity: 0.8 }}>
              Site criado por: <a href="http://www.rvbrands.com.br" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontWeight: '500', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>RV Brands</a>
            </span>
          </div>
          <div className="footer-cert" style={{ marginTop: '16px' }}>
            <span className="cert-dot"></span>
            Empresa com Responsável Técnico habilitado · Conformidade ANVISA
          </div>
        </div>
      </div>
    </footer>
  );
}
