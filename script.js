const categories = {
  jobs: {
    label: "อาชีพ",
    words: [
      "พระ",
      "ทหาร",
      "ครู",
      "มือปืน",
      "หมอ",
      "พยาบาล",
      "ตำรวจ",
      "เชฟ",
      "นักบิน",
      "นักร้อง",
      "นักแสดง",
      "ช่างภาพ",
      "โปรแกรมเมอร์",
      "นักดับเพลิง",
      "ชาวนา",
      "คนขับแท็กซี่",
      "นักข่าว",
      "ช่างตัดผม",
      "นักมวย",
      "นักมายากล",
      "สถาปนิก",
      "นักบัญชี",
      "ไกด์",
      "แม่ค้า",
      "นักวิทยาศาสตร์",
    ],
  },
  instruments: {
    label: "เครื่องดนตรี",
    words: [
      "กลอง",
      "กีตาร์",
      "เปียโน",
      "ไวโอลิน",
      "แซกโซโฟน",
      "ทรัมเป็ต",
      "ขลุ่ย",
      "เบส",
      "อูคูเลเล่",
      "ฮาร์ป",
      "ระนาด",
      "ซอ",
      "ฉิ่ง",
      "ฉาบ",
      "ออร์แกน",
      "คีย์บอร์ด",
      "เชลโล",
      "คาฮอง",
      "เมโลเดียน",
      "พิณ",
    ],
  },
  foods: {
    label: "อาหาร",
    words: [
      "พิซซ่า",
      "ซูชิ",
      "กล้วย",
      "ผัดไทย",
      "ส้มตำ",
      "ข้าวมันไก่",
      "ราเมง",
      "เบอร์เกอร์",
      "ไอศกรีม",
      "โดนัท",
      "ต้มยำกุ้ง",
      "หมูกระทะ",
      "กะเพรา",
      "ข้าวเหนียวมะม่วง",
      "ไข่เจียว",
      "ลาซานญ่า",
      "ทาโก้",
      "แพนเค้ก",
      "ลูกชิ้น",
      "ชาบู",
    ],
  },
  cartoons: {
    label: "ตัวละครการ์ตูน",
    words: [
      "ลูฟี่",
      "ปิกาจู",
      "เจอรี่",
      "โดราเอมอน",
      "โนบิตะ",
      "ชินจัง",
      "โคนัน",
      "นารูโตะ",
      "โกคู",
      "มิกกี้เมาส์",
      "สพันจ์บ็อบ",
      "เอลซ่า",
      "มาริโอ้",
      "โซนิค",
      "ทอม",
      "เบ็นเท็น",
      "ซิมบ้า",
      "อาราเล่",
      "อุลตร้าแมน",
      "เซเลอร์มูน",
    ],
  },
  sports: {
    label: "กีฬา",
    words: [
      "บาส",
      "ฟุตบอล",
      "ว่ายน้ำ",
      "แบดมินตัน",
      "เทนนิส",
      "วอลเลย์บอล",
      "มวย",
      "ปิงปอง",
      "กอล์ฟ",
      "วิ่ง",
      "ขี่จักรยาน",
      "เบสบอล",
      "รักบี้",
      "ยิงธนู",
      "สเก็ตบอร์ด",
      "โต้คลื่น",
      "ยิมนาสติก",
      "ฟุตซอล",
      "ปีนหน้าผา",
      "โบว์ลิ่ง",
    ],
  },
  places: {
    label: "สถานที่",
    words: [
      "วัด",
      "โรงพยาบาล",
      "โรงเรียน",
      "สนามบิน",
      "สวนสนุก",
      "ห้าง",
      "ทะเล",
      "ภูเขา",
      "ตลาด",
      "โรงหนัง",
      "พิพิธภัณฑ์",
      "สถานีรถไฟ",
      "ห้องสมุด",
      "สวนสัตว์",
      "ร้านกาแฟ",
      "สนามกีฬา",
      "ธนาคาร",
      "โรงแรม",
      "มหาวิทยาลัย",
      "สถานีตำรวจ",
    ],
  },
};

const elements = {
  resetButtons: document.querySelectorAll("[data-reset], [data-reset-bottom]"),
  playerCount: document.querySelector("[data-player-count]"),
  categorySelect: document.querySelector("[data-category-select]"),
  randomWord: document.querySelector("[data-random-word]"),
  setupSection: document.querySelector("[data-setup-section]"),
  revealSection: document.querySelector("[data-reveal-section]"),
  categoryTitle: document.querySelector("[data-category-title]"),
  wordPreview: document.querySelector("[data-word-preview]"),
  stageLabel: document.querySelector("[data-stage-label]"),
  panelTitle: document.querySelector("[data-panel-title]"),
  panelText: document.querySelector("[data-panel-text]"),
  secretDisplay: document.querySelector("[data-secret-display]"),
  secretWord: document.querySelector("[data-secret-word]"),
  playerGrid: document.querySelector("[data-player-grid]"),
  playerTemplate: document.querySelector("[data-player-template]"),
  revealProgress: document.querySelector("[data-reveal-progress]"),
  finishPanel: document.querySelector("[data-finish-panel]"),
  modal: document.querySelector("[data-modal]"),
  modalPlayer: document.querySelector("[data-modal-player]"),
  modalWord: document.querySelector("[data-modal-word]"),
  modalHint: document.querySelector("[data-modal-hint]"),
  hideRole: document.querySelector("[data-hide-role]"),
};

const state = {
  playerCount: 4,
  categoryKey: "jobs",
  secretWord: "",
  imposterIndex: -1,
  revealed: [],
};

let activeRevealIndex = null;

function init() {
  renderCategoryOptions();
  updateCategoryPreview();
  resetGame();

  elements.categorySelect.addEventListener("change", () => {
    state.categoryKey = elements.categorySelect.value;
    updateCategoryPreview();
  });

  elements.playerCount.addEventListener("input", () => {
    const value = clampPlayerCount(elements.playerCount.value);
    state.playerCount = value;
  });

  elements.randomWord.addEventListener("click", startRound);
  elements.hideRole.addEventListener("click", hideRole);
  elements.modal.addEventListener("click", (event) => {
    if (event.target === elements.modal) hideRole();
  });
  elements.resetButtons.forEach((button) => button.addEventListener("click", resetGame));
}

function renderCategoryOptions() {
  elements.categorySelect.innerHTML = Object.entries(categories)
    .map(([key, category]) => `<option value="${key}">${category.label}</option>`)
    .join("");
  elements.categorySelect.value = state.categoryKey;
}

function updateCategoryPreview() {
  const category = categories[state.categoryKey];
  elements.categoryTitle.textContent = category.label;
  elements.wordPreview.innerHTML = category.words
    .slice(0, 10)
    .map((word) => `<span>${word}</span>`)
    .join("");
}

function startRound() {
  state.playerCount = clampPlayerCount(elements.playerCount.value);
  elements.playerCount.value = state.playerCount;
  state.categoryKey = elements.categorySelect.value;
  state.secretWord = pickRandom(categories[state.categoryKey].words);
  state.imposterIndex = Math.floor(Math.random() * state.playerCount);
  state.revealed = Array.from({ length: state.playerCount }, () => false);

  elements.setupSection.classList.add("is-hidden");
  elements.revealSection.classList.remove("is-hidden");
  elements.secretDisplay.classList.add("is-visible");
  elements.secretWord.textContent = state.secretWord;
  elements.stageLabel.textContent = "ขั้นตอนที่ 2 จาก 3";
  elements.panelTitle.textContent = `หมวด ${categories[state.categoryKey].label}`;
  elements.panelText.textContent = "ส่งเครื่องให้ผู้เล่นแต่ละคนกดดูคำ ห้ามให้คนอื่นเห็นหน้าจอ";

  renderPlayers();
  updateProgress();
}

function renderPlayers() {
  elements.playerGrid.innerHTML = "";

  state.revealed.forEach((isRevealed, index) => {
    const node = elements.playerTemplate.content.firstElementChild.cloneNode(true);
    const button = node.querySelector("[data-reveal-button]");
    node.querySelector("[data-player-label]").textContent = `ผู้เล่น ${index + 1}`;
    node.querySelector("[data-player-status]").textContent = isRevealed ? "ดูแล้ว" : "ยังไม่ได้ดู";
    button.disabled = isRevealed;
    button.textContent = isRevealed ? "ดูเรียบร้อย" : "ดูคำของฉัน";
    button.addEventListener("click", () => showRole(index));
    elements.playerGrid.appendChild(node);
  });
}

function showRole(index) {
  if (state.revealed[index]) return;

  activeRevealIndex = index;
  const isImposter = index === state.imposterIndex;
  elements.modalPlayer.textContent = `ผู้เล่น ${index + 1}`;
  elements.modalWord.textContent = isImposter ? "Imposter" : state.secretWord;
  elements.modalWord.classList.toggle("is-imposter", isImposter);
  elements.modalHint.textContent = isImposter
    ? "คุณคือ Imposter พยายามจับทางคำกลางจากบทสนทนา"
    : "จำคำนี้ไว้ แล้วกดซ่อนก่อนส่งเครื่องให้คนถัดไป";
  elements.modal.classList.remove("is-hidden");
  elements.modal.setAttribute("aria-hidden", "false");
  elements.hideRole.focus();
}

function hideRole() {
  if (activeRevealIndex === null) return;

  state.revealed[activeRevealIndex] = true;
  activeRevealIndex = null;
  elements.modal.classList.add("is-hidden");
  elements.modal.setAttribute("aria-hidden", "true");
  renderPlayers();
  updateProgress();
}

function updateProgress() {
  const revealedCount = state.revealed.filter(Boolean).length;
  elements.revealProgress.textContent = `${revealedCount}/${state.playerCount} คนดูแล้ว`;

  const isFinished = revealedCount === state.playerCount;
  elements.finishPanel.classList.toggle("is-hidden", !isFinished);
  if (isFinished) {
    elements.stageLabel.textContent = "ขั้นตอนที่ 3 จาก 3";
    elements.panelTitle.textContent = "เริ่มจับผิดได้";
    elements.panelText.textContent = "ระบบจบหน้าที่แล้ว ที่เหลือคือทักษะการคุยและการหลอกล่อ";
  }
}

function resetGame() {
  state.playerCount = 4;
  state.categoryKey = "jobs";
  state.secretWord = "";
  state.imposterIndex = -1;
  state.revealed = [];
  activeRevealIndex = null;

  elements.playerCount.value = state.playerCount;
  elements.categorySelect.value = state.categoryKey;
  elements.setupSection.classList.remove("is-hidden");
  elements.revealSection.classList.add("is-hidden");
  elements.finishPanel.classList.add("is-hidden");
  elements.modal.classList.add("is-hidden");
  elements.modal.setAttribute("aria-hidden", "true");
  elements.secretDisplay.classList.remove("is-visible");
  elements.secretWord.textContent = "ยังไม่ได้สุ่ม";
  elements.stageLabel.textContent = "ขั้นตอนที่ 1 จาก 3";
  elements.panelTitle.textContent = "ตั้งค่าเกม";
  elements.panelText.textContent = "เลือกจำนวนผู้เล่นและหมวดหมู่คำที่อยากเล่น";
  updateCategoryPreview();
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function clampPlayerCount(value) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return 2;
  return Math.min(5, Math.max(2, parsed));
}

init();
