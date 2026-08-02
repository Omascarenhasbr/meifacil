import type { Metadata } from 'next';
import { InstitutionalPage } from '../../src/components/InstitutionalPage';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Condições de uso, limitações e responsabilidades das ferramentas e conteúdos do MEI Fácil.',
  alternates: { canonical: '/termos-de-uso' }
};

export default function TermosPage() {
  return (
    <InstitutionalPage
      eyebrow="Condições"
      title="Termos de uso"
      intro="Ao utilizar o MEI Fácil, você concorda em tratar os resultados como apoio educativo e confirmar obrigações nos canais oficiais."
    >
      <h2>Finalidade do serviço</h2>
      <p>O site oferece ferramentas de cálculo, organização e conteúdo informativo. Não presta serviço governamental, não representa o usuário perante órgãos públicos e não substitui orientação profissional adequada ao caso concreto.</p>

      <h2>Resultados e responsabilidade</h2>
      <p>As simulações dependem dos dados informados e das premissas exibidas. O usuário deve revisar valores, datas e enquadramento antes de pagar, declarar ou tomar decisão. O documento emitido pelo órgão competente prevalece.</p>

      <h2>Atualizações</h2>
      <p>Regras, sistemas e valores podem mudar. Indicamos a data de revisão dos guias, mas não garantimos atualização instantânea após toda mudança normativa. Conteúdo antigo deve ser confrontado com as fontes vinculadas.</p>

      <h2>Uso permitido</h2>
      <p>Você pode usar as ferramentas para fins lícitos e pessoais ou profissionais. Não é permitido tentar comprometer a segurança, automatizar tráfego abusivo, copiar integralmente o serviço ou apresentá-lo como produto oficial.</p>

      <h2>Serviços externos e publicidade</h2>
      <p>Links, hospedagem, fontes oficiais e publicidade podem ser fornecidos por terceiros. Cada serviço possui seus próprios termos. A presença de link ou anúncio não representa recomendação editorial automática.</p>

      <h2>Disponibilidade</h2>
      <p>O site pode passar por manutenção, correção ou indisponibilidade. Sempre guarde comprovantes e documentos relevantes em local próprio; não use o site como arquivo permanente.</p>
    </InstitutionalPage>
  );
}
