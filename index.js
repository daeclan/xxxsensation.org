document.querySelector(".compare #compare-ip").addEventListener("input", function (e) {
  document.querySelector(".compare .before .after").style.width = (+e.target.value) + px
})