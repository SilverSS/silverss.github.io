import { Metadata } from 'next';
import { PrivacyPolicyClient } from './PrivacyPolicyClient';

export const metadata: Metadata = {
    title: 'Drop Pop 1024 Privacy Policy',
    description: 'Privacy Policy for Drop Pop 1024 mobile application.',
};

export default function PrivacyPolicy() {
    return <PrivacyPolicyClient />;
}
