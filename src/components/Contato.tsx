import { useState } from 'react';

export function Contato() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/contato@23pharmagroup.com.br', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  const getBtnText = () => {
    if (status === 'sending') return 'Enviando...';
    if (status === 'success') return 'Mensagem enviada! ✓';
    if (status === 'error') return 'Erro ao enviar';
    return 'Enviar Mensagem →';
  };

  const getBtnColor = () => {
    if (status === 'success') return '#059669';
    if (status === 'error') return '#dc2626';
    return undefined;
  };

  return (
    <section id="contato">
      <div style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="contato-grid">
            <div className="reveal">
              <div className="section-tag">Contato</div>
              <h2 className="section-title">Fale com nossa equipe</h2>
              <p className="section-sub" style={{ marginTop: '16px' }}>Estamos prontos para atender sua demanda com agilidade e personalização.</p>
              <div className="contato-channels">
                <a href="https://wa.me/551533472530" className="channel-item">
                  <div className="channel-icon ch-green">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#16A34A"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div className="channel-info">
                    <div className="channel-label">WhatsApp</div>
                    <div className="channel-value">(15) 3347-2530</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#9BA8C0" strokeWidth="2" strokeLinecap="round"/></svg>
                </a>
                <a href="tel:+551533472530" className="channel-item">
                  <div className="channel-icon ch-blue">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="channel-info">
                    <div className="channel-label">Telefone</div>
                    <div className="channel-value">(15) 3347-2530</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#9BA8C0" strokeWidth="2" strokeLinecap="round"/></svg>
                </a>
                <a href="mailto:contato@23pharmagroup.com.br" className="channel-item">
                  <div className="channel-icon ch-gray">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#5B6B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="channel-info">
                    <div className="channel-label">E-mail</div>
                    <div className="channel-value">contato@23pharmagroup.com.br</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#9BA8C0" strokeWidth="2" strokeLinecap="round"/></svg>
                </a>
              </div>
            </div>
            <form className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nome</label>
                  <input type="text" name="nome" className="form-input" placeholder="Seu nome" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Empresa / Instituição</label>
                  <input type="text" name="empresa" className="form-input" placeholder="Nome da empresa" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Telefone / WhatsApp</label>
                  <input type="tel" name="telefone" className="form-input" placeholder="(00) 00000-0000" required />
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <input type="email" name="email" className="form-input" placeholder="seu@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Segmento de interesse</label>
                <select name="segmento" className="form-select" required>
                  <option value="">Selecione o segmento</option>
                  <option>Material Médico Hospitalar</option>
                  <option>Material Odontológico</option>
                  <option>Limpeza Profissional</option>
                  <option>Higiene</option>
                  <option>Alimentação &amp; Descartáveis</option>
                  <option>Múltiplos segmentos</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Mensagem</label>
                <textarea name="mensagem" className="form-textarea" placeholder="Descreva brevemente sua necessidade ou o que você está buscando..." required></textarea>
              </div>
              <button type="submit" className="form-submit" style={{ background: getBtnColor() }}>
                {getBtnText()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
