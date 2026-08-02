import type { Metadata } from 'next';
import Calculator from './client';
import { ToolGuide } from '../../src/components/ToolGuide';
import { toolGuides } from '../../src/data/toolGuides';
export const metadata: Metadata = { title: 'Emissor de Recibos MEI', description: 'Monte, confira e imprima um recibo de pagamento no navegador. Recibo não substitui nota fiscal quando ela é obrigatória.', alternates: { canonical: '/emissor-recibo-mei' } };
export default function Page() { return <><Calculator /><ToolGuide guide={toolGuides.recibo} /></>; }
