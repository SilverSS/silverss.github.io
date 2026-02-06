'use client';

import { Title, Text, Container, Flex, Box } from '@mantine/core';
import classes from './Hero.module.css';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
    const { t } = useLanguage();

    return (
        <Container size="xl" h="100vh">
            <Flex direction="column" align="center" justify="center" h="100%" gap="xl">
                {/* Emphasized P design */}
                <Box
                    className={classes.floatIn}
                    style={{
                        position: 'relative',
                        marginBottom: '2rem'
                    }}
                >
                    <Text
                        component="span"
                        size="300px"
                        fw={900}
                        c="olive.5"
                        style={{ lineHeight: 0.8, letterSpacing: '-0.05em', display: 'block', textAlign: 'center' }}
                    >
                        P
                    </Text>
                    {/* Overlay text to form the full title */}
                    <Title
                        order={1}
                        size="64px"
                        fw={800}
                        c="dark.8"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            textAlign: 'center',
                            textShadow: '0 0 20px white' // To ensure readability over the large P
                        }}
                    >
                        <Text span c="olive.7" inherit>P</Text>rompt <Text span c="olive.7" inherit>P</Text>aints <Text span c="olive.7" inherit>P</Text>lot
                    </Title>
                </Box>

                <Text
                    size="xl"
                    c="dimmed"
                    mt="xl"
                    className={classes.floatInDelay}
                    style={{
                        textAlign: 'center',
                        maxWidth: '600px'
                    }}
                >
                    {t.hero.subtitle}
                    <br />
                    <Text span size="md" fs="italic">{t.hero.tagline}</Text>
                </Text>
            </Flex>
        </Container>
    );
}
