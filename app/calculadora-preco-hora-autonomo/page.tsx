import type { Metadata } from 'next';
import Calculator from './client';
import { ToolGuide } from '../../src/components/ToolGuide';
import { toolGuides } from '../../src/data/toolGuides';
export const metadata: Metadata = { title: 'Calculadora de Preço por Hora para Autônomo', description: 'Calcule um preço por hora sustentável com custos, horas faturáveis, reservas e margem.', alternates: { canonical: '/calculadora-preco-hora-autonomo' } };
export default function Page() { return <><Calculator /><ToolGuide guide={toolGuides.preco} /></>; }
