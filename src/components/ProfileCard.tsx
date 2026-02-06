'use client';

import { Card, Image, Text, Group, Badge, Stack } from '@mantine/core';

interface ProfileCardProps {
    name: string;
    role: string;
    description: string;
    imageSrc: string;
}

export function ProfileCard({ name, role, description, imageSrc }: ProfileCardProps) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
            <Card.Section>
                <Image
                    src={imageSrc}
                    height={200}
                    w="auto"
                    fit="contain"
                    alt={name}
                    style={{ margin: '0 auto', paddingTop: '20px' }}
                />
            </Card.Section>

            <Stack mt="md" mb="xs">
                <Group justify="space-between">
                    <Text fw={500}>{name}</Text>
                    <Badge color="olive.4" variant="light">{role}</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    {description}
                </Text>
            </Stack>
        </Card>
    );
}
