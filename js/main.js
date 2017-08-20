"use strict";

( function() {
    document.addEventListener("DOMContentLoaded", function() {
        var at = document.getElementById("about-btn");
        var ap = document.getElementById("about-panel");
        var pt = document.getElementById("projects-btn");
        var pp = document.getElementById("projects-panel");
        at.addEventListener("click", function() {
            if (at.className === "") {
                at.className = "selected";
                ap.className = "open";
                if (pt.className === "selected") {
                    pt.className = "";
                    pp.className = "";
                }
            } else {
                at.className = "";
                ap.className = "";
            }
        });
        pt.addEventListener("click", function() {
            if (pt.className === "") {
                pt.className = "selected";
                pp.className = "open";
                if (at.className === "selected") {
                    at.className = "";
                    ap.className = "";
                }
            } else {
                pt.className = "";
                pp.className = "";
            }
        });
    });
})();
