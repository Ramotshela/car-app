self.addEventListener("sync", (event) => {
  if (event.tag === "sync-requests") {
    console.log("[SW] Background sync triggered");
    event.waitUntil(syncPendingRequests());
  }
});

async function syncPendingRequests() {
  const db = await openDatabase("OfflineDB", 1);
  const tx = db.transaction("requests", "readwrite");
  const store = tx.objectStore("requests");
  const allRequests = await store.getAll();

  for (const req of allRequests) {
    try {
      await fetch(req.url, {
        method: req.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
      store.delete(req.id);
      console.log("Synced request", req);
    } catch (err) {
      console.error("Failed to sync request", req, err);
    }
  }

  await tx.done;
  db.close();
  console.log("All pending requests processed");
}

function openDatabase(name, version) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);
    request.onsuccess = () => resolve(request.result);
    request.onerror = (e) => reject(e);
  });
}
