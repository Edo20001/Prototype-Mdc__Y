// Google Apps Script untuk menerima pokok doa dari website MDC__Y.
// Pasang di Google Sheet: Extensions > Apps Script, tempel kode ini, lalu Deploy > New deployment > Web app
// (Execute as: Me, Who has access: Anyone). Salin URL yang berakhiran /exec ke SHEET_URL di index.html.

var SHEET_NAME = 'Pokok Doa';

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) sh.appendRow(['Waktu', 'Nama', 'Kategori', 'Pokok Doa']);
    var t = new Date(data.waktu || Date.now());
    sh.appendRow([
      Utilities.formatDate(t, 'Asia/Jakarta', 'yyyy-MM-dd HH:mm'),
      clean(data.nama, 40) || 'Anonim',
      clean(data.kategori, 30),
      clean(data.pokokDoa, 500)
    ]);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

// Mencegah rumus (=, +, -, @) di awal teks dijalankan oleh Sheet.
function clean(v, max) {
  v = String(v == null ? '' : v).slice(0, max);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}
