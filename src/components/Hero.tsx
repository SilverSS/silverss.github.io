'use client';

import NextImage from 'next/image';
import { Title, Text as MantineText, Container, Flex, Box } from '@mantine/core';
import classes from './Hero.module.css';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
    const { t } = useLanguage();

    return (
        <Container size="xl" h="100vh">
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="center"
                h="100%"
                gap={{ base: 'xl', md: 80 }}
            >
                {/* Logo Section */}
                <Box className={classes.floatIn}>
                    <NextImage
                        src="/images/logo.png"
                        alt="PPP Studio Logo"
                        width={400}
                        height={400}
                        priority
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </Box>

                {/* Text Section */}
                <Flex
                    direction="column"
                    align={{ base: 'center', md: 'flex-start' }}
                    className={classes.floatInDelay}
                >
                    <Box ta={{ base: 'center', md: 'left' }}>
                        <Title
                            order={1}
                            fw={900}
                            c="olive.8"
                            style={{
                                fontSize: 'clamp(3rem, 5vw, 5rem)',
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em'
                            }}
                        >
                            PPP Studio
                        </Title>
                        <MantineText
                            size="xl"
                            c="olive.5"
                            fw={500}
                            mt="sm"
                            style={{
                                fontSize: 'clamp(1.2rem, 2vw, 2rem)',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase'
                            }}
                        >
                            Prompts Paint Plot
                        </MantineText>

                        <MantineText
                            size="lg"
                            c="dimmed"
                            mt="xl"
                            style={{ maxWidth: '500px', whiteSpace: 'pre-line' }}
                        >
                            {t.hero.subtitle}
                        </MantineText>
                    </Box>
                </Flex>
            </Flex>
        </Container>
    );
}
