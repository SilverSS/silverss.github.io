

import { ContentShowcase } from '../../components/ContentShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Content | Prompt Paints Plot',
    description: 'Explore our portfolio of stories and games created with Generative AI.',
};

export default function ContentPage() {
    return (
        <main>
            <ContentShowcase />
        </main>
    );
}
