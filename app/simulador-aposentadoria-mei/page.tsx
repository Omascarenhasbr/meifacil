import type { Metadata } from 'next';
import Calculator from './client';
import { ToolGuide } from '../../src/components/ToolGuide';
import { toolGuides } from '../../src/data/toolGuides';
export const metadata: Metadata = { title: 'Simulador de Aposentadoria MEI', description: 'Faça uma projeção educativa de idade e contribuições do MEI. O resultado não consulta o CNIS nem substitui o Meu INSS.', alternates: { canonical: '/simulador-aposentadoria-mei' } };
export default function Page() { return <><Calculator /><ToolGuide guide={toolGuides.aposentadoria} /></>; }
