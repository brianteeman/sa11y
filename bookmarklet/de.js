!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="3.0.2",n=e=>{const n=`Sa11yLang${e}`;Sa11y.Lang.addI18n(window[n].strings),new Sa11y.Sa11y({autoDetectShadowComponents:!0,customChecks:!1,detectSPArouting:!0})};"object"!=typeof Sa11y?function(t){const s=document.createElement("link"),i=document.getElementsByTagName("head")[0];s.rel="stylesheet",s.href=`https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@${e}/dist/css/sa11y.min.css`,s.type="text/css",i.appendChild(s);const a=document.createElement("script");a.src=`https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@${e}/dist/js/lang/${t.toLowerCase()}.umd.min.js,gh/ryersondmp/sa11y@${e}/dist/js/sa11y.umd.min.js`,document.body.appendChild(a),a.onload=()=>n(t),a.onreadystatechange=()=>n(t)}("De"):alert('Ziehen Sie die Schaltfläche "Sa11y" in Ihre Lesezeichenleiste. Klicken Sie dann auf einer beliebigen Webseite auf das Lesezeichen.')}));
