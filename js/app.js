(function () {
  "use strict";

  var currentColIndex = 0;
  var scrollAnimFrame = null;
  var redrawScheduled = false;

  /* ============ NORMALIZAÇÃO PARA BUSCA ============ */
  function normalize(str) {
    return (str || "").toString()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().trim();
  }

  /* ============ RENDER DO BOARD ============ */
  function renderBoard() {
    var scroll = document.getElementById("board-scroll");
    scroll.innerHTML = "";
    var svgNS = "http://www.w3.org/2000/svg";

    ORG_DATA.forEach(function (dir, dIdx) {
      var col = document.createElement("div");
      col.className = "board-col";
      col.dataset.index = dIdx;

      var svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("class", "col-lines");
      col.appendChild(svg);

      var header = document.createElement("div");
      header.className = "col-header-card";
      var hSpan = document.createElement("span");
      hSpan.textContent = dir.nome;
      header.appendChild(hSpan);
      col.appendChild(header);

      dir.areas.forEach(function (area, aIdx) {
        var card = document.createElement("button");
        card.type = "button";
        card.className = "area-card";
        card.dataset.nome = area.nome;
        var span = document.createElement("span");
        span.textContent = area.nome;
        card.appendChild(span);
        card.addEventListener("click", function () {
          openAreaModal(dIdx, aIdx);
        });
        col.appendChild(card);
      });

      scroll.appendChild(col);
    });

    requestAnimationFrame(function () {
      requestAnimationFrame(drawAllColumnLines);
    });
  }

  /* ============ MODAL ============ */
  function openAreaModal(dIdx, aIdx) {
    var dir = ORG_DATA[dIdx];
    var area = dir.areas[aIdx];

    document.getElementById("modal-dir-name").textContent = dir.nome;
    document.getElementById("modal-title").textContent = area.nome;

    var descContainer = document.getElementById("modal-field-descricao");
    descContainer.innerHTML = "";

    var paragraphs = Array.isArray(area.descricao) ? area.descricao : [];

    if (paragraphs.length === 0) {
      var emptyMsg = document.createElement("p");
      emptyMsg.className = "modal-empty";
      emptyMsg.textContent = "Descrição em breve.";
      descContainer.appendChild(emptyMsg);
    } else {
      paragraphs.forEach(function (text) {
        var p = document.createElement("p");
        if (text.trim().indexOf("•") === 0) {
          p.className = "bullet-item";
        }
        p.textContent = text;
        descContainer.appendChild(p);
      });
    }

    document.getElementById("area-modal-overlay").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeAreaModal() {
    document.getElementById("area-modal-overlay").classList.remove("active");
    document.body.style.overflow = "";
  }

  /* ============ LINHAS CONECTORAS ============ */
  function drawColumnLines(col) {
    var svg = col.querySelector(".col-lines");
    var header = col.querySelector(".col-header-card");
    var cards = col.querySelectorAll(".area-card");
    if (!svg || !header || !cards.length) return;

    svg.innerHTML = "";
    var lineX = 9, hookOffsetY = 28, radius = 10;
    var headerBottom = header.offsetTop + header.offsetHeight;
    var headerLeft = header.offsetLeft;
    var cardLeft = cards[0].offsetLeft;
    var svgNS = "http://www.w3.org/2000/svg";
    var frag = document.createDocumentFragment();

    var headerHookY = headerBottom + radius;
    var headerElbow = document.createElementNS(svgNS, "path");
    headerElbow.setAttribute("d",
      "M " + headerLeft + " " + headerBottom +
      " L " + (lineX + radius) + " " + headerBottom +
      " Q " + lineX + " " + headerBottom + " " + lineX + " " + headerHookY);
    headerElbow.setAttribute("class", "col-line-path");
    frag.appendChild(headerElbow);

    var lastHookY = headerHookY;
    cards.forEach(function (card) {
      var hookY = card.offsetTop + hookOffsetY;
      lastHookY = hookY;
      var elbow = document.createElementNS(svgNS, "path");
      elbow.setAttribute("d",
        "M " + lineX + " " + (hookY - radius) +
        " Q " + lineX + " " + hookY + " " + (lineX + radius) + " " + hookY +
        " L " + cardLeft + " " + hookY);
      elbow.setAttribute("class", "col-line-path");
      frag.appendChild(elbow);
    });

    var trunk = document.createElementNS(svgNS, "path");
    trunk.setAttribute("d", "M " + lineX + " " + headerHookY + " L " + lineX + " " + (lastHookY - radius));
    trunk.setAttribute("class", "col-line-path");
    frag.insertBefore(trunk, frag.firstChild);

    svg.appendChild(frag);
    svg.style.height = col.scrollHeight + "px";
  }

  function drawAllColumnLines() {
    document.querySelectorAll(".board-col:not(.col-hidden)").forEach(drawColumnLines);
  }

  function scheduleRedraw() {
    if (redrawScheduled) return;
    redrawScheduled = true;
    requestAnimationFrame(function () {
      redrawScheduled = false;
      drawAllColumnLines();
    });
  }

  /* ============ NAVEGAÇÃO ============ */
  function animateScrollTo(scrollEl, targetLeft, duration, onDone) {
    if (scrollAnimFrame) cancelAnimationFrame(scrollAnimFrame);
    var startLeft = scrollEl.scrollLeft;
    var distance = targetLeft - startLeft;
    var startTime = null;

    function step(ts) {
      if (startTime === null) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      scrollEl.scrollLeft = startLeft + distance * eased;
      if (progress < 1) scrollAnimFrame = requestAnimationFrame(step);
      else { scrollAnimFrame = null; if (onDone) onDone(); }
    }
    scrollAnimFrame = requestAnimationFrame(step);
  }

  function scrollToColumn(idx, smooth) {
    var scroll = document.getElementById("board-scroll");
    var col = scroll.querySelector('.board-col[data-index="' + idx + '"]');
    if (!col) return;
    var targetLeft = col.offsetLeft - scroll.offsetLeft;
    currentColIndex = idx;

    if (smooth === false) { scroll.scrollLeft = targetLeft; return; }
    scroll.classList.add("snap-disabled");
    animateScrollTo(scroll, targetLeft, 380, function () {
      scroll.classList.remove("snap-disabled");
    });
  }

  function getVisibleColumns() {
    return Array.prototype.slice.call(document.querySelectorAll(".board-col:not(.col-hidden)"));
  }

  function getCurrentColumnIndex() {
    var scroll = document.getElementById("board-scroll");
    var cols = getVisibleColumns();
    var scrollCenter = scroll.scrollLeft + scroll.clientWidth / 2;
    var closest = 0, minDist = Infinity;
    cols.forEach(function (col) {
      var idx = parseInt(col.dataset.index, 10);
      var colCenter = col.offsetLeft - scroll.offsetLeft + col.clientWidth / 2;
      var dist = Math.abs(colCenter - scrollCenter);
      if (dist < minDist) { minDist = dist; closest = idx; }
    });
    return closest;
  }

  var colIndexSyncTimer = null;
  function syncCurrentColIndex() {
    clearTimeout(colIndexSyncTimer);
    colIndexSyncTimer = setTimeout(function () {
      currentColIndex = getCurrentColumnIndex();
    }, 150);
  }

  /* ============ BUSCA ============ */
  var searchDebounce = null;
  function applySearch(rawQuery) {
    var query = normalize(rawQuery);
    var clearBtn = document.getElementById("search-clear");
    clearBtn.hidden = query === "";

    var cols = document.querySelectorAll(".board-col");
    var firstMatchIdx = null;

    cols.forEach(function (col) {
      var dIdx = parseInt(col.dataset.index, 10);
      var dirName = normalize(ORG_DATA[dIdx].nome);
      var dirMatches = query === "" || dirName.includes(query);
      var anyCardMatch = dirMatches;

      col.querySelectorAll(".area-card").forEach(function (card) {
        var areaMatch = query === "" || dirMatches || normalize(card.dataset.nome).includes(query);
        card.classList.toggle("dimmed", query !== "" && !areaMatch);
        if (areaMatch) anyCardMatch = true;
      });

      col.classList.toggle("col-hidden", query !== "" && !anyCardMatch);
      if (anyCardMatch && query !== "" && firstMatchIdx === null) firstMatchIdx = dIdx;
    });

    scheduleRedraw();
    if (firstMatchIdx !== null) scrollToColumn(firstMatchIdx);
  }

  /* ============ INICIALIZAÇÃO ============ */
  window.addEventListener("load", function () {
    renderBoard();

    document.getElementById("nav-left").onclick = function () {
      var cols = getVisibleColumns().map(function (c) { return parseInt(c.dataset.index, 10); });
      var pos = cols.indexOf(currentColIndex);
      var idx = cols[Math.max(0, pos - 1)];
      scrollToColumn(idx);
    };
    document.getElementById("nav-right").onclick = function () {
      var cols = getVisibleColumns().map(function (c) { return parseInt(c.dataset.index, 10); });
      var pos = cols.indexOf(currentColIndex);
      var idx = cols[Math.min(cols.length - 1, pos + 1)];
      scrollToColumn(idx);
    };

    document.getElementById("modal-close-btn").onclick = closeAreaModal;
    document.getElementById("area-modal-overlay").onclick = function (e) {
      if (e.target === this) closeAreaModal();
    };
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeAreaModal();
    });

    var boardScroll = document.getElementById("board-scroll");
    boardScroll.addEventListener("scroll", function () {
      scheduleRedraw();
      syncCurrentColIndex();
    });

    var searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", function (e) {
      clearTimeout(searchDebounce);
      var val = e.target.value;
      searchDebounce = setTimeout(function () { applySearch(val); }, 150);
    });
    document.getElementById("search-clear").addEventListener("click", function () {
      searchInput.value = "";
      applySearch("");
      searchInput.focus();
    });

    window.addEventListener("resize", scheduleRedraw);
    window.addEventListener("orientationchange", scheduleRedraw);
    setTimeout(scheduleRedraw, 300);
  });
})();
