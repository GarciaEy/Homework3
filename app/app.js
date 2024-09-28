// import Swal from "sweetalert2/dist/sweetalert2.js";

import { changePage, checkSignIn } from "../model/model.js";

function initListeners() {
  Swal.fire({
    title: "Not Signed In :(",
    text: "Do you want to sign in?",
    icon: "info",
    confirmButtonText: "yes",
    showCancelButton: true,
  });
}

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("route ", pageID);
  changePage(pageID);
}

function initSite() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  //   initListeners();
  checkSignIn(initSite);
  // initSite();

  //   changePage("home");
});
