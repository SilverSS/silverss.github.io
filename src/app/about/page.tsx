'use client';

import { Container, Title, SimpleGrid, Flex } from '@mantine/core';
import { ProfileCard } from '../../components/ProfileCard';
import { useLanguage } from '../../i18n/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <Container size="lg" py={80}>
            <Flex direction="column" gap="xl">
                <Title order={1} ta="center" mb={50} fw={300}>
                    {t.about.title}
                </Title>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                    <ProfileCard
                        name={t.about.programmer.name}
                        role={t.about.programmer.role}
                        description={t.about.programmer.desc}
                        imageSrc="/images/programmer.png"
                    />
                    <ProfileCard
                        name={t.about.writer.name}
                        role={t.about.writer.role}
                        description={t.about.writer.desc}
                        imageSrc="/images/writer.png"
                    />
                </SimpleGrid>
            </Flex>
        </Container>
    );
}
