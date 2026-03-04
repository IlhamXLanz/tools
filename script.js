// ========== JAVASCRIPT LENGKAP UNTUK 20+ TOOLS ==========

// Variables Global
let currentFormat = 'mp4';
let currentTool = null;

// ========== NAVIGATION ==========

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========== LOGIN MODAL ==========

const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Login Form
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin') {
        alert('✅ Login berhasil! Selamat datang Admin.');
        loginModal.style.display = 'none';
        showAdminBadge();
    } else {
        alert('❌ Username/password salah! Gunakan admin/admin');
    }
});

function showAdminBadge() {
    const existingBadge = document.querySelector('.admin-badge');
    if (existingBadge) existingBadge.remove();
    
    const adminBadge = document.createElement('div');
    adminBadge.className = 'admin-badge';
    adminBadge.innerHTML = '<i class="fas fa-crown"></i> Admin Mode';
    adminBadge.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--gradient);
        padding: 10px 20px;
        border-radius: 50px;
        color: white;
        font-weight: 600;
        z-index: 999;
        cursor: pointer;
        box-shadow: var(--shadow);
        animation: slideIn 0.3s;
    `;
    document.body.appendChild(adminBadge);
    
    adminBadge.addEventListener('click', () => {
        alert('👑 Admin Panel - Kamu memiliki akses penuh ke semua tools!');
    });
}

// ========== TOOL FUNCTIONS ==========

// Open tool modal
function openToolModal(tool) {
    currentTool = tool;
    closeAllModals();
    
    // Coba buka modal spesifik
    const modal = document.getElementById(`modal-${tool}`);
    
    if (modal) {
        modal.style.display = 'block';
        
        // Reset form di modal
        resetModalForm(modal);
    } else {
        // Fallback untuk tools yang belum ada modal spesifik
        alert(`🛠️ Tool ${tool} akan segera hadir! Coba TikTok atau YouTube downloader.`);
    }
}

// Close all modals
function closeAllModals() {
    const modals = document.querySelectorAll('.tool-modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
        
        // Reset progress bars
        const progressBar = modal.querySelector('.progress-bar');
        if (progressBar) progressBar.style.display = 'none';
        
        const progressFill = modal.querySelector('.progress-fill');
        if (progressFill) progressFill.style.width = '0%';
    });
}

// Reset modal form
function resetModalForm(modal) {
    const inputs = modal.querySelectorAll('input[type="text"], input[type="url"], input[type="number"], textarea');
    inputs.forEach(input => input.value = '');
    
    const selects = modal.querySelectorAll('select');
    selects.forEach(select => select.selectedIndex = 0);
    
    const results = modal.querySelectorAll('.result-container');
    results.forEach(result => result.innerHTML = '');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('tool-modal')) {
        event.target.style.display = 'none';
    }
});

// Close button for all modals
document.querySelectorAll('.close-tool').forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = this.closest('.tool-modal');
        modal.style.display = 'none';
        
        // Reset form
        resetModalForm(modal);
    });
});

// ========== FORMAT SELECTION ==========

function selectFormat(element, format) {
    currentFormat = format;
    
    // Remove active class from all format options in this modal
    const modal = element.closest('.tool-modal');
    modal.querySelectorAll('.format-option').forEach(opt => opt.classList.remove('active'));
    
    // Add active class to clicked element
    element.classList.add('active');
}

// ========== EXAMPLE URLS ==========

function setExampleUrl(tool, url) {
    const input = document.getElementById(`${tool}Url`);
    if (input) {
        input.value = url;
    }
}

// ========== PASSWORD LENGTH UPDATE ==========

function updatePasswordLength(val) {
    const span = document.getElementById('passwordLength');
    if (span) {
        span.textContent = val;
    }
}

// ========== PROCESS TOOL FUNCTIONS ==========

function processTool(tool) {
    switch(tool) {
        case 'tiktok':
            processTikTok();
            break;
        case 'youtube':
            processYouTube();
            break;
        case 'instagram':
            processInstagram();
            break;
        case 'facebook':
            processFacebook();
            break;
        case 'twitter':
            processTwitter();
            break;
        case 'whatsapp':
            processWhatsApp();
            break;
        case 'telegram':
            processTelegram();
            break;
        case 'pinterest':
            processPinterest();
            break;
        case 'soundcloud':
            processSoundCloud();
            break;
        case 'spotify':
            processSpotify();
            break;
        case 'pdf':
            processPDF();
            break;
        case 'pdf2word':
            processPDF2Word();
            break;
        case 'word2pdf':
            processWord2PDF();
            break;
        case 'pdfcompress':
            processPDFCompress();
            break;
        case 'image':
            processImage();
            break;
        case 'image2png':
            processImage2PNG();
            break;
        case 'imagecompress':
            processImageCompress();
            break;
        case 'videocompress':
            processVideoCompress();
            break;
        case 'video2mp3':
            processVideo2MP3();
            break;
        case 'qr':
            processQR();
            break;
        case 'password':
            processPassword();
            break;
        case 'converter':
            processConverter();
            break;
        case 'tts':
            processTTS();
            break;
        case 'ocr':
            processOCR();
            break;
        default:
            showResult(tool, 'Fitur dalam pengembangan!');
    }
}

// ========== TIKTOK PROCESSOR ==========

function processTikTok() {
    const url = document.getElementById('tiktokUrl')?.value;
    const resultDiv = document.getElementById('result-tiktok');
    const progressBar = document.getElementById('progress-tiktok');
    
    if (!url) {
        showError(resultDiv, 'Masukkan URL TikTok');
        return;
    }
    
    if (!url.includes('tiktok.com')) {
        showError(resultDiv, 'URL TikTok tidak valid');
        return;
    }
    
    // Show progress
    progressBar.style.display = 'block';
    showLoading(resultDiv, 'Memproses video TikTok...');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        const fill = document.querySelector('#progress-tiktok .progress-fill');
        if (fill) fill.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            
            // Show result
            resultDiv.innerHTML = `
                <div style="text-align: center; animation: fadeIn 0.5s;">
                    <i class="fas fa-check-circle" style="color: #6c5ce7; font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 1rem;">✅ Video Siap Download!</h4>
                    <div style="background: var(--darker); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <p><i class="fas fa-video" style="color: var(--primary);"></i> <strong>Judul:</strong> TikTok Video ${Math.floor(Math.random() * 1000)}</p>
                        <p><i class="fas fa-clock" style="color: var(--primary);"></i> <strong>Durasi:</strong> ${Math.floor(Math.random() * 60 + 15)} detik</p>
                        <p><i class="fas fa-database" style="color: var(--primary);"></i> <strong>Ukuran:</strong> ${(Math.random() * 10 + 3).toFixed(1)} MB</p>
                        <p><i class="fas fa-star" style="color: var(--primary);"></i> <strong>Kualitas:</strong> HD (No Watermark)</p>
                    </div>
                    <div style="display: flex; gap: 0.5rem; justify-content: center;">
                        <button onclick="simulateDownload()" class="download-btn" style="padding: 0.8rem 1.5rem; background: var(--gradient); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                            <i class="fas fa-download"></i> Download Video
                        </button>
                        <button onclick="processTikTok()" class="refresh-btn" style="padding: 0.8rem 1.5rem; background: var(--darker); border: 1px solid var(--primary); border-radius: 8px; color: var(--primary); font-weight: 600; cursor: pointer;">
                            <i class="fas fa-redo"></i> Proses Lagi
                        </button>
                    </div>
                    <p style="color: #666; font-size: 0.7rem; margin-top: 1rem;">🎯 Demo - File tidak benar-benar diunduh</p>
                </div>
            `;
        }
    }, 200);
}

// ========== YOUTUBE PROCESSOR ==========

function processYouTube() {
    const url = document.getElementById('youtubeUrl')?.value;
    const quality = document.getElementById('youtubeQuality')?.value;
    const resultDiv = document.getElementById('result-youtube');
    const progressBar = document.getElementById('progress-youtube');
    
    if (!url) {
        showError(resultDiv, 'Masukkan URL YouTube');
        return;
    }
    
    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
        showError(resultDiv, 'URL YouTube tidak valid');
        return;
    }
    
    progressBar.style.display = 'block';
    showLoading(resultDiv, 'Memproses video YouTube...');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        const fill = document.querySelector('#progress-youtube .progress-fill');
        if (fill) fill.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            
            const format = currentFormat || 'mp4';
            const sizes = {
                '1080p': '45 MB',
                '720p': '25 MB',
                '480p': '18 MB',
                '360p': '12 MB'
            };
            
            const size = format === 'mp4' ? sizes[quality] || '25 MB' : '8 MB';
            
            resultDiv.innerHTML = `
                <div style="text-align: center; animation: fadeIn 0.5s;">
                    <i class="fas fa-check-circle" style="color: #ff0000; font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h4 style="margin-bottom: 1rem;">✅ ${format.toUpperCase()} Siap Download!</h4>
                    <div style="background: var(--darker); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <p><i class="fab fa-youtube" style="color: #ff0000;"></i> <strong>Judul:</strong> YouTube Video ${Math.floor(Math.random() * 1000)}</p>
                        <p><i class="fas fa-film" style="color: #ff0000;"></i> <strong>Format:</strong> ${format.toUpperCase()}</p>
                        <p><i class="fas fa-hd" style="color: #ff0000;"></i> <strong>Kualitas:</strong> ${quality}</p>
                        <p><i class="fas fa-database" style="color: #ff0000;"></i> <strong>Ukuran:</strong> ${size}</p>
                    </div>
                    <div style="display: flex; gap: 0.5rem; justify-content: center;">
                        <button onclick="simulateDownload()" class="download-btn" style="padding: 0.8rem 1.5rem; background: #ff0000; border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                            <i class="fas fa-download"></i> Download ${format.toUpperCase()}
                        </button>
                        <button onclick="processYouTube()" class="refresh-btn" style="padding: 0.8rem 1.5rem; background: var(--darker); border: 1px solid #ff0000; border-radius: 8px; color: #ff0000; font-weight: 600; cursor: pointer;">
                            <i class="fas fa-redo"></i> Proses Lagi
                        </button>
                    </div>
                    <p style="color: #666; font-size: 0.7rem; margin-top: 1rem;">🎯 Demo - File tidak benar-benar diunduh</p>
                </div>
            `;
        }
    }, 300);
}

// ========== INSTAGRAM PROCESSOR ==========

function processInstagram() {
    const url = document.getElementById('instagramUrl')?.value;
    const type = document.getElementById('instagramType')?.value;
    const resultDiv = document.getElementById('result-instagram');
    
    if (!url) {
        showError(resultDiv, 'Masukkan URL Instagram');
        return;
    }
    
    if (!url.includes('instagram.com')) {
        showError(resultDiv, 'URL Instagram tidak valid');
        return;
    }
    
    showLoading(resultDiv, 'Mengambil data Instagram...');
    
    setTimeout(() => {
        const types = {
            'post': 'Post',
            'reels': 'Reels',
            'stories': 'Stories'
        };
        
        resultDiv.innerHTML = `
            <div style="text-align: center; animation: fadeIn 0.5s;">
                <i class="fas fa-check-circle" style="color: #e4405f; font-size: 3rem; margin-bottom: 1rem;"></i>
                <h4 style="margin-bottom: 1rem;">✅ ${types[type]} Ditemukan!</h4>
                <div style="background: var(--darker); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p><i class="fab fa-instagram" style="color: #e4405f;"></i> <strong>Username:</strong> @instagram_user</p>
                    <p><i class="fas fa-calendar" style="color: #e4405f;"></i> <strong>Tanggal:</strong> ${new Date().toLocaleDateString()}</p>
                    <p><i class="fas fa-heart" style="color: #e4405f;"></i> <strong>Likes:</strong> ${Math.floor(Math.random() * 10000)}</p>
                </div>
                <div style="display: flex; gap: 0.5rem; justify-content: center;">
                    <button onclick="simulateDownload()" style="padding: 0.8rem 1.5rem; background: #e4405f; border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                        <i class="fas fa-download"></i> Download ${types[type]}
                    </button>
                </div>
            </div>
        `;
    }, 1500);
}

// ========== PDF PROCESSOR ==========

function processPDF() {
    const tool = document.getElementById('pdfTool')?.value;
    const file = document.getElementById('pdfFile')?.files[0];
    const resultDiv = document.getElementById('result-pdf');
    
    if (!file) {
        showError(resultDiv, 'Pilih file PDF terlebih dahulu');
        return;
    }
    
    const toolNames = {
        'word': 'PDF ke Word',
        'compress': 'Compress PDF',
        'merge': 'Merge PDF',
        'split': 'Split PDF'
    };
    
    showLoading(resultDiv, `Memproses ${toolNames[tool]}...`);
    
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div style="text-align: center; animation: fadeIn 0.5s;">
                <i class="fas fa-check-circle" style="color: #f40f02; font-size: 3rem; margin-bottom: 1rem;"></i>
                <h4 style="margin-bottom: 1rem;">✅ File siap diproses!</h4>
                <div style="background: var(--darker); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p><i class="fas fa-file-pdf" style="color: #f40f02;"></i> <strong>Nama:</strong> ${file.name}</p>
                    <p><i class="fas fa-weight" style="color: #f40f02;"></i> <strong>Ukuran:</strong> ${(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    <p><i class="fas fa-tools" style="color: #f40f02;"></i> <strong>Tool:</strong> ${toolNames[tool]}</p>
                </div>
                <button onclick="simulateDownload()" style="padding: 0.8rem 1.5rem; background: #f40f02; border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                    <i class="fas fa-download"></i> Download Hasil
                </button>
            </div>
        `;
    }, 2000);
}

// ========== QR GENERATOR ==========

function processQR() {
    const text = document.getElementById('qrText')?.value;
    const color1 = document.getElementById('qrColor1')?.value || '#6c5ce7';
    const color2 = document.getElementById('qrColor2')?.value || '#ffffff';
    const resultDiv = document.getElementById('result-qr');
    
    if (!text) {
        showError(resultDiv, 'Masukkan teks atau URL');
        return;
    }
    
    showLoading(resultDiv, 'Membuat QR Code...');
    
    setTimeout(() => {
        // Generate pattern for QR code simulation
        const pattern = [];
        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                row.push(Math.random() > 0.5 ? color1 : color2);
            }
            pattern.push(row);
        }
        
        resultDiv.innerHTML = `
            <div style="text-align: center; animation: fadeIn 0.5s;">
                <div style="background: white; padding: 1rem; display: inline-block; border-radius: 10px; margin-bottom: 1rem;">
                    <div style="display: grid; grid-template-columns: repeat(5, 25px); gap: 3px; justify-content: center;">
                        ${pattern.map(row => 
                            row.map(color => 
                                `<div style="width: 25px; height: 25px; background: ${color};"></div>`
                            ).join('')
                        ).join('')}
                    </div>
                </div>
                <p style="margin-bottom: 1rem;"><strong>${text.substring(0, 30)}${text.length > 30 ? '...' : ''}</strong></p>
                <div style="display: flex; gap: 0.5rem; justify-content: center;">
                    <button onclick="simulateDownload()" style="padding: 0.8rem 1.5rem; background: var(--gradient); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                        <i class="fas fa-download"></i> Download QR
                    </button>
                    <button onclick="processQR()" style="padding: 0.8rem 1.5rem; background: var(--darker); border: 1px solid var(--primary); border-radius: 8px; color: var(--primary); font-weight: 600; cursor: pointer;">
                        <i class="fas fa-redo"></i> Generate Lagi
                    </button>
                </div>
            </div>
        `;
    }, 1000);
}

// ========== PASSWORD GENERATOR ==========

function processPassword() {
    const length = document.getElementById('passwordRange')?.value || 12;
    const useUpper = document.getElementById('includeUppercase')?.checked || false;
    const useLower = document.getElementById('includeLowercase')?.checked || false;
    const useNumbers = document.getElementById('includeNumbers')?.checked || false;
    const useSymbols = document.getElementById('includeSymbols')?.checked || false;
    const resultDiv = document.getElementById('result-password');
    
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let chars = '';
    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;
    
    if (chars === '') {
        showError(resultDiv, 'Pilih minimal 1 opsi karakter');
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    
    // Calculate strength
    let strength = 'Lemah';
    let strengthColor = '#ff6b6b';
    let score = 0;
    
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (useUpper && useLower) score++;
    if (useNumbers) score++;
    if (useSymbols) score++;
    if (useUpper && useLower && useNumbers && useSymbols && length >= 12) score += 2;
    
    if (score >= 5) {
        strength = 'Kuat';
        strengthColor = '#51cf66';
    } else if (score >= 3) {
        strength = 'Sedang';
        strengthColor = '#ffd43b';
    }
    
    resultDiv.innerHTML = `
        <div style="text-align: center; animation: fadeIn 0.5s;">
            <div style="background: var(--darker); padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                <div style="font-family: monospace; font-size: 1.5rem; word-break: break-all; margin-bottom: 0.5rem;">
                    ${password}
                </div>
                <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 0.5rem;">
                    <span style="color: ${strengthColor}; font-weight: 600;">
                        <i class="fas fa-shield-alt"></i> Kekuatan: ${strength}
                    </span>
                    <span style="color: #b0b0b0;">
                        <i class="fas fa-key"></i> Panjang: ${length}
                    </span>
                </div>
            </div>
            <div style="display: flex; gap: 0.5rem; justify-content: center;">
                <button onclick="copyToClipboard('${password}')" style="padding: 0.8rem 1.5rem; background: var(--primary); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                    <i class="fas fa-copy"></i> Copy Password
                </button>
                <button onclick="processPassword()" style="padding: 0.8rem 1.5rem; background: var(--gradient); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                    <i class="fas fa-sync"></i> Generate Lagi
                </button>
            </div>
        </div>
    `;
}

// ========== UNIT CONVERTER ==========

function processConverter() {
    const type = document.getElementById('converterType')?.value;
    const value = parseFloat(document.getElementById('converterValue')?.value);
    const from = document.getElementById('converterFrom')?.value;
    const to = document.getElementById('converterTo')?.value;
    const resultDiv = document.getElementById('result-converter');
    
    if (isNaN(value)) {
        showError(resultDiv, 'Masukkan nilai yang valid');
        return;
    }
    
    showLoading(resultDiv, 'Mengkonversi...');
    
    setTimeout(() => {
        // Simulasi konversi dengan rumus sederhana
        let result = value;
        let rate = 1;
        
        if (type === 'length') {
            const lengthRates = {
                'meter': 1,
                'cm': 0.01,
                'km': 1000,
                'inch': 0.0254,
                'feet': 0.3048
            };
            rate = lengthRates[from] / lengthRates[to];
            result = value * rate;
        } else if (type === 'weight') {
            const weightRates = {
                'kg': 1,
                'gram': 0.001,
                'mg': 0.000001,
                'pound': 0.453592,
                'ons': 0.1
            };
            rate = weightRates[from] / weightRates[to];
            result = value * rate;
        } else if (type === 'temperature') {
            if (from === 'Celsius' && to === 'Fahrenheit') {
                result = (value * 9/5) + 32;
            } else if (from === 'Celsius' && to === 'Kelvin') {
                result = value + 273.15;
            } else if (from === 'Fahrenheit' && to === 'Celsius') {
                result = (value - 32) * 5/9;
            } else if (from === 'Fahrenheit' && to === 'Kelvin') {
                result = (value - 32) * 5/9 + 273.15;
            } else if (from === 'Kelvin' && to === 'Celsius') {
                result = value - 273.15;
            } else if (from === 'Kelvin' && to === 'Fahrenheit') {
                result = (value - 273.15) * 9/5 + 32;
            } else {
                result = value;
            }
        } else if (type === 'currency') {
            // Kurs simulasi
            const kurs = {
                'IDR': 1,
                'USD': 15500,
                'EUR': 16800,
                'JPY': 105,
                'SGD': 11500
            };
            rate = kurs[from] / kurs[to];
            result = value * rate;
        }
        
        resultDiv.innerHTML = `
            <div style="text-align: center; animation: fadeIn 0.5s;">
                <i class="fas fa-check-circle" style="color: #e17055; font-size: 3rem; margin-bottom: 1rem;"></i>
                <h3 style="margin-bottom: 1rem;">Hasil Konversi</h3>
                <div style="background: var(--darker); padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">
                        ${value.toLocaleString()} ${from}
                    </p>
                    <i class="fas fa-arrow-down" style="color: var(--primary); margin: 0.5rem 0;"></i>
                    <p style="font-size: 2rem; font-weight: bold; color: var(--primary);">
                        ${result.toFixed(2)} ${to}
                    </p>
                    <p style="color: #666; font-size: 0.9rem; margin-top: 0.5rem;">
                        1 ${from} = ${(rate).toFixed(4)} ${to}
                    </p>
                </div>
                <button onclick="processConverter()" style="padding: 0.8rem 1.5rem; background: var(--gradient); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                    <i class="fas fa-redo"></i> Konversi Lagi
                </button>
            </div>
        `;
    }, 800);
}

// ========== TEXT TO SPEECH ==========

function processTTS() {
    const text = document.getElementById('ttsText')?.value;
    const lang = document.getElementById('ttsLanguage')?.value;
    const resultDiv = document.getElementById('result-tts');
    
    if (!text) {
        showError(resultDiv, 'Masukkan teks yang ingin diubah menjadi suara');
        return;
    }
    
    const languages = {
        'id': 'Indonesian',
        'en': 'English (US)',
        'en-gb': 'English (UK)',
        'ja': 'Japanese',
        'ko': 'Korean',
        'zh': 'Chinese'
    };
    
    showLoading(resultDiv, 'Memproses teks ke suara...');
    
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div style="text-align: center; animation: fadeIn 0.5s;">
                <i class="fas fa-check-circle" style="color: #6c5ce7; font-size: 3rem; margin-bottom: 1rem;"></i>
                <h4 style="margin-bottom: 1rem;">✅ Audio siap didengarkan!</h4>
                
                <div style="background: var(--darker); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <p style="margin-bottom: 1rem;"><strong>Teks:</strong> ${text.substring(0, 100)}${text.length > 100 ? '...' : ''}</p>
                    <p style="margin-bottom: 0.5rem;"><strong>Bahasa:</strong> ${languages[lang]}</p>
                    <audio controls style="width: 100%; margin-top: 1rem;">
                        <source src="#" type="audio/mpeg">
                        Browser tidak mendukung audio player
                    </audio>
                </div>
                
                <div style="display: flex; gap: 0.5rem; justify-content: center;">
                    <button onclick="simulateDownload()" style="padding: 0.8rem 1.5rem; background: var(--gradient); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                        <i class="fas fa-download"></i> Download MP3
                    </button>
                    <button onclick="processTTS()" style="padding: 0.8rem 1.5rem; background: var(--darker); border: 1px solid var(--primary); border-radius: 8px; color: var(--primary); font-weight: 600; cursor: pointer;">
                        <i class="fas fa-redo"></i> Proses Lagi
                    </button>
                </div>
                <p style="color: #666; font-size: 0.7rem; margin-top: 1rem;">🎯 Demo - Audio simulasi</p>
            </div>
        `;
    }, 2000);
}

// ========== OCR PROCESSOR ==========

function processOCR() {
    const file = document.getElementById('ocrFile')?.files[0];
    const lang = document.getElementById('ocrLanguage')?.value;
    const resultDiv = document.getElementById('result-ocr');
    
    if (!file) {
        showError(resultDiv, 'Pilih gambar terlebih dahulu');
        return;
    }
    
    showLoading(resultDiv, 'Mengekstrak teks dari gambar...');
    
    setTimeout(() => {
        const sampleTexts = [
            "Ini adalah contoh hasil OCR dari gambar yang diupload.",
            "Halo, selamat datang di NexTools!",
            "Text extraction using OCR technology.",
            "Demo OCR - Teks berhasil diekstrak dari gambar.",
            "NexTools menyediakan berbagai fitur premium gratis."
        ];
        
        const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
        
        resultDiv.innerHTML = `
            <div style="text-align: center; animation: fadeIn 0.5s;">
                <i class="fas fa-check-circle" style="color: #00b894; font-size: 3rem; margin-bottom: 1rem;"></i>
                <h4 style="margin-bottom: 1rem;">✅ Teks berhasil diekstrak!</h4>
                
                <div style="background: var(--darker); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; text-align: left;">
                    <p style="color: #b0b0b0; margin-bottom: 0.5rem;"><i class="fas fa-file-image"></i> Nama file: ${file.name}</p>
                    <p style="color: #b0b0b0; margin-bottom: 0.5rem;"><i class="fas fa-language"></i> Bahasa: ${lang === 'auto' ? 'Auto Detect' : lang === 'id' ? 'Indonesia' : 'Inggris'}</p>
                    <div style="border-top: 1px solid var(--light-gray); margin: 1rem 0;"></div>
                    <p style="font-size: 1.1rem; line-height: 1.6;">"${randomText}"</p>
                </div>
                
                <div style="display: flex; gap: 0.5rem; justify-content: center;">
                    <button onclick="copyToClipboard('${randomText}')" style="padding: 0.8rem 1.5rem; background: var(--primary); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                        <i class="fas fa-copy"></i> Copy Teks
                    </button>
                    <button onclick="simulateDownload()" style="padding: 0.8rem 1.5rem; background: #00b894; border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer;">
                        <i class="fas fa-download"></i> Download Teks
                    </button>
                </div>
            </div>
        `;
    }, 2500);
}

// ========== FALLBACK PROCESSORS ==========

function processFacebook() {
    const resultDiv = document.getElementById('result-facebook') || createTempResult();
    showComingSoon(resultDiv, 'Facebook Downloader');
}

function processTwitter() {
    const resultDiv = document.getElementById('result-twitter') || createTempResult();
    showComingSoon(resultDiv, 'Twitter Downloader');
}

function processWhatsApp() {
    const resultDiv = document.getElementById('result-whatsapp') || createTempResult();
    showComingSoon(resultDiv, 'WhatsApp Status Downloader');
}

function processTelegram() {
    const resultDiv = document.getElementById('result-telegram') || createTempResult();
    showComingSoon(resultDiv, 'Telegram Downloader');
}

function processPinterest() {
    const resultDiv = document.getElementById('result-pinterest') || createTempResult();
    showComingSoon(resultDiv, 'Pinterest Downloader');
}

function processSoundCloud() {
    const resultDiv = document.getElementById('result-soundcloud') || createTempResult();
    showComingSoon(resultDiv, 'SoundCloud Downloader');
}

function processSpotify() {
    const resultDiv = document.getElementById('result-spotify') || createTempResult();
    showComingSoon(resultDiv, 'Spotify Downloader');
}

function processPDF2Word() {
    const resultDiv = document.getElementById('result-pdf2word') || createTempResult();
    showComingSoon(resultDiv, 'PDF to Word Converter');
}

function processWord2PDF() {
    const resultDiv = document.getElementById('result-word2pdf') || createTempResult();
    showComingSoon(resultDiv, 'Word to PDF Converter');
}

function processPDFCompress() {
    const resultDiv = document.getElementById('result-pdfcompress') || createTempResult();
    showComingSoon(resultDiv, 'PDF Compressor');
}

function processImage2PNG() {
    const resultDiv = document.getElementById('result-image2png') || createTempResult();
    showComingSoon(resultDiv, 'Image to PNG Converter');
}

function processImageCompress() {
    const resultDiv = document.getElementById('result-imagecompress') || createTempResult();
    showComingSoon(resultDiv, 'Image Compressor');
}

function processVideoCompress() {
    const resultDiv = document.getElementById('result-videocompress') || createTempResult();
    showComingSoon(resultDiv, 'Video Compressor');
}

function processVideo2MP3() {
    const resultDiv = document.getElementById('result-video2mp3') || createTempResult();
    showComingSoon(resultDiv, 'Video to MP3 Converter');
}

// ========== UTILITY FUNCTIONS ==========

function showError(element, message) {
    if (element) {
        element.innerHTML = `
            <div style="text-align: center; color: #ff6b6b;">
                <i class="fas fa-exclamation-circle" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                <p>${message}</p>
            </div>
        `;
    }
}

function showLoading(element, message) {
    if (element) {
        element.innerHTML = `
            <div style="text-align: center;">
                <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--primary); margin-bottom: 0.5rem;"></i>
                <p>${message}</p>
            </div>
        `;
    }
}

function showComingSoon(element, toolName) {
    if (element) {
        element.innerHTML = `
            <div style="text-align: center;">
                <i class="fas fa-tools" style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;"></i>
                <h3 style="margin-bottom: 0.5rem;">🔧 ${toolName}</h3>
                <p style="color: #b0b0b0;">Sedang dalam pengembangan. Akan segera hadir!</p>
                <p style="color: #666; font-size: 0.8rem; margin-top: 1rem;">Coba TikTok atau YouTube downloader dulu ya!</p>
            </div>
        `;
    }
}

function createTempResult() {
    const div = document.createElement('div');
    div.className = 'result-container';
    return div;
}

function showResult(tool, message) {
    alert(`🛠️ Tool ${tool}: ${message}`);
}

// Simulate download
function simulateDownload() {
    const btn = event.target.closest('button');
    if (!btn) return;
    
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('✅ Demo: Download berhasil! (File tidak benar-benar diunduh - ini hanya simulasi)');
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 2000);
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('📋 Teks berhasil dicopy ke clipboard!');
    }).catch(err => {
        alert('Gagal copy teks');
    });
}

// ========== UNIT CONVERTER DYNAMIC OPTIONS ==========

// Update converter units based on type
const converterType = document.getElementById('converterType');
if (converterType) {
    converterType.addEventListener('change', function() {
        const type = this.value;
        const fromSelect = document.getElementById('converterFrom');
        const toSelect = document.getElementById('converterTo');
        
        let options = [];
        
        if (type === 'length') {
            options = ['meter', 'cm', 'km', 'inch', 'feet'];
        } else if (type === 'weight') {
            options = ['kg', 'gram', 'mg', 'pound', 'ons'];
        } else if (type === 'temperature') {
            options = ['Celsius', 'Fahrenheit', 'Kelvin'];
        } else if (type === 'currency') {
            options = ['IDR', 'USD', 'EUR', 'JPY', 'SGD'];
        }
        
        if (fromSelect && toSelect) {
            fromSelect.innerHTML = options.map(opt => `<option value="${opt}">${opt}</option>`).join('');
            toSelect.innerHTML = options.map(opt => `<option value="${opt}">${opt}</option>`).join('');
        }
    });
    
    // Trigger initial load
    converterType.dispatchEvent(new Event('change'));
}

// ========== CATEGORY FILTER ==========

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Update active class
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Get filter value
        const filter = this.dataset.filter;
        
        // Filter cards
        const cards = document.querySelectorAll('.tool-card');
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ========== SMOOTH SCROLL ==========

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== ACTIVE NAV LINK ON SCROLL ==========

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== COUNTER ANIMATION ==========

function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = Math.ceil(target / 50);
        
        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(animateCounter, 30);
        } else {
            counter.innerText = target;
        }
    });
}

// Start counter when in view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    observer.observe(statsSection);
}

// ========== CONTACT FORM ==========

document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('✅ Pesan berhasil dikirim! (Demo)');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// ========== NEWSLETTER FORM ==========

document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const input = e.target.querySelector('input');
    const btn = e.target.querySelector('button');
    
    if (!input.value) {
        alert('Masukkan email terlebih dahulu');
        return;
    }
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('✅ Terima kasih sudah berlangganan! (Demo)');
        input.value = '';
        btn.innerHTML = '<i class="fas fa-arrow-right"></i>';
        btn.disabled = false;
    }, 1000);
});

// ========== INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 NexTools - 20+ Premium Tools siap digunakan!');
    
    // Add animation to tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.05}s`;
        card.style.opacity = '0';
    });
    
    // Style untuk fadeInUp animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// ========== KEYBOARD SHORTCUTS ==========

document.addEventListener('keydown', (e) => {
    // Esc to close modals
    if (e.key === 'Escape') {
        closeAllModals();
    }
    
    // Ctrl/Cmd + K to focus search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Focus search if exists
    }
});
