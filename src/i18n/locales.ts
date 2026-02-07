export type Locale = 'en' | 'ko';

export const dictionary = {
    en: {
        hero: {
            subtitle: 'Drawing the plot of your story with the start of generative AI.',
            tagline: "Where 'Prompt' meets 'Plot'"
        },
        intro: {
            title: 'From Prompt\nto Plot',
            promptTitle: 'Prompt',
            promptDesc: 'The spark of creation. With generative AI, a single sentence starts a universe.',
            plotTitle: 'Plot',
            plotDesc: 'The backbone of the story. We weave structure and narrative from the initial spark.',
            duoDesc: 'We are a duo of a Game Programmer and a Drama Writer, using AI to craft compelling stories and interactive experiences.'
        },
        nav: {
            home: 'Home',
            about: 'About Us',
            content: 'Content'
        },
        about: {
            title: 'Who We Are',
            programmer: {
                name: 'The Programmer',
                role: 'Game Developer',
                desc: 'Coding logic into dreams. I build the systems that bring stories to life.'
            },
            writer: {
                name: 'The Writer',
                role: 'Drama & Variety Writer',
                desc: 'Weaving words into worlds. I use AI as my co-pilot to craft compelling narratives.'
            }
        },
        content: {
            title: 'Our Works',
            items: {
                1: {
                    title: 'The Silent Isle',
                    desc: 'A fantasy novel co-written with AI.',
                    full: 'In a world where islands float above an endless sea of clouds, a young cartographer discovers a map to a land that shouldn\'t exist. "The Silent Isle" explores themes of isolation and connection, drafted with the assistance of large language models to generate world-building lore and dialogue variations.'
                },
                2: {
                    title: 'Bot Gardener',
                    desc: 'A cozy sci-fi simulation game.',
                    full: 'Manage a futuristic greenhouse on Mars. You play as a caretaker droid ensuring the survival of Earth\'s last flora. The game uses generative AI to create unique plant variations and dynamic weather events, making every playthrough unique.'
                },
                3: {
                    title: 'Mystery Project X',
                    desc: 'Coming soon...',
                    full: 'Our next big collaboration is in the works. Stay tuned for a narrative experience that blurs the lines between reality and fiction.'
                }
            }
        }
    },
    ko: {
        hero: {
            subtitle: '생성형 AI의 시작인 프롬프트로\n이야기의 뼈대인 플롯을 그려내는 곳',
            tagline: '프롬프트가 플롯을 만나는 곳'
        },
        intro: {
            title: '프롬프트에서\n플롯으로',
            promptTitle: '프롬프트 (Prompt)',
            promptDesc: '창작의 불꽃입니다. 생성형 AI와 함께라면, 단 한 문장이 우주를 시작합니다.',
            plotTitle: '플롯 (Plot)',
            plotDesc: '이야기의 뼈대입니다. 우리는 그 첫 불꽃으로부터 구조와 서사를 엮어냅니다.',
            duoDesc: '우리는 게임 프로그래머와 드라마 작가 부부입니다. AI를 활용하여 매력적인 이야기와 인터랙티브 경험을 만들어갑니다.'
        },
        nav: {
            home: '홈',
            about: '소개',
            content: '컨텐츠'
        },
        about: {
            title: 'About Us',
            programmer: {
                name: '프로그래머',
                role: '게임 개발자',
                desc: '꿈을 로직으로 코딩합니다. 이야기에 생명을 불어넣는 시스템을 만듭니다.'
            },
            writer: {
                name: '작가',
                role: '드라마 & 예능 작가',
                desc: '단어들로 세상을 엮습니다. AI를 보조 작가로 활용하여 흡입력 있는 서사를 만듭니다.'
            }
        },
        content: {
            title: '우리의 작품들',
            items: {
                1: {
                    title: '침묵의 섬',
                    desc: 'AI와 함께 쓴 판타지 소설.',
                    full: '구름 바다 위로 섬들이 떠다니는 세상, 젊은 지도 제작자가 존재하지 않아야 할 땅의 지도를 발견합니다. "침묵의 섬"은 고립과 연결을 탐구하며, 거대 언어 모델의 도움을 받아 세계관 설정과 다양한 대화를 생성했습니다.'
                },
                2: {
                    title: '봇 가드너',
                    desc: '아늑한 SF 시뮬레이션 게임.',
                    full: '화성의 미래 온실을 관리하세요. 당신은 지구의 마지막 식물을 지키는 관리용 드로이드입니다. 이 게임은 생성형 AI를 사용하여 독특한 식물 변종과 역동적인 날씨 이벤트를 만들어내며, 매번 새로운 플레이 경험을 제공합니다.'
                },
                3: {
                    title: '미스터리 프로젝트 X',
                    desc: '공개 예정...',
                    full: '우리의 다음 대규모 협업이 진행 중입니다. 현실과 허구의 경계를 허무는 내러티브 경험을 기대해주세요.'
                }
            }
        }
    }
};
