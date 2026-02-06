'use client';

import { Container, Text, Title, Flex, Paper } from '@mantine/core';
import { useLanguage } from '../i18n/LanguageContext';

export function Intro() {
    const { t } = useLanguage();

    return (
        <Container size="lg" py={120}>
            <Flex direction="column" align="center" gap={60}>
                <Title order={2} fw={300} size={48} ta="center" style={{ letterSpacing: '-0.02em' }}>
                    {t.intro.title}
                </Title>

                <Flex gap={40} wrap="wrap" justify="center">
                    <Paper p="xl" radius="lg" bg="olive.0" style={{ flex: 1, minWidth: '300px', maxWidth: '400px' }}>
                        <Title order={3} size="h3" mb="md" c="olive.9">{t.intro.promptTitle}</Title>
                        <Text c="dimmed" lh={1.6}>
                            {t.intro.promptDesc}
                        </Text>
                    </Paper>

                    <Paper p="xl" radius="lg" bg="olive.1" style={{ flex: 1, minWidth: '300px', maxWidth: '400px' }}>
                        <Title order={3} size="h3" mb="md" c="olive.9">{t.intro.plotTitle}</Title>
                        <Text c="dimmed" lh={1.6}>
                            {t.intro.plotDesc}
                        </Text>
                    </Paper>
                </Flex>

                <Text ta="center" size="lg" maw={800} mx="auto" c="dark.6">
                    {t.intro.duoDesc}
                </Text>
            </Flex>
        </Container>
    );
}
