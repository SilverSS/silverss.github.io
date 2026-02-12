'use client';

import { Container, Title, Text, Button, Select, TextInput, Paper, Group, Alert, ThemeIcon, rem } from '@mantine/core';
import { useState } from 'react';

export function DeletionRequestClient() {
    const [game, setGame] = useState('Drop Pop 1024');
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (userId.trim().length < 2) {
            setError('게임 내 ID 또는 연동된 이메일을 입력해주세요');
            return;
        }
        setError('');

        const recipient = 'eos916@gmail.com';
        const subject = `[계정 삭제 요청] ${game}`;
        const body = `
안녕하세요,

아래 계정에 대한 데이터 및 계정 삭제를 요청합니다.

1. 게임명: ${game}
2. 사용자 ID (또는 이메일): ${userId}

본인은 위 계정의 소유자이며, 게임 내 모든 데이터의 영구적인 삭제에 동의합니다.
        `.trim();

        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <Container size="xs" py="xl">
            <Paper shadow="md" p="xl" radius="md" withBorder>
                <Title order={2} ta="center" mb="lg">게임 계정 삭제 요청</Title>

                <Alert variant="light" color="blue" title="안내" icon={
                    <ThemeIcon color="blue" size={24} radius="xl" variant="transparent">
                        <svg style={{ width: rem(24), height: rem(24) }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4" />
                            <path d="M12 8h.01" />
                        </svg>
                    </ThemeIcon>
                } mb="xl">
                    계정 삭제 요청 시, 영업일 기준 7일 이내에 모든 게임 데이터가 영구적으로 삭제되며 복구할 수 없습니다.
                </Alert>

                <form onSubmit={handleSubmit}>
                    <Select
                        label="대상 게임"
                        placeholder="게임을 선택하세요"
                        data={['Drop Pop 1024']}
                        value={game}
                        onChange={(val) => setGame(val || 'Drop Pop 1024')}
                        mb="md"
                        readOnly
                    />

                    <TextInput
                        label="사용자 식별 정보"
                        description="게임 설정 메뉴에서 확인 가능한 ID 또는 연동된 이메일 주소를 입력해주세요."
                        placeholder="예: user@example.com 또는 User#1234"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        error={error}
                        mb="xl"
                        required
                    />

                    <Group justify="center">
                        <Button type="submit" color="red" fullWidth>
                            삭제 요청 메일 보내기
                        </Button>
                    </Group>
                </form>

                <Text c="dimmed" size="xs" ta="center" mt="md">
                    '삭제 요청 메일 보내기'를 누르면 메일 앱이 실행됩니다.
                </Text>
            </Paper>
        </Container>
    );
}
