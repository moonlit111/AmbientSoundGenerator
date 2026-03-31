// Sound Database
const soundDatabase = {
    rain: {
        name: '雨声',
        icon: 'fa-cloud-rain',
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
        name: '自然',
        icon: 'fa-tree',
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
        name: '城市',
        icon: 'fa-city',
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
        name: '交通',
        icon: 'fa-plane',
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
        name: '场所',
        icon: 'fa-location-dot',
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
        name: '动物',
        icon: 'fa-paw',
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
        name: '噪音',
        icon: 'fa-wave-square',
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
        name: '物件',
        icon: 'fa-shapes',
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

// App State
const state = {
    activeSounds: new Map(),
    currentCategory: 'all',
    currentTheme: 'light',
    presets: JSON.parse(localStorage.getItem('ambientSoundPresets') || '[]'),
    currentEditingSound: null,
    timer: {
        active: false,
        endTime: null,
        countdownInterval: null,
        fadeInterval: null,
        originalVolumes: new Map()
    }
};

// Built-in recommended presets
const recommendedPresets = [
    {
        name: '雨夜放松',
        icon: 'fa-cloud-rain',
        sounds: [
            { id: 'rain-on-windowsill', volume: 60 },
            { id: 'heavy-rain', volume: 40 }
        ]
    },
    {
        name: '森林晨曦',
        icon: 'fa-tree',
        sounds: [
            { id: 'birds', volume: 50 },
            { id: 'wind-in-trees', volume: 40 },
            { id: 'river', volume: 30 }
        ]
    },
    {
        name: '深海冥想',
        icon: 'fa-water',
        sounds: [
            { id: 'waves', volume: 60 },
            { id: 'underwater', volume: 30 }
        ]
    },
    {
        name: '咖啡馆',
        icon: 'fa-mug-hot',
        sounds: [
            { id: 'cafe', volume: 50 },
            { id: 'keyboard', volume: 30 }
        ]
    },
    {
        name: '专注工作',
        icon: 'fa-brain',
        sounds: [
            { id: 'white-noise', volume: 40 },
            { id: 'keyboard', volume: 30 }
        ]
    }
];

// Dynamic Background System
class AmbientBackground {
    constructor() {
        this.canvas = document.getElementById('ambientCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d', { alpha: true });
        this.particles = [];
        this.isRunning = false;
        this.animationId = null;
        this.currentEffect = null;
        this.lastFrameTime = 0;
        this.frameInterval = 1000 / 30; // Limit to 30fps for performance

        // Reduce particles on mobile
        this.isMobile = window.innerWidth < 768;

        this.resize();
        window.addEventListener('resize', () => {
            this.isMobile = window.innerWidth < 768;
            this.resize();
        });
    }

    resize() {
        if (!this.canvas) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.canvas.width = window.innerWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        this.ctx.scale(dpr, dpr);
    }

    start(effect) {
        if (this.currentEffect === effect && this.isRunning) return;
        this.currentEffect = effect;
        this.isRunning = true;
        this.particles = [];

        if (effect === 'rain') {
            this.initRain();
        } else if (effect === 'nature') {
            this.initLeaves();
        } else if (effect === 'waves') {
            this.initWaves();
        } else if (effect === 'fire') {
            this.initFire();
        }

        if (!this.animationId) {
            this.lastFrameTime = performance.now();
            this.animate();
        }
    }

    stop() {
        this.isRunning = false;
        this.currentEffect = null;
        this.particles = [];
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    initRain() {
        const count = this.isMobile ? 40 : 60;
        const w = window.innerWidth;
        const h = window.innerHeight;
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                speed: 4 + Math.random() * 5,
                length: 12 + Math.random() * 15,
                opacity: 0.12 + Math.random() * 0.15
            });
        }
    }

    initLeaves() {
        const count = this.isMobile ? 15 : 25;
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: 3 + Math.random() * 4,
                speedX: 0.3 + Math.random() * 0.4,
                speedY: 0.2 + Math.random() * 0.25,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.015,
                opacity: 0.2 + Math.random() * 0.25,
                color: Math.random() > 0.5 ? '#22c55e' : '#16a34a'
            });
        }
    }

    initWaves() {
        this.wavePhase = 0;
        this.waveAmplitude = 15;
        this.waveFrequency = 0.015;
    }

    initFire() {
        const count = this.isMobile ? 25 : 40;
        const w = window.innerWidth;
        const h = window.innerHeight;
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: w * 0.3 + Math.random() * w * 0.4,
                y: h + Math.random() * 80,
                size: 2 + Math.random() * 3,
                speedY: -0.8 - Math.random() * 1.5,
                speedX: (Math.random() - 0.5) * 0.4,
                opacity: 0.3 + Math.random() * 0.35,
                life: 1
            });
        }
    }

    animate(currentTime) {
        if (!this.isRunning || !this.ctx) {
            this.animationId = null;
            return;
        }

        // Frame rate limiting
        const elapsed = currentTime - this.lastFrameTime;
        if (elapsed < this.frameInterval) {
            this.animationId = requestAnimationFrame((t) => this.animate(t));
            return;
        }
        this.lastFrameTime = currentTime - (elapsed % this.frameInterval);

        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        if (this.currentEffect === 'rain') {
            this.drawRain();
        } else if (this.currentEffect === 'nature') {
            this.drawLeaves();
        } else if (this.currentEffect === 'waves') {
            this.drawWaves();
        } else if (this.currentEffect === 'fire') {
            this.drawFire();
        }

        this.animationId = requestAnimationFrame((t) => this.animate(t));
    }

    drawRain() {
        const isDark = document.body.classList.contains('dark');
        const h = window.innerHeight;
        const w = window.innerWidth;
        const ctx = this.ctx;
        const particles = this.particles;

        ctx.strokeStyle = isDark ? 'rgba(147, 197, 253, 0.2)' : 'rgba(59, 130, 246, 0.2)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        for (let i = 0, len = particles.length; i < len; i++) {
            const drop = particles[i];
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x + 0.5, drop.y + drop.length);

            drop.y += drop.speed;
            drop.x += 0.3;
            if (drop.y > h) {
                drop.y = -drop.length;
                drop.x = Math.random() * w;
            }
        }
        ctx.stroke();
    }

    drawLeaves() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const ctx = this.ctx;

        // Batch draw all leaves by color for better performance
        const greenLeaves = this.particles.filter(p => p.color === '#22c55e');
        const darkGreenLeaves = this.particles.filter(p => p.color === '#16a34a');

        // Draw green leaves batch
        ctx.fillStyle = '#22c55e';
        for (const leaf of greenLeaves) {
            ctx.globalAlpha = leaf.opacity;
            ctx.beginPath();
            // Use simpler circle instead of ellipse for performance
            ctx.arc(leaf.x, leaf.y, leaf.size * 0.6, 0, Math.PI * 2);
            ctx.fill();

            leaf.x += leaf.speedX;
            leaf.y += leaf.speedY;

            if (leaf.x > w) leaf.x = -leaf.size;
            if (leaf.y > h) {
                leaf.y = -leaf.size;
                leaf.x = Math.random() * w;
            }
        }

        // Draw dark green leaves batch
        ctx.fillStyle = '#16a34a';
        for (const leaf of darkGreenLeaves) {
            ctx.globalAlpha = leaf.opacity;
            ctx.beginPath();
            ctx.arc(leaf.x, leaf.y, leaf.size * 0.6, 0, Math.PI * 2);
            ctx.fill();

            leaf.x += leaf.speedX;
            leaf.y += leaf.speedY;

            if (leaf.x > w) leaf.x = -leaf.size;
            if (leaf.y > h) {
                leaf.y = -leaf.size;
                leaf.x = Math.random() * w;
            }
        }

        ctx.globalAlpha = 1;
    }

    drawWaves() {
        const isDark = document.body.classList.contains('dark');
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.wavePhase += 0.015;

        for (let i = 0; i < 2; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, h);

            for (let x = 0; x <= w; x += 8) {
                const y = h - 80 - i * 25 +
                    Math.sin(x * this.waveFrequency + this.wavePhase + i) * this.waveAmplitude;
                this.ctx.lineTo(x, y);
            }

            this.ctx.lineTo(w, h);
            this.ctx.closePath();

            const alpha = 0.08 - i * 0.02;
            this.ctx.fillStyle = isDark ? `rgba(56, 189, 248, ${alpha})` : `rgba(14, 165, 233, ${alpha})`;
            this.ctx.fill();
        }
    }

    drawFire() {
        const w = window.innerWidth;
        const h = window.innerHeight;

        for (const particle of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(251, 191, 36, ${particle.opacity})`;
            this.ctx.fill();

            particle.y += particle.speedY;
            particle.x += particle.speedX;
            particle.life -= 0.008;
            particle.opacity = Math.max(0, particle.life * 0.5);

            if (particle.life <= 0 || particle.y < 0) {
                particle.y = h + 20;
                particle.x = w * 0.3 + Math.random() * w * 0.4;
                particle.life = 1;
                particle.opacity = 0.3 + Math.random() * 0.35;
            }
        }
    }

    updateFromActiveSounds() {
        if (state.activeSounds.size === 0) {
            this.stop();
            return;
        }

        const categoryCount = {};
        state.activeSounds.forEach(data => {
            categoryCount[data.category] = (categoryCount[data.category] || 0) + 1;
        });

        const sorted = Object.entries(categoryCount).sort((a, b) => b[1] - a[1]);
        const dominant = sorted[0]?.[0];

        const effectMap = {
            rain: 'rain',
            nature: 'nature',
            transport: 'waves',
            places: 'fire',
            things: 'fire'
        };

        const effect = effectMap[dominant] || null;
        if (effect) {
            this.start(effect);
        } else {
            this.stop();
        }
    }
}

const ambientBg = new AmbientBackground();

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSoundGrid();
    renderQuickPresets();
    initEventListeners();
});

// Theme
function initTheme() {
    const savedTheme = localStorage.getItem('ambientSoundTheme');
    // Default to dark mode for relaxation/ambient app
    // Also respect system preference if no saved preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    state.currentTheme = savedTheme || 'dark';
    applyTheme();

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('ambientSoundTheme')) {
            state.currentTheme = e.matches ? 'dark' : 'light';
            applyTheme();
        }
    });
}

function applyTheme() {
    if (state.currentTheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    const icon = document.querySelector('#themeToggle i');
    icon.className = state.currentTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

function toggleTheme() {
    state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ambientSoundTheme', state.currentTheme);
    applyTheme();
}

// Sound Grid Rendering
function renderSoundGrid() {
    const grid = document.getElementById('soundGrid');
    grid.innerHTML = '';

    Object.entries(soundDatabase).forEach(([category, data]) => {
        if (state.currentCategory !== 'all' && state.currentCategory !== category) {
            return;
        }

        data.sounds.forEach(sound => {
            const card = createSoundCard(sound, category, sound.icon || data.icon);
            grid.appendChild(card);
        });
    });
}

function createSoundCard(sound, category, icon) {
    const card = document.createElement('div');
    card.className = 'sound-card';
    card.dataset.category = category;
    card.dataset.id = sound.id;

    const isActive = state.activeSounds.has(sound.id);
    if (isActive) {
        card.classList.add('active');
    }

    card.innerHTML = `
        <div class="sound-icon">
            <i class="fa-solid ${icon}"></i>
        </div>
        <div class="sound-name">${sound.name}</div>
        <div class="sound-category">${soundDatabase[category].name}</div>
    `;

    // Click to toggle sound
    card.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'ripple-effect';
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        card.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

        if (isActive) {
            stopSound(sound.id);
        } else {
            toggleSound(sound, category);
        }
    });

    return card;
}

// Sound Playback
function toggleSound(sound, category) {
    const soundId = sound.id;

    if (state.activeSounds.has(soundId)) {
        stopSound(soundId);
    } else {
        playSound(sound, category);
    }
}

function playSound(sound, category, volume = 50) {
    const audio = new Audio();
    audio.src = sound.file;
    audio.loop = !sound.segments;

    audio.volume = volume / 100;

    // Handle segmented audio for seamless looping
    if (sound.segments) {
        let segmentIndex = 0;
        audio.addEventListener('ended', () => {
            if (state.activeSounds.has(sound.id)) {
                segmentIndex = (segmentIndex + 1) % sound.segments.length;
                playSegment(sound.id, sound.segments[segmentIndex], volume);
            }
        });
    }

    audio.play().catch(err => {
        console.error('Playback error:', err);
    });

    state.activeSounds.set(sound.id, {
        audio,
        volume,
        category,
        sound,
        segments: sound.segments
    });

    updateSoundCard(sound.id, true, volume);
    updateNowPlayingBar();
    saveCurrentSession();
}

function playSegment(soundId, file, volume) {
    const audio = new Audio();
    audio.src = file;
    audio.volume = volume / 100;

    const soundData = state.activeSounds.get(soundId);
    if (soundData && soundData.segments) {
        let segmentIndex = soundData.segments.indexOf(file);
        audio.addEventListener('ended', () => {
            if (state.activeSounds.has(soundId)) {
                segmentIndex = (segmentIndex + 1) % soundData.segments.length;
                playSegment(soundId, soundData.segments[segmentIndex], volume);
            }
        });
    }

    audio.play().catch(err => {
        console.error('Segment playback error:', err);
    });

    if (state.activeSounds.has(soundId)) {
        state.activeSounds.get(soundId).audio = audio;
    }
}

function stopSound(soundId) {
    const soundData = state.activeSounds.get(soundId);
    if (soundData) {
        try {
            soundData.audio.pause();
            soundData.audio.src = '';
            soundData.audio = null;
        } catch (err) {
            console.error('Stop error:', err);
        }
        state.activeSounds.delete(soundId);
        updateSoundCard(soundId, false, 0);
        updateNowPlayingBar();
        saveCurrentSession();
    }
}

function updateSoundVolume(soundId, volume) {
    const soundData = state.activeSounds.get(soundId);
    if (soundData) {
        soundData.volume = volume;
        if (soundData.audio) {
            soundData.audio.volume = volume / 100;
        }
        updateSoundCard(soundId, true, volume);
        saveCurrentSession();
    }
}

function updateSoundCard(soundId, isActive, volume) {
    const card = document.querySelector(`[data-id="${soundId}"]`);
    if (card) {
        if (isActive) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
        const slider = card.querySelector('.sound-volume-slider');
        const valueDisplay = card.querySelector('.sound-volume-value');
        if (slider && valueDisplay) {
            slider.value = volume;
            valueDisplay.textContent = `${volume}%`;
        }
    }
}

// Now Playing Bar
function updateNowPlayingBar() {
    const bar = document.getElementById('nowPlayingBar');
    const container = document.getElementById('activeSounds');
    const timerBarDisplay = document.getElementById('timerBarDisplay');
    const timerBarValue = document.getElementById('timerBarValue');

    if (state.activeSounds.size === 0) {
        bar.classList.add('hidden');
        closeNowPlayingPanel();
        updateAmbientBackground();
        if (timerBarDisplay) timerBarDisplay.classList.add('hidden');
        return;
    }

    bar.classList.remove('hidden');
    container.innerHTML = '';

    // Show timer countdown in bar if active
    if (timerBarDisplay && timerBarValue) {
        if (state.timer.active) {
            timerBarDisplay.classList.remove('hidden');
            const remaining = getTimerRemainingShort();
            if (remaining) timerBarValue.textContent = remaining;
        } else {
            timerBarDisplay.classList.add('hidden');
        }
    }

    state.activeSounds.forEach((data, soundId) => {
        const chip = document.createElement('div');
        chip.className = 'active-sound-chip';
        chip.innerHTML = `
            <span>${data.sound.name}</span>
            <button class="remove-btn" data-id="${soundId}">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;

        chip.addEventListener('click', (e) => {
            e.stopPropagation();
            if (e.target.closest('.remove-btn')) {
                stopSound(soundId);
            }
        });

        container.appendChild(chip);
    });

    // Update expanded panel if open
    updateExpandedNowPlayingPanel();
    updateAmbientBackground();
    renderQuickPresets();
}

// Dynamic ambient background based on active sounds
function updateAmbientBackground() {
    // Update canvas background effect
    if (ambientBg) {
        ambientBg.updateFromActiveSounds();
    }

    const categoryColors = {
        rain: '#0ea5e9',
        nature: '#22c55e',
        urban: '#f97316',
        transport: '#a855f7',
        places: '#ec4899',
        animals: '#eab308',
        noise: '#64748b',
        things: '#06b6d4'
    };

    const container = document.querySelector('.app-container');
    if (state.activeSounds.size === 0) {
        // Reset to default accent colors
        container.style.setProperty('--ambient-1', 'var(--accent)');
        container.style.setProperty('--ambient-2', 'var(--category-rain)');
        return;
    }

    // Find the most active category
    const categoryCount = {};
    state.activeSounds.forEach(data => {
        categoryCount[data.category] = (categoryCount[data.category] || 0) + 1;
    });

    const sorted = Object.entries(categoryCount).sort((a, b) => b[1] - a[1]);
    const primaryColor = categoryColors[sorted[0][0]] || 'var(--accent)';
    const secondaryColor = sorted[1] ? (categoryColors[sorted[1][0]] || 'var(--accent)') : 'var(--accent)';

    container.style.setProperty('--ambient-1', primaryColor);
    container.style.setProperty('--ambient-2', secondaryColor);

    // Update ambient orbs directly
    const beforePseudo = container.style;
    // We need to update the CSS custom properties for the pseudo elements
    document.documentElement.style.setProperty('--ambient-orb-1', primaryColor);
    document.documentElement.style.setProperty('--ambient-orb-2', secondaryColor);
}

// Expanded Now Playing Panel
function openNowPlayingPanel() {
    const panel = document.getElementById('nowPlayingPanel');
    panel.classList.remove('hidden');
    updateExpandedNowPlayingPanel();
}

function closeNowPlayingPanel() {
    const panel = document.getElementById('nowPlayingPanel');
    panel.classList.add('hidden');
}

function updateExpandedNowPlayingPanel() {
    const container = document.getElementById('expandedActiveSounds');
    if (!container) return;

    container.innerHTML = '';

    state.activeSounds.forEach((data, soundId) => {
        const item = document.createElement('div');
        item.className = 'expanded-sound-item';
        item.innerHTML = `
            <span class="expanded-sound-name">${data.sound.name}</span>
            <input type="range" class="expanded-sound-slider" min="0" max="100" value="${data.volume}" data-sound-id="${soundId}">
            <span class="expanded-sound-volume">${data.volume}%</span>
            <button class="expanded-sound-remove" data-id="${soundId}">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;

        // Volume slider handler
        const slider = item.querySelector('.expanded-sound-slider');
        const volumeLabel = item.querySelector('.expanded-sound-volume');
        slider.addEventListener('input', (e) => {
            const volume = parseInt(e.target.value);
            volumeLabel.textContent = `${volume}%`;
            updateSoundVolume(soundId, volume);
        });

        // Remove button handler
        item.querySelector('.expanded-sound-remove').addEventListener('click', () => {
            stopSound(soundId);
        });

        container.appendChild(item);
    });
}

// Sound Editor
function openSoundEditor(sound, category, icon) {
    const modal = document.getElementById('soundEditor');
    const iconEl = document.getElementById('editorIcon');
    const title = document.getElementById('editorTitle');
    const slider = document.getElementById('volumeSlider');
    const valueDisplay = document.getElementById('volumeValue');
    const presetBtns = document.querySelectorAll('.preset-btn');

    state.currentEditingSound = sound;

    iconEl.className = `fa-solid ${icon}`;
    title.textContent = sound.name;

    const currentVolume = state.activeSounds.get(sound.id)?.volume || 50;
    slider.value = currentVolume;
    valueDisplay.textContent = `${currentVolume}%`;

    presetBtns.forEach(btn => {
        const btnVolume = parseInt(btn.dataset.volume);
        if (btnVolume === currentVolume) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    modal.classList.remove('hidden');
}

function closeSoundEditor() {
    document.getElementById('soundEditor').classList.add('hidden');
    state.currentEditingSound = null;
}

// Custom Dialog Functions
function showMessage(title, message) {
    return new Promise((resolve) => {
        const modal = document.getElementById('messageModal');
        const titleEl = document.getElementById('messageTitle');
        const textEl = document.getElementById('messageText');
        const okBtn = document.getElementById('messageOk');

        titleEl.textContent = title;
        textEl.textContent = message;
        modal.classList.remove('hidden');

        const close = () => {
            modal.classList.add('hidden');
            okBtn.removeEventListener('click', close);
            resolve();
        };

        okBtn.addEventListener('click', close);
    });
}

function showConfirm(title, message) {
    return new Promise((resolve) => {
        const modal = document.getElementById('confirmModal');
        const titleEl = document.getElementById('confirmTitle');
        const textEl = document.getElementById('confirmText');
        const okBtn = document.getElementById('confirmOk');
        const cancelBtn = document.getElementById('confirmCancel');

        titleEl.textContent = title;
        textEl.textContent = message;
        modal.classList.remove('hidden');

        const close = (result) => {
            modal.classList.add('hidden');
            okBtn.removeEventListener('click', okHandler);
            cancelBtn.removeEventListener('click', cancelHandler);
            resolve(result);
        };

        const okHandler = () => close(true);
        const cancelHandler = () => close(false);

        okBtn.addEventListener('click', okHandler);
        cancelBtn.addEventListener('click', cancelHandler);
    });
}

function showInput(title, placeholder, defaultValue = '') {
    return new Promise((resolve) => {
        const modal = document.getElementById('inputModal');
        const titleEl = document.getElementById('inputTitle');
        const inputField = document.getElementById('inputField');
        const okBtn = document.getElementById('inputOk');
        const cancelBtn = document.getElementById('inputCancel');

        titleEl.textContent = title;
        inputField.placeholder = placeholder;
        inputField.value = defaultValue;
        modal.classList.remove('hidden');

        setTimeout(() => inputField.focus(), 100);

        const close = (result) => {
            modal.classList.add('hidden');
            okBtn.removeEventListener('click', okHandler);
            cancelBtn.removeEventListener('click', cancelHandler);
            inputField.removeEventListener('keydown', keyHandler);
            resolve(result);
        };

        const okHandler = () => close(inputField.value || null);
        const cancelHandler = () => close(null);
        const keyHandler = (e) => {
            if (e.key === 'Enter') okHandler();
            if (e.key === 'Escape') cancelHandler();
        };

        okBtn.addEventListener('click', okHandler);
        cancelBtn.addEventListener('click', cancelHandler);
        inputField.addEventListener('keydown', keyHandler);
    });
}

// Presets
function openPresetsPanel() {
    closeNowPlayingPanel();
    const panel = document.getElementById('presetsPanel');
    const overlay = document.createElement('div');
    overlay.className = 'presets-overlay';
    overlay.id = 'presetsOverlay';
    document.body.appendChild(overlay);
    panel.classList.remove('hidden');
    renderPresets();

    // Click overlay to close
    overlay.addEventListener('click', closePresetsPanel);
}

function closePresetsPanel() {
    const panel = document.getElementById('presetsPanel');
    const overlay = document.getElementById('presetsOverlay');
    panel.classList.add('hidden');
    if (overlay) {
        overlay.remove();
    }
}

function renderPresets() {
    const list = document.getElementById('presetsList');

    if (state.presets.length === 0) {
        list.innerHTML = `
            <div class="empty-presets">
                <i class="fa-solid fa-bookmark"></i>
                <p>还没有保存的混音</p>
                <p>调整好音量后点击保存按钮即可保存</p>
            </div>
        `;
        return;
    }

    list.innerHTML = '';

    state.presets.forEach((preset, index) => {
        const item = document.createElement('div');
        item.className = 'preset-item';

        const soundsList = preset.sounds.map(s => {
            const soundInfo = findSoundById(s.id);
            return soundInfo ? `${soundInfo.sound.name}(${s.volume}%)` : s.id;
        }).join(', ');

        item.innerHTML = `
            <div class="preset-name">${preset.name}</div>
            <div class="preset-sounds">${soundsList}</div>
            <div class="preset-actions">
                <button class="btn primary load-preset" data-index="${index}">
                    <i class="fa-solid fa-play"></i> 加载
                </button>
                <button class="btn secondary delete-preset" data-index="${index}">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        list.appendChild(item);
    });

    list.querySelectorAll('.load-preset').forEach(btn => {
        btn.addEventListener('click', () => loadPreset(parseInt(btn.dataset.index)));
    });

    list.querySelectorAll('.delete-preset').forEach(btn => {
        btn.addEventListener('click', () => deletePreset(parseInt(btn.dataset.index)));
    });
}

async function savePreset() {
    if (state.activeSounds.size === 0) {
        await showMessage('提示', '请先播放一些声音');
        return;
    }

    const name = await showInput('保存混音', '请输入混音名称', `混音 ${state.presets.length + 1}`);
    if (!name) return;

    const preset = {
        name,
        sounds: Array.from(state.activeSounds.entries()).map(([id, data]) => ({
            id,
            volume: data.volume
        })),
        createdAt: new Date().toISOString()
    };

    state.presets.push(preset);
    localStorage.setItem('ambientSoundPresets', JSON.stringify(state.presets));

    await showMessage('提示', '混音已保存！');
    renderQuickPresets();
    openPresetsPanel();
}

function loadPreset(index) {
    const preset = state.presets[index];

    state.activeSounds.forEach((data, id) => stopSound(id));

    preset.sounds.forEach(presetSound => {
        const soundInfo = findSoundById(presetSound.id);
        if (soundInfo) {
            playSound(soundInfo.sound, soundInfo.category, presetSound.volume);
        }
    });

    closePresetsPanel();
}

// Quick Presets Functions
function renderQuickPresets() {
    const container = document.getElementById('quickPresetsList');
    if (!container) return;

    container.innerHTML = '';

    // Show user presets first
    if (state.presets.length > 0) {
        state.presets.slice(0, 3).forEach((preset, index) => {
            const btn = document.createElement('button');
            btn.className = 'quick-preset-btn';
            btn.innerHTML = `<i class="fa-solid fa-bookmark"></i>${preset.name}`;
            btn.addEventListener('click', () => {
                loadPreset(index);
            });
            container.appendChild(btn);
        });
    } else {
        // Show recommended presets
        recommendedPresets.forEach((preset, index) => {
            const btn = document.createElement('button');
            btn.className = 'quick-preset-btn';
            btn.innerHTML = `<i class="fa-solid ${preset.icon}"></i>${preset.name}`;
            btn.addEventListener('click', () => {
                loadRecommendedPreset(index);
            });
            container.appendChild(btn);
        });
    }

    // Add "save current" button if sounds are active
    if (state.activeSounds.size > 0) {
        const saveBtn = document.createElement('button');
        saveBtn.className = 'quick-preset-btn';
        saveBtn.innerHTML = '<i class="fa-solid fa-plus"></i>保存';
        saveBtn.style.background = 'var(--accent)';
        saveBtn.style.color = 'white';
        saveBtn.style.borderColor = 'var(--accent)';
        saveBtn.addEventListener('click', savePreset);
        container.appendChild(saveBtn);
    }
}

function loadRecommendedPreset(index) {
    const preset = recommendedPresets[index];

    state.activeSounds.forEach((data, id) => stopSound(id));

    preset.sounds.forEach(presetSound => {
        const soundInfo = findSoundById(presetSound.id);
        if (soundInfo) {
            playSound(soundInfo.sound, soundInfo.category, presetSound.volume);
        }
    });
}

async function deletePreset(index) {
    const confirmed = await showConfirm('确认删除', '确定要删除这个混音吗？');
    if (confirmed) {
        state.presets.splice(index, 1);
        localStorage.setItem('ambientSoundPresets', JSON.stringify(state.presets));
        renderPresets();
    }
}

function findSoundById(id) {
    for (const [category, data] of Object.entries(soundDatabase)) {
        const sound = data.sounds.find(s => s.id === id);
        if (sound) {
            return { sound, category };
        }
    }
    return null;
}

// Sleep Timer Functions
function openTimerPanel() {
    closeNowPlayingPanel();
    closePresetsPanel();
    const panel = document.getElementById('timerPanel');
    const overlay = document.createElement('div');
    overlay.className = 'timer-overlay';
    overlay.id = 'timerOverlay';
    document.body.appendChild(overlay);
    panel.classList.remove('hidden');

    // Click overlay to close
    overlay.addEventListener('click', closeTimerPanel);

    updateTimerPanelState();
}

function closeTimerPanel() {
    const panel = document.getElementById('timerPanel');
    const overlay = document.getElementById('timerOverlay');
    panel.classList.add('hidden');
    if (overlay) {
        overlay.remove();
    }
}

function updateTimerPanelState() {
    const timerActiveSection = document.getElementById('timerActive');
    const timerPresets = document.querySelector('.timer-presets');
    const timerCustom = document.querySelector('.timer-custom');
    const timerBtn = document.getElementById('sleepTimer');

    if (state.timer.active) {
        timerActiveSection.classList.remove('hidden');
        timerPresets.classList.add('hidden');
        timerCustom.classList.add('hidden');
        timerBtn.classList.add('timer-active-btn');
    } else {
        timerActiveSection.classList.add('hidden');
        timerPresets.classList.remove('hidden');
        timerCustom.classList.remove('hidden');
        timerBtn.classList.remove('timer-active-btn');
        updateTimerDisplay(null);
    }
}

function startSleepTimer(minutes) {
    if (state.timer.active) {
        clearTimer();
    }

    state.timer.active = true;
    state.timer.endTime = Date.now() + minutes * 60 * 1000;

    // Store original volumes for fade
    state.timer.originalVolumes.clear();
    state.activeSounds.forEach((data, id) => {
        state.timer.originalVolumes.set(id, data.volume);
    });

    // Update UI
    updateTimerPanelState();
    updateNowPlayingBar();

    // Start countdown display
    state.timer.countdownInterval = setInterval(() => {
        const remaining = state.timer.endTime - Date.now();
        if (remaining <= 0) {
            updateTimerDisplay(0);
        } else {
            updateTimerDisplay(remaining);
            // Update timer bar display
            const timerBarValue = document.getElementById('timerBarValue');
            if (timerBarValue) {
                timerBarValue.textContent = getTimerRemainingShort();
            }
        }
    }, 1000);

    // Start fade check (last 30 seconds)
    state.timer.fadeInterval = setInterval(() => {
        const remaining = state.timer.endTime - Date.now();
        if (remaining <= 30000 && remaining > 0) {
            const fadeProgress = remaining / 30000;
            state.activeSounds.forEach((data, id) => {
                if (data.audio) {
                    const originalVolume = state.timer.originalVolumes.get(id) || data.volume;
                    data.audio.volume = (originalVolume / 100) * fadeProgress;
                }
            });
        }
        if (remaining <= 0) {
            stopAllSounds();
            clearTimer();
            closeTimerPanel();
        }
    }, 500);

    // Update initial display
    updateTimerDisplay(minutes * 60 * 1000);
}

function clearTimer() {
    state.timer.active = false;
    state.timer.endTime = null;

    if (state.timer.countdownInterval) {
        clearInterval(state.timer.countdownInterval);
        state.timer.countdownInterval = null;
    }

    if (state.timer.fadeInterval) {
        clearInterval(state.timer.fadeInterval);
        state.timer.fadeInterval = null;
    }

    // Restore original volumes if sounds are still playing
    state.timer.originalVolumes.forEach((volume, id) => {
        const soundData = state.activeSounds.get(id);
        if (soundData && soundData.audio) {
            soundData.audio.volume = volume / 100;
            soundData.volume = volume;
        }
    });
    state.timer.originalVolumes.clear();

    updateTimerPanelState();
    updateNowPlayingBar();
}

function stopAllSounds() {
    state.activeSounds.forEach((data, id) => {
        stopSound(id);
    });
}

function updateTimerDisplay(remainingMs) {
    const display = document.getElementById('timerRemaining');
    if (!display) return;

    if (remainingMs === null || remainingMs <= 0) {
        display.textContent = '00:00';
        return;
    }

    const totalSeconds = Math.floor(remainingMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getTimerRemainingShort() {
    if (!state.timer.active || !state.timer.endTime) return null;
    const remaining = Math.max(0, state.timer.endTime - Date.now());
    const totalSeconds = Math.floor(remaining / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

// Session Persistence
function saveCurrentSession() {
    const session = {
        sounds: Array.from(state.activeSounds.entries()).map(([id, data]) => ({
            id,
            volume: data.volume
        }))
    };
    localStorage.setItem('ambientSoundSession', JSON.stringify(session));
}

function loadLastSession() {
    const session = JSON.parse(localStorage.getItem('ambientSoundSession') || '{}');
    if (session.sounds && session.sounds.length > 0) {
        session.sounds.forEach(sessionSound => {
            const soundInfo = findSoundById(sessionSound.id);
            if (soundInfo) {
                setTimeout(() => {
                    playSound(soundInfo.sound, soundInfo.category, sessionSound.volume);
                }, 100);
            }
        });
    }
}

// Event Listeners
function initEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Sleep timer
    document.getElementById('sleepTimer').addEventListener('click', openTimerPanel);
    document.getElementById('closeTimer').addEventListener('click', closeTimerPanel);

    // Timer preset buttons
    document.querySelectorAll('.timer-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const minutes = parseInt(btn.dataset.minutes);
            startSleepTimer(minutes);
        });
    });

    // Custom timer
    document.getElementById('setCustomTimer').addEventListener('click', () => {
        const input = document.getElementById('customTimerInput');
        const minutes = parseInt(input.value);
        if (minutes > 0 && minutes <= 480) {
            startSleepTimer(minutes);
            input.value = '';
        }
    });

    // Cancel timer
    document.getElementById('cancelTimerBtn').addEventListener('click', () => {
        clearTimer();
        closeTimerPanel();
    });

    // Save preset
    document.getElementById('savePreset').addEventListener('click', savePreset);

    // Saved presets button
    document.getElementById('savedPresets').addEventListener('click', openPresetsPanel);

    // Category tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.currentCategory = tab.dataset.category;
            renderSoundGrid();
        });
    });

    // Sound editor
    document.getElementById('closeEditor').addEventListener('click', closeSoundEditor);
    document.getElementById('soundEditor').addEventListener('click', (e) => {
        if (e.target.id === 'soundEditor') closeSoundEditor();
    });

    // Volume slider
    const volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', (e) => {
        const volume = parseInt(e.target.value);
        document.getElementById('volumeValue').textContent = `${volume}%`;

        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.volume) === volume);
        });

        if (state.currentEditingSound) {
            updateSoundVolume(state.currentEditingSound.id, volume);
        }
    });

    // Preset volume buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const volume = parseInt(btn.dataset.volume);
            volumeSlider.value = volume;
            document.getElementById('volumeValue').textContent = `${volume}%`;

            document.querySelectorAll('.preset-btn').forEach(b => {
                b.classList.toggle('active', parseInt(b.dataset.volume) === volume);
            });

            if (state.currentEditingSound) {
                updateSoundVolume(state.currentEditingSound.id, volume);
            }
        });
    });

    // Close presets panel
    document.getElementById('closePresets').addEventListener('click', closePresetsPanel);

    // Now playing bar - click to expand
    const nowPlayingBar = document.getElementById('nowPlayingBar');
    nowPlayingBar.addEventListener('click', (e) => {
        if (e.target.closest('.remove-btn')) return;
        openNowPlayingPanel();
    });

    nowPlayingBar.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openNowPlayingPanel();
        }
    });

    // Close expanded now playing panel
    document.getElementById('closeNowPlayingPanel').addEventListener('click', closeNowPlayingPanel);

    // Resume audio context
    document.addEventListener('click', () => {
        // Enable audio on first interaction
        state.audioEnabled = true;
    }, { once: true });
}

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        saveCurrentSession();
    } else if (document.visibilityState === 'visible') {
        loadLastSession();
    }
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    saveCurrentSession();
});

// Load session on page load
setTimeout(loadLastSession, 500);
