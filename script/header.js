window.onscroll = function() {
  console.log(window.innerWidth);
  if (window.innerWidth > 824) {
    if (window.pageYOffset > 750) {
      top_bar.style.background = "#293858";
      top_bar.style.display = "flex";
      top_bar.style.justifyContent = "space-between";
      top_bar.style.borderRadius = "0 0 30px 30px";
      top_bar.style.boxShadow = "0 10px 20px black";
      logo.style.background = "transparent";
      logo.src = "assets/images/logo-white.png";
      logo.style.height = "100px";
      langSelect.style.order = "1";
      langSelect.style.padding = "35px 0 0 10px";
    } else {
      top_bar.style.background = "transparent";
      top_bar.style.display = "";
      top_bar.style.borderRadius = "0px";
      top_bar.style.boxShadow = "none";
      logo.style.background = "white";
      logo.src = "assets/images/xipaar-logo.png";
      logo.style.height = "120px";
      langSelect.style.order = "0";
      langSelect.style.padding = "35px 0 0 60px";
    }
  }
};
