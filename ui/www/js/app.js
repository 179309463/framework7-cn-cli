/*! For license information please see app.js.LICENSE */ ! function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var a = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var a in e) n.d(r, a, function (t) {
        return e[t]
      }.bind(null, a));
    return r
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/", n(n.s = 4)
}([function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  (function (global) {
    function _classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function _createClass(e, t, n) {
      return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
    }
    var t7ctx;
    t7ctx = "undefined" != typeof window ? window : void 0 !== global ? global : void 0;
    var Template7Context = t7ctx,
      Template7Utils = {
        quoteSingleRexExp: new RegExp("'", "g"),
        quoteDoubleRexExp: new RegExp('"', "g"),
        isFunction: function (e) {
          return "function" == typeof e
        },
        escape: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        },
        helperToSlices: function (e) {
          var t, n, r, a = Template7Utils.quoteDoubleRexExp,
            o = Template7Utils.quoteSingleRexExp,
            i = e.replace(/[{}#}]/g, "").trim().split(" "),
            s = [];
          for (n = 0; n < i.length; n += 1) {
            var l = i[n],
              c = void 0,
              u = void 0;
            if (0 === n) s.push(l);
            else if (0 === l.indexOf('"') || 0 === l.indexOf("'"))
              if (c = 0 === l.indexOf('"') ? a : o, u = 0 === l.indexOf('"') ? '"' : "'", 2 === l.match(c).length) s.push(l);
              else {
                for (t = 0, r = n + 1; r < i.length; r += 1)
                  if (l += " ".concat(i[r]), i[r].indexOf(u) >= 0) {
                    t = r, s.push(l);
                    break
                  } t && (n = t)
              }
            else if (l.indexOf("=") > 0) {
              var p = l.split("="),
                d = p[0],
                f = p[1];
              if (c || (c = 0 === f.indexOf('"') ? a : o, u = 0 === f.indexOf('"') ? '"' : "'"), 2 !== f.match(c).length) {
                for (t = 0, r = n + 1; r < i.length; r += 1)
                  if (f += " ".concat(i[r]), i[r].indexOf(u) >= 0) {
                    t = r;
                    break
                  } t && (n = t)
              }
              var h = [d, f.replace(c, "")];
              s.push(h)
            } else s.push(l)
          }
          return s
        },
        stringToBlocks: function (e) {
          var t, n, r = [];
          if (!e) return [];
          var a = e.split(/({{[^{^}]*}})/);
          for (t = 0; t < a.length; t += 1) {
            var o = a[t];
            if ("" !== o)
              if (o.indexOf("{{") < 0) r.push({
                type: "plain",
                content: o
              });
              else {
                if (o.indexOf("{/") >= 0) continue;
                if ((o = o.replace(/{{([#/])*([ ])*/, "{{$1").replace(/([ ])*}}/, "}}")).indexOf("{#") < 0 && o.indexOf(" ") < 0 && o.indexOf("else") < 0) {
                  r.push({
                    type: "variable",
                    contextName: o.replace(/[{}]/g, "")
                  });
                  continue
                }
                var i = Template7Utils.helperToSlices(o),
                  s = i[0],
                  l = ">" === s,
                  c = [],
                  u = {};
                for (n = 1; n < i.length; n += 1) {
                  var p = i[n];
                  Array.isArray(p) ? u[p[0]] = "false" !== p[1] && p[1] : c.push(p)
                }
                if (o.indexOf("{#") >= 0) {
                  var d = "",
                    f = "",
                    h = 0,
                    v = void 0,
                    g = !1,
                    m = !1,
                    b = 0;
                  for (n = t + 1; n < a.length; n += 1)
                    if (a[n].indexOf("{{#") >= 0 && (b += 1), a[n].indexOf("{{/") >= 0 && (b -= 1), a[n].indexOf("{{#".concat(s)) >= 0) d += a[n], m && (f += a[n]), h += 1;
                    else if (a[n].indexOf("{{/".concat(s)) >= 0) {
                    if (!(h > 0)) {
                      v = n, g = !0;
                      break
                    }
                    h -= 1, d += a[n], m && (f += a[n])
                  } else a[n].indexOf("else") >= 0 && 0 === b ? m = !0 : (m || (d += a[n]), m && (f += a[n]));
                  g && (v && (t = v), "raw" === s ? r.push({
                    type: "plain",
                    content: d
                  }) : r.push({
                    type: "helper",
                    helperName: s,
                    contextName: c,
                    content: d,
                    inverseContent: f,
                    hash: u
                  }))
                } else o.indexOf(" ") > 0 && (l && (s = "_partial", c[0] && (0 === c[0].indexOf("[") ? c[0] = c[0].replace(/[[\]]/g, "") : c[0] = '"'.concat(c[0].replace(/"|'/g, ""), '"'))), r.push({
                  type: "helper",
                  helperName: s,
                  contextName: c,
                  hash: u
                }))
              }
          }
          return r
        },
        parseJsVariable: function (e, t, n) {
          return e.split(/([+ \-*/^()&=|<>!%:?])/g).reduce((function (e, r) {
            if (!r) return e;
            if (r.indexOf(t) < 0) return e.push(r), e;
            if (!n) return e.push(JSON.stringify("")), e;
            var a = n;
            return r.indexOf("".concat(t, ".")) >= 0 && r.split("".concat(t, "."))[1].split(".").forEach((function (e) {
              a = e in a ? a[e] : void 0
            })), ("string" == typeof a || Array.isArray(a) || a.constructor && a.constructor === Object) && (a = JSON.stringify(a)), void 0 === a && (a = "undefined"), e.push(a), e
          }), []).join("")
        },
        parseJsParents: function (e, t) {
          return e.split(/([+ \-*^()&=|<>!%:?])/g).reduce((function (e, n) {
            if (!n) return e;
            if (n.indexOf("../") < 0) return e.push(n), e;
            if (!t || 0 === t.length) return e.push(JSON.stringify("")), e;
            var r = n.split("../").length - 1,
              a = r > t.length ? t[t.length - 1] : t[r - 1];
            return n.replace(/..\//g, "").split(".").forEach((function (e) {
              a = void 0 !== a[e] ? a[e] : "undefined"
            })), !1 === a || !0 === a ? (e.push(JSON.stringify(a)), e) : null === a || "undefined" === a ? (e.push(JSON.stringify("")), e) : (e.push(JSON.stringify(a)), e)
          }), []).join("")
        },
        getCompileVar: function (e, t) {
          var n, r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "data_1",
            o = t,
            i = 0;
          0 === e.indexOf("../") ? (i = e.split("../").length - 1, r = o.split("_")[1] - i, o = "ctx_".concat(r >= 1 ? r : 1), n = e.split("../")[i].split(".")) : 0 === e.indexOf("@global") ? (o = "Template7.global", n = e.split("@global.")[1].split(".")) : 0 === e.indexOf("@root") ? (o = "root", n = e.split("@root.")[1].split(".")) : n = e.split(".");
          for (var s = 0; s < n.length; s += 1) {
            var l = n[s];
            if (0 === l.indexOf("@")) {
              var c = a.split("_")[1];
              i > 0 && (c = r), s > 0 ? o += "[(data_".concat(c, " && data_").concat(c, ".").concat(l.replace("@", ""), ")]") : o = "(data_".concat(c, " && data_").concat(c, ".").concat(l.replace("@", ""), ")")
            } else(Number.isFinite ? Number.isFinite(l) : Template7Context.isFinite(l)) ? o += "[".concat(l, "]") : "this" === l || l.indexOf("this.") >= 0 || l.indexOf("this[") >= 0 || l.indexOf("this(") >= 0 ? o = l.replace("this", t) : o += ".".concat(l)
          }
          return o
        },
        getCompiledArguments: function (e, t, n) {
          for (var r = [], a = 0; a < e.length; a += 1) /^['"]/.test(e[a]) ? r.push(e[a]) : /^(true|false|\d+)$/.test(e[a]) ? r.push(e[a]) : r.push(Template7Utils.getCompileVar(e[a], t, n));
          return r.join(", ")
        }
      },
      Template7Helpers = {
        _partial: function (e, t) {
          var n = this,
            r = Template7Class.partials[e];
          return !r || r && !r.template ? "" : (r.compiled || (r.compiled = new Template7Class(r.template).compile()), Object.keys(t.hash).forEach((function (e) {
            n[e] = t.hash[e]
          })), r.compiled(n, t.data, t.root))
        },
        escape: function (e) {
          if (null == e) return "";
          if ("string" != typeof e) throw new Error('Template7: Passed context to "escape" helper should be a string');
          return Template7Utils.escape(e)
        },
        if: function (e, t) {
          var n = e;
          return Template7Utils.isFunction(n) && (n = n.call(this)), n ? t.fn(this, t.data) : t.inverse(this, t.data)
        },
        unless: function (e, t) {
          var n = e;
          return Template7Utils.isFunction(n) && (n = n.call(this)), n ? t.inverse(this, t.data) : t.fn(this, t.data)
        },
        each: function (e, t) {
          var n = e,
            r = "",
            a = 0;
          if (Template7Utils.isFunction(n) && (n = n.call(this)), Array.isArray(n)) {
            for (t.hash.reverse && (n = n.reverse()), a = 0; a < n.length; a += 1) r += t.fn(n[a], {
              first: 0 === a,
              last: a === n.length - 1,
              index: a
            });
            t.hash.reverse && (n = n.reverse())
          } else
            for (var o in n) a += 1, r += t.fn(n[o], {
              key: o
            });
          return a > 0 ? r : t.inverse(this)
        },
        with: function (e, t) {
          var n = e;
          return Template7Utils.isFunction(n) && (n = e.call(this)), t.fn(n)
        },
        join: function (e, t) {
          var n = e;
          return Template7Utils.isFunction(n) && (n = n.call(this)), n.join(t.hash.delimiter || t.hash.delimeter)
        },
        js: function js(expression, options) {
          var data = options.data,
            func, execute = expression;
          return "index first last key".split(" ").forEach((function (e) {
            if (void 0 !== data[e]) {
              var t = new RegExp("this.@".concat(e), "g"),
                n = new RegExp("@".concat(e), "g");
              execute = execute.replace(t, JSON.stringify(data[e])).replace(n, JSON.stringify(data[e]))
            }
          })), options.root && execute.indexOf("@root") >= 0 && (execute = Template7Utils.parseJsVariable(execute, "@root", options.root)), execute.indexOf("@global") >= 0 && (execute = Template7Utils.parseJsVariable(execute, "@global", Template7Context.Template7.global)), execute.indexOf("../") >= 0 && (execute = Template7Utils.parseJsParents(execute, options.parents)), func = execute.indexOf("return") >= 0 ? "(function(){".concat(execute, "})") : "(function(){return (".concat(execute, ")})"), eval(func).call(this)
        },
        js_if: function js_if(expression, options) {
          var data = options.data,
            func, execute = expression;
          "index first last key".split(" ").forEach((function (e) {
            if (void 0 !== data[e]) {
              var t = new RegExp("this.@".concat(e), "g"),
                n = new RegExp("@".concat(e), "g");
              execute = execute.replace(t, JSON.stringify(data[e])).replace(n, JSON.stringify(data[e]))
            }
          })), options.root && execute.indexOf("@root") >= 0 && (execute = Template7Utils.parseJsVariable(execute, "@root", options.root)), execute.indexOf("@global") >= 0 && (execute = Template7Utils.parseJsVariable(execute, "@global", Template7Context.Template7.global)), execute.indexOf("../") >= 0 && (execute = Template7Utils.parseJsParents(execute, options.parents)), func = execute.indexOf("return") >= 0 ? "(function(){".concat(execute, "})") : "(function(){return (".concat(execute, ")})");
          var condition = eval(func).call(this);
          return condition ? options.fn(this, options.data) : options.inverse(this, options.data)
        }
      };
    Template7Helpers.js_compare = Template7Helpers.js_if;
    var Template7Options = {},
      Template7Partials = {},
      Template7Class = function () {
        function Template7Class(e) {
          _classCallCheck(this, Template7Class);
          this.template = e
        }
        return _createClass(Template7Class, [{
          key: "compile",
          value: function compile() {
            var template = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.template,
              depth = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              t = this;
            if (t.compiled) return t.compiled;
            if ("string" != typeof template) throw new Error("Template7: Template must be a string");
            var stringToBlocks = Template7Utils.stringToBlocks,
              getCompileVar = Template7Utils.getCompileVar,
              getCompiledArguments = Template7Utils.getCompiledArguments,
              blocks = stringToBlocks(template),
              ctx = "ctx_".concat(depth),
              data = "data_".concat(depth);
            if (0 === blocks.length) return function () {
              return ""
            };

            function getCompileFn(e, n) {
              return e.content ? t.compile(e.content, n) : function () {
                return ""
              }
            }

            function getCompileInverse(e, n) {
              return e.inverseContent ? t.compile(e.inverseContent, n) : function () {
                return ""
              }
            }
            var resultString = "",
              i;
            for (resultString += 1 === depth ? "(function (".concat(ctx, ", ").concat(data, ", root) {\n") : "(function (".concat(ctx, ", ").concat(data, ") {\n"), 1 === depth && (resultString += "function isArray(arr){return Array.isArray(arr);}\n", resultString += "function isFunction(func){return (typeof func === 'function');}\n", resultString += 'function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n', resultString += "root = root || ctx_1 || {};\n"), resultString += "var r = '';\n", i = 0; i < blocks.length; i += 1) {
              var block = blocks[i];
              if ("plain" !== block.type) {
                var variable = void 0,
                  compiledArguments = void 0;
                if ("variable" === block.type && (variable = getCompileVar(block.contextName, ctx, data), resultString += "r += c(".concat(variable, ", ").concat(ctx, ");")), "helper" === block.type) {
                  var parents = void 0;
                  if ("ctx_1" !== ctx) {
                    for (var level = ctx.split("_")[1], parentsString = "ctx_".concat(level - 1), j = level - 2; j >= 1; j -= 1) parentsString += ", ctx_".concat(j);
                    parents = "[".concat(parentsString, "]")
                  } else parents = "[".concat(ctx, "]");
                  var dynamicHelper = void 0;
                  if (0 === block.helperName.indexOf("[") && (block.helperName = getCompileVar(block.helperName.replace(/[[\]]/g, ""), ctx, data), dynamicHelper = !0), dynamicHelper || block.helperName in Template7Helpers) compiledArguments = getCompiledArguments(block.contextName, ctx, data), resultString += "r += (Template7Helpers".concat(dynamicHelper ? "[".concat(block.helperName, "]") : ".".concat(block.helperName), ").call(").concat(ctx, ", ").concat(compiledArguments && "".concat(compiledArguments, ", "), "{hash:").concat(JSON.stringify(block.hash), ", data: ").concat(data, " || {}, fn: ").concat(getCompileFn(block, depth + 1), ", inverse: ").concat(getCompileInverse(block, depth + 1), ", root: root, parents: ").concat(parents, "});");
                  else {
                    if (block.contextName.length > 0) throw new Error('Template7: Missing helper: "'.concat(block.helperName, '"'));
                    variable = getCompileVar(block.helperName, ctx, data), resultString += "if (".concat(variable, ") {"), resultString += "if (isArray(".concat(variable, ")) {"), resultString += "r += (Template7Helpers.each).call(".concat(ctx, ", ").concat(variable, ", {hash:").concat(JSON.stringify(block.hash), ", data: ").concat(data, " || {}, fn: ").concat(getCompileFn(block, depth + 1), ", inverse: ").concat(getCompileInverse(block, depth + 1), ", root: root, parents: ").concat(parents, "});"), resultString += "}else {", resultString += "r += (Template7Helpers.with).call(".concat(ctx, ", ").concat(variable, ", {hash:").concat(JSON.stringify(block.hash), ", data: ").concat(data, " || {}, fn: ").concat(getCompileFn(block, depth + 1), ", inverse: ").concat(getCompileInverse(block, depth + 1), ", root: root, parents: ").concat(parents, "});"), resultString += "}}"
                  }
                }
              } else resultString += "r +='".concat(block.content.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/'/g, "\\'"), "';")
            }
            return resultString += "\nreturn r;})", 1 === depth ? (t.compiled = eval(resultString), t.compiled) : resultString
          }
        }], [{
          key: "options",
          get: function () {
            return Template7Options
          }
        }, {
          key: "partials",
          get: function () {
            return Template7Partials
          }
        }, {
          key: "helpers",
          get: function () {
            return Template7Helpers
          }
        }]), Template7Class
      }();

    function Template7() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      var r = t[0],
        a = t[1];
      if (2 === t.length) {
        var o = new Template7Class(r),
          i = o.compile()(a);
        return o = null, i
      }
      return new Template7Class(r)
    }
    Template7.registerHelper = function (e, t) {
      Template7Class.helpers[e] = t
    }, Template7.unregisterHelper = function (e) {
      Template7Class.helpers[e] = void 0, delete Template7Class.helpers[e]
    }, Template7.registerPartial = function (e, t) {
      Template7Class.partials[e] = {
        template: t
      }
    }, Template7.unregisterPartial = function (e) {
      Template7Class.partials[e] && (Template7Class.partials[e] = void 0, delete Template7Class.partials[e])
    }, Template7.compile = function (e, t) {
      return new Template7Class(e, t).compile()
    }, Template7.options = Template7Class.options, Template7.helpers = Template7Class.helpers, Template7.partials = Template7Class.partials, __webpack_exports__.a = Template7
  }).call(this, __webpack_require__(1))
}, function (e, t) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function (e, t) {
  e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEiIGhlaWdodD0iMTQwIiB2aWV3Qm94PSIwIDAgMTQxIDE0MCI+CiAgPHBhdGggZmlsbD0iI0VFMzUwRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCA3MEMwIDUzLjE3NjE0ODggNS45MzUxMDc0IDM3LjczODUxNjIgMTUuODI1NzU3OCAyNS42NjY2NjY3TDEyNC4xNzQyNDIgMjUuNjY2NjY2NyA0Ni44ODY1MzMgMTM2LjA5NDE2NEMxOS41ODM5MjIxIDEyNi41NDcwMDIgMCAxMDAuNTYwNTM2IDAgNzB6TTEyOS45MTY5MzMgMzMuNzg2NjMzN0MxMzYuMzE2MzMyIDQ0LjM1MjA5NjkgMTQwIDU2Ljc0NTg2NSAxNDAgNzAgMTQwIDEwOC42NTk5MzIgMTA4LjY1OTkzMiAxNDAgNzAgMTQwIDY1LjM2ODM0NyAxNDAgNjAuODQxNzU3OCAxMzkuNTUwMTY5IDU2LjQ2MTUzNzIgMTM4LjY5MTgxMUwxMjkuOTE2OTMzIDMzLjc4NjYzMzd6TTI1LjA1NDI0OTEgMTYuMzMzMzMzM0MzNy4yMTQzMTEzIDYuMTM4NTA5IDUyLjg5MDI5MjkgMCA3MCAwIDg3LjEwOTcwNzEgMCAxMDIuNzg1Njg5IDYuMTM4NTA5IDExNC45NDU3NTEgMTYuMzMzMzMzM0wyNS4wNTQyNDkxIDE2LjMzMzMzMzMgMjUuMDU0MjQ5MSAxNi4zMzMzMzMzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjUpIi8+Cjwvc3ZnPgo="
}, function (e, t, n) {
  "use strict";
  (function (e, n) {
    var r = Object.freeze({});

    function a(e) {
      return null == e
    }

    function o(e) {
      return null != e
    }

    function i(e) {
      return !0 === e
    }

    function s(e) {
      return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
    }

    function l(e) {
      return null !== e && "object" == typeof e
    }
    var c = Object.prototype.toString;

    function u(e) {
      return "[object Object]" === c.call(e)
    }

    function p(e) {
      return "[object RegExp]" === c.call(e)
    }

    function d(e) {
      var t = parseFloat(String(e));
      return t >= 0 && Math.floor(t) === t && isFinite(e)
    }

    function f(e) {
      return o(e) && "function" == typeof e.then && "function" == typeof e.catch
    }

    function h(e) {
      return null == e ? "" : Array.isArray(e) || u(e) && e.toString === c ? JSON.stringify(e, null, 2) : String(e)
    }

    function v(e) {
      var t = parseFloat(e);
      return isNaN(t) ? e : t
    }

    function g(e, t) {
      for (var n = Object.create(null), r = e.split(","), a = 0; a < r.length; a++) n[r[a]] = !0;
      return t ? function (e) {
        return n[e.toLowerCase()]
      } : function (e) {
        return n[e]
      }
    }
    var m = g("slot,component", !0),
      b = g("key,ref,slot,slot-scope,is");

    function y(e, t) {
      if (e.length) {
        var n = e.indexOf(t);
        if (n > -1) return e.splice(n, 1)
      }
    }
    var k = Object.prototype.hasOwnProperty;

    function w(e, t) {
      return k.call(e, t)
    }

    function C(e) {
      var t = Object.create(null);
      return function (n) {
        return t[n] || (t[n] = e(n))
      }
    }
    var M = /-(\w)/g,
      x = C((function (e) {
        return e.replace(M, (function (e, t) {
          return t ? t.toUpperCase() : ""
        }))
      })),
      S = C((function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      })),
      E = /\B([A-Z])/g,
      T = C((function (e) {
        return e.replace(E, "-$1").toLowerCase()
      }));
    var N = Function.prototype.bind ? function (e, t) {
      return e.bind(t)
    } : function (e, t) {
      function n(n) {
        var r = arguments.length;
        return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
      }
      return n._length = e.length, n
    };

    function O(e, t) {
      t = t || 0;
      for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
      return r
    }

    function D(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }

    function j(e) {
      for (var t = {}, n = 0; n < e.length; n++) e[n] && D(t, e[n]);
      return t
    }

    function A(e, t, n) {}
    var I = function (e, t, n) {
        return !1
      },
      B = function (e) {
        return e
      };

    function P(e, t) {
      if (e === t) return !0;
      var n = l(e),
        r = l(t);
      if (!n || !r) return !n && !r && String(e) === String(t);
      try {
        var a = Array.isArray(e),
          o = Array.isArray(t);
        if (a && o) return e.length === t.length && e.every((function (e, n) {
          return P(e, t[n])
        }));
        if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
        if (a || o) return !1;
        var i = Object.keys(e),
          s = Object.keys(t);
        return i.length === s.length && i.every((function (n) {
          return P(e[n], t[n])
        }))
      } catch (e) {
        return !1
      }
    }

    function $(e, t) {
      for (var n = 0; n < e.length; n++)
        if (P(e[n], t)) return n;
      return -1
    }

    function L(e) {
      var t = !1;
      return function () {
        t || (t = !0, e.apply(this, arguments))
      }
    }
    var _ = "data-server-rendered",
      z = ["component", "directive", "filter"],
      R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
      H = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: I,
        isReservedAttr: I,
        isUnknownElement: I,
        getTagNamespace: A,
        parsePlatformTagName: B,
        mustUseProp: I,
        async: !0,
        _lifecycleHooks: R
      },
      U = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    function F(e) {
      var t = (e + "").charCodeAt(0);
      return 36 === t || 95 === t
    }

    function Q(e, t, n, r) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !!r,
        writable: !0,
        configurable: !0
      })
    }
    var V = new RegExp("[^" + U.source + ".$_\\d]");
    var Y, q = "__proto__" in {},
      W = "undefined" != typeof window,
      Z = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
      G = Z && WXEnvironment.platform.toLowerCase(),
      J = W && window.navigator.userAgent.toLowerCase(),
      X = J && /msie|trident/.test(J),
      K = J && J.indexOf("msie 9.0") > 0,
      ee = J && J.indexOf("edge/") > 0,
      te = (J && J.indexOf("android"), J && /iphone|ipad|ipod|ios/.test(J) || "ios" === G),
      ne = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)),
      re = {}.watch,
      ae = !1;
    if (W) try {
      var oe = {};
      Object.defineProperty(oe, "passive", {
        get: function () {
          ae = !0
        }
      }), window.addEventListener("test-passive", null, oe)
    } catch (e) {}
    var ie = function () {
        return void 0 === Y && (Y = !W && !Z && void 0 !== e && (e.process && "server" === e.process.env.VUE_ENV)), Y
      },
      se = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    function le(e) {
      return "function" == typeof e && /native code/.test(e.toString())
    }
    var ce, ue = "undefined" != typeof Symbol && le(Symbol) && "undefined" != typeof Reflect && le(Reflect.ownKeys);
    ce = "undefined" != typeof Set && le(Set) ? Set : function () {
      function e() {
        this.set = Object.create(null)
      }
      return e.prototype.has = function (e) {
        return !0 === this.set[e]
      }, e.prototype.add = function (e) {
        this.set[e] = !0
      }, e.prototype.clear = function () {
        this.set = Object.create(null)
      }, e
    }();
    var pe = A,
      de = 0,
      fe = function () {
        this.id = de++, this.subs = []
      };
    fe.prototype.addSub = function (e) {
      this.subs.push(e)
    }, fe.prototype.removeSub = function (e) {
      y(this.subs, e)
    }, fe.prototype.depend = function () {
      fe.target && fe.target.addDep(this)
    }, fe.prototype.notify = function () {
      var e = this.subs.slice();
      for (var t = 0, n = e.length; t < n; t++) e[t].update()
    }, fe.target = null;
    var he = [];

    function ve(e) {
      he.push(e), fe.target = e
    }

    function ge() {
      he.pop(), fe.target = he[he.length - 1]
    }
    var me = function (e, t, n, r, a, o, i, s) {
        this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = a, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = i, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
      },
      be = {
        child: {
          configurable: !0
        }
      };
    be.child.get = function () {
      return this.componentInstance
    }, Object.defineProperties(me.prototype, be);
    var ye = function (e) {
      void 0 === e && (e = "");
      var t = new me;
      return t.text = e, t.isComment = !0, t
    };

    function ke(e) {
      return new me(void 0, void 0, void 0, String(e))
    }

    function we(e) {
      var t = new me(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
      return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
    }
    var Ce = Array.prototype,
      Me = Object.create(Ce);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function (e) {
      var t = Ce[e];
      Q(Me, e, (function () {
        for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
        var a, o = t.apply(this, n),
          i = this.__ob__;
        switch (e) {
          case "push":
          case "unshift":
            a = n;
            break;
          case "splice":
            a = n.slice(2)
        }
        return a && i.observeArray(a), i.dep.notify(), o
      }))
    }));
    var xe = Object.getOwnPropertyNames(Me),
      Se = !0;

    function Ee(e) {
      Se = e
    }
    var Te = function (e) {
      this.value = e, this.dep = new fe, this.vmCount = 0, Q(e, "__ob__", this), Array.isArray(e) ? (q ? function (e, t) {
        e.__proto__ = t
      }(e, Me) : function (e, t, n) {
        for (var r = 0, a = n.length; r < a; r++) {
          var o = n[r];
          Q(e, o, t[o])
        }
      }(e, Me, xe), this.observeArray(e)) : this.walk(e)
    };

    function Ne(e, t) {
      var n;
      if (l(e) && !(e instanceof me)) return w(e, "__ob__") && e.__ob__ instanceof Te ? n = e.__ob__ : Se && !ie() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new Te(e)), t && n && n.vmCount++, n
    }

    function Oe(e, t, n, r, a) {
      var o = new fe,
        i = Object.getOwnPropertyDescriptor(e, t);
      if (!i || !1 !== i.configurable) {
        var s = i && i.get,
          l = i && i.set;
        s && !l || 2 !== arguments.length || (n = e[t]);
        var c = !a && Ne(n);
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            var t = s ? s.call(e) : n;
            return fe.target && (o.depend(), c && (c.dep.depend(), Array.isArray(t) && function e(t) {
              for (var n = void 0, r = 0, a = t.length; r < a; r++)(n = t[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && e(n)
            }(t))), t
          },
          set: function (t) {
            var r = s ? s.call(e) : n;
            t === r || t != t && r != r || s && !l || (l ? l.call(e, t) : n = t, c = !a && Ne(t), o.notify())
          }
        })
      }
    }

    function De(e, t, n) {
      if (Array.isArray(e) && d(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
      if (t in e && !(t in Object.prototype)) return e[t] = n, n;
      var r = e.__ob__;
      return e._isVue || r && r.vmCount ? n : r ? (Oe(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
    }

    function je(e, t) {
      if (Array.isArray(e) && d(t)) e.splice(t, 1);
      else {
        var n = e.__ob__;
        e._isVue || n && n.vmCount || w(e, t) && (delete e[t], n && n.dep.notify())
      }
    }
    Te.prototype.walk = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) Oe(e, t[n])
    }, Te.prototype.observeArray = function (e) {
      for (var t = 0, n = e.length; t < n; t++) Ne(e[t])
    };
    var Ae = H.optionMergeStrategies;

    function Ie(e, t) {
      if (!t) return e;
      for (var n, r, a, o = ue ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < o.length; i++) "__ob__" !== (n = o[i]) && (r = e[n], a = t[n], w(e, n) ? r !== a && u(r) && u(a) && Ie(r, a) : De(e, n, a));
      return e
    }

    function Be(e, t, n) {
      return n ? function () {
        var r = "function" == typeof t ? t.call(n, n) : t,
          a = "function" == typeof e ? e.call(n, n) : e;
        return r ? Ie(r, a) : a
      } : t ? e ? function () {
        return Ie("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
      } : t : e
    }

    function Pe(e, t) {
      var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
      return n ? function (e) {
        for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
        return t
      }(n) : n
    }

    function $e(e, t, n, r) {
      var a = Object.create(e || null);
      return t ? D(a, t) : a
    }
    Ae.data = function (e, t, n) {
      return n ? Be(e, t, n) : t && "function" != typeof t ? e : Be(e, t)
    }, R.forEach((function (e) {
      Ae[e] = Pe
    })), z.forEach((function (e) {
      Ae[e + "s"] = $e
    })), Ae.watch = function (e, t, n, r) {
      if (e === re && (e = void 0), t === re && (t = void 0), !t) return Object.create(e || null);
      if (!e) return t;
      var a = {};
      for (var o in D(a, e), t) {
        var i = a[o],
          s = t[o];
        i && !Array.isArray(i) && (i = [i]), a[o] = i ? i.concat(s) : Array.isArray(s) ? s : [s]
      }
      return a
    }, Ae.props = Ae.methods = Ae.inject = Ae.computed = function (e, t, n, r) {
      if (!e) return t;
      var a = Object.create(null);
      return D(a, e), t && D(a, t), a
    }, Ae.provide = Be;
    var Le = function (e, t) {
      return void 0 === t ? e : t
    };

    function _e(e, t, n) {
      if ("function" == typeof t && (t = t.options), function (e, t) {
          var n = e.props;
          if (n) {
            var r, a, o = {};
            if (Array.isArray(n))
              for (r = n.length; r--;) "string" == typeof (a = n[r]) && (o[x(a)] = {
                type: null
              });
            else if (u(n))
              for (var i in n) a = n[i], o[x(i)] = u(a) ? a : {
                type: a
              };
            else 0;
            e.props = o
          }
        }(t), function (e, t) {
          var n = e.inject;
          if (n) {
            var r = e.inject = {};
            if (Array.isArray(n))
              for (var a = 0; a < n.length; a++) r[n[a]] = {
                from: n[a]
              };
            else if (u(n))
              for (var o in n) {
                var i = n[o];
                r[o] = u(i) ? D({
                  from: o
                }, i) : {
                  from: i
                }
              } else 0
          }
        }(t), function (e) {
          var t = e.directives;
          if (t)
            for (var n in t) {
              var r = t[n];
              "function" == typeof r && (t[n] = {
                bind: r,
                update: r
              })
            }
        }(t), !t._base && (t.extends && (e = _e(e, t.extends, n)), t.mixins))
        for (var r = 0, a = t.mixins.length; r < a; r++) e = _e(e, t.mixins[r], n);
      var o, i = {};
      for (o in e) s(o);
      for (o in t) w(e, o) || s(o);

      function s(r) {
        var a = Ae[r] || Le;
        i[r] = a(e[r], t[r], n, r)
      }
      return i
    }

    function ze(e, t, n, r) {
      if ("string" == typeof n) {
        var a = e[t];
        if (w(a, n)) return a[n];
        var o = x(n);
        if (w(a, o)) return a[o];
        var i = S(o);
        return w(a, i) ? a[i] : a[n] || a[o] || a[i]
      }
    }

    function Re(e, t, n, r) {
      var a = t[e],
        o = !w(n, e),
        i = n[e],
        s = Fe(Boolean, a.type);
      if (s > -1)
        if (o && !w(a, "default")) i = !1;
        else if ("" === i || i === T(e)) {
        var l = Fe(String, a.type);
        (l < 0 || s < l) && (i = !0)
      }
      if (void 0 === i) {
        i = function (e, t, n) {
          if (!w(t, "default")) return;
          var r = t.default;
          0;
          if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
          return "function" == typeof r && "Function" !== He(t.type) ? r.call(e) : r
        }(r, a, e);
        var c = Se;
        Ee(!0), Ne(i), Ee(c)
      }
      return i
    }

    function He(e) {
      var t = e && e.toString().match(/^\s*function (\w+)/);
      return t ? t[1] : ""
    }

    function Ue(e, t) {
      return He(e) === He(t)
    }

    function Fe(e, t) {
      if (!Array.isArray(t)) return Ue(t, e) ? 0 : -1;
      for (var n = 0, r = t.length; n < r; n++)
        if (Ue(t[n], e)) return n;
      return -1
    }

    function Qe(e, t, n) {
      ve();
      try {
        if (t)
          for (var r = t; r = r.$parent;) {
            var a = r.$options.errorCaptured;
            if (a)
              for (var o = 0; o < a.length; o++) try {
                if (!1 === a[o].call(r, e, t, n)) return
              } catch (e) {
                Ye(e, r, "errorCaptured hook")
              }
          }
        Ye(e, t, n)
      } finally {
        ge()
      }
    }

    function Ve(e, t, n, r, a) {
      var o;
      try {
        (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && f(o) && !o._handled && (o.catch((function (e) {
          return Qe(e, r, a + " (Promise/async)")
        })), o._handled = !0)
      } catch (e) {
        Qe(e, r, a)
      }
      return o
    }

    function Ye(e, t, n) {
      if (H.errorHandler) try {
        return H.errorHandler.call(null, e, t, n)
      } catch (t) {
        t !== e && qe(t, null, "config.errorHandler")
      }
      qe(e, t, n)
    }

    function qe(e, t, n) {
      if (!W && !Z || "undefined" == typeof console) throw e;
      console.error(e)
    }
    var We, Ze = !1,
      Ge = [],
      Je = !1;

    function Xe() {
      Je = !1;
      var e = Ge.slice(0);
      Ge.length = 0;
      for (var t = 0; t < e.length; t++) e[t]()
    }
    if ("undefined" != typeof Promise && le(Promise)) {
      var Ke = Promise.resolve();
      We = function () {
        Ke.then(Xe), te && setTimeout(A)
      }, Ze = !0
    } else if (X || "undefined" == typeof MutationObserver || !le(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) We = void 0 !== n && le(n) ? function () {
      n(Xe)
    } : function () {
      setTimeout(Xe, 0)
    };
    else {
      var et = 1,
        tt = new MutationObserver(Xe),
        nt = document.createTextNode(String(et));
      tt.observe(nt, {
        characterData: !0
      }), We = function () {
        et = (et + 1) % 2, nt.data = String(et)
      }, Ze = !0
    }

    function rt(e, t) {
      var n;
      if (Ge.push((function () {
          if (e) try {
            e.call(t)
          } catch (e) {
            Qe(e, t, "nextTick")
          } else n && n(t)
        })), Je || (Je = !0, We()), !e && "undefined" != typeof Promise) return new Promise((function (e) {
        n = e
      }))
    }
    var at = new ce;

    function ot(e) {
      ! function e(t, n) {
        var r, a;
        var o = Array.isArray(t);
        if (!o && !l(t) || Object.isFrozen(t) || t instanceof me) return;
        if (t.__ob__) {
          var i = t.__ob__.dep.id;
          if (n.has(i)) return;
          n.add(i)
        }
        if (o)
          for (r = t.length; r--;) e(t[r], n);
        else
          for (a = Object.keys(t), r = a.length; r--;) e(t[a[r]], n)
      }(e, at), at.clear()
    }
    var it = C((function (e) {
      var t = "&" === e.charAt(0),
        n = "~" === (e = t ? e.slice(1) : e).charAt(0),
        r = "!" === (e = n ? e.slice(1) : e).charAt(0);
      return {
        name: e = r ? e.slice(1) : e,
        once: n,
        capture: r,
        passive: t
      }
    }));

    function st(e, t) {
      function n() {
        var e = arguments,
          r = n.fns;
        if (!Array.isArray(r)) return Ve(r, null, arguments, t, "v-on handler");
        for (var a = r.slice(), o = 0; o < a.length; o++) Ve(a[o], null, e, t, "v-on handler")
      }
      return n.fns = e, n
    }

    function lt(e, t, n, r, o, s) {
      var l, c, u, p;
      for (l in e) c = e[l], u = t[l], p = it(l), a(c) || (a(u) ? (a(c.fns) && (c = e[l] = st(c, s)), i(p.once) && (c = e[l] = o(p.name, c, p.capture)), n(p.name, c, p.capture, p.passive, p.params)) : c !== u && (u.fns = c, e[l] = u));
      for (l in t) a(e[l]) && r((p = it(l)).name, t[l], p.capture)
    }

    function ct(e, t, n) {
      var r;
      e instanceof me && (e = e.data.hook || (e.data.hook = {}));
      var s = e[t];

      function l() {
        n.apply(this, arguments), y(r.fns, l)
      }
      a(s) ? r = st([l]) : o(s.fns) && i(s.merged) ? (r = s).fns.push(l) : r = st([s, l]), r.merged = !0, e[t] = r
    }

    function ut(e, t, n, r, a) {
      if (o(t)) {
        if (w(t, n)) return e[n] = t[n], a || delete t[n], !0;
        if (w(t, r)) return e[n] = t[r], a || delete t[r], !0
      }
      return !1
    }

    function pt(e) {
      return s(e) ? [ke(e)] : Array.isArray(e) ? function e(t, n) {
        var r = [];
        var l, c, u, p;
        for (l = 0; l < t.length; l++) a(c = t[l]) || "boolean" == typeof c || (u = r.length - 1, p = r[u], Array.isArray(c) ? c.length > 0 && (dt((c = e(c, (n || "") + "_" + l))[0]) && dt(p) && (r[u] = ke(p.text + c[0].text), c.shift()), r.push.apply(r, c)) : s(c) ? dt(p) ? r[u] = ke(p.text + c) : "" !== c && r.push(ke(c)) : dt(c) && dt(p) ? r[u] = ke(p.text + c.text) : (i(t._isVList) && o(c.tag) && a(c.key) && o(n) && (c.key = "__vlist" + n + "_" + l + "__"), r.push(c)));
        return r
      }(e) : void 0
    }

    function dt(e) {
      return o(e) && o(e.text) && !1 === e.isComment
    }

    function ft(e, t) {
      if (e) {
        for (var n = Object.create(null), r = ue ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < r.length; a++) {
          var o = r[a];
          if ("__ob__" !== o) {
            for (var i = e[o].from, s = t; s;) {
              if (s._provided && w(s._provided, i)) {
                n[o] = s._provided[i];
                break
              }
              s = s.$parent
            }
            if (!s)
              if ("default" in e[o]) {
                var l = e[o].default;
                n[o] = "function" == typeof l ? l.call(t) : l
              } else 0
          }
        }
        return n
      }
    }

    function ht(e, t) {
      if (!e || !e.length) return {};
      for (var n = {}, r = 0, a = e.length; r < a; r++) {
        var o = e[r],
          i = o.data;
        if (i && i.attrs && i.attrs.slot && delete i.attrs.slot, o.context !== t && o.fnContext !== t || !i || null == i.slot)(n.default || (n.default = [])).push(o);
        else {
          var s = i.slot,
            l = n[s] || (n[s] = []);
          "template" === o.tag ? l.push.apply(l, o.children || []) : l.push(o)
        }
      }
      for (var c in n) n[c].every(vt) && delete n[c];
      return n
    }

    function vt(e) {
      return e.isComment && !e.asyncFactory || " " === e.text
    }

    function gt(e, t, n) {
      var a, o = Object.keys(t).length > 0,
        i = e ? !!e.$stable : !o,
        s = e && e.$key;
      if (e) {
        if (e._normalized) return e._normalized;
        if (i && n && n !== r && s === n.$key && !o && !n.$hasNormal) return n;
        for (var l in a = {}, e) e[l] && "$" !== l[0] && (a[l] = mt(t, l, e[l]))
      } else a = {};
      for (var c in t) c in a || (a[c] = bt(t, c));
      return e && Object.isExtensible(e) && (e._normalized = a), Q(a, "$stable", i), Q(a, "$key", s), Q(a, "$hasNormal", o), a
    }

    function mt(e, t, n) {
      var r = function () {
        var e = arguments.length ? n.apply(null, arguments) : n({});
        return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : pt(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
      };
      return n.proxy && Object.defineProperty(e, t, {
        get: r,
        enumerable: !0,
        configurable: !0
      }), r
    }

    function bt(e, t) {
      return function () {
        return e[t]
      }
    }

    function yt(e, t) {
      var n, r, a, i, s;
      if (Array.isArray(e) || "string" == typeof e)
        for (n = new Array(e.length), r = 0, a = e.length; r < a; r++) n[r] = t(e[r], r);
      else if ("number" == typeof e)
        for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
      else if (l(e))
        if (ue && e[Symbol.iterator]) {
          n = [];
          for (var c = e[Symbol.iterator](), u = c.next(); !u.done;) n.push(t(u.value, n.length)), u = c.next()
        } else
          for (i = Object.keys(e), n = new Array(i.length), r = 0, a = i.length; r < a; r++) s = i[r], n[r] = t(e[s], s, r);
      return o(n) || (n = []), n._isVList = !0, n
    }

    function kt(e, t, n, r) {
      var a, o = this.$scopedSlots[e];
      o ? (n = n || {}, r && (n = D(D({}, r), n)), a = o(n) || t) : a = this.$slots[e] || t;
      var i = n && n.slot;
      return i ? this.$createElement("template", {
        slot: i
      }, a) : a
    }

    function wt(e) {
      return ze(this.$options, "filters", e) || B
    }

    function Ct(e, t) {
      return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
    }

    function Mt(e, t, n, r, a) {
      var o = H.keyCodes[t] || n;
      return a && r && !H.keyCodes[t] ? Ct(a, r) : o ? Ct(o, e) : r ? T(r) !== t : void 0
    }

    function xt(e, t, n, r, a) {
      if (n)
        if (l(n)) {
          var o;
          Array.isArray(n) && (n = j(n));
          var i = function (i) {
            if ("class" === i || "style" === i || b(i)) o = e;
            else {
              var s = e.attrs && e.attrs.type;
              o = r || H.mustUseProp(t, s, i) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
            }
            var l = x(i),
              c = T(i);
            l in o || c in o || (o[i] = n[i], a && ((e.on || (e.on = {}))["update:" + i] = function (e) {
              n[i] = e
            }))
          };
          for (var s in n) i(s)
        } else;
      return e
    }

    function St(e, t) {
      var n = this._staticTrees || (this._staticTrees = []),
        r = n[e];
      return r && !t ? r : (Tt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r)
    }

    function Et(e, t, n) {
      return Tt(e, "__once__" + t + (n ? "_" + n : ""), !0), e
    }

    function Tt(e, t, n) {
      if (Array.isArray(e))
        for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && Nt(e[r], t + "_" + r, n);
      else Nt(e, t, n)
    }

    function Nt(e, t, n) {
      e.isStatic = !0, e.key = t, e.isOnce = n
    }

    function Ot(e, t) {
      if (t)
        if (u(t)) {
          var n = e.on = e.on ? D({}, e.on) : {};
          for (var r in t) {
            var a = n[r],
              o = t[r];
            n[r] = a ? [].concat(a, o) : o
          }
        } else;
      return e
    }

    function Dt(e, t, n, r) {
      t = t || {
        $stable: !n
      };
      for (var a = 0; a < e.length; a++) {
        var o = e[a];
        Array.isArray(o) ? Dt(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn)
      }
      return r && (t.$key = r), t
    }

    function jt(e, t) {
      for (var n = 0; n < t.length; n += 2) {
        var r = t[n];
        "string" == typeof r && r && (e[t[n]] = t[n + 1])
      }
      return e
    }

    function At(e, t) {
      return "string" == typeof e ? t + e : e
    }

    function It(e) {
      e._o = Et, e._n = v, e._s = h, e._l = yt, e._t = kt, e._q = P, e._i = $, e._m = St, e._f = wt, e._k = Mt, e._b = xt, e._v = ke, e._e = ye, e._u = Dt, e._g = Ot, e._d = jt, e._p = At
    }

    function Bt(e, t, n, a, o) {
      var s, l = this,
        c = o.options;
      w(a, "_uid") ? (s = Object.create(a))._original = a : (s = a, a = a._original);
      var u = i(c._compiled),
        p = !u;
      this.data = e, this.props = t, this.children = n, this.parent = a, this.listeners = e.on || r, this.injections = ft(c.inject, a), this.slots = function () {
        return l.$slots || gt(e.scopedSlots, l.$slots = ht(n, a)), l.$slots
      }, Object.defineProperty(this, "scopedSlots", {
        enumerable: !0,
        get: function () {
          return gt(e.scopedSlots, this.slots())
        }
      }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = gt(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function (e, t, n, r) {
        var o = Ft(s, e, t, n, r, p);
        return o && !Array.isArray(o) && (o.fnScopeId = c._scopeId, o.fnContext = a), o
      } : this._c = function (e, t, n, r) {
        return Ft(s, e, t, n, r, p)
      }
    }

    function Pt(e, t, n, r, a) {
      var o = we(e);
      return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o
    }

    function $t(e, t) {
      for (var n in t) e[x(n)] = t[n]
    }
    It(Bt.prototype);
    var Lt = {
        init: function (e, t) {
          if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
            var n = e;
            Lt.prepatch(n, n)
          } else {
            (e.componentInstance = function (e, t) {
              var n = {
                  _isComponent: !0,
                  _parentVnode: e,
                  parent: t
                },
                r = e.data.inlineTemplate;
              o(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
              return new e.componentOptions.Ctor(n)
            }(e, Kt)).$mount(t ? e.elm : void 0, t)
          }
        },
        prepatch: function (e, t) {
          var n = t.componentOptions;
          ! function (e, t, n, a, o) {
            0;
            var i = a.data.scopedSlots,
              s = e.$scopedSlots,
              l = !!(i && !i.$stable || s !== r && !s.$stable || i && e.$scopedSlots.$key !== i.$key),
              c = !!(o || e.$options._renderChildren || l);
            e.$options._parentVnode = a, e.$vnode = a, e._vnode && (e._vnode.parent = a);
            if (e.$options._renderChildren = o, e.$attrs = a.data.attrs || r, e.$listeners = n || r, t && e.$options.props) {
              Ee(!1);
              for (var u = e._props, p = e.$options._propKeys || [], d = 0; d < p.length; d++) {
                var f = p[d],
                  h = e.$options.props;
                u[f] = Re(f, h, t, e)
              }
              Ee(!0), e.$options.propsData = t
            }
            n = n || r;
            var v = e.$options._parentListeners;
            e.$options._parentListeners = n, Xt(e, n, v), c && (e.$slots = ht(o, a.context), e.$forceUpdate());
            0
          }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
        },
        insert: function (e) {
          var t, n = e.context,
            r = e.componentInstance;
          r._isMounted || (r._isMounted = !0, rn(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, on.push(t)) : nn(r, !0))
        },
        destroy: function (e) {
          var t = e.componentInstance;
          t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
            if (n && (t._directInactive = !0, tn(t))) return;
            if (!t._inactive) {
              t._inactive = !0;
              for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
              rn(t, "deactivated")
            }
          }(t, !0) : t.$destroy())
        }
      },
      _t = Object.keys(Lt);

    function zt(e, t, n, s, c) {
      if (!a(e)) {
        var u = n.$options._base;
        if (l(e) && (e = u.extend(e)), "function" == typeof e) {
          var p;
          if (a(e.cid) && void 0 === (e = function (e, t) {
              if (i(e.error) && o(e.errorComp)) return e.errorComp;
              if (o(e.resolved)) return e.resolved;
              var n = Vt;
              n && o(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n);
              if (i(e.loading) && o(e.loadingComp)) return e.loadingComp;
              if (n && !o(e.owners)) {
                var r = e.owners = [n],
                  s = !0,
                  c = null,
                  u = null;
                n.$on("hook:destroyed", (function () {
                  return y(r, n)
                }));
                var p = function (e) {
                    for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
                    e && (r.length = 0, null !== c && (clearTimeout(c), c = null), null !== u && (clearTimeout(u), u = null))
                  },
                  d = L((function (n) {
                    e.resolved = Yt(n, t), s ? r.length = 0 : p(!0)
                  })),
                  h = L((function (t) {
                    o(e.errorComp) && (e.error = !0, p(!0))
                  })),
                  v = e(d, h);
                return l(v) && (f(v) ? a(e.resolved) && v.then(d, h) : f(v.component) && (v.component.then(d, h), o(v.error) && (e.errorComp = Yt(v.error, t)), o(v.loading) && (e.loadingComp = Yt(v.loading, t), 0 === v.delay ? e.loading = !0 : c = setTimeout((function () {
                  c = null, a(e.resolved) && a(e.error) && (e.loading = !0, p(!1))
                }), v.delay || 200)), o(v.timeout) && (u = setTimeout((function () {
                  u = null, a(e.resolved) && h(null)
                }), v.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved
              }
            }(p = e, u))) return function (e, t, n, r, a) {
            var o = ye();
            return o.asyncFactory = e, o.asyncMeta = {
              data: t,
              context: n,
              children: r,
              tag: a
            }, o
          }(p, t, n, s, c);
          t = t || {}, En(e), o(t.model) && function (e, t) {
            var n = e.model && e.model.prop || "value",
              r = e.model && e.model.event || "input";
            (t.attrs || (t.attrs = {}))[n] = t.model.value;
            var a = t.on || (t.on = {}),
              i = a[r],
              s = t.model.callback;
            o(i) ? (Array.isArray(i) ? -1 === i.indexOf(s) : i !== s) && (a[r] = [s].concat(i)) : a[r] = s
          }(e.options, t);
          var d = function (e, t, n) {
            var r = t.options.props;
            if (!a(r)) {
              var i = {},
                s = e.attrs,
                l = e.props;
              if (o(s) || o(l))
                for (var c in r) {
                  var u = T(c);
                  ut(i, l, c, u, !0) || ut(i, s, c, u, !1)
                }
              return i
            }
          }(t, e);
          if (i(e.options.functional)) return function (e, t, n, a, i) {
            var s = e.options,
              l = {},
              c = s.props;
            if (o(c))
              for (var u in c) l[u] = Re(u, c, t || r);
            else o(n.attrs) && $t(l, n.attrs), o(n.props) && $t(l, n.props);
            var p = new Bt(n, l, i, a, e),
              d = s.render.call(null, p._c, p);
            if (d instanceof me) return Pt(d, n, p.parent, s, p);
            if (Array.isArray(d)) {
              for (var f = pt(d) || [], h = new Array(f.length), v = 0; v < f.length; v++) h[v] = Pt(f[v], n, p.parent, s, p);
              return h
            }
          }(e, d, t, n, s);
          var h = t.on;
          if (t.on = t.nativeOn, i(e.options.abstract)) {
            var v = t.slot;
            t = {}, v && (t.slot = v)
          }! function (e) {
            for (var t = e.hook || (e.hook = {}), n = 0; n < _t.length; n++) {
              var r = _t[n],
                a = t[r],
                o = Lt[r];
              a === o || a && a._merged || (t[r] = a ? Rt(o, a) : o)
            }
          }(t);
          var g = e.options.name || c;
          return new me("vue-component-" + e.cid + (g ? "-" + g : ""), t, void 0, void 0, void 0, n, {
            Ctor: e,
            propsData: d,
            listeners: h,
            tag: c,
            children: s
          }, p)
        }
      }
    }

    function Rt(e, t) {
      var n = function (n, r) {
        e(n, r), t(n, r)
      };
      return n._merged = !0, n
    }
    var Ht = 1,
      Ut = 2;

    function Ft(e, t, n, r, c, u) {
      return (Array.isArray(n) || s(n)) && (c = r, r = n, n = void 0), i(u) && (c = Ut),
        function (e, t, n, r, s) {
          if (o(n) && o(n.__ob__)) return ye();
          o(n) && o(n.is) && (t = n.is);
          if (!t) return ye();
          0;
          Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
            default: r[0]
          }, r.length = 0);
          s === Ut ? r = pt(r) : s === Ht && (r = function (e) {
            for (var t = 0; t < e.length; t++)
              if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
            return e
          }(r));
          var c, u;
          if ("string" == typeof t) {
            var p;
            u = e.$vnode && e.$vnode.ns || H.getTagNamespace(t), c = H.isReservedTag(t) ? new me(H.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !o(p = ze(e.$options, "components", t)) ? new me(t, n, r, void 0, void 0, e) : zt(p, n, e, r, t)
          } else c = zt(t, n, e, r);
          return Array.isArray(c) ? c : o(c) ? (o(u) && function e(t, n, r) {
            t.ns = n;
            "foreignObject" === t.tag && (n = void 0, r = !0);
            if (o(t.children))
              for (var s = 0, l = t.children.length; s < l; s++) {
                var c = t.children[s];
                o(c.tag) && (a(c.ns) || i(r) && "svg" !== c.tag) && e(c, n, r)
              }
          }(c, u), o(n) && function (e) {
            l(e.style) && ot(e.style);
            l(e.class) && ot(e.class)
          }(n), c) : ye()
        }(e, t, n, r, c)
    }
    var Qt, Vt = null;

    function Yt(e, t) {
      return (e.__esModule || ue && "Module" === e[Symbol.toStringTag]) && (e = e.default), l(e) ? t.extend(e) : e
    }

    function qt(e) {
      return e.isComment && e.asyncFactory
    }

    function Wt(e) {
      if (Array.isArray(e))
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (o(n) && (o(n.componentOptions) || qt(n))) return n
        }
    }

    function Zt(e, t) {
      Qt.$on(e, t)
    }

    function Gt(e, t) {
      Qt.$off(e, t)
    }

    function Jt(e, t) {
      var n = Qt;
      return function r() {
        var a = t.apply(null, arguments);
        null !== a && n.$off(e, r)
      }
    }

    function Xt(e, t, n) {
      Qt = e, lt(t, n || {}, Zt, Gt, Jt, e), Qt = void 0
    }
    var Kt = null;

    function en(e) {
      var t = Kt;
      return Kt = e,
        function () {
          Kt = t
        }
    }

    function tn(e) {
      for (; e && (e = e.$parent);)
        if (e._inactive) return !0;
      return !1
    }

    function nn(e, t) {
      if (t) {
        if (e._directInactive = !1, tn(e)) return
      } else if (e._directInactive) return;
      if (e._inactive || null === e._inactive) {
        e._inactive = !1;
        for (var n = 0; n < e.$children.length; n++) nn(e.$children[n]);
        rn(e, "activated")
      }
    }

    function rn(e, t) {
      ve();
      var n = e.$options[t],
        r = t + " hook";
      if (n)
        for (var a = 0, o = n.length; a < o; a++) Ve(n[a], e, null, e, r);
      e._hasHookEvent && e.$emit("hook:" + t), ge()
    }
    var an = [],
      on = [],
      sn = {},
      ln = !1,
      cn = !1,
      un = 0;
    var pn = 0,
      dn = Date.now;
    if (W && !X) {
      var fn = window.performance;
      fn && "function" == typeof fn.now && dn() > document.createEvent("Event").timeStamp && (dn = function () {
        return fn.now()
      })
    }

    function hn() {
      var e, t;
      for (pn = dn(), cn = !0, an.sort((function (e, t) {
          return e.id - t.id
        })), un = 0; un < an.length; un++)(e = an[un]).before && e.before(), t = e.id, sn[t] = null, e.run();
      var n = on.slice(),
        r = an.slice();
      un = an.length = on.length = 0, sn = {}, ln = cn = !1,
        function (e) {
          for (var t = 0; t < e.length; t++) e[t]._inactive = !0, nn(e[t], !0)
        }(n),
        function (e) {
          var t = e.length;
          for (; t--;) {
            var n = e[t],
              r = n.vm;
            r._watcher === n && r._isMounted && !r._isDestroyed && rn(r, "updated")
          }
        }(r), se && H.devtools && se.emit("flush")
    }
    var vn = 0,
      gn = function (e, t, n, r, a) {
        this.vm = e, a && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++vn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ce, this.newDepIds = new ce, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
          if (!V.test(e)) {
            var t = e.split(".");
            return function (e) {
              for (var n = 0; n < t.length; n++) {
                if (!e) return;
                e = e[t[n]]
              }
              return e
            }
          }
        }(t), this.getter || (this.getter = A)), this.value = this.lazy ? void 0 : this.get()
      };
    gn.prototype.get = function () {
      var e;
      ve(this);
      var t = this.vm;
      try {
        e = this.getter.call(t, t)
      } catch (e) {
        if (!this.user) throw e;
        Qe(e, t, 'getter for watcher "' + this.expression + '"')
      } finally {
        this.deep && ot(e), ge(), this.cleanupDeps()
      }
      return e
    }, gn.prototype.addDep = function (e) {
      var t = e.id;
      this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
    }, gn.prototype.cleanupDeps = function () {
      for (var e = this.deps.length; e--;) {
        var t = this.deps[e];
        this.newDepIds.has(t.id) || t.removeSub(this)
      }
      var n = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
    }, gn.prototype.update = function () {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
        var t = e.id;
        if (null == sn[t]) {
          if (sn[t] = !0, cn) {
            for (var n = an.length - 1; n > un && an[n].id > e.id;) n--;
            an.splice(n + 1, 0, e)
          } else an.push(e);
          ln || (ln = !0, rt(hn))
        }
      }(this)
    }, gn.prototype.run = function () {
      if (this.active) {
        var e = this.get();
        if (e !== this.value || l(e) || this.deep) {
          var t = this.value;
          if (this.value = e, this.user) try {
            this.cb.call(this.vm, e, t)
          } catch (e) {
            Qe(e, this.vm, 'callback for watcher "' + this.expression + '"')
          } else this.cb.call(this.vm, e, t)
        }
      }
    }, gn.prototype.evaluate = function () {
      this.value = this.get(), this.dirty = !1
    }, gn.prototype.depend = function () {
      for (var e = this.deps.length; e--;) this.deps[e].depend()
    }, gn.prototype.teardown = function () {
      if (this.active) {
        this.vm._isBeingDestroyed || y(this.vm._watchers, this);
        for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
        this.active = !1
      }
    };
    var mn = {
      enumerable: !0,
      configurable: !0,
      get: A,
      set: A
    };

    function bn(e, t, n) {
      mn.get = function () {
        return this[t][n]
      }, mn.set = function (e) {
        this[t][n] = e
      }, Object.defineProperty(e, n, mn)
    }

    function yn(e) {
      e._watchers = [];
      var t = e.$options;
      t.props && function (e, t) {
        var n = e.$options.propsData || {},
          r = e._props = {},
          a = e.$options._propKeys = [];
        e.$parent && Ee(!1);
        var o = function (o) {
          a.push(o);
          var i = Re(o, t, n, e);
          Oe(r, o, i), o in e || bn(e, "_props", o)
        };
        for (var i in t) o(i);
        Ee(!0)
      }(e, t.props), t.methods && function (e, t) {
        e.$options.props;
        for (var n in t) e[n] = "function" != typeof t[n] ? A : N(t[n], e)
      }(e, t.methods), t.data ? function (e) {
        var t = e.$options.data;
        u(t = e._data = "function" == typeof t ? function (e, t) {
          ve();
          try {
            return e.call(t, t)
          } catch (e) {
            return Qe(e, t, "data()"), {}
          } finally {
            ge()
          }
        }(t, e) : t || {}) || (t = {});
        var n = Object.keys(t),
          r = e.$options.props,
          a = (e.$options.methods, n.length);
        for (; a--;) {
          var o = n[a];
          0, r && w(r, o) || F(o) || bn(e, "_data", o)
        }
        Ne(t, !0)
      }(e) : Ne(e._data = {}, !0), t.computed && function (e, t) {
        var n = e._computedWatchers = Object.create(null),
          r = ie();
        for (var a in t) {
          var o = t[a],
            i = "function" == typeof o ? o : o.get;
          0, r || (n[a] = new gn(e, i || A, A, kn)), a in e || wn(e, a, o)
        }
      }(e, t.computed), t.watch && t.watch !== re && function (e, t) {
        for (var n in t) {
          var r = t[n];
          if (Array.isArray(r))
            for (var a = 0; a < r.length; a++) xn(e, n, r[a]);
          else xn(e, n, r)
        }
      }(e, t.watch)
    }
    var kn = {
      lazy: !0
    };

    function wn(e, t, n) {
      var r = !ie();
      "function" == typeof n ? (mn.get = r ? Cn(t) : Mn(n), mn.set = A) : (mn.get = n.get ? r && !1 !== n.cache ? Cn(t) : Mn(n.get) : A, mn.set = n.set || A), Object.defineProperty(e, t, mn)
    }

    function Cn(e) {
      return function () {
        var t = this._computedWatchers && this._computedWatchers[e];
        if (t) return t.dirty && t.evaluate(), fe.target && t.depend(), t.value
      }
    }

    function Mn(e) {
      return function () {
        return e.call(this, this)
      }
    }

    function xn(e, t, n, r) {
      return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
    }
    var Sn = 0;

    function En(e) {
      var t = e.options;
      if (e.super) {
        var n = En(e.super);
        if (n !== e.superOptions) {
          e.superOptions = n;
          var r = function (e) {
            var t, n = e.options,
              r = e.sealedOptions;
            for (var a in n) n[a] !== r[a] && (t || (t = {}), t[a] = n[a]);
            return t
          }(e);
          r && D(e.extendOptions, r), (t = e.options = _e(n, e.extendOptions)).name && (t.components[t.name] = e)
        }
      }
      return t
    }

    function Tn(e) {
      this._init(e)
    }

    function Nn(e) {
      e.cid = 0;
      var t = 1;
      e.extend = function (e) {
        e = e || {};
        var n = this,
          r = n.cid,
          a = e._Ctor || (e._Ctor = {});
        if (a[r]) return a[r];
        var o = e.name || n.options.name;
        var i = function (e) {
          this._init(e)
        };
        return (i.prototype = Object.create(n.prototype)).constructor = i, i.cid = t++, i.options = _e(n.options, e), i.super = n, i.options.props && function (e) {
          var t = e.options.props;
          for (var n in t) bn(e.prototype, "_props", n)
        }(i), i.options.computed && function (e) {
          var t = e.options.computed;
          for (var n in t) wn(e.prototype, n, t[n])
        }(i), i.extend = n.extend, i.mixin = n.mixin, i.use = n.use, z.forEach((function (e) {
          i[e] = n[e]
        })), o && (i.options.components[o] = i), i.superOptions = n.options, i.extendOptions = e, i.sealedOptions = D({}, i.options), a[r] = i, i
      }
    }

    function On(e) {
      return e && (e.Ctor.options.name || e.tag)
    }

    function Dn(e, t) {
      return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!p(e) && e.test(t)
    }

    function jn(e, t) {
      var n = e.cache,
        r = e.keys,
        a = e._vnode;
      for (var o in n) {
        var i = n[o];
        if (i) {
          var s = On(i.componentOptions);
          s && !t(s) && An(n, o, r, a)
        }
      }
    }

    function An(e, t, n, r) {
      var a = e[t];
      !a || r && a.tag === r.tag || a.componentInstance.$destroy(), e[t] = null, y(n, t)
    }! function (e) {
      e.prototype._init = function (e) {
        var t = this;
        t._uid = Sn++, t._isVue = !0, e && e._isComponent ? function (e, t) {
            var n = e.$options = Object.create(e.constructor.options),
              r = t._parentVnode;
            n.parent = t.parent, n._parentVnode = r;
            var a = r.componentOptions;
            n.propsData = a.propsData, n._parentListeners = a.listeners, n._renderChildren = a.children, n._componentTag = a.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
          }(t, e) : t.$options = _e(En(t.constructor), e || {}, t), t._renderProxy = t, t._self = t,
          function (e) {
            var t = e.$options,
              n = t.parent;
            if (n && !t.abstract) {
              for (; n.$options.abstract && n.$parent;) n = n.$parent;
              n.$children.push(e)
            }
            e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
          }(t),
          function (e) {
            e._events = Object.create(null), e._hasHookEvent = !1;
            var t = e.$options._parentListeners;
            t && Xt(e, t)
          }(t),
          function (e) {
            e._vnode = null, e._staticTrees = null;
            var t = e.$options,
              n = e.$vnode = t._parentVnode,
              a = n && n.context;
            e.$slots = ht(t._renderChildren, a), e.$scopedSlots = r, e._c = function (t, n, r, a) {
              return Ft(e, t, n, r, a, !1)
            }, e.$createElement = function (t, n, r, a) {
              return Ft(e, t, n, r, a, !0)
            };
            var o = n && n.data;
            Oe(e, "$attrs", o && o.attrs || r, null, !0), Oe(e, "$listeners", t._parentListeners || r, null, !0)
          }(t), rn(t, "beforeCreate"),
          function (e) {
            var t = ft(e.$options.inject, e);
            t && (Ee(!1), Object.keys(t).forEach((function (n) {
              Oe(e, n, t[n])
            })), Ee(!0))
          }(t), yn(t),
          function (e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t)
          }(t), rn(t, "created"), t.$options.el && t.$mount(t.$options.el)
      }
    }(Tn),
    function (e) {
      var t = {
          get: function () {
            return this._data
          }
        },
        n = {
          get: function () {
            return this._props
          }
        };
      Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = De, e.prototype.$delete = je, e.prototype.$watch = function (e, t, n) {
        if (u(t)) return xn(this, e, t, n);
        (n = n || {}).user = !0;
        var r = new gn(this, e, t, n);
        if (n.immediate) try {
          t.call(this, r.value)
        } catch (e) {
          Qe(e, this, 'callback for immediate watcher "' + r.expression + '"')
        }
        return function () {
          r.teardown()
        }
      }
    }(Tn),
    function (e) {
      var t = /^hook:/;
      e.prototype.$on = function (e, n) {
        var r = this;
        if (Array.isArray(e))
          for (var a = 0, o = e.length; a < o; a++) r.$on(e[a], n);
        else(r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
        return r
      }, e.prototype.$once = function (e, t) {
        var n = this;

        function r() {
          n.$off(e, r), t.apply(n, arguments)
        }
        return r.fn = t, n.$on(e, r), n
      }, e.prototype.$off = function (e, t) {
        var n = this;
        if (!arguments.length) return n._events = Object.create(null), n;
        if (Array.isArray(e)) {
          for (var r = 0, a = e.length; r < a; r++) n.$off(e[r], t);
          return n
        }
        var o, i = n._events[e];
        if (!i) return n;
        if (!t) return n._events[e] = null, n;
        for (var s = i.length; s--;)
          if ((o = i[s]) === t || o.fn === t) {
            i.splice(s, 1);
            break
          } return n
      }, e.prototype.$emit = function (e) {
        var t = this,
          n = t._events[e];
        if (n) {
          n = n.length > 1 ? O(n) : n;
          for (var r = O(arguments, 1), a = 'event handler for "' + e + '"', o = 0, i = n.length; o < i; o++) Ve(n[o], t, r, t, a)
        }
        return t
      }
    }(Tn),
    function (e) {
      e.prototype._update = function (e, t) {
        var n = this,
          r = n.$el,
          a = n._vnode,
          o = en(n);
        n._vnode = e, n.$el = a ? n.__patch__(a, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
      }, e.prototype.$forceUpdate = function () {
        this._watcher && this._watcher.update()
      }, e.prototype.$destroy = function () {
        var e = this;
        if (!e._isBeingDestroyed) {
          rn(e, "beforeDestroy"), e._isBeingDestroyed = !0;
          var t = e.$parent;
          !t || t._isBeingDestroyed || e.$options.abstract || y(t.$children, e), e._watcher && e._watcher.teardown();
          for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
          e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), rn(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
        }
      }
    }(Tn),
    function (e) {
      It(e.prototype), e.prototype.$nextTick = function (e) {
        return rt(e, this)
      }, e.prototype._render = function () {
        var e, t = this,
          n = t.$options,
          r = n.render,
          a = n._parentVnode;
        a && (t.$scopedSlots = gt(a.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = a;
        try {
          Vt = t, e = r.call(t._renderProxy, t.$createElement)
        } catch (n) {
          Qe(n, t, "render"), e = t._vnode
        } finally {
          Vt = null
        }
        return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof me || (e = ye()), e.parent = a, e
      }
    }(Tn);
    var In = [String, RegExp, Array],
      Bn = {
        KeepAlive: {
          name: "keep-alive",
          abstract: !0,
          props: {
            include: In,
            exclude: In,
            max: [String, Number]
          },
          created: function () {
            this.cache = Object.create(null), this.keys = []
          },
          destroyed: function () {
            for (var e in this.cache) An(this.cache, e, this.keys)
          },
          mounted: function () {
            var e = this;
            this.$watch("include", (function (t) {
              jn(e, (function (e) {
                return Dn(t, e)
              }))
            })), this.$watch("exclude", (function (t) {
              jn(e, (function (e) {
                return !Dn(t, e)
              }))
            }))
          },
          render: function () {
            var e = this.$slots.default,
              t = Wt(e),
              n = t && t.componentOptions;
            if (n) {
              var r = On(n),
                a = this.include,
                o = this.exclude;
              if (a && (!r || !Dn(a, r)) || o && r && Dn(o, r)) return t;
              var i = this.cache,
                s = this.keys,
                l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
              i[l] ? (t.componentInstance = i[l].componentInstance, y(s, l), s.push(l)) : (i[l] = t, s.push(l), this.max && s.length > parseInt(this.max) && An(i, s[0], s, this._vnode)), t.data.keepAlive = !0
            }
            return t || e && e[0]
          }
        }
      };
    ! function (e) {
      var t = {
        get: function () {
          return H
        }
      };
      Object.defineProperty(e, "config", t), e.util = {
          warn: pe,
          extend: D,
          mergeOptions: _e,
          defineReactive: Oe
        }, e.set = De, e.delete = je, e.nextTick = rt, e.observable = function (e) {
          return Ne(e), e
        }, e.options = Object.create(null), z.forEach((function (t) {
          e.options[t + "s"] = Object.create(null)
        })), e.options._base = e, D(e.options.components, Bn),
        function (e) {
          e.use = function (e) {
            var t = this._installedPlugins || (this._installedPlugins = []);
            if (t.indexOf(e) > -1) return this;
            var n = O(arguments, 1);
            return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
          }
        }(e),
        function (e) {
          e.mixin = function (e) {
            return this.options = _e(this.options, e), this
          }
        }(e), Nn(e),
        function (e) {
          z.forEach((function (t) {
            e[t] = function (e, n) {
              return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                bind: n,
                update: n
              }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
            }
          }))
        }(e)
    }(Tn), Object.defineProperty(Tn.prototype, "$isServer", {
      get: ie
    }), Object.defineProperty(Tn.prototype, "$ssrContext", {
      get: function () {
        return this.$vnode && this.$vnode.ssrContext
      }
    }), Object.defineProperty(Tn, "FunctionalRenderContext", {
      value: Bt
    }), Tn.version = "2.6.10";
    var Pn = g("style,class"),
      $n = g("input,textarea,option,select,progress"),
      Ln = function (e, t, n) {
        return "value" === n && $n(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
      },
      _n = g("contenteditable,draggable,spellcheck"),
      zn = g("events,caret,typing,plaintext-only"),
      Rn = function (e, t) {
        return Vn(t) || "false" === t ? "false" : "contenteditable" === e && zn(t) ? t : "true"
      },
      Hn = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
      Un = "http://www.w3.org/1999/xlink",
      Fn = function (e) {
        return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
      },
      Qn = function (e) {
        return Fn(e) ? e.slice(6, e.length) : ""
      },
      Vn = function (e) {
        return null == e || !1 === e
      };

    function Yn(e) {
      for (var t = e.data, n = e, r = e; o(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (t = qn(r.data, t));
      for (; o(n = n.parent);) n && n.data && (t = qn(t, n.data));
      return function (e, t) {
        if (o(e) || o(t)) return Wn(e, Zn(t));
        return ""
      }(t.staticClass, t.class)
    }

    function qn(e, t) {
      return {
        staticClass: Wn(e.staticClass, t.staticClass),
        class: o(e.class) ? [e.class, t.class] : t.class
      }
    }

    function Wn(e, t) {
      return e ? t ? e + " " + t : e : t || ""
    }

    function Zn(e) {
      return Array.isArray(e) ? function (e) {
        for (var t, n = "", r = 0, a = e.length; r < a; r++) o(t = Zn(e[r])) && "" !== t && (n && (n += " "), n += t);
        return n
      }(e) : l(e) ? function (e) {
        var t = "";
        for (var n in e) e[n] && (t && (t += " "), t += n);
        return t
      }(e) : "string" == typeof e ? e : ""
    }
    var Gn = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
      },
      Jn = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
      Xn = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
      Kn = function (e) {
        return Jn(e) || Xn(e)
      };

    function er(e) {
      return Xn(e) ? "svg" : "math" === e ? "math" : void 0
    }
    var tr = Object.create(null);
    var nr = g("text,number,password,search,email,tel,url");

    function rr(e) {
      if ("string" == typeof e) {
        var t = document.querySelector(e);
        return t || document.createElement("div")
      }
      return e
    }
    var ar = Object.freeze({
        createElement: function (e, t) {
          var n = document.createElement(e);
          return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
        },
        createElementNS: function (e, t) {
          return document.createElementNS(Gn[e], t)
        },
        createTextNode: function (e) {
          return document.createTextNode(e)
        },
        createComment: function (e) {
          return document.createComment(e)
        },
        insertBefore: function (e, t, n) {
          e.insertBefore(t, n)
        },
        removeChild: function (e, t) {
          e.removeChild(t)
        },
        appendChild: function (e, t) {
          e.appendChild(t)
        },
        parentNode: function (e) {
          return e.parentNode
        },
        nextSibling: function (e) {
          return e.nextSibling
        },
        tagName: function (e) {
          return e.tagName
        },
        setTextContent: function (e, t) {
          e.textContent = t
        },
        setStyleScope: function (e, t) {
          e.setAttribute(t, "")
        }
      }),
      or = {
        create: function (e, t) {
          ir(t)
        },
        update: function (e, t) {
          e.data.ref !== t.data.ref && (ir(e, !0), ir(t))
        },
        destroy: function (e) {
          ir(e, !0)
        }
      };

    function ir(e, t) {
      var n = e.data.ref;
      if (o(n)) {
        var r = e.context,
          a = e.componentInstance || e.elm,
          i = r.$refs;
        t ? Array.isArray(i[n]) ? y(i[n], a) : i[n] === a && (i[n] = void 0) : e.data.refInFor ? Array.isArray(i[n]) ? i[n].indexOf(a) < 0 && i[n].push(a) : i[n] = [a] : i[n] = a
      }
    }
    var sr = new me("", {}, []),
      lr = ["create", "activate", "update", "remove", "destroy"];

    function cr(e, t) {
      return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && o(e.data) === o(t.data) && function (e, t) {
        if ("input" !== e.tag) return !0;
        var n, r = o(n = e.data) && o(n = n.attrs) && n.type,
          a = o(n = t.data) && o(n = n.attrs) && n.type;
        return r === a || nr(r) && nr(a)
      }(e, t) || i(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && a(t.asyncFactory.error))
    }

    function ur(e, t, n) {
      var r, a, i = {};
      for (r = t; r <= n; ++r) o(a = e[r].key) && (i[a] = r);
      return i
    }
    var pr = {
      create: dr,
      update: dr,
      destroy: function (e) {
        dr(e, sr)
      }
    };

    function dr(e, t) {
      (e.data.directives || t.data.directives) && function (e, t) {
        var n, r, a, o = e === sr,
          i = t === sr,
          s = hr(e.data.directives, e.context),
          l = hr(t.data.directives, t.context),
          c = [],
          u = [];
        for (n in l) r = s[n], a = l[n], r ? (a.oldValue = r.value, a.oldArg = r.arg, gr(a, "update", t, e), a.def && a.def.componentUpdated && u.push(a)) : (gr(a, "bind", t, e), a.def && a.def.inserted && c.push(a));
        if (c.length) {
          var p = function () {
            for (var n = 0; n < c.length; n++) gr(c[n], "inserted", t, e)
          };
          o ? ct(t, "insert", p) : p()
        }
        u.length && ct(t, "postpatch", (function () {
          for (var n = 0; n < u.length; n++) gr(u[n], "componentUpdated", t, e)
        }));
        if (!o)
          for (n in s) l[n] || gr(s[n], "unbind", e, e, i)
      }(e, t)
    }
    var fr = Object.create(null);

    function hr(e, t) {
      var n, r, a = Object.create(null);
      if (!e) return a;
      for (n = 0; n < e.length; n++)(r = e[n]).modifiers || (r.modifiers = fr), a[vr(r)] = r, r.def = ze(t.$options, "directives", r.name);
      return a
    }

    function vr(e) {
      return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
    }

    function gr(e, t, n, r, a) {
      var o = e.def && e.def[t];
      if (o) try {
        o(n.elm, e, n, r, a)
      } catch (r) {
        Qe(r, n.context, "directive " + e.name + " " + t + " hook")
      }
    }
    var mr = [or, pr];

    function br(e, t) {
      var n = t.componentOptions;
      if (!(o(n) && !1 === n.Ctor.options.inheritAttrs || a(e.data.attrs) && a(t.data.attrs))) {
        var r, i, s = t.elm,
          l = e.data.attrs || {},
          c = t.data.attrs || {};
        for (r in o(c.__ob__) && (c = t.data.attrs = D({}, c)), c) i = c[r], l[r] !== i && yr(s, r, i);
        for (r in (X || ee) && c.value !== l.value && yr(s, "value", c.value), l) a(c[r]) && (Fn(r) ? s.removeAttributeNS(Un, Qn(r)) : _n(r) || s.removeAttribute(r))
      }
    }

    function yr(e, t, n) {
      e.tagName.indexOf("-") > -1 ? kr(e, t, n) : Hn(t) ? Vn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : _n(t) ? e.setAttribute(t, Rn(t, n)) : Fn(t) ? Vn(n) ? e.removeAttributeNS(Un, Qn(t)) : e.setAttributeNS(Un, t, n) : kr(e, t, n)
    }

    function kr(e, t, n) {
      if (Vn(n)) e.removeAttribute(t);
      else {
        if (X && !K && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
          var r = function (t) {
            t.stopImmediatePropagation(), e.removeEventListener("input", r)
          };
          e.addEventListener("input", r), e.__ieph = !0
        }
        e.setAttribute(t, n)
      }
    }
    var wr = {
      create: br,
      update: br
    };

    function Cr(e, t) {
      var n = t.elm,
        r = t.data,
        i = e.data;
      if (!(a(r.staticClass) && a(r.class) && (a(i) || a(i.staticClass) && a(i.class)))) {
        var s = Yn(t),
          l = n._transitionClasses;
        o(l) && (s = Wn(s, Zn(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s)
      }
    }
    var Mr, xr, Sr, Er, Tr, Nr, Or = {
        create: Cr,
        update: Cr
      },
      Dr = /[\w).+\-_$\]]/;

    function jr(e) {
      var t, n, r, a, o, i = !1,
        s = !1,
        l = !1,
        c = !1,
        u = 0,
        p = 0,
        d = 0,
        f = 0;
      for (r = 0; r < e.length; r++)
        if (n = t, t = e.charCodeAt(r), i) 39 === t && 92 !== n && (i = !1);
        else if (s) 34 === t && 92 !== n && (s = !1);
      else if (l) 96 === t && 92 !== n && (l = !1);
      else if (c) 47 === t && 92 !== n && (c = !1);
      else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || u || p || d) {
        switch (t) {
          case 34:
            s = !0;
            break;
          case 39:
            i = !0;
            break;
          case 96:
            l = !0;
            break;
          case 40:
            d++;
            break;
          case 41:
            d--;
            break;
          case 91:
            p++;
            break;
          case 93:
            p--;
            break;
          case 123:
            u++;
            break;
          case 125:
            u--
        }
        if (47 === t) {
          for (var h = r - 1, v = void 0; h >= 0 && " " === (v = e.charAt(h)); h--);
          v && Dr.test(v) || (c = !0)
        }
      } else void 0 === a ? (f = r + 1, a = e.slice(0, r).trim()) : g();

      function g() {
        (o || (o = [])).push(e.slice(f, r).trim()), f = r + 1
      }
      if (void 0 === a ? a = e.slice(0, r).trim() : 0 !== f && g(), o)
        for (r = 0; r < o.length; r++) a = Ar(a, o[r]);
      return a
    }

    function Ar(e, t) {
      var n = t.indexOf("(");
      if (n < 0) return '_f("' + t + '")(' + e + ")";
      var r = t.slice(0, n),
        a = t.slice(n + 1);
      return '_f("' + r + '")(' + e + (")" !== a ? "," + a : a)
    }

    function Ir(e, t) {
      console.error("[Vue compiler]: " + e)
    }

    function Br(e, t) {
      return e ? e.map((function (e) {
        return e[t]
      })).filter((function (e) {
        return e
      })) : []
    }

    function Pr(e, t, n, r, a) {
      (e.props || (e.props = [])).push(Qr({
        name: t,
        value: n,
        dynamic: a
      }, r)), e.plain = !1
    }

    function $r(e, t, n, r, a) {
      (a ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Qr({
        name: t,
        value: n,
        dynamic: a
      }, r)), e.plain = !1
    }

    function Lr(e, t, n, r) {
      e.attrsMap[t] = n, e.attrsList.push(Qr({
        name: t,
        value: n
      }, r))
    }

    function _r(e, t, n, r, a, o, i, s) {
      (e.directives || (e.directives = [])).push(Qr({
        name: t,
        rawName: n,
        value: r,
        arg: a,
        isDynamicArg: o,
        modifiers: i
      }, s)), e.plain = !1
    }

    function zr(e, t, n) {
      return n ? "_p(" + t + ',"' + e + '")' : e + t
    }

    function Rr(e, t, n, a, o, i, s, l) {
      var c;
      (a = a || r).right ? l ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete a.right) : a.middle && (l ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")), a.capture && (delete a.capture, t = zr("!", t, l)), a.once && (delete a.once, t = zr("~", t, l)), a.passive && (delete a.passive, t = zr("&", t, l)), a.native ? (delete a.native, c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
      var u = Qr({
        value: n.trim(),
        dynamic: l
      }, s);
      a !== r && (u.modifiers = a);
      var p = c[t];
      Array.isArray(p) ? o ? p.unshift(u) : p.push(u) : c[t] = p ? o ? [u, p] : [p, u] : u, e.plain = !1
    }

    function Hr(e, t, n) {
      var r = Ur(e, ":" + t) || Ur(e, "v-bind:" + t);
      if (null != r) return jr(r);
      if (!1 !== n) {
        var a = Ur(e, t);
        if (null != a) return JSON.stringify(a)
      }
    }

    function Ur(e, t, n) {
      var r;
      if (null != (r = e.attrsMap[t]))
        for (var a = e.attrsList, o = 0, i = a.length; o < i; o++)
          if (a[o].name === t) {
            a.splice(o, 1);
            break
          } return n && delete e.attrsMap[t], r
    }

    function Fr(e, t) {
      for (var n = e.attrsList, r = 0, a = n.length; r < a; r++) {
        var o = n[r];
        if (t.test(o.name)) return n.splice(r, 1), o
      }
    }

    function Qr(e, t) {
      return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e
    }

    function Vr(e, t, n) {
      var r = n || {},
        a = r.number,
        o = "$$v";
      r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), a && (o = "_n(" + o + ")");
      var i = Yr(t, o);
      e.model = {
        value: "(" + t + ")",
        expression: JSON.stringify(t),
        callback: "function ($$v) {" + i + "}"
      }
    }

    function Yr(e, t) {
      var n = function (e) {
        if (e = e.trim(), Mr = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < Mr - 1) return (Er = e.lastIndexOf(".")) > -1 ? {
          exp: e.slice(0, Er),
          key: '"' + e.slice(Er + 1) + '"'
        } : {
          exp: e,
          key: null
        };
        xr = e, Er = Tr = Nr = 0;
        for (; !Wr();) Zr(Sr = qr()) ? Jr(Sr) : 91 === Sr && Gr(Sr);
        return {
          exp: e.slice(0, Tr),
          key: e.slice(Tr + 1, Nr)
        }
      }(e);
      return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
    }

    function qr() {
      return xr.charCodeAt(++Er)
    }

    function Wr() {
      return Er >= Mr
    }

    function Zr(e) {
      return 34 === e || 39 === e
    }

    function Gr(e) {
      var t = 1;
      for (Tr = Er; !Wr();)
        if (Zr(e = qr())) Jr(e);
        else if (91 === e && t++, 93 === e && t--, 0 === t) {
        Nr = Er;
        break
      }
    }

    function Jr(e) {
      for (var t = e; !Wr() && (e = qr()) !== t;);
    }
    var Xr, Kr = "__r",
      ea = "__c";

    function ta(e, t, n) {
      var r = Xr;
      return function a() {
        var o = t.apply(null, arguments);
        null !== o && aa(e, a, n, r)
      }
    }
    var na = Ze && !(ne && Number(ne[1]) <= 53);

    function ra(e, t, n, r) {
      if (na) {
        var a = pn,
          o = t;
        t = o._wrapper = function (e) {
          if (e.target === e.currentTarget || e.timeStamp >= a || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments)
        }
      }
      Xr.addEventListener(e, t, ae ? {
        capture: n,
        passive: r
      } : n)
    }

    function aa(e, t, n, r) {
      (r || Xr).removeEventListener(e, t._wrapper || t, n)
    }

    function oa(e, t) {
      if (!a(e.data.on) || !a(t.data.on)) {
        var n = t.data.on || {},
          r = e.data.on || {};
        Xr = t.elm,
          function (e) {
            if (o(e[Kr])) {
              var t = X ? "change" : "input";
              e[t] = [].concat(e[Kr], e[t] || []), delete e[Kr]
            }
            o(e[ea]) && (e.change = [].concat(e[ea], e.change || []), delete e[ea])
          }(n), lt(n, r, ra, aa, ta, t.context), Xr = void 0
      }
    }
    var ia, sa = {
      create: oa,
      update: oa
    };

    function la(e, t) {
      if (!a(e.data.domProps) || !a(t.data.domProps)) {
        var n, r, i = t.elm,
          s = e.data.domProps || {},
          l = t.data.domProps || {};
        for (n in o(l.__ob__) && (l = t.data.domProps = D({}, l)), s) n in l || (i[n] = "");
        for (n in l) {
          if (r = l[n], "textContent" === n || "innerHTML" === n) {
            if (t.children && (t.children.length = 0), r === s[n]) continue;
            1 === i.childNodes.length && i.removeChild(i.childNodes[0])
          }
          if ("value" === n && "PROGRESS" !== i.tagName) {
            i._value = r;
            var c = a(r) ? "" : String(r);
            ca(i, c) && (i.value = c)
          } else if ("innerHTML" === n && Xn(i.tagName) && a(i.innerHTML)) {
            (ia = ia || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
            for (var u = ia.firstChild; i.firstChild;) i.removeChild(i.firstChild);
            for (; u.firstChild;) i.appendChild(u.firstChild)
          } else if (r !== s[n]) try {
            i[n] = r
          } catch (e) {}
        }
      }
    }

    function ca(e, t) {
      return !e.composing && ("OPTION" === e.tagName || function (e, t) {
        var n = !0;
        try {
          n = document.activeElement !== e
        } catch (e) {}
        return n && e.value !== t
      }(e, t) || function (e, t) {
        var n = e.value,
          r = e._vModifiers;
        if (o(r)) {
          if (r.number) return v(n) !== v(t);
          if (r.trim) return n.trim() !== t.trim()
        }
        return n !== t
      }(e, t))
    }
    var ua = {
        create: la,
        update: la
      },
      pa = C((function (e) {
        var t = {},
          n = /:(.+)/;
        return e.split(/;(?![^(]*\))/g).forEach((function (e) {
          if (e) {
            var r = e.split(n);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
          }
        })), t
      }));

    function da(e) {
      var t = fa(e.style);
      return e.staticStyle ? D(e.staticStyle, t) : t
    }

    function fa(e) {
      return Array.isArray(e) ? j(e) : "string" == typeof e ? pa(e) : e
    }
    var ha, va = /^--/,
      ga = /\s*!important$/,
      ma = function (e, t, n) {
        if (va.test(t)) e.style.setProperty(t, n);
        else if (ga.test(n)) e.style.setProperty(T(t), n.replace(ga, ""), "important");
        else {
          var r = ya(t);
          if (Array.isArray(n))
            for (var a = 0, o = n.length; a < o; a++) e.style[r] = n[a];
          else e.style[r] = n
        }
      },
      ba = ["Webkit", "Moz", "ms"],
      ya = C((function (e) {
        if (ha = ha || document.createElement("div").style, "filter" !== (e = x(e)) && e in ha) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < ba.length; n++) {
          var r = ba[n] + t;
          if (r in ha) return r
        }
      }));

    function ka(e, t) {
      var n = t.data,
        r = e.data;
      if (!(a(n.staticStyle) && a(n.style) && a(r.staticStyle) && a(r.style))) {
        var i, s, l = t.elm,
          c = r.staticStyle,
          u = r.normalizedStyle || r.style || {},
          p = c || u,
          d = fa(t.data.style) || {};
        t.data.normalizedStyle = o(d.__ob__) ? D({}, d) : d;
        var f = function (e, t) {
          var n, r = {};
          if (t)
            for (var a = e; a.componentInstance;)(a = a.componentInstance._vnode) && a.data && (n = da(a.data)) && D(r, n);
          (n = da(e.data)) && D(r, n);
          for (var o = e; o = o.parent;) o.data && (n = da(o.data)) && D(r, n);
          return r
        }(t, !0);
        for (s in p) a(f[s]) && ma(l, s, "");
        for (s in f)(i = f[s]) !== p[s] && ma(l, s, null == i ? "" : i)
      }
    }
    var wa = {
        create: ka,
        update: ka
      },
      Ca = /\s+/;

    function Ma(e, t) {
      if (t && (t = t.trim()))
        if (e.classList) t.indexOf(" ") > -1 ? t.split(Ca).forEach((function (t) {
          return e.classList.add(t)
        })) : e.classList.add(t);
        else {
          var n = " " + (e.getAttribute("class") || "") + " ";
          n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
        }
    }

    function xa(e, t) {
      if (t && (t = t.trim()))
        if (e.classList) t.indexOf(" ") > -1 ? t.split(Ca).forEach((function (t) {
          return e.classList.remove(t)
        })) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
        else {
          for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
          (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
        }
    }

    function Sa(e) {
      if (e) {
        if ("object" == typeof e) {
          var t = {};
          return !1 !== e.css && D(t, Ea(e.name || "v")), D(t, e), t
        }
        return "string" == typeof e ? Ea(e) : void 0
      }
    }
    var Ea = C((function (e) {
        return {
          enterClass: e + "-enter",
          enterToClass: e + "-enter-to",
          enterActiveClass: e + "-enter-active",
          leaveClass: e + "-leave",
          leaveToClass: e + "-leave-to",
          leaveActiveClass: e + "-leave-active"
        }
      })),
      Ta = W && !K,
      Na = "transition",
      Oa = "animation",
      Da = "transition",
      ja = "transitionend",
      Aa = "animation",
      Ia = "animationend";
    Ta && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Da = "WebkitTransition", ja = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Aa = "WebkitAnimation", Ia = "webkitAnimationEnd"));
    var Ba = W ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
      return e()
    };

    function Pa(e) {
      Ba((function () {
        Ba(e)
      }))
    }

    function $a(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);
      n.indexOf(t) < 0 && (n.push(t), Ma(e, t))
    }

    function La(e, t) {
      e._transitionClasses && y(e._transitionClasses, t), xa(e, t)
    }

    function _a(e, t, n) {
      var r = Ra(e, t),
        a = r.type,
        o = r.timeout,
        i = r.propCount;
      if (!a) return n();
      var s = a === Na ? ja : Ia,
        l = 0,
        c = function () {
          e.removeEventListener(s, u), n()
        },
        u = function (t) {
          t.target === e && ++l >= i && c()
        };
      setTimeout((function () {
        l < i && c()
      }), o + 1), e.addEventListener(s, u)
    }
    var za = /\b(transform|all)(,|$)/;

    function Ra(e, t) {
      var n, r = window.getComputedStyle(e),
        a = (r[Da + "Delay"] || "").split(", "),
        o = (r[Da + "Duration"] || "").split(", "),
        i = Ha(a, o),
        s = (r[Aa + "Delay"] || "").split(", "),
        l = (r[Aa + "Duration"] || "").split(", "),
        c = Ha(s, l),
        u = 0,
        p = 0;
      return t === Na ? i > 0 && (n = Na, u = i, p = o.length) : t === Oa ? c > 0 && (n = Oa, u = c, p = l.length) : p = (n = (u = Math.max(i, c)) > 0 ? i > c ? Na : Oa : null) ? n === Na ? o.length : l.length : 0, {
        type: n,
        timeout: u,
        propCount: p,
        hasTransform: n === Na && za.test(r[Da + "Property"])
      }
    }

    function Ha(e, t) {
      for (; e.length < t.length;) e = e.concat(e);
      return Math.max.apply(null, t.map((function (t, n) {
        return Ua(t) + Ua(e[n])
      })))
    }

    function Ua(e) {
      return 1e3 * Number(e.slice(0, -1).replace(",", "."))
    }

    function Fa(e, t) {
      var n = e.elm;
      o(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
      var r = Sa(e.data.transition);
      if (!a(r) && !o(n._enterCb) && 1 === n.nodeType) {
        for (var i = r.css, s = r.type, c = r.enterClass, u = r.enterToClass, p = r.enterActiveClass, d = r.appearClass, f = r.appearToClass, h = r.appearActiveClass, g = r.beforeEnter, m = r.enter, b = r.afterEnter, y = r.enterCancelled, k = r.beforeAppear, w = r.appear, C = r.afterAppear, M = r.appearCancelled, x = r.duration, S = Kt, E = Kt.$vnode; E && E.parent;) S = E.context, E = E.parent;
        var T = !S._isMounted || !e.isRootInsert;
        if (!T || w || "" === w) {
          var N = T && d ? d : c,
            O = T && h ? h : p,
            D = T && f ? f : u,
            j = T && k || g,
            A = T && "function" == typeof w ? w : m,
            I = T && C || b,
            B = T && M || y,
            P = v(l(x) ? x.enter : x);
          0;
          var $ = !1 !== i && !K,
            _ = Ya(A),
            z = n._enterCb = L((function () {
              $ && (La(n, D), La(n, O)), z.cancelled ? ($ && La(n, N), B && B(n)) : I && I(n), n._enterCb = null
            }));
          e.data.show || ct(e, "insert", (function () {
            var t = n.parentNode,
              r = t && t._pending && t._pending[e.key];
            r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), A && A(n, z)
          })), j && j(n), $ && ($a(n, N), $a(n, O), Pa((function () {
            La(n, N), z.cancelled || ($a(n, D), _ || (Va(P) ? setTimeout(z, P) : _a(n, s, z)))
          }))), e.data.show && (t && t(), A && A(n, z)), $ || _ || z()
        }
      }
    }

    function Qa(e, t) {
      var n = e.elm;
      o(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
      var r = Sa(e.data.transition);
      if (a(r) || 1 !== n.nodeType) return t();
      if (!o(n._leaveCb)) {
        var i = r.css,
          s = r.type,
          c = r.leaveClass,
          u = r.leaveToClass,
          p = r.leaveActiveClass,
          d = r.beforeLeave,
          f = r.leave,
          h = r.afterLeave,
          g = r.leaveCancelled,
          m = r.delayLeave,
          b = r.duration,
          y = !1 !== i && !K,
          k = Ya(f),
          w = v(l(b) ? b.leave : b);
        0;
        var C = n._leaveCb = L((function () {
          n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), y && (La(n, u), La(n, p)), C.cancelled ? (y && La(n, c), g && g(n)) : (t(), h && h(n)), n._leaveCb = null
        }));
        m ? m(M) : M()
      }

      function M() {
        C.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), d && d(n), y && ($a(n, c), $a(n, p), Pa((function () {
          La(n, c), C.cancelled || ($a(n, u), k || (Va(w) ? setTimeout(C, w) : _a(n, s, C)))
        }))), f && f(n, C), y || k || C())
      }
    }

    function Va(e) {
      return "number" == typeof e && !isNaN(e)
    }

    function Ya(e) {
      if (a(e)) return !1;
      var t = e.fns;
      return o(t) ? Ya(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
    }

    function qa(e, t) {
      !0 !== t.data.show && Fa(t)
    }
    var Wa = function (e) {
      var t, n, r = {},
        l = e.modules,
        c = e.nodeOps;
      for (t = 0; t < lr.length; ++t)
        for (r[lr[t]] = [], n = 0; n < l.length; ++n) o(l[n][lr[t]]) && r[lr[t]].push(l[n][lr[t]]);

      function u(e) {
        var t = c.parentNode(e);
        o(t) && c.removeChild(t, e)
      }

      function p(e, t, n, a, s, l, u) {
        if (o(e.elm) && o(l) && (e = l[u] = we(e)), e.isRootInsert = !s, ! function (e, t, n, a) {
            var s = e.data;
            if (o(s)) {
              var l = o(e.componentInstance) && s.keepAlive;
              if (o(s = s.hook) && o(s = s.init) && s(e, !1), o(e.componentInstance)) return d(e, t), f(n, e.elm, a), i(l) && function (e, t, n, a) {
                var i, s = e;
                for (; s.componentInstance;)
                  if (s = s.componentInstance._vnode, o(i = s.data) && o(i = i.transition)) {
                    for (i = 0; i < r.activate.length; ++i) r.activate[i](sr, s);
                    t.push(s);
                    break
                  } f(n, e.elm, a)
              }(e, t, n, a), !0
            }
          }(e, t, n, a)) {
          var p = e.data,
            v = e.children,
            g = e.tag;
          o(g) ? (e.elm = e.ns ? c.createElementNS(e.ns, g) : c.createElement(g, e), b(e), h(e, v, t), o(p) && m(e, t), f(n, e.elm, a)) : i(e.isComment) ? (e.elm = c.createComment(e.text), f(n, e.elm, a)) : (e.elm = c.createTextNode(e.text), f(n, e.elm, a))
        }
      }

      function d(e, t) {
        o(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, v(e) ? (m(e, t), b(e)) : (ir(e), t.push(e))
      }

      function f(e, t, n) {
        o(e) && (o(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t))
      }

      function h(e, t, n) {
        if (Array.isArray(t)) {
          0;
          for (var r = 0; r < t.length; ++r) p(t[r], n, e.elm, null, !0, t, r)
        } else s(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)))
      }

      function v(e) {
        for (; e.componentInstance;) e = e.componentInstance._vnode;
        return o(e.tag)
      }

      function m(e, n) {
        for (var a = 0; a < r.create.length; ++a) r.create[a](sr, e);
        o(t = e.data.hook) && (o(t.create) && t.create(sr, e), o(t.insert) && n.push(e))
      }

      function b(e) {
        var t;
        if (o(t = e.fnScopeId)) c.setStyleScope(e.elm, t);
        else
          for (var n = e; n;) o(t = n.context) && o(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent;
        o(t = Kt) && t !== e.context && t !== e.fnContext && o(t = t.$options._scopeId) && c.setStyleScope(e.elm, t)
      }

      function y(e, t, n, r, a, o) {
        for (; r <= a; ++r) p(n[r], o, e, t, !1, n, r)
      }

      function k(e) {
        var t, n, a = e.data;
        if (o(a))
          for (o(t = a.hook) && o(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) r.destroy[t](e);
        if (o(t = e.children))
          for (n = 0; n < e.children.length; ++n) k(e.children[n])
      }

      function w(e, t, n, r) {
        for (; n <= r; ++n) {
          var a = t[n];
          o(a) && (o(a.tag) ? (C(a), k(a)) : u(a.elm))
        }
      }

      function C(e, t) {
        if (o(t) || o(e.data)) {
          var n, a = r.remove.length + 1;
          for (o(t) ? t.listeners += a : t = function (e, t) {
              function n() {
                0 == --n.listeners && u(e)
              }
              return n.listeners = t, n
            }(e.elm, a), o(n = e.componentInstance) && o(n = n._vnode) && o(n.data) && C(n, t), n = 0; n < r.remove.length; ++n) r.remove[n](e, t);
          o(n = e.data.hook) && o(n = n.remove) ? n(e, t) : t()
        } else u(e.elm)
      }

      function M(e, t, n, r) {
        for (var a = n; a < r; a++) {
          var i = t[a];
          if (o(i) && cr(e, i)) return a
        }
      }

      function x(e, t, n, s, l, u) {
        if (e !== t) {
          o(t.elm) && o(s) && (t = s[l] = we(t));
          var d = t.elm = e.elm;
          if (i(e.isAsyncPlaceholder)) o(t.asyncFactory.resolved) ? T(e.elm, t, n) : t.isAsyncPlaceholder = !0;
          else if (i(t.isStatic) && i(e.isStatic) && t.key === e.key && (i(t.isCloned) || i(t.isOnce))) t.componentInstance = e.componentInstance;
          else {
            var f, h = t.data;
            o(h) && o(f = h.hook) && o(f = f.prepatch) && f(e, t);
            var g = e.children,
              m = t.children;
            if (o(h) && v(t)) {
              for (f = 0; f < r.update.length; ++f) r.update[f](e, t);
              o(f = h.hook) && o(f = f.update) && f(e, t)
            }
            a(t.text) ? o(g) && o(m) ? g !== m && function (e, t, n, r, i) {
              var s, l, u, d = 0,
                f = 0,
                h = t.length - 1,
                v = t[0],
                g = t[h],
                m = n.length - 1,
                b = n[0],
                k = n[m],
                C = !i;
              for (0; d <= h && f <= m;) a(v) ? v = t[++d] : a(g) ? g = t[--h] : cr(v, b) ? (x(v, b, r, n, f), v = t[++d], b = n[++f]) : cr(g, k) ? (x(g, k, r, n, m), g = t[--h], k = n[--m]) : cr(v, k) ? (x(v, k, r, n, m), C && c.insertBefore(e, v.elm, c.nextSibling(g.elm)), v = t[++d], k = n[--m]) : cr(g, b) ? (x(g, b, r, n, f), C && c.insertBefore(e, g.elm, v.elm), g = t[--h], b = n[++f]) : (a(s) && (s = ur(t, d, h)), a(l = o(b.key) ? s[b.key] : M(b, t, d, h)) ? p(b, r, e, v.elm, !1, n, f) : cr(u = t[l], b) ? (x(u, b, r, n, f), t[l] = void 0, C && c.insertBefore(e, u.elm, v.elm)) : p(b, r, e, v.elm, !1, n, f), b = n[++f]);
              d > h ? y(e, a(n[m + 1]) ? null : n[m + 1].elm, n, f, m, r) : f > m && w(0, t, d, h)
            }(d, g, m, n, u) : o(m) ? (o(e.text) && c.setTextContent(d, ""), y(d, null, m, 0, m.length - 1, n)) : o(g) ? w(0, g, 0, g.length - 1) : o(e.text) && c.setTextContent(d, "") : e.text !== t.text && c.setTextContent(d, t.text), o(h) && o(f = h.hook) && o(f = f.postpatch) && f(e, t)
          }
        }
      }

      function S(e, t, n) {
        if (i(n) && o(e.parent)) e.parent.data.pendingInsert = t;
        else
          for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
      }
      var E = g("attrs,class,staticClass,staticStyle,key");

      function T(e, t, n, r) {
        var a, s = t.tag,
          l = t.data,
          c = t.children;
        if (r = r || l && l.pre, t.elm = e, i(t.isComment) && o(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
        if (o(l) && (o(a = l.hook) && o(a = a.init) && a(t, !0), o(a = t.componentInstance))) return d(t, n), !0;
        if (o(s)) {
          if (o(c))
            if (e.hasChildNodes())
              if (o(a = l) && o(a = a.domProps) && o(a = a.innerHTML)) {
                if (a !== e.innerHTML) return !1
              } else {
                for (var u = !0, p = e.firstChild, f = 0; f < c.length; f++) {
                  if (!p || !T(p, c[f], n, r)) {
                    u = !1;
                    break
                  }
                  p = p.nextSibling
                }
                if (!u || p) return !1
              }
          else h(t, c, n);
          if (o(l)) {
            var v = !1;
            for (var g in l)
              if (!E(g)) {
                v = !0, m(t, n);
                break
              }! v && l.class && ot(l.class)
          }
        } else e.data !== t.text && (e.data = t.text);
        return !0
      }
      return function (e, t, n, s) {
        if (!a(t)) {
          var l, u = !1,
            d = [];
          if (a(e)) u = !0, p(t, d);
          else {
            var f = o(e.nodeType);
            if (!f && cr(e, t)) x(e, t, d, null, null, s);
            else {
              if (f) {
                if (1 === e.nodeType && e.hasAttribute(_) && (e.removeAttribute(_), n = !0), i(n) && T(e, t, d)) return S(t, d, !0), e;
                l = e, e = new me(c.tagName(l).toLowerCase(), {}, [], void 0, l)
              }
              var h = e.elm,
                g = c.parentNode(h);
              if (p(t, d, h._leaveCb ? null : g, c.nextSibling(h)), o(t.parent))
                for (var m = t.parent, b = v(t); m;) {
                  for (var y = 0; y < r.destroy.length; ++y) r.destroy[y](m);
                  if (m.elm = t.elm, b) {
                    for (var C = 0; C < r.create.length; ++C) r.create[C](sr, m);
                    var M = m.data.hook.insert;
                    if (M.merged)
                      for (var E = 1; E < M.fns.length; E++) M.fns[E]()
                  } else ir(m);
                  m = m.parent
                }
              o(g) ? w(0, [e], 0, 0) : o(e.tag) && k(e)
            }
          }
          return S(t, d, u), t.elm
        }
        o(e) && k(e)
      }
    }({
      nodeOps: ar,
      modules: [wr, Or, sa, ua, wa, W ? {
        create: qa,
        activate: qa,
        remove: function (e, t) {
          !0 !== e.data.show ? Qa(e, t) : t()
        }
      } : {}].concat(mr)
    });
    K && document.addEventListener("selectionchange", (function () {
      var e = document.activeElement;
      e && e.vmodel && no(e, "input")
    }));
    var Za = {
      inserted: function (e, t, n, r) {
        "select" === n.tag ? (r.elm && !r.elm._vOptions ? ct(n, "postpatch", (function () {
          Za.componentUpdated(e, t, n)
        })) : Ga(e, t, n.context), e._vOptions = [].map.call(e.options, Ka)) : ("textarea" === n.tag || nr(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", eo), e.addEventListener("compositionend", to), e.addEventListener("change", to), K && (e.vmodel = !0)))
      },
      componentUpdated: function (e, t, n) {
        if ("select" === n.tag) {
          Ga(e, t, n.context);
          var r = e._vOptions,
            a = e._vOptions = [].map.call(e.options, Ka);
          if (a.some((function (e, t) {
              return !P(e, r[t])
            })))(e.multiple ? t.value.some((function (e) {
            return Xa(e, a)
          })) : t.value !== t.oldValue && Xa(t.value, a)) && no(e, "change")
        }
      }
    };

    function Ga(e, t, n) {
      Ja(e, t, n), (X || ee) && setTimeout((function () {
        Ja(e, t, n)
      }), 0)
    }

    function Ja(e, t, n) {
      var r = t.value,
        a = e.multiple;
      if (!a || Array.isArray(r)) {
        for (var o, i, s = 0, l = e.options.length; s < l; s++)
          if (i = e.options[s], a) o = $(r, Ka(i)) > -1, i.selected !== o && (i.selected = o);
          else if (P(Ka(i), r)) return void(e.selectedIndex !== s && (e.selectedIndex = s));
        a || (e.selectedIndex = -1)
      }
    }

    function Xa(e, t) {
      return t.every((function (t) {
        return !P(t, e)
      }))
    }

    function Ka(e) {
      return "_value" in e ? e._value : e.value
    }

    function eo(e) {
      e.target.composing = !0
    }

    function to(e) {
      e.target.composing && (e.target.composing = !1, no(e.target, "input"))
    }

    function no(e, t) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, !0, !0), e.dispatchEvent(n)
    }

    function ro(e) {
      return !e.componentInstance || e.data && e.data.transition ? e : ro(e.componentInstance._vnode)
    }
    var ao = {
        model: Za,
        show: {
          bind: function (e, t, n) {
            var r = t.value,
              a = (n = ro(n)).data && n.data.transition,
              o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
            r && a ? (n.data.show = !0, Fa(n, (function () {
              e.style.display = o
            }))) : e.style.display = r ? o : "none"
          },
          update: function (e, t, n) {
            var r = t.value;
            !r != !t.oldValue && ((n = ro(n)).data && n.data.transition ? (n.data.show = !0, r ? Fa(n, (function () {
              e.style.display = e.__vOriginalDisplay
            })) : Qa(n, (function () {
              e.style.display = "none"
            }))) : e.style.display = r ? e.__vOriginalDisplay : "none")
          },
          unbind: function (e, t, n, r, a) {
            a || (e.style.display = e.__vOriginalDisplay)
          }
        }
      },
      oo = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
      };

    function io(e) {
      var t = e && e.componentOptions;
      return t && t.Ctor.options.abstract ? io(Wt(t.children)) : e
    }

    function so(e) {
      var t = {},
        n = e.$options;
      for (var r in n.propsData) t[r] = e[r];
      var a = n._parentListeners;
      for (var o in a) t[x(o)] = a[o];
      return t
    }

    function lo(e, t) {
      if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
        props: t.componentOptions.propsData
      })
    }
    var co = function (e) {
        return e.tag || qt(e)
      },
      uo = function (e) {
        return "show" === e.name
      },
      po = {
        name: "transition",
        props: oo,
        abstract: !0,
        render: function (e) {
          var t = this,
            n = this.$slots.default;
          if (n && (n = n.filter(co)).length) {
            0;
            var r = this.mode;
            0;
            var a = n[0];
            if (function (e) {
                for (; e = e.parent;)
                  if (e.data.transition) return !0
              }(this.$vnode)) return a;
            var o = io(a);
            if (!o) return a;
            if (this._leaving) return lo(e, a);
            var i = "__transition-" + this._uid + "-";
            o.key = null == o.key ? o.isComment ? i + "comment" : i + o.tag : s(o.key) ? 0 === String(o.key).indexOf(i) ? o.key : i + o.key : o.key;
            var l = (o.data || (o.data = {})).transition = so(this),
              c = this._vnode,
              u = io(c);
            if (o.data.directives && o.data.directives.some(uo) && (o.data.show = !0), u && u.data && ! function (e, t) {
                return t.key === e.key && t.tag === e.tag
              }(o, u) && !qt(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
              var p = u.data.transition = D({}, l);
              if ("out-in" === r) return this._leaving = !0, ct(p, "afterLeave", (function () {
                t._leaving = !1, t.$forceUpdate()
              })), lo(e, a);
              if ("in-out" === r) {
                if (qt(o)) return c;
                var d, f = function () {
                  d()
                };
                ct(l, "afterEnter", f), ct(l, "enterCancelled", f), ct(p, "delayLeave", (function (e) {
                  d = e
                }))
              }
            }
            return a
          }
        }
      },
      fo = D({
        tag: String,
        moveClass: String
      }, oo);

    function ho(e) {
      e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
    }

    function vo(e) {
      e.data.newPos = e.elm.getBoundingClientRect()
    }

    function go(e) {
      var t = e.data.pos,
        n = e.data.newPos,
        r = t.left - n.left,
        a = t.top - n.top;
      if (r || a) {
        e.data.moved = !0;
        var o = e.elm.style;
        o.transform = o.WebkitTransform = "translate(" + r + "px," + a + "px)", o.transitionDuration = "0s"
      }
    }
    delete fo.mode;
    var mo = {
      Transition: po,
      TransitionGroup: {
        props: fo,
        beforeMount: function () {
          var e = this,
            t = this._update;
          this._update = function (n, r) {
            var a = en(e);
            e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, a(), t.call(e, n, r)
          }
        },
        render: function (e) {
          for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, a = this.$slots.default || [], o = this.children = [], i = so(this), s = 0; s < a.length; s++) {
            var l = a[s];
            if (l.tag)
              if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = i;
              else;
          }
          if (r) {
            for (var c = [], u = [], p = 0; p < r.length; p++) {
              var d = r[p];
              d.data.transition = i, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? c.push(d) : u.push(d)
            }
            this.kept = e(t, null, c), this.removed = u
          }
          return e(t, null, o)
        },
        updated: function () {
          var e = this.prevChildren,
            t = this.moveClass || (this.name || "v") + "-move";
          e.length && this.hasMove(e[0].elm, t) && (e.forEach(ho), e.forEach(vo), e.forEach(go), this._reflow = document.body.offsetHeight, e.forEach((function (e) {
            if (e.data.moved) {
              var n = e.elm,
                r = n.style;
              $a(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(ja, n._moveCb = function e(r) {
                r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(ja, e), n._moveCb = null, La(n, t))
              })
            }
          })))
        },
        methods: {
          hasMove: function (e, t) {
            if (!Ta) return !1;
            if (this._hasMove) return this._hasMove;
            var n = e.cloneNode();
            e._transitionClasses && e._transitionClasses.forEach((function (e) {
              xa(n, e)
            })), Ma(n, t), n.style.display = "none", this.$el.appendChild(n);
            var r = Ra(n);
            return this.$el.removeChild(n), this._hasMove = r.hasTransform
          }
        }
      }
    };
    Tn.config.mustUseProp = Ln, Tn.config.isReservedTag = Kn, Tn.config.isReservedAttr = Pn, Tn.config.getTagNamespace = er, Tn.config.isUnknownElement = function (e) {
      if (!W) return !0;
      if (Kn(e)) return !1;
      if (e = e.toLowerCase(), null != tr[e]) return tr[e];
      var t = document.createElement(e);
      return e.indexOf("-") > -1 ? tr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : tr[e] = /HTMLUnknownElement/.test(t.toString())
    }, D(Tn.options.directives, ao), D(Tn.options.components, mo), Tn.prototype.__patch__ = W ? Wa : A, Tn.prototype.$mount = function (e, t) {
      return function (e, t, n) {
        var r;
        return e.$el = t, e.$options.render || (e.$options.render = ye), rn(e, "beforeMount"), r = function () {
          e._update(e._render(), n)
        }, new gn(e, r, A, {
          before: function () {
            e._isMounted && !e._isDestroyed && rn(e, "beforeUpdate")
          }
        }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, rn(e, "mounted")), e
      }(this, e = e && W ? rr(e) : void 0, t)
    }, W && setTimeout((function () {
      H.devtools && se && se.emit("init", Tn)
    }), 0);
    var bo = /\{\{((?:.|\r?\n)+?)\}\}/g,
      yo = /[-.*+?^${}()|[\]\/\\]/g,
      ko = C((function (e) {
        var t = e[0].replace(yo, "\\$&"),
          n = e[1].replace(yo, "\\$&");
        return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
      }));
    var wo = {
      staticKeys: ["staticClass"],
      transformNode: function (e, t) {
        t.warn;
        var n = Ur(e, "class");
        n && (e.staticClass = JSON.stringify(n));
        var r = Hr(e, "class", !1);
        r && (e.classBinding = r)
      },
      genData: function (e) {
        var t = "";
        return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
      }
    };
    var Co, Mo = {
        staticKeys: ["staticStyle"],
        transformNode: function (e, t) {
          t.warn;
          var n = Ur(e, "style");
          n && (e.staticStyle = JSON.stringify(pa(n)));
          var r = Hr(e, "style", !1);
          r && (e.styleBinding = r)
        },
        genData: function (e) {
          var t = "";
          return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
        }
      },
      xo = function (e) {
        return (Co = Co || document.createElement("div")).innerHTML = e, Co.textContent
      },
      So = g("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
      Eo = g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
      To = g("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
      No = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
      Oo = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
      Do = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + U.source + "]*",
      jo = "((?:" + Do + "\\:)?" + Do + ")",
      Ao = new RegExp("^<" + jo),
      Io = /^\s*(\/?)>/,
      Bo = new RegExp("^<\\/" + jo + "[^>]*>"),
      Po = /^<!DOCTYPE [^>]+>/i,
      $o = /^<!\--/,
      Lo = /^<!\[/,
      _o = g("script,style,textarea", !0),
      zo = {},
      Ro = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&amp;": "&",
        "&#10;": "\n",
        "&#9;": "\t",
        "&#39;": "'"
      },
      Ho = /&(?:lt|gt|quot|amp|#39);/g,
      Uo = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
      Fo = g("pre,textarea", !0),
      Qo = function (e, t) {
        return e && Fo(e) && "\n" === t[0]
      };

    function Vo(e, t) {
      var n = t ? Uo : Ho;
      return e.replace(n, (function (e) {
        return Ro[e]
      }))
    }
    var Yo, qo, Wo, Zo, Go, Jo, Xo, Ko, ei = /^@|^v-on:/,
      ti = /^v-|^@|^:/,
      ni = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
      ri = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      ai = /^\(|\)$/g,
      oi = /^\[.*\]$/,
      ii = /:(.*)$/,
      si = /^:|^\.|^v-bind:/,
      li = /\.[^.\]]+(?=[^\]]*$)/g,
      ci = /^v-slot(:|$)|^#/,
      ui = /[\r\n]/,
      pi = /\s+/g,
      di = C(xo),
      fi = "_empty_";

    function hi(e, t, n) {
      return {
        type: 1,
        tag: e,
        attrsList: t,
        attrsMap: wi(t),
        rawAttrsMap: {},
        parent: n,
        children: []
      }
    }

    function vi(e, t) {
      Yo = t.warn || Ir, Jo = t.isPreTag || I, Xo = t.mustUseProp || I, Ko = t.getTagNamespace || I;
      var n = t.isReservedTag || I;
      (function (e) {
        return !!e.component || !n(e.tag)
      }), Wo = Br(t.modules, "transformNode"), Zo = Br(t.modules, "preTransformNode"), Go = Br(t.modules, "postTransformNode"), qo = t.delimiters;
      var r, a, o = [],
        i = !1 !== t.preserveWhitespace,
        s = t.whitespace,
        l = !1,
        c = !1;

      function u(e) {
        if (p(e), l || e.processed || (e = gi(e, t)), o.length || e === r || r.if && (e.elseif || e.else) && bi(r, {
            exp: e.elseif,
            block: e
          }), a && !e.forbidden)
          if (e.elseif || e.else) i = e, (s = function (e) {
            for (var t = e.length; t--;) {
              if (1 === e[t].type) return e[t];
              e.pop()
            }
          }(a.children)) && s.if && bi(s, {
            exp: i.elseif,
            block: i
          });
          else {
            if (e.slotScope) {
              var n = e.slotTarget || '"default"';
              (a.scopedSlots || (a.scopedSlots = {}))[n] = e
            }
            a.children.push(e), e.parent = a
          } var i, s;
        e.children = e.children.filter((function (e) {
          return !e.slotScope
        })), p(e), e.pre && (l = !1), Jo(e.tag) && (c = !1);
        for (var u = 0; u < Go.length; u++) Go[u](e, t)
      }

      function p(e) {
        if (!c)
          for (var t;
            (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) e.children.pop()
      }
      return function (e, t) {
        for (var n, r, a = [], o = t.expectHTML, i = t.isUnaryTag || I, s = t.canBeLeftOpenTag || I, l = 0; e;) {
          if (n = e, r && _o(r)) {
            var c = 0,
              u = r.toLowerCase(),
              p = zo[u] || (zo[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
              d = e.replace(p, (function (e, n, r) {
                return c = r.length, _o(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Qo(u, n) && (n = n.slice(1)), t.chars && t.chars(n), ""
              }));
            l += e.length - d.length, e = d, E(u, l - c, l)
          } else {
            var f = e.indexOf("<");
            if (0 === f) {
              if ($o.test(e)) {
                var h = e.indexOf("--\x3e");
                if (h >= 0) {
                  t.shouldKeepComment && t.comment(e.substring(4, h), l, l + h + 3), M(h + 3);
                  continue
                }
              }
              if (Lo.test(e)) {
                var v = e.indexOf("]>");
                if (v >= 0) {
                  M(v + 2);
                  continue
                }
              }
              var g = e.match(Po);
              if (g) {
                M(g[0].length);
                continue
              }
              var m = e.match(Bo);
              if (m) {
                var b = l;
                M(m[0].length), E(m[1], b, l);
                continue
              }
              var y = x();
              if (y) {
                S(y), Qo(y.tagName, e) && M(1);
                continue
              }
            }
            var k = void 0,
              w = void 0,
              C = void 0;
            if (f >= 0) {
              for (w = e.slice(f); !(Bo.test(w) || Ao.test(w) || $o.test(w) || Lo.test(w) || (C = w.indexOf("<", 1)) < 0);) f += C, w = e.slice(f);
              k = e.substring(0, f)
            }
            f < 0 && (k = e), k && M(k.length), t.chars && k && t.chars(k, l - k.length, l)
          }
          if (e === n) {
            t.chars && t.chars(e);
            break
          }
        }

        function M(t) {
          l += t, e = e.substring(t)
        }

        function x() {
          var t = e.match(Ao);
          if (t) {
            var n, r, a = {
              tagName: t[1],
              attrs: [],
              start: l
            };
            for (M(t[0].length); !(n = e.match(Io)) && (r = e.match(Oo) || e.match(No));) r.start = l, M(r[0].length), r.end = l, a.attrs.push(r);
            if (n) return a.unarySlash = n[1], M(n[0].length), a.end = l, a
          }
        }

        function S(e) {
          var n = e.tagName,
            l = e.unarySlash;
          o && ("p" === r && To(n) && E(r), s(n) && r === n && E(n));
          for (var c = i(n) || !!l, u = e.attrs.length, p = new Array(u), d = 0; d < u; d++) {
            var f = e.attrs[d],
              h = f[3] || f[4] || f[5] || "",
              v = "a" === n && "href" === f[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
            p[d] = {
              name: f[1],
              value: Vo(h, v)
            }
          }
          c || (a.push({
            tag: n,
            lowerCasedTag: n.toLowerCase(),
            attrs: p,
            start: e.start,
            end: e.end
          }), r = n), t.start && t.start(n, p, c, e.start, e.end)
        }

        function E(e, n, o) {
          var i, s;
          if (null == n && (n = l), null == o && (o = l), e)
            for (s = e.toLowerCase(), i = a.length - 1; i >= 0 && a[i].lowerCasedTag !== s; i--);
          else i = 0;
          if (i >= 0) {
            for (var c = a.length - 1; c >= i; c--) t.end && t.end(a[c].tag, n, o);
            a.length = i, r = i && a[i - 1].tag
          } else "br" === s ? t.start && t.start(e, [], !0, n, o) : "p" === s && (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o))
        }
        E()
      }(e, {
        warn: Yo,
        expectHTML: t.expectHTML,
        isUnaryTag: t.isUnaryTag,
        canBeLeftOpenTag: t.canBeLeftOpenTag,
        shouldDecodeNewlines: t.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
        shouldKeepComment: t.comments,
        outputSourceRange: t.outputSourceRange,
        start: function (e, n, i, s, p) {
          var d = a && a.ns || Ko(e);
          X && "svg" === d && (n = function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var r = e[n];
              Ci.test(r.name) || (r.name = r.name.replace(Mi, ""), t.push(r))
            }
            return t
          }(n));
          var f, h = hi(e, n, a);
          d && (h.ns = d), "style" !== (f = h).tag && ("script" !== f.tag || f.attrsMap.type && "text/javascript" !== f.attrsMap.type) || ie() || (h.forbidden = !0);
          for (var v = 0; v < Zo.length; v++) h = Zo[v](h, t) || h;
          l || (! function (e) {
            null != Ur(e, "v-pre") && (e.pre = !0)
          }(h), h.pre && (l = !0)), Jo(h.tag) && (c = !0), l ? function (e) {
            var t = e.attrsList,
              n = t.length;
            if (n)
              for (var r = e.attrs = new Array(n), a = 0; a < n; a++) r[a] = {
                name: t[a].name,
                value: JSON.stringify(t[a].value)
              }, null != t[a].start && (r[a].start = t[a].start, r[a].end = t[a].end);
            else e.pre || (e.plain = !0)
          }(h) : h.processed || (mi(h), function (e) {
            var t = Ur(e, "v-if");
            if (t) e.if = t, bi(e, {
              exp: t,
              block: e
            });
            else {
              null != Ur(e, "v-else") && (e.else = !0);
              var n = Ur(e, "v-else-if");
              n && (e.elseif = n)
            }
          }(h), function (e) {
            null != Ur(e, "v-once") && (e.once = !0)
          }(h)), r || (r = h), i ? u(h) : (a = h, o.push(h))
        },
        end: function (e, t, n) {
          var r = o[o.length - 1];
          o.length -= 1, a = o[o.length - 1], u(r)
        },
        chars: function (e, t, n) {
          if (a && (!X || "textarea" !== a.tag || a.attrsMap.placeholder !== e)) {
            var r, o, u, p = a.children;
            if (e = c || e.trim() ? "script" === (r = a).tag || "style" === r.tag ? e : di(e) : p.length ? s ? "condense" === s && ui.test(e) ? "" : " " : i ? " " : "" : "") c || "condense" !== s || (e = e.replace(pi, " ")), !l && " " !== e && (o = function (e, t) {
              var n = t ? ko(t) : bo;
              if (n.test(e)) {
                for (var r, a, o, i = [], s = [], l = n.lastIndex = 0; r = n.exec(e);) {
                  (a = r.index) > l && (s.push(o = e.slice(l, a)), i.push(JSON.stringify(o)));
                  var c = jr(r[1].trim());
                  i.push("_s(" + c + ")"), s.push({
                    "@binding": c
                  }), l = a + r[0].length
                }
                return l < e.length && (s.push(o = e.slice(l)), i.push(JSON.stringify(o))), {
                  expression: i.join("+"),
                  tokens: s
                }
              }
            }(e, qo)) ? u = {
              type: 2,
              expression: o.expression,
              tokens: o.tokens,
              text: e
            } : " " === e && p.length && " " === p[p.length - 1].text || (u = {
              type: 3,
              text: e
            }), u && p.push(u)
          }
        },
        comment: function (e, t, n) {
          if (a) {
            var r = {
              type: 3,
              text: e,
              isComment: !0
            };
            0, a.children.push(r)
          }
        }
      }), r
    }

    function gi(e, t) {
      var n;
      ! function (e) {
        var t = Hr(e, "key");
        if (t) {
          e.key = t
        }
      }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length,
        function (e) {
          var t = Hr(e, "ref");
          t && (e.ref = t, e.refInFor = function (e) {
            var t = e;
            for (; t;) {
              if (void 0 !== t.for) return !0;
              t = t.parent
            }
            return !1
          }(e))
        }(e),
        function (e) {
          var t;
          "template" === e.tag ? (t = Ur(e, "scope"), e.slotScope = t || Ur(e, "slot-scope")) : (t = Ur(e, "slot-scope")) && (e.slotScope = t);
          var n = Hr(e, "slot");
          n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || $r(e, "slot", n, function (e, t) {
            return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t]
          }(e, "slot")));
          if ("template" === e.tag) {
            var r = Fr(e, ci);
            if (r) {
              0;
              var a = yi(r),
                o = a.name,
                i = a.dynamic;
              e.slotTarget = o, e.slotTargetDynamic = i, e.slotScope = r.value || fi
            }
          } else {
            var s = Fr(e, ci);
            if (s) {
              0;
              var l = e.scopedSlots || (e.scopedSlots = {}),
                c = yi(s),
                u = c.name,
                p = c.dynamic,
                d = l[u] = hi("template", [], e);
              d.slotTarget = u, d.slotTargetDynamic = p, d.children = e.children.filter((function (e) {
                if (!e.slotScope) return e.parent = d, !0
              })), d.slotScope = s.value || fi, e.children = [], e.plain = !1
            }
          }
        }(e), "slot" === (n = e).tag && (n.slotName = Hr(n, "name")),
        function (e) {
          var t;
          (t = Hr(e, "is")) && (e.component = t);
          null != Ur(e, "inline-template") && (e.inlineTemplate = !0)
        }(e);
      for (var r = 0; r < Wo.length; r++) e = Wo[r](e, t) || e;
      return function (e) {
        var t, n, r, a, o, i, s, l, c = e.attrsList;
        for (t = 0, n = c.length; t < n; t++) {
          if (r = a = c[t].name, o = c[t].value, ti.test(r))
            if (e.hasBindings = !0, (i = ki(r.replace(ti, ""))) && (r = r.replace(li, "")), si.test(r)) r = r.replace(si, ""), o = jr(o), (l = oi.test(r)) && (r = r.slice(1, -1)), i && (i.prop && !l && "innerHtml" === (r = x(r)) && (r = "innerHTML"), i.camel && !l && (r = x(r)), i.sync && (s = Yr(o, "$event"), l ? Rr(e, '"update:"+(' + r + ")", s, null, !1, 0, c[t], !0) : (Rr(e, "update:" + x(r), s, null, !1, 0, c[t]), T(r) !== x(r) && Rr(e, "update:" + T(r), s, null, !1, 0, c[t])))), i && i.prop || !e.component && Xo(e.tag, e.attrsMap.type, r) ? Pr(e, r, o, c[t], l) : $r(e, r, o, c[t], l);
            else if (ei.test(r)) r = r.replace(ei, ""), (l = oi.test(r)) && (r = r.slice(1, -1)), Rr(e, r, o, i, !1, 0, c[t], l);
          else {
            var u = (r = r.replace(ti, "")).match(ii),
              p = u && u[1];
            l = !1, p && (r = r.slice(0, -(p.length + 1)), oi.test(p) && (p = p.slice(1, -1), l = !0)), _r(e, r, a, o, p, l, i, c[t])
          } else $r(e, r, JSON.stringify(o), c[t]), !e.component && "muted" === r && Xo(e.tag, e.attrsMap.type, r) && Pr(e, r, "true", c[t])
        }
      }(e), e
    }

    function mi(e) {
      var t;
      if (t = Ur(e, "v-for")) {
        var n = function (e) {
          var t = e.match(ni);
          if (!t) return;
          var n = {};
          n.for = t[2].trim();
          var r = t[1].trim().replace(ai, ""),
            a = r.match(ri);
          a ? (n.alias = r.replace(ri, "").trim(), n.iterator1 = a[1].trim(), a[2] && (n.iterator2 = a[2].trim())) : n.alias = r;
          return n
        }(t);
        n && D(e, n)
      }
    }

    function bi(e, t) {
      e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
    }

    function yi(e) {
      var t = e.name.replace(ci, "");
      return t || "#" !== e.name[0] && (t = "default"), oi.test(t) ? {
        name: t.slice(1, -1),
        dynamic: !0
      } : {
        name: '"' + t + '"',
        dynamic: !1
      }
    }

    function ki(e) {
      var t = e.match(li);
      if (t) {
        var n = {};
        return t.forEach((function (e) {
          n[e.slice(1)] = !0
        })), n
      }
    }

    function wi(e) {
      for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
      return t
    }
    var Ci = /^xmlns:NS\d+/,
      Mi = /^NS\d+:/;

    function xi(e) {
      return hi(e.tag, e.attrsList.slice(), e.parent)
    }
    var Si = [wo, Mo, {
      preTransformNode: function (e, t) {
        if ("input" === e.tag) {
          var n, r = e.attrsMap;
          if (!r["v-model"]) return;
          if ((r[":type"] || r["v-bind:type"]) && (n = Hr(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
            var a = Ur(e, "v-if", !0),
              o = a ? "&&(" + a + ")" : "",
              i = null != Ur(e, "v-else", !0),
              s = Ur(e, "v-else-if", !0),
              l = xi(e);
            mi(l), Lr(l, "type", "checkbox"), gi(l, t), l.processed = !0, l.if = "(" + n + ")==='checkbox'" + o, bi(l, {
              exp: l.if,
              block: l
            });
            var c = xi(e);
            Ur(c, "v-for", !0), Lr(c, "type", "radio"), gi(c, t), bi(l, {
              exp: "(" + n + ")==='radio'" + o,
              block: c
            });
            var u = xi(e);
            return Ur(u, "v-for", !0), Lr(u, ":type", n), gi(u, t), bi(l, {
              exp: a,
              block: u
            }), i ? l.else = !0 : s && (l.elseif = s), l
          }
        }
      }
    }];
    var Ei, Ti, Ni = {
        expectHTML: !0,
        modules: Si,
        directives: {
          model: function (e, t, n) {
            n;
            var r = t.value,
              a = t.modifiers,
              o = e.tag,
              i = e.attrsMap.type;
            if (e.component) return Vr(e, r, a), !1;
            if ("select" === o) ! function (e, t, n) {
              var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
              r = r + " " + Yr(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Rr(e, "change", r, null, !0)
            }(e, r, a);
            else if ("input" === o && "checkbox" === i) ! function (e, t, n) {
              var r = n && n.number,
                a = Hr(e, "value") || "null",
                o = Hr(e, "true-value") || "true",
                i = Hr(e, "false-value") || "false";
              Pr(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + a + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), Rr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + i + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + a + ")" : a) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Yr(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Yr(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Yr(t, "$$c") + "}", null, !0)
            }(e, r, a);
            else if ("input" === o && "radio" === i) ! function (e, t, n) {
              var r = n && n.number,
                a = Hr(e, "value") || "null";
              Pr(e, "checked", "_q(" + t + "," + (a = r ? "_n(" + a + ")" : a) + ")"), Rr(e, "change", Yr(t, a), null, !0)
            }(e, r, a);
            else if ("input" === o || "textarea" === o) ! function (e, t, n) {
              var r = e.attrsMap.type;
              0;
              var a = n || {},
                o = a.lazy,
                i = a.number,
                s = a.trim,
                l = !o && "range" !== r,
                c = o ? "change" : "range" === r ? Kr : "input",
                u = "$event.target.value";
              s && (u = "$event.target.value.trim()");
              i && (u = "_n(" + u + ")");
              var p = Yr(t, u);
              l && (p = "if($event.target.composing)return;" + p);
              Pr(e, "value", "(" + t + ")"), Rr(e, c, p, null, !0), (s || i) && Rr(e, "blur", "$forceUpdate()")
            }(e, r, a);
            else {
              if (!H.isReservedTag(o)) return Vr(e, r, a), !1
            }
            return !0
          },
          text: function (e, t) {
            t.value && Pr(e, "textContent", "_s(" + t.value + ")", t)
          },
          html: function (e, t) {
            t.value && Pr(e, "innerHTML", "_s(" + t.value + ")", t)
          }
        },
        isPreTag: function (e) {
          return "pre" === e
        },
        isUnaryTag: So,
        mustUseProp: Ln,
        canBeLeftOpenTag: Eo,
        isReservedTag: Kn,
        getTagNamespace: er,
        staticKeys: function (e) {
          return e.reduce((function (e, t) {
            return e.concat(t.staticKeys || [])
          }), []).join(",")
        }(Si)
      },
      Oi = C((function (e) {
        return g("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
      }));

    function Di(e, t) {
      e && (Ei = Oi(t.staticKeys || ""), Ti = t.isReservedTag || I, function e(t) {
        t.static = function (e) {
          if (2 === e.type) return !1;
          if (3 === e.type) return !0;
          return !(!e.pre && (e.hasBindings || e.if || e.for || m(e.tag) || !Ti(e.tag) || function (e) {
            for (; e.parent;) {
              if ("template" !== (e = e.parent).tag) return !1;
              if (e.for) return !0
            }
            return !1
          }(e) || !Object.keys(e).every(Ei)))
        }(t);
        if (1 === t.type) {
          if (!Ti(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
          for (var n = 0, r = t.children.length; n < r; n++) {
            var a = t.children[n];
            e(a), a.static || (t.static = !1)
          }
          if (t.ifConditions)
            for (var o = 1, i = t.ifConditions.length; o < i; o++) {
              var s = t.ifConditions[o].block;
              e(s), s.static || (t.static = !1)
            }
        }
      }(e), function e(t, n) {
        if (1 === t.type) {
          if ((t.static || t.once) && (t.staticInFor = n), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void(t.staticRoot = !0);
          if (t.staticRoot = !1, t.children)
            for (var r = 0, a = t.children.length; r < a; r++) e(t.children[r], n || !!t.for);
          if (t.ifConditions)
            for (var o = 1, i = t.ifConditions.length; o < i; o++) e(t.ifConditions[o].block, n)
        }
      }(e, !1))
    }
    var ji = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/,
      Ai = /\([^)]*?\);*$/,
      Ii = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
      Bi = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        delete: [8, 46]
      },
      Pi = {
        esc: ["Esc", "Escape"],
        tab: "Tab",
        enter: "Enter",
        space: [" ", "Spacebar"],
        up: ["Up", "ArrowUp"],
        left: ["Left", "ArrowLeft"],
        right: ["Right", "ArrowRight"],
        down: ["Down", "ArrowDown"],
        delete: ["Backspace", "Delete", "Del"]
      },
      $i = function (e) {
        return "if(" + e + ")return null;"
      },
      Li = {
        stop: "$event.stopPropagation();",
        prevent: "$event.preventDefault();",
        self: $i("$event.target !== $event.currentTarget"),
        ctrl: $i("!$event.ctrlKey"),
        shift: $i("!$event.shiftKey"),
        alt: $i("!$event.altKey"),
        meta: $i("!$event.metaKey"),
        left: $i("'button' in $event && $event.button !== 0"),
        middle: $i("'button' in $event && $event.button !== 1"),
        right: $i("'button' in $event && $event.button !== 2")
      };

    function _i(e, t) {
      var n = t ? "nativeOn:" : "on:",
        r = "",
        a = "";
      for (var o in e) {
        var i = zi(e[o]);
        e[o] && e[o].dynamic ? a += o + "," + i + "," : r += '"' + o + '":' + i + ","
      }
      return r = "{" + r.slice(0, -1) + "}", a ? n + "_d(" + r + ",[" + a.slice(0, -1) + "])" : n + r
    }

    function zi(e) {
      if (!e) return "function(){}";
      if (Array.isArray(e)) return "[" + e.map((function (e) {
        return zi(e)
      })).join(",") + "]";
      var t = Ii.test(e.value),
        n = ji.test(e.value),
        r = Ii.test(e.value.replace(Ai, ""));
      if (e.modifiers) {
        var a = "",
          o = "",
          i = [];
        for (var s in e.modifiers)
          if (Li[s]) o += Li[s], Bi[s] && i.push(s);
          else if ("exact" === s) {
          var l = e.modifiers;
          o += $i(["ctrl", "shift", "alt", "meta"].filter((function (e) {
            return !l[e]
          })).map((function (e) {
            return "$event." + e + "Key"
          })).join("||"))
        } else i.push(s);
        return i.length && (a += function (e) {
          return "if(!$event.type.indexOf('key')&&" + e.map(Ri).join("&&") + ")return null;"
        }(i)), o && (a += o), "function($event){" + a + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}"
      }
      return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}"
    }

    function Ri(e) {
      var t = parseInt(e, 10);
      if (t) return "$event.keyCode!==" + t;
      var n = Bi[e],
        r = Pi[e];
      return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
    }
    var Hi = {
        on: function (e, t) {
          e.wrapListeners = function (e) {
            return "_g(" + e + "," + t.value + ")"
          }
        },
        bind: function (e, t) {
          e.wrapData = function (n) {
            return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
          }
        },
        cloak: A
      },
      Ui = function (e) {
        this.options = e, this.warn = e.warn || Ir, this.transforms = Br(e.modules, "transformCode"), this.dataGenFns = Br(e.modules, "genData"), this.directives = D(D({}, Hi), e.directives);
        var t = e.isReservedTag || I;
        this.maybeComponent = function (e) {
          return !!e.component || !t(e.tag)
        }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1
      };

    function Fi(e, t) {
      var n = new Ui(t);
      return {
        render: "with(this){return " + (e ? Qi(e, n) : '_c("div")') + "}",
        staticRenderFns: n.staticRenderFns
      }
    }

    function Qi(e, t) {
      if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Vi(e, t);
      if (e.once && !e.onceProcessed) return Yi(e, t);
      if (e.for && !e.forProcessed) return Wi(e, t);
      if (e.if && !e.ifProcessed) return qi(e, t);
      if ("template" !== e.tag || e.slotTarget || t.pre) {
        if ("slot" === e.tag) return function (e, t) {
          var n = e.slotName || '"default"',
            r = Xi(e, t),
            a = "_t(" + n + (r ? "," + r : ""),
            o = e.attrs || e.dynamicAttrs ? ts((e.attrs || []).concat(e.dynamicAttrs || []).map((function (e) {
              return {
                name: x(e.name),
                value: e.value,
                dynamic: e.dynamic
              }
            }))) : null,
            i = e.attrsMap["v-bind"];
          !o && !i || r || (a += ",null");
          o && (a += "," + o);
          i && (a += (o ? "" : ",null") + "," + i);
          return a + ")"
        }(e, t);
        var n;
        if (e.component) n = function (e, t, n) {
          var r = t.inlineTemplate ? null : Xi(t, n, !0);
          return "_c(" + e + "," + Zi(t, n) + (r ? "," + r : "") + ")"
        }(e.component, e, t);
        else {
          var r;
          (!e.plain || e.pre && t.maybeComponent(e)) && (r = Zi(e, t));
          var a = e.inlineTemplate ? null : Xi(e, t, !0);
          n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (a ? "," + a : "") + ")"
        }
        for (var o = 0; o < t.transforms.length; o++) n = t.transforms[o](e, n);
        return n
      }
      return Xi(e, t) || "void 0"
    }

    function Vi(e, t) {
      e.staticProcessed = !0;
      var n = t.pre;
      return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Qi(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
    }

    function Yi(e, t) {
      if (e.onceProcessed = !0, e.if && !e.ifProcessed) return qi(e, t);
      if (e.staticInFor) {
        for (var n = "", r = e.parent; r;) {
          if (r.for) {
            n = r.key;
            break
          }
          r = r.parent
        }
        return n ? "_o(" + Qi(e, t) + "," + t.onceId++ + "," + n + ")" : Qi(e, t)
      }
      return Vi(e, t)
    }

    function qi(e, t, n, r) {
      return e.ifProcessed = !0,
        function e(t, n, r, a) {
          if (!t.length) return a || "_e()";
          var o = t.shift();
          return o.exp ? "(" + o.exp + ")?" + i(o.block) + ":" + e(t, n, r, a) : "" + i(o.block);

          function i(e) {
            return r ? r(e, n) : e.once ? Yi(e, n) : Qi(e, n)
          }
        }(e.ifConditions.slice(), t, n, r)
    }

    function Wi(e, t, n, r) {
      var a = e.for,
        o = e.alias,
        i = e.iterator1 ? "," + e.iterator1 : "",
        s = e.iterator2 ? "," + e.iterator2 : "";
      return e.forProcessed = !0, (r || "_l") + "((" + a + "),function(" + o + i + s + "){return " + (n || Qi)(e, t) + "})"
    }

    function Zi(e, t) {
      var n = "{",
        r = function (e, t) {
          var n = e.directives;
          if (!n) return;
          var r, a, o, i, s = "directives:[",
            l = !1;
          for (r = 0, a = n.length; r < a; r++) {
            o = n[r], i = !0;
            var c = t.directives[o.name];
            c && (i = !!c(e, o, t.warn)), i && (l = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},")
          }
          if (l) return s.slice(0, -1) + "]"
        }(e, t);
      r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
      for (var a = 0; a < t.dataGenFns.length; a++) n += t.dataGenFns[a](e);
      if (e.attrs && (n += "attrs:" + ts(e.attrs) + ","), e.props && (n += "domProps:" + ts(e.props) + ","), e.events && (n += _i(e.events, !1) + ","), e.nativeEvents && (n += _i(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
          var r = e.for || Object.keys(t).some((function (e) {
              var n = t[e];
              return n.slotTargetDynamic || n.if || n.for || Gi(n)
            })),
            a = !!e.if;
          if (!r)
            for (var o = e.parent; o;) {
              if (o.slotScope && o.slotScope !== fi || o.for) {
                r = !0;
                break
              }
              o.if && (a = !0), o = o.parent
            }
          var i = Object.keys(t).map((function (e) {
            return Ji(t[e], n)
          })).join(",");
          return "scopedSlots:_u([" + i + "]" + (r ? ",null,true" : "") + (!r && a ? ",null,false," + function (e) {
            var t = 5381,
              n = e.length;
            for (; n;) t = 33 * t ^ e.charCodeAt(--n);
            return t >>> 0
          }(i) : "") + ")"
        }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
        var o = function (e, t) {
          var n = e.children[0];
          0;
          if (n && 1 === n.type) {
            var r = Fi(n, t.options);
            return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map((function (e) {
              return "function(){" + e + "}"
            })).join(",") + "]}"
          }
        }(e, t);
        o && (n += o + ",")
      }
      return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + ts(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
    }

    function Gi(e) {
      return 1 === e.type && ("slot" === e.tag || e.children.some(Gi))
    }

    function Ji(e, t) {
      var n = e.attrsMap["slot-scope"];
      if (e.if && !e.ifProcessed && !n) return qi(e, t, Ji, "null");
      if (e.for && !e.forProcessed) return Wi(e, t, Ji);
      var r = e.slotScope === fi ? "" : String(e.slotScope),
        a = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if+")?" + (Xi(e, t) || "undefined") + ":undefined" : Xi(e, t) || "undefined" : Qi(e, t)) + "}",
        o = r ? "" : ",proxy:true";
      return "{key:" + (e.slotTarget || '"default"') + ",fn:" + a + o + "}"
    }

    function Xi(e, t, n, r, a) {
      var o = e.children;
      if (o.length) {
        var i = o[0];
        if (1 === o.length && i.for && "template" !== i.tag && "slot" !== i.tag) {
          var s = n ? t.maybeComponent(i) ? ",1" : ",0" : "";
          return "" + (r || Qi)(i, t) + s
        }
        var l = n ? function (e, t) {
            for (var n = 0, r = 0; r < e.length; r++) {
              var a = e[r];
              if (1 === a.type) {
                if (Ki(a) || a.ifConditions && a.ifConditions.some((function (e) {
                    return Ki(e.block)
                  }))) {
                  n = 2;
                  break
                }(t(a) || a.ifConditions && a.ifConditions.some((function (e) {
                  return t(e.block)
                }))) && (n = 1)
              }
            }
            return n
          }(o, t.maybeComponent) : 0,
          c = a || es;
        return "[" + o.map((function (e) {
          return c(e, t)
        })).join(",") + "]" + (l ? "," + l : "")
      }
    }

    function Ki(e) {
      return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
    }

    function es(e, t) {
      return 1 === e.type ? Qi(e, t) : 3 === e.type && e.isComment ? function (e) {
        return "_e(" + JSON.stringify(e.text) + ")"
      }(e) : function (e) {
        return "_v(" + (2 === e.type ? e.expression : ns(JSON.stringify(e.text))) + ")"
      }(e)
    }

    function ts(e) {
      for (var t = "", n = "", r = 0; r < e.length; r++) {
        var a = e[r],
          o = ns(a.value);
        a.dynamic ? n += a.name + "," + o + "," : t += '"' + a.name + '":' + o + ","
      }
      return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
    }

    function ns(e) {
      return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }
    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");

    function rs(e, t) {
      try {
        return new Function(e)
      } catch (n) {
        return t.push({
          err: n,
          code: e
        }), A
      }
    }

    function as(e) {
      var t = Object.create(null);
      return function (n, r, a) {
        (r = D({}, r)).warn;
        delete r.warn;
        var o = r.delimiters ? String(r.delimiters) + n : n;
        if (t[o]) return t[o];
        var i = e(n, r);
        var s = {},
          l = [];
        return s.render = rs(i.render, l), s.staticRenderFns = i.staticRenderFns.map((function (e) {
          return rs(e, l)
        })), t[o] = s
      }
    }
    var os, is, ss = (os = function (e, t) {
        var n = vi(e.trim(), t);
        !1 !== t.optimize && Di(n, t);
        var r = Fi(n, t);
        return {
          ast: n,
          render: r.render,
          staticRenderFns: r.staticRenderFns
        }
      }, function (e) {
        function t(t, n) {
          var r = Object.create(e),
            a = [],
            o = [];
          if (n)
            for (var i in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = D(Object.create(e.directives || null), n.directives)), n) "modules" !== i && "directives" !== i && (r[i] = n[i]);
          r.warn = function (e, t, n) {
            (n ? o : a).push(e)
          };
          var s = os(t.trim(), r);
          return s.errors = a, s.tips = o, s
        }
        return {
          compile: t,
          compileToFunctions: as(t)
        }
      })(Ni),
      ls = (ss.compile, ss.compileToFunctions);

    function cs(e) {
      return (is = is || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', is.innerHTML.indexOf("&#10;") > 0
    }
    var us = !!W && cs(!1),
      ps = !!W && cs(!0),
      ds = C((function (e) {
        var t = rr(e);
        return t && t.innerHTML
      })),
      fs = Tn.prototype.$mount;
    Tn.prototype.$mount = function (e, t) {
      if ((e = e && rr(e)) === document.body || e === document.documentElement) return this;
      var n = this.$options;
      if (!n.render) {
        var r = n.template;
        if (r)
          if ("string" == typeof r) "#" === r.charAt(0) && (r = ds(r));
          else {
            if (!r.nodeType) return this;
            r = r.innerHTML
          }
        else e && (r = function (e) {
          if (e.outerHTML) return e.outerHTML;
          var t = document.createElement("div");
          return t.appendChild(e.cloneNode(!0)), t.innerHTML
        }(e));
        if (r) {
          0;
          var a = ls(r, {
              outputSourceRange: !1,
              shouldDecodeNewlines: us,
              shouldDecodeNewlinesForHref: ps,
              delimiters: n.delimiters,
              comments: n.comments
            }, this),
            o = a.render,
            i = a.staticRenderFns;
          n.render = o, n.staticRenderFns = i
        }
      }
      return fs.call(this, e, t)
    }, Tn.compile = ls, t.a = Tn
  }).call(this, n(1), n(5).setImmediate)
}, function (e, t, n) {
  e.exports = n(18)
}, function (e, t, n) {
  (function (e) {
    var r = void 0 !== e && e || "undefined" != typeof self && self || window,
      a = Function.prototype.apply;

    function o(e, t) {
      this._id = e, this._clearFn = t
    }
    t.setTimeout = function () {
      return new o(a.call(setTimeout, r, arguments), clearTimeout)
    }, t.setInterval = function () {
      return new o(a.call(setInterval, r, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function (e) {
      e && e.close()
    }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
      this._clearFn.call(r, this._id)
    }, t.enroll = function (e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function (e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function (e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout((function () {
        e._onTimeout && e._onTimeout()
      }), t))
    }, n(6), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
  }).call(this, n(1))
}, function (e, t, n) {
  (function (e, t) {
    ! function (e, n) {
      "use strict";
      if (!e.setImmediate) {
        var r, a, o, i, s, l = 1,
          c = {},
          u = !1,
          p = e.document,
          d = Object.getPrototypeOf && Object.getPrototypeOf(e);
        d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function (e) {
          t.nextTick((function () {
            h(e)
          }))
        } : ! function () {
          if (e.postMessage && !e.importScripts) {
            var t = !0,
              n = e.onmessage;
            return e.onmessage = function () {
              t = !1
            }, e.postMessage("", "*"), e.onmessage = n, t
          }
        }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function (e) {
          h(e.data)
        }, r = function (e) {
          o.port2.postMessage(e)
        }) : p && "onreadystatechange" in p.createElement("script") ? (a = p.documentElement, r = function (e) {
          var t = p.createElement("script");
          t.onreadystatechange = function () {
            h(e), t.onreadystatechange = null, a.removeChild(t), t = null
          }, a.appendChild(t)
        }) : r = function (e) {
          setTimeout(h, 0, e)
        } : (i = "setImmediate$" + Math.random() + "$", s = function (t) {
          t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(i) && h(+t.data.slice(i.length))
        }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), r = function (t) {
          e.postMessage(i + t, "*")
        }), d.setImmediate = function (e) {
          "function" != typeof e && (e = new Function("" + e));
          for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
          var a = {
            callback: e,
            args: t
          };
          return c[l] = a, r(l), l++
        }, d.clearImmediate = f
      }

      function f(e) {
        delete c[e]
      }

      function h(e) {
        if (u) setTimeout(h, 0, e);
        else {
          var t = c[e];
          if (t) {
            u = !0;
            try {
              ! function (e) {
                var t = e.callback,
                  r = e.args;
                switch (r.length) {
                  case 0:
                    t();
                    break;
                  case 1:
                    t(r[0]);
                    break;
                  case 2:
                    t(r[0], r[1]);
                    break;
                  case 3:
                    t(r[0], r[1], r[2]);
                    break;
                  default:
                    t.apply(n, r)
                }
              }(t)
            } finally {
              f(e), u = !1
            }
          }
        }
      }
    }("undefined" == typeof self ? void 0 === e ? this : e : self)
  }).call(this, n(1), n(7))
}, function (e, t) {
  var n, r, a = e.exports = {};

  function o() {
    throw new Error("setTimeout has not been defined")
  }

  function i() {
    throw new Error("clearTimeout has not been defined")
  }

  function s(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
    try {
      return n(e, 0)
    } catch (t) {
      try {
        return n.call(null, e, 0)
      } catch (t) {
        return n.call(this, e, 0)
      }
    }
  }! function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : o
    } catch (e) {
      n = o
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : i
    } catch (e) {
      r = i
    }
  }();
  var l, c = [],
    u = !1,
    p = -1;

  function d() {
    u && l && (u = !1, l.length ? c = l.concat(c) : p = -1, c.length && f())
  }

  function f() {
    if (!u) {
      var e = s(d);
      u = !0;
      for (var t = c.length; t;) {
        for (l = c, c = []; ++p < t;) l && l[p].run();
        p = -1, t = c.length
      }
      l = null, u = !1,
        function (e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
          try {
            r(e)
          } catch (t) {
            try {
              return r.call(null, e)
            } catch (t) {
              return r.call(this, e)
            }
          }
        }(e)
    }
  }

  function h(e, t) {
    this.fun = e, this.array = t
  }

  function v() {}
  a.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    c.push(new h(e, t)), 1 !== c.length || u || s(f)
  }, h.prototype.run = function () {
    this.fun.apply(null, this.array)
  }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = v, a.addListener = v, a.once = v, a.off = v, a.removeListener = v, a.removeAllListeners = v, a.emit = v, a.prependListener = v, a.prependOnceListener = v, a.listeners = function (e) {
    return []
  }, a.binding = function (e) {
    throw new Error("process.binding is not supported")
  }, a.cwd = function () {
    return "/"
  }, a.chdir = function (e) {
    throw new Error("process.chdir is not supported")
  }, a.umask = function () {
    return 0
  }
}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t) {
  e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjIxIiB2aWV3Qm94PSIwIDAgMjU2IDIyMSI+CiAgPGcgZmlsbD0ibm9uZSI+CiAgICA8cG9seWdvbiBmaWxsPSIjNDFCODgzIiBwb2ludHM9IjIwNC44IDAgMjU2IDAgMTI4IDIyMC44IDAgMCA1MC41NiAwIDk3LjkyIDAgMTI4IDUxLjIgMTU3LjQ0IDAiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiM0MUI4ODMiIHBvaW50cz0iMCAwIDEyOCAyMjAuOCAyNTYgMCAyMDQuOCAwIDEyOCAxMzIuNDggNTAuNTYgMCIvPgogICAgPHBvbHlnb24gZmlsbD0iIzM1NDk1RSIgcG9pbnRzPSI1MC41NiAwIDEyOCAxMzMuMTIgMjA0LjggMCAxNTcuNDQgMCAxMjggNTEuMiA5Ny45MiAwIi8+CiAgPC9nPgo8L3N2Zz4K"
}, function (e, t) {
  e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjciIGhlaWdodD0iMjAyIiB2aWV3Qm94PSIwIDAgMjI3IDIwMiI+CiAgPGcgZmlsbD0iIzUzQzFERSI+CiAgICA8cGF0aCBkPSJNMTg2LjAyNDU1Myw2NS42NzQxMTc4IEMyMTAuNDI4ODEzLDc0LjA3NTI2MTYgMjI2LjE5OTQ1OSw4Ny4yMzQ4MjggMjI2LjE5OTQ1OSwxMDAuODQyNDQ0IEMyMjYuMTk5NDU5LDExNS4wMzI4NDggMjA5LjM0NTY5MSwxMjguOTA3NTI2IDE4My40NDIwMywxMzcuNDkwMDYxIEMxODIuMDczMzQ1LDEzNy45NDM3NDIgMTgwLjY2OTY2OCwxMzguMzgwMTI4IDE3OS4yMzk4NDksMTM4LjgwMjg0MSBDMTc5Ljc1MDI0LDE0MC44NTQwNTggMTgwLjIwNDcyNSwxNDIuODY5NDggMTgwLjU5NTI2MSwxNDQuODQyMjY5IEMxODUuNzA4ODI3LDE3MC42NzMxMzEgMTgxLjc3MDA4NiwxOTEuOTA0MDM3IDE2OS42NTA2MDgsMTk4LjkyMDAwNyBDMTU3LjkxNjQzNywyMDUuNzEzMTU3IDEzOC45NDk5MTQsMTk5LjA0MDI2NCAxMTkuNzQ2NDk1LDE4Mi41MTUwOTIgQzExNy43MTg2MDQsMTgwLjc2OTU0NiAxMTUuNjc5ODU2LDE3OC45MDg1NjkgMTEzLjYzNzg4OCwxNzYuOTQyMjE2IEMxMTIuMDYyNDczLDE3OC40NjQ5NDMgMTEwLjQ4OTg3MywxNzkuOTE3Njg3IDEwOC45MjI5MDMsMTgxLjI4NzU3OSBDODkuMDk3MjgyLDE5OC42MTc1NTIgNjguNzM3MTM3NSwyMDUuODA4NDc4IDU2LjYwNTU5MzEsMTk4LjgxMjYxOSBDNDQuODYwNTYyNCwxOTIuMDM4MzcyIDQxLjE2OTk3OTYsMTcyLjI3NDY5IDQ1Ljg5NTgyNCwxNDcuMzg0NTcyIEM0Ni4zOTQxNDkzLDE0NC43NTg2MTEgNDYuOTg3Nzk1OCwxNDIuMDY2Mjg4IDQ3LjY3MDMyODQsMTM5LjMxODg2MiBDNDUuNTY3NjI5MiwxMzguNzE1NTYzIDQzLjUyNzI3MSwxMzguMDgwMDg4IDQxLjU2MDkxNzUsMTM3LjQwODAxMiBDMTYuNjQzODUyMywxMjguODkxNDM4IDAuMjQyOTU5OSwxMTQuODQ1ODI2IDAuMjQyOTU5OSwxMDAuODQyNDQ0IEMwLjI0Mjk1OTksODcuMjgzODk2IDE1LjUyMDkxMTIsNzQuMjEyNDExNiAzOS40NDMzMzcsNjUuODcyIEM0Mi4xMTcxNTk1LDY0Ljk0MDEwMzcgNDQuOTExNjQxOCw2NC4wNjQxMTMxIDQ3LjgwNjI3MTgsNjMuMjQyNDE5NSBDNDcuMTczNjExOSw2MC43MDIxMjczIDQ2LjYxNDE1MjQsNTguMjAzNjYzOCA0Ni4xMzU1MzUsNTUuNzU3MDg0MSBDNDEuMTc5MjMwMiwzMC40MjczNjIxIDQ0LjY2NjcwMjIsMTAuMTg1NDY0MyA1Ni40NDMxMDQ1LDMuMzY4MTgyMyBDNjguNzI0MjY3MSwtMy43NDE0OTg4IDg5LjE3NjkxOCwzLjg5MzQ1NDggMTA5LjU4MTcwNywyMi4wMTA5MzQ4IEMxMTAuODI2OTE2LDIzLjExNjU4MTMgMTEyLjA3NTM0MywyNC4yNzI1MDI3IDExMy4zMjU3ODIsMjUuNDY4NjQ0MSBDMTE1LjIwMjQ0NCwyMy42NjA3NTczIDExNy4wNzk5MTIsMjEuOTM1NzIzNSAxMTguOTUyMTUxLDIwLjMwNjQxMzIgQzEzOC40MjE4MjYsMy4zNjI1NTE1IDE1Ny42OTk2NTEsLTMuNzI1MDA4NiAxNjkuNDg3MzE1LDMuMDcyNTY1NiBDMTgxLjc4MDU0NCwxMC4xNjE3MzQ1IDE4NS4zODA2MzIsMzEuNjkzNDg2MiAxNzkuODc0NTIsNTguNDIwODUxNSBDMTc5LjUzOTA4NSw2MC4wNDg1NTMgMTc5LjE2MTgyMyw2MS43MDQ0MDg1IDE3OC43NTA3NzQsNjMuMzgxOTgyOCBDMTgxLjI1MTY1MSw2NC4xMDM5MzA4IDE4My42ODA1MzQsNjQuODY3MzA1NiAxODYuMDI0NTUzLDY1LjY3NDExNzggWiBNMTgwLjQwNjIyOCwxMjguMzI3NTU0IEMyMDIuNzcyMTQyLDEyMC45MTY2MjUgMjE2LjU0NjY3MSwxMDkuNTc3NDE0IDIxNi41NDY2NzEsMTAwLjg0MjQ0NCBDMjE2LjU0NjY3MSw5Mi42NDE5OTggMjAzLjc5MjExOSw4MS45OTkzOTY3IDE4Mi44ODI1NzEsNzQuODAxMjMxOCBDMTgwLjcyMDc0OCw3NC4wNTY3NjA1IDE3OC40NzcyNzksNzMuMzUxMzAyNCAxNzYuMTY1ODM4LDcyLjY4MjQ0NDYgQzE3My4zODYyMzcsODEuNjc2ODMyNyAxNjkuNjc1OTQ3LDkxLjE4MDQwNSAxNjUuMTY4ODk5LDEwMC44ODk1MDIgQzE2OS44OTE5MjgsMTEwLjgzNTQ5NCAxNzMuNzUxNDM1LDEyMC40NjIxNCAxNzYuNjExMDczLDEyOS41MTUyNDkgQzE3Ny45MDI5MzgsMTI5LjEzMTk1MyAxNzkuMTcwNjcxLDEyOC43MzY1OSAxODAuNDA2MjI4LDEyOC4zMjc1NTQgWiBNMTcxLjEyNTg3NiwxNDYuNzE2OTIgQzE3MC43NzMxNDcsMTQ0LjkzMzk3IDE3MC4zNjM3MDgsMTQzLjExMDM5NyAxNjkuOTAyNzg3LDE0MS4yNTEwMjkgQzE2MC41NDQwMDcsMTQzLjQxNDQ2IDE1MC4yMjM5NjgsMTQ0Ljk5OTEyNyAxMzkuMzAwNjMyLDE0NS45Njg0MjcgQzEzMy4wOTAyNjksMTU0Ljk1ODc5NCAxMjYuNzI3MDcsMTYzLjA1Mzg2MyAxMjAuMzYwMjUxLDE3MC4wMTcxNDMgQzEyMi4yNjI2NTUsMTcxLjg0Nzk1NiAxMjQuMTU5MDI2LDE3My41Nzc4MTYgMTI2LjA0MTcyMiwxNzUuMTk3ODc2IEMxNDIuNDY0NzM2LDE4OS4zMzAzNjMgMTU3LjY5MjgxMywxOTQuNjg4MDYzIDE2NC44MTM3NTYsMTkwLjU2NjMyMiBDMTY4LjE2MDA1NiwxODguNjI5MzI5IDE3MC44NjY0NTcsMTgzLjc5Mjg4IDE3Mi4yMTIyMTYsMTc2LjUzODgwOSBDMTczLjcxMDAwNywxNjguNDY1ODYgMTczLjM4NzA0MSwxNTguMTM4OTg1IDE3MS4xMjU4NzYsMTQ2LjcxNjkyIFogTTc3LjI3NjYzNzksMTg5Ljg1NDAyNyBDODUuMDE4OTc5LDE4Ny4xMTk0NzIgOTMuODA0MjIzLDE4MS42ODI1MzkgMTAyLjU3MDk2NiwxNzQuMDE5NDMxIEMxMDMuOTk4Nzc0LDE3Mi43NzEwMDQgMTA1LjQzNDYyNywxNzEuNDQ2MTU4IDEwNi44NzYxMSwxNzAuMDU0NTQ4IEMxMDAuMjc4NDI5LDE2Mi45NzQyMjggOTMuNzMxNDI1LDE1NC44ODgwMDcgODcuNDc5MjMzLDE0Ni4wOTA2OTYgQzc2LjUyOTc1MzMsMTQ1LjIwMzA0MSA2Ni4yODUzMjkxLDE0My43MzAxODcgNTcuMDI5MTA5MiwxNDEuNjgzMzk0IEM1Ni4zOTQwMzYyLDE0NC4yNDI5OTIgNTUuODQzMDIyOCwxNDYuNzQ3MDg1IDU1LjM4MDA5MTEsMTQ5LjE4NDgxNyBDNTEuMzM4Mzg4MSwxNzAuNDcwODI1IDU0LjMwMTM5MiwxODYuMzM5MjA1IDYxLjQyODc2OTgsMTkwLjQ1MDA4NiBDNjQuNzc4Mjg3NSwxOTIuMzgxNDQ5IDcwLjMxOTM5MDQsMTkyLjMxMTA2NCA3Ny4yNzY2Mzc5LDE4OS44NTQwMjcgWiBNNDQuNjgyNzkwMywxMjguMjc0MDYxIEM0Ni40NzQ5OTE0LDEyOC44ODYyMDkgNDguMzM3NTc3NCwxMjkuNDY3Nzg5IDUwLjI2MDA5MTEsMTMwLjAyMDQxMSBDNTMuMTE1MzA1NiwxMjAuNzE1MTI0IDU2Ljg3NzA3NzgsMTEwLjk0NTY5NiA2MS40MTEwNzMxLDEwMS4wNzczMjkgQzU2LjkzNDk5NDUsOTEuMzUzMzUxIDUzLjIyNTkxMDQsODEuNzM3MTYyNiA1MC4zOTg0NDc4LDcyLjUzOTY2MzggQzQ3LjcwMTY5OTksNzMuMzA1ODUzOSA0NS4xMDMwODg4LDc0LjEyMTUxNDUgNDIuNjIwNzEzMyw3NC45ODcwNDc5IEMyMi4xNjIwMjk5LDgyLjEyMDA1NjUgOS44OTUzNDY0LDkyLjYxNDY0OSA5Ljg5NTM0NjQsMTAwLjg0MjQ0NCBDOS44OTUzNDY0LDEwNC43MDg3ODkgMTIuNzI0ODIwMiwxMDkuNDczNjQ3IDE4LjMyOTA2ODMsMTE0LjI3MzA5NCBDMjQuNTY1OTc2NSwxMTkuNjEzOTAxIDMzLjY2NDkzNjQsMTI0LjUwODI2NyA0NC42ODI3OTAzLDEyOC4yNzQwNjEgWiBNNTUuNjA4NTQwNSw1My45MDMzNDY0IEM1Ni4wNTI5NzA5LDU2LjE3NTM3MTYgNTYuNTczODE5Myw1OC40OTkyODA0IDU3LjE2MTgzNTEsNjAuODY0NjE1OCBDNjYuNTE0NTgyOCw1OC43NDU4Mjg4IDc2LjY4NzAxMzMsNTcuMTYzNTc1OCA4Ny4zMTM5Myw1Ni4xNzg1ODkxIEM5My41MTA2MTgsNDcuNDMzMTYyNiA5OS45OTc2OTQsMzkuNDA3NjczMiAxMDYuNTYyNzk3LDMyLjM1ODMyMjEgQzEwNS40Mjg5OTYsMzEuMjc1NjAwOSAxMDQuMjk4NDEzLDMwLjIyOTA3NzggMTAzLjE3MjI1NSwyOS4yMjkyMDk3IEM4NS41NTQzMDYsMTMuNTg1NjU5IDY4LjgzODQ5MTgsNy4zNDU5MzU2IDYxLjI3OTE1MTYsMTEuNzIyMjY4NyBDNTQuMTgyMzQxLDE1LjgzMDMzNDcgNTEuMzYyMTE3OCwzMi4yMDE0NjQzIDU1LjYwODU0MDUsNTMuOTAzMzQ2NCBaIE0xNTMuMDc1OTY1LDc3Ljk3MDU2NCBDMTU1LjM1ODg1LDgxLjkxNDEzMDQgMTU3LjUyNjcwNiw4NS44Mzc1ODY4IDE1OS41NzYzMTQsODkuNzI4ODY3IEMxNjIuNDMzNTQsODMuMDM5MDgyNSAxNjQuODYwODEzLDc2LjUxMzM5NTEgMTY2LjgwODI2NCw3MC4yNzIwNjI5IEMxNjAuMzIxNTg5LDY4Ljc5MTU2NjQgMTUzLjQxNDIxNiw2Ny41ODE3NTAyIDE0Ni4yMDQ3ODksNjYuNjcwMzY2MSBDMTQ4LjU0NDc4NSw3MC4zMzgwMjM1IDE1MC44NDAxMzksNzQuMTA4NjQ0MSAxNTMuMDc1OTY1LDc3Ljk3MDU2NCBaIE0xMTMuMzI4OTk5LDM5LjI1Njg0ODQgQzEwOC44MDcwNyw0NC4xMzU5MzA4IDEwNC4zMDk2NzUsNDkuNTE0MTQyOSA5OS45MTk2NjcsNTUuMzAzMDAwNyBDMTA0LjMxMTY4Niw1NS4wOTc4NzkgMTA4Ljc1Mjc3Myw1NC45OTE2OTgzIDExMy4yMjEyMSw1NC45OTE2OTgzIEMxMTcuNzMyMjc5LDU0Ljk5MTY5ODMgMTIyLjIwNjM0Nyw1NS4xMDAyOTIyIDEyNi42MjU3MTYsNTUuMzA5MDMzNyBDMTIyLjI0MDEzMiw0OS40NjU4NzkgMTE3Ljc4MTM0OCw0NC4wODA0Mjc0IDExMy4zMjg5OTksMzkuMjU2ODQ4NCBaIE03My4zMjc0NDA3LDc4LjAzNzMyOTEgTDczLjMyNzQ0MDcsNzguMDM2NTI0NyBDNzUuNTY2ODg3Niw3NC4xNTMyODgzIDc3Ljg4MTE0MzgsNzAuMzU0OTE1OSA4MC4yNTQxMjEsNjYuNjUzNDczNyBDNzMuMDkwNTQ1Miw2Ny41NDc1NjMzIDY2LjIxNTc0ODYsNjguNzI3MjE0NCA1OS43Njg4OTI0LDcwLjE2OTkwNDEgQzYxLjczMzIzNDksNzYuNDk5NzIwMyA2NC4xMzc5ODU4LDgzLjA1NTE3MDUgNjYuOTQ4OTU4NCw4OS43MjE2MjggQzY4Ljk2NjM5MTIsODUuODEyMjQ4MyA3MS4wOTQwMjY3LDgxLjkxMDEwODQgNzMuMzI3NDQwNyw3OC4wMzczMjkxIFogTTgwLjQ2MDQ0OTMsMTM1LjcxOTk4MSBDNzguMDI2MzM3OCwxMzEuOTQyOTI1IDc1LjY1NDk2OTQsMTI4LjA2OTc0NCA3My4zNjYwNTE4LDEyNC4xMTU3MjEgTDczLjM2NTY0OTcsMTI0LjExNTcyMSBDNzEuMTE4NTYwOSwxMjAuMjM0NDk1IDY4Ljk4MjQ3OTIsMTE2LjMzMDc0NiA2Ni45NTk4MTc3LDExMi40MjQxODIgQzY0LjA4OTMxOTcsMTE5LjIzNDIyNSA2MS42MzE0Nzg0LDEyNS45Mjk2NCA1OS42MzU3NjQzLDEzMi4zNzI0NzQgQzY2LjA4MTAxMTgsMTMzLjc3NTM0NyA3My4wNTkxNzM2LDEzNC44OTQyNjUgODAuNDYwNDQ5MywxMzUuNzE5OTgxIFogTTExMy41OTYwNiwxNjMuMTA4NTYyIEMxMTguMDE4MjQ0LDE1OC4yMzk5MzcgMTIyLjQ2MDkzOSwxNTIuNzcxMjMxIDEyNi44NjEwMDMsMTQ2Ljc5MjEzMiBDMTIyLjM3OTY5NSwxNDYuOTkxNjIzIDExNy44MjY3OTcsMTQ3LjA5NTM5MSAxMTMuMjIxMjEsMTQ3LjA5NTM5MSBDMTA4LjczODI5MywxNDcuMDk1MzkxIDEwNC4zMjczNzEsMTQ3LjAwODUxNSAxMDAuMDAwOTExLDE0Ni44Mzg3ODcgQzEwNC40NTc2ODQsMTUyLjcxMjEwNyAxMDkuMDIxMDQsMTU4LjE3MjM2NyAxMTMuNTk2MDYsMTYzLjEwODU2MiBaIE0xNTkuNjY4NDE4LDExMi4wNzcwODQgQzE1Ny42MDE5MTcsMTE2LjA2MDQ2OSAxNTUuNDE2MzY1LDEyMC4wNTc5MyAxNTMuMTE0NTc2LDEyNC4wNDkzNTcgQzE1MC44MzkzMzQsMTI3Ljk5NDUzMiAxNDguNTIzODcyLDEzMS44Mjk5MDcgMTQ2LjE3ODI0NCwxMzUuNTQ3MDM2IEMxNTMuNjMxMDAxLDEzNC42NTI1NDQgMTYwLjcwNDQ4NCwxMzMuNDQ4NzYgMTY3LjI1NTkxMiwxMzEuOTU0MTg3IEMxNjUuMjM0NDU3LDEyNS42MjExNTMgMTYyLjY4ODUzNCwxMTguOTYwNzI5IDE1OS42Njg0MTgsMTEyLjA3NzA4NCBaIE0xNDQuNzUzMjUsMTE5LjIyNjk4NSBDMTQ4LjI4MDU0MSwxMTMuMTA5OTMzIDE1MS41Mjc5LDEwNi45ODU2NCAxNTQuNDYyMzQ3LDEwMC45MzY5NjIgQzE1MS41MTkwNTEsOTQuOTkwNDQxIDE0OC4yNjQ0NTMsODguOTI3Mjg0IDE0NC43MjE0NzcsODIuODA3NDE1NiBDMTQxLjIxODMxOSw3Ni43NTU1MTkyIDEzNy41NzA3NzEsNzAuOTM5MzExOSAxMzMuODM0MzM3LDY1LjQyMzk0OTggQzEyNy4xMTYzOTksNjQuOTExNTQ3NSAxMjAuMjE2NjY2LDY0LjY0NDQ4NzEgMTEzLjIyMTIxLDY0LjY0NDQ4NzEgTDExMy4yMjA4MDgsNjQuNjQ0NDg3MSBDMTA2LjI1NjcyMyw2NC42NDQ0ODcxIDk5LjM2NTgzOCw2NC45MDk1MzY2IDkyLjY0NTg4OCw2NS40MTc1MTQ1IEM4OC44NTE1MzgsNzAuOTczNDk4OCA4NS4xNzkwNTQsNzYuODA4NjA5NiA4MS42ODk1NzExLDgyLjg1OTcwMTUgTDgxLjY5MDM3NTUsODIuODU4NDk0OSBDNzguMjEwMTQyOSw4OC44OTM0OTkgNzQuOTk2OTcwOSw5NC45OTcyNzkgNzIuMDc4NjExMiwxMDEuMDc0MTEyIEM3NC45OTc3NzU0LDEwNy4xMzY4NjcgNzguMjE5MzkzNSwxMTMuMjMzODEgODEuNzE5NzM2MSwxMTkuMjc5NjczIEw4MS43MTg5MzE3LDExOS4yNzk2NzMgQzg1LjIyODUyNSwxMjUuMzQyMDI3IDg4LjkzMzU4NywxMzEuMjA1Njk0IDkyLjc2MzMzMSwxMzYuNzk2NjY5IEM5OS4zNDk3NSwxMzcuMjI0MjA3IDEwNi4xODk1NTYsMTM3LjQ0MjYwMiAxMTMuMjIxMjEsMTM3LjQ0MjYwMiBDMTIwLjI4MTQyLDEzNy40NDI2MDIgMTI3LjIwODUwMiwxMzcuMTk1NjUxIDEzMy45MTM1NzEsMTM2LjcxNjIzIEMxMzcuNTk0OTAzLDEzMS4xOTc2NDkgMTQxLjIyMTEzNCwxMjUuMzUxMjc3IDE0NC43NTMyNSwxMTkuMjI2OTg1IFogTTE2NC42NjU3NDcsMTEuNDM1MDk4MiBDMTU3LjU2MjA5OSw3LjMzODY5NiAxNDEuOTcwODM0LDEzLjA3MDQ0MTUgMTI1LjI4OTIwNiwyNy41ODc4MzM1IEMxMjMuNTYyNTY0LDI5LjA5MDg1MzEgMTIxLjgyODY4MiwzMC42ODM1NjMzIDEyMC4wOTIzODYsMzIuMzUzODk3OCBDMTI2LjU1MDUwNCwzOS4zMTI3NTQxIDEzMi45ODQ0OSw0Ny4zNTA3MTE3IDEzOS4xOTMyNDUsNTYuMTkyMjYzOSBDMTQ5Ljg1MTEyOSw1Ny4xOTIxMzIgMTYwLjAzMDc5OSw1OC44MDE3MzQ1IDE2OS40MDUyNjYsNjAuOTY0NzYzNSBDMTY5Ljc3NjA5NSw1OS40NDQ4NTE1IDE3MC4xMTc1NjEsNTcuOTQ1MDQ5NSAxNzAuNDIwODIsNTYuNDcyNTk3IEMxNzUuMTc0ODE4LDMzLjM5NjM5OTEgMTcyLjIzMjMyNywxNS43OTg1NjA5IDE2NC42NjU3NDcsMTEuNDM1MDk4MiBaIi8+CiAgICA8cGF0aCBkPSJNMTEzLjIyMTIxLDgwLjY2NTMwMDggQzEyNC4zNjQ1NSw4MC42NjUzMDA4IDEzMy4zOTgzNTMsODkuNjk4NzAyIDEzMy4zOTgzNTMsMTAwLjg0MjQ0NCBDMTMzLjM5ODM1MywxMTEuOTg1Nzg0IDEyNC4zNjQ1NSwxMjEuMDE5NTg5IDExMy4yMjEyMSwxMjEuMDE5NTg5IEMxMDIuMDc3ODcsMTIxLjAxOTU4OSA5My4wNDQwNjYsMTExLjk4NTc4NCA5My4wNDQwNjYsMTAwLjg0MjQ0NCBDOTMuMDQ0MDY2LDg5LjY5ODcwMiAxMDIuMDc3ODcsODAuNjY1MzAwOCAxMTMuMjIxMjEsODAuNjY1MzAwOCIvPgogIDwvZz4KPC9zdmc+Cg=="
}, function (e, t) {
  e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NSIgaGVpZ2h0PSIxMTMiIHZpZXdCb3g9IjAgMCA5NSAxMTMiPgogIDxnIGZpbGw9Im5vbmUiPgogICAgPHBhdGggZmlsbD0iI0ZGM0UwMCIgZD0iTTg4LjIzLDE1LjM5IEM3Ny44MywwLjUxIDU3LjI5LC0zLjkgNDIuNDQsNS41NiBMMTYuMzYsMjIuMTggQzkuMjQyNzA2MzQsMjYuNjUwMTgyNyA0LjMzNTQ0MzgyLDMzLjkwOTQ0NjggMi44NCw0Mi4xOCBDMS41OTI4NjM0Nyw0OS4wODM2NjU1IDIuNjgzNzQ3NTQsNTYuMjA2MDgyOCA1Ljk0LDYyLjQyIEMzLjcwODI5NTE0LDY1LjgwNTUyMDQgMi4xODc1NDg1OCw2OS42MDkwODc5IDEuNDcsNzMuNiBDLTAuMDM0Nzg3ODE0OSw4Mi4wNDU4NTAxIDEuOTMwMDYwNjksOTAuNzQxNjU2NyA2LjkyLDk3LjcyIEMxNy4zMiwxMTIuNiAzNy44NiwxMTcuMDEgNTIuNzEsMTA3LjU1IEw3OC43OSw5MSBDODUuODk4NTEzNCw4Ni41MjA3NDMzIDkwLjgwMjg2MzUsNzkuMjY1Nzg3NSA5Mi4zMSw3MSBDOTMuNTUyNTYwMiw2NC4wOTg0NTk2IDkyLjQ1ODE2ODMsNTYuOTc5NjM0IDg5LjIsNTAuNzcgQzkxLjQzMDU1NjEsNDcuMzgyODI5NyA5Mi45NTQzMjg2LDQzLjU4MDIwMTEgOTMuNjgsMzkuNTkgQzk1LjE4MDE2ODksMzEuMTQ0MjU2NiA5My4yMTU3MjMzLDIyLjQ1MDIzMyA4OC4yMywxNS40NyIvPgogICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTM5Ljg5LDk5LjE2IEMzMS40ODAzMDk3LDEwMS4zNDIyNTggMjIuNjAyMDA1Nyw5OC4wNDg4MjIgMTcuNjUsOTAuOTEgQzE0LjY1MTA4NDYsODYuNzE0NTcwOCAxMy40NzIwNjI3LDgxLjQ4NjQ5MTggMTQuMzgsNzYuNDEgQzE0LjUyNzUxMzksNzUuNTkyNTk5MSAxNC43MzQ3MzU2LDc0Ljc4NzEwODMgMTUsNzQgTDE1LjQ5LDcyLjUgTDE2LjgzLDczLjUgQzE5LjkxMDA3NDgsNzUuNzQ4NjQxIDIzLjM0ODY4MTMsNzcuNDU5NDkxNSAyNyw3OC41NiBMMjgsNzguODUgTDI3LjkxLDc5Ljg1IEMyNy44MTM3ODM5LDgxLjIyMTEyMTEgMjguMTk5MzAxMiw4Mi41ODI4MTA2IDI5LDgzLjcgQzMwLjQ5NDE4OTgsODUuODQ3NDM0NSAzMy4xNjc3MzQyLDg2LjgzNzA0NSAzNS43LDg2LjE4IEMzNi4yNjUzNTQyLDg2LjAyODAzODYgMzYuODA0Njk2Miw4NS43OTIwNzY1IDM3LjMsODUuNDggTDYzLjM0LDY4Ljg2IEM2NC42MzMyMzYxLDY4LjA0NjI0ODIgNjUuNTIyOTE5Myw2Ni43MjQ0MzMzIDY1Ljc5LDY1LjIyIEM2Ni4wNTkyOTQ0LDYzLjY4ODA5MDkgNjUuNjk4NzExMiw2Mi4xMTIzNDI2IDY0Ljc5LDYwLjg1IEM2My4yOTU4MTAyLDU4LjcwMjU2NTUgNjAuNjIyMjY1OCw1Ny43MTI5NTUgNTguMDksNTguMzcgQzU3LjUyMzk4MDIsNTguNTIwMDU5NCA1Ni45ODQzNTg3LDU4Ljc1NjE0MzggNTYuNDksNTkuMDcgTDQ2LjQ5LDY1LjQyIEM0NC44NTQ0Nzg2LDY2LjQ1NzA0MzkgNDMuMDcwNzUxNSw2Ny4yMzkzMjEyIDQxLjIsNjcuNzQgQzMyLjgwNDgyNDMsNjkuOTA4OTkyMyAyMy45NDY5MjU4LDY2LjYyMTE5NTcgMTksNTkuNSBDMTYuMDEwMTg3OCw1NS4zMDA2Njc2IDE0LjgzODYzMzgsNTAuMDczNzM0NSAxNS43NSw0NSBDMTYuNjQyOTEzLDQwLjAxNTM1NjQgMTkuNTk0MjE1NiwzNS42Mzc0MDk0IDIzLjg4LDMyLjk0IEw1MCwxNi4zMiBDNTEuNjI1ODc4LDE1LjI4NTAzNTQgNTMuMzk5NDAxNiwxNC41MDI3OTY4IDU1LjI2LDE0IEM2My42NjY4Njk5LDExLjgxNjIyMTMgNzIuNTQzMjE4NiwxNS4xMTA0MTI4IDc3LjQ5LDIyLjI1IEM4MC40OTI0MTI0LDI2LjQ0Mzk0NzQgODEuNjc1MDY4NywzMS42NzIxNTM0IDgwLjc3LDM2Ljc1IEM4MC42MTM5ODg2LDM3LjU3MjA4NzUgODAuNDA2OTIxLDM4LjM4MzY1ODkgODAuMTUsMzkuMTggTDc5LjY1LDQwLjY4IEw3OC4zMiwzOS42OCBDNzUuMjMzNTk5MSwzNy40MTQyMjY4IDcxLjc4NDQ1OTIsMzUuNjg5NjU2OCA2OC4xMiwzNC41OCBMNjcuMTIsMzQuMjkgTDY3LjIxLDMzLjI5IEM2Ny4zMjU0OTI0LDMxLjkxMjExMzIgNjYuOTUwMDI3NywzMC41Mzc3NzA1IDY2LjE1LDI5LjQxIEM2NC42NDY5NTI2LDI3LjMwMDE1NCA2MS45OTUxNDQ0LDI2LjM0MDU2NTcgNTkuNDksMjcgQzU4LjkyMzk4MDIsMjcuMTUwMDU5NCA1OC4zODQzNTg3LDI3LjM4NjE0MzggNTcuODksMjcuNyBMMzEuOCw0NC4yOSBDMzAuNTExNzE0Miw0NS4xMDQyMjIzIDI5LjYyMzIwNDMsNDYuNDIwNjY3NiAyOS4zNSw0Ny45MiBDMjkuMDg1OTQxNSw0OS40NTQ5MzQ5IDI5LjQ0NTk0NjYsNTEuMDMxNzU3MyAzMC4zNSw1Mi4zIEMzMS44MzY3NzcyLDU0LjQyNzE2MjkgMzQuNDgzNDI3Miw1NS40MTQxODQzIDM3LDU0Ljc4IEMzNy41NjQ2MTksNTQuNjI1OTQ5OCAzOC4xMDM2NjExLDU0LjM5MDExODggMzguNiw1NC4wOCBMNDguNiw0Ny43NCBDNTAuMjM0Mjk5Miw0Ni42OTE2MDIzIDUyLjAyMjYwMTIsNDUuOTA1NDI0MiA1My45LDQ1LjQxIEM2Mi4zMDQ4ODAxLDQzLjIyMTA4MjEgNzEuMTgyNDMyMyw0Ni41MTE3MjY4IDc2LjEzLDUzLjY1IEM3OS4xMzAzMDA3LDU3Ljg0NDg5NSA4MC4zMTI3NTQ4LDYzLjA3MjIwNyA3OS40MSw2OC4xNSBDNzguNTE3MDg3LDczLjEzNDY0MzYgNzUuNTY1Nzg0NCw3Ny41MTI1OTA2IDcxLjI4LDgwLjIxIEw0NS4xOSw5Ni44MyBDNDMuNTUxNDA1Myw5Ny44NzAzNjU5IDQxLjc2NDM4NDgsOTguNjU1OTgwNiAzOS44OSw5OS4xNiIvPgogIDwvZz4KPC9zdmc+Cg=="
}, function (e, t) {
  e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+CiAgPHBhdGggZmlsbD0iI0VFMzUwRiIgZD0iTTE1MCwxNjUgQzE1OC4yODQyNzEsMTY1IDE2NSwxNTguMjg0MjcxIDE2NSwxNTAgQzE2NSwxNDEuNzE1NzI5IDE1OC4yODQyNzEsMTM1IDE1MCwxMzUgQzE0MS43MTU3MjksMTM1IDEzNSwxNDEuNzE1NzI5IDEzNSwxNTAgQzEzNSwxNTguMjg0MjcxIDE0MS43MTU3MjksMTY1IDE1MCwxNjUgTDE1MCwxNjUgWiIvPgo8L3N2Zz4K"
}, function (e, t) {
  e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiPgogIDxkZWZzPgogICAgPHBvbHlnb24gaWQ9InQtc2luZ2xlLXZpZXctYSIgcG9pbnRzPSIxNTkuNjg4IDIyMC45MTggMTU5LjY4OCA4MCAxNDIuNSA4MCAxMDUgMTA2Ljk1MyAxMDUgMTI0LjYyOSAxNDIuMzA1IDk4LjY1MiAxNDIuNjk1IDk4LjY1MiAxNDIuNjk1IDIyMC45MTgiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSI+CiAgICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIvPgogICAgPHVzZSBmaWxsPSIjMDAwIiB4bGluazpocmVmPSIjdC1zaW5nbGUtdmlldy1hIi8+CiAgICA8dXNlIGZpbGw9IiNFRTM1MEYiIHhsaW5rOmhyZWY9IiN0LXNpbmdsZS12aWV3LWEiLz4KICA8L2c+Cjwvc3ZnPgo="
}, function (e, t) {
  e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNjkiIHk9IjIzMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMjU1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2IDI1MSkiPgogICAgICA8cGF0aCBmaWxsPSIjRUUzNTBGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNSwzMCBDMjMuMjg0MjcxMiwzMCAzMCwyMy4yODQyNzEyIDMwLDE1IEMzMCw2LjcxNTcyODc1IDIzLjI4NDI3MTIsMCAxNSwwIEM2LjcxNTcyODc1LDAgMCw2LjcxNTcyODc1IDAsMTUgQzAsMjMuMjg0MjcxMiA2LjcxNTcyODc1LDMwIDE1LDMwIEwxNSwzMCBaIi8+CiAgICAgIDxwYXRoIGZpbGw9IiM4QjhCOEIiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE5NCAzMEMyMDIuMjg0MjcxIDMwIDIwOSAyMy4yODQyNzEyIDIwOSAxNSAyMDkgNi43MTU3Mjg3NSAyMDIuMjg0MjcxIDAgMTk0IDAgMTg1LjcxNTcyOSAwIDE3OSA2LjcxNTcyODc1IDE3OSAxNSAxNzkgMjMuMjg0MjcxMiAxODUuNzE1NzI5IDMwIDE5NCAzMEwxOTQgMzB6TTEwNSAzMEMxMTMuMjg0MjcxIDMwIDEyMCAyMy4yODQyNzEyIDEyMCAxNSAxMjAgNi43MTU3Mjg3NSAxMTMuMjg0MjcxIDAgMTA1IDAgOTYuNzE1NzI4NyAwIDkwIDYuNzE1NzI4NzUgOTAgMTUgOTAgMjMuMjg0MjcxMiA5Ni43MTU3Mjg3IDMwIDEwNSAzMEwxMDUgMzB6Ii8+CiAgICA8L2c+CiAgICA8ZyBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4yNSIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOCA1MCkiPgogICAgICA8cmVjdCB3aWR0aD0iMjYyIiBoZWlnaHQ9IjQiLz4KICAgICAgPHJlY3Qgd2lkdGg9IjI2MiIgaGVpZ2h0PSI0IiB5PSI0NCIvPgogICAgICA8cmVjdCB3aWR0aD0iMjYyIiBoZWlnaHQ9IjQiIHk9Ijg4Ii8+CiAgICAgIDxyZWN0IHdpZHRoPSIyNjIiIGhlaWdodD0iNCIgeT0iMTMyIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
}, function (e, t) {
  e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+CiAgPGcgZmlsbD0ibm9uZSI+CiAgICA8ZyBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA4OSkiPgogICAgICA8cmVjdCB3aWR0aD0iODYiIGhlaWdodD0iNCIvPgogICAgICA8cmVjdCB3aWR0aD0iODYiIGhlaWdodD0iNCIgeT0iNDQiLz4KICAgIDwvZz4KICAgIDxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE3NykiPgogICAgICA8cmVjdCB3aWR0aD0iODYiIGhlaWdodD0iNCIvPgogICAgICA8cmVjdCB3aWR0aD0iODYiIGhlaWdodD0iNCIgeT0iNDQiLz4KICAgICAgPHJlY3Qgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQiIHk9Ijg4Ii8+CiAgICA8L2c+CiAgICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjUiIHg9Ii02MS41IiB5PSIxNDcuNSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMjUiIHRyYW5zZm9ybT0icm90YXRlKC05MCA4OC41IDE1MCkiLz4KICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0MCIgeT0iOTMiIGZpbGw9IiNFRTM1MEYiLz4KICA8L2c+Cjwvc3ZnPgo="
}, function (e, t, n) {
  "use strict";
  n.r(t);
  var r = n(3),
    a = n(0),
    o = "undefined" == typeof document ? {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: {
        blur: function () {},
        nodeName: ""
      },
      querySelector: function () {
        return null
      },
      querySelectorAll: function () {
        return []
      },
      getElementById: function () {
        return null
      },
      createEvent: function () {
        return {
          initEvent: function () {}
        }
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return []
          }
        }
      },
      location: {
        hash: ""
      }
    } : document,
    i = "undefined" == typeof window ? {
      document: o,
      navigator: {
        userAgent: ""
      },
      location: {},
      history: {},
      CustomEvent: function () {
        return this
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return ""
          }
        }
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {}
    } : window;
  var s = function e(t) {
    ! function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e);
    for (var n = 0; n < t.length; n += 1) this[n] = t[n];
    return this.length = t.length, this
  };

  function l(e, t) {
    var n = [],
      r = 0;
    if (e && !t && e instanceof s) return e;
    if (e)
      if ("string" == typeof e) {
        var a, l, c = e.trim();
        if (c.indexOf("<") >= 0 && c.indexOf(">") >= 0) {
          var u = "div";
          for (0 === c.indexOf("<li") && (u = "ul"), 0 === c.indexOf("<tr") && (u = "tbody"), 0 !== c.indexOf("<td") && 0 !== c.indexOf("<th") || (u = "tr"), 0 === c.indexOf("<tbody") && (u = "table"), 0 === c.indexOf("<option") && (u = "select"), (l = o.createElement(u)).innerHTML = c, r = 0; r < l.childNodes.length; r += 1) n.push(l.childNodes[r])
        } else
          for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || o).querySelectorAll(e.trim()) : [o.getElementById(e.trim().split("#")[1])], r = 0; r < a.length; r += 1) a[r] && n.push(a[r])
      } else if (e.nodeType || e === i || e === o) n.push(e);
    else if (e.length > 0 && e[0].nodeType)
      for (r = 0; r < e.length; r += 1) n.push(e[r]);
    return new s(n)
  }

  function c(e) {
    for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
    return t
  }

  function u(e) {
    return i.requestAnimationFrame ? i.requestAnimationFrame(e) : i.webkitRequestAnimationFrame ? i.webkitRequestAnimationFrame(e) : i.setTimeout(e, 1e3 / 60)
  }
  l.fn = s.prototype, l.Class = s, l.Dom7 = s;
  var p = Object.freeze({
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), n = 0; n < t.length; n += 1)
        for (var r = 0; r < this.length; r += 1) void 0 !== this[r] && void 0 !== this[r].classList && this[r].classList.add(t[n]);
      return this
    },
    removeClass: function (e) {
      for (var t = e.split(" "), n = 0; n < t.length; n += 1)
        for (var r = 0; r < this.length; r += 1) void 0 !== this[r] && void 0 !== this[r].classList && this[r].classList.remove(t[n]);
      return this
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e)
    },
    toggleClass: function (e) {
      for (var t = e.split(" "), n = 0; n < t.length; n += 1)
        for (var r = 0; r < this.length; r += 1) void 0 !== this[r] && void 0 !== this[r].classList && this[r].classList.toggle(t[n]);
      return this
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (var n = 0; n < this.length; n += 1)
        if (2 === arguments.length) this[n].setAttribute(e, t);
        else
          for (var r in e) this[n][r] = e[r], this[n].setAttribute(r, e[r]);
      return this
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this
    },
    prop: function (e, t) {
      if (1 !== arguments.length || "string" != typeof e) {
        for (var n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n][e] = t;
          else
            for (var r in e) this[n][r] = e[r];
        return this
      }
      if (this[0]) return this[0][e]
    },
    data: function (e, t) {
      var n;
      if (void 0 !== t) {
        for (var r = 0; r < this.length; r += 1)(n = this[r]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
        return this
      }
      if (n = this[0]) {
        if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
        var a = n.getAttribute("data-".concat(e));
        return a || void 0
      }
    },
    removeData: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var n = this[t];
        n.dom7ElementDataStorage && n.dom7ElementDataStorage[e] && (n.dom7ElementDataStorage[e] = null, delete n.dom7ElementDataStorage[e])
      }
    },
    dataset: function () {
      var e = this[0];
      if (e) {
        var t, n = {};
        if (e.dataset)
          for (var r in e.dataset) n[r] = e.dataset[r];
        else
          for (var a = 0; a < e.attributes.length; a += 1) {
            var o = e.attributes[a];
            o.name.indexOf("data-") >= 0 && (n[(t = o.name.split("data-")[1], t.toLowerCase().replace(/-(.)/g, (function (e, t) {
              return t.toUpperCase()
            })))] = o.value)
          }
        for (var i in n) "false" === n[i] ? n[i] = !1 : "true" === n[i] ? n[i] = !0 : parseFloat(n[i]) === 1 * n[i] && (n[i] *= 1);
        return n
      }
    },
    val: function (e) {
      if (void 0 !== e) {
        for (var t = 0; t < this.length; t += 1) {
          var n = this[t];
          if (Array.isArray(e) && n.multiple && "select" === n.nodeName.toLowerCase())
            for (var r = 0; r < n.options.length; r += 1) n.options[r].selected = e.indexOf(n.options[r].value) >= 0;
          else n.value = e
        }
        return this
      }
      if (this[0]) {
        if (this[0].multiple && "select" === this[0].nodeName.toLowerCase()) {
          for (var a = [], o = 0; o < this[0].selectedOptions.length; o += 1) a.push(this[0].selectedOptions[o].value);
          return a
        }
        return this[0].value
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var n = this[t].style;
        n.webkitTransform = e, n.transform = e
      }
      return this
    },
    transition: function (e) {
      "string" != typeof e && (e = "".concat(e, "ms"));
      for (var t = 0; t < this.length; t += 1) {
        var n = this[t].style;
        n.webkitTransitionDuration = e, n.transitionDuration = e
      }
      return this
    },
    on: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      var r = t[0],
        a = t[1],
        o = t[2],
        i = t[3];

      function s(e) {
        var t = e.target;
        if (t) {
          var n = e.target.dom7EventData || [];
          if (n.indexOf(e) < 0 && n.unshift(e), l(t).is(a)) o.apply(t, n);
          else
            for (var r = l(t).parents(), i = 0; i < r.length; i += 1) l(r[i]).is(a) && o.apply(r[i], n)
        }
      }

      function c(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), o.apply(this, t)
      }
      "function" == typeof t[1] && (r = t[0], o = t[1], i = t[2], a = void 0), i || (i = !1);
      for (var u, p = r.split(" "), d = 0; d < this.length; d += 1) {
        var f = this[d];
        if (a)
          for (u = 0; u < p.length; u += 1) {
            var h = p[u];
            f.dom7LiveListeners || (f.dom7LiveListeners = {}), f.dom7LiveListeners[h] || (f.dom7LiveListeners[h] = []), f.dom7LiveListeners[h].push({
              listener: o,
              proxyListener: s
            }), f.addEventListener(h, s, i)
          } else
            for (u = 0; u < p.length; u += 1) {
              var v = p[u];
              f.dom7Listeners || (f.dom7Listeners = {}), f.dom7Listeners[v] || (f.dom7Listeners[v] = []), f.dom7Listeners[v].push({
                listener: o,
                proxyListener: c
              }), f.addEventListener(v, c, i)
            }
      }
      return this
    },
    off: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      var r = t[0],
        a = t[1],
        o = t[2],
        i = t[3];
      "function" == typeof t[1] && (r = t[0], o = t[1], i = t[2], a = void 0), i || (i = !1);
      for (var s = r.split(" "), l = 0; l < s.length; l += 1)
        for (var c = s[l], u = 0; u < this.length; u += 1) {
          var p = this[u],
            d = void 0;
          if (!a && p.dom7Listeners ? d = p.dom7Listeners[c] : a && p.dom7LiveListeners && (d = p.dom7LiveListeners[c]), d && d.length)
            for (var f = d.length - 1; f >= 0; f -= 1) {
              var h = d[f];
              o && h.listener === o ? (p.removeEventListener(c, h.proxyListener, i), d.splice(f, 1)) : o && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === o ? (p.removeEventListener(c, h.proxyListener, i), d.splice(f, 1)) : o || (p.removeEventListener(c, h.proxyListener, i), d.splice(f, 1))
            }
        }
      return this
    },
    once: function () {
      for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      var a = n[0],
        o = n[1],
        i = n[2],
        s = n[3];

      function l() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        i.apply(this, n), e.off(a, o, l, s), l.dom7proxy && delete l.dom7proxy
      }
      return "function" == typeof n[1] && (a = n[0], i = n[1], s = n[2], o = void 0), l.dom7proxy = i, e.on(a, o, l, s)
    },
    trigger: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      for (var r = t[0].split(" "), a = t[1], s = 0; s < r.length; s += 1)
        for (var l = r[s], c = 0; c < this.length; c += 1) {
          var u = this[c],
            p = void 0;
          try {
            p = new i.CustomEvent(l, {
              detail: a,
              bubbles: !0,
              cancelable: !0
            })
          } catch (e) {
            (p = o.createEvent("Event")).initEvent(l, !0, !0), p.detail = a
          }
          u.dom7EventData = t.filter((function (e, t) {
            return t > 0
          })), u.dispatchEvent(p), u.dom7EventData = [], delete u.dom7EventData
        }
      return this
    },
    transitionEnd: function (e) {
      var t, n = ["webkitTransitionEnd", "transitionend"],
        r = this;

      function a(o) {
        if (o.target === this)
          for (e.call(this, o), t = 0; t < n.length; t += 1) r.off(n[t], a)
      }
      if (e)
        for (t = 0; t < n.length; t += 1) r.on(n[t], a);
      return this
    },
    animationEnd: function (e) {
      var t, n = ["webkitAnimationEnd", "animationend"],
        r = this;

      function a(o) {
        if (o.target === this)
          for (e.call(this, o), t = 0; t < n.length; t += 1) r.off(n[t], a)
      }
      if (e)
        for (t = 0; t < n.length; t += 1) r.on(n[t], a);
      return this
    },
    width: function () {
      return this[0] === i ? i.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
      }
      return null
    },
    height: function () {
      return this[0] === i ? i.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
      }
      return null
    },
    offset: function () {
      if (this.length > 0) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          n = o.body,
          r = e.clientTop || n.clientTop || 0,
          a = e.clientLeft || n.clientLeft || 0,
          s = e === i ? i.scrollY : e.scrollTop,
          l = e === i ? i.scrollX : e.scrollLeft;
        return {
          top: t.top + s - r,
          left: t.left + l - a
        }
      }
      return null
    },
    hide: function () {
      for (var e = 0; e < this.length; e += 1) this[e].style.display = "none";
      return this
    },
    show: function () {
      for (var e = 0; e < this.length; e += 1) {
        var t = this[e];
        "none" === t.style.display && (t.style.display = ""), "none" === i.getComputedStyle(t, null).getPropertyValue("display") && (t.style.display = "block")
      }
      return this
    },
    styles: function () {
      return this[0] ? i.getComputedStyle(this[0], null) : {}
    },
    css: function (e, t) {
      var n;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (n = 0; n < this.length; n += 1)
            for (var r in e) this[n].style[r] = e[r];
          return this
        }
        if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
        return this
      }
      return this
    },
    toArray: function () {
      for (var e = [], t = 0; t < this.length; t += 1) e.push(this[t]);
      return e
    },
    each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this;
      return this
    },
    forEach: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], this[t], t)) return this;
      return this
    },
    filter: function (e) {
      for (var t = [], n = 0; n < this.length; n += 1) e.call(this[n], n, this[n]) && t.push(this[n]);
      return new s(t)
    },
    map: function (e) {
      for (var t = [], n = 0; n < this.length; n += 1) t.push(e.call(this[n], n, this[n]));
      return new s(t)
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this
    },
    is: function (e) {
      var t, n, r = this[0];
      if (!r || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (r.matches) return r.matches(e);
        if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
        if (r.msMatchesSelector) return r.msMatchesSelector(e);
        for (t = l(e), n = 0; n < t.length; n += 1)
          if (t[n] === r) return !0;
        return !1
      }
      if (e === o) return r === o;
      if (e === i) return r === i;
      if (e.nodeType || e instanceof s) {
        for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
          if (t[n] === r) return !0;
        return !1
      }
      return !1
    },
    indexOf: function (e) {
      for (var t = 0; t < this.length; t += 1)
        if (this[t] === e) return t;
      return -1
    },
    index: function () {
      var e, t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
        return e
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t, n = this.length;
      return new s(e > n - 1 ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
    },
    append: function () {
      for (var e, t = 0; t < arguments.length; t += 1) {
        e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        for (var n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            var r = o.createElement("div");
            for (r.innerHTML = e; r.firstChild;) this[n].appendChild(r.firstChild)
          } else if (e instanceof s)
          for (var a = 0; a < e.length; a += 1) this[n].appendChild(e[a]);
        else this[n].appendChild(e)
      }
      return this
    },
    appendTo: function (e) {
      return l(e).append(this), this
    },
    prepend: function (e) {
      var t, n;
      for (t = 0; t < this.length; t += 1)
        if ("string" == typeof e) {
          var r = o.createElement("div");
          for (r.innerHTML = e, n = r.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(r.childNodes[n], this[t].childNodes[0])
        } else if (e instanceof s)
        for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
      else this[t].insertBefore(e, this[t].childNodes[0]);
      return this
    },
    prependTo: function (e) {
      return l(e).prepend(this), this
    },
    insertBefore: function (e) {
      for (var t = l(e), n = 0; n < this.length; n += 1)
        if (1 === t.length) t[0].parentNode.insertBefore(this[n], t[0]);
        else if (t.length > 1)
        for (var r = 0; r < t.length; r += 1) t[r].parentNode.insertBefore(this[n].cloneNode(!0), t[r])
    },
    insertAfter: function (e) {
      for (var t = l(e), n = 0; n < this.length; n += 1)
        if (1 === t.length) t[0].parentNode.insertBefore(this[n], t[0].nextSibling);
        else if (t.length > 1)
        for (var r = 0; r < t.length; r += 1) t[r].parentNode.insertBefore(this[n].cloneNode(!0), t[r].nextSibling)
    },
    next: function (e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && l(this[0].nextElementSibling).is(e) ? new s([this[0].nextElementSibling]) : new s([]) : this[0].nextElementSibling ? new s([this[0].nextElementSibling]) : new s([]) : new s([])
    },
    nextAll: function (e) {
      var t = [],
        n = this[0];
      if (!n) return new s([]);
      for (; n.nextElementSibling;) {
        var r = n.nextElementSibling;
        e ? l(r).is(e) && t.push(r) : t.push(r), n = r
      }
      return new s(t)
    },
    prev: function (e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && l(t.previousElementSibling).is(e) ? new s([t.previousElementSibling]) : new s([]) : t.previousElementSibling ? new s([t.previousElementSibling]) : new s([])
      }
      return new s([])
    },
    prevAll: function (e) {
      var t = [],
        n = this[0];
      if (!n) return new s([]);
      for (; n.previousElementSibling;) {
        var r = n.previousElementSibling;
        e ? l(r).is(e) && t.push(r) : t.push(r), n = r
      }
      return new s(t)
    },
    siblings: function (e) {
      return this.nextAll(e).add(this.prevAll(e))
    },
    parent: function (e) {
      for (var t = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? l(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
      return l(c(t))
    },
    parents: function (e) {
      for (var t = [], n = 0; n < this.length; n += 1)
        for (var r = this[n].parentNode; r;) e ? l(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
      return l(c(t))
    },
    closest: function (e) {
      var t = this;
      return void 0 === e ? new s([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
    },
    find: function (e) {
      for (var t = [], n = 0; n < this.length; n += 1)
        for (var r = this[n].querySelectorAll(e), a = 0; a < r.length; a += 1) t.push(r[a]);
      return new s(t)
    },
    children: function (e) {
      for (var t = [], n = 0; n < this.length; n += 1)
        for (var r = this[n].childNodes, a = 0; a < r.length; a += 1) e ? 1 === r[a].nodeType && l(r[a]).is(e) && t.push(r[a]) : 1 === r[a].nodeType && t.push(r[a]);
      return new s(c(t))
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this
    },
    detach: function () {
      return this.remove()
    },
    add: function () {
      for (var e, t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
      for (e = 0; e < r.length; e += 1) {
        var o = l(r[e]);
        for (t = 0; t < o.length; t += 1) this[this.length] = o[t], this.length += 1
      }
      return this
    },
    empty: function () {
      for (var e = 0; e < this.length; e += 1) {
        var t = this[e];
        if (1 === t.nodeType) {
          for (var n = 0; n < t.childNodes.length; n += 1) t.childNodes[n].parentNode && t.childNodes[n].parentNode.removeChild(t.childNodes[n]);
          t.textContent = ""
        }
      }
      return this
    }
  });
  var d = Object.freeze({
    scrollTo: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      var r = t[0],
        a = t[1],
        o = t[2],
        i = t[3],
        s = t[4];
      return 4 === t.length && "function" == typeof i && (s = i, r = t[0], a = t[1], o = t[2], s = t[3], i = t[4]), void 0 === i && (i = "swing"), this.each((function () {
        var e, t, n, l, c, p, d, f, h = this,
          v = a > 0 || 0 === a,
          g = r > 0 || 0 === r;
        if (void 0 === i && (i = "swing"), v && (e = h.scrollTop, o || (h.scrollTop = a)), g && (t = h.scrollLeft, o || (h.scrollLeft = r)), o) {
          v && (n = h.scrollHeight - h.offsetHeight, c = Math.max(Math.min(a, n), 0)), g && (l = h.scrollWidth - h.offsetWidth, p = Math.max(Math.min(r, l), 0));
          var m = null;
          v && c === e && (v = !1), g && p === t && (g = !1), u((function n() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (new Date).getTime();
            null === m && (m = r);
            var a, l = Math.max(Math.min((r - m) / o, 1), 0),
              b = "linear" === i ? l : .5 - Math.cos(l * Math.PI) / 2;
            v && (d = e + b * (c - e)), g && (f = t + b * (p - t)), v && c > e && d >= c && (h.scrollTop = c, a = !0), v && c < e && d <= c && (h.scrollTop = c, a = !0), g && p > t && f >= p && (h.scrollLeft = p, a = !0), g && p < t && f <= p && (h.scrollLeft = p, a = !0), a ? s && s() : (v && (h.scrollTop = d), g && (h.scrollLeft = f), u(n))
          }))
        }
      }))
    },
    scrollTop: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      var r = t[0],
        a = t[1],
        o = t[2],
        i = t[3];
      return 3 === t.length && "function" == typeof o && (r = t[0], a = t[1], i = t[2], o = t[3]), void 0 === r ? this.length > 0 ? this[0].scrollTop : null : this.scrollTo(void 0, r, a, o, i)
    },
    scrollLeft: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      var r = t[0],
        a = t[1],
        o = t[2],
        i = t[3];
      return 3 === t.length && "function" == typeof o && (r = t[0], a = t[1], i = t[2], o = t[3]), void 0 === r ? this.length > 0 ? this[0].scrollLeft : null : this.scrollTo(r, void 0, a, o, i)
    }
  });
  var f = Object.freeze({
      animate: function (e, t) {
        var n, r = this,
          a = {
            props: Object.assign({}, e),
            params: Object.assign({
              duration: 300,
              easing: "swing"
            }, t),
            elements: r,
            animating: !1,
            que: [],
            easingProgress: function (e, t) {
              return "swing" === e ? .5 - Math.cos(t * Math.PI) / 2 : "function" == typeof e ? e(t) : t
            },
            stop: function () {
              var e;
              a.frameId && (e = a.frameId, i.cancelAnimationFrame ? i.cancelAnimationFrame(e) : i.webkitCancelAnimationFrame ? i.webkitCancelAnimationFrame(e) : i.clearTimeout(e)), a.animating = !1, a.elements.each((function (e, t) {
                delete t.dom7AnimateInstance
              })), a.que = []
            },
            done: function (e) {
              if (a.animating = !1, a.elements.each((function (e, t) {
                  delete t.dom7AnimateInstance
                })), e && e(r), a.que.length > 0) {
                var t = a.que.shift();
                a.animate(t[0], t[1])
              }
            },
            animate: function (e, t) {
              if (a.animating) return a.que.push([e, t]), a;
              var n = [];
              a.elements.each((function (t, r) {
                var o, s, l, c, u;
                r.dom7AnimateInstance || (a.elements[t].dom7AnimateInstance = a), n[t] = {
                  container: r
                }, Object.keys(e).forEach((function (a) {
                  o = i.getComputedStyle(r, null).getPropertyValue(a).replace(",", "."), s = parseFloat(o), l = o.replace(s, ""), c = parseFloat(e[a]), u = e[a] + l, n[t][a] = {
                    initialFullValue: o,
                    initialValue: s,
                    unit: l,
                    finalValue: c,
                    finalFullValue: u,
                    currentValue: s
                  }
                }))
              }));
              var o, s, l = null,
                c = 0,
                p = 0,
                d = !1;
              return a.animating = !0, a.frameId = u((function i() {
                var f, h;
                o = (new Date).getTime(), d || (d = !0, t.begin && t.begin(r)), null === l && (l = o), t.progress && t.progress(r, Math.max(Math.min((o - l) / t.duration, 1), 0), l + t.duration - o < 0 ? 0 : l + t.duration - o, l), n.forEach((function (r) {
                  var i = r;
                  s || i.done || Object.keys(e).forEach((function (r) {
                    if (!s && !i.done) {
                      f = Math.max(Math.min((o - l) / t.duration, 1), 0), h = a.easingProgress(t.easing, f);
                      var u = i[r],
                        d = u.initialValue,
                        v = u.finalValue,
                        g = u.unit;
                      i[r].currentValue = d + h * (v - d);
                      var m = i[r].currentValue;
                      (v > d && m >= v || v < d && m <= v) && (i.container.style[r] = v + g, (p += 1) === Object.keys(e).length && (i.done = !0, c += 1), c === n.length && (s = !0)), s ? a.done(t.complete) : i.container.style[r] = m + g
                    }
                  }))
                })), s || (a.frameId = u(i))
              })), a
            }
          };
        if (0 === a.elements.length) return r;
        for (var o = 0; o < a.elements.length; o += 1) a.elements[o].dom7AnimateInstance ? n = a.elements[o].dom7AnimateInstance : a.elements[o].dom7AnimateInstance = a;
        return n || (n = a), "stop" === e ? n.stop() : n.animate(a.props, a.params), r
      },
      stop: function () {
        for (var e = 0; e < this.length; e += 1) this[e].dom7AnimateInstance && this[e].dom7AnimateInstance.stop()
      }
    }),
    h = "resize scroll".split(" ");

  function v(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    if (void 0 === n[0]) {
      for (var a = 0; a < this.length; a += 1) h.indexOf(e) < 0 && (e in this[a] ? this[a][e]() : l(this[a]).trigger(e));
      return this
    }
    return this.on.apply(this, [e].concat(n))
  } [p, d, f, Object.freeze({
    click: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["click"].concat(t))
    },
    blur: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["blur"].concat(t))
    },
    focus: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["focus"].concat(t))
    },
    focusin: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["focusin"].concat(t))
    },
    focusout: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["focusout"].concat(t))
    },
    keyup: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["keyup"].concat(t))
    },
    keydown: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["keydown"].concat(t))
    },
    keypress: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["keypress"].concat(t))
    },
    submit: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["submit"].concat(t))
    },
    change: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["change"].concat(t))
    },
    mousedown: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["mousedown"].concat(t))
    },
    mousemove: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["mousemove"].concat(t))
    },
    mouseup: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["mouseup"].concat(t))
    },
    mouseenter: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["mouseenter"].concat(t))
    },
    mouseleave: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["mouseleave"].concat(t))
    },
    mouseout: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["mouseout"].concat(t))
    },
    mouseover: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["mouseover"].concat(t))
    },
    touchstart: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["touchstart"].concat(t))
    },
    touchend: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["touchend"].concat(t))
    },
    touchmove: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["touchmove"].concat(t))
    },
    resize: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["resize"].concat(t))
    },
    scroll: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return v.bind(this).apply(void 0, ["scroll"].concat(t))
    }
  })].forEach((function (e) {
    Object.keys(e).forEach((function (t) {
      l.fn[t] = e[t]
    }))
  }));
  var g = l;

  function m(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function b(e) {
    return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  for (var y = [{
      base: "A",
      letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
    }, {
      base: "AA",
      letters: "Ꜳ"
    }, {
      base: "AE",
      letters: "ÆǼǢ"
    }, {
      base: "AO",
      letters: "Ꜵ"
    }, {
      base: "AU",
      letters: "Ꜷ"
    }, {
      base: "AV",
      letters: "ꜸꜺ"
    }, {
      base: "AY",
      letters: "Ꜽ"
    }, {
      base: "B",
      letters: "BⒷＢḂḄḆɃƂƁ"
    }, {
      base: "C",
      letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
    }, {
      base: "D",
      letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
    }, {
      base: "DZ",
      letters: "ǱǄ"
    }, {
      base: "Dz",
      letters: "ǲǅ"
    }, {
      base: "E",
      letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
    }, {
      base: "F",
      letters: "FⒻＦḞƑꝻ"
    }, {
      base: "G",
      letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
    }, {
      base: "H",
      letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
    }, {
      base: "I",
      letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
    }, {
      base: "J",
      letters: "JⒿＪĴɈ"
    }, {
      base: "K",
      letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
    }, {
      base: "L",
      letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
    }, {
      base: "LJ",
      letters: "Ǉ"
    }, {
      base: "Lj",
      letters: "ǈ"
    }, {
      base: "M",
      letters: "MⓂＭḾṀṂⱮƜ"
    }, {
      base: "N",
      letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
    }, {
      base: "NJ",
      letters: "Ǌ"
    }, {
      base: "Nj",
      letters: "ǋ"
    }, {
      base: "O",
      letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
    }, {
      base: "OI",
      letters: "Ƣ"
    }, {
      base: "OO",
      letters: "Ꝏ"
    }, {
      base: "OU",
      letters: "Ȣ"
    }, {
      base: "OE",
      letters: "Œ"
    }, {
      base: "oe",
      letters: "œ"
    }, {
      base: "P",
      letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
    }, {
      base: "Q",
      letters: "QⓆＱꝖꝘɊ"
    }, {
      base: "R",
      letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
    }, {
      base: "S",
      letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
    }, {
      base: "T",
      letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
    }, {
      base: "TZ",
      letters: "Ꜩ"
    }, {
      base: "U",
      letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
    }, {
      base: "V",
      letters: "VⓋＶṼṾƲꝞɅ"
    }, {
      base: "VY",
      letters: "Ꝡ"
    }, {
      base: "W",
      letters: "WⓌＷẀẂŴẆẄẈⱲ"
    }, {
      base: "X",
      letters: "XⓍＸẊẌ"
    }, {
      base: "Y",
      letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
    }, {
      base: "Z",
      letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
    }, {
      base: "a",
      letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
    }, {
      base: "aa",
      letters: "ꜳ"
    }, {
      base: "ae",
      letters: "æǽǣ"
    }, {
      base: "ao",
      letters: "ꜵ"
    }, {
      base: "au",
      letters: "ꜷ"
    }, {
      base: "av",
      letters: "ꜹꜻ"
    }, {
      base: "ay",
      letters: "ꜽ"
    }, {
      base: "b",
      letters: "bⓑｂḃḅḇƀƃɓ"
    }, {
      base: "c",
      letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
    }, {
      base: "d",
      letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
    }, {
      base: "dz",
      letters: "ǳǆ"
    }, {
      base: "e",
      letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
    }, {
      base: "f",
      letters: "fⓕｆḟƒꝼ"
    }, {
      base: "g",
      letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
    }, {
      base: "h",
      letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
    }, {
      base: "hv",
      letters: "ƕ"
    }, {
      base: "i",
      letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
    }, {
      base: "j",
      letters: "jⓙｊĵǰɉ"
    }, {
      base: "k",
      letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
    }, {
      base: "l",
      letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
    }, {
      base: "lj",
      letters: "ǉ"
    }, {
      base: "m",
      letters: "mⓜｍḿṁṃɱɯ"
    }, {
      base: "n",
      letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
    }, {
      base: "nj",
      letters: "ǌ"
    }, {
      base: "o",
      letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
    }, {
      base: "oi",
      letters: "ƣ"
    }, {
      base: "ou",
      letters: "ȣ"
    }, {
      base: "oo",
      letters: "ꝏ"
    }, {
      base: "p",
      letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
    }, {
      base: "q",
      letters: "qⓠｑɋꝗꝙ"
    }, {
      base: "r",
      letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
    }, {
      base: "s",
      letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
    }, {
      base: "t",
      letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
    }, {
      base: "tz",
      letters: "ꜩ"
    }, {
      base: "u",
      letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
    }, {
      base: "v",
      letters: "vⓥｖṽṿʋꝟʌ"
    }, {
      base: "vy",
      letters: "ꝡ"
    }, {
      base: "w",
      letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
    }, {
      base: "x",
      letters: "xⓧｘẋẍ"
    }, {
      base: "y",
      letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
    }, {
      base: "z",
      letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
    }], k = {}, w = 0; w < y.length; w += 1)
    for (var C = y[w].letters, M = 0; M < C.length; M += 1) k[C[M]] = y[w].base;
  var x = 1,
    S = {
      uniqueNumber: function () {
        return x += 1
      },
      id: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "xxxxxxxxxx",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0123456789abcdef",
          n = t.length;
        return e.replace(/x/g, (function () {
          return t[Math.floor(Math.random() * n)]
        }))
      },
      mdPreloaderContent: '\n    <span class="preloader-inner">\n      <span class="preloader-inner-gap"></span>\n      <span class="preloader-inner-left">\n          <span class="preloader-inner-half-circle"></span>\n      </span>\n      <span class="preloader-inner-right">\n          <span class="preloader-inner-half-circle"></span>\n      </span>\n    </span>\n  '.trim(),
      iosPreloaderContent: '\n    <span class="preloader-inner">\n      '.concat([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((function () {
        return '<span class="preloader-inner-line"></span>'
      })).join(""), "\n    </span>\n  ").trim(),
      auroraPreloaderContent: '\n    <span class="preloader-inner">\n      <span class="preloader-inner-circle"></span>\n    </span>\n  ',
      eventNameToColonCase: function (e) {
        var t;
        return e.split("").map((function (e, n) {
          return e.match(/[A-Z]/) && 0 !== n && !t ? (t = !0, ":".concat(e.toLowerCase())) : e.toLowerCase()
        })).join("")
      },
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach((function (e) {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        }))
      },
      nextTick: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return setTimeout(e, t)
      },
      nextFrame: function (e) {
        return S.requestAnimationFrame((function () {
          S.requestAnimationFrame(e)
        }))
      },
      now: function () {
        return Date.now()
      },
      requestAnimationFrame: function (e) {
        return i.requestAnimationFrame(e)
      },
      cancelAnimationFrame: function (e) {
        return i.cancelAnimationFrame(e)
      },
      removeDiacritics: function (e) {
        return e.replace(/[^\u0000-\u007E]/g, (function (e) {
          return k[e] || e
        }))
      },
      parseUrlQuery: function (e) {
        var t, n, r, a, o = {},
          s = e || i.location.href;
        if ("string" == typeof s && s.length)
          for (a = (n = (s = s.indexOf("?") > -1 ? s.replace(/\S*\?/, "") : "").split("&").filter((function (e) {
              return "" !== e
            }))).length, t = 0; t < a; t += 1) r = n[t].replace(/#\S+/g, "").split("="), o[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r.slice(1).join("=")) || "";
        return o
      },
      getTranslate: function (e) {
        var t, n, r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
          o = i.getComputedStyle(e, null);
        return i.WebKitCSSMatrix ? ((n = o.transform || o.webkitTransform).split(",").length > 6 && (n = n.split(", ").map((function (e) {
          return e.replace(",", ".")
        })).join(", ")), r = new i.WebKitCSSMatrix("none" === n ? "" : n)) : t = (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === a && (n = i.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (n = i.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), n || 0
      },
      serializeObject: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if ("string" == typeof e) return e;
        var n, r = [],
          a = "&";

        function o(e) {
          if (t.length > 0) {
            for (var n = "", r = 0; r < t.length; r += 1) n += 0 === r ? t[r] : "[".concat(encodeURIComponent(t[r]), "]");
            return "".concat(n, "[").concat(encodeURIComponent(e), "]")
          }
          return encodeURIComponent(e)
        }

        function i(e) {
          return encodeURIComponent(e)
        }
        return Object.keys(e).forEach((function (s) {
          var l;
          if (Array.isArray(e[s])) {
            l = [];
            for (var c = 0; c < e[s].length; c += 1) Array.isArray(e[s][c]) || "object" !== b(e[s][c]) ? l.push("".concat(o(s), "[]=").concat(i(e[s][c]))) : ((n = t.slice()).push(s), n.push(String(c)), l.push(S.serializeObject(e[s][c], n)));
            l.length > 0 && r.push(l.join(a))
          } else null === e[s] || "" === e[s] ? r.push("".concat(o(s), "=")) : "object" === b(e[s]) ? ((n = t.slice()).push(s), "" !== (l = S.serializeObject(e[s], n)) && r.push(l)) : void 0 !== e[s] && "" !== e[s] ? r.push("".concat(o(s), "=").concat(i(e[s]))) : "" === e[s] && r.push(o(s))
        })), r.join(a)
      },
      isObject: function (e) {
        return "object" === b(e) && null !== e && e.constructor && e.constructor === Object
      },
      merge: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t[0];
        t.splice(0, 1);
        for (var a = t, o = 0; o < a.length; o += 1) {
          var i = t[o];
          if (null != i)
            for (var s = Object.keys(Object(i)), l = 0, c = s.length; l < c; l += 1) {
              var u = s[l],
                p = Object.getOwnPropertyDescriptor(i, u);
              void 0 !== p && p.enumerable && (r[u] = i[u])
            }
        }
        return r
      },
      extend: function () {
        for (var e, t, n = !0, r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
        "boolean" == typeof a[0] ? (n = a[0], e = a[1], a.splice(0, 2), t = a) : (e = a[0], a.splice(0, 1), t = a);
        for (var i = 0; i < t.length; i += 1) {
          var s = a[i];
          if (null != s)
            for (var l = Object.keys(Object(s)), c = 0, u = l.length; c < u; c += 1) {
              var p = l[c],
                d = Object.getOwnPropertyDescriptor(s, p);
              void 0 !== d && d.enumerable && (n ? S.isObject(e[p]) && S.isObject(s[p]) ? S.extend(e[p], s[p]) : !S.isObject(e[p]) && S.isObject(s[p]) ? (e[p] = {}, S.extend(e[p], s[p])) : e[p] = s[p] : e[p] = s[p])
            }
        }
        return e
      },
      colorHexToRgb: function (e) {
        var t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function (e, t, n, r) {
            return t + t + n + n + r + r
          })),
          n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return n ? n.slice(1).map((function (e) {
          return parseInt(e, 16)
        })) : null
      },
      colorRgbToHex: function (e, t, n) {
        var r = [e, t, n].map((function (e) {
          var t = e.toString(16);
          return 1 === t.length ? "0".concat(t) : t
        })).join("");
        return "#".concat(r)
      },
      colorRgbToHsl: function (e, t, n) {
        e /= 255, t /= 255, n /= 255;
        var r, a = Math.max(e, t, n),
          o = Math.min(e, t, n),
          i = a - o;
        0 === i ? r = 0 : a === e ? r = (t - n) / i % 6 : a === t ? r = (n - e) / i + 2 : a === n && (r = (e - t) / i + 4);
        var s = (o + a) / 2;
        return r < 0 && (r = 6 + r), [60 * r, 0 === i ? 0 : i / (1 - Math.abs(2 * s - 1)), s]
      },
      colorHslToRgb: function (e, t, n) {
        var r, a = (1 - Math.abs(2 * n - 1)) * t,
          o = e / 60,
          i = a * (1 - Math.abs(o % 2 - 1));
        Number.isNaN(e) || void 0 === e ? r = [0, 0, 0] : o <= 1 ? r = [a, i, 0] : o <= 2 ? r = [i, a, 0] : o <= 3 ? r = [0, a, i] : o <= 4 ? r = [0, i, a] : o <= 5 ? r = [i, 0, a] : o <= 6 && (r = [a, 0, i]);
        var s = n - a / 2;
        return r.map((function (e) {
          return Math.max(0, Math.min(255, Math.round(255 * (e + s))))
        }))
      },
      colorHsbToHsl: function (e, t, n) {
        var r = {
            h: e,
            s: 0,
            l: 0
          },
          a = t,
          o = n;
        return r.l = (2 - a) * o / 2, r.s = r.l && r.l < 1 ? a * o / (r.l < .5 ? 2 * r.l : 2 - 2 * r.l) : r.s, [r.h, r.s, r.l]
      },
      colorHslToHsb: function (e, t, n) {
        var r = {
            h: e,
            s: 0,
            b: 0
          },
          a = n,
          o = t * (a < .5 ? a : 1 - a);
        return r.b = a + o, r.s = a > 0 ? 2 * o / r.b : r.s, [r.h, r.s, r.b]
      },
      colorThemeCSSProperties: function () {
        for (var e, t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
        if (1 === r.length ? (e = r[0], t = S.colorHexToRgb(e)) : 3 === r.length && (t = r, e = S.colorRgbToHex.apply(S, m(t))), !t) return {};
        var o = S.colorRgbToHsl.apply(S, m(t)),
          i = [o[0], o[1], Math.max(0, o[2] - .08)],
          s = [o[0], o[1], Math.max(0, o[2] + .08)],
          l = S.colorRgbToHex.apply(S, m(S.colorHslToRgb.apply(S, i))),
          c = S.colorRgbToHex.apply(S, m(S.colorHslToRgb.apply(S, s)));
        return {
          "--f7-theme-color": e,
          "--f7-theme-color-rgb": t.join(", "),
          "--f7-theme-color-shade": l,
          "--f7-theme-color-tint": c
        }
      }
    },
    E = S,
    T = {
      touch: !!(i.navigator.maxTouchPoints > 0 || "ontouchstart" in i || i.DocumentTouch && o instanceof i.DocumentTouch),
      pointerEvents: !!i.PointerEvent,
      observer: "MutationObserver" in i || "WebkitMutationObserver" in i,
      passiveListener: function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0
            }
          });
          i.addEventListener("testPassiveListener", null, t)
        } catch (e) {}
        return e
      }(),
      gestures: "ongesturestart" in i,
      intersectionObserver: "IntersectionObserver" in i
    },
    N = function () {
      var e = i.navigator.platform,
        t = i.navigator.userAgent,
        n = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          edge: !1,
          ie: !1,
          firefox: !1,
          macos: !1,
          windows: !1,
          cordova: !(!i.cordova && !i.phonegap),
          phonegap: !(!i.cordova && !i.phonegap),
          electron: !1
        },
        r = i.screen.width,
        a = i.screen.height,
        o = t.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = t.match(/(iPad).*OS\s([\d_]+)/),
        l = t.match(/(iPod)(.*OS\s([\d_]+))?/),
        c = !s && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        u = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
        p = t.indexOf("Edge/") >= 0,
        d = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
        f = "Win32" === e,
        h = t.toLowerCase().indexOf("electron") >= 0,
        v = "MacIntel" === e;
      !s && v && T.touch && (1024 === r && 1366 === a || 834 === r && 1194 === a || 834 === r && 1112 === a || 768 === r && 1024 === a) && (s = t.match(/(Version)\/([\d.]+)/), v = !1), n.ie = u, n.edge = p, n.firefox = d, o && !f && (n.os = "android", n.osVersion = o[2], n.android = !0, n.androidChrome = t.toLowerCase().indexOf("chrome") >= 0), (s || c || l) && (n.os = "ios", n.ios = !0), c && !l && (n.osVersion = c[2].replace(/_/g, "."), n.iphone = !0), s && (n.osVersion = s[2].replace(/_/g, "."), n.ipad = !0), l && (n.osVersion = l[3] ? l[3].replace(/_/g, ".") : null, n.ipod = !0), n.ios && n.osVersion && t.indexOf("Version/") >= 0 && "10" === n.osVersion.split(".")[0] && (n.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), n.webView = !(!(c || s || l) || !t.match(/.*AppleWebKit(?!.*Safari)/i) && !i.navigator.standalone) || i.matchMedia && i.matchMedia("(display-mode: standalone)").matches, n.webview = n.webView, n.standalone = n.webView, n.desktop = !(n.ios || n.android) || h, n.desktop && (n.electron = h, n.macos = v, n.windows = f, n.macos && (n.os = "macos"), n.windows && (n.os = "windows")), n.pixelRatio = i.devicePixelRatio || 1;
      return n.prefersColorScheme = function () {
        var e;
        return i.matchMedia && i.matchMedia("(prefers-color-scheme: light)").matches && (e = "light"), i.matchMedia && i.matchMedia("(prefers-color-scheme: dark)").matches && (e = "dark"), e
      }, n
    }();

  function O(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function D(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var j = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e);
      this.eventsParents = t, this.eventsListeners = {}
    }
    var t, n, r;
    return t = e, (n = [{
      key: "on",
      value: function (e, t, n) {
        var r = this;
        if ("function" != typeof t) return r;
        var a = n ? "unshift" : "push";
        return e.split(" ").forEach((function (e) {
          r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][a](t)
        })), r
      }
    }, {
      key: "once",
      value: function (e, t, n) {
        var r = this;
        if ("function" != typeof t) return r;

        function a() {
          r.off(e, a), a.f7proxy && delete a.f7proxy;
          for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
          t.apply(r, o)
        }
        return a.f7proxy = t, r.on(e, a, n)
      }
    }, {
      key: "off",
      value: function (e, t) {
        var n = this;
        return n.eventsListeners ? (e.split(" ").forEach((function (e) {
          void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((function (r, a) {
            (r === t || r.f7proxy && r.f7proxy === t) && n.eventsListeners[e].splice(a, 1)
          }))
        })), n) : n
      }
    }, {
      key: "emit",
      value: function () {
        var e, t, n, r, a = this;
        if (!a.eventsListeners) return a;
        for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        "string" == typeof i[0] || Array.isArray(i[0]) ? (e = i[0], t = i.slice(1, i.length), n = a, r = a.eventsParents) : (e = i[0].events, t = i[0].data, n = i[0].context || a, r = i[0].local ? [] : i[0].parents || a.eventsParents);
        var l = Array.isArray(e) ? e : e.split(" "),
          c = l.map((function (e) {
            return e.replace("local::", "")
          })),
          u = l.filter((function (e) {
            return e.indexOf("local::") < 0
          }));
        return c.forEach((function (e) {
          if (a.eventsListeners && a.eventsListeners[e]) {
            var r = [];
            a.eventsListeners[e].forEach((function (e) {
              r.push(e)
            })), r.forEach((function (e) {
              e.apply(n, t)
            }))
          }
        })), r && r.length > 0 && r.forEach((function (e) {
          e.emit.apply(e, [u].concat(O(t)))
        })), a
      }
    }]) && D(t.prototype, n), r && D(t, r), e
  }();

  function A(e) {
    return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function I(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function B(e) {
    return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function P(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function $(e, t) {
    return ($ = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var L = function (e) {
    function t() {
      var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t), e = function (e, t) {
        return !t || "object" !== A(t) && "function" != typeof t ? P(e) : t
      }(this, B(t).call(this, r));
      var a = P(e);
      return a.params = n, a.params && a.params.on && Object.keys(a.params.on).forEach((function (e) {
        a.on(e, a.params.on[e])
      })), e
    }
    var n, r, a;
    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && $(e, t)
    }(t, e), n = t, a = [{
      key: "installModule",
      value: function (e) {
        var t = this;
        t.prototype.modules || (t.prototype.modules = {});
        var n = e.name || "".concat(Object.keys(t.prototype.modules).length, "_").concat(E.now());
        if (t.prototype.modules[n] = e, e.proto && Object.keys(e.proto).forEach((function (n) {
            t.prototype[n] = e.proto[n]
          })), e.static && Object.keys(e.static).forEach((function (n) {
            t[n] = e.static[n]
          })), e.install) {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
          e.install.apply(t, a)
        }
        return t
      }
    }, {
      key: "use",
      value: function (e) {
        var t = this;
        if (Array.isArray(e)) return e.forEach((function (e) {
          return t.installModule(e)
        })), t;
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
        return t.installModule.apply(t, [e].concat(r))
      }
    }, {
      key: "components",
      set: function (e) {
        this.use && this.use(e)
      }
    }], (r = [{
      key: "useModuleParams",
      value: function (e, t) {
        if (e.params) {
          var n = {};
          Object.keys(e.params).forEach((function (e) {
            void 0 !== t[e] && (n[e] = E.extend({}, t[e]))
          })), E.extend(t, e.params), Object.keys(n).forEach((function (e) {
            E.extend(t[e], n[e])
          }))
        }
      }
    }, {
      key: "useModulesParams",
      value: function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (n) {
          var r = t.modules[n];
          r.params && E.extend(e, r.params)
        }))
      }
    }, {
      key: "useModule",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = this;
        if (n.modules) {
          var r = "string" == typeof e ? n.modules[e] : e;
          r && (r.instance && Object.keys(r.instance).forEach((function (e) {
            var t = r.instance[e];
            n[e] = "function" == typeof t ? t.bind(n) : t
          })), r.on && n.on && Object.keys(r.on).forEach((function (e) {
            n.on(e, r.on[e])
          })), r.vnode && (n.vnodeHooks || (n.vnodeHooks = {}), Object.keys(r.vnode).forEach((function (e) {
            Object.keys(r.vnode[e]).forEach((function (t) {
              var a = r.vnode[e][t];
              n.vnodeHooks[t] || (n.vnodeHooks[t] = {}), n.vnodeHooks[t][e] || (n.vnodeHooks[t][e] = []), n.vnodeHooks[t][e].push(a.bind(n))
            }))
          }))), r.create && r.create.bind(n)(t))
        }
      }
    }, {
      key: "useModules",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = this;
        t.modules && Object.keys(t.modules).forEach((function (n) {
          var r = e[n] || {};
          t.useModule(n, r)
        }))
      }
    }]) && I(n.prototype, r), a && I(n, a), t
  }(j);

  function _(e, t, n) {
    return (_ = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
      } catch (e) {
        return !1
      }
    }() ? Reflect.construct : function (e, t, n) {
      var r = [null];
      r.push.apply(r, t);
      var a = new(Function.bind.apply(e, r));
      return n && z(a, n.prototype), a
    }).apply(null, arguments)
  }

  function z(e, t) {
    return (z = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var R = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.defaultSelector,
      n = e.constructor,
      r = e.domProp,
      a = e.app,
      o = e.addMethods,
      i = {
        create: function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return _(n, a ? [a].concat(t) : t)
        },
        get: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t;
          if (e instanceof n) return e;
          var a = g(e);
          return 0 !== a.length ? a[0][r] : void 0
        },
        destroy: function (e) {
          var t = i.get(e);
          if (t && t.destroy) return t.destroy()
        }
      };
    return o && Array.isArray(o) && o.forEach((function (e) {
      i[e] = function () {
        for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t, r = i.get(n), a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) o[s - 1] = arguments[s];
        if (r && r[e]) return r[e].apply(r, o)
      }
    })), i
  };

  function H(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function U(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? H(n, !0).forEach((function (t) {
        F(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(n).forEach((function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function F(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var Q = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.defaultSelector,
        n = e.constructor,
        r = e.app,
        a = E.extend(R({
          defaultSelector: t,
          constructor: n,
          app: r,
          domProp: "f7Modal"
        }), {
          open: function (e, t, a) {
            var o = g(e);
            if (o.length > 1 && a) {
              var i = g(a).parents(".page");
              i.length && o.each((function (e, t) {
                var n = g(t);
                n.parents(i)[0] === i[0] && (o = n)
              }))
            }
            if (o.length > 1 && (o = o.eq(o.length - 1)), o.length) {
              var s = o[0].f7Modal;
              if (!s) {
                var l = o.dataset();
                s = new n(r, U({
                  el: o
                }, l))
              }
              return s.open(t)
            }
          },
          close: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
              a = arguments.length > 1 ? arguments[1] : void 0,
              o = arguments.length > 2 ? arguments[2] : void 0,
              i = g(e);
            if (i.length) {
              if (i.length > 1) {
                var s;
                if (o) {
                  var l = g(o);
                  l.length && (s = l.parents(i))
                }
                i = s && s.length > 0 ? s : i.eq(i.length - 1)
              }
              var c = i[0].f7Modal;
              if (!c) {
                var u = i.dataset();
                c = new n(r, U({
                  el: i
                }, u))
              }
              return c.close(a)
            }
          }
        });
      return a
    },
    V = [];
  var Y = function (e) {
    var t = this;
    return new Promise((function (n, r) {
      var a, s, l, c = t.instance;
      if (e) {
        if ("string" == typeof e) {
          var u = e.match(/([a-z0-9-]*)/i);
          if (e.indexOf(".") < 0 && u && u[0].length === e.length) {
            if (!c || c && !c.params.lazyModulesPath) return void r(new Error('Framework7: "lazyModulesPath" app parameter must be specified to fetch module by name'));
            a = "".concat(c.params.lazyModulesPath, "/").concat(e, ".js")
          } else a = e
        } else "function" == typeof e ? l = e : s = e;
        if (l) {
          var p = l(t, !1);
          if (!p) return void r(new Error("Framework7: Can't find Framework7Cncomponent in specified component function"));
          if (t.prototype.modules && t.prototype.modules[p.name]) return void n();
          v(p), n()
        }
        if (s) {
          var d = s;
          if (!d) return void r(new Error("Framework7: Can't find Framework7Cncomponent in specified component"));
          if (t.prototype.modules && t.prototype.modules[d.name]) return void n();
          v(d), n()
        }
        if (a) {
          if (V.indexOf(a) >= 0) return void n();
          V.push(a);
          var f = new Promise((function (e, n) {
              t.request.get(a, (function (r) {
                var s = E.id(),
                  l = "f7_component_loader_callback_".concat(s),
                  c = o.createElement("script");
                c.innerHTML = "window.".concat(l, " = function (Framework7Cn, Framework7AutoInstallComponent) {return ").concat(r.trim(), "}"), g("head").append(c);
                var u = i[l];
                delete i[l], g(c).remove();
                var p = u(t, !1);
                p ? t.prototype.modules && t.prototype.modules[p.name] ? e() : (v(p), e()) : n(new Error("Framework7: Can't find Framework7Cncomponent in ".concat(a, " file")))
              }), (function (e, t) {
                n(e, t)
              }))
            })),
            h = new Promise((function (e) {
              t.request.get(a.replace(".js", c.rtl ? ".rtl.css" : ".css"), (function (t) {
                var n = o.createElement("style");
                n.innerHTML = t, g("head").append(n), e()
              }), (function () {
                e()
              }))
            }));
          Promise.all([f, h]).then((function () {
            n()
          })).catch((function (e) {
            r(e)
          }))
        }
      } else r(new Error("Framework7: Lazy module must be specified"));

      function v(e) {
        t.use(e), c && (c.useModuleParams(e, c.params), c.useModule(e))
      }
    }))
  };

  function q(e) {
    return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function W(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function Z(e, t) {
    return !t || "object" !== q(t) && "function" != typeof t ? J(e) : t
  }

  function G(e) {
    return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function J(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function X(e, t) {
    return (X = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var K = function (e) {
    function t(e) {
      var n;
      if (function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), n = Z(this, G(t).call(this, e)), t.instance) throw new Error("Framework7Cnis already initialized and can't be initialized more than once");
      var r = E.extend({}, e),
        a = J(n);
      t.instance = a;
      var s = {
        version: "1.0.0",
        id: "io.framework7.testapp",
        root: "body",
        theme: "auto",
        language: i.navigator.language,
        routes: [],
        name: "Framework7",
        lazyModulesPath: null,
        initOnDeviceReady: !0,
        init: !0,
        autoDarkTheme: !1,
        iosTranslucentBars: !0,
        iosTranslucentModals: !0,
        component: void 0,
        componentUrl: void 0
      };
      a.useModulesParams(s), a.params = E.extend(s, e);
      var l = g(a.params.root);
      E.extend(a, {
        id: a.params.id,
        name: a.params.name,
        version: a.params.version,
        routes: a.params.routes,
        language: a.params.language,
        root: l,
        rtl: "rtl" === l.css("direction"),
        theme: "auto" === a.params.theme ? N.ios ? "ios" : N.desktop && N.electron ? "aurora" : "md" : a.params.theme,
        passedParams: r,
        online: i.navigator.onLine
      }), a.root && a.root[0] && (a.root[0].f7 = a), a.useModules(), a.initData();
      var c = "(prefers-color-scheme: dark)",
        u = "(prefers-color-scheme: light)";
      return a.mq = {}, i.matchMedia && (a.mq.dark = i.matchMedia(c), a.mq.light = i.matchMedia(u)), a.colorSchemeListener = function (e) {
        var t = e.matches,
          n = e.media;
        if (t) {
          var r = o.querySelector("html");
          n === c ? r.classList.add("theme-dark") : n === u && r.classList.remove("theme-dark")
        }
      }, a.params.init && (N.cordova && a.params.initOnDeviceReady ? g(o).on("deviceready", (function () {
        a.init()
      })) : a.init()), Z(n, a)
    }
    var n, r, s;
    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && X(e, t)
    }(t, e), n = t, s = [{
      key: "Dom7",
      get: function () {
        return g
      }
    }, {
      key: "$",
      get: function () {
        return g
      }
    }, {
      key: "Template7",
      get: function () {
        return a.a
      }
    }, {
      key: "Class",
      get: function () {
        return L
      }
    }, {
      key: "Events",
      get: function () {
        return j
      }
    }], (r = [{
      key: "initData",
      value: function () {
        var e = this;
        e.data = {}, e.params.data && "function" == typeof e.params.data ? E.extend(e.data, e.params.data.bind(e)()) : e.params.data && E.extend(e.data, e.params.data), e.methods = {}, e.params.methods && Object.keys(e.params.methods).forEach((function (t) {
          "function" == typeof e.params.methods[t] ? e.methods[t] = e.params.methods[t].bind(e) : e.methods[t] = e.params.methods[t]
        }))
      }
    }, {
      key: "enableAutoDarkTheme",
      value: function () {
        if (i.matchMedia) {
          var e = this,
            t = o.querySelector("html");
          e.mq.dark && e.mq.light && (e.mq.dark.addListener(e.colorSchemeListener), e.mq.light.addListener(e.colorSchemeListener)), e.mq.dark && e.mq.dark.matches ? t.classList.add("theme-dark") : e.mq.light && e.mq.light.matches && t.classList.remove("theme-dark")
        }
      }
    }, {
      key: "disableAutoDarkTheme",
      value: function () {
        i.matchMedia && (this.mq.dark && this.mq.dark.removeListener(this.colorSchemeListener), this.mq.light && this.mq.light.removeListener(this.colorSchemeListener))
      }
    }, {
      key: "initAppComponent",
      value: function (e) {
        var t = this;
        t.router.componentLoader(t.params.component, t.params.componentUrl, {
          componentOptions: {
            el: t.root[0],
            root: !0
          }
        }, (function (n) {
          t.root = g(n), t.root[0].f7 = t, t.rootComponent = n.f7Component, e && e()
        }), (function () {}))
      }
    }, {
      key: "_init",
      value: function () {
        var e = this;
        return e.initialized ? e : (e.root.addClass("framework7-initializing"), e.rtl && g("html").attr("dir", "rtl"), e.params.autoDarkTheme && e.enableAutoDarkTheme(), i.addEventListener("offline", (function () {
          e.online = !1, e.emit("offline"), e.emit("connection", !1)
        })), i.addEventListener("online", (function () {
          e.online = !0, e.emit("online"), e.emit("connection", !0)
        })), e.root.addClass("framework7-root"), g("html").removeClass("ios md aurora").addClass(e.theme), e.params.iosTranslucentBars && "ios" === e.theme && N.ios && g("html").addClass("ios-translucent-bars"), e.params.iosTranslucentModals && "ios" === e.theme && N.ios && g("html").addClass("ios-translucent-modals"), E.nextFrame((function () {
          e.root.removeClass("framework7-initializing")
        })), e.initialized = !0, e.emit("init"), e)
      }
    }, {
      key: "init",
      value: function () {
        var e = this;
        e.params.component || e.params.componentUrl ? e.initAppComponent((function () {
          e._init()
        })) : e._init()
      }
    }, {
      key: "loadModule",
      value: function () {
        return t.loadModule.apply(t, arguments)
      }
    }, {
      key: "loadModules",
      value: function () {
        return t.loadModules.apply(t, arguments)
      }
    }, {
      key: "getVnodeHooks",
      value: function (e, t) {
        return this.vnodeHooks && this.vnodeHooks[e] && this.vnodeHooks[e][t] || []
      }
    }, {
      key: "$",
      get: function () {
        return g
      }
    }, {
      key: "t7",
      get: function () {
        return a.a
      }
    }]) && W(n.prototype, r), s && W(n, s), t
  }(L);
  K.ModalMethods = Q, K.ConstructorMethods = R, K.loadModule = Y, K.loadModules = function (e) {
    return Promise.all(e.map((function (e) {
      return K.loadModule(e)
    })))
  };
  var ee = K,
    te = {},
    ne = 0;

  function re(e) {
    var t = E.extend({}, te);
    "beforeCreate beforeOpen beforeSend error complete success statusCode".split(" ").forEach((function (e) {
      delete t[e]
    }));
    var n = E.extend({
        url: i.location.toString(),
        method: "GET",
        data: !1,
        async: !0,
        cache: !0,
        user: "",
        password: "",
        headers: {},
        xhrFields: {},
        statusCode: {},
        processData: !0,
        dataType: "text",
        contentType: "application/x-www-form-urlencoded",
        timeout: 0
      }, t),
      r = E.extend({}, n, e);

    function a(e) {
      for (var t, n, a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++) o[i - 1] = arguments[i];
      return te[e] && (t = te[e].apply(te, o)), r[e] && (n = r[e].apply(r, o)), "boolean" != typeof t && (t = !0), "boolean" != typeof n && (n = !0), t && n
    }
    if (!1 !== a("beforeCreate", r)) {
      r.type && (r.method = r.type);
      var s, l = r.url.indexOf("?") >= 0 ? "&" : "?",
        c = r.method.toUpperCase();
      if (("GET" === c || "HEAD" === c || "OPTIONS" === c || "DELETE" === c) && r.data)(s = "string" == typeof r.data ? r.data.indexOf("?") >= 0 ? r.data.split("?")[1] : r.data : E.serializeObject(r.data)).length && (r.url += l + s, "?" === l && (l = "&"));
      if ("json" === r.dataType && r.url.indexOf("callback=") >= 0) {
        var u, p = "f7jsonp_".concat(Date.now() + (ne += 1)),
          d = r.url.split("callback="),
          f = "".concat(d[0], "callback=").concat(p);
        if (d[1].indexOf("&") >= 0) {
          var h = d[1].split("&").filter((function (e) {
            return e.indexOf("=") > 0
          })).join("&");
          h.length > 0 && (f += "&".concat(h))
        }
        var v = o.createElement("script");
        return v.type = "text/javascript", v.onerror = function () {
          clearTimeout(u), a("error", null, "scripterror", "scripterror"), a("complete", null, "scripterror")
        }, v.src = f, i[p] = function (e) {
          clearTimeout(u), a("success", e), v.parentNode.removeChild(v), v = null, delete i[p]
        }, o.querySelector("head").appendChild(v), void(r.timeout > 0 && (u = setTimeout((function () {
          v.parentNode.removeChild(v), v = null, a("error", null, "timeout", "timeout")
        }), r.timeout)))
      }
      "GET" !== c && "HEAD" !== c && "OPTIONS" !== c && "DELETE" !== c || !1 === r.cache && (r.url += "".concat(l, "_nocache").concat(Date.now()));
      var g = new XMLHttpRequest;
      if (g.requestUrl = r.url, g.requestParameters = r, !1 === a("beforeOpen", g, r)) return g;
      g.open(c, r.url, r.async, r.user, r.password);
      var m = null;
      if (("POST" === c || "PUT" === c || "PATCH" === c) && r.data)
        if (r.processData)
          if ([ArrayBuffer, Blob, Document, FormData].indexOf(r.data.constructor) >= 0) m = r.data;
          else {
            var b = "---------------------------".concat(Date.now().toString(16));
            "multipart/form-data" === r.contentType ? g.setRequestHeader("Content-Type", "multipart/form-data; boundary=".concat(b)) : g.setRequestHeader("Content-Type", r.contentType), m = "";
            var y = E.serializeObject(r.data);
            if ("multipart/form-data" === r.contentType) {
              y = y.split("&");
              for (var k = [], w = 0; w < y.length; w += 1) k.push('Content-Disposition: form-data; name="'.concat(y[w].split("=")[0], '"\r\n\r\n').concat(y[w].split("=")[1], "\r\n"));
              m = "--".concat(b, "\r\n").concat(k.join("--".concat(b, "\r\n")), "--").concat(b, "--\r\n")
            } else m = "application/json" === r.contentType ? JSON.stringify(r.data) : y
          }
      else m = r.data, g.setRequestHeader("Content-Type", r.contentType);
      return "json" !== r.dataType || r.headers && r.headers.Accept || g.setRequestHeader("Accept", "application/json"), r.headers && Object.keys(r.headers).forEach((function (e) {
        void 0 !== r.headers[e] && g.setRequestHeader(e, r.headers[e])
      })), void 0 === r.crossDomain && (r.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(r.url) && RegExp.$2 !== i.location.host), r.crossDomain || g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.xhrFields && E.extend(g, r.xhrFields), g.onload = function () {
        var e;
        if (g.status >= 200 && g.status < 300 || 0 === g.status)
          if ("json" === r.dataType) {
            var t;
            try {
              e = JSON.parse(g.responseText)
            } catch (e) {
              t = !0
            }
            t ? a("error", g, "parseerror", "parseerror") : a("success", e, g.status, g)
          } else a("success", e = "text" === g.responseType || "" === g.responseType ? g.responseText : g.response, g.status, g);
        else a("error", g, g.status, g.statusText);
        r.statusCode && (te.statusCode && te.statusCode[g.status] && te.statusCode[g.status](g), r.statusCode[g.status] && r.statusCode[g.status](g)), a("complete", g, g.status)
      }, g.onerror = function () {
        a("error", g, g.status, g.status), a("complete", g, "error")
      }, r.timeout > 0 && (g.timeout = r.timeout, g.ontimeout = function () {
        a("error", g, "timeout", "timeout"), a("complete", g, "timeout")
      }), !1 === a("beforeSend", g, r) ? g : (g.send(m), g)
    }
  }

  function ae(e) {
    for (var t = [], n = t[0], r = t[1], a = t[2], o = t[3], i = t[4], s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) l[c - 1] = arguments[c];
    "function" == typeof l[1] ? (n = l[0], a = l[1], o = l[2], i = l[3]) : (n = l[0], r = l[1], a = l[2], o = l[3], i = l[4]), [a, o].forEach((function (e) {
      "string" == typeof e && (i = e, e === a ? a = void 0 : o = void 0)
    }));
    var u = {
      url: n,
      method: "post" === e || "postJSON" === e ? "POST" : "GET",
      data: r,
      success: a,
      error: o,
      dataType: i = i || ("json" === e || "postJSON" === e ? "json" : void 0)
    };
    return "postJSON" === e && E.extend(u, {
      contentType: "application/json",
      processData: !1,
      crossDomain: !0,
      data: "string" == typeof r ? r : JSON.stringify(r)
    }), re(u)
  }

  function oe(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    var a = n[0],
      o = n[1],
      i = n[2];
    return new Promise((function (t, n) {
      ae(e, a, o, (function (e, n, r) {
        t({
          data: e,
          status: n,
          xhr: r
        })
      }), (function (e, t, r) {
        n({
          xhr: e,
          status: t,
          message: r
        })
      }), i)
    }))
  }
  Object.assign(re, {
    get: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return ae.apply(void 0, ["get"].concat(t))
    },
    post: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return ae.apply(void 0, ["post"].concat(t))
    },
    json: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return ae.apply(void 0, ["json"].concat(t))
    },
    getJSON: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return ae.apply(void 0, ["json"].concat(t))
    },
    postJSON: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return ae.apply(void 0, ["postJSON"].concat(t))
    }
  }), re.promise = function (e) {
    return new Promise((function (t, n) {
      re(Object.assign(e, {
        success: function (e, n, r) {
          t({
            data: e,
            status: n,
            xhr: r
          })
        },
        error: function (e, t, r) {
          n({
            xhr: e,
            status: t,
            message: r
          })
        }
      }))
    }))
  }, Object.assign(re.promise, {
    get: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return oe.apply(void 0, ["get"].concat(t))
    },
    post: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return oe.apply(void 0, ["post"].concat(t))
    },
    json: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return oe.apply(void 0, ["json"].concat(t))
    },
    getJSON: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return oe.apply(void 0, ["json"].concat(t))
    },
    postJSON: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return oe.apply(void 0, ["postJSON"].concat(t))
    }
  }), re.setup = function (e) {
    e.type && !e.method && E.extend(e, {
      method: e.type
    }), E.extend(te, e)
  };
  var ie = {
      name: "device",
      proto: {
        device: N
      },
      static: {
        device: N
      },
      on: {
        init: function () {
          var e = [],
            t = o.querySelector("html"),
            n = o.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
          t && (N.standalone && N.ios && n && "black-translucent" === n.content && e.push("device-full-viewport"), e.push("device-pixel-ratio-".concat(Math.floor(N.pixelRatio))), N.os && !N.desktop ? e.push("device-".concat(N.os)) : N.desktop && (e.push("device-desktop"), N.os && e.push("device-".concat(N.os))), (N.cordova || N.phonegap) && e.push("device-cordova"), e.forEach((function (e) {
            t.classList.add(e)
          })))
        }
      }
    },
    se = {
      name: "support",
      proto: {
        support: T
      },
      static: {
        support: T
      }
    },
    le = {
      name: "utils",
      proto: {
        utils: E
      },
      static: {
        utils: E
      }
    },
    ce = {
      name: "resize",
      instance: {
        getSize: function () {
          if (!this.root[0]) return {
            width: 0,
            height: 0,
            left: 0,
            top: 0
          };
          var e = this.root.offset(),
            t = [this.root[0].offsetWidth, this.root[0].offsetHeight, e.left, e.top],
            n = t[0],
            r = t[1],
            a = t[2],
            o = t[3];
          return this.width = n, this.height = r, this.left = a, this.top = o, {
            width: n,
            height: r,
            left: a,
            top: o
          }
        }
      },
      on: {
        init: function () {
          var e = this;
          e.getSize(), i.addEventListener("resize", (function () {
            e.emit("resize")
          }), !1), i.addEventListener("orientationchange", (function () {
            e.emit("orientationchange")
          }))
        },
        orientationchange: function () {
          this.device.ipad && (o.body.scrollLeft = 0, setTimeout((function () {
            o.body.scrollLeft = 0
          }), 0))
        },
        resize: function () {
          this.getSize()
        }
      }
    },
    ue = {
      name: "request",
      proto: {
        request: re
      },
      static: {
        request: re
      }
    };
  var pe = {
    name: "touch",
    params: {
      touch: {
        touchClicksDistanceThreshold: 5,
        disableContextMenu: !1,
        tapHold: !1,
        tapHoldDelay: 750,
        tapHoldPreventClicks: !0,
        activeState: !0,
        activeStateElements: "a, button, label, span, .actions-button, .stepper-button, .stepper-button-plus, .stepper-button-minus, .card-expandable, .menu-item, .link, .item-link, .accordion-item-toggle",
        activeStateOnMouseMove: !1,
        mdTouchRipple: !0,
        iosTouchRipple: !1,
        auroraTouchRipple: !1,
        touchRippleElements: ".ripple, .link, .item-link, .list-button, .links-list a, .button, button, .input-clear-button, .dialog-button, .tab-link, .item-radio, .item-checkbox, .actions-button, .searchbar-disable-button, .fab a, .checkbox, .radio, .data-table .sortable-cell:not(.input-cell), .notification-close-button, .stepper-button, .stepper-button-minus, .stepper-button-plus, .menu-item-content, .list.accordion-list .accordion-item-toggle"
      }
    },
    instance: {
      touchEvents: {
        start: T.touch ? "touchstart" : T.pointerEvents ? "pointerdown" : "mousedown",
        move: T.touch ? "touchmove" : T.pointerEvents ? "pointermove" : "mousemove",
        end: T.touch ? "touchend" : T.pointerEvents ? "pointerup" : "mouseup"
      }
    },
    on: {
      init: function () {
        var e, t, n, r, a, s, l, c, u, p, d, f, h = this,
          v = h.params.touch,
          m = v["".concat(h.theme, "TouchRipple")];

        function b(e) {
          var t, n = g(e),
            r = n.parents(v.activeStateElements);
          if (n.closest(".no-active-state").length) return null;
          if (n.is(v.activeStateElements) && (t = n), r.length > 0 && (t = t ? t.add(r) : r), t && t.length > 1) {
            for (var a, o = [], i = 0; i < t.length; i += 1) a || (o.push(t[i]), (t.eq(i).hasClass("prevent-active-state-propagation") || t.eq(i).hasClass("no-active-state-propagation")) && (a = !0));
            t = g(o)
          }
          return t || n
        }

        function y(e) {
          return e.parents(".page-content").length > 0
        }

        function k() {
          c && c.addClass("active-state")
        }

        function w() {
          c && (c.removeClass("active-state"), c = null)
        }

        function C(e, t, n) {
          e && (p = h.touchRipple.create(e, t, n))
        }

        function M() {
          p && (p.remove(), p = void 0, d = void 0)
        }

        function x(n) {
          (d = function (e) {
            var t = v.touchRippleElements,
              n = g(e);
            if (n.is(t)) return !n.hasClass("no-ripple") && n;
            if (n.parents(t).length > 0) {
              var r = n.parents(t).eq(0);
              return !r.hasClass("no-ripple") && r
            }
            return !1
          }(n)) && 0 !== d.length ? y(d) ? (clearTimeout(f), f = setTimeout((function () {
            M(), C(d, e, t)
          }), 80)) : (M(), C(d, e, t)) : d = void 0
        }

        function S() {
          clearTimeout(f), M()
        }

        function E() {
          p || !d || r ? M() : (clearTimeout(f), C(d, e, t), setTimeout(M, 0))
        }

        function O() {
          g(".active-state").removeClass("active-state"), m && E()
        }

        function D(e, t) {
          h.emit({
            events: e,
            data: [t]
          })
        }

        function j(e) {
          D("touchstart touchstart:active", e)
        }

        function A(e) {
          D("touchmove touchmove:active", e)
        }

        function I(e) {
          D("touchend touchend:active", e)
        }

        function B(e) {
          D("touchstart:passive", e)
        }

        function P(e) {
          D("touchmove:passive", e)
        }

        function $(e) {
          D("touchend:passive", e)
        }

        function L(e) {
          D("".concat(e.type, " ").concat(e.type, ":active"), e)
        }

        function _(e) {
          D("".concat(e.type, ":passive"), e)
        }
        N.ios && N.webView && i.addEventListener("touchstart", (function () {}));
        var z = !!T.passiveListener && {
            passive: !0
          },
          R = !T.passiveListener || {
            passive: !0,
            capture: !0
          },
          H = !!T.passiveListener && {
            passive: !1
          },
          U = !T.passiveListener || {
            passive: !1,
            capture: !0
          };
        o.addEventListener("click", (function (e) {
          D("click", e)
        }), !0), T.passiveListener ? (o.addEventListener(h.touchEvents.start, j, U), o.addEventListener(h.touchEvents.move, A, H), o.addEventListener(h.touchEvents.end, I, H), o.addEventListener(h.touchEvents.start, B, R), o.addEventListener(h.touchEvents.move, P, z), o.addEventListener(h.touchEvents.end, $, z), T.touch && T.gestures && (o.addEventListener("gesturestart", L, H), o.addEventListener("gesturechange", L, H), o.addEventListener("gestureend", L, H), o.addEventListener("gesturestart", _, z), o.addEventListener("gesturechange", _, z), o.addEventListener("gestureend", _, z))) : (o.addEventListener(h.touchEvents.start, (function (e) {
          j(e), B(e)
        }), !0), o.addEventListener(h.touchEvents.move, (function (e) {
          A(e), P(e)
        }), !1), o.addEventListener(h.touchEvents.end, (function (e) {
          I(e), $(e)
        }), !1), T.touch && T.gestures && (o.addEventListener("gesturestart", (function (e) {
          L(e), _(e)
        }), !1), o.addEventListener("gesturechange", (function (e) {
          L(e), _(e)
        }), !1), o.addEventListener("gestureend", (function (e) {
          L(e), _(e)
        }), !1))), T.touch ? (h.on("click", (function (e) {
          var t = e && e.detail && "f7Overswipe" === e.detail,
            r = l;
          return n && e.target !== n && (r = !t), v.tapHold && v.tapHoldPreventClicks && a && (r = !0), r && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()), v.tapHold && (s = setTimeout((function () {
            a = !1
          }), N.ios || N.androidChrome ? 100 : 400)), l = !1, n = null, !r
        })), h.on("touchstart", (function (o) {
          return r = !1, a = !1, l = !1, o.targetTouches.length > 1 ? (c && w(), !0) : (o.touches.length > 1 && c && w(), v.tapHold && (s && clearTimeout(s), s = setTimeout((function () {
            o && o.touches && o.touches.length > 1 || (a = !0, o.preventDefault(), l = !0, g(o.target).trigger("taphold", o), h.emit("taphold", o))
          }), v.tapHoldDelay)), n = o.target, e = o.targetTouches[0].pageX, t = o.targetTouches[0].pageY, v.activeState && ((c = b(n)) && !y(c) ? k() : c && (u = setTimeout(k, 80))), m && x(n), !0)
        })), h.on("touchmove", (function (n) {
          var a, o;
          if ("touchmove" === n.type && (a = n.targetTouches[0], o = v.touchClicksDistanceThreshold), o && a) {
            var i = a.pageX,
              c = a.pageY;
            (Math.abs(i - e) > o || Math.abs(c - t) > o) && (r = !0)
          } else r = !0;
          r && (l = !0, v.tapHold && clearTimeout(s), v.activeState && (clearTimeout(u), w()), m && S())
        })), h.on("touchend", (function (e) {
          return clearTimeout(u), clearTimeout(s), o.activeElement === e.target ? (v.activeState && w(), m && E(), !0) : (v.activeState && (k(), setTimeout(w, 0)), m && E(), !(v.tapHoldPreventClicks && a || l) || (e.cancelable && e.preventDefault(), l = !0, !1))
        })), o.addEventListener("touchcancel", (function () {
          n = null, clearTimeout(u), clearTimeout(s), v.activeState && w(), m && E()
        }), {
          passive: !0
        })) : v.activeState && (h.on("touchstart", (function (n) {
          var r = b(n.target);
          r && (r.addClass("active-state"), "which" in n && 3 === n.which && setTimeout((function () {
            g(".active-state").removeClass("active-state")
          }), 0)), m && (e = n.pageX, t = n.pageY, x(n.target, n.pageX, n.pageY))
        })), h.on("touchmove", (function () {
          v.activeStateOnMouseMove || g(".active-state").removeClass("active-state"), m && S()
        })), h.on("touchend", O), o.addEventListener("pointercancel", O, {
          passive: !0
        })), o.addEventListener("contextmenu", (function (e) {
          v.disableContextMenu && (N.ios || N.android || N.cordova) && e.preventDefault(), m && (c && w(), E())
        }))
      }
    }
  };

  function de(e, t) {
    void 0 === t && (t = {});
    for (var n = function (e) {
        for (var t = [], n = 0; n < e.length;) {
          var r = e[n];
          if ("*" !== r && "+" !== r && "?" !== r)
            if ("\\" !== r)
              if ("{" !== r)
                if ("}" !== r)
                  if (":" !== r)
                    if ("(" !== r) t.push({
                      type: "CHAR",
                      index: n,
                      value: e[n++]
                    });
                    else {
                      var a = 1,
                        o = "";
                      if ("?" === e[s = n + 1]) throw new TypeError('Pattern cannot start with "?" at ' + s);
                      for (; s < e.length;)
                        if ("\\" !== e[s]) {
                          if (")" === e[s]) {
                            if (0 === --a) {
                              s++;
                              break
                            }
                          } else if ("(" === e[s] && (a++, "?" !== e[s + 1])) throw new TypeError("Capturing groups are not allowed at " + s);
                          o += e[s++]
                        } else o += e[s++] + e[s++];
                      if (a) throw new TypeError("Unbalanced pattern at " + n);
                      if (!o) throw new TypeError("Missing pattern at " + n);
                      t.push({
                        type: "PATTERN",
                        index: n,
                        value: o
                      }), n = s
                    }
          else {
            for (var i = "", s = n + 1; s < e.length;) {
              var l = e.charCodeAt(s);
              if (!(l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || 95 === l)) break;
              i += e[s++]
            }
            if (!i) throw new TypeError("Missing parameter name at " + n);
            t.push({
              type: "NAME",
              index: n,
              value: i
            }), n = s
          } else t.push({
            type: "CLOSE",
            index: n,
            value: e[n++]
          });
          else t.push({
            type: "OPEN",
            index: n,
            value: e[n++]
          });
          else t.push({
            type: "ESCAPED_CHAR",
            index: n++,
            value: e[n++]
          });
          else t.push({
            type: "MODIFIER",
            index: n,
            value: e[n++]
          })
        }
        return t.push({
          type: "END",
          index: n,
          value: ""
        }), t
      }(e), r = t.prefixes, a = void 0 === r ? "./" : r, o = "[^" + he(t.delimiter || "/#?") + "]+?", i = [], s = 0, l = 0, c = "", u = function (e) {
        if (l < n.length && n[l].type === e) return n[l++].value
      }, p = function (e) {
        var t = u(e);
        if (void 0 !== t) return t;
        var r = n[l],
          a = r.type,
          o = r.index;
        throw new TypeError("Unexpected " + a + " at " + o + ", expected " + e)
      }, d = function () {
        for (var e, t = ""; e = u("CHAR") || u("ESCAPED_CHAR");) t += e;
        return t
      }; l < n.length;) {
      var f = u("CHAR"),
        h = u("NAME"),
        v = u("PATTERN");
      if (h || v) {
        var g = f || ""; - 1 === a.indexOf(g) && (c += g, g = ""), c && (i.push(c), c = ""), i.push({
          name: h || s++,
          prefix: g,
          suffix: "",
          pattern: v || o,
          modifier: u("MODIFIER") || ""
        })
      } else {
        var m = f || u("ESCAPED_CHAR");
        if (m) c += m;
        else if (c && (i.push(c), c = ""), u("OPEN")) {
          g = d();
          var b = u("NAME") || "",
            y = u("PATTERN") || "",
            k = d();
          p("CLOSE"), i.push({
            name: b || (y ? s++ : ""),
            pattern: b && !y ? o : y,
            prefix: g,
            suffix: k,
            modifier: u("MODIFIER") || ""
          })
        } else p("END")
      }
    }
    return i
  }

  function fe(e, t) {
    return function (e, t) {
      void 0 === t && (t = {});
      var n = ve(t),
        r = t.encode,
        a = void 0 === r ? function (e) {
          return e
        } : r,
        o = t.validate,
        i = void 0 === o || o,
        s = e.map((function (e) {
          if ("object" == typeof e) return new RegExp("^(?:" + e.pattern + ")$", n)
        }));
      return function (t) {
        for (var n = "", r = 0; r < e.length; r++) {
          var o = e[r];
          if ("string" != typeof o) {
            var l = t ? t[o.name] : void 0,
              c = "?" === o.modifier || "*" === o.modifier,
              u = "*" === o.modifier || "+" === o.modifier;
            if (Array.isArray(l)) {
              if (!u) throw new TypeError('Expected "' + o.name + '" to not repeat, but got an array');
              if (0 === l.length) {
                if (c) continue;
                throw new TypeError('Expected "' + o.name + '" to not be empty')
              }
              for (var p = 0; p < l.length; p++) {
                var d = a(l[p], o);
                if (i && !s[r].test(d)) throw new TypeError('Expected all "' + o.name + '" to match "' + o.pattern + '", but got "' + d + '"');
                n += o.prefix + d + o.suffix
              }
            } else if ("string" != typeof l && "number" != typeof l) {
              if (!c) {
                var f = u ? "an array" : "a string";
                throw new TypeError('Expected "' + o.name + '" to be ' + f)
              }
            } else {
              d = a(String(l), o);
              if (i && !s[r].test(d)) throw new TypeError('Expected "' + o.name + '" to match "' + o.pattern + '", but got "' + d + '"');
              n += o.prefix + d + o.suffix
            }
          } else n += o
        }
        return n
      }
    }(de(e, t), t)
  }

  function he(e) {
    return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
  }

  function ve(e) {
    return e && e.sensitive ? "" : "i"
  }

  function ge(e, t, n) {
    return function (e, t, n) {
      void 0 === n && (n = {});
      for (var r = n.strict, a = void 0 !== r && r, o = n.start, i = void 0 === o || o, s = n.end, l = void 0 === s || s, c = n.encode, u = void 0 === c ? function (e) {
          return e
        } : c, p = "[" + he(n.endsWith || "") + "]|$", d = "[" + he(n.delimiter || "/#?") + "]", f = i ? "^" : "", h = 0, v = e; h < v.length; h++) {
        var g = v[h];
        if ("string" == typeof g) f += he(u(g));
        else {
          var m = he(u(g.prefix)),
            b = he(u(g.suffix));
          if (g.pattern)
            if (t && t.push(g), m || b)
              if ("+" === g.modifier || "*" === g.modifier) {
                var y = "*" === g.modifier ? "?" : "";
                f += "(?:" + m + "((?:" + g.pattern + ")(?:" + b + m + "(?:" + g.pattern + "))*)" + b + ")" + y
              } else f += "(?:" + m + "(" + g.pattern + ")" + b + ")" + g.modifier;
          else f += "(" + g.pattern + ")" + g.modifier;
          else f += "(?:" + m + b + ")" + g.modifier
        }
      }
      if (l) a || (f += d + "?"), f += n.endsWith ? "(?=" + p + ")" : "$";
      else {
        var k = e[e.length - 1],
          w = "string" == typeof k ? d.indexOf(k[k.length - 1]) > -1 : void 0 === k;
        a || (f += "(?:" + d + "(?=" + p + "))?"), w || (f += "(?=" + d + "|" + p + ")")
      }
      return new RegExp(f, ve(n))
    }(de(e, n), t, n)
  }

  function me(e, t, n) {
    return e instanceof RegExp ? function (e, t) {
      if (!t) return e;
      var n = e.source.match(/\((?!\?)/g);
      if (n)
        for (var r = 0; r < n.length; r++) t.push({
          name: r,
          prefix: "",
          suffix: "",
          modifier: "",
          pattern: ""
        });
      return e
    }(e, t) : Array.isArray(e) ? function (e, t, n) {
      var r = e.map((function (e) {
        return me(e, t, n).source
      }));
      return new RegExp("(?:" + r.join("|") + ")", ve(n))
    }(e, t, n) : ge(e, t, n)
  }

  function be(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var ye = {
      queue: [],
      clearQueue: function () {
        0 !== ye.queue.length && ye.queue.shift()()
      },
      routerQueue: [],
      clearRouterQueue: function () {
        if (0 !== ye.routerQueue.length) {
          var e = ye.routerQueue.pop(),
            t = e.router,
            n = e.stateUrl,
            r = e.action,
            a = t.params.animate;
          !1 === t.params.pushStateAnimate && (a = !1), "back" === r && t.back({
            animate: a,
            pushState: !1
          }), "load" === r && t.navigate(n, {
            animate: a,
            pushState: !1
          })
        }
      },
      handle: function (e) {
        if (!ye.blockPopstate) {
          var t = e.state;
          ye.previousState = ye.state, ye.state = t, ye.allowChange = !0, ye.clearQueue(), (t = ye.state) || (t = {}), this.views.forEach((function (e) {
            var n = e.router,
              r = t[e.id];
            if (!r && e.params.pushState && (r = {
                url: e.router.history[0]
              }), r) {
              var a = r.url || void 0,
                o = n.params.animate;
              !1 === n.params.pushStateAnimate && (o = !1), a !== n.url && (n.history.indexOf(a) >= 0 ? n.allowPageChange ? n.back({
                animate: o,
                pushState: !1
              }) : ye.routerQueue.push({
                action: "back",
                router: n
              }) : n.allowPageChange ? n.navigate(a, {
                animate: o,
                pushState: !1
              }) : ye.routerQueue.unshift({
                action: "load",
                stateUrl: a,
                router: n
              }))
            }
          }))
        }
      },
      initViewState: function (e, t) {
        var n = E.extend({}, ye.state || {}, be({}, e, t));
        ye.state = n, i.history.replaceState(n, "")
      },
      push: function (e, t, n) {
        if (ye.allowChange) {
          ye.previousState = ye.state;
          var r = E.extend({}, ye.previousState || {}, be({}, e, t));
          ye.state = r, i.history.pushState(r, "", n)
        } else ye.queue.push((function () {
          ye.push(e, t, n)
        }))
      },
      replace: function (e, t, n) {
        if (ye.allowChange) {
          ye.previousState = ye.state;
          var r = E.extend({}, ye.previousState || {}, be({}, e, t));
          ye.state = r, i.history.replaceState(r, "", n)
        } else ye.queue.push((function () {
          ye.replace(e, t, n)
        }))
      },
      go: function (e) {
        ye.allowChange = !1, i.history.go(e)
      },
      back: function () {
        ye.allowChange = !1, i.history.back()
      },
      allowChange: !0,
      previousState: {},
      state: i.history.state,
      blockPopstate: !0,
      init: function (e) {
        g(i).on("load", (function () {
          setTimeout((function () {
            ye.blockPopstate = !1
          }), 0)
        })), o.readyState && "complete" === o.readyState && (ye.blockPopstate = !1), g(i).on("popstate", ye.handle.bind(e))
      }
    },
    ke = ye;
  var we = function (e) {
      var t, n, r, a, o, i, s, l, c, u = e,
        p = u.$el,
        d = u.$navbarsEl,
        f = u.app,
        h = u.params,
        v = !1,
        m = !1,
        b = {},
        y = [],
        k = [],
        w = !0,
        C = [],
        M = [],
        x = h["".concat(f.theme, "SwipeBackAnimateShadow")],
        S = h["".concat(f.theme, "SwipeBackAnimateOpacity")],
        O = h["".concat(f.theme, "SwipeBackActiveArea")],
        D = h["".concat(f.theme, "SwipeBackThreshold")],
        j = f.rtl ? "right center" : "left center",
        A = f.rtl ? "calc(100% - var(--f7-navbar-large-title-padding-left) - var(--f7-safe-area-left)) center" : "calc(var(--f7-navbar-large-title-padding-left) + var(--f7-safe-area-left)) center";

      function I() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.progress, n = e.reset, r = e.transition, a = ["overflow", "transform", "transform-origin", "opacity"], o = 0; o < l.length; o += 1) {
          var i = l[o];
          if (i && i.el) {
            !0 === r && i.el.classList.add("navbar-page-transitioning"), !1 === r && i.el.classList.remove("navbar-page-transitioning"), !i.className || i.classNameSet || n || (i.el.classList.add(i.className), i.classNameSet = !0), i.className && n && i.el.classList.remove(i.className);
            for (var s = 0; s < a.length; s += 1) {
              var c = a[s];
              i[c] && (n ? i.el.style[c] = "" : "function" == typeof i[c] ? i.el.style[c] = i[c](t) : i.el.style[c] = i[c])
            }
          }
        }
      }

      function B(e) {
        var n = h["".concat(f.theme, "SwipeBack")];
        !w || !n || v || f.swipeout && f.swipeout.el || !u.allowPageChange || g(e.target).closest(".range-slider, .calendar-months").length > 0 || g(e.target).closest(".page-master, .page-master-detail").length > 0 && h.masterDetailBreakpoint > 0 && f.width >= h.masterDetailBreakpoint || (m = !1, v = !0, t = void 0, b.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, b.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, a = E.now(), o = u.dynamicNavbar)
      }

      function P(e) {
        if (v) {
          var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
            c = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
          if (void 0 === t && (t = !!(t || Math.abs(c - b.y) > Math.abs(a - b.x)) || a < b.x && !f.rtl || a > b.x && f.rtl), t || e.f7PreventSwipeBack || f.preventSwipeBack) v = !1;
          else {
            if (!m) {
              var w = !1,
                E = g(e.target),
                T = E.closest(".swipeout");
              T.length > 0 && (!f.rtl && T.find(".swipeout-actions-left").length > 0 && (w = !0), f.rtl && T.find(".swipeout-actions-right").length > 0 && (w = !0)), ((y = E.closest(".page")).hasClass("no-swipeback") || E.closest(".no-swipeback, .card-opened").length > 0) && (w = !0), (k = p.find(".page-previous:not(.stacked)")).length > 1 && (k = k.eq(k.length - 1));
              b.x, p.offset().left;
              if (n = p.width(), (f.rtl ? b.x < p.offset().left - p[0].scrollLeft + (n - O) : b.x - p.offset().left > O) && (w = !0), 0 !== k.length && 0 !== y.length || (w = !0), w) return void(v = !1);
              x && 0 === (i = y.find(".page-shadow-effect")).length && (i = g('<div class="page-shadow-effect"></div>'), y.append(i)), S && 0 === (s = k.find(".page-opacity-effect")).length && (s = g('<div class="page-opacity-effect"></div>'), k.append(s)), o && (C = d.find(".navbar-current:not(.stacked)"), (M = d.find(".navbar-previous:not(.stacked)")).length > 1 && (M = M.eq(M.length - 1)), l = function () {
                var e, t, n = [],
                  r = f.rtl ? -1 : 1,
                  a = C.hasClass("navbar-transparent") && !C.hasClass("navbar-large") && !C.hasClass("navbar-transparent-visible"),
                  o = C.hasClass("navbar-large"),
                  i = C.hasClass("navbar-large-collapsed"),
                  s = C.hasClass("navbar-large-transparent") || C.hasClass("navbar-large") && C.hasClass("navbar-transparent"),
                  l = M.hasClass("navbar-transparent") && !M.hasClass("navbar-large") && !M.hasClass("navbar-transparent-visible"),
                  c = M.hasClass("navbar-large"),
                  u = M.hasClass("navbar-large-collapsed"),
                  p = M.hasClass("navbar-large-transparent") || M.hasClass("navbar-large") && M.hasClass("navbar-transparent"),
                  d = o && !i,
                  v = c && !u,
                  m = C.find(".left, .title, .right, .subnavbar, .fading, .title-large, .navbar-bg"),
                  b = M.find(".left, .title, .right, .subnavbar, .fading, .title-large, .navbar-bg");
                return h.iosAnimateNavbarBackIcon && (e = C.hasClass("sliding") || C.find(".navbar-inner.sliding").length ? C.find(".left").find(".back .icon + span").eq(0) : C.find(".left.sliding").find(".back .icon + span").eq(0), t = M.hasClass("sliding") || M.find(".navbar-inner.sliding").length ? M.find(".left").find(".back .icon + span").eq(0) : M.find(".left.sliding").find(".back .icon + span").eq(0), e.length && b.each((function (t, n) {
                  g(n).hasClass("title") && (n.f7NavbarLeftOffset += e.prev(".icon")[0].offsetWidth)
                }))), m.each((function (t, l) {
                  var c = g(l),
                    u = c.hasClass("subnavbar"),
                    p = c.hasClass("left"),
                    f = c.hasClass("title"),
                    m = c.hasClass("navbar-bg");
                  if ((!f && !m || !a) && (d || !c.hasClass(".title-large"))) {
                    var b = {
                      el: l
                    };
                    if (d) {
                      if (f) return;
                      if (c.hasClass("title-large")) return n.indexOf(b) < 0 && n.push(b), b.overflow = "visible", void c.find(".title-large-text").each((function (e, t) {
                        n.push({
                          el: t,
                          transform: function (e) {
                            return "translateX(".concat(100 * e * r, "%)")
                          }
                        })
                      }))
                    }
                    if (v && (d || c.hasClass("title-large") && (n.indexOf(b) < 0 && n.push(b), b.opacity = 0), p)) return n.indexOf(b) < 0 && n.push(b), b.opacity = function (e) {
                      return 1 - Math.pow(e, .33)
                    }, void c.find(".back span").each((function (e, t) {
                      n.push({
                        el: t,
                        "transform-origin": j,
                        transform: function (e) {
                          return "translateX(calc(".concat(e, " * (var(--f7-navbarTitleLargeOffset) - var(--f7-navbarLeftTextOffset)))) translateY(calc(").concat(e, " * (var(--f7-navbar-large-title-height) - var(--f7-navbar-large-title-padding-vertical) / 2))) scale(").concat(1 + 1 * e, ")")
                        }
                      })
                    }));
                    if (m) return n.indexOf(b) < 0 && n.push(b), d || v || (i ? (s && (b.className = "ios-swipeback-navbar-bg-large"), b.transform = function (e) {
                      return "translateX(".concat(100 * e * r, "%) translateY(calc(-1 * var(--f7-navbar-large-title-height)))")
                    }) : b.transform = function (e) {
                      return "translateX(".concat(100 * e * r, "%)")
                    }), !d && v && (b.className = "ios-swipeback-navbar-bg-large", b.transform = function (e) {
                      return "translateX(".concat(100 * e * r, "%) translateY(calc(-1 * ").concat(1 - e, " * var(--f7-navbar-large-title-height)))")
                    }), d && v && (b.transform = function (e) {
                      return "translateX(".concat(100 * e * r, "%)")
                    }), void(d && !v && (b.transform = function (e) {
                      return "translateX(".concat(100 * e * r, "%) translateY(calc(-").concat(e, " * var(--f7-navbar-large-title-height)))")
                    }));
                    if (!c.hasClass("title-large")) {
                      var y = c.hasClass("sliding") || c.parents(".navbar-inner.sliding").length;
                      if (n.indexOf(b) < 0 && n.push(b), (!u || u && !y) && (b.opacity = function (e) {
                          return 1 - Math.pow(e, .33)
                        }), y) {
                        var k = b;
                        if (p && e.length && h.iosAnimateNavbarBackIcon) {
                          var w = {
                            el: e[0]
                          };
                          k = w, n.push(w)
                        }
                        k.transform = function (e) {
                          var t = e * k.el.f7NavbarRightOffset;
                          return 1 === N.pixelRatio && (t = Math.round(t)), "translate3d(".concat(t, u && o ? "px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)" : "px,0,0)")
                        }
                      }
                    }
                  }
                })), b.each((function (e, a) {
                  var o = g(a),
                    i = o.hasClass("subnavbar"),
                    s = o.hasClass("left"),
                    f = o.hasClass("title"),
                    m = o.hasClass("navbar-bg");
                  if (!f && !m || !l) {
                    var b = {
                      el: a
                    };
                    if (v) {
                      if (f) return;
                      if (n.indexOf(b) < 0 && n.push(b), o.hasClass("title-large")) return b.opacity = 1, b.overflow = "visible", void o.find(".title-large-text").each((function (e, t) {
                        n.push({
                          el: t,
                          "transform-origin": A,
                          opacity: function (e) {
                            return Math.pow(e, 3)
                          },
                          transform: function (e) {
                            return "translateX(calc(".concat(1 - e, " * (var(--f7-navbarLeftTextOffset) - var(--f7-navbarTitleLargeOffset)))) translateY(calc(").concat(e - 1, " * var(--f7-navbar-large-title-height) + ").concat(1 - e, " * var(--f7-navbar-large-title-padding-vertical))) scale(").concat(.5 + .5 * e, ")")
                          }
                        })
                      }))
                    }
                    if (m) return n.indexOf(b) < 0 && n.push(b), d || v || (u ? (p && (b.className = "ios-swipeback-navbar-bg-large"), b.transform = function (e) {
                      return "translateX(".concat((100 * e - 100) * r, "%) translateY(calc(-1 * var(--f7-navbar-large-title-height)))")
                    }) : b.transform = function (e) {
                      return "translateX(".concat((100 * e - 100) * r, "%)")
                    }), !d && v && (b.transform = function (e) {
                      return "translateX(".concat((100 * e - 100) * r, "%) translateY(calc(-1 * ").concat(1 - e, " * var(--f7-navbar-large-title-height)))")
                    }), d && !v && (b.className = "ios-swipeback-navbar-bg-large", b.transform = function (e) {
                      return "translateX(".concat((100 * e - 100) * r, "%) translateY(calc(-").concat(e, " * var(--f7-navbar-large-title-height)))")
                    }), void(d && v && (b.transform = function (e) {
                      return "translateX(".concat((100 * e - 100) * r, "%)")
                    }));
                    if (!o.hasClass("title-large")) {
                      var y = o.hasClass("sliding") || M.children(".navbar-inner.sliding").length;
                      if (n.indexOf(b) < 0 && n.push(b), (!i || i && !y) && (b.opacity = function (e) {
                          return Math.pow(e, 3)
                        }), y) {
                        var k = b;
                        if (s && t.length && h.iosAnimateNavbarBackIcon) {
                          var w = {
                            el: t[0]
                          };
                          k = w, n.push(w)
                        }
                        k.transform = function (e) {
                          var t = k.el.f7NavbarLeftOffset * (1 - e);
                          return 1 === N.pixelRatio && (t = Math.round(t)), "translate3d(".concat(t, i && c ? "px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)" : "px,0,0)")
                        }
                      }
                    }
                  }
                })), n
              }()), g(".sheet.modal-in").length > 0 && f.sheet && f.sheet.close(g(".sheet.modal-in"))
            }
            e.f7PreventSwipePanel = !0, m = !0, f.preventSwipePanelBySwipeBack = !0, e.preventDefault();
            var B = f.rtl ? -1 : 1;
            (r = (a - b.x - D) * B) < 0 && (r = 0);
            var P = Math.min(Math.max(r / n, 0), 1),
              $ = {
                percentage: P,
                progress: P,
                currentPageEl: y[0],
                previousPageEl: k[0],
                currentNavbarEl: C[0],
                previousNavbarEl: M[0]
              };
            p.trigger("swipeback:move", $), u.emit("swipebackMove", $);
            var L = r * B,
              _ = (r / 5 - n / 5) * B;
            f.rtl ? (L = Math.max(L, -n), _ = Math.max(_, 0)) : (L = Math.min(L, n), _ = Math.min(_, 0)), 1 === N.pixelRatio && (L = Math.round(L), _ = Math.round(_)), u.swipeBackActive = !0, g([y[0], k[0]]).addClass("page-swipeback-active"), y.transform("translate3d(".concat(L, "px,0,0)")), x && (i[0].style.opacity = 1 - 1 * P), "ios" === f.theme && k.transform("translate3d(".concat(_, "px,0,0)")), S && (s[0].style.opacity = 1 - 1 * P), o && I({
              progress: P
            })
          }
        }
      }

      function $() {
        if (f.preventSwipePanelBySwipeBack = !1, !v || !m) return v = !1, void(m = !1);
        if (v = !1, m = !1, u.swipeBackActive = !1, g([y[0], k[0]]).removeClass("page-swipeback-active"), 0 === r) return g([y[0], k[0]]).transform(""), i && i.length > 0 && i.remove(), s && s.length > 0 && s.remove(), void(o && I({
          reset: !0
        }));
        var e = E.now() - a,
          t = !1;
        (e < 300 && r > 10 || e >= 300 && r > n / 2) && (y.removeClass("page-current").addClass("page-next".concat("ios" !== f.theme ? " page-next-on-right" : "")), k.removeClass("page-previous").addClass("page-current").removeAttr("aria-hidden"), i && (i[0].style.opacity = ""), s && (s[0].style.opacity = ""), o && (u.setNavbarPosition(C, "next"), u.setNavbarPosition(M, "current", !1)), t = !0), g([y[0], k[0]]).addClass("page-transitioning page-transitioning-swipeback").transform(""), o && I({
          progress: t ? 1 : 0,
          transition: !0
        }), w = !1, u.allowPageChange = !1;
        var l = {
          currentPageEl: y[0],
          previousPageEl: k[0],
          currentNavbarEl: C[0],
          previousNavbarEl: M[0]
        };
        t ? (u.currentRoute = k[0].f7Page.route, u.currentPage = k[0], u.pageCallback("beforeOut", y, C, "current", "next", {
          route: y[0].f7Page.route,
          swipeBack: !0
        }), u.pageCallback("beforeIn", k, M, "previous", "current", {
          route: k[0].f7Page.route,
          swipeBack: !0
        }, y[0]), p.trigger("swipeback:beforechange", l), u.emit("swipebackBeforeChange", l)) : (p.trigger("swipeback:beforereset", l), u.emit("swipebackBeforeReset", l)), y.transitionEnd((function () {
          g([y[0], k[0]]).removeClass("page-transitioning page-transitioning-swipeback"), o && I({
            reset: !0,
            transition: !1
          }), w = !0, u.allowPageChange = !0, t ? (1 === u.history.length && u.history.unshift(u.url), u.history.pop(), u.saveHistory(), h.pushState && ke.back(), u.pageCallback("afterOut", y, C, "current", "next", {
            route: y[0].f7Page.route,
            swipeBack: !0
          }), u.pageCallback("afterIn", k, M, "previous", "current", {
            route: k[0].f7Page.route,
            swipeBack: !0
          }), h.stackPages && u.initialPages.indexOf(y[0]) >= 0 ? (y.addClass("stacked"), o && C.addClass("stacked")) : (u.pageCallback("beforeRemove", y, C, "next", {
            swipeBack: !0
          }), u.removePage(y), o && u.removeNavbar(C)), p.trigger("swipeback:afterchange", l), u.emit("swipebackAfterChange", l), u.emit("routeChanged", u.currentRoute, u.previousRoute, u), h.preloadPreviousPage && u.back(u.history[u.history.length - 2], {
            preload: !0
          })) : (p.trigger("swipeback:afterreset", l), u.emit("swipebackAfterReset", l)), i && i.length > 0 && i.remove(), s && s.length > 0 && s.remove()
        }))
      }
      c = !("touchstart" !== f.touchEvents.start || !T.passiveListener) && {
        passive: !0,
        capture: !1
      }, p.on(f.touchEvents.start, B, c), f.on("touchmove:active", P), f.on("touchend:passive", $), u.on("routerDestroy", (function () {
        var e = !("touchstart" !== f.touchEvents.start || !T.passiveListener) && {
          passive: !0,
          capture: !1
        };
        p.off(f.touchEvents.start, B, e), f.off("touchmove:active", P), f.off("touchend:passive", $)
      }))
    },
    Ce = function (e, t, n) {
      var r = this,
        a = t.route.redirect;
      if (n.initial && r.params.pushState && (n.replaceState = !0, n.history = !0), "function" == typeof a) {
        r.allowPageChange = !1;
        var o = a.call(r, t, (function (t) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          r.allowPageChange = !0, r[e](t, E.extend({}, n, a))
        }), (function () {
          r.allowPageChange = !0
        }));
        return o && "string" == typeof o ? (r.allowPageChange = !0, r[e](o, n)) : r
      }
      return r[e](a, n)
    };

  function Me(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function xe(e, t, n, r, a, o, i) {
    var s = [];
    Array.isArray(n) ? s.push.apply(s, Me(n)) : n && "function" == typeof n && s.push(n), t && (Array.isArray(t) ? s.push.apply(s, Me(t)) : s.push(t)),
      function t() {
        0 !== s.length ? s.shift().call(e, r, a, (function () {
          t()
        }), (function () {
          i()
        })) : o()
      }()
  }
  var Se = function (e, t, n, r) {
      var a = this;

      function o() {
        e && e.route && (a.params.routesBeforeEnter || e.route.beforeEnter) ? (a.allowPageChange = !1, xe(a, a.params.routesBeforeEnter, e.route.beforeEnter, e, t, (function () {
          a.allowPageChange = !0, n()
        }), (function () {
          r()
        }))) : n()
      }
      t && t.route && (a.params.routesBeforeLeave || t.route.beforeLeave) ? (a.allowPageChange = !1, xe(a, a.params.routesBeforeLeave, t.route.beforeLeave, e, t, (function () {
        a.allowPageChange = !0, o()
      }), (function () {
        r()
      }))) : o()
    },
    Ee = function (e, t) {
      if (!e.view) throw new Error("Framework7: it is not allowed to use router methods on global app router. Use router methods only on related View, e.g. app.views.main.router.".concat(t, "(...)"))
    },
    Te = function (e, t, n, r) {
      function a(e) {
        e.then((function (e) {
          n({
            component: e.default || e._default || e
          })
        })).catch((function (e) {
          throw r(), new Error(e)
        }))
      }
      if (t instanceof Promise) a(t);
      else {
        var o = t.call(e);
        o instanceof Promise ? a(o) : n({
          component: o
        })
      }
    };

  function Ne(e) {
    return (Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function Oe(e) {
    return (Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function De(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function je(e, t) {
    return !t || "object" !== Oe(t) && "function" != typeof t ? Ie(e) : t
  }

  function Ae(e) {
    return (Ae = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function Ie(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function Be(e, t) {
    return (Be = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var Pe = function (e) {
    function t(e, n) {
      var r;
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var a = Ie(r = je(this, Ae(t).call(this, {}, [void 0 === n ? e : n])));
      a.isAppRouter = void 0 === n, a.isAppRouter ? E.extend(!1, a, {
        app: e,
        params: e.params.view,
        routes: e.routes || [],
        cache: e.cache
      }) : E.extend(!1, a, {
        app: e,
        view: n,
        viewId: n.id,
        params: n.params,
        routes: n.routes,
        $el: n.$el,
        el: n.el,
        $navbarsEl: n.$navbarsEl,
        navbarsEl: n.navbarsEl,
        history: n.history,
        scrollHistory: n.scrollHistory,
        cache: e.cache,
        dynamicNavbar: "ios" === e.theme && n.params.iosDynamicNavbar,
        initialPages: [],
        initialNavbars: []
      }), a.useModules(), a.tempDom = o.createElement("div"), a.allowPageChange = !0;
      var i = {},
        s = {};
      return Object.defineProperty(a, "currentRoute", {
        enumerable: !0,
        configurable: !0,
        set: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          s = E.extend({}, i), (i = e) && (a.url = i.url, a.emit("routeChange", e, s, a))
        },
        get: function () {
          return i
        }
      }), Object.defineProperty(a, "previousRoute", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return s
        },
        set: function (e) {
          s = e
        }
      }), je(r, a)
    }
    var n, r, a;
    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && Be(e, t)
    }(t, e), n = t, (r = [{
      key: "animatableNavElements",
      value: function (e, t, n, r, a) {
        var o, i, s = this.dynamicNavbar,
          l = this.params.iosAnimateNavbarBackIcon;

        function c(e, t) {
          var n, r = e.hasClass("sliding") || t.hasClass("sliding"),
            a = e.hasClass("subnavbar"),
            o = !r || !a,
            i = e.find(".back .icon");
          return r && l && e.hasClass("left") && i.length > 0 && i.next("span").length && (e = i.next("span"), n = !0), {
            $el: e,
            isIconLabel: n,
            leftOffset: e[0].f7NavbarLeftOffset,
            rightOffset: e[0].f7NavbarRightOffset,
            isSliding: r,
            isSubnavbar: a,
            needsOpacityTransition: o
          }
        }
        return s && (o = [], i = [], e.children(".navbar-inner").children(".left, .right, .title, .subnavbar").each((function (t, i) {
          var s = g(i);
          s.hasClass("left") && r && "forward" === a || s.hasClass("title") && n || o.push(c(s, e.children(".navbar-inner")))
        })), t.hasClass("navbar-master") && this.params.masterDetailBreakpoint > 0 && this.app.width >= this.params.masterDetailBreakpoint || t.children(".navbar-inner").children(".left, .right, .title, .subnavbar").each((function (e, o) {
          var s = g(o);
          s.hasClass("left") && n && !r && "forward" === a || s.hasClass("left") && n && "backward" === a || s.hasClass("title") && r || i.push(c(s, t.children(".navbar-inner")))
        })), [i, o].forEach((function (e) {
          e.forEach((function (t) {
            var n = t,
              r = t.isSliding,
              a = t.$el,
              s = e === i ? o : i;
            r && a.hasClass("title") && s && s.forEach((function (e) {
              if (e.isIconLabel) {
                var t = e.$el[0];
                n.leftOffset += t && t.offsetLeft || 0
              }
            }))
          }))
        }))), {
          newNavEls: o,
          oldNavEls: i
        }
      }
    }, {
      key: "animate",
      value: function (e, t, n, r, a, o, i) {
        var s = this;
        if (s.params.animateCustom) s.params.animateCustom.apply(s, [e, t, n, r, a, i]);
        else {
          var l = s.dynamicNavbar,
            c = "ios" === s.app.theme;
          if (o) {
            var u = "router-transition-custom router-transition-".concat(o, "-").concat(a);
            return ("forward" === a ? t : e).animationEnd((function () {
              s.$el.removeClass(u), l && s.$navbarsEl.length && (r && s.$navbarsEl.prepend(r), n && s.$navbarsEl.prepend(n)), i && i()
            })), l && (r && t && (s.setNavbarPosition(r, ""), r.removeClass("navbar-next navbar-previous navbar-current"), t.prepend(r)), n && e && (s.setNavbarPosition(n, ""), n.removeClass("navbar-next navbar-previous navbar-current"), e.prepend(n))), void s.$el.addClass(u)
          }
          var p, d, f, h, v, g, m = "router-transition-".concat(a, " router-transition");
          if (c && l) {
            s.params.masterDetailBreakpoint > 0 && s.app.width >= s.params.masterDetailBreakpoint && (n.hasClass("navbar-master") && r.hasClass("navbar-master-detail") || n.hasClass("navbar-master-detail") && r.hasClass("navbar-master")) || (v = n && n.hasClass("navbar-large"), g = r && r.hasClass("navbar-large"), f = v && !n.hasClass("navbar-large-collapsed"), h = g && !r.hasClass("navbar-large-collapsed"));
            var b = s.animatableNavElements(r, n, h, f, a);
            p = b.newNavEls, d = b.oldNavEls
          }("forward" === a ? t : e).animationEnd((function () {
            s.dynamicNavbar && (r && (r.removeClass("router-navbar-transition-to-large router-navbar-transition-from-large"), r.addClass("navbar-no-title-large-transition"), E.nextFrame((function () {
              r.removeClass("navbar-no-title-large-transition")
            }))), n && n.removeClass("router-navbar-transition-to-large router-navbar-transition-from-large"), r.hasClass("sliding") ? r.find(".title, .left, .right, .left .icon, .subnavbar").transform("") : r.find(".sliding").transform(""), n.hasClass("sliding") ? n.find(".title, .left, .right, .left .icon, .subnavbar").transform("") : n.find(".sliding").transform("")), s.$el.removeClass(m), i && i()
          })), l ? (y(0), E.nextFrame((function () {
            y(1), s.$el.addClass(m)
          }))) : s.$el.addClass(m)
        }

        function y(e) {
          c && l && (1 === e && (h && (r.addClass("router-navbar-transition-to-large"), n.addClass("router-navbar-transition-to-large")), f && (r.addClass("router-navbar-transition-from-large"), n.addClass("router-navbar-transition-from-large"))), p.forEach((function (t) {
            var n = t.$el,
              r = "forward" === a ? t.rightOffset : t.leftOffset;
            t.isSliding && (t.isSubnavbar && g ? n[0].style.setProperty("transform", "translate3d(".concat(r * (1 - e), "px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)"), "important") : n.transform("translate3d(".concat(r * (1 - e), "px,0,0)")))
          })), d.forEach((function (t) {
            var n = t.$el,
              r = "forward" === a ? t.leftOffset : t.rightOffset;
            t.isSliding && (t.isSubnavbar && v ? n.transform("translate3d(".concat(r * e, "px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)")) : n.transform("translate3d(".concat(r * e, "px,0,0)")))
          })))
        }
      }
    }, {
      key: "removeModal",
      value: function (e) {
        this.removeEl(e)
      }
    }, {
      key: "removeTabContent",
      value: function (e) {
        g(e).html("")
      }
    }, {
      key: "removeNavbar",
      value: function (e) {
        this.removeEl(e)
      }
    }, {
      key: "removePage",
      value: function (e) {
        var t = g(e),
          n = t && t[0] && t[0].f7Page;
        n && n.route && n.route.route && n.route.route.keepAlive ? t.remove() : this.removeEl(e)
      }
    }, {
      key: "removeEl",
      value: function (e) {
        if (e) {
          var t = g(e);
          0 !== t.length && (t.find(".tab").each((function (e, t) {
            g(t).children().each((function (e, t) {
              t.f7Component && (g(t).trigger("tab:beforeremove"), t.f7Component.$destroy())
            }))
          })), t[0].f7Component && t[0].f7Component.$destroy && t[0].f7Component.$destroy(), this.params.removeElements && (this.params.removeElementsWithTimeout ? setTimeout((function () {
            t.remove()
          }), this.params.removeElementsTimeout) : t.remove()))
        }
      }
    }, {
      key: "getPageEl",
      value: function (e) {
        if ("string" == typeof e) this.tempDom.innerHTML = e;
        else {
          if (g(e).hasClass("page")) return e;
          this.tempDom.innerHTML = "", g(this.tempDom).append(e)
        }
        return this.findElement(".page", this.tempDom)
      }
    }, {
      key: "findElement",
      value: function (e, t, n) {
        var r = this.view,
          a = this.app,
          o = g(t),
          i = e;
        n && (i += ":not(.stacked)");
        var s = o.find(i).filter((function (e, t) {
          return 0 === g(t).parents(".popup, .dialog, .popover, .actions-modal, .sheet-modal, .login-screen, .page").length
        }));
        return s.length > 1 && ("string" == typeof r.selector && (s = o.find("".concat(r.selector, " ").concat(i))), s.length > 1 && (s = o.find(".".concat(a.params.viewMainClass, " ").concat(i)))), 1 === s.length ? s : (n || (s = this.findElement(i, o, !0)), s && 1 === s.length ? s : s && s.length > 1 ? g(s[0]) : void 0)
      }
    }, {
      key: "flattenRoutes",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.routes,
          t = this,
          n = [];
        return e.forEach((function (e) {
          var r = !1;
          if ("tabs" in e && e.tabs) {
            var a = e.tabs.map((function (t) {
              var n = E.extend({}, e, {
                path: "".concat(e.path, "/").concat(t.path).replace("///", "/").replace("//", "/"),
                parentPath: e.path,
                tab: t
              });
              return delete n.tabs, delete n.routes, n
            }));
            r = !0, n = n.concat(t.flattenRoutes(a))
          }
          if ("detailRoutes" in e) {
            var o = e.detailRoutes.map((function (t) {
              var n = E.extend({}, t);
              return n.masterRoute = e, n.masterRoutePath = e.path, n
            }));
            n = n.concat(e, t.flattenRoutes(o))
          }
          if ("routes" in e) {
            var i = e.routes.map((function (t) {
              var n = E.extend({}, t);
              return n.path = "".concat(e.path, "/").concat(n.path).replace("///", "/").replace("//", "/"), n
            }));
            n = r ? n.concat(t.flattenRoutes(i)) : n.concat(e, t.flattenRoutes(i))
          }
          "routes" in e || "tabs" in e && e.tabs || "detailRoutes" in e || n.push(e)
        })), n
      }
    }, {
      key: "parseRouteUrl",
      value: function (e) {
        if (!e) return {};
        var t = E.parseUrlQuery(e),
          n = e.split("#")[1],
          r = e.split("#")[0].split("?")[0];
        return {
          query: t,
          hash: n,
          params: {},
          url: e,
          path: r
        }
      }
    }, {
      key: "generateUrl",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("string" == typeof e) return e;
        var t = e.name,
          n = e.params,
          r = e.query;
        if (!t) throw new Error("Framework7: name parameter is required");
        var a = this,
          o = a.findRouteByKey("name", t);
        if (!o) throw new Error('Framework7: route with name "'.concat(t, '" not found'));
        var i = a.constructRouteUrl(o, {
          params: n,
          query: r
        });
        if (!i) throw new Error("Framework7: can't construct URL for route with name \"".concat(t, '"'));
        return i
      }
    }, {
      key: "constructRouteUrl",
      value: function (e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = n.params,
          a = n.query,
          o = e.path,
          i = fe(o);
        try {
          t = i(r || {})
        } catch (e) {
          throw new Error("Framework7: error constructing route URL from passed params:\nRoute: ".concat(o, "\n").concat(e.toString()))
        }
        return a && (t += "?".concat("string" == typeof a ? a : E.serializeObject(a))), t
      }
    }, {
      key: "findTabRoute",
      value: function (e) {
        var t, n = g(e),
          r = this.currentRoute.route.parentPath,
          a = n.attr("id");
        return this.flattenRoutes(this.routes).forEach((function (e) {
          e.parentPath === r && e.tab && e.tab.id === a && (t = e)
        })), t
      }
    }, {
      key: "findRouteByKey",
      value: function (e, t) {
        var n, r = this.routes;
        return this.flattenRoutes(r).forEach((function (r) {
          n || r[e] === t && (n = r)
        })), n
      }
    }, {
      key: "findMatchingRoute",
      value: function (e) {
        if (e) {
          var t, n = this.routes,
            r = this.flattenRoutes(n),
            a = this.parseRouteUrl(e),
            o = a.path,
            i = a.query,
            s = a.hash,
            l = a.params;
          return r.forEach((function (n) {
            if (!t) {
              var r, a, c = [],
                u = [n.path];
              n.alias && ("string" == typeof n.alias ? u.push(n.alias) : Array.isArray(n.alias) && n.alias.forEach((function (e) {
                u.push(e)
              }))), u.forEach((function (e) {
                r || (r = me(e, c).exec(o))
              })), r && (c.forEach((function (e, t) {
                if ("number" != typeof e.name) {
                  var n = r[t + 1];
                  l[e.name] = null == n ? n : decodeURIComponent(n)
                }
              })), n.parentPath && (a = o.split("/").slice(0, n.parentPath.split("/").length - 1).join("/")), t = {
                query: i,
                hash: s,
                params: l,
                url: e,
                path: o,
                parentPath: a,
                route: n,
                name: n.name
              })
            }
          })), t
        }
      }
    }, {
      key: "replaceRequestUrlParams",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e;
        return "string" == typeof n && n.indexOf("{{") >= 0 && t && t.route && t.route.params && Object.keys(t.route.params).length && Object.keys(t.route.params).forEach((function (e) {
          var r = new RegExp("{{".concat(e, "}}"), "g");
          n = n.replace(r, t.route.params[e] || "")
        })), n
      }
    }, {
      key: "removeFromXhrCache",
      value: function (e) {
        for (var t = this.cache.xhr, n = !1, r = 0; r < t.length; r += 1) t[r].url === e && (n = r);
        !1 !== n && t.splice(n, 1)
      }
    }, {
      key: "xhrRequest",
      value: function (e, t) {
        var n = this,
          r = n.params,
          a = t.ignoreCache,
          o = e,
          i = o.indexOf("?") >= 0;
        return r.passRouteQueryToRequest && t && t.route && t.route.query && Object.keys(t.route.query).length && (o += "".concat(i ? "&" : "?").concat(E.serializeObject(t.route.query)), i = !0), r.passRouteParamsToRequest && t && t.route && t.route.params && Object.keys(t.route.params).length && (o += "".concat(i ? "&" : "?").concat(E.serializeObject(t.route.params)), i = !0), o.indexOf("{{") >= 0 && (o = n.replaceRequestUrlParams(o, t)), r.xhrCacheIgnoreGetParameters && o.indexOf("?") >= 0 && (o = o.split("?")[0]), new Promise((function (e, i) {
          if (r.xhrCache && !a && o.indexOf("nocache") < 0 && r.xhrCacheIgnore.indexOf(o) < 0)
            for (var s = 0; s < n.cache.xhr.length; s += 1) {
              var l = n.cache.xhr[s];
              if (l.url === o && E.now() - l.time < r.xhrCacheDuration) return void e(l.content)
            }
          n.xhr = n.app.request({
            url: o,
            method: "GET",
            beforeSend: function (e) {
              n.emit("routerAjaxStart", e, t)
            },
            complete: function (a, s) {
              n.emit("routerAjaxComplete", a), "error" !== s && "timeout" !== s && a.status >= 200 && a.status < 300 || 0 === a.status ? (r.xhrCache && "" !== a.responseText && (n.removeFromXhrCache(o), n.cache.xhr.push({
                url: o,
                time: E.now(),
                content: a.responseText
              })), n.emit("routerAjaxSuccess", a, t), e(a.responseText)) : (n.emit("routerAjaxError", a, t), i(a))
            },
            error: function (e) {
              n.emit("routerAjaxError", e, t), i(e)
            }
          })
        }))
      }
    }, {
      key: "setNavbarPosition",
      value: function (e, t, n) {
        e.removeClass("navbar-previous navbar-current navbar-next"), t && e.addClass("navbar-".concat(t)), !1 === n ? e.removeAttr("aria-hidden") : !0 === n && e.attr("aria-hidden", "true"), e.trigger("navbar:position", {
          position: t
        }), this.emit("navbarPosition", e[0], t)
      }
    }, {
      key: "setPagePosition",
      value: function (e, t, n) {
        e.removeClass("page-previous page-current page-next"), e.addClass("page-".concat(t)), !1 === n ? e.removeAttr("aria-hidden") : !0 === n && e.attr("aria-hidden", "true"), e.trigger("page:position", {
          position: t
        }), this.emit("pagePosition", e[0], t)
      }
    }, {
      key: "removeThemeElements",
      value: function (e) {
        var t, n = this.app.theme;
        "ios" === n ? t = ".md-only, .aurora-only, .if-md, .if-aurora, .if-not-ios, .not-ios" : "md" === n ? t = ".ios-only, .aurora-only, .if-ios, .if-aurora, .if-not-md, .not-md" : "aurora" === n && (t = ".ios-only, .md-only, .if-ios, .if-md, .if-not-aurora, .not-aurora"), g(e).find(t).remove()
      }
    }, {
      key: "getPageData",
      value: function (e, t, n, r) {
        var a, o, i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          s = arguments.length > 5 ? arguments[5] : void 0,
          l = this,
          c = g(e).eq(0),
          u = g(t).eq(0),
          p = c[0].f7Page || {};
        if (("next" === n && "current" === r || "current" === n && "previous" === r) && (a = "forward"), ("current" === n && "next" === r || "previous" === n && "current" === r) && (a = "backward"), p && !p.fromPage) {
          var d = g(s);
          d.length && (o = d[0].f7Page)
        }(o = p.pageFrom || o) && o.pageFrom && (o.pageFrom = null);
        var f = {
          app: l.app,
          view: l.view,
          router: l,
          $el: c,
          el: c[0],
          $pageEl: c,
          pageEl: c[0],
          $navbarEl: u,
          navbarEl: u[0],
          name: c.attr("data-name"),
          position: n,
          from: n,
          to: r,
          direction: a,
          route: p.route ? p.route : i,
          pageFrom: o
        };
        return c[0].f7Page = f, f
      }
    }, {
      key: "pageCallback",
      value: function (e, t, n, r, a) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          i = arguments.length > 6 ? arguments[6] : void 0;
        if (t) {
          var s = this,
            l = g(t);
          if (l.length) {
            var c = g(n),
              u = o.route,
              p = s.params.restoreScrollTopOnBack && !(s.params.masterDetailBreakpoint > 0 && l.hasClass("page-master") && s.app.width >= s.params.masterDetailBreakpoint),
              d = l[0].f7Page && l[0].f7Page.route && l[0].f7Page.route.route && l[0].f7Page.route.route.keepAlive;
            "beforeRemove" === e && d && (e = "beforeUnmount");
            var f = "page".concat(e[0].toUpperCase() + e.slice(1, e.length)),
              h = "page:".concat(e.toLowerCase()),
              v = {};
            (v = "beforeRemove" === e && l[0].f7Page ? E.extend(l[0].f7Page, {
              from: r,
              to: a,
              position: r
            }) : s.getPageData(l[0], c[0], r, a, u, i)).swipeBack = !!o.swipeBack;
            var m = o.route ? o.route.route : {},
              b = m.on,
              y = void 0 === b ? {} : b,
              k = m.once,
              w = void 0 === k ? {} : k;
            if (o.on && E.extend(y, o.on), o.once && E.extend(w, o.once), "mounted" === e && x(), "init" === e) {
              if (p && ("previous" === r || !r) && "current" === a && s.scrollHistory[v.route.url] && !l.hasClass("no-restore-scroll")) {
                var C = l.find(".page-content");
                C.length > 0 && (C = C.filter((function (e, t) {
                  return 0 === g(t).parents(".tab:not(.tab-active)").length && !g(t).is(".tab:not(.tab-active)")
                }))), C.scrollTop(s.scrollHistory[v.route.url])
              }
              if (x(), l[0].f7PageInitialized) return l.trigger("page:reinit", v), void s.emit("pageReinit", v);
              l[0].f7PageInitialized = !0
            }
            if (p && "beforeOut" === e && "current" === r && "previous" === a) {
              var M = l.find(".page-content");
              M.length > 0 && (M = M.filter((function (e, t) {
                return 0 === g(t).parents(".tab:not(.tab-active)").length && !g(t).is(".tab:not(.tab-active)")
              }))), s.scrollHistory[v.route.url] = M.scrollTop()
            }
            p && "beforeOut" === e && "current" === r && "next" === a && delete s.scrollHistory[v.route.url], l.trigger(h, v), s.emit(f, v), "beforeRemove" !== e && "beforeUnmount" !== e || (S(), d || (l[0].f7Page && l[0].f7Page.navbarEl && delete l[0].f7Page.navbarEl.f7Page, l[0].f7Page = null))
          }
        }

        function x() {
          l[0].f7RouteEventsAttached || (l[0].f7RouteEventsAttached = !0, y && Object.keys(y).length > 0 && (l[0].f7RouteEventsOn = y, Object.keys(y).forEach((function (e) {
            y[e] = y[e].bind(s), l.on(E.eventNameToColonCase(e), y[e])
          }))), w && Object.keys(w).length > 0 && (l[0].f7RouteEventsOnce = w, Object.keys(w).forEach((function (e) {
            w[e] = w[e].bind(s), l.once(E.eventNameToColonCase(e), w[e])
          }))))
        }

        function S() {
          l[0].f7RouteEventsAttached && (l[0].f7RouteEventsOn && Object.keys(l[0].f7RouteEventsOn).forEach((function (e) {
            l.off(E.eventNameToColonCase(e), l[0].f7RouteEventsOn[e])
          })), l[0].f7RouteEventsOnce && Object.keys(l[0].f7RouteEventsOnce).forEach((function (e) {
            l.off(E.eventNameToColonCase(e), l[0].f7RouteEventsOnce[e])
          })), l[0].f7RouteEventsAttached = null, l[0].f7RouteEventsOn = null, l[0].f7RouteEventsOnce = null, delete l[0].f7RouteEventsAttached, delete l[0].f7RouteEventsOn, delete l[0].f7RouteEventsOnce)
        }
      }
    }, {
      key: "saveHistory",
      value: function () {
        this.view.history = this.history, this.params.pushState && (i.localStorage["f7router-".concat(this.view.id, "-history")] = JSON.stringify(this.history))
      }
    }, {
      key: "restoreHistory",
      value: function () {
        this.params.pushState && i.localStorage["f7router-".concat(this.view.id, "-history")] && (this.history = JSON.parse(i.localStorage["f7router-".concat(this.view.id, "-history")]), this.view.history = this.history)
      }
    }, {
      key: "clearHistory",
      value: function () {
        this.history = [], this.view && (this.view.history = []), this.saveHistory()
      }
    }, {
      key: "updateCurrentUrl",
      value: function (e) {
        Ee(this, "updateCurrentUrl"), this.history.length ? this.history[this.history.length - 1] = e : this.history.push(e);
        var t = this.parseRouteUrl(e),
          n = t.query,
          r = t.hash,
          a = t.params,
          o = t.url,
          i = t.path;
        if (this.currentRoute && E.extend(this.currentRoute, {
            query: n,
            hash: r,
            params: a,
            url: o,
            path: i
          }), this.params.pushState) {
          var s = this.params.pushStateRoot || "";
          ke.replace(this.view.id, {
            url: e
          }, s + this.params.pushStateSeparator + e)
        }
        this.saveHistory(), this.emit("routeUrlUpdate", this.currentRoute, this)
      }
    }, {
      key: "init",
      value: function () {
        var e = this,
          t = e.app,
          n = e.view;
        (n && e.params.iosSwipeBack && "ios" === t.theme || n && e.params.mdSwipeBack && "md" === t.theme || n && e.params.auroraSwipeBack && "aurora" === t.theme) && we(e);
        var r, a, s = e.params.url,
          l = o.location.href.split(o.location.origin)[1],
          c = e.params,
          u = c.pushState,
          p = c.pushStateOnLoad,
          d = c.pushStateSeparator,
          f = c.pushStateAnimateOnLoad,
          h = e.params.pushStateRoot;
        if (i.cordova && u && !d && !h && o.location.pathname.indexOf("index.html") && (console.warn("Framework7: wrong or not complete pushState configuration, trying to guess pushStateRoot"), h = o.location.pathname.split("index.html")[0]), u && p ? (h && l.indexOf(h) >= 0 && "" === (l = l.split(h)[1]) && (l = "/"), s = d.length > 0 && l.indexOf(d) >= 0 ? l.split(d)[1] : l, e.restoreHistory(), e.history.indexOf(s) >= 0 ? e.history = e.history.slice(0, e.history.indexOf(s) + 1) : e.params.url === s ? e.history = [s] : ke.state && ke.state[n.id] && ke.state[n.id].url === e.history[e.history.length - 1] ? s = e.history[e.history.length - 1] : e.history = [l.split(d)[0] || "/", s], e.history.length > 1 ? r = !0 : e.history = [], e.saveHistory()) : (s || (s = l), o.location.search && s.indexOf("?") < 0 && (s += o.location.search), o.location.hash && s.indexOf("#") < 0 && (s += o.location.hash)), e.history.length > 1 ? (a = e.findMatchingRoute(e.history[0])) || (a = E.extend(e.parseRouteUrl(e.history[0]), {
            route: {
              url: e.history[0],
              path: e.history[0].split("?")[0]
            }
          })) : (a = e.findMatchingRoute(s)) || (a = E.extend(e.parseRouteUrl(s), {
            route: {
              url: s,
              path: s.split("?")[0]
            }
          })), e.params.stackPages && e.$el.children(".page").each((function (t, n) {
            var r = g(n);
            e.initialPages.push(r[0]), e.dynamicNavbar && r.children(".navbar").length > 0 && e.initialNavbars.push(r.children(".navbar")[0])
          })), 0 === e.$el.children(".page:not(.stacked)").length && s && e.params.loadInitialPage) e.navigate(s, {
          initial: !0,
          reloadCurrent: !0,
          pushState: !1
        });
        else if (e.$el.children(".page:not(.stacked)").length) {
          var v;
          e.currentRoute = a, e.$el.children(".page:not(.stacked)").each((function (t, r) {
            var a, i = g(r);
            e.setPagePosition(i, "current"), e.dynamicNavbar && ((a = i.children(".navbar")).length > 0 ? (e.$navbarsEl.parents(o).length || e.$el.prepend(e.$navbarsEl), e.setNavbarPosition(a, "current"), e.$navbarsEl.append(a), a.children(".title-large").length && a.addClass("navbar-large"), i.children(".navbar").remove()) : (e.$navbarsEl.addClass("navbar-hidden"), a.children(".title-large").length && e.$navbarsEl.addClass("navbar-hidden navbar-large-hidden"))), e.currentRoute && e.currentRoute.route && e.currentRoute.route.master && e.params.masterDetailBreakpoint > 0 && (i.addClass("page-master"), i.trigger("page:role", {
              role: "master"
            }), a && a.length && a.addClass("navbar-master"), n.checkMasterDetailBreakpoint());
            var s = {
              route: e.currentRoute
            };
            e.currentRoute && e.currentRoute.route && e.currentRoute.route.options && E.extend(s, e.currentRoute.route.options), e.currentPageEl = i[0], e.dynamicNavbar && a.length && (e.currentNavbarEl = a[0]), e.removeThemeElements(i), e.dynamicNavbar && a.length && e.removeThemeElements(a), s.route.route.tab && (v = !0, e.tabLoad(s.route.route.tab, E.extend({}, s))), e.pageCallback("init", i, a, "current", void 0, s)
          })), r && e.navigate(s, {
            initial: !0,
            pushState: !1,
            history: !1,
            animate: f,
            once: {
              pageAfterIn: function () {
                (e.params.preloadPreviousPage || e.params["".concat(t.theme, "SwipeBack")]) && e.history.length > 2 && e.back({
                  preload: !0
                })
              }
            }
          }), r || v || (e.history.push(s), e.saveHistory())
        }!(s && u && p) || ke.state && ke.state[n.id] || ke.initViewState(n.id, {
          url: s
        }), e.emit("local::init routerInit", e)
      }
    }, {
      key: "destroy",
      value: function () {
        var e = this;
        e.emit("local::destroy routerDestroy", e), Object.keys(e).forEach((function (t) {
          e[t] = null, delete e[t]
        })), e = null
      }
    }]) && De(n.prototype, r), a && De(n, a), t
  }(L);
  Pe.prototype.forward = function (e) {
    var t, n, r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = this,
      s = g(e),
      l = i.app,
      c = i.view,
      u = E.extend(!1, {
        animate: i.params.animate,
        pushState: !0,
        replaceState: !1,
        history: !0,
        reloadCurrent: i.params.reloadPages,
        reloadPrevious: !1,
        reloadAll: !1,
        clearPreviousHistory: !1,
        reloadDetail: i.params.reloadDetail,
        on: {}
      }, a),
      p = i.params.masterDetailBreakpoint > 0,
      d = p && u.route && u.route.route && !0 === u.route.route.master,
      f = i.currentRoute.modal;
    if (f || "popup popover sheet loginScreen actions customModal panel".split(" ").forEach((function (e) {
        i.currentRoute && i.currentRoute.route && i.currentRoute.route[e] && (f = !0, r = e)
      })), f) {
      var h = i.currentRoute.modal || i.currentRoute.route.modalInstance || l[r].get(),
        v = i.history[i.history.length - 2],
        m = i.findMatchingRoute(v);
      !m && v && (m = {
        url: v,
        path: v.split("?")[0],
        query: E.parseUrlQuery(v),
        route: {
          path: v.split("?")[0],
          url: v
        }
      }), i.modalRemove(h)
    }
    var b, y, k, w, C = i.dynamicNavbar,
      M = i.$el,
      x = s,
      S = u.reloadPrevious || u.reloadCurrent || u.reloadAll;
    if (i.allowPageChange = !1, 0 === x.length) return i.allowPageChange = !0, i;
    x.length && i.removeThemeElements(x), C && (k = x.children(".navbar"), y = i.$navbarsEl, 0 === k.length && x[0] && x[0].f7Page && (k = x[0].f7Page.$navbarEl)), u.route && u.route.route && u.route.route.keepAlive && !u.route.route.keepAliveData && (u.route.route.keepAliveData = {
      pageEl: s[0]
    });
    var T, N, O, D, j = M.children(".page:not(.stacked)").filter((function (e, t) {
      return t !== x[0]
    }));
    if (C && (T = y.children(".navbar:not(.stacked)").filter((function (e, t) {
        return t !== k[0]
      }))), u.reloadPrevious && j.length < 2) return i.allowPageChange = !0, i;
    if (p && !u.reloadAll) {
      for (var A = 0; A < j.length; A += 1) t || !j[A].classList.contains("page-master") || (t = j[A]);
      if ((N = !d && t) && t)
        for (var I = 0; I < j.length; I += 1) j[I].classList.contains("page-master-detail") && (n = j[I]);
      O = N && u.reloadDetail && l.width >= i.params.masterDetailBreakpoint && t
    }
    N && (D = !n || O || u.reloadAll || u.reloadCurrent);
    var B = "next";
    if (u.reloadCurrent || u.reloadAll || O ? B = "current" : u.reloadPrevious && (B = "previous"), x.removeClass("page-previous page-current page-next").addClass("page-".concat(B).concat(d ? " page-master" : "").concat(N ? " page-master-detail" : "").concat(D ? " page-master-detail-root" : "")).removeClass("stacked").trigger("page:unstack").trigger("page:position", {
        position: B
      }), i.emit("pageUnstack", x[0]), i.emit("pagePosition", x[0], B), (d || N) && (x.trigger("page:role", {
        role: d ? "master" : "detail",
        root: !!D
      }), i.emit("pageRole", x[0], {
        role: d ? "master" : "detail",
        detailRoot: !!D
      })), C && k.length && (k.removeClass("navbar-previous navbar-current navbar-next").addClass("navbar-".concat(B).concat(d ? " navbar-master" : "").concat(N ? " navbar-master-detail" : "").concat(D ? " navbar-master-detail-root" : "")).removeClass("stacked"), k.trigger("navbar:position", {
        position: B
      }), i.emit("navbarPosition", k[0], B), (d || N) && i.emit("navbarRole", k[0], {
        role: d ? "master" : "detail",
        detailRoot: !!D
      })), u.reloadCurrent || O) b = j.eq(j.length - 1), C && (w = g(l.navbar.getElByPage(b)));
    else if (u.reloadPrevious) b = j.eq(j.length - 2), C && (w = g(l.navbar.getElByPage(b)));
    else if (u.reloadAll) b = j.filter((function (e, t) {
      return t !== x[0]
    })), C && (w = T.filter((function (e, t) {
      return t !== k[0]
    })));
    else {
      var P = [],
        $ = [];
      if (j.length > 1) {
        var L = 0;
        for (L = 0; L < j.length - 1; L += 1)
          if (t && j[L] === t) j.eq(L).addClass("page-master-stacked"), j.eq(L).trigger("page:masterstack"), i.emit("pageMasterStack", j[L]), C && (g(l.navbar.getElByPage(t)).addClass("navbar-master-stacked"), i.emit("navbarMasterStack", l.navbar.getElByPage(t)));
          else {
            var _ = l.navbar.getElByPage(j.eq(L));
            i.params.stackPages ? (j.eq(L).addClass("stacked"), j.eq(L).trigger("page:stack"), i.emit("pageStack", j[L]), C && g(_).addClass("stacked")) : (P.push(j[L]), i.pageCallback("beforeRemove", j[L], T && T[L], "previous", void 0, u), i.removePage(j[L]), C && _ && ($.push(_), i.removeNavbar(_)))
          }
      }
      b = M.children(".page:not(.stacked)").filter((function (e, t) {
        return t !== x[0] && P.indexOf(t) < 0
      })), C && (w = y.children(".navbar:not(.stacked)").filter((function (e, t) {
        return t !== k[0] && $.indexOf($) < 0
      }))), P = [], $ = []
    }
    if (N && !u.reloadAll && ((b.length > 1 || O) && (b = b.filter((function (e, t) {
        return !t.classList.contains("page-master")
      }))), w && (w.length > 1 || O) && (w = w.filter((function (e, t) {
        return !t.classList.contains("navbar-master")
      })))), i.params.pushState && (u.pushState || u.replaceState) && !u.reloadPrevious) {
      var z = i.params.pushStateRoot || "";
      ke[u.reloadCurrent || O && n || u.reloadAll || u.replaceState ? "replace" : "push"](c.id, {
        url: u.route.url
      }, z + i.params.pushStateSeparator + u.route.url)
    }
    u.reloadPrevious || (i.currentPageEl = x[0], C && k.length ? i.currentNavbarEl = k[0] : delete i.currentNavbarEl, i.currentRoute = u.route);
    var R = u.route.url;
    u.history && (((u.reloadCurrent || O && n) && i.history.length) > 0 || u.replaceState ? i.history[i.history.length - (u.reloadPrevious ? 2 : 1)] = R : u.reloadPrevious ? i.history[i.history.length - 2] = R : u.reloadAll ? i.history = [R] : i.history.push(R)), i.saveHistory();
    var H = x.parents(o).length > 0,
      U = x[0].f7Component;
    if (u.reloadPrevious ? (U && !H ? U.$mount((function (e) {
        g(e).insertBefore(b)
      })) : x.insertBefore(b), C && k.length && (k.find(".title-large").length && k.addClass("navbar-large"), w.length ? k.insertBefore(w) : (i.$navbarsEl.parents(o).length || i.$el.prepend(i.$navbarsEl), y.append(k)))) : (b.next(".page")[0] !== x[0] && (U && !H ? U.$mount((function (e) {
        M.append(e)
      })) : M.append(x[0])), C && k.length && (k.find(".title-large").length && k.addClass("navbar-large"), i.$navbarsEl.parents(o).length || i.$el.prepend(i.$navbarsEl), y.append(k[0]))), H ? u.route && u.route.route && u.route.route.keepAlive && !x[0].f7PageMounted && (x[0].f7PageMounted = !0, i.pageCallback("mounted", x, k, B, S ? B : "current", u, b)) : i.pageCallback("mounted", x, k, B, S ? B : "current", u, b), (u.reloadCurrent || O) && b.length > 0 ? i.params.stackPages && i.initialPages.indexOf(b[0]) >= 0 ? (b.addClass("stacked"), b.trigger("page:stack"), i.emit("pageStack", b[0]), C && w.addClass("stacked")) : (i.pageCallback("beforeOut", b, w, "current", void 0, u), i.pageCallback("afterOut", b, w, "current", void 0, u), i.pageCallback("beforeRemove", b, w, "current", void 0, u), i.removePage(b), C && w && w.length && i.removeNavbar(w)) : u.reloadAll ? b.each((function (e, t) {
        var n = g(t),
          r = g(l.navbar.getElByPage(n));
        i.params.stackPages && i.initialPages.indexOf(n[0]) >= 0 ? (n.addClass("stacked"), n.trigger("page:stack"), i.emit("pageStack", n[0]), C && r.addClass("stacked")) : (n.hasClass("page-current") && (i.pageCallback("beforeOut", b, w, "current", void 0, u), i.pageCallback("afterOut", b, w, "current", void 0, u)), i.pageCallback("beforeRemove", n, w && w.eq(e), "previous", void 0, u), i.removePage(n), C && r.length && i.removeNavbar(r))
      })) : u.reloadPrevious && (i.params.stackPages && i.initialPages.indexOf(b[0]) >= 0 ? (b.addClass("stacked"), b.trigger("page:stack"), i.emit("pageStack", b[0]), C && w.addClass("stacked")) : (i.pageCallback("beforeRemove", b, w, "previous", void 0, u), i.removePage(b), C && w && w.length && i.removeNavbar(w))), u.route.route.tab && i.tabLoad(u.route.route.tab, E.extend({}, u, {
        history: !1,
        pushState: !1
      })), p && c.checkMasterDetailBreakpoint(), i.pageCallback("init", x, k, B, S ? B : "current", u, b), u.reloadCurrent || u.reloadAll || O) return i.allowPageChange = !0, i.pageCallback("beforeIn", x, k, B, "current", u), x.removeAttr("aria-hidden"), C && k && k.removeAttr("aria-hidden"), i.pageCallback("afterIn", x, k, B, "current", u), u.reloadCurrent && u.clearPreviousHistory && i.clearPreviousHistory(), O && (i.setPagePosition(g(t), "previous"), t.f7Page && t.f7Page.navbarEl && i.setNavbarPosition(g(t.f7Page.navbarEl), "previous")), i;
    if (u.reloadPrevious) return i.allowPageChange = !0, i;

    function F() {
      i.setPagePosition(x, "current", !1), i.setPagePosition(b, "previous", !b.hasClass("page-master")), C && (i.setNavbarPosition(k, "current", !1), i.setNavbarPosition(w, "previous", !w.hasClass("navbar-master"))), i.allowPageChange = !0, i.pageCallback("afterOut", b, w, "current", "previous", u), i.pageCallback("afterIn", x, k, "next", "current", u);
      var e = (i.params.preloadPreviousPage || i.params["".concat(l.theme, "SwipeBack")]) && !d;
      e || (x.hasClass("smart-select-page") || x.hasClass("photo-browser-page") || x.hasClass("autocomplete-page") || x.hasClass("color-picker-page")) && (e = !0), e || (i.params.stackPages ? (b.addClass("stacked"), b.trigger("page:stack"), i.emit("pageStack", b[0]), C && w.addClass("stacked")) : x.attr("data-name") && "smart-select-page" === x.attr("data-name") || (i.pageCallback("beforeRemove", b, w, "previous", void 0, u), i.removePage(b), C && w.length && i.removeNavbar(w))), u.clearPreviousHistory && i.clearPreviousHistory(), i.emit("routeChanged", i.currentRoute, i.previousRoute, i), i.params.pushState && ke.clearRouterQueue()
    }

    function Q() {
      i.setPagePosition(b, "current", !1), i.setPagePosition(x, "next", !1), C && (i.setNavbarPosition(w, "current", !1), i.setNavbarPosition(k, "next", !1))
    }
    if (i.pageCallback("beforeOut", b, w, "current", "previous", u), i.pageCallback("beforeIn", x, k, "next", "current", u), !u.animate || d && l.width >= i.params.masterDetailBreakpoint) F();
    else {
      var V = i.params["".concat(i.app.theme, "PageLoadDelay")],
        Y = i.params.transition;
      u.transition && (Y = u.transition), !Y && i.currentRoute && i.currentRoute.route && (Y = i.currentRoute.route.transition), !Y && i.currentRoute && i.currentRoute.route.options && (Y = i.currentRoute.route.options.transition), Y && (x[0].f7PageTransition = Y), V ? setTimeout((function () {
        Q(), i.animate(b, x, w, k, "forward", Y, (function () {
          F()
        }))
      }), V) : (Q(), i.animate(b, x, w, k, "forward", Y, (function () {
        F()
      })))
    }
    return i
  }, Pe.prototype.load = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = this;
    if (!r.allowPageChange && !n) return r;
    var a = e,
      o = t,
      i = a.url,
      s = a.content,
      l = a.el,
      c = a.pageName,
      u = a.template,
      p = a.templateUrl,
      d = a.component,
      f = a.componentUrl;
    if (!o.reloadCurrent && o.route && o.route.route && o.route.route.parentPath && r.currentRoute.route && r.currentRoute.route.parentPath === o.route.route.parentPath) {
      if (o.route.url === r.url) return r.allowPageChange = !0, !1;
      var h = Object.keys(o.route.params).length === Object.keys(r.currentRoute.params).length;
      if (h && Object.keys(o.route.params).forEach((function (e) {
          e in r.currentRoute.params && r.currentRoute.params[e] === o.route.params[e] || (h = !1)
        })), h) return !!o.route.route.tab && r.tabLoad(o.route.route.tab, o);
      if (!h && o.route.route.tab && r.currentRoute.route.tab && r.currentRoute.parentPath === o.route.parentPath) return r.tabLoad(o.route.route.tab, o)
    }
    if (o.route && o.route.url && r.url === o.route.url && !o.reloadCurrent && !o.reloadPrevious && !r.params.allowDuplicateUrls) return r.allowPageChange = !0, !1;

    function v(e, t) {
      return r.forward(e, E.extend(o, t))
    }

    function g() {
      return r.allowPageChange = !0, r
    }
    if (!o.route && i && (o.route = r.parseRouteUrl(i), E.extend(o.route, {
        route: {
          url: i,
          path: i
        }
      })), (i || p || f) && (r.allowPageChange = !1), s) r.forward(r.getPageEl(s), o);
    else if (u || p) try {
        r.pageTemplateLoader(u, p, o, v, g)
      } catch (e) {
        throw r.allowPageChange = !0, e
      } else if (l) r.forward(r.getPageEl(l), o);
      else if (c) r.forward(r.$el.children('.page[data-name="'.concat(c, '"]')).eq(0), o);
    else if (d || f) try {
      r.pageComponentLoader(r.el, d, f, o, v, g)
    } catch (e) {
      throw r.allowPageChange = !0, e
    } else i && (r.xhr && (r.xhr.abort(), r.xhr = !1), r.xhrRequest(i, o).then((function (e) {
      r.forward(r.getPageEl(e), o)
    })).catch((function () {
      r.allowPageChange = !0
    })));
    return r
  }, Pe.prototype.navigate = function (e) {
    var t, n, r, a, o, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      l = this;
    if (l.swipeBackActive) return l;
    if ("string" == typeof e ? t = e : (t = e.url, n = e.route, r = e.name, a = e.query, o = e.params), r) return (t = l.generateUrl({
      name: r,
      params: o,
      query: a
    })) ? l.navigate(t, s) : l;
    var c = l.app;
    if (Ee(l, "navigate"), "#" === t || "" === t) return l;
    var u = t.replace("./", "");
    if ("/" !== u[0] && 0 !== u.indexOf("#")) {
      var p = l.currentRoute.parentPath || l.currentRoute.path;
      u = ((p ? "".concat(p, "/") : "/") + u).replace("///", "/").replace("//", "/")
    }
    if (!(i = n ? E.extend(l.parseRouteUrl(u), {
        route: E.extend({}, n)
      }) : l.findMatchingRoute(u))) return l;
    if (i.route && i.route.viewName) {
      var d = i.route.viewName,
        f = c.views[d];
      if (!f) throw new Error('Framework7: There is no View with "'.concat(d, '" name that was specified in this route'));
      if (f !== l.view) return f.router.navigate(e, s)
    }
    if (i.route.redirect) return Ce.call(l, "navigate", i, s);
    var h = {};

    function v() {
      var e = !1;

      function t(e, t) {
        l.allowPageChange = !1;
        var n = !1;
        t && t.context && (i.context ? i.context = E.extend({}, i.context, t.context) : i.context = t.context, h.route.context = i.context), "popup popover sheet loginScreen actions customModal panel".split(" ").forEach((function (r) {
          if (e[r]) {
            n = !0;
            var a = E.extend({}, i, {
              route: e
            });
            l.allowPageChange = !0, l.modalLoad(r, a, E.extend(h, t))
          }
        })), n || l.load(e, E.extend(h, t), !0)
      }

      function n() {
        l.allowPageChange = !0
      }
      "popup popover sheet loginScreen actions customModal panel".split(" ").forEach((function (t) {
        i.route[t] && !e && (e = !0, l.modalLoad(t, i, h))
      })), i.route.keepAlive && i.route.keepAliveData && (l.load({
        el: i.route.keepAliveData.pageEl
      }, h, !1), e = !0), "url content component pageName el componentUrl template templateUrl".split(" ").forEach((function (t) {
        var n, r, a;
        i.route[t] && !e && (e = !0, l.load((n = {}, r = t, a = i.route[t], r in n ? Object.defineProperty(n, r, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : n[r] = a, n), h, !1))
      })), e || (i.route.async && (l.allowPageChange = !1, i.route.async.call(l, h.route, l.currentRoute, t, n)), i.route.asyncComponent && Te(l, i.route.asyncComponent, t, n))
    }

    function g() {
      l.allowPageChange = !0
    }
    if (i.route.options ? E.extend(h, i.route.options, s) : E.extend(h, s), h.route = i, h && h.context && (i.context = h.context, h.route.context = h.context), l.params.masterDetailBreakpoint > 0 && i.route.masterRoute) {
      var m = !0,
        b = !1;
      if (l.currentRoute && l.currentRoute.route && (!l.currentRoute.route.master || l.currentRoute.route !== i.route.masterRoute && l.currentRoute.route.path !== i.route.masterRoute.path || (m = !1), !l.currentRoute.route.masterRoute || l.currentRoute.route.masterRoute !== i.route.masterRoute && l.currentRoute.route.masterRoute.path !== i.route.masterRoute.path || (m = !1, b = !0)), m || b && s.reloadAll) return l.navigate(i.route.masterRoute.path, {
        animate: !1,
        reloadAll: s.reloadAll,
        reloadCurrent: s.reloadCurrent,
        reloadPrevious: s.reloadPrevious,
        pushState: !s.initial,
        history: !s.initial,
        once: {
          pageAfterIn: function () {
            l.navigate(e, E.extend({}, s, {
              animate: !1,
              reloadAll: !1,
              reloadCurrent: !1,
              reloadPrevious: !1,
              history: !s.initial,
              pushState: !s.initial
            }))
          }
        }
      }), l
    }
    return Se.call(l, i, l.currentRoute, (function () {
      i.route.modules ? c.loadModules(Array.isArray(i.route.modules) ? i.route.modules : [i.route.modules]).then((function () {
        v()
      })).catch((function () {
        g()
      })) : v()
    }), (function () {
      g()
    })), l
  }, Pe.prototype.refreshPage = function () {
    return Ee(this, "refreshPage"), this.navigate(this.currentRoute.url, {
      ignoreCache: !0,
      reloadCurrent: !0
    })
  }, Pe.prototype.tabLoad = function (e) {
    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      a = this,
      o = E.extend({
        animate: a.params.animate,
        pushState: !0,
        history: !0,
        parentPageEl: null,
        preload: !1,
        on: {}
      }, r);
    o.route && (o.preload || o.route === a.currentRoute || (n = a.previousRoute, a.currentRoute = o.route), o.preload ? (t = o.route, n = a.currentRoute) : (t = a.currentRoute, n || (n = a.previousRoute)), a.params.pushState && o.pushState && !o.reloadPrevious && ke.replace(a.view.id, {
      url: o.route.url
    }, (a.params.pushStateRoot || "") + a.params.pushStateSeparator + o.route.url), o.history && (a.history[Math.max(a.history.length - 1, 0)] = o.route.url, a.saveHistory()));
    var i, s = g(o.parentPageEl || a.currentPageEl);
    i = s.length && s.find("#".concat(e.id)).length ? s.find("#".concat(e.id)).eq(0) : a.view.selector ? "".concat(a.view.selector, " #").concat(e.id) : "#".concat(e.id);
    var l, c = a.app.tab.show({
        tabEl: i,
        animate: o.animate,
        tabRoute: o.route
      }),
      u = c.$newTabEl,
      p = c.$oldTabEl,
      d = c.animated,
      f = c.onTabsChanged;
    if (u && u.parents(".page").length > 0 && o.route) {
      var h = u.parents(".page")[0].f7Page;
      h && o.route && (h.route = o.route)
    }
    if (u[0].f7RouterTabLoaded) return p && p.length ? (d ? f((function () {
      a.emit("routeChanged", a.currentRoute, a.previousRoute, a)
    })) : a.emit("routeChanged", a.currentRoute, a.previousRoute, a), a) : a;

    function v(t, n) {
      var r = t.url,
        o = t.content,
        i = t.el,
        s = t.template,
        l = t.templateUrl,
        c = t.component,
        h = t.componentUrl;

      function v(t) {
        a.allowPageChange = !0, t && ("string" == typeof t ? u.html(t) : (u.html(""), t.f7Component ? t.f7Component.$mount((function (e) {
          u.append(e)
        })) : u.append(t)), u[0].f7RouterTabLoaded = !0, function (t) {
          a.removeThemeElements(u);
          var n = u;
          "string" != typeof t && (n = g(t)), n.trigger("tab:init tab:mounted", e), a.emit("tabInit tabMounted", u[0], e), p && p.length && (d ? f((function () {
            a.emit("routeChanged", a.currentRoute, a.previousRoute, a), a.params.unloadTabContent && a.tabRemove(p, u, e)
          })) : (a.emit("routeChanged", a.currentRoute, a.previousRoute, a), a.params.unloadTabContent && a.tabRemove(p, u, e)))
        }(t))
      }

      function m() {
        return a.allowPageChange = !0, a
      }
      if (o) v(o);
      else if (s || l) try {
          a.tabTemplateLoader(s, l, n, v, m)
        } catch (e) {
          throw a.allowPageChange = !0, e
        } else if (i) v(i);
        else if (c || h) try {
        a.tabComponentLoader(u[0], c, h, n, v, m)
      } catch (e) {
        throw a.allowPageChange = !0, e
      } else r && (a.xhr && (a.xhr.abort(), a.xhr = !1), a.xhrRequest(r, n).then((function (e) {
        v(e)
      })).catch((function () {
        a.allowPageChange = !0
      })))
    }

    function m(e, t) {
      v(e, E.extend(o, t))
    }

    function b() {
      a.allowPageChange = !0
    }
    return "url content component el componentUrl template templateUrl".split(" ").forEach((function (t) {
      var n, r, a;
      e[t] && (l = !0, v((n = {}, r = t, a = e[t], r in n ? Object.defineProperty(n, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : n[r] = a, n), o))
    })), e.async ? e.async.call(a, t, n, m, b) : e.asyncComponent ? Te(a, e.asyncComponent, m, b) : l || (a.allowPageChange = !0), a
  }, Pe.prototype.tabRemove = function (e, t, n) {
    var r;
    e[0] && (e[0].f7RouterTabLoaded = !1, delete e[0].f7RouterTabLoaded), e.children().each((function (e, t) {
      t.f7Component && (r = !0, g(t).trigger("tab:beforeremove", n), t.f7Component.$destroy())
    })), r || e.trigger("tab:beforeremove", n), this.emit("tabBeforeRemove", e[0], t[0], n), this.removeTabContent(e[0], n)
  }, Pe.prototype.modalLoad = function (e, t) {
    var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      a = this,
      o = a.app,
      i = "panel" === e,
      s = i ? "panel" : "modal",
      l = E.extend({
        animate: a.params.animate,
        pushState: !0,
        history: !0,
        on: {}
      }, r),
      c = E.extend({}, t.route[e]),
      u = t.route;

    function p() {
      var n = o[e].create(c);
      u.modalInstance = n;
      var r = n.el;

      function p() {
        n.close()
      }
      n.on("".concat(s, "Open"), (function () {
        r || (a.removeThemeElements(n.el), n.$el.trigger("".concat(e.toLowerCase(), ":init ").concat(e.toLowerCase(), ":mounted"), t, n), a.emit("".concat(i ? "" : "modalInit", " ").concat(e, "Init ").concat(e, "Mounted"), n.el, t, n)), a.once("swipeBackMove", p)
      })), n.on("".concat(s, "Close"), (function () {
        a.off("swipeBackMove", p), n.closeByRouter || a.back()
      })), n.on("".concat(s, "Closed"), (function () {
        n.$el.trigger("".concat(e.toLowerCase(), ":beforeremove"), t, n), n.emit("".concat(i ? "" : "modalBeforeRemove ").concat(e, "BeforeRemove"), n.el, t, n);
        var r = n.el.f7Component;
        r && r.$destroy(), E.nextTick((function () {
          (r || c.component) && a.removeModal(n.el), n.destroy(), delete n.route, delete u.modalInstance
        }))
      })), l.route && (a.params.pushState && l.pushState && ke.push(a.view.id, {
        url: l.route.url,
        modal: e
      }, (a.params.pushStateRoot || "") + a.params.pushStateSeparator + l.route.url), l.route !== a.currentRoute && (n.route = E.extend(l.route, {
        modal: n
      }), a.currentRoute = n.route), l.history && (a.history.push(l.route.url), a.saveHistory())), r && (a.removeThemeElements(n.el), n.$el.trigger("".concat(e.toLowerCase(), ":init ").concat(e.toLowerCase(), ":mounted"), t, n), a.emit("".concat(s, "Init ").concat(e, "Init ").concat(e, "Mounted"), n.el, t, n)), n.open()
    }

    function d(e, t) {
      var n = e.url,
        r = e.content,
        i = e.template,
        s = e.templateUrl,
        l = e.component,
        u = e.componentUrl;

      function d(e) {
        e && ("string" == typeof e ? c.content = e : e.f7Component ? e.f7Component.$mount((function (e) {
          c.el = e, o.root.append(e)
        })) : c.el = e, p())
      }

      function f() {
        return a.allowPageChange = !0, a
      }
      if (r) d(r);
      else if (i || s) try {
        a.modalTemplateLoader(i, s, t, d, f)
      } catch (e) {
        throw a.allowPageChange = !0, e
      } else if (l || u) try {
        a.modalComponentLoader(o.root[0], l, u, t, d, f)
      } catch (e) {
        throw a.allowPageChange = !0, e
      } else n ? (a.xhr && (a.xhr.abort(), a.xhr = !1), a.xhrRequest(n, t).then((function (e) {
        c.content = e, p()
      })).catch((function () {
        a.allowPageChange = !0
      }))) : p()
    }

    function f(e, t) {
      d(e, E.extend(l, t))
    }

    function h() {
      a.allowPageChange = !0
    }
    return "url content component el componentUrl template templateUrl".split(" ").forEach((function (e) {
      var t, r, a;
      c[e] && !n && (n = !0, d((t = {}, r = e, a = c[e], r in t ? Object.defineProperty(t, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[r] = a, t), l))
    })), n || "actions" !== e || p(), c.async && c.async.call(a, l.route, a.currentRoute, f, h), c.asyncComponent && Te(a, c.asyncComponent, f, h), a
  }, Pe.prototype.modalRemove = function (e) {
    E.extend(e, {
      closeByRouter: !0
    }), e.close()
  }, Pe.prototype.backward = function (e, t) {
    var n, r, a, i, s, l, c, u, p = this,
      d = g(e),
      f = p.app,
      h = p.view,
      v = E.extend({
        animate: p.params.animate,
        pushState: !0,
        replaceState: !1
      }, t),
      m = p.params.masterDetailBreakpoint > 0,
      b = m && v.route && v.route.route && !0 === v.route.route.master,
      y = p.dynamicNavbar,
      k = d,
      w = p.$el.children(".page-current"),
      C = m && w.hasClass("page-master");
    if (k.length && p.removeThemeElements(k), y && (i = k.children(".navbar"), a = p.$navbarsEl, 0 === i.length && k[0] && k[0].f7Page && (i = k[0].f7Page.$navbarEl), s = a.find(".navbar-current")), p.allowPageChange = !1, 0 === k.length || 0 === w.length) return p.allowPageChange = !0, p;
    if (p.removeThemeElements(k), v.route && v.route.route && v.route.route.keepAlive && !v.route.route.keepAliveData && (v.route.route.keepAliveData = {
        pageEl: d[0]
      }), m) {
      for (var M = p.$el.children(".page:not(.stacked)").filter((function (e, t) {
          return t !== k[0]
        })), x = 0; x < M.length; x += 1) n || !M[x].classList.contains("page-master") || (n = M[x]);
      !(l = !b && n && p.history.indexOf(v.route.url) > p.history.indexOf(n.f7Page.route.url)) && !b && n && n.f7Page && v.route.route.masterRoute && (l = v.route.route.masterRoute.path === n.f7Page.route.route.path)
    }
    if (l && n && n.f7Page && (c = p.history.indexOf(v.route.url) - p.history.indexOf(n.f7Page.route.url) == 1), k.addClass("page-previous".concat(b ? " page-master" : "").concat(l ? " page-master-detail" : "").concat(c ? " page-master-detail-root" : "")).removeClass("stacked").removeAttr("aria-hidden").trigger("page:unstack").trigger("page:position", {
        position: "previous"
      }), p.emit("pageUnstack", k[0]), p.emit("pagePosition", k[0], "previous"), (b || l) && (k.trigger("page:role", {
        role: b ? "master" : "detail",
        root: !!c
      }), p.emit("pageRole", k[0], {
        role: b ? "master" : "detail",
        detailRoot: !!c
      })), y && i.length > 0 && (i.addClass("navbar-previous".concat(b ? " navbar-master" : "").concat(l ? " navbar-master-detail" : "").concat(c ? " navbar-master-detail-root" : "")).removeClass("stacked").removeAttr("aria-hidden"), i.trigger("navbar:position", {
        position: "previous"
      }), p.emit("navbarPosition", i[0], "previous"), (b || c) && p.emit("navbarRole", i[0], {
        role: b ? "master" : "detail",
        detailRoot: !!c
      })), v.force && (w.prev(".page-previous:not(.stacked)").length > 0 || 0 === w.prev(".page-previous").length))
      if (p.history.indexOf(v.route.url) >= 0 ? (u = p.history.length - p.history.indexOf(v.route.url) - 1, p.history = p.history.slice(0, p.history.indexOf(v.route.url) + 2), h.history = p.history) : p.history[[p.history.length - 2]] ? p.history[p.history.length - 2] = v.route.url : p.history.unshift(p.url), u && p.params.stackPages) w.prevAll(".page-previous").each((function (e, t) {
        var a, o = g(t);
        y && (a = g(f.navbar.getElByPage(o))), o[0] !== k[0] && o.index() > k.index() && (p.initialPages.indexOf(o[0]) >= 0 ? (o.addClass("stacked"), o.trigger("page:stack"), p.emit("pageStack", o[0]), y && a.addClass("stacked")) : (p.pageCallback("beforeRemove", o, a, "previous", void 0, v), o[0] === n && (r = !0), p.removePage(o), y && a.length > 0 && p.removeNavbar(a)))
      }));
      else {
        var S, T = w.prev(".page-previous:not(.stacked)");
        y && (S = g(f.navbar.getElByPage(T))), p.params.stackPages && p.initialPages.indexOf(T[0]) >= 0 ? (T.addClass("stacked"), T.trigger("page:stack"), p.emit("pageStack", T[0]), S.addClass("stacked")) : T.length > 0 && (p.pageCallback("beforeRemove", T, S, "previous", void 0, v), T[0] === n && (r = !0), p.removePage(T), y && S.length && p.removeNavbar(S))
      } var O = k.parents(o).length > 0,
      D = k[0].f7Component;

    function j() {
      0 === k.next(w).length && (!O && D ? D.$mount((function (e) {
        g(e).insertBefore(w)
      })) : k.insertBefore(w)), y && i.length && (i.find(".title-large").length && i.addClass("navbar-large"), i.insertBefore(s), s.length > 0 ? i.insertBefore(s) : (p.$navbarsEl.parents(o).length || p.$el.prepend(p.$navbarsEl), a.append(i))), O ? v.route && v.route.route && v.route.route.keepAlive && !k[0].f7PageMounted && (k[0].f7PageMounted = !0, p.pageCallback("mounted", k, i, "previous", "current", v, w)) : p.pageCallback("mounted", k, i, "previous", "current", v, w)
    }
    if (v.preload) {
      j(), v.route.route.tab && p.tabLoad(v.route.route.tab, E.extend({}, v, {
        history: !1,
        pushState: !1,
        preload: !0
      })), b && (k.removeClass("page-master-stacked").trigger("page:masterunstack"), p.emit("pageMasterUnstack", k[0]), y && (g(f.navbar.getElByPage(k)).removeClass("navbar-master-stacked"), p.emit("navbarMasterUnstack", f.navbar.getElByPage(k)))), p.pageCallback("init", k, i, "previous", "current", v, w);
      var A = k.prevAll(".page-previous:not(.stacked):not(.page-master)");
      return A.length > 0 && A.each((function (e, t) {
        var n, r = g(t);
        y && (n = g(f.navbar.getElByPage(r))), p.params.stackPages && p.initialPages.indexOf(t) >= 0 ? (r.addClass("stacked"), r.trigger("page:stack"), p.emit("pageStack", r[0]), y && n.addClass("stacked")) : (p.pageCallback("beforeRemove", r, n, "previous", void 0), p.removePage(r), y && n.length && p.removeNavbar(n))
      })), p.allowPageChange = !0, p
    }
    if (!(N.ie || N.edge || N.firefox && !N.ios) && p.params.pushState && v.pushState)
      if (v.replaceState) {
        var I = p.params.pushStateRoot || "";
        ke.replace(h.id, {
          url: v.route.url
        }, I + p.params.pushStateSeparator + v.route.url)
      } else u ? ke.go(-u) : ke.back();
    if (v.replaceState ? p.history[p.history.length - 1] = v.route.url : (1 === p.history.length && p.history.unshift(p.url), p.history.pop()), p.saveHistory(), p.currentPageEl = k[0], y && i.length ? p.currentNavbarEl = i[0] : delete p.currentNavbarEl, p.currentRoute = v.route, (N.ie || N.edge || N.firefox && !N.ios) && p.params.pushState && v.pushState)
      if (v.replaceState) {
        var B = p.params.pushStateRoot || "";
        ke.replace(h.id, {
          url: v.route.url
        }, B + p.params.pushStateSeparator + v.route.url)
      } else u ? ke.go(-u) : ke.back();

    function P() {
      p.setPagePosition(k, "current", !1), p.setPagePosition(w, "next", !0), y && (p.setNavbarPosition(i, "current", !1), p.setNavbarPosition(s, "next", !0)), p.pageCallback("afterOut", w, s, "current", "next", v), p.pageCallback("afterIn", k, i, "previous", "current", v), p.params.stackPages && p.initialPages.indexOf(w[0]) >= 0 ? (w.addClass("stacked"), w.trigger("page:stack"), p.emit("pageStack", w[0]), y && s.addClass("stacked")) : (p.pageCallback("beforeRemove", w, s, "next", void 0, v), p.removePage(w), y && s.length && p.removeNavbar(s)), p.allowPageChange = !0, p.emit("routeChanged", p.currentRoute, p.previousRoute, p), (p.params.preloadPreviousPage || p.params["".concat(f.theme, "SwipeBack")]) && p.history[p.history.length - 2] && !b && p.back(p.history[p.history.length - 2], {
        preload: !0
      }), p.params.pushState && ke.clearRouterQueue()
    }
    if (j(), v.route.route.tab && p.tabLoad(v.route.route.tab, E.extend({}, v, {
        history: !1,
        pushState: !1
      })), m && (C || r) && h.checkMasterDetailBreakpoint(!1), p.pageCallback("init", k, i, "previous", "current", v, w), p.pageCallback("beforeOut", w, s, "current", "next", v), p.pageCallback("beforeIn", k, i, "previous", "current", v), !v.animate || C && f.width >= p.params.masterDetailBreakpoint) P();
    else {
      var $ = p.params.transition;
      w[0] && w[0].f7PageTransition && ($ = w[0].f7PageTransition, delete w[0].f7PageTransition), v.transition && ($ = v.transition), !$ && p.previousRoute && p.previousRoute.route && ($ = p.previousRoute.route.transition), !$ && p.previousRoute && p.previousRoute.route && p.previousRoute.route.options && ($ = p.previousRoute.route.options.transition), p.setPagePosition(w, "current"), p.setPagePosition(k, "previous", !1), y && (p.setNavbarPosition(s, "current"), p.setNavbarPosition(i, "previous", !1)), p.animate(w, k, s, i, "backward", $, (function () {
        P()
      }))
    }
    return p
  }, Pe.prototype.loadBack = function (e, t, n) {
    var r = this;
    if (!r.allowPageChange && !n) return r;
    var a = e,
      o = t,
      i = a.url,
      s = a.content,
      l = a.el,
      c = a.pageName,
      u = a.template,
      p = a.templateUrl,
      d = a.component,
      f = a.componentUrl;
    if (o.route.url && r.url === o.route.url && !o.reloadCurrent && !o.reloadPrevious && !r.params.allowDuplicateUrls) return !1;

    function h(e, t) {
      return r.backward(e, E.extend(o, t))
    }

    function v() {
      return r.allowPageChange = !0, r
    }
    if (!o.route && i && (o.route = r.parseRouteUrl(i)), (i || p || f) && (r.allowPageChange = !1), s) r.backward(r.getPageEl(s), o);
    else if (u || p) try {
        r.pageTemplateLoader(u, p, o, h, v)
      } catch (e) {
        throw r.allowPageChange = !0, e
      } else if (l) r.backward(r.getPageEl(l), o);
      else if (c) r.backward(r.$el.children('.page[data-name="'.concat(c, '"]')).eq(0), o);
    else if (d || f) try {
      r.pageComponentLoader(r.el, d, f, o, h, v)
    } catch (e) {
      throw r.allowPageChange = !0, e
    } else i && (r.xhr && (r.xhr.abort(), r.xhr = !1), r.xhrRequest(i, o).then((function (e) {
      r.backward(r.getPageEl(e), o)
    })).catch((function () {
      r.allowPageChange = !0
    })));
    return r
  }, Pe.prototype.back = function () {
    var e, t, n, r = this;
    if (r.swipeBackActive) return r;
    "object" === Ne(arguments.length <= 0 ? void 0 : arguments[0]) ? t = (arguments.length <= 0 ? void 0 : arguments[0]) || {} : (e = arguments.length <= 0 ? void 0 : arguments[0], t = (arguments.length <= 1 ? void 0 : arguments[1]) || {});
    var a = t,
      o = a.name,
      i = a.params,
      s = a.query;
    if (o) return (e = r.generateUrl({
      name: o,
      params: i,
      query: s
    })) ? r.back(e, E.extend({}, t, {
      name: null,
      params: null,
      query: null
    })) : r;
    var l = r.app;
    Ee(r, "back");
    var c, u = r.currentRoute.modal;
    if (u || "popup popover sheet loginScreen actions customModal panel".split(" ").forEach((function (e) {
        r.currentRoute.route[e] && (u = !0, c = e)
      })), u) {
      var p, d = r.currentRoute.modal || r.currentRoute.route.modalInstance || l[c].get(),
        f = r.history[r.history.length - 2];
      if (d && d.$el) {
        var h = d.$el.prevAll(".modal-in");
        h.length && h[0].f7Modal && (p = h[0].f7Modal.route)
      }
      if (p || (p = r.findMatchingRoute(f)), !p && f && (p = {
          url: f,
          path: f.split("?")[0],
          query: E.parseUrlQuery(f),
          route: {
            path: f.split("?")[0],
            url: f
          }
        }), !(e && 0 !== e.replace(/[# ]/g, "").trim().length || p && d)) return r;
      var v = t.force && p && e;
      if (p && d) {
        var g = N.ie || N.edge || N.firefox && !N.ios,
          m = r.params.pushState && !1 !== t.pushState;
        m && !g && ke.back(), r.currentRoute = p, r.history.pop(), r.saveHistory(), m && g && ke.back(), r.modalRemove(d), v && r.navigate(e, {
          reloadCurrent: !0
        })
      } else d && (r.modalRemove(d), e && r.navigate(e, {
        reloadCurrent: !0
      }));
      return r
    }
    var b, y = r.$el.children(".page-current").prevAll(".page-previous:not(.page-master)").eq(0);
    if (r.params.masterDetailBreakpoint > 0) {
      var k = r.$el.children(".page-current").prevAll(".page-master").eq(0);
      if (k.length) {
        var w = r.history[r.history.length - 2],
          C = r.findMatchingRoute(w);
        C && C.route === k[0].f7Page.route.route && (y = k, t.preload || (b = l.width >= r.params.masterDetailBreakpoint))
      }
    }
    if (!t.force && y.length && !b) {
      if (r.params.pushState && y[0].f7Page && r.history[r.history.length - 2] !== y[0].f7Page.route.url) return r.back(r.history[r.history.length - 2], E.extend(t, {
        force: !0
      })), r;
      var M = y[0].f7Page.route;
      return Se.call(r, M, r.currentRoute, (function () {
        r.loadBack({
          el: y
        }, E.extend(t, {
          route: M
        }))
      }), (function () {})), r
    }
    if ("#" === e && (e = void 0), e && "/" !== e[0] && 0 !== e.indexOf("#") && (e = ((r.path || "/") + e).replace("//", "/")), !e && r.history.length > 1 && (e = r.history[r.history.length - 2]), b && !t.force && r.history[r.history.length - 3]) return r.back(r.history[r.history.length - 3], E.extend({}, t || {}, {
      force: !0,
      animate: !1
    }));
    if (b && !t.force) return r;
    if ((n = r.findMatchingRoute(e)) || e && (n = {
        url: e,
        path: e.split("?")[0],
        query: E.parseUrlQuery(e),
        route: {
          path: e.split("?")[0],
          url: e
        }
      }), !n) return r;
    if (n.route.redirect) return Ce.call(r, "back", n, t);
    var x, S = {};
    if (n.route.options ? E.extend(S, n.route.options, t) : E.extend(S, t), S.route = n, S && S.context && (n.context = S.context, S.route.context = S.context), S.force && r.params.stackPages && (r.$el.children(".page-previous.stacked").each((function (e, t) {
        t.f7Page && t.f7Page.route && t.f7Page.route.url === n.url && (x = !0, r.loadBack({
          el: t
        }, S))
      })), x)) return r;

    function T() {
      var e = !1;

      function t(e, t) {
        r.allowPageChange = !1, t && t.context && (n.context ? n.context = E.extend({}, n.context, t.context) : n.context = t.context, S.route.context = n.context), r.loadBack(e, E.extend(S, t), !0)
      }

      function a() {
        r.allowPageChange = !0
      }
      n.route.keepAlive && n.route.keepAliveData && (r.loadBack({
        el: n.route.keepAliveData.pageEl
      }, S), e = !0), "url content component pageName el componentUrl template templateUrl".split(" ").forEach((function (t) {
        var a, o, i;
        n.route[t] && !e && (e = !0, r.loadBack((a = {}, o = t, i = n.route[t], o in a ? Object.defineProperty(a, o, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[o] = i, a), S))
      })), e || (n.route.async && (r.allowPageChange = !1, n.route.async.call(r, n, r.currentRoute, t, a)), n.route.asyncComponent && Te(r, n.route.asyncComponent, t, a))
    }

    function O() {
      r.allowPageChange = !0
    }
    return S.preload ? T() : Se.call(r, n, r.currentRoute, (function () {
      n.route.modules ? l.loadModules(Array.isArray(n.route.modules) ? n.route.modules : [n.route.modules]).then((function () {
        T()
      })).catch((function () {
        O()
      })) : T()
    }), (function () {
      O()
    })), r
  }, Pe.prototype.clearPreviousHistory = function () {
    Ee(this, "clearPreviousHistory");
    var e = this.history[this.history.length - 1];
    ! function (e) {
      Ee(e, "clearPreviousPages");
      var t = e.app,
        n = e.dynamicNavbar;
      e.$el.children(".page").filter((function (t, n) {
        return !(!e.currentRoute || !e.currentRoute.modal && !e.currentRoute.panel) || n !== e.currentPageEl
      })).each((function (r, a) {
        var o = g(a),
          i = g(t.navbar.getElByPage(o));
        e.params.stackPages && e.initialPages.indexOf(o[0]) >= 0 ? (o.addClass("stacked"), n && i.addClass("stacked")) : (e.pageCallback("beforeRemove", o, i, "previous", void 0, {}), e.removePage(o), n && i.length && e.removeNavbar(i))
      }))
    }(this), this.history = [e], this.view.history = [e], this.saveHistory()
  };
  var $e = Pe,
    Le = {
      name: "router",
      static: {
        Router: $e
      },
      instance: {
        cache: {
          xhr: [],
          templates: [],
          components: []
        }
      },
      create: function () {
        this.app ? this.params.router && (this.router = new $e(this.app, this)) : this.router = new $e(this)
      }
    };

  function _e(e) {
    return (_e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function ze(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function Re(e, t) {
    return !t || "object" !== _e(t) && "function" != typeof t ? Ue(e) : t
  }

  function He(e) {
    return (He = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function Ue(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function Fe(e, t) {
    return (Fe = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var Qe = function (e) {
    function t(e, n) {
      var r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t), r = Re(this, He(t).call(this, a, [e]));
      var o, i, s, l = e,
        c = g(n),
        u = Ue(r);
      if (0 === c.length) {
        var p = "Framework7: can't create a View instance because ";
        throw p += "string" == typeof n ? 'the selector "'.concat(n, "\" didn't match any element") : "el must be an HTMLElement or Dom7 object", new Error(p)
      }
      return u.params = E.extend({
        routes: [],
        routesAdd: []
      }, l.params.view, a), u.params.routes.length > 0 ? u.routes = u.params.routes : u.routes = [].concat(l.routes, u.params.routesAdd), o = "string" == typeof n ? n : (c.attr("id") ? "#".concat(c.attr("id")) : "") + (c.attr("class") ? ".".concat(c.attr("class").replace(/ /g, ".").replace(".active", "")) : ""), "ios" === l.theme && u.params.iosDynamicNavbar && 0 === (i = c.children(".navbars").eq(0)).length && (i = g('<div class="navbars"></div>')), E.extend(!1, u, {
        app: l,
        $el: c,
        el: c[0],
        name: u.params.name,
        main: u.params.main || c.hasClass("view-main"),
        $navbarsEl: i,
        navbarsEl: i ? i[0] : void 0,
        selector: o,
        history: [],
        scrollHistory: {}
      }), c[0].f7View = u, u.useModules(), l.views.push(u), u.main && (l.views.main = u), u.name && (l.views[u.name] = u), u.index = l.views.indexOf(u), s = u.name ? "view_".concat(u.name) : u.main ? "view_main" : "view_".concat(u.index), u.id = s, l.initialized ? u.init() : l.on("init", (function () {
        u.init()
      })), Re(r, u)
    }
    var n, r, a;
    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && Fe(e, t)
    }(t, e), n = t, (r = [{
      key: "destroy",
      value: function () {
        var e = this,
          t = e.app;
        e.$el.trigger("view:beforedestroy"), e.emit("local::beforeDestroy viewBeforeDestroy", e), t.off("resize", e.checkMasterDetailBreakpoint), e.main ? (t.views.main = null, delete t.views.main) : e.name && (t.views[e.name] = null, delete t.views[e.name]), e.$el[0].f7View = null, delete e.$el[0].f7View, t.views.splice(t.views.indexOf(e), 1), e.params.router && e.router && e.router.destroy(), e.emit("local::destroy viewDestroy", e), Object.keys(e).forEach((function (t) {
          e[t] = null, delete e[t]
        })), e = null
      }
    }, {
      key: "checkMasterDetailBreakpoint",
      value: function (e) {
        var t = this.app,
          n = this.$el.hasClass("view-master-detail"),
          r = t.width >= this.params.masterDetailBreakpoint && this.$el.children(".page-master").length;
        void 0 === e && r || !0 === e ? (this.$el.addClass("view-master-detail"), n || (this.emit("local::masterDetailBreakpoint viewMasterDetailBreakpoint", this), this.$el.trigger("view:masterDetailBreakpoint"))) : (this.$el.removeClass("view-master-detail"), n && (this.emit("local::masterDetailBreakpoint viewMasterDetailBreakpoint", this), this.$el.trigger("view:masterDetailBreakpoint")))
      }
    }, {
      key: "initMasterDetail",
      value: function () {
        var e = this.app;
        this.checkMasterDetailBreakpoint = this.checkMasterDetailBreakpoint.bind(this), this.checkMasterDetailBreakpoint(), e.on("resize", this.checkMasterDetailBreakpoint)
      }
    }, {
      key: "init",
      value: function () {
        this.params.router && (this.params.masterDetailBreakpoint > 0 && this.initMasterDetail(), this.router.init(), this.$el.trigger("view:init"), this.emit("local::init viewInit", this))
      }
    }]) && ze(n.prototype, r), a && ze(n, a), t
  }(L);
  Qe.use(Le);
  var Ve = Qe;
  var Ye = {
      name: "clicks",
      params: {
        clicks: {
          externalLinks: ".external"
        }
      },
      on: {
        init: function () {
          ! function (e) {
            e.on("click", (function (t) {
              var n = g(t.target),
                r = n.closest("a"),
                a = r.length > 0,
                o = a && r.attr("href");
              if (a && (r.is(e.params.clicks.externalLinks) || o && o.indexOf("javascript:") >= 0)) {
                var s = r.attr("target");
                o && i.cordova && i.cordova.InAppBrowser && ("_system" === s || "_blank" === s) && (t.preventDefault(), i.cordova.InAppBrowser.open(o, s))
              } else {
                Object.keys(e.modules).forEach((function (r) {
                  var a = e.modules[r].clicks;
                  a && (t.preventF7Router || Object.keys(a).forEach((function (r) {
                    var o = n.closest(r).eq(0);
                    o.length > 0 && a[r].call(e, o, o.dataset(), t)
                  })))
                }));
                var l = {};
                if (a && (t.preventDefault(), l = r.dataset()), !t.preventF7Router)
                  if (!r.hasClass("prevent-router") && !r.hasClass("router-prevent"))
                    if (o && o.length > 0 && "#" !== o[0] || r.hasClass("back")) {
                      var c;
                      if (l.view && "current" === l.view ? c = e.views.current : l.view ? c = g(l.view)[0].f7View : (c = n.parents(".view")[0] && n.parents(".view")[0].f7View, !r.hasClass("back") && c && c.params.linksView && ("string" == typeof c.params.linksView ? c = g(c.params.linksView)[0].f7View : c.params.linksView instanceof Ve && (c = c.params.linksView))), c || e.views.main && (c = e.views.main), !c || !c.router) return;
                      if (l.context && "string" == typeof l.context) try {
                        l.context = JSON.parse(l.context)
                      } catch (e) {}
                      r[0].f7RouteProps && (l.props = r[0].f7RouteProps), r.hasClass("back") ? c.router.back(o, l) : c.router.navigate(o, l)
                    }
              }
            }))
          }(this)
        }
      }
    },
    qe = {
      name: "history",
      static: {
        history: ke
      },
      on: {
        init: function () {
          ke.init(this)
        }
      }
    },
    We = {
      registrations: [],
      register: function (e, t) {
        var n = this;
        return "serviceWorker" in i.navigator && n.serviceWorker.container ? new Promise((function (r, a) {
          n.serviceWorker.container.register(e, t ? {
            scope: t
          } : {}).then((function (e) {
            We.registrations.push(e), n.emit("serviceWorkerRegisterSuccess", e), r(e)
          })).catch((function (e) {
            n.emit("serviceWorkerRegisterError", e), a(e)
          }))
        })) : new Promise((function (e, t) {
          t(new Error("Service worker is not supported"))
        }))
      },
      unregister: function (e) {
        var t, n = this;
        return "serviceWorker" in i.navigator && n.serviceWorker.container ? (t = e ? Array.isArray(e) ? e : [e] : We.registrations, Promise.all(t.map((function (e) {
          return new Promise((function (t, r) {
            e.unregister().then((function () {
              We.registrations.indexOf(e) >= 0 && We.registrations.splice(We.registrations.indexOf(e), 1), n.emit("serviceWorkerUnregisterSuccess", e), t()
            })).catch((function (t) {
              n.emit("serviceWorkerUnregisterError", e, t), r(t)
            }))
          }))
        })))) : new Promise((function (e, t) {
          t(new Error("Service worker is not supported"))
        }))
      }
    },
    Ze = {
      name: "sw",
      params: {
        serviceWorker: {
          path: void 0,
          scope: void 0
        }
      },
      create: function () {
        E.extend(this, {
          serviceWorker: {
            container: "serviceWorker" in i.navigator ? i.navigator.serviceWorker : void 0,
            registrations: We.registrations,
            register: We.register.bind(this),
            unregister: We.unregister.bind(this)
          }
        })
      },
      on: {
        init: function () {
          if ("serviceWorker" in i.navigator) {
            var e = this;
            if (e.serviceWorker.container) {
              var t = e.params.serviceWorker.path,
                n = e.params.serviceWorker.scope;
              if (t && (!Array.isArray(t) || t.length))(Array.isArray(t) ? t : [t]).forEach((function (t) {
                e.serviceWorker.register(t, n)
              }))
            }
          }
        }
      }
    },
    Ge = {
      hide: function () {
        N.cordova && i.StatusBar && i.StatusBar.hide()
      },
      show: function () {
        N.cordova && i.StatusBar && i.StatusBar.show()
      },
      onClick: function () {
        var e;
        (e = g(".popup.modal-in").length > 0 ? g(".popup.modal-in").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : g(".panel.panel-in").length > 0 ? g(".panel.panel-in").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : g(".views > .view.tab-active").length > 0 ? g(".views > .view.tab-active").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : g(".views").length > 0 ? g(".views").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : this.root.children(".view").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content")) && e.length > 0 && (e.hasClass("tab") && (e = e.parent(".tabs").children(".page-content.tab-active")), e.length > 0 && e.scrollTop(0, 300))
      },
      setTextColor: function (e) {
        N.cordova && i.StatusBar && ("white" === e ? i.StatusBar.styleLightContent() : i.StatusBar.styleDefault())
      },
      setBackgroundColor: function (e) {
        N.cordova && i.StatusBar && i.StatusBar.backgroundColorByHexString(e)
      },
      isVisible: function () {
        return !(!N.cordova || !i.StatusBar) && i.StatusBar.isVisible
      },
      overlaysWebView: function () {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        N.cordova && i.StatusBar && i.StatusBar.overlaysWebView(e)
      },
      init: function () {
        var e = this.params.statusbar;
        e.enabled && (N.cordova && i.StatusBar && (e.scrollTopOnClick && g(i).on("statusTap", Ge.onClick.bind(this)), N.ios && (e.iosOverlaysWebView ? i.StatusBar.overlaysWebView(!0) : i.StatusBar.overlaysWebView(!1), "white" === e.iosTextColor ? i.StatusBar.styleLightContent() : i.StatusBar.styleDefault()), N.android && (e.androidOverlaysWebView ? i.StatusBar.overlaysWebView(!0) : i.StatusBar.overlaysWebView(!1), "white" === e.androidTextColor ? i.StatusBar.styleLightContent() : i.StatusBar.styleDefault())), e.iosBackgroundColor && N.ios && Ge.setBackgroundColor(e.iosBackgroundColor), e.androidBackgroundColor && N.android && Ge.setBackgroundColor(e.androidBackgroundColor))
      }
    },
    Je = {
      name: "statusbar",
      params: {
        statusbar: {
          enabled: !0,
          scrollTopOnClick: !0,
          iosOverlaysWebView: !0,
          iosTextColor: "black",
          iosBackgroundColor: null,
          androidOverlaysWebView: !1,
          androidTextColor: "black",
          androidBackgroundColor: null
        }
      },
      create: function () {
        E.extend(this, {
          statusbar: {
            hide: Ge.hide,
            show: Ge.show,
            overlaysWebView: Ge.overlaysWebView,
            setTextColor: Ge.setTextColor,
            setBackgroundColor: Ge.setBackgroundColor,
            isVisible: Ge.isVisible,
            init: Ge.init.bind(this)
          }
        })
      },
      on: {
        init: function () {
          Ge.init.call(this)
        }
      }
    };
  var Xe = {
      name: "view",
      params: {
        view: {
          name: void 0,
          main: !1,
          router: !0,
          linksView: null,
          stackPages: !1,
          xhrCache: !0,
          xhrCacheIgnore: [],
          xhrCacheIgnoreGetParameters: !1,
          xhrCacheDuration: 6e5,
          componentCache: !0,
          preloadPreviousPage: !0,
          allowDuplicateUrls: !1,
          reloadPages: !1,
          reloadDetail: !1,
          masterDetailBreakpoint: 0,
          removeElements: !0,
          removeElementsWithTimeout: !1,
          removeElementsTimeout: 0,
          restoreScrollTopOnBack: !0,
          unloadTabContent: !0,
          passRouteQueryToRequest: !0,
          passRouteParamsToRequest: !1,
          loadInitialPage: !0,
          iosSwipeBack: !0,
          iosSwipeBackAnimateShadow: !0,
          iosSwipeBackAnimateOpacity: !0,
          iosSwipeBackActiveArea: 30,
          iosSwipeBackThreshold: 0,
          mdSwipeBack: !1,
          mdSwipeBackAnimateShadow: !0,
          mdSwipeBackAnimateOpacity: !1,
          mdSwipeBackActiveArea: 30,
          mdSwipeBackThreshold: 0,
          auroraSwipeBack: !1,
          auroraSwipeBackAnimateShadow: !1,
          auroraSwipeBackAnimateOpacity: !0,
          auroraSwipeBackActiveArea: 30,
          auroraSwipeBackThreshold: 0,
          pushState: !1,
          pushStateRoot: void 0,
          pushStateAnimate: !0,
          pushStateAnimateOnLoad: !1,
          pushStateSeparator: "#!",
          pushStateOnLoad: !0,
          animate: !0,
          iosDynamicNavbar: !0,
          iosAnimateNavbarBackIcon: !0,
          iosPageLoadDelay: 0,
          mdPageLoadDelay: 0,
          auroraPageLoadDelay: 0,
          routesBeforeEnter: null,
          routesBeforeLeave: null
        }
      },
      static: {
        View: Ve
      },
      create: function () {
        var e = this;
        E.extend(e, {
          views: E.extend([], {
            create: function (t, n) {
              return new Ve(e, t, n)
            },
            get: function (e) {
              var t = g(e);
              if (t.length && t[0].f7View) return t[0].f7View
            }
          })
        }), Object.defineProperty(e.views, "current", {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return function (e) {
              var t = g(".popover.modal-in .view"),
                n = g(".popup.modal-in .view"),
                r = g(".panel.panel-in .view"),
                a = g(".views");
              0 === a.length && (a = e.root);
              var o = a.children(".view");
              if (o.length > 1 && o.hasClass("tab") && (o = a.children(".view.tab-active")), t.length > 0 && t[0].f7View) return t[0].f7View;
              if (n.length > 0 && n[0].f7View) return n[0].f7View;
              if (r.length > 0 && r[0].f7View) return r[0].f7View;
              if (o.length > 0) {
                if (1 === o.length && o[0].f7View) return o[0].f7View;
                if (o.length > 1) return e.views.main
              }
            }(e)
          }
        }), e.view = e.views
      },
      on: {
        init: function () {
          var e = this;
          g(".view-init").each((function (t, n) {
            if (!n.f7View) {
              var r = g(n).dataset();
              e.views.create(n, r)
            }
          }))
        },
        modalOpen: function (e) {
          var t = this;
          e.$el.find(".view-init").each((function (e, n) {
            if (!n.f7View) {
              var r = g(n).dataset();
              t.views.create(n, r)
            }
          }))
        },
        modalBeforeDestroy: function (e) {
          e && e.$el && e.$el.find(".view-init").each((function (e, t) {
            var n = t.f7View;
            n && n.destroy()
          }))
        }
      },
      vnode: {
        "view-init": {
          insert: function (e) {
            var t = e.elm;
            if (!t.f7View) {
              var n = g(t).dataset();
              this.views.create(t, n)
            }
          },
          destroy: function (e) {
            var t = e.elm.f7View;
            t && t.destroy()
          }
        }
      }
    },
    Ke = {
      size: function (e) {
        var t = this,
          n = g(e);
        if (n.hasClass("navbars")) n = n.children(".navbar").each((function (e, n) {
          t.navbar.size(n)
        }));
        else {
          var r = n.children(".navbar-inner");
          if (r.length) {
            var a = r.hasClass("navbar-inner-centered-title") || t.params.navbar["".concat(t.theme, "CenterTitle")],
              o = "ios" === t.theme && !t.params.navbar["".concat(t.theme, "CenterTitle")];
            if ((a || o) && !(n.hasClass("stacked") || n.parents(".stacked").length > 0 || n.parents(".tab:not(.tab-active)").length > 0 || n.parents(".popup:not(.modal-in)").length > 0)) {
              "ios" !== t.theme && t.params.navbar["".concat(t.theme, "CenterTitle")] && r.addClass("navbar-inner-centered-title"), "ios" !== t.theme || t.params.navbar.iosCenterTitle || r.addClass("navbar-inner-left-title");
              var i, s, l, c, u = n.parents(".view").eq(0),
                p = t.rtl ? r.children(".right") : r.children(".left"),
                d = t.rtl ? r.children(".left") : r.children(".right"),
                f = r.children(".title"),
                h = r.children(".subnavbar"),
                v = 0 === p.length,
                m = 0 === d.length,
                b = v ? 0 : p.outerWidth(!0),
                y = m ? 0 : d.outerWidth(!0),
                k = f.outerWidth(!0),
                w = r.styles(),
                C = r[0].offsetWidth - parseInt(w.paddingLeft, 10) - parseInt(w.paddingRight, 10),
                M = n.hasClass("navbar-previous"),
                x = r.hasClass("sliding");
              u.length > 0 && u[0].f7View && (s = (i = u[0].f7View.router) && i.dynamicNavbar), m && (l = C - k), v && (l = 0), v || m || (l = (C - y - k + b) / 2);
              var S = (C - k) / 2;
              C - b - y > k ? (S < b && (S = b), S + k > C - y && (S = C - y - k), c = S - l) : c = 0;
              var E = t.rtl ? -1 : 1;
              if (s && "ios" === t.theme) {
                if (f.hasClass("sliding") || f.length > 0 && x) {
                  var T = -(l + c) * E,
                    N = (C - l - c - k) * E;
                  if (M && i && i.params.iosAnimateNavbarBackIcon) {
                    var O = n.parent().find(".navbar-current").children(".left.sliding").find(".back .icon ~ span");
                    O.length > 0 && (T += O[0].offsetLeft)
                  }
                  f[0].f7NavbarLeftOffset = T, f[0].f7NavbarRightOffset = N
                }
                if (!v && (p.hasClass("sliding") || x))
                  if (t.rtl) p[0].f7NavbarLeftOffset = -(C - p[0].offsetWidth) / 2 * E, p[0].f7NavbarRightOffset = b * E;
                  else if (p[0].f7NavbarLeftOffset = -b, p[0].f7NavbarRightOffset = (C - p[0].offsetWidth) / 2, i && i.params.iosAnimateNavbarBackIcon && p.find(".back .icon").length > 0 && p.find(".back .icon ~ span").length) {
                  var D = p[0].f7NavbarLeftOffset,
                    j = p[0].f7NavbarRightOffset;
                  p[0].f7NavbarLeftOffset = 0, p[0].f7NavbarRightOffset = 0, p.find(".back .icon ~ span")[0].f7NavbarLeftOffset = D, p.find(".back .icon ~ span")[0].f7NavbarRightOffset = j - p.find(".back .icon")[0].offsetWidth
                }
                m || !d.hasClass("sliding") && !x || (t.rtl ? (d[0].f7NavbarLeftOffset = -y * E, d[0].f7NavbarRightOffset = (C - d[0].offsetWidth) / 2 * E) : (d[0].f7NavbarLeftOffset = -(C - d[0].offsetWidth) / 2, d[0].f7NavbarRightOffset = y)), h.length && (h.hasClass("sliding") || x) && (h[0].f7NavbarLeftOffset = t.rtl ? h[0].offsetWidth : -h[0].offsetWidth, h[0].f7NavbarRightOffset = -h[0].f7NavbarLeftOffset)
              }
              if (a) {
                var A = c;
                t.rtl && v && m && f.length > 0 && (A = -A), f.css({
                  left: "".concat(A, "px")
                })
              }
            }
          }
        }
      },
      hide: function (e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = this,
          a = g(e),
          o = a.hasClass("navbar") && a.parent(".navbars").length;
        if (o && (a = a.parents(".navbars")), a.length && !a.hasClass("navbar-hidden")) {
          var i = "navbar-hidden".concat(t ? " navbar-transitioning" : ""),
            s = o ? a.find(".navbar-current .title-large").length : a.find(".title-large").length;
          s && (i += " navbar-large-hidden"), n && (i += " navbar-hidden-statusbar"), a.transitionEnd((function () {
            a.removeClass("navbar-transitioning")
          })), a.addClass(i), o ? a.children(".navbar").each((function (e, t) {
            g(t).trigger("navbar:hide"), r.emit("navbarHide", t)
          })) : (a.trigger("navbar:hide"), r.emit("navbarHide", a[0]))
        }
      },
      show: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".navbar-hidden",
          t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = this,
          r = g(e),
          a = r.hasClass("navbar") && r.parent(".navbars").length;
        a && (r = r.parents(".navbars")), r.length && r.hasClass("navbar-hidden") && (t && (r.addClass("navbar-transitioning"), r.transitionEnd((function () {
          r.removeClass("navbar-transitioning")
        }))), r.removeClass("navbar-hidden navbar-large-hidden navbar-hidden-statusbar"), a ? r.children(".navbar").each((function (e, t) {
          g(t).trigger("navbar:show"), n.emit("navbarShow", t)
        })) : (r.trigger("navbar:show"), n.emit("navbarShow", r[0])))
      },
      getElByPage: function (e) {
        var t, n, r;
        if (e.$navbarEl || e.$el ? (r = e, t = e.$el) : (t = g(e)).length > 0 && (r = t[0].f7Page), r && r.$navbarEl && r.$navbarEl.length > 0 ? n = r.$navbarEl : t && (n = t.children(".navbar")), n && (!n || 0 !== n.length)) return n[0]
      },
      getPageByEl: function (e) {
        var t, n = g(e);
        return n.parents(".page").length ? n.parents(".page")[0] : (n.parents(".view").find(".page").each((function (e, r) {
          r && r.f7Page && r.f7Page.navbarEl && n[0] === r.f7Page.navbarEl && (t = r)
        })), t)
      },
      collapseLargeTitle: function (e) {
        var t = g(e);
        if (!(t.hasClass("navbars") && ((t = t.find(".navbar")).length > 1 && (t = g(e).find(".navbar-large.navbar-current")), t.length > 1 || !t.length))) {
          var n = g(this.navbar.getPageByEl(t));
          t.addClass("navbar-large-collapsed"), n.eq(0).addClass("page-with-navbar-large-collapsed").trigger("page:navbarlargecollapsed"), this.emit("pageNavbarLargeCollapsed", n[0]), t.trigger("navbar:collapse"), this.emit("navbarCollapse", t[0])
        }
      },
      expandLargeTitle: function (e) {
        var t = g(e);
        if (!(t.hasClass("navbars") && ((t = t.find(".navbar-large")).length > 1 && (t = g(e).find(".navbar-large.navbar-current")), t.length > 1 || !t.length))) {
          var n = g(this.navbar.getPageByEl(t));
          t.removeClass("navbar-large-collapsed"), n.eq(0).removeClass("page-with-navbar-large-collapsed").trigger("page:navbarlargeexpanded"), this.emit("pageNavbarLargeExpanded", n[0]), t.trigger("navbar:expand"), this.emit("navbarExpand", t[0])
        }
      },
      toggleLargeTitle: function (e) {
        var t = g(e);
        t.hasClass("navbars") && ((t = t.find(".navbar-large")).length > 1 && (t = g(e).find(".navbar-large.navbar-current")), t.length > 1 || !t.length) || (t.hasClass("navbar-large-collapsed") ? this.navbar.expandLargeTitle(t) : this.navbar.collapseLargeTitle(t))
      },
      initNavbarOnScroll: function (e, t, n, r, a) {
        var o, i, s, l, c, u, p, d, f, h, v, m, b, y, k = this,
          w = g(e),
          C = g(t),
          M = C.find(".title-large"),
          x = M.length || C.hasClass(".navbar-large"),
          S = 44,
          E = k.params.navbar.snapPageScrollToLargeTitle,
          N = k.params.navbar.snapPageScrollToTransparentNavbar;
        (r || n && x) && ((f = C.css("--f7-navbar-large-title-height")) && f.indexOf("px") >= 0 ? (f = parseInt(f, 10), Number.isNaN(f) && M.length ? f = M[0].offsetHeight : Number.isNaN(f) && ("ios" === k.theme ? f = 52 : "md" === k.theme ? f = 48 : "aurora" === k.theme && (f = 38))) : M.length ? f = M[0].offsetHeight : "ios" === k.theme ? f = 52 : "md" === k.theme ? f = 48 : "aurora" === k.theme && (f = 38)), n && x && (S += f);
        var O = 70,
          D = 300;

        function j() {
          C.hasClass("with-searchbar-expandable-enabled") || !m || i < 0 || (i >= f / 2 && i < f ? g(m).scrollTop(f, 100) : i < f && g(m).scrollTop(0, 200))
        }

        function A() {
          C.hasClass("with-searchbar-expandable-enabled") || !m || i < 0 || (i >= h / 2 && i < h ? g(m).scrollTop(h, 100) : i < h && g(m).scrollTop(0, 200))
        }
        var I = null,
          B = null;

        function P(e) {
          m = this, e && e.target && e.target !== m || (i = m.scrollTop, v = i, r ? function () {
            if (!(C.hasClass("navbar-hidden") || C.parent(".navbars").hasClass("navbar-hidden"))) {
              var e = C.hasClass("navbar-large-transparent") || C.hasClass("navbar-large") && C.hasClass("navbar-transparent");
              I = B, B = Math.min(Math.max(i / f, 0), 1);
              var t = I > 0 && I < 1;
              C.hasClass("with-searchbar-expandable-enabled") || (d = C.hasClass("navbar-large-collapsed"), 0 === B && d ? k.navbar.expandLargeTitle(C[0]) : 1 !== B || d || k.navbar.collapseLargeTitle(C[0]), 0 === B && d || 0 === B && t || 1 === B && !d || 1 === B && t ? ("md" === k.theme && C.find(".navbar-inner").css("overflow", ""), C.find(".title").css("opacity", ""), C.find(".title-large-text, .subnavbar").css("transform", ""), e ? C.find(".navbar-bg").css("opacity", "") : C.find(".navbar-bg").css("transform", "")) : B > 0 && B < 1 && ("md" === k.theme && C.find(".navbar-inner").css("overflow", "visible"), C.find(".title").css("opacity", B), C.find(".title-large-text, .subnavbar").css("transform", "translate3d(0px, ".concat(-1 * B * f, "px, 0)")), e ? C.find(".navbar-bg").css("opacity", B) : C.find(".navbar-bg").css("transform", "translate3d(0px, ".concat(-1 * B * f, "px, 0)"))), E && (T.touch ? y && (clearTimeout(y), y = null, y = setTimeout((function () {
                j(), clearTimeout(y), y = null
              }), O)) : (clearTimeout(b), b = setTimeout((function () {
                j()
              }), D))))
            }
          }() : a && function () {
            var e = C.hasClass("navbar-hidden") || C.parent(".navbars").hasClass("navbar-hidden");
            if (!C.hasClass("with-searchbar-expandable-enabled") && !e) {
              h || (h = t.offsetHeight);
              var n = i / h,
                r = C.hasClass("navbar-transparent-visible");
              if (n = Math.max(Math.min(n, 1), 0), r && 1 === n || !r && 0 === n) C.find(".navbar-bg, .title").css("opacity", "");
              else {
                if (r && 0 === n) return C.trigger("navbar:transparenthide"), k.emit("navbarTransparentHide", C[0]), C.removeClass("navbar-transparent-visible"), void C.find(".navbar-bg, .title").css("opacity", "");
                if (!r && 1 === n) return C.trigger("navbar:transparentshow"), k.emit("navbarTransparentShow", C[0]), C.addClass("navbar-transparent-visible"), void C.find(".navbar-bg, .title").css("opacity", "");
                C.find(".navbar-bg, .title").css("opacity", n), N && (T.touch ? y && (clearTimeout(y), y = null, y = setTimeout((function () {
                  A(), clearTimeout(y), y = null
                }), O)) : (clearTimeout(b), b = setTimeout((function () {
                  A()
                }), D)))
              }
            }
          }(), w.hasClass("page-previous") || n && (s = m.scrollHeight, l = m.offsetHeight, c = i + l >= s, p = C.hasClass("navbar-hidden") || C.parent(".navbars").hasClass("navbar-hidden"), c ? k.params.navbar.showOnPageScrollEnd && (u = "show") : u = o > i ? k.params.navbar.showOnPageScrollTop || i <= S ? "show" : "hide" : i > S ? "hide" : "show", "show" === u && p ? (k.navbar.show(C), p = !1) : "hide" !== u || p || (k.navbar.hide(C), p = !0), o = i))
        }

        function $() {
          v = !1
        }

        function L() {
          clearTimeout(y), y = null, y = setTimeout((function () {
            !1 !== v && (a && !r ? A() : j(), clearTimeout(y), y = null)
          }), O)
        }
        w.on("scroll", ".page-content", P, !0), T.touch && (r && E || a && N) && (k.on("touchstart:passive", $), k.on("touchend:passive", L)), r ? w.find(".page-content").each((function (e, t) {
          t.scrollTop > 0 && P.call(t)
        })) : a && w.find(".page-content").each((function (e, t) {
          t.scrollTop > 0 && P.call(t)
        })), w[0].f7DetachNavbarScrollHandlers = function () {
          delete w[0].f7DetachNavbarScrollHandlers, w.off("scroll", ".page-content", P, !0), T.touch && (r && E || a && N) && (k.off("touchstart:passive", $), k.off("touchend:passive", L))
        }
      }
    },
    et = {
      name: "navbar",
      create: function () {
        var e = this;
        E.extend(e, {
          navbar: {
            size: Ke.size.bind(e),
            hide: Ke.hide.bind(e),
            show: Ke.show.bind(e),
            getElByPage: Ke.getElByPage.bind(e),
            getPageByEl: Ke.getPageByEl.bind(e),
            collapseLargeTitle: Ke.collapseLargeTitle.bind(e),
            expandLargeTitle: Ke.expandLargeTitle.bind(e),
            toggleLargeTitle: Ke.toggleLargeTitle.bind(e),
            initNavbarOnScroll: Ke.initNavbarOnScroll.bind(e)
          }
        })
      },
      params: {
        navbar: {
          scrollTopOnTitleClick: !0,
          iosCenterTitle: !0,
          mdCenterTitle: !1,
          auroraCenterTitle: !0,
          hideOnPageScroll: !1,
          showOnPageScrollEnd: !0,
          showOnPageScrollTop: !0,
          collapseLargeTitleOnScroll: !0,
          snapPageScrollToLargeTitle: !0,
          snapPageScrollToTransparentNavbar: !0
        }
      },
      on: {
        "panelBreakpoint panelCollapsedBreakpoint panelResize resize viewMasterDetailBreakpoint": function () {
          var e = this;
          g(".navbar").each((function (t, n) {
            e.navbar.size(n)
          }))
        },
        pageBeforeRemove: function (e) {
          e.$el[0].f7DetachNavbarScrollHandlers && e.$el[0].f7DetachNavbarScrollHandlers()
        },
        pageBeforeIn: function (e) {
          if ("ios" === this.theme) {
            var t, n = e.$el.parents(".view")[0].f7View,
              r = this.navbar.getElByPage(e);
            if (t = r ? g(r).parents(".navbars") : e.$el.parents(".view").children(".navbars"), e.$el.hasClass("no-navbar") || n.router.dynamicNavbar && !r) {
              var a = !!(e.pageFrom && e.router.history.length > 0);
              this.navbar.hide(t, a)
            } else this.navbar.show(t)
          }
        },
        pageReinit: function (e) {
          var t = g(this.navbar.getElByPage(e));
          t && 0 !== t.length && this.navbar.size(t)
        },
        pageInit: function (e) {
          var t, n, r, a = g(this.navbar.getElByPage(e));
          a && 0 !== a.length && (this.navbar.size(a), a.find(".title-large").length > 0 && a.addClass("navbar-large"), a.hasClass("navbar-large") && (this.params.navbar.collapseLargeTitleOnScroll && (t = !0), e.$el.addClass("page-with-navbar-large")), !t && a.hasClass("navbar-transparent") && (n = !0), (this.params.navbar.hideOnPageScroll || e.$el.find(".hide-navbar-on-scroll").length || e.$el.hasClass("hide-navbar-on-scroll") || e.$el.find(".hide-bars-on-scroll").length || e.$el.hasClass("hide-bars-on-scroll")) && (r = !(e.$el.find(".keep-navbar-on-scroll").length || e.$el.hasClass("keep-navbar-on-scroll") || e.$el.find(".keep-bars-on-scroll").length || e.$el.hasClass("keep-bars-on-scroll"))), (t || r || n) && this.navbar.initNavbarOnScroll(e.el, a[0], r, t, n))
        },
        "panelOpen panelSwipeOpen modalOpen": function (e) {
          var t = this;
          e.$el.find(".navbar:not(.navbar-previous):not(.stacked)").each((function (e, n) {
            t.navbar.size(n)
          }))
        },
        tabShow: function (e) {
          var t = this;
          g(e).find(".navbar:not(.navbar-previous):not(.stacked)").each((function (e, n) {
            t.navbar.size(n)
          }))
        }
      },
      clicks: {
        ".navbar .title": function (e) {
          if (this.params.navbar.scrollTopOnTitleClick && !(e.closest("a").length > 0)) {
            var t, n = e.parents(".navbar"),
              r = n.parents(".navbars");
            0 === (t = n.parents(".page-content")).length && (n.parents(".page").length > 0 && (t = n.parents(".page").find(".page-content")), 0 === t.length && r.length && r.nextAll(".page-current:not(.stacked)").length > 0 && (t = r.nextAll(".page-current:not(.stacked)").find(".page-content")), 0 === t.length && n.nextAll(".page-current:not(.stacked)").length > 0 && (t = n.nextAll(".page-current:not(.stacked)").find(".page-content"))), t && t.length > 0 && (t.hasClass("tab") && (t = t.parent(".tabs").children(".page-content.tab-active")), t.length > 0 && t.scrollTop(0, 300))
          }
        }
      },
      vnode: {
        navbar: {
          postpatch: function (e) {
            this.navbar.size(e.elm)
          }
        }
      }
    },
    tt = {
      setHighlight: function (e) {
        if ("md" === this.theme) {
          var t = g(e);
          if (0 !== t.length && (t.hasClass("tabbar") || t.hasClass("tabbar-labels"))) {
            var n = t.find(".tab-link-highlight"),
              r = t.find(".tab-link").length;
            if (0 !== r) {
              0 === n.length ? (t.children(".toolbar-inner").append('<span class="tab-link-highlight"></span>'), n = t.find(".tab-link-highlight")) : n.next().length && t.children(".toolbar-inner").append(n);
              var a, o, i = t.find(".tab-link-active");
              if (t.hasClass("tabbar-scrollable") && i && i[0]) a = "".concat(i[0].offsetWidth, "px"), o = "".concat(i[0].offsetLeft, "px");
              else {
                var s = i.index();
                a = "".concat(100 / r, "%"), o = "".concat(100 * (this.rtl ? -s : s), "%")
              }
              E.nextFrame((function () {
                n.css("width", a).transform("translate3d(".concat(o, ",0,0)"))
              }))
            } else n.remove()
          }
        }
      },
      init: function (e) {
        this.toolbar.setHighlight(e)
      },
      hide: function (e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = this,
          r = g(e);
        if (!r.hasClass("toolbar-hidden")) {
          var a = "toolbar-hidden".concat(t ? " toolbar-transitioning" : "");
          r.transitionEnd((function () {
            r.removeClass("toolbar-transitioning")
          })), r.addClass(a), r.trigger("toolbar:hide"), n.emit("toolbarHide", r[0])
        }
      },
      show: function (e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = this,
          r = g(e);
        r.hasClass("toolbar-hidden") && (t && (r.addClass("toolbar-transitioning"), r.transitionEnd((function () {
          r.removeClass("toolbar-transitioning")
        }))), r.removeClass("toolbar-hidden"), r.trigger("toolbar:show"), n.emit("toolbarShow", r[0]))
      },
      initHideToolbarOnScroll: function (e) {
        var t, n, r, a, o, i, s, l = this,
          c = g(e),
          u = c.parents(".view").children(".toolbar");
        (0 === u.length && (u = c.find(".toolbar")), 0 === u.length && (u = c.parents(".views").children(".tabbar, .tabbar-labels")), 0 !== u.length) && (c.on("scroll", ".page-content", p, !0), c[0].f7ScrollToolbarHandler = p);

        function p(e) {
          e && e.target && e.target !== this || c.hasClass("page-previous") || (n = this.scrollTop, r = this.scrollHeight, a = this.offsetHeight, o = n + a >= r, s = u.hasClass("toolbar-hidden"), o ? l.params.toolbar.showOnPageScrollEnd && (i = "show") : i = t > n ? l.params.toolbar.showOnPageScrollTop || n <= 44 ? "show" : "hide" : n > 44 ? "hide" : "show", "show" === i && s ? (l.toolbar.show(u), s = !1) : "hide" !== i || s || (l.toolbar.hide(u), s = !0), t = n)
        }
      }
    },
    nt = {
      name: "toolbar",
      create: function () {
        E.extend(this, {
          toolbar: {
            hide: tt.hide.bind(this),
            show: tt.show.bind(this),
            setHighlight: tt.setHighlight.bind(this),
            initHideToolbarOnScroll: tt.initHideToolbarOnScroll.bind(this),
            init: tt.init.bind(this)
          }
        })
      },
      params: {
        toolbar: {
          hideOnPageScroll: !1,
          showOnPageScrollEnd: !0,
          showOnPageScrollTop: !0
        }
      },
      on: {
        pageBeforeRemove: function (e) {
          e.$el[0].f7ScrollToolbarHandler && e.$el.off("scroll", ".page-content", e.$el[0].f7ScrollToolbarHandler, !0)
        },
        pageBeforeIn: function (e) {
          var t = e.$el.parents(".view").children(".toolbar");
          0 === t.length && (t = e.$el.parents(".views").children(".tabbar, .tabbar-labels")), 0 === t.length && (t = e.$el.find(".toolbar")), 0 !== t.length && (e.$el.hasClass("no-toolbar") ? this.toolbar.hide(t) : this.toolbar.show(t))
        },
        pageInit: function (e) {
          var t = this;
          if (e.$el.find(".tabbar, .tabbar-labels").each((function (e, n) {
              t.toolbar.init(n)
            })), t.params.toolbar.hideOnPageScroll || e.$el.find(".hide-toolbar-on-scroll").length || e.$el.hasClass("hide-toolbar-on-scroll") || e.$el.find(".hide-bars-on-scroll").length || e.$el.hasClass("hide-bars-on-scroll")) {
            if (e.$el.find(".keep-toolbar-on-scroll").length || e.$el.hasClass("keep-toolbar-on-scroll") || e.$el.find(".keep-bars-on-scroll").length || e.$el.hasClass("keep-bars-on-scroll")) return;
            t.toolbar.initHideToolbarOnScroll(e.el)
          }
        },
        init: function () {
          var e = this;
          e.root.find(".tabbar, .tabbar-labels").each((function (t, n) {
            e.toolbar.init(n)
          }))
        }
      },
      vnode: {
        tabbar: {
          insert: function (e) {
            this.toolbar.init(e.elm)
          }
        }
      }
    },
    rt = {
      name: "subnavbar",
      on: {
        pageInit: function (e) {
          e.$navbarEl && e.$navbarEl.length && e.$navbarEl.find(".subnavbar").length && e.$el.addClass("page-with-subnavbar"), e.$el.find(".subnavbar").length && e.$el.addClass("page-with-subnavbar")
        }
      }
    };

  function at(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var ot = function () {
    function e(t, n, r) {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e);
      var a = this;
      if (t) {
        var o = t[0].getBoundingClientRect(),
          i = {
            x: n - o.left,
            y: r - o.top
          },
          s = o.width,
          l = o.height,
          c = Math.max(Math.pow(Math.pow(l, 2) + Math.pow(s, 2), .5), 48);
        return a.$rippleWaveEl = g('<div class="ripple-wave" style="width: '.concat(c, "px; height: ").concat(c, "px; margin-top:-").concat(c / 2, "px; margin-left:-").concat(c / 2, "px; left:").concat(i.x, "px; top:").concat(i.y, 'px;"></div>')), t.prepend(a.$rippleWaveEl), a.rippleTransform = "translate3d(".concat(s / 2 - i.x, "px, ").concat(l / 2 - i.y, "px, 0) scale(1)"), E.nextFrame((function () {
          a && a.$rippleWaveEl && a.$rippleWaveEl.transform(a.rippleTransform)
        })), a
      }
    }
    var t, n, r;
    return t = e, (n = [{
      key: "destroy",
      value: function () {
        var e = this;
        e.$rippleWaveEl && e.$rippleWaveEl.remove(), Object.keys(e).forEach((function (t) {
          e[t] = null, delete e[t]
        })), e = null
      }
    }, {
      key: "remove",
      value: function () {
        var e = this;
        if (!e.removing) {
          var t = this.$rippleWaveEl,
            n = this.rippleTransform,
            r = E.nextTick((function () {
              e.destroy()
            }), 400);
          e.removing = !0, t.addClass("ripple-wave-fill").transform(n.replace("scale(1)", "scale(1.01)")).transitionEnd((function () {
            clearTimeout(r), E.nextFrame((function () {
              t.addClass("ripple-wave-out").transform(n.replace("scale(1)", "scale(1.01)")), r = E.nextTick((function () {
                e.destroy()
              }), 700), t.transitionEnd((function () {
                clearTimeout(r), e.destroy()
              }))
            }))
          }))
        }
      }
    }]) && at(t.prototype, n), r && at(t, r), e
  }();

  function it(e, t, n) {
    return (it = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
      } catch (e) {
        return !1
      }
    }() ? Reflect.construct : function (e, t, n) {
      var r = [null];
      r.push.apply(r, t);
      var a = new(Function.bind.apply(e, r));
      return n && st(a, n.prototype), a
    }).apply(null, arguments)
  }

  function st(e, t) {
    return (st = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var lt = {
    name: "touch-ripple",
    static: {
      TouchRipple: ot
    },
    create: function () {
      this.touchRipple = {
        create: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return it(ot, t)
        }
      }
    }
  };

  function ct(e) {
    return (ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function ut(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function pt(e, t) {
    return !t || "object" !== ct(t) && "function" != typeof t ? ft(e) : t
  }

  function dt(e) {
    return (dt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function ft(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function ht(e, t) {
    return (ht = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var vt = [],
    gt = [];
  var mt = function (e) {
    function t(e, n) {
      var r;
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var a = ft(r = pt(this, dt(t).call(this, n, [e]))),
        o = {};
      return a.useModulesParams(o), a.params = E.extend(o, n), a.opened = !1, a.useModules(), pt(r, ft(r))
    }
    var n, r, a;
    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && ht(e, t)
    }(t, e), n = t, (r = [{
      key: "onOpen",
      value: function () {
        this.opened = !0, vt.push(this), g("html").addClass("with-modal-".concat(this.type.toLowerCase())), this.$el.trigger("modal:open ".concat(this.type.toLowerCase(), ":open")), this.emit("local::open modalOpen ".concat(this.type, "Open"), this)
      }
    }, {
      key: "onOpened",
      value: function () {
        this.$el.trigger("modal:opened ".concat(this.type.toLowerCase(), ":opened")), this.emit("local::opened modalOpened ".concat(this.type, "Opened"), this)
      }
    }, {
      key: "onClose",
      value: function () {
        this.opened = !1, this.type && this.$el && (vt.splice(vt.indexOf(this), 1), g("html").removeClass("with-modal-".concat(this.type.toLowerCase())), this.$el.trigger("modal:close ".concat(this.type.toLowerCase(), ":close")), this.emit("local::close modalClose ".concat(this.type, "Close"), this))
      }
    }, {
      key: "onClosed",
      value: function () {
        this.type && this.$el && (this.$el.removeClass("modal-out"), this.$el.hide(), this.$el.trigger("modal:closed ".concat(this.type.toLowerCase(), ":closed")), this.emit("local::closed modalClosed ".concat(this.type, "Closed"), this))
      }
    }, {
      key: "open",
      value: function (e) {
        var t, n = this,
          r = n.app,
          a = n.$el,
          i = n.$backdropEl,
          s = n.type,
          l = !0;
        if (void 0 !== e ? l = e : void 0 !== n.params.animate && (l = n.params.animate), !a || a.hasClass("modal-in")) return n;
        if ("dialog" === s && r.params.modal.queueDialogs && (g(".dialog.modal-in").length > 0 ? t = !0 : vt.length > 0 && vt.forEach((function (e) {
            "dialog" === e.type && (t = !0)
          })), t)) return gt.push(n), n;
        var c = a.parent(),
          u = a.parents(o).length > 0;

        function p() {
          a.hasClass("modal-out") ? n.onClosed() : a.hasClass("modal-in") && n.onOpened()
        }
        return r.params.modal.moveToRoot && !c.is(r.root) && (r.root.append(a), n.once("".concat(s, "Closed"), (function () {
          u ? c.append(a) : a.remove()
        }))), a.show(), n._clientLeft = a[0].clientLeft, l ? (i && (i.removeClass("not-animated"), i.addClass("backdrop-in")), a.animationEnd((function () {
          p()
        })), a.transitionEnd((function () {
          p()
        })), a.removeClass("modal-out not-animated").addClass("modal-in"), n.onOpen()) : (i && i.addClass("backdrop-in not-animated"), a.removeClass("modal-out").addClass("modal-in not-animated"), n.onOpen(), n.onOpened()), n
      }
    }, {
      key: "close",
      value: function (e) {
        var t = this,
          n = t.$el,
          r = t.$backdropEl,
          a = !0;
        if (void 0 !== e ? a = e : void 0 !== t.params.animate && (a = t.params.animate), !n || !n.hasClass("modal-in")) return gt.indexOf(t) >= 0 && gt.splice(gt.indexOf(t), 1), t;
        if (r) {
          var o = !0;
          "popup" === t.type && t.$el.prevAll(".popup.modal-in").each((function (e, n) {
            var r = n.f7Modal;
            r && r.params.closeByBackdropClick && r.params.backdrop && r.backdropEl === t.backdropEl && (o = !1)
          })), o && (r[a ? "removeClass" : "addClass"]("not-animated"), r.removeClass("backdrop-in"))
        }

        function i() {
          n.hasClass("modal-out") ? t.onClosed() : n.hasClass("modal-in") && t.onOpened()
        }
        return n[a ? "removeClass" : "addClass"]("not-animated"), a ? (n.animationEnd((function () {
          i()
        })), n.transitionEnd((function () {
          i()
        })), n.removeClass("modal-in").addClass("modal-out"), t.onClose()) : (n.addClass("not-animated").removeClass("modal-in").addClass("modal-out"), t.onClose(), t.onClosed()), "dialog" === t.type && 0 !== gt.length && gt.shift().open(), t
      }
    }, {
      key: "destroy",
      value: function () {
        this.destroyed || (this.emit("local::beforeDestroy modalBeforeDestroy ".concat(this.type, "BeforeDestroy"), this), this.$el && (this.$el.trigger("modal:beforedestroy ".concat(this.type.toLowerCase(), ":beforedestroy")), this.$el.length && this.$el[0].f7Modal && delete this.$el[0].f7Modal), E.deleteProps(this), this.destroyed = !0)
      }
    }]) && ut(n.prototype, r), a && ut(n, a), t
  }(L);

  function bt(e) {
    return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function yt(e, t) {
    return !t || "object" !== bt(t) && "function" != typeof t ? wt(e) : t
  }

  function kt(e) {
    return (kt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function wt(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function Ct(e, t) {
    return (Ct = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var Mt = function (e) {
      function t(e, n) {
        var r;
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var a, o, i = E.extend({
            backdrop: !0,
            closeByBackdropClick: !0,
            on: {}
          }, n),
          s = wt(r = yt(this, kt(t).call(this, e, i)));
        if (s.params = i, (a = s.params.el ? g(s.params.el) : g(s.params.content)) && a.length > 0 && a[0].f7Modal) return yt(r, a[0].f7Modal);
        if (0 === a.length) return yt(r, s.destroy());

        function l(e) {
          s && !s.destroyed && o && e.target === o[0] && s.close()
        }
        return s.params.backdrop && 0 === (o = e.root.children(".custom-modal-backdrop")).length && (o = g('<div class="custom-modal-backdrop"></div>'), e.root.append(o)), s.on("customModalOpened", (function () {
          s.params.closeByBackdropClick && s.params.backdrop && e.on("click", l)
        })), s.on("customModalClose", (function () {
          s.params.closeByBackdropClick && s.params.backdrop && e.off("click", l)
        })), E.extend(s, {
          app: e,
          $el: a,
          el: a[0],
          $backdropEl: o,
          backdropEl: o && o[0],
          type: "customModal"
        }), a[0].f7Modal = s, yt(r, s)
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Ct(e, t)
      }(t, e), t
    }(mt),
    xt = {
      name: "modal",
      static: {
        Modal: mt,
        CustomModal: Mt
      },
      create: function () {
        var e = this;
        e.customModal = {
          create: function (t) {
            return new Mt(e, t)
          }
        }
      },
      params: {
        modal: {
          moveToRoot: !0,
          queueDialogs: !0
        }
      }
    };
  ee.use([ie, se, le, ce, ue, pe, Ye, Le, qe, Ze, Je, Xe, et, nt, rt, lt, xt]);
  var St = ee,
    Et = {
      ignoreTypes: ["checkbox", "button", "submit", "range", "radio", "image"],
      createTextareaResizableShadow: function () {
        var e = g(o.createElement("textarea"));
        e.addClass("textarea-resizable-shadow"), e.prop({
          disabled: !0,
          readonly: !0
        }), Et.textareaResizableShadow = e
      },
      textareaResizableShadow: void 0,
      resizeTextarea: function (e) {
        var t = g(e);
        Et.textareaResizableShadow || Et.createTextareaResizableShadow();
        var n = Et.textareaResizableShadow;
        if (t.length && t.hasClass("resizable")) {
          0 === Et.textareaResizableShadow.parents().length && this.root.append(n);
          var r = i.getComputedStyle(t[0]);
          "padding-top padding-bottom padding-left padding-right margin-left margin-right margin-top margin-bottom width font-size font-family font-style font-weight line-height font-variant text-transform letter-spacing border box-sizing display".split(" ").forEach((function (e) {
            var t = r[e];
            "font-size line-height letter-spacing width".split(" ").indexOf(e) >= 0 && (t = t.replace(",", ".")), n.css(e, t)
          }));
          var a = t[0].clientHeight;
          n.val("");
          var o = n[0].scrollHeight;
          n.val(t.val()), n.css("height", 0);
          var s = n[0].scrollHeight;
          a !== s && (s > o ? t.css("height", "".concat(s, "px")) : s < a && t.css("height", ""), (s > o || s < a) && (t.trigger("textarea:resize", {
            initialHeight: o,
            currentHeight: a,
            scrollHeight: s
          }), this.emit("textareaResize", {
            initialHeight: o,
            currentHeight: a,
            scrollHeight: s
          })))
        }
      },
      validate: function (e) {
        var t = g(e);
        if (!t.length) return !0;
        var n = t.parents(".item-input"),
          r = t.parents(".input"),
          a = t[0].validity,
          o = t.dataset().errorMessage || t[0].validationMessage || "";
        if (!a) return !0;
        if (!a.valid) {
          var i = t.nextAll(".item-input-error-message, .input-error-message");
          return o && (0 === i.length && (i = g('<div class="'.concat(r.length ? "input-error-message" : "item-input-error-message", '"></div>'))).insertAfter(t), i.text(o)), i.length > 0 && (n.addClass("item-input-with-error-message"), r.addClass("input-with-error-message")), n.addClass("item-input-invalid"), r.addClass("input-invalid"), t.addClass("input-invalid"), !1
        }
        return n.removeClass("item-input-invalid item-input-with-error-message"), r.removeClass("input-invalid input-with-error-message"), t.removeClass("input-invalid"), !0
      },
      validateInputs: function (e) {
        var t = this;
        return g(e).find("input, textarea, select").toArray().map((function (e) {
          return t.input.validate(e)
        })).indexOf(!1) < 0
      },
      focus: function (e) {
        var t = g(e),
          n = t.attr("type");
        Et.ignoreTypes.indexOf(n) >= 0 || (t.parents(".item-input").addClass("item-input-focused"), t.parents(".input").addClass("input-focused"), t.addClass("input-focused"))
      },
      blur: function (e) {
        var t = g(e);
        t.parents(".item-input").removeClass("item-input-focused"), t.parents(".input").removeClass("input-focused"), t.removeClass("input-focused")
      },
      checkEmptyState: function (e) {
        var t = g(e);
        if (t.is("input, select, textarea, .item-input [contenteditable]") || (t = t.find("input, select, textarea, .item-input [contenteditable]").eq(0)), t.length) {
          var n;
          n = t[0].hasAttribute("contenteditable") ? t.find(".text-editor-placeholder").length ? "" : t.html() : t.val();
          var r = t.parents(".item-input"),
            a = t.parents(".input");
          n && "string" == typeof n && "" !== n.trim() || Array.isArray(n) && n.length > 0 ? (r.addClass("item-input-with-value"), a.addClass("input-with-value"), t.addClass("input-with-value"), t.trigger("input:notempty"), this.emit("inputNotEmpty", t[0])) : (r.removeClass("item-input-with-value"), a.removeClass("input-with-value"), t.removeClass("input-with-value"), t.trigger("input:empty"), this.emit("inputEmpty", t[0]))
        }
      },
      scrollIntoView: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = g(e),
          o = a.parents(".page-content, .panel, .card-expandable .card-content").eq(0);
        if (!o.length) return !1;
        var i = o[0].offsetHeight,
          s = o[0].scrollTop,
          l = parseInt(o.css("padding-top"), 10),
          c = parseInt(o.css("padding-bottom"), 10),
          u = o.offset().top - s,
          p = a.offset().top - u,
          d = a[0].offsetHeight,
          f = p + s - l,
          h = p + s - i + c + d,
          v = f + (h - f) / 2;
        return s > f ? (o.scrollTop(n ? v : f, t), !0) : s < h ? (o.scrollTop(n ? v : h, t), !0) : (r && o.scrollTop(n ? v : h, t), !1)
      },
      init: function () {
        var e = this;
        Et.createTextareaResizableShadow(), g(o).on("click", ".input-clear-button", (function () {
          var t = g(this).siblings("input, textarea").eq(0),
            n = t.val();
          t.val("").trigger("input change").focus().trigger("input:clear", n), e.emit("inputClear", n)
        })), g(o).on("mousedown", ".input-clear-button", (function (e) {
          e.preventDefault()
        })), g(o).on("change input", "input, textarea, select, .item-input [contenteditable]", (function () {
          var t = g(this),
            n = t.attr("type"),
            r = t[0].nodeName.toLowerCase(),
            a = t[0].hasAttribute("contenteditable");
          Et.ignoreTypes.indexOf(n) >= 0 || (e.input.checkEmptyState(t), a || (null !== t.attr("data-validate-on-blur") || !t.dataset().validate && null === t.attr("validate") || e.input.validate(t), "textarea" === r && t.hasClass("resizable") && e.input.resizeTextarea(t)))
        }), !0), g(o).on("focus", "input, textarea, select, .item-input [contenteditable]", (function () {
          var t = this;
          e.params.input.scrollIntoViewOnFocus && (N.android ? g(i).once("resize", (function () {
            o && o.activeElement === t && e.input.scrollIntoView(t, e.params.input.scrollIntoViewDuration, e.params.input.scrollIntoViewCentered, e.params.input.scrollIntoViewAlways)
          })) : e.input.scrollIntoView(t, e.params.input.scrollIntoViewDuration, e.params.input.scrollIntoViewCentered, e.params.input.scrollIntoViewAlways)), e.input.focus(t)
        }), !0), g(o).on("blur", "input, textarea, select, .item-input [contenteditable]", (function () {
          var t = g(this),
            n = t[0].nodeName.toLowerCase();
          e.input.blur(t), (t.dataset().validate || null !== t.attr("validate") || null !== t.attr("data-validate-on-blur")) && e.input.validate(t), "textarea" === n && t.hasClass("resizable") && Et.textareaResizableShadow && Et.textareaResizableShadow.remove()
        }), !0), g(o).on("invalid", "input, textarea, select", (function (t) {
          var n = g(this);
          null !== n.attr("data-validate-on-blur") || !n.dataset().validate && null === n.attr("validate") || (t.preventDefault(), e.input.validate(n))
        }), !0)
      }
    },
    Tt = {
      name: "input",
      params: {
        input: {
          scrollIntoViewOnFocus: N.android,
          scrollIntoViewCentered: !1,
          scrollIntoViewDuration: 0,
          scrollIntoViewAlways: !1
        }
      },
      create: function () {
        E.extend(this, {
          input: {
            scrollIntoView: Et.scrollIntoView.bind(this),
            focus: Et.focus.bind(this),
            blur: Et.blur.bind(this),
            validate: Et.validate.bind(this),
            validateInputs: Et.validateInputs.bind(this),
            checkEmptyState: Et.checkEmptyState.bind(this),
            resizeTextarea: Et.resizeTextarea.bind(this),
            init: Et.init.bind(this)
          }
        })
      },
      on: {
        init: function () {
          this.input.init()
        },
        tabMounted: function (e) {
          var t = this,
            n = g(e);
          n.find(".item-input, .input").each((function (e, n) {
            g(n).find("input, select, textarea, [contenteditable]").each((function (e, n) {
              var r = g(n);
              Et.ignoreTypes.indexOf(r.attr("type")) >= 0 || t.input.checkEmptyState(r)
            }))
          })), n.find("textarea.resizable").each((function (e, n) {
            t.input.resizeTextarea(n)
          }))
        },
        pageInit: function (e) {
          var t = this,
            n = e.$el;
          n.find(".item-input, .input").each((function (e, n) {
            g(n).find("input, select, textarea, [contenteditable]").each((function (e, n) {
              var r = g(n);
              Et.ignoreTypes.indexOf(r.attr("type")) >= 0 || t.input.checkEmptyState(r)
            }))
          })), n.find("textarea.resizable").each((function (e, n) {
            t.input.resizeTextarea(n)
          }))
        },
        "panelBreakpoint panelCollapsedBreakpoint panelResize panelOpen panelSwipeOpen resize viewMasterDetailBreakpoint": function (e) {
          var t = this;
          e && e.$el ? e.$el.find("textarea.resizable").each((function (e, n) {
            t.input.resizeTextarea(n)
          })) : g("textarea.resizable").each((function (e, n) {
            t.input.resizeTextarea(n)
          }))
        }
      }
    };

  function Nt(e) {
    return (Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function Ot(e, t) {
    return !t || "object" !== Nt(t) && "function" != typeof t ? jt(e) : t
  }

  function Dt(e) {
    return (Dt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function jt(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function At(e, t) {
    return (At = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var It = function (e) {
    function t(e, n) {
      var r;
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var a = E.extend({
        title: e.params.dialog.title,
        text: void 0,
        content: "",
        buttons: [],
        verticalButtons: !1,
        onClick: void 0,
        cssClass: void 0,
        destroyOnClose: !1,
        on: {}
      }, n);
      void 0 === a.closeByBackdropClick && (a.closeByBackdropClick = e.params.dialog.closeByBackdropClick), void 0 === a.backdrop && (a.backdrop = e.params.dialog.backdrop);
      var i, s, l, c = jt(r = Ot(this, Dt(t).call(this, e, a))),
        u = a.title,
        p = a.text,
        d = a.content,
        f = a.buttons,
        h = a.verticalButtons,
        v = a.cssClass,
        m = a.backdrop;
      if (c.params = a, c.params.el) i = g(c.params.el);
      else {
        var b = ["dialog"];
        0 === f.length && b.push("dialog-no-buttons"), f.length > 0 && b.push("dialog-buttons-".concat(f.length)), h && b.push("dialog-buttons-vertical"), v && b.push(v);
        var y = "";
        f.length > 0 && (y = '\n          <div class="dialog-buttons">\n            '.concat(f.map((function (e) {
          return '\n              <span class="dialog-button'.concat(e.bold ? " dialog-button-bold" : "").concat(e.color ? " color-".concat(e.color) : "").concat(e.cssClass ? " ".concat(e.cssClass) : "", '">').concat(e.text, "</span>\n            ")
        })).join(""), "\n          </div>\n        "));
        var k = '\n        <div class="'.concat(b.join(" "), '">\n          <div class="dialog-inner">\n            ').concat(u ? '<div class="dialog-title">'.concat(u, "</div>") : "", "\n            ").concat(p ? '<div class="dialog-text">'.concat(p, "</div>") : "", "\n            ").concat(d, "\n          </div>\n          ").concat(y, "\n        </div>\n      ");
        i = g(k)
      }
      if (i && i.length > 0 && i[0].f7Modal) return Ot(r, i[0].f7Modal);
      if (0 === i.length) return Ot(r, c.destroy());

      function w(e) {
        var t = g(this).index(),
          n = f[t];
        n.onClick && n.onClick(c, e), c.params.onClick && c.params.onClick(c, t), !1 !== n.close && c.close()
      }

      function C(e) {
        var t = e.keyCode;
        f.forEach((function (n, r) {
          n.keyCodes && n.keyCodes.indexOf(t) >= 0 && (o.activeElement && o.activeElement.blur(), n.onClick && n.onClick(c, e), c.params.onClick && c.params.onClick(c, r), !1 !== n.close && c.close())
        }))
      }

      function M(e) {
        var t = e.target;
        0 === g(t).closest(c.el).length && c.params.closeByBackdropClick && c.backdropEl && c.backdropEl === t && c.close()
      }
      return m && 0 === (s = e.root.children(".dialog-backdrop")).length && (s = g('<div class="dialog-backdrop"></div>'), e.root.append(s)), f && f.length > 0 && (c.on("open", (function () {
        i.find(".dialog-button").each((function (e, t) {
          f[e].keyCodes && (l = !0), g(t).on("click", w)
        })), !l || e.device.ios || e.device.android || e.device.cordova || g(o).on("keydown", C)
      })), c.on("close", (function () {
        i.find(".dialog-button").each((function (e, t) {
          g(t).off("click", w)
        })), !l || e.device.ios || e.device.android || e.device.cordova || g(o).off("keydown", C), l = !1
      }))), E.extend(c, {
        app: e,
        $el: i,
        el: i[0],
        $backdropEl: s,
        backdropEl: s && s[0],
        type: "dialog",
        setProgress: function (t, n) {
          return e.progressbar.set(i.find(".progressbar"), t, n), c
        },
        setText: function (e) {
          var t = i.find(".dialog-text");
          return 0 === t.length && (t = g('<div class="dialog-text"></div>'), void 0 !== u ? t.insertAfter(i.find(".dialog-title")) : i.find(".dialog-inner").prepend(t)), t.html(e), c.params.text = e, c
        },
        setTitle: function (e) {
          var t = i.find(".dialog-title");
          return 0 === t.length && (t = g('<div class="dialog-title"></div>'), i.find(".dialog-inner").prepend(t)), t.html(e), c.params.title = e, c
        }
      }), c.on("opened", (function () {
        c.params.closeByBackdropClick && e.on("click", M)
      })), c.on("close", (function () {
        c.params.closeByBackdropClick && e.off("click", M)
      })), i[0].f7Modal = c, c.params.destroyOnClose && c.once("closed", (function () {
        setTimeout((function () {
          c.destroy()
        }), 0)
      })), Ot(r, c)
    }
    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && At(e, t)
    }(t, e), t
  }(mt);

  function Bt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function Pt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Bt(n, !0).forEach((function (t) {
        $t(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bt(n).forEach((function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function $t(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var Lt = {
      name: "dialog",
      params: {
        dialog: {
          title: void 0,
          buttonOk: "OK",
          buttonCancel: "Cancel",
          usernamePlaceholder: "Username",
          passwordPlaceholder: "Password",
          preloaderTitle: "Loading... ",
          progressTitle: "Loading... ",
          backdrop: !0,
          closeByBackdropClick: !1,
          destroyPredefinedDialogs: !0,
          keyboardActions: !0,
          autoFocus: !0
        }
      },
      static: {
        Dialog: It
      },
      create: function () {
        var e = this;

        function t() {
          return e.params.dialog.title || e.name
        }
        var n = e.params.dialog.destroyPredefinedDialogs,
          r = e.params.dialog.keyboardActions,
          a = e.params.dialog.autoFocus ? {
            on: {
              opened: function (e) {
                e.$el.find("input").eq(0).focus()
              }
            }
          } : {};
        e.dialog = E.extend(Q({
          app: e,
          constructor: It,
          defaultSelector: ".dialog.modal-in"
        }), {
          alert: function () {
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
            var s = o[0],
              l = o[1],
              c = o[2];
            return 2 === o.length && "function" == typeof o[1] && (s = o[0], c = o[1], l = o[2]), new It(e, {
              title: void 0 === l ? t() : l,
              text: s,
              buttons: [{
                text: e.params.dialog.buttonOk,
                bold: !0,
                onClick: c,
                keyCodes: r ? [13, 27] : null
              }],
              destroyOnClose: n
            }).open()
          },
          prompt: function () {
            for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
            var l = i[0],
              c = i[1],
              u = i[2],
              p = i[3],
              d = i[4];
            return "function" == typeof i[1] && (l = i[0], u = i[1], p = i[2], d = i[3], c = i[4]), d = null == d ? "" : d, new It(e, Pt({
              title: void 0 === c ? t() : c,
              text: l,
              content: '<div class="dialog-input-field input"><input type="text" class="dialog-input" value="'.concat(d, '"></div>'),
              buttons: [{
                text: e.params.dialog.buttonCancel,
                keyCodes: r ? [27] : null,
                color: "aurora" === e.theme ? "gray" : null
              }, {
                text: e.params.dialog.buttonOk,
                bold: !0,
                keyCodes: r ? [13] : null
              }],
              onClick: function (e, t) {
                var n = e.$el.find(".dialog-input").val();
                0 === t && p && p(n), 1 === t && u && u(n)
              },
              destroyOnClose: n
            }, a)).open()
          },
          confirm: function () {
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
            var s = o[0],
              l = o[1],
              c = o[2],
              u = o[3];
            return "function" == typeof o[1] && (s = o[0], c = o[1], u = o[2], l = o[3]), new It(e, {
              title: void 0 === l ? t() : l,
              text: s,
              buttons: [{
                text: e.params.dialog.buttonCancel,
                onClick: u,
                keyCodes: r ? [27] : null,
                color: "aurora" === e.theme ? "gray" : null
              }, {
                text: e.params.dialog.buttonOk,
                bold: !0,
                onClick: c,
                keyCodes: r ? [13] : null
              }],
              destroyOnClose: n
            }).open()
          },
          login: function () {
            for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
            var l = i[0],
              c = i[1],
              u = i[2],
              p = i[3];
            return "function" == typeof i[1] && (l = i[0], u = i[1], p = i[2], c = i[3]), new It(e, Pt({
              title: void 0 === c ? t() : c,
              text: l,
              content: '\n              <div class="dialog-input-field dialog-input-double input">\n                <input type="text" name="dialog-username" placeholder="'.concat(e.params.dialog.usernamePlaceholder, '" class="dialog-input">\n              </div>\n              <div class="dialog-input-field dialog-input-double input">\n                <input type="password" name="dialog-password" placeholder="').concat(e.params.dialog.passwordPlaceholder, '" class="dialog-input">\n              </div>'),
              buttons: [{
                text: e.params.dialog.buttonCancel,
                keyCodes: r ? [27] : null,
                color: "aurora" === e.theme ? "gray" : null
              }, {
                text: e.params.dialog.buttonOk,
                bold: !0,
                keyCodes: r ? [13] : null
              }],
              onClick: function (e, t) {
                var n = e.$el.find('[name="dialog-username"]').val(),
                  r = e.$el.find('[name="dialog-password"]').val();
                0 === t && p && p(n, r), 1 === t && u && u(n, r)
              },
              destroyOnClose: n
            }, a)).open()
          },
          password: function () {
            for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
            var l = i[0],
              c = i[1],
              u = i[2],
              p = i[3];
            return "function" == typeof i[1] && (l = i[0], u = i[1], p = i[2], c = i[3]), new It(e, Pt({
              title: void 0 === c ? t() : c,
              text: l,
              content: '\n              <div class="dialog-input-field input">\n                <input type="password" name="dialog-password" placeholder="'.concat(e.params.dialog.passwordPlaceholder, '" class="dialog-input">\n              </div>'),
              buttons: [{
                text: e.params.dialog.buttonCancel,
                keyCodes: r ? [27] : null,
                color: "aurora" === e.theme ? "gray" : null
              }, {
                text: e.params.dialog.buttonOk,
                bold: !0,
                keyCodes: r ? [13] : null
              }],
              onClick: function (e, t) {
                var n = e.$el.find('[name="dialog-password"]').val();
                0 === t && p && p(n), 1 === t && u && u(n)
              },
              destroyOnClose: n
            }, a)).open()
          },
          preloader: function (t, r) {
            var a = E["".concat(e.theme, "PreloaderContent")] || "";
            return new It(e, {
              title: null == t ? e.params.dialog.preloaderTitle : t,
              content: '<div class="preloader'.concat(r ? " color-".concat(r) : "", '">').concat(a, "</div>"),
              cssClass: "dialog-preloader",
              destroyOnClose: n
            }).open()
          },
          progress: function () {
            for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
            var o = r[0],
              i = r[1],
              s = r[2];
            2 === r.length ? "number" == typeof r[0] ? (i = r[0], s = r[1], o = r[2]) : "string" == typeof r[0] && "string" == typeof r[1] && (o = r[0], s = r[1], i = r[2]) : 1 === r.length && "number" == typeof r[0] && (i = r[0], o = r[1], s = r[2]);
            var l = void 0 === i,
              c = new It(e, {
                title: void 0 === o ? e.params.dialog.progressTitle : o,
                cssClass: "dialog-progress",
                content: '\n              <div class="progressbar'.concat(l ? "-infinite" : "").concat(s ? " color-".concat(s) : "", '">\n                ').concat(l ? "" : "<span></span>", "\n              </div>\n            "),
                destroyOnClose: n
              });
            return l || c.setProgress(i), c.open()
          }
        })
      }
    },
    _t = {
      render: function (e) {
        var t = e.params,
          n = t.sliderLabel,
          r = t.sliderValue,
          a = t.sliderValueEditable,
          o = t.alphaLabelText;
        return '\n      <div class="color-picker-module color-picker-module-alpha-slider">\n        <div class="color-picker-slider-wrap">\n          '.concat(n ? '\n            <div class="color-picker-slider-label">'.concat(o, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-slider color-picker-slider-alpha"></div>\n          ').concat(r ? '\n            <div class="color-picker-slider-value">\n              '.concat(a ? '\n                <input type="number" step="0.01" min="0" max="1" class="color-picker-value-alpha">\n              ' : '\n                <span class="color-picker-value-alpha"></span>\n              ', "\n            </div>\n          ") : "", "\n        </div>\n      </div>\n    ")
      },
      init: function (e) {
        function t(t) {
          var n = e.value.alpha,
            r = parseFloat(t.target.value);
          Number.isNaN(r) ? t.target.value = n : (r = Math.max(0, Math.min(1, r)), e.setValue({
            alpha: r
          }))
        }
        e.alphaRangeSlider = e.app.range.create({
          el: e.$el.find(".color-picker-slider-alpha"),
          min: 0,
          max: 1,
          step: .01,
          value: 1,
          on: {
            change: function (t, n) {
              var r = Math.floor(100 * n) / 100;
              e.setValue({
                alpha: r
              })
            }
          }
        }), e.$el.on("change", ".color-picker-module-alpha-slider input", t), e.destroyAlphaSliderEvents = function () {
          e.$el.off("change", ".color-picker-module-alpha-slider input", t)
        }
      },
      update: function (e) {
        var t = e.value,
          n = e.params,
          r = n.sliderValue,
          a = n.sliderValueEditable,
          o = t.alpha;
        e.alphaRangeSlider.value = o, e.alphaRangeSlider.layout(), r && a ? e.$el.find("input.color-picker-value-alpha").val(o) : e.$el.find("span.color-picker-value-alpha").text(o)
      },
      destroy: function (e) {
        e.alphaRangeSlider && e.alphaRangeSlider.destroy && e.alphaRangeSlider.destroy(), delete e.alphaRangeSlider, e.destroyAlphaSliderEvents && e.destroyAlphaSliderEvents(), delete e.destroyAlphaSliderEvents
      }
    },
    zt = {
      render: function () {
        return '\n      <div class="color-picker-module color-picker-module-current-color">\n        <div class="color-picker-current-color"></div>\n      </div>\n    '
      },
      update: function (e) {
        e.$el.find(".color-picker-module-current-color .color-picker-current-color").css("background-color", e.value.hex)
      }
    },
    Rt = {
      render: function (e) {
        var t = e.params,
          n = t.hexLabel,
          r = t.hexLabelText,
          a = t.hexValueEditable;
        return '\n      <div class="color-picker-module color-picker-module-hex">\n        <div class="color-picker-hex-wrap">\n          '.concat(n ? '\n            <div class="color-picker-hex-label">'.concat(r, "</div>\n          ") : "", '\n          <div class="color-picker-hex-value">\n            ').concat(a ? '\n              <input type="text" class="color-picker-value-hex">\n            ' : '\n              <span class="color-picker-value-hex"></span>\n            ', "\n          </div>\n        </div>\n      </div>\n    ")
      },
      init: function (e) {
        function t(t) {
          var n = e.value.hex,
            r = t.target.value.replace(/#/g, "");
          if (Number.isNaN(r) || !r || 3 !== r.length && 6 !== r.length) t.target.value = n;
          else {
            var a = parseInt(r, 16);
            a > parseInt("ffffff", 16) && (r = "fff"), a < 0 && (r = "000"), e.setValue({
              hex: r
            })
          }
        }
        e.$el.on("change", ".color-picker-module-hex input", t), e.destroyHexEvents = function () {
          e.$el.off("change", ".color-picker-module-hex input", t)
        }
      },
      update: function (e) {
        var t = e.value,
          n = e.params.hexValueEditable,
          r = t.hex;
        n ? e.$el.find("input.color-picker-value-hex").val(r) : e.$el.find("span.color-picker-value-hex").text(r)
      },
      destroy: function (e) {
        e.destroyHexEvents && e.destroyHexEvents(), delete e.destroyHexEvents
      }
    };

  function Ht(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var Ut = {
      render: function (e) {
        var t = e.params,
          n = t.sliderLabel,
          r = t.sliderValue,
          a = t.sliderValueEditable,
          o = t.hueLabelText,
          i = t.saturationLabelText,
          s = t.brightnessLabelText;
        return '\n      <div class="color-picker-module color-picker-module-hsb-sliders">\n        <div class="color-picker-slider-wrap">\n          '.concat(n ? '\n            <div class="color-picker-slider-label">'.concat(o, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-slider color-picker-slider-hue"></div>\n          ').concat(r ? '\n            <div class="color-picker-slider-value">\n              '.concat(a ? '\n                <input type="number" step="0.1" min="0" max="360" class="color-picker-value-hue" data-color-index="0">\n              ' : '\n                <span class="color-picker-value-hue"></span>\n              ', "\n            </div>\n          ") : "", '\n        </div>\n        <div class="color-picker-slider-wrap">\n          ').concat(n ? '\n            <div class="color-picker-slider-label">'.concat(i, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-slider color-picker-slider-saturation"></div>\n          ').concat(r ? '\n            <div class="color-picker-slider-value">\n              '.concat(a ? '\n                <input type="number" step="0.1" min="0" max="100" class="color-picker-value-saturation" data-color-index="1">\n              ' : '\n                <span class="color-picker-value-saturation"></span>\n              ', "\n            </div>\n          ") : "", '\n        </div>\n        <div class="color-picker-slider-wrap">\n          ').concat(n ? '\n            <div class="color-picker-slider-label">'.concat(s, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-slider color-picker-slider-brightness"></div>\n          ').concat(r ? '\n            <div class="color-picker-slider-value">\n              '.concat(a ? '\n                <input type="number" step="0.1" min="0" max="100" class="color-picker-value-brightness" data-color-index="2">\n              ' : '\n                <span class="color-picker-value-brightness"></span>\n              ', "\n            </div>\n          ") : "", "\n        </div>\n      </div>\n    ")
      },
      init: function (e) {
        function t(t) {
          var n = Ht(e.value.hsb),
            r = parseInt(g(t.target).attr("data-color-index"), 10),
            a = parseFloat(t.target.value);
          Number.isNaN(a) ? t.target.value = n[r] : (a = 0 === r ? Math.max(0, Math.min(360, a)) : Math.max(0, Math.min(100, a)) / 100, n[r] = a, e.setValue({
            hsb: n
          }))
        }
        e.hueRangeSlider = e.app.range.create({
          el: e.$el.find(".color-picker-slider-hue"),
          min: 0,
          max: 360,
          step: .1,
          value: 0,
          on: {
            change: function (t, n) {
              e.setValue({
                hue: n
              })
            }
          }
        }), e.saturationRangeSlider = e.app.range.create({
          el: e.$el.find(".color-picker-slider-saturation"),
          min: 0,
          max: 1,
          step: .001,
          value: 0,
          on: {
            change: function (t, n) {
              var r = Math.floor(1e3 * n) / 1e3;
              e.setValue({
                hsb: [e.value.hsb[0], r, e.value.hsb[2]]
              })
            }
          }
        }), e.brightnessRangeSlider = e.app.range.create({
          el: e.$el.find(".color-picker-slider-brightness"),
          min: 0,
          max: 1,
          step: .001,
          value: 0,
          on: {
            change: function (t, n) {
              var r = Math.floor(1e3 * n) / 1e3;
              e.setValue({
                hsb: [e.value.hsb[0], e.value.hsb[1], r]
              })
            }
          }
        }), e.$el.on("change", ".color-picker-module-hsb-sliders input", t), e.destroyHsbSlidersEvents = function () {
          e.$el.off("change", ".color-picker-module-hsb-sliders input", t)
        }
      },
      update: function (e) {
        var t = e.app,
          n = e.value,
          r = e.params,
          a = r.sliderValue,
          o = r.sliderValueEditable,
          i = n.hsb,
          s = n.hue;
        e.hueRangeSlider.value = s, e.saturationRangeSlider.value = i[1], e.brightnessRangeSlider.value = i[2], e.hueRangeSlider.layout(), e.saturationRangeSlider.layout(), e.brightnessRangeSlider.layout();
        var l = E.colorHsbToHsl(i[0], i[1], 1),
          c = E.colorHsbToHsl(i[0], 0, 1),
          u = E.colorHsbToHsl(i[0], 1, 1),
          p = i[2];
        e.hueRangeSlider.$el[0].style.setProperty("--f7-range-knob-color", "hsl(".concat(s, ", 100%, 50%)")), e.saturationRangeSlider.$el[0].style.setProperty("--f7-range-knob-color", "hsl(".concat(l[0], ", ").concat(100 * l[1], "%, ").concat(100 * l[2], "%)")), e.brightnessRangeSlider.$el[0].style.setProperty("--f7-range-knob-color", "rgb(".concat(255 * p, ", ").concat(255 * p, ", ").concat(255 * p, ")")), e.saturationRangeSlider.$el.find(".range-bar").css("background-image", "linear-gradient(".concat(t.rtl ? "to left" : "to right", ", hsl(").concat(c[0], ", ").concat(100 * c[1], "%, ").concat(100 * c[2], "%), hsl(").concat(u[0], ", ").concat(100 * u[1], "%, ").concat(100 * u[2], "%))")), a && o ? (e.$el.find("input.color-picker-value-hue").val("".concat(s)), e.$el.find("input.color-picker-value-saturation").val("".concat(1e3 * i[1] / 10)), e.$el.find("input.color-picker-value-brightness").val("".concat(1e3 * i[2] / 10))) : a && (e.$el.find("span.color-picker-value-hue").text("".concat(s)), e.$el.find("span.color-picker-value-saturation").text("".concat(1e3 * i[1] / 10)), e.$el.find("span.color-picker-value-brightness").text("".concat(1e3 * i[2] / 10)))
      },
      destroy: function (e) {
        e.hueRangeSlider && e.hueRangeSlider.destroy && e.hueRangeSlider.destroy(), e.saturationRangeSlider && e.saturationRangeSlider.destroy && e.saturationRangeSlider.destroy(), e.brightnessRangeSlider && e.brightnessRangeSlider.destroy && e.brightnessRangeSlider.destroy(), delete e.hueRangeSlider, delete e.saturationRangeSlider, delete e.brightnessRangeSlider, e.destroyHsbSlidersEvents && e.destroyHsbSlidersEvents(), delete e.destroyHsbSlidersEvents
      }
    },
    Ft = {
      render: function (e) {
        var t = e.params,
          n = t.sliderLabel,
          r = t.sliderValue,
          a = t.sliderValueEditable,
          o = t.hueLabelText;
        return '\n      <div class="color-picker-module color-picker-module-hue-slider">\n        <div class="color-picker-slider-wrap">\n          '.concat(n ? '\n            <div class="color-picker-slider-label">'.concat(o, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-slider color-picker-slider-hue"></div>\n          ').concat(r ? '\n            <div class="color-picker-slider-value">\n              '.concat(a ? '\n                <input type="number" step="0.1" min="0" max="360" class="color-picker-value-hue">\n              ' : '\n                <span class="color-picker-value-hue"></span>\n              ', "\n            </div>\n          ") : "", "\n        </div>\n      </div>\n    ")
      },
      init: function (e) {
        e.hueRangeSlider = e.app.range.create({
          el: e.$el.find(".color-picker-slider-hue"),
          min: 0,
          max: 360,
          step: .1,
          value: 0,
          on: {
            change: function (t, n) {
              e.setValue({
                hue: n
              })
            }
          }
        })
      },
      update: function (e) {
        var t = e.value,
          n = e.params,
          r = n.sliderValue,
          a = n.sliderValueEditable,
          o = t.hue;
        e.hueRangeSlider.value = o, e.hueRangeSlider.layout(), e.hueRangeSlider.$el[0].style.setProperty("--f7-range-knob-color", "hsl(".concat(o, ", 100%, 50%)")), r && a ? e.$el.find("input.color-picker-value-hue").val("".concat(o)) : r && e.$el.find("span.color-picker-value-hue").text("".concat(o))
      },
      destroy: function (e) {
        e.hueRangeSlider && e.hueRangeSlider.destroy && e.hueRangeSlider.destroy(), delete e.hueRangeSlider
      }
    },
    Qt = {
      render: function (e) {
        var t = e.params,
          n = t.sliderLabel,
          r = t.sliderValue,
          a = t.sliderValueEditable,
          o = t.brightnessLabelText;
        return '\n      <div class="color-picker-module color-picker-module-brightness-slider">\n        <div class="color-picker-slider-wrap">\n          '.concat(n ? '\n            <div class="color-picker-slider-label">'.concat(o, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-slider color-picker-slider-brightness"></div>\n          ').concat(r ? '\n            <div class="color-picker-slider-value">\n              '.concat(a ? '\n                <input type="number" step="0.1" min="0" max="100" class="color-picker-value-brightness">\n              ' : '\n                <span class="color-picker-value-brightness"></span>\n              ', "\n            </div>\n          ") : "", "\n        </div>\n      </div>\n    ")
      },
      init: function (e) {
        e.brightnessRangeSlider = e.app.range.create({
          el: e.$el.find(".color-picker-slider-brightness"),
          min: 0,
          max: 1,
          step: .001,
          value: 0,
          on: {
            change: function (t, n) {
              var r = Math.floor(1e3 * n) / 1e3;
              e.setValue({
                hsb: [e.value.hsb[0], e.value.hsb[1], r]
              })
            }
          }
        })
      },
      update: function (e) {
        var t = e.value,
          n = e.app,
          r = e.params,
          a = r.sliderValue,
          o = r.sliderValueEditable,
          i = t.hsb;
        e.brightnessRangeSlider.value = i[2], e.brightnessRangeSlider.layout();
        var s = E.colorHsbToHsl(i[0], i[1], i[2]),
          l = E.colorHsbToHsl(i[0], i[1], 0),
          c = E.colorHsbToHsl(i[0], i[1], 1);
        e.brightnessRangeSlider.$el[0].style.setProperty("--f7-range-knob-color", "hsl(".concat(s[0], ", ").concat(100 * s[1], "%, ").concat(100 * s[2], "%)")), e.brightnessRangeSlider.$el.find(".range-bar").css("background-image", "linear-gradient(".concat(n.rtl ? "to left" : "to right", ", hsl(").concat(l[0], ", ").concat(100 * l[1], "%, ").concat(100 * l[2], "%), hsl(").concat(c[0], ", ").concat(100 * c[1], "%, ").concat(100 * c[2], "%))")), a && o ? e.$el.find("input.color-picker-value-brightness").val("".concat(1e3 * i[2] / 10)) : a && e.$el.find("span.color-picker-value-brightness").text("".concat(1e3 * i[2] / 10))
      },
      destroy: function (e) {
        e.brightnessRangeSlider && e.brightnessRangeSlider.destroy && e.brightnessRangeSlider.destroy(), delete e.brightnessRangeSlider
      }
    },
    Vt = {
      render: function (e) {
        return '\n      <div class="color-picker-module color-picker-module-palette">\n        <div class="color-picker-palette">\n          '.concat(e.params.palette.map((function (e) {
          if (Array.isArray(e)) {
            var t = '<div class="color-picker-palette-row">';
            return t += e.map((function (e) {
              return '\n                <div class="color-picker-palette-value" data-palette-color="'.concat(e, '" style="background-color: ').concat(e, '"></div>\n              ')
            })).join(""), t += "</div>"
          }
          return '\n              <div class="color-picker-palette-value" data-palette-color="'.concat(e, '" style="background-color: ').concat(e, '"></div>\n            ')
        })).join(""), "\n        </div>\n      </div>\n    ")
      },
      init: function (e) {
        function t(t) {
          var n = g(t.target).attr("data-palette-color");
          e.setValue({
            hex: n
          })
        }
        e.$el.on("click", ".color-picker-module-palette .color-picker-palette-value", t), e.destroyPaletteEvents = function () {
          e.$el.off("click", ".color-picker-module-hex input", t)
        }
      },
      destroy: function (e) {
        e.destroyPaletteEvents && e.destroyPaletteEvents(), delete e.destroyPaletteEvents
      }
    },
    Yt = {
      render: function () {
        return '\n      <div class="color-picker-module color-picker-module-initial-current-colors">\n        <div class="color-picker-initial-current-colors">\n          <div class="color-picker-initial-color"></div>\n          <div class="color-picker-current-color"></div>\n        </div>\n      </div>\n    '
      },
      init: function (e) {
        function t() {
          if (e.initialValue) {
            var t = e.initialValue,
              n = t.hex,
              r = t.alpha;
            e.setValue({
              hex: n,
              alpha: r
            })
          }
        }
        e.$el.on("click", ".color-picker-initial-color", t), e.destroyInitialCurrentEvents = function () {
          e.$el.off("click", ".color-picker-initial-color", t)
        }
      },
      update: function (e) {
        e.$el.find(".color-picker-module-initial-current-colors .color-picker-initial-color").css("background-color", e.initialValue.hex), e.$el.find(".color-picker-module-initial-current-colors .color-picker-current-color").css("background-color", e.value.hex)
      },
      destroy: function (e) {
        e.destroyInitialCurrentEvents && e.destroyInitialCurrentEvents(), delete e.destroyInitialCurrentEvents
      }
    };

  function qt(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var Wt = {
    render: function (e) {
      var t = e.params,
        n = t.barLabel,
        r = t.barValue,
        a = t.barValueEditable,
        o = t.redLabelText,
        i = t.greenLabelText,
        s = t.blueLabelText;
      return '\n      <div class="color-picker-module color-picker-module-rgb-bars">\n        <div class="color-picker-bar-wrap">\n          '.concat(n ? '\n            <div class="color-picker-bar-label">'.concat(o, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-bar color-picker-bar-red"></div>\n          ').concat(r ? '\n            <div class="color-picker-bar-value">\n              '.concat(a ? '\n                <input type="number" step="1" min="0" max="255" class="color-picker-value-bar-red" data-color-index="0">\n              ' : '\n                <span class="color-picker-value-bar-red"></span>\n              ', "\n            </div>\n          ") : "", '\n        </div>\n        <div class="color-picker-bar-wrap">\n          ').concat(n ? '\n            <div class="color-picker-bar-label">'.concat(i, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-bar color-picker-bar-green"></div>\n          ').concat(r ? '\n            <div class="color-picker-bar-value">\n              '.concat(a ? '\n                <input type="number" step="1" min="0" max="255" class="color-picker-value-bar-green" data-color-index="1">\n              ' : '\n                <span class="color-picker-value-bar-green"></span>\n              ', "\n            </div>\n          ") : "", '\n        </div>\n        <div class="color-picker-bar-wrap">\n          ').concat(n ? '\n            <div class="color-picker-bar-label">'.concat(s, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-bar color-picker-bar-blue"></div>\n          ').concat(r ? '\n            <div class="color-picker-bar-value">\n              '.concat(a ? '\n                <input type="number" step="1" min="0" max="255" class="color-picker-value-bar-blue" data-color-index="2">\n              ' : '\n                <span class="color-picker-value-bar-blue"></span>\n              ', "\n            </div>\n          ") : "", "\n        </div>\n      </div>\n    ")
    },
    init: function (e) {
      function t(t) {
        var n = qt(e.value.rgb),
          r = parseInt(g(t.target).attr("data-color-index"), 10),
          a = parseInt(t.target.value, 10);
        Number.isNaN(a) ? t.target.value = n[r] : (a = Math.max(0, Math.min(255, a)), n[r] = a, e.setValue({
          rgb: n
        }))
      }
      e.redBar = e.app.range.create({
        el: e.$el.find(".color-picker-bar-red"),
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        vertical: !0,
        on: {
          change: function (t, n) {
            e.setValue({
              rgb: [n, e.value.rgb[1], e.value.rgb[2]]
            })
          }
        }
      }), e.greenBar = e.app.range.create({
        el: e.$el.find(".color-picker-bar-green"),
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        vertical: !0,
        on: {
          change: function (t, n) {
            e.setValue({
              rgb: [e.value.rgb[0], n, e.value.rgb[2]]
            })
          }
        }
      }), e.blueBar = e.app.range.create({
        el: e.$el.find(".color-picker-bar-blue"),
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        vertical: !0,
        on: {
          change: function (t, n) {
            e.setValue({
              rgb: [e.value.rgb[0], e.value.rgb[1], n]
            })
          }
        }
      }), e.$el.on("change", ".color-picker-module-rgb-bars input", t), e.destroyRgbBarsEvents = function () {
        e.$el.off("change", ".color-picker-module-rgb-bars input", t)
      }
    },
    update: function (e) {
      var t = e.value,
        n = e.redBar,
        r = e.greenBar,
        a = e.blueBar,
        o = e.params,
        i = o.barValue,
        s = o.barValueEditable,
        l = t.rgb;
      n.value = l[0], r.value = l[1], a.value = l[2], n.layout(), r.layout(), a.layout(), n.$el.find(".range-bar").css("background-image", "linear-gradient(to top, rgb(0, ".concat(l[1], ", ").concat(l[2], "), rgb(255, ").concat(l[1], ", ").concat(l[2], "))")), r.$el.find(".range-bar").css("background-image", "linear-gradient(to top, rgb(".concat(l[0], ", 0, ").concat(l[2], "), rgb(").concat(l[0], ", 255, ").concat(l[2], "))")), a.$el.find(".range-bar").css("background-image", "linear-gradient(to top, rgb(".concat(l[0], ", ").concat(l[1], ", 0), rgb(").concat(l[0], ", ").concat(l[1], ", 255))")), i && s ? (e.$el.find("input.color-picker-value-bar-red").val(l[0]), e.$el.find("input.color-picker-value-bar-green").val(l[1]), e.$el.find("input.color-picker-value-bar-blue").val(l[2])) : i && (e.$el.find("span.color-picker-value-bar-red").text(l[0]), e.$el.find("span.color-picker-value-bar-green").text(l[1]), e.$el.find("span.color-picker-value-bar-blue").text(l[2]))
    },
    destroy: function (e) {
      e.redBar && e.redBar.destroy && e.redBar.destroy(), e.greenBar && e.greenBar.destroy && e.greenBar.destroy(), e.blueBar && e.blueBar.destroy && e.blueBar.destroy(), delete e.redBar, delete e.greenBar, delete e.blueBar, e.destroyRgbBarsEvents && e.destroyRgbBarsEvents(), delete e.destroyRgbBarsEvents
    }
  };

  function Zt(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var Gt = {
      render: function (e) {
        var t = e.params,
          n = t.sliderLabel,
          r = t.sliderValue,
          a = t.sliderValueEditable,
          o = t.redLabelText,
          i = t.greenLabelText,
          s = t.blueLabelText;
        return '\n      <div class="color-picker-module color-picker-module-rgb-sliders">\n        <div class="color-picker-slider-wrap">\n          '.concat(n ? '\n            <div class="color-picker-slider-label">'.concat(o, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-slider color-picker-slider-red"></div>\n          ').concat(r ? '\n            <div class="color-picker-slider-value">\n              '.concat(a ? '\n                <input type="number" step="1" min="0" max="255" class="color-picker-value-red" data-color-index="0">\n              ' : '\n                <span class="color-picker-value-red"></span>\n              ', "\n            </div>\n          ") : "", '\n        </div>\n        <div class="color-picker-slider-wrap">\n          ').concat(n ? '\n            <div class="color-picker-slider-label">'.concat(i, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-slider color-picker-slider-green"></div>\n          ').concat(r ? '\n            <div class="color-picker-slider-value">\n              '.concat(a ? '\n                <input type="number" step="1" min="0" max="255" class="color-picker-value-green" data-color-index="1">\n              ' : '\n                <span class="color-picker-value-green"></span>\n              ', "\n            </div>\n          ") : "", '\n        </div>\n        <div class="color-picker-slider-wrap">\n          ').concat(n ? '\n            <div class="color-picker-slider-label">'.concat(s, "</div>\n          ") : "", '\n          <div class="range-slider color-picker-slider color-picker-slider-blue"></div>\n          ').concat(r ? '\n            <div class="color-picker-slider-value">\n              '.concat(a ? '\n                <input type="number" step="1" min="0" max="255" class="color-picker-value-blue" data-color-index="2">\n              ' : '\n                <span class="color-picker-value-blue"></span>\n              ', "\n            </div>\n          ") : "", "\n        </div>\n      </div>\n    ")
      },
      init: function (e) {
        function t(t) {
          var n = Zt(e.value.rgb),
            r = parseInt(g(t.target).attr("data-color-index"), 10),
            a = parseInt(t.target.value, 10);
          Number.isNaN(a) ? t.target.value = n[r] : (a = Math.max(0, Math.min(255, a)), n[r] = a, e.setValue({
            rgb: n
          }))
        }
        e.redRangeSlider = e.app.range.create({
          el: e.$el.find(".color-picker-slider-red"),
          min: 0,
          max: 255,
          step: 1,
          value: 0,
          on: {
            change: function (t, n) {
              e.setValue({
                rgb: [n, e.value.rgb[1], e.value.rgb[2]]
              })
            }
          }
        }), e.greenRangeSlider = e.app.range.create({
          el: e.$el.find(".color-picker-slider-green"),
          min: 0,
          max: 255,
          step: 1,
          value: 0,
          on: {
            change: function (t, n) {
              e.setValue({
                rgb: [e.value.rgb[0], n, e.value.rgb[2]]
              })
            }
          }
        }), e.blueRangeSlider = e.app.range.create({
          el: e.$el.find(".color-picker-slider-blue"),
          min: 0,
          max: 255,
          step: 1,
          value: 0,
          on: {
            change: function (t, n) {
              e.setValue({
                rgb: [e.value.rgb[0], e.value.rgb[1], n]
              })
            }
          }
        }), e.$el.on("change", ".color-picker-module-rgb-sliders input", t), e.destroyRgbSlidersEvents = function () {
          e.$el.off("change", ".color-picker-module-rgb-sliders input", t)
        }
      },
      update: function (e) {
        var t = e.app,
          n = e.value,
          r = e.redRangeSlider,
          a = e.greenRangeSlider,
          o = e.blueRangeSlider,
          i = e.params,
          s = i.sliderValue,
          l = i.sliderValueEditable,
          c = n.rgb;
        r.value = c[0], a.value = c[1], o.value = c[2], r.layout(), a.layout(), o.layout(), r.$el[0].style.setProperty("--f7-range-knob-color", "rgb(".concat(c[0], ", ").concat(c[1], ", ").concat(c[2], ")")), a.$el[0].style.setProperty("--f7-range-knob-color", "rgb(".concat(c[0], ", ").concat(c[1], ", ").concat(c[2], ")")), o.$el[0].style.setProperty("--f7-range-knob-color", "rgb(".concat(c[0], ", ").concat(c[1], ", ").concat(c[2], ")"));
        var u = t.rtl ? "to left" : "to right";
        r.$el.find(".range-bar").css("background-image", "linear-gradient(".concat(u, ", rgb(0, ").concat(c[1], ", ").concat(c[2], "), rgb(255, ").concat(c[1], ", ").concat(c[2], "))")), a.$el.find(".range-bar").css("background-image", "linear-gradient(".concat(u, ", rgb(").concat(c[0], ", 0, ").concat(c[2], "), rgb(").concat(c[0], ", 255, ").concat(c[2], "))")), o.$el.find(".range-bar").css("background-image", "linear-gradient(".concat(u, ", rgb(").concat(c[0], ", ").concat(c[1], ", 0), rgb(").concat(c[0], ", ").concat(c[1], ", 255))")), s && l ? (e.$el.find("input.color-picker-value-red").val(c[0]), e.$el.find("input.color-picker-value-green").val(c[1]), e.$el.find("input.color-picker-value-blue").val(c[2])) : s && (e.$el.find("span.color-picker-value-red").text(c[0]), e.$el.find("span.color-picker-value-green").text(c[1]), e.$el.find("span.color-picker-value-blue").text(c[2]))
      },
      destroy: function (e) {
        e.redRangeSlider && e.redRangeSlider.destroy && e.redRangeSlider.destroy(), e.greenRangeSlider && e.greenRangeSlider.destroy && e.greenRangeSlider.destroy(), e.blueRangeSlider && e.blueRangeSlider.destroy && e.blueRangeSlider.destroy(), delete e.redRangeSlider, delete e.greenRangeSlider, delete e.blueRangeSlider, e.destroyRgbSlidersEvents && e.destroyRgbSlidersEvents(), delete e.destroyRgbSlidersEvents
      }
    },
    Jt = {
      render: function () {
        return '\n      <div class="color-picker-module color-picker-module-sb-spectrum">\n        <div class="color-picker-sb-spectrum" style="background-color: hsl(0, 100%, 50%)">\n          <div class="color-picker-sb-spectrum-handle"></div>\n        </div>\n      </div>\n    '
      },
      init: function (e) {
        var t, n, r, a, o, i, s, l, c, u = e.app,
          p = e.$el;

        function d(t, n) {
          var r = (t - s.left) / s.width,
            a = (n - s.top) / s.height;
          r = Math.max(0, Math.min(1, r)), a = 1 - Math.max(0, Math.min(1, a)), e.setValue({
            hsb: [e.value.hue, r, a]
          })
        }

        function f(e) {
          if (!n && !t) {
            r = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, o = r, a = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, i = a;
            var u = g(e.target);
            (c = u.closest(".color-picker-sb-spectrum-handle").length > 0) || (l = u.closest(".color-picker-sb-spectrum").length > 0), l && (s = p.find(".color-picker-sb-spectrum")[0].getBoundingClientRect(), d(r, a)), (c || l) && p.find(".color-picker-sb-spectrum-handle").addClass("color-picker-sb-spectrum-handle-pressed")
          }
        }

        function h(e) {
          (l || c) && (o = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, i = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, e.preventDefault(), n || (n = !0, c && (s = p.find(".color-picker-sb-spectrum")[0].getBoundingClientRect())), (l || c) && d(o, i))
        }

        function v() {
          n = !1, (l || c) && p.find(".color-picker-sb-spectrum-handle").removeClass("color-picker-sb-spectrum-handle-pressed"), l = !1, c = !1
        }

        function m() {
          e.modules["sb-spectrum"].update(e)
        }
        var b = !("touchstart" !== u.touchEvents.start || !u.support.passiveListener) && {
          passive: !0,
          capture: !1
        };
        e.$el.on(u.touchEvents.start, f, b), u.on("touchmove:active", h), u.on("touchend:passive", v), u.on("resize", m), e.destroySpectrumEvents = function () {
          e.$el.off(u.touchEvents.start, f, b), u.off("touchmove:active", h), u.off("touchend:passive", v), u.off("resize", m)
        }
      },
      update: function (e) {
        var t = e.value,
          n = t.hsl,
          r = t.hsb,
          a = e.$el.find(".color-picker-sb-spectrum")[0].offsetWidth,
          o = e.$el.find(".color-picker-sb-spectrum")[0].offsetHeight;
        e.$el.find(".color-picker-sb-spectrum").css("background-color", "hsl(".concat(n[0], ", 100%, 50%)")), e.$el.find(".color-picker-sb-spectrum-handle").css("background-color", "hsl(".concat(n[0], ", ").concat(100 * n[1], "%, ").concat(100 * n[2], "%)")).transform("translate(".concat(a * r[1], "px, ").concat(o * (1 - r[2]), "px)"))
      },
      destroy: function (e) {
        e.destroySpectrumEvents && e.destroySpectrumEvents(), delete e.destroySpectrumEvents
      }
    },
    Xt = {
      render: function () {
        return '\n      <div class="color-picker-module color-picker-module-hs-spectrum">\n        <div class="color-picker-hs-spectrum">\n          <div class="color-picker-hs-spectrum-handle"></div>\n        </div>\n      </div>\n    '
      },
      init: function (e) {
        var t, n, r, a, o, i, s, l, c, u = e.app,
          p = e.$el;

        function d(t, n) {
          var r = (t - s.left) / s.width * 360,
            a = (n - s.top) / s.height;
          r = Math.max(0, Math.min(360, r)), a = 1 - Math.max(0, Math.min(1, a)), e.setValue({
            hsb: [r, a, e.value.hsb[2]]
          })
        }

        function f(e) {
          if (!n && !t) {
            r = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, o = r, a = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, i = a;
            var u = g(e.target);
            (c = u.closest(".color-picker-hs-spectrum-handle").length > 0) || (l = u.closest(".color-picker-hs-spectrum").length > 0), l && (s = p.find(".color-picker-hs-spectrum")[0].getBoundingClientRect(), d(r, a)), (c || l) && p.find(".color-picker-hs-spectrum-handle").addClass("color-picker-hs-spectrum-handle-pressed")
          }
        }

        function h(e) {
          (l || c) && (o = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, i = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, e.preventDefault(), n || (n = !0, c && (s = p.find(".color-picker-hs-spectrum")[0].getBoundingClientRect())), (l || c) && d(o, i))
        }

        function v() {
          n = !1, (l || c) && p.find(".color-picker-hs-spectrum-handle").removeClass("color-picker-hs-spectrum-handle-pressed"), l = !1, c = !1
        }

        function m() {
          e.modules["hs-spectrum"].update(e)
        }
        var b = !("touchstart" !== u.touchEvents.start || !u.support.passiveListener) && {
          passive: !0,
          capture: !1
        };
        e.$el.on(u.touchEvents.start, f, b), u.on("touchmove:active", h), u.on("touchend:passive", v), u.on("resize", m), e.destroySpectrumEvents = function () {
          e.$el.off(u.touchEvents.start, f, b), u.off("touchmove:active", h), u.off("touchend:passive", v), u.off("resize", m)
        }
      },
      update: function (e) {
        var t = e.value.hsb,
          n = e.$el.find(".color-picker-hs-spectrum")[0].offsetWidth,
          r = e.$el.find(".color-picker-hs-spectrum")[0].offsetHeight,
          a = E.colorHsbToHsl(t[0], t[1], 1);
        e.$el.find(".color-picker-hs-spectrum-handle").css("background-color", "hsl(".concat(a[0], ", ").concat(100 * a[1], "%, ").concat(100 * a[2], "%)")).transform("translate(".concat(n * (t[0] / 360), "px, ").concat(r * (1 - t[1]), "px)"))
      },
      destroy: function (e) {
        e.destroySpectrumEvents && e.destroySpectrumEvents(), delete e.destroySpectrumEvents
      }
    };
  var Kt = {
    render: function () {
      return '\n      <div class="color-picker-module color-picker-module-wheel">\n        <div class="color-picker-wheel">\n          <svg viewBox="0 0 300 300" width="300" height="300">'.concat(function () {
        for (var e = "", t = 256; t > 0; t -= 1) {
          var n = t * Math.PI / 128,
            r = 1.40625 * t;
          e += '<circle cx="'.concat(150 - 125 * Math.sin(n), '" cy="').concat(150 - 125 * Math.cos(n), '" r="25" fill="hsl(').concat(r, ', 100%, 50%)"></circle>')
        }
        return e
      }(), '</svg>\n          <div class="color-picker-wheel-handle"></div>\n          <div class="color-picker-sb-spectrum" style="background-color: hsl(0, 100%, 50%)">\n            <div class="color-picker-sb-spectrum-handle"></div>\n          </div>\n        </div>\n      </div>\n    ')
    },
    init: function (e) {
      var t, n, r, a, o, i, s, l, c, u, p, d, f = e.app,
        h = e.$el;

      function v(t, n) {
        var r = s.left + s.width / 2,
          a = s.top + s.height / 2,
          o = 180 * Math.atan2(n - a, t - r) / Math.PI + 90;
        o < 0 && (o += 360), o = 360 - o, e.setValue({
          hue: o
        })
      }

      function m(t, n) {
        var r = (t - u.left) / u.width,
          a = (n - u.top) / u.height;
        r = Math.max(0, Math.min(1, r)), a = 1 - Math.max(0, Math.min(1, a)), e.setValue({
          hsb: [e.value.hue, r, a]
        })
      }

      function b(e) {
        if (!n && !t) {
          r = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, o = r, a = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, i = a;
          var f = g(e.target);
          c = f.closest(".color-picker-wheel-handle").length > 0, l = f.closest("circle").length > 0, (d = f.closest(".color-picker-sb-spectrum-handle").length > 0) || (p = f.closest(".color-picker-sb-spectrum").length > 0), l && (s = h.find(".color-picker-wheel")[0].getBoundingClientRect(), v(r, a)), p && (u = h.find(".color-picker-sb-spectrum")[0].getBoundingClientRect(), m(r, a)), (d || p) && h.find(".color-picker-sb-spectrum-handle").addClass("color-picker-sb-spectrum-handle-pressed")
        }
      }

      function y(e) {
        (l || c || p || d) && (o = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, i = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, e.preventDefault(), n || (n = !0, c && (s = h.find(".color-picker-wheel")[0].getBoundingClientRect()), d && (u = h.find(".color-picker-sb-spectrum")[0].getBoundingClientRect())), (l || c) && v(o, i), (p || d) && m(o, i))
      }

      function k() {
        n = !1, (p || d) && h.find(".color-picker-sb-spectrum-handle").removeClass("color-picker-sb-spectrum-handle-pressed"), l = !1, c = !1, p = !1, d = !1
      }

      function w() {
        e.modules.wheel.update(e)
      }
      var C = !("touchstart" !== f.touchEvents.start || !f.support.passiveListener) && {
        passive: !0,
        capture: !1
      };
      e.$el.on(f.touchEvents.start, b, C), f.on("touchmove:active", y), f.on("touchend:passive", k), f.on("resize", w), e.destroyWheelEvents = function () {
        e.$el.off(f.touchEvents.start, b, C), f.off("touchmove:active", y), f.off("touchend:passive", k), f.off("resize", w)
      }
    },
    update: function (e) {
      var t = e.value,
        n = t.hsl,
        r = t.hsb,
        a = e.$el.find(".color-picker-sb-spectrum")[0].offsetWidth,
        o = e.$el.find(".color-picker-sb-spectrum")[0].offsetHeight,
        i = e.$el.find(".color-picker-wheel")[0].offsetWidth,
        s = i / 2,
        l = t.hue * Math.PI / 180,
        c = i / 6 / 2,
        u = s - Math.sin(l) * (s - c) - c,
        p = s - Math.cos(l) * (s - c) - c;
      e.$el.find(".color-picker-wheel-handle").css("background-color", "hsl(".concat(n[0], ", 100%, 50%)")).transform("translate(".concat(u, "px, ").concat(p, "px)")), e.$el.find(".color-picker-sb-spectrum").css("background-color", "hsl(".concat(n[0], ", 100%, 50%)")), e.$el.find(".color-picker-sb-spectrum-handle").css("background-color", "hsl(".concat(n[0], ", ").concat(100 * n[1], "%, ").concat(100 * n[2], "%)")).transform("translate(".concat(a * r[1], "px, ").concat(o * (1 - r[2]), "px)"))
    },
    destroy: function (e) {
      e.destroyWheelEvents && e.destroyWheelEvents(), delete e.destroyWheelEvents
    }
  };

  function en(e) {
    return (en = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function tn(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function nn(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e
    }(e) || function (e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        a = !1,
        o = void 0;
      try {
        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
      } catch (e) {
        a = !0, o = e
      } finally {
        try {
          r || null == s.return || s.return()
        } finally {
          if (a) throw o
        }
      }
      return n
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function rn(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function an(e, t) {
    return !t || "object" !== en(t) && "function" != typeof t ? sn(e) : t
  }

  function on(e) {
    return (on = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function sn(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function ln(e, t) {
    return (ln = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var cn = function (e) {
      function t(e) {
        var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var a, o, i, s = sn(n = an(this, on(t).call(this, r, [e])));
        if (s.params = E.extend({}, e.params.colorPicker, r), s.params.containerEl && 0 === (a = g(s.params.containerEl)).length) return an(n, s);

        function l() {
          s.open()
        }

        function c(e) {
          e.preventDefault()
        }

        function u() {
          s.open()
        }

        function p(e) {
          if (!s.destroyed && s.params && "page" !== s.params.openIn) {
            var t = g(e.target);
            s.opened && !s.closing && (t.closest('[class*="backdrop"]').length || t.closest(".color-picker-popup, .color-picker-popover").length || (o && o.length > 0 ? t[0] !== o[0] && 0 === t.closest(".sheet-modal").length && s.close() : 0 === g(e.target).closest(".sheet-modal").length && s.close()))
          }
        }
        return s.params.inputEl && (o = g(s.params.inputEl)), s.params.targetEl && (i = g(s.params.targetEl)), E.extend(s, {
          app: e,
          $containerEl: a,
          containerEl: a && a[0],
          inline: a && a.length > 0,
          $inputEl: o,
          inputEl: o && o[0],
          $targetEl: i,
          targetEl: i && i[0],
          initialized: !1,
          opened: !1,
          url: s.params.url,
          modules: {
            "alpha-slider": _t,
            "current-color": zt,
            hex: Rt,
            "hsb-sliders": Ut,
            "hue-slider": Ft,
            "brightness-slider": Qt,
            palette: Vt,
            "initial-current-colors": Yt,
            "rgb-bars": Wt,
            "rgb-sliders": Gt,
            "sb-spectrum": Jt,
            "hs-spectrum": Xt,
            wheel: Kt
          }
        }), E.extend(s, {
          attachInputEvents: function () {
            s.$inputEl.on("click", l), s.params.inputReadOnly && s.$inputEl.on("focus mousedown", c)
          },
          detachInputEvents: function () {
            s.$inputEl.off("click", l), s.params.inputReadOnly && s.$inputEl.off("focus mousedown", c)
          },
          attachTargetEvents: function () {
            s.$targetEl.on("click", u)
          },
          detachTargetEvents: function () {
            s.$targetEl.off("click", u)
          },
          attachHtmlEvents: function () {
            e.on("click", p)
          },
          detachHtmlEvents: function () {
            e.off("click", p)
          }
        }), s.init(), an(n, s)
      }
      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && ln(e, t)
      }(t, e), n = t, (r = [{
        key: "attachEvents",
        value: function () {
          this.centerModules = this.centerModules.bind(this), this.params.centerModules && this.app.on("resize", this.centerModules)
        }
      }, {
        key: "detachEvents",
        value: function () {
          this.params.centerModules && this.app.off("resize", this.centerModules)
        }
      }, {
        key: "centerModules",
        value: function () {
          if (this.opened && this.$el && !this.inline) {
            var e = this.$el.find(".page-content");
            if (e.length) {
              var t = e[0];
              t.scrollHeight <= t.offsetHeight ? e.addClass("justify-content-center") : e.removeClass("justify-content-center")
            }
          }
        }
      }, {
        key: "initInput",
        value: function () {
          this.$inputEl && this.params.inputReadOnly && this.$inputEl.prop("readOnly", !0)
        }
      }, {
        key: "getModalType",
        value: function () {
          var e = this.app,
            t = this.modal,
            n = this.params,
            r = n.openIn,
            a = n.openInPhone;
          return t && t.type ? t.type : "auto" !== r ? r : this.inline ? null : e.device.ios ? e.device.ipad ? "popover" : a : e.width >= 768 || e.device.desktop && "aurora" === e.theme ? "popover" : a
        }
      }, {
        key: "formatValue",
        value: function () {
          var e = this.value;
          return this.params.formatValue ? this.params.formatValue.call(this, e) : e.hex
        }
      }, {
        key: "normalizeHsValues",
        value: function (e) {
          return [Math.floor(10 * e[0]) / 10, Math.floor(1e3 * e[1]) / 1e3, Math.floor(1e3 * e[2]) / 1e3]
        }
      }, {
        key: "setValue",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = this;
          if (void 0 !== e) {
            var r, a = n.value || {},
              o = a.hex,
              i = a.rgb,
              s = a.hsl,
              l = a.hsb,
              c = a.alpha,
              u = void 0 === c ? 1 : c,
              p = a.hue,
              d = a.rgba,
              f = a.hsla,
              h = n.value || !n.value && !n.params.value;
            if (Object.keys(e).forEach((function (t) {
                if (n.value && void 0 !== n.value[t]) {
                  var a = e[t];
                  Array.isArray(a) ? a.forEach((function (e, a) {
                    e !== n.value[t][a] && (r = !0)
                  })) : a !== n.value[t] && (r = !0)
                } else r = !0
              })), r) {
              if (e.rgb || e.rgba) {
                var v = e.rgb || e.rgba,
                  g = nn(v, 4),
                  m = g[0],
                  b = g[1],
                  y = g[2],
                  k = g[3],
                  w = void 0 === k ? u : k;
                i = [m, b, y], o = E.colorRgbToHex.apply(E, tn(i)), s = E.colorRgbToHsl.apply(E, tn(i)), l = E.colorHslToHsb.apply(E, tn(s)), s = n.normalizeHsValues(s), p = (l = n.normalizeHsValues(l))[0], u = w, d = [i[0], i[1], i[2], w], f = [s[0], s[1], s[2], w]
              }
              if (e.hsl || e.hsla) {
                var C = e.hsl || e.hsla,
                  M = nn(C, 4),
                  x = M[0],
                  S = M[1],
                  T = M[2],
                  N = M[3],
                  O = void 0 === N ? u : N;
                s = [x, S, T], i = E.colorHslToRgb.apply(E, tn(s)), o = E.colorRgbToHex.apply(E, tn(i)), l = E.colorHslToHsb.apply(E, tn(s)), s = n.normalizeHsValues(s), p = (l = n.normalizeHsValues(l))[0], u = O, d = [i[0], i[1], i[2], O], f = [s[0], s[1], s[2], O]
              }
              if (e.hsb) {
                var D = nn(e.hsb, 4),
                  j = D[0],
                  A = D[1],
                  I = D[2],
                  B = D[3],
                  P = void 0 === B ? u : B;
                l = [j, A, I], s = E.colorHsbToHsl.apply(E, tn(l)), i = E.colorHslToRgb.apply(E, tn(s)), o = E.colorRgbToHex.apply(E, tn(i)), s = n.normalizeHsValues(s), p = (l = n.normalizeHsValues(l))[0], u = P, d = [i[0], i[1], i[2], P], f = [s[0], s[1], s[2], P]
              }
              if (e.hex && (i = E.colorHexToRgb(e.hex), o = E.colorRgbToHex.apply(E, tn(i)), s = E.colorRgbToHsl.apply(E, tn(i)), l = E.colorHslToHsb.apply(E, tn(s)), s = n.normalizeHsValues(s), p = (l = n.normalizeHsValues(l))[0], d = [i[0], i[1], i[2], u], f = [s[0], s[1], s[2], u]), void 0 !== e.alpha && (u = e.alpha, void 0 !== i && (d = [i[0], i[1], i[2], u]), void 0 !== s && (f = [s[0], s[1], s[2], u])), void 0 !== e.hue) {
                var $ = s,
                  L = nn($, 3),
                  _ = (L[0], L[1]),
                  z = L[2];
                s = [e.hue, _, z], l = E.colorHslToHsb.apply(E, tn(s)), i = E.colorHslToRgb.apply(E, tn(s)), o = E.colorRgbToHex.apply(E, tn(i)), s = n.normalizeHsValues(s), p = (l = n.normalizeHsValues(l))[0], d = [i[0], i[1], i[2], u], f = [s[0], s[1], s[2], u]
              }
              n.value = {
                hex: o,
                alpha: u,
                hue: p,
                rgb: i,
                hsl: s,
                hsb: l,
                rgba: d,
                hsla: f
              }, n.initialValue || (n.initialValue = E.extend({}, n.value)), n.updateValue(h), n.opened && t && n.updateModules()
            }
          }
        }
      }, {
        key: "getValue",
        value: function () {
          return this.value
        }
      }, {
        key: "updateValue",
        value: function () {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = this,
            n = t.$inputEl,
            r = t.value,
            a = t.$targetEl;
          if (a && t.params.targetElSetBackgroundColor) {
            var o = r.rgba;
            a.css("background-color", "rgba(".concat(o.join(", "), ")"))
          }
          if (e && t.emit("local::change colorPickerChange", t, r), n && n.length) {
            var i = t.formatValue(r);
            n && n.length && (n.val(i), e && n.trigger("change"))
          }
        }
      }, {
        key: "updateModules",
        value: function () {
          var e = this,
            t = e.modules;
          e.params.modules.forEach((function (n) {
            "string" == typeof n && t[n] && t[n].update ? t[n].update(e) : n && n.update && n.update(e)
          }))
        }
      }, {
        key: "update",
        value: function () {
          this.updateModules()
        }
      }, {
        key: "renderPicker",
        value: function () {
          var e = this,
            t = e.params,
            n = e.modules,
            r = "";
          return t.modules.forEach((function (t) {
            "string" == typeof t && n[t] && n[t].render ? r += n[t].render(e) : t && t.render && (r += t.render(e))
          })), r
        }
      }, {
        key: "renderNavbar",
        value: function () {
          if (this.params.renderNavbar) return this.params.renderNavbar.call(this, this);
          var e = this.params,
            t = e.openIn,
            n = e.navbarTitleText,
            r = e.navbarBackLinkText,
            a = e.navbarCloseText;
          return '\n    <div class="navbar">\n      <div class="navbar-bg"></div>\n      <div class="navbar-inner sliding">\n        '.concat("page" === t ? '\n        <div class="left">\n          <a class="link back">\n            <i class="icon icon-back"></i>\n            <span class="if-not-md">'.concat(r, "</span>\n          </a>\n        </div>\n        ") : "", '\n        <div class="title">').concat(n, "</div>\n        ").concat("page" !== t ? '\n        <div class="right">\n          <a class="link popup-close" data-popup=".color-picker-popup">'.concat(a, "</a>\n        </div>\n        ") : "", "\n      </div>\n    </div>\n  ").trim()
        }
      }, {
        key: "renderToolbar",
        value: function () {
          return this.params.renderToolbar ? this.params.renderToolbar.call(this, this) : '\n    <div class="toolbar toolbar-top no-shadow">\n      <div class="toolbar-inner">\n        <div class="left"></div>\n        <div class="right">\n          <a class="link sheet-close popover-close" data-sheet=".color-picker-sheet-modal" data-popover=".color-picker-popover">'.concat(this.params.toolbarCloseText, "</a>\n        </div>\n      </div>\n    </div>\n  ").trim()
        }
      }, {
        key: "renderInline",
        value: function () {
          var e = this.params,
            t = e.cssClass,
            n = e.groupedModules;
          return '\n    <div class="color-picker color-picker-inline '.concat(n ? "color-picker-grouped-modules" : "", " ").concat(t || "", '">\n      ').concat(this.renderPicker(), "\n    </div>\n  ").trim()
        }
      }, {
        key: "renderSheet",
        value: function () {
          var e = this.params,
            t = e.cssClass,
            n = e.toolbarSheet,
            r = e.groupedModules;
          return '\n    <div class="sheet-modal color-picker color-picker-sheet-modal '.concat(r ? "color-picker-grouped-modules" : "", " ").concat(t || "", '">\n      ').concat(n ? this.renderToolbar() : "", '\n      <div class="sheet-modal-inner">\n        <div class="page-content">\n          ').concat(this.renderPicker(), "\n        </div>\n      </div>\n    </div>\n  ").trim()
        }
      }, {
        key: "renderPopover",
        value: function () {
          var e = this.params,
            t = e.cssClass,
            n = e.toolbarPopover,
            r = e.groupedModules;
          return '\n    <div class="popover color-picker-popover '.concat(t || "", '">\n      <div class="popover-inner">\n        <div class="color-picker ').concat(r ? "color-picker-grouped-modules" : "", '">\n          ').concat(n ? this.renderToolbar() : "", '\n          <div class="page-content">\n            ').concat(this.renderPicker(), "\n          </div>\n        </div>\n      </div>\n    </div>\n  ").trim()
        }
      }, {
        key: "renderPopup",
        value: function () {
          var e = this.params,
            t = e.cssClass,
            n = e.navbarPopup,
            r = e.groupedModules;
          return '\n    <div class="popup color-picker-popup '.concat(t || "", '">\n      <div class="page">\n        ').concat(n ? this.renderNavbar() : "", '\n        <div class="color-picker ').concat(r ? "color-picker-grouped-modules" : "", '">\n          <div class="page-content">\n            ').concat(this.renderPicker(), "\n          </div>\n        </div>\n      </div>\n    </div>\n  ").trim()
        }
      }, {
        key: "renderPage",
        value: function () {
          var e = this.params,
            t = e.cssClass,
            n = e.groupedModules;
          return '\n    <div class="page color-picker-page '.concat(t || "", '" data-name="color-picker-page">\n      ').concat(this.renderNavbar(), '\n      <div class="color-picker ').concat(n ? "color-picker-grouped-modules" : "", '">\n        <div class="page-content">\n          ').concat(this.renderPicker(), "\n        </div>\n      </div>\n    </div>\n  ").trim()
        }
      }, {
        key: "render",
        value: function () {
          var e = this.params;
          if (e.render) return e.render.call(this);
          if (this.inline) return this.renderInline();
          if ("page" === e.openIn) return this.renderPage();
          var t = this.getModalType();
          return "popover" === t ? this.renderPopover() : "sheet" === t ? this.renderSheet() : "popup" === t ? this.renderPopup() : void 0
        }
      }, {
        key: "onOpen",
        value: function () {
          var e = this,
            t = e.initialized,
            n = e.$el,
            r = e.app,
            a = e.$inputEl,
            o = e.inline,
            i = e.value,
            s = e.params,
            l = e.modules;
          e.closing = !1, e.opened = !0, e.opening = !0, e.attachEvents(), s.modules.forEach((function (t) {
            "string" == typeof t && l[t] && l[t].init ? l[t].init(e) : t && t.init && t.init(e)
          }));
          var c = !i && s.value;
          t ? i && (e.initialValue = E.extend({}, i), e.setValue(i, !1)) : i ? e.setValue(i) : s.value ? e.setValue(s.value, !1) : s.value || e.setValue({
            hex: "#ff0000"
          }, !1), c && e.updateValue(), e.updateModules(), s.centerModules && e.centerModules(), !o && a && a.length && "md" === r.theme && a.trigger("focus"), e.initialized = !0, n && n.trigger("colorpicker:open"), a && a.trigger("colorpicker:open"), e.emit("local::open colorPickerOpen", e)
        }
      }, {
        key: "onOpened",
        value: function () {
          this.opening = !1, this.$el && this.$el.trigger("colorpicker:opened"), this.$inputEl && this.$inputEl.trigger("colorpicker:opened"), this.emit("local::opened colorPickerOpened", this)
        }
      }, {
        key: "onClose",
        value: function () {
          var e = this,
            t = e.app,
            n = e.params,
            r = e.modules;
          e.opening = !1, e.closing = !0, e.detachEvents(), e.$inputEl && "md" === t.theme && e.$inputEl.trigger("blur"), n.modules.forEach((function (t) {
            "string" == typeof t && r[t] && r[t].destroy ? r[t].destroy(e) : t && t.destroy && t.destroy(e)
          })), e.$el && e.$el.trigger("colorpicker:close"), e.$inputEl && e.$inputEl.trigger("colorpicker:close"), e.emit("local::close colorPickerClose", e)
        }
      }, {
        key: "onClosed",
        value: function () {
          var e = this;
          e.opened = !1, e.closing = !1, e.inline || E.nextTick((function () {
            e.modal && e.modal.el && e.modal.destroy && (e.params.routableModals || e.modal.destroy()), delete e.modal
          })), e.$el && e.$el.trigger("colorpicker:closed"), e.$inputEl && e.$inputEl.trigger("colorpicker:closed"), e.emit("local::closed colorPickerClosed", e)
        }
      }, {
        key: "open",
        value: function () {
          var e = this,
            t = e.app,
            n = e.opened,
            r = e.inline,
            a = e.$inputEl,
            o = e.$targetEl,
            i = e.params;
          if (!n) {
            if (r) return e.$el = g(e.render()), e.$el[0].f7ColorPicker = e, e.$containerEl.append(e.$el), e.onOpen(), void e.onOpened();
            var s, l, c, u = e.render();
            if ("page" === i.openIn) e.view.router.navigate({
              url: e.url,
              route: {
                content: u,
                path: e.url,
                on: {
                  pageBeforeIn: function (t, n) {
                    e.$el = n.$el.find(".color-picker"), e.$el[0].f7ColorPicker = e, e.onOpen()
                  },
                  pageAfterIn: function () {
                    e.onOpened()
                  },
                  pageBeforeOut: function () {
                    e.onClose()
                  },
                  pageAfterOut: function () {
                    e.onClosed(), e.$el && e.$el[0] && (e.$el[0].f7ColorPicker = null, delete e.$el[0].f7ColorPicker)
                  }
                }
              }
            });
            else {
              var p = e.getModalType(),
                d = i.backdrop;
              null == d && ("popover" === p && !1 !== t.params.popover.backdrop && (d = !0), "popup" === p && (d = !0));
              var f = {
                targetEl: o || a,
                scrollToEl: i.scrollToInput ? o || a : void 0,
                content: u,
                backdrop: d,
                closeByBackdropClick: i.closeByBackdropClick,
                on: {
                  open: function () {
                    e.modal = this, e.$el = "popover" === p || "popup" === p ? this.$el.find(".color-picker") : this.$el, e.$el[0].f7ColorPicker = e, e.onOpen()
                  },
                  opened: function () {
                    e.onOpened()
                  },
                  close: function () {
                    e.onClose()
                  },
                  closed: function () {
                    e.onClosed(), e.$el && e.$el[0] && (e.$el[0].f7ColorPicker = null, delete e.$el[0].f7ColorPicker)
                  }
                }
              };
              "popup" === p && (f.push = i.popupPush, f.swipeToClose = i.popupSwipeToClose), "sheet" === p && (f.push = i.sheetPush, f.swipeToClose = i.sheetSwipeToClose), i.routableModals && e.view ? e.view.router.navigate({
                url: e.url,
                route: (s = {
                  path: e.url
                }, l = p, c = f, l in s ? Object.defineProperty(s, l, {
                  value: c,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : s[l] = c, s)
              }) : (e.modal = t[p].create(f), e.modal.open())
            }
          }
        }
      }, {
        key: "close",
        value: function () {
          var e = this.opened,
            t = this.inline;
          if (e) return t ? (this.onClose(), void this.onClosed()) : void(this.params.routableModals && this.view || "page" === this.params.openIn ? this.view.router.back() : this.modal.close())
        }
      }, {
        key: "init",
        value: function () {
          if (this.initInput(), this.inline) return this.open(), void this.emit("local::init colorPickerInit", this);
          !this.initialized && this.params.value && this.setValue(this.params.value), this.$inputEl && this.attachInputEvents(), this.$targetEl && this.attachTargetEvents(), this.params.closeByOutsideClick && this.attachHtmlEvents(), this.emit("local::init colorPickerInit", this)
        }
      }, {
        key: "destroy",
        value: function () {
          if (!this.destroyed) {
            var e = this.$el;
            this.emit("local::beforeDestroy colorPickerBeforeDestroy", this), e && e.trigger("colorpicker:beforedestroy"), this.close(), this.detachEvents(), this.$inputEl && this.detachInputEvents(), this.$targetEl && this.detachTargetEvents(), this.params.closeByOutsideClick && this.detachHtmlEvents(), e && e.length && delete this.$el[0].f7ColorPicker, E.deleteProps(this), this.destroyed = !0
          }
        }
      }, {
        key: "view",
        get: function () {
          var e, t = this.$inputEl,
            n = this.$targetEl,
            r = this.app,
            a = this.params;
          return a.view ? e = a.view : (t && (e = t.parents(".view").length && t.parents(".view")[0].f7View), !e && n && (e = n.parents(".view").length && n.parents(".view")[0].f7View)), e || (e = r.views.main), e
        }
      }]) && rn(n.prototype, r), a && rn(n, a), t
    }(L),
    un = {
      name: "colorPicker",
      static: {
        ColorPicker: cn
      },
      create: function () {
        this.colorPicker = R({
          defaultSelector: ".color-picker",
          constructor: cn,
          app: this,
          domProp: "f7ColorPicker"
        }), this.colorPicker.close = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".color-picker",
            t = g(e);
          if (0 !== t.length) {
            var n = t[0].f7ColorPicker;
            !n || n && !n.opened || n.close()
          }
        }
      },
      params: {
        colorPicker: {
          value: null,
          modules: ["wheel"],
          palette: [
            ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C"],
            ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A", "#4A148C"],
            ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593", "#1A237E"],
            ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD", "#01579B"],
            ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688", "#00897B", "#00796B", "#00695C", "#004D40"],
            ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#689F38", "#558B2F", "#33691E"],
            ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825", "#F57F17"],
            ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00", "#E65100"]
          ],
          groupedModules: !1,
          centerModules: !0,
          sliderLabel: !1,
          sliderValue: !1,
          sliderValueEdiable: !1,
          barLabel: !1,
          barValue: !1,
          barValueEdiable: !1,
          hexLabel: !1,
          hexValueEditable: !1,
          redLabelText: "R",
          greenLabelText: "G",
          blueLabelText: "B",
          hueLabelText: "H",
          saturationLabelText: "S",
          brightnessLabelText: "B",
          hexLabelText: "HEX",
          alphaLabelText: "A",
          containerEl: null,
          openIn: "popover",
          openInPhone: "popup",
          popupPush: !1,
          popupSwipeToClose: void 0,
          sheetPush: !1,
          sheetSwipeToClose: void 0,
          formatValue: null,
          targetEl: null,
          targetElSetBackgroundColor: !1,
          inputEl: null,
          inputReadOnly: !0,
          closeByOutsideClick: !0,
          scrollToInput: !0,
          toolbarSheet: !0,
          toolbarPopover: !1,
          toolbarCloseText: "Done",
          navbarPopup: !0,
          navbarCloseText: "Done",
          navbarTitleText: "Color",
          navbarBackLinkText: "Back",
          cssClass: null,
          routableModals: !0,
          view: null,
          url: "color/",
          backdrop: null,
          closeByBackdropClick: !0,
          renderToolbar: null,
          renderNavbar: null,
          renderInline: null,
          renderPopover: null,
          renderSheet: null,
          renderPopup: null,
          render: null
        }
      }
    };

  function pn(e) {
    return (pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function dn(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function fn(e, t) {
    return !t || "object" !== pn(t) && "function" != typeof t ? vn(e) : t
  }

  function hn(e) {
    return (hn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function vn(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function gn(e, t) {
    return (gn = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var mn = function (e) {
      function t(e, n) {
        var r;
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var a, s = E.extend({
            on: {}
          }, e.params.popover, n),
          l = vn(r = fn(this, hn(t).call(this, e, s)));
        if (l.params = s, (a = l.params.el ? g(l.params.el).eq(0) : g(l.params.content).filter((function (e, t) {
            return 1 === t.nodeType
          })).eq(0)) && a.length > 0 && a[0].f7Modal) return fn(r, a[0].f7Modal);
        var c, u, p = g(l.params.targetEl).eq(0);
        if (0 === a.length) return fn(r, l.destroy());
        l.params.backdrop && l.params.backdropEl ? c = g(l.params.backdropEl) : l.params.backdrop && 0 === (c = e.root.children(".popover-backdrop")).length && (c = g('<div class="popover-backdrop"></div>'), e.root.append(c)), 0 === a.find(".popover-angle").length ? (u = g('<div class="popover-angle"></div>'), a.prepend(u)) : u = a.find(".popover-angle");
        var d = l.open;

        function f() {
          l.resize()
        }

        function h(t) {
          var n = t.target,
            r = g(n);
          !e.device.desktop && e.device.cordova && (i.Keyboard && i.Keyboard.isVisible || i.cordova.plugins && i.cordova.plugins.Keyboard && i.cordova.plugins.Keyboard.isVisible) || 0 === r.closest(l.el).length && (l.params.closeByBackdropClick && l.params.backdrop && l.backdropEl && l.backdropEl === n ? l.close() : l.params.closeByOutsideClick && l.close())
        }

        function v(e) {
          27 === e.keyCode && l.params.closeOnEscape && l.close()
        }
        return E.extend(l, {
          app: e,
          $el: a,
          el: a[0],
          $targetEl: p,
          targetEl: p[0],
          $angleEl: u,
          angleEl: u[0],
          $backdropEl: c,
          backdropEl: c && c[0],
          type: "popover",
          open: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = t[0],
              a = t[1];
            return "boolean" == typeof t[0] && (a = t[0], r = t[1]), r && (l.$targetEl = g(r), l.targetEl = l.$targetEl[0]), d.call(l, a)
          }
        }), l.on("popoverOpen", (function () {
          l.resize(), e.on("resize", f), g(i).on("keyboardDidShow keyboardDidHide", f), l.on("popoverClose popoverBeforeDestroy", (function () {
            e.off("resize", f), g(i).off("keyboardDidShow keyboardDidHide", f)
          }))
        })), l.params.closeOnEscape && (l.on("popoverOpen", (function () {
          g(o).on("keydown", v)
        })), l.on("popoverClose", (function () {
          g(o).off("keydown", v)
        }))), l.on("popoverOpened", (function () {
          (l.params.closeByOutsideClick || l.params.closeByBackdropClick) && e.on("click", h)
        })), l.on("popoverClose", (function () {
          (l.params.closeByOutsideClick || l.params.closeByBackdropClick) && e.off("click", h)
        })), a[0].f7Modal = l, fn(r, l)
      }
      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && gn(e, t)
      }(t, e), n = t, (r = [{
        key: "resize",
        value: function () {
          var e = this.app,
            t = this.$el,
            n = this.$targetEl,
            r = this.$angleEl,
            a = this.params,
            o = a.targetX,
            i = a.targetY;
          t.css({
            left: "",
            top: ""
          });
          var s, l, c, u, p, d, f = [t.width(), t.height()],
            h = f[0],
            v = f[1],
            m = 0;
          "ios" === e.theme || "aurora" === e.theme ? (r.removeClass("on-left on-right on-top on-bottom").css({
            left: "",
            top: ""
          }), m = r.width() / 2) : t.removeClass("popover-on-left popover-on-right popover-on-top popover-on-bottom popover-on-middle").css({
            left: "",
            top: ""
          });
          var b = parseInt(g("html").css("--f7-safe-area-top"), 10);
          if (Number.isNaN(b) && (b = 0), n && n.length > 0) {
            c = n.outerWidth(), u = n.outerHeight();
            var y = n.offset();
            p = y.left - e.left, d = y.top - e.top;
            var k = n.parents(".page");
            k.length > 0 && (d -= k[0].scrollTop)
          } else void 0 !== o && "undefined" !== i && (p = o, d = i, c = this.params.targetWidth || 0, u = this.params.targetHeight || 0);
          var w, C = 0,
            M = 0,
            x = 0,
            S = "md" === e.theme ? "bottom" : "top";
          "md" === e.theme ? (v < e.height - d - u ? (S = "bottom", M = d + u) : v < d - b ? (M = d - v, S = "top") : (S = "middle", M = u / 2 + d - v / 2), M = Math.max(8, Math.min(M, e.height - v - 8)), p < e.width / 2 ? (w = "right", C = "middle" === S ? p + c : p) : (w = "left", C = "middle" === S ? p - h : p + c - h), C = Math.max(8, Math.min(C, e.width - h - 8)), t.addClass("popover-on-".concat(S, " popover-on-").concat(w))) : (v + m < d - b ? M = d - v - m : v + m < e.height - d - u ? (S = "bottom", M = d + u + m) : (S = "middle", x = M = u / 2 + d - v / 2, x -= M = Math.max(5, Math.min(M, e.height - v - 5))), "top" === S || "bottom" === S ? (x = C = c / 2 + p - h / 2, C = Math.max(5, Math.min(C, e.width - h - 5)), "top" === S && r.addClass("on-bottom"), "bottom" === S && r.addClass("on-top"), s = h / 2 - m + (x -= C), s = Math.max(Math.min(s, h - 2 * m - 13), 13), r.css({
            left: "".concat(s, "px")
          })) : "middle" === S && (C = p - h - m, r.addClass("on-right"), (C < 5 || C + h > e.width) && (C < 5 && (C = p + c + m), C + h > e.width && (C = e.width - h - 5), r.removeClass("on-right").addClass("on-left")), l = v / 2 - m + x, l = Math.max(Math.min(l, v - 2 * m - 13), 13), r.css({
            top: "".concat(l, "px")
          }))), t.css({
            top: "".concat(M, "px"),
            left: "".concat(C, "px")
          })
        }
      }]) && dn(n.prototype, r), a && dn(n, a), t
    }(mt),
    bn = {
      name: "popover",
      params: {
        popover: {
          backdrop: !0,
          backdropEl: void 0,
          closeByBackdropClick: !0,
          closeByOutsideClick: !0,
          closeOnEscape: !1
        }
      },
      static: {
        Popover: mn
      },
      create: function () {
        var e = this;
        e.popover = E.extend(Q({
          app: e,
          constructor: mn,
          defaultSelector: ".popover.modal-in"
        }), {
          open: function (t, n, r) {
            var a = g(t);
            if (a.length > 1) {
              var o = g(n).parents(".page");
              o.length && a.each((function (e, t) {
                var n = g(t);
                n.parents(o)[0] === o[0] && (a = n)
              }))
            }
            a.length > 1 && (a = a.eq(a.length - 1));
            var i = a[0].f7Modal;
            return i || (i = new mn(e, {
              el: a,
              targetEl: n
            })), i.open(n, r)
          }
        })
      },
      clicks: {
        ".popover-open": function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = this;
          n.popover.open(t.popover, e, t.animate)
        },
        ".popover-close": function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = this;
          n.popover.close(t.popover, t.animate, e)
        }
      }
    };

  function yn(e) {
    return (yn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function kn(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function wn(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function Cn(e, t) {
    return !t || "object" !== yn(t) && "function" != typeof t ? xn(e) : t
  }

  function Mn(e) {
    return (Mn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function xn(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function Sn(e, t) {
    return (Sn = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var En = function (e) {
      function t(e, n) {
        var r;
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var a = xn(r = Cn(this, Mn(t).call(this, n, [e]))),
          o = {
            el: null,
            inputEl: null,
            dual: !1,
            step: 1,
            label: !1,
            min: 0,
            max: 100,
            value: 0,
            draggableBar: !0,
            vertical: !1,
            verticalReversed: !1,
            formatLabel: null,
            scale: !1,
            scaleSteps: 5,
            scaleSubSteps: 0,
            formatScaleLabel: null,
            limitKnobPosition: "ios" === e.theme
          };
        a.useModulesParams(o), a.params = E.extend(o, n);
        var i = a.params.el;
        if (!i) return Cn(r, a);
        var s = g(i);
        if (0 === s.length) return Cn(r, a);
        if (s[0].f7Range) return Cn(r, s[0].f7Range);
        var l, c = s.dataset();
        "step min max value scaleSteps scaleSubSteps".split(" ").forEach((function (e) {
          void 0 === n[e] && void 0 !== c[e] && (a.params[e] = parseFloat(c[e]))
        })), "dual label vertical verticalReversed scale".split(" ").forEach((function (e) {
          void 0 === n[e] && void 0 !== c[e] && (a.params[e] = c[e])
        })), a.params.value || (void 0 !== c.value && (a.params.value = c.value), void 0 !== c.valueLeft && void 0 !== c.valueRight && (a.params.value = [parseFloat(c.valueLeft), parseFloat(c.valueRight)])), a.params.dual || (a.params.inputEl ? l = g(a.params.inputEl) : s.find('input[type="range"]').length && (l = s.find('input[type="range"]').eq(0)));
        var u = a.params,
          p = u.dual,
          d = u.step,
          f = u.label,
          h = u.min,
          v = u.max,
          m = u.value,
          b = u.vertical,
          y = u.verticalReversed,
          k = u.scale,
          w = u.scaleSteps,
          C = u.scaleSubSteps,
          M = u.limitKnobPosition;
        E.extend(a, {
          app: e,
          $el: s,
          el: s[0],
          $inputEl: l,
          inputEl: l ? l[0] : void 0,
          dual: p,
          step: d,
          label: f,
          min: h,
          max: v,
          value: m,
          previousValue: m,
          vertical: b,
          verticalReversed: y,
          scale: k,
          scaleSteps: w,
          scaleSubSteps: C,
          limitKnobPosition: M
        }), l && ("step min max".split(" ").forEach((function (e) {
          !n[e] && l.attr(e) && (a.params[e] = parseFloat(l.attr(e)), a[e] = parseFloat(l.attr(e)))
        })), void 0 !== l.val() && (a.params.value = parseFloat(l.val()), a.value = parseFloat(l.val()))), a.dual && s.addClass("range-slider-dual"), a.label && s.addClass("range-slider-label"), a.vertical ? (s.addClass("range-slider-vertical"), a.verticalReversed && s.addClass("range-slider-vertical-reversed")) : s.addClass("range-slider-horizontal");
        var x = g('<div class="range-bar"></div>'),
          S = g('<div class="range-bar-active"></div>');
        x.append(S);
        var N = '\n      <div class="range-knob-wrap">\n        <div class="range-knob"></div>\n        '.concat(a.label ? '<div class="range-knob-label"></div>' : "", "\n      </div>\n    "),
          O = [g(N)];
        a.dual && O.push(g(N)), s.append(x), O.forEach((function (e) {
          s.append(e)
        }));
        var D, j, A = [];
        a.label && (A.push(O[0].find(".range-knob-label")), a.dual && A.push(O[1].find(".range-knob-label"))), a.scale && a.scaleSteps > 1 && (D = g('\n        <div class="range-scale">\n          '.concat(a.renderScale(), "\n        </div>\n      ")), s.append(D)), E.extend(a, {
          knobs: O,
          labels: A,
          $barEl: x,
          $barActiveEl: S,
          $scaleEl: D
        }), s[0].f7Range = a;
        var I, B, P, $, L, _, z, R, H, U, F, Q = {};

        function V() {
          z = !0
        }

        function Y(e) {
          if (!j && (a.params.draggableBar || 0 !== g(e.target).closest(".range-knob").length)) {
            var t;
            z = !1, Q.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, Q.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, "touchstart" === e.type && (R = e.targetTouches[0].identifier), j = !0, I = void 0, B = s.offset(), P = B.left, $ = B.top, a.vertical ? (t = (Q.y - $) / a.rangeHeight, a.verticalReversed || (t = 1 - t)) : t = a.app.rtl ? (P + a.rangeWidth - Q.x) / a.rangeWidth : (Q.x - P) / a.rangeWidth;
            var n = t * (a.max - a.min) + a.min;
            a.dual ? Math.abs(a.value[0] - n) < Math.abs(a.value[1] - n) ? (_ = 0, L = a.knobs[0], n = [n, a.value[1]]) : (_ = 1, L = a.knobs[1], n = [a.value[0], n]) : (L = a.knobs[0], n = t * (a.max - a.min) + a.min), E.nextTick((function () {
              j && L.addClass("range-knob-active-state")
            }), 70), a.on("change", V), a.setValue(n, !0)
          }
        }

        function q(e) {
          if (j) {
            var t, n;
            if ("touchmove" === e.type)
              for (var r = 0; r < e.targetTouches.length; r += 1) e.targetTouches[r].identifier === R && (t = e.targetTouches[r].pageX, n = e.targetTouches[r].pageY);
            else t = e.pageX, n = e.pageY;
            if (void 0 !== t || void 0 !== n)
              if (void 0 !== I || a.vertical || (I = !!(I || Math.abs(n - Q.y) > Math.abs(t - Q.x))), I) j = !1;
              else {
                var o;
                e.preventDefault(), a.vertical ? (o = (n - $) / a.rangeHeight, a.verticalReversed || (o = 1 - o)) : o = a.app.rtl ? (P + a.rangeWidth - t) / a.rangeWidth : (t - P) / a.rangeWidth;
                var i, s, l = o * (a.max - a.min) + a.min;
                if (a.dual) 0 === _ ? (i = l) > (s = a.value[1]) && (s = i) : (s = l) < (i = a.value[0]) && (i = s), l = [i, s];
                a.setValue(l, !0)
              }
          }
        }

        function W(e) {
          if ("touchend" === e.type) {
            for (var t, n = 0; n < e.changedTouches.length; n += 1) e.changedTouches[n].identifier === R && (t = !0);
            if (!t) return
          }
          if (!j) return I && L.removeClass("range-knob-active-state"), void(j = !1);
          a.off("change", V), j = !1, L.removeClass("range-knob-active-state"), z && a.$inputEl && !a.dual && a.$inputEl.trigger("change"), z = !1, void 0 !== a.previousValue && (a.dual && (a.previousValue[0] !== a.value[0] || a.previousValue[1] !== a.value[1]) || !a.dual && a.previousValue !== a.value) && (a.$el.trigger("range:changed", a.value), a.emit("local::changed rangeChanged", a, a.value))
        }

        function Z() {
          a.calcSize(), a.layout()
        }
        return a.attachEvents = function () {
          var t = !!T.passiveListener && {
            passive: !0
          };
          a.$el.on(e.touchEvents.start, Y, t), e.on("touchmove", q), e.on("touchend:passive", W), e.on("tabShow", Z), e.on("resize", Z), (H = a.$el.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast")).on("modal:open", Z), (U = a.$el.parents(".panel")).on("panel:open", Z), (F = a.$el.parents(".page").eq(0)).on("page:reinit", Z)
        }, a.detachEvents = function () {
          var t = !!T.passiveListener && {
            passive: !0
          };
          a.$el.off(e.touchEvents.start, Y, t), e.off("touchmove", q), e.off("touchend:passive", W), e.off("tabShow", Z), e.off("resize", Z), H && H.off("modal:open", Z), U && U.off("panel:open", Z), F && F.off("page:reinit", Z), H = null, U = null, F = null
        }, a.useModules(), a.init(), Cn(r, a)
      }
      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Sn(e, t)
      }(t, e), n = t, (r = [{
        key: "calcSize",
        value: function () {
          if (this.vertical) {
            var e = this.$el.outerHeight();
            if (0 === e) return;
            this.rangeHeight = e, this.knobHeight = this.knobs[0].outerHeight()
          } else {
            var t = this.$el.outerWidth();
            if (0 === t) return;
            this.rangeWidth = t, this.knobWidth = this.knobs[0].outerWidth()
          }
        }
      }, {
        key: "layout",
        value: function () {
          var e = this,
            t = e.app,
            n = e.knobWidth,
            r = e.knobHeight,
            a = e.rangeWidth,
            o = e.rangeHeight,
            i = e.min,
            s = e.max,
            l = e.knobs,
            c = e.$barActiveEl,
            u = e.value,
            p = e.label,
            d = e.labels,
            f = e.vertical,
            h = e.verticalReversed,
            v = e.limitKnobPosition,
            g = f ? r : n,
            m = f ? o : a,
            b = f ? h ? "top" : "bottom" : t.rtl ? "right" : "left";
          if (e.dual) {
            var y, k = [(u[0] - i) / (s - i), (u[1] - i) / (s - i)];
            c.css((kn(y = {}, b, "".concat(100 * k[0], "%")), kn(y, f ? "height" : "width", "".concat(100 * (k[1] - k[0]), "%")), y)), l.forEach((function (t, n) {
              var r = m * k[n];
              if (v) {
                var a = m * k[n] - g / 2;
                a < 0 && (r = g / 2), a + g > m && (r = m - g / 2)
              }
              t.css(b, "".concat(r, "px")), p && d[n].text(e.formatLabel(u[n], d[n][0]))
            }))
          } else {
            var w = (u - i) / (s - i);
            c.css(f ? "height" : "width", "".concat(100 * w, "%"));
            var C = m * w;
            if (v) {
              var M = m * w - g / 2;
              M < 0 && (C = g / 2), M + g > m && (C = m - g / 2)
            }
            l[0].css(b, "".concat(C, "px")), p && d[0].text(e.formatLabel(u, d[0][0]))
          }
          e.dual && u.indexOf(i) >= 0 || !e.dual && u === i ? e.$el.addClass("range-slider-min") : e.$el.removeClass("range-slider-min"), e.dual && u.indexOf(s) >= 0 || !e.dual && u === s ? e.$el.addClass("range-slider-max") : e.$el.removeClass("range-slider-max")
        }
      }, {
        key: "setValue",
        value: function (e, t) {
          var n, r, a = this,
            o = a.step,
            i = a.min,
            s = a.max;
          if (a.dual) {
            r = [a.value[0], a.value[1]];
            var l = e;
            if (Array.isArray(l) || (l = [e, e]), e[0] > e[1] && (l = [l[0], l[0]]), (l = l.map((function (e) {
                return Math.max(Math.min(Math.round(e / o) * o, s), i)
              })))[0] === a.value[0] && l[1] === a.value[1]) return a;
            l.forEach((function (e, t) {
              a.value[t] = e
            })), n = r[0] !== l[0] || r[1] !== l[1], a.layout()
          } else {
            r = a.value;
            var c = Math.max(Math.min(Math.round(e / o) * o, s), i);
            a.value = c, a.layout(), n = r !== c
          }
          return n && (a.previousValue = r), n ? (a.$el.trigger("range:change", a.value), a.$inputEl && !a.dual && (a.$inputEl.val(a.value), t ? a.$inputEl.trigger("input") : a.$inputEl.trigger("input change")), t || (a.$el.trigger("range:changed", a.value), a.emit("local::changed rangeChanged", a, a.value)), a.emit("local::change rangeChange", a, a.value), a) : a
        }
      }, {
        key: "getValue",
        value: function () {
          return this.value
        }
      }, {
        key: "formatLabel",
        value: function (e, t) {
          return this.params.formatLabel ? this.params.formatLabel.call(this, e, t) : e
        }
      }, {
        key: "formatScaleLabel",
        value: function (e) {
          return this.params.formatScaleLabel ? this.params.formatScaleLabel.call(this, e) : e
        }
      }, {
        key: "renderScale",
        value: function () {
          var e = this,
            t = e.app,
            n = e.verticalReversed,
            r = e.vertical ? n ? "top" : "bottom" : t.rtl ? "right" : "left",
            a = "";
          return Array.from({
            length: e.scaleSteps + 1
          }).forEach((function (t, n) {
            var o = (e.max - e.min) / e.scaleSteps,
              i = e.min + o * n,
              s = (i - e.min) / (e.max - e.min);
            a += '<div class="range-scale-step" style="'.concat(r, ": ").concat(100 * s, '%">').concat(e.formatScaleLabel(i), "</div>"), e.scaleSubSteps && e.scaleSubSteps > 1 && n < e.scaleSteps && Array.from({
              length: e.scaleSubSteps - 1
            }).forEach((function (t, n) {
              var s = o / e.scaleSubSteps,
                l = (i + s * (n + 1) - e.min) / (e.max - e.min);
              a += '<div class="range-scale-step range-scale-substep" style="'.concat(r, ": ").concat(100 * l, '%"></div>')
            }))
          })), a
        }
      }, {
        key: "updateScale",
        value: function () {
          if (!this.scale || this.scaleSteps < 2) return this.$scaleEl && this.$scaleEl.remove(), void delete this.$scaleEl;
          this.$scaleEl || (this.$scaleEl = g('<div class="range-scale"></div>'), this.$el.append(this.$scaleEl)), this.$scaleEl.html(this.renderScale())
        }
      }, {
        key: "init",
        value: function () {
          return this.calcSize(), this.layout(), this.attachEvents(), this
        }
      }, {
        key: "destroy",
        value: function () {
          var e = this;
          e.$el.trigger("range:beforedestroy"), e.emit("local::beforeDestroy rangeBeforeDestroy", e), delete e.$el[0].f7Range, e.detachEvents(), E.deleteProps(e), e = null
        }
      }]) && wn(n.prototype, r), a && wn(n, a), t
    }(L),
    Tn = {
      name: "range",
      create: function () {
        var e = this;
        e.range = E.extend(R({
          defaultSelector: ".range-slider",
          constructor: En,
          app: e,
          domProp: "f7Range"
        }), {
          getValue: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".range-slider",
              n = e.range.get(t);
            if (n) return n.getValue()
          },
          setValue: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".range-slider",
              n = arguments.length > 1 ? arguments[1] : void 0,
              r = e.range.get(t);
            if (r) return r.setValue(n)
          }
        })
      },
      static: {
        Range: En
      },
      on: {
        tabMounted: function (e) {
          var t = this;
          g(e).find(".range-slider-init").each((function (e, n) {
            return new En(t, {
              el: n
            })
          }))
        },
        tabBeforeRemove: function (e) {
          g(e).find(".range-slider-init").each((function (e, t) {
            t.f7Range && t.f7Range.destroy()
          }))
        },
        pageInit: function (e) {
          var t = this;
          e.$el.find(".range-slider-init").each((function (e, n) {
            return new En(t, {
              el: n
            })
          }))
        },
        pageBeforeRemove: function (e) {
          e.$el.find(".range-slider-init").each((function (e, t) {
            t.f7Range && t.f7Range.destroy()
          }))
        }
      },
      vnode: {
        "range-slider-init": {
          insert: function (e) {
            var t = e.elm;
            this.range.create({
              el: t
            })
          },
          destroy: function (e) {
            var t = e.elm;
            t.f7Range && t.f7Range.destroy()
          }
        }
      }
    };

  function Nn(e) {
    return (Nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function On(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function Dn(e, t) {
    return !t || "object" !== Nn(t) && "function" != typeof t ? An(e) : t
  }

  function jn(e) {
    return (jn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function An(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function In(e, t) {
    return (In = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var Bn = function (e) {
      function t(e) {
        var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var a = An(n = Dn(this, jn(t).call(this, r, [e]))),
          o = {};
        a.useModulesParams(o), a.params = E.extend(o, r);
        var i = a.params.el;
        if (!i) return Dn(n, a);
        var s = g(i);
        if (0 === s.length) return Dn(n, a);
        if (s[0].f7Toggle) return Dn(n, s[0].f7Toggle);
        var l, c = s.children('input[type="checkbox"]');
        E.extend(a, {
          app: e,
          $el: s,
          el: s[0],
          $inputEl: c,
          inputEl: c[0],
          disabled: s.hasClass("disabled") || c.hasClass("disabled") || c.attr("disabled") || c[0].disabled
        }), Object.defineProperty(a, "checked", {
          enumerable: !0,
          configurable: !0,
          set: function (e) {
            a && void 0 !== a.$inputEl && a.checked !== e && (c[0].checked = e, a.$inputEl.trigger("change"))
          },
          get: function () {
            return c[0].checked
          }
        }), s[0].f7Toggle = a;
        var u, p, d, f, h, v = {};

        function m(e) {
          l || a.disabled || (v.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, v.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, p = 0, l = !0, u = void 0, f = E.now(), h = a.checked, d = s[0].offsetWidth, E.nextTick((function () {
            l && s.addClass("toggle-active-state")
          })))
        }

        function b(t) {
          if (l && !a.disabled) {
            var n, r = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
              o = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
              i = e.rtl ? -1 : 1;
            if (void 0 === u && (u = !!(u || Math.abs(o - v.y) > Math.abs(r - v.x))), u) l = !1;
            else t.preventDefault(), (p = r - v.x) * i < 0 && Math.abs(p) > d / 3 && h && (n = !0), p * i > 0 && Math.abs(p) > d / 3 && !h && (n = !0), n && (v.x = r, a.checked = !h, h = !h)
          }
        }

        function y() {
          if (!l || a.disabled) return u && s.removeClass("toggle-active-state"), void(l = !1);
          var t, n = e.rtl ? -1 : 1;
          l = !1, s.removeClass("toggle-active-state"), E.now() - f < 300 && (p * n < 0 && h && (t = !0), p * n > 0 && !h && (t = !0), t && (a.checked = !h))
        }

        function k() {
          a.$el.trigger("toggle:change"), a.emit("local::change toggleChange", a)
        }
        return a.attachEvents = function () {
          var t = !!T.passiveListener && {
            passive: !0
          };
          s.on(e.touchEvents.start, m, t), e.on("touchmove", b), e.on("touchend:passive", y), a.$inputEl.on("change", k)
        }, a.detachEvents = function () {
          var t = !!T.passiveListener && {
            passive: !0
          };
          s.off(e.touchEvents.start, m, t), e.off("touchmove", b), e.off("touchend:passive", y), a.$inputEl.off("change", k)
        }, a.useModules(), a.init(), n
      }
      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && In(e, t)
      }(t, e), n = t, (r = [{
        key: "toggle",
        value: function () {
          this.checked = !this.checked
        }
      }, {
        key: "init",
        value: function () {
          this.attachEvents()
        }
      }, {
        key: "destroy",
        value: function () {
          var e = this;
          e.$el.trigger("toggle:beforedestroy"), e.emit("local::beforeDestroy toggleBeforeDestroy", e), delete e.$el[0].f7Toggle, e.detachEvents(), E.deleteProps(e), e = null
        }
      }]) && On(n.prototype, r), a && On(n, a), t
    }(L),
    Pn = {
      name: "toggle",
      create: function () {
        this.toggle = R({
          defaultSelector: ".toggle",
          constructor: Bn,
          app: this,
          domProp: "f7Toggle"
        })
      },
      static: {
        Toggle: Bn
      },
      on: {
        tabMounted: function (e) {
          var t = this;
          g(e).find(".toggle-init").each((function (e, n) {
            return t.toggle.create({
              el: n
            })
          }))
        },
        tabBeforeRemove: function (e) {
          g(e).find(".toggle-init").each((function (e, t) {
            t.f7Toggle && t.f7Toggle.destroy()
          }))
        },
        pageInit: function (e) {
          var t = this;
          e.$el.find(".toggle-init").each((function (e, n) {
            return t.toggle.create({
              el: n
            })
          }))
        },
        pageBeforeRemove: function (e) {
          e.$el.find(".toggle-init").each((function (e, t) {
            t.f7Toggle && t.f7Toggle.destroy()
          }))
        }
      },
      vnode: {
        "toggle-init": {
          insert: function (e) {
            var t = e.elm;
            this.toggle.create({
              el: t
            })
          },
          destroy: function (e) {
            var t = e.elm;
            t.f7Toggle && t.f7Toggle.destroy()
          }
        }
      }
    };

  function $n(e) {
    return ($n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function Ln(e, t) {
    return !t || "object" !== $n(t) && "function" != typeof t ? zn(e) : t
  }

  function _n(e) {
    return (_n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function zn(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function Rn(e, t) {
    return (Rn = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var Hn = function (e) {
      function t(e, n) {
        var r;
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var a, s, l, c, u = E.extend({
            on: {}
          }, e.params.popup, n),
          p = zn(r = Ln(this, _n(t).call(this, e, u)));
        if (p.params = u, (a = p.params.el ? g(p.params.el).eq(0) : g(p.params.content).filter((function (e, t) {
            return 1 === t.nodeType
          })).eq(0)) && a.length > 0 && a[0].f7Modal) return Ln(r, a[0].f7Modal);
        if (0 === a.length) return Ln(r, p.destroy());

        function d(t) {
          var n = t.target,
            r = g(n);
          if (!(!e.device.desktop && e.device.cordova && (i.Keyboard && i.Keyboard.isVisible || i.cordova.plugins && i.cordova.plugins.Keyboard && i.cordova.plugins.Keyboard.isVisible)) && 0 === r.closest(p.el).length && p.params && p.params.closeByBackdropClick && p.params.backdrop && p.backdropEl && p.backdropEl === n) {
            var a = !0;
            p.$el.nextAll(".popup.modal-in").each((function (e, t) {
              var n = t.f7Modal;
              n && n.params.closeByBackdropClick && n.params.backdrop && n.backdropEl === p.backdropEl && (a = !1)
            })), a && p.close()
          }
        }

        function f(e) {
          27 === e.keyCode && p.params.closeOnEscape && p.close()
        }

        function h(t) {
          return (e.height - 2 * t) / e.height
        }
        p.params.backdrop && p.params.backdropEl ? s = g(p.params.backdropEl) : p.params.backdrop && 0 === (s = e.root.children(".popup-backdrop")).length && (s = g('<div class="popup-backdrop"></div>'), e.root.append(s)), E.extend(p, {
          app: e,
          push: a.hasClass("popup-push") || p.params.push,
          $el: a,
          el: a[0],
          $backdropEl: s,
          backdropEl: s && s[0],
          type: "popup",
          $htmlEl: g("html")
        }), p.params.push && a.addClass("popup-push");
        var v, m, b, y, k, w, C, M, x, S, N, O = !0,
          D = !1,
          j = !1;

        function A(e) {
          !D && O && p.params.swipeToClose && (p.params.swipeHandler && 0 === g(e.target).closest(p.params.swipeHandler).length || (D = !0, j = !1, v = {
            x: "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            y: "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY
          }, y = E.now(), b = void 0, p.params.swipeHandler || "touchstart" !== e.type || (w = g(e.target).closest(".page-content")[0])))
        }

        function I(t) {
          if (D) {
            if (m = {
                x: "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                y: "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY
              }, void 0 === b && (b = !!(b || Math.abs(m.x - v.x) > Math.abs(m.y - v.y))), b) return D = !1, void(j = !1);
            k = v.y - m.y, c && l && k > 0 && (k = 0);
            var n = k < 0 ? "to-bottom" : "to-top";
            if (a.transition(0), "string" == typeof p.params.swipeToClose && n !== p.params.swipeToClose) return a.transform(""), void a.transition("");
            if (j) p.emit("local::swipeMove popupSwipeMove", p), p.$el.trigger("popup:swipemove");
            else {
              if (c && l && (S = a[0].offsetHeight, N = e.root.children(".view, .views")), w && (C = w.scrollTop, x = w.scrollHeight, M = w.offsetHeight, !(x === M || "to-bottom" === n && 0 === C || "to-top" === n && C === x - M))) return a.transform(""), a.transition(""), D = !1, void(j = !1);
              j = !0, p.emit("local::swipeStart popupSwipeStart", p), p.$el.trigger("popup:swipestart")
            }
            if (t.preventDefault(), c && l) {
              var r = 1 - Math.abs(k / S),
                o = 1 - (1 - h(l)) * r;
              N.transition(0).transform("translate3d(0,0,0) scale(".concat(o, ")"))
            }
            a.transition(0).transform("translate3d(0,".concat(-k, "px,0)"))
          }
        }

        function B() {
          if (D = !1, j) {
            p.emit("local::swipeEnd popupSwipeEnd", p), p.$el.trigger("popup:swipeend"), j = !1, O = !1, a.transition(""), c && l && N.transition("").transform("");
            var e = k <= 0 ? "to-bottom" : "to-top";
            if ("string" == typeof p.params.swipeToClose && e !== p.params.swipeToClose) return a.transform(""), void(O = !0);
            var t = Math.abs(k),
              n = (new Date).getTime() - y;
            n < 300 && t > 20 || n >= 300 && t > 100 ? E.nextTick((function () {
              "to-bottom" === e ? a.addClass("swipe-close-to-bottom") : a.addClass("swipe-close-to-top"), a.transform(""), p.emit("local::swipeclose popupSwipeClose", p), p.$el.trigger("popup:swipeclose"), p.close(), O = !0
            })) : (O = !0, a.transform(""))
          }
        }
        var P = !!T.passiveListener && {
          passive: !0
        };
        return p.params.swipeToClose && (a.on(e.touchEvents.start, A, P), e.on("touchmove", I), e.on("touchend:passive", B), p.once("popupDestroy", (function () {
          a.off(e.touchEvents.start, A, P), e.off("touchmove", I), e.off("touchend:passive", B)
        }))), p.on("open", (function () {
          p.params.closeOnEscape && g(o).on("keydown", f), p.push && (c = p.push && (e.width < 630 || e.height < 630 || a.hasClass("popup-tablet-fullscreen"))), c && (l = parseInt(a.css("--f7-popup-push-offset"), 10), Number.isNaN(l) && (l = 0), l && (a.addClass("popup-push"), p.$htmlEl.addClass("with-modal-popup-push"), p.$htmlEl[0].style.setProperty("--f7-popup-push-scale", h(l))))
        })), p.on("opened", (function () {
          a.removeClass("swipe-close-to-bottom swipe-close-to-top"), p.params.closeByBackdropClick && e.on("click", d)
        })), p.on("close", (function () {
          p.params.closeOnEscape && g(o).off("keydown", f), p.params.closeByBackdropClick && e.off("click", d), c && l && (p.$htmlEl.removeClass("with-modal-popup-push"), p.$htmlEl.addClass("with-modal-popup-push-closing"))
        })), p.on("closed", (function () {
          c && l && (p.$htmlEl.removeClass("with-modal-popup-push-closing"), p.$htmlEl[0].style.removeProperty("--f7-popup-push-scale"))
        })), a[0].f7Modal = p, Ln(r, p)
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Rn(e, t)
      }(t, e), t
    }(mt),
    Un = {
      name: "popup",
      params: {
        popup: {
          backdrop: !0,
          backdropEl: void 0,
          closeByBackdropClick: !0,
          closeOnEscape: !1,
          swipeToClose: !1,
          swipeHandler: null,
          push: !1
        }
      },
      static: {
        Popup: Hn
      },
      create: function () {
        this.popup = Q({
          app: this,
          constructor: Hn,
          defaultSelector: ".popup.modal-in",
          parentSelector: ".popup"
        })
      },
      clicks: {
        ".popup-open": function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = this;
          n.popup.open(t.popup, t.animate, e)
        },
        ".popup-close": function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = this;
          n.popup.close(t.popup, t.animate, e)
        }
      }
    };

  function Fn(e) {
    return (Fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function Qn(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function Vn(e, t) {
    return !t || "object" !== Fn(t) && "function" != typeof t ? qn(e) : t
  }

  function Yn(e) {
    return (Yn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function qn(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function Wn(e, t) {
    return (Wn = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var Zn = function (e) {
      function t(e) {
        var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var a = qn(n = Vn(this, Yn(t).call(this, r, [e]))),
          o = E.extend({}, e.params.tooltip);
        a.useModulesParams(o), a.params = E.extend(o, r);
        var i = a.params.targetEl;
        if (!i) return Vn(n, a);
        var s = g(i);
        if (0 === s.length) return Vn(n, a);
        if (s[0].f7Tooltip) return Vn(n, s[0].f7Tooltip);
        var l = g(a.render()).eq(0);
        E.extend(a, {
          app: e,
          $targetEl: s,
          targetEl: s && s[0],
          $el: l,
          el: l && l[0],
          text: a.params.text || "",
          visible: !1,
          opened: !1
        }), s[0].f7Tooltip = a;
        var c, u = {};

        function p() {
          a.opened ? a.hide() : a.show(this)
        }

        function d(e) {
          a.opened && (g(e.target).closest(s).length || g(e.target).closest(a.$el).length) || a.hide()
        }

        function f(e) {
          c || (c = !0, u.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, u.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, a.show(this))
        }

        function h(e) {
          if (c) {
            var t = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
              n = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
            Math.pow(Math.pow(t - u.x, 2) + Math.pow(n - u.y, 2), .5) > 50 && (c = !1, a.hide())
          }
        }

        function v() {
          c && (c = !1, a.hide())
        }

        function m() {
          a.show(this)
        }

        function b() {
          a.hide()
        }

        function y() {
          l.hasClass("tooltip-in") || l.removeClass("tooltip-out").remove()
        }
        return a.attachEvents = function () {
          if (l.on("transitionend", y), "click" === a.params.trigger) return s.on("click", p), void g("html").on("click", d);
          if (T.touch) {
            var t = !!T.passiveListener && {
              passive: !0
            };
            s.on(e.touchEvents.start, f, t), e.on("touchmove", h), e.on("touchend:passive", v)
          } else s.on(T.pointerEvents ? "pointerenter" : "mouseenter", m), s.on(T.pointerEvents ? "pointerleave" : "mouseleave", b)
        }, a.detachEvents = function () {
          if (l.off("transitionend", y), "click" === a.params.trigger) return s.off("click", p), void g("html").off("click", d);
          if (T.touch) {
            var t = !!T.passiveListener && {
              passive: !0
            };
            s.off(e.touchEvents.start, f, t), e.off("touchmove", h), e.off("touchend:passive", v)
          } else s.off(T.pointerEvents ? "pointerenter" : "mouseenter", m), s.off(T.pointerEvents ? "pointerleave" : "mouseleave", b)
        }, a.useModules(), a.init(), Vn(n, a)
      }
      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Wn(e, t)
      }(t, e), n = t, (r = [{
        key: "position",
        value: function (e) {
          var t = this.$el,
            n = this.app,
            r = this.params.offset || 0;
          t.css({
            left: "",
            top: ""
          });
          var a, o, i, s, l = g(e || this.targetEl),
            c = [t.width(), t.height()],
            u = c[0],
            p = c[1];
          if (t.css({
              left: "",
              top: ""
            }), l && l.length > 0) {
            a = l.outerWidth(), o = l.outerHeight();
            var d = l.offset();
            i = d.left - n.left, s = d.top - n.top;
            var f = l.parents(".page");
            f.length > 0 && (s -= f[0].scrollTop)
          }
          var h = [0, 0, 0],
            v = h[0],
            m = h[1],
            b = "top";
          p + r < s ? m = s - p - r : p < n.height - s - o ? (b = "bottom", m = s + o + r) : (b = "middle", (m = o / 2 + s - p / 2) <= 0 ? m = 8 : m + p >= n.height && (m = n.height - p - 8)), "top" === b || "bottom" === b ? ((v = a / 2 + i - u / 2) < 8 && (v = 8), v + u > n.width && (v = n.width - u - 8), v < 0 && (v = 0)) : "middle" === b && ((v = i - u) < 8 || v + u > n.width) && (v < 8 && (v = i + a), v + u > n.width && (v = n.width - u - 8)), t.css({
            top: "".concat(m, "px"),
            left: "".concat(v, "px")
          })
        }
      }, {
        key: "show",
        value: function (e) {
          var t = this.app,
            n = this.$el,
            r = this.$targetEl;
          t.root.append(n), this.position(e);
          var a = g(e);
          return this.visible = !0, this.opened = !0, r.trigger("tooltip:show"), n.trigger("tooltip:show"), a.length && a[0] !== r[0] && a.trigger("tooltip:show"), this.emit("local::show tooltipShow", this), n.removeClass("tooltip-out").addClass("tooltip-in"), this
        }
      }, {
        key: "hide",
        value: function () {
          var e = this.$el,
            t = this.$targetEl;
          return this.visible = !1, this.opened = !1, t.trigger("tooltip:hide"), e.trigger("tooltip:hide"), this.emit("local::hide tooltipHide", this), e.addClass("tooltip-out").removeClass("tooltip-in"), this
        }
      }, {
        key: "render",
        value: function () {
          if (this.params.render) return this.params.render.call(this, this);
          var e = this.params,
            t = e.cssClass,
            n = e.text;
          return '\n      <div class="tooltip '.concat(t || "", '">\n        <div class="tooltip-content">').concat(n || "", "</div>\n      </div>\n    ").trim()
        }
      }, {
        key: "setText",
        value: function (e) {
          return void 0 === e ? this : (this.params.text = e, this.text = e, this.$el && this.$el.children(".tooltip-content").html(e), this.opened && this.position(), this)
        }
      }, {
        key: "init",
        value: function () {
          this.attachEvents()
        }
      }, {
        key: "destroy",
        value: function () {
          this.$targetEl && !this.destroyed && (this.$targetEl.trigger("tooltip:beforedestroy"), this.emit("local::beforeDestroy tooltipBeforeDestroy", this), this.$el.remove(), delete this.$targetEl[0].f7Tooltip, this.detachEvents(), E.deleteProps(this), this.destroyed = !0)
        }
      }]) && Qn(n.prototype, r), a && Qn(n, a), t
    }(L),
    Gn = {
      name: "tooltip",
      static: {
        Tooltip: Zn
      },
      create: function () {
        this.tooltip = R({
          defaultSelector: ".tooltip",
          constructor: Zn,
          app: this,
          domProp: "f7Tooltip"
        }), this.tooltip.show = function (e) {
          var t = g(e);
          if (0 !== t.length) {
            var n = t[0].f7Tooltip;
            if (n) return n.show(t[0]), n
          }
        }, this.tooltip.hide = function (e) {
          var t = g(e);
          if (0 !== t.length) {
            var n = t[0].f7Tooltip;
            if (n) return n.hide(), n
          }
        }, this.tooltip.setText = function (e, t) {
          var n = g(e);
          if (0 !== n.length) {
            var r = n[0].f7Tooltip;
            if (r) return r.setText(t), r
          }
        }
      },
      params: {
        tooltip: {
          targetEl: null,
          text: null,
          cssClass: null,
          render: null,
          offset: 0,
          trigger: "hover"
        }
      },
      on: {
        tabMounted: function (e) {
          var t = this;
          g(e).find(".tooltip-init").each((function (e, n) {
            var r = g(n).attr("data-tooltip");
            r && t.tooltip.create({
              targetEl: n,
              text: r
            })
          }))
        },
        tabBeforeRemove: function (e) {
          g(e).find(".tooltip-init").each((function (e, t) {
            t.f7Tooltip && t.f7Tooltip.destroy()
          }))
        },
        pageInit: function (e) {
          var t = this;
          e.$el.find(".tooltip-init").each((function (e, n) {
            var r = g(n).attr("data-tooltip");
            r && t.tooltip.create({
              targetEl: n,
              text: r
            })
          })), "ios" === t.theme && e.view && e.view.router.dynamicNavbar && e.$navbarEl && e.$navbarEl.length > 0 && e.$navbarEl.find(".tooltip-init").each((function (e, n) {
            var r = g(n).attr("data-tooltip");
            r && t.tooltip.create({
              targetEl: n,
              text: r
            })
          }))
        },
        pageBeforeRemove: function (e) {
          e.$el.find(".tooltip-init").each((function (e, t) {
            t.f7Tooltip && t.f7Tooltip.destroy()
          })), "ios" === this.theme && e.view && e.view.router.dynamicNavbar && e.$navbarEl && e.$navbarEl.length > 0 && e.$navbarEl.find(".tooltip-init").each((function (e, t) {
            t.f7Tooltip && t.f7Tooltip.destroy()
          }))
        }
      },
      vnode: {
        "tooltip-init": {
          insert: function (e) {
            var t = e.elm,
              n = g(t).attr("data-tooltip");
            n && this.tooltip.create({
              targetEl: t,
              text: n
            })
          },
          update: function (e) {
            var t = e.elm;
            t.f7Tooltip && e && e.data && e.data.attrs && e.data.attrs["data-tooltip"] && t.f7Tooltip.setText(e.data.attrs["data-tooltip"])
          },
          destroy: function (e) {
            var t = e.elm;
            t.f7Tooltip && t.f7Tooltip.destroy()
          }
        }
      }
    };

  function Jn(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function Xn(e) {
    return (Xn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  var Kn = {
      text: function (e) {
        return null == e ? "" : e
      },
      noUndefinedProps: function (e) {
        var t = {};
        return Object.keys(e).forEach((function (n) {
          void 0 !== e[n] && (t[n] = e[n])
        })), t
      },
      isTrueProp: function (e) {
        return !0 === e || "" === e
      },
      isStringProp: function (e) {
        return "string" == typeof e && "" !== e
      },
      isObject: function (e) {
        return "object" === Xn(e) && null !== e && e.constructor && e.constructor === Object
      },
      now: function () {
        return Date.now()
      },
      extend: function () {
        for (var e, t, n = !0, r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
        "boolean" == typeof a[0] ? (n = a[0], e = a[1], a.splice(0, 2), t = a) : (e = a[0], a.splice(0, 1), t = a);
        for (var i = 0; i < t.length; i += 1) {
          var s = a[i];
          if (null != s)
            for (var l = Object.keys(Object(s)), c = 0, u = l.length; c < u; c += 1) {
              var p = l[c],
                d = Object.getOwnPropertyDescriptor(s, p);
              void 0 !== d && d.enumerable && (n ? Kn.isObject(e[p]) && Kn.isObject(s[p]) ? Kn.extend(e[p], s[p]) : !Kn.isObject(e[p]) && Kn.isObject(s[p]) ? (e[p] = {}, Kn.extend(e[p], s[p])) : e[p] = s[p] : e[p] = s[p])
            }
        }
        return e
      },
      flattenArray: function () {
        for (var e = [], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return n.forEach((function (t) {
          Array.isArray(t) ? e.push.apply(e, Jn(Kn.flattenArray.apply(Kn, Jn(t)))) : e.push(t)
        })), e
      },
      classNames: function () {
        for (var e = [], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        n.forEach((function (t) {
          "object" === Xn(t) && t.constructor === Object ? Object.keys(t).forEach((function (n) {
            t[n] && e.push(n)
          })) : t && e.push(t)
        }));
        var a = [];
        return e.forEach((function (e) {
          a.indexOf(e) < 0 && a.push(e)
        })), a.join(" ")
      },
      bindMethods: function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = 0; n < t.length; n += 1) e[t[n]] && (e[t[n]] = e[t[n]].bind(e))
      }
    },
    er = Kn;

  function tr(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var nr = {
    colorProps: {
      color: String,
      colorTheme: String,
      textColor: String,
      bgColor: String,
      borderColor: String,
      rippleColor: String,
      themeDark: Boolean
    },
    colorClasses: function (e) {
      var t, n = e.color,
        r = e.colorTheme,
        a = e.textColor,
        o = e.bgColor,
        i = e.borderColor,
        s = e.rippleColor;
      return tr(t = {
        "theme-dark": e.themeDark
      }, "color-".concat(n), n), tr(t, "color-theme-".concat(r), r), tr(t, "text-color-".concat(a), a), tr(t, "bg-color-".concat(o), o), tr(t, "border-color-".concat(i), i), tr(t, "ripple-color-".concat(s), s), t
    },
    linkIconProps: {
      icon: String,
      iconMaterial: String,
      iconF7: String,
      iconIos: String,
      iconMd: String,
      iconAurora: String,
      iconColor: String,
      iconSize: [String, Number]
    },
    linkRouterProps: {
      back: Boolean,
      external: Boolean,
      force: Boolean,
      animate: {
        type: Boolean,
        default: void 0
      },
      ignoreCache: Boolean,
      reloadCurrent: Boolean,
      reloadAll: Boolean,
      reloadPrevious: Boolean,
      reloadDetail: {
        type: Boolean,
        default: void 0
      },
      routeTabId: String,
      view: String,
      routeProps: Object,
      preventRouter: Boolean,
      transition: String
    },
    linkRouterAttrs: function (e) {
      var t, n, r = e.force,
        a = e.reloadCurrent,
        o = e.reloadPrevious,
        i = e.reloadAll,
        s = e.reloadDetail,
        l = e.animate,
        c = e.ignoreCache,
        u = e.routeTabId,
        p = e.view,
        d = e.transition;
      return "animate" in e && void 0 !== l && (t = l.toString()), "reloadDetail" in e && void 0 !== s && (n = s.toString()), {
        "data-force": r || void 0,
        "data-reload-current": a || void 0,
        "data-reload-all": i || void 0,
        "data-reload-previous": o || void 0,
        "data-reload-detail": n,
        "data-animate": t,
        "data-ignore-cache": c || void 0,
        "data-route-tab-id": u || void 0,
        "data-view": er.isStringProp(p) ? p : void 0,
        "data-transition": er.isStringProp(d) ? d : void 0
      }
    },
    linkRouterClasses: function (e) {
      var t = e.back,
        n = e.linkBack;
      return {
        back: t || n,
        external: e.external,
        "prevent-router": e.preventRouter
      }
    },
    linkActionsProps: {
      searchbarEnable: [Boolean, String],
      searchbarDisable: [Boolean, String],
      searchbarClear: [Boolean, String],
      searchbarToggle: [Boolean, String],
      panelOpen: [Boolean, String],
      panelClose: [Boolean, String],
      panelToggle: [Boolean, String],
      popupOpen: [Boolean, String],
      popupClose: [Boolean, String],
      actionsOpen: [Boolean, String],
      actionsClose: [Boolean, String],
      popoverOpen: [Boolean, String],
      popoverClose: [Boolean, String],
      loginScreenOpen: [Boolean, String],
      loginScreenClose: [Boolean, String],
      sheetOpen: [Boolean, String],
      sheetClose: [Boolean, String],
      sortableEnable: [Boolean, String],
      sortableDisable: [Boolean, String],
      sortableToggle: [Boolean, String],
      cardOpen: [Boolean, String],
      cardPreventOpen: [Boolean, String],
      cardClose: [Boolean, String],
      menuClose: {
        type: [Boolean, String],
        default: void 0
      }
    },
    linkActionsAttrs: function (e) {
      var t = e.searchbarEnable,
        n = e.searchbarDisable,
        r = e.searchbarClear,
        a = e.searchbarToggle,
        o = e.panelOpen,
        i = e.panelClose,
        s = e.panelToggle,
        l = e.popupOpen,
        c = e.popupClose,
        u = e.actionsOpen,
        p = e.actionsClose,
        d = e.popoverOpen,
        f = e.popoverClose,
        h = e.loginScreenOpen,
        v = e.loginScreenClose,
        g = e.sheetOpen,
        m = e.sheetClose,
        b = e.sortableEnable,
        y = e.sortableDisable,
        k = e.sortableToggle,
        w = e.cardOpen,
        C = e.cardClose;
      return {
        "data-searchbar": er.isStringProp(t) && t || er.isStringProp(n) && n || er.isStringProp(r) && r || er.isStringProp(a) && a || void 0,
        "data-panel": er.isStringProp(o) && o || er.isStringProp(i) && i || er.isStringProp(s) && s || void 0,
        "data-popup": er.isStringProp(l) && l || er.isStringProp(c) && c || void 0,
        "data-actions": er.isStringProp(u) && u || er.isStringProp(p) && p || void 0,
        "data-popover": er.isStringProp(d) && d || er.isStringProp(f) && f || void 0,
        "data-sheet": er.isStringProp(g) && g || er.isStringProp(m) && m || void 0,
        "data-login-screen": er.isStringProp(h) && h || er.isStringProp(v) && v || void 0,
        "data-sortable": er.isStringProp(b) && b || er.isStringProp(y) && y || er.isStringProp(k) && k || void 0,
        "data-card": er.isStringProp(w) && w || er.isStringProp(C) && C || void 0
      }
    },
    linkActionsClasses: function (e) {
      var t = e.searchbarEnable,
        n = e.searchbarDisable,
        r = e.searchbarClear,
        a = e.searchbarToggle,
        o = e.panelOpen,
        i = e.panelClose,
        s = e.panelToggle,
        l = e.popupOpen,
        c = e.popupClose,
        u = e.actionsClose,
        p = e.actionsOpen,
        d = e.popoverOpen,
        f = e.popoverClose,
        h = e.loginScreenOpen,
        v = e.loginScreenClose,
        g = e.sheetOpen,
        m = e.sheetClose,
        b = e.sortableEnable,
        y = e.sortableDisable,
        k = e.sortableToggle,
        w = e.cardOpen,
        C = e.cardPreventOpen,
        M = e.cardClose,
        x = e.menuClose;
      return {
        "searchbar-enable": t || "" === t,
        "searchbar-disable": n || "" === n,
        "searchbar-clear": r || "" === r,
        "searchbar-toggle": a || "" === a,
        "panel-close": i || "" === i,
        "panel-open": o || "" === o,
        "panel-toggle": s || "" === s,
        "popup-close": c || "" === c,
        "popup-open": l || "" === l,
        "actions-close": u || "" === u,
        "actions-open": p || "" === p,
        "popover-close": f || "" === f,
        "popover-open": d || "" === d,
        "sheet-close": m || "" === m,
        "sheet-open": g || "" === g,
        "login-screen-close": v || "" === v,
        "login-screen-open": h || "" === h,
        "sortable-enable": b || "" === b,
        "sortable-disable": y || "" === y,
        "sortable-toggle": k || "" === k,
        "card-close": M || "" === M,
        "card-open": w || "" === w,
        "card-prevent-open": C || "" === C,
        "menu-close": x || "" === x
      }
    }
  };

  function rr(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var ar = function (e) {
      var t = {},
        n = e.$props;
      Object.keys(n).forEach((function (e) {
        void 0 !== n[e] && (t[e] = n[e])
      }));
      var r = [];
      return Object.keys(e.$slots).forEach((function (t) {
        r.push.apply(r, rr(e.$slots[t]))
      })), t.children = r, t
    },
    or = (Object.assign({
      id: [String, Number]
    }, nr.colorProps), function (e, t) {
      for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
      var o = e;
      t.split(" ").forEach((function (e) {
        o.$emit.apply(o, [e].concat(r))
      }))
    }),
    ir = (Object.assign({
      id: [String, Number],
      opened: Boolean
    }, nr.colorProps), Object.assign({
      id: [String, Number]
    }, nr.colorProps), Object.assign({
      id: [String, Number],
      accordionOpposite: Boolean
    }, nr.colorProps), Object.assign({
      id: [String, Number],
      bold: Boolean,
      close: {
        type: Boolean,
        default: !0
      }
    }, nr.colorProps), Object.assign({
      id: [String, Number]
    }, nr.colorProps), Object.assign({
      id: [String, Number],
      bold: Boolean
    }, nr.colorProps), Object.assign({
      id: [String, Number],
      opened: Boolean,
      grid: Boolean,
      convertToPopover: Boolean,
      forceToPopover: Boolean,
      target: [String, Object],
      backdrop: Boolean,
      backdropEl: [String, Object, window.HTMLElement],
      closeByBackdropClick: Boolean,
      closeByOutsideClick: Boolean,
      closeOnEscape: Boolean
    }, nr.colorProps), {
      instance: null,
      Framework7: null,
      events: null,
      init: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = ir.events,
          a = ir.Framework7Cn,
          o = er.extend({}, t, {
            root: e
          });
        n && n.length && !o.routes && (o.routes = n);
        var i = new a(o);
        i, i.initialized ? (ir.instance = i, i, r.emit("ready", ir.instance)) : i.on("init", (function () {
          ir.instance = i, i, r.emit("ready", ir.instance)
        }))
      },
      ready: function (e) {
        e && (ir.instance ? e(ir.instance) : ir.events.once("ready", e))
      },
      routers: {
        views: [],
        tabs: [],
        modals: null
      }
    }),
    sr = ir,
    lr = function (e, t, n) {
      var r, a = e;
      r = "function" == typeof t ? t(a.state, a.props) : t, Object.keys(r).forEach((function (e) {
        a.$set(a.state, e, r[e])
      })), "function" == typeof n && n()
    },
    cr = {
      name: "f7-routable-modals",
      data: function () {
        return {
          state: {
            modals: []
          }
        }
      },
      render: function () {
        var e = this.$createElement;
        return e("div", {
          ref: "el",
          class: "framework7-modals"
        }, [this.state.modals.map((function (t) {
          var n = t.component;
          return e(n, {
            key: t.id,
            props: t.props
          })
        }))])
      },
      updated: function () {
        this.routerData && sr.events.emit("modalsRouterDidUpdate", this.routerData)
      },
      beforeDestroy: function () {
        this.routerData && (sr.routers.modals = null, this.routerData = null, delete this.routerData)
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el;
        e.routerData = {
          modals: e.state.modals,
          el: t,
          component: e,
          setModals: function (t) {
            e.setState({
              modals: t
            })
          }
        }, sr.routers.modals = e.routerData
      },
      methods: {
        setState: function (e, t) {
          lr(this, e, t)
        }
      }
    },
    ur = {
      name: "f7-app",
      props: Object.assign({
        id: [String, Number],
        params: Object,
        routes: Array
      }, nr.colorProps),
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.id,
          r = t.style,
          a = t.className;
        return e("div", {
          ref: "el",
          style: r,
          class: er.classNames(a, "framework7-root", nr.colorClasses(t)),
          attrs: {
            id: n || "framework7-root"
          }
        }, [this.$slots.default, e(cr)])
      },
      mounted: function () {
        var e = this.props,
          t = e.params,
          n = void 0 === t ? {} : t,
          r = e.routes,
          a = this.$refs.el,
          o = a.parentNode;
        o && o !== document.body && o.parentNode === document.body && (o.style.height = "100%"), sr.instance || sr.init(a, n, r)
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    pr = (Object.assign({
      id: [String, Number],
      noShadow: Boolean,
      noHairline: Boolean,
      inner: {
        type: Boolean,
        default: !0
      },
      innerClass: String,
      innerClassName: String
    }, nr.colorProps), {
      name: "f7-badge",
      props: Object.assign({
        id: [String, Number]
      }, nr.colorProps),
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.className,
          r = t.id;
        return e("span", {
          style: t.style,
          class: er.classNames(n, "badge", nr.colorClasses(t)),
          attrs: {
            id: r
          }
        }, [this.$slots.default])
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    }),
    dr = {
      name: "f7-block-footer",
      props: Object.assign({
        id: [String, Number]
      }, nr.colorProps),
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.className,
          r = t.id;
        return e("div", {
          style: t.style,
          class: er.classNames(n, "block-footer", nr.colorClasses(t)),
          attrs: {
            id: r
          }
        }, [this.$slots.default])
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    fr = {
      name: "f7-block-header",
      props: Object.assign({
        id: [String, Number]
      }, nr.colorProps),
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.className,
          r = t.id;
        return e("div", {
          style: t.style,
          class: er.classNames(n, "block-header", nr.colorClasses(t)),
          attrs: {
            id: r
          }
        }, [this.$slots.default])
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    hr = {
      name: "f7-block-title",
      props: Object.assign({
        id: [String, Number],
        large: Boolean,
        medium: Boolean
      }, nr.colorProps),
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.className,
          r = t.id,
          a = t.style,
          o = t.large,
          i = t.medium;
        return e("div", {
          style: a,
          class: er.classNames(n, "block-title", {
            "block-title-large": o,
            "block-title-medium": i
          }, nr.colorClasses(t)),
          attrs: {
            id: r
          }
        }, [this.$slots.default])
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    vr = {
      name: "f7-block",
      props: Object.assign({
        id: [String, Number],
        inset: Boolean,
        xsmallInset: Boolean,
        smallInset: Boolean,
        mediumInset: Boolean,
        largeInset: Boolean,
        xlargeInset: Boolean,
        strong: Boolean,
        tabs: Boolean,
        tab: Boolean,
        tabActive: Boolean,
        accordionList: Boolean,
        accordionOpposite: Boolean,
        noHairlines: Boolean,
        noHairlinesMd: Boolean,
        noHairlinesIos: Boolean,
        noHairlinesAurora: Boolean
      }, nr.colorProps),
      created: function () {
        er.bindMethods(this, ["onTabShow", "onTabHide"])
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el;
        t && (e.eventTargetEl = t, e.$f7ready((function (t) {
          t.on("tabShow", e.onTabShow), t.on("tabHide", e.onTabHide)
        })))
      },
      beforeDestroy: function () {
        this.$refs.el && this.$f7 && (this.$f7.off("tabShow", this.onTabShow), this.$f7.off("tabHide", this.onTabHide), delete this.eventTargetEl)
      },
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.className,
          r = t.inset,
          a = t.xsmallInset,
          o = t.smallInset,
          i = t.mediumInset,
          s = t.largeInset,
          l = t.xlargeInset,
          c = t.strong,
          u = t.accordionList,
          p = t.accordionOpposite,
          d = t.tabs,
          f = t.tab,
          h = t.tabActive,
          v = t.noHairlines,
          g = t.noHairlinesIos,
          m = t.noHairlinesMd,
          b = t.noHairlinesAurora,
          y = t.id;
        return e("div", {
          style: t.style,
          class: er.classNames(n, "block", {
            inset: r,
            "xsmall-inset": a,
            "small-inset": o,
            "medium-inset": i,
            "large-inset": s,
            "xlarge-inset": l,
            "block-strong": c,
            "accordion-list": u,
            "accordion-opposite": p,
            tabs: d,
            tab: f,
            "tab-active": h,
            "no-hairlines": v,
            "no-hairlines-md": m,
            "no-hairlines-ios": g,
            "no-hairlines-aurora": b
          }, nr.colorClasses(t)),
          ref: "el",
          attrs: {
            id: y
          }
        }, [this.$slots.default])
      },
      methods: {
        onTabShow: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("tabShow tab:show", e)
        },
        onTabHide: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("tabHide tab:hide", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    gr = {
      name: "f7-icon",
      props: Object.assign({
        id: [String, Number],
        material: String,
        f7: String,
        icon: String,
        ios: String,
        aurora: String,
        md: String,
        tooltip: String,
        tooltipTrigger: String,
        size: [String, Number]
      }, nr.colorProps),
      data: function () {
        var e = this;
        ar(this);
        return {
          state: function () {
            var t = e,
              n = t.$f7;
            return n || t.$f7ready((function () {
              t.setState({
                _theme: t.$theme
              })
            })), {
              _theme: n ? t.$theme : null
            }
          }()
        }
      },
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.id,
          r = t.style,
          a = t.size;
        return "number" != typeof a && parseFloat(a) !== 1 * a || (a = "".concat(a, "px")), e("i", {
          ref: "el",
          style: er.extend({
            fontSize: a,
            width: a,
            height: a
          }, r),
          class: this.classes,
          attrs: {
            id: n
          }
        }, [this.iconTextComputed, this.$slots.default])
      },
      watch: {
        "props.tooltip": function (e) {
          if (!e && this.f7Tooltip) return this.f7Tooltip.destroy(), this.f7Tooltip = null, void delete this.f7Tooltip;
          e && !this.f7Tooltip && this.$f7 ? this.f7Tooltip = this.$f7.tooltip.create({
            targetEl: this.$refs.el,
            text: e,
            trigger: this.props.tooltipTrigger
          }) : e && this.f7Tooltip && this.f7Tooltip.setText(e)
        }
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el;
        if (t) {
          var n = e.props,
            r = n.tooltip,
            a = n.tooltipTrigger;
          r && e.$f7ready((function (n) {
            e.f7Tooltip = n.tooltip.create({
              targetEl: t,
              text: r,
              trigger: a
            })
          }))
        }
      },
      beforeDestroy: function () {
        this.f7Tooltip && this.f7Tooltip.destroy && (this.f7Tooltip.destroy(), this.f7Tooltip = null, delete this.f7Tooltip)
      },
      computed: {
        iconTextComputed: function () {
          var e = this.props,
            t = e.material,
            n = e.f7,
            r = e.md,
            a = e.ios,
            o = e.aurora,
            i = this.state._theme,
            s = t || n;
          return r && i && i.md && (r.indexOf("material:") >= 0 || r.indexOf("f7:") >= 0) ? s = r.split(":")[1] : a && i && i.ios && (a.indexOf("material:") >= 0 || a.indexOf("f7:") >= 0) ? s = a.split(":")[1] : o && i && i.aurora && (o.indexOf("material:") >= 0 || o.indexOf("f7:") >= 0) && (s = o.split(":")[1]), s
        },
        classes: function () {
          var e, t = {
              icon: !0
            },
            n = this.props,
            r = this.state._theme,
            a = n.material,
            o = n.f7,
            i = n.icon,
            s = n.md,
            l = n.ios,
            c = n.aurora,
            u = n.className;
          if (r && r.ios ? e = l : r && r.md ? e = s : r && r.aurora && (e = c), e) {
            var p = e.split(":"),
              d = p[0],
              f = p[1];
            "material" !== d && "f7" !== d || (t["material-icons"] = "material" === d, t["f7-icons"] = "f7" === d), "icon" === d && (t[f] = !0)
          } else t = {
            icon: !0,
            "material-icons": a,
            "f7-icons": o
          }, i && (t[i] = !0);
          return er.classNames(u, t, nr.colorClasses(n))
        },
        props: function () {
          return ar(this)
        }
      },
      methods: {
        setState: function (e, t) {
          lr(this, e, t)
        }
      }
    },
    mr = function (e) {
      if (!e) return e;
      var t = "style class domProps slot key ref attrs on props".split(" ");
      return Object.keys(e).forEach((function (n) {
        if ("className" === n) return e.class = e.className, void delete e.className;
        if ("dangerouslySetInnerHTML" === n) return e.domProps || (e.domProps = {}), e.domProps.innerHTML = e[n], e.domProps.innerHTML && e.domProps.innerHTML.__html && (e.domProps.innerHTML = e.domProps.innerHTML.__html), void delete e.dangerouslySetInnerHTML;
        if (n.match(/^on?([A-Z])/)) {
          e.on || (e.on = {});
          var r = n.replace(/(^on?)([A-Z])/, (function (e, t, n) {
            return n.toLowerCase()
          }));
          return e.on[r] = e[n], void delete e[n]
        }
        t.indexOf(n) >= 0 || (e.attrs || (e.attrs = {}), e.attrs[n] || (e.attrs[n] = e[n], delete e[n]))
      })), e
    },
    br = {
      name: "f7-button",
      props: Object.assign({
        id: [String, Number],
        text: String,
        tabLink: [Boolean, String],
        tabLinkActive: Boolean,
        type: String,
        href: {
          type: [String, Boolean],
          default: "#"
        },
        target: String,
        round: Boolean,
        roundMd: Boolean,
        roundIos: Boolean,
        roundAurora: Boolean,
        fill: Boolean,
        fillMd: Boolean,
        fillIos: Boolean,
        fillAurora: Boolean,
        large: Boolean,
        largeMd: Boolean,
        largeIos: Boolean,
        largeAurora: Boolean,
        small: Boolean,
        smallMd: Boolean,
        smallIos: Boolean,
        smallAurora: Boolean,
        raised: Boolean,
        raisedMd: Boolean,
        raisedIos: Boolean,
        raisedAurora: Boolean,
        outline: Boolean,
        outlineMd: Boolean,
        outlineIos: Boolean,
        outlineAurora: Boolean,
        active: Boolean,
        disabled: Boolean,
        tooltip: String,
        tooltipTrigger: String
      }, nr.colorProps, {}, nr.linkIconProps, {}, nr.linkRouterProps, {}, nr.linkActionsProps),
      render: function () {
        var e, t, n = this.$createElement,
          r = this.props,
          a = r.text,
          o = r.icon,
          i = r.iconMaterial,
          s = r.iconF7,
          l = r.iconMd,
          c = r.iconIos,
          u = r.iconAurora,
          p = r.iconColor,
          d = r.iconSize,
          f = r.id,
          h = r.style,
          v = r.type;
        return a && (t = n("span", [a])), (o || i || s || l || c || u) && (e = n(gr, {
          attrs: {
            material: i,
            f7: s,
            icon: o,
            md: l,
            ios: c,
            aurora: u,
            color: p,
            size: d
          }
        })), n("submit" === v || "reset" === v || "button" === v ? "button" : "a", mr(Object.assign({
          ref: "el",
          style: h,
          class: this.classes
        }, this.attrs, {
          attrs: {
            id: f
          }
        })), [e, t, this.$slots.default])
      },
      computed: {
        attrs: function () {
          var e = this.props,
            t = e.href,
            n = e.target,
            r = e.tabLink,
            a = e.type,
            o = t;
          return !0 === t && (o = "#"), !1 === t && (o = void 0), er.extend({
            href: o,
            target: n,
            type: a,
            "data-tab": er.isStringProp(r) && r || void 0
          }, nr.linkRouterAttrs(e), nr.linkActionsAttrs(e))
        },
        classes: function () {
          var e = this.props,
            t = e.tabLink,
            n = e.tabLinkActive,
            r = e.round,
            a = e.roundIos,
            o = e.roundAurora,
            i = e.roundMd,
            s = e.fill,
            l = e.fillIos,
            c = e.fillAurora,
            u = e.fillMd,
            p = e.large,
            d = e.largeIos,
            f = e.largeAurora,
            h = e.largeMd,
            v = e.small,
            g = e.smallIos,
            m = e.smallAurora,
            b = e.smallMd,
            y = e.raised,
            k = e.raisedIos,
            w = e.raisedAurora,
            C = e.raisedMd,
            M = e.active,
            x = e.outline,
            S = e.outlineIos,
            E = e.outlineAurora,
            T = e.outlineMd,
            N = e.disabled,
            O = e.className;
          return er.classNames(O, "button", {
            "tab-link": t || "" === t,
            "tab-link-active": n,
            "button-round": r,
            "button-round-ios": a,
            "button-round-aurora": o,
            "button-round-md": i,
            "button-fill": s,
            "button-fill-ios": l,
            "button-fill-aurora": c,
            "button-fill-md": u,
            "button-large": p,
            "button-large-ios": d,
            "button-large-aurora": f,
            "button-large-md": h,
            "button-small": v,
            "button-small-ios": g,
            "button-small-aurora": m,
            "button-small-md": b,
            "button-raised": y,
            "button-raised-ios": k,
            "button-raised-aurora": w,
            "button-raised-md": C,
            "button-active": M,
            "button-outline": x,
            "button-outline-ios": S,
            "button-outline-aurora": E,
            "button-outline-md": T,
            disabled: N
          }, nr.colorClasses(e), nr.linkRouterClasses(e), nr.linkActionsClasses(e))
        },
        props: function () {
          return ar(this)
        }
      },
      methods: {
        onClick: function (e) {
          this.dispatchEvent("click", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      },
      watch: {
        "props.tooltip": function (e) {
          if (!e && this.f7Tooltip) return this.f7Tooltip.destroy(), this.f7Tooltip = null, void delete this.f7Tooltip;
          e && !this.f7Tooltip && this.$f7 ? this.f7Tooltip = this.$f7.tooltip.create({
            targetEl: this.$refs.el,
            text: e,
            trigger: this.props.tooltipTrigger
          }) : e && this.f7Tooltip && this.f7Tooltip.setText(e)
        }
      },
      created: function () {
        er.bindMethods(this, ["onClick"])
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el;
        t.addEventListener("click", e.onClick);
        var n = e.props,
          r = n.tooltip,
          a = n.tooltipTrigger,
          o = n.routeProps;
        o && (t.f7RouteProps = o), r && e.$f7ready((function (n) {
          e.f7Tooltip = n.tooltip.create({
            targetEl: t,
            text: r,
            trigger: a
          })
        }))
      },
      updated: function () {
        var e = this.$refs.el,
          t = this.props.routeProps;
        t && (e.f7RouteProps = t)
      },
      beforeDestroy: function () {
        var e = this.$refs.el;
        e.removeEventListener("click", this.onClick), delete e.f7RouteProps, this.f7Tooltip && this.f7Tooltip.destroy && (this.f7Tooltip.destroy(), this.f7Tooltip = null, delete this.f7Tooltip)
      }
    },
    yr = (Object.assign({
      id: [String, Number],
      padding: {
        type: Boolean,
        default: !0
      }
    }, nr.colorProps), Object.assign({
      id: [String, Number]
    }, nr.colorProps), Object.assign({
      id: [String, Number]
    }, nr.colorProps), Object.assign({
      id: [String, Number],
      title: [String, Number],
      content: [String, Number],
      footer: [String, Number],
      outline: Boolean,
      expandable: Boolean,
      expandableAnimateWidth: Boolean,
      expandableOpened: Boolean,
      animate: {
        type: Boolean,
        default: void 0
      },
      hideNavbarOnOpen: {
        type: Boolean,
        default: void 0
      },
      hideToolbarOnOpen: {
        type: Boolean,
        default: void 0
      },
      hideStatusbarOnOpen: {
        type: Boolean,
        default: void 0
      },
      scrollableEl: {
        type: String,
        default: void 0
      },
      swipeToClose: {
        type: Boolean,
        default: void 0
      },
      closeByBackdropClick: {
        type: Boolean,
        default: void 0
      },
      backdrop: {
        type: Boolean,
        default: void 0
      },
      backdropEl: {
        type: String,
        default: void 0
      },
      noShadow: Boolean,
      noBorder: Boolean,
      padding: {
        type: Boolean,
        default: !0
      }
    }, nr.colorProps), {
      name: "f7-checkbox",
      props: Object.assign({
        id: [String, Number],
        checked: Boolean,
        indeterminate: Boolean,
        name: [Number, String],
        value: [Number, String, Boolean],
        disabled: Boolean,
        readonly: Boolean,
        defaultChecked: Boolean
      }, nr.colorProps),
      render: function () {
        var e, t = this.$createElement,
          n = this.props,
          r = n.name,
          a = n.value,
          o = n.disabled,
          i = n.readonly,
          s = n.checked,
          l = (n.defaultChecked, n.id),
          c = n.style;
        e = t("input", {
          ref: "inputEl",
          domProps: {
            value: a,
            disabled: o,
            readonly: i,
            checked: s
          },
          on: {
            change: this.onChange
          },
          attrs: {
            type: "checkbox",
            name: r
          }
        });
        var u = t("i", {
          class: "icon-checkbox"
        });
        return t("label", {
          style: c,
          class: this.classes,
          attrs: {
            id: l
          }
        }, [e, u, this.$slots.default])
      },
      computed: {
        classes: function () {
          var e = this.props,
            t = e.className,
            n = e.disabled;
          return er.classNames(t, {
            checkbox: !0,
            disabled: n
          }, nr.colorClasses(e))
        },
        props: function () {
          return ar(this)
        }
      },
      created: function () {
        er.bindMethods(this, ["onChange"])
      },
      mounted: function () {
        var e = this.$refs.inputEl;
        this.props.indeterminate && e && (e.indeterminate = !0)
      },
      updated: function () {
        var e = this.$refs.inputEl,
          t = this.props.indeterminate;
        e && (e.indeterminate = t)
      },
      methods: {
        onChange: function (e) {
          this.dispatchEvent("change", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      }
    });
  Object.assign({
    id: [String, Number],
    media: String,
    text: [String, Number],
    deleteable: Boolean,
    mediaBgColor: String,
    mediaTextColor: String,
    outline: Boolean
  }, nr.colorProps, {}, nr.linkIconProps);
  Object.assign({
    id: [String, Number],
    tag: {
      type: String,
      default: "div"
    },
    width: {
      type: [Number, String],
      default: "auto"
    },
    xsmall: {
      type: [Number, String]
    },
    small: {
      type: [Number, String]
    },
    medium: {
      type: [Number, String]
    },
    large: {
      type: [Number, String]
    },
    xlarge: {
      type: [Number, String]
    },
    resizable: Boolean,
    resizableFixed: Boolean,
    resizableAbsolute: Boolean,
    resizableHandler: {
      type: Boolean,
      default: !0
    }
  }, nr.colorProps), String, Number, Object.assign({
    id: [String, Number],
    fabClose: Boolean,
    label: String,
    target: String,
    tooltip: String,
    tooltipTrigger: String
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    position: {
      type: String,
      default: "top"
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    morphTo: String,
    href: [Boolean, String],
    target: String,
    text: String,
    position: {
      type: String,
      default: "right-bottom"
    },
    tooltip: String,
    tooltipTrigger: String
  }, nr.colorProps), String, Number, String, Number, String, Number, String, String, String, String, Number, String, Number, String, String, Number, String, Number, String, String, String, Number, String, Number, String;
  var kr = {
      name: "f7-toggle",
      props: Object.assign({
        id: [String, Number],
        init: {
          type: Boolean,
          default: !0
        },
        checked: Boolean,
        defaultChecked: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        name: String,
        value: [String, Number, Array]
      }, nr.colorProps),
      render: function () {
        var e, t = this.$createElement,
          n = this.props,
          r = n.className,
          a = n.disabled,
          o = n.id,
          i = n.style,
          s = n.name,
          l = n.readonly,
          c = n.checked,
          u = (n.defaultChecked, n.value),
          p = er.classNames("toggle", r, {
            disabled: a
          }, nr.colorClasses(n));
        return e = t("input", {
          ref: "inputEl",
          domProps: {
            disabled: a,
            readOnly: l,
            value: u,
            checked: c
          },
          on: {
            change: this.onChange
          },
          attrs: {
            type: "checkbox",
            name: s
          }
        }), t("label", {
          ref: "el",
          style: i,
          class: p,
          attrs: {
            id: o
          }
        }, [e, t("span", {
          class: "toggle-icon"
        })])
      },
      watch: {
        "props.checked": function (e) {
          this.f7Toggle && (this.f7Toggle.checked = e)
        }
      },
      created: function () {
        er.bindMethods(this, ["onChange"])
      },
      mounted: function () {
        var e = this;
        e.props.init && e.$f7ready((function (t) {
          e.f7Toggle = t.toggle.create({
            el: e.$refs.el,
            on: {
              change: function (t) {
                e.dispatchEvent("toggle:change toggleChange", t.checked)
              }
            }
          })
        }))
      },
      beforeDestroy: function () {
        this.f7Toggle && this.f7Toggle.destroy && this.f7Toggle.$el && this.f7Toggle.destroy()
      },
      methods: {
        toggle: function () {
          this.f7Toggle && this.f7Toggle.toggle && this.f7Toggle.toggle()
        },
        onChange: function (e) {
          this.dispatchEvent("change", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    wr = {
      name: "f7-range",
      props: Object.assign({
        id: [String, Number],
        init: {
          type: Boolean,
          default: !0
        },
        value: {
          type: [Number, Array, String],
          default: 0
        },
        min: {
          type: [Number, String],
          default: 0
        },
        max: {
          type: [Number, String],
          default: 100
        },
        step: {
          type: [Number, String],
          default: 1
        },
        label: {
          type: Boolean,
          default: !1
        },
        dual: {
          type: Boolean,
          default: !1
        },
        vertical: {
          type: Boolean,
          default: !1
        },
        verticalReversed: {
          type: Boolean,
          default: !1
        },
        draggableBar: {
          type: Boolean,
          default: !0
        },
        formatLabel: Function,
        scale: {
          type: Boolean,
          default: !1
        },
        scaleSteps: {
          type: Number,
          default: 5
        },
        scaleSubSteps: {
          type: Number,
          default: 0
        },
        formatScaleLabel: Function,
        limitKnobPosition: {
          type: Boolean,
          default: void 0
        },
        name: String,
        input: Boolean,
        inputId: String,
        disabled: Boolean
      }, nr.colorProps),
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = this.props,
          r = n.id,
          a = n.disabled,
          o = n.className,
          i = n.style,
          s = n.input,
          l = n.inputId,
          c = n.name,
          u = n.vertical,
          p = n.verticalReversed;
        return e("div", {
          ref: "el",
          style: i,
          class: er.classNames(o, "range-slider", {
            "range-slider-horizontal": !u,
            "range-slider-vertical": u,
            "range-slider-vertical-reversed": u && p,
            disabled: a
          }, nr.colorClasses(t)),
          attrs: {
            id: r
          }
        }, [s && e("input", {
          attrs: {
            type: "range",
            name: c,
            id: l
          }
        }), this.$slots.default])
      },
      watch: {
        "props.value": function (e) {
          this.f7Range && this.f7Range.setValue(e)
        }
      },
      mounted: function () {
        var e = this;
        e.$f7ready((function (t) {
          if (e.props.init) {
            var n = e.props,
              r = n.value,
              a = n.min,
              o = n.max,
              i = n.step,
              s = n.label,
              l = n.dual,
              c = n.draggableBar,
              u = n.vertical,
              p = n.verticalReversed,
              d = n.formatLabel,
              f = n.scale,
              h = n.scaleSteps,
              v = n.scaleSubSteps,
              g = n.formatScaleLabel,
              m = n.limitKnobPosition;
            e.f7Range = t.range.create(er.noUndefinedProps({
              el: e.$refs.el,
              value: r,
              min: a,
              max: o,
              step: i,
              label: s,
              dual: l,
              draggableBar: c,
              vertical: u,
              verticalReversed: p,
              formatLabel: d,
              scale: f,
              scaleSteps: h,
              scaleSubSteps: v,
              formatScaleLabel: g,
              limitKnobPosition: m,
              on: {
                change: function (t, n) {
                  e.dispatchEvent("range:change rangeChange", n)
                },
                changed: function (t, n) {
                  e.dispatchEvent("range:changed rangeChanged", n)
                }
              }
            }))
          }
        }))
      },
      beforeDestroy: function () {
        this.f7Range && this.f7Range.destroy && this.f7Range.destroy()
      },
      methods: {
        setValue: function (e) {
          this.f7Range && this.f7Range.setValue && this.f7Range.setValue(e)
        },
        getValue: function () {
          if (this.f7Range && this.f7Range.getValue) return this.f7Range.getValue()
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    Cr = {
      name: "f7-text-editor",
      props: Object.assign({
        id: [String, Number]
      }, nr.colorProps, {
        mode: {
          type: String,
          default: void 0
        },
        value: {
          type: String,
          default: void 0
        },
        buttons: Array,
        customButtons: Object,
        dividers: {
          type: Boolean,
          default: void 0
        },
        imageUrlText: {
          type: String,
          default: void 0
        },
        linkUrlText: {
          type: String,
          default: void 0
        },
        placeholder: {
          type: String,
          default: void 0
        },
        clearFormattingOnPaste: {
          type: Boolean,
          default: void 0
        },
        resizable: {
          type: Boolean,
          default: !1
        }
      }),
      created: function () {
        er.bindMethods(this, "onChange onInput onFocus onBlur onButtonClick onKeyboardOpen onKeyboardClose onPopoverOpen onPopoverClose".split(" "))
      },
      mounted: function () {
        var e = this,
          t = this.props,
          n = t.mode,
          r = t.value,
          a = t.buttons,
          o = t.customButtons,
          i = t.dividers,
          s = t.imageUrlText,
          l = t.linkUrlText,
          c = t.placeholder,
          u = t.clearFormattingOnPaste,
          p = er.noUndefinedProps({
            el: this.$refs.el,
            mode: n,
            value: r,
            buttons: a,
            customButtons: o,
            dividers: i,
            imageUrlText: s,
            linkUrlText: l,
            placeholder: c,
            clearFormattingOnPaste: u,
            on: {
              change: this.onChange,
              input: this.onInput,
              focus: this.onFocus,
              blur: this.onBlur,
              buttonClick: this.onButtonClick,
              keyboardOpen: this.onKeyboardOpen,
              keyboardClose: this.onKeyboardClose,
              popoverOpen: this.onPopoverOpen,
              popoverClose: this.onPopoverClose
            }
          });
        this.$f7ready((function (t) {
          e.f7TextEditor = t.textEditor.create(p)
        }))
      },
      beforeDestroy: function () {
        this.f7TextEditor && this.f7TextEditor.destroy && this.f7TextEditor.destroy()
      },
      watch: {
        "props.value": function () {
          this.f7TextEditor && this.f7TextEditor.setValue(this.props.value)
        }
      },
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.className,
          r = t.id,
          a = t.style,
          o = t.resizable;
        return e("div", {
          ref: "el",
          style: a,
          class: er.classNames(n, "text-editor", o && "text-editor-resizable", nr.colorClasses(t)),
          attrs: {
            id: r
          }
        }, [this.$slots["root-start"], e("div", {
          class: "text-editor-content",
          attrs: {
            contenteditable: !0
          }
        }, [this.$slots.default]), this.$slots["root-end"], this.$slots.root])
      },
      methods: {
        onChange: function (e, t) {
          this.dispatchEvent("texteditor:change textEditorChange", t)
        },
        onInput: function () {
          this.dispatchEvent("texteditor:change textEditorChange")
        },
        onFocus: function () {
          this.dispatchEvent("texteditor:focus textEditorFocus")
        },
        onBlur: function () {
          this.dispatchEvent("texteditor:blur textEditorBlur")
        },
        onButtonClick: function (e, t) {
          this.dispatchEvent("texteditor:buttonclick textEditorButtonClick", t)
        },
        onKeyboardOpen: function () {
          this.dispatchEvent("texteditor:keyboardopen textEditorKeyboardOpen")
        },
        onKeyboardClose: function () {
          this.dispatchEvent("texteditor:keyboardclose textEditorKeyboardClose")
        },
        onPopoverOpen: function () {
          this.dispatchEvent("texteditor:popoveropen textEditorPopoverOpen")
        },
        onPopoverClose: function () {
          this.dispatchEvent("texteditor:popoverclose textEditorPopoverClose")
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    Mr = (Object.assign({
      type: String,
      name: String,
      value: [String, Number, Array, Date, Object],
      defaultValue: [String, Number, Array],
      placeholder: String,
      id: [String, Number],
      inputId: [String, Number],
      size: [String, Number],
      accept: [String, Number],
      autocomplete: [String],
      autocorrect: [String],
      autocapitalize: [String],
      spellcheck: [String],
      autofocus: Boolean,
      autosave: String,
      checked: Boolean,
      disabled: Boolean,
      max: [String, Number],
      min: [String, Number],
      step: [String, Number],
      maxlength: [String, Number],
      minlength: [String, Number],
      multiple: Boolean,
      readonly: Boolean,
      required: Boolean,
      inputStyle: [String, Object],
      pattern: String,
      validate: [Boolean, String],
      validateOnBlur: Boolean,
      onValidate: Function,
      tabindex: [String, Number],
      resizable: Boolean,
      clearButton: Boolean,
      noFormStoreData: Boolean,
      noStoreData: Boolean,
      ignoreStoreData: Boolean,
      errorMessage: String,
      errorMessageForce: Boolean,
      info: String,
      outline: Boolean,
      wrap: {
        type: Boolean,
        default: !0
      },
      dropdown: {
        type: [String, Boolean],
        default: "auto"
      },
      calendarParams: Object,
      colorPickerParams: Object,
      textEditorParams: Object
    }, nr.colorProps), {
      name: "f7-link",
      props: Object.assign({
        id: [String, Number],
        noLinkClass: Boolean,
        text: String,
        tabLink: [Boolean, String],
        tabLinkActive: Boolean,
        tabbarLabel: Boolean,
        iconOnly: Boolean,
        badge: [String, Number],
        badgeColor: [String],
        iconBadge: [String, Number],
        href: {
          type: [String, Boolean],
          default: "#"
        },
        target: String,
        tooltip: String,
        tooltipTrigger: String,
        smartSelect: Boolean,
        smartSelectParams: Object
      }, nr.colorProps, {}, nr.linkIconProps, {}, nr.linkRouterProps, {}, nr.linkActionsProps),
      data: function () {
        return {
          state: {
            isTabbarLabel: ar(this).tabbarLabel
          }
        }
      },
      render: function () {
        var e, t, n, r, a = this.$createElement,
          o = this,
          i = o.props,
          s = i.text,
          l = i.badge,
          c = i.badgeColor,
          u = i.iconOnly,
          p = i.iconBadge,
          d = i.icon,
          f = i.iconColor,
          h = i.iconSize,
          v = i.iconMaterial,
          g = i.iconF7,
          m = i.iconMd,
          b = i.iconIos,
          y = i.iconAurora,
          k = i.id,
          w = i.style,
          C = o.$slots.default || [];
        return Object.keys(o.$slots).forEach((function (e) {
          void 0 !== o.$slots[e] && "default" !== e && o.$slots[e].forEach((function (e) {
            return C.push(e)
          }))
        })), s && (l && (n = a(pr, {
          attrs: {
            color: c
          }
        }, [l])), t = a("span", {
          class: o.state.isTabbarLabel ? "tabbar-label" : ""
        }, [s, n])), (d || v || g || m || b || y) && (p && (r = a(pr, {
          attrs: {
            color: c
          }
        }, [p])), e = a(gr, {
          attrs: {
            material: v,
            f7: g,
            icon: d,
            md: m,
            ios: b,
            aurora: y,
            color: f,
            size: h
          }
        }, [r])), u || !s && C && 0 === C.length || !s && !C ? o.iconOnlyComputed = !0 : o.iconOnlyComputed = !1, a("a", mr(Object.assign({
          ref: "el",
          style: w,
          class: o.classes
        }, o.attrs, {
          attrs: {
            id: k
          }
        })), [e, t, C])
      },
      watch: {
        "props.tooltip": function (e) {
          if (!e && this.f7Tooltip) return this.f7Tooltip.destroy(), this.f7Tooltip = null, void delete this.f7Tooltip;
          e && !this.f7Tooltip && this.$f7 ? this.f7Tooltip = this.$f7.tooltip.create({
            targetEl: this.$refs.el,
            text: e,
            trigger: this.props.tooltipTrigger
          }) : e && this.f7Tooltip && this.f7Tooltip.setText(e)
        }
      },
      created: function () {
        er.bindMethods(this, ["onClick"])
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el;
        t.addEventListener("click", e.onClick);
        var n = e.props,
          r = n.tabbarLabel,
          a = n.tabLink,
          o = n.tooltip,
          i = n.tooltipTrigger,
          s = n.smartSelect,
          l = n.smartSelectParams,
          c = n.routeProps,
          u = !1;
        (r || (a || "" === a) && e.$$(t).parents(".tabbar-labels").length) && (u = !0), e.setState({
          isTabbarLabel: u
        }), c && (t.f7RouteProps = c), e.$f7ready((function (n) {
          if (s) {
            var r = er.extend({
              el: t
            }, l || {});
            e.f7SmartSelect = n.smartSelect.create(r)
          }
          o && (e.f7Tooltip = n.tooltip.create({
            targetEl: t,
            text: o,
            trigger: i
          }))
        }))
      },
      updated: function () {
        var e = this.$refs.el,
          t = this.props.routeProps;
        t && (e.f7RouteProps = t)
      },
      beforeDestroy: function () {
        var e = this.$refs.el;
        e.removeEventListener("click", this.onClick), delete e.f7RouteProps, this.f7SmartSelect && this.f7SmartSelect.destroy && this.f7SmartSelect.destroy(), this.f7Tooltip && this.f7Tooltip.destroy && (this.f7Tooltip.destroy(), this.f7Tooltip = null, delete this.f7Tooltip)
      },
      computed: {
        attrs: function () {
          var e = this.props,
            t = e.href,
            n = e.target,
            r = e.tabLink,
            a = t;
          return !0 === t && (a = "#"), !1 === t && (a = void 0), er.extend({
            href: a,
            target: n,
            "data-tab": er.isStringProp(r) && r || void 0
          }, nr.linkRouterAttrs(e), nr.linkActionsAttrs(e))
        },
        classes: function () {
          var e = this.props,
            t = e.tabLink,
            n = e.tabLinkActive,
            r = e.noLinkClass,
            a = e.smartSelect,
            o = e.className;
          return er.classNames(o, {
            link: !(r || this.state.isTabbarLabel),
            "icon-only": this.iconOnlyComputed,
            "tab-link": t || "" === t,
            "tab-link-active": n,
            "smart-select": a
          }, nr.colorClasses(e), nr.linkRouterClasses(e), nr.linkActionsClasses(e))
        },
        props: function () {
          return ar(this)
        }
      },
      methods: {
        onClick: function (e) {
          this.dispatchEvent("click", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        },
        setState: function (e, t) {
          lr(this, e, t)
        }
      }
    }),
    xr = (Object.assign({
      id: [String, Number],
      title: [String, Number],
      text: [String, Number],
      tabLink: [Boolean, String],
      tabLinkActive: Boolean,
      link: [Boolean, String],
      href: [Boolean, String],
      target: String,
      tooltip: String,
      tooltipTrigger: String
    }, nr.colorProps, {}, nr.linkRouterProps, {}, nr.linkActionsProps), Object.assign({
      id: [String, Number],
      mediaList: Boolean,
      sortable: Boolean,
      sortableOpposite: Boolean,
      sortableTapHold: Boolean,
      sortableMoveElements: {
        type: Boolean,
        default: void 0
      }
    }, nr.colorProps), Object.assign({
      id: [String, Number],
      init: {
        type: Boolean,
        default: !0
      },
      listEl: [String, Object],
      indexes: {
        type: [String, Array],
        default: "auto"
      },
      scrollList: {
        type: Boolean,
        default: !0
      },
      label: {
        type: Boolean,
        default: !1
      },
      iosItemHeight: {
        type: Number,
        default: 14
      },
      mdItemHeight: {
        type: Number,
        default: 14
      },
      auroraItemHeight: {
        type: Number,
        default: 14
      }
    }, nr.colorProps), {
      name: "f7-list-input",
      props: Object.assign({
        id: [String, Number],
        sortable: {
          type: Boolean,
          default: void 0
        },
        media: String,
        dropdown: {
          type: [String, Boolean],
          default: "auto"
        },
        wrap: {
          type: Boolean,
          default: !0
        },
        input: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "text"
        },
        name: String,
        value: [String, Number, Array, Date, Object],
        defaultValue: [String, Number, Array],
        readonly: Boolean,
        required: Boolean,
        disabled: Boolean,
        placeholder: String,
        inputId: [String, Number],
        size: [String, Number],
        accept: [String, Number],
        autocomplete: [String],
        autocorrect: [String],
        autocapitalize: [String],
        spellcheck: [String],
        autofocus: Boolean,
        autosave: String,
        max: [String, Number],
        min: [String, Number],
        step: [String, Number],
        maxlength: [String, Number],
        minlength: [String, Number],
        multiple: Boolean,
        inputStyle: [String, Object],
        pattern: String,
        validate: [Boolean, String],
        validateOnBlur: Boolean,
        onValidate: Function,
        tabindex: [String, Number],
        resizable: Boolean,
        clearButton: Boolean,
        noFormStoreData: Boolean,
        noStoreData: Boolean,
        ignoreStoreData: Boolean,
        errorMessage: String,
        errorMessageForce: Boolean,
        info: String,
        outline: Boolean,
        label: [String, Number],
        inlineLabel: Boolean,
        floatingLabel: Boolean,
        calendarParams: Object,
        colorPickerParams: Object,
        textEditorParams: Object
      }, nr.colorProps),
      data: function () {
        return {
          state: {
            isSortable: ar(this).sortable,
            inputFocused: !1,
            inputInvalid: !1
          }
        }
      },
      render: function () {
        var e, t = this.$createElement,
          n = this,
          r = n.state,
          a = r.inputFocused,
          o = r.inputInvalid,
          i = n.props,
          s = i.id,
          l = i.style,
          c = i.className,
          u = i.sortable,
          p = i.media,
          d = i.dropdown,
          f = i.input,
          h = i.wrap,
          v = i.type,
          g = i.name,
          m = i.value,
          b = i.defaultValue,
          y = i.readonly,
          k = i.required,
          w = i.disabled,
          C = i.placeholder,
          M = i.inputId,
          x = i.size,
          S = i.accept,
          E = i.autocomplete,
          T = i.autocorrect,
          N = i.autocapitalize,
          O = i.spellcheck,
          D = i.autofocus,
          j = i.autosave,
          A = i.max,
          I = i.min,
          B = i.step,
          P = i.maxlength,
          $ = i.minlength,
          L = i.multiple,
          _ = i.inputStyle,
          z = i.pattern,
          R = i.validate,
          H = i.validateOnBlur,
          U = i.tabindex,
          F = i.resizable,
          Q = i.clearButton,
          V = i.noFormStoreData,
          Y = i.noStoreData,
          q = i.ignoreStoreData,
          W = i.errorMessage,
          Z = i.errorMessageForce,
          G = i.info,
          J = i.outline,
          X = i.label,
          K = i.inlineLabel,
          ee = i.floatingLabel,
          te = i.textEditorParams,
          ne = n.domValue(),
          re = n.inputHasValue(),
          ae = u || n.state.isSortable,
          oe = function (e, r) {
            var s = "file" !== v && "datepicker" !== v && "colorpicker" !== v,
              l = "input" === e,
              c = v;
            "datepicker" !== c && "colorpicker" !== c || (c = "text");
            var u, p = er.classNames({
              resizable: "textarea" === c && F,
              "no-store-data": V || Y || q,
              "input-invalid": W && Z || o,
              "input-with-value": re,
              "input-focused": a
            });
            s && (u = void 0 !== m ? m : ne);
            var d = {};
            return "datepicker" !== v && "colorpicker" !== v && ("value" in i && (d.value = u), "defaultValue" in i && (d.defaultValue = b)), t(e, {
              ref: "inputEl",
              style: _,
              class: p,
              domProps: Object.assign({
                disabled: w,
                readOnly: y,
                multiple: L,
                required: k
              }, d),
              on: {
                focus: n.onFocus,
                blur: n.onBlur,
                input: n.onInput,
                change: n.onChange
              },
              attrs: {
                name: g,
                type: l ? c : void 0,
                placeholder: C,
                id: M,
                size: x,
                accept: S,
                autocomplete: E,
                autocorrect: T,
                autocapitalize: N,
                spellcheck: O,
                autofocus: D,
                autoSave: j,
                max: A,
                maxlength: P,
                min: I,
                minlength: $,
                step: B,
                pattern: z,
                validate: "string" == typeof R && R.length ? R : void 0,
                "data-validate": !0 === R || "" === R || !0 === H || "" === H || void 0,
                "data-validate-on-blur": !0 === H || "" === H || void 0,
                tabindex: U,
                "data-error-message": Z ? void 0 : W
              }
            }, [r])
          };
        f && (e = "select" === v || "textarea" === v || "file" === v ? "select" === v ? oe("select", n.$slots.default) : oe("file" === v ? "input" : "textarea") : "texteditor" === v ? t(Cr, mr(Object.assign({}, te, {
          on: {
            textEditorFocus: n.onFocus,
            textEditorBlur: n.onBlur,
            textEditorInput: n.onInput,
            textEditorChange: n.onChange
          },
          attrs: {
            value: m,
            resizable: F,
            placeholder: C
          }
        }))) : oe("input"));
        var ie = !!W || n.$slots["error-message"] && n.$slots["error-message"].length,
          se = t("div", {
            ref: "itemContentEl",
            class: er.classNames("item-content item-input", !h && c, !h && {
              disabled: w
            }, !h && nr.colorClasses(i), {
              "inline-label": K,
              "item-input-outline": J,
              "item-input-focused": a,
              "item-input-with-info": !!G || n.$slots.info && n.$slots.info.length,
              "item-input-with-value": re,
              "item-input-with-error-message": ie && Z || o,
              "item-input-invalid": ie && Z || o
            })
          }, [this.$slots["content-start"], (p || n.$slots.media) && t("div", {
            class: "item-media"
          }, [p && t("img", {
            attrs: {
              src: p
            }
          }), this.$slots.media]), t("div", {
            class: "item-inner"
          }, [this.$slots["inner-start"], (X || n.$slots.label) && t("div", {
            class: er.classNames("item-title item-label", {
              "item-floating-label": ee
            })
          }, [X, this.$slots.label]), t("div", {
            class: er.classNames("item-input-wrap", {
              "input-dropdown": "auto" === d ? "select" === v : d
            })
          }, [e, this.$slots.input, ie && Z && t("div", {
            class: "item-input-error-message"
          }, [W, this.$slots["error-message"]]), Q && t("span", {
            class: "input-clear-button"
          }), (G || n.$slots.info) && t("div", {
            class: "item-input-info"
          }, [G, this.$slots.info])]), this.$slots.inner, this.$slots["inner-end"]]), this.$slots.content, this.$slots["content-end"]]);
        return h ? t("li", {
          ref: "el",
          style: l,
          class: er.classNames(c, {
            disabled: w
          }, nr.colorClasses(i)),
          attrs: {
            id: s
          }
        }, [this.$slots["root-start"], se, ae && t("div", {
          class: "sortable-handler"
        }), this.$slots.root, this.$slots["root-end"]]) : se
      },
      watch: {
        "props.value": function () {
          this.$f7 && (this.updateInputOnDidUpdate = !0, this.f7Calendar && this.f7Calendar.setValue(this.props.value), this.f7ColorPicker && this.f7ColorPicker.setValue(this.props.value))
        }
      },
      created: function () {
        er.bindMethods(this, "onChange onInput onFocus onBlur onTextareaResize onInputNotEmpty onInputEmpty onInputClear".split(" "))
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el,
          n = e.$refs.itemContentEl;
        (t || n) && (e.$f7ready((function (t) {
          var n = e.props,
            r = n.validate,
            a = n.validateOnBlur,
            o = n.resizable,
            i = n.value,
            s = n.defaultValue,
            l = n.type,
            c = n.calendarParams,
            u = n.colorPickerParams,
            p = e.$refs.inputEl;
          p && (p.addEventListener("input:notempty", e.onInputNotEmpty, !1), p.addEventListener("textarea:resize", e.onTextareaResize, !1), p.addEventListener("input:empty", e.onInputEmpty, !1), p.addEventListener("input:clear", e.onInputClear, !1), "datepicker" === l && (e.f7Calendar = t.calendar.create(Object.assign({
            inputEl: p,
            value: i,
            on: {
              change: function (t, n) {
                e.dispatchEvent("calendar:change calendarChange", n)
              }
            }
          }, c || {}))), "colorpicker" === l && (e.f7ColorPicker = t.colorPicker.create(Object.assign({
            inputEl: p,
            value: i,
            on: {
              change: function (t, n) {
                e.dispatchEvent("colorpicker:change colorPickerChange", n)
              }
            }
          }, u || {}))), a || "" === a || !r && "" !== r || !(null != i && "" !== i || null != s && "" !== s) || setTimeout((function () {
            e.validateInput(p)
          }), 0), "textarea" === l && o && t.input.resizeTextarea(p))
        })), e.$listEl = e.$$(t || n).parents(".list, .list-group").eq(0), e.$listEl.length && e.setState({
          isSortable: e.$listEl.hasClass("sortable")
        }))
      },
      updated: function () {
        var e = this.$listEl;
        if (e && (!e || 0 !== e.length)) {
          var t = e.hasClass("sortable");
          t !== this.state.isSortable && this.setState({
            isSortable: t
          });
          var n = this.props,
            r = n.validate,
            a = n.validateOnBlur,
            o = n.resizable,
            i = n.type,
            s = this.$f7;
          if (s && this.updateInputOnDidUpdate) {
            var l = this.$refs.inputEl;
            if (!l) return;
            this.updateInputOnDidUpdate = !1, r && !a && this.validateInput(l), "textarea" === i && o && s.input.resizeTextarea(l)
          }
        }
      },
      beforeDestroy: function () {
        var e = this.$refs.inputEl;
        e && (e.removeEventListener("input:notempty", this.onInputNotEmpty, !1), e.removeEventListener("textarea:resize", this.onTextareaResize, !1), e.removeEventListener("input:empty", this.onInputEmpty, !1), e.removeEventListener("input:clear", this.onInputClear, !1), this.f7Calendar && this.f7Calendar.destroy && this.f7Calendar.destroy(), this.f7ColorPicker && this.f7ColorPicker.destroy && this.f7ColorPicker.destroy(), delete this.f7Calendar, delete this.f7ColorPicker)
      },
      methods: {
        domValue: function () {
          var e = this.$refs.inputEl;
          if (e) return e.value
        },
        inputHasValue: function () {
          var e = this.props,
            t = e.value;
          if ("datepicker" === e.type && Array.isArray(t) && 0 === t.length) return !1;
          var n = this.domValue();
          return void 0 === t ? n || 0 === n : t || 0 === t
        },
        validateInput: function (e) {
          if (this.$f7 && e) {
            var t = e.validity;
            if (t) {
              var n = this.props.onValidate;
              t.valid ? !1 !== this.state.inputInvalid && (n && n(!0), this.setState({
                inputInvalid: !1
              })) : (n && n(!1), !0 !== this.state.inputInvalid && this.setState({
                inputInvalid: !0
              }))
            }
          }
        },
        onTextareaResize: function (e) {
          this.dispatchEvent("textarea:resize textareaResize", e)
        },
        onInputNotEmpty: function (e) {
          this.dispatchEvent("input:notempty inputNotEmpty", e)
        },
        onInputEmpty: function (e) {
          this.dispatchEvent("input:empty inputEmpty", e)
        },
        onInputClear: function (e) {
          this.dispatchEvent("input:clear inputClear", e)
        },
        onInput: function () {
          for (var e = this, t = e.props, n = t.validate, r = t.validateOnBlur, a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
          e.dispatchEvent.apply(e, ["input"].concat(o)), !r && "" !== r && (n || "" === n) && e.$refs && e.$refs.inputEl && e.validateInput(e.$refs.inputEl)
        },
        onFocus: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          this.dispatchEvent.apply(this, ["focus"].concat(t)), this.setState({
            inputFocused: !0
          })
        },
        onBlur: function () {
          for (var e = this, t = e.props, n = t.validate, r = t.validateOnBlur, a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
          e.dispatchEvent.apply(e, ["blur"].concat(o)), (n || "" === n || r || "" === r) && e.$refs && e.$refs.inputEl && e.validateInput(e.$refs.inputEl), e.setState({
            inputFocused: !1
          })
        },
        onChange: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          this.dispatchEvent.apply(this, ["change"].concat(t)), "texteditor" === this.props.type && this.dispatchEvent("texteditor:change textEditorChange", t[0])
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        },
        setState: function (e, t) {
          lr(this, e, t)
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    });
  Object.assign({
    id: [String, Number]
  }, nr.colorProps);

  function Sr(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var Er = {
      name: "f7-list-item-content",
      props: Object.assign({
        id: [String, Number],
        title: [String, Number],
        text: [String, Number],
        media: String,
        subtitle: [String, Number],
        header: [String, Number],
        footer: [String, Number],
        after: [String, Number],
        badge: [String, Number],
        badgeColor: String,
        mediaList: Boolean,
        mediaItem: Boolean,
        checkbox: Boolean,
        checked: Boolean,
        defaultChecked: Boolean,
        indeterminate: Boolean,
        radio: Boolean,
        name: String,
        value: [String, Number, Array],
        readonly: Boolean,
        required: Boolean,
        disabled: Boolean
      }, nr.colorProps),
      render: function () {
        var e, t, n, r, a, o, i, s, l, c, u, p, d, f = this.$createElement,
          h = this.props,
          v = h.id,
          g = h.className,
          m = h.style,
          b = h.radio,
          y = h.checkbox,
          k = h.value,
          w = h.name,
          C = h.checked,
          M = (h.defaultChecked, h.readonly),
          x = h.disabled,
          S = h.required,
          E = h.media,
          T = h.header,
          N = h.footer,
          O = h.title,
          D = h.subtitle,
          j = h.text,
          A = h.after,
          I = h.badge,
          B = h.mediaList,
          P = h.mediaItem,
          $ = h.badgeColor,
          L = [],
          _ = [],
          z = [],
          R = [],
          H = [],
          U = [],
          F = [],
          Q = [],
          V = [],
          Y = [],
          q = [],
          W = [],
          Z = [],
          G = [],
          J = [],
          X = [],
          K = [],
          ee = this.$slots.default,
          te = [];
        ee && ee.length && ee.forEach((function (e) {
          Array.isArray(e) ? te.push.apply(te, Sr(e)) : te.push(e)
        }));
        var ne, re = this.$slots["content-start"];
        (re && re.length && L.push.apply(L, Sr(re)), te.forEach((function (e) {
          var t;
          void 0 !== e && ((t = e.data ? e.data.slot : void 0) && "inner" !== t || H.push(e), "content-start" === t && L.push(e), "content" === t && _.push(e), "content-end" === t && z.push(e), "after-start" === t && F.push(e), "after" === t && Q.push(e), "after-end" === t && V.push(e), "media" === t && Y.push(e), "inner-start" === t && R.push(e), "inner-end" === t && U.push(e), "before-title" === t && q.push(e), "title" === t && W.push(e), "after-title" === t && Z.push(e), "subtitle" === t && G.push(e), "text" === t && J.push(e), "header" === t && X.push(e), "footer" === t && K.push(e))
        })), (b || y) && (c = f("input", {
          ref: "inputEl",
          domProps: {
            checked: C,
            readonly: M,
            disabled: x,
            required: S,
            value: k
          },
          on: {
            change: this.onChange
          },
          attrs: {
            name: w,
            type: b ? "radio" : "checkbox"
          }
        }), u = f("i", {
          class: "icon icon-".concat(b ? "radio" : "checkbox")
        })), E || Y.length) && (E && (ne = f("img", {
          attrs: {
            src: E
          }
        })), l = f("div", {
          class: "item-media"
        }, [ne, Y]));
        var ae = P || B;
        return (T || X.length) && (p = f("div", {
          class: "item-header"
        }, [T, X])), (N || K.length) && (d = f("div", {
          class: "item-footer"
        }, [N, K])), (O || W.length || !ae && p || !ae && d) && (e = f("div", {
          class: "item-title"
        }, [!ae && p, O, W, !ae && d])), (D || G.length) && (i = f("div", {
          class: "item-subtitle"
        }, [D, G])), (j || J.length) && (s = f("div", {
          class: "item-text"
        }, [j, J])), (A || I || Q.length) && (A && (n = f("span", [A])), I && (r = f(pr, {
          attrs: {
            color: $
          }
        }, [I])), t = f("div", {
          class: "item-after"
        }, [F, n, r, Q, V])), ae ? (o = f("div", {
          class: "item-title-row"
        }, [q, e, Z, t]), a = f("div", {
          ref: "innerEl",
          class: "item-inner"
        }, [R, p, o, i, s, H, d, U])) : a = f("div", {
          ref: "innerEl",
          class: "item-inner"
        }, [R, q, e, Z, t, H, U]), f(y || b ? "label" : "div", {
          ref: "el",
          style: m,
          class: er.classNames(g, "item-content", {
            "item-checkbox": y,
            "item-radio": b
          }, nr.colorClasses(h)),
          attrs: {
            id: v
          }
        }, [L, c, u, l, a, _, z])
      },
      created: function () {
        er.bindMethods(this, "onClick onChange".split(" "))
      },
      mounted: function () {
        var e = this.$refs,
          t = e.el,
          n = e.inputEl;
        this.props.indeterminate && n && (n.indeterminate = !0), t.addEventListener("click", this.onClick)
      },
      updated: function () {
        var e = this.$refs.inputEl,
          t = this.props.indeterminate;
        e && (e.indeterminate = t)
      },
      beforeDestroy: function () {
        this.$refs.el.removeEventListener("click", this.onClick)
      },
      methods: {
        onClick: function (e) {
          this.dispatchEvent("click", e)
        },
        onChange: function (e) {
          this.dispatchEvent("change", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    Tr = (Object.assign({
      id: [String, Number]
    }, nr.colorProps), {
      name: "f7-list-item",
      props: Object.assign({
        id: [String, Number],
        title: [String, Number],
        text: [String, Number],
        media: String,
        subtitle: [String, Number],
        header: [String, Number],
        footer: [String, Number],
        tooltip: String,
        tooltipTrigger: String,
        link: [Boolean, String],
        target: String,
        after: [String, Number],
        badge: [String, Number],
        badgeColor: String,
        mediaItem: Boolean,
        mediaList: Boolean,
        divider: Boolean,
        groupTitle: Boolean,
        swipeout: Boolean,
        swipeoutOpened: Boolean,
        sortable: {
          type: Boolean,
          default: void 0
        },
        sortableOpposite: {
          type: Boolean,
          default: void 0
        },
        accordionItem: Boolean,
        accordionItemOpened: Boolean,
        smartSelect: Boolean,
        smartSelectParams: Object,
        noChevron: Boolean,
        chevronCenter: Boolean,
        checkbox: Boolean,
        radio: Boolean,
        checked: Boolean,
        defaultChecked: Boolean,
        indeterminate: Boolean,
        name: String,
        value: [String, Number, Array],
        readonly: Boolean,
        required: Boolean,
        disabled: Boolean,
        virtualListIndex: Number
      }, nr.colorProps, {}, nr.linkRouterProps, {}, nr.linkActionsProps),
      data: function () {
        var e = ar(this);
        return {
          state: {
            isMedia: e.mediaItem || e.mediaList,
            isSortable: e.sortable,
            isSortableOpposite: e.sortableOpposite,
            isSimple: !1
          }
        }
      },
      render: function () {
        var e, t, n = this.$createElement,
          r = this.props,
          a = r.id,
          o = r.style,
          i = r.className,
          s = r.title,
          l = r.text,
          c = r.media,
          u = r.subtitle,
          p = r.header,
          d = r.footer,
          f = r.link,
          h = r.href,
          v = r.target,
          g = r.after,
          m = r.badge,
          b = r.badgeColor,
          y = r.mediaItem,
          k = r.mediaList,
          w = r.divider,
          C = r.groupTitle,
          M = r.swipeout,
          x = r.accordionItem,
          S = r.accordionItemOpened,
          E = r.smartSelect,
          T = r.checkbox,
          N = r.radio,
          O = r.checked,
          D = r.defaultChecked,
          j = r.indeterminate,
          A = r.name,
          I = r.value,
          B = r.readonly,
          P = r.required,
          $ = r.disabled,
          L = r.sortable,
          _ = r.sortableOpposite,
          z = r.noChevron,
          R = r.chevronCenter,
          H = r.virtualListIndex,
          U = y || k || this.state.isMedia,
          F = L || this.state.isSortable,
          Q = F && (_ || this.state.isSortableOpposite),
          V = this.state.isSimple;
        if (!V && (t = n(Er, {
            on: !(f || h || x || E) ? {
              click: this.onClick,
              change: this.onChange
            } : void 0,
            attrs: {
              title: s,
              text: l,
              media: c,
              subtitle: u,
              after: g,
              header: p,
              footer: d,
              badge: m,
              badgeColor: b,
              mediaList: U,
              accordionItem: x,
              checkbox: T,
              checked: O,
              defaultChecked: D,
              indeterminate: j,
              radio: N,
              name: A,
              value: I,
              readonly: B,
              required: P,
              disabled: $
            }
          }, [this.$slots["content-start"], this.$slots.content, this.$slots["content-end"], this.$slots.media, this.$slots["inner-start"], this.$slots.inner, this.$slots["inner-end"], this.$slots["after-start"], this.$slots.after, this.$slots["after-end"], this.$slots.header, this.$slots.footer, this.$slots["before-title"], this.$slots.title, this.$slots["after-title"], this.$slots.subtitle, this.$slots.text, M || x ? null : this.$slots.default, F && !1 !== L && Q && n("div", {
            class: "sortable-handler",
            slot: "content-start"
          })]), f || h || x || E)) {
          var Y = Object.assign({
              href: !0 === f ? "" : f || h,
              target: v
            }, nr.linkRouterAttrs(r), {}, nr.linkActionsAttrs(r)),
            q = er.classNames({
              "item-link": !0,
              "smart-select": E
            }, nr.linkRouterClasses(r), nr.linkActionsClasses(r));
          e = n("a", mr(Object.assign({
            ref: "linkEl",
            class: q
          }, Y)), [t])
        }
        var W = er.classNames(i, {
          "item-divider": w,
          "list-group-title": C,
          "media-item": U,
          swipeout: M,
          "accordion-item": x,
          "accordion-item-opened": S,
          disabled: $ && !(N || T),
          "no-chevron": z,
          "chevron-center": R,
          "disallow-sorting": !1 === L
        }, nr.colorClasses(r));
        if (w || C) return n("li", {
          ref: "el",
          style: o,
          class: W,
          attrs: {
            id: a,
            "data-virtual-list-index": H
          }
        }, [n("span", [this.$slots.default || [s]])]);
        if (V) return n("li", {
          ref: "el",
          style: o,
          class: W,
          attrs: {
            id: a,
            "data-virtual-list-index": H
          }
        }, [s, this.$slots.default]);
        var Z = f || h || E || x ? e : t;
        return n("li", {
          ref: "el",
          style: o,
          class: W,
          attrs: {
            id: a,
            "data-virtual-list-index": H
          }
        }, [this.$slots["root-start"], M ? n("div", {
          class: "swipeout-content"
        }, [Z]) : Z, F && !1 !== L && !Q && n("div", {
          class: "sortable-handler"
        }), (M || x) && this.$slots.default, this.$slots.root, this.$slots["root-end"]])
      },
      watch: {
        "props.tooltip": function (e) {
          if (!e && this.f7Tooltip) return this.f7Tooltip.destroy(), this.f7Tooltip = null, void delete this.f7Tooltip;
          e && !this.f7Tooltip && this.$f7 ? this.f7Tooltip = this.$f7.tooltip.create({
            targetEl: this.$refs.el,
            text: e,
            trigger: this.props.tooltipTrigger
          }) : e && this.f7Tooltip && this.f7Tooltip.setText(e)
        },
        "props.swipeoutOpened": function (e) {
          if (this.props.swipeout) {
            var t = this.$refs.el;
            e ? this.$f7.swipeout.open(t) : this.$f7.swipeout.close(t)
          }
        }
      },
      created: function () {
        er.bindMethods(this, ["onClick", "onChange", "onSwipeoutOpen", "onSwipeoutOpened", "onSwipeoutClose", "onSwipeoutClosed", "onSwipeoutDelete", "onSwipeoutDeleted", "onSwipeoutOverswipeEnter", "onSwipeoutOverswipeExit", "onSwipeout", "onAccBeforeOpen", "onAccOpen", "onAccOpened", "onAccBeforeClose", "onAccClose", "onAccClosed"])
      },
      mounted: function () {
        var e = this,
          t = e.$refs,
          n = t.el,
          r = t.linkEl;
        if (n) {
          var a = e.props,
            o = a.link,
            i = a.href,
            s = a.smartSelect,
            l = a.swipeout,
            c = a.swipeoutOpened,
            u = a.accordionItem,
            p = a.smartSelectParams,
            d = a.routeProps,
            f = a.tooltip,
            h = a.tooltipTrigger;
          !!(o || i || u || s) && r && r.addEventListener("click", e.onClick), r && d && (r.f7RouteProps = d), e.$listEl = e.$$(n).parents(".list, .list-group").eq(0), e.$listEl.length && e.setState({
            isMedia: e.$listEl.hasClass("media-list"),
            isSimple: e.$listEl.hasClass("simple-list"),
            isSortable: e.$listEl.hasClass("sortable"),
            isSortableOpposite: e.$listEl.hasClass("sortable-opposite")
          }), e.$f7ready((function (t) {
            if (e.eventTargetEl = n, l && (t.on("swipeoutOpen", e.onSwipeoutOpen), t.on("swipeoutOpened", e.onSwipeoutOpened), t.on("swipeoutClose", e.onSwipeoutClose), t.on("swipeoutClosed", e.onSwipeoutClosed), t.on("swipeoutDelete", e.onSwipeoutDelete), t.on("swipeoutDeleted", e.onSwipeoutDeleted), t.on("swipeoutOverswipeEnter", e.onSwipeoutOverswipeEnter), t.on("swipeoutOverswipeExit", e.onSwipeoutOverswipeExit), t.on("swipeout", e.onSwipeout)), u && (t.on("accordionBeforeOpen", e.onAccBeforeOpen), t.on("accordionOpen", e.onAccOpen), t.on("accordionOpened", e.onAccOpened), t.on("accordionBeforeClose", e.onAccBeforeClose), t.on("accordionClose", e.onAccClose), t.on("accordionClosed", e.onAccClosed)), s) {
              var r = er.extend({
                el: n.querySelector("a.smart-select")
              }, p || {});
              e.f7SmartSelect = t.smartSelect.create(r)
            }
            c && t.swipeout.open(n), f && (e.f7Tooltip = t.tooltip.create({
              targetEl: n,
              text: f,
              trigger: h
            }))
          }))
        }
      },
      updated: function () {
        var e = this.$listEl,
          t = this.$refs.linkEl,
          n = this.props.routeProps;
        if (t && n && (t.f7RouteProps = n), e && (!e || 0 !== e.length)) {
          var r = e.hasClass("media-list"),
            a = e.hasClass("simple-list"),
            o = e.hasClass("sortable"),
            i = e.hasClass("sortable-opposite");
          r !== this.state.isMedia && this.setState({
            isMedia: r
          }), a !== this.state.isSimple && this.setState({
            isSimple: a
          }), o !== this.state.isSortable && (this.setState({
            isSortable: o
          }), i !== this.state.isSortableOpposite && this.setState({
            isSortableOpposite: i
          }))
        }
      },
      beforeDestroy: function () {
        var e = this.$refs.linkEl,
          t = this.props,
          n = t.link,
          r = t.href,
          a = t.smartSelect,
          o = t.swipeout,
          i = t.accordionItem;
        if (e && (!(n || r || i || a) || e.removeEventListener("click", this.onClick), delete e.f7RouteProps), this.$f7) {
          var s = this.$f7;
          o && (s.off("swipeoutOpen", this.onSwipeoutOpen), s.off("swipeoutOpened", this.onSwipeoutOpened), s.off("swipeoutClose", this.onSwipeoutClose), s.off("swipeoutClosed", this.onSwipeoutClosed), s.off("swipeoutDelete", this.onSwipeoutDelete), s.off("swipeoutDeleted", this.onSwipeoutDeleted), s.off("swipeoutOverswipeEnter", this.onSwipeoutOverswipeEnter), s.off("swipeoutOverswipeExit", this.onSwipeoutOverswipeExit), s.off("swipeout", this.onSwipeout)), i && (s.off("accordionBeforeOpen", this.onAccBeforeOpen), s.off("accordionOpen", this.onAccOpen), s.off("accordionOpened", this.onAccOpened), s.off("accordionBeforeClose", this.onAccBeforeClose), s.off("accordionClose", this.onAccClose), s.off("accordionClosed", this.onAccClosed))
        }
        a && this.f7SmartSelect && this.f7SmartSelect.destroy(), this.f7Tooltip && this.f7Tooltip.destroy && (this.f7Tooltip.destroy(), this.f7Tooltip = null, delete this.f7Tooltip), this.eventTargetEl = null, delete this.eventTargetEl
      },
      methods: {
        onClick: function (e) {
          "input" !== e.target.tagName.toLowerCase() && this.dispatchEvent("click", e)
        },
        onSwipeoutOverswipeEnter: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("swipeout:overswipeenter swipeoutOverswipeEnter")
        },
        onSwipeoutOverswipeExit: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("swipeout:overswipeexit swipeoutOverswipeExit")
        },
        onSwipeoutDeleted: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("swipeout:deleted swipeoutDeleted")
        },
        onSwipeoutDelete: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("swipeout:delete swipeoutDelete")
        },
        onSwipeoutClose: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("swipeout:close swipeoutClose")
        },
        onSwipeoutClosed: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("swipeout:closed swipeoutClosed")
        },
        onSwipeoutOpen: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("swipeout:open swipeoutOpen")
        },
        onSwipeoutOpened: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("swipeout:opened swipeoutOpened")
        },
        onSwipeout: function (e, t) {
          this.eventTargetEl === e && this.dispatchEvent("swipeout", t)
        },
        onAccBeforeClose: function (e, t) {
          this.eventTargetEl === e && this.dispatchEvent("accordion:beforeclose accordionBeforeClose", t)
        },
        onAccClose: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("accordion:close accordionClose")
        },
        onAccClosed: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("accordion:closed accordionClosed")
        },
        onAccBeforeOpen: function (e, t) {
          this.eventTargetEl === e && this.dispatchEvent("accordion:beforeopen accordionBeforeOpen", t)
        },
        onAccOpen: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("accordion:open accordionOpen")
        },
        onAccOpened: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("accordion:opened accordionOpened")
        },
        onChange: function (e) {
          this.dispatchEvent("change", e)
        },
        onInput: function (e) {
          this.dispatchEvent("input", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        },
        setState: function (e, t) {
          lr(this, e, t)
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    }),
    Nr = {
      name: "f7-list",
      props: Object.assign({
        id: [String, Number],
        inset: Boolean,
        xsmallInset: Boolean,
        smallInset: Boolean,
        mediumInset: Boolean,
        largeInset: Boolean,
        xlargeInset: Boolean,
        mediaList: Boolean,
        sortable: Boolean,
        sortableTapHold: Boolean,
        sortableEnabled: Boolean,
        sortableMoveElements: {
          type: Boolean,
          default: void 0
        },
        sortableOpposite: Boolean,
        accordionList: Boolean,
        accordionOpposite: Boolean,
        contactsList: Boolean,
        simpleList: Boolean,
        linksList: Boolean,
        noHairlines: Boolean,
        noHairlinesBetween: Boolean,
        noHairlinesMd: Boolean,
        noHairlinesBetweenMd: Boolean,
        noHairlinesIos: Boolean,
        noHairlinesBetweenIos: Boolean,
        noHairlinesAurora: Boolean,
        noHairlinesBetweenAurora: Boolean,
        noChevron: Boolean,
        chevronCenter: Boolean,
        tab: Boolean,
        tabActive: Boolean,
        form: Boolean,
        formStoreData: Boolean,
        inlineLabels: Boolean,
        virtualList: Boolean,
        virtualListParams: Object
      }, nr.colorProps),
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.id,
          r = t.style,
          a = t.form,
          o = t.sortableMoveElements,
          i = this.$slots,
          s = i.list,
          l = i.default,
          c = [],
          u = [],
          p = s || [],
          d = er.flattenArray(l),
          f = !1;
        d.forEach((function (e) {
          var t;
          void 0 !== e && ((t = e.tag) && !("li" === t || "F7ListItem" === t || "F7ListButton" === t || "F7ListInput" === t || t.indexOf("list-item") >= 0 || t.indexOf("list-button") >= 0 || t.indexOf("list-input") >= 0 || t.indexOf("f7-list-item") >= 0 || t.indexOf("f7-list-button") >= 0 || t.indexOf("f7-list-input") >= 0) ? f ? u.push(e) : c.push(e) : t && (f = !0, p.push(e)))
        }));
        var h = a ? "form" : "div";
        return p.length > 0 ? e(h, {
          ref: "el",
          style: r,
          class: this.classes,
          attrs: {
            id: n,
            "data-sortable-move-elements": void 0 !== o ? o.toString() : void 0
          }
        }, [this.$slots["before-list"], c, e("ul", [p]), this.$slots["after-list"], u]) : e(h, {
          ref: "el",
          style: r,
          class: this.classes,
          attrs: {
            id: n,
            "data-sortable-move-elements": void 0 !== o ? o.toString() : void 0
          }
        }, [this.$slots["before-list"], c, this.$slots["after-list"], u])
      },
      computed: {
        classes: function () {
          var e = this.props,
            t = e.inset,
            n = e.xsmallInset,
            r = e.smallInset,
            a = e.mediumInset,
            o = e.largeInset,
            i = e.xlargeInset,
            s = e.mediaList,
            l = e.simpleList,
            c = e.linksList,
            u = e.sortable,
            p = e.sortableTapHold,
            d = e.sortableEnabled,
            f = e.sortableOpposite,
            h = e.accordionList,
            v = e.accordionOpposite,
            g = e.contactsList,
            m = e.virtualList,
            b = e.tab,
            y = e.tabActive,
            k = e.noHairlines,
            w = e.noHairlinesIos,
            C = e.noHairlinesMd,
            M = e.noHairlinesAurora,
            x = e.noHairlinesBetween,
            S = e.noHairlinesBetweenIos,
            E = e.noHairlinesBetweenMd,
            T = e.noHairlinesBetweenAurora,
            N = e.formStoreData,
            O = e.inlineLabels,
            D = e.className,
            j = e.noChevron,
            A = e.chevronCenter;
          return er.classNames(D, "list", {
            inset: t,
            "xsmall-inset": n,
            "small-inset": r,
            "medium-inset": a,
            "large-inset": o,
            "xlarge-inset": i,
            "media-list": s,
            "simple-list": l,
            "links-list": c,
            sortable: u,
            "sortable-tap-hold": p,
            "sortable-enabled": d,
            "sortable-opposite": f,
            "accordion-list": h,
            "accordion-opposite": v,
            "contacts-list": g,
            "virtual-list": m,
            tab: b,
            "tab-active": y,
            "no-hairlines": k,
            "no-hairlines-md": C,
            "no-hairlines-ios": w,
            "no-hairlines-aurora": M,
            "no-hairlines-between": x,
            "no-hairlines-between-md": E,
            "no-hairlines-between-ios": S,
            "no-hairlines-between-aurora": T,
            "form-store-data": N,
            "inline-labels": O,
            "no-chevron": j,
            "chevron-center": A
          }, nr.colorClasses(e))
        },
        props: function () {
          return ar(this)
        }
      },
      created: function () {
        er.bindMethods(this, ["onSortableEnable", "onSortableDisable", "onSortableSort", "onTabShow", "onTabHide", "onSubmit"])
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el,
          n = e.props,
          r = n.virtualList,
          a = n.virtualListParams,
          o = n.form;
        e.$f7ready((function (n) {
          if (e.eventTargetEl = t, n.on("sortableEnable", e.onSortableEnable), n.on("sortableDisable", e.onSortableDisable), n.on("sortableSort", e.onSortableSort), n.on("tabShow", e.onTabShow), n.on("tabHide", e.onTabHide), o && t.addEventListener("submit", e.onSubmit), r) {
            var i = a || {};
            (i.renderItem || i.itemTemplate || i.renderExternal) && (e.f7VirtualList = n.virtualList.create(er.extend({
              el: t,
              on: {
                itemBeforeInsert: function (t, n) {
                  e.dispatchEvent("virtual:itembeforeinsert virtualItemBeforeInsert", this, t, n)
                },
                beforeClear: function (t) {
                  e.dispatchEvent("virtual:beforeclear virtualBeforeClear", this, t)
                },
                itemsBeforeInsert: function (t) {
                  e.dispatchEvent("virtual:itemsbeforeinsert virtualItemsBeforeInsert", this, t)
                },
                itemsAfterInsert: function (t) {
                  e.dispatchEvent("virtual:itemsafterinsert virtualItemsAfterInsert", this, t)
                }
              }
            }, i)))
          }
        }))
      },
      beforeDestroy: function () {
        var e = this.$refs.el,
          t = this.$f7;
        e && t && (t.off("sortableEnable", this.onSortableEnable), t.off("sortableDisable", this.onSortableDisable), t.off("sortableSort", this.onSortableSort), t.off("tabShow", this.onTabShow), t.off("tabHide", this.onTabHide), e.removeEventListener("submit", this.onSubmit), this.eventTargetEl = null, delete this.eventTargetEl, this.virtualList && this.f7VirtualList && this.f7VirtualList.destroy && this.f7VirtualList.destroy())
      },
      methods: {
        onSubmit: function (e) {
          this.dispatchEvent("submit", e)
        },
        onSortableEnable: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("sortable:enable sortableEnable")
        },
        onSortableDisable: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("sortable:disable sortableDisable")
        },
        onSortableSort: function (e, t, n) {
          this.eventTargetEl === n && this.dispatchEvent("sortable:sort sortableSort", t)
        },
        onTabShow: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("tab:show tabShow", e)
        },
        onTabHide: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("tab:hide tabHide", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      }
    };
  Object.assign({
    id: [String, Number]
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    opened: Boolean
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    text: String,
    link: Boolean,
    href: String,
    target: String,
    divider: Boolean
  }, nr.colorProps, {}, nr.linkRouterProps, {}, nr.linkActionsProps), Object.assign({
    id: [String, Number],
    contentHeight: String,
    position: String,
    left: Boolean,
    center: Boolean,
    right: Boolean
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    text: String,
    iconOnly: Boolean,
    href: String,
    link: Boolean,
    target: String,
    dropdown: Boolean
  }, nr.colorProps, {}, nr.linkIconProps, {}, nr.linkRouterProps, {}, nr.linkActionsProps), Object.assign({
    id: [String, Number]
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    text: String,
    name: String,
    avatar: String,
    type: {
      type: String,
      default: "sent"
    },
    image: String,
    header: String,
    footer: String,
    textHeader: String,
    textFooter: String,
    first: Boolean,
    last: Boolean,
    tail: Boolean,
    sameName: Boolean,
    sameHeader: Boolean,
    sameFooter: Boolean,
    sameAvatar: Boolean,
    typing: Boolean
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    image: String,
    deletable: {
      type: Boolean,
      default: !0
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number]
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    image: String,
    checked: Boolean
  }, nr.colorProps), Object.assign({
    id: [String, Number]
  }, nr.colorProps), Object.assign({
    id: [String, Number]
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    sheetVisible: Boolean,
    attachmentsVisible: Boolean,
    top: Boolean,
    resizable: {
      type: Boolean,
      default: !0
    },
    bottomOffset: {
      type: Number,
      default: 0
    },
    topOffset: {
      type: Number,
      default: 0
    },
    maxHeight: Number,
    resizePage: {
      type: Boolean,
      default: !0
    },
    sendLink: String,
    value: [String, Number, Array],
    disabled: Boolean,
    readonly: Boolean,
    textareaId: [Number, String],
    name: String,
    placeholder: {
      type: String,
      default: "Message"
    },
    init: {
      type: Boolean,
      default: !0
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number]
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    autoLayout: {
      type: Boolean,
      default: !1
    },
    messages: {
      type: Array,
      default: function () {
        return []
      }
    },
    newMessagesFirst: {
      type: Boolean,
      default: !1
    },
    scrollMessages: {
      type: Boolean,
      default: !0
    },
    scrollMessagesOnEdge: {
      type: Boolean,
      default: !0
    },
    firstMessageRule: Function,
    lastMessageRule: Function,
    tailMessageRule: Function,
    sameNameMessageRule: Function,
    sameHeaderMessageRule: Function,
    sameFooterMessageRule: Function,
    sameAvatarMessageRule: Function,
    customClassMessageRule: Function,
    renderMessage: Function,
    init: {
      type: Boolean,
      default: !0
    }
  }, nr.colorProps);

  function Or(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var Dr = {
    name: "f7-nav-left",
    props: Object.assign({
      id: [String, Number],
      backLink: [Boolean, String],
      backLinkUrl: String,
      backLinkForce: Boolean,
      backLinkShowText: {
        type: Boolean,
        default: void 0
      },
      sliding: Boolean
    }, nr.colorProps),
    render: function () {
      var e, t = this.$createElement,
        n = this.props,
        r = n.backLink,
        a = n.backLinkUrl,
        o = n.backLinkForce,
        i = n.backLinkShowText,
        s = n.sliding,
        l = n.className,
        c = n.style,
        u = n.id,
        p = i;
      if (void 0 === p && (p = !this.$theme.md), r) {
        var d = !0 !== r && p ? r : void 0;
        e = t(Mr, {
          class: d ? void 0 : "icon-only",
          on: {
            click: this.onBackClick
          },
          attrs: {
            href: a || "#",
            back: !0,
            icon: "icon-back",
            force: o || void 0,
            text: d
          }
        })
      }
      var f = er.classNames(l, "left", {
          sliding: s
        }, nr.colorClasses(n)),
        h = [],
        v = this.$slots;
      return v && Object.keys(v).length && Object.keys(v).forEach((function (e) {
        h.push.apply(h, Or(v[e]))
      })), t("div", {
        style: c,
        class: f,
        attrs: {
          id: u
        }
      }, [e, h])
    },
    created: function () {
      er.bindMethods(this, ["onBackClick"])
    },
    methods: {
      onBackClick: function (e) {
        this.dispatchEvent("back-click backClick click:back clickBack", e)
      },
      dispatchEvent: function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        or.apply(void 0, [this, e].concat(n))
      }
    },
    computed: {
      props: function () {
        return ar(this)
      }
    }
  };

  function jr(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var Ar = {
    name: "f7-nav-right",
    props: Object.assign({
      id: [String, Number],
      sliding: Boolean
    }, nr.colorProps),
    render: function () {
      var e = this.$createElement,
        t = this.props,
        n = t.className,
        r = t.id,
        a = t.style,
        o = t.sliding,
        i = er.classNames(n, "right", {
          sliding: o
        }, nr.colorClasses(t)),
        s = [],
        l = this.$slots;
      return l && Object.keys(l).length && Object.keys(l).forEach((function (e) {
        s.push.apply(s, jr(l[e]))
      })), e("div", {
        style: a,
        class: i,
        attrs: {
          id: r
        }
      }, [s])
    },
    computed: {
      props: function () {
        return ar(this)
      }
    }
  };

  function Ir(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var Br = {
    name: "f7-nav-title",
    props: Object.assign({
      id: [String, Number]
    }, nr.colorProps),
    render: function () {
      var e = this.$createElement,
        t = this.props,
        n = t.id,
        r = t.style,
        a = t.className,
        o = er.classNames(a, "title-large", nr.colorClasses(t)),
        i = [],
        s = this.$slots;
      return s && Object.keys(s).length && Object.keys(s).forEach((function (e) {
        i.push.apply(i, Ir(s[e]))
      })), e("div", {
        style: r,
        class: o,
        attrs: {
          id: n
        }
      }, [e("div", {
        class: "title-large-text"
      }, [i])])
    },
    computed: {
      props: function () {
        return ar(this)
      }
    }
  };

  function Pr(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var $r = {
      name: "f7-nav-title",
      props: Object.assign({
        id: [String, Number],
        title: String,
        subtitle: String,
        sliding: Boolean
      }, nr.colorProps),
      render: function () {
        var e, t = this.$createElement,
          n = this.props,
          r = n.title,
          a = n.subtitle,
          o = n.id,
          i = n.style,
          s = n.sliding,
          l = n.className;
        a && (e = t("span", {
          class: "subtitle"
        }, [a]));
        var c, u = er.classNames(l, "title", {
            sliding: s
          }, nr.colorClasses(n)),
          p = this.$slots;
        return p && Object.keys(p).length && (c = [], Object.keys(p).forEach((function (e) {
          var t;
          (t = c).push.apply(t, Pr(p[e]))
        }))), t("div", {
          style: i,
          class: u,
          attrs: {
            id: o
          }
        }, [c, !c && r, !c && e])
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    Lr = {
      name: "f7-navbar",
      props: Object.assign({
        id: [String, Number],
        backLink: [Boolean, String],
        backLinkUrl: String,
        backLinkForce: Boolean,
        backLinkShowText: {
          type: Boolean,
          default: void 0
        },
        sliding: {
          type: Boolean,
          default: !0
        },
        title: String,
        subtitle: String,
        hidden: Boolean,
        noShadow: Boolean,
        noHairline: Boolean,
        innerClass: String,
        innerClassName: String,
        large: Boolean,
        largeTransparent: Boolean,
        transparent: Boolean,
        titleLarge: String
      }, nr.colorProps),
      data: function () {
        var e = this;
        ar(this);
        return {
          state: function () {
            var t = e,
              n = t.$f7;
            return n || t.$f7ready((function () {
              t.setState({
                _theme: t.$theme
              })
            })), {
              _theme: n ? t.$theme : null,
              routerPositionClass: "",
              largeCollapsed: !1,
              routerNavbarRole: null,
              routerNavbarRoleDetailRoot: !1,
              routerNavbarMasterStack: !1,
              transparentVisible: !1
            }
          }()
        }
      },
      render: function () {
        var e, t, n, r, a = this.$createElement,
          o = this.props,
          i = o.backLink,
          s = o.backLinkUrl,
          l = o.backLinkForce,
          c = o.backLinkShowText,
          u = o.sliding,
          p = o.title,
          d = o.subtitle,
          f = o.innerClass,
          h = o.innerClassName,
          v = o.className,
          g = o.id,
          m = o.style,
          b = o.hidden,
          y = o.noShadow,
          k = o.noHairline,
          w = o.large,
          C = o.largeTransparent,
          M = o.transparent,
          x = o.titleLarge,
          S = this.state,
          E = S._theme,
          T = S.routerPositionClass,
          N = S.largeCollapsed,
          O = S.transparentVisible,
          D = E && E.ios && this.$f7 && !this.$f7.params.navbar.iosCenterTitle,
          j = E && E.md && this.$f7 && this.$f7.params.navbar.mdCenterTitle || E && E.aurora && this.$f7 && this.$f7.params.navbar.auroraCenterTitle,
          A = this.$slots,
          I = w || C,
          B = M || I && C,
          P = B && O,
          $ = er.classNames(v, "navbar", T && T, {
            "navbar-hidden": b,
            "navbar-large": I,
            "navbar-large-collapsed": I && N,
            "navbar-transparent": B,
            "navbar-transparent-visible": P,
            "navbar-master": "master" === this.state.routerNavbarRole,
            "navbar-master-detail": "detail" === this.state.routerNavbarRole,
            "navbar-master-detail-root": !0 === this.state.routerNavbarRoleDetailRoot,
            "navbar-master-stacked": !0 === this.state.routerNavbarMasterStack,
            "no-shadow": y,
            "no-hairline": k
          }, nr.colorClasses(o));
        (i || A["nav-left"] || A.left) && (e = a(Dr, {
          on: {
            backClick: this.onBackClick
          },
          attrs: {
            backLink: i,
            backLinkUrl: s,
            backLinkForce: l,
            backLinkShowText: c
          }
        }, [A["nav-left"], A.left])), (p || d || A.title) && (t = a($r, {
          attrs: {
            title: p,
            subtitle: d
          }
        }, [A.title])), (A["nav-right"] || A.right) && (n = a(Ar, [A["nav-right"], A.right]));
        var L = x;
        !L && w && p && (L = p), (L || A["title-large"]) && (r = a("div", {
          class: "title-large"
        }, [a("div", {
          class: "title-large-text"
        }, [L || "", this.$slots["title-large"]])]));
        var _ = a("div", {
          class: er.classNames("navbar-inner", f, h, {
            sliding: u,
            "navbar-inner-left-title": D,
            "navbar-inner-centered-title": j
          })
        }, [e, t, n, r, this.$slots.default]);
        return a("div", {
          ref: "el",
          style: m,
          class: $,
          attrs: {
            id: g
          }
        }, [a("div", {
          class: "navbar-bg"
        }), this.$slots["before-inner"], _, this.$slots["after-inner"]])
      },
      created: function () {
        er.bindMethods(this, ["onBackClick", "onHide", "onShow", "onExpand", "onCollapse", "onNavbarPosition", "onNavbarRole", "onNavbarMasterStack", "onNavbarMasterUnstack", "onTransparentHide", "onTransparentShow"])
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el;
        t && e.$f7ready((function (n) {
          e.eventTargetEl = t, n.on("navbarShow", e.onShow), n.on("navbarHide", e.onHide), n.on("navbarCollapse", e.onCollapse), n.on("navbarExpand", e.onExpand), n.on("navbarPosition", e.onNavbarPosition), n.on("navbarRole", e.onNavbarRole), n.on("navbarMasterStack", e.onNavbarMasterStack), n.on("navbarMasterUnstack", e.onNavbarMasterUnstack), n.on("navbarTransparentShow", e.onNavbarTransparentShow), n.on("navbarTransparentHide", e.onNavbarTransparentHide)
        }))
      },
      updated: function () {
        if (this.$f7) {
          var e = this.$refs.el;
          this.$f7.navbar.size(e)
        }
      },
      beforeDestroy: function () {
        if (this.$refs.el && this.$f7) {
          var e = this.$f7;
          e.off("navbarShow", this.onShow), e.off("navbarHide", this.onHide), e.off("navbarCollapse", this.onCollapse), e.off("navbarExpand", this.onExpand), e.off("navbarPosition", this.onNavbarPosition), e.off("navbarRole", this.onNavbarRole), e.off("navbarMasterStack", this.onNavbarMasterStack), e.off("navbarMasterUnstack", this.onNavbarMasterUnstack), e.off("navbarTransparentShow", this.onNavbarTransparentShow), e.off("navbarTransparentHide", this.onNavbarTransparentHide), this.eventTargetEl = null, delete this.eventTargetEl
        }
      },
      methods: {
        onHide: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("navbar:hide navbarHide")
        },
        onShow: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("navbar:show navbarShow")
        },
        onExpand: function (e) {
          this.eventTargetEl === e && (this.setState({
            largeCollapsed: !1
          }), this.dispatchEvent("navbar:expand navbarExpand"))
        },
        onCollapse: function (e) {
          this.eventTargetEl === e && (this.setState({
            largeCollapsed: !0
          }), this.dispatchEvent("navbar:collapse navbarCollapse"))
        },
        onNavbarTransparentShow: function (e) {
          this.eventTargetEl === e && (this.setState({
            transparentVisible: !0
          }), this.dispatchEvent("navbar:transparentshow navbarTransparentShow"))
        },
        onNavbarTransparentHide: function (e) {
          this.eventTargetEl === e && (this.setState({
            transparentVisible: !1
          }), this.dispatchEvent("navbar:transparenthide navbarTransparentHide"))
        },
        onNavbarPosition: function (e, t) {
          this.eventTargetEl === e && this.setState({
            routerPositionClass: t ? "navbar-".concat(t) : ""
          })
        },
        onNavbarRole: function (e, t) {
          this.eventTargetEl === e && this.setState({
            routerNavbarRole: t.role,
            routerNavbarRoleDetailRoot: t.detailRoot
          })
        },
        onNavbarMasterStack: function (e) {
          this.eventTargetEl === e && this.setState({
            routerNavbarMasterStack: !0
          })
        },
        onNavbarMasterUnstack: function (e) {
          this.eventTargetEl === e && this.setState({
            routerNavbarMasterStack: !1
          })
        },
        hide: function (e) {
          this.$f7 && this.$f7.navbar.hide(this.$refs.el, e)
        },
        show: function (e) {
          this.$f7 && this.$f7.navbar.show(this.$refs.el, e)
        },
        size: function () {
          this.$f7 && this.$f7.navbar.size(this.$refs.el)
        },
        onBackClick: function (e) {
          this.dispatchEvent("back-click backClick click:back clickBack", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        },
        setState: function (e, t) {
          lr(this, e, t)
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    _r = {
      name: "f7-preloader",
      props: Object.assign({
        id: [String, Number],
        size: [Number, String]
      }, nr.colorProps),
      data: function () {
        var e = this;
        ar(this);
        return {
          state: function () {
            var t = e,
              n = t.$f7;
            return n || t.$f7ready((function () {
              t.setState({
                _theme: t.$theme
              })
            })), {
              _theme: n ? t.$theme : null
            }
          }()
        }
      },
      render: function () {
        var e, t = this.$createElement,
          n = this.sizeComputed,
          r = this.props,
          a = r.id,
          o = r.style,
          i = r.className,
          s = this.state._theme,
          l = {};
        return n && (l.width = "".concat(n, "px"), l.height = "".concat(n, "px"), l["--f7-preloader-size"] = "".concat(n, "px")), o && er.extend(l, o || {}), s && s.md ? e = t("span", {
          class: "preloader-inner"
        }, [t("span", {
          class: "preloader-inner-gap"
        }), t("span", {
          class: "preloader-inner-left"
        }, [t("span", {
          class: "preloader-inner-half-circle"
        })]), t("span", {
          class: "preloader-inner-right"
        }, [t("span", {
          class: "preloader-inner-half-circle"
        })])]) : s && s.ios ? e = t("span", {
          class: "preloader-inner"
        }, [t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        }), t("span", {
          class: "preloader-inner-line"
        })]) : s && s.aurora ? e = t("span", {
          class: "preloader-inner"
        }, [t("span", {
          class: "preloader-inner-circle"
        })]) : s || (e = t("span", {
          class: "preloader-inner"
        })), t("span", {
          style: l,
          class: er.classNames(i, "preloader", nr.colorClasses(r)),
          attrs: {
            id: a
          }
        }, [e])
      },
      computed: {
        sizeComputed: function () {
          var e = this.props.size;
          return e && "string" == typeof e && e.indexOf("px") >= 0 && (e = e.replace("px", "")), e
        },
        props: function () {
          return ar(this)
        }
      },
      methods: {
        setState: function (e, t) {
          lr(this, e, t)
        }
      }
    },
    zr = {
      name: "f7-page-content",
      props: Object.assign({
        id: [String, Number],
        tab: Boolean,
        tabActive: Boolean,
        ptr: Boolean,
        ptrDistance: Number,
        ptrPreloader: {
          type: Boolean,
          default: !0
        },
        ptrBottom: Boolean,
        ptrMousewheel: Boolean,
        infinite: Boolean,
        infiniteTop: Boolean,
        infiniteDistance: Number,
        infinitePreloader: {
          type: Boolean,
          default: !0
        },
        hideBarsOnScroll: Boolean,
        hideNavbarOnScroll: Boolean,
        hideToolbarOnScroll: Boolean,
        messagesContent: Boolean,
        loginScreen: Boolean
      }, nr.colorProps),
      render: function () {
        var e, t, n = this.$createElement,
          r = this.props,
          a = r.ptr,
          o = r.ptrPreloader,
          i = r.ptrDistance,
          s = r.ptrBottom,
          l = r.ptrMousewheel,
          c = r.infinite,
          u = r.infinitePreloader,
          p = r.id,
          d = r.style,
          f = r.infiniteDistance,
          h = r.infiniteTop;
        return a && o && (e = n("div", {
          class: "ptr-preloader"
        }, [n(_r), n("div", {
          class: "ptr-arrow"
        })])), c && u && (t = n(_r, {
          class: "infinite-scroll-preloader"
        })), n("div", {
          style: d,
          class: this.classes,
          ref: "el",
          attrs: {
            id: p,
            "data-ptr-distance": i || void 0,
            "data-ptr-mousewheel": l || void 0,
            "data-infinite-distance": f || void 0
          }
        }, [s ? null : e, h ? t : null, this.$slots.default, h ? null : t, s ? e : null])
      },
      computed: {
        classes: function () {
          var e = this.props,
            t = e.className,
            n = e.tab,
            r = e.tabActive,
            a = e.ptr,
            o = e.ptrBottom,
            i = e.infinite,
            s = e.infiniteTop,
            l = e.hideBarsOnScroll,
            c = e.hideNavbarOnScroll,
            u = e.hideToolbarOnScroll,
            p = e.messagesContent,
            d = e.loginScreen;
          return er.classNames(t, "page-content", {
            tab: n,
            "tab-active": r,
            "ptr-content": a,
            "ptr-bottom": o,
            "infinite-scroll-content": i,
            "infinite-scroll-top": s,
            "hide-bars-on-scroll": l,
            "hide-navbar-on-scroll": c,
            "hide-toolbar-on-scroll": u,
            "messages-content": p,
            "login-screen-content": d
          }, nr.colorClasses(e))
        },
        props: function () {
          return ar(this)
        }
      },
      created: function () {
        er.bindMethods(this, ["onPtrPullStart", "onPtrPullMove", "onPtrPullEnd", "onPtrRefresh", "onPtrDone", "onInfinite", "onTabShow", "onTabHide"])
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el,
          n = e.props,
          r = n.ptr,
          a = n.infinite,
          o = n.tab;
        e.$f7ready((function (n) {
          e.eventTargetEl = t, r && (n.on("ptrPullStart", e.onPtrPullStart), n.on("ptrPullMove", e.onPtrPullMove), n.on("ptrPullEnd", e.onPtrPullEnd), n.on("ptrRefresh", e.onPtrRefresh), n.on("ptrDone", e.onPtrDone)), a && n.on("infinite", e.onInfinite), o && (n.on("tabShow", e.onTabShow), n.on("tabHide", e.onTabHide))
        }))
      },
      beforeDestroy: function () {
        this.$f7 && (this.$f7.off("ptrPullStart", this.onPtrPullStart), this.$f7.off("ptrPullMove", this.onPtrPullMove), this.$f7.off("ptrPullEnd", this.onPtrPullEnd), this.$f7.off("ptrRefresh", this.onPtrRefresh), this.$f7.off("ptrDone", this.onPtrDone), this.$f7.off("infinite", this.onInfinite), this.$f7.off("tabShow", this.onTabShow), this.$f7.off("tabHide", this.onTabHide), this.eventTargetEl = null, delete this.eventTargetEl)
      },
      methods: {
        onPtrPullStart: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("ptr:pullstart ptrPullStart")
        },
        onPtrPullMove: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("ptr:pullmove ptrPullMove")
        },
        onPtrPullEnd: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("ptr:pullend ptrPullEnd")
        },
        onPtrRefresh: function (e, t) {
          this.eventTargetEl === e && this.dispatchEvent("ptr:refresh ptrRefresh", t)
        },
        onPtrDone: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("ptr:done ptrDone")
        },
        onInfinite: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("infinite")
        },
        onTabShow: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("tab:show tabShow", e)
        },
        onTabHide: function (e) {
          this.eventTargetEl === e && this.dispatchEvent("tab:hide tabHide", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      }
    },
    Rr = {
      name: "f7-page",
      props: Object.assign({
        id: [String, Number],
        name: String,
        stacked: Boolean,
        withSubnavbar: {
          type: Boolean,
          default: void 0
        },
        subnavbar: {
          type: Boolean,
          default: void 0
        },
        withNavbarLarge: {
          type: Boolean,
          default: void 0
        },
        navbarLarge: {
          type: Boolean,
          default: void 0
        },
        noNavbar: Boolean,
        noToolbar: Boolean,
        tabs: Boolean,
        pageContent: {
          type: Boolean,
          default: !0
        },
        noSwipeback: Boolean,
        ptr: Boolean,
        ptrDistance: Number,
        ptrPreloader: {
          type: Boolean,
          default: !0
        },
        ptrBottom: Boolean,
        ptrMousewheel: Boolean,
        infinite: Boolean,
        infiniteTop: Boolean,
        infiniteDistance: Number,
        infinitePreloader: {
          type: Boolean,
          default: !0
        },
        hideBarsOnScroll: Boolean,
        hideNavbarOnScroll: Boolean,
        hideToolbarOnScroll: Boolean,
        messagesContent: Boolean,
        loginScreen: Boolean
      }, nr.colorProps),
      data: function () {
        ar(this);
        return {
          state: {
            hasSubnavbar: !1,
            hasNavbarLarge: !1,
            hasNavbarLargeCollapsed: !1,
            hasCardExpandableOpened: !1,
            routerPositionClass: "",
            routerForceUnstack: !1,
            routerPageRole: null,
            routerPageRoleDetailRoot: !1,
            routerPageMasterStack: !1
          }
        }
      },
      render: function () {
        var e, t, n, r, a = this.$createElement,
          o = this.props,
          i = o.id,
          s = o.style,
          l = o.name,
          c = o.pageContent,
          u = o.messagesContent,
          p = o.ptr,
          d = o.ptrDistance,
          f = o.ptrPreloader,
          h = o.ptrBottom,
          v = o.ptrMousewheel,
          g = o.infinite,
          m = o.infiniteDistance,
          b = o.infinitePreloader,
          y = o.infiniteTop,
          k = o.hideBarsOnScroll,
          w = o.hideNavbarOnScroll,
          C = o.hideToolbarOnScroll,
          M = o.loginScreen,
          x = o.className,
          S = o.stacked,
          E = o.tabs,
          T = o.subnavbar,
          N = o.withSubnavbar,
          O = o.navbarLarge,
          D = o.withNavbarLarge,
          j = o.noNavbar,
          A = o.noToolbar,
          I = o.noSwipeback,
          B = [],
          P = [],
          $ = this.$slots,
          L = $.static,
          _ = $.fixed,
          z = $.default;
        e = "navbar toolbar tabbar subnavbar searchbar messagebar fab list-index".split(" "), n = this.$options.propsData.messagesContent, z && z.forEach((function (a) {
          if (void 0 !== a) {
            var o = !1,
              i = a.tag;
            if (i) {
              i.indexOf("subnavbar") >= 0 && (t = !0), i.indexOf("navbar") >= 0 && a.componentOptions && a.componentOptions.propsData && "large" in a.componentOptions.propsData && (a.componentOptions.propsData.large || "" === a.componentOptions.propsData.large) && (r = !0), void 0 === n && i.indexOf("messages") >= 0 && (n = !0);
              for (var s = 0; s < e.length; s += 1) i.indexOf(e[s]) >= 0 && (o = !0);
              c && (o ? B.push(a) : P.push(a))
            } else c && P.push(a)
          }
        }));
        var R = void 0 === T && void 0 === N && (t || this.state.hasSubnavbar),
          H = void 0 === O && void 0 === D && (r || this.state.hasNavbarLarge),
          U = er.classNames(x, "page", this.state.routerPositionClass, {
            stacked: S && !this.state.routerForceUnstack,
            tabs: E,
            "page-with-subnavbar": T || N || R,
            "page-with-navbar-large": O || D || H,
            "no-navbar": j,
            "no-toolbar": A,
            "no-swipeback": I,
            "page-master": "master" === this.state.routerPageRole,
            "page-master-detail": "detail" === this.state.routerPageRole,
            "page-master-detail-root": !0 === this.state.routerPageRoleDetailRoot,
            "page-master-stacked": !0 === this.state.routerPageMasterStack,
            "page-with-navbar-large-collapsed": !0 === this.state.hasNavbarLargeCollapsed,
            "page-with-card-opened": !0 === this.state.hasCardExpandableOpened,
            "login-screen-page": M
          }, nr.colorClasses(o));
        if (!c) return a("div", {
          ref: "el",
          style: s,
          class: U,
          attrs: {
            id: i,
            "data-name": l
          }
        }, [_, L, z]);
        var F = a(zr, {
          on: {
            ptrPullStart: this.onPtrPullStart,
            ptrPullMove: this.onPtrPullMove,
            ptrPullEnd: this.onPtrPullEnd,
            ptrRefresh: this.onPtrRefresh,
            ptrDone: this.onPtrDone,
            infinite: this.onInfinite
          },
          attrs: {
            ptr: p,
            ptrDistance: d,
            ptrPreloader: f,
            ptrBottom: h,
            ptrMousewheel: v,
            infinite: g,
            infiniteTop: y,
            infiniteDistance: m,
            infinitePreloader: b,
            hideBarsOnScroll: k,
            hideNavbarOnScroll: w,
            hideToolbarOnScroll: C,
            messagesContent: u || n,
            loginScreen: M
          }
        }, [L, P]);
        return a("div", {
          ref: "el",
          style: s,
          class: U,
          attrs: {
            id: i,
            "data-name": l
          }
        }, [B, _, F])
      },
      created: function () {
        er.bindMethods(this, ["onPtrPullStart", "onPtrPullMove", "onPtrPullEnd", "onPtrRefresh", "onPtrDone", "onInfinite", "onPageMounted", "onPageInit", "onPageReinit", "onPageBeforeIn", "onPageBeforeOut", "onPageAfterOut", "onPageAfterIn", "onPageBeforeRemove", "onPageBeforeUnmount", "onPageStack", "onPageUnstack", "onPagePosition", "onPageRole", "onPageMasterStack", "onPageMasterUnstack", "onPageNavbarLargeCollapsed", "onPageNavbarLargeExpanded", "onCardOpened", "onCardClose"])
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el;
        e.$f7ready((function (n) {
          e.eventTargetEl = t, n.on("pageMounted", e.onPageMounted), n.on("pageInit", e.onPageInit), n.on("pageReinit", e.onPageReinit), n.on("pageBeforeIn", e.onPageBeforeIn), n.on("pageBeforeOut", e.onPageBeforeOut), n.on("pageAfterOut", e.onPageAfterOut), n.on("pageAfterIn", e.onPageAfterIn), n.on("pageBeforeRemove", e.onPageBeforeRemove), n.on("pageBeforeUnmount", e.onPageBeforeUnmount), n.on("pageStack", e.onPageStack), n.on("pageUnstack", e.onPageUnstack), n.on("pagePosition", e.onPagePosition), n.on("pageRole", e.onPageRole), n.on("pageMasterStack", e.onPageMasterStack), n.on("pageMasterUnstack", e.onPageMasterUnstack), n.on("pageNavbarLargeCollapsed", e.onPageNavbarLargeCollapsed), n.on("pageNavbarLargeExpanded", e.onPageNavbarLargeExpanded), n.on("cardOpened", e.onCardOpened), n.on("cardClose", e.onCardClose)
        }))
      },
      beforeDestroy: function () {
        if (this.$f7) {
          var e = this.$f7;
          e.off("pageMounted", this.onPageMounted), e.off("pageInit", this.onPageInit), e.off("pageReinit", this.onPageReinit), e.off("pageBeforeIn", this.onPageBeforeIn), e.off("pageBeforeOut", this.onPageBeforeOut), e.off("pageAfterOut", this.onPageAfterOut), e.off("pageAfterIn", this.onPageAfterIn), e.off("pageBeforeRemove", this.onPageBeforeRemove), e.off("pageBeforeUnmount", this.onPageBeforeUnmount), e.off("pageStack", this.onPageStack), e.off("pageUnstack", this.onPageUnstack), e.off("pagePosition", this.onPagePosition), e.off("pageRole", this.onPageRole), e.off("pageMasterStack", this.onPageMasterStack), e.off("pageMasterUnstack", this.onPageMasterUnstack), e.off("pageNavbarLargeCollapsed", this.onPageNavbarLargeCollapsed), e.off("pageNavbarLargeExpanded", this.onPageNavbarLargeExpanded), e.off("cardOpened", this.onCardOpened), e.off("cardClose", this.onCardClose), this.eventTargetEl = null, delete this.eventTargetEl
        }
      },
      methods: {
        onPtrPullStart: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          this.dispatchEvent.apply(this, ["ptr:pullstart ptrPullStart"].concat(t))
        },
        onPtrPullMove: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          this.dispatchEvent.apply(this, ["ptr:pullmove ptrPullMove"].concat(t))
        },
        onPtrPullEnd: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          this.dispatchEvent.apply(this, ["ptr:pullend ptrPullEnd"].concat(t))
        },
        onPtrRefresh: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          this.dispatchEvent.apply(this, ["ptr:refresh ptrRefresh"].concat(t))
        },
        onPtrDone: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          this.dispatchEvent.apply(this, ["ptr:done ptrDone"].concat(t))
        },
        onInfinite: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          this.dispatchEvent.apply(this, ["infinite"].concat(t))
        },
        onPageMounted: function (e) {
          this.eventTargetEl === e.el && this.dispatchEvent("page:mounted pageMounted", e)
        },
        onPageInit: function (e) {
          if (this.eventTargetEl === e.el) {
            var t = this.props,
              n = t.withSubnavbar,
              r = t.subnavbar,
              a = t.withNavbarLarge,
              o = t.navbarLarge;
            void 0 === n && void 0 === r && (e.$navbarEl && e.$navbarEl.length && e.$navbarEl.find(".subnavbar").length || e.$el.children(".navbar").find(".subnavbar").length) && this.setState({
              hasSubnavbar: !0
            }), void 0 === a && void 0 === o && e.$navbarEl && e.$navbarEl.hasClass("navbar-large") && this.setState({
              hasNavbarLarge: !0
            }), this.dispatchEvent("page:init pageInit", e)
          }
        },
        onPageReinit: function (e) {
          this.eventTargetEl === e.el && this.dispatchEvent("page:reinit pageReinit", e)
        },
        onPageBeforeIn: function (e) {
          this.eventTargetEl === e.el && (e.swipeBack || ("next" === e.from && this.setState({
            routerPositionClass: "page-next"
          }), "previous" === e.from && this.setState({
            routerPositionClass: "page-previous"
          })), this.dispatchEvent("page:beforein pageBeforeIn", e))
        },
        onPageBeforeOut: function (e) {
          this.eventTargetEl === e.el && this.dispatchEvent("page:beforeout pageBeforeOut", e)
        },
        onPageAfterOut: function (e) {
          this.eventTargetEl === e.el && ("next" === e.to && this.setState({
            routerPositionClass: "page-next"
          }), "previous" === e.to && this.setState({
            routerPositionClass: "page-previous"
          }), this.dispatchEvent("page:afterout pageAfterOut", e))
        },
        onPageAfterIn: function (e) {
          this.eventTargetEl === e.el && (this.setState({
            routerPositionClass: "page-current"
          }), this.dispatchEvent("page:afterin pageAfterIn", e))
        },
        onPageBeforeRemove: function (e) {
          this.eventTargetEl === e.el && this.dispatchEvent("page:beforeremove pageBeforeRemove", e)
        },
        onPageBeforeUnmount: function (e) {
          this.eventTargetEl === e.el && this.dispatchEvent("page:beforeunmount pageBeforeUnmount", e)
        },
        onPageStack: function (e) {
          this.eventTargetEl === e && this.setState({
            routerForceUnstack: !1
          })
        },
        onPageUnstack: function (e) {
          this.eventTargetEl === e && this.setState({
            routerForceUnstack: !0
          })
        },
        onPagePosition: function (e, t) {
          this.eventTargetEl === e && this.setState({
            routerPositionClass: "page-".concat(t)
          })
        },
        onPageRole: function (e, t) {
          this.eventTargetEl === e && this.setState({
            routerPageRole: t.role,
            routerPageRoleDetailRoot: t.detailRoot
          })
        },
        onPageMasterStack: function (e) {
          this.eventTargetEl === e && this.setState({
            routerPageMasterStack: !0
          })
        },
        onPageMasterUnstack: function (e) {
          this.eventTargetEl === e && this.setState({
            routerPageMasterStack: !1
          })
        },
        onPageNavbarLargeCollapsed: function (e) {
          this.eventTargetEl === e && this.setState({
            hasNavbarLargeCollapsed: !0
          })
        },
        onPageNavbarLargeExpanded: function (e) {
          this.eventTargetEl === e && this.setState({
            hasNavbarLargeCollapsed: !1
          })
        },
        onCardOpened: function (e, t) {
          this.eventTargetEl === t && this.setState({
            hasCardExpandableOpened: !0
          })
        },
        onCardClose: function (e, t) {
          this.eventTargetEl === t && this.setState({
            hasCardExpandableOpened: !1
          })
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        },
        setState: function (e, t) {
          lr(this, e, t)
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    };
  Object.assign({
    id: [String, Number],
    side: String,
    effect: String,
    cover: Boolean,
    reveal: Boolean,
    left: Boolean,
    right: Boolean,
    opened: Boolean,
    resizable: Boolean,
    backdrop: {
      type: Boolean,
      default: !0
    },
    backdropEl: {
      type: String,
      default: void 0
    },
    visibleBreakpoint: {
      type: Number,
      default: void 0
    },
    collapsedBreakpoint: {
      type: Number,
      default: void 0
    },
    swipe: Boolean,
    swipeOnlyClose: Boolean,
    swipeActiveArea: {
      type: Number,
      default: 0
    },
    swipeThreshold: {
      type: Number,
      default: 0
    }
  }, nr.colorProps), String, Number, Boolean, Object, Array, Boolean, Boolean, String, Boolean, Boolean, String, String, String, Boolean, String, String, String, Boolean, Object, String, Boolean, Boolean, String, Object, Function, Function, Function, Function, Function, Function, Function, Function, Function, Object.assign({
    id: [String, Number],
    opened: Boolean,
    target: [String, Object],
    backdrop: Boolean,
    backdropEl: [String, Object, window.HTMLElement],
    closeByBackdropClick: Boolean,
    closeByOutsideClick: Boolean,
    closeOnEscape: Boolean
  }, nr.colorProps);
  var Hr = {
      name: "f7-popup",
      props: Object.assign({
        id: [String, Number],
        tabletFullscreen: Boolean,
        opened: Boolean,
        animate: Boolean,
        backdrop: Boolean,
        backdropEl: [String, Object, window.HTMLElement],
        closeByBackdropClick: Boolean,
        closeOnEscape: Boolean,
        swipeToClose: {
          type: [Boolean, String],
          default: !1
        },
        swipeHandler: [String, Object, window.HTMLElement],
        push: Boolean
      }, nr.colorProps),
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.className,
          r = t.id,
          a = t.style,
          o = t.tabletFullscreen,
          i = t.push;
        return e("div", {
          ref: "el",
          style: a,
          class: er.classNames(n, "popup", {
            "popup-tablet-fullscreen": o,
            "popup-push": i
          }, nr.colorClasses(t)),
          attrs: {
            id: r
          }
        }, [this.$slots.default])
      },
      watch: {
        "props.opened": function (e) {
          this.f7Popup && (e ? this.f7Popup.open() : this.f7Popup.close())
        }
      },
      created: function () {
        er.bindMethods(this, ["onOpen", "onOpened", "onClose", "onClosed", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "onSwipeClose"])
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el;
        if (t) {
          var n = e.props,
            r = n.closeByBackdropClick,
            a = n.backdrop,
            o = n.backdropEl,
            i = n.animate,
            s = n.closeOnEscape,
            l = n.swipeToClose,
            c = n.swipeHandler,
            u = {
              el: t,
              on: {
                swipeStart: e.onSwipeStart,
                swipeMove: e.onSwipeMove,
                swipeEnd: e.onSwipeEnd,
                swipeClose: e.onSwipeClose,
                open: e.onOpen,
                opened: e.onOpened,
                close: e.onClose,
                closed: e.onClosed
              }
            },
            p = e.$options.propsData;
          void 0 !== p.closeByBackdropClick && (u.closeByBackdropClick = r), void 0 !== p.closeOnEscape && (u.closeOnEscape = s), void 0 !== p.animate && (u.animate = i), void 0 !== p.backdrop && (u.backdrop = a), void 0 !== p.backdropEl && (u.backdropEl = o), void 0 !== p.swipeToClose && (u.swipeToClose = l), void 0 !== p.swipeHandler && (u.swipeHandler = c), e.$f7ready((function () {
            e.f7Popup = e.$f7.popup.create(u), e.props.opened && e.f7Popup.open(!1)
          }))
        }
      },
      beforeDestroy: function () {
        this.f7Popup && this.f7Popup.destroy()
      },
      methods: {
        onSwipeStart: function (e) {
          this.dispatchEvent("popup:swipestart popupSwipeStart", e)
        },
        onSwipeMove: function (e) {
          this.dispatchEvent("popup:swipemove popupSwipeMove", e)
        },
        onSwipeEnd: function (e) {
          this.dispatchEvent("popup:swipeend popupSwipeEnd", e)
        },
        onSwipeClose: function (e) {
          this.dispatchEvent("popup:swipeclose popupSwipeClose", e)
        },
        onOpen: function (e) {
          this.dispatchEvent("popup:open popupOpen", e)
        },
        onOpened: function (e) {
          this.dispatchEvent("popup:opened popupOpened", e)
        },
        onClose: function (e) {
          this.dispatchEvent("popup:close popupClose", e)
        },
        onClosed: function (e) {
          this.dispatchEvent("popup:closed popupClosed", e)
        },
        open: function (e) {
          if (this.f7Popup) return this.f7Popup.open(e)
        },
        close: function (e) {
          if (this.f7Popup) return this.f7Popup.close(e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    Ur = (Object.assign({
      id: [String, Number],
      progress: Number,
      infinite: Boolean
    }, nr.colorProps), {
      name: "f7-radio",
      props: Object.assign({
        id: [String, Number],
        checked: Boolean,
        name: [Number, String],
        value: [Number, String, Boolean],
        disabled: Boolean,
        readonly: Boolean,
        defaultChecked: Boolean
      }, nr.colorProps),
      render: function () {
        var e, t = this.$createElement,
          n = this.props,
          r = n.name,
          a = n.value,
          o = n.disabled,
          i = n.readonly,
          s = n.checked,
          l = (n.defaultChecked, n.id),
          c = n.style,
          u = n.className;
        e = t("input", {
          ref: "inputEl",
          domProps: {
            value: a,
            disabled: o,
            readonly: i,
            checked: s
          },
          on: {
            change: this.onChange
          },
          attrs: {
            type: "radio",
            name: r
          }
        });
        var p = t("i", {
          class: "icon-radio"
        });
        return t("label", {
          style: c,
          class: er.classNames(u, "radio", {
            disabled: o
          }, nr.colorClasses(n)),
          attrs: {
            id: l
          }
        }, [e, p, this.$slots.default])
      },
      created: function () {
        er.bindMethods(this, ["onChange"])
      },
      methods: {
        onChange: function (e) {
          this.dispatchEvent("change", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    });
  Object.assign({
    id: [String, Number],
    noGap: Boolean,
    tag: {
      type: String,
      default: "div"
    },
    resizable: Boolean,
    resizableFixed: Boolean,
    resizableAbsolute: Boolean,
    resizableHandler: {
      type: Boolean,
      default: !0
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    noShadow: Boolean,
    noHairline: Boolean,
    form: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: "Search"
    },
    disableButton: {
      type: Boolean,
      default: !0
    },
    disableButtonText: {
      type: String,
      default: "Cancel"
    },
    clearButton: {
      type: Boolean,
      default: !0
    },
    value: [String, Number, Array],
    inputEvents: {
      type: String,
      default: "change input compositionend"
    },
    expandable: Boolean,
    inline: Boolean,
    searchContainer: [String, Object],
    searchIn: {
      type: String,
      default: ".item-title"
    },
    searchItem: {
      type: String,
      default: "li"
    },
    searchGroup: {
      type: String,
      default: ".list-group"
    },
    searchGroupTitle: {
      type: String,
      default: ".item-divider, .list-group-title"
    },
    foundEl: {
      type: [String, Object],
      default: ".searchbar-found"
    },
    notFoundEl: {
      type: [String, Object],
      default: ".searchbar-not-found"
    },
    backdrop: {
      type: Boolean,
      default: void 0
    },
    backdropEl: [String, Object],
    hideOnEnableEl: {
      type: [String, Object],
      default: ".searchbar-hide-on-enable"
    },
    hideOnSearchEl: {
      type: [String, Object],
      default: ".searchbar-hide-on-search"
    },
    ignore: {
      type: String,
      default: ".searchbar-ignore"
    },
    customSearch: {
      type: Boolean,
      default: !1
    },
    removeDiacritics: {
      type: Boolean,
      default: !1
    },
    hideDividers: {
      type: Boolean,
      default: !0
    },
    hideGroups: {
      type: Boolean,
      default: !0
    },
    init: {
      type: Boolean,
      default: !0
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    raised: Boolean,
    raisedIos: Boolean,
    raisedMd: Boolean,
    raisedAurora: Boolean,
    round: Boolean,
    roundIos: Boolean,
    roundMd: Boolean,
    roundAurora: Boolean,
    strong: Boolean,
    strongIos: Boolean,
    strongMd: Boolean,
    strongAurora: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    opened: Boolean,
    top: Boolean,
    bottom: Boolean,
    position: String,
    backdrop: Boolean,
    backdropEl: [String, Object, window.HTMLElement],
    closeByBackdropClick: Boolean,
    closeByOutsideClick: Boolean,
    closeOnEscape: Boolean,
    push: Boolean,
    swipeToClose: Boolean,
    swipeToStep: Boolean,
    swipeHandler: [String, Object, window.HTMLElement]
  }, nr.colorProps);
  Object.assign({
    id: [String, Number],
    width: [Number, String],
    height: [Number, String],
    tag: {
      type: String,
      default: "div"
    }
  }, nr.colorProps);
  Object.assign({
    id: [String, Number],
    width: [Number, String],
    height: [Number, String],
    tag: {
      type: String,
      default: "span"
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    init: {
      type: Boolean,
      default: !0
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    formatValue: Function,
    name: String,
    inputId: String,
    input: {
      type: Boolean,
      default: !0
    },
    inputType: {
      type: String,
      default: "text"
    },
    inputReadonly: {
      type: Boolean,
      default: !1
    },
    autorepeat: {
      type: Boolean,
      default: !1
    },
    autorepeatDynamic: {
      type: Boolean,
      default: !1
    },
    wraps: {
      type: Boolean,
      default: !1
    },
    manualInputMode: {
      type: Boolean,
      default: !1
    },
    decimalPoint: {
      type: Number,
      default: 4
    },
    buttonsEndInputMode: {
      type: Boolean,
      default: !0
    },
    disabled: Boolean,
    buttonsOnly: Boolean,
    round: Boolean,
    roundMd: Boolean,
    roundIos: Boolean,
    roundAurora: Boolean,
    fill: Boolean,
    fillMd: Boolean,
    fillIos: Boolean,
    fillAurora: Boolean,
    large: Boolean,
    largeMd: Boolean,
    largeIos: Boolean,
    largeAurora: Boolean,
    small: Boolean,
    smallMd: Boolean,
    smallIos: Boolean,
    smallAurora: Boolean,
    raised: Boolean,
    raisedMd: Boolean,
    raisedIos: Boolean,
    raisedAurora: Boolean
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    sliding: Boolean,
    title: String,
    inner: {
      type: Boolean,
      default: !0
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    left: Boolean,
    right: Boolean,
    side: String
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    text: String,
    confirmTitle: String,
    confirmText: String,
    overswipe: Boolean,
    close: Boolean,
    delete: Boolean,
    href: String
  }, nr.colorProps), String, Number, Boolean, Object.assign({
    id: [String, Number],
    params: Object,
    pagination: Boolean,
    scrollbar: Boolean,
    navigation: Boolean,
    init: {
      type: Boolean,
      default: !0
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    tabActive: Boolean
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    animated: Boolean,
    swipeable: Boolean,
    routable: Boolean,
    swiperParams: {
      type: Object,
      default: void 0
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    tabbar: Boolean,
    labels: Boolean,
    scrollable: Boolean,
    hidden: Boolean,
    noShadow: Boolean,
    noHairline: Boolean,
    noBorder: Boolean,
    position: {
      type: String,
      default: void 0
    },
    topMd: {
      type: Boolean,
      default: void 0
    },
    topIos: {
      type: Boolean,
      default: void 0
    },
    topAurora: {
      type: Boolean,
      default: void 0
    },
    top: {
      type: Boolean,
      default: void 0
    },
    bottomMd: {
      type: Boolean,
      default: void 0
    },
    bottomIos: {
      type: Boolean,
      default: void 0
    },
    bottomAurora: {
      type: Boolean,
      default: void 0
    },
    bottom: {
      type: Boolean,
      default: void 0
    },
    inner: {
      type: Boolean,
      default: !0
    }
  }, nr.colorProps), Object.assign({
    id: [String, Number],
    toggle: {
      type: Boolean,
      default: void 0
    },
    itemToggle: Boolean,
    selectable: Boolean,
    selected: Boolean,
    opened: Boolean,
    label: String,
    loadChildren: Boolean,
    link: {
      type: [Boolean, String],
      default: void 0
    }
  }, nr.colorProps, {}, nr.linkActionsProps, {}, nr.linkRouterProps, {}, nr.linkIconProps), Object.assign({
    id: [String, Number]
  }, nr.colorProps);
  var Fr = {
      name: "f7-view",
      props: Object.assign({
        id: [String, Number],
        tab: Boolean,
        tabActive: Boolean,
        name: String,
        router: Boolean,
        linksView: [Object, String],
        url: String,
        main: Boolean,
        stackPages: Boolean,
        xhrCache: Boolean,
        xhrCacheIgnore: Array,
        xhrCacheIgnoreGetParameters: Boolean,
        xhrCacheDuration: Number,
        preloadPreviousPage: Boolean,
        allowDuplicateUrls: Boolean,
        reloadPages: Boolean,
        reloadDetail: Boolean,
        masterDetailBreakpoint: Number,
        removeElements: Boolean,
        removeElementsWithTimeout: Boolean,
        removeElementsTimeout: Number,
        restoreScrollTopOnBack: Boolean,
        loadInitialPage: Boolean,
        iosSwipeBack: Boolean,
        iosSwipeBackAnimateShadow: Boolean,
        iosSwipeBackAnimateOpacity: Boolean,
        iosSwipeBackActiveArea: Number,
        iosSwipeBackThreshold: Number,
        mdSwipeBack: Boolean,
        mdSwipeBackAnimateShadow: Boolean,
        mdSwipeBackAnimateOpacity: Boolean,
        mdSwipeBackActiveArea: Number,
        mdSwipeBackThreshold: Number,
        auroraSwipeBack: Boolean,
        auroraSwipeBackAnimateShadow: Boolean,
        auroraSwipeBackAnimateOpacity: Boolean,
        auroraSwipeBackActiveArea: Number,
        auroraSwipeBackThreshold: Number,
        pushState: Boolean,
        pushStateRoot: String,
        pushStateAnimate: Boolean,
        pushStateAnimateOnLoad: Boolean,
        pushStateSeparator: String,
        pushStateOnLoad: Boolean,
        animate: Boolean,
        transition: String,
        iosDynamicNavbar: Boolean,
        iosAnimateNavbarBackIcon: Boolean,
        materialPageLoadDelay: Number,
        passRouteQueryToRequest: Boolean,
        passRouteParamsToRequest: Boolean,
        routes: Array,
        routesAdd: Array,
        routesBeforeEnter: [Function, Array],
        routesBeforeLeave: [Function, Array],
        init: {
          type: Boolean,
          default: !0
        }
      }, nr.colorProps),
      data: function () {
        ar(this);
        return {
          state: {
            pages: []
          }
        }
      },
      render: function () {
        var e = this.$createElement,
          t = this.props,
          n = t.id,
          r = t.style,
          a = t.tab,
          o = t.main,
          i = t.tabActive,
          s = t.className,
          l = er.classNames(s, "view", {
            "view-main": o,
            "tab-active": i,
            tab: a
          }, nr.colorClasses(t));
        return e("div", {
          ref: "el",
          style: r,
          class: l,
          attrs: {
            id: n
          }
        }, [this.$slots.default, this.state.pages.map((function (t) {
          var n = t.component;
          return e(n, {
            key: t.id,
            props: t.props
          })
        }))])
      },
      created: function () {
        er.bindMethods(this, ["onSwipeBackMove", "onSwipeBackBeforeChange", "onSwipeBackAfterChange", "onSwipeBackBeforeReset", "onSwipeBackAfterReset", "onTabShow", "onTabHide", "onViewInit"])
      },
      mounted: function () {
        var e = this,
          t = e.$refs.el;
        e.$f7ready((function (n) {
          n.on("tabShow", e.onTabShow), n.on("tabHide", e.onTabHide), e.routerData = {
            el: t,
            component: e,
            pages: e.state.pages,
            instance: null,
            setPages: function (t) {
              e.setState({
                pages: t
              })
            }
          }, sr.routers.views.push(e.routerData), e.props.init && (e.routerData.instance = n.views.create(t, Object.assign({
            on: {
              init: e.onViewInit
            }
          }, er.noUndefinedProps(e.$options.propsData || {}))), e.f7View = e.routerData.instance, e.f7View.on("swipebackMove", e.onSwipeBackMove), e.f7View.on("swipebackBeforeChange", e.onSwipeBackBeforeChange), e.f7View.on("swipebackAfterChange", e.onSwipeBackAfterChange), e.f7View.on("swipebackBeforeReset", e.onSwipeBackBeforeReset), e.f7View.on("swipebackAfterReset", e.onSwipeBackAfterReset))
        }))
      },
      beforeDestroy: function () {
        sr.instance && (sr.instance.off("tabShow", this.onTabShow), sr.instance.off("tabHide", this.onTabHide)), this.f7View && (this.f7View.off("swipebackMove", this.onSwipeBackMove), this.f7View.off("swipebackBeforeChange", this.onSwipeBackBeforeChange), this.f7View.off("swipebackAfterChange", this.onSwipeBackAfterChange), this.f7View.off("swipebackBeforeReset", this.onSwipeBackBeforeReset), this.f7View.off("swipebackAfterReset", this.onSwipeBackAfterReset), this.f7View.destroy && this.f7View.destroy()), sr.routers.views.splice(sr.routers.views.indexOf(this.routerData), 1), this.routerData = null, delete this.routerData
      },
      updated: function () {
        this.routerData && sr.events.emit("viewRouterDidUpdate", this.routerData)
      },
      methods: {
        onViewInit: function (e) {
          this.dispatchEvent("view:init viewInit", e), this.props.init || (this.routerData.instance = e, this.f7View = this.routerData.instance)
        },
        onSwipeBackMove: function (e) {
          var t = e;
          this.dispatchEvent("swipeback:move swipeBackMove", t)
        },
        onSwipeBackBeforeChange: function (e) {
          var t = e;
          this.dispatchEvent("swipeback:beforechange swipeBackBeforeChange", t)
        },
        onSwipeBackAfterChange: function (e) {
          var t = e;
          this.dispatchEvent("swipeback:afterchange swipeBackAfterChange", t)
        },
        onSwipeBackBeforeReset: function (e) {
          var t = e;
          this.dispatchEvent("swipeback:beforereset swipeBackBeforeReset", t)
        },
        onSwipeBackAfterReset: function (e) {
          var t = e;
          this.dispatchEvent("swipeback:afterreset swipeBackAfterReset", t)
        },
        onTabShow: function (e) {
          e === this.$refs.el && this.dispatchEvent("tab:show tabShow", e)
        },
        onTabHide: function (e) {
          e === this.$refs.el && this.dispatchEvent("tab:hide tabHide", e)
        },
        dispatchEvent: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          or.apply(void 0, [this, e].concat(n))
        },
        setState: function (e, t) {
          lr(this, e, t)
        }
      },
      computed: {
        props: function () {
          return ar(this)
        }
      }
    },
    Qr = (Object.assign({
      id: [String, Number],
      tabs: Boolean
    }, nr.colorProps), 0),
    Vr = {
      proto: {
        pageComponentLoader: function (e, t, n, r, a, o) {
          var i, s = e;
          if (sr.routers.views.forEach((function (t) {
              t.el && t.el === e && (i = t)
            })), i) {
            var l, c = {
              component: t,
              id: "".concat(er.now(), "_").concat(Qr += 1),
              props: er.extend({
                f7route: r.route,
                $f7route: r.route,
                f7router: this,
                $f7router: this
              }, r.route.params, r.props || {})
            };
            i.component && (i.component.$f7router = this, i.component.$f7route = r.route), sr.events.on("viewRouterDidUpdate", (function e(t) {
              if (t === i && !l) {
                sr.events.off("viewRouterDidUpdate", e);
                var n = s.children[s.children.length - 1];
                c.el = n, a(n), l = !0
              }
            })), i.pages.push(c), i.setPages(i.pages)
          } else o()
        },
        removePage: function (e) {
          if (e) {
            var t, n = this;
            if ((t = "length" in e && e[0] ? e[0].f7Page : e.f7Page) && t.route && t.route.route && t.route.route.keepAlive) n.app.$(e).remove();
            else {
              var r, a, o;
              if (sr.routers.views.forEach((function (e) {
                  e.el && e.el === n.el && (r = e)
                })), "length" in e) {
                if (0 === e.length) return;
                a = e[0]
              } else a = e;
              if (a) r.pages.forEach((function (e, t) {
                e.el === a && (o = !0, r.pages.splice(t, 1), r.setPages(r.pages))
              })), o || a.parentNode.removeChild(a)
            }
          }
        },
        tabComponentLoader: function (e, t, n, r, a, o) {
          var i;
          if (e || o(), sr.routers.tabs.forEach((function (t) {
              t.el && t.el === e && (i = t)
            })), i) {
            var s, l = {
              id: "".concat(er.now(), "_").concat(Qr += 1),
              component: t,
              props: er.extend({
                f7route: r.route,
                $f7route: r.route,
                f7router: this,
                $f7router: this
              }, r.route.params, r.props || {})
            };
            i.component && (i.component.$f7router = this, i.component.$f7route = r.route), sr.events.on("tabRouterDidUpdate", (function t(n) {
              if (n === i && !s) {
                sr.events.off("tabRouterDidUpdate", t);
                var r = e.children[0];
                a(r), s = !0
              }
            })), i.setTabContent(l)
          } else o()
        },
        removeTabContent: function (e) {
          if (e) {
            var t;
            sr.routers.tabs.forEach((function (n) {
              n.el && n.el === e && (t = n)
            }));
            var n = t && t.component;
            t && n ? t.setTabContent(null) : e.innerHTML = ""
          }
        },
        modalComponentLoader: function (e, t, n, r, a, o) {
          var i = sr.routers.modals;
          if (i) {
            var s, l = {
              component: t,
              id: "".concat(er.now(), "_").concat(Qr += 1),
              props: er.extend({
                f7route: r.route,
                $f7route: r.route,
                f7router: this,
                $f7router: this
              }, r.route.params, r.props || {})
            };
            i.component && (i.component.$f7router = this, i.component.$f7route = r.route), sr.events.on("modalsRouterDidUpdate", (function e() {
              if (!s) {
                sr.events.off("modalsRouterDidUpdate", e);
                var t = i.el.children[i.el.children.length - 1];
                l.el = t, a(t), s = !0
              }
            })), i.modals.push(l), i.setModals(i.modals)
          } else o()
        },
        removeModal: function (e) {
          var t, n = sr.routers.modals;
          n && (n.modals.forEach((function (n) {
            n.el === e && (t = n)
          })), n.modals.splice(n.modals.indexOf(t), 1), n.setModals(n.modals))
        }
      }
    };

  function Yr(e) {
    sr.ready(e)
  }
  var qr = {},
    Wr = {
      name: "phenomePlugin",
      installed: !1,
      install: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!Wr.installed) {
          Wr.installed = !0;
          var t = this;
          sr.Framework7 = t, sr.events = new t.Events;
          var n = e.Vue || r.a;
          Object.defineProperty(n.prototype, "$f7", {
            get: function () {
              return sr.instance
            }
          });
          var a = e.theme;
          "md" === a && (qr.md = !0), "ios" === a && (qr.ios = !0), "aurora" === a && (qr.aurora = !0), a && "auto" !== a || (qr.ios = !!t.device.ios, qr.aurora = t.device.desktop && t.device.electron, qr.md = !qr.ios && !qr.aurora), sr.ready((function () {
            qr.ios = "ios" === sr.instance.theme, qr.md = "md" === sr.instance.theme, qr.aurora = "aurora" === sr.instance.theme
          })), Object.defineProperty(n.prototype, "$theme", {
            get: function () {
              return {
                ios: sr.instance ? "ios" === sr.instance.theme : qr.ios,
                md: sr.instance ? "md" === sr.instance.theme : qr.md,
                aurora: sr.instance ? "aurora" === sr.instance.theme : qr.aurora
              }
            }
          }), n.prototype.Dom7 = t.$, n.prototype.$$ = t.$, n.prototype.$device = t.device, n.prototype.$request = t.request, n.prototype.$utils = t.utils, n.prototype.$f7ready = Yr, Object.defineProperty(n.prototype, "$f7route", {
            get: function () {
              var e;
              if (this.props && this.props.f7route) return this.props.f7route;
              if (this.f7route) return this.f7route;
              if (this._f7route) return this._f7route;
              this.$vnode && this.$vnode.data && this.$vnode.data.props && this.$vnode.data.props.f7route && (e = this.$vnode.data.props.f7route);
              for (var t = this; t && !e;) t._f7route && (e = t._f7route), t = t.$parent;
              return e
            },
            set: function (e) {
              this._f7route = e
            }
          }), Object.defineProperty(n.prototype, "$f7router", {
            get: function () {
              var e;
              if (this.props && this.props.f7router) return this.props.f7router;
              if (this.f7router) return this.f7router;
              if (this._f7router) return this._f7router;
              this.$vnode && this.$vnode.data && this.$vnode.data.props && this.$vnode.data.props.f7route && (e = this.$vnode.data.props.f7router);
              for (var t = this; t && !e;) t._f7router ? e = t._f7router : t.f7View ? e = t.f7View.router : t.$refs && t.$refs.el && t.$refs.el.f7View && (e = t.$refs.el.f7View.router), t = t.$parent;
              return e
            },
            set: function (e) {
              this._f7router = e
            }
          }), t.Router.use(Vr)
        }
      }
    },
    Zr = Wr,
    Gr = (n(8), n(9), n(10), {
      name: "routerTemplateLoader",
      proto: {
        templateLoader: function (e, t, n, r, o) {
          var i = this;

          function s(e) {
            var t, s;
            try {
              if ("function" == typeof (s = n.context || {})) s = s.call(i);
              else if ("string" == typeof s) try {
                s = JSON.parse(s)
              } catch (e) {
                throw o(), e
              }
              t = "function" == typeof e ? e(s) : a.a.compile(e)(E.extend({}, s || {}, {
                $app: i.app,
                $root: E.extend({}, i.app.data, i.app.methods),
                $route: n.route,
                $f7route: n.route,
                $router: i,
                $f7router: i,
                $theme: {
                  ios: "ios" === i.app.theme,
                  md: "md" === i.app.theme,
                  aurora: "aurora" === i.app.theme
                }
              }))
            } catch (e) {
              throw o(), e
            }
            r(t, {
              context: s
            })
          }
          t ? (i.xhr && (i.xhr.abort(), i.xhr = !1), i.xhrRequest(t, n).then((function (e) {
            s(e)
          })).catch((function () {
            o()
          }))) : s(e)
        },
        modalTemplateLoader: function (e, t, n, r, a) {
          return this.templateLoader(e, t, n, (function (e) {
            r(e)
          }), a)
        },
        tabTemplateLoader: function (e, t, n, r, a) {
          return this.templateLoader(e, t, n, (function (e) {
            r(e)
          }), a)
        },
        pageTemplateLoader: function (e, t, n, r, a) {
          var o = this;
          return o.templateLoader(e, t, n, (function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            r(o.getPageEl(e), t)
          }), a)
        }
      }
    }),
    Jr = {
      name: "routerComponentLoader",
      proto: {
        componentLoader: function (e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 ? arguments[4] : void 0,
            i = this,
            s = i.app,
            l = "string" == typeof e ? e : t,
            c = i.replaceRequestUrlParams(l, r);

          function u(e) {
            var t = r.context || {};
            if ("function" == typeof t) t = t.call(i);
            else if ("string" == typeof t) try {
              t = JSON.parse(t)
            } catch (e) {
              throw o(e), e
            }
            var n = E.merge({}, t, {
              $route: r.route,
              $f7route: r.route,
              $router: i,
              $f7router: i,
              $theme: {
                ios: "ios" === s.theme,
                md: "md" === s.theme,
                aurora: "aurora" === s.theme
              }
            });
            r.componentOptions && r.componentOptions.el && (e.el = r.componentOptions.el), r.componentOptions && r.componentOptions.root && (e.root = r.componentOptions.root), s.component.create(e, n).then((function (e) {
              a(e.el)
            })).catch((function (e) {
              throw o(e), new Error(e)
            }))
          }
          c && i.params.componentCache && i.cache.components.forEach((function (e) {
            e.url === c && (n = e.component)
          })), c && n ? u(n) : c && !n ? (i.xhr && (i.xhr.abort(), i.xhr = !1), i.xhrRequest(l, r).then((function (e) {
            var t = s.component.parse(e);
            i.params.componentCache && i.cache.components.push({
              url: c,
              component: t
            }), u(t)
          })).catch((function (e) {
            throw o(), e
          }))) : u(e)
        },
        modalComponentLoader: function (e, t, n, r, a, o) {
          this.componentLoader(t, n, r, (function (e) {
            a(e)
          }), o)
        },
        tabComponentLoader: function (e, t, n, r, a, o) {
          this.componentLoader(t, n, r, (function (e) {
            a(e)
          }), o)
        },
        pageComponentLoader: function (e, t, n, r, a, o) {
          this.componentLoader(t, n, r, (function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            a(e, t)
          }), o)
        }
      }
    };

  function Xr(e, t, n, r, a) {
    return {
      sel: e,
      data: t,
      children: n,
      text: r,
      elm: a,
      key: void 0 === t ? void 0 : t.key
    }
  }
  var Kr = Xr,
    ea = Array.isArray;

  function ta(e) {
    return "string" == typeof e || "number" == typeof e
  }

  function na(e, t, n) {
    var r, a, o, i = {};
    if (void 0 !== n ? (i = t, ea(n) ? r = n : ta(n) ? a = n : n && n.sel && (r = [n])) : void 0 !== t && (ea(t) ? r = t : ta(t) ? a = t : t && t.sel ? r = [t] : i = t), ea(r))
      for (o = 0; o < r.length; ++o) ta(r[o]) && (r[o] = Xr(void 0, void 0, void 0, r[o], void 0));
    return "s" !== e[0] || "v" !== e[1] || "g" !== e[2] || 3 !== e.length && "." !== e[3] && "#" !== e[3] || function e(t, n, r) {
      if (t.ns = "http://www.w3.org/2000/svg", "foreignObject" !== r && void 0 !== n)
        for (var a = 0; a < n.length; ++a) {
          var o = n[a].data;
          void 0 !== o && e(o, n[a].children, n[a].sel)
        }
    }(i, r, e), Xr(e, i, r, a, void 0)
  }
  var ra = na,
    aa = {};

  function oa(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var ia, sa, la = "area base br col command embed hr img input keygen link menuitem meta param source track wbr".split(" "),
    ca = "hidden checked disabled readonly selected autofocus autoplay required multiple value indeterminate".split(" "),
    ua = "hidden checked disabled readonly selected autofocus autoplay required multiple readOnly indeterminate".split(" "),
    pa = o.createElement("div");

  function da(e) {
    return e.split("-").map((function (e, t) {
      return 0 === t ? e.toLowerCase() : e[0].toUpperCase() + e.substr(1)
    })).join("")
  }

  function fa() {
    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return n.forEach((function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      Object.keys(t).forEach((function (n) {
        e[da(n)] = t[n]
      }))
    })), e
  }

  function ha(e, t, n, r, a) {
    var o = {},
      i = [],
      s = [],
      l = [],
      c = [],
      u = !1;
    e && e.attrs && e.attrs.component && (a = e.attrs.component, delete e.attrs.component, u = !0);
    var p = a && a.indexOf("-") > 0 && aa[a];
    if (p && (i.push((function (n) {
        (n.sel === a || u) && function (e) {
          var t = e.app,
            n = e.vnode,
            r = e.tagName,
            a = e.data;
          t.component.create(Object.assign({
            el: n.elm
          }, aa[r]), {
            $props: fa(a.attrs || {}, a.props || {})
          }, n.children).then((function (e) {
            n.data && n.data.on && e && e.$el && Object.keys(n.data.on).forEach((function (t) {
              e.$el.on(t, n.data.on[t])
            })), n.elm.__component__ = e
          }))
        }({
          app: t,
          vnode: n,
          tagName: a,
          data: e
        })
      })), s.push((function (e) {
        ! function (e) {
          var t = e && e.elm && e.elm.__component__;
          if (t) {
            var n = t.el,
              r = t.$el;
            e.data && e.data.on && r && Object.keys(e.data.on).forEach((function (t) {
              r.off(t, e.data.on[t])
            })), t.$destroy && t.$destroy(), n && n.parentNode && n.parentNode.removeChild(n), delete e.elm.__component__
          }
        }(e)
      })), l.push((function (e, t) {
        ! function (e) {
          var t = e && e.elm && e.elm.__component__;
          if (t) {
            var n = fa(e.data.attrs || {}, e.data.props || {});
            t.$children = e.children, Object.assign(t.$props, n), t.$update()
          }
        }(t)
      }))), !p) {
      if (!e || !e.attrs || !e.attrs.class) return o;
      e.attrs.class.split(" ").forEach((function (e) {
        n || i.push.apply(i, oa(t.getVnodeHooks("insert", e))), s.push.apply(s, oa(t.getVnodeHooks("destroy", e))), l.push.apply(l, oa(t.getVnodeHooks("update", e))), c.push.apply(c, oa(t.getVnodeHooks("postpatch", e)))
      }))
    }
    return r && !n && c.push((function (e, t) {
      var n = t || e;
      n && n.data && n.data.context && n.data.context.$options.updated && n.data.context.$hook("updated")
    })), 0 === i.length && 0 === s.length && 0 === l.length && 0 === c.length ? o : (i.length && (o.insert = function (e) {
      i.forEach((function (t) {
        return t(e)
      }))
    }), s.length && (o.destroy = function (e) {
      s.forEach((function (t) {
        return t(e)
      }))
    }), l.length && (o.update = function (e, t) {
      l.forEach((function (n) {
        return n(e, t)
      }))
    }), c.length && (o.postpatch = function (e, t) {
      c.forEach((function (n) {
        return n(e, t)
      }))
    }), o)
  }

  function va(e, t, n, r, a, o) {
    var s = {
        context: t
      },
      l = e.attributes;
    Array.prototype.forEach.call(l, (function (e) {
      var n = e.name,
        r = e.value;
      if (ca.indexOf(n) >= 0) s.props || (s.props = {}), "readonly" === n && (n = "readOnly"), ua.indexOf(n) >= 0 ? s.props[n] = !1 !== r : s.props[n] = r;
      else if ("key" === n) s.key = r;
      else if (0 === n.indexOf("@")) {
        s.on || (s.on = {});
        var o = n.substr(1),
          l = !1,
          c = !1,
          u = !1;
        o.indexOf(".") >= 0 && o.split(".").forEach((function (e, t) {
          0 === t ? o = e : ("stop" === e && (l = !0), "prevent" === e && (c = !0), "once" === e && (u = !0))
        })), s.on[o] = function (e, t) {
          var n, r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            o = a.stop,
            s = a.prevent,
            l = a.once,
            c = !1,
            u = [],
            p = !0;
          if ((n = e.indexOf("(") < 0 ? e : e.split("(")[0]).indexOf(".") >= 0) n.split(".").forEach((function (e, a) {
            if (0 !== a || "this" !== e) {
              if (0 === a && "window" === e) return r = i, void(p = !1);
              if (r || (r = t), !r[e]) throw new Error("Framework7: Component doesn't have method \"".concat(n.split(".").slice(0, a + 1).join("."), '"'));
              r = r[e]
            }
          }));
          else {
            if (!t[n]) throw new Error("Framework7: Component doesn't have method \"".concat(n, '"'));
            r = t[n]
          }
          return p && (r = r.bind(t)),
            function () {
              for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
              var p = a[0];
              if (!l || !c) {
                if (o && p.stopPropagation(), s && p.preventDefault(), c = !0, e.indexOf("(") < 0) u = a;
                else e.split("(")[1].split(")")[0].replace(/'[^']*'|"[^"]*"/g, (function (e) {
                  return e.replace(/,/g, "<_comma_>")
                })).split(",").map((function (e) {
                  return e.replace(/<_comma_>/g, ",")
                })).forEach((function (e) {
                  var n = e.trim();
                  if (isNaN(n))
                    if ("true" === n) n = !0;
                    else if ("false" === n) n = !1;
                  else if ("null" === n) n = null;
                  else if ("undefined" === n) n = void 0;
                  else if ('"' === n[0]) n = n.replace(/"/g, "");
                  else if ("'" === n[0]) n = n.replace(/'/g, "");
                  else if (n.indexOf(".") > 0) {
                    var r;
                    n.split(".").forEach((function (e) {
                      r || (r = t), r = r[e]
                    })), n = r
                  } else n = t[n];
                  else n = parseFloat(n);
                  u.push(n)
                }));
                r.apply(void 0, oa(u))
              }
            }
        }(r, t, {
          stop: l,
          prevent: c,
          once: u
        })
      } else if ("style" === n)
        if (r.indexOf("{") >= 0 && r.indexOf("}") >= 0) try {
          s.style = JSON.parse(r)
        } catch (e) {
          s.attrs || (s.attrs = {}), s.attrs.style = r
        } else s.attrs || (s.attrs = {}), s.attrs.style = r;
        else s.attrs || (s.attrs = {}), s.attrs[n] = r, "id" !== n || s.key || a || (s.key = r)
    })), a && t && t.$id && t.$style && t.$styleScoped && (s.attrs || (s.attrs = {}), s.attrs["data-f7-".concat(t.$id)] = "");
    var c = ha(s, n, r, a, o);
    return c.prepatch = function (e, t) {
      e && t && e && e.data && e.data.props && Object.keys(e.data.props).forEach((function (n) {
        ua.indexOf(n) < 0 || (t.data || (t.data = {}), t.data.props || (t.data.props = {}), !0 !== e.data.props[n] || n in t.data.props || (t.data.props[n] = !1))
      }))
    }, c && (s.hook = c), s
  }

  function ga(e, t, n, r) {
    for (var a = [], o = e.childNodes, i = 0; i < o.length; i += 1) {
      var s = ma(o[i], t, n, r);
      Array.isArray(s) ? a.push.apply(a, oa(s)) : s && a.push(s)
    }
    return a
  }

  function ma(e, t, n, r, a) {
    if (3 === e.nodeType) return e.textContent;
    if (1 !== e.nodeType) return null;
    var o = e instanceof i.SVGElement ? e.nodeName : e.nodeName.toLowerCase();
    return "slot" === o ? function (e, t, n, r) {
      var a = e.getAttribute("name") || "default",
        o = (t.$children || []).filter((function (e) {
          var t = "default";
          return e.data && (t = e.data.attrs && e.data.attrs.slot || "default"), t === a
        }));
      return 0 === o.length ? ga(e, t, n, r) : o
    }(e, t, n, r) : ra(o, va(e, t, n, r, a, o), la.indexOf(o) >= 0 ? [] : ga(e, t, n, r))
  }
  var ba = function () {
    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      n = arguments.length > 1 ? arguments[1] : void 0,
      r = arguments.length > 2 ? arguments[2] : void 0,
      a = t.trim(),
      i = pa;
    0 === a.indexOf("<tr") && (ia || (ia = o.createElement("tbody")), i = ia), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (sa || (sa = o.createElement("tr")), i = sa), i.innerHTML = a;
    for (var s = 0; s < i.childNodes.length; s += 1) e || 1 !== i.childNodes[s].nodeType || (e = i.childNodes[s]);
    var l = ma(e, n, n.$app, r, !0);
    return i.innerHTML = "", l
  };
  var ya = {
    createElement: function (e) {
      return document.createElement(e)
    },
    createElementNS: function (e, t) {
      return document.createElementNS(e, t)
    },
    createTextNode: function (e) {
      return document.createTextNode(e)
    },
    createComment: function (e) {
      return document.createComment(e)
    },
    insertBefore: function (e, t, n) {
      n && n.parentNode !== e && n.__component__ && (n = n.__component__.el), e.insertBefore(t, n)
    },
    removeChild: function (e, t) {
      e && e.removeChild(t)
    },
    appendChild: function (e, t) {
      e.appendChild(t)
    },
    parentNode: function (e) {
      return e.parentNode
    },
    nextSibling: function (e) {
      return e.nextSibling
    },
    tagName: function (e) {
      return e.tagName
    },
    setTextContent: function (e, t) {
      e.textContent = t
    },
    getTextContent: function (e) {
      return e.textContent
    },
    isElement: function (e) {
      return 1 === e.nodeType
    },
    isText: function (e) {
      return 3 === e.nodeType
    },
    isComment: function (e) {
      return 8 === e.nodeType
    }
  };

  function ka(e) {
    return void 0 === e
  }

  function wa(e) {
    return void 0 !== e
  }
  var Ca = Kr("", {}, [], void 0, void 0);

  function Ma(e, t) {
    return e.key === t.key && e.sel === t.sel
  }

  function xa(e, t, n) {
    var r, a, o, i = {};
    for (r = t; r <= n; ++r) null != (o = e[r]) && void 0 !== (a = o.key) && (i[a] = r);
    return i
  }
  var Sa = ["create", "update", "remove", "destroy", "pre", "post"];
  var Ea = "http://www.w3.org/1999/xlink",
    Ta = "http://www.w3.org/XML/1998/namespace",
    Na = 58,
    Oa = 120;

  function Da(e, t) {
    var n, r = t.elm,
      a = e.data.attrs,
      o = t.data.attrs;
    if ((a || o) && a !== o) {
      for (n in a = a || {}, o = o || {}) {
        var i = o[n];
        a[n] !== i && (!0 === i ? r.setAttribute(n, "") : !1 === i ? r.removeAttribute(n) : n.charCodeAt(0) !== Oa ? r.setAttribute(n, i) : n.charCodeAt(3) === Na ? r.setAttributeNS(Ta, n, i) : n.charCodeAt(5) === Na ? r.setAttributeNS(Ea, n, i) : r.setAttribute(n, i))
      }
      for (n in a) n in o || r.removeAttribute(n)
    }
  }
  var ja = {
    create: Da,
    update: Da
  };

  function Aa(e, t) {
    var n, r, a = t.elm,
      o = e.data.props,
      i = t.data.props;
    if ((o || i) && o !== i) {
      for (n in i = i || {}, o = o || {}) i[n] || delete a[n];
      for (n in i) r = i[n], o[n] === r || "value" === n && a[n] === r || (a[n] = r)
    }
  }
  var Ia = {
      create: Aa,
      update: Aa
    },
    Ba = "undefined" != typeof window && window.requestAnimationFrame || setTimeout,
    Pa = function (e) {
      Ba((function () {
        Ba(e)
      }))
    };

  function $a(e, t, n) {
    Pa((function () {
      e[t] = n
    }))
  }

  function La(e, t) {
    var n, r, a = t.elm,
      o = e.data.style,
      i = t.data.style;
    if ((o || i) && o !== i) {
      i = i || {};
      var s = "delayed" in (o = o || {});
      for (r in o) i[r] || ("-" === r[0] && "-" === r[1] ? a.style.removeProperty(r) : a.style[r] = "");
      for (r in i)
        if (n = i[r], "delayed" === r && i.delayed)
          for (var l in i.delayed) n = i.delayed[l], s && n === o.delayed[l] || $a(a.style, l, n);
        else "remove" !== r && n !== o[r] && ("-" === r[0] && "-" === r[1] ? a.style.setProperty(r, n) : a.style[r] = n)
    }
  }

  function _a(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function za(e, t, n) {
    var r = e.type,
      a = n.data.on;
    a && a[r] && function (e, t, n) {
      "function" == typeof e && e.apply(void 0, [t].concat(_a(n)))
    }(a[r], e, t)
  }

  function Ra(e, t) {
    var n = e.data.on,
      r = e.listener,
      a = e.elm,
      o = t && t.data.on,
      i = t && t.elm;
    if (n !== o && (n && r && (o ? Object.keys(n).forEach((function (e) {
        o[e] || g(a).off(e, r)
      })) : Object.keys(n).forEach((function (e) {
        g(a).off(e, r)
      }))), o)) {
      var s = e.listener || function e(t) {
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
        za(t, r, e.vnode)
      };
      t.listener = s, s.vnode = t, n ? Object.keys(o).forEach((function (e) {
        n[e] || g(i).on(e, s)
      })) : Object.keys(o).forEach((function (e) {
        g(i).on(e, s)
      }))
    }
  }
  var Ha = function (e, t) {
      var n, r, a = {},
        o = void 0 !== t ? t : ya;
      for (n = 0; n < Sa.length; ++n)
        for (a[Sa[n]] = [], r = 0; r < e.length; ++r) {
          var i = e[r][Sa[n]];
          void 0 !== i && a[Sa[n]].push(i)
        }

      function s(e, t) {
        return function () {
          if (0 == --t) {
            var n = o.parentNode(e);
            o.removeChild(n, e)
          }
        }
      }

      function l(e, t) {
        var n, r = e.data;
        void 0 !== r && wa(n = r.hook) && wa(n = n.init) && (n(e), r = e.data);
        var i = e.children,
          s = e.sel;
        if ("!" === s) ka(e.text) && (e.text = ""), e.elm = o.createComment(e.text);
        else if (void 0 !== s) {
          var c = s.indexOf("#"),
            u = s.indexOf(".", c),
            p = c > 0 ? c : s.length,
            d = u > 0 ? u : s.length,
            f = -1 !== c || -1 !== u ? s.slice(0, Math.min(p, d)) : s,
            h = e.elm = wa(r) && wa(n = r.ns) ? o.createElementNS(n, f) : o.createElement(f);
          for (p < d && h.setAttribute("id", s.slice(p + 1, d)), u > 0 && h.setAttribute("class", s.slice(d + 1).replace(/\./g, " ")), n = 0; n < a.create.length; ++n) a.create[n](Ca, e);
          if (ea(i))
            for (n = 0; n < i.length; ++n) {
              var v = i[n];
              null != v && o.appendChild(h, l(v, t))
            } else ta(e.text) && o.appendChild(h, o.createTextNode(e.text));
          wa(n = e.data.hook) && (n.create && n.create(Ca, e), n.insert && t.push(e))
        } else e.elm = o.createTextNode(e.text);
        return e.elm
      }

      function c(e, t, n, r, a, i) {
        for (; r <= a; ++r) {
          var s = n[r];
          null != s && o.insertBefore(e, l(s, i), t)
        }
      }

      function u(e) {
        var t, n, r = e.data;
        if (void 0 !== r) {
          for (wa(t = r.hook) && wa(t = t.destroy) && t(e), t = 0; t < a.destroy.length; ++t) a.destroy[t](e);
          if (void 0 !== e.children)
            for (n = 0; n < e.children.length; ++n) null != (t = e.children[n]) && "string" != typeof t && u(t)
        }
      }

      function p(e, t, n, r) {
        for (; n <= r; ++n) {
          var i = void 0,
            l = void 0,
            c = void 0,
            p = t[n];
          if (null != p)
            if (wa(p.sel)) {
              for (u(p), l = a.remove.length + 1, c = s(p.elm, l), i = 0; i < a.remove.length; ++i) a.remove[i](p, c);
              wa(i = p.data) && wa(i = i.hook) && wa(i = i.remove) ? i(p, c) : c()
            } else o.removeChild(e, p.elm)
        }
      }

      function d(e, t, n) {
        var r, i;
        wa(r = t.data) && wa(i = r.hook) && wa(r = i.prepatch) && r(e, t);
        var s = t.elm = e.elm,
          u = e.children,
          f = t.children;
        if (e !== t) {
          if (void 0 !== t.data) {
            for (r = 0; r < a.update.length; ++r) a.update[r](e, t);
            wa(r = t.data.hook) && wa(r = r.update) && r(e, t)
          }
          ka(t.text) ? wa(u) && wa(f) ? u !== f && function (e, t, n, r) {
            for (var a, i, s, u = 0, f = 0, h = t.length - 1, v = t[0], g = t[h], m = n.length - 1, b = n[0], y = n[m]; u <= h && f <= m;) null == v ? v = t[++u] : null == g ? g = t[--h] : null == b ? b = n[++f] : null == y ? y = n[--m] : Ma(v, b) ? (d(v, b, r), v = t[++u], b = n[++f]) : Ma(g, y) ? (d(g, y, r), g = t[--h], y = n[--m]) : Ma(v, y) ? (d(v, y, r), o.insertBefore(e, v.elm, o.nextSibling(g.elm)), v = t[++u], y = n[--m]) : Ma(g, b) ? (d(g, b, r), o.insertBefore(e, g.elm, v.elm), g = t[--h], b = n[++f]) : (void 0 === a && (a = xa(t, u, h)), ka(i = a[b.key]) ? (o.insertBefore(e, l(b, r), v.elm), b = n[++f]) : ((s = t[i]).sel !== b.sel ? o.insertBefore(e, l(b, r), v.elm) : (d(s, b, r), t[i] = void 0, o.insertBefore(e, s.elm, v.elm)), b = n[++f]));
            (u <= h || f <= m) && (u > h ? c(e, null == n[m + 1] ? null : n[m + 1].elm, n, f, m, r) : p(e, t, u, h))
          }(s, u, f, n) : wa(f) ? (wa(e.text) && o.setTextContent(s, ""), c(s, null, f, 0, f.length - 1, n)) : wa(u) ? p(s, u, 0, u.length - 1) : wa(e.text) && o.setTextContent(s, "") : e.text !== t.text && o.setTextContent(s, t.text), wa(i) && wa(r = i.postpatch) && r(e, t)
        }
      }
      return function (e, t) {
        var n, r, i, s = [];
        for (n = 0; n < a.pre.length; ++n) a.pre[n]();
        for (function (e) {
            return void 0 !== e.sel
          }(e) || (e = function (e) {
            var t = e.id ? "#" + e.id : "",
              n = e.className ? "." + e.className.split(" ").join(".") : "";
            return Kr(o.tagName(e).toLowerCase() + t + n, {}, [], void 0, e)
          }(e)), Ma(e, t) ? d(e, t, s) : (r = e.elm, i = o.parentNode(r), l(t, s), null !== i && (o.insertBefore(i, t.elm, o.nextSibling(r)), p(i, [e], 0, 0))), n = 0; n < s.length; ++n) s[n].data.hook.insert(s[n]);
        for (n = 0; n < a.post.length; ++n) a.post[n]();
        return t
      }
    }([ja, Ia, {
      create: La,
      update: La,
      destroy: function (e) {
        var t, n, r = e.elm,
          a = e.data.style;
        if (a && (t = a.destroy))
          for (n in t) r.style[n] = t[n]
      },
      remove: function (e, t) {
        var n = e.data.style;
        if (n && n.remove) {
          var r, a = e.elm,
            o = 0,
            i = n.remove,
            s = 0,
            l = [];
          for (r in i) l.push(r), a.style[r] = i[r];
          for (var c = getComputedStyle(a)["transition-property"].split(", "); o < c.length; ++o) - 1 !== l.indexOf(c[o]) && s++;
          a.addEventListener("transitionend", (function (e) {
            e.target === a && --s, 0 === s && t()
          }))
        } else t()
      }
    }, {
      create: Ra,
      update: Ra,
      destroy: Ra
    }]),
    Ua = {};

  function Fa(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function Qa(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var Va = function () {
    function e(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0;
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e);
      var s = E.id(),
        l = this;
      E.merge(l, {
        $props: {}
      }, r, {
        $: g,
        $$: g,
        $dom7: g,
        $app: t,
        $f7: t,
        $options: E.extend({
          id: s
        }, n),
        $id: n.isClassComponent ? l.constructor.id : n.id || s,
        $mixins: n.isClassComponent ? l.constructor.mixins : n.mixins,
        $children: a || [],
        $isRootComponent: !!n.root
      });
      var c = l.$options;
      if (l.$mixins && l.$mixins.length)
        for (var u = l.$mixins.length - 1; u >= 0; u -= 1) {
          var p = l.$mixins[u];
          "string" == typeof p && (Ua[p] ? l.$mixins[u] = Ua[p] : l.$mixins.splice(u, 1))
        }
      Object.defineProperty(l, "$slots", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          var e = {};
          return l.$children.forEach((function (t) {
            var n = "default";
            t.data && (n = t.data.attrs && t.data.attrs.slot || "default"), e[n] || (e[n] = []), e[n].push(t)
          })), e
        }
      }), Object.defineProperty(l, "$root", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          if (l.$isRootComponent) return l;
          if (t.rootComponent) return l.$onRootUpdated || (l.$onRootUpdated = function () {
            return l.$update()
          }, t.on("rootComponentUpdated", l.$onRootUpdated)), t.rootComponent;
          var e = E.merge({}, t.data, t.methods);
          return i && i.Proxy && (e = new i.Proxy(e, {
            set: function (e, n, r) {
              t.data[n] = r
            },
            deleteProperty: function (e, n) {
              delete t.data[n], delete t.methods[n]
            },
            has: function (e, n) {
              return n in t.data || n in t.methods
            }
          })), e
        },
        set: function () {}
      }), c.render && (c.render = c.render.bind(l));
      var d = {};
      return l.$mixins && l.$mixins.length && l.$mixins.forEach((function (e) {
        e.methods && Object.assign(d, e.methods)
      })), c.methods && Object.assign(d, c.methods), Object.keys(d).forEach((function (e) {
        l[e] = d[e].bind(l)
      })), c.on && Object.keys(c.on).forEach((function (e) {
        c.on[e] = c.on[e].bind(l)
      })), c.once && Object.keys(c.once).forEach((function (e) {
        c.once[e] = c.once[e].bind(l)
      })), l.$style = c.isClassComponent ? l.constructor.style : c.style, l.$styleScoped = c.isClassComponent ? l.constructor.styleScoped : c.styleScoped, l.__updateQueue = [], new Promise((function (e, t) {
        l.$hook("data", !0).then((function (t) {
          var n = {};
          t.forEach((function (e) {
            Object.assign(n, e || {})
          })), E.extend(l, n), l.$hook("beforeCreate");
          var r = l.$render();
          if (l.$options.el) return r = r.trim(), l.$vnode = ba(r, l, !0), l.$style && (l.$styleEl = o.createElement("style"), l.$styleEl.innerHTML = l.$style), l.el = l.$options.el, Ha(l.el, l.$vnode), l.el = l.$vnode.elm, l.$el = g(l.el), l.$attachEvents(), l.el.f7Component = l, l.$hook("created"), l.$mount(), void e(l);
          r && "string" == typeof r ? (r = r.trim(), l.$vnode = ba(r, l, !0), l.el = o.createElement(l.$vnode.sel || "div"), Ha(l.el, l.$vnode), l.$el = g(l.el)) : r && (l.el = r, l.$el = g(l.el)), l.$style && (l.$styleEl = o.createElement("style"), l.$styleEl.innerHTML = l.$style), l.$attachEvents(), l.el && (l.el.f7Component = l), l.$hook("created"), e(l)
        })).catch((function (e) {
          t(e)
        }))
      }))
    }
    var t, n, r;
    return t = e, (n = [{
      key: "$attachEvents",
      value: function () {
        var e = this,
          t = e.$options,
          n = e.$el;
        e.$mixins && e.$mixins.length && (e.$detachEventsHandlers = {}, e.$mixins.forEach((function (t) {
          t.on && Object.keys(t.on).forEach((function (r) {
            var a = t.on[r].bind(e);
            e.$detachEventsHandlers[r] || (e.$detachEventsHandlers[r] = []), e.$detachEventsHandlers[r].push(a), n.on(E.eventNameToColonCase(r), a)
          })), t.once && Object.keys(t.once).forEach((function (r) {
            var a = t.once[r].bind(e);
            e.$detachEventsHandlers[r] || (e.$detachEventsHandlers[r] = []), e.$detachEventsHandlers[r].push(a), n.once(E.eventNameToColonCase(r), a)
          }))
        }))), t.on && Object.keys(t.on).forEach((function (e) {
          n.on(E.eventNameToColonCase(e), t.on[e])
        })), t.once && Object.keys(t.once).forEach((function (e) {
          n.once(E.eventNameToColonCase(e), t.once[e])
        }))
      }
    }, {
      key: "$detachEvents",
      value: function () {
        var e = this,
          t = e.$options,
          n = e.$el;
        t.on && Object.keys(t.on).forEach((function (e) {
          n.off(E.eventNameToColonCase(e), t.on[e])
        })), t.once && Object.keys(t.once).forEach((function (e) {
          n.off(E.eventNameToColonCase(e), t.once[e])
        })), e.$detachEventsHandlers && (Object.keys(e.$detachEventsHandlers).forEach((function (t) {
          e.$detachEventsHandlers[t].forEach((function (e) {
            n.off(E.eventNameToColonCase(t), e)
          })), e.$detachEventsHandlers[t] = [], delete e.$detachEventsHandlers[t]
        })), e.$detachEventsHandlers = null, delete e.$detachEventsHandlers)
      }
    }, {
      key: "$render",
      value: function () {
        var e = this.$options,
          t = "";
        return e.render ? t = e.render() : this.render ? t = this.render.call(this) : e.template && (t = "string" == typeof e.template ? a.a.compile(e.template)(this) : e.template(this)), t
      }
    }, {
      key: "$startUpdateQueue",
      value: function () {
        var e = this;
        e.__requestAnimationFrameId || (e.__requestAnimationFrameId = i.requestAnimationFrame((function () {
          e.__updateIsPending && function () {
            var t = e.$render();
            if (t && "string" == typeof t) {
              t = t.trim();
              var n = ba(t, e, !1);
              e.$vnode = Ha(e.$vnode, n)
            }
          }();
          var t = Fa(e.__updateQueue);
          e.__updateQueue = [], e.__updateIsPending = !1, i.cancelAnimationFrame(e.__requestAnimationFrameId), delete e.__requestAnimationFrameId, delete e.__updateIsPending, t.forEach((function (e) {
            return e()
          })), t = []
        })))
      }
    }, {
      key: "$tick",
      value: function (e) {
        var t = this;
        return new Promise((function (n) {
          t.__updateQueue.push((function () {
            n(), e && e()
          })), t.$startUpdateQueue()
        }))
      }
    }, {
      key: "$update",
      value: function (e) {
        var t = this;
        return new Promise((function (n) {
          t.__updateIsPending = !0, t.__updateQueue.push((function () {
            n(), e && e(), t.$isRootComponent && t.$f7.emit("rootComponentUpdated")
          })), t.$startUpdateQueue()
        }))
      }
    }, {
      key: "$setState",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = this;
        return E.merge(n, e), n.$update(t)
      }
    }, {
      key: "$f7ready",
      value: function (e) {
        var t = this;
        this.$f7.initialized ? e(this.$f7) : this.$f7.once("init", (function () {
          e(t.$f7)
        }))
      }
    }, {
      key: "$mount",
      value: function (e) {
        this.$hook("beforeMount"), this.$styleEl && g("head").append(this.$styleEl), e && e(this.el), this.$hook("mounted")
      }
    }, {
      key: "$destroy",
      value: function () {
        this.$hook("beforeDestroy"), this.$styleEl && g(this.$styleEl).remove(), this.$onRootUpdated && (this.$f7.off("rootComponentUpdated", this.$onRootUpdated), delete this.$onRootUpdated), this.$detachEvents(), this.$hook("destroyed"), this.el && this.el.f7Component && (this.el.f7Component = null, delete this.el.f7Component), this.$vnode && (this.$vnode = Ha(this.$vnode, {
          sel: this.$vnode.sel,
          data: {}
        })), i.cancelAnimationFrame(this.__requestAnimationFrameId), E.deleteProps(this)
      }
    }, {
      key: "$hook",
      value: function (e, t) {
        var n = this;
        if (t) {
          var r = [];
          return n.$mixins && n.$mixins.length && n.$mixins.forEach((function (t) {
            t[e] && r.push(t[e].call(n))
          })), n[e] && "function" == typeof n[e] && r.push(n[e].call(n)), n.$options[e] && r.push(n.$options[e].call(n)), Promise.all(r)
        }
        return n.$mixins && n.$mixins.length && n.$mixins.forEach((function (t) {
          t[e] && "function" == typeof t[e] && t[e].call(n)
        })), n.$options[e] ? n.$options[e].call(n) : n[e] ? n[e].call(n) : void 0
      }
    }]) && Qa(t.prototype, n), r && Qa(t, r), e
  }();
  var Ya = function (e) {
    var t, n = E.id(),
      r = "f7_component_create_callback_".concat(n),
      s = "f7_component_render_callback_".concat(n),
      l = e.match(/<template([ ]?)([a-z0-9-]*)>/),
      c = l[2] || "t7";
    l && (t = e.split(/<template[ ]?[a-z0-9-]*>/).filter((function (e, t) {
      return t > 0
    })).join("<template>").split("</template>").filter((function (e, t, n) {
      return t < n.length - 1
    })).join("</template>").replace(/{{#raw}}([ \n]*)<template/g, "{{#raw}}<template").replace(/\/template>([ \n]*){{\/raw}}/g, "/template>{{/raw}}").replace(/([ \n])<template/g, "$1{{#raw}}<template").replace(/\/template>([ \n])/g, "/template>{{/raw}}$1"));
    var u, p, d = null,
      f = !1;
    if (e.indexOf("<style>") >= 0 ? d = e.split("<style>")[1].split("</style>")[0] : e.indexOf("<style scoped>") >= 0 && (f = !0, d = (d = e.split("<style scoped>")[1].split("</style>")[0]).replace(/{{this}}/g, "[data-f7-".concat(n, "]")).replace(/[\n]?([^{^}]*){/gi, (function (e, t) {
        return t = t.split(",").map((function (e) {
          return e.indexOf("@") >= 0 ? e : e.indexOf("[data-f7-".concat(n, "]")) >= 0 ? e : "[data-f7-".concat(n, "] ").concat(e.trim())
        })).join(", "), "\n".concat(t, " {")
      }))), e.indexOf("<script>") >= 0) {
      var h = e.split("<script>");
      u = h[h.length - 1].split("<\/script>")[0].trim()
    } else u = "return {}";
    u && u.trim() || (u = "return {}"), u = "window.".concat(r, " = function () {").concat(u, "}"), (p = o.createElement("script")).innerHTML = u, g("head").append(p);
    var v = i[r](),
      m = "function" == typeof v;
    if (g(p).remove(), i[r] = null, delete i[r], v.template || v.render || (v.template = t, v.templateType = c), v.template) {
      if ("t7" === v.templateType)
        if (m) {
          var b = a.a.compile(v.template);
          v.prototype.render = function () {
            return b(this)
          }
        } else v.template = a.a.compile(v.template);
      if ("es" === v.templateType) {
        var y = "window.".concat(s, " = function () {\n        return function render() {\n          return `").concat(v.template, "`;\n        }\n      }");
        (p = o.createElement("script")).innerHTML = y, g("head").append(p), m ? v.prototype.render = v.template : v.render = i[s](), g(p).remove(), i[s] = null, delete i[s]
      }
    }
    return m && (delete v.template, delete v.templateType), d && (v.style = d, v.styleScoped = f), v.id = n, v
  };

  function qa(e, t) {
    Ua[e] = t
  }

  function Wa(e, t) {
    aa[e] = t
  }
  var Za = {
    name: "component",
    static: {
      Component: Va,
      registerComponentMixin: qa,
      registerComponent: Wa
    },
    create: function () {
      var e = this;
      e.component = {
        registerComponentMixin: qa,
        registerComponent: Wa,
        parse: function (e) {
          return Ya(e)
        },
        create: function (t, n, r) {
          return "function" == typeof t ? new t(e, {
            isClassComponent: !0
          }, n, r) : new Va(e, t, n, r)
        }
      }
    }
  };
  $e.use([Gr, Jr]), ee.use([ie, se, le, ce, ue, pe, Ye, Le, qe, Za, Ze, Je, Xe, et, nt, rt, lt, xt]);

  function Ga(e, t, n, r, a, o, i, s) {
    var l, c = "function" == typeof e ? e.options : e;
    if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = "data-v-" + o), i ? (l = function (e) {
        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
      }, c._ssrRegister = l) : a && (l = s ? function () {
        a.call(this, this.$root.$options.shadowRoot)
      } : a), l)
      if (c.functional) {
        c._injectStyles = l;
        var u = c.render;
        c.render = function (e, t) {
          return l.call(t), u(e, t)
        }
      } else {
        var p = c.beforeCreate;
        c.beforeCreate = p ? [].concat(p, l) : [l]
      } return {
      exports: e,
      options: c
    }
  }
  var Ja = Ga({
      components: {
        f7Page: Rr,
        f7Navbar: Lr,
        f7NavTitle: $r,
        f7NavTitleLarge: Br,
        f7BlockTitle: hr,
        f7BlockHeader: fr,
        f7Block: vr,
        f7List: Nr,
        f7ListInput: xr,
        f7ListItem: Tr,
        f7Button: br
      }
    }, (function () {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t;
      return n("f7-page", {
        attrs: {
          name: "home"
        }
      }, [n("f7-navbar", {
        attrs: {
          sliding: !1,
          large: "",
          "large-transparent": ""
        }
      }, [n("f7-nav-title", [n("i", {
        staticClass: "f7-navbar-logo"
      }), e._v(" "), n("span", [e._v("Framework7 CN CLI")])]), e._v(" "), n("f7-nav-title-large", [n("i", {
        staticClass: "f7-navbar-logo"
      }), e._v(" "), n("span", [e._v("Framework7 CN CLI")])])], 1), e._v(" "), n("div", {
        staticClass: "center-content"
      }, [n("div", {
        staticClass: "block padding home-cards row"
      }, [n("div", {
        staticClass: "col-100 medium-33 card"
      }, [n("a", {
        staticClass: "card-content card-content-padding link",
        attrs: {
          href: "/create/"
        }
      }, [n("i", {
        staticClass: "f7-icons"
      }, [e._v("plus_circle_fill")]), e._v(" "), n("span", [e._v("Create App")])])]), e._v(" "), n("div", {
        staticClass: "col-100 medium-33 card"
      }, [n("a", {
        staticClass: "card-content card-content-padding link",
        attrs: {
          href: "/assets/"
        }
      }, [n("i", {
        staticClass: "f7-icons"
      }, [e._v("photo_fill_on_rectangle_fill")]), e._v(" "), n("span", [e._v("Generate Assets")])])]), e._v(" "), n("div", {
        staticClass: "col-100 medium-33"
      })])])], 1)
    }), [], !1, null, null, null).exports,
    Xa = function (e) {
      e = e.map((function (e) {
        return e.replace(/(\[[0-9]?[0-9][m])/g, "").replace(/↵/g, "\n").replace(/[\x1b]/g, "").trim()
      }));
      var t = [];
      e.forEach((function (n, r) {
        if (!(n.indexOf("✔") < 0)) {
          var a = n.replace(/✔/g, "").trim(),
            o = e.filter((function (e) {
              return 0 === e.indexOf(a)
            }))[0];
          o && t.push(e.indexOf(o))
        }
      }));
      for (var n = e.length - 1; n >= 0; n -= 1) t.indexOf(n) >= 0 && e.splice(n, 1);
      return e.join("\n").replace(/✔/g, '<span class="text-color-green">✔</span>').replace(/ℹ/g, '<span class="text-color-yellow">ℹ</span>').replace("https://patreon.com/vladimirkharlampidi", '<a href="https://patreon.com/vladimirkharlampidi" class="external" target="_blank">https://patreon.com/vladimirkharlampidi</a>')
    },
    Ka = function (e, t) {
      e.$f7.request.json(t, (function (t) {
        t.done && (e.done = !0), t.error && (e.error = !0), e.log = t.log, e.done || e.error || setTimeout((function () {
          e.getLog()
        }), 1e3)
      }))
    },
    eo = ["appbar", "dialog", "popup", "login-screen", "popover", "actions", "sheet", "toast", "preloader", "progressbar", "sortable", "swipeout", "accordion", "contacts-list", "virtual-list", "list-index", "timeline", "tabs", "panel", "card", "chip", "form", "input", "checkbox", "radio", "toggle", "range", "stepper", "smart-select", "grid", "calendar", "picker", "infinite-scroll", "pull-to-refresh", "lazy", "data-table", "fab", "searchbar", "messages", "messagebar", "swiper", "photo-browser", "notification", "autocomplete", "tooltip", "gauge", "skeleton", "menu", "color-picker", "treeview", "text-editor", "elevation", "typography"];

  function to(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var no = [{
      path: "/",
      component: Ja
    }, {
      path: "/create/",
      component: Ga({
        components: {
          f7Page: Rr,
          f7Navbar: Lr,
          f7NavTitle: $r,
          f7NavTitleLarge: Br,
          f7BlockTitle: hr,
          f7BlockHeader: fr,
          f7BlockFooter: dr,
          f7Block: vr,
          f7List: Nr,
          f7ListInput: xr,
          f7ListItem: Tr,
          f7Button: br,
          f7Toggle: kr,
          f7Checkbox: yr,
          f7Radio: Ur,
          f7Popup: Hr,
          f7Link: Mr
        },
        data: function () {
          return {
            loading: !1,
            log: [],
            done: !1,
            error: !1,
            bundlerAdvanced: !1,
            cordovaAdvanced: !1,
            coreComponentsList: ["Statusbar", "View", "Navbar", "Toolbar", "Subnavbar", "Touch Ripple", "Modal", "Page", "Link", "Block", "List", "Badge", "Button", "Icon"].sort(),
            componentsList: to(eo),
            iconFile: null,
            iconPreview: null,
            cwd: "",
            name: "My App",
            type: [],
            pkg: "io.framework7.myapp",
            cordova: {
              folder: "cordova",
              platforms: ["ios", "android"],
              plugins: ["cordova-plugin-statusbar", "cordova-plugin-keyboard", "cordova-plugin-splashscreen", "cordova-plugin-wkwebview-engine"]
            },
            webpack: {
              developmentSourceMap: !0,
              productionSourceMap: !0,
              hashAssets: !1,
              preserveAssetsPaths: !1,
              inlineAssets: !0
            },
            framework: "core",
            template: "single-view",
            bundler: "webpack",
            cssPreProcessor: !1,
            theming: {
              customColor: !1,
              color: "#007aff",
              darkTheme: !1,
              iconFonts: !0,
              fillBars: !1
            },
            customBuild: !1,
            customBuildConfig: {
              rtl: !1,
              darkTheme: !0,
              lightTheme: !0,
              themes: ["ios", "md", "aurora"],
              components: to(eo)
            }
          }
        },
        computed: {
          componentsListComputed: function () {
            return this.componentsList.sort().map((function (e) {
              var t = e.split("-").map((function (e) {
                return e[0].toUpperCase() + e.substring(1)
              })).join(" ");
              return {
                component: e,
                name: t
              }
            }))
          }
        },
        watch: {
          "theming.fillBars": function (e) {
            this.barsStyleEl || (this.barsStyleEl = document.createElement("style"), this.barsStyleEl.innerHTML = "\n          /* Invert navigation bars to fill style */\n          :root,\n          :root.theme-dark,\n          :root .theme-dark {\n            --f7-bars-bg-color: var(--f7-theme-color);\n            --f7-bars-text-color: #fff;\n            --f7-bars-link-color: #fff;\n            --f7-navbar-subtitle-text-color: rgba(255,255,255,0.85);\n            --f7-bars-border-color: transparent;\n            --f7-tabbar-link-active-color: #fff;\n            --f7-tabbar-link-inactive-color: rgba(255,255,255,0.54);\n            --f7-searchbar-bg-color: var(--f7-bars-bg-color);\n            --f7-searchbar-input-bg-color: #fff;\n            --f7-searchbar-input-text-color: #000;\n            --f7-sheet-border-color: transparent;\n            --f7-tabbar-link-active-border-color: #fff;\n          }\n          .appbar,\n          .navbar,\n          .toolbar,\n          .subnavbar,\n          .calendar-header,\n          .calendar-footer {\n            --f7-touch-ripple-color: var(--f7-touch-ripple-white);\n            --f7-link-highlight-color: var(--f7-link-highlight-white);\n            --f7-button-text-color: #fff;\n            --f7-button-pressed-bg-color: rgba(255,255,255,0.1);\n          }\n        "), e ? this.$$("head").append(this.barsStyleEl) : this.$$(this.barsStyleEl).remove()
          },
          "theming.darkTheme": function (e) {
            var t = this.$$("html");
            e ? t.addClass("theme-dark") : t.removeClass("theme-dark")
          },
          "theming.customColor": function (e) {
            var t = this.theming.color,
              n = this.$f7.utils.colorThemeCSSProperties(t),
              r = this.$$("html")[0];
            e ? Object.keys(n).forEach((function (e) {
              r.style.setProperty(e, n[e])
            })) : Object.keys(n).forEach((function (e) {
              r.style.removeProperty(e)
            }))
          },
          "theming.color": function () {
            var e = this.theming.color,
              t = this.$f7.utils.colorThemeCSSProperties(e),
              n = this.$$("html")[0];
            Object.keys(t).forEach((function (e) {
              n.style.setProperty(e, t[e])
            }))
          },
          customBuild: function () {
            this.bundler = "webpack", this.cssPreProcessor = "less"
          },
          log: function () {
            var e = this;
            e.$nextTick((function () {
              var t = e.$refs.logEl;
              t.scrollTop = t.scrollHeight - t.offsetHeight
            }))
          },
          done: function () {
            var e = this;
            e.done && e.iconFile && (e.done = !1, e.loading = !0, e.iconFile = null, e.generatingAssets = !0, e.$f7.request.postJSON("/api/assets/generate/", {
              keepLog: !0
            }, (function () {
              e.getLog()
            })))
          }
        },
        mounted: function () {
          var e = this;
          e.$request.json("/api/cwd/", (function (t) {
            var n = t.cwd;
            e.cwd = n
          }))
        },
        methods: {
          logText: Xa,
          exportSettings: function () {
            var e = this.getOptions();
            delete e.cwd;
            var t, n = [JSON.stringify(e, "", 2)],
              r = "".concat(e.name || "framework7", ".json"),
              a = {
                type: "application/json"
              };
            try {
              t = new File(n, r, a)
            } catch (e) {
              t = new Blob(n, a)
            }
            var o = URL.createObjectURL(t),
              i = document.createElement("a");
            i.download = r, i.target = "_blank", i.href = o, i.click()
          },
          importSettings: function (e) {
            var t = e.bundler,
              n = e.cordova,
              r = e.cssPreProcessor,
              a = e.customBuild,
              o = e.customBuildConfig,
              i = e.framework,
              s = e.name,
              l = e.pkg,
              c = e.template,
              u = e.theming,
              p = e.type,
              d = e.webpack;
            p && p.indexOf("cordova") >= 0 && (this.cordovaAdvanced = !0), "webpack" === t && d && (this.bundlerAdvanced = !0), Object.assign(this, {
              bundler: t,
              cordova: n,
              cssPreProcessor: r,
              customBuild: a,
              customBuildConfig: o,
              framework: i,
              name: s,
              pkg: l,
              template: c,
              theming: u,
              type: p,
              webpack: d
            })
          },
          onImportInputChange: function (e) {
            var t = this,
              n = new FileReader;
            n.onload = function () {
              var e = JSON.parse(n.result);
              t.importSettings(e.framework7 || e)
            }, n.readAsText(e.target.files[0])
          },
          resetIcon: function () {
            this.iconFile = null, this.iconPreview = null, this.$refs.iconInput.value = null
          },
          onIconChange: function (e) {
            var t = this,
              n = e.target.files[0];
            if (n) {
              var r = new FileReader;
              r.onload = function () {
                t.iconPreview = r.result
              }, this.iconFile = n, r.readAsDataURL(n)
            }
          },
          toggleComponents: function () {
            this.customBuildConfig.components.length === this.componentsList.length ? this.customBuildConfig.components = [] : this.customBuildConfig.components = to(this.componentsList)
          },
          toggleArrayValue: function (e, t) {
            e.indexOf(t) < 0 ? e.push(t) : e.splice(e.indexOf(t), 1)
          },
          getOptions: function () {
            var e = this.cwd,
              t = this.name,
              n = this.type,
              r = this.pkg,
              a = this.framework,
              o = this.template,
              i = this.bundler,
              s = this.cssPreProcessor,
              l = this.cordova,
              c = this.webpack,
              u = this.theming,
              p = this.customBuild,
              d = this.customBuildConfig,
              f = {
                cwd: e,
                type: n,
                name: t,
                framework: a,
                template: o,
                bundler: i,
                cssPreProcessor: s,
                theming: u,
                customBuild: p
              };
            return f.customBuild && (f.bundler = "webpack", f.cssPreProcessor = "less", f.customBuildConfig = d), "webpack" !== f.bundler && (f.cssPreProcessor = !1), "webpack" === f.bundler && (f.webpack = c), n.indexOf("cordova") >= 0 && l.platforms.length && (f.pkg = r, f.cordova = l, l.platforms.indexOf("ios") < 0 && l.platforms.indexOf("android") < 0 && (f.cordova.plugins = [])), f
          },
          showError: function (e) {
            this.$f7.dialog.alert(e)
          },
          getLog: function () {
            Ka(this, this.generatingAssets ? "/api/assets/generate/" : "/api/create/")
          },
          createApp: function () {
            var e = this;
            if (!e.loading) {
              var t = e.getOptions();
              if (t.type.length) {
                if (t.type.indexOf("cordova") >= 0) {
                  if (!t.pkg.trim()) return void e.showError("You must specify app package (bundle ID)");
                  if (!t.cordova.platforms.length) return void e.showError("You must specify target cordova platform")
                }
                if (t.name) {
                  e.loading = !0;
                  var n = new FormData;
                  n.set("iconFile", this.iconFile), n.set("options", JSON.stringify(t)), e.$f7.request.post("/api/create/", n, (function () {
                    e.getLog()
                  }))
                } else e.showError("You must specify app name")
              } else e.showError("You must specify app type (Web app, PWA or Cordova app)")
            }
          }
        }
      }, (function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("f7-page", {
          attrs: {
            name: "create"
          }
        }, [r("f7-navbar", {
          attrs: {
            sliding: !1,
            large: ""
          }
        }, [r("f7-nav-title", [r("i", {
          staticClass: "f7-navbar-logo"
        }), e._v(" "), r("span", [e._v("Create App")])]), e._v(" "), r("label", {
          staticClass: "tooltip-init link label-file-input",
          staticStyle: {
            color: "var(--f7-navbar-link-color,var(--f7-bars-link-color,var(--f7-theme-color)))"
          },
          attrs: {
            slot: "right",
            "data-tooltip": "Import project settings from .json file"
          },
          slot: "right"
        }, [r("i", {
          staticClass: "f7-icons",
          staticStyle: {
            "font-size": "24px"
          }
        }, [e._v("tray_arrow_down_fill")]), e._v(" "), r("input", {
          attrs: {
            type: "file",
            accept: ".json"
          },
          on: {
            change: e.onImportInputChange
          }
        })]), e._v(" "), r("a", {
          staticClass: "link margin-left tooltip-init",
          attrs: {
            slot: "right",
            "data-tooltip": "Export project settings<br>to .json file"
          },
          on: {
            click: e.exportSettings
          },
          slot: "right"
        }, [r("i", {
          staticClass: "f7-icons",
          staticStyle: {
            "font-size": "24px"
          }
        }, [e._v("tray_arrow_up_fill")])]), e._v(" "), r("f7-nav-title-large", [r("i", {
          staticClass: "f7-navbar-logo"
        }), e._v(" "), r("span", [e._v("Create App")])])], 1), e._v(" "), r("div", {
          staticClass: "center-content"
        }, [r("f7-block", {
          staticClass: "content-block",
          attrs: {
            "medium-inset": "",
            strong: ""
          }
        }, [r("f7-block-title", {
          attrs: {
            large: ""
          }
        }, [r("i", {
          staticClass: "f7-icons block-icon"
        }, [e._v("info_circle")]), e._v(" "), r("span", [e._v("General")])]), e._v(" "), r("f7-block-title", {
          attrs: {
            medium: ""
          }
        }, [e._v("Destination")]), e._v(" "), r("f7-block-header", [e._v("New Framework7Cn app will be created in the following directory.")]), e._v(" "), r("f7-list", {
          staticClass: "inputs-list",
          attrs: {
            "no-hairlines-between": ""
          }
        }, [r("f7-list-input", {
          attrs: {
            type: "text",
            outline: "",
            "clear-button": "",
            required: "",
            validate: "",
            "validate-on-blur": "",
            value: e.cwd
          },
          on: {
            input: function (t) {
              e.cwd = t.target.value
            }
          }
        })], 1), e._v(" "), r("f7-block-footer", {
          staticClass: "display-flex align-items-center"
        }, [r("i", {
          staticClass: "f7-icons text-color-orange",
          staticStyle: {
            "font-size": "1.5em",
            "margin-right": "8px"
          }
        }, [e._v("exclamationmark_triangle_fill")]), e._v(" Make sure this folder is empty, the project will be created in the root of this folder.")]), e._v(" "), r("div", {
          staticClass: "row"
        }, [r("div", {
          staticClass: "col-25"
        }, [r("f7-block-title", {
          attrs: {
            medium: ""
          }
        }, [e._v("App Icon")]), e._v(" "), r("div", {
          staticClass: "create-app-icon"
        }, [r("label", [r("img", {
          attrs: {
            src: e.iconPreview || "/static/icons/apple-touch-icon.png"
          }
        }), e._v(" "), r("input", {
          ref: "iconInput",
          attrs: {
            type: "file",
            accept: "image/*"
          },
          on: {
            change: e.onIconChange
          }
        })]), e._v(" "), r("div", [e._v("Click to choose app icon")]), e._v(" "), e.iconFile ? r("div", [r("f7-link", {
          on: {
            click: e.resetIcon
          }
        }, [e._v("Reset to default icon")])], 1) : e._e(), e._v(" "), r("small", [r("em", [e._v("1024x1024 square PNG")])])])], 1), e._v(" "), r("div", {
          staticClass: "col-75"
        }, [r("div", {
          staticClass: "row"
        }, [r("div", {
          staticClass: "col-100",
          class: {
            "medium-50": e.type.indexOf("cordova") >= 0
          }
        }, [r("f7-block-title", {
          attrs: {
            medium: ""
          }
        }, [e._v("App (project) name")]), e._v(" "), r("f7-list", {
          staticClass: "inputs-list",
          attrs: {
            "no-hairlines-between": ""
          }
        }, [r("f7-list-input", {
          attrs: {
            type: "text",
            outline: "",
            "clear-button": "",
            required: "",
            validate: "",
            "validate-on-blur": "",
            value: e.name
          },
          on: {
            input: function (t) {
              e.name = t.target.value
            }
          }
        })], 1)], 1), e._v(" "), e.type.indexOf("cordova") >= 0 ? r("div", {
          staticClass: "col-100 medium-50"
        }, [r("f7-block-title", {
          attrs: {
            medium: ""
          }
        }, [e._v("App package (Bundle ID)")]), e._v(" "), r("f7-list", {
          staticClass: "inputs-list",
          attrs: {
            "no-hairlines-between": ""
          }
        }, [r("f7-list-input", {
          attrs: {
            type: "text",
            outline: "",
            "clear-button": "",
            required: "",
            validate: "",
            "validate-on-blur": "",
            value: e.pkg
          },
          on: {
            input: function (t) {
              e.pkg = t.target.value
            }
          }
        })], 1)], 1) : e._e()]), e._v(" "), r("f7-block-title", {
          attrs: {
            medium: ""
          }
        }, [e._v("App Type")]), e._v(" "), r("f7-block-header", [e._v("What types of the app are you targeting? (multiple allowed)")]), e._v(" "), r("div", {
          staticClass: "row checkbox-row"
        }, [r("div", {
          staticClass: "col-33 checkbox-col",
          class: {
            checked: e.type.indexOf("web") >= 0
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              return e.toggleArrayValue(e.type, "web")
            }
          }
        }, [r("span", {
          staticClass: "text-icon"
        }, [e._v("www")])]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Simple web app")])]), e._v(" "), r("div", {
          staticClass: "col-33 checkbox-col",
          class: {
            checked: e.type.indexOf("pwa") >= 0
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              return e.toggleArrayValue(e.type, "pwa")
            }
          }
        }, [r("svg", {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "134",
            height: "50",
            viewBox: "0 0 134 50"
          }
        }, [r("g", {
          attrs: {
            fill: "var(--checkbox-col-text-color)"
          }
        }, [r("polygon", {
          attrs: {
            points: "98.196 41.045 102.059 31.343 113.214 31.343 107.92 16.627 114.541 0 133.505 50 119.52 50 116.279 41.045"
          }
        }), e._v(" "), r("polygon", {
          attrs: {
            points: "86.212 50 106.443 0 93.031 0 79.191 32.311 69.35 0 59.041 0 48.474 32.311 41.022 17.588 34.278 38.29 41.125 50 54.325 50 63.874 21.024 72.978 50"
          }
        }), e._v(" "), r("path", {
          attrs: {
            d: "M12.7453596,32.8358409 L21.015736,32.8358409 C23.5209828,32.8358409 25.7518102,32.557516 27.7082184,32.0008663 L29.8470487,25.4418975 L35.8247423,7.11055644 C35.3692677,6.39195312 34.8492721,5.71251666 34.2647556,5.0723355 C31.1955651,1.69073966 26.7050671,0 20.7931248,0 L0,0 L0,50 L12.7453596,50 L12.7453596,32.8358409 Z M23.6924692,11.5030001 C24.8913023,12.7039946 25.4906505,14.3111488 25.4906505,16.3245987 C25.4906505,18.3534923 24.9634784,19.9626194 23.9092024,21.1519802 C22.7534289,22.47353 20.6252609,23.1342709 17.5248351,23.1342709 L12.7453596,23.1342709 L12.7453596,9.70140629 L17.5599663,9.70140629 C20.4495368,9.70140629 22.4937045,10.3019376 23.6924692,11.5030001 Z"
          }
        })])])]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("PWA (Progressive Web App)")])]), e._v(" "), r("div", {
          staticClass: "col-33 checkbox-col",
          class: {
            checked: e.type.indexOf("cordova") >= 0
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              return e.toggleArrayValue(e.type, "cordova")
            }
          }
        }, [r("svg", {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "53",
            height: "50",
            viewBox: "0 0 53 50"
          }
        }, [r("path", {
          attrs: {
            fill: "var(--checkbox-col-text-color)",
            d: "M47.5862069,50 L39.1133005,50 L39.7044335,42.8571429 L35.5418719,42.8571429 L34.9507389,50 L17.3891626,50 L16.7980296,42.8571429 L12.635468,42.8571429 L13.226601,50 L4.75369458,50 L0,19.0394089 L11.8965517,0 L40.4433498,0 L52.3399015,19.0394089 L47.5862069,50 Z M38.0541872,9.5320197 L30.4187192,9.5320197 L30.9359606,13.1034483 L21.4039409,13.1034483 L21.9211823,9.5320197 L14.2857143,9.5320197 L9.50738916,19.0394089 L11.8965517,38.0788177 L40.4433498,38.0788177 L42.8325123,19.0394089 L38.0541872,9.5320197 Z M33.8916256,31.773399 C33.226601,31.773399 32.7093596,29.8029557 32.7093596,27.3399015 C32.7093596,24.8768473 33.2512315,22.9064039 33.8916256,22.9064039 C34.5566502,22.9064039 35.0738916,24.8768473 35.0738916,27.3399015 C35.0738916,29.8029557 34.5566502,31.773399 33.8916256,31.773399 Z M18.8916256,32.1428571 C18.226601,32.1428571 17.7093596,30.1724138 17.7093596,27.7093596 C17.7093596,25.2463054 18.2512315,23.2758621 18.8916256,23.2758621 C19.5566502,23.2758621 20.0738916,25.2463054 20.0738916,27.7093596 C20.0738916,30.1724138 19.5320197,32.1428571 18.8916256,32.1428571 Z"
          }
        })])]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Cordova app "), r("small", [e._v("(targets native iOS and Android apps, or native desktop app with Electron)")])])])])], 1)])], 1), e._v(" "), e.type.indexOf("cordova") >= 0 ? r("f7-block", {
          staticClass: "content-block",
          attrs: {
            "medium-inset": "",
            strong: ""
          }
        }, [r("f7-block-title", {
          attrs: {
            large: ""
          }
        }, [r("i", {
          staticClass: "block-icon block-icon-cordova"
        }), e._v(" "), r("span", [e._v("Cordova")]), e._v(" "), r("div", {
          staticClass: "right"
        }, [r("span", {
          staticClass: "toggle-label disabled"
        }, [e._v("Advanced")]), e._v(" "), r("f7-toggle", {
          attrs: {
            color: "green",
            checked: e.cordovaAdvanced
          },
          on: {
            change: function (t) {
              e.cordovaAdvanced = t.target.checked
            }
          }
        })], 1)]), e._v(" "), r("f7-block-title", [e._v("Target Cordova platform (multiple allowed)")]), e._v(" "), r("div", {
          staticClass: "row checkbox-row"
        }, [r("div", {
          staticClass: "col-25 checkbox-col",
          class: {
            checked: e.cordova.platforms.indexOf("ios") >= 0
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              return e.toggleArrayValue(e.cordova.platforms, "ios")
            }
          }
        }, [r("i", {
          staticClass: "icon f7-icons"
        }, [e._v("logo_apple")])]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("iOS")])]), e._v(" "), r("div", {
          staticClass: "col-25 checkbox-col",
          class: {
            checked: e.cordova.platforms.indexOf("android") >= 0
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              return e.toggleArrayValue(e.cordova.platforms, "android")
            }
          }
        }, [r("i", {
          staticClass: "icon f7-icons"
        }, [e._v("logo_android")])]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Android")])]), e._v(" "), r("div", {
          staticClass: "col-25 checkbox-col",
          class: {
            checked: e.cordova.platforms.indexOf("electron") >= 0
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              return e.toggleArrayValue(e.cordova.platforms, "electron")
            }
          }
        }, [r("svg", {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "46",
            height: "50",
            viewBox: "0 0 46 50"
          }
        }, [r("g", {
          attrs: {
            fill: "var(--checkbox-col-text-color)",
            transform: "translate(.232 .132)"
          }
        }, [r("path", {
          attrs: {
            d: "M16.26709,10.8502718 C9.80877563,9.67399702 4.70244235,10.9051268 2.66730029,14.4300962 C1.14863171,17.0605074 1.5827308,20.5479943 3.72007728,24.2759036 C3.90199702,24.5932037 4.30669467,24.7029512 4.62399477,24.5210315 C4.94129487,24.3391118 5.05104235,23.9344141 4.86912262,23.617114 C2.94377645,20.2589706 2.56913221,17.249135 3.81435381,15.0923479 C5.504955,12.1641407 10.0597158,11.0659943 16.029758,12.1533384 C16.3895899,12.2188758 16.7344199,11.9803029 16.7999573,11.620471 C16.8654947,11.2606391 16.6269219,10.9158092 16.26709,10.8502718 Z M7.07861563,28.8071517 C9.68999775,31.6768672 13.0826192,34.3685159 16.9517131,36.6023384 C26.3201118,42.0111858 36.2934338,43.4569053 41.2087007,40.105396 C41.5108891,39.8993467 41.5888252,39.4873387 41.3827762,39.1851503 C41.1767268,38.8829619 40.7647185,38.8050255 40.4625301,39.0110748 C36.0634245,42.0106361 26.5894906,40.6373073 17.6139648,35.4552848 C13.8605087,33.2882262 10.5753367,30.6818258 8.05823533,27.9157179 C7.81207268,27.6452034 7.39322308,27.6254623 7.12270858,27.871625 C6.85219407,28.1177876 6.83245298,28.5366372 7.07861563,28.8071517 Z"
          }
        }), e._v(" "), r("path", {
          attrs: {
            d: "M39.6407377,28.0015087 C43.8694858,23.0059033 45.3460182,17.9814478 43.3150669,14.4637368 C41.8206546,11.8753386 38.6614245,10.508773 34.4628576,10.4541703 C34.0971371,10.4494141 33.7968063,10.7420335 33.79205,11.107754 C33.7872937,11.4734746 34.0799132,11.7738054 34.4456338,11.7785616 C38.2217152,11.8276699 40.943457,13.0049943 42.1680132,15.1259884 C43.8549613,18.0478679 42.5382228,22.528564 38.6297993,27.145756 C38.3934897,27.4249189 38.4282291,27.8427919 38.7073921,28.0791015 C38.986555,28.3154111 39.4044281,28.2806716 39.6407377,28.0015087 Z M28.7729049,11.0707934 C24.9494197,11.8899918 20.8796646,13.4916898 16.9711355,15.7482801 C7.30003301,21.3318937 0.991353487,29.5651322 1.86752366,35.5349762 C1.92063458,35.896851 2.25704699,36.1471536 2.61892181,36.0940427 C2.98079663,36.0409318 3.23109922,35.7045192 3.17798829,35.3426444 C2.40004159,30.0420527 8.38005162,22.2377494 17.6333872,16.8953336 C21.424971,14.7062617 25.3655808,13.1553903 29.0503881,12.3659042 C29.4080231,12.2892794 29.6358268,11.9372422 29.559202,11.5796073 C29.4825771,11.2219723 29.1305399,10.9941685 28.7729049,11.0707934 Z"
          }
        }), e._v(" "), r("path", {
          attrs: {
            d: "M13.1053499 39.6738308C15.3163366 45.847701 18.9335091 49.6489149 23.0008948 49.6489149 25.9673153 49.6489149 28.7118359 47.626797 30.851997 44.0667086 31.0404405 43.7532391 30.9390868 43.3463579 30.6256172 43.1579146 30.3121476 42.9694712 29.9052666 43.0708248 29.7168231 43.3842944 27.7934636 46.5837404 25.4309366 48.3244116 23.0008948 48.3244116 19.6222193 48.3244116 16.3960206 44.9340642 14.3523037 39.2272715 14.2289898 38.8829348 13.849884 38.7037603 13.5055472 38.8270742 13.1612104 38.9503881 12.982036 39.329494 13.1053499 39.6738308zM33.301094 38.466153C34.4456795 34.8084911 35.0604132 30.5890416 35.0604132 26.1921295 35.0604132 15.2205809 31.2204221 5.76269344 25.7508624 3.33404268 25.4165831 3.18561253 25.0252698 3.33627301 24.8768396 3.67055228 24.7284095 4.00483159 24.87907 4.3961449 25.2133492 4.54457507 30.0915353 6.71063791 33.7359099 15.6867225 33.7359099 26.1921295 33.7359099 30.4578502 33.1405877 34.5440609 32.0370364 38.0705937 31.9278057 38.4196536 32.1222257 38.7911715 32.4712856 38.900402 32.8203455 39.0096328 33.1918636 38.8152129 33.301094 38.466153zM45.7738444 37.8173417C45.7738444 36.0667924 44.3547434 34.6476914 42.604194 34.6476914 40.8536444 34.6476914 39.4345434 36.0667924 39.4345434 37.8173417 39.4345434 39.5678914 40.8536444 40.9869921 42.604194 40.9869921 44.3547434 40.9869921 45.7738444 39.5678914 45.7738444 37.8173417zM44.4493411 37.8173417C44.4493411 38.8363884 43.6232404 39.6624887 42.604194 39.6624887 41.5851474 39.6624887 40.7590467 38.8363884 40.7590467 37.8173417 40.7590467 36.7982954 41.5851474 35.9721947 42.604194 35.9721947 43.6232404 35.9721947 44.4493411 36.7982954 44.4493411 37.8173417zM3.35200735 40.9869921C5.10255692 40.9869921 6.52165772 39.5678914 6.52165772 37.8173417 6.52165772 36.0667924 5.10255692 34.6476914 3.35200735 34.6476914 1.60145778 34.6476914.182356966 36.0667924.182356966 37.8173417.182356966 39.5678914 1.60145778 40.9869921 3.35200735 40.9869921zM3.35200735 39.6624887C2.33296076 39.6624887 1.50686028 38.8363884 1.50686028 37.8173417 1.50686028 36.7982954 2.33296076 35.9721947 3.35200735 35.9721947 4.37105394 35.9721947 5.1971544 36.7982954 5.1971544 37.8173417 5.1971544 38.8363884 4.37105394 39.6624887 3.35200735 39.6624887z"
          }
        }), e._v(" "), r("path", {
          attrs: {
            d: "M23.0008948 6.56724609C24.7514444 6.56724609 26.1705452 5.14814526 26.1705452 3.39759573 26.1705452 1.64704615 24.7514444.227945338 23.0008948.227945338 21.2503452.227945338 19.8312444 1.64704615 19.8312444 3.39759573 19.8312444 5.14814526 21.2503452 6.56724609 23.0008948 6.56724609zM23.0008948 5.24274278C21.9818482 5.24274278 21.1557477 4.41664228 21.1557477 3.39759573 21.1557477 2.37854913 21.9818482 1.55244865 23.0008948 1.55244865 24.0199414 1.55244865 24.8460419 2.37854913 24.8460419 3.39759573 24.8460419 4.41664228 24.0199414 5.24274278 23.0008948 5.24274278zM23.4850352 28.4336682C22.2470065 28.7011662 21.0272995 27.9143767 20.7592781 26.676348 20.4923036 25.4383192 21.2785696 24.2186123 22.5165984 23.9505908 23.7546271 23.6830929 24.9743341 24.4698824 25.2423555 25.7079111 25.5098535 26.9459398 24.723064 28.1656468 23.4850352 28.4336682z"
          }
        })])])]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Electron")])]), e._v(" "), r("div", {
          staticClass: "col-25 checkbox-col",
          class: {
            checked: e.cordova.platforms.indexOf("osx") >= 0
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              return e.toggleArrayValue(e.cordova.platforms, "osx")
            }
          }
        }, [r("i", {
          staticClass: "icon f7-icons"
        }, [e._v("logo_macos")])]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("macOS"), r("small", [e._v("(when you don't need Electron functionality)")])])])]), e._v(" "), e.cordovaAdvanced ? [r("f7-block-title", [e._v("Pre-installed Cordova plugins")]), e._v(" "), r("f7-block-header", [e._v("Will be installed only if "), r("b", [e._v("iOS")]), e._v(" or "), r("b", [e._v("Android")]), e._v(" platforms selected.")]), e._v(" "), r("f7-list", {
          attrs: {
            "media-list": "",
            "no-hairlines-between": ""
          }
        }, [r("f7-list-item", {
          attrs: {
            checkbox: "",
            checked: e.cordova.plugins.indexOf("cordova-plugin-statusbar") >= 0,
            title: "cordova-plugin-statusbar",
            text: "Allows to customize native iOS and Android status bar"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.cordova.plugins, "cordova-plugin-statusbar")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            checked: e.cordova.plugins.indexOf("cordova-plugin-keyboard") >= 0,
            title: "cordova-plugin-keyboard",
            text: "Allows to correctly handle native keyboard and shrink/expand webview on keyboard open/close"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.cordova.plugins, "cordova-plugin-keyboard")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            checked: e.cordova.plugins.indexOf("cordova-plugin-splashscreen") >= 0,
            title: "cordova-plugin-splashscreen",
            text: "Display and hide splash screen during application launch"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.cordova.plugins, "cordova-plugin-splashscreen")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            checked: e.cordova.plugins.indexOf("cordova-plugin-wkwebview-engine") >= 0,
            title: "cordova-plugin-wkwebview-engine",
            text: "Modern iOS webview"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.cordova.plugins, "cordova-plugin-wkwebview-engine")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            checked: e.cordova.plugins.indexOf("cordova-plugin-device") >= 0,
            title: "cordova-plugin-device",
            text: "Plugin provides information about device software and hardware"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.cordova.plugins, "cordova-plugin-device")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            checked: e.cordova.plugins.indexOf("cordova-plugin-inappbrowser") >= 0,
            title: "cordova-plugin-inappbrowser",
            text: "Plugin provides a web browser to display an external web content"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.cordova.plugins, "cordova-plugin-inappbrowser")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            checked: e.cordova.plugins.indexOf("cordova-plugin-file") >= 0,
            title: "cordova-plugin-file",
            text: "Plugin implements a File API allowing read/write access to files residing on the device."
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.cordova.plugins, "cordova-plugin-file")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            checked: e.cordova.plugins.indexOf("cordova-plugin-media") >= 0,
            title: "cordova-plugin-media",
            text: "Plugin provides the ability to record and play back audio files on a device"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.cordova.plugins, "cordova-plugin-media")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            checked: e.cordova.plugins.indexOf("cordova-plugin-safariviewcontroller") >= 0,
            title: "cordova-plugin-safariviewcontroller",
            text: "Better and more modern implementation of in-app browser (for iOS only)"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.cordova.plugins, "cordova-plugin-safariviewcontroller")
            }
          }
        })], 1)] : e._e()], 2) : e._e(), e._v(" "), r("f7-block", {
          staticClass: "content-block",
          attrs: {
            "medium-inset": "",
            strong: ""
          }
        }, [r("f7-block-title", {
          attrs: {
            large: ""
          }
        }, [r("i", {
          staticClass: "f7-icons block-icon"
        }, [e._v("gear")]), e._v(" "), r("span", [e._v("Framework")])]), e._v(" "), r("f7-block-title", [e._v("What type of framework do you prefer?")]), e._v(" "), r("div", {
          staticClass: "row checkbox-row"
        }, [r("div", {
          staticClass: "col-25 checkbox-col",
          class: {
            checked: "core" === e.framework
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              e.framework = "core"
            }
          }
        }, [r("img", {
          attrs: {
            src: n(2)
          }
        })]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Framework7Cn Core")])]), e._v(" "), r("div", {
          staticClass: "col-25 checkbox-col",
          class: {
            checked: "vue" === e.framework
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              e.framework = "vue", e.bundler = "webpack"
            }
          }
        }, [r("img", {
          attrs: {
            src: n(2)
          }
        }), e._v(" "), r("img", {
          attrs: {
            src: n(11)
          }
        })]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Framework7Cn with Vue.js")])]), e._v(" "), r("div", {
          staticClass: "col-25 checkbox-col",
          class: {
            checked: "react" === e.framework
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              e.framework = "react", e.bundler = "webpack"
            }
          }
        }, [r("img", {
          attrs: {
            src: n(2)
          }
        }), e._v(" "), r("img", {
          attrs: {
            src: n(12)
          }
        })]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Framework7Cn with React")])]), e._v(" "), r("div", {
          staticClass: "col-25 checkbox-col",
          class: {
            checked: "svelte" === e.framework
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              e.framework = "svelte", e.bundler = "webpack"
            }
          }
        }, [r("img", {
          attrs: {
            src: n(2)
          }
        }), e._v(" "), r("img", {
          attrs: {
            src: n(13)
          }
        })]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Framework7Cn with Svelte")])])])], 1), e._v(" "), r("f7-block", {
          staticClass: "content-block",
          attrs: {
            "medium-inset": "",
            strong: ""
          }
        }, [r("f7-block-title", {
          attrs: {
            large: ""
          }
        }, [r("i", {
          staticClass: "f7-icons block-icon"
        }, [e._v("rocket_fill")]), e._v(" "), r("span", [e._v("Starter template")])]), e._v(" "), r("f7-block-title", [e._v("Choose starter template")]), e._v(" "), r("div", {
          staticClass: "row checkbox-row"
        }, [r("div", {
          staticClass: "col-25 checkbox-col checkbox-template-col",
          class: {
            checked: "blank" === e.template
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              e.template = "blank"
            }
          }
        }, [r("img", {
          attrs: {
            src: n(14)
          }
        })]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Blank")])]), e._v(" "), r("div", {
          staticClass: "col-25 checkbox-col checkbox-template-col",
          class: {
            checked: "single-view" === e.template
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              e.template = "single-view"
            }
          }
        }, [r("img", {
          attrs: {
            src: n(15)
          }
        })]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Single View")])]), e._v(" "), r("div", {
          staticClass: "col-25 checkbox-col checkbox-template-col",
          class: {
            checked: "tabs" === e.template
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              e.template = "tabs"
            }
          }
        }, [r("img", {
          attrs: {
            src: n(16)
          }
        })]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Tabbed Views (Tabs)")])]), e._v(" "), r("div", {
          staticClass: "col-25 checkbox-col checkbox-template-col",
          class: {
            checked: "split-view" === e.template
          }
        }, [r("div", {
          staticClass: "col-icon",
          on: {
            click: function (t) {
              e.template = "split-view"
            }
          }
        }, [r("img", {
          attrs: {
            src: n(17)
          }
        })]), e._v(" "), r("div", {
          staticClass: "col-label"
        }, [e._v("Split View (Split Panel)")])])])], 1), e._v(" "), r("f7-block", {
          staticClass: "content-block",
          attrs: {
            "medium-inset": "",
            strong: ""
          }
        }, [r("f7-block-title", {
          attrs: {
            large: ""
          }
        }, [r("i", {
          staticClass: "block-icon block-icon-webpack"
        }), e._v(" "), r("span", [e._v("Bundler")]), e._v(" "), e.bundler ? r("div", {
          staticClass: "right"
        }, [r("span", {
          staticClass: "toggle-label disabled"
        }, [e._v("Advanced")]), e._v(" "), r("f7-toggle", {
          attrs: {
            checked: e.bundlerAdvanced,
            color: "green"
          },
          on: {
            change: function (t) {
              e.bundlerAdvanced = t.target.checked
            }
          }
        })], 1) : e._e()]), e._v(" "), r("f7-block-title", [e._v("Should we setup project with bundler?")]), e._v(" "), r("f7-list", {
          attrs: {
            "medium-inset": ""
          }
        }, [r("f7-list-item", {
          class: {
            disabled: "core" !== e.framework || e.customBuild
          },
          attrs: {
            radio: "",
            title: "No bundler",
            checked: !1 === e.bundler && "core" === e.framework,
            disabled: "core" !== e.framework || e.customBuild
          },
          on: {
            change: function (t) {
              e.bundler = !1
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            radio: "",
            title: "Webpack (recommended)",
            checked: "webpack" === e.bundler || "core" !== e.framework || e.customBuild,
            disabled: "core" !== e.framework
          },
          on: {
            change: function (t) {
              e.bundler = "webpack"
            }
          }
        })], 1), e._v(" "), "webpack" === e.bundler ? [r("f7-block-title", [e._v("Do you want to setup CSS Pre-Processor?")]), e._v(" "), r("f7-list", [r("f7-list-item", {
          class: {
            disabled: e.customBuild
          },
          attrs: {
            radio: "",
            title: "No, i am good with CSS",
            checked: !1 === e.cssPreProcessor && !e.customBuild,
            disabled: e.customBuild
          },
          on: {
            change: function (t) {
              e.cssPreProcessor = !1
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            radio: "",
            title: "Less",
            checked: "less" === e.cssPreProcessor || e.customBuild
          },
          on: {
            change: function (t) {
              e.cssPreProcessor = "less"
            }
          }
        }), e._v(" "), r("f7-list-item", {
          class: {
            disabled: e.customBuild
          },
          attrs: {
            radio: "",
            title: "Stylus",
            checked: "stylus" === e.cssPreProcessor && !e.customBuild,
            disabled: e.customBuild
          },
          on: {
            change: function (t) {
              e.cssPreProcessor = "stylus"
            }
          }
        }), e._v(" "), r("f7-list-item", {
          class: {
            disabled: e.customBuild
          },
          attrs: {
            radio: "",
            title: "SCSS (SASS)",
            checked: "scss" === e.cssPreProcessor && !e.customBuild,
            disabled: e.customBuild
          },
          on: {
            change: function (t) {
              e.cssPreProcessor = "scss"
            }
          }
        })], 1)] : e._e(), e._v(" "), "webpack" === e.bundler && e.bundlerAdvanced ? [r("f7-block-title", [e._v("Webpack settings")]), e._v(" "), r("f7-list", {
          attrs: {
            "no-hairlines-between": "",
            "media-list": ""
          }
        }, [r("f7-list-item", {
          attrs: {
            checkbox: "",
            title: "Development source map",
            text: "In dev mode it generates cheap (eval) source map. Disable for even faster dev builds",
            checked: !0 === e.webpack.developmentSourceMap
          },
          on: {
            change: function (t) {
              e.webpack.developmentSourceMap = t.target.checked
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            title: "Production source map",
            text: "Disable for faster production builds, but without source maps",
            checked: !0 === e.webpack.productionSourceMap
          },
          on: {
            change: function (t) {
              e.webpack.productionSourceMap = t.target.checked
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            title: "Inline small assets",
            text: "When enabled, it will load small assets (less than 10Kb) and insert inline as base64 URIs",
            checked: !0 === e.webpack.inlineAssets
          },
          on: {
            change: function (t) {
              e.webpack.inlineAssets = t.target.checked
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            title: "Hash assets and bundle",
            text: "When enabled, it will add MD5 hash of the file content to generated bundle and to assets, to something like app.b34c1df56.js. Such file naming can force browser to clear its cache",
            checked: !0 === e.webpack.hashAssets
          },
          on: {
            change: function (t) {
              e.webpack.hashAssets = t.target.checked
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checkbox: "",
            title: "Preserve assets path",
            text: "By default, webpack will move all assets to folders based on asset type (images to /images/ folder, videos and audio to /media/ folder, etc). If this option enabled, it will preserve assets path and keep files and folder structure",
            checked: !0 === e.webpack.preserveAssetsPaths
          },
          on: {
            change: function (t) {
              e.webpack.preserveAssetsPaths = t.target.checked
            }
          }
        })], 1)] : e._e()], 2), e._v(" "), r("f7-block", {
          staticClass: "content-block",
          attrs: {
            "medium-inset": "",
            strong: ""
          }
        }, [r("f7-block-title", {
          attrs: {
            large: ""
          }
        }, [r("i", {
          staticClass: "f7-icons block-icon"
        }, [e._v("color_filter")]), e._v(" "), r("span", [e._v("Theming")])]), e._v(" "), r("f7-list", {
          attrs: {
            "media-list": "",
            "no-hairlines-between": ""
          }
        }, [r("f7-list-item", {
          attrs: {
            title: "Include Framework7 Icons and Material Icons icon fonts",
            text: "Disable if you want to use own custom icons",
            checkbox: "",
            checked: !0 === e.theming.iconFonts
          },
          on: {
            change: function (t) {
              e.theming.iconFonts = t.target.checked
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            title: "Custom color theme",
            text: "Enable to specify custom color theme",
            checkbox: "",
            checked: !0 === e.theming.customColor
          },
          on: {
            change: function (t) {
              e.theming.customColor = t.target.checked
            }
          }
        }), e._v(" "), e.theming.customColor ? r("f7-list-input", {
          attrs: {
            type: "colorpicker",
            label: "Enter custom theme color",
            placeholder: "e.g. #ff0000",
            required: "",
            validate: "",
            value: {
              hex: e.theming.color
            },
            colorPickerParams: {
              backdrop: !1,
              targetEl: ".color-picker-target",
              targetElSetBackgroundColor: !0,
              routableModals: !1,
              modules: ["sb-spectrum", "hue-slider", "hex"],
              hexLabel: !0,
              hexValueEditable: !0,
              cssClass: "theme-dark"
            }
          },
          on: {
            "colorpicker:change": function (t) {
              return e.theming.color = t.hex
            }
          }
        }, [r("i", {
          staticClass: "icon color-picker-target",
          style: {
            "border-radius": "4px",
            width: "18px",
            height: "18px"
          },
          attrs: {
            slot: "media"
          },
          slot: "media"
        })]) : e._e(), e._v(" "), r("f7-list-item", {
          attrs: {
            title: "Dark theme",
            text: "Enables dark theme by default",
            checkbox: "",
            checked: !0 === e.theming.darkTheme
          },
          on: {
            change: function (t) {
              e.theming.darkTheme = t.target.checked
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            title: "Fill style navigation bars",
            text: "Enables navigation bars to be fill with color",
            checkbox: "",
            checked: !0 === e.theming.fillBars
          },
          on: {
            change: function (t) {
              e.theming.fillBars = t.target.checked
            }
          }
        })], 1)], 1), e._v(" "), r("f7-block", {
          staticClass: "content-block",
          attrs: {
            "medium-inset": "",
            strong: ""
          }
        }, [r("f7-block-title", {
          attrs: {
            large: ""
          }
        }, [r("i", {
          staticClass: "f7-icons block-icon"
        }, [e._v("square_grid_2x2_fill")]), e._v(" "), r("span", [e._v("Framework7CnCustom Build")]), e._v(" "), r("div", {
          staticClass: "right"
        }, [r("span", {
          staticClass: "toggle-label disabled"
        }, [e._v("Enable")]), e._v(" "), r("f7-toggle", {
          attrs: {
            checked: e.customBuild,
            color: "green"
          },
          on: {
            change: function (t) {
              e.customBuild = t.target.checked
            }
          }
        })], 1)]), e._v(" "), e.customBuild ? e._e() : [r("p", {
          staticClass: "text-align-center"
        }, [r("i", {
          staticClass: "f7-icons text-color-orange"
        }, [e._v("exclamationmark_triangle_fill")]), r("br"), e._v("Enabling custom build will automatically enable Webpack bundler with Less pre-processor")])], e._v(" "), e.customBuild ? [r("f7-block-title", {
          attrs: {
            medium: ""
          }
        }, [e._v("Core components (required)")]), e._v(" "), r("div", {
          staticClass: "row"
        }, [r("div", {
          staticClass: "col-50"
        }, [r("f7-list", {
          staticClass: "no-margin-top",
          attrs: {
            "no-hairlines-between": ""
          }
        }, e._l(e.coreComponentsList, (function (t, n) {
          return n < 7 ? r("f7-list-item", {
            key: n,
            attrs: {
              checked: "",
              checkbox: "",
              disabled: "",
              title: t
            }
          }) : e._e()
        })), 1)], 1), e._v(" "), r("div", {
          staticClass: "col-50"
        }, [r("f7-list", {
          staticClass: "no-margin-top",
          attrs: {
            "no-hairlines-between": ""
          }
        }, e._l(e.coreComponentsList, (function (t, n) {
          return n >= 7 ? r("f7-list-item", {
            key: n,
            attrs: {
              checked: "",
              checkbox: "",
              disabled: "",
              title: t
            }
          }) : e._e()
        })), 1)], 1)]), e._v(" "), r("f7-block-title", {
          attrs: {
            medium: ""
          }
        }, [e._v("Customizable list of components / "), r("a", {
          staticClass: "link",
          on: {
            click: e.toggleComponents
          }
        }, [e._v("Toggle all")])]), e._v(" "), r("div", {
          staticClass: "row"
        }, [r("div", {
          staticClass: "col-33"
        }, [r("f7-list", {
          staticClass: "no-margin-top",
          attrs: {
            "no-hairlines-between": ""
          }
        }, e._l(e.componentsListComputed, (function (t, n) {
          return n < 18 ? r("f7-list-item", {
            key: n,
            attrs: {
              checked: e.customBuildConfig.components.indexOf(t.component) >= 0,
              checkbox: "",
              title: t.name
            },
            on: {
              change: function (n) {
                return e.toggleArrayValue(e.customBuildConfig.components, t.component)
              }
            }
          }) : e._e()
        })), 1)], 1), e._v(" "), r("div", {
          staticClass: "col-33"
        }, [r("f7-list", {
          staticClass: "no-margin-top",
          attrs: {
            "no-hairlines-between": ""
          }
        }, e._l(e.componentsListComputed, (function (t, n) {
          return n >= 18 && n < 36 ? r("f7-list-item", {
            key: n,
            attrs: {
              checked: e.customBuildConfig.components.indexOf(t.component) >= 0,
              checkbox: "",
              title: t.name
            },
            on: {
              change: function (n) {
                return e.toggleArrayValue(e.customBuildConfig.components, t.component)
              }
            }
          }) : e._e()
        })), 1)], 1), e._v(" "), r("div", {
          staticClass: "col-33"
        }, [r("f7-list", {
          staticClass: "no-margin-top",
          attrs: {
            "no-hairlines-between": ""
          }
        }, e._l(e.componentsListComputed, (function (t, n) {
          return n >= 36 ? r("f7-list-item", {
            key: n,
            attrs: {
              checked: e.customBuildConfig.components.indexOf(t.component) >= 0,
              checkbox: "",
              title: t.name
            },
            on: {
              change: function (n) {
                return e.toggleArrayValue(e.customBuildConfig.components, t.component)
              }
            }
          }) : e._e()
        })), 1)], 1)]), e._v(" "), r("f7-block-title", {
          attrs: {
            medium: ""
          }
        }, [e._v("CSS")]), e._v(" "), r("f7-list", {
          attrs: {
            "no-hairlines-between": ""
          }
        }, [r("f7-list-item", {
          attrs: {
            checked: e.customBuildConfig.themes.indexOf("ios") >= 0,
            checkbox: "",
            title: "Include iOS theme"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.customBuildConfig.themes, "ios")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checked: e.customBuildConfig.themes.indexOf("md") >= 0,
            checkbox: "",
            title: "Include MD theme"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.customBuildConfig.themes, "md")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checked: e.customBuildConfig.themes.indexOf("aurora") >= 0,
            checkbox: "",
            title: "Include Aurora theme"
          },
          on: {
            change: function (t) {
              return e.toggleArrayValue(e.customBuildConfig.themes, "aurora")
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checked: e.customBuildConfig.darkTheme,
            checkbox: "",
            title: "Include Dark theme"
          },
          on: {
            change: function (t) {
              e.customBuildConfig.darkTheme = t.target.checked
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checked: e.customBuildConfig.lightTheme,
            checkbox: "",
            title: "Include Light theme"
          },
          on: {
            change: function (t) {
              e.customBuildConfig.lightTheme = t.target.checked
            }
          }
        }), e._v(" "), r("f7-list-item", {
          attrs: {
            checked: e.customBuildConfig.rtl,
            checkbox: "",
            title: "RTL Layout"
          },
          on: {
            change: function (t) {
              e.customBuildConfig.rtl = !e.customBuildConfig.rtl
            }
          }
        })], 1)] : e._e()], 2), e._v(" "), r("f7-popup", {
          staticClass: "popup-log",
          attrs: {
            closeByBackdropClick: !1,
            opened: e.log && e.log.length > 0
          }
        }, [r("pre", {
          ref: "logEl",
          domProps: {
            innerHTML: e._s(e.logText(e.log))
          }
        })]), e._v(" "), r("f7-block", {
          staticClass: "no-padding button-block",
          attrs: {
            "medium-inset": ""
          }
        }, [e.done || e.error ? e._e() : r("f7-button", {
          staticClass: "button-center-content",
          class: {
            loading: e.loading
          },
          staticStyle: {
            width: "300px"
          },
          attrs: {
            large: "",
            fill: "",
            round: "",
            "icon-f7": "gear_alt_fill",
            text: e.loading ? "Creating app..." : "Create App"
          },
          on: {
            click: e.createApp
          }
        }), e._v(" "), e.done ? r("f7-button", {
          staticClass: "button-center-content",
          staticStyle: {
            width: "300px"
          },
          attrs: {
            large: "",
            fill: "",
            round: "",
            "icon-f7": "checkmark_alt",
            text: "Done",
            color: "green"
          }
        }) : e._e(), e._v(" "), e.error ? r("f7-button", {
          staticClass: "button-center-content",
          staticStyle: {
            width: "300px"
          },
          attrs: {
            large: "",
            fill: "",
            round: "",
            "icon-f7": "xmark",
            text: "Error",
            color: "red"
          }
        }) : e._e()], 1)], 1)], 1)
      }), [], !1, null, null, null).exports
    }, {
      path: "/assets/",
      component: Ga({
        components: {
          f7Page: Rr,
          f7Navbar: Lr,
          f7NavTitle: $r,
          f7NavTitleLarge: Br,
          f7BlockTitle: hr,
          f7BlockHeader: fr,
          f7BlockFooter: dr,
          f7Block: vr,
          f7List: Nr,
          f7ListInput: xr,
          f7ListItem: Tr,
          f7Button: br,
          f7Popup: Hr,
          f7Icon: gr
        },
        data: function () {
          return {
            uploading: null,
            loading: !1,
            log: [],
            done: !1,
            error: !1,
            project: null,
            dragText: "Drag & drop new image or click to choose file"
          }
        },
        mounted: function () {
          var e = this,
            t = e.$$;
          e.$request.json("/api/project/", (function (t) {
            e.project = t
          })), t(e.$el).on("dragenter dragleave dragover", ".drag-area", (function (e) {
            e.preventDefault();
            var n = t(this);
            "dragleave" !== e.type ? n.closest(".drag-area").addClass("dragenter") : n.closest(".drag-area").removeClass("dragenter")
          })), t(e.$el).on("drop", ".drag-area", (function (n) {
            n.preventDefault();
            var r = t(this);
            r.closest(".drag-area").removeClass("dragenter");
            var a = r.closest(".drag-area").find("input").attr("name"),
              o = n.dataTransfer.files[0];
            e.setImage(a, o)
          }))
        },
        methods: {
          logText: Xa,
          getLog: function () {
            Ka(this, "/api/assets/generate/")
          },
          getImage: function (e) {
            return this.uploading && e.indexOf(this.uploading) >= 0 ? "" : "".concat(e, "?").concat((new Date).getTime())
          },
          setImage: function (e, t) {
            var n = this;
            if (t)
              if ("image/png" === t.type) {
                var r = new FormData;
                r.append(e, t), n.uploading = e, n.$request({
                  method: "post",
                  contentType: "multipart/form-data",
                  url: "/api/assets/upload/",
                  data: r,
                  complete: function () {
                    n.uploading = null
                  }
                })
              } else n.$f7.dialog.alert("Only PNG images please")
          },
          generateAssets: function () {
            var e = this;
            e.loading || (e.loading = !0, e.$f7.request.postJSON("/api/assets/generate/", {}, (function () {
              e.getLog()
            })))
          }
        }
      }, (function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("f7-page", {
          attrs: {
            name: "assets"
          }
        }, [n("f7-navbar", {
          attrs: {
            sliding: !1,
            large: ""
          }
        }, [n("f7-nav-title", [n("i", {
          staticClass: "f7-navbar-logo"
        }), e._v(" "), n("span", [e._v("Generate Assets")])]), e._v(" "), n("f7-nav-title-large", [n("i", {
          staticClass: "f7-navbar-logo"
        }), e._v(" "), n("span", [e._v("Generate Assets")])])], 1), e._v(" "), e.project ? n("div", {
          staticClass: "center-content"
        }, [n("div", {
          staticClass: "row"
        }, [e.project.type.indexOf("web") >= 0 || e.project.type.indexOf("pwa") >= 0 ? [n("f7-block-title", {
          staticClass: "col-100",
          attrs: {
            medium: ""
          }
        }, [e._v("Web App Assets")]), e._v(" "), n("div", {
          staticClass: "col-100 medium-33"
        }, [n("f7-block-title", [e._v("Web Icon")]), e._v(" "), n("label", {
          staticClass: "block block-strong inset drag-area"
        }, [n("f7-block-header", [e._v("PNG image 512x512 size")]), e._v(" "), n("div", {
          staticClass: "asset-preview"
        }, [n("img", {
          attrs: {
            src: e.getImage("/cwd/assets-src/web-icon.png")
          }
        })]), e._v(" "), n("f7-block-footer", [e._v(e._s(e.dragText))]), e._v(" "), n("input", {
          attrs: {
            type: "file",
            name: "web-icon"
          },
          on: {
            change: function (t) {
              return e.setImage("web-icon", t.target.files[0])
            }
          }
        })], 1)], 1), e._v(" "), n("div", {
          staticClass: "col-100 medium-33"
        }, [n("f7-block-title", [e._v("Apple Touch Icon")]), e._v(" "), n("label", {
          staticClass: "block block-strong inset drag-area"
        }, [n("f7-block-header", [e._v("Square PNG image 256x256 size")]), e._v(" "), n("div", {
          staticClass: "asset-preview"
        }, [n("img", {
          attrs: {
            src: e.getImage("/cwd/assets-src/apple-touch-icon.png")
          }
        })]), e._v(" "), n("f7-block-footer", [e._v(e._s(e.dragText))]), e._v(" "), n("input", {
          attrs: {
            type: "file",
            name: "apple-touch-icon"
          },
          on: {
            change: function (t) {
              return e.setImage("apple-touch-icon", t.target.files[0])
            }
          }
        })], 1)], 1)] : e._e(), e._v(" "), e.project.type.indexOf("cordova") >= 0 ? [n("f7-block-title", {
          staticClass: "col-100",
          attrs: {
            medium: ""
          }
        }, [e._v("Cordova Assets")]), e._v(" "), e.project.cordova.platforms.indexOf("ios") >= 0 ? n("div", {
          staticClass: "col-100 medium-33"
        }, [n("f7-block-title", [e._v("iOS Icon")]), e._v(" "), n("label", {
          staticClass: "block block-strong inset drag-area"
        }, [n("f7-block-header", [e._v("Square PNG image 1024x1024 size")]), e._v(" "), n("div", {
          staticClass: "asset-preview"
        }, [n("img", {
          attrs: {
            src: e.getImage("/cwd/assets-src/cordova-ios-icon.png")
          }
        })]), e._v(" "), n("f7-block-footer", [e._v(e._s(e.dragText))]), e._v(" "), n("input", {
          attrs: {
            type: "file",
            name: "cordova-ios-icon"
          },
          on: {
            change: function (t) {
              return e.setImage("cordova-ios-icon", t.target.files[0])
            }
          }
        })], 1)], 1) : e._e(), e._v(" "), e.project.cordova.platforms.indexOf("android") >= 0 ? n("div", {
          staticClass: "col-100 medium-33"
        }, [n("f7-block-title", [e._v("Android Icon")]), e._v(" "), n("label", {
          staticClass: "block block-strong inset drag-area"
        }, [n("f7-block-header", [e._v("Square PNG image 512x512 size")]), e._v(" "), n("div", {
          staticClass: "asset-preview"
        }, [n("img", {
          attrs: {
            src: e.getImage("/cwd/assets-src/cordova-android-icon.png")
          }
        })]), e._v(" "), n("f7-block-footer", [e._v(e._s(e.dragText))]), e._v(" "), n("input", {
          attrs: {
            type: "file",
            name: "cordova-android-icon"
          },
          on: {
            change: function (t) {
              return e.setImage("cordova-android-icon", t.target.files[0])
            }
          }
        })], 1)], 1) : e._e(), e._v(" "), e.project.cordova.platforms.indexOf("electron") >= 0 ? n("div", {
          staticClass: "col-100 medium-33"
        }, [n("f7-block-title", [e._v("Electron App Icon")]), e._v(" "), n("label", {
          staticClass: "block block-strong inset drag-area"
        }, [n("f7-block-header", [e._v("PNG image 1024x1024 size")]), e._v(" "), n("div", {
          staticClass: "asset-preview"
        }, [n("img", {
          attrs: {
            src: e.getImage("/cwd/assets-src/cordova-electron-app-icon.png")
          }
        })]), e._v(" "), n("f7-block-footer", [e._v(e._s(e.dragText))]), e._v(" "), n("input", {
          attrs: {
            type: "file",
            name: "cordova-electron-app-icon"
          },
          on: {
            change: function (t) {
              return e.setImage("cordova-electron-app-icon", t.target.files[0])
            }
          }
        })], 1)], 1) : e._e(), e._v(" "), e.project.cordova.platforms.indexOf("electron") >= 0 ? n("div", {
          staticClass: "col-100 medium-33"
        }, [n("f7-block-title", [e._v("Electron Installer Icon")]), e._v(" "), n("label", {
          staticClass: "block block-strong inset drag-area"
        }, [n("f7-block-header", [e._v("PNG image 1024x1024 size")]), e._v(" "), n("div", {
          staticClass: "asset-preview"
        }, [n("img", {
          attrs: {
            src: e.getImage("/cwd/assets-src/cordova-electron-installer-icon.png")
          }
        })]), e._v(" "), n("f7-block-footer", [e._v(e._s(e.dragText))]), e._v(" "), n("input", {
          attrs: {
            type: "file",
            name: "cordova-electron-installer-icon"
          },
          on: {
            change: function (t) {
              return e.setImage("cordova-electron-installer-icon", t.target.files[0])
            }
          }
        })], 1)], 1) : e._e(), e._v(" "), e.project.cordova.platforms.indexOf("osx") >= 0 ? n("div", {
          staticClass: "col-100 medium-33"
        }, [n("f7-block-title", [e._v("macOS Icon")]), e._v(" "), n("label", {
          staticClass: "block block-strong inset drag-area"
        }, [n("f7-block-header", [e._v("PNG image 1024x1024 size")]), e._v(" "), n("div", {
          staticClass: "asset-preview"
        }, [n("img", {
          attrs: {
            src: e.getImage("/cwd/assets-src/cordova-osx-icon.png")
          }
        })]), e._v(" "), n("f7-block-footer", [e._v(e._s(e.dragText))]), e._v(" "), n("input", {
          attrs: {
            type: "file",
            name: "cordova-osx-icon"
          },
          on: {
            change: function (t) {
              return e.setImage("cordova-osx-icon", t.target.files[0])
            }
          }
        })], 1)], 1) : e._e(), e._v(" "), e.project.cordova.platforms.indexOf("android") >= 0 || e.project.cordova.platforms.indexOf("ios") >= 0 ? n("div", {
          staticClass: "col-100 medium-33"
        }, [n("f7-block-title", [e._v("Splash Screen")]), e._v(" "), n("label", {
          staticClass: "block block-strong inset drag-area"
        }, [n("f7-block-header", [e._v("PNG image 2732x2732 size")]), e._v(" "), n("div", {
          staticClass: "asset-preview"
        }, [n("img", {
          attrs: {
            src: e.getImage("/cwd/assets-src/cordova-splash-screen.png")
          }
        })]), e._v(" "), n("f7-block-footer", [e._v(e._s(e.dragText))]), e._v(" "), n("input", {
          attrs: {
            type: "file",
            name: "cordova-splash-screen"
          },
          on: {
            change: function (t) {
              return e.setImage("cordova-splash-screen", t.target.files[0])
            }
          }
        })], 1)], 1) : e._e()] : e._e()], 2), e._v(" "), n("f7-popup", {
          staticClass: "popup-log",
          attrs: {
            closeByBackdropClick: !1,
            opened: e.log && e.log.length > 0
          }
        }, [n("pre", {
          ref: "logEl",
          domProps: {
            innerHTML: e._s(e.logText(e.log))
          }
        })]), e._v(" "), n("f7-block", {
          staticClass: "no-padding button-block",
          attrs: {
            inset: ""
          }
        }, [e.done || e.error ? e._e() : n("f7-button", {
          staticClass: "button-center-content",
          class: {
            loading: e.loading
          },
          attrs: {
            large: "",
            fill: "",
            round: "",
            "icon-f7": "gear_alt_fill",
            text: e.loading ? "Generating assets..." : "Generate Assets"
          },
          on: {
            click: e.generateAssets
          }
        }), e._v(" "), e.done ? n("f7-button", {
          staticClass: "button-center-content",
          attrs: {
            large: "",
            fill: "",
            round: "",
            "icon-f7": "checkmark_alt",
            text: "Done",
            color: "green"
          }
        }) : e._e(), e._v(" "), e.error ? n("f7-button", {
          staticClass: "button-center-content",
          attrs: {
            large: "",
            fill: "",
            round: "",
            "icon-f7": "xmark",
            text: "Error",
            color: "red"
          }
        }) : e._e()], 1)], 1) : e._e()], 1)
      }), [], !1, null, null, null).exports
    }],
    ro = Ga({
      components: {
        f7App: ur,
        f7View: Fr
      },
      data: function () {
        return {
          f7params: {
            name: "Framework7 CN CLI",
            theme: "ios",
            iosTranslucentBars: !1,
            routes: no,
            navbar: {
              snapPageScrollToLargeTitle: !1,
              snapPageScrollToTransparentNavbar: !1
            }
          }
        }
      }
    }, (function () {
      var e = this.$createElement,
        t = this._self._c || e;
      return t("f7-app", {
        attrs: {
          params: this.f7params
        }
      }, [t("f7-view", {
        staticClass: "ios-edges",
        attrs: {
          main: "",
          url: "/",
          "push-state": !0,
          "push-state-separator": "#!"
        }
      })], 1)
    }), [], !1, null, null, null).exports;
  St.use(Zr), St.use([Tt, Lt, un, bn, Tn, Pn, Un, Gn]);
  var ao = new r.a({
    el: "#app",
    render: function (e) {
      return e(ro)
    },
    components: {
      app: ro
    }
  });
  t.default = ao
}]);
//# sourceMappingURL=app.js.map
