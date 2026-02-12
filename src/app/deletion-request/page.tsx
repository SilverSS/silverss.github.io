import { Metadata } from 'next';
import { DeletionRequestClient } from './DeletionRequestClient';

export const metadata: Metadata = {
    title: 'Drop Pop 1024 - Account Deletion Request',
    description: 'Request deletion of your game account and data.',
};

export default function DeletionRequestPage() {
    return <DeletionRequestClient />;
}
