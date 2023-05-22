// validasi hanya angka pada inputan
function hanyaAngka(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

// function hitung luas start
function luas() {
  let nilaiLuas = document.getElementById("nilai-luas").value;

  if (!nilaiLuas) {
    alert("Inputkan Sisi Terlebih Dahulu");
  } else {
    let hasil = nilaiLuas * nilaiLuas;
    document.getElementById("result-luas").innerHTML =
      "<p>L = S x S</p> <p>L = " +
      nilaiLuas +
      " x " +
      nilaiLuas +
      " </p> <p>L = " +
      hasil +
      "</p>";
  }
}

function resetLuas() {
  document.getElementById("nilai-luas").value = "";
  document.getElementById("result-luas").innerHTML = "";
}
// function hitung luas end

// function hitung keliling start
function keliling() {
  let nilaiKeliling = document.getElementById("nilai-keliling").value;

  if (!nilaiKeliling) {
    alert("Inputkan Sisi Terlebih Dahulu");
  } else {
    let hasil = 4 * nilaiKeliling;
    document.getElementById("result-keliling").innerHTML =
      "<p>K = 4 x S</p> <p>K = 4 x " +
      nilaiKeliling +
      " </p> <p>K = " +
      hasil +
      "</p>";
  }
}

function resetkeliling() {
  document.getElementById("nilai-keliling").value = "";
  document.getElementById("result-keliling").innerHTML = "";
}
// function hitung keliling end
