const SAVE_KEY = "ward13-current-game-v2";
const RESULTS_KEY = "ward13-results-v2";

const difficulties = {
  easy: {
    label: "쉬움",
    timeLimit: 30 * 60,
    hintPenalty: 20,
    mistakePenalty: 10,
    description: "30분. 단서가 선명하고 페널티가 낮습니다."
  },
  normal: {
    label: "보통",
    timeLimit: 22 * 60,
    hintPenalty: 45,
    mistakePenalty: 25,
    description: "22분. 표준 난이도의 공포 방탈출입니다."
  },
  nightmare: {
    label: "악몽",
    timeLimit: 15 * 60,
    hintPenalty: 80,
    mistakePenalty: 45,
    description: "15분. 단서가 불친절하고 오답 비용이 큽니다."
  },
  hell: {
    label: "지옥",
    timeLimit: 13 * 60,
    hintPenalty: 150,
    mistakePenalty: 90,
    description: "13분. 대학 수준의 수학/과학 지식 없이는 거의 풀 수 없습니다."
  }
};

const rooms = [
  {
    id: "reception",
    title: "접수실",
    mood: "먼지가 쌓인 접수 창구 너머로 멈춘 시계가 같은 초를 계속 반복합니다.",
    puzzleTitle: "야간 접수 금고",
    puzzlePrompt: "금고에는 네 자리 숫자판이 있습니다. 접수실의 시간이 아직도 남아 있습니다.",
    answer: "0315",
    reward: "녹슨 열쇠",
    hint: "벽시계의 시침과 분침을 그대로 읽어보세요.",
    hell: {
      puzzleTitle: "라마누잔 금고",
      puzzlePrompt: "금고에는 '두 양의 정수 세제곱의 합으로 두 가지 방식 표현되는 가장 작은 수'를 넣으라고 적혀 있습니다.",
      answer: "1729",
      hint: "1^3 + 12^3 = 9^3 + 10^3 입니다.",
      hotspots: [
        { id: "taxi", label: "택시 영수증", x: 35, y: 64, clue: "영수증 번호는 지워졌지만 옆에는 1^3+12^3, 9^3+10^3이 남아 있습니다." },
        { id: "hardy", label: "수학자 메모", x: 70, y: 22, clue: "메모에는 '가장 작은 택시 수는 죽은 환자의 방 번호보다 크다'라고 적혀 있습니다." },
        { id: "safe-note", label: "금고 낙서", x: 84, y: 63, clue: "세제곱 합의 두 표현이 같은 수를 만든다고 합니다. 네 자리 숫자입니다." }
      ]
    },
    hotspots: [
      { id: "clock", label: "멈춘 벽시계", x: 69, y: 21, clue: "벽시계는 03:15에서 멈춰 있습니다. 초침은 유리 안쪽을 긁고 있습니다." },
      { id: "desk", label: "접수대 장부", x: 34, y: 64, clue: "장부 마지막 줄에는 '13호는 새벽 세 시 이후 받지 말 것'이라고 적혀 있습니다." },
      { id: "cabinet", label: "철제 서랍", x: 83, y: 63, clue: "서랍 안에는 금고 번호가 시간과 함께 묶인다는 메모가 있습니다." }
    ]
  },
  {
    id: "ward",
    title: "13호 병실",
    mood: "침대 네 개가 나란히 놓여 있고, 비어 있어야 할 커튼 하나가 천천히 흔들립니다.",
    puzzleTitle: "침상 호출 장치",
    puzzlePrompt: "호출 장치는 세 자리 순서를 요구합니다. 차트 색과 침상 번호를 맞춰야 합니다.",
    answer: "241",
    reward: "퓨즈",
    hint: "빨간 표식, 흰 표식, 검은 표식을 차례로 읽으면 됩니다.",
    hell: {
      puzzleTitle: "고유값 호출 장치",
      puzzlePrompt: "간호기록에는 행렬 A=[[2,1],[1,2]]가 있고, 장치는 A의 가장 큰 고유값을 영어로 요구합니다.",
      answer: "THREE",
      hint: "det(A-lambda I)=0을 풀면 고유값은 1과 3입니다.",
      hotspots: [
        { id: "matrix", label: "행렬 차트", x: 23, y: 34, clue: "차트에는 A=[[2,1],[1,2]]와 'largest eigenvalue'라는 문구가 적혀 있습니다." },
        { id: "det", label: "혈액 묻은 계산", x: 51, y: 40, clue: "벽에는 (2-lambda)^2-1=0 이라는 식이 손톱으로 새겨져 있습니다." },
        { id: "answer-rule", label: "호출 장치 규칙", x: 51, y: 68, clue: "장치는 숫자가 아니라 영어 대문자 단어만 받습니다." }
      ]
    },
    hotspots: [
      { id: "red-chart", label: "빨간 차트", x: 22, y: 34, clue: "빨간 표식 환자는 2번 침상에 배정되어 있습니다." },
      { id: "white-chart", label: "흰 차트", x: 50, y: 39, clue: "흰 표식 환자는 4번 침상입니다. 기록지는 젖어 있지만 숫자는 선명합니다." },
      { id: "black-chart", label: "검은 차트", x: 77, y: 35, clue: "검은 표식 환자는 1번 침상입니다. 이름 칸은 비어 있습니다." },
      { id: "call-box", label: "호출 장치", x: 51, y: 68, clue: "장치 옆에는 '색의 순서: 빨강, 흰색, 검정'이라고 새겨져 있습니다." }
    ]
  },
  {
    id: "boiler",
    title: "지하 보일러실",
    mood: "물방울 소리 사이로 배관이 숨을 쉬듯 부풀었다 꺼집니다.",
    puzzleTitle: "비상 전력 패널",
    puzzlePrompt: "전력 패널이 네 글자 암호를 요구합니다. 열쇠와 퓨즈가 있어야 손잡이가 돌아갑니다.",
    answer: "DARK",
    reward: "승강기 토큰",
    requires: ["녹슨 열쇠", "퓨즈"],
    hint: "배관의 첫 글자를 왼쪽에서 오른쪽으로 읽어보세요.",
    hell: {
      puzzleTitle: "엔트로피 안전밸브",
      puzzlePrompt: "패널에는 '가역 열전달 Q/T가 부르는 상태함수의 이름'을 영어로 쓰라고 표시됩니다.",
      answer: "ENTROPY",
      hint: "열역학에서 dS = delta Q_rev / T 입니다.",
      hotspots: [
        { id: "revheat", label: "열역학 노트", x: 20, y: 41, clue: "노트에는 dS = delta Q_rev / T 라고 적혀 있습니다." },
        { id: "state", label: "상태함수 표", x: 45, y: 24, clue: "표에는 'path independent state function'이라는 문장이 보입니다." },
        { id: "panel", label: "전력 패널", x: 54, y: 55, clue: "패널은 답을 영어 단어로 입력하라고 요구합니다." },
        { id: "warning", label: "보일러 경고문", x: 82, y: 34, clue: "경고문에는 '무질서가 증가하면 문은 더 단단히 잠긴다'라고 적혀 있습니다." }
      ]
    },
    hotspots: [
      { id: "pipe-d", label: "D 배관", x: 18, y: 42, clue: "첫 번째 배관에는 D가 긁혀 있습니다." },
      { id: "pipe-a", label: "A 배관", x: 37, y: 30, clue: "두 번째 배관의 녹 사이로 A가 보입니다." },
      { id: "pipe-r", label: "R 배관", x: 61, y: 48, clue: "세 번째 배관 손잡이에는 R이 새겨져 있습니다." },
      { id: "pipe-k", label: "K 배관", x: 82, y: 35, clue: "마지막 배관 밸브 아래에는 K가 적혀 있습니다." }
    ]
  },
  {
    id: "archive",
    title: "기록보관실",
    mood: "문서함이 벽처럼 쌓인 방 한가운데, 거울 하나가 당신보다 늦게 움직입니다.",
    puzzleTitle: "최종 격리문",
    puzzlePrompt: "격리문은 네 자리 출입 코드를 요구합니다. 기록과 거울은 같은 숫자를 다른 방식으로 말합니다.",
    answer: "1313",
    reward: "탈출",
    requires: ["승강기 토큰"],
    hint: "파일 번호와 거울의 반복된 숫자를 이어 보세요.",
    hell: {
      puzzleTitle: "갈루아 격리문",
      puzzlePrompt: "문에는 '5차 일반방정식의 근호해 불가능성을 설명하는 군론의 이름'을 입력하라고 적혀 있습니다.",
      answer: "GALOIS",
      hint: "일반 5차방정식, 군론, 근호해 불가능성은 갈루아 이론의 대표적인 주제입니다.",
      hotspots: [
        { id: "quintic", label: "5차 방정식 파일", x: 27, y: 48, clue: "파일에는 'general quintic is not solvable by radicals'라고 쓰여 있습니다." },
        { id: "group", label: "군론 색인", x: 61, y: 26, clue: "색인에는 field extension, normal subgroup, solvable group이 반복됩니다." },
        { id: "mirror", label: "거울의 이름", x: 73, y: 36, clue: "거울에 G _ L O I S라는 글자가 번갈아 나타납니다. 빠진 글자는 하나입니다." },
        { id: "door", label: "격리문", x: 51, y: 67, clue: "출입문 단말기는 영어 대문자 여섯 글자를 받습니다." }
      ]
    },
    hotspots: [
      { id: "file", label: "13호 파일", x: 27, y: 48, clue: "가장 오래된 파일에는 'WARD 13'이 두 번 찍혀 있습니다." },
      { id: "mirror", label: "낡은 거울", x: 73, y: 36, clue: "거울에 입김을 불자 13:13이라는 숫자가 나타났다 사라집니다." },
      { id: "door", label: "격리문", x: 51, y: 67, clue: "출입문 단말기는 네 자리 숫자만 받습니다. 아래에는 '반복되는 병동'이라고 쓰여 있습니다." }
    ]
  }
];

let selectedDifficulty = "normal";
let state = null;
let timerId = null;
let audio = null;
let terrorTimer = null;

const $ = (selector) => document.querySelector(selector);
const setupView = $("#setupView");
const gameView = $("#gameView");
const resultsView = $("#resultsView");
const difficultyList = $("#difficultyList");
const playerNameInput = $("#playerName");
const startBtn = $("#startBtn");
const resumeBtn = $("#resumeBtn");
const soundBtn = $("#soundBtn");
const statusDifficulty = $("#statusDifficulty");
const timerEl = $("#timer");
const progressText = $("#progressText");
const roomList = $("#roomList");
const inventory = $("#inventory");
const journal = $("#journal");
const roomNumber = $("#roomNumber");
const roomTitle = $("#roomTitle");
const roomMood = $("#roomMood");
const sceneArt = $("#sceneArt");
const hotspots = $("#hotspots");
const puzzleTitle = $("#puzzleTitle");
const puzzlePrompt = $("#puzzlePrompt");
const puzzleState = $("#puzzleState");
const answerInput = $("#answerInput");
const submitAnswerBtn = $("#submitAnswerBtn");
const feedback = $("#feedback");
const clues = $("#clues");
const hintBtn = $("#hintBtn");
const resetRoomBtn = $("#resetRoomBtn");
const clearSaveBtn = $("#clearSaveBtn");
const resultTitle = $("#resultTitle");
const resultSummary = $("#resultSummary");
const resultStats = $("#resultStats");
const playAgainBtn = $("#playAgainBtn");
const showRanksBtn = $("#showRanksBtn");
const leaderboard = $("#leaderboard");
const clearResultsBtn = $("#clearResultsBtn");
const terrorFlash = $("#terrorFlash");

function init() {
  renderDifficultyCards();
  renderLeaderboard();
  resumeBtn.disabled = !loadSave();
  statusDifficulty.textContent = "-";
  progressText.textContent = `0/${rooms.length}`;
  timerEl.textContent = "--:--";
}

function activeRoom(room) {
  if (state?.difficultyKey === "hell" && room.hell) {
    return { ...room, ...room.hell, hotspots: room.hell.hotspots };
  }
  return room;
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

function startGame(fromSave = null) {
  const playerName = (playerNameInput.value || "익명 탐색자").trim().slice(0, 18);
  const difficulty = difficulties[selectedDifficulty];
  state = fromSave || {
    playerName,
    difficultyKey: selectedDifficulty,
    roomIndex: 0,
    solvedRooms: [],
    foundClues: {},
    inventory: [],
    journal: [],
    hintsUsed: 0,
    mistakes: 0,
    scares: 0,
    remainingSeconds: difficulty.timeLimit,
    startedAt: new Date().toISOString()
  };

  selectedDifficulty = state.difficultyKey;
  document.body.classList.toggle("hell-mode", state.difficultyKey === "hell");
  setupView.classList.add("hidden");
  resultsView.classList.add("hidden");
  gameView.classList.remove("hidden");
  if (!fromSave) addJournal(`탐색 시작: ${state.playerName}`);
  renderAll();
  startTimer();
  scheduleTerror();
  saveGame();
}

function startTimer() {
  window.clearInterval(timerId);
  timerId = window.setInterval(() => {
    if (!state) return;
    state.remainingSeconds -= 1;
    if (state.remainingSeconds <= 0) {
      state.remainingSeconds = 0;
      finishGame(false);
      return;
    }
    renderStatus();
    saveGame();
  }, 1000);
}

function scheduleTerror() {
  window.clearTimeout(terrorTimer);
  if (!state) return;
  const base = state.difficultyKey === "hell" ? 9000 : 16000;
  const delay = base + Math.random() * 12000;
  terrorTimer = window.setTimeout(() => {
    if (state) triggerTerror(Math.random() > 0.55 ? "얼굴" : "정전");
    scheduleTerror();
  }, delay);
}

function triggerTerror(kind) {
  if (!state) return;
  state.scares += 1;
  terrorFlash.textContent = kind === "얼굴" ? "13" : "";
  terrorFlash.className = `terror-flash show ${kind === "얼굴" ? "face" : "blackout"}`;
  document.body.classList.add("shake");
  playStinger(kind);
  window.setTimeout(() => {
    terrorFlash.className = "terror-flash";
    document.body.classList.remove("shake");
  }, 620);
}

function renderAll() {
  renderStatus();
  renderRoomList();
  renderInventory();
  renderJournal();
  renderRoom();
}

function renderStatus() {
  if (!state) return;
  statusDifficulty.textContent = difficulties[state.difficultyKey].label;
  timerEl.textContent = formatTime(state.remainingSeconds);
  progressText.textContent = `${state.solvedRooms.length}/${rooms.length}`;
  timerEl.classList.toggle("danger", state.remainingSeconds < 180);
}

function renderRoomList() {
  roomList.innerHTML = "";
  rooms.forEach((room, index) => {
    const unlocked = index <= state.solvedRooms.length;
    const done = state.solvedRooms.includes(room.id);
    const view = activeRoom(room);
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = !unlocked;
    button.className = `room-tab ${index === state.roomIndex ? "active" : ""} ${done ? "done" : ""}`;
    button.innerHTML = `<span>${index + 1}</span><strong>${view.title}<small>${done ? "해제됨" : unlocked ? "탐색 가능" : "잠김"}</small></strong><span>${done ? "완료" : ""}</span>`;
    button.addEventListener("click", () => {
      state.roomIndex = index;
      clearFeedback();
      renderAll();
      saveGame();
    });
    roomList.appendChild(button);
  });
}

function renderInventory() {
  inventory.innerHTML = "";
  if (state.inventory.length === 0) {
    inventory.innerHTML = `<span class="item-chip">비어 있음</span>`;
    return;
  }
  state.inventory.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "item-chip";
    chip.textContent = item;
    inventory.appendChild(chip);
  });
}

function renderJournal() {
  journal.innerHTML = "";
  state.journal.slice(-12).reverse().forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    journal.appendChild(item);
  });
}

function renderRoom() {
  const baseRoom = rooms[state.roomIndex];
  const room = activeRoom(baseRoom);
  const done = state.solvedRooms.includes(baseRoom.id);
  roomNumber.textContent = `Room ${state.roomIndex + 1}`;
  roomTitle.textContent = room.title;
  roomMood.textContent = room.mood;
  puzzleTitle.textContent = room.puzzleTitle;
  puzzlePrompt.textContent = room.puzzlePrompt;
  puzzleState.textContent = done ? "해제됨" : "잠김";
  puzzleState.classList.toggle("open", done);
  answerInput.disabled = done;
  submitAnswerBtn.disabled = done;
  answerInput.value = "";
  sceneArt.innerHTML = getRoomSvg(baseRoom.id, state.difficultyKey);
  renderHotspots(baseRoom, room);
  renderClues(baseRoom, room);
  clearFeedback();
}

function renderHotspots(baseRoom, room) {
  hotspots.innerHTML = "";
  const found = new Set(state.foundClues[baseRoom.id] || []);
  room.hotspots.forEach((spot) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `hotspot ${found.has(spot.id) ? "found" : ""}`;
    button.style.left = `${spot.x}%`;
    button.style.top = `${spot.y}%`;
    button.dataset.label = spot.label;
    button.textContent = found.has(spot.id) ? "✓" : "?";
    button.addEventListener("click", () => collectClue(baseRoom, room, spot));
    hotspots.appendChild(button);
  });
}

function collectClue(baseRoom, room, spot) {
  const found = state.foundClues[baseRoom.id] || [];
  if (!found.includes(spot.id)) {
    state.foundClues[baseRoom.id] = [...found, spot.id];
    addJournal(`${room.title}: ${spot.label} 조사`);
    setFeedback(spot.clue, "success");
    playTick();
    if (state.difficultyKey === "hell" && Math.random() > 0.5) triggerTerror("정전");
  } else {
    setFeedback(spot.clue, "");
  }
  renderHotspots(baseRoom, room);
  renderClues(baseRoom, room);
  saveGame();
}

function renderClues(baseRoom, room) {
  clues.innerHTML = "";
  const found = state.foundClues[baseRoom.id] || [];
  if (found.length === 0) {
    clues.innerHTML = `<div class="empty-state">아직 발견한 단서가 없습니다.</div>`;
    return;
  }
  found.forEach((id) => {
    const spot = room.hotspots.find((item) => item.id === id);
    if (!spot) return;
    const chip = document.createElement("div");
    chip.className = "clue-chip";
    chip.textContent = spot.clue;
    clues.appendChild(chip);
  });
}

function submitAnswer() {
  const baseRoom = rooms[state.roomIndex];
  const room = activeRoom(baseRoom);
  if (state.solvedRooms.includes(baseRoom.id)) return;

  const missing = (room.requires || []).filter((item) => !state.inventory.includes(item));
  if (missing.length > 0) {
    penalizeMistake();
    setFeedback(`아직 ${missing.join(", ")}이 필요합니다.`, "error");
    return;
  }

  const guess = normalizeAnswer(answerInput.value);
  if (!guess) {
    setFeedback("잠금 장치에 입력할 답을 적어주세요.", "error");
    return;
  }

  if (guess === normalizeAnswer(room.answer)) {
    solveRoom(baseRoom, room);
    return;
  }

  penalizeMistake();
  setFeedback("잠금 장치가 낮게 울립니다. 답이 맞지 않습니다.", "error");
  triggerTerror(state.difficultyKey === "hell" ? "얼굴" : "정전");
}

function solveRoom(baseRoom, room) {
  state.solvedRooms.push(baseRoom.id);
  if (room.reward && room.reward !== "탈출" && !state.inventory.includes(room.reward)) {
    state.inventory.push(room.reward);
  }
  addJournal(`${room.title} 잠금 해제`);
  setFeedback(room.reward === "탈출" ? "격리문이 열렸습니다." : `${room.reward}을 획득했습니다.`, "success");
  playSolve();

  if (room.reward === "탈출") {
    window.setTimeout(() => finishGame(true), 900);
  } else {
    state.roomIndex = Math.min(state.roomIndex + 1, rooms.length - 1);
    window.setTimeout(() => renderAll(), 720);
    saveGame();
  }
}

function useHint() {
  const room = activeRoom(rooms[state.roomIndex]);
  const difficulty = difficulties[state.difficultyKey];
  state.hintsUsed += 1;
  state.remainingSeconds = Math.max(1, state.remainingSeconds - difficulty.hintPenalty);
  addJournal(`${room.title}: 힌트 사용`);
  setFeedback(`힌트: ${room.hint}`, "");
  if (state.difficultyKey === "hell") triggerTerror("얼굴");
  renderStatus();
  saveGame();
}

function penalizeMistake() {
  const difficulty = difficulties[state.difficultyKey];
  state.mistakes += 1;
  state.remainingSeconds = Math.max(1, state.remainingSeconds - difficulty.mistakePenalty);
  playMistake();
  renderStatus();
  saveGame();
}

function finishGame(escaped) {
  window.clearInterval(timerId);
  window.clearTimeout(terrorTimer);
  const result = createResult(escaped);
  saveResult(result);
  localStorage.removeItem(SAVE_KEY);
  state = null;
  document.body.classList.remove("hell-mode", "shake");
  gameView.classList.add("hidden");
  setupView.classList.add("hidden");
  resultsView.classList.remove("hidden");
  renderResult(result);
  renderLeaderboard();
  resumeBtn.disabled = true;
}

function createResult(escaped) {
  const difficulty = difficulties[state.difficultyKey];
  const timeUsed = difficulty.timeLimit - state.remainingSeconds;
  const roomBonus = state.solvedRooms.length * 500;
  const escapeBonus = escaped ? 1500 : 0;
  const hellBonus = escaped && state.difficultyKey === "hell" ? 2500 : 0;
  const timeBonus = escaped ? state.remainingSeconds * 2 : 0;
  const penalty = state.hintsUsed * 120 + state.mistakes * 80 + state.scares * 10;
  const score = Math.max(0, roomBonus + escapeBonus + hellBonus + timeBonus - penalty);

  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    playerName: state.playerName,
    difficultyKey: state.difficultyKey,
    difficultyLabel: difficulty.label,
    escaped,
    score,
    solvedRooms: state.solvedRooms.length,
    totalRooms: rooms.length,
    timeUsed,
    remainingSeconds: state.remainingSeconds,
    hintsUsed: state.hintsUsed,
    mistakes: state.mistakes,
    scares: state.scares,
    finishedAt: new Date().toISOString()
  };
}

function renderResult(result) {
  resultTitle.textContent = result.escaped ? "탈출 성공" : "시간 초과";
  resultSummary.textContent = result.escaped
    ? `${result.playerName}님은 ${formatTime(result.timeUsed)} 만에 폐병동을 빠져나왔습니다.`
    : `${result.playerName}님은 ${result.solvedRooms}/${result.totalRooms}개의 방을 해제한 상태로 갇혔습니다.`;

  const stats = [
    ["점수", `${result.score}`],
    ["난이도", result.difficultyLabel],
    ["힌트", `${result.hintsUsed}회`],
    ["오답", `${result.mistakes}회`]
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
  const results = loadResults();
  if (results.length === 0) {
    leaderboard.innerHTML = `<div class="empty-state">아직 저장된 결과가 없습니다.</div>`;
    return;
  }

  const rows = results
    .slice()
    .sort((a, b) => b.score - a.score || a.timeUsed - b.timeUsed)
    .slice(0, 12);

  const table = document.createElement("table");
  table.className = "rank-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>순위</th>
        <th>탐색자</th>
        <th>결과</th>
        <th>난이도</th>
        <th>시간</th>
        <th>점수</th>
        <th>저장일</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");
  rows.forEach((result, index) => {
    const row = document.createElement("tr");
    [index + 1, result.playerName, result.escaped ? "성공" : "실패", result.difficultyLabel, formatTime(result.timeUsed), result.score, formatDate(result.finishedAt)].forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });

  leaderboard.innerHTML = "";
  leaderboard.appendChild(table);
}

function addJournal(message) {
  if (!state) return;
  const stamped = `${formatClock(new Date())} ${message}`;
  if (state.journal[state.journal.length - 1] !== stamped) state.journal.push(stamped);
}

function clearFeedback() {
  feedback.textContent = "";
  feedback.className = "feedback";
}

function setFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = `feedback ${type || ""}`.trim();
}

function saveGame() {
  if (state) localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveResult(result) {
  const results = loadResults();
  results.push(result);
  localStorage.setItem(RESULTS_KEY, JSON.stringify(results.slice(-40)));
}

function loadResults() {
  try {
    const raw = localStorage.getItem(RESULTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function normalizeAnswer(value) {
  return value.trim().replace(/\s+/g, "").toUpperCase();
}

function formatTime(seconds) {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60).toString().padStart(2, "0");
  const rest = Math.floor(safe % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function formatClock(date) {
  return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}

function formatDate(value) {
  const date = new Date(value);
  return `${date.getMonth() + 1}/${date.getDate()} ${formatClock(date)}`;
}

function ensureAudio() {
  if (audio) return audio;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  const ctx = new AudioContext();
  const master = ctx.createGain();
  master.gain.value = 0.18;
  master.connect(ctx.destination);

  const low = ctx.createOscillator();
  const lowGain = ctx.createGain();
  const lowFilter = ctx.createBiquadFilter();
  low.type = "sawtooth";
  low.frequency.value = 39;
  lowGain.gain.value = 0.18;
  lowFilter.type = "lowpass";
  lowFilter.frequency.value = 170;
  low.connect(lowFilter).connect(lowGain).connect(master);
  low.start();

  const pulseGain = ctx.createGain();
  pulseGain.gain.value = 0;
  pulseGain.connect(master);
  const beat = window.setInterval(() => {
    if (!audio?.enabled) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(54, now);
    osc.frequency.exponentialRampToValueAtTime(34, now + 0.18);
    osc.connect(pulseGain);
    pulseGain.gain.cancelScheduledValues(now);
    pulseGain.gain.setValueAtTime(0, now);
    pulseGain.gain.linearRampToValueAtTime(0.45, now + 0.015);
    pulseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
    osc.start(now);
    osc.stop(now + 0.34);
  }, 1180);

  audio = { ctx, master, low, beat, enabled: true };
  return audio;
}

function toggleSound() {
  const sound = ensureAudio();
  if (!sound) return;
  sound.enabled = !sound.enabled;
  sound.master.gain.setTargetAtTime(sound.enabled ? 0.18 : 0.0001, sound.ctx.currentTime, 0.08);
  soundBtn.textContent = sound.enabled ? "공포음 끄기" : "공포음 켜기";
}

function tone(freq, duration, gain = 0.2, type = "sine") {
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
  osc.stop(now + duration + 0.03);
}

function playTick() {
  tone(880, 0.08, 0.08, "triangle");
}

function playSolve() {
  tone(220, 0.18, 0.12, "sine");
  window.setTimeout(() => tone(330, 0.25, 0.1, "triangle"), 90);
}

function playMistake() {
  tone(61, 0.36, 0.26, "sawtooth");
}

function playStinger(kind) {
  tone(kind === "얼굴" ? 740 : 92, 0.18, 0.34, "sawtooth");
  window.setTimeout(() => tone(47, 0.45, 0.22, "square"), 80);
}

function getRoomSvg(roomId, difficultyKey) {
  const hell = difficultyKey === "hell";
  const tint = hell ? "#d20f2c" : "#b91f2d";
  const glow = hell ? 0.44 : 0.24;
  const shell = (content) => `
    <svg class="room-svg ${hell ? "hell-svg" : ""}" viewBox="0 0 1000 560" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="wall" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${hell ? "#22080d" : "#1b1d1b"}"/>
          <stop offset="1" stop-color="#050606"/>
        </linearGradient>
        <radialGradient id="lamp" cx="50%" cy="10%" r="70%">
          <stop offset="0" stop-color="rgba(255,230,170,.18)"/>
          <stop offset=".45" stop-color="rgba(185,31,45,${glow})"/>
          <stop offset="1" stop-color="rgba(0,0,0,.92)"/>
        </radialGradient>
        <filter id="smear"><feGaussianBlur stdDeviation="2.2"/></filter>
      </defs>
      <rect width="1000" height="560" fill="url(#wall)"/>
      <rect width="1000" height="560" fill="url(#lamp)" opacity=".55"/>
      <path d="M0 420h1000v140H0z" fill="#050606"/>
      <path class="floor-wave" d="M0 422c120-38 234-31 338-10s188 18 306-5 226-13 356 23v130H0z" fill="#0c0d0d"/>
      ${content}
      <path class="blood-drip" d="M888 0v75c0 23-27 23-27 0V0zm-64 0v132c0 34-38 34-38 0V0zm-590 0v96c0 28-31 28-31 0V0z" fill="${tint}" opacity=".55"/>
      <path d="M0 0h1000v560H0z" fill="none" stroke="rgba(255,255,255,.13)" stroke-width="2"/>
    </svg>`;

  if (roomId === "reception") {
    return shell(`
      <rect x="70" y="90" width="860" height="320" fill="#121514" stroke="#303531" stroke-width="6"/>
      <rect x="120" y="125" width="315" height="180" fill="#090b0b" stroke="#2b302d" stroke-width="5"/>
      <rect x="565" y="115" width="250" height="230" fill="#0b0d0d" stroke="#2b302d" stroke-width="5"/>
      <rect x="148" y="337" width="450" height="86" fill="#221c18" stroke="#4b4035" stroke-width="5"/>
      <rect x="638" y="248" width="160" height="176" fill="#191c1b" stroke="#343a36" stroke-width="5"/>
      <circle class="clock-hand" cx="692" cy="116" r="46" fill="#111" stroke="#b18b55" stroke-width="5"/>
      <path class="clock-hand" d="M692 116v-28M692 116h35" stroke="#ddd2bd" stroke-width="6" stroke-linecap="round"/>
      <rect x="780" y="310" width="90" height="104" fill="#121313" stroke="#4b4b45" stroke-width="5"/>
      <path d="M150 265h230" stroke="${tint}" stroke-width="13" opacity=".75"/>
      <text x="178" y="392" fill="${hell ? "#f1eee8" : "#6e5b38"}" font-size="34" font-family="monospace">${hell ? "1^3+12^3" : "03:15"}</text>
      <path class="shadow-person" d="M590 190c40-18 78 5 82 74 2 37-10 86-36 112-39-31-64-124-46-186z" fill="#020202" opacity=".68"/>
    `);
  }

  if (roomId === "ward") {
    return shell(`
      <rect x="90" y="70" width="820" height="345" fill="#151716" stroke="#2f3431" stroke-width="6"/>
      <path d="M145 105v272M355 105v272M565 105v272M775 105v272" stroke="#252a27" stroke-width="5"/>
      <g fill="#1f2321" stroke="#51564f" stroke-width="5">
        <rect x="115" y="286" width="170" height="72" rx="7"/>
        <rect x="325" y="286" width="170" height="72" rx="7"/>
        <rect x="535" y="286" width="170" height="72" rx="7"/>
        <rect x="745" y="286" width="170" height="72" rx="7"/>
      </g>
      <rect class="curtain" x="706" y="88" width="92" height="220" fill="#b8aca0" opacity=".5"/>
      <text x="410" y="165" fill="${hell ? "#f1eee8" : "#3d4640"}" font-size="35" font-family="monospace">${hell ? "[[2,1],[1,2]]" : "2 4 1"}</text>
      <rect x="452" y="373" width="96" height="54" fill="#111" stroke="#6e5b38" stroke-width="4"/>
      <circle cx="480" cy="400" r="7" fill="#b91f2d"/>
      <circle cx="501" cy="400" r="7" fill="#e4e0d8"/>
      <circle cx="522" cy="400" r="7" fill="#0a0a0a" stroke="#777"/>
      <path class="underbed" d="M735 350c54-10 95-3 126 20-51 11-96 11-135 1z" fill="#030303" opacity=".86"/>
    `);
  }

  if (roomId === "boiler") {
    return shell(`
      <rect x="80" y="70" width="840" height="350" fill="#121413" stroke="#30352f" stroke-width="6"/>
      <g fill="none" stroke-linecap="round">
        <path class="pipe-breathe" d="M90 220h250c48 0 48-70 96-70h130c48 0 48 110 96 110h250" stroke="#5e6960" stroke-width="26"/>
        <path d="M108 300h210c44 0 44 74 88 74h220c45 0 45-92 90-92h192" stroke="#38443d" stroke-width="20"/>
        <path d="M170 130v290" stroke="#243028" stroke-width="24"/>
        <path d="M820 105v315" stroke="#243028" stroke-width="24"/>
      </g>
      <rect x="420" y="190" width="170" height="155" fill="#101111" stroke="#77705e" stroke-width="6"/>
      <rect x="450" y="220" width="110" height="45" fill="#050606" stroke="#302d26" stroke-width="4"/>
      <text x="432" y="181" fill="${hell ? "#f1eee8" : "#d89b45"}" font-size="36" font-family="monospace">${hell ? "dS=dQ/T" : "DARK"}</text>
      <circle class="warning-light" cx="475" cy="304" r="17" fill="${tint}"/>
      <circle cx="535" cy="304" r="17" fill="#1a4126"/>
      <path class="steam" d="M260 410c-28-68 42-85 9-152M650 414c-36-70 42-98 7-164" stroke="#cfc6ba" stroke-width="9" opacity=".22" fill="none"/>
    `);
  }

  return shell(`
    <rect x="80" y="65" width="840" height="365" fill="#131515" stroke="#303531" stroke-width="6"/>
    <g fill="#1b1e1c" stroke="#444941" stroke-width="5">
      <rect x="105" y="105" width="170" height="285"/>
      <rect x="290" y="105" width="170" height="285"/>
      <rect x="540" y="105" width="170" height="285"/>
      <rect x="725" y="105" width="170" height="285"/>
    </g>
    <g stroke="#272b28" stroke-width="4">
      <path d="M105 170h170M105 235h170M105 300h170M290 170h170M290 235h170M290 300h170M540 170h170M540 235h170M540 300h170M725 170h170M725 235h170M725 300h170"/>
    </g>
    <rect class="mirror" x="440" y="130" width="120" height="190" fill="#060707" stroke="#8e806b" stroke-width="7"/>
    <path d="M500 138c24 42 24 124 0 176" stroke="#c7b8a2" stroke-width="4" opacity=".4" fill="none"/>
    <rect x="421" y="363" width="158" height="63" fill="#111" stroke="#5a5142" stroke-width="5"/>
    <text class="mirror-text" x="${hell ? "431" : "456"}" y="405" fill="${tint}" font-size="${hell ? "31" : "34"}" font-family="monospace">${hell ? "G_LOIS" : "13:13"}</text>
    <path class="long-hand" d="M705 175c55 52 64 144 7 203" stroke="#050505" stroke-width="22" opacity=".72" fill="none"/>
  `);
}

startBtn.addEventListener("click", () => {
  if (audio?.ctx?.state === "suspended") audio.ctx.resume();
  startGame();
});
resumeBtn.addEventListener("click", () => {
  const saved = loadSave();
  if (saved) startGame(saved);
});
soundBtn.addEventListener("click", toggleSound);
submitAnswerBtn.addEventListener("click", submitAnswer);
answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") submitAnswer();
});
hintBtn.addEventListener("click", useHint);
resetRoomBtn.addEventListener("click", () => renderRoom());
clearSaveBtn.addEventListener("click", () => {
  if (!state) return;
  window.clearInterval(timerId);
  window.clearTimeout(terrorTimer);
  localStorage.removeItem(SAVE_KEY);
  state = null;
  document.body.classList.remove("hell-mode", "shake");
  gameView.classList.add("hidden");
  resultsView.classList.add("hidden");
  setupView.classList.remove("hidden");
  resumeBtn.disabled = true;
  statusDifficulty.textContent = "-";
  progressText.textContent = `0/${rooms.length}`;
  timerEl.textContent = "--:--";
});
playAgainBtn.addEventListener("click", () => {
  setupView.classList.remove("hidden");
  resultsView.classList.add("hidden");
  statusDifficulty.textContent = "-";
  progressText.textContent = `0/${rooms.length}`;
  timerEl.textContent = "--:--";
});
showRanksBtn.addEventListener("click", () => {
  document.querySelector(".leaderboard").scrollIntoView({ behavior: "smooth", block: "start" });
});
clearResultsBtn.addEventListener("click", () => {
  localStorage.removeItem(RESULTS_KEY);
  renderLeaderboard();
});

init();
