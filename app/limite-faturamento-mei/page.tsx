import type { Metadata } from 'next';
import Calculator from './client';
import { ToolGuide } from '../../src/components/ToolGuide';
import { toolGuides } from '../../src/data/toolGuides';
export const metadata: Metadata = { title: 'Simulador de Limite de Faturamento MEI', description: 'Acompanhe o faturamento informado, o limite proporcional e uma projeção educativa do teto vigente do MEI.', alternates: { canonical: '/limite-faturamento-mei' } };
export default function Page() { return <><Calculator /><ToolGuide guide={toolGuides.limite} /></>; }
