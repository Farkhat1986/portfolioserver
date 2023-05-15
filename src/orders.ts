export interface Order { 

    name?: string;

    description?: string;

    imgSrc?: string;
};


export const website: Order[] = [
    { name: 'PORTFOLIO BAYRAMOV FARHAT.RU', description: 'Сайт портфолио, описание проектов, описание технологий, описание используемых программ', imgSrc: '/images/one.jpg' },
    { name: 'FOTOJURNAL.RU', description: 'Сайт для размещения фото, с информацией: где, когда сделаны. На сайте можно размещать фото зарегистрированным людям', imgSrc: '/images/one.jpg' },
];


export const programm: Order[] = [
    { name: 'SCANFASE', description: 'Программа для распознования лиц', imgSrc: '/images/one.jpg' },
    { name: 'Calculator', description: 'Простой калькулятор', imgSrc: '/images/one.jpg' },
];


export const game: Order[] = [
    { name: 'CRESTIKINOLIKI', description: 'Игра Крестики Нолики', imgSrc: '/images/one.jpg' },
    { name: 'PACMAN', description: 'Игра ПАКМАН', imgSrc: '/images/one.jpg' },
];

export const tehno: Order[] = [
    { name: 'REACT', description: 'Популярная библиотека', imgSrc: '/images/one.jpg' },
    { name: 'POSTMAN', description: 'Программа создана для программистов', imgSrc: '/images/one.jpg' },
];