if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("service-worker.js").then(function (reg) {

      reg.addEventListener("updatefound", function () {
        var newWorker = reg.installing;
        newWorker.addEventListener("statechange", function () {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            document.getElementById("update-toast").classList.add("show");
          }
        });
      });

      document.getElementById("update-btn").addEventListener("click", function () {
        if (reg.waiting) {
          reg.waiting.postMessage({ type: "SKIP_WAITING" });
        }
      });

      navigator.serviceWorker.addEventListener("controllerchange", function () {
        window.location.reload();
      });

    }).catch(function (err) {
      console.error("Falha ao registrar Service Worker:", err);
    });
  });
}
