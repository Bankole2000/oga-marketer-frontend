window.OgaTracker = (function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 10))
  );
})([
  function (e, t, r) {
    "use strict";
    var n = r(4),
      o = r(14),
      a = Object.prototype.toString;
    function i(e) {
      return "[object Array]" === a.call(e);
    }
    function s(e) {
      return null !== e && "object" == typeof e;
    }
    function c(e) {
      return "[object Function]" === a.call(e);
    }
    function u(e, t) {
      if (null !== e && void 0 !== e)
        if (("object" != typeof e && (e = [e]), i(e))) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === a.call(e);
      },
      isBuffer: o,
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: s,
      isUndefined: function (e) {
        return void 0 === e;
      },
      isDate: function (e) {
        return "[object Date]" === a.call(e);
      },
      isFile: function (e) {
        return "[object File]" === a.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === a.call(e);
      },
      isFunction: c,
      isStream: function (e) {
        return s(e) && c(e.pipe);
      },
      isURLSearchParams: function (e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
      },
      isStandardBrowserEnv: function () {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
      },
      forEach: u,
      merge: function e() {
        var t = {};
        function r(r, n) {
          "object" == typeof t[n] && "object" == typeof r ? (t[n] = e(t[n], r)) : (t[n] = r);
        }
        for (var n = 0, o = arguments.length; n < o; n++) u(arguments[n], r);
        return t;
      },
      extend: function (e, t, r) {
        return (
          u(t, function (t, o) {
            e[o] = r && "function" == typeof t ? n(t, r) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
    };
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      var n = r(0),
        o = r(17),
        a = { "Content-Type": "application/x-www-form-urlencoded" };
      function i(e, t) {
        !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
      }
      var s = {
        adapter: (function () {
          var e;
          return "undefined" != typeof XMLHttpRequest ? (e = r(5)) : void 0 !== t && (e = r(5)), e;
        })(),
        transformRequest: [
          function (e, t) {
            return (
              o(t, "Content-Type"),
              n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e)
                ? e
                : n.isArrayBufferView(e)
                ? e.buffer
                : n.isURLSearchParams(e)
                ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
                : n.isObject(e)
                ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e))
                : e
            );
          },
        ],
        transformResponse: [
          function (e) {
            if ("string" == typeof e)
              try {
                e = JSON.parse(e);
              } catch (e) {
                console.log({e})
              }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      n.forEach(["delete", "get", "head"], function (e) {
        s.headers[e] = {};
      }),
        n.forEach(["post", "put", "patch"], function (e) {
          s.headers[e] = n.merge(a);
        }),
        (e.exports = s);
    }.call(this, r(16)));
  },
  function (e, t, r) {
    "use strict";
    console.log({r})
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.OGASURVEY_BASE_URL = "https://ogasurvey.com"),
      (t.OGASURVEY_EMBED_URL = "https://ogasurvey.com/embed/survey/%ID%"),
      (t.CONTACT_IDENTITY_KEY = "oga_contact_id"),
      (t.CAMPAIGN_NODE_IDENTITY_KEY = "oga_campaign_node_id"),
      (t.VISITOR_IDENTITY_KEY = "oga_visitor_id"),
      (t.API_TRACK_URL = "https://ogamarketer.com/api/tracker/track"),
      (t.API_ACCOUNT_SCRIPT_URL = "https://ogamarketer.com/api/tracker/account/script/%TOKEN%.js"),
      (t.TRACKER_STYLES_URL = "https://ogamarketer.com/assets/css/oga-tracker.css"),
      (t.API_GOAL_RECEIVED_URL = "https://ogamarketer.com/api/tracker/goal/received"),
      (t.API_GOAL_FORM_URL = "https://ogamarketer.com/api/tracker/goal/form"),
      (t.API_AUTOTRACK_URL = "https://ogamarketer.com/api/tracker/autotrack"),
      (t.API_CONTACT_SEGMENT_LABEL_ADD_URL = "https://ogamarketer.com/api/tracker/contact/segment-label/add");
  },
  function (e, t, r) {
    console.log({t})
    e.exports = r(13);
  },
  function (e, t, r) {
    console.log({t, r})
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
        return e.apply(t, r);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(18),
      a = r(20),
      i = r(21),
      s = r(22),
      c = r(6),
      u = ("undefined" != typeof window && window.btoa && window.btoa.bind(window)) || r(23);
    e.exports = function (e) {
      return new Promise(function (t, d) {
        var l = e.data,
          p = e.headers;
        n.isFormData(l) && delete p["Content-Type"];
        var f = new XMLHttpRequest(),
          m = "onreadystatechange",
          h = !1;
        if (
          ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || s(e.url) || ((f = new window.XDomainRequest()), (m = "onload"), (h = !0), (f.onprogress = function () {}), (f.ontimeout = function () {})),
          e.auth)
        ) {
          var g = e.auth.username || "",
            v = e.auth.password || "";
          p.Authorization = "Basic " + u(g + ":" + v);
        }
        if (
          (f.open(e.method.toUpperCase(), a(e.url, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout),
          (f[m] = function () {
            if (f && (4 === f.readyState || h) && (0 !== f.status || (f.responseURL && 0 === f.responseURL.indexOf("file:")))) {
              var r = "getAllResponseHeaders" in f ? i(f.getAllResponseHeaders()) : null,
                n = {
                  data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                  status: 1223 === f.status ? 204 : f.status,
                  statusText: 1223 === f.status ? "No Content" : f.statusText,
                  headers: r,
                  config: e,
                  request: f,
                };
              o(t, d, n), (f = null);
            }
          }),
          (f.onerror = function () {
            d(c("Network Error", e, null, f)), (f = null);
          }),
          (f.ontimeout = function () {
            d(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", f)), (f = null);
          }),
          n.isStandardBrowserEnv())
        ) {
          var y = r(24),
            _ = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
          _ && (p[e.xsrfHeaderName] = _);
        }
        if (
          ("setRequestHeader" in f &&
            n.forEach(p, function (e, t) {
              void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : f.setRequestHeader(t, e);
            }),
          e.withCredentials && (f.withCredentials = !0),
          e.responseType)
        )
          try {
            f.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              f && (f.abort(), d(e), (f = null));
            }),
          void 0 === l && (l = null),
          f.send(l);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(19);
    e.exports = function (e, t, r, o, a) {
      var i = new Error(e);
      return n(i, t, r, o, a);
    };
  },
  function (e, t, r) {
    console.log({t, r})
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, r) {
    "use strict";
    console.log({t, r})
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = r(35),
      o = r(2);
    t.Storage = class {
      setVisitorId(e) {
        return (this._visitorId = e), n.set(o.VISITOR_IDENTITY_KEY, this._visitorId, { expires: 365 }), this;
      }
      setContactId(e) {
        return (this._contactId = e), n.set(o.CONTACT_IDENTITY_KEY, this._contactId), this;
      }
      setCampaignNodeId(e) {
        return (this._campaignNodeId = e), n.set(o.CAMPAIGN_NODE_IDENTITY_KEY, this._campaignNodeId), this;
      }
      getContactId() {
        return this._contactId || (this._contactId = n.get(o.CONTACT_IDENTITY_KEY) || ""), this._contactId;
      }
      getCampaignNodeId() {
        return this._campaignNodeId || (this._campaignNodeId = n.get(o.CAMPAIGN_NODE_IDENTITY_KEY) || ""), this._campaignNodeId;
      }
      getVisitorId() {
        return this._visitorId || (this._visitorId = n.get(o.VISITOR_IDENTITY_KEY) || this.generateVisitorId()), this._visitorId;
      }
      generateVisitorId() {
        let e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          let t = (16 * Math.random()) | 0;
          return ("x" == e ? t : (3 & t) | 8).toString(16);
        });
        return this.setVisitorId(e), e;
      }
      toJSON() {
        return { contact_id: this.getContactId(), campaign_node_id: this.getCampaignNodeId(), visitor_id: this.getVisitorId() };
      }
    };
  },
  function (e, t, r) {
    e.exports = r(11);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    let n = new (r(12).OgaTracker)();
    t.default = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = r(3),
      o = r(32),
      a = r(9),
      i = r(2),
      s = r(36);
    t.OgaTracker = class {
      constructor(e) {
        (this._storage = new a.Storage()),
        (this._autotrack = new s.Autotrack()),
        (this._shownGoalsId = new Array()),
        (this._receivedGoalsId = new Array()),
        (this._poweredBy = { style: "icon", text: 'Powered by <a href="https://ogamarketer.com">OgaMarketer.com</a>' });
        (console.log({e}))
      }
      init(e) {
        (this._token = e), this.parseQueryString(), this.loadAccountScript(), this.initTrackerGoals();
      }
      initAutotrack() {
        this._autotrack.init();
      }
      parseQueryString() {
        let e = o.parse(location.search.replace(/(^\?)|(\?$)/g, "")),
          t = e[i.CONTACT_IDENTITY_KEY] || "",
          r = e[i.CAMPAIGN_NODE_IDENTITY_KEY] || "";
        t && this._storage.setContactId(t), r && this._storage.setCampaignNodeId(r);
      }
      loadAccountScript() {
        if (!this._token) return !1;
        const e = window.document.createElement("script");
        (e.async = !0), (e.src = i.API_ACCOUNT_SCRIPT_URL.replace("%TOKEN%", this._token)), window.document.getElementsByTagName("head")[0].appendChild(e);
      }
      trigger(e) {
        let t = this._storage.getVisitorId(),
          r = this._storage.getContactId(),
          o = this._storage.getCampaignNodeId(),
          a = new FormData();
        a.append("visitor_id", t),
          a.append("event", e),
          a.append("source", window.document.referrer),
          a.append("screen_width", String(window.screen.width)),
          a.append("screen_height", String(window.screen.height)),
          r && a.append("contact_id", r),
          o && a.append("campaign_node_id", o),
          n.default
            .post(i.API_TRACK_URL, a, { headers: { "Content-Type": "multipart/form-data" } })
            .then((e) => {
              e.data.goals &&
                e.data.goals.map((e) => {
                  this.showGoal(e);
                });
            })
            .catch((e) => {
              console.log(e);
            });
      }
      initTrackerGoals() {
        const e = window.document.createElement("link");
        (e.href = i.TRACKER_STYLES_URL), (e.rel = "stylesheet"), window.document.getElementsByTagName("head")[0].appendChild(e);
        const t = window.document.createElement("div");
        (t.className = "oga-tracker-goals"), window.document.getElementsByTagName("body")[0].appendChild(t);
      }
      showGoal(e) {
        if (this._shownGoalsId.find((t) => e.id === t)) return;
        const t = window.document.getElementsByClassName("oga-tracker-goals")[0],
          r = this.buildGoalTemplate(e);
        this.addPoweredBy(r, e.powered_by_style),
          t.appendChild(r),
          r.addEventListener("click", () => {
            this.visitorReceivedGoal(e.id);
          }),
          this._shownGoalsId.push(e.id);
      }
      addPoweredBy(e, t) {
        let r = "text" === t ? "text" : "icon";
        const n = document.createElement("div");
        n.className = "oga-tracker-powered-by oga-tracker-powered-by-style-" + r;
        const o = document.createElement("div");
        (o.className = "oga-tracker-powered-by-text"), (o.innerHTML = this._poweredBy.text);
        const a = document.createElement("span");
        return (a.className = "oga-tracker-powered-by-icon"), (a.innerHTML = "i"), n.appendChild(o), n.appendChild(a), e.appendChild(n), e;
      }
      visitorReceivedGoal(e) {
        if (this._receivedGoalsId.find((t) => e === t)) return;
        let t = new FormData();
        t.append("visitor_id", this._storage.getVisitorId()),
          t.append("goal_id", e),
          n.default
            .post(i.API_GOAL_RECEIVED_URL, t, { headers: { "Content-Type": "multipart/form-data" } })
            .then((t) => {
              console.log({t})
              this._receivedGoalsId.push(e);
            })
            .catch((e) => {
              console.log(e);
            });
      }
      buildGoalTemplate(e) {
        const t = document.createElement("div");
        t.className = "oga-tracker-goal";
        const r = document.createElement("div");
        (r.className = "oga-tracker-goal-text"), (r.innerHTML = e.text);
        const n = document.createElement("div");
        return (
          (n.className = "oga-tracker-goal-close"),
          (n.innerHTML = "&times;"),
          n.addEventListener("click", function () {
            t.classList.add("oga-hide"),
              setTimeout(function () {
                t.remove();
              }, 500);
          }),
          t.appendChild(n),
          t.appendChild(r),
          e.is_form_type ? this.buildGoalForm(e, t) : e.is_survey_type ? this.buildGoalSurvey(e, t) : e.is_code_type && this.buildGoalCode(e, t),
          this.applyWidgetSettings(e, t),
          this.bindSegmentSelect(t),
          t
        );
      }
      bindSegmentSelect(e) {
        let t = e.querySelectorAll(".oga-tracker-goal-segment-wrapper");
        return 0 === t.length
          ? e
          : (t.forEach((e) => {
              let t = e.querySelector(".oga-tracker-goal-segment-select"),
                r = e.querySelector(".oga-tracker-goal-segment-submit");
              t.addEventListener("change", (r) => {
                console.log({r})
                t.value.length ? e.classList.add("oga-valid") : e.classList.remove("oga-valid");
              }),
                r.addEventListener("click", (n) => {
                  console.log({n})
                  e.classList.add("oga-is-sending"),
                    e.classList.remove("oga-has-error"),
                    this.segmentLabelSubmit(t.value)
                      .then((n) => {
                        console.log({n})
                        t.setAttribute("disabled", "disabled"), e.classList.add("oga-sent"), r.remove();
                      })
                      .catch((t) => {
                        console.log(t)
                        e.classList.add("oga-has-error");
                      })
                      .then(() => {
                        e.classList.remove("oga-is-sending");
                      });
                });
            }),
            e);
      }
      segmentLabelSubmit(e) {
        let t = new FormData();
        t.append("contact_id", this._storage.getContactId()), t.append("label_id", e);
        let r = { headers: { "Content-Type": "multipart/form-data" } };
        return new Promise((e, o) => {
          n.default
            .post(i.API_CONTACT_SEGMENT_LABEL_ADD_URL, t, r)
            .then((t) => {
              e(t);
            })
            .catch((e) => {
              o(e);
            });
        });
      }
      applyWidgetSettings(e, t) {
        return (
          t.setAttribute("data-position", e.widget_position),
          (t.style.backgroundColor = e.widget_bg_color),
          (t.style.color = e.widget_font_color),
          (t.style.fontSize = e.widget_font_size + e.widget_font_unit),
          (t.style.fontFamily = e.widget_font_family),
          t
        );
      }
      buildGoalSurvey(e, t) {
        if (!e.survey_id) return t;
        const r = document.createElement("div");
        r.className = "oga-tracker-goal-survey";
        const n = document.createElement("iframe");
        (n.src = i.OGASURVEY_EMBED_URL.replace("%ID%", e.survey_id)),
          (n.className = "oga-tracker-goal-survey-iframe"),
          (n.frameBorder = "0"),
          (n.scrolling = "no"),
          (n.width = "100%"),
          (n.height = "0"),
          window.addEventListener("message", (t) => {
            if (t.origin !== i.OGASURVEY_BASE_URL) return;
            let r = JSON.parse(t.data);
            "embed-clicked" === r.type && r.id === e.survey_id && this.visitorReceivedGoal(e.id), "embed-height" === r.type && r.id === e.survey_id && r.height > 0 && (n.height = r.height + "px");
          }),
          r.appendChild(n),
          t.appendChild(r);
      }
      buildGoalForm(e, t) {
        if (!(e.collect_name || e.collect_email || e.collect_phone || e.collect_textarea || e.collect_birthday)) return t;
        const r = this._storage.getVisitorId();
        let o = 0;
        const a = document.createElement("form");
        a.className = "oga-tracker-goal-form";
        const s = document.createElement("div");
        s.className = "oga-tracker-goal-form-result";
        const c = document.createElement("div");
        c.className = "oga-tracker-goal-form-success";
        const u = document.createElement("input");
        if (((u.type = "hidden"), (u.name = "goal_id"), (u.value = e.id), a.appendChild(u), e.collect_name)) {
          const e = this.createFormInputElement({ name: "name", placeholder: "Name" });
          a.appendChild(e), o++;
        }
        if (e.collect_phone) {
          const e = this.createFormInputElement({ name: "phone", placeholder: "Phone" });
          a.appendChild(e), o++;
        }
        if (e.collect_email) {
          const e = this.createFormInputElement({ name: "email", placeholder: "Email" });
          a.appendChild(e), o++;
        }
        if (e.collect_birthday) {
          const e = this.createFormBirthdayElement({ name: "birthday" });
          a.appendChild(e), o++;
        }
        if (e.collect_textarea) {
          const e = this.createFormTextareaElement({ name: "textarea", placeholder: "Enter here" });
          a.appendChild(e), o++;
        }
        const d = document.createElement("button");
        return (
          (d.className = "oga-tracker-goal-form-submit"),
          (d.type = "submit"),
          (d.innerText = "Send"),
          a.appendChild(d),
          a.setAttribute("data-fields", o.toString()),
          a.addEventListener("submit", function (e) {
            e.preventDefault();
            const o = new FormData(this);
            o.append("visitor_id", r),
              a.classList.add("oga-is-sending"),
              n.default
                .post(i.API_GOAL_FORM_URL, o, { headers: { "Content-Type": "multipart/form-data" } })
                .then((e) => {
                  e.data.message &&
                    (a.remove(),
                    t.getElementsByClassName("oga-tracker-goal-text")[0].remove(),
                    (c.innerHTML = e.data.message),
                    t.appendChild(c),
                    setTimeout(function () {
                      t.remove();
                    }, 1e4));
                })
                .catch((e) => {
                  if (e.response.data && e.response.data.errors) {
                    let t = '<div class="oga-tracker-goal-form-error">';
                    for (let r in e.response.data.errors) t += "<div>" + e.response.data.errors[r].join("<br>") + "</div>";
                    (t += "</div>"), (s.innerHTML = t), a.appendChild(s);
                  }
                })
                .then(() => {
                  a.classList.remove("oga-is-sending");
                });
          }),
          t.appendChild(a),
          t
        );
      }
      createFormInputElement(e) {
        let { name: t, placeholder: r } = e;
        const n = document.createElement("input");
        return (n.type = "text"), (n.name = t), (n.placeholder = r), (n.className = "oga-tracker-goal-form-input oga-tracker-goal-form-input-" + t), n;
      }
      createFormDateElement(e) {
        let { name: t, placeholder: r } = e;
        const n = document.createElement("input");
        return (n.type = "date"), (n.name = t), (n.placeholder = r), (n.className = "oga-tracker-goal-form-input oga-tracker-goal-form-input-" + t), n;
      }
      createFormBirthdayElement(e) {
        let { name: t } = e;
        const r = document.createElement("div");
        r.className = "oga-tracker-goal-form-" + t;
        const n = document.createElement("select");
        (n.name = t + "-day"), (n.className = "oga-tracker-goal-form-" + t + "-day");
        for (let e = 1; e < 32; e++) {
          let t = document.createElement("option");
          (t.value = e.toFixed()), (t.text = e.toFixed()), n.appendChild(t);
        }
        const o = document.createElement("select");
        (o.name = t + "-month"),
          (o.className = "oga-tracker-goal-form-" + t + "-month"),
          ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].forEach((e, t) => {
            let r = document.createElement("option"),
              n = t + 1;
            (r.value = n.toFixed()), (r.text = e), o.appendChild(r);
          });
        const a = document.createElement("input");
        return (
          (a.type = "date"),
          (a.name = t),
          (a.value = "1000-01-01"),
          (a.className = "oga-hidden"),
          n.addEventListener("change", (e) => {
            console.log({e})
            a.value = `1000-${this.addLeadingZeroToDates(o.value)}-${this.addLeadingZeroToDates(n.value)}`;
          }),
          o.addEventListener("change", (e) => {
            console.log({e})
            a.value = `1000-${this.addLeadingZeroToDates(o.value)}-${this.addLeadingZeroToDates(n.value)}`;
          }),
          r.appendChild(n),
          r.appendChild(o),
          r.appendChild(a),
          r
        );
      }
      addLeadingZeroToDates(e) {
        return ("0" + e).slice(-2);
      }
      createFormTextareaElement(e) {
        let { name: t, placeholder: r } = e;
        const n = document.createElement("textarea");
        return (n.name = t), (n.placeholder = r), (n.className = "oga-tracker-goal-form-textarea oga-tracker-goal-form-textarea-" + t), n;
      }
      buildGoalCode(e, t) {
        const r = document.createElement("div");
        r.className = "oga-tracker-goal-code";
        const n = document.createElement("div");
        (n.className = "oga-tracker-goal-code-html"), (n.innerHTML = e.code);
        let o = n.getElementsByTagName("script");
        for (let e = 0; e < o.length; e++) {
          let t = document.createElement("script");
          (t.textContent = o[e].textContent), o[e].src && (t.src = o[e].src), r.appendChild(t);
        }
        for (; o.length > 0; ) o[0].remove();
        r.appendChild(n), t.appendChild(r);
      }
      runGoalCode(e) {
        let t = e.getElementsByTagName("script");
        const r = document.createElement("div");
        for (let e = 0; e < t.length; e++) {
          let n = document.createElement("script");
          (n.textContent = t[e].textContent), t[e].src && (n.src = t[e].src), r.appendChild(n);
        }
        e.appendChild(r);
      }
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(4),
      a = r(15),
      i = r(1);
    function s(e) {
      var t = new a(e),
        r = o(a.prototype.request, t);
      return n.extend(r, a.prototype, t), n.extend(r, t), r;
    }
    var c = s(i);
    (c.Axios = a),
      (c.create = function (e) {
        return s(n.merge(i, e));
      }),
      (c.Cancel = r(8)),
      (c.CancelToken = r(30)),
      (c.isCancel = r(7)),
      (c.all = function (e) {
        return Promise.all(e);
      }),
      (c.spread = r(31)),
      (e.exports = c),
      (e.exports.default = c);
  },
  function (e, t) {
    console.log({t})
    function r(e) {
      return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function (e) {
      return (
        null != e &&
        (r(e) ||
          (function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0));
          })(e) ||
          !!e._isBuffer)
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(1),
      o = r(0),
      a = r(25),
      i = r(26);
    function s(e) {
      (this.defaults = e), (this.interceptors = { request: new a(), response: new a() });
    }
    (s.prototype.request = function (e) {
      "string" == typeof e && (e = o.merge({ url: arguments[0] }, arguments[1])), ((e = o.merge(n, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase());
      var t = [i, void 0],
        r = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        r = r.then(t.shift(), t.shift());
      return r;
    }),
      o.forEach(["delete", "get", "head", "options"], function (e) {
        s.prototype[e] = function (t, r) {
          return this.request(o.merge(r || {}, { method: e, url: t }));
        };
      }),
      o.forEach(["post", "put", "patch"], function (e) {
        s.prototype[e] = function (t, r, n) {
          return this.request(o.merge(n || {}, { method: e, url: t, data: r }));
        };
      }),
      (e.exports = s);
  },
  function (e, t) {
    console.log({t})
    var r,
      n,
      o = (e.exports = {});
    function a() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === a || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        r = a;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        n = i;
      }
    })();
    var c,
      u = [],
      d = !1,
      l = -1;
    function p() {
      d && c && ((d = !1), c.length ? (u = c.concat(u)) : (l = -1), u.length && f());
    }
    function f() {
      if (!d) {
        var e = s(p);
        d = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++l < t; ) c && c[l].run();
          (l = -1), (t = u.length);
        }
        (c = null),
          (d = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === i || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function m(e, t) {
      (this.fun = e), (this.array = t);
    }
    function h() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      u.push(new m(e, t)), 1 !== u.length || d || s(f);
    }),
      (m.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = h),
      (o.addListener = h),
      (o.once = h),
      (o.off = h),
      (o.removeListener = h),
      (o.removeAllListeners = h),
      (o.emit = h),
      (o.prependListener = h),
      (o.prependOnceListener = h),
      (o.listeners = function (e) {
        console.log({e})
        return [];
      }),
      (o.binding = function (e) {
        console.log({e})
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        console.log({e})
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t && n.toUpperCase() === t.toUpperCase() && ((e[t] = r), delete e[n]);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(6);
    e.exports = function (e, t, r) {
      var o = r.config.validateStatus;
      r.status && o && !o(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r);
    };
  },
  function (e, t, r) {
    console.log({t, r})
    "use strict";
    e.exports = function (e, t, r, n, o) {
      return (e.config = t), r && (e.code = r), (e.request = n), (e.response = o), e;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    function o(e) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, r) {
      if (!t) return e;
      var a;
      if (r) a = r(t);
      else if (n.isURLSearchParams(t)) a = t.toString();
      else {
        var i = [];
        n.forEach(t, function (e, t) {
          null !== e &&
            void 0 !== e &&
            (n.isArray(e) ? (t += "[]") : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e) ? (e = e.toISOString()) : n.isObject(e) && (e = JSON.stringify(e)), i.push(o(t) + "=" + o(e));
            }));
        }),
          (a = i.join("&"));
      }
      return a && (e += (-1 === e.indexOf("?") ? "?" : "&") + a), e;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        r,
        a,
        i = {};
      return e
        ? (n.forEach(e.split("\n"), function (e) {
            if (((a = e.indexOf(":")), (t = n.trim(e.substr(0, a)).toLowerCase()), (r = n.trim(e.substr(a + 1))), t)) {
              if (i[t] && o.indexOf(t) >= 0) return;
              i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([r]) : i[t] ? i[t] + ", " + r : r;
            }
          }),
          i)
        : i;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
          function o(e) {
            var n = e;
            return (
              t && (r.setAttribute("href", n), (n = r.href)),
              r.setAttribute("href", n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var r = n.isString(t) ? o(t) : t;
              return r.protocol === e.protocol && r.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, r) {
    console.log({t,r})
    "use strict";
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function o() {
      this.message = "String contains an invalid character";
    }
    (o.prototype = new Error()),
      (o.prototype.code = 5),
      (o.prototype.name = "InvalidCharacterError"),
      (e.exports = function (e) {
        for (var t, r, a = String(e), i = "", s = 0, c = n; a.charAt(0 | s) || ((c = "="), s % 1); i += c.charAt(63 & (t >> (8 - (s % 1) * 8)))) {
          if ((r = a.charCodeAt((s += 0.75))) > 255) throw new o();
          t = (t << 8) | r;
        }
        return i;
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = n.isStandardBrowserEnv()
      ? {
          write: function (e, t, r, o, a, i) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)),
              n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
              n.isString(o) && s.push("path=" + o),
              n.isString(a) && s.push("domain=" + a),
              !0 === i && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t) {
      return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(27),
      a = r(7),
      i = r(1),
      s = r(28),
      c = r(29);
    function u(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        u(e),
        e.baseURL && !s(e.url) && (e.url = c(e.baseURL, e.url)),
        (e.headers = e.headers || {}),
        (e.data = o(e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {})),
        n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
          delete e.headers[t];
        }),
        (e.adapter || i.adapter)(e).then(
          function (t) {
            return u(e), (t.data = o(t.data, t.headers, e.transformResponse)), t;
          },
          function (t) {
            return a(t) || (u(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
          }
        )
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function (e, t, r) {
      return (
        n.forEach(r, function (r) {
          e = r(e, t);
        }),
        e
      );
    };
  },
  function (e, t, r) {
    console.log({t, r})
    "use strict";
    e.exports = function (e) {
      // eslint-disable-next-line no-useless-escape
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, r) {
    console.log({t, r})
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(8);
    function o(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      e(function (e) {
        r.reason || ((r.reason = new n(e)), t(r.reason));
      });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    console.log({t, r})
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(33),
      o = r(34);
    function a(e, t) {
      return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
    }
    function i(e, t) {
      return t.decode ? o(e) : e;
    }
    function s(e) {
      const t = e.indexOf("?");
      return -1 === t ? "" : e.slice(t + 1);
    }
    function c(e, t) {
      const r = (function (e) {
          let t;
          switch (e.arrayFormat) {
            case "index":
              return (e, r, n) => {
                (t = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, "")), t ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r)) : (n[e] = r);
              };
            case "bracket":
              return (e, r, n) => {
                (t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, "")), t ? (void 0 !== n[e] ? (n[e] = [].concat(n[e], r)) : (n[e] = [r])) : (n[e] = r);
              };
            default:
              return (e, t, r) => {
                void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
              };
          }
        })((t = Object.assign({ decode: !0, arrayFormat: "none" }, t))),
        n = Object.create(null);
      if ("string" != typeof e) return n;
      if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
      for (const o of e.split("&")) {
        let [e, a] = o.replace(/\+/g, " ").split("=");
        (a = void 0 === a ? null : i(a, t)), r(i(e, t), a, n);
      }
      return Object.keys(n)
        .sort()
        .reduce((e, t) => {
          const r = n[t];
          return (
            Boolean(r) && "object" == typeof r && !Array.isArray(r)
              ? (e[t] = (function e(t) {
                  return Array.isArray(t)
                    ? t.sort()
                    : "object" == typeof t
                    ? e(Object.keys(t))
                        .sort((e, t) => Number(e) - Number(t))
                        .map((e) => t[e])
                    : t;
                })(r))
              : (e[t] = r),
            e
          );
        }, Object.create(null));
    }
    (t.extract = s),
      (t.parse = c),
      (t.stringify = (e, t) => {
        if (!e) return "";
        const r = (function (e) {
            switch (e.arrayFormat) {
              case "index":
                return (t, r, n) => (null === r ? [a(t, e), "[", n, "]"].join("") : [a(t, e), "[", a(n, e), "]=", a(r, e)].join(""));
              case "bracket":
                return (t, r) => (null === r ? [a(t, e), "[]"].join("") : [a(t, e), "[]=", a(r, e)].join(""));
              default:
                return (t, r) => (null === r ? a(t, e) : [a(t, e), "=", a(r, e)].join(""));
            }
          })((t = Object.assign({ encode: !0, strict: !0, arrayFormat: "none" }, t))),
          n = Object.keys(e);
        return (
          !1 !== t.sort && n.sort(t.sort),
          n
            .map((n) => {
              const o = e[n];
              if (void 0 === o) return "";
              if (null === o) return a(n, t);
              if (Array.isArray(o)) {
                const e = [];
                for (const t of o.slice()) void 0 !== t && e.push(r(n, t, e.length));
                return e.join("&");
              }
              return a(n, t) + "=" + a(o, t);
            })
            .filter((e) => e.length > 0)
            .join("&")
        );
      }),
      (t.parseUrl = (e, t) => {
        const r = e.indexOf("#");
        return -1 !== r && (e = e.slice(0, r)), { url: e.split("?")[0] || "", query: c(s(e), t) };
      });
  },
  function (e, t, r) {
    console.log({t, r})
    "use strict";
    e.exports = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
  },
  function (e, t, r) {
    console.log({t, r})
    "use strict";
    var n = new RegExp("%[a-f0-9]{2}", "gi"),
      o = new RegExp("(%[a-f0-9]{2})+", "gi");
    function a(e, t) {
      try {
        return decodeURIComponent(e.join(""));
      } catch (e) {
        console.log({e})
      }
      if (1 === e.length) return e;
      t = t || 1;
      var r = e.slice(0, t),
        n = e.slice(t);
      return Array.prototype.concat.call([], a(r), a(n));
    }
    function i(e) {
      try {
        return decodeURIComponent(e);
      } catch (o) {
        for (var t = e.match(n), r = 1; r < t.length; r++) t = (e = a(t, r).join("")).match(n);
        return e;
      }
    }
    e.exports = function (e) {
      if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
      try {
        return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
      } catch (t) {
        return (function (e) {
          for (var t = { "%FE%FF": "ï¿½ï¿½", "%FF%FE": "ï¿½ï¿½" }, r = o.exec(e); r; ) {
            try {
              t[r[0]] = decodeURIComponent(r[0]);
            } catch (e) {
              var n = i(r[0]);
              n !== r[0] && (t[r[0]] = n);
            }
            r = o.exec(e);
          }
          t["%C2"] = "ï¿½";
          for (var a = Object.keys(t), s = 0; s < a.length; s++) {
            var c = a[s];
            e = e.replace(new RegExp(c, "g"), t[c]);
          }
          return e;
        })(e);
      }
    };
  },
  function (e, t, r) {
    var n, o;
    /*!
     * JavaScript Cookie v2.2.0
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */ !(function (a) {
      // eslint-disable-next-line no-constant-condition
      if ((void 0 === (o = "function" == typeof (n = a) ? n.call(t, r, t, e) : n) || (e.exports = o), !0, (e.exports = a()), !!0)) {
        var i = window.Cookies,
          s = (window.Cookies = a());
        s.noConflict = function () {
          return (window.Cookies = i), s;
        };
      }
    })(function () {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) t[n] = r[n];
        }
        return t;
      }
      return (function t(r) {
        function n(t, o, a) {
          var i;
          if ("undefined" != typeof document) {
            if (arguments.length > 1) {
              if ("number" == typeof (a = e({ path: "/" }, n.defaults, a)).expires) {
                var s = new Date();
                s.setMilliseconds(s.getMilliseconds() + 864e5 * a.expires), (a.expires = s);
              }
              a.expires = a.expires ? a.expires.toUTCString() : "";
              try {
                // eslint-disable-next-line no-useless-escape
                (i = JSON.stringify(o)), /^[\{\[]/.test(i) && (o = i);
              } catch (e) {
                console.log({e})
              }
              (o = r.write ? r.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)),
                // eslint-disable-next-line no-useless-escape
                (t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape));
              var c = "";
              for (var u in a) a[u] && ((c += "; " + u), !0 !== a[u] && (c += "=" + a[u]));
              return (document.cookie = t + "=" + o + c);
            }
            t || (i = {});
            for (var d = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, p = 0; p < d.length; p++) {
              var f = d[p].split("="),
                m = f.slice(1).join("=");
              this.json || '"' !== m.charAt(0) || (m = m.slice(1, -1));
              try {
                var h = f[0].replace(l, decodeURIComponent);
                if (((m = r.read ? r.read(m, h) : r(m, h) || m.replace(l, decodeURIComponent)), this.json))
                  try {
                    m = JSON.parse(m);
                  } catch (e) {
                    console.log({e})
                  }
                if (t === h) {
                  i = m;
                  break;
                }
                t || (i[h] = m);
              } catch (e) {
                console.log({e})
              }
            }
            return i;
          }
        }
        return (
          (n.set = n),
          (n.get = function (e) {
            return n.call(n, e);
          }),
          (n.getJSON = function () {
            return n.apply({ json: !0 }, [].slice.call(arguments));
          }),
          (n.defaults = {}),
          (n.remove = function (t, r) {
            n(t, "", e(r, { expires: -1 }));
          }),
          (n.withConverter = t),
          n
        );
      })(function () {});
    });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = r(3),
      o = r(9),
      a = r(2);
    t.Autotrack = class {
      constructor() {
        (this.sensitiveNameRegex = /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn|username|login/i),
          (this.creditCardRegex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/),
          (this._storage = new o.Storage());
      }
      init() {
        this.startListen(), this.track("pageview");
      }
      track(e, t) {
        let r = new FormData();
        r.append("visitor_id", this._storage.getVisitorId()),
          r.append("event_type", e),
          t &&
            Object.keys(t).forEach(function (e) {
              r.append(e, t[e]);
            }),
          r.append("source", window.document.referrer),
          r.append("screen_width", String(window.screen.width)),
          r.append("screen_height", String(window.screen.height)),
          n.default.post(a.API_AUTOTRACK_URL, r, { headers: { "Content-Type": "multipart/form-data" } }).catch((e) => {
            console.log(e);
          });
      }
      startListen() {
        this.clickListener(), this.submitListener(), this.inputListener();
      }
      clickListener() {
        const e = ["BUTTON", "A"];
        window.document.addEventListener("click", (t) => {
          let r = t.target;
          if (-1 === e.indexOf(r.tagName.toUpperCase())) return;
          let n = { element_class: r.className, element_id: r.id, element_text: r.textContent, element_html: r.outerHTML };
          this.track("click", n);
        });
      }
      submitListener() {
        window.document.addEventListener("submit", (e) => {
          let t = e.target,
            r = new FormData(t),
            n = {};
          for (let e of r.entries()) this.isInputNameSensitive(e[0]) || this.isInputValueSensitive(e[1]) || (n[e[0]] = e[1]);
          let o = { event_value: JSON.stringify(n), element_class: t.className, element_id: t.id };
          this.track("submit", o);
        });
      }
      timespentListener() {}
      inputListener() {
        const e = ["TEXT", "TEL", "NUMBER", "EMAIL", "SEARCH"];
        window.document.addEventListener("change", (t) => {
          let r = t.target;
          if ("INPUT" !== r.tagName.toUpperCase()) return;
          if (-1 === e.indexOf(r.type.toUpperCase())) return;
          if (this.isInputNameSensitive(r.name) || this.isInputValueSensitive(r.value)) return;
          let n = { event_value: r.value, element_class: r.className, element_id: r.id, element_html: r.outerHTML };
          this.track("input", n);
        });
      }
      isInputNameSensitive(e) {
        return this.sensitiveNameRegex.test(e.replace(/[^a-zA-Z0-9]/g, ""));
      }
      isInputValueSensitive(e) {
        return this.creditCardRegex.test(e);
      }
    };
  },
]);
