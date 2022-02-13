alert('Тут есть 3 пасхалки, удачи в нахождении! :)\nПодсказка: Безумие - это точное повторение одного и того же действия раз за разом в надежде на изменение.')

let quotes = [
    {
        author_ru: 'Волк Бегун',
        ru: 'Лучше быть последним — первым, чем первым — последним.',
        author_en: 'Wolf Runner',
        en: 'It is better to be the last - the first, than the first - the last.'
    },
    {
        author_ru: 'Волк Помогатор',
        ru: 'На случай, если буду нужен, то я там же, где и был, когда был не нужен.',
        author_en: 'Wolf Helper',
        en: 'In case I\'m needed, I\'m right where I was when I wasn\'t needed.'
    },
    {
        author_ru: 'Волк Общительный',
        ru: 'Если волк молчит то лучше его не перебивай.',
        author_en: 'Wolf Communicative',
        en: 'If the wolf is silent, then it is better not to interrupt him.'
    },
    {
        author_ru: 'Волк Циркач',
        ru: 'Каждый в цирке думает, что знает в цирке, но не каждый, что в цирке знает, что в цирке не каждый знает думает',
        author_en: 'Wolf Circus Performer',
        en: 'Everyone in the circus thinks they know in the circus, but not everyone in the circus knows that in the circus not everyone knows thinks.'
    },
    {
        author_ru: 'Волк Отдыхающий',
        ru: 'Легко вставать, когда ты не ложился.',
        author_en: 'Wolf Vacationer',
        en: 'It\'s easy to get up when you haven\'t been to bed.'
    },
    {
        author_ru: 'Волк Помнящий',
        ru: 'Кем бы ты ни был, кем бы ты не стал, помни, где ты был и кем ты стал.',
        author_en: 'Wolf Remembering',
        en: 'Whoever you are, whatever you become, remember where you have been and who you have become.'
    },
    {
        author_ru: 'Волк Жизненный',
        ru: 'Иногда жизнь — это жизнь, а ты в ней иногда.',
        author_en: 'Wolf Life',
        en: 'Sometimes life is life, and sometimes you are in it.'
    },
    {
        author_ru: 'Волк Любитель Пенистого',
        ru: 'В жизни полно лжи и грязи, она не так красива. Даже твой лучший друг может не поделиться пивом…',
        author_en: 'Wolf Foam Lover',
        en: 'Life is full of lies and dirt, it is not so beautiful. Even your best friend might not share a beer...'
    },
    {
        author_ru: 'Волк Еврей',
        ru: 'Бесплатный сыр бывает только бесплатным.',
        author_en: 'Wolf Jew',
        en: 'Free cheese is only free.'
    },
    {
        author_ru: 'Волк с кифозом',
        ru: 'Я не боюсь ударов в спину, гораздо страшнее, если это моя спина….',
        author_en: 'Wolf with kyphosis',
        en: 'I\'m not afraid of being stabbed in the back, it\'s much worse if it\'s my back....'
    },
    {
        author_ru: 'Волк Дедлайн',
        ru: 'Сначала потом, затем, снова опять.',
        author_en: 'Wolf Deadline',
        en: 'First later, then again.'
    },
    {
        author_ru: 'Волк Потом',
        ru: 'Никогда не поздно, никогда не рано — поменять все поздно, если это рано.',
        author_en: 'Wolf Later',
        en: 'It\'s never too late, never too early - it\'s too late to change everything if it\'s too early.'
    },
    {
        author_ru: 'Волк Гуру',
        ru: 'Каждый думает, что знает меня, но не каждый знает, что не знает, кто думает.',
        author_en: 'Wolf Guru',
        en: 'Everyone thinks they know me, but not everyone knows they don\'t know who thinks.'
    },
    {
        author_ru: 'Волк с кривыми ногами',
        ru: 'Лучше один раз упасть, чем сто раз упасть.',
        author_en: 'Wolf with crooked legs',
        en: 'It is better to fall once than to fall a hundred times.'
    },
    {
        author_ru: 'Волк Офтальмолог',
        ru: 'Если ты не видишь, значит ты слепой.',
        author_en: 'Wolf Ophthalmologist',
        en: 'If you can\'t see, then you\'re blind.'
    },
    {
        author_ru: 'Волк Учитель',
        ru: 'Запомните, а то забудете.',
        author_en: 'Wolf Teacher',
        en: 'Remember, or you will forget.'
    },
    {
        author_ru: 'Волк Физрук',
        ru: 'Будь сильным, но не сильно будь.',
        author_en: 'Wolf Trainer',
        en: 'Be strong, but don\'t be strong.'
    },
    {
        author_ru: 'Волк ЗОЖник',
        ru: 'Бегать за овцами — удел баранов. Я бегаю только за пивом.',
        author_en: 'Wolf Healthy Lifestyle',
        en: 'Running after sheep is the lot of sheep. I only run for beer.'
    },
    {
        author_ru: 'Волк Терпила',
        ru: 'Я такой человек, который терпит терпит, но в какой-то момент терпит терпит.',
        author_en: 'Wolf Patience',
        en: 'I am the kind of person who suffers, but at some point, suffers.'
    },
    {
        author_ru: 'Волк Чистюля',
        ru: 'Не нужно менять себя ради кого-то, нужно менять носки каждый день, а то они воняют.',
        author_en: 'Clean Wolf',
        en: 'You don\'t need to change yourself for someone else, you need to change your socks every day, otherwise they stink.'
    },
    {
        author_ru: 'Волк Сильный Духом',
        ru: 'Упал — не значит упал. Провал — это там где не встал.',
        author_en: 'Wolf Strong Spirit',
        en: 'Fallen doesn\t mean fall. A failure is where you didn\'t get up.'
    },
    {
        author_ru: 'Волк Пивовар',
        ru: 'Тебя зовут по имени, но я зову тебя пить пиво.',
        author_en: 'Wolf Brewer',
        en: 'You are called by name, but I call you to drink beer.'
    },
    {
        author_ru: 'Волк Фитнес-Тренер',
        ru: 'Если тебе тяжело идти, значит ты жирный.',
        author_en: 'Wolf Fitness-Trainer',
        en: 'If it\'s hard for you to walk, then you\'re fat.'
    },
    {
        author_ru: 'Волк Букмекер',
        ru: 'Даже если нет шансов, всегда есть шанс.',
        author_en: 'Wolf Bookmaker',
        en: 'Even if there is no chance, there is always a chance.'
    },
    {
        author_ru: 'Волк Кассир KFC',
        ru: 'Лучше быть тем кем есть, чем быть тем, кем не будешь.',
        author_en: 'Wolf Cashier KFC',
        en: 'It\'s better to be who you are than to be who you won\'t be.'
    },
    {
        author_ru: 'Волк Мотиватор',
        ru: 'Хочешь жить — умей жить.',
        author_en: 'Wolf Motivator',
        en: 'If you want to live - know how to live.'
    },
    {
        author_ru: 'Волк Кричащий',
        ru: 'Громко — это как тихо, только громче.',
        author_en: 'Wolf Screaming',
        en: 'Loud is like quiet, only louder.'
    },
    {
        author_ru: 'Волк Следящий',
        ru: 'Когда волк на тебя смотрит — это значит, что он тебя видит.',
        author_en: 'Wolf Tracking',
        en: 'When a wolf looks at you, it means that he sees you.'
    },
    {
        author_ru: 'Волк Деловой',
        ru: 'Сделал дело — дело сделано.',
        author_en: 'Wolf Business',
        en: 'Did the job - the job is done.'
    },
    {
        author_ru: 'Волк Спортсмен',
        ru: 'Моя тренировка начинается, когда я выбегаю за пивком. Собственно, на этом она и заканчивается…',
        author_en: 'Wolf Athlete',
        en: 'My workout starts when I run out for a beer. In fact, this is where it ends...'
    },
    {
        author_ru: 'Волк с Сюрпризом',
        ru: 'Снаружи я кажусь веселым, но внутри у меня пиво…',
        author_en: 'Wolf with Surprise',
        en: 'On the outside I look cheerful, but on the inside I have a beer...'
    },
    {
        author_ru: 'Волк \'по Факту\'',
        ru: 'Легкой бывает только легкая дорога. Тяжелая дорога всегда трудна.',
        author_en: 'Wolf \'in Fact\'',
        en: 'Only the easy road is easy. A hard road is always hard.'
    },
    {
        author_ru: 'Волк Братанчик',
        ru: 'Брат за брата - за основу взято!',
        author_en: 'Wolf Bro',
        en: 'Brother for brother - taken as a basis!'
    },
    {
        author_ru: 'Волк Сладкоежка',
        ru: 'Съел красную шапочку - а у неё попка горькая...',
        author_en: 'Wolf Sweet-Tooth',
        en: 'I ate a little red riding hood - and her ass is bitter...'
    },
    {
        author_ru: 'Дефолтный Волк',
        ru: 'Ауф!',
        author_en: 'Default Wolf',
        en: 'Auf!'
    },
    {
        author_ru: 'Волк Имеющий',
        ru: 'Лучше иметь друга, чем друг друга.',
        author_en: 'Wolf Having',
        en: 'Better to have a friend than each other.'
    }
]

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

let arrImg = []
for(let i = 0; i > quotes.length; ++i) {
    arrImg.push('./assets/images/' + i + '.png')
}
preloadImages(arrImg);

let randomNum = Math.floor(Math.random() * quotes.length) 
const quote = document.querySelector('.quote-text')
const author = document.querySelector('.author')
const imageq = document.querySelector('.quote-img')
const audio = new Audio()
audio.src = './assets/audio/ba-dum-tsss.mp3'  
audio.volume = 0.5  
let lang = 'ru'

function changeQuote() {
    quote.innerHTML = '\"' + quotes[randomNum][lang] + '\"'
    author.innerHTML = '© ' + quotes[randomNum]['author_' + lang]
    imageq.style.backgroundImage = 'url(./assets/images/' + randomNum + '.png)'
}

function playMusic() {
    audio.pause()
    audio.currentTime = 0
    audio.play()
}

changeQuote()
playMusic()

let countQ = 0
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    let temp = Math.floor(Math.random() * quotes.length) 
    while(temp == randomNum) {
        temp = Math.floor(Math.random() * quotes.length) 
    }
    randomNum = temp
    changeQuote()
    playMusic()
    countQ++
    if(countQ == 13) {
        alert('Опа, ето пасхалка №2 :)')
        quote.classList.add('text-color')
    }
    if(countQ == 14) {
        countQ = 1
        quote.classList.remove('text-color')
    }
})

const btnEn = document.querySelector('.lang-en')
const btnRu = document.querySelector('.lang-ru')

btnEn.addEventListener('click', () => {
    btnEn.classList.add('active')
    btnRu.classList.remove('active')
    lang = 'en'
    changeQuote()
    btn.innerHTML = 'Generate Quote'
    localStorage.setItem('lang', 1)
    document.querySelector('.back-color-h').innerHTML = 'Backgound сolor'
})

btnRu.addEventListener('click', () => {
    btnEn.classList.remove('active')
    btnRu.classList.add('active')
    lang = 'ru'
    changeQuote()
    btn.innerHTML = 'Сгенерировать Цитату'
    localStorage.removeItem('lang')
    document.querySelector('.back-color-h').innerHTML = 'Цвет фона'
})


if(localStorage.getItem('lang') == 1) {
    btnEn.classList.add('active')
    btnRu.classList.remove('active')
    lang = 'en'
    changeQuote()
    btn.innerHTML = 'Generate Quote'
    localStorage.setItem('lang', 1)
    document.querySelector('.back-color-h').innerHTML = 'Backgound сolor'
}

const blackB = document.querySelector('.black')
const whiteB = document.querySelector('.white')
const volumeBtn = document.querySelector('.volume')

blackB.addEventListener('click', () => {
    document.querySelector('main').style.backgroundColor = 'black'
    document.querySelector('main').style.color = 'white'
    localStorage.removeItem('color')
    volumeBtn.classList.remove('volume-white')
})

whiteB.addEventListener('click', () => {
    document.querySelector('main').style.backgroundColor = 'white'
    document.querySelector('main').style.color = 'black'
    localStorage.setItem('color', 1)
    volumeBtn.classList.add('volume-white')
})

if(localStorage.getItem('color') == 1) {
    document.querySelector('main').style.backgroundColor = 'white'
    document.querySelector('main').style.color = 'black'
    volumeBtn.classList.add('volume-white')
}

let counterW = 0

document.querySelector('.back-color-h').addEventListener('click', () => {
    counterW++
    if(counterW == 5) {
        alert('Вы нашли пасхалку №1 :D\nМолодцы!')
        document.querySelector('main').style.backgroundColor = 'none'
        document.querySelector('main').classList.add('p13')
    }
    if(counterW == 6) {
        document.querySelector('main').classList.remove('p13')
        counterW = 1
    }
})

let countImg = 0
imageq.addEventListener('click', () => {
    countImg++
    if(countImg == 7) {
        alert('А вот и пасхалка №3 xD')
        imageq.classList.remove('quote-img')
        imageq.classList.add('shadowP')
    }
    if(countImg == 8) {
        countImg = 0
        imageq.classList.add('quote-img')
        imageq.classList.remove('shadowP')
    }
})

volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('volume')
    volumeBtn.classList.toggle('volume-off')

    if(volumeBtn.classList.contains('volume-off')) {
        audio.volume = 0
        localStorage.setItem('volume', 1)
    } else {
        audio.volume = 0.5
        localStorage.removeItem('volume')
    }
})

if(localStorage.getItem('volume') == 1) {
    volumeBtn.classList.toggle('volume')
    volumeBtn.classList.toggle('volume-off')
    audio.volume = 0
}