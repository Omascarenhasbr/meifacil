import type { Metadata } from 'next';
import Calculator from './client';
import { ToolGuide } from '../../src/components/ToolGuide';
import { toolGuides } from '../../src/data/toolGuides';
export const metadata: Metadata = { title: 'Checklist Mensal MEI 2026', description: 'Organize as obrigações mensais e anuais do MEI, incluindo DAS, relatório de receitas e DASN-SIMEI.', alternates: { canonical: '/checklist-mensal-mei' } };
export default function Page() { return <><Calculator /><ToolGuide guide={toolGuides.checklist} /></>; }
