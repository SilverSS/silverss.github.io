'use client';

import { Group, Button, Container, SegmentedControl } from '@mantine/core';
import Link from 'next/link';
import { useLanguage, Locale } from '../i18n/LanguageContext';
import classes from './Navigation.module.css';

import { usePathname } from 'next/navigation';

export function Navigation() {
    const { t, locale, changeLocale } = useLanguage();
    const pathname = usePathname();

    if (pathname?.startsWith('/privacy') || pathname?.startsWith('/deletion-request')) {
        return null;
    }

    return (
        <Container size="xl" py="md">
            <Group justify="space-between">
                {/* Language Toggle */}
                <SegmentedControl
                    value={locale}
                    onChange={(value) => changeLocale(value as Locale)}
                    data={[
                        { label: 'Korean', value: 'ko' },
                        { label: 'English', value: 'en' },
                    ]}
                    classNames={{
                        root: classes.segmentedControl,
                        indicator: classes.segmentedControlIndicator,
                        label: classes.segmentedControlLabel,
                    }}
                    transitionDuration={300}
                    radius="xl"
                    size="sm"
                />

                <Group>
                    <Button component={Link} href="/" variant="subtle" color="dark">{t.nav.home}</Button>
                    <Button component={Link} href="/about" variant="subtle" color="dark">{t.nav.about}</Button>
                    <Button component={Link} href="/content" variant="subtle" color="dark">{t.nav.content}</Button>
                </Group>
            </Group>
        </Container>
    );
}
