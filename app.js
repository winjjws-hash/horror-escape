const RESULTS_KEY = "backrooms-survival-results-v1";

const difficulties = {
  easy: {
    label: "쉬움",
    timeLimit: 210,
    playerSpeed: 178,
    ghostSpeed: 108,
    hitFear: 14,
    hitTimePenalty: 8,
    fearRate: 7,
    description: "입문용이지만 귀신이 확실히 추격합니다."
  },
  normal: {
    label: "보통",
    timeLimit: 180,
    playerSpeed: 172,
    ghostSpeed: 130,
    hitFear: 18,
    hitTimePenalty: 10,
    fearRate: 9,
    description: "열쇠 동선과 귀신 순찰을 같이 봐야 합니다."
  },
  nightmare: {
    label: "악몽",
    timeLimit: 150,
    playerSpeed: 166,
    ghostSpeed: 154,
    hitFear: 23,
    hitTimePenalty: 13,
    fearRate: 12,
    description: "귀신이 오래 추격하고 시간이 빠듯합니다."
  },
  hell: {
    label: "지옥",
    timeLimit: 120,
    playerSpeed: 160,
    ghostSpeed: 184,
    hitFear: 30,
    hitTimePenalty: 16,
    fearRate: 17,
    curse: true,
    description: "저주 괴물이 시야를 줄이고 열쇠를 빼앗습니다."
  }
};

const stages = [
  {
    title: "Level 0: 노란 복도",
    mission: "넓어진 노란 복도에서 열쇠 4개를 찾고 녹색 출구로 들어가세요.",
    theme: "yellow",
    player: { x: 76, y: 76 },
    exit: { x: 1182, y: 632, w: 58, h: 58 },
    keys: [
      { x: 1138, y: 82 },
      { x: 170, y: 642 },
      { x: 604, y: 348 },
      { x: 1036, y: 496 }
    ],
    ghosts: [
      { x: 638, y: 114, patrol: [{ x: 638, y: 114 }, { x: 638, y: 632 }] },
      { x: 310, y: 538, patrol: [{ x: 310, y: 538 }, { x: 1084, y: 538 }] },
      { x: 1004, y: 264, patrol: [{ x: 1004, y: 264 }, { x: 208, y: 264 }, { x: 208, y: 620 }] }
    ],
    walls: [
      { x: 0, y: 0, w: 1280, h: 26 },
      { x: 0, y: 694, w: 1280, h: 26 },
      { x: 0, y: 0, w: 26, h: 720 },
      { x: 1254, y: 0, w: 26, h: 720 },
      { x: 130, y: 118, w: 780, h: 24 },
      { x: 130, y: 118, w: 24, h: 304 },
      { x: 250, y: 224, w: 850, h: 24 },
      { x: 1076, y: 224, w: 24, h: 318 },
      { x: 112, y: 478, w: 590, h: 24 },
      { x: 678, y: 360, w: 24, h: 142 },
      { x: 820, y: 366, w: 286, h: 24 },
      { x: 362, y: 594, w: 566, h: 24 }
    ]
  },
  {
    title: "Level 1: 전등이 꺼진 병동",
    mission: "열쇠 5개를 모으세요. 병동 귀신은 가까워지면 더 오래 추격합니다.",
    theme: "ward",
    player: { x: 74, y: 638 },
    exit: { x: 1150, y: 58, w: 64, h: 64 },
    keys: [
      { x: 124, y: 86 },
      { x: 520, y: 104 },
      { x: 270, y: 382 },
      { x: 776, y: 610 },
      { x: 1110, y: 424 }
    ],
    ghosts: [
      { x: 502, y: 346, patrol: [{ x: 502, y: 346 }, { x: 1110, y: 346 }, { x: 1110, y: 604 }] },
      { x: 820, y: 128, patrol: [{ x: 820, y: 128 }, { x: 180, y: 128 }, { x: 180, y: 616 }] },
      { x: 344, y: 584, patrol: [{ x: 344, y: 584 }, { x: 344, y: 246 }] },
      { x: 1038, y: 536, patrol: [{ x: 1038, y: 536 }, { x: 620, y: 536 }, { x: 620, y: 176 }] }
    ],
    walls: [
      { x: 0, y: 0, w: 1280, h: 26 },
      { x: 0, y: 694, w: 1280, h: 26 },
      { x: 0, y: 0, w: 26, h: 720 },
      { x: 1254, y: 0, w: 26, h: 720 },
      { x: 124, y: 168, w: 260, h: 28 },
      { x: 426, y: 74, w: 28, h: 290 },
      { x: 562, y: 246, w: 430, h: 28 },
      { x: 188, y: 430, w: 624, h: 28 },
      { x: 812, y: 430, w: 28, h: 172 },
      { x: 80, y: 302, w: 278, h: 28 },
      { x: 1000, y: 148, w: 28, h: 300 },
      { x: 540, y: 588, w: 348, h: 28 }
    ]
  },
  {
    title: "Level 2: 출구가 움직이는 방",
    mission: "마지막 레벨입니다. 열쇠 6개를 모아 붉은 그림자와 저주 괴물을 피해 탈출하세요.",
    theme: "red",
    player: { x: 70, y: 74 },
    exit: { x: 1164, y: 620, w: 64, h: 64 },
    keys: [
      { x: 500, y: 76 },
      { x: 1110, y: 176 },
      { x: 126, y: 312 },
      { x: 492, y: 622 },
      { x: 892, y: 460 },
      { x: 1030, y: 602 }
    ],
    ghosts: [
      { x: 532, y: 328, patrol: [{ x: 532, y: 328 }, { x: 1108, y: 328 }, { x: 1108, y: 94 }] },
      { x: 238, y: 606, patrol: [{ x: 238, y: 606 }, { x: 238, y: 120 }, { x: 760, y: 120 }] },
      { x: 842, y: 604, patrol: [{ x: 842, y: 604 }, { x: 118, y: 604 }] },
      { x: 736, y: 184, patrol: [{ x: 736, y: 184 }, { x: 736, y: 528 }] },
      { x: 1068, y: 472, cursed: true, patrol: [{ x: 1068, y: 472 }, { x: 484, y: 472 }, { x: 484, y: 252 }] }
    ],
    walls: [
      { x: 0, y: 0, w: 1280, h: 26 },
      { x: 0, y: 694, w: 1280, h: 26 },
      { x: 0, y: 0, w: 26, h: 720 },
      { x: 1254, y: 0, w: 26, h: 720 },
      { x: 128, y: 118, w: 680, h: 28 },
      { x: 128, y: 118, w: 28, h: 188 },
      { x: 268, y: 252, w: 720, h: 28 },
      { x: 960, y: 252, w: 28, h: 246 },
      { x: 116, y: 406, w: 650, h: 28 },
      { x: 738, y: 406, w: 28, h: 170 },
      { x: 330, y: 568, w: 28, h: 126 },
      { x: 840, y: 114, w: 28, h: 166 },
      { x: 1038, y: 560, w: 28, h: 134 }
    ]
  }
];

const $ = (selector) => document.querySelector(selector);
const setupView = $("#setupView");
const gameView = $("#gameView");
const resultsView = $("#resultsView");
const difficultyList = $("#difficultyList");
const playerNameInput = $("#playerName");
const startBtn = $("#startBtn");
const soundBtn = $("#soundBtn");
const restartBtn = $("#restartBtn");
const stageText = $("#stageText");
const timerEl = $("#timer");
const keyText = $("#keyText");
const dangerText = $("#dangerText");
const healthText = $("#healthText");
const healthBar = $("#healthBar");
const fearText = $("#fearText");
const fearBar = $("#fearBar");
const stageTitle = $("#stageTitle");
const missionText = $("#missionText");
const eventLog = $("#eventLog");
const canvas = $("#gameCanvas");
const ctx = canvas.getContext("2d");
const overlay = $("#gameOverlay");
const results = $("#resultsView");
const resultTitle = $("#resultTitle");
const resultSummary = $("#resultSummary");
const resultStats = $("#resultStats");
const playAgainBtn = $("#playAgainBtn");
const showRanksBtn = $("#showRanksBtn");
const leaderboard = $("#leaderboard");
const clearResultsBtn = $("#clearResultsBtn");
const terrorFlash = $("#terrorFlash");
const rewardToast = $("#rewardToast");

let selectedDifficulty = "normal";
let state = null;
let audio = null;
let rafId = null;
let lastTime = 0;
let keysDown = new Set();

function init() {
  renderDifficultyCards();
  renderLeaderboard();
  renderIdleStatus();
}

function renderDifficultyCards() {
  difficultyList.innerHTML = "";
  Object.entries(difficulties).forEach(([key, difficulty]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `difficulty-card ${key === selectedDifficulty ? "active" : ""} ${key === "hell" ? "hell-card" : ""}`;
    button.innerHTML = `<strong>${difficulty.label}</strong><span>${difficulty.description}</span>`;
    button.addEventListener("click", () => {
      selectedDifficulty = key;
      renderDifficultyCards();
    });
    difficultyList.appendChild(button);
  });
}

function startGame() {
  const difficulty = difficulties[selectedDifficulty];
  state = {
    playerName: (playerNameInput.value || "익명 탐색자").trim().slice(0, 18),
    difficultyKey: selectedDifficulty,
    stageIndex: 0,
    timeLeft: difficulty.timeLimit,
    maxLives: 3,
    lives: 3,
    health: 100,
    fear: 0,
    curseTimer: 0,
    lostKeys: 0,
    danger: 0,
    keysCollected: 0,
    totalKeys: 0,
    score: 0,
    hits: 0,
    escaped: false,
    startedAt: performance.now(),
    invulnerable: 0,
    messageTimer: 3,
    log: []
  };
  setupView.classList.add("hidden");
  resultsView.classList.add("hidden");
  gameView.classList.remove("hidden");
  window.setTimeout(() => gameView.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  overlay.classList.remove("hidden");
  loadStage(0);
  addLog("형광등이 켜졌습니다. 움직이세요.");
  showReward("게임 시작", "WASD로 이동");
  lastTime = performance.now();
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(loop);
}

function loadStage(index) {
  const stage = stages[index];
  const difficulty = difficulties[state.difficultyKey];
  state.stageIndex = index;
  state.stage = structuredClone(stage);
  state.player = { x: stage.player.x, y: stage.player.y, r: 13, speed: difficulty.playerSpeed };
  state.stage.keys = state.stage.keys.map((key, keyIndex) => ({ ...key, r: 11, id: keyIndex, taken: false }));
  if (difficulty.curse) {
    state.stage.ghosts.push({
      x: canvas.width - 160,
      y: canvas.height - 160,
      cursed: true,
      patrol: [
        { x: canvas.width - 160, y: canvas.height - 160 },
        { x: canvas.width - 110, y: 110 },
        { x: 110, y: canvas.height - 110 }
      ]
    });
  }
  state.stage.ghosts = state.stage.ghosts.map((ghost, ghostIndex) => ({
    ...ghost,
    r: ghost.cursed ? 19 : 15,
    target: 0,
    speed: difficulty.ghostSpeed + index * 16 + ghostIndex * 8 + (ghost.cursed ? 24 : 0),
    pulse: Math.random() * Math.PI * 2
  }));
  state.keysCollected = 0;
  state.totalKeys = state.stage.keys.length;
  state.danger = Math.min(100, index * 16);
  document.body.dataset.stage = state.stage.theme;
  stageTitle.textContent = stage.title;
  missionText.textContent = stage.mission;
  overlay.querySelector("h2").textContent = stage.title;
  overlay.querySelector("p:last-child").textContent = stage.mission;
  overlay.classList.remove("hidden");
  window.setTimeout(() => overlay.classList.add("hidden"), 1800);
  updateHud();
}

function loop(now) {
  if (!state) return;
  const dt = Math.min(0.033, (now - lastTime) / 1000 || 0);
  lastTime = now;
  update(dt);
  if (!state) return;
  draw();
  rafId = requestAnimationFrame(loop);
}

function update(dt) {
  state.timeLeft = Math.max(0, state.timeLeft - dt);
  state.invulnerable = Math.max(0, state.invulnerable - dt);
  state.curseTimer = Math.max(0, state.curseTimer - dt);
  state.messageTimer = Math.max(0, state.messageTimer - dt);
  state.fear = Math.min(100, state.fear + calculateFearPressure() * dt);
  state.danger = Math.min(100, state.danger + dt * (2 + state.stageIndex * 1.4));
  movePlayer(dt);
  moveGhosts(dt);
  collectKeys();
  checkExit();
  if (state.timeLeft <= 0 || state.lives <= 0 || state.fear >= 100) {
    finishGame(false);
    return;
  }
  updateHud();
}

function movePlayer(dt) {
  const input = getInputVector();
  if (!input.x && !input.y) return;
  const speed = state.player.speed * (state.fear > 78 ? 0.82 : 1);
  const nextX = state.player.x + input.x * speed * dt;
  const nextY = state.player.y + input.y * speed * dt;
  moveCircleWithWalls(state.player, nextX, state.player.y);
  moveCircleWithWalls(state.player, state.player.x, nextY);
}

function moveGhosts(dt) {
  const difficulty = difficulties[state.difficultyKey];
  state.stage.ghosts.forEach((ghost) => {
    ghost.pulse += dt * 4;
    const distanceToPlayer = distance(ghost, state.player);
    let target = ghost.patrol[ghost.target];
    let speed = ghost.speed;
    if (distanceToPlayer < 230 + state.stageIndex * 38) {
      target = state.player;
      speed += 28 + state.danger * 0.32;
    } else if (distance(ghost, target) < 10) {
      ghost.target = (ghost.target + 1) % ghost.patrol.length;
      target = ghost.patrol[ghost.target];
    }

    const angle = Math.atan2(target.y - ghost.y, target.x - ghost.x);
    const nextX = ghost.x + Math.cos(angle) * speed * dt;
    const nextY = ghost.y + Math.sin(angle) * speed * dt;
    moveCircleWithWalls(ghost, nextX, ghost.y);
    moveCircleWithWalls(ghost, ghost.x, nextY);

    if (distance(ghost, state.player) < ghost.r + state.player.r + 2 && state.invulnerable <= 0) {
      state.lives = Math.max(0, state.lives - 1);
      state.health = (state.lives / state.maxLives) * 100;
      state.fear = Math.min(100, state.fear + difficulty.hitFear);
      state.timeLeft = Math.max(0, state.timeLeft - difficulty.hitTimePenalty);
      state.hits += 1;
      state.invulnerable = 1.35;
      if (ghost.cursed && state.difficultyKey === "hell") {
        cursePlayer();
      }
      addLog(`귀신에게 닿았습니다. 목숨 ${state.lives}/${state.maxLives}`);
      triggerTerror("잡힘");
      playStinger();
    }
  });
}

function collectKeys() {
  state.stage.keys.forEach((key) => {
    if (key.taken) return;
    if (distance(key, state.player) < key.r + state.player.r + 6) {
      key.taken = true;
      state.keysCollected += 1;
      state.score += 450 + state.stageIndex * 160;
      state.fear = Math.max(0, state.fear - 8);
      addLog(`열쇠 획득 ${state.keysCollected}/${state.totalKeys}`);
      showReward("열쇠 획득", `${state.keysCollected}/${state.totalKeys}`);
      playPickup();
      if (state.keysCollected === state.totalKeys) {
        addLog("출구 잠금이 풀렸습니다.");
        showReward("출구 개방", "녹색 문으로 이동");
      }
    }
  });
}

function cursePlayer() {
  state.curseTimer = 8;
  state.fear = Math.min(100, state.fear + 10);
  const takenKey = [...state.stage.keys].reverse().find((key) => key.taken);
  if (takenKey) {
    const drop = findOpenKeyDrop();
    takenKey.taken = false;
    takenKey.x = drop.x;
    takenKey.y = drop.y;
    state.keysCollected = Math.max(0, state.keysCollected - 1);
    state.lostKeys += 1;
    addLog("저주 괴물이 열쇠 하나를 빼앗았습니다.");
    showReward("저주 발동", "시야 감소 + 열쇠 분실");
  } else {
    addLog("저주 괴물이 시야를 어둡게 만들었습니다.");
    showReward("저주 발동", "시야 감소");
  }
}

function findOpenKeyDrop() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const point = {
      x: clamp(state.player.x + 180 - Math.random() * 360, 70, canvas.width - 70),
      y: clamp(state.player.y + 160 - Math.random() * 320, 70, canvas.height - 70),
      r: 13
    };
    if (!state.stage.walls.some((wall) => circleRectCollision(point, wall))) return point;
  }
  return { x: 70, y: canvas.height - 70 };
}

function checkExit() {
  const exit = state.stage.exit;
  const insideExit =
    state.player.x > exit.x &&
    state.player.x < exit.x + exit.w &&
    state.player.y > exit.y &&
    state.player.y < exit.y + exit.h;
  if (!insideExit || state.keysCollected < state.totalKeys) return;

  state.score += 1200 + Math.round(state.timeLeft * 8);
  if (state.stageIndex === stages.length - 1) {
    finishGame(true);
    return;
  }
  addLog("다음 레벨로 떨어졌습니다.");
  triggerTerror("전환");
  loadStage(state.stageIndex + 1);
}

function moveCircleWithWalls(entity, x, y) {
  const oldX = entity.x;
  const oldY = entity.y;
  entity.x = clamp(x, entity.r + 2, canvas.width - entity.r - 2);
  entity.y = clamp(y, entity.r + 2, canvas.height - entity.r - 2);
  for (const wall of state.stage.walls) {
    if (circleRectCollision(entity, wall)) {
      entity.x = oldX;
      entity.y = oldY;
      return;
    }
  }
}

function getInputVector() {
  let x = 0;
  let y = 0;
  if (keysDown.has("w") || keysDown.has("arrowup")) y -= 1;
  if (keysDown.has("s") || keysDown.has("arrowdown")) y += 1;
  if (keysDown.has("a") || keysDown.has("arrowleft")) x -= 1;
  if (keysDown.has("d") || keysDown.has("arrowright")) x += 1;
  const length = Math.hypot(x, y);
  return length ? { x: x / length, y: y / length } : { x: 0, y: 0 };
}

function calculateFearPressure() {
  const closest = Math.min(...state.stage.ghosts.map((ghost) => distance(ghost, state.player)));
  const proximity = Math.max(0, 1 - closest / 270);
  return difficulties[state.difficultyKey].fearRate * proximity + state.stageIndex * 0.9;
}

function updateHud() {
  stageText.textContent = `${state.stageIndex + 1}/${stages.length}`;
  timerEl.textContent = formatTime(Math.ceil(state.timeLeft));
  keyText.textContent = `${state.keysCollected}/${state.totalKeys}`;
  dangerText.textContent = `${Math.round(state.danger)}%`;
  healthText.textContent = `${state.lives}/${state.maxLives}`;
  fearText.textContent = `${Math.round(state.fear)}%`;
  healthBar.style.width = `${state.health}%`;
  fearBar.style.width = `${state.fear}%`;
  dangerText.classList.toggle("danger", state.danger > 74);
  timerEl.classList.toggle("danger", state.timeLeft < 30);
}

function renderIdleStatus() {
  stageText.textContent = `0/${stages.length}`;
  timerEl.textContent = "--:--";
  keyText.textContent = "0/0";
  dangerText.textContent = "0%";
}

function draw() {
  const stage = state.stage;
  drawBackground(stage.theme);
  stage.walls.forEach(drawWall);
  drawExit(stage.exit, state.keysCollected === state.totalKeys);
  stage.keys.forEach((key) => {
    if (!key.taken) drawKey(key);
  });
  stage.ghosts.forEach(drawGhost);
  drawPlayer();
  drawLightMask();
  drawMiniMessage();
}

function drawBackground(theme) {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  if (theme === "yellow") {
    gradient.addColorStop(0, "#403516");
    gradient.addColorStop(1, "#161006");
  } else if (theme === "ward") {
    gradient.addColorStop(0, "#111818");
    gradient.addColorStop(1, "#050706");
  } else {
    gradient.addColorStop(0, "#1b090b");
    gradient.addColorStop(1, "#050303");
  }
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = theme === "yellow" ? 0.17 : 0.11;
  ctx.strokeStyle = theme === "yellow" ? "#d8bd64" : "#8da8bd";
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 48) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + Math.sin(performance.now() / 900 + x) * 6, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 48) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawWall(wall) {
  ctx.fillStyle = "rgba(3, 4, 4, 0.86)";
  ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
  ctx.strokeStyle = "rgba(216, 155, 69, 0.18)";
  ctx.strokeRect(wall.x + 0.5, wall.y + 0.5, wall.w - 1, wall.h - 1);
}

function drawExit(exit, open) {
  ctx.save();
  ctx.fillStyle = open ? "rgba(83, 213, 116, 0.34)" : "rgba(108, 30, 38, 0.32)";
  ctx.strokeStyle = open ? "#65d77c" : "#8d2732";
  ctx.lineWidth = 4;
  ctx.shadowColor = open ? "rgba(83, 213, 116, 0.7)" : "rgba(185, 31, 45, 0.42)";
  ctx.shadowBlur = 18;
  roundRect(exit.x, exit.y, exit.w, exit.h, 6);
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = open ? "#d7ffd8" : "#e7a3a8";
  ctx.font = "bold 16px Segoe UI, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(open ? "EXIT" : "LOCK", exit.x + exit.w / 2, exit.y + exit.h / 2 + 5);
  ctx.restore();
}

function drawKey(key) {
  const pulse = 1 + Math.sin(performance.now() / 180) * 0.12;
  ctx.save();
  ctx.translate(key.x, key.y);
  ctx.scale(pulse, pulse);
  ctx.shadowColor = "rgba(255, 216, 91, 0.8)";
  ctx.shadowBlur = 18;
  ctx.strokeStyle = "#ffd85b";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(-7, 0, 7, 0, Math.PI * 2);
  ctx.moveTo(0, 0);
  ctx.lineTo(18, 0);
  ctx.moveTo(11, 0);
  ctx.lineTo(11, 8);
  ctx.moveTo(18, 0);
  ctx.lineTo(18, 7);
  ctx.stroke();
  ctx.restore();
}

function drawGhost(ghost) {
  ctx.save();
  ctx.translate(ghost.x, ghost.y);
  const breathe = 1 + Math.sin(ghost.pulse) * 0.08;
  ctx.scale(breathe, breathe);
  ctx.shadowColor = ghost.cursed ? "rgba(164, 83, 255, 0.62)" : "rgba(255, 255, 255, 0.28)";
  ctx.shadowBlur = ghost.cursed ? 28 : 18;
  ctx.fillStyle = ghost.cursed ? "rgba(22, 4, 34, 0.95)" : "rgba(4, 4, 4, 0.92)";
  ctx.beginPath();
  ctx.arc(0, -4, ghost.r + 5, Math.PI, 0);
  ctx.lineTo(ghost.r + 5, ghost.r + 6);
  ctx.quadraticCurveTo(ghost.r * 0.5, ghost.r, 0, ghost.r + 6);
  ctx.quadraticCurveTo(-ghost.r * 0.5, ghost.r, -ghost.r - 5, ghost.r + 6);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = ghost.cursed ? "#b86cff" : state.stage.theme === "red" ? "#ff2a42" : "#d7172b";
  ctx.beginPath();
  ctx.arc(-6, -3, 2.8, 0, Math.PI * 2);
  ctx.arc(6, -3, 2.8, 0, Math.PI * 2);
  ctx.fill();
  if (ghost.cursed) {
    ctx.strokeStyle = "rgba(184, 108, 255, 0.82)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 2, ghost.r + 10, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawPlayer() {
  const flash = state.invulnerable > 0 && Math.floor(performance.now() / 80) % 2 === 0;
  ctx.save();
  ctx.translate(state.player.x, state.player.y);
  ctx.shadowColor = "rgba(76, 166, 168, 0.7)";
  ctx.shadowBlur = 16;
  ctx.fillStyle = flash ? "rgba(255, 255, 255, 0.62)" : "#d7c4a3";
  ctx.beginPath();
  ctx.arc(0, 0, state.player.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#273234";
  ctx.fillRect(-5, -3, 10, 12);
  ctx.restore();
}

function drawLightMask() {
  ctx.save();
  const cursePenalty = state.curseTimer > 0 ? 68 : 0;
  const radius = Math.max(58, 190 - state.fear * 0.6 - cursePenalty);
  const gradient = ctx.createRadialGradient(state.player.x, state.player.y, 20, state.player.x, state.player.y, radius);
  gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(0.58, "rgba(0, 0, 0, 0.06)");
  gradient.addColorStop(1, state.curseTimer > 0 ? "rgba(0, 0, 0, 0.92)" : "rgba(0, 0, 0, 0.78)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = state.curseTimer > 0 ? "rgba(20, 0, 34, 0.38)" : "rgba(0, 0, 0, 0.22)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function drawMiniMessage() {
  if (state.keysCollected === state.totalKeys) return;
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.52)";
  roundRect(24, 22, 300, 38, 7);
  ctx.fill();
  ctx.fillStyle = "#d7c4a3";
  ctx.font = "bold 15px Segoe UI, sans-serif";
  ctx.fillText("열쇠를 모두 모아야 출구가 열립니다.", 42, 47);
  ctx.restore();
}

function finishGame(escaped) {
  if (!state) return;
  cancelAnimationFrame(rafId);
  const result = makeResult(escaped);
  saveResult(result);
  state = null;
  gameView.classList.add("hidden");
  setupView.classList.add("hidden");
  resultsView.classList.remove("hidden");
  document.body.removeAttribute("data-stage");
  renderResult(result);
  renderLeaderboard();
}

function makeResult(escaped) {
  const difficulty = difficulties[state.difficultyKey];
  const timeUsed = difficulty.timeLimit - state.timeLeft;
  const survivalBonus = Math.round(state.lives * 520 + Math.max(0, 100 - state.fear) * 7);
  const escapeBonus = escaped ? 3200 : 0;
  const stageBonus = (state.stageIndex + (escaped ? 1 : 0)) * 900;
  const score = Math.max(0, Math.round(state.score + survivalBonus + escapeBonus + stageBonus + state.timeLeft * 10 - state.hits * 180));
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    playerName: state.playerName,
    difficultyLabel: difficulty.label,
    escaped,
    score,
    stage: escaped ? stages.length : state.stageIndex + 1,
    timeUsed,
    lives: state.lives,
    maxLives: state.maxLives,
    health: state.health,
    fear: state.fear,
    hits: state.hits,
    lostKeys: state.lostKeys,
    finishedAt: new Date().toISOString()
  };
}

function renderResult(result) {
  resultTitle.textContent = result.escaped ? "백룸 탈출 성공" : "백룸에 삼켜짐";
  resultSummary.textContent = result.escaped
    ? `${result.playerName}님은 ${formatTime(result.timeUsed)} 만에 귀신을 피해 출구를 찾았습니다.`
    : `${result.playerName}님은 Level ${result.stage}에서 길을 잃었습니다.`;

  const stats = [
    ["점수", result.score],
    ["난이도", result.difficultyLabel],
    ["목숨", `${result.lives}/${result.maxLives || 3}`],
    ["공포", `${Math.round(result.fear)}%`]
  ];
  resultStats.innerHTML = "";
  stats.forEach(([label, value]) => {
    const card = document.createElement("div");
    card.className = "result-stat";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    resultStats.appendChild(card);
  });
}

function renderLeaderboard() {
  const saved = loadResults();
  if (saved.length === 0) {
    leaderboard.innerHTML = `<div class="empty-state">아직 저장된 결과가 없습니다.</div>`;
    return;
  }
  const rows = saved.sort((a, b) => b.score - a.score).slice(0, 10);
  const table = document.createElement("table");
  table.className = "rank-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>순위</th>
        <th>탐색자</th>
        <th>결과</th>
        <th>레벨</th>
        <th>시간</th>
        <th>점수</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");
  rows.forEach((result, index) => {
    const row = document.createElement("tr");
    [index + 1, result.playerName, result.escaped ? "탈출" : "실패", `${result.stage}/${stages.length}`, formatTime(result.timeUsed), result.score].forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  leaderboard.innerHTML = "";
  leaderboard.appendChild(table);
}

function addLog(message) {
  state.log.push(message);
  state.log = state.log.slice(-6);
  eventLog.innerHTML = "";
  state.log.slice().reverse().forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    eventLog.appendChild(item);
  });
}

function showReward(title, detail) {
  rewardToast.innerHTML = `<strong>${title}</strong><span>${detail}</span>`;
  rewardToast.classList.remove("show");
  void rewardToast.offsetWidth;
  rewardToast.classList.add("show");
}

function triggerTerror(label) {
  terrorFlash.textContent = label === "잡힘" ? "RUN" : "";
  terrorFlash.className = "terror-flash show corridor";
  document.body.classList.add("shake");
  window.setTimeout(() => {
    terrorFlash.className = "terror-flash";
    document.body.classList.remove("shake");
  }, 620);
}

function ensureAudio() {
  if (audio) return audio;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  const ctxAudio = new AudioContext();
  const master = ctxAudio.createGain();
  master.gain.value = 0.16;
  master.connect(ctxAudio.destination);
  const low = ctxAudio.createOscillator();
  const lowGain = ctxAudio.createGain();
  low.type = "sawtooth";
  low.frequency.value = 45;
  lowGain.gain.value = 0.12;
  low.connect(lowGain).connect(master);
  low.start();
  audio = { ctx: ctxAudio, master, low, enabled: true };
  return audio;
}

function toggleSound() {
  const sound = ensureAudio();
  if (!sound) return;
  sound.enabled = !sound.enabled;
  sound.master.gain.setTargetAtTime(sound.enabled ? 0.16 : 0.0001, sound.ctx.currentTime, 0.08);
  soundBtn.textContent = sound.enabled ? "공포음 끄기" : "공포음 켜기";
}

function tone(freq, duration, gain = 0.18, type = "sine") {
  const sound = audio?.enabled ? audio : null;
  if (!sound) return;
  const now = sound.ctx.currentTime;
  const osc = sound.ctx.createOscillator();
  const amp = sound.ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  amp.gain.setValueAtTime(0.0001, now);
  amp.gain.exponentialRampToValueAtTime(gain, now + 0.015);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(amp).connect(sound.master);
  osc.start(now);
  osc.stop(now + duration + 0.04);
}

function playPickup() {
  tone(740, 0.08, 0.1, "triangle");
  window.setTimeout(() => tone(980, 0.1, 0.08, "triangle"), 80);
}

function playStinger() {
  tone(68, 0.3, 0.22, "sawtooth");
  window.setTimeout(() => tone(41, 0.42, 0.18, "square"), 80);
}

function saveResult(result) {
  const saved = loadResults();
  saved.push(result);
  localStorage.setItem(RESULTS_KEY, JSON.stringify(saved.slice(-30)));
}

function loadResults() {
  try {
    const raw = localStorage.getItem(RESULTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function circleRectCollision(circle, rect) {
  const closestX = clamp(circle.x, rect.x, rect.x + rect.w);
  const closestY = clamp(circle.y, rect.y, rect.y + rect.h);
  return distance(circle, { x: closestX, y: closestY }) < circle.r;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function roundRect(x, y, w, h, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60).toString().padStart(2, "0");
  const rest = (safe % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
    event.preventDefault();
    keysDown.add(key);
  }
});

window.addEventListener("keyup", (event) => {
  keysDown.delete(event.key.toLowerCase());
});

startBtn.addEventListener("click", () => {
  if (audio?.ctx?.state === "suspended") audio.ctx.resume();
  startGame();
});
soundBtn.addEventListener("click", toggleSound);
restartBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", () => {
  results.classList.add("hidden");
  setupView.classList.remove("hidden");
  renderIdleStatus();
});
showRanksBtn.addEventListener("click", () => {
  document.querySelector(".leaderboard").scrollIntoView({ behavior: "smooth", block: "start" });
});
clearResultsBtn.addEventListener("click", () => {
  localStorage.removeItem(RESULTS_KEY);
  renderLeaderboard();
});

init();
