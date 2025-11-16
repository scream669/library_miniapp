// Система целей и навигации
const app = {
    currentScreen: 'goal-selection',
    selectedGoals: [],
    currentArticle: null,
    
    goals: [
        { id: 'discipline', name: 'Прокачать дисциплину', emoji: '💪' },
        { id: 'business', name: 'Запустить бизнес', emoji: '🚀' },
        { id: 'purpose', name: 'Найти предназначение', emoji: '✨' },
        { id: 'energy', name: 'Вернуть энергию', emoji: '⚡️' },
        { id: 'mindset', name: 'Прокачать мышление', emoji: '🧠' },
        { id: 'phone', name: 'Освободиться от телефона', emoji: '📵' },
        { id: 'health', name: 'Улучшить здоровье', emoji: '❤️' },
        { id: 'learning', name: 'Научиться учиться', emoji: '📚' },
        { id: 'happiness', name: 'Найти счастье', emoji: '😊' },
        { id: 'tech', name: 'Освоить технологии', emoji: '🤖' }
    ],

    // Контент для всех целей
    content: {
        discipline: {
            description: "Создать систему железной самодисциплины",
            stages: [
                {
                    title: "ОСНОВА ДИСЦИПЛИНЫ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." }
                    ]
                },
                {
                    title: "ИНСТРУМЕНТЫ СИСТЕМЫ", 
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "УГЛУБЛЕНИЕ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." },
                        { title: "Статья 5", content: "Содержание статьи 5..." }
                    ]
                }
            ]
        },
        business: {
            description: "Создать прибыльный бизнес с нуля",
            stages: [
                {
                    title: "ФУНДАМЕНТ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ПРОДАЖИ И МОНЕТИЗАЦИЯ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "МАСШТАБИРОВАНИЕ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                }
            ]
        },
        purpose: {
            description: "Обнаружить свое дело жизни",
            stages: [
                {
                    title: "САМОИССЛЕДОВАНИЕ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ПРАКТИЧЕСКОЕ ПРИМЕНЕНИЕ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ИНТЕГРАЦИЯ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." }
                    ]
                }
            ]
        },
        energy: {
            description: "Восстановить энергетические ресурсы",
            stages: [
                {
                    title: "ДИАГНОСТИКА",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ВОССТАНОВЛЕНИЕ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ПОДДЕРЖАНИЕ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                }
            ]
        },
        mindset: {
            description: "Развить критическое и системное мышление",
            stages: [
                {
                    title: "ФИЛОСОФСКАЯ БАЗА",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "МЕНТАЛЬНЫЕ МОДЕЛИ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ПРАКТИКА",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                }
            ]
        },
        phone: {
            description: "Вернуть контроль над вниманием и временем",
            stages: [
                {
                    title: "ОСОЗНАНИЕ ПРОБЛЕМЫ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ПРАКТИЧЕСКИЕ ИНСТРУМЕНТЫ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ГЛУБОКАЯ ТРАНСФОРМАЦИЯ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                }
            ]
        },
        health: {
            description: "Создать сильное и энергичное тело",
            stages: [
                {
                    title: "ФУНДАМЕНТ ЗДОРОВЬЯ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ОПТИМИЗАЦИЯ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ПРОДВИНУТЫЙ УРОВЕНЬ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." }
                    ]
                }
            ]
        },
        learning: {
            description: "Освоить навык эффективного обучения",
            stages: [
                {
                    title: "ОСНОВЫ ОБУЧЕНИЯ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "УГЛУБЛЕННЫЕ МЕТОДИКИ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "МАСТЕРСТВО",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                }
            ]
        },
        happiness: {
            description: "Обрести внутреннюю гармонию и удовлетворенность",
            stages: [
                {
                    title: "ПОИСК ИСТОЧНИКОВ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ПРАКТИКИ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ИНТЕГРАЦИЯ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                }
            ]
        },
        tech: {
            description: "Эффективно использовать современные инструменты",
            stages: [
                {
                    title: "ОСНОВЫ ЦИФРОВОЙ ГИГИЕНЫ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ПРАКТИЧЕСКОЕ ПРИМЕНЕНИЕ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                },
                {
                    title: "ПРОДВИНУТОЕ ИСПОЛЬЗОВАНИЕ",
                    articles: [
                        { title: "Статья 1", content: "Содержание статьи 1..." },
                        { title: "Статья 2", content: "Содержание статьи 2..." },
                        { title: "Статья 3", content: "Содержание статьи 3..." },
                        { title: "Статья 4", content: "Содержание статьи 4..." }
                    ]
                }
            ]
        }
    },
    
    init() {
        // Загружаем сохраненные цели
        const savedGoals = JSON.parse(localStorage.getItem('selectedGoals') || '[]');
        if (savedGoals.length > 0) {
            this.selectedGoals = savedGoals;
            this.showRouteReady();
        } else {
            this.showGoalSelection();
        }
        
        // Инициализация Telegram Web App
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
        }
    },
    
    showGoalSelection() {
        this.currentScreen = 'goal-selection';
        
        const html = `
            <div class="header">
                <div class="logo">🚀</div>
                <h1>Расскажите, что для вас актуально прямо сейчас?</h1>
                <div class="subtitle">Выберите до 3-х целей</div>
            </div>
            
            <div class="counter" id="counter">Выбрано: ${this.selectedGoals.length}/3</div>
            
            <div id="goals-list">
                ${this.goals.map(goal => {
                    const isSelected = this.selectedGoals.includes(goal.id);
                    return `
                        <button class="goal-btn ${isSelected ? 'selected' : ''}" 
                                onclick="app.toggleGoal('${goal.id}')" 
                                id="goal-${goal.id}">
                            <span class="emoji">${goal.emoji}</span>
                            ${goal.name}
                            <span class="check">✓</span>
                        </button>
                    `;
                }).join('')}
            </div>
            
            <button class="action-btn" id="create-btn" onclick="app.showRouteReady()" 
                    ${this.selectedGoals.length === 0 ? 'disabled' : ''}>
                Выбрать
            </button>
        `;
        
        document.getElementById('app').innerHTML = html;
    },
    
    toggleGoal(goalId) {
        const index = this.selectedGoals.indexOf(goalId);
        const button = document.getElementById(`goal-${goalId}`);
        
        if (index > -1) {
            this.selectedGoals.splice(index, 1);
            button.classList.remove('selected');
        } else {
            if (this.selectedGoals.length < 3) {
                this.selectedGoals.push(goalId);
                button.classList.add('selected');
            }
        }
        
        this.updateCounter();
    },
    
    updateCounter() {
        const counter = document.getElementById('counter');
        const createBtn = document.getElementById('create-btn');
        
        if (counter) {
            counter.textContent = `Выбрано: ${this.selectedGoals.length}/3`;
        }
        
        if (createBtn) {
            createBtn.disabled = this.selectedGoals.length === 0;
        }
    },
    
    showRouteReady() {
        // Сохраняем выбранные цели
        localStorage.setItem('selectedGoals', JSON.stringify(this.selectedGoals));
        
        this.currentScreen = 'route-ready';
        
        const html = `
            <div class="header">
                <div class="logo">🗺️</div>
                <h1>Ваш маршрут готов!</h1>
                <div class="subtitle">
                    На основе твоих целей мы собрали персональную подборку материалов. 
                    Здесь только то, что решает твои задачи.<br><br>
                    Ты всегда можешь изменить цели в настройках или исследовать всю базу знаний целиком.
                </div>
            </div>
            
            <button class="route-btn" onclick="app.showPersonalRoute()">
                Исследовать мой маршрут
            </button>
            
            <button class="route-btn" onclick="app.showFullLibrary()">
                Посмотреть всю базу знаний
            </button>
            
            <button class="back-btn" onclick="app.showGoalSelection()">
                ← Изменить цели
            </button>
        `;
        
        document.getElementById('app').innerHTML = html;
    },
    
    showPersonalRoute() {
        const selectedGoalsData = this.selectedGoals.map(id => 
            this.goals.find(goal => goal.id === id)
        );
        
        const html = `
            <button class="back-btn" onclick="app.showRouteReady()">
                ← Назад
            </button>
            
            <div class="header">
                <h1>Ваша подборка</h1>
                <div class="subtitle">Материалы по вашим целям</div>
            </div>
            
            ${selectedGoalsData.map(goal => `
                <button class="goal-btn" onclick="app.showGoalDetail('${goal.id}')">
                    <span class="emoji">${goal.emoji}</span>
                    ${goal.name}
                    <span class="arrow">›</span>
                </button>
            `).join('')}
        `;
        
        document.getElementById('app').innerHTML = html;
    },
    
    showGoalDetail(goalId) {
        const goal = this.goals.find(g => g.id === goalId);
        const goalContent = this.content[goalId];
        
        if (!goalContent) {
            this.showPersonalRoute();
            return;
        }
        
        const html = `
            <button class="back-btn" onclick="app.showPersonalRoute()">
                ← Назад к подборке
            </button>
            
            <div class="header text-left">
                <h1>${goal.emoji} ${goal.name}</h1>
                <div class="goal-description">
                    Цель: ${goalContent.description}
                </div>
            </div>
            
            ${goalContent.stages.map((stage, index) => `
                <div class="stage-title">Этап ${index + 1}: ${stage.title}</div>
                ${stage.articles.map(article => `
                    <a class="article-link" onclick="app.showArticle('${goalId}', ${index}, ${stage.articles.indexOf(article)})">
                        ${article.title}
                    </a>
                `).join('')}
            `).join('')}
        `;
        
        document.getElementById('app').innerHTML = html;
    },
    
    showArticle(goalId, stageIndex, articleIndex) {
        const goalContent = this.content[goalId];
        const article = goalContent.stages[stageIndex].articles[articleIndex];
        const goal = this.goals.find(g => g.id === goalId);
        
        this.currentArticle = { goalId, stageIndex, articleIndex };
        
        const html = `
            <button class="back-btn" onclick="app.showGoalDetail('${goalId}')">
                ← Назад к этапам
            </button>
            
            <div class="header text-left">
                <h1>${article.title}</h1>
                <div class="subtitle text-left">${goal.emoji} ${goal.name}</div>
            </div>
            
            <div class="article-content">
                ${article.content}
            </div>
        `;
        
        document.getElementById('app').innerHTML = html;
    },
    
    showFullLibrary() {
        const html = `
            <button class="back-btn" onclick="app.showRouteReady()">
                ← Назад
            </button>
            
            <div class="header">
                <h1>Вся база знаний</h1>
                <div class="subtitle">Все доступные материалы и цели</div>
            </div>
            
            ${this.goals.map(goal => `
                <button class="goal-btn" onclick="app.showGoalDetail('${goal.id}')">
                    <span class="emoji">${goal.emoji}</span>
                    ${goal.name}
                    <span class="arrow">›</span>
                </button>
            `).join('')}
        `;
        
        document.getElementById('app').innerHTML = html;
    }
};

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    app.init();
});

