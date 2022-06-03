!function() {
    "use strict";
    var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, jquery = {
        exports: {}
    }, $ = (!function() {
        var global, factory;
        global = "undefined" != typeof window ? window : commonjsGlobal, factory = function(window, noGlobal) {
            function isFunction(obj) {
                return "function" == typeof obj && "number" != typeof obj.nodeType && "function" != typeof obj.item;
            }
            function isWindow(obj) {
                return null != obj && obj === obj.window;
            }
            var arr = [], getProto = Object.getPrototypeOf, slice = arr.slice, flat = arr.flat ? function(array) {
                return arr.flat.call(array);
            } : function(array) {
                return arr.concat.apply([], array);
            }, push = arr.push, indexOf = arr.indexOf, class2type = {}, toString = class2type.toString, hasOwn = class2type.hasOwnProperty, fnToString = hasOwn.toString, ObjectFunctionString = fnToString.call(Object), support = {}, document = window.document, preservedScriptAttributes = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function DOMEval(code, node, doc) {
                var i, val, script = (doc = doc || document).createElement("script");
                if (script.text = code, node) for (i in preservedScriptAttributes) (val = node[i] || node.getAttribute && node.getAttribute(i)) && script.setAttribute(i, val);
                doc.head.appendChild(script).parentNode.removeChild(script);
            }
            function toType(obj) {
                return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
            }
            var jQuery = function(selector, context) {
                return new jQuery.fn.init(selector, context);
            };
            function isArrayLike(obj) {
                var length = !!obj && "length" in obj && obj.length, type = toType(obj);
                return !isFunction(obj) && !isWindow(obj) && ("array" === type || 0 === length || "number" == typeof length && 0 < length && length - 1 in obj);
            }
            jQuery.fn = jQuery.prototype = {
                jquery: "3.6.0",
                constructor: jQuery,
                length: 0,
                toArray: function() {
                    return slice.call(this);
                },
                get: function(num) {
                    return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num];
                },
                pushStack: function(elems) {
                    elems = jQuery.merge(this.constructor(), elems);
                    return elems.prevObject = this, elems;
                },
                each: function(callback) {
                    return jQuery.each(this, callback);
                },
                map: function(callback) {
                    return this.pushStack(jQuery.map(this, function(elem, i) {
                        return callback.call(elem, i, elem);
                    }));
                },
                slice: function() {
                    return this.pushStack(slice.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                even: function() {
                    return this.pushStack(jQuery.grep(this, function(_elem, i) {
                        return (i + 1) % 2;
                    }));
                },
                odd: function() {
                    return this.pushStack(jQuery.grep(this, function(_elem, i) {
                        return i % 2;
                    }));
                },
                eq: function(i) {
                    var len = this.length, i = +i + (i < 0 ? len : 0);
                    return this.pushStack(0 <= i && i < len ? [ this[i] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: push,
                sort: arr.sort,
                splice: arr.splice
            }, jQuery.extend = jQuery.fn.extend = function() {
                var options, name, copy, copyIsArray, src, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
                for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, 
                i++), "object" == typeof target || isFunction(target) || (target = {}), 
                i === length && (target = this, i--); i < length; i++) if (null != (options = arguments[i])) for (name in options) copy = options[name], 
                "__proto__" !== name && target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy))) ? (src = target[name], 
                src = copyIsArray && !Array.isArray(src) ? [] : copyIsArray || jQuery.isPlainObject(src) ? src : {}, 
                copyIsArray = !1, target[name] = jQuery.extend(deep, src, copy)) : void 0 !== copy && (target[name] = copy));
                return target;
            }, jQuery.extend({
                expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(msg) {
                    throw new Error(msg);
                },
                noop: function() {},
                isPlainObject: function(obj) {
                    return !(!obj || "[object Object]" !== toString.call(obj)) && (!(obj = getProto(obj)) || "function" == typeof (obj = hasOwn.call(obj, "constructor") && obj.constructor) && fnToString.call(obj) === ObjectFunctionString);
                },
                isEmptyObject: function(obj) {
                    for (var name in obj) return !1;
                    return !0;
                },
                globalEval: function(code, options, doc) {
                    DOMEval(code, {
                        nonce: options && options.nonce
                    }, doc);
                },
                each: function(obj, callback) {
                    var length, i = 0;
                    if (isArrayLike(obj)) for (length = obj.length; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++); else for (i in obj) if (!1 === callback.call(obj[i], i, obj[i])) break;
                    return obj;
                },
                makeArray: function(arr, results) {
                    results = results || [];
                    return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(results, "string" == typeof arr ? [ arr ] : arr) : push.call(results, arr)), 
                    results;
                },
                inArray: function(elem, arr, i) {
                    return null == arr ? -1 : indexOf.call(arr, elem, i);
                },
                merge: function(first, second) {
                    for (var len = +second.length, j = 0, i = first.length; j < len; j++) first[i++] = second[j];
                    return first.length = i, first;
                },
                grep: function(elems, callback, invert) {
                    for (var matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++) !callback(elems[i], i) != callbackExpect && matches.push(elems[i]);
                    return matches;
                },
                map: function(elems, callback, arg) {
                    var length, value, i = 0, ret = [];
                    if (isArrayLike(elems)) for (length = elems.length; i < length; i++) null != (value = callback(elems[i], i, arg)) && ret.push(value); else for (i in elems) null != (value = callback(elems[i], i, arg)) && ret.push(value);
                    return flat(ret);
                },
                guid: 1,
                support: support
            }), "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]), 
            jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
                class2type["[object " + name + "]"] = name.toLowerCase();
            });
            function dir(elem, dir, until) {
                for (var matched = [], truncate = void 0 !== until; (elem = elem[dir]) && 9 !== elem.nodeType; ) if (1 === elem.nodeType) {
                    if (truncate && jQuery(elem).is(until)) break;
                    matched.push(elem);
                }
                return matched;
            }
            function siblings(n, elem) {
                for (var matched = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && matched.push(n);
                return matched;
            }
            var Sizzle = function(window) {
                function funescape(escape, nonHex) {
                    return escape = "0x" + escape.slice(1) - 65536, nonHex || (escape < 0 ? String.fromCharCode(65536 + escape) : String.fromCharCode(escape >> 10 | 55296, 1023 & escape | 56320));
                }
                function fcssescape(ch, asCodePoint) {
                    return asCodePoint ? "\0" === ch ? "�" : ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " " : "\\" + ch;
                }
                function unloadHandler() {
                    setDocument();
                }
                var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + +new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
                    return a === b && (hasDuplicate = !0), 0;
                }, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, pushNative = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
                    for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;
                    return -1;
                }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                    ID: new RegExp("^#(" + identifier + ")"),
                    CLASS: new RegExp("^\\.(" + identifier + ")"),
                    TAG: new RegExp("^(" + identifier + "|[*])"),
                    ATTR: new RegExp("^" + attributes),
                    PSEUDO: new RegExp("^" + pseudos),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + booleans + ")$", "i"),
                    needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, inDisabledFieldset = addCombinator(function(elem) {
                    return !0 === elem.disabled && "fieldset" === elem.nodeName.toLowerCase();
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), 
                    arr[preferredDoc.childNodes.length].nodeType;
                } catch (e) {
                    push = {
                        apply: arr.length ? function(target, els) {
                            pushNative.apply(target, slice.call(els));
                        } : function(target, els) {
                            for (var j = target.length, i = 0; target[j++] = els[i++]; );
                            target.length = j - 1;
                        }
                    };
                }
                function Sizzle(selector, context, results, seed) {
                    var m, i, nid, match, groups, elem, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                    if (results = results || [], "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
                    if (!seed && (setDocument(context), context = context || document, 
                    documentIsHTML)) {
                        if (11 !== nodeType && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                            if (9 === nodeType) {
                                if (!(elem = context.getElementById(m))) return results;
                                if (elem.id === m) return results.push(elem), results;
                            } else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), 
                            results;
                        } else {
                            if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), 
                            results;
                            if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), 
                            results;
                        }
                        if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (1 !== nodeType || "object" !== context.nodeName.toLowerCase())) {
                            if (elem = selector, newContext = context, 1 === nodeType && (rdescend.test(selector) || rcombinators.test(selector))) {
                                for ((newContext = rsibling.test(selector) && testContext(context.parentNode) || context) === context && support.scope || ((nid = context.getAttribute("id")) ? nid = nid.replace(rcssescape, fcssescape) : context.setAttribute("id", nid = expando)), 
                                i = (groups = tokenize(selector)).length; i--; ) groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                                elem = groups.join(",");
                            }
                            try {
                                return push.apply(results, newContext.querySelectorAll(elem)), 
                                results;
                            } catch (qsaError) {
                                nonnativeSelectorCache(selector, !0);
                            } finally {
                                nid === expando && context.removeAttribute("id");
                            }
                        }
                    }
                    return select(selector.replace(rtrim, "$1"), context, results, seed);
                }
                function createCache() {
                    var keys = [];
                    function cache(key, value) {
                        return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], 
                        cache[key + " "] = value;
                    }
                    return cache;
                }
                function markFunction(fn) {
                    return fn[expando] = !0, fn;
                }
                function assert(fn) {
                    var el = document.createElement("fieldset");
                    try {
                        return !!fn(el);
                    } catch (e) {
                        return !1;
                    } finally {
                        el.parentNode && el.parentNode.removeChild(el);
                    }
                }
                function addHandle(attrs, handler) {
                    for (var arr = attrs.split("|"), i = arr.length; i--; ) Expr.attrHandle[arr[i]] = handler;
                }
                function siblingCheck(a, b) {
                    var cur = b && a, diff = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                    if (diff) return diff;
                    if (cur) for (;cur = cur.nextSibling; ) if (cur === b) return -1;
                    return a ? 1 : -1;
                }
                function createDisabledPseudo(disabled) {
                    return function(elem) {
                        return "form" in elem ? elem.parentNode && !1 === elem.disabled ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled : elem.disabled === disabled : "label" in elem && elem.disabled === disabled;
                    };
                }
                function createPositionalPseudo(fn) {
                    return markFunction(function(argument) {
                        return argument = +argument, markFunction(function(seed, matches) {
                            for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--; ) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]));
                        });
                    });
                }
                function testContext(context) {
                    return context && void 0 !== context.getElementsByTagName && context;
                }
                for (i in support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
                    var namespace = elem && elem.namespaceURI, elem = elem && (elem.ownerDocument || elem).documentElement;
                    return !rhtml.test(namespace || elem && elem.nodeName || "HTML");
                }, setDocument = Sizzle.setDocument = function(node) {
                    var node = node ? node.ownerDocument || node : preferredDoc;
                    return node != document && 9 === node.nodeType && node.documentElement && (docElem = (document = node).documentElement, 
                    documentIsHTML = !isXML(document), preferredDoc != document && (node = document.defaultView) && node.top !== node && (node.addEventListener ? node.addEventListener("unload", unloadHandler, !1) : node.attachEvent && node.attachEvent("onunload", unloadHandler)), 
                    support.scope = assert(function(el) {
                        return docElem.appendChild(el).appendChild(document.createElement("div")), 
                        void 0 !== el.querySelectorAll && !el.querySelectorAll(":scope fieldset div").length;
                    }), support.attributes = assert(function(el) {
                        return el.className = "i", !el.getAttribute("className");
                    }), support.getElementsByTagName = assert(function(el) {
                        return el.appendChild(document.createComment("")), !el.getElementsByTagName("*").length;
                    }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), 
                    support.getById = assert(function(el) {
                        return docElem.appendChild(el).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length;
                    }), support.getById ? (Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId;
                        };
                    }, Expr.find.ID = function(id, context) {
                        if (void 0 !== context.getElementById && documentIsHTML) return (context = context.getElementById(id)) ? [ context ] : [];
                    }) : (Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            elem = void 0 !== elem.getAttributeNode && elem.getAttributeNode("id");
                            return elem && elem.value === attrId;
                        };
                    }, Expr.find.ID = function(id, context) {
                        if (void 0 !== context.getElementById && documentIsHTML) {
                            var node, i, elems, elem = context.getElementById(id);
                            if (elem) {
                                if ((node = elem.getAttributeNode("id")) && node.value === id) return [ elem ];
                                for (elems = context.getElementsByName(id), i = 0; elem = elems[i++]; ) if ((node = elem.getAttributeNode("id")) && node.value === id) return [ elem ];
                            }
                            return [];
                        }
                    }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                        return void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0;
                    } : function(tag, context) {
                        var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                        if ("*" !== tag) return results;
                        for (;elem = results[i++]; ) 1 === elem.nodeType && tmp.push(elem);
                        return tmp;
                    }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                        if (void 0 !== context.getElementsByClassName && documentIsHTML) return context.getElementsByClassName(className);
                    }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(el) {
                        var input;
                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                        el.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), 
                        el.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), 
                        el.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), 
                        (input = document.createElement("input")).setAttribute("name", ""), 
                        el.appendChild(input), el.querySelectorAll("[name='']").length || rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")"), 
                        el.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), 
                        el.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]"), 
                        el.querySelectorAll("\\\f"), rbuggyQSA.push("[\\r\\n\\f]");
                    }), assert(function(el) {
                        el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden"), el.appendChild(input).setAttribute("name", "D"), 
                        el.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), 
                        2 !== el.querySelectorAll(":enabled").length && rbuggyQSA.push(":enabled", ":disabled"), 
                        docElem.appendChild(el).disabled = !0, 2 !== el.querySelectorAll(":disabled").length && rbuggyQSA.push(":enabled", ":disabled"), 
                        el.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:");
                    })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
                        support.disconnectedMatch = matches.call(el, "*"), matches.call(el, "[s!='']:x"), 
                        rbuggyMatches.push("!=", pseudos);
                    }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), 
                    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), 
                    node = rnative.test(docElem.compareDocumentPosition), contains = node || rnative.test(docElem.contains) ? function(a, b) {
                        var adown = 9 === a.nodeType ? a.documentElement : a, b = b && b.parentNode;
                        return a === b || !(!b || 1 !== b.nodeType || !(adown.contains ? adown.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)));
                    } : function(a, b) {
                        if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                        return !1;
                    }, sortOrder = node ? function(a, b) {
                        if (a === b) return hasDuplicate = !0, 0;
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return compare || (1 & (compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a) ? -1 : b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1);
                    } : function(a, b) {
                        if (a === b) return hasDuplicate = !0, 0;
                        var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                        if (!aup || !bup) return a == document ? -1 : b == document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                        if (aup === bup) return siblingCheck(a, b);
                        for (cur = a; cur = cur.parentNode; ) ap.unshift(cur);
                        for (cur = b; cur = cur.parentNode; ) bp.unshift(cur);
                        for (;ap[i] === bp[i]; ) i++;
                        return i ? siblingCheck(ap[i], bp[i]) : ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : 0;
                    }), document;
                }, Sizzle.matches = function(expr, elements) {
                    return Sizzle(expr, null, null, elements);
                }, Sizzle.matchesSelector = function(elem, expr) {
                    if (setDocument(elem), support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret;
                    } catch (e) {
                        nonnativeSelectorCache(expr, !0);
                    }
                    return 0 < Sizzle(expr, document, null, [ elem ]).length;
                }, Sizzle.contains = function(context, elem) {
                    return (context.ownerDocument || context) != document && setDocument(context), 
                    contains(context, elem);
                }, Sizzle.attr = function(elem, name) {
                    (elem.ownerDocument || elem) != document && setDocument(elem);
                    var fn = Expr.attrHandle[name.toLowerCase()], fn = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                    return void 0 !== fn ? fn : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (fn = elem.getAttributeNode(name)) && fn.specified ? fn.value : null;
                }, Sizzle.escape = function(sel) {
                    return (sel + "").replace(rcssescape, fcssescape);
                }, Sizzle.error = function(msg) {
                    throw new Error("Syntax error, unrecognized expression: " + msg);
                }, Sizzle.uniqueSort = function(results) {
                    var elem, duplicates = [], j = 0, i = 0;
                    if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), 
                    results.sort(sortOrder), hasDuplicate) {
                        for (;elem = results[i++]; ) elem === results[i] && (j = duplicates.push(i));
                        for (;j--; ) results.splice(duplicates[j], 1);
                    }
                    return sortInput = null, results;
                }, getText = Sizzle.getText = function(elem) {
                    var node, ret = "", i = 0, nodeType = elem.nodeType;
                    if (nodeType) {
                        if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                            if ("string" == typeof elem.textContent) return elem.textContent;
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem);
                        } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
                    } else for (;node = elem[i++]; ) ret += getText(node);
                    return ret;
                }, (Expr = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(match) {
                            return match[1] = match[1].replace(runescape, funescape), 
                            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), 
                            "~=" === match[2] && (match[3] = " " + match[3] + " "), 
                            match.slice(0, 4);
                        },
                        CHILD: function(match) {
                            return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), 
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), 
                            match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), 
                            match;
                        },
                        PSEUDO: function(match) {
                            var excess, unquoted = !match[6] && match[2];
                            return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), 
                            match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(nodeNameSelector) {
                            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                            return "*" === nodeNameSelector ? function() {
                                return !0;
                            } : function(elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                            };
                        },
                        CLASS: function(className) {
                            var pattern = classCache[className + " "];
                            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                                return pattern.test("string" == typeof elem.className && elem.className || void 0 !== elem.getAttribute && elem.getAttribute("class") || "");
                            });
                        },
                        ATTR: function(name, operator, check) {
                            return function(elem) {
                                elem = Sizzle.attr(elem, name);
                                return null == elem ? "!=" === operator : !operator || (elem += "", 
                                "=" === operator ? elem === check : "!=" === operator ? elem !== check : "^=" === operator ? check && 0 === elem.indexOf(check) : "*=" === operator ? check && -1 < elem.indexOf(check) : "$=" === operator ? check && elem.slice(-check.length) === check : "~=" === operator ? -1 < (" " + elem.replace(rwhitespace, " ") + " ").indexOf(check) : "|=" === operator && (elem === check || elem.slice(0, check.length + 1) === check + "-"));
                            };
                        },
                        CHILD: function(type, what, _argument, first, last) {
                            var simple = "nth" !== type.slice(0, 3), forward = "last" !== type.slice(-4), ofType = "of-type" === what;
                            return 1 === first && 0 === last ? function(elem) {
                                return !!elem.parentNode;
                            } : function(elem, _context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple != forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = !1;
                                if (parent) {
                                    if (simple) {
                                        for (;dir; ) {
                                            for (node = elem; node = node[dir]; ) if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                            start = dir = "only" === type && !start && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (start = [ forward ? parent.firstChild : parent.lastChild ], 
                                    forward && useCache) {
                                        for (diff = (nodeIndex = (cache = (uniqueCache = (outerCache = (node = parent)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]) && cache[2], 
                                        node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop(); ) if (1 === node.nodeType && ++diff && node === elem) {
                                            uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                                            break;
                                        }
                                    } else if (!1 === (diff = useCache ? nodeIndex = (cache = (uniqueCache = (outerCache = (node = elem)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1] : diff)) for (;(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && ((uniqueCache = (outerCache = node[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] = [ dirruns, diff ]), 
                                    node !== elem)); );
                                    return (diff -= last) === first || diff % first == 0 && 0 <= diff / first;
                                }
                            };
                        },
                        PSEUDO: function(pseudo, argument) {
                            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                            return fn[expando] ? fn(argument) : 1 < fn.length ? (args = [ pseudo, pseudo, "", argument ], 
                            Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                for (var idx, matched = fn(seed, argument), i = matched.length; i--; ) seed[idx = indexOf(seed, matched[i])] = !(matches[idx] = matched[i]);
                            }) : function(elem) {
                                return fn(elem, 0, args);
                            }) : fn;
                        }
                    },
                    pseudos: {
                        not: markFunction(function(selector) {
                            var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando] ? markFunction(function(seed, matches, _context, xml) {
                                for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--; ) (elem = unmatched[i]) && (seed[i] = !(matches[i] = elem));
                            }) : function(elem, _context, xml) {
                                return input[0] = elem, matcher(input, null, xml, results), 
                                input[0] = null, !results.pop();
                            };
                        }),
                        has: markFunction(function(selector) {
                            return function(elem) {
                                return 0 < Sizzle(selector, elem).length;
                            };
                        }),
                        contains: markFunction(function(text) {
                            return text = text.replace(runescape, funescape), function(elem) {
                                return -1 < (elem.textContent || getText(elem)).indexOf(text);
                            };
                        }),
                        lang: markFunction(function(lang) {
                            return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), 
                            lang = lang.replace(runescape, funescape).toLowerCase(), 
                            function(elem) {
                                var elemLang;
                                do {
                                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-");
                                } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                                return !1;
                            };
                        }),
                        target: function(elem) {
                            var hash = window.location && window.location.hash;
                            return hash && hash.slice(1) === elem.id;
                        },
                        root: function(elem) {
                            return elem === docElem;
                        },
                        focus: function(elem) {
                            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                        },
                        enabled: createDisabledPseudo(!1),
                        disabled: createDisabledPseudo(!0),
                        checked: function(elem) {
                            var nodeName = elem.nodeName.toLowerCase();
                            return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected;
                        },
                        selected: function(elem) {
                            return elem.parentNode && elem.parentNode.selectedIndex, 
                            !0 === elem.selected;
                        },
                        empty: function(elem) {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(elem) {
                            return !Expr.pseudos.empty(elem);
                        },
                        header: function(elem) {
                            return rheader.test(elem.nodeName);
                        },
                        input: function(elem) {
                            return rinputs.test(elem.nodeName);
                        },
                        button: function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return "input" === name && "button" === elem.type || "button" === name;
                        },
                        text: function(elem) {
                            return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (elem = elem.getAttribute("type")) || "text" === elem.toLowerCase());
                        },
                        first: createPositionalPseudo(function() {
                            return [ 0 ];
                        }),
                        last: createPositionalPseudo(function(_matchIndexes, length) {
                            return [ length - 1 ];
                        }),
                        eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                            return [ argument < 0 ? argument + length : argument ];
                        }),
                        even: createPositionalPseudo(function(matchIndexes, length) {
                            for (var i = 0; i < length; i += 2) matchIndexes.push(i);
                            return matchIndexes;
                        }),
                        odd: createPositionalPseudo(function(matchIndexes, length) {
                            for (var i = 1; i < length; i += 2) matchIndexes.push(i);
                            return matchIndexes;
                        }),
                        lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            for (var i = argument < 0 ? argument + length : length < argument ? length : argument; 0 <= --i; ) matchIndexes.push(i);
                            return matchIndexes;
                        }),
                        gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            for (var i = argument < 0 ? argument + length : argument; ++i < length; ) matchIndexes.push(i);
                            return matchIndexes;
                        })
                    }
                }).pseudos.nth = Expr.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) Expr.pseudos[i] = function(type) {
                    return function(elem) {
                        return "input" === elem.nodeName.toLowerCase() && elem.type === type;
                    };
                }(i);
                for (i in {
                    submit: !0,
                    reset: !0
                }) Expr.pseudos[i] = function(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return ("input" === name || "button" === name) && elem.type === type;
                    };
                }(i);
                function setFilters() {}
                function toSelector(tokens) {
                    for (var i = 0, len = tokens.length, selector = ""; i < len; i++) selector += tokens[i].value;
                    return selector;
                }
                function addCombinator(matcher, combinator, base) {
                    var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && "parentNode" === key, doneName = done++;
                    return combinator.first ? function(elem, context, xml) {
                        for (;elem = elem[dir]; ) if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
                        return !1;
                    } : function(elem, context, xml) {
                        var oldCache, outerCache, newCache = [ dirruns, doneName ];
                        if (xml) {
                            for (;elem = elem[dir]; ) if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0;
                        } else for (;elem = elem[dir]; ) if (1 === elem.nodeType || checkNonElements) if (outerCache = (outerCache = elem[expando] || (elem[expando] = {}))[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), 
                        skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem; else {
                            if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
                            if ((outerCache[key] = newCache)[2] = matcher(elem, context, xml)) return !0;
                        }
                        return !1;
                    };
                }
                function elementMatcher(matchers) {
                    return 1 < matchers.length ? function(elem, context, xml) {
                        for (var i = matchers.length; i--; ) if (!matchers[i](elem, context, xml)) return !1;
                        return !0;
                    } : matchers[0];
                }
                function condense(unmatched, map, filter, context, xml) {
                    for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; i < len; i++) !(elem = unmatched[i]) || filter && !filter(elem, context, xml) || (newUnmatched.push(elem), 
                    mapped && map.push(i));
                    return newUnmatched;
                }
                function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                    return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), 
                    postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), 
                    markFunction(function(seed, results, context, xml) {
                        var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || function(selector, contexts, results) {
                            for (var i = 0, len = contexts.length; i < len; i++) Sizzle(selector, contexts[i], results);
                            return results;
                        }(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml), matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                        if (matcher && matcher(matcherIn, matcherOut, context, xml), 
                        postFilter) for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), 
                        i = temp.length; i--; ) (elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                        if (seed) {
                            if (postFinder || preFilter) {
                                if (postFinder) {
                                    for (temp = [], i = matcherOut.length; i--; ) (elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                                    postFinder(null, matcherOut = [], temp, xml);
                                }
                                for (i = matcherOut.length; i--; ) (elem = matcherOut[i]) && -1 < (temp = postFinder ? indexOf(seed, elem) : preMap[i]) && (seed[temp] = !(results[temp] = elem));
                            }
                        } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), 
                        postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut);
                    });
                }
                function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                    function superMatcher(seed, context, xml, results, outermost) {
                        var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1, len = elems.length;
                        for (outermost && (outermostContext = context == document || context || outermost); i !== len && null != (elem = elems[i]); i++) {
                            if (byElement && elem) {
                                for (j = 0, context || elem.ownerDocument == document || (setDocument(elem), 
                                xml = !documentIsHTML); matcher = elementMatchers[j++]; ) if (matcher(elem, context || document, xml)) {
                                    results.push(elem);
                                    break;
                                }
                                outermost && (dirruns = dirrunsUnique);
                            }
                            bySet && ((elem = !matcher && elem) && matchedCount--, 
                            seed && unmatched.push(elem));
                        }
                        if (matchedCount += i, bySet && i !== matchedCount) {
                            for (j = 0; matcher = setMatchers[j++]; ) matcher(unmatched, setMatched, context, xml);
                            if (seed) {
                                if (0 < matchedCount) for (;i--; ) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                                setMatched = condense(setMatched);
                            }
                            push.apply(results, setMatched), outermost && !seed && 0 < setMatched.length && 1 < matchedCount + setMatchers.length && Sizzle.uniqueSort(results);
                        }
                        return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), 
                        unmatched;
                    }
                    var bySet = 0 < setMatchers.length, byElement = 0 < elementMatchers.length;
                    return bySet ? markFunction(superMatcher) : superMatcher;
                }
                return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters(), 
                tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                    var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                    if (cached) return parseOnly ? 0 : cached.slice(0);
                    for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar; ) {
                        for (type in matched && !(match = rcomma.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), 
                        groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), 
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        }), soFar = soFar.slice(matched.length)), Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), 
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        }), soFar = soFar.slice(matched.length));
                        if (!matched) break;
                    }
                    return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
                }, compile = Sizzle.compile = function(selector, match) {
                    var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                    if (!cached) {
                        for (i = (match = match || tokenize(selector)).length; i--; ) ((cached = function matcherFromTokens(tokens) {
                            for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                                return elem === checkContext;
                            }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                                return -1 < indexOf(checkContext, elem);
                            }, implicitRelative, !0), matchers = [ function(elem, context, xml) {
                                return elem = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext : matchAnyContext)(elem, context, xml), 
                                checkContext = null, elem;
                            } ]; i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                                if ((matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches))[expando]) {
                                    for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++);
                                    return setMatcher(1 < i && elementMatcher(matchers), 1 < i && toSelector(tokens.slice(0, i - 1).concat({
                                        value: " " === tokens[i - 2].type ? "*" : ""
                                    })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                                }
                                matchers.push(matcher);
                            }
                            return elementMatcher(matchers);
                        }(match[i]))[expando] ? setMatchers : elementMatchers).push(cached);
                        (cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers))).selector = selector;
                    }
                    return cached;
                }, select = Sizzle.select = function(selector, context, results, seed) {
                    var i, tokens, token, type, find, compiled = "function" == typeof selector && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                    if (results = results || [], 1 === match.length) {
                        if (2 < (tokens = match[0] = match[0].slice(0)).length && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                            if (!(context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0])) return results;
                            compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length);
                        }
                        for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], 
                        !Expr.relative[type = token.type]); ) if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                            if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens)) break;
                            return push.apply(results, seed), results;
                        }
                    }
                    return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context), 
                    results;
                }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, 
                support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function(el) {
                    return 1 & el.compareDocumentPosition(document.createElement("fieldset"));
                }), assert(function(el) {
                    return el.innerHTML = "<a href='#'></a>", "#" === el.firstChild.getAttribute("href");
                }) || addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2);
                }), support.attributes && assert(function(el) {
                    return el.innerHTML = "<input/>", el.firstChild.setAttribute("value", ""), 
                    "" === el.firstChild.getAttribute("value");
                }) || addHandle("value", function(elem, _name, isXML) {
                    if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue;
                }), assert(function(el) {
                    return null == el.getAttribute("disabled");
                }) || addHandle(booleans, function(elem, name, isXML) {
                    if (!isXML) return !0 === elem[name] ? name.toLowerCase() : (isXML = elem.getAttributeNode(name)) && isXML.specified ? isXML.value : null;
                }), Sizzle;
            }(window), rneedsContext = (jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, 
            jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort, 
            jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains, 
            jQuery.escapeSelector = Sizzle.escape, jQuery.expr.match.needsContext);
            function nodeName(elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
            }
            var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function winnow(elements, qualifier, not) {
                return isFunction(qualifier) ? jQuery.grep(elements, function(elem, i) {
                    return !!qualifier.call(elem, i, elem) !== not;
                }) : qualifier.nodeType ? jQuery.grep(elements, function(elem) {
                    return elem === qualifier !== not;
                }) : "string" != typeof qualifier ? jQuery.grep(elements, function(elem) {
                    return -1 < indexOf.call(qualifier, elem) !== not;
                }) : jQuery.filter(qualifier, elements, not);
            }
            jQuery.filter = function(expr, elems, not) {
                var elem = elems[0];
                return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                    return 1 === elem.nodeType;
                }));
            }, jQuery.fn.extend({
                find: function(selector) {
                    var i, ret, len = this.length, self = this;
                    if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
                        for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return !0;
                    }));
                    for (ret = this.pushStack([]), i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                    return 1 < len ? jQuery.uniqueSort(ret) : ret;
                },
                filter: function(selector) {
                    return this.pushStack(winnow(this, selector || [], !1));
                },
                not: function(selector) {
                    return this.pushStack(winnow(this, selector || [], !0));
                },
                is: function(selector) {
                    return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length;
                }
            });
            var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, rparentsprev = ((jQuery.fn.init = function(selector, context, root) {
                if (!selector) return this;
                if (root = root || rootjQuery, "string" != typeof selector) return selector.nodeType ? (this[0] = selector, 
                this.length = 1, this) : isFunction(selector) ? void 0 !== root.ready ? root.ready(selector) : selector(jQuery) : jQuery.makeArray(selector, this);
                if (!(match = "<" === selector[0] && ">" === selector[selector.length - 1] && 3 <= selector.length ? [ null, selector, null ] : rquickExpr.exec(selector)) || !match[1] && context) return (!context || context.jquery ? context || root : this.constructor(context)).find(selector);
                if (match[1]) {
                    if (context = context instanceof jQuery ? context[0] : context, 
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), 
                    rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (var match in context) isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                    return this;
                }
                return (root = document.getElementById(match[2])) && (this[0] = root, 
                this.length = 1), this;
            }).prototype = jQuery.fn, rootjQuery = jQuery(document), /^(?:parents|prev(?:Until|All))/), guaranteedUnique = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function sibling(cur, dir) {
                for (;(cur = cur[dir]) && 1 !== cur.nodeType; );
                return cur;
            }
            jQuery.fn.extend({
                has: function(target) {
                    var targets = jQuery(target, this), l = targets.length;
                    return this.filter(function() {
                        for (var i = 0; i < l; i++) if (jQuery.contains(this, targets[i])) return !0;
                    });
                },
                closest: function(selectors, context) {
                    var cur, i = 0, l = this.length, matched = [], targets = "string" != typeof selectors && jQuery(selectors);
                    if (!rneedsContext.test(selectors)) for (;i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (targets ? -1 < targets.index(cur) : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                        matched.push(cur);
                        break;
                    }
                    return this.pushStack(1 < matched.length ? jQuery.uniqueSort(matched) : matched);
                },
                index: function(elem) {
                    return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(selector, context) {
                    return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                },
                addBack: function(selector) {
                    return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
                }
            }), jQuery.each({
                parent: function(elem) {
                    elem = elem.parentNode;
                    return elem && 11 !== elem.nodeType ? elem : null;
                },
                parents: function(elem) {
                    return dir(elem, "parentNode");
                },
                parentsUntil: function(elem, _i, until) {
                    return dir(elem, "parentNode", until);
                },
                next: function(elem) {
                    return sibling(elem, "nextSibling");
                },
                prev: function(elem) {
                    return sibling(elem, "previousSibling");
                },
                nextAll: function(elem) {
                    return dir(elem, "nextSibling");
                },
                prevAll: function(elem) {
                    return dir(elem, "previousSibling");
                },
                nextUntil: function(elem, _i, until) {
                    return dir(elem, "nextSibling", until);
                },
                prevUntil: function(elem, _i, until) {
                    return dir(elem, "previousSibling", until);
                },
                siblings: function(elem) {
                    return siblings((elem.parentNode || {}).firstChild, elem);
                },
                children: function(elem) {
                    return siblings(elem.firstChild);
                },
                contents: function(elem) {
                    return null != elem.contentDocument && getProto(elem.contentDocument) ? elem.contentDocument : (nodeName(elem, "template") && (elem = elem.content || elem), 
                    jQuery.merge([], elem.childNodes));
                }
            }, function(name, fn) {
                jQuery.fn[name] = function(until, selector) {
                    var matched = jQuery.map(this, fn, until);
                    return (selector = "Until" !== name.slice(-5) ? until : selector) && "string" == typeof selector && (matched = jQuery.filter(selector, matched)), 
                    1 < this.length && (guaranteedUnique[name] || jQuery.uniqueSort(matched), 
                    rparentsprev.test(name) && matched.reverse()), this.pushStack(matched);
                };
            });
            var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
            function Identity(v) {
                return v;
            }
            function Thrower(ex) {
                throw ex;
            }
            function adoptValue(value, resolve, reject, noValue) {
                var method;
                try {
                    value && isFunction(method = value.promise) ? method.call(value).done(resolve).fail(reject) : value && isFunction(method = value.then) ? method.call(value, resolve, reject) : resolve.apply(void 0, [ value ].slice(noValue));
                } catch (value) {
                    reject.apply(void 0, [ value ]);
                }
            }
            jQuery.Callbacks = function(options) {
                options = "string" == typeof options ? function(options) {
                    var object = {};
                    return jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
                        object[flag] = !0;
                    }), object;
                }(options) : jQuery.extend({}, options);
                function fire() {
                    for (locked = locked || options.once, fired = firing = !0; queue.length; firingIndex = -1) for (memory = queue.shift(); ++firingIndex < list.length; ) !1 === list[firingIndex].apply(memory[0], memory[1]) && options.stopOnFalse && (firingIndex = list.length, 
                    memory = !1);
                    options.memory || (memory = !1), firing = !1, locked && (list = memory ? [] : "");
                }
                var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, self = {
                    add: function() {
                        return list && (memory && !firing && (firingIndex = list.length - 1, 
                        queue.push(memory)), function add(args) {
                            jQuery.each(args, function(_, arg) {
                                isFunction(arg) ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== toType(arg) && add(arg);
                            });
                        }(arguments), memory && !firing && fire()), this;
                    },
                    remove: function() {
                        return jQuery.each(arguments, function(_, arg) {
                            for (var index; -1 < (index = jQuery.inArray(arg, list, index)); ) list.splice(index, 1), 
                            index <= firingIndex && firingIndex--;
                        }), this;
                    },
                    has: function(fn) {
                        return fn ? -1 < jQuery.inArray(fn, list) : 0 < list.length;
                    },
                    empty: function() {
                        return list = list && [], this;
                    },
                    disable: function() {
                        return locked = queue = [], list = memory = "", this;
                    },
                    disabled: function() {
                        return !list;
                    },
                    lock: function() {
                        return locked = queue = [], memory || firing || (list = memory = ""), 
                        this;
                    },
                    locked: function() {
                        return !!locked;
                    },
                    fireWith: function(context, args) {
                        return locked || (args = [ context, (args = args || []).slice ? args.slice() : args ], 
                        queue.push(args), firing || fire()), this;
                    },
                    fire: function() {
                        return self.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!fired;
                    }
                };
                return self;
            }, jQuery.extend({
                Deferred: function(func) {
                    var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
                        state: function() {
                            return state;
                        },
                        always: function() {
                            return deferred.done(arguments).fail(arguments), this;
                        },
                        catch: function(fn) {
                            return promise.then(null, fn);
                        },
                        pipe: function() {
                            var fns = arguments;
                            return jQuery.Deferred(function(newDefer) {
                                jQuery.each(tuples, function(_i, tuple) {
                                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                    deferred[tuple[1]](function() {
                                        var returned = fn && fn.apply(this, arguments);
                                        returned && isFunction(returned.promise) ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject) : newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                                    });
                                }), fns = null;
                            }).promise();
                        },
                        then: function(onFulfilled, onRejected, onProgress) {
                            var maxDepth = 0;
                            function resolve(depth, deferred, handler, special) {
                                return function() {
                                    function mightThrow() {
                                        var returned, then;
                                        if (!(depth < maxDepth)) {
                                            if ((returned = handler.apply(that, args)) === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                            then = returned && ("object" == typeof returned || "function" == typeof returned) && returned.then, 
                                            isFunction(then) ? special ? then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)) : (maxDepth++, 
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith))) : (handler !== Identity && (that = void 0, 
                                            args = [ returned ]), (special || deferred.resolveWith)(that, args));
                                        }
                                    }
                                    var that = this, args = arguments, process = special ? mightThrow : function() {
                                        try {
                                            mightThrow();
                                        } catch (e) {
                                            jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(e, process.stackTrace), 
                                            maxDepth <= depth + 1 && (handler !== Thrower && (that = void 0, 
                                            args = [ e ]), deferred.rejectWith(that, args));
                                        }
                                    };
                                    depth ? process() : (jQuery.Deferred.getStackHook && (process.stackTrace = jQuery.Deferred.getStackHook()), 
                                    window.setTimeout(process));
                                };
                            }
                            return jQuery.Deferred(function(newDefer) {
                                tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)), 
                                tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)), 
                                tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                            }).promise();
                        },
                        promise: function(obj) {
                            return null != obj ? jQuery.extend(obj, promise) : promise;
                        }
                    }, deferred = {};
                    return jQuery.each(tuples, function(i, tuple) {
                        var list = tuple[2], stateString = tuple[5];
                        promise[tuple[1]] = list.add, stateString && list.add(function() {
                            state = stateString;
                        }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock), 
                        list.add(tuple[3].fire), deferred[tuple[0]] = function() {
                            return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), 
                            this;
                        }, deferred[tuple[0] + "With"] = list.fireWith;
                    }), promise.promise(deferred), func && func.call(deferred, deferred), 
                    deferred;
                },
                when: function(singleValue) {
                    function updateFunc(i) {
                        return function(value) {
                            resolveContexts[i] = this, resolveValues[i] = 1 < arguments.length ? slice.call(arguments) : value, 
                            --remaining || primary.resolveWith(resolveContexts, resolveValues);
                        };
                    }
                    var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred();
                    if (remaining <= 1 && (adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining), 
                    "pending" === primary.state() || isFunction(resolveValues[i] && resolveValues[i].then))) return primary.then();
                    for (;i--; ) adoptValue(resolveValues[i], updateFunc(i), primary.reject);
                    return primary.promise();
                }
            });
            var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/, readyList = (jQuery.Deferred.exceptionHook = function(error, stack) {
                window.console && window.console.warn && error && rerrorNames.test(error.name) && window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
            }, jQuery.readyException = function(error) {
                window.setTimeout(function() {
                    throw error;
                });
            }, jQuery.Deferred());
            function completed() {
                document.removeEventListener("DOMContentLoaded", completed), window.removeEventListener("load", completed), 
                jQuery.ready();
            }
            jQuery.fn.ready = function(fn) {
                return readyList.then(fn).catch(function(error) {
                    jQuery.readyException(error);
                }), this;
            }, jQuery.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(wait) {
                    (!0 === wait ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0) !== wait && 0 < --jQuery.readyWait || readyList.resolveWith(document, [ jQuery ]);
                }
            }), jQuery.ready.then = readyList.then, "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed), 
            window.addEventListener("load", completed));
            function access(elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0, len = elems.length, bulk = null == key;
                if ("object" === toType(key)) for (i in chainable = !0, key) access(elems, fn, i, key[i], !0, emptyGet, raw); else if (void 0 !== value && (chainable = !0, 
                isFunction(value) || (raw = !0), fn = bulk ? raw ? (fn.call(elems, value), 
                null) : (bulk = fn, function(elem, _key, value) {
                    return bulk.call(jQuery(elem), value);
                }) : fn)) for (;i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
            }
            var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
            function fcamelCase(_all, letter) {
                return letter.toUpperCase();
            }
            function camelCase(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
            }
            function acceptData(owner) {
                return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType;
            }
            function Data() {
                this.expando = jQuery.expando + Data.uid++;
            }
            Data.uid = 1, Data.prototype = {
                cache: function(owner) {
                    var value = owner[this.expando];
                    return value || (value = {}, acceptData(owner) && (owner.nodeType ? owner[this.expando] = value : Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: !0
                    }))), value;
                },
                set: function(owner, data, value) {
                    var prop, cache = this.cache(owner);
                    if ("string" == typeof data) cache[camelCase(data)] = value; else for (prop in data) cache[camelCase(prop)] = data[prop];
                    return cache;
                },
                get: function(owner, key) {
                    return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
                },
                access: function(owner, key, value) {
                    return void 0 === key || key && "string" == typeof key && void 0 === value ? this.get(owner, key) : (this.set(owner, key, value), 
                    void 0 !== value ? value : key);
                },
                remove: function(owner, key) {
                    var i, cache = owner[this.expando];
                    if (void 0 !== cache) {
                        if (void 0 !== key) {
                            i = (key = Array.isArray(key) ? key.map(camelCase) : (key = camelCase(key)) in cache ? [ key ] : key.match(rnothtmlwhite) || []).length;
                            for (;i--; ) delete cache[key[i]];
                        }
                        void 0 !== key && !jQuery.isEmptyObject(cache) || (owner.nodeType ? owner[this.expando] = void 0 : delete owner[this.expando]);
                    }
                },
                hasData: function(owner) {
                    owner = owner[this.expando];
                    return void 0 !== owner && !jQuery.isEmptyObject(owner);
                }
            };
            var dataPriv = new Data(), dataUser = new Data(), rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
            function dataAttr(elem, key, data) {
                var name;
                if (void 0 === data && 1 === elem.nodeType) if (name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase(), 
                "string" == typeof (data = elem.getAttribute(name))) {
                    try {
                        data = function(data) {
                            return "true" === data || "false" !== data && ("null" === data ? null : data === +data + "" ? +data : rbrace.test(data) ? JSON.parse(data) : data);
                        }(data);
                    } catch (e) {}
                    dataUser.set(elem, key, data);
                } else data = void 0;
                return data;
            }
            jQuery.extend({
                hasData: function(elem) {
                    return dataUser.hasData(elem) || dataPriv.hasData(elem);
                },
                data: function(elem, name, data) {
                    return dataUser.access(elem, name, data);
                },
                removeData: function(elem, name) {
                    dataUser.remove(elem, name);
                },
                _data: function(elem, name, data) {
                    return dataPriv.access(elem, name, data);
                },
                _removeData: function(elem, name) {
                    dataPriv.remove(elem, name);
                }
            }), jQuery.fn.extend({
                data: function(key, value) {
                    var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                    if (void 0 !== key) return "object" == typeof key ? this.each(function() {
                        dataUser.set(this, key);
                    }) : access(this, function(value) {
                        var data;
                        if (elem && void 0 === value) return void 0 !== (data = dataUser.get(elem, key)) || void 0 !== (data = dataAttr(elem, key)) ? data : void 0;
                        this.each(function() {
                            dataUser.set(this, key, value);
                        });
                    }, null, value, 1 < arguments.length, null, !0);
                    if (this.length && (data = dataUser.get(elem), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
                        for (i = attrs.length; i--; ) attrs[i] && 0 === (name = attrs[i].name).indexOf("data-") && (name = camelCase(name.slice(5)), 
                        dataAttr(elem, name, data[name]));
                        dataPriv.set(elem, "hasDataAttrs", !0);
                    }
                    return data;
                },
                removeData: function(key) {
                    return this.each(function() {
                        dataUser.remove(this, key);
                    });
                }
            }), jQuery.extend({
                queue: function(elem, type, data) {
                    var queue;
                    if (elem) return queue = dataPriv.get(elem, type = (type || "fx") + "queue"), 
                    data && (!queue || Array.isArray(data) ? queue = dataPriv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)), 
                    queue || [];
                },
                dequeue: function(elem, type) {
                    type = type || "fx";
                    var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type);
                    "inprogress" === fn && (fn = queue.shift(), startLength--), 
                    fn && ("fx" === type && queue.unshift("inprogress"), delete hooks.stop, 
                    fn.call(elem, function() {
                        jQuery.dequeue(elem, type);
                    }, hooks)), !startLength && hooks && hooks.empty.fire();
                },
                _queueHooks: function(elem, type) {
                    var key = type + "queueHooks";
                    return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                        empty: jQuery.Callbacks("once memory").add(function() {
                            dataPriv.remove(elem, [ type + "queue", key ]);
                        })
                    });
                }
            }), jQuery.fn.extend({
                queue: function(type, data) {
                    var setter = 2;
                    return "string" != typeof type && (data = type, type = "fx", 
                    setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
                        var queue = jQuery.queue(this, type, data);
                        jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type);
                    });
                },
                dequeue: function(type) {
                    return this.each(function() {
                        jQuery.dequeue(this, type);
                    });
                },
                clearQueue: function(type) {
                    return this.queue(type || "fx", []);
                },
                promise: function(type, obj) {
                    function resolve() {
                        --count || defer.resolveWith(elements, [ elements ]);
                    }
                    var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length;
                    for ("string" != typeof type && (obj = type, type = void 0), 
                    type = type || "fx"; i--; ) (tmp = dataPriv.get(elements[i], type + "queueHooks")) && tmp.empty && (count++, 
                    tmp.empty.add(resolve));
                    return resolve(), defer.promise(obj);
                }
            });
            function isHiddenWithinTree(elem, el) {
                return "none" === (elem = el || elem).style.display || "" === elem.style.display && isAttached(elem) && "none" === jQuery.css(elem, "display");
            }
            var Sizzle = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, rcssNum = new RegExp("^(?:([+-])=|)(" + Sizzle + ")([a-z%]*)$", "i"), cssExpand = [ "Top", "Right", "Bottom", "Left" ], documentElement = document.documentElement, isAttached = function(elem) {
                return jQuery.contains(elem.ownerDocument, elem);
            }, composed = {
                composed: !0
            };
            documentElement.getRootNode && (isAttached = function(elem) {
                return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
            });
            function adjustCSS(elem, prop, valueParts, tween) {
                var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
                    return tween.cur();
                } : function() {
                    return jQuery.css(elem, prop, "");
                }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || "px" !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop));
                if (initialInUnit && initialInUnit[3] !== unit) {
                    for (unit = unit || initialInUnit[3], initialInUnit = +(initial /= 2) || 1; maxIterations--; ) jQuery.style(elem, prop, initialInUnit + unit), 
                    (1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0 && (maxIterations = 0), 
                    initialInUnit /= scale;
                    jQuery.style(elem, prop, (initialInUnit *= 2) + unit), valueParts = valueParts || [];
                }
                return valueParts && (initialInUnit = +initialInUnit || +initial || 0, 
                adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], 
                tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), 
                adjusted;
            }
            var defaultDisplayMap = {};
            function showHide(elements, show) {
                for (var display, elem, values = [], index = 0, length = elements.length; index < length; index++) (elem = elements[index]).style && (display = elem.style.display, 
                show ? ("none" === display && (values[index] = dataPriv.get(elem, "display") || null, 
                values[index] || (elem.style.display = "")), "" === elem.style.display && isHiddenWithinTree(elem) && (values[index] = function(elem) {
                    var doc = elem.ownerDocument, elem = elem.nodeName, display = defaultDisplayMap[elem];
                    return display || (doc = doc.body.appendChild(doc.createElement(elem)), 
                    display = jQuery.css(doc, "display"), doc.parentNode.removeChild(doc), 
                    defaultDisplayMap[elem] = display = "none" === display ? "block" : display);
                }(elem))) : "none" !== display && (values[index] = "none", dataPriv.set(elem, "display", display)));
                for (index = 0; index < length; index++) null != values[index] && (elements[index].style.display = values[index]);
                return elements;
            }
            jQuery.fn.extend({
                show: function() {
                    return showHide(this, !0);
                },
                hide: function() {
                    return showHide(this);
                },
                toggle: function(state) {
                    return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
                        isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide();
                    });
                }
            });
            var div, rcheckableType = /^(?:checkbox|radio)$/i, rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, rscriptType = /^$|^module$|\/(?:java|ecma)script/i, wrapMap = (div = document.createDocumentFragment().appendChild(document.createElement("div")), 
            (input = document.createElement("input")).setAttribute("type", "radio"), 
            input.setAttribute("checked", "checked"), input.setAttribute("name", "t"), 
            div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, 
            div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue, 
            div.innerHTML = "<option></option>", support.option = !!div.lastChild, 
            {
                thead: [ 1, "<table>", "</table>" ],
                col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: [ 0, "", "" ]
            });
            function getAll(context, tag) {
                var ret = void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : void 0 !== context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
                return void 0 === tag || tag && nodeName(context, tag) ? jQuery.merge([ context ], ret) : ret;
            }
            function setGlobalEval(elems, refElements) {
                for (var i = 0, l = elems.length; i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
            }
            wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, 
            wrapMap.th = wrapMap.td, support.option || (wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
            var rhtml = /<|&#?\w+;/;
            function buildFragment(elems, context, scripts, selection, ignored) {
                for (var elem, tmp, tag, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; i < l; i++) if ((elem = elems[i]) || 0 === elem) if ("object" === toType(elem)) jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (rhtml.test(elem)) {
                    for (tmp = tmp || fragment.appendChild(context.createElement("div")), 
                    tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase(), 
                    tag = wrapMap[tag] || wrapMap._default, tmp.innerHTML = tag[1] + jQuery.htmlPrefilter(elem) + tag[2], 
                    j = tag[0]; j--; ) tmp = tmp.lastChild;
                    jQuery.merge(nodes, tmp.childNodes), (tmp = fragment.firstChild).textContent = "";
                } else nodes.push(context.createTextNode(elem));
                for (fragment.textContent = "", i = 0; elem = nodes[i++]; ) if (selection && -1 < jQuery.inArray(elem, selection)) ignored && ignored.push(elem); else if (attached = isAttached(elem), 
                tmp = getAll(fragment.appendChild(elem), "script"), attached && setGlobalEval(tmp), 
                scripts) for (j = 0; elem = tmp[j++]; ) rscriptType.test(elem.type || "") && scripts.push(elem);
                return fragment;
            }
            var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
            function returnTrue() {
                return !0;
            }
            function returnFalse() {
                return !1;
            }
            function expectSync(elem, type) {
                return elem === function() {
                    try {
                        return document.activeElement;
                    } catch (err) {}
                }() == ("focus" === type);
            }
            function on(elem, types, selector, data, fn, one) {
                var origFn, type;
                if ("object" == typeof types) {
                    for (type in "string" != typeof selector && (data = data || selector, 
                    selector = void 0), types) on(elem, type, selector, data, types[type], one);
                    return elem;
                }
                if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, 
                data = void 0) : (fn = data, data = selector, selector = void 0)), 
                !1 === fn) fn = returnFalse; else if (!fn) return elem;
                return 1 === one && (origFn = fn, (fn = function(event) {
                    return jQuery().off(event), origFn.apply(this, arguments);
                }).guid = origFn.guid || (origFn.guid = jQuery.guid++)), elem.each(function() {
                    jQuery.event.add(this, types, fn, data, selector);
                });
            }
            function leverageNative(el, type, expectSync) {
                expectSync ? (dataPriv.set(el, type, !1), jQuery.event.add(el, type, {
                    namespace: !1,
                    handler: function(event) {
                        var notAsync, result, saved = dataPriv.get(this, type);
                        if (1 & event.isTrigger && this[type]) {
                            if (saved.length) (jQuery.event.special[type] || {}).delegateType && event.stopPropagation(); else if (saved = slice.call(arguments), 
                            dataPriv.set(this, type, saved), notAsync = expectSync(this, type), 
                            this[type](), saved !== (result = dataPriv.get(this, type)) || notAsync ? dataPriv.set(this, type, !1) : result = {}, 
                            saved !== result) return event.stopImmediatePropagation(), 
                            event.preventDefault(), result && result.value;
                        } else saved.length && (dataPriv.set(this, type, {
                            value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                        }), event.stopImmediatePropagation());
                    }
                })) : void 0 === dataPriv.get(el, type) && jQuery.event.add(el, type, returnTrue);
            }
            jQuery.event = {
                global: {},
                add: function(elem, types, handler, data, selector) {
                    var handleObjIn, eventHandle, events, t, special, handlers, type, tmp, origType, elemData = dataPriv.get(elem);
                    if (acceptData(elem)) for (handler.handler && (handler = (handleObjIn = handler).handler, 
                    selector = handleObjIn.selector), selector && jQuery.find.matchesSelector(documentElement, selector), 
                    handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = Object.create(null)), 
                    (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
                        return void 0 !== jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
                    }), t = (types = (types || "").match(rnothtmlwhite) || [ "" ]).length; t--; ) type = origType = (tmp = rtypenamespace.exec(types[t]) || [])[1], 
                    tmp = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, 
                    type = (selector ? special.delegateType : special.bindType) || type, 
                    special = jQuery.event.special[type] || {}, origType = jQuery.extend({
                        type: type,
                        origType: origType,
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                        namespace: tmp.join(".")
                    }, handleObjIn), (handlers = events[type]) || ((handlers = events[type] = []).delegateCount = 0, 
                    special.setup && !1 !== special.setup.call(elem, data, tmp, eventHandle) || elem.addEventListener && elem.addEventListener(type, eventHandle)), 
                    special.add && (special.add.call(elem, origType), origType.handler.guid || (origType.handler.guid = handler.guid)), 
                    selector ? handlers.splice(handlers.delegateCount++, 0, origType) : handlers.push(origType), 
                    jQuery.event.global[type] = !0);
                },
                remove: function(elem, types, handler, selector, mappedTypes) {
                    var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                    if (elemData && (events = elemData.events)) {
                        for (t = (types = (types || "").match(rnothtmlwhite) || [ "" ]).length; t--; ) if (type = origType = (tmp = rtypenamespace.exec(types[t]) || [])[1], 
                        namespaces = (tmp[2] || "").split(".").sort(), type) {
                            for (special = jQuery.event.special[type] || {}, handlers = events[type = (selector ? special.delegateType : special.bindType) || type] || [], 
                            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                            origCount = j = handlers.length; j--; ) handleObj = handlers[j], 
                            !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), 
                            handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                            origCount && !handlers.length && (special.teardown && !1 !== special.teardown.call(elem, namespaces, elemData.handle) || jQuery.removeEvent(elem, type, elemData.handle), 
                            delete events[type]);
                        } else for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                        jQuery.isEmptyObject(events) && dataPriv.remove(elem, "handle events");
                    }
                },
                dispatch: function(nativeEvent) {
                    var i, j, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), nativeEvent = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
                    for (args[0] = event, i = 1; i < arguments.length; i++) args[i] = arguments[i];
                    if (event.delegateTarget = this, !special.preDispatch || !1 !== special.preDispatch.call(this, event)) {
                        for (handlerQueue = jQuery.event.handlers.call(this, event, nativeEvent), 
                        i = 0; (matched = handlerQueue[i++]) && !event.isPropagationStopped(); ) for (event.currentTarget = matched.elem, 
                        j = 0; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped(); ) event.rnamespace && !1 !== handleObj.namespace && !event.rnamespace.test(handleObj.namespace) || (event.handleObj = handleObj, 
                        event.data = handleObj.data, void 0 !== (handleObj = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args)) && !1 === (event.result = handleObj) && (event.preventDefault(), 
                        event.stopPropagation()));
                        return special.postDispatch && special.postDispatch.call(this, event), 
                        event.result;
                    }
                },
                handlers: function(event, handlers) {
                    var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                    if (delegateCount && cur.nodeType && !("click" === event.type && 1 <= event.button)) for (;cur !== this; cur = cur.parentNode || this) if (1 === cur.nodeType && ("click" !== event.type || !0 !== cur.disabled)) {
                        for (matchedHandlers = [], matchedSelectors = {}, i = 0; i < delegateCount; i++) void 0 === matchedSelectors[sel = (handleObj = handlers[i]).selector + " "] && (matchedSelectors[sel] = handleObj.needsContext ? -1 < jQuery(sel, this).index(cur) : jQuery.find(sel, this, null, [ cur ]).length), 
                        matchedSelectors[sel] && matchedHandlers.push(handleObj);
                        matchedHandlers.length && handlerQueue.push({
                            elem: cur,
                            handlers: matchedHandlers
                        });
                    }
                    return cur = this, delegateCount < handlers.length && handlerQueue.push({
                        elem: cur,
                        handlers: handlers.slice(delegateCount)
                    }), handlerQueue;
                },
                addProp: function(name, hook) {
                    Object.defineProperty(jQuery.Event.prototype, name, {
                        enumerable: !0,
                        configurable: !0,
                        get: isFunction(hook) ? function() {
                            if (this.originalEvent) return hook(this.originalEvent);
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[name];
                        },
                        set: function(value) {
                            Object.defineProperty(this, name, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: value
                            });
                        }
                    });
                },
                fix: function(originalEvent) {
                    return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(data) {
                            data = this || data;
                            return rcheckableType.test(data.type) && data.click && nodeName(data, "input") && leverageNative(data, "click", returnTrue), 
                            !1;
                        },
                        trigger: function(data) {
                            data = this || data;
                            return rcheckableType.test(data.type) && data.click && nodeName(data, "input") && leverageNative(data, "click"), 
                            !0;
                        },
                        _default: function(event) {
                            event = event.target;
                            return rcheckableType.test(event.type) && event.click && nodeName(event, "input") && dataPriv.get(event, "click") || nodeName(event, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(event) {
                            void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result);
                        }
                    }
                }
            }, jQuery.removeEvent = function(elem, type, handle) {
                elem.removeEventListener && elem.removeEventListener(type, handle);
            }, jQuery.Event = function(src, props) {
                if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
                src && src.type ? (this.originalEvent = src, this.type = src.type, 
                this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && !1 === src.returnValue ? returnTrue : returnFalse, 
                this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target, 
                this.currentTarget = src.currentTarget, this.relatedTarget = src.relatedTarget) : this.type = src, 
                props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || Date.now(), 
                this[jQuery.expando] = !0;
            }, jQuery.Event.prototype = {
                constructor: jQuery.Event,
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), 
                    this.stopPropagation();
                }
            }, jQuery.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, jQuery.event.addProp), jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, function(type, delegateType) {
                jQuery.event.special[type] = {
                    setup: function() {
                        return leverageNative(this, type, expectSync), !1;
                    },
                    trigger: function() {
                        return leverageNative(this, type), !0;
                    },
                    _default: function() {
                        return !0;
                    },
                    delegateType: delegateType
                };
            }), jQuery.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(orig, fix) {
                jQuery.event.special[orig] = {
                    delegateType: fix,
                    bindType: fix,
                    handle: function(event) {
                        var ret, related = event.relatedTarget, handleObj = event.handleObj;
                        return related && (related === this || jQuery.contains(this, related)) || (event.type = handleObj.origType, 
                        ret = handleObj.handler.apply(this, arguments), event.type = fix), 
                        ret;
                    }
                };
            }), jQuery.fn.extend({
                on: function(types, selector, data, fn) {
                    return on(this, types, selector, data, fn);
                },
                one: function(types, selector, data, fn) {
                    return on(this, types, selector, data, fn, 1);
                },
                off: function(types, selector, fn) {
                    var handleObj, type;
                    if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, 
                    jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), 
                    this;
                    if ("object" != typeof types) return !1 !== selector && "function" != typeof selector || (fn = selector, 
                    selector = void 0), !1 === fn && (fn = returnFalse), this.each(function() {
                        jQuery.event.remove(this, types, fn, selector);
                    });
                    for (type in types) this.off(type, selector, types[type]);
                    return this;
                }
            });
            var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function manipulationTarget(elem, content) {
                return nodeName(elem, "table") && nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") && jQuery(elem).children("tbody")[0] || elem;
            }
            function disableScript(elem) {
                return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, 
                elem;
            }
            function restoreScript(elem) {
                return "true/" === (elem.type || "").slice(0, 5) ? elem.type = elem.type.slice(5) : elem.removeAttribute("type"), 
                elem;
            }
            function cloneCopyEvent(src, dest) {
                var i, l, type, events;
                if (1 === dest.nodeType) {
                    if (dataPriv.hasData(src) && (events = dataPriv.get(src).events)) for (type in dataPriv.remove(dest, "handle events"), 
                    events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
                    dataUser.hasData(src) && (src = dataUser.access(src), src = jQuery.extend({}, src), 
                    dataUser.set(dest, src));
                }
            }
            function domManip(collection, args, callback, ignored) {
                args = flat(args);
                var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
                if (valueIsFunction || 1 < l && "string" == typeof value && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
                    var self = collection.eq(index);
                    valueIsFunction && (args[0] = value.call(this, index, self.html())), 
                    domManip(self, args, callback, ignored);
                });
                if (l && (first = (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored)).firstChild, 
                1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
                    for (hasScripts = (scripts = jQuery.map(getAll(fragment, "script"), disableScript)).length; i < l; i++) node = fragment, 
                    i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), 
                    callback.call(collection[i], node, i);
                    if (hasScripts) for (doc = scripts[scripts.length - 1].ownerDocument, 
                    jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++) node = scripts[i], 
                    rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src && "module" !== (node.type || "").toLowerCase() ? jQuery._evalUrl && !node.noModule && jQuery._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                    }, doc) : DOMEval(node.textContent.replace(rcleanScript, ""), node, doc));
                }
                return collection;
            }
            function remove(elem, selector, keepData) {
                for (var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0; null != (node = nodes[i]); i++) keepData || 1 !== node.nodeType || jQuery.cleanData(getAll(node)), 
                node.parentNode && (keepData && isAttached(node) && setGlobalEval(getAll(node, "script")), 
                node.parentNode.removeChild(node));
                return elem;
            }
            jQuery.extend({
                htmlPrefilter: function(html) {
                    return html;
                },
                clone: function(elem, dataAndEvents, deepDataAndEvents) {
                    var i, l, srcElements, destElements, src, dest, nodeName, clone = elem.cloneNode(!0), inPage = isAttached(elem);
                    if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) for (destElements = getAll(clone), 
                    i = 0, l = (srcElements = getAll(elem)).length; i < l; i++) src = srcElements[i], 
                    dest = destElements[i], nodeName = void 0, "input" === (nodeName = dest.nodeName.toLowerCase()) && rcheckableType.test(src.type) ? dest.checked = src.checked : "input" !== nodeName && "textarea" !== nodeName || (dest.defaultValue = src.defaultValue);
                    if (dataAndEvents) if (deepDataAndEvents) for (srcElements = srcElements || getAll(elem), 
                    destElements = destElements || getAll(clone), i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]); else cloneCopyEvent(elem, clone);
                    return 0 < (destElements = getAll(clone, "script")).length && setGlobalEval(destElements, !inPage && getAll(elem, "script")), 
                    clone;
                },
                cleanData: function(elems) {
                    for (var data, elem, type, special = jQuery.event.special, i = 0; void 0 !== (elem = elems[i]); i++) if (acceptData(elem)) {
                        if (data = elem[dataPriv.expando]) {
                            if (data.events) for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                            elem[dataPriv.expando] = void 0;
                        }
                        elem[dataUser.expando] && (elem[dataUser.expando] = void 0);
                    }
                }
            }), jQuery.fn.extend({
                detach: function(selector) {
                    return remove(this, selector, !0);
                },
                remove: function(selector) {
                    return remove(this, selector);
                },
                text: function(value) {
                    return access(this, function(value) {
                        return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = value);
                        });
                    }, null, value, arguments.length);
                },
                append: function() {
                    return domManip(this, arguments, function(elem) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || manipulationTarget(this, elem).appendChild(elem);
                    });
                },
                prepend: function() {
                    return domManip(this, arguments, function(elem) {
                        var target;
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (target = manipulationTarget(this, elem)).insertBefore(elem, target.firstChild);
                    });
                },
                before: function() {
                    return domManip(this, arguments, function(elem) {
                        this.parentNode && this.parentNode.insertBefore(elem, this);
                    });
                },
                after: function() {
                    return domManip(this, arguments, function(elem) {
                        this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling);
                    });
                },
                empty: function() {
                    for (var elem, i = 0; null != (elem = this[i]); i++) 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), 
                    elem.textContent = "");
                    return this;
                },
                clone: function(dataAndEvents, deepDataAndEvents) {
                    return dataAndEvents = null != dataAndEvents && dataAndEvents, 
                    deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, 
                    this.map(function() {
                        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                    });
                },
                html: function(value) {
                    return access(this, function(value) {
                        var elem = this[0] || {}, i = 0, l = this.length;
                        if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                        if ("string" == typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                            value = jQuery.htmlPrefilter(value);
                            try {
                                for (;i < l; i++) 1 === (elem = this[i] || {}).nodeType && (jQuery.cleanData(getAll(elem, !1)), 
                                elem.innerHTML = value);
                                elem = 0;
                            } catch (e) {}
                        }
                        elem && this.empty().append(value);
                    }, null, value, arguments.length);
                },
                replaceWith: function() {
                    var ignored = [];
                    return domManip(this, arguments, function(elem) {
                        var parent = this.parentNode;
                        jQuery.inArray(this, ignored) < 0 && (jQuery.cleanData(getAll(this)), 
                        parent && parent.replaceChild(elem, this));
                    }, ignored);
                }
            }), jQuery.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(name, original) {
                jQuery.fn[name] = function(selector) {
                    for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; i <= last; i++) elems = i === last ? this : this.clone(!0), 
                    jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
                    return this.pushStack(ret);
                };
            });
            function getStyles(elem) {
                var view = elem.ownerDocument.defaultView;
                return (view = view && view.opener ? view : window).getComputedStyle(elem);
            }
            function swap(elem, options, callback) {
                var name, old = {};
                for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
                for (name in callback = callback.call(elem), options) elem.style[name] = old[name];
                return callback;
            }
            var rnumnonpx = new RegExp("^(" + Sizzle + ")(?!px)[a-z%]+$", "i"), rboxStyle = new RegExp(cssExpand.join("|"), "i");
            function curCSS(elem, name, computed) {
                var maxWidth, ret, style = elem.style;
                return (computed = computed || getStyles(elem)) && ("" !== (ret = computed.getPropertyValue(name) || computed[name]) || isAttached(elem) || (ret = jQuery.style(elem, name)), 
                !support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name) && (elem = style.width, 
                name = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, 
                ret = computed.width, style.width = elem, style.minWidth = name, 
                style.maxWidth = maxWidth)), void 0 !== ret ? ret + "" : ret;
            }
            function addGetHookIf(conditionFn, hookFn) {
                return {
                    get: function() {
                        if (!conditionFn()) return (this.get = hookFn).apply(this, arguments);
                        delete this.get;
                    }
                };
            }
            !function() {
                function computeStyleTests() {
                    var divStyle;
                    div && (container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                    div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                    documentElement.appendChild(container).appendChild(div), divStyle = window.getComputedStyle(div), 
                    pixelPositionVal = "1%" !== divStyle.top, reliableMarginLeftVal = 12 === roundPixelMeasures(divStyle.marginLeft), 
                    div.style.right = "60%", pixelBoxStylesVal = 36 === roundPixelMeasures(divStyle.right), 
                    boxSizingReliableVal = 36 === roundPixelMeasures(divStyle.width), 
                    div.style.position = "absolute", scrollboxSizeVal = 12 === roundPixelMeasures(div.offsetWidth / 3), 
                    documentElement.removeChild(container), div = null);
                }
                function roundPixelMeasures(measure) {
                    return Math.round(parseFloat(measure));
                }
                var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
                div.style && (div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", 
                support.clearCloneStyle = "content-box" === div.style.backgroundClip, 
                jQuery.extend(support, {
                    boxSizingReliable: function() {
                        return computeStyleTests(), boxSizingReliableVal;
                    },
                    pixelBoxStyles: function() {
                        return computeStyleTests(), pixelBoxStylesVal;
                    },
                    pixelPosition: function() {
                        return computeStyleTests(), pixelPositionVal;
                    },
                    reliableMarginLeft: function() {
                        return computeStyleTests(), reliableMarginLeftVal;
                    },
                    scrollboxSize: function() {
                        return computeStyleTests(), scrollboxSizeVal;
                    },
                    reliableTrDimensions: function() {
                        var table, tr, trChild;
                        return null == reliableTrDimensionsVal && (table = document.createElement("table"), 
                        tr = document.createElement("tr"), trChild = document.createElement("div"), 
                        table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", 
                        tr.style.cssText = "border:1px solid", tr.style.height = "1px", 
                        trChild.style.height = "9px", trChild.style.display = "block", 
                        documentElement.appendChild(table).appendChild(tr).appendChild(trChild), 
                        trChild = window.getComputedStyle(tr), reliableTrDimensionsVal = parseInt(trChild.height, 10) + parseInt(trChild.borderTopWidth, 10) + parseInt(trChild.borderBottomWidth, 10) === tr.offsetHeight, 
                        documentElement.removeChild(table)), reliableTrDimensionsVal;
                    }
                }));
            }();
            var cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style, vendorProps = {};
            function finalPropName(name) {
                var final = jQuery.cssProps[name] || vendorProps[name];
                return final || (name in emptyStyle ? name : vendorProps[name] = function(name) {
                    for (var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length; i--; ) if ((name = cssPrefixes[i] + capName) in emptyStyle) return name;
                }(name) || name);
            }
            var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, cssNormalTransform = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function setPositiveNumber(_elem, value, subtract) {
                var matches = rcssNum.exec(value);
                return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
            }
            function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                var i = "width" === dimension ? 1 : 0, extra = 0, delta = 0;
                if (box === (isBorderBox ? "border" : "content")) return 0;
                for (;i < 4; i += 2) "margin" === box && (delta += jQuery.css(elem, box + cssExpand[i], !0, styles)), 
                isBorderBox ? ("content" === box && (delta -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), 
                "margin" !== box && (delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (delta += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), 
                "padding" !== box ? delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles) : extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles));
                return !isBorderBox && 0 <= computedVal && (delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5)) || 0), 
                delta;
            }
            function getWidthOrHeight(elem, dimension, extra) {
                var styles = getStyles(elem), isBorderBox = (!support.boxSizingReliable() || extra) && "border-box" === jQuery.css(elem, "boxSizing", !1, styles), valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
                if (rnumnonpx.test(val)) {
                    if (!extra) return val;
                    val = "auto";
                }
                return (!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || "auto" === val || !parseFloat(val) && "inline" === jQuery.css(elem, "display", !1, styles)) && elem.getClientRects().length && (isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles), 
                (valueIsBorderBox = offsetProp in elem) && (val = elem[offsetProp])), 
                (val = parseFloat(val) || 0) + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
            }
            function Tween(elem, options, prop, end, easing) {
                return new Tween.prototype.init(elem, options, prop, end, easing);
            }
            jQuery.extend({
                cssHooks: {
                    opacity: {
                        get: function(elem, computed) {
                            if (computed) return "" === (computed = curCSS(elem, "opacity")) ? "1" : computed;
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(elem, name, value, extra) {
                    if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                        var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                        if (isCustomProp || (name = finalPropName(origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], 
                        void 0 === value) return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name];
                        "string" === (type = typeof value) && (ret = rcssNum.exec(value)) && ret[1] && (value = adjustCSS(elem, name, ret), 
                        type = "number"), null != value && value == value && ("number" !== type || isCustomProp || (value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")), 
                        support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), 
                        hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)) || (isCustomProp ? style.setProperty(name, value) : style[name] = value));
                    }
                },
                css: function(elem, name, extra, styles) {
                    var val, origName = camelCase(name);
                    return rcustomProp.test(name) || (name = finalPropName(origName)), 
                    "normal" === (val = void 0 === (val = (origName = jQuery.cssHooks[name] || jQuery.cssHooks[origName]) && "get" in origName ? origName.get(elem, !0, extra) : val) ? curCSS(elem, name, styles) : val) && name in cssNormalTransform && (val = cssNormalTransform[name]), 
                    "" === extra || extra ? (origName = parseFloat(val), !0 === extra || isFinite(origName) ? origName || 0 : val) : val;
                }
            }), jQuery.each([ "height", "width" ], function(_i, dimension) {
                jQuery.cssHooks[dimension] = {
                    get: function(elem, computed, extra) {
                        if (computed) return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? getWidthOrHeight(elem, dimension, extra) : swap(elem, cssShow, function() {
                            return getWidthOrHeight(elem, dimension, extra);
                        });
                    },
                    set: function(elem, value, extra) {
                        var styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && "absolute" === styles.position, isBorderBox = (scrollboxSizeBuggy || extra) && "border-box" === jQuery.css(elem, "boxSizing", !1, styles), extra = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                        return isBorderBox && scrollboxSizeBuggy && (extra -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", !1, styles) - .5)), 
                        extra && (isBorderBox = rcssNum.exec(value)) && "px" !== (isBorderBox[3] || "px") && (elem.style[dimension] = value, 
                        value = jQuery.css(elem, dimension)), setPositiveNumber(0, value, extra);
                    }
                };
            }), jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
                if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                    marginLeft: 0
                }, function() {
                    return elem.getBoundingClientRect().left;
                })) + "px";
            }), jQuery.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(prefix, suffix) {
                jQuery.cssHooks[prefix + suffix] = {
                    expand: function(value) {
                        for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [ value ]; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                        return expanded;
                    }
                }, "margin" !== prefix && (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber);
            }), jQuery.fn.extend({
                css: function(name, value) {
                    return access(this, function(elem, name, value) {
                        var styles, len, map = {}, i = 0;
                        if (Array.isArray(name)) {
                            for (styles = getStyles(elem), len = name.length; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                            return map;
                        }
                        return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                    }, name, value, 1 < arguments.length);
                }
            }), ((jQuery.Tween = Tween).prototype = {
                constructor: Tween,
                init: function(elem, options, prop, end, easing, unit) {
                    this.elem = elem, this.prop = prop, this.easing = easing || jQuery.easing._default, 
                    this.options = options, this.start = this.now = this.cur(), 
                    this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                },
                cur: function() {
                    var hooks = Tween.propHooks[this.prop];
                    return (hooks && hooks.get ? hooks : Tween.propHooks._default).get(this);
                },
                run: function(percent) {
                    var eased, hooks = Tween.propHooks[this.prop];
                    return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, 
                    this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                    (hooks && hooks.set ? hooks : Tween.propHooks._default).set(this), 
                    this;
                }
            }).init.prototype = Tween.prototype, (Tween.propHooks = {
                _default: {
                    get: function(tween) {
                        return 1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop] ? tween.elem[tween.prop] : (tween = jQuery.css(tween.elem, tween.prop, "")) && "auto" !== tween ? tween : 0;
                    },
                    set: function(tween) {
                        jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : 1 !== tween.elem.nodeType || !jQuery.cssHooks[tween.prop] && null == tween.elem.style[finalPropName(tween.prop)] ? tween.elem[tween.prop] = tween.now : jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                    }
                }
            }).scrollTop = Tween.propHooks.scrollLeft = {
                set: function(tween) {
                    tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now);
                }
            }, jQuery.easing = {
                linear: function(p) {
                    return p;
                },
                swing: function(p) {
                    return .5 - Math.cos(p * Math.PI) / 2;
                },
                _default: "swing"
            }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
            var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
            function schedule() {
                inProgress && (!1 === document.hidden && window.requestAnimationFrame ? window.requestAnimationFrame(schedule) : window.setTimeout(schedule, jQuery.fx.interval), 
                jQuery.fx.tick());
            }
            function createFxNow() {
                return window.setTimeout(function() {
                    fxNow = void 0;
                }), fxNow = Date.now();
            }
            function genFx(type, includeWidth) {
                var which, i = 0, attrs = {
                    height: type
                };
                for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth) attrs["margin" + (which = cssExpand[i])] = attrs["padding" + which] = type;
                return includeWidth && (attrs.opacity = attrs.width = type), attrs;
            }
            function createTween(value, prop, animation) {
                for (var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length; index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
            }
            function Animation(elem, properties, options) {
                var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
                    delete tick.elem;
                }), tick = function() {
                    if (stopped) return !1;
                    for (var currentTime = fxNow || createFxNow(), currentTime = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (currentTime / animation.duration || 0), index = 0, length = animation.tweens.length; index < length; index++) animation.tweens[index].run(percent);
                    return deferred.notifyWith(elem, [ animation, percent, currentTime ]), 
                    percent < 1 && length ? currentTime : (length || deferred.notifyWith(elem, [ animation, 1, 0 ]), 
                    deferred.resolveWith(elem, [ animation ]), !1);
                }, animation = deferred.promise({
                    elem: elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(!0, {
                        specialEasing: {},
                        easing: jQuery.easing._default
                    }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function(prop, end) {
                        end = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                        return animation.tweens.push(end), end;
                    },
                    stop: function(gotoEnd) {
                        var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped) return this;
                        for (stopped = !0; index < length; index++) animation.tweens[index].run(1);
                        return gotoEnd ? (deferred.notifyWith(elem, [ animation, 1, 0 ]), 
                        deferred.resolveWith(elem, [ animation, gotoEnd ])) : deferred.rejectWith(elem, [ animation, gotoEnd ]), 
                        this;
                    }
                }), props = animation.props;
                for (!function(props, specialEasing) {
                    var index, name, easing, value, hooks;
                    for (index in props) if (easing = specialEasing[name = camelCase(index)], 
                    value = props[index], Array.isArray(value) && (easing = value[1], 
                    value = props[index] = value[0]), index !== name && (props[name] = value, 
                    delete props[index]), (hooks = jQuery.cssHooks[name]) && "expand" in hooks) for (index in value = hooks.expand(value), 
                    delete props[name], value) index in props || (props[index] = value[index], 
                    specialEasing[index] = easing); else specialEasing[name] = easing;
                }(props, animation.opts.specialEasing); index < length; index++) if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) return isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)), 
                result;
                return jQuery.map(props, createTween, animation), isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), 
                animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always), 
                jQuery.fx.timer(jQuery.extend(tick, {
                    elem: elem,
                    anim: animation,
                    queue: animation.opts.queue
                })), animation;
            }
            jQuery.Animation = jQuery.extend(Animation, {
                tweeners: {
                    "*": [ function(prop, value) {
                        var tween = this.createTween(prop, value);
                        return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween), 
                        tween;
                    } ]
                },
                tweener: function(props, callback) {
                    for (var prop, index = 0, length = (props = isFunction(props) ? (callback = props, 
                    [ "*" ]) : props.match(rnothtmlwhite)).length; index < length; index++) prop = props[index], 
                    Animation.tweeners[prop] = Animation.tweeners[prop] || [], Animation.tweeners[prop].unshift(callback);
                },
                prefilters: [ function(elem, props, opts) {
                    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
                    for (prop in opts.queue || (null == (hooks = jQuery._queueHooks(elem, "fx")).unqueued && (hooks.unqueued = 0, 
                    oldfire = hooks.empty.fire, hooks.empty.fire = function() {
                        hooks.unqueued || oldfire();
                    }), hooks.unqueued++, anim.always(function() {
                        anim.always(function() {
                            hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire();
                        });
                    })), props) if (value = props[prop], rfxtypes.test(value)) {
                        if (delete props[prop], toggle = toggle || "toggle" === value, 
                        value === (hidden ? "hide" : "show")) {
                            if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
                            hidden = !0;
                        }
                        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                    }
                    if ((propTween = !jQuery.isEmptyObject(props)) || !jQuery.isEmptyObject(orig)) for (prop in isBox && 1 === elem.nodeType && (opts.overflow = [ style.overflow, style.overflowX, style.overflowY ], 
                    null == (restoreDisplay = dataShow && dataShow.display) && (restoreDisplay = dataPriv.get(elem, "display")), 
                    "none" === (isBox = jQuery.css(elem, "display")) && (restoreDisplay ? isBox = restoreDisplay : (showHide([ elem ], !0), 
                    restoreDisplay = elem.style.display || restoreDisplay, isBox = jQuery.css(elem, "display"), 
                    showHide([ elem ]))), ("inline" === isBox || "inline-block" === isBox && null != restoreDisplay) && "none" === jQuery.css(elem, "float") && (propTween || (anim.done(function() {
                        style.display = restoreDisplay;
                    }), null == restoreDisplay && (isBox = style.display, restoreDisplay = "none" === isBox ? "" : isBox)), 
                    style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", 
                    anim.always(function() {
                        style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], 
                        style.overflowY = opts.overflow[2];
                    })), propTween = !1, orig) propTween || (dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = dataPriv.access(elem, "fxshow", {
                        display: restoreDisplay
                    }), toggle && (dataShow.hidden = !hidden), hidden && showHide([ elem ], !0), 
                    anim.done(function() {
                        for (prop in hidden || showHide([ elem ]), dataPriv.remove(elem, "fxshow"), 
                        orig) jQuery.style(elem, prop, orig[prop]);
                    })), propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim), 
                    prop in dataShow || (dataShow[prop] = propTween.start, hidden && (propTween.end = propTween.start, 
                    propTween.start = 0));
                } ],
                prefilter: function(callback, prepend) {
                    prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback);
                }
            }), jQuery.speed = function(speed, easing, fn) {
                var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
                    complete: fn || !fn && easing || isFunction(speed) && speed,
                    duration: speed,
                    easing: fn && easing || easing && !isFunction(easing) && easing
                };
                return jQuery.fx.off ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), 
                null != opt.queue && !0 !== opt.queue || (opt.queue = "fx"), opt.old = opt.complete, 
                opt.complete = function() {
                    isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue);
                }, opt;
            }, jQuery.fn.extend({
                fadeTo: function(speed, to, easing, callback) {
                    return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                        opacity: to
                    }, speed, easing, callback);
                },
                animate: function(prop, speed, easing, callback) {
                    function doAnimation() {
                        var anim = Animation(this, jQuery.extend({}, prop), optall);
                        (empty || dataPriv.get(this, "finish")) && anim.stop(!0);
                    }
                    var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback);
                    return doAnimation.finish = doAnimation, empty || !1 === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                },
                stop: function(type, clearQueue, gotoEnd) {
                    function stopQueue(hooks) {
                        var stop = hooks.stop;
                        delete hooks.stop, stop(gotoEnd);
                    }
                    return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, 
                    type = void 0), clearQueue && this.queue(type || "fx", []), 
                    this.each(function() {
                        var dequeue = !0, index = null != type && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                        if (index) data[index] && data[index].stop && stopQueue(data[index]); else for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                        for (index = timers.length; index--; ) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), 
                        dequeue = !1, timers.splice(index, 1));
                        !dequeue && gotoEnd || jQuery.dequeue(this, type);
                    });
                },
                finish: function(type) {
                    return !1 !== type && (type = type || "fx"), this.each(function() {
                        var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                        for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), 
                        index = timers.length; index--; ) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), 
                        timers.splice(index, 1));
                        for (index = 0; index < length; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                        delete data.finish;
                    });
                }
            }), jQuery.each([ "toggle", "show", "hide" ], function(_i, name) {
                var cssFn = jQuery.fn[name];
                jQuery.fn[name] = function(speed, easing, callback) {
                    return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback);
                };
            }), jQuery.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(name, props) {
                jQuery.fn[name] = function(speed, easing, callback) {
                    return this.animate(props, speed, easing, callback);
                };
            }), jQuery.timers = [], jQuery.fx.tick = function() {
                var timer, i = 0, timers = jQuery.timers;
                for (fxNow = Date.now(); i < timers.length; i++) (timer = timers[i])() || timers[i] !== timer || timers.splice(i--, 1);
                timers.length || jQuery.fx.stop(), fxNow = void 0;
            }, jQuery.fx.timer = function(timer) {
                jQuery.timers.push(timer), jQuery.fx.start();
            }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
                inProgress || (inProgress = !0, schedule());
            }, jQuery.fx.stop = function() {
                inProgress = null;
            }, jQuery.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, jQuery.fn.delay = function(time, type) {
                return time = jQuery.fx && jQuery.fx.speeds[time] || time, this.queue(type = type || "fx", function(next, hooks) {
                    var timeout = window.setTimeout(next, time);
                    hooks.stop = function() {
                        window.clearTimeout(timeout);
                    };
                });
            }, function() {
                var input = document.createElement("input"), opt = document.createElement("select").appendChild(document.createElement("option"));
                input.type = "checkbox", support.checkOn = "" !== input.value, support.optSelected = opt.selected, 
                (input = document.createElement("input")).value = "t", input.type = "radio", 
                support.radioValue = "t" === input.value;
            }();
            var boolHook, attrHandle = jQuery.expr.attrHandle, rfocusable = (jQuery.fn.extend({
                attr: function(name, value) {
                    return access(this, jQuery.attr, name, value, 1 < arguments.length);
                },
                removeAttr: function(name) {
                    return this.each(function() {
                        jQuery.removeAttr(this, name);
                    });
                }
            }), jQuery.extend({
                attr: function(elem, name, value) {
                    var ret, hooks, nType = elem.nodeType;
                    if (3 !== nType && 8 !== nType && 2 !== nType) return void 0 === elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), 
                    void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), 
                    value) : !(hooks && "get" in hooks && null !== (ret = hooks.get(elem, name))) && null == (ret = jQuery.find.attr(elem, name)) ? void 0 : ret);
                },
                attrHooks: {
                    type: {
                        set: function(elem, value) {
                            var val;
                            if (!support.radioValue && "radio" === value && nodeName(elem, "input")) return val = elem.value, 
                            elem.setAttribute("type", value), val && (elem.value = val), 
                            value;
                        }
                    }
                },
                removeAttr: function(elem, value) {
                    var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                    if (attrNames && 1 === elem.nodeType) for (;name = attrNames[i++]; ) elem.removeAttribute(name);
                }
            }), boolHook = {
                set: function(elem, value, name) {
                    return !1 === value ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), 
                    name;
                }
            }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
                var getter = attrHandle[name] || jQuery.find.attr;
                attrHandle[name] = function(elem, name, isXML) {
                    var ret, handle, lowercaseName = name.toLowerCase();
                    return isXML || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, 
                    ret = null != getter(elem, name, isXML) ? lowercaseName : null, 
                    attrHandle[lowercaseName] = handle), ret;
                };
            }), /^(?:input|select|textarea|button)$/i), rclickable = /^(?:a|area)$/i;
            function stripAndCollapse(value) {
                return (value.match(rnothtmlwhite) || []).join(" ");
            }
            function getClass(elem) {
                return elem.getAttribute && elem.getAttribute("class") || "";
            }
            function classesToArray(value) {
                return Array.isArray(value) ? value : "string" == typeof value && value.match(rnothtmlwhite) || [];
            }
            jQuery.fn.extend({
                prop: function(name, value) {
                    return access(this, jQuery.prop, name, value, 1 < arguments.length);
                },
                removeProp: function(name) {
                    return this.each(function() {
                        delete this[jQuery.propFix[name] || name];
                    });
                }
            }), jQuery.extend({
                prop: function(elem, name, value) {
                    var ret, hooks, nType = elem.nodeType;
                    if (3 !== nType && 8 !== nType && 2 !== nType) return 1 === nType && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, 
                    hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
                },
                propHooks: {
                    tabIndex: {
                        get: function(elem) {
                            var tabindex = jQuery.find.attr(elem, "tabindex");
                            return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), support.optSelected || (jQuery.propHooks.selected = {
                get: function(elem) {
                    elem = elem.parentNode;
                    return elem && elem.parentNode && elem.parentNode.selectedIndex, 
                    null;
                },
                set: function(elem) {
                    elem = elem.parentNode;
                    elem && (elem.selectedIndex, elem.parentNode && elem.parentNode.selectedIndex);
                }
            }), jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
                jQuery.propFix[this.toLowerCase()] = this;
            }), jQuery.fn.extend({
                addClass: function(value) {
                    var classes, elem, cur, clazz, j, curValue, i = 0;
                    if (isFunction(value)) return this.each(function(j) {
                        jQuery(this).addClass(value.call(this, j, getClass(this)));
                    });
                    if ((classes = classesToArray(value)).length) for (;elem = this[i++]; ) if (curValue = getClass(elem), 
                    cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " ") {
                        for (j = 0; clazz = classes[j++]; ) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                        curValue !== (curValue = stripAndCollapse(cur)) && elem.setAttribute("class", curValue);
                    }
                    return this;
                },
                removeClass: function(value) {
                    var classes, elem, cur, clazz, j, curValue, i = 0;
                    if (isFunction(value)) return this.each(function(j) {
                        jQuery(this).removeClass(value.call(this, j, getClass(this)));
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((classes = classesToArray(value)).length) for (;elem = this[i++]; ) if (curValue = getClass(elem), 
                    cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " ") {
                        for (j = 0; clazz = classes[j++]; ) for (;-1 < cur.indexOf(" " + clazz + " "); ) cur = cur.replace(" " + clazz + " ", " ");
                        curValue !== (curValue = stripAndCollapse(cur)) && elem.setAttribute("class", curValue);
                    }
                    return this;
                },
                toggleClass: function(value, stateVal) {
                    var type = typeof value, isValidValue = "string" == type || Array.isArray(value);
                    return "boolean" == typeof stateVal && isValidValue ? stateVal ? this.addClass(value) : this.removeClass(value) : isFunction(value) ? this.each(function(i) {
                        jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                    }) : this.each(function() {
                        var className, i, self, classNames;
                        if (isValidValue) for (i = 0, self = jQuery(this), classNames = classesToArray(value); className = classNames[i++]; ) self.hasClass(className) ? self.removeClass(className) : self.addClass(className); else void 0 !== value && "boolean" != type || ((className = getClass(this)) && dataPriv.set(this, "__className__", className), 
                        this.setAttribute && this.setAttribute("class", !className && !1 !== value && dataPriv.get(this, "__className__") || ""));
                    });
                },
                hasClass: function(selector) {
                    for (var elem, i = 0, className = " " + selector + " "; elem = this[i++]; ) if (1 === elem.nodeType && -1 < (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className)) return !0;
                    return !1;
                }
            });
            function stopPropagationCallback(e) {
                e.stopPropagation();
            }
            var rreturn = /\r/g, rfocusMorph = (jQuery.fn.extend({
                val: function(value) {
                    var hooks, ret, valueIsFunction, elem = this[0];
                    return arguments.length ? (valueIsFunction = isFunction(value), 
                    this.each(function(i) {
                        1 === this.nodeType && (null == (i = valueIsFunction ? value.call(this, i, jQuery(this).val()) : value) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = jQuery.map(i, function(value) {
                            return null == value ? "" : value + "";
                        })), (hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && void 0 !== hooks.set(this, i, "value") || (this.value = i));
                    })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : "string" == typeof (ret = elem.value) ? ret.replace(rreturn, "") : null == ret ? "" : ret : void 0;
                }
            }), jQuery.extend({
                valHooks: {
                    option: {
                        get: function(elem) {
                            var val = jQuery.find.attr(elem, "value");
                            return null != val ? val : stripAndCollapse(jQuery.text(elem));
                        }
                    },
                    select: {
                        get: function(elem) {
                            for (var option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0; i < max; i++) if (((option = options[i]).selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                if (option = jQuery(option).val(), one) return option;
                                values.push(option);
                            }
                            return values;
                        },
                        set: function(elem, value) {
                            for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--; ) ((option = options[i]).selected = -1 < jQuery.inArray(jQuery.valHooks.option.get(option), values)) && (optionSet = !0);
                            return optionSet || (elem.selectedIndex = -1), values;
                        }
                    }
                }
            }), jQuery.each([ "radio", "checkbox" ], function() {
                jQuery.valHooks[this] = {
                    set: function(elem, value) {
                        if (Array.isArray(value)) return elem.checked = -1 < jQuery.inArray(jQuery(elem).val(), value);
                    }
                }, support.checkOn || (jQuery.valHooks[this].get = function(elem) {
                    return null === elem.getAttribute("value") ? "on" : elem.value;
                });
            }), support.focusin = "onfocusin" in window, /^(?:focusinfocus|focusoutblur)$/), location = (jQuery.extend(jQuery.event, {
                trigger: function(event, data, elem, onlyHandlers) {
                    var i, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [], cur = lastElement = tmp = elem = elem || document;
                    if (3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (-1 < type.indexOf(".") && (type = (namespaces = type.split(".")).shift(), 
                    namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, 
                    (event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event)).isTrigger = onlyHandlers ? 2 : 3, 
                    event.namespace = namespaces.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    event.result = void 0, event.target || (event.target = elem), 
                    data = null == data ? [ event ] : jQuery.makeArray(data, [ event ]), 
                    special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || !1 !== special.trigger.apply(elem, data))) {
                        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                            for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), 
                            tmp = cur;
                            tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                        }
                        for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped(); ) lastElement = cur, 
                        event.type = 1 < i ? bubbleType : special.bindType || type, 
                        (handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle")) && handle.apply(cur, data), 
                        (handle = ontype && cur[ontype]) && handle.apply && acceptData(cur) && (event.result = handle.apply(cur, data), 
                        !1 === event.result && event.preventDefault());
                        return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && !1 !== special._default.apply(eventPath.pop(), data) || !acceptData(elem) || ontype && isFunction(elem[type]) && !isWindow(elem) && ((tmp = elem[ontype]) && (elem[ontype] = null), 
                        jQuery.event.triggered = type, event.isPropagationStopped() && lastElement.addEventListener(type, stopPropagationCallback), 
                        elem[type](), event.isPropagationStopped() && lastElement.removeEventListener(type, stopPropagationCallback), 
                        jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)), 
                        event.result;
                    }
                },
                simulate: function(type, elem, event) {
                    event = jQuery.extend(new jQuery.Event(), event, {
                        type: type,
                        isSimulated: !0
                    });
                    jQuery.event.trigger(event, null, elem);
                }
            }), jQuery.fn.extend({
                trigger: function(type, data) {
                    return this.each(function() {
                        jQuery.event.trigger(type, data, this);
                    });
                },
                triggerHandler: function(type, data) {
                    var elem = this[0];
                    if (elem) return jQuery.event.trigger(type, data, elem, !0);
                }
            }), support.focusin || jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, function(orig, fix) {
                function handler(event) {
                    jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                }
                jQuery.event.special[fix] = {
                    setup: function() {
                        var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                        attaches || doc.addEventListener(orig, handler, !0), dataPriv.access(doc, fix, (attaches || 0) + 1);
                    },
                    teardown: function() {
                        var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                        attaches ? dataPriv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), 
                        dataPriv.remove(doc, fix));
                    }
                };
            }), window.location), nonce = {
                guid: Date.now()
            }, rquery = /\?/, rbracket = (jQuery.parseXML = function(data) {
                var xml, parserErrorElem;
                if (!data || "string" != typeof data) return null;
                try {
                    xml = new window.DOMParser().parseFromString(data, "text/xml");
                } catch (e) {}
                return parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0], 
                xml && !parserErrorElem || jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
                    return el.textContent;
                }).join("\n") : data)), xml;
            }, /\[\]$/), rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
            jQuery.param = function(a, traditional) {
                function add(key, valueOrFunction) {
                    valueOrFunction = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction, 
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(null == valueOrFunction ? "" : valueOrFunction);
                }
                var prefix, s = [];
                if (null == a) return "";
                if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
                    add(this.name, this.value);
                }); else for (prefix in a) !function buildParams(prefix, obj, traditional, add) {
                    if (Array.isArray(obj)) jQuery.each(obj, function(i, v) {
                        traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v && null != v ? i : "") + "]", v, traditional, add);
                    }); else if (traditional || "object" !== toType(obj)) add(prefix, obj); else for (var name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                }(prefix, a[prefix], traditional, add);
                return s.join("&");
            }, jQuery.fn.extend({
                serialize: function() {
                    return jQuery.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map(function() {
                        var elements = jQuery.prop(this, "elements");
                        return elements ? jQuery.makeArray(elements) : this;
                    }).filter(function() {
                        var type = this.type;
                        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                    }).map(function(_i, elem) {
                        var val = jQuery(this).val();
                        return null == val ? null : Array.isArray(val) ? jQuery.map(val, function(val) {
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        }) : {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        };
                    }).get();
                }
            });
            var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
            function addToPrefiltersOrTransports(structure) {
                return function(dataTypeExpression, func) {
                    "string" != typeof dataTypeExpression && (func = dataTypeExpression, 
                    dataTypeExpression = "*");
                    var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                    if (isFunction(func)) for (;dataType = dataTypes[i++]; ) "+" === dataType[0] ? (dataType = dataType.slice(1) || "*", 
                    (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func);
                };
            }
            function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                var inspected = {}, seekingTransport = structure === transports;
                function inspect(dataType) {
                    var selected;
                    return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                        prefilterOrFactory = prefilterOrFactory(options, originalOptions, jqXHR);
                        return "string" != typeof prefilterOrFactory || seekingTransport || inspected[prefilterOrFactory] ? seekingTransport ? !(selected = prefilterOrFactory) : void 0 : (options.dataTypes.unshift(prefilterOrFactory), 
                        inspect(prefilterOrFactory), !1);
                    }), selected;
                }
                return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
            }
            function ajaxExtend(target, src) {
                var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep = deep || {})[key] = src[key]);
                return deep && jQuery.extend(!0, target, deep), target;
            }
            originAnchor.href = location.href, jQuery.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: location.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(location.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": allTypes,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": jQuery.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(target, settings) {
                    return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
                },
                ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                ajaxTransport: addToPrefiltersOrTransports(transports),
                ajax: function(url, options) {
                    "object" == typeof url && (options = url, url = void 0);
                    var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, completed, fireGlobals, i, s = jQuery.ajaxSetup({}, options = options || {}), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                        readyState: 0,
                        getResponseHeader: function(key) {
                            var match;
                            if (completed) {
                                if (!responseHeaders) for (responseHeaders = {}; match = rheaders.exec(responseHeadersString); ) responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                                match = responseHeaders[key.toLowerCase() + " "];
                            }
                            return null == match ? null : match.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return completed ? responseHeadersString : null;
                        },
                        setRequestHeader: function(name, value) {
                            return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, 
                            requestHeaders[name] = value), this;
                        },
                        overrideMimeType: function(type) {
                            return null == completed && (s.mimeType = type), this;
                        },
                        statusCode: function(map) {
                            if (map) if (completed) jqXHR.always(map[jqXHR.status]); else for (var code in map) statusCode[code] = [ statusCode[code], map[code] ];
                            return this;
                        },
                        abort: function(statusText) {
                            statusText = statusText || strAbort;
                            return transport && transport.abort(statusText), done(0, statusText), 
                            this;
                        }
                    };
                    if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), 
                    s.type = options.method || options.type || s.method || s.type, 
                    s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ], 
                    null == s.crossDomain) {
                        url = document.createElement("a");
                        try {
                            url.href = s.url, url.href = url.href, s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != url.protocol + "//" + url.host;
                        } catch (e) {
                            s.crossDomain = !0;
                        }
                    }
                    if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), 
                    inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 
                    completed) return jqXHR;
                    for (i in (fireGlobals = jQuery.event && s.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), 
                    s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), 
                    cacheURL = s.url.replace(rhash, ""), s.hasContent ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(r20, "+")) : (url = s.url.slice(cacheURL.length), 
                    s.data && (s.processData || "string" == typeof s.data) && (cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data, 
                    delete s.data), !1 === s.cache && (cacheURL = cacheURL.replace(rantiCache, "$1"), 
                    url = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + url), 
                    s.url = cacheURL + url), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), 
                    jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), 
                    (s.data && s.hasContent && !1 !== s.contentType || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), 
                    jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]), 
                    s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                    if (s.beforeSend && (!1 === s.beforeSend.call(callbackContext, jqXHR, s) || completed)) return jqXHR.abort();
                    if (strAbort = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), 
                    jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                        if (jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [ jqXHR, s ]), 
                        completed) return jqXHR;
                        s.async && 0 < s.timeout && (timeoutTimer = window.setTimeout(function() {
                            jqXHR.abort("timeout");
                        }, s.timeout));
                        try {
                            completed = !1, transport.send(requestHeaders, done);
                        } catch (e) {
                            if (completed) throw e;
                            done(-1, e);
                        }
                    } else done(-1, "No Transport");
                    function done(status, nativeStatusText, responses, headers) {
                        var success, error, response, statusText = nativeStatusText;
                        completed || (completed = !0, timeoutTimer && window.clearTimeout(timeoutTimer), 
                        transport = void 0, responseHeadersString = headers || "", 
                        jqXHR.readyState = 0 < status ? 4 : 0, headers = 200 <= status && status < 300 || 304 === status, 
                        responses && (response = function(s, jqXHR, responses) {
                            for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes; "*" === dataTypes[0]; ) dataTypes.shift(), 
                            void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
                            if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
                                dataTypes.unshift(type);
                                break;
                            }
                            if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
                                for (type in responses) {
                                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                        finalDataType = type;
                                        break;
                                    }
                                    firstDataType = firstDataType || type;
                                }
                                finalDataType = finalDataType || firstDataType;
                            }
                            if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), 
                            responses[finalDataType];
                        }(s, jqXHR, responses)), !headers && -1 < jQuery.inArray("script", s.dataTypes) && jQuery.inArray("json", s.dataTypes) < 0 && (s.converters["text script"] = function() {}), 
                        response = function(s, response, jqXHR, isSuccess) {
                            var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
                            if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                            for (current = dataTypes.shift(); current; ) if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), 
                            !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), 
                            prev = current, current = dataTypes.shift()) if ("*" === current) current = prev; else if ("*" !== prev && prev !== current) {
                                if (!(conv = converters[prev + " " + current] || converters["* " + current])) for (conv2 in converters) if ((tmp = conv2.split(" "))[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                                    !0 === conv ? conv = converters[conv2] : !0 !== converters[conv2] && (current = tmp[0], 
                                    dataTypes.unshift(tmp[1]));
                                    break;
                                }
                                if (!0 !== conv) if (conv && s.throws) response = conv(response); else try {
                                    response = conv(response);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    };
                                }
                            }
                            return {
                                state: "success",
                                data: response
                            };
                        }(s, response, jqXHR, headers), headers ? (s.ifModified && ((responses = jqXHR.getResponseHeader("Last-Modified")) && (jQuery.lastModified[cacheURL] = responses), 
                        (responses = jqXHR.getResponseHeader("etag")) && (jQuery.etag[cacheURL] = responses)), 
                        204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, 
                        success = response.data, headers = !(error = response.error))) : (error = statusText, 
                        !status && statusText || (statusText = "error", status < 0 && (status = 0))), 
                        jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", 
                        headers ? deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]) : deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]), 
                        jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(headers ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, headers ? success : error ]), 
                        completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]), 
                        fireGlobals && (globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]), 
                        --jQuery.active || jQuery.event.trigger("ajaxStop")));
                    }
                    return jqXHR;
                },
                getJSON: function(url, data, callback) {
                    return jQuery.get(url, data, callback, "json");
                },
                getScript: function(url, callback) {
                    return jQuery.get(url, void 0, callback, "script");
                }
            }), jQuery.each([ "get", "post" ], function(_i, method) {
                jQuery[method] = function(url, data, callback, type) {
                    return isFunction(data) && (type = type || callback, callback = data, 
                    data = void 0), jQuery.ajax(jQuery.extend({
                        url: url,
                        type: method,
                        dataType: type,
                        data: data,
                        success: callback
                    }, jQuery.isPlainObject(url) && url));
                };
            }), jQuery.ajaxPrefilter(function(s) {
                for (var i in s.headers) "content-type" === i.toLowerCase() && (s.contentType = s.headers[i] || "");
            }), jQuery._evalUrl = function(url, options, doc) {
                return jQuery.ajax({
                    url: url,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(response) {
                        jQuery.globalEval(response, options, doc);
                    }
                });
            }, jQuery.fn.extend({
                wrapAll: function(html) {
                    return this[0] && (isFunction(html) && (html = html.call(this[0])), 
                    html = jQuery(html, this[0].ownerDocument).eq(0).clone(!0), 
                    this[0].parentNode && html.insertBefore(this[0]), html.map(function() {
                        for (var elem = this; elem.firstElementChild; ) elem = elem.firstElementChild;
                        return elem;
                    }).append(this)), this;
                },
                wrapInner: function(html) {
                    return isFunction(html) ? this.each(function(i) {
                        jQuery(this).wrapInner(html.call(this, i));
                    }) : this.each(function() {
                        var self = jQuery(this), contents = self.contents();
                        contents.length ? contents.wrapAll(html) : self.append(html);
                    });
                },
                wrap: function(html) {
                    var htmlIsFunction = isFunction(html);
                    return this.each(function(i) {
                        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                    });
                },
                unwrap: function(selector) {
                    return this.parent(selector).not("body").each(function() {
                        jQuery(this).replaceWith(this.childNodes);
                    }), this;
                }
            }), jQuery.expr.pseudos.hidden = function(elem) {
                return !jQuery.expr.pseudos.visible(elem);
            }, jQuery.expr.pseudos.visible = function(elem) {
                return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
            }, jQuery.ajaxSettings.xhr = function() {
                try {
                    return new window.XMLHttpRequest();
                } catch (e) {}
            };
            var input, xhrSuccessStatus = {
                0: 200,
                1223: 204
            }, xhrSupported = jQuery.ajaxSettings.xhr(), oldCallbacks = (support.cors = !!xhrSupported && "withCredentials" in xhrSupported, 
            support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function(options) {
                var callback, errorCallback;
                if (support.cors || xhrSupported && !options.crossDomain) return {
                    send: function(headers, complete) {
                        var i, xhr = options.xhr();
                        if (xhr.open(options.type, options.url, options.async, options.username, options.password), 
                        options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                        for (i in options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), 
                        options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest"), 
                        headers) xhr.setRequestHeader(i, headers[i]);
                        callback = function(type) {
                            return function() {
                                callback && (callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null, 
                                "abort" === type ? xhr.abort() : "error" === type ? "number" != typeof xhr.status ? complete(0, "error") : complete(xhr.status, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                                    binary: xhr.response
                                } : {
                                    text: xhr.responseText
                                }, xhr.getAllResponseHeaders()));
                            };
                        }, xhr.onload = callback(), errorCallback = xhr.onerror = xhr.ontimeout = callback("error"), 
                        void 0 !== xhr.onabort ? xhr.onabort = errorCallback : xhr.onreadystatechange = function() {
                            4 === xhr.readyState && window.setTimeout(function() {
                                callback && errorCallback();
                            });
                        }, callback = callback("abort");
                        try {
                            xhr.send(options.hasContent && options.data || null);
                        } catch (e) {
                            if (callback) throw e;
                        }
                    },
                    abort: function() {
                        callback && callback();
                    }
                };
            }), jQuery.ajaxPrefilter(function(s) {
                s.crossDomain && (s.contents.script = !1);
            }), jQuery.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(text) {
                        return jQuery.globalEval(text), text;
                    }
                }
            }), jQuery.ajaxPrefilter("script", function(s) {
                void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET");
            }), jQuery.ajaxTransport("script", function(s) {
                var script, callback;
                if (s.crossDomain || s.scriptAttrs) return {
                    send: function(_, complete) {
                        script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                            charset: s.scriptCharset,
                            src: s.url
                        }).on("load error", callback = function(evt) {
                            script.remove(), callback = null, evt && complete("error" === evt.type ? 404 : 200, evt.type);
                        }), document.head.appendChild(script[0]);
                    },
                    abort: function() {
                        callback && callback();
                    }
                };
            }), []), rjsonp = /(=)\?(?=&|$)|\?\?/, rtrim = (jQuery.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
                    return this[callback] = !0, callback;
                }
            }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
                var callbackName, overwritten, responseContainer, jsonProp = !1 !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
                if (jsonProp || "jsonp" === s.dataTypes[0]) return callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, 
                jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : !1 !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), 
                s.converters["script json"] = function() {
                    return responseContainer || jQuery.error(callbackName + " was not called"), 
                    responseContainer[0];
                }, s.dataTypes[0] = "json", overwritten = window[callbackName], 
                window[callbackName] = function() {
                    responseContainer = arguments;
                }, jqXHR.always(function() {
                    void 0 === overwritten ? jQuery(window).removeProp(callbackName) : window[callbackName] = overwritten, 
                    s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, 
                    oldCallbacks.push(callbackName)), responseContainer && isFunction(overwritten) && overwritten(responseContainer[0]), 
                    responseContainer = overwritten = void 0;
                }), "script";
            }), support.createHTMLDocument = ((input = document.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
            2 === input.childNodes.length), jQuery.parseHTML = function(data, context, keepScripts) {
                return "string" != typeof data ? [] : ("boolean" == typeof context && (keepScripts = context, 
                context = !1), context || (support.createHTMLDocument ? ((base = (context = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href, 
                context.head.appendChild(base)) : context = document), base = !keepScripts && [], 
                (keepScripts = rsingleTag.exec(data)) ? [ context.createElement(keepScripts[1]) ] : (keepScripts = buildFragment([ data ], context, base), 
                base && base.length && jQuery(base).remove(), jQuery.merge([], keepScripts.childNodes)));
                var base;
            }, jQuery.fn.load = function(url, params, callback) {
                var selector, type, response, self = this, off = url.indexOf(" ");
                return -1 < off && (selector = stripAndCollapse(url.slice(off)), 
                url = url.slice(0, off)), isFunction(params) ? (callback = params, 
                params = void 0) : params && "object" == typeof params && (type = "POST"), 
                0 < self.length && jQuery.ajax({
                    url: url,
                    type: type || "GET",
                    dataType: "html",
                    data: params
                }).done(function(responseText) {
                    response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                }).always(callback && function(jqXHR, status) {
                    self.each(function() {
                        callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
                    });
                }), this;
            }, jQuery.expr.pseudos.animated = function(elem) {
                return jQuery.grep(jQuery.timers, function(fn) {
                    return elem === fn.elem;
                }).length;
            }, jQuery.offset = {
                setOffset: function(elem, options, i) {
                    var curCSSTop, curTop, curOffset, curCSSLeft, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                    "static" === position && (elem.style.position = "relative"), 
                    curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), 
                    curCSSLeft = jQuery.css(elem, "left"), position = ("absolute" === position || "fixed" === position) && -1 < (curCSSTop + curCSSLeft).indexOf("auto") ? (curTop = (position = curElem.position()).top, 
                    position.left) : (curTop = parseFloat(curCSSTop) || 0, parseFloat(curCSSLeft) || 0), 
                    null != (options = isFunction(options) ? options.call(elem, i, jQuery.extend({}, curOffset)) : options).top && (props.top = options.top - curOffset.top + curTop), 
                    null != options.left && (props.left = options.left - curOffset.left + position), 
                    "using" in options ? options.using.call(elem, props) : curElem.css(props);
                }
            }, jQuery.fn.extend({
                offset: function(options) {
                    if (arguments.length) return void 0 === options ? this : this.each(function(i) {
                        jQuery.offset.setOffset(this, options, i);
                    });
                    var rect, elem = this[0];
                    return elem ? elem.getClientRects().length ? (rect = elem.getBoundingClientRect(), 
                    elem = elem.ownerDocument.defaultView, {
                        top: rect.top + elem.pageYOffset,
                        left: rect.left + elem.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0;
                },
                position: function() {
                    if (this[0]) {
                        var offsetParent, offset, doc, elem = this[0], parentOffset = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === jQuery.css(elem, "position")) offset = elem.getBoundingClientRect(); else {
                            for (offset = this.offset(), doc = elem.ownerDocument, 
                            offsetParent = elem.offsetParent || doc.documentElement; offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && "static" === jQuery.css(offsetParent, "position"); ) offsetParent = offsetParent.parentNode;
                            offsetParent && offsetParent !== elem && 1 === offsetParent.nodeType && ((parentOffset = jQuery(offsetParent).offset()).top += jQuery.css(offsetParent, "borderTopWidth", !0), 
                            parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", !0));
                        }
                        return {
                            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var offsetParent = this.offsetParent; offsetParent && "static" === jQuery.css(offsetParent, "position"); ) offsetParent = offsetParent.offsetParent;
                        return offsetParent || documentElement;
                    });
                }
            }), jQuery.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(method, prop) {
                var top = "pageYOffset" === prop;
                jQuery.fn[method] = function(val) {
                    return access(this, function(elem, method, val) {
                        var win;
                        if (isWindow(elem) ? win = elem : 9 === elem.nodeType && (win = elem.defaultView), 
                        void 0 === val) return win ? win[prop] : elem[method];
                        win ? win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset) : elem[method] = val;
                    }, method, val, arguments.length);
                };
            }), jQuery.each([ "top", "left" ], function(_i, prop) {
                jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                    if (computed) return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                });
            }), jQuery.each({
                Height: "height",
                Width: "width"
            }, function(name, type) {
                jQuery.each({
                    padding: "inner" + name,
                    content: type,
                    "": "outer" + name
                }, function(defaultExtra, funcName) {
                    jQuery.fn[funcName] = function(margin, value) {
                        var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin), extra = defaultExtra || (!0 === margin || !0 === value ? "margin" : "border");
                        return access(this, function(elem, type, value) {
                            var doc;
                            return isWindow(elem) ? 0 === funcName.indexOf("outer") ? elem["inner" + name] : elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, 
                            Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                        }, type, chainable ? margin : void 0, chainable);
                    };
                });
            }), jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(_i, type) {
                jQuery.fn[type] = function(fn) {
                    return this.on(type, fn);
                };
            }), jQuery.fn.extend({
                bind: function(types, data, fn) {
                    return this.on(types, null, data, fn);
                },
                unbind: function(types, fn) {
                    return this.off(types, null, fn);
                },
                delegate: function(selector, types, data, fn) {
                    return this.on(types, selector, data, fn);
                },
                undelegate: function(selector, types, fn) {
                    return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                },
                hover: function(fnOver, fnOut) {
                    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                }
            }), jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
                jQuery.fn[name] = function(data, fn) {
                    return 0 < arguments.length ? this.on(name, null, data, fn) : this.trigger(name);
                };
            }), /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g), _jQuery = (jQuery.proxy = function(fn, context) {
                var args, tmp;
                if ("string" == typeof context && (tmp = fn[context], context = fn, 
                fn = tmp), isFunction(fn)) return args = slice.call(arguments, 2), 
                (tmp = function() {
                    return fn.apply(context || this, args.concat(slice.call(arguments)));
                }).guid = fn.guid = fn.guid || jQuery.guid++, tmp;
            }, jQuery.holdReady = function(hold) {
                hold ? jQuery.readyWait++ : jQuery.ready(!0);
            }, jQuery.isArray = Array.isArray, jQuery.parseJSON = JSON.parse, jQuery.nodeName = nodeName, 
            jQuery.isFunction = isFunction, jQuery.isWindow = isWindow, jQuery.camelCase = camelCase, 
            jQuery.type = toType, jQuery.now = Date.now, jQuery.isNumeric = function(obj) {
                var type = jQuery.type(obj);
                return ("number" === type || "string" === type) && !isNaN(obj - parseFloat(obj));
            }, jQuery.trim = function(text) {
                return null == text ? "" : (text + "").replace(rtrim, "");
            }, window.jQuery), _$ = window.$;
            return jQuery.noConflict = function(deep) {
                return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), 
                jQuery;
            }, void 0 === noGlobal && (window.jQuery = window.$ = jQuery), jQuery;
        }, jquery.exports = global.document ? factory(global, !0) : function(w) {
            if (w.document) return factory(w);
            throw new Error("jQuery requires a window with a document");
        };
    }(), jquery.exports);
    const menuToggle = document.querySelector(".js-menu-toggle"), menuOverlay = document.querySelector(".kin-header__overlay"), cartToggle = document.querySelector(".js-cart-toggle"), closeMiniArrow = document.querySelector(".kin-header__mini-cart-close"), continueShopping = document.querySelector(".kin-header__mini-cart-close-btn");
    function toggleMenu() {
        const body = document.querySelector("body"), navigation = document.querySelector(".kin-header__flyout-menu");
        var menuText = menuToggle.textContent.replace(/\s+/g, "");
        menuToggle.classList.toggle("is-active"), menuToggle.textContent = "menu" === menuText ? "close" : "menu", 
        body.classList.toggle("overflow-hidden"), body.classList.toggle("menu-opened"), 
        navigation.classList.toggle("kin-header__flyout-menu--active"), closeCart();
    }
    function openCart() {
        const body = document.querySelector("body"), miniCart = document.querySelector(".kin-header__mini-cart");
        body.classList.add("overflow-hidden"), body.classList.add("mini-cart-opened"), 
        miniCart.classList.add("kin-header__mini-cart--active");
    }
    function closeCart() {
        const body = document.querySelector("body"), miniCart = document.querySelector(".kin-header__mini-cart");
        body.classList.remove("overflow-hidden"), body.classList.remove("mini-cart-opened"), 
        miniCart.classList.remove("kin-header__mini-cart--active");
    }
    menuToggle.addEventListener("click", toggleMenu), menuOverlay.addEventListener("click", toggleMenu), 
    cartToggle.addEventListener("click", openCart), closeMiniArrow.addEventListener("click", closeCart), 
    continueShopping.addEventListener("click", closeCart);
    const ajaxify = {
        onAddToCart(event) {
            event.preventDefault(), $.ajax({
                type: "POST",
                url: "/cart/add.js",
                data: $(this).serialize(),
                dataType: "json",
                success: ajaxify.onCartUpdated,
                error: ajaxify.onError
            });
        },
        onLineRemoved(event) {
            event.preventDefault();
            const $removeLink = $(this);
            event = $removeLink.attr("href").split("change?")[1];
            $.post("/cart/change.js", event, ajaxify.onCartUpdated, "json");
        },
        onCartUpdated() {
            console.log("added");
            const $miniCartFieldSet = $(".kin-header__mini-cart-contents .js-cart-fieldset");
            $miniCartFieldSet.prop("disabled", !0), $.ajax({
                type: "GET",
                url: "/cart",
                context: document.body,
                success(context) {
                    const $dataCartContents = $(context).find(".js-cart-page-contents");
                    var context = $dataCartContents.html(), dataCartItemCount = $dataCartContents.attr("data-cart-item-count");
                    const $miniCartContents = $(".kin-header__mini-cart-contents"), $cartItemCount = $(".js-cart-item-count");
                    $cartItemCount.text(dataCartItemCount), $miniCartContents.html(context), 
                    openCart();
                    dataCartItemCount = $(".kin-header__mini-cart .cart-form");
                    const $miniCart = $(".kin-header__mini-cart");
                    0 === dataCartItemCount.length ? $miniCart.removeClass("kin-header__mini-cart--full") : $miniCart.addClass("kin-header__mini-cart--full");
                }
            });
        },
        onError(XMLHttpRequest) {
            XMLHttpRequest = XMLHttpRequest.responseJSON;
            alert(`${XMLHttpRequest.status} - ${XMLHttpRequest.message} : ` + XMLHttpRequest.description);
        },
        init() {
            $(document).on("submit", "#add-to-cart-form", ajaxify.onAddToCart), 
            $(document).on("click", ".js-remove-line", ajaxify.onLineRemoved);
        }
    }, quantityPicker = (ajaxify.init(), {
        onButtonClick() {
            const $button = $(this), $picker = $button.closest(".js-quantity-picker"), $quantity = $picker.find(".js-quantity-field");
            var quantityValue = parseInt($quantity.val(), 10), max = $quantity.attr("max") ? parseInt($quantity.attr("max"), 10) : null;
            $button.hasClass("plus") && (null === max || quantityValue + 1 <= max) ? $quantity.val(quantityValue + 1).trigger("change") : $button.hasClass("minus") && $quantity.val(quantityValue - 1).trigger("change");
        },
        onChange() {
            const $field = $(this), $picker = $field.closest(".js-quantity-picker"), $quantityText = $picker.find(".js-quantity-text");
            var shouldDisableMinus = parseInt(this.value, 10) === parseInt($field.attr("min"), 10), shouldDisablePlus = parseInt(this.value, 10) === parseInt($field.attr("max"), 10);
            const $minusButton = $picker.find(".js-quantity-button.minus"), $plusButton = $picker.find(".js-quantity-button.plus");
            $quantityText.text(this.value), shouldDisableMinus ? $minusButton.prop("disabled", !0) : !0 === $minusButton.prop("disabled") && $minusButton.prop("disabled", !1), 
            shouldDisablePlus ? $plusButton.prop("disabled", !0) : !0 === $plusButton.prop("disabled") && $plusButton.prop("disabled", !1);
        },
        init() {
            $(document).on("click", ".js-quantity-button", quantityPicker.onButtonClick), 
            $(document).on("change", ".js-quantity-field", quantityPicker.onChange);
        }
    }), lineItem = (quantityPicker.init(), {
        isInMiniCart(element) {
            const $element = $(element);
            return 0 !== $element.closest(".kin-header__mini-cart-contents").length;
        },
        onLineQuantityChanged() {
            var changes = {
                quantity: this.value,
                id: $(this).attr("id").replace("updates_", "")
            };
            lineItem.isInMiniCart(this) && $.post("/cart/change.js", changes, ajaxify.onCartUpdated, "json");
        },
        onLineRemoved(event) {
            if (lineItem.isInMiniCart(this)) {
                event.preventDefault();
                const $removeLink = $(this);
                event = $removeLink.attr("href").split("change?")[1];
                $.post("/cart/change.js", event, ajaxify.onCartUpdated, "json");
            }
        },
        init() {
            $(document).on("click", ".js-remove-line", lineItem.onLineRemoved), 
            $(document).on("change", ".js-line-quantity", lineItem.onLineQuantityChanged);
        }
    });
    lineItem.init();
}();
