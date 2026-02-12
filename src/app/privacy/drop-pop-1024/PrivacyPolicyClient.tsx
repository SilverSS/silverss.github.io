'use client';

import { Container, Title, Text, List, ThemeIcon, rem, Anchor } from '@mantine/core';

export function PrivacyPolicyClient() {
    return (
        <Container size="md" py="xl">
            <Title order={1} mb="lg">Drop Pop 1024 개인정보 처리방침</Title>

            <Text mb="md">
                **Drop Pop 1024** (이하 "서비스")은 이용자의 개인정보를 중요시하며, "개인정보 보호법" 및 "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련 법령을 준수하고 있습니다.
            </Text>

            <Title order={2} mt="xl" mb="sm">1. 수집하는 개인정보의 항목 및 수집 방법</Title>
            <Text mb="sm">
                본 서비스는 회원가입 없이 이용 가능하며, 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
            </Text>
            <List
                spacing="xs"
                size="sm"
                center
                icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                        <svg style={{ width: rem(16), height: rem(16) }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </ThemeIcon>
                }
            >
                <List.Item>단말기 정보 (모델명, OS 버전, 기기 고유 식별자 등)</List.Item>
                <List.Item>이용 기록, 접속 로그, 쿠키, 결제 기록</List.Item>
                <List.Item>광고 식별자 (ADID, IDFA)</List.Item>
                <List.Item>게임 데이터 및 진행 상황 (Unity 엔진 기반 처리)</List.Item>
                <List.Item>Google Play Games 프로필 및 리더보드 기록</List.Item>
            </List>

            <Title order={2} mt="xl" mb="sm">2. 개인정보의 수집 및 이용 목적</Title>
            <Text mb="sm">수집한 개인정보는 다음의 목적을 위해 활용됩니다.</Text>
            <List type="ordered" withPadding>
                <List.Item>
                    <Text fw={700}>서비스 제공 및 유지보수</Text>
                    <Text size="sm">게임 콘텐츠 제공, 인앱 결제 서비스 제공, 고객 문의 응대</Text>
                </List.Item>
                <List.Item>
                    <Text fw={700}>마케팅 및 광고 활용</Text>
                    <Text size="sm">신규 서비스 개발, 맞춤형 광고 제공, 광고 효율 분석</Text>
                </List.Item>
                <List.Item>
                    <Text fw={700}>법적 의무 준수</Text>
                    <Text size="sm">법령 및 이용약관 위반 행위에 대한 제한 조치</Text>
                </List.Item>
            </List>

            <Title order={2} mt="xl" mb="sm">3. 개인정보의 제3자 제공</Title>
            <Text mb="sm">
                본 서비스는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, 서비스 개선 및 맞춤형 광고 제공을 위해 아래와 같이 타사 서비스(SDK)를 이용하고 있습니다. 각 제공업체의 개인정보 처리방침은 아래 링크에서 확인할 수 있습니다.
            </Text>
            <List withPadding>
                <List.Item>
                    <Text fw={700}>Google AdMob / Google Play Services</Text>
                    <Anchor href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                        https://policies.google.com/privacy
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Text fw={700}>Google Play Games (리더보드 및 업적)</Text>
                    <Text size="sm">사용자 식별, 리더보드 점수 등록 및 조회</Text>
                    <Anchor href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                        https://policies.google.com/privacy
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Text fw={700}>Unity Ads / Unity Engine</Text>
                    <Text size="sm">하드웨어 통계 수집, 광고 제공, 게임 엔진 최적화</Text>
                    <Anchor href="https://unity.com/legal/game-player-and-app-user-privacy-policy" target="_blank" rel="noopener noreferrer">
                        https://unity.com/legal/game-player-and-app-user-privacy-policy
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Text fw={700}>AppLovin</Text>
                    <Anchor href="https://www.applovin.com/privacy/" target="_blank" rel="noopener noreferrer">
                        https://www.applovin.com/privacy/
                    </Anchor>
                </List.Item>
            </List>

            <Title order={2} mt="xl" mb="sm">4. 개인정보의 보유 및 이용 기간</Title>
            <Text mb="sm">
                이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
            </Text>

            <Title order={2} mt="xl" mb="sm">5. 이용자의 권리와 행사 방법</Title>
            <Text mb="sm">
                이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며, 수집 및 이용에 대한 동의 철회 또는 가입 해지를 요청할 수 있습니다. 단, 앱을 삭제하거나 기기를 변경할 경우 로컬에 저장된 게임 데이터는 복구할 수 없을 수 있습니다.
            </Text>
            <Text mb="sm">
                광고 식별자 수집 거부 방법:
            </Text>
            <List withPadding>
                <List.Item>Android: 설정 {'>'} Google {'>'} 광고 {'>'} 광고 ID 삭제 또는 광고 맞춤설정 선택 해제</List.Item>
                <List.Item>iOS: 설정 {'>'} 개인정보보호 {'>'} 추적 {'>'} 앱이 추적을 요청하도록 허용 끔</List.Item>
            </List>

            <Title order={2} mt="xl" mb="sm">6. 개인정보 보호책임자</Title>
            <Text mb="sm">
                서비스 이용 중 발생하는 모든 개인정보보호 관련 민원은 아래의 연락처로 문의해 주시기 바랍니다.
            </Text>
            <List withPadding>
                <List.Item>이메일: eos916@gmail.com</List.Item>
                <List.Item>담당자: 최진영</List.Item>
            </List>

            <Text c="dimmed" size="xs" mt="xl" ta="center">
                공고일자: 2026년 2월 12일 / 시행일자: 2026년 2월 12일
            </Text>
        </Container>
    );
}
