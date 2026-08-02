import type { Metadata } from 'next';
import Calculator from './client';
import { ToolGuide } from '../../src/components/ToolGuide';
import { toolGuides } from '../../src/data/toolGuides';
export const metadata: Metadata = { title: 'Calculadora DAS MEI 2026', description: 'Confira a composição estimada do DAS MEI em 2026, com INSS e ISS/ICMS conforme a atividade.', alternates: { canonical: '/calculadora-das-mei' } };
export default function Page() { return <><Calculator /><ToolGuide guide={toolGuides.das} /></>; }
