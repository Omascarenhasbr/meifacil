import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Map, 
  ArrowRight, 
  CreditCard, 
  ShieldCheck, 
  FileText, 
  AlertCircle,
  ExternalLink,
  Store,
  Wallet,
  Receipt
} from 'lucide-react';

export default function GuiaIniciante() {
  const [activeTab, setActiveTab] = useState<'abrir' | 'pos-abertura'>('abrir');

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-mei-light/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-mei-light rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-mei-light/30">
            <Map className="w-6 h-6 text-mei-dark" />
          </div>
          <h1 className="text-3xl font-serif italic text-mei-dark mb-4">Trilha do Iniciante MEI</h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Seja bem-vindo ao mundo do empreendedorismo! Preparamos um passo a passo completo e gratuito para você abrir o seu CNPJ sozinho e, em seguida, saber exatamente quais são as suas obrigações para não ter dor de cabeça.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white rounded-2xl p-2 border border-gray-100 shadow-sm">
        <button 
          onClick={() => setActiveTab('abrir')}
          className={`flex-1 py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${activeTab === 'abrir' ? 'bg-mei-dark text-white shadow-md' : 'text-gray-500 hover:bg-gray-50 hover:text-mei-dark'}`}
        >
          <Store className="w-4 h-4" />
          Passo 1: Como Abrir o MEI
        </button>
        <button 
          onClick={() => setActiveTab('pos-abertura')}
          className={`flex-1 py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${activeTab === 'pos-abertura' ? 'bg-mei-light text-mei-dark shadow-md' : 'text-gray-500 hover:bg-gray-50 hover:text-mei-dark'}`}
        >
          <CheckCircle2 className="w-4 h-4" />
          Passo 2: Já sou MEI, e agora?
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'abrir' ? (
          <motion.div 
            key="abrir"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-yellow-800 mb-2">Aviso Importante: Abrir o MEI é 100% Gratuito!</h4>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  Não pague boletos de associações ou empresas cobrando para abrir o seu MEI. O processo no site oficial do Governo é gratuito e fica pronto na hora.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <StepCard 
                number={1} 
                title="Acesse o Portal Gov.br" 
                desc="O único site oficial para abrir o MEI é o Portal do Empreendedor do Governo Federal. Você precisará de uma conta Gov.br nível Prata ou Ouro (que você consegue acessando com os dados do seu banco)."
                link="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor"
                linkText="Acessar Portal Oficial"
              />
              <StepCard 
                number={2} 
                title="Clique em 'Quero ser MEI'" 
                desc="Na página inicial, encontre o bloco 'Quero ser MEI' e clique em 'Formalize-se'. O sistema pedirá o seu login Gov.br."
              />
              <StepCard 
                number={3} 
                title="Preencha os Dados e Escolha a Atividade (CNAE)" 
                desc="Você precisará informar o Nome Fantasia do seu negócio e escolher as atividades que você exerce. Você pode ter 1 atividade principal e até 15 secundárias. É importante escolher as que mais se aproximam do que você faz."
              />
              <StepCard 
                number={4} 
                title="Defina o Endereço" 
                desc="Preencha o CEP de onde você vai trabalhar. Se for trabalhar de casa ou de forma ambulante/internet, marque a opção correspondente."
              />
              <StepCard 
                number={5} 
                title="Conclua e Emita o CCMEI" 
                desc="Após aceitar os termos, seu CNPJ será gerado na hora! O sistema vai emitir o CCMEI (Certificado da Condição de Microempreendedor Individual). Salve esse documento (PDF), ele é o 'RG' da sua empresa."
              />
            </div>

            <button onClick={() => setActiveTab('pos-abertura')} className="w-full py-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-colors mt-8">
              Conseguiu abrir? Veja o próximo passo <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="pos-abertura"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="bg-mei-bg border border-mei-light p-6 rounded-2xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-mei-dark shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-mei-dark mb-2">Parabéns pelo seu novo CNPJ! 🎉</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Agora que você é oficialmente uma empresa, você tem alguns direitos (como auxílio-doença e aposentadoria) mas também tem deveres cruciais para não perder o seu MEI e não levar multas.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <StepCard 
                number={1} 
                icon={<Wallet className="text-mei-dark w-6 h-6" />}
                title="Pagar o DAS Mensalmente (Obrigatório)" 
                desc="Todo dia 20 vence o boleto DAS. Esse boleto garante a sua aposentadoria (INSS) e recolhe os impostos (ICMS/ISS). Você deve pagá-lo MESMO SE NÃO TIVER FATURADO NADA no mês. Use a nossa Calculadora DAS no menu para conferir o valor."
              />
              <StepCard 
                number={2} 
                icon={<FileText className="text-mei-dark w-6 h-6" />}
                title="Declaração Anual (DASN-SIMEI)" 
                desc="Todo ano, até o dia 31 de maio, você precisa declarar para o governo quanto você faturou no ano anterior. Mesmo que tenha faturado R$ 0,00, a declaração é obrigatória. O atraso gera multa mínima de R$ 50,00."
              />
              <StepCard 
                number={3} 
                icon={<ShieldCheck className="text-mei-dark w-6 h-6" />}
                title="Controlar o Faturamento" 
                desc="O limite de faturamento do MEI em 2026 é rígido (R$ 81.000,00 anuais na regra geral). Anote tudo o que você vende ou presta de serviço. Use o nosso 'Limite de Receita' ali no menu lateral para não se perder."
              />
              <StepCard 
                number={4} 
                icon={<CreditCard className="text-mei-dark w-6 h-6" />}
                title="Abrir Conta Pessoa Jurídica (Recomendado)" 
                desc="É extremamente recomendado separar o dinheiro da empresa do seu dinheiro pessoal. Abra uma conta digital gratuita para o seu CNPJ. Isso facilita a declaração e o controle financeiro."
              />
              <StepCard 
                number={5} 
                icon={<Receipt className="text-mei-dark w-6 h-6" />}
                title="Emissão de Notas Fiscais" 
                desc="Você só é obrigado a emitir Nota Fiscal quando vender ou prestar serviço para outra EMPRESA (CNPJ). Se o cliente for Pessoa Física, não é obrigatório, mas você deve registrar a venda mesmo assim. O governo tem um app e um portal nacional para emissão gratuita de NF de serviço."
              />
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StepCard({ number, title, desc, link, linkText, icon }: { number: number, title: string, desc: string, link?: string, linkText?: string, icon?: React.ReactNode }) {
  return (
    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-mei-light transition-all flex gap-5">
      <div className="shrink-0">
        {icon ? (
          <div className="w-12 h-12 bg-mei-bg rounded-full flex items-center justify-center font-bold text-mei-dark text-lg border-2 border-mei-light">
            {icon}
          </div>
        ) : (
          <div className="w-12 h-12 bg-mei-bg rounded-full flex items-center justify-center font-bold text-mei-dark text-lg border-2 border-mei-light">
            {number}
          </div>
        )}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-mei-dark mb-2">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
        
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-widest text-mei-dark bg-mei-light/20 hover:bg-mei-light/40 px-4 py-2 rounded-lg transition-colors">
            {linkText} <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
