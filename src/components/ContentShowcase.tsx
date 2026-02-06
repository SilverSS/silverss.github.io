'use client';

import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image, Box, Title, Text, Flex, Paper, Container } from '@mantine/core';
import { useLanguage } from '../i18n/LanguageContext';

export function ContentShowcase() {
    const { t } = useLanguage();

    // Reconstruct contentData inside component to use translation
    const contentData = [
        {
            id: '1',
            title: t.content.items[1].title,
            description: t.content.items[1].desc,
            fullContent: t.content.items[1].full,
            imageSrc: '/images/content/fantasy.png',
        },
        {
            id: '2',
            title: t.content.items[2].title,
            description: t.content.items[2].desc,
            fullContent: t.content.items[2].full,
            imageSrc: '/images/content/scifi.png',
        },
        {
            id: '3',
            title: t.content.items[3].title,
            description: t.content.items[3].desc,
            fullContent: t.content.items[3].full,
            imageSrc: 'https://placehold.co/600x400/BFD0B9/white?text=Coming+Soon&font=roboto',
        },
    ];

    const [activeId, setActiveId] = useState<string>(contentData[0].id);
    const activeItem = contentData.find(item => item.id === activeId) || contentData[0];

    return (
        <Container size="xl" py="xl">
            <Title order={1} mb="xl" ta="center" fw={300}>{t.content.title}</Title>

            {/* Thumbnails Carousel */}
            <Box mb={50}>
                <Carousel
                    slideSize={{ base: '70%', sm: '40%', md: '30%' }}
                    slideGap="md"
                    withIndicators
                    onSlideChange={(index) => setActiveId(contentData[index].id)}
                    styles={{
                        slide: { transition: 'transform 0.3s ease' },
                    }}
                >
                    {contentData.map((item) => (
                        <Carousel.Slide key={item.id}>
                            <Paper
                                radius="md"
                                p="xs"
                                withBorder
                                style={{
                                    cursor: 'pointer',
                                    opacity: activeId === item.id ? 1 : 0.6,
                                    transform: activeId === item.id ? 'scale(1.05)' : 'scale(1)',
                                    transition: 'all 0.3s ease',
                                    border: activeId === item.id ? '2px solid var(--mantine-color-olive-6)' : '1px solid transparent'
                                }}
                                onClick={() => setActiveId(item.id)}
                            >
                                <Image src={item.imageSrc} radius="sm" height={200} fit="cover" />
                                <Title order={4} mt="sm" ta="center">{item.title}</Title>
                            </Paper>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </Box>

            {/* Dynamic Detail View */}
            <Container size="md">
                <Paper p="xl" radius="lg" bg="olive.0">
                    <Flex direction={{ base: 'column', md: 'row' }} gap="xl" align="center">
                        <Image src={activeItem.imageSrc} w={{ base: '100%', md: 300 }} radius="md" />
                        <Box style={{ flex: 1 }}>
                            <Title order={2} mb="sm" c="olive.9">{activeItem.title}</Title>
                            <Text size="lg" fw={500} mb="md" c="olive.7">{activeItem.description}</Text>
                            <Text lh={1.6}>{activeItem.fullContent}</Text>
                        </Box>
                    </Flex>
                </Paper>
            </Container>
        </Container>
    );
}
