// ============================================
// Ambient Sound Generator — Apple-inspired UI
// ============================================

// Sound Database
const soundDatabase = {
    rain: {
        name: '雨声', icon: 'fa-cloud-rain',
        sounds: [
            { id: 'light-rain', name: '小雨', icon: 'fa-cloud-sun-rain', file: 'audio/rain/light-rain.ogg' },
            { id: 'drizzle', name: '毛毛雨', icon: 'fa-smog', file: 'audio/rain/drizzle.ogg' },
            { id: 'heavy-rain', name: '大雨', icon: 'fa-cloud-showers-heavy', file: 'audio/rain/heavy_rain.ogg' },
            { id: 'rain-on-windowsill', name: '窗台雨', icon: 'fa-window-maximize', file: 'audio/rain/rain-on-windowsill.ogg' },
            { id: 'rain-on-roof', name: '屋顶雨', icon: 'fa-house-chimney', file: 'audio/rain/rain-on-car-roof.ogg' },
            { id: 'rain-on-leaves', name: '叶上雨', icon: 'fa-leaf', file: 'audio/rain/rain-on-leaves.ogg' },
            { id: 'rain-on-glass', name: '玻璃雨', icon: 'fa-square', file: 'audio/rain/heavy-rain-on-glass.ogg' },
            { id: 'rain-on-umbrella', name: '伞上雨', icon: 'fa-umbrella', file: 'audio/rain/rain-on-umbrella.ogg' },
            { id: 'rain-on-eaves', name: '屋檐雨', icon: 'fa-house', file: 'audio/rain/rain-on-eaves.ogg' },
            { id: 'rain-on-raincoat', name: '雨衣雨', icon: 'fa-vest', file: 'audio/rain/rain-on-raincoat.ogg' },
            { id: 'rain-on-tent', name: '帐篷雨', icon: 'fa-campground', file: 'audio/rain/rain-on-tent.ogg' },
            { id: 'rain-on-wooden-house', name: '木屋雨', icon: 'fa-warehouse', file: 'audio/rain/rain-on-wooden-house.ogg' },
            { id: 'rain-on-empty-street', name: '空街雨', icon: 'fa-road', file: 'audio/rain/rain-on-empty-street.ogg' },
            { id: 'rain-while-driving', name: '行车雨', icon: 'fa-car', file: 'audio/rain/rain-while-driving.ogg' },
            { id: 'thunderstorm', name: '雷雨', icon: 'fa-bolt', file: 'audio/rain/thunderstorm.ogg' },
            { id: 'heavy-rain-seamless', name: '无缝大雨', icon: 'fa-cloud-showers-heavy', file: 'audio/rain/heavy_rain_segments/heavy_rain_segment_0.ogg', segments: [
                'audio/rain/heavy_rain_segments/heavy_rain_segment_1.ogg',
                'audio/rain/heavy_rain_segments/heavy_rain_segment_2.ogg',
                'audio/rain/heavy_rain_segments/heavy_rain_segment_3.ogg'
            ]}
        ]
    },
    nature: {
        name: '自然', icon: 'fa-leaf',
        sounds: [
            { id: 'waves', name: '海浪', icon: 'fa-water', file: 'audio/nature/waves.ogg' },
            { id: 'wind', name: '风声', icon: 'fa-wind', file: 'audio/nature/wind.ogg' },
            { id: 'howling-wind', name: '呼啸风', icon: 'fa-hurricane', file: 'audio/nature/howling-wind.ogg' },
            { id: 'wind-in-trees', name: '林中风', icon: 'fa-tree', file: 'audio/nature/wind-in-trees.ogg' },
            { id: 'river', name: '河流', icon: 'fa-stream', file: 'audio/nature/river.ogg' },
            { id: 'waterfall', name: '瀑布', icon: 'fa-droplet', file: 'audio/nature/waterfall.ogg' },
            { id: 'lake', name: '湖泊', icon: 'fa-water', file: 'audio/nature/lake.ogg' },
            { id: 'droplets', name: '水滴', icon: 'fa-droplet', file: 'audio/nature/droplets.ogg' },
            { id: 'campfire', name: '篝火', icon: 'fa-fire', file: 'audio/nature/campfire.ogg' },
            { id: 'field', name: '田野', icon: 'fa-seedling', file: 'audio/nature/field.ogg' },
            { id: 'jungle', name: '丛林', icon: 'fa-trees', file: 'audio/nature/jungle.ogg' },
            { id: 'walk-on-leaves', name: '踩落叶', icon: 'fa-leaf', file: 'audio/nature/walk-on-leaves.ogg' },
            { id: 'walk-on-gravel', name: '踩碎石', icon: 'fa-mountain', file: 'audio/nature/walk-on-gravel.ogg' },
            { id: 'walk-in-snow', name: '踩雪', icon: 'fa-snowflake', file: 'audio/nature/walk-in-snow.ogg' }
        ]
    },
    urban: {
        name: '城市', icon: 'fa-city',
        sounds: [
            { id: 'traffic', name: '交通', icon: 'fa-traffic-light', file: 'audio/urban/traffic.ogg' },
            { id: 'busy-street', name: '繁忙街道', icon: 'fa-people-group', file: 'audio/urban/busy-street.ogg' },
            { id: 'highway', name: '高速公路', icon: 'fa-road', file: 'audio/urban/highway.ogg' },
            { id: 'road', name: '公路', icon: 'fa-car-side', file: 'audio/urban/road.ogg' },
            { id: 'crowd', name: '人群', icon: 'fa-users', file: 'audio/urban/crowd.ogg' },
            { id: 'ambulance-siren', name: '救护车', icon: 'fa-truck-medical', file: 'audio/urban/ambulance-siren.ogg' },
            { id: 'fireworks', name: '烟花', icon: 'fa-explosion', file: 'audio/urban/fireworks.ogg' }
        ]
    },
    transport: {
        name: '交通', icon: 'fa-plane',
        sounds: [
            { id: 'airplane', name: '飞机', icon: 'fa-plane', file: 'audio/transport/airplane.ogg' },
            { id: 'train', name: '火车', icon: 'fa-train', file: 'audio/transport/train.ogg' },
            { id: 'inside-train', name: '火车内', icon: 'fa-train-subway', file: 'audio/transport/inside-a-train.ogg' },
            { id: 'sailboat', name: '帆船', icon: 'fa-sailboat', file: 'audio/transport/sailboat.ogg' },
            { id: 'rowing-boat', name: '划船', icon: 'fa-anchor', file: 'audio/transport/rowing-boat.ogg' },
            { id: 'submarine', name: '潜水艇', icon: 'fa-ship', file: 'audio/transport/submarine.ogg' }
        ]
    },
    places: {
        name: '场所', icon: 'fa-location-dot',
        sounds: [
            { id: 'cafe', name: '咖啡厅', icon: 'fa-mug-hot', file: 'audio/places/cafe.ogg' },
            { id: 'restaurant', name: '餐厅', icon: 'fa-utensils', file: 'audio/places/restaurant.ogg' },
            { id: 'library', name: '图书馆', icon: 'fa-book', file: 'audio/places/library.ogg' },
            { id: 'office', name: '办公室', icon: 'fa-building', file: 'audio/places/office.ogg' },
            { id: 'subway-station', name: '地铁站', icon: 'fa-train-subway', file: 'audio/places/subway-station.ogg' },
            { id: 'airport', name: '机场', icon: 'fa-plane-departure', file: 'audio/places/airport.ogg' },
            { id: 'supermarket', name: '超市', icon: 'fa-cart-shopping', file: 'audio/places/supermarket.ogg' },
            { id: 'night-village', name: '夜晚村庄', icon: 'fa-moon', file: 'audio/places/night-village.ogg' },
            { id: 'crowded-bar', name: '拥挤酒吧', icon: 'fa-champagne-glasses', file: 'audio/places/crowded-bar.ogg' },
            { id: 'church', name: '教堂', icon: 'fa-church', file: 'audio/places/church.ogg' },
            { id: 'temple', name: '寺庙', icon: 'fa-place-of-worship', file: 'audio/places/temple.ogg' },
            { id: 'kitchen', name: '厨房', icon: 'fa-kitchen-set', file: 'audio/places/kitchen.ogg' },
            { id: 'laundry-room', name: '洗衣房', icon: 'fa-shirt', file: 'audio/places/laundry-room.ogg' },
            { id: 'laboratory', name: '实验室', icon: 'fa-flask', file: 'audio/places/laboratory.ogg' },
            { id: 'underwater', name: '水下', icon: 'fa-fish-fins', file: 'audio/places/underwater.ogg' },
            { id: 'construction-site', name: '建筑工地', icon: 'fa-helmet-safety', file: 'audio/places/construction-site.ogg' },
            { id: 'carousel', name: '旋转木马', icon: 'fa-horse', file: 'audio/places/carousel.ogg' }
        ]
    },
    animals: {
        name: '动物', icon: 'fa-paw',
        sounds: [
            { id: 'birds', name: '鸟叫', icon: 'fa-dove', file: 'audio/animals/birds.ogg' },
            { id: 'crickets', name: '蟋蟀', icon: 'fa-bug', file: 'audio/animals/crickets.ogg' },
            { id: 'frog', name: '青蛙', icon: 'fa-frog', file: 'audio/animals/frog.ogg' },
            { id: 'cat-purring', name: '猫叫', icon: 'fa-cat', file: 'audio/animals/cat-purring.ogg' },
            { id: 'dog-barking', name: '狗叫', icon: 'fa-dog', file: 'audio/animals/dog-barking.ogg' },
            { id: 'wolf', name: '狼嚎', icon: 'fa-paw', file: 'audio/animals/wolf.ogg' },
            { id: 'owl', name: '猫头鹰', icon: 'fa-crow', file: 'audio/animals/owl.ogg' },
            { id: 'seagulls', name: '海鸥', icon: 'fa-dove', file: 'audio/animals/seagulls.ogg' },
            { id: 'crows', name: '乌鸦', icon: 'fa-crow', file: 'audio/animals/crows.ogg' },
            { id: 'cows', name: '牛', icon: 'fa-cow', file: 'audio/animals/cows.ogg' },
            { id: 'sheep', name: '羊', icon: 'fa-paw', file: 'audio/animals/sheep.ogg' },
            { id: 'chickens', name: '鸡', icon: 'fa-egg', file: 'audio/animals/chickens.ogg' },
            { id: 'horse-gallop', name: '马', icon: 'fa-horse', file: 'audio/animals/horse-gallop.ogg' },
            { id: 'whale', name: '鲸鱼', icon: 'fa-fish', file: 'audio/animals/whale.ogg' },
            { id: 'beehive', name: '蜜蜂', icon: 'fa-bug', file: 'audio/animals/beehive.ogg' },
            { id: 'woodpecker', name: '啄木鸟', icon: 'fa-feather', file: 'audio/animals/woodpecker.ogg' }
        ]
    },
    noise: {
        name: '噪音', icon: 'fa-wave-square',
        sounds: [
            { id: 'white-noise', name: '白噪音', icon: 'fa-wave-square', file: 'audio/noise/white-noise.ogg' },
            { id: 'pink-noise', name: '粉噪音', icon: 'fa-wave-square', file: 'audio/noise/pink-noise.ogg' },
            { id: 'brown-noise', name: '棕噪音', icon: 'fa-wave-square', file: 'audio/noise/brown-noise.ogg' },
            { id: 'piano', name: '钢琴', icon: 'fa-music', file: 'audio/noise/piano.ogg' },
            { id: 'study', name: '学习', icon: 'fa-graduation-cap', file: 'audio/noise/study.ogg' },
            { id: 'eating-chips', name: '吃薯片', icon: 'fa-cookie-bite', file: 'audio/noise/eating-chips.ogg' }
        ]
    },
    things: {
        name: '物件', icon: 'fa-shapes',
        sounds: [
            { id: 'keyboard', name: '键盘', icon: 'fa-keyboard', file: 'audio/things/keyboard.ogg' },
            { id: 'typewriter', name: '打字机', icon: 'fa-print', file: 'audio/things/typewriter.ogg' },
            { id: 'windshield-wipers', name: '雨刷', icon: 'fa-car', file: 'audio/things/windshield-wipers.ogg' },
            { id: 'dryer', name: '烘干机', icon: 'fa-fan', file: 'audio/things/dryer.ogg' },
            { id: 'singing-bowl', name: '颂钵', icon: 'fa-bowl-rice', file: 'audio/things/singing-bowl.ogg' },
            { id: 'guzheng', name: '古筝', icon: 'fa-guitar', file: 'audio/things/guzheng.ogg' },
            { id: 'bubbles', name: '气泡', icon: 'fa-circle', file: 'audio/things/bubbles.ogg' },
            { id: 'paper', name: '纸张', icon: 'fa-file', file: 'audio/things/paper.ogg' },
            { id: 'vinyl-effect', name: '唱片', icon: 'fa-compact-disc', file: 'audio/things/vinyl-effect.ogg' },
            { id: 'morse-code', name: '摩尔斯电码', icon: 'fa-satellite-dish', file: 'audio/things/morse-code.ogg' },
            { id: 'boiling-water', name: '煮水', icon: 'fa-mug-saucer', file: 'audio/things/boiling-water.ogg' },
            { id: 'ear-cleaning-1', name: '采耳1', icon: 'fa-ear-listen', file: 'audio/things/ear-cleaning-1.ogg' },
            { id: 'ear-cleaning-2', name: '采耳2', icon: 'fa-ear-listen', file: 'audio/things/ear-cleaning-2.ogg' },
            { id: 'slide-projector', name: '幻灯机', icon: 'fa-film', file: 'audio/things/slide-projector.ogg' }
        ]
    }
};

// Recommended presets
const recommendedPresets = [
    { name: '雨夜放松', icon: 'fa-cloud-rain', sounds: [{ id: 'rain-on-windowsill', volume: 60 }, { id: 'heavy-rain', volume: 40 }] },
    { name: '森林晨曦', icon: 'fa-tree', sounds: [{ id: 'birds', volume: 50 }, { id: 'wind-in-trees', volume: 40 }, { id: 'river', volume: 30 }] },
    { name: '深海冥想', icon: 'fa-water', sounds: [{ id: 'waves', volume: 60 }, { id: 'underwater', volume: 30 }] },
    { name: '咖啡馆', icon: 'fa-mug-hot', sounds: [{ id: 'cafe', volume: 50 }, { id: 'keyboard', volume: 30 }] },
    { name: '专注工作', icon: 'fa-brain', sounds: [{ id: 'white-noise', volume: 40 }, { id: 'keyboard', volume: 30 }] }
];

// Category title mapping
const categoryTitles = {
    all: '全部声音', favorites: '收藏', rain: '雨声', nature: '自然',
    urban: '城市', transport: '交通', places: '场所',
    animals: '动物', noise: '噪音', things: '物件'
};

// State
const state = {
    activeSounds: new Map(),
    currentCategory: 'all',
    currentTheme: 'light',
    presets: JSON.parse(localStorage.getItem('ambientSoundPresets') || '[]'),
    favorites: new Set(JSON.parse(localStorage.getItem('ambientSoundFavorites') || '[]')),
    timer: { active: false, endTime: null, countdownInterval: null, fadeInterval: null, originalVolumes: new Map() }
};

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSoundGrid();
    renderQuickPresets();
    initEventListeners();
});

// ---- Theme ----
function initTheme() {
    const saved = localStorage.getItem('ambientSoundTheme');
    state.currentTheme = saved || 'dark';
    applyTheme();
}

function applyTheme() {
    document.body.classList.toggle('dark', state.currentTheme === 'dark');
}

function toggleTheme() {
    state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ambientSoundTheme', state.currentTheme);
    applyTheme();
}

// ---- Navigation ----
function setCategory(cat) {
    state.currentCategory = cat;

    // Update sidebar
    document.querySelectorAll('#sidebarNav .nav-item').forEach(n =>
        n.classList.toggle('active', n.dataset.category === cat)
    );

    // Update pills
    document.querySelectorAll('.pill').forEach(p =>
        p.classList.toggle('active', p.dataset.category === cat)
    );

    // Update title
    const title = document.getElementById('sectionTitle');
    if (title) title.textContent = categoryTitles[cat] || '全部声音';

    renderSoundGrid();

    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');
}

// ---- Sound Grid ----
let gridCardIndex = 0;
function renderSoundGrid() {
    const grid = document.getElementById('soundGrid');
    grid.innerHTML = '';
    gridCardIndex = 0;

    if (state.currentCategory === 'favorites') {
        if (state.favorites.size === 0) {
            grid.innerHTML = '<div class="empty-state"><i class="fa-regular fa-star"></i><p>还没有收藏的声音<br>点击卡片上的星星即可收藏</p></div>';
            return;
        }
        state.favorites.forEach(id => {
            const info = findSoundById(id);
            if (info) grid.appendChild(createCard(info.sound, info.category));
        });
        return;
    }

    Object.entries(soundDatabase).forEach(([cat, data]) => {
        if (state.currentCategory !== 'all' && state.currentCategory !== cat) return;
        data.sounds.forEach(s => grid.appendChild(createCard(s, cat)));
    });
}

function createCard(sound, category) {
    const card = document.createElement('div');
    const isActive = state.activeSounds.has(sound.id);
    card.className = 'sound-card grid-enter' + (isActive ? ' active' : '');
    card.dataset.category = category;
    card.dataset.id = sound.id;

    // Staggered entrance animation
    card.style.animationDelay = (gridCardIndex * 30) + 'ms';
    gridCardIndex++;

    const vol = isActive ? state.activeSounds.get(sound.id).volume : 50;
    const isFav = state.favorites.has(sound.id);
    const icon = sound.icon || soundDatabase[category].icon;

    card.innerHTML = `
        <div class="card-top">
            <div class="card-icon"><i class="fa-solid ${icon}"></i></div>
            <button class="card-fav ${isFav ? 'active' : ''}" data-id="${sound.id}" title="收藏">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
            </button>
        </div>
        <div class="card-name">${sound.name}</div>
        <div class="card-slider-row">
            <input type="range" class="card-slider" min="0" max="100" value="${vol}" data-sid="${sound.id}" style="--slider-pct:${vol}%">
            <span class="card-vol">${vol}%</span>
        </div>
    `;

    // Remove entrance class after animation
    card.addEventListener('animationend', () => card.classList.remove('grid-enter'), { once: true });

    // Favorite
    card.querySelector('.card-fav').addEventListener('click', e => {
        e.stopPropagation();
        toggleFavorite(sound.id, card.querySelector('.card-fav'));
    });

    // Slider
    const slider = card.querySelector('.card-slider');
    slider.addEventListener('input', e => {
        e.stopPropagation();
        const v = parseInt(e.target.value);
        card.querySelector('.card-vol').textContent = v + '%';
        e.target.style.setProperty('--slider-pct', v + '%');
        updateSoundVolume(sound.id, v);
    });
    slider.addEventListener('click', e => e.stopPropagation());
    slider.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });

    // Toggle sound
    card.addEventListener('click', () => toggleSound(sound, category));

    return card;
}

// ---- Favorites ----
function toggleFavorite(id, btn) {
    if (state.favorites.has(id)) {
        state.favorites.delete(id);
        btn.classList.remove('active');
        btn.querySelector('i').className = 'fa-regular fa-star';
    } else {
        state.favorites.add(id);
        btn.classList.add('active');
        btn.querySelector('i').className = 'fa-solid fa-star';
    }
    localStorage.setItem('ambientSoundFavorites', JSON.stringify(Array.from(state.favorites)));
    if (state.currentCategory === 'favorites') renderSoundGrid();
}

// ---- Playback ----
function toggleSound(sound, category) {
    if (state.activeSounds.has(sound.id)) {
        stopSound(sound.id);
    } else {
        playSound(sound, category, 50);
    }
}

function playSound(sound, category, volume) {
    const audio = new Audio();
    audio.src = sound.file;
    audio.loop = !sound.segments;
    audio.volume = volume / 100;

    if (sound.segments) {
        let idx = 0;
        audio.addEventListener('ended', () => {
            if (state.activeSounds.has(sound.id)) {
                idx = (idx + 1) % sound.segments.length;
                playSegment(sound.id, sound.segments[idx], volume);
            }
        });
    }

    audio.play().catch(() => {});

    state.activeSounds.set(sound.id, { audio, volume, category, sound, segments: sound.segments });
    updateCardState(sound.id, true, volume);
    updateNowPlaying();
    saveSession();
}

function playSegment(soundId, file, volume) {
    const audio = new Audio();
    audio.src = file;
    audio.volume = volume / 100;
    const data = state.activeSounds.get(soundId);
    if (data?.segments) {
        let idx = data.segments.indexOf(file);
        audio.addEventListener('ended', () => {
            if (state.activeSounds.has(soundId)) {
                idx = (idx + 1) % data.segments.length;
                playSegment(soundId, data.segments[idx], volume);
            }
        });
    }
    audio.play().catch(() => {});
    if (state.activeSounds.has(soundId)) state.activeSounds.get(soundId).audio = audio;
}

function stopSound(id) {
    const d = state.activeSounds.get(id);
    if (d) {
        try { d.audio.pause(); d.audio.src = ''; d.audio = null; } catch {}
        state.activeSounds.delete(id);
        updateCardState(id, false, 0);
        updateNowPlaying();
        saveSession();
    }
}

function updateSoundVolume(id, volume) {
    const d = state.activeSounds.get(id);
    if (d) {
        d.volume = volume;
        if (d.audio) d.audio.volume = volume / 100;
        saveSession();
    }
}

function updateCardState(id, active, volume) {
    const card = document.querySelector(`[data-id="${id}"]`);
    if (!card) return;

    const wasActive = card.classList.contains('active');
    card.classList.toggle('active', active);

    // Trigger icon pop animation on activation
    if (active && !wasActive) {
        card.classList.add('just-activated');
        setTimeout(() => card.classList.remove('just-activated'), 400);
    }

    const slider = card.querySelector('.card-slider');
    const vol = card.querySelector('.card-vol');
    if (slider) {
        slider.value = volume;
        slider.style.setProperty('--slider-pct', volume + '%');
    }
    if (vol) vol.textContent = volume + '%';
}

function stopAllSounds() {
    state.activeSounds.forEach((_, id) => stopSound(id));
}

// ---- Ambient Glow ----
const glowColors = {
    rain: 'rgba(0,122,255,%.18)', nature: 'rgba(52,199,89,%.14)',
    urban: 'rgba(255,149,0,%.14)', transport: 'rgba(175,82,222,%.14)',
    places: 'rgba(255,45,85,%.12)', animals: 'rgba(255,204,0,%.12)',
    noise: 'rgba(142,142,147,%.10)', things: 'rgba(90,200,250,%.14)'
};

function updateAmbientGlow() {
    const app = document.querySelector('.app');
    if (!app) return;

    if (state.activeSounds.size === 0) {
        app.style.removeProperty('--glow-1');
        app.style.removeProperty('--glow-2');
        app.classList.remove('has-active');
        return;
    }

    app.classList.add('has-active');

    const counts = {};
    state.activeSounds.forEach(d => counts[d.category] = (counts[d.category] || 0) + 1);
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const primary = sorted[0]?.[0];
    const secondary = sorted[1]?.[0];

    const p = glowColors[primary] || 'rgba(0,122,255,%.18)';
    const s = glowColors[secondary || primary] || 'rgba(52,199,89,%.14)';

    app.style.setProperty('--glow-1', p.replace('%', ''));
    app.style.setProperty('--glow-2', s.replace('%', ''));
}

// ---- Now Playing Bar ----
function updateNowPlaying() {
    const bar = document.getElementById('nowPlaying');
    const sounds = document.getElementById('npSounds');
    const npTimer = document.getElementById('npTimer');
    const npTimerVal = document.getElementById('npTimerValue');

    if (state.activeSounds.size === 0) {
        bar.classList.add('hidden');
        closePlayerPanel();
        if (npTimer) npTimer.classList.add('hidden');
        renderQuickPresets();
        updateAmbientGlow();
        return;
    }

    bar.classList.remove('hidden');
    sounds.innerHTML = '';

    if (npTimer && npTimerVal) {
        if (state.timer.active) {
            npTimer.classList.remove('hidden');
            const r = getTimerShort();
            if (r) npTimerVal.textContent = r;
        } else {
            npTimer.classList.add('hidden');
        }
    }

    state.activeSounds.forEach((d, id) => {
        const el = document.createElement('div');
        el.className = 'np-sound';
        el.innerHTML = `<span>${d.sound.name}</span><button class="snd-remove" data-id="${id}"><i class="fa-solid fa-xmark"></i></button>`;
        el.querySelector('.snd-remove').addEventListener('click', e => { e.stopPropagation(); stopSound(id); });
        sounds.appendChild(el);
    });

    updatePlayerPanel();
    updateAmbientGlow();
    renderQuickPresets();
}

// ---- Player Panel (expanded) ----
function openPlayerPanel() {
    document.getElementById('playerPanel').classList.remove('hidden');
    updatePlayerPanel();
}

function closePlayerPanel() {
    document.getElementById('playerPanel').classList.add('hidden');
}

function updatePlayerPanel() {
    const body = document.getElementById('playerPanelBody');
    if (!body) return;
    body.innerHTML = '';

    state.activeSounds.forEach((d, id) => {
        const item = document.createElement('div');
        item.className = 'pp-item';

        const name = document.createElement('span');
        name.className = 'pp-name';
        name.textContent = d.sound.name;

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.className = 'pp-slider';
        slider.min = '0'; slider.max = '100'; slider.value = d.volume;
        slider.style.setProperty('--fill', d.volume + '%');

        const vol = document.createElement('span');
        vol.className = 'pp-vol';
        vol.textContent = d.volume + '%';

        const remove = document.createElement('button');
        remove.className = 'pp-remove';
        remove.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        slider.addEventListener('input', e => {
            const v = parseInt(e.target.value);
            vol.textContent = v + '%';
            e.target.style.setProperty('--fill', v + '%');
            updateSoundVolume(id, v);
        });

        remove.addEventListener('click', () => stopSound(id));

        item.append(name, slider, vol, remove);
        body.appendChild(item);
    });
}

// ---- Quick Presets ----
function renderQuickPresets() {
    const list = document.getElementById('quickPresetsList');
    if (!list) return;
    list.innerHTML = '';

    if (state.presets.length > 0) {
        state.presets.slice(0, 3).forEach((p, i) => {
            const btn = document.createElement('button');
            btn.className = 'qp-btn';
            btn.innerHTML = `<i class="fa-solid fa-bookmark"></i>${p.name}`;
            btn.addEventListener('click', () => loadPreset(i));
            list.appendChild(btn);
        });
    } else {
        recommendedPresets.forEach((p, i) => {
            const btn = document.createElement('button');
            btn.className = 'qp-btn';
            btn.innerHTML = `<i class="fa-solid ${p.icon}"></i>${p.name}`;
            btn.addEventListener('click', () => loadRecommendedPreset(i));
            list.appendChild(btn);
        });
    }

    if (state.activeSounds.size > 0) {
        const save = document.createElement('button');
        save.className = 'qp-btn accent';
        save.innerHTML = '<i class="fa-solid fa-plus"></i>保存';
        save.addEventListener('click', savePreset);
        list.appendChild(save);
    }
}

// ---- Presets ----
function openPresets() {
    const sheet = document.getElementById('presetsSheet');
    const overlay = document.getElementById('presetsOverlay');
    overlay.classList.remove('hidden');
    sheet.classList.remove('hidden');
    renderPresets();
}

function closePresets() {
    document.getElementById('presetsSheet').classList.add('hidden');
    document.getElementById('presetsOverlay').classList.add('hidden');
}

function renderPresets() {
    const list = document.getElementById('presetsList');
    if (state.presets.length === 0) {
        list.innerHTML = '<div class="empty-sheet"><i class="fa-solid fa-bookmark"></i><p>还没有保存的混音</p></div>';
        return;
    }
    list.innerHTML = '';
    state.presets.forEach((p, i) => {
        const item = document.createElement('div');
        item.className = 'preset-item';
        const names = p.sounds.map(s => { const info = findSoundById(s.id); return info ? `${info.sound.name} ${s.volume}%` : s.id; }).join(', ');
        item.innerHTML = `<div class="preset-name">${p.name}</div><div class="preset-sounds">${names}</div>
            <div class="preset-actions"><button class="sheet-btn primary" data-load="${i}"><i class="fa-solid fa-play"></i> 加载</button><button class="sheet-btn secondary" data-del="${i}"><i class="fa-solid fa-trash"></i></button></div>`;
        list.appendChild(item);
    });
    list.querySelectorAll('[data-load]').forEach(b => b.addEventListener('click', () => { loadPreset(parseInt(b.dataset.load)); closePresets(); }));
    list.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => deletePreset(parseInt(b.dataset.del))));
}

async function savePreset() {
    if (state.activeSounds.size === 0) { await showMessage('提示', '请先播放一些声音'); return; }
    const name = await showInput('保存混音', '请输入名称', `混音 ${state.presets.length + 1}`);
    if (!name) return;
    state.presets.push({
        name,
        sounds: Array.from(state.activeSounds.entries()).map(([id, d]) => ({ id, volume: d.volume })),
        createdAt: new Date().toISOString()
    });
    localStorage.setItem('ambientSoundPresets', JSON.stringify(state.presets));
    await showMessage('提示', '混音已保存');
    renderQuickPresets();
}

function loadPreset(i) {
    const p = state.presets[i];
    state.activeSounds.forEach((_, id) => stopSound(id));
    p.sounds.forEach(s => { const info = findSoundById(s.id); if (info) playSound(info.sound, info.category, s.volume); });
}

function loadRecommendedPreset(i) {
    const p = recommendedPresets[i];
    state.activeSounds.forEach((_, id) => stopSound(id));
    p.sounds.forEach(s => { const info = findSoundById(s.id); if (info) playSound(info.sound, info.category, s.volume); });
}

async function deletePreset(i) {
    const ok = await showConfirm('确认删除', '确定要删除这个混音吗？');
    if (ok) {
        state.presets.splice(i, 1);
        localStorage.setItem('ambientSoundPresets', JSON.stringify(state.presets));
        renderPresets();
    }
}

// ---- Sleep Timer ----
function openTimer() {
    document.getElementById('timerOverlay').classList.remove('hidden');
    document.getElementById('timerSheet').classList.remove('hidden');
    updateTimerUI();
}

function closeTimer() {
    document.getElementById('timerSheet').classList.add('hidden');
    document.getElementById('timerOverlay').classList.add('hidden');
}

function updateTimerUI() {
    const active = document.getElementById('timerActiveSection');
    const grid = document.getElementById('timerGrid');
    const custom = document.querySelector('.timer-custom-row');
    const btns = document.querySelectorAll('#sidebarTimer, #topbarTimer, #mobileTimer');

    if (state.timer.active) {
        active.classList.remove('hidden');
        grid.classList.add('hidden');
        custom.classList.add('hidden');
        btns.forEach(b => b?.classList.add('timer-active-indicator'));
    } else {
        active.classList.add('hidden');
        grid.classList.remove('hidden');
        custom.classList.remove('hidden');
        btns.forEach(b => b?.classList.remove('timer-active-indicator'));
    }
}

function startSleepTimer(minutes) {
    if (state.timer.active) clearTimer();
    state.timer.active = true;
    state.timer.endTime = Date.now() + minutes * 60 * 1000;
    state.timer.originalVolumes.clear();
    state.activeSounds.forEach((d, id) => state.timer.originalVolumes.set(id, d.volume));

    updateTimerUI();
    updateNowPlaying();

    state.timer.countdownInterval = setInterval(() => {
        const rem = state.timer.endTime - Date.now();
        if (rem <= 0) { updateTimerDisplay(0); } else {
            updateTimerDisplay(rem);
            const v = document.getElementById('npTimerValue');
            if (v) v.textContent = getTimerShort();
        }
    }, 1000);

    state.timer.fadeInterval = setInterval(() => {
        const rem = state.timer.endTime - Date.now();
        if (rem <= 30000 && rem > 0) {
            const p = rem / 30000;
            state.activeSounds.forEach(d => { if (d.audio) { const ov = state.timer.originalVolumes.get(d.sound.id) || d.volume; d.audio.volume = (ov / 100) * p; } });
        }
        if (rem <= 0) { stopAllSounds(); clearTimer(); closeTimer(); }
    }, 500);

    updateTimerDisplay(minutes * 60 * 1000);
}

function clearTimer() {
    state.timer.active = false;
    state.timer.endTime = null;
    if (state.timer.countdownInterval) { clearInterval(state.timer.countdownInterval); state.timer.countdownInterval = null; }
    if (state.timer.fadeInterval) { clearInterval(state.timer.fadeInterval); state.timer.fadeInterval = null; }
    state.timer.originalVolumes.forEach((v, id) => { const d = state.activeSounds.get(id); if (d?.audio) { d.audio.volume = v / 100; d.volume = v; } });
    state.timer.originalVolumes.clear();
    updateTimerUI();
    updateNowPlaying();
}

function updateTimerDisplay(ms) {
    const el = document.getElementById('timerRemaining');
    if (!el) return;
    if (ms === null || ms <= 0) { el.textContent = '00:00'; return; }
    const s = Math.floor(ms / 1000);
    el.textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

function getTimerShort() {
    if (!state.timer.active || !state.timer.endTime) return null;
    const rem = Math.max(0, state.timer.endTime - Date.now());
    const s = Math.floor(rem / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// ---- Custom Dialogs (bottom sheets) ----
function showSheet(id) {
    document.getElementById(id + 'Overlay').classList.remove('hidden');
    document.getElementById(id + 'Sheet').classList.remove('hidden');
}

function hideSheet(id) {
    document.getElementById(id + 'Sheet').classList.add('hidden');
    document.getElementById(id + 'Overlay').classList.add('hidden');
}

function showMessage(title, message) {
    return new Promise(resolve => {
        document.getElementById('messageTitle').textContent = title;
        document.getElementById('messageText').textContent = message;
        showSheet('message');
        const close = () => { hideSheet('message'); document.getElementById('messageOk').removeEventListener('click', close); resolve(); };
        document.getElementById('messageOk').addEventListener('click', close);
    });
}

function showConfirm(title, message) {
    return new Promise(resolve => {
        document.getElementById('confirmTitle').textContent = title;
        document.getElementById('confirmText').textContent = message;
        showSheet('confirm');
        const ok = () => cleanup(true);
        const cancel = () => cleanup(false);
        const cleanup = r => { hideSheet('confirm'); document.getElementById('confirmOk').removeEventListener('click', ok); document.getElementById('confirmCancel').removeEventListener('click', cancel); resolve(r); };
        document.getElementById('confirmOk').addEventListener('click', ok);
        document.getElementById('confirmCancel').addEventListener('click', cancel);
    });
}

function showInput(title, placeholder, defaultVal) {
    return new Promise(resolve => {
        document.getElementById('inputTitle').textContent = title;
        const field = document.getElementById('inputField');
        field.placeholder = placeholder;
        field.value = defaultVal || '';
        showSheet('input');
        setTimeout(() => field.focus(), 150);
        const ok = () => cleanup(field.value || null);
        const cancel = () => cleanup(null);
        const key = e => { if (e.key === 'Enter') ok(); if (e.key === 'Escape') cancel(); };
        const cleanup = r => { hideSheet('input'); document.getElementById('inputOk').removeEventListener('click', ok); document.getElementById('inputCancel').removeEventListener('click', cancel); field.removeEventListener('keydown', key); resolve(r); };
        document.getElementById('inputOk').addEventListener('click', ok);
        document.getElementById('inputCancel').addEventListener('click', cancel);
        field.addEventListener('keydown', key);
    });
}

// ---- Utility ----
function findSoundById(id) {
    for (const [cat, data] of Object.entries(soundDatabase)) {
        const s = data.sounds.find(s => s.id === id);
        if (s) return { sound: s, category: cat };
    }
    return null;
}

function saveSession() {
    localStorage.setItem('ambientSoundSession', JSON.stringify({
        sounds: Array.from(state.activeSounds.entries()).map(([id, d]) => ({ id, volume: d.volume }))
    }));
}

function loadLastSession() {
    const s = JSON.parse(localStorage.getItem('ambientSoundSession') || '{}');
    if (s.sounds?.length) {
        s.sounds.forEach(ss => {
            const info = findSoundById(ss.id);
            if (info) setTimeout(() => playSound(info.sound, info.category, ss.volume), 100);
        });
    }
}

// ---- Event Listeners ----
function initEventListeners() {
    // Theme
    document.getElementById('topbarTheme')?.addEventListener('click', toggleTheme);
    document.getElementById('mobileTheme')?.addEventListener('click', toggleTheme);

    // Sidebar navigation
    document.querySelectorAll('#sidebarNav .nav-item').forEach(n =>
        n.addEventListener('click', () => setCategory(n.dataset.category))
    );

    // Mobile pills
    document.querySelectorAll('.pill').forEach(p =>
        p.addEventListener('click', () => setCategory(p.dataset.category))
    );

    // Mobile menu toggle
    document.getElementById('menuToggle')?.addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });

    // Close sidebar on overlay tap (mobile)
    document.addEventListener('click', e => {
        const sidebar = document.getElementById('sidebar');
        const menu = document.getElementById('menuToggle');
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !menu?.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    // Timer buttons
    document.getElementById('sidebarTimer')?.addEventListener('click', openTimer);
    document.getElementById('topbarTimer')?.addEventListener('click', openTimer);
    document.getElementById('mobileTimer')?.addEventListener('click', openTimer);
    document.getElementById('cancelTimerBtn')?.addEventListener('click', () => { clearTimer(); closeTimer(); });
    document.getElementById('timerOverlay')?.addEventListener('click', closeTimer);
    document.querySelectorAll('.timer-option').forEach(b =>
        b.addEventListener('click', () => startSleepTimer(parseInt(b.dataset.minutes)))
    );
    document.getElementById('setCustomTimer')?.addEventListener('click', () => {
        const v = parseInt(document.getElementById('customTimerInput').value);
        if (v > 0 && v <= 480) { startSleepTimer(v); document.getElementById('customTimerInput').value = ''; }
    });

    // Presets
    document.getElementById('sidebarPresets')?.addEventListener('click', openPresets);
    document.getElementById('topbarPresets')?.addEventListener('click', openPresets);
    document.getElementById('mobilePresets')?.addEventListener('click', openPresets);
    document.getElementById('presetsOverlay')?.addEventListener('click', closePresets);
    document.getElementById('topbarSave')?.addEventListener('click', savePreset);

    // Now playing bar
    document.getElementById('nowPlaying')?.addEventListener('click', e => {
        if (e.target.closest('.snd-remove') || e.target.closest('.np-stop')) return;
        openPlayerPanel();
    });
    document.getElementById('npStop')?.addEventListener('click', e => { e.stopPropagation(); stopAllSounds(); });
    document.getElementById('playerPanelClose')?.addEventListener('click', closePlayerPanel);

    // Enable audio on first interaction
    document.addEventListener('click', () => { state.audioEnabled = true; }, { once: true });
}

// ---- Visibility / Session ----
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') saveSession();
    else if (document.visibilityState === 'visible') loadLastSession();
});
window.addEventListener('beforeunload', saveSession);
setTimeout(loadLastSession, 500);
