// Файл с контентом - content-data.js
const contentData = {
    // ==================== ЯДРО ====================
    core: {
        description: "Фундаментальные принципы и ядро системы",
        subsections: [
            {
                title: "Центральные концепции",
                topics: [
                    {
                        title: "Режим Бога",
                        articles: [
                            { 
                                id: 'core_god_mode_1',
                                title: "Как родился 'Режим Бога'", 
                                content: "Полный текст статьи о рождении Режима Бога..."
                            },
                            { 
                                id: 'core_god_mode_2',
                                title: "РАДкаст №19", 
                                content: "Содержание РАДкаста №19..."
                            },
                            { 
                                id: 'core_god_mode_3',
                                title: "Убийство Режима Бога", 
                                content: "Текст статьи об убийцах Режима Бога..."
                            }
                        ]
                    },
                    {
                        title: "Via Negativa",
                        articles: [
                            { 
                                id: 'core_via_negativa_1',
                                title: "Via Negativa", 
                                content: "Содержание статьи о Via Negativa..."
                            }
                        ]
                    },
                    {
                        title: "Диджитал-стоицизм",
                        articles: [
                            { 
                                id: 'core_digital_stoicism_1',
                                title: "Диджитал-стоицизм", 
                                content: "Текст статьи о цифровом стоицизме..."
                            }
                        ]
                    },
                    {
                        title: "Ментальные модели",
                        articles: [
                            { 
                                id: 'core_mental_models_1',
                                title: "Ментальные модели", 
                                content: "Содержание статьи о ментальных моделях..."
                            }
                        ]
                    },
                    {
                        title: "Современный стоический мудрец",
                        articles: [
                            { 
                                id: 'core_stoic_sage_1',
                                title: "Современный стоический мудрец", 
                                content: "Текст статьи о стоическом мудреце..."
                            }
                        ]
                    }
                ]
            },
            {
                title: "Кризисы и вызовы",
                topics: [
                    {
                        title: "Арка Героя",
                        articles: [
                            { 
                                id: 'core_hero_arc_1',
                                title: "Арка Героя", 
                                content: "Содержание статьи об арке героя..."
                            }
                        ]
                    },
                    {
                        title: "Ты не странный",
                        articles: [
                            { 
                                id: 'core_not_weird_1',
                                title: "Ты не странный", 
                                content: "Текст статьи о принятии уникальности..."
                            }
                        ]
                    },
                    {
                        title: "Алгоритм преодоления жизненных кризисов",
                        articles: [
                            { 
                                id: 'core_crisis_algorithm_1',
                                title: "Алгоритм преодоления жизненных кризисов", 
                                content: "Содержание алгоритма кризисов..."
                            }
                        ]
                    },
                    {
                        title: "Кризис — это возможность",
                        articles: [
                            { 
                                id: 'core_crisis_opportunity_1',
                                title: "Кризис — это возможность", 
                                content: "Текст статьи о кризисе как возможности..."
                            }
                        ]
                    }
                ]
            }
        ]
    },

    // ==================== СИСТЕМА ====================
    system: {
        description: "Системы и инструменты для эффективности",
        subsections: [
            {
                title: "Инструменты продуктивности",
                topics: [
                    {
                        title: "Программирование главного процессора",
                        articles: [
                            { 
                                id: 'system_processor_1',
                                title: "Программирование главного процессора", 
                                content: "Текст статьи..."
                            }
                        ]
                    }
                ]
            }
        ]
    },

    // ==================== ЭНЕРГИЯ ====================
    energy: {
        description: "Восстановление и управление энергией", 
        subsections: [
            {
                title: "Восстановление энергии",
                topics: [
                    {
                        title: "Как правильно отдыхать",
                        articles: [
                            { 
                                id: 'energy_rest_1',
                                title: "Как правильно отдыхать", 
                                content: "Текст статьи..."
                            }
                        ]
                    }
                ]
            }
        ]
    }

    // Остальные категории по аналогии...
};

window.contentData = contentData;
