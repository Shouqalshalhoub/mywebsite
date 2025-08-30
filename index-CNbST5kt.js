var wd = e => {
    throw TypeError(e)
};
var Ql = (e, t, n) => t.has(e) || wd("Cannot " + n);
var k = (e, t, n) => (Ql(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    J = (e, t, n) => t.has(e) ? wd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    U = (e, t, n, r) => (Ql(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Ae = (e, t, n) => (Ql(e, t, "access private method"), n);
var Wi = (e, t, n, r) => ({
    set _(o) {
        U(e, t, o, n)
    },
    get _() {
        return k(e, t, r)
    }
});

function py(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function Cp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Sp = {
        exports: {}
    },
    hl = {},
    bp = {
        exports: {}
    },
    G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi = Symbol.for("react.element"),
    hy = Symbol.for("react.portal"),
    my = Symbol.for("react.fragment"),
    gy = Symbol.for("react.strict_mode"),
    vy = Symbol.for("react.profiler"),
    yy = Symbol.for("react.provider"),
    xy = Symbol.for("react.context"),
    wy = Symbol.for("react.forward_ref"),
    Ny = Symbol.for("react.suspense"),
    Ey = Symbol.for("react.memo"),
    Cy = Symbol.for("react.lazy"),
    Nd = Symbol.iterator;

function Sy(e) {
    return e === null || typeof e != "object" ? null : (e = Nd && e[Nd] || e["@@iterator"], typeof e == "function" ? e : null)
}
var kp = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    jp = Object.assign,
    Pp = {};

function Eo(e, t, n) {
    this.props = e, this.context = t, this.refs = Pp, this.updater = n || kp
}
Eo.prototype.isReactComponent = {};
Eo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Eo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Rp() {}
Rp.prototype = Eo.prototype;

function Bu(e, t, n) {
    this.props = e, this.context = t, this.refs = Pp, this.updater = n || kp
}
var Uu = Bu.prototype = new Rp;
Uu.constructor = Bu;
jp(Uu, Eo.prototype);
Uu.isPureReactComponent = !0;
var Ed = Array.isArray,
    Tp = Object.prototype.hasOwnProperty,
    Vu = {
        current: null
    },
    Mp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function _p(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Tp.call(t, r) && !Mp.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
        o.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: Pi,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Vu.current
    }
}

function by(e, t) {
    return {
        $$typeof: Pi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Hu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Pi
}

function ky(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Cd = /\/+/g;

function Gl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ky("" + e.key) : t.toString(36)
}

function vs(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Pi:
                case hy:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + Gl(s, 0) : r, Ed(o) ? (n = "", e != null && (n = e.replace(Cd, "$&/") + "/"), vs(o, t, n, "", function(c) {
        return c
    })) : o != null && (Hu(o) && (o = by(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Cd, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Ed(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var u = r + Gl(i, l);
            s += vs(i, t, n, u, o)
        } else if (u = Sy(e), typeof u == "function")
            for (e = u.call(e), l = 0; !(i = e.next()).done;) i = i.value, u = r + Gl(i, l++), s += vs(i, t, n, u, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Ki(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return vs(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function jy(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ge = {
        current: null
    },
    ys = {
        transition: null
    },
    Py = {
        ReactCurrentDispatcher: Ge,
        ReactCurrentBatchConfig: ys,
        ReactCurrentOwner: Vu
    };

function Op() {
    throw Error("act(...) is not supported in production builds of React.")
}
G.Children = {
    map: Ki,
    forEach: function(e, t, n) {
        Ki(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ki(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Ki(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Hu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = Eo;
G.Fragment = my;
G.Profiler = vy;
G.PureComponent = Bu;
G.StrictMode = gy;
G.Suspense = Ny;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Py;
G.act = Op;
G.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = jp({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = Vu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (u in t) Tp.call(t, u) && !Mp.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: Pi,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
};
G.createContext = function(e) {
    return e = {
        $$typeof: xy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: yy,
        _context: e
    }, e.Consumer = e
};
G.createElement = _p;
G.createFactory = function(e) {
    var t = _p.bind(null, e);
    return t.type = e, t
};
G.createRef = function() {
    return {
        current: null
    }
};
G.forwardRef = function(e) {
    return {
        $$typeof: wy,
        render: e
    }
};
G.isValidElement = Hu;
G.lazy = function(e) {
    return {
        $$typeof: Cy,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: jy
    }
};
G.memo = function(e, t) {
    return {
        $$typeof: Ey,
        type: e,
        compare: t === void 0 ? null : t
    }
};
G.startTransition = function(e) {
    var t = ys.transition;
    ys.transition = {};
    try {
        e()
    } finally {
        ys.transition = t
    }
};
G.unstable_act = Op;
G.useCallback = function(e, t) {
    return Ge.current.useCallback(e, t)
};
G.useContext = function(e) {
    return Ge.current.useContext(e)
};
G.useDebugValue = function() {};
G.useDeferredValue = function(e) {
    return Ge.current.useDeferredValue(e)
};
G.useEffect = function(e, t) {
    return Ge.current.useEffect(e, t)
};
G.useId = function() {
    return Ge.current.useId()
};
G.useImperativeHandle = function(e, t, n) {
    return Ge.current.useImperativeHandle(e, t, n)
};
G.useInsertionEffect = function(e, t) {
    return Ge.current.useInsertionEffect(e, t)
};
G.useLayoutEffect = function(e, t) {
    return Ge.current.useLayoutEffect(e, t)
};
G.useMemo = function(e, t) {
    return Ge.current.useMemo(e, t)
};
G.useReducer = function(e, t, n) {
    return Ge.current.useReducer(e, t, n)
};
G.useRef = function(e) {
    return Ge.current.useRef(e)
};
G.useState = function(e) {
    return Ge.current.useState(e)
};
G.useSyncExternalStore = function(e, t, n) {
    return Ge.current.useSyncExternalStore(e, t, n)
};
G.useTransition = function() {
    return Ge.current.useTransition()
};
G.version = "18.3.1";
bp.exports = G;
var h = bp.exports;
const O = Cp(h),
    Lp = py({
        __proto__: null,
        default: O
    }, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ry = h,
    Ty = Symbol.for("react.element"),
    My = Symbol.for("react.fragment"),
    _y = Object.prototype.hasOwnProperty,
    Oy = Ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Ly = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Ap(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) _y.call(t, r) && !Ly.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Ty,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Oy.current
    }
}
hl.Fragment = My;
hl.jsx = Ap;
hl.jsxs = Ap;
Sp.exports = hl;
var a = Sp.exports,
    Ip = {
        exports: {}
    },
    at = {},
    Dp = {
        exports: {}
    },
    Fp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, T) {
        var A = j.length;
        j.push(T);
        e: for (; 0 < A;) {
            var H = A - 1 >>> 1,
                z = j[H];
            if (0 < o(z, T)) j[H] = T, j[A] = z, A = H;
            else break e
        }
    }

    function n(j) {
        return j.length === 0 ? null : j[0]
    }

    function r(j) {
        if (j.length === 0) return null;
        var T = j[0],
            A = j.pop();
        if (A !== T) {
            j[0] = A;
            e: for (var H = 0, z = j.length, Q = z >>> 1; H < Q;) {
                var X = 2 * (H + 1) - 1,
                    Se = j[X],
                    Le = X + 1,
                    te = j[Le];
                if (0 > o(Se, A)) Le < z && 0 > o(te, Se) ? (j[H] = te, j[Le] = A, H = Le) : (j[H] = Se, j[X] = A, H = X);
                else if (Le < z && 0 > o(te, A)) j[H] = te, j[Le] = A, H = Le;
                else break e
            }
        }
        return T
    }

    function o(j, T) {
        var A = j.sortIndex - T.sortIndex;
        return A !== 0 ? A : j.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var u = [],
        c = [],
        d = 1,
        p = null,
        m = 3,
        f = !1,
        w = !1,
        x = !1,
        N = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function y(j) {
        for (var T = n(c); T !== null;) {
            if (T.callback === null) r(c);
            else if (T.startTime <= j) r(c), T.sortIndex = T.expirationTime, t(u, T);
            else break;
            T = n(c)
        }
    }

    function E(j) {
        if (x = !1, y(j), !w)
            if (n(u) !== null) w = !0, $(C);
            else {
                var T = n(c);
                T !== null && V(E, T.startTime - j)
            }
    }

    function C(j, T) {
        w = !1, x && (x = !1, v(R), R = -1), f = !0;
        var A = m;
        try {
            for (y(T), p = n(u); p !== null && (!(p.expirationTime > T) || j && !F());) {
                var H = p.callback;
                if (typeof H == "function") {
                    p.callback = null, m = p.priorityLevel;
                    var z = H(p.expirationTime <= T);
                    T = e.unstable_now(), typeof z == "function" ? p.callback = z : p === n(u) && r(u), y(T)
                } else r(u);
                p = n(u)
            }
            if (p !== null) var Q = !0;
            else {
                var X = n(c);
                X !== null && V(E, X.startTime - T), Q = !1
            }
            return Q
        } finally {
            p = null, m = A, f = !1
        }
    }
    var S = !1,
        b = null,
        R = -1,
        P = 5,
        M = -1;

    function F() {
        return !(e.unstable_now() - M < P)
    }

    function I() {
        if (b !== null) {
            var j = e.unstable_now();
            M = j;
            var T = !0;
            try {
                T = b(!0, j)
            } finally {
                T ? K() : (S = !1, b = null)
            }
        } else S = !1
    }
    var K;
    if (typeof g == "function") K = function() {
        g(I)
    };
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel,
            Y = L.port2;
        L.port1.onmessage = I, K = function() {
            Y.postMessage(null)
        }
    } else K = function() {
        N(I, 0)
    };

    function $(j) {
        b = j, S || (S = !0, K())
    }

    function V(j, T) {
        R = N(function() {
            j(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
        j.callback = null
    }, e.unstable_continueExecution = function() {
        w || f || (w = !0, $(C))
    }, e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return m
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(j) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var T = 3;
                break;
            default:
                T = m
        }
        var A = m;
        m = T;
        try {
            return j()
        } finally {
            m = A
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, T) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var A = m;
        m = j;
        try {
            return T()
        } finally {
            m = A
        }
    }, e.unstable_scheduleCallback = function(j, T, A) {
        var H = e.unstable_now();
        switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? H + A : H) : A = H, j) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
        }
        return z = A + z, j = {
            id: d++,
            callback: T,
            priorityLevel: j,
            startTime: A,
            expirationTime: z,
            sortIndex: -1
        }, A > H ? (j.sortIndex = A, t(c, j), n(u) === null && j === n(c) && (x ? (v(R), R = -1) : x = !0, V(E, A - H))) : (j.sortIndex = z, t(u, j), w || f || (w = !0, $(C))), j
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(j) {
        var T = m;
        return function() {
            var A = m;
            m = T;
            try {
                return j.apply(this, arguments)
            } finally {
                m = A
            }
        }
    }
})(Fp);
Dp.exports = Fp;
var Ay = Dp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iy = h,
    lt = Ay;

function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var zp = new Set,
    oi = {};

function Sr(e, t) {
    fo(e, t), fo(e + "Capture", t)
}

function fo(e, t) {
    for (oi[e] = t, e = 0; e < t.length; e++) zp.add(t[e])
}
var ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ra = Object.prototype.hasOwnProperty,
    Dy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Sd = {},
    bd = {};

function Fy(e) {
    return Ra.call(bd, e) ? !0 : Ra.call(Sd, e) ? !1 : Dy.test(e) ? bd[e] = !0 : (Sd[e] = !0, !1)
}

function zy(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function $y(e, t, n, r) {
    if (t === null || typeof t > "u" || zy(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ye(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Oe[e] = new Ye(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Oe[t] = new Ye(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Oe[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Oe[e] = new Ye(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Oe[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Oe[e] = new Ye(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Oe[e] = new Ye(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Oe[e] = new Ye(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Oe[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Wu = /[\-:]([a-z])/g;

function Ku(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Wu, Ku);
    Oe[t] = new Ye(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Wu, Ku);
    Oe[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Wu, Ku);
    Oe[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Oe[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Oe.xlinkHref = new Ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Oe[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Qu(e, t, n, r) {
    var o = Oe.hasOwnProperty(t) ? Oe[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($y(t, n, o, r) && (n = null), r || o === null ? Fy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var hn = Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Qi = Symbol.for("react.element"),
    Ar = Symbol.for("react.portal"),
    Ir = Symbol.for("react.fragment"),
    Gu = Symbol.for("react.strict_mode"),
    Ta = Symbol.for("react.profiler"),
    $p = Symbol.for("react.provider"),
    Bp = Symbol.for("react.context"),
    Yu = Symbol.for("react.forward_ref"),
    Ma = Symbol.for("react.suspense"),
    _a = Symbol.for("react.suspense_list"),
    Xu = Symbol.for("react.memo"),
    kn = Symbol.for("react.lazy"),
    Up = Symbol.for("react.offscreen"),
    kd = Symbol.iterator;

function _o(e) {
    return e === null || typeof e != "object" ? null : (e = kd && e[kd] || e["@@iterator"], typeof e == "function" ? e : null)
}
var xe = Object.assign,
    Yl;

function Vo(e) {
    if (Yl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Yl = t && t[1] || ""
    }
    return `
` + Yl + e
}
var Xl = !1;

function ql(e, t) {
    if (!e || Xl) return "";
    Xl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var o = c.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || o[s] !== i[l]) {
                                var u = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        Xl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Vo(e) : ""
}

function By(e) {
    switch (e.tag) {
        case 5:
            return Vo(e.type);
        case 16:
            return Vo("Lazy");
        case 13:
            return Vo("Suspense");
        case 19:
            return Vo("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ql(e.type, !1), e;
        case 11:
            return e = ql(e.type.render, !1), e;
        case 1:
            return e = ql(e.type, !0), e;
        default:
            return ""
    }
}

function Oa(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ir:
            return "Fragment";
        case Ar:
            return "Portal";
        case Ta:
            return "Profiler";
        case Gu:
            return "StrictMode";
        case Ma:
            return "Suspense";
        case _a:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Bp:
            return (e.displayName || "Context") + ".Consumer";
        case $p:
            return (e._context.displayName || "Context") + ".Provider";
        case Yu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Xu:
            return t = e.displayName || null, t !== null ? t : Oa(e.type) || "Memo";
        case kn:
            t = e._payload, e = e._init;
            try {
                return Oa(e(t))
            } catch {}
    }
    return null
}

function Uy(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Oa(t);
        case 8:
            return t === Gu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Wn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Vp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Vy(e) {
    var t = Vp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Gi(e) {
    e._valueTracker || (e._valueTracker = Vy(e))
}

function Hp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Vp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function As(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function La(e, t) {
    var n = t.checked;
    return xe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function jd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Wn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Wp(e, t) {
    t = t.checked, t != null && Qu(e, "checked", t, !1)
}

function Aa(e, t) {
    Wp(e, t);
    var n = Wn(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ia(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ia(e, t.type, Wn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Pd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ia(e, t, n) {
    (t !== "number" || As(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ho = Array.isArray;

function Qr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Wn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Da(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
    return xe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Rd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(_(92));
            if (Ho(n)) {
                if (1 < n.length) throw Error(_(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Wn(n)
    }
}

function Kp(e, t) {
    var n = Wn(t.value),
        r = Wn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Td(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Qp(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Fa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Yi, Gp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Yi = Yi || document.createElement("div"), Yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Yi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function ii(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Qo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Hy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qo).forEach(function(e) {
    Hy.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Qo[t] = Qo[e]
    })
});

function Yp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Qo.hasOwnProperty(e) && Qo[e] ? ("" + t).trim() : t + "px"
}

function Xp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Yp(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var Wy = xe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function za(e, t) {
    if (t) {
        if (Wy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(_(62))
    }
}

function $a(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Ba = null;

function qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Ua = null,
    Gr = null,
    Yr = null;

function Md(e) {
    if (e = Mi(e)) {
        if (typeof Ua != "function") throw Error(_(280));
        var t = e.stateNode;
        t && (t = xl(t), Ua(e.stateNode, e.type, t))
    }
}

function qp(e) {
    Gr ? Yr ? Yr.push(e) : Yr = [e] : Gr = e
}

function Zp() {
    if (Gr) {
        var e = Gr,
            t = Yr;
        if (Yr = Gr = null, Md(e), t)
            for (e = 0; e < t.length; e++) Md(t[e])
    }
}

function Jp(e, t) {
    return e(t)
}

function eh() {}
var Zl = !1;

function th(e, t, n) {
    if (Zl) return e(t, n);
    Zl = !0;
    try {
        return Jp(e, t, n)
    } finally {
        Zl = !1, (Gr !== null || Yr !== null) && (eh(), Zp())
    }
}

function si(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = xl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(_(231, t, typeof n));
    return n
}
var Va = !1;
if (ln) try {
    var Oo = {};
    Object.defineProperty(Oo, "passive", {
        get: function() {
            Va = !0
        }
    }), window.addEventListener("test", Oo, Oo), window.removeEventListener("test", Oo, Oo)
} catch {
    Va = !1
}

function Ky(e, t, n, r, o, i, s, l, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var Go = !1,
    Is = null,
    Ds = !1,
    Ha = null,
    Qy = {
        onError: function(e) {
            Go = !0, Is = e
        }
    };

function Gy(e, t, n, r, o, i, s, l, u) {
    Go = !1, Is = null, Ky.apply(Qy, arguments)
}

function Yy(e, t, n, r, o, i, s, l, u) {
    if (Gy.apply(this, arguments), Go) {
        if (Go) {
            var c = Is;
            Go = !1, Is = null
        } else throw Error(_(198));
        Ds || (Ds = !0, Ha = c)
    }
}

function br(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function nh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function _d(e) {
    if (br(e) !== e) throw Error(_(188))
}

function Xy(e) {
    var t = e.alternate;
    if (!t) {
        if (t = br(e), t === null) throw Error(_(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return _d(o), e;
                if (i === r) return _d(o), t;
                i = i.sibling
            }
            throw Error(_(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var s = !1, l = o.child; l;) {
                if (l === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (l === r) {
                    s = !0, r = o, n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l;) {
                    if (l === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (l === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(_(189))
            }
        }
        if (n.alternate !== r) throw Error(_(190))
    }
    if (n.tag !== 3) throw Error(_(188));
    return n.stateNode.current === n ? e : t
}

function rh(e) {
    return e = Xy(e), e !== null ? oh(e) : null
}

function oh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = oh(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var ih = lt.unstable_scheduleCallback,
    Od = lt.unstable_cancelCallback,
    qy = lt.unstable_shouldYield,
    Zy = lt.unstable_requestPaint,
    Ce = lt.unstable_now,
    Jy = lt.unstable_getCurrentPriorityLevel,
    Zu = lt.unstable_ImmediatePriority,
    sh = lt.unstable_UserBlockingPriority,
    Fs = lt.unstable_NormalPriority,
    e0 = lt.unstable_LowPriority,
    lh = lt.unstable_IdlePriority,
    ml = null,
    Ht = null;

function t0(e) {
    if (Ht && typeof Ht.onCommitFiberRoot == "function") try {
        Ht.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var _t = Math.clz32 ? Math.clz32 : o0,
    n0 = Math.log,
    r0 = Math.LN2;

function o0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (n0(e) / r0 | 0) | 0
}
var Xi = 64,
    qi = 4194304;

function Wo(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function zs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = Wo(l) : (i &= s, i !== 0 && (r = Wo(i)))
    } else s = n & ~o, s !== 0 ? r = Wo(s) : i !== 0 && (r = Wo(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - _t(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function i0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function s0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - _t(i),
            l = 1 << s,
            u = o[s];
        u === -1 ? (!(l & n) || l & r) && (o[s] = i0(l, t)) : u <= t && (e.expiredLanes |= l), i &= ~l
    }
}

function Wa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function ah() {
    var e = Xi;
    return Xi <<= 1, !(Xi & 4194240) && (Xi = 64), e
}

function Jl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Ri(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - _t(t), e[t] = n
}

function l0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - _t(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function Ju(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - _t(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var ne = 0;

function uh(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ch, ec, dh, fh, ph, Ka = !1,
    Zi = [],
    Dn = null,
    Fn = null,
    zn = null,
    li = new Map,
    ai = new Map,
    Pn = [],
    a0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ld(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Dn = null;
            break;
        case "dragenter":
        case "dragleave":
            Fn = null;
            break;
        case "mouseover":
        case "mouseout":
            zn = null;
            break;
        case "pointerover":
        case "pointerout":
            li.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ai.delete(t.pointerId)
    }
}

function Lo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = Mi(t), t !== null && ec(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function u0(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Dn = Lo(Dn, e, t, n, r, o), !0;
        case "dragenter":
            return Fn = Lo(Fn, e, t, n, r, o), !0;
        case "mouseover":
            return zn = Lo(zn, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return li.set(i, Lo(li.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, ai.set(i, Lo(ai.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function hh(e) {
    var t = ir(e.target);
    if (t !== null) {
        var n = br(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = nh(n), t !== null) {
                    e.blockedOn = t, ph(e.priority, function() {
                        dh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function xs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Qa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Ba = r, n.target.dispatchEvent(r), Ba = null
        } else return t = Mi(n), t !== null && ec(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Ad(e, t, n) {
    xs(e) && n.delete(t)
}

function c0() {
    Ka = !1, Dn !== null && xs(Dn) && (Dn = null), Fn !== null && xs(Fn) && (Fn = null), zn !== null && xs(zn) && (zn = null), li.forEach(Ad), ai.forEach(Ad)
}

function Ao(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ka || (Ka = !0, lt.unstable_scheduleCallback(lt.unstable_NormalPriority, c0)))
}

function ui(e) {
    function t(o) {
        return Ao(o, e)
    }
    if (0 < Zi.length) {
        Ao(Zi[0], e);
        for (var n = 1; n < Zi.length; n++) {
            var r = Zi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Dn !== null && Ao(Dn, e), Fn !== null && Ao(Fn, e), zn !== null && Ao(zn, e), li.forEach(t), ai.forEach(t), n = 0; n < Pn.length; n++) r = Pn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Pn.length && (n = Pn[0], n.blockedOn === null);) hh(n), n.blockedOn === null && Pn.shift()
}
var Xr = hn.ReactCurrentBatchConfig,
    $s = !0;

function d0(e, t, n, r) {
    var o = ne,
        i = Xr.transition;
    Xr.transition = null;
    try {
        ne = 1, tc(e, t, n, r)
    } finally {
        ne = o, Xr.transition = i
    }
}

function f0(e, t, n, r) {
    var o = ne,
        i = Xr.transition;
    Xr.transition = null;
    try {
        ne = 4, tc(e, t, n, r)
    } finally {
        ne = o, Xr.transition = i
    }
}

function tc(e, t, n, r) {
    if ($s) {
        var o = Qa(e, t, n, r);
        if (o === null) ua(e, t, r, Bs, n), Ld(e, r);
        else if (u0(o, e, t, n, r)) r.stopPropagation();
        else if (Ld(e, r), t & 4 && -1 < a0.indexOf(e)) {
            for (; o !== null;) {
                var i = Mi(o);
                if (i !== null && ch(i), i = Qa(e, t, n, r), i === null && ua(e, t, r, Bs, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else ua(e, t, r, null, n)
    }
}
var Bs = null;

function Qa(e, t, n, r) {
    if (Bs = null, e = qu(r), e = ir(e), e !== null)
        if (t = br(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = nh(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Bs = e, null
}

function mh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Jy()) {
                case Zu:
                    return 1;
                case sh:
                    return 4;
                case Fs:
                case e0:
                    return 16;
                case lh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var An = null,
    nc = null,
    ws = null;

function gh() {
    if (ws) return ws;
    var e, t = nc,
        n = t.length,
        r, o = "value" in An ? An.value : An.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return ws = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Ns(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ji() {
    return !0
}

function Id() {
    return !1
}

function ut(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ji : Id, this.isPropagationStopped = Id, this
    }
    return xe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ji)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ji)
        },
        persist: function() {},
        isPersistent: Ji
    }), t
}
var Co = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    rc = ut(Co),
    Ti = xe({}, Co, {
        view: 0,
        detail: 0
    }),
    p0 = ut(Ti),
    ea, ta, Io, gl = xe({}, Ti, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: oc,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Io && (Io && e.type === "mousemove" ? (ea = e.screenX - Io.screenX, ta = e.screenY - Io.screenY) : ta = ea = 0, Io = e), ea)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : ta
        }
    }),
    Dd = ut(gl),
    h0 = xe({}, gl, {
        dataTransfer: 0
    }),
    m0 = ut(h0),
    g0 = xe({}, Ti, {
        relatedTarget: 0
    }),
    na = ut(g0),
    v0 = xe({}, Co, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    y0 = ut(v0),
    x0 = xe({}, Co, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    w0 = ut(x0),
    N0 = xe({}, Co, {
        data: 0
    }),
    Fd = ut(N0),
    E0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    C0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    S0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function b0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = S0[e]) ? !!t[e] : !1
}

function oc() {
    return b0
}
var k0 = xe({}, Ti, {
        key: function(e) {
            if (e.key) {
                var t = E0[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Ns(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? C0[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: oc,
        charCode: function(e) {
            return e.type === "keypress" ? Ns(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ns(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    j0 = ut(k0),
    P0 = xe({}, gl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    zd = ut(P0),
    R0 = xe({}, Ti, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: oc
    }),
    T0 = ut(R0),
    M0 = xe({}, Co, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    _0 = ut(M0),
    O0 = xe({}, gl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    L0 = ut(O0),
    A0 = [9, 13, 27, 32],
    ic = ln && "CompositionEvent" in window,
    Yo = null;
ln && "documentMode" in document && (Yo = document.documentMode);
var I0 = ln && "TextEvent" in window && !Yo,
    vh = ln && (!ic || Yo && 8 < Yo && 11 >= Yo),
    $d = " ",
    Bd = !1;

function yh(e, t) {
    switch (e) {
        case "keyup":
            return A0.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function xh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Dr = !1;

function D0(e, t) {
    switch (e) {
        case "compositionend":
            return xh(t);
        case "keypress":
            return t.which !== 32 ? null : (Bd = !0, $d);
        case "textInput":
            return e = t.data, e === $d && Bd ? null : e;
        default:
            return null
    }
}

function F0(e, t) {
    if (Dr) return e === "compositionend" || !ic && yh(e, t) ? (e = gh(), ws = nc = An = null, Dr = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return vh && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var z0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Ud(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!z0[e.type] : t === "textarea"
}

function wh(e, t, n, r) {
    qp(r), t = Us(t, "onChange"), 0 < t.length && (n = new rc("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Xo = null,
    ci = null;

function $0(e) {
    Mh(e, 0)
}

function vl(e) {
    var t = $r(e);
    if (Hp(t)) return e
}

function B0(e, t) {
    if (e === "change") return t
}
var Nh = !1;
if (ln) {
    var ra;
    if (ln) {
        var oa = "oninput" in document;
        if (!oa) {
            var Vd = document.createElement("div");
            Vd.setAttribute("oninput", "return;"), oa = typeof Vd.oninput == "function"
        }
        ra = oa
    } else ra = !1;
    Nh = ra && (!document.documentMode || 9 < document.documentMode)
}

function Hd() {
    Xo && (Xo.detachEvent("onpropertychange", Eh), ci = Xo = null)
}

function Eh(e) {
    if (e.propertyName === "value" && vl(ci)) {
        var t = [];
        wh(t, ci, e, qu(e)), th($0, t)
    }
}

function U0(e, t, n) {
    e === "focusin" ? (Hd(), Xo = t, ci = n, Xo.attachEvent("onpropertychange", Eh)) : e === "focusout" && Hd()
}

function V0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return vl(ci)
}

function H0(e, t) {
    if (e === "click") return vl(t)
}

function W0(e, t) {
    if (e === "input" || e === "change") return vl(t)
}

function K0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Lt = typeof Object.is == "function" ? Object.is : K0;

function di(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ra.call(t, o) || !Lt(e[o], t[o])) return !1
    }
    return !0
}

function Wd(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Kd(e, t) {
    var n = Wd(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Wd(n)
    }
}

function Ch(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ch(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Sh() {
    for (var e = window, t = As(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = As(e.document)
    }
    return t
}

function sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Q0(e) {
    var t = Sh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ch(n.ownerDocument.documentElement, n)) {
        if (r !== null && sc(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Kd(n, i);
                var s = Kd(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var G0 = ln && "documentMode" in document && 11 >= document.documentMode,
    Fr = null,
    Ga = null,
    qo = null,
    Ya = !1;

function Qd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ya || Fr == null || Fr !== As(r) || (r = Fr, "selectionStart" in r && sc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), qo && di(qo, r) || (qo = r, r = Us(Ga, "onSelect"), 0 < r.length && (t = new rc("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Fr)))
}

function es(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var zr = {
        animationend: es("Animation", "AnimationEnd"),
        animationiteration: es("Animation", "AnimationIteration"),
        animationstart: es("Animation", "AnimationStart"),
        transitionend: es("Transition", "TransitionEnd")
    },
    ia = {},
    bh = {};
ln && (bh = document.createElement("div").style, "AnimationEvent" in window || (delete zr.animationend.animation, delete zr.animationiteration.animation, delete zr.animationstart.animation), "TransitionEvent" in window || delete zr.transitionend.transition);

function yl(e) {
    if (ia[e]) return ia[e];
    if (!zr[e]) return e;
    var t = zr[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in bh) return ia[e] = t[n];
    return e
}
var kh = yl("animationend"),
    jh = yl("animationiteration"),
    Ph = yl("animationstart"),
    Rh = yl("transitionend"),
    Th = new Map,
    Gd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Yn(e, t) {
    Th.set(e, t), Sr(t, [e])
}
for (var sa = 0; sa < Gd.length; sa++) {
    var la = Gd[sa],
        Y0 = la.toLowerCase(),
        X0 = la[0].toUpperCase() + la.slice(1);
    Yn(Y0, "on" + X0)
}
Yn(kh, "onAnimationEnd");
Yn(jh, "onAnimationIteration");
Yn(Ph, "onAnimationStart");
Yn("dblclick", "onDoubleClick");
Yn("focusin", "onFocus");
Yn("focusout", "onBlur");
Yn(Rh, "onTransitionEnd");
fo("onMouseEnter", ["mouseout", "mouseover"]);
fo("onMouseLeave", ["mouseout", "mouseover"]);
fo("onPointerEnter", ["pointerout", "pointerover"]);
fo("onPointerLeave", ["pointerout", "pointerover"]);
Sr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Sr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Sr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Sr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ko = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    q0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));

function Yd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Yy(r, t, void 0, e), e.currentTarget = null
}

function Mh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        u = l.instance,
                        c = l.currentTarget;
                    if (l = l.listener, u !== i && o.isPropagationStopped()) break e;
                    Yd(o, l, c), i = u
                } else
                    for (s = 0; s < r.length; s++) {
                        if (l = r[s], u = l.instance, c = l.currentTarget, l = l.listener, u !== i && o.isPropagationStopped()) break e;
                        Yd(o, l, c), i = u
                    }
        }
    }
    if (Ds) throw e = Ha, Ds = !1, Ha = null, e
}

function fe(e, t) {
    var n = t[eu];
    n === void 0 && (n = t[eu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (_h(t, e, 2, !1), n.add(r))
}

function aa(e, t, n) {
    var r = 0;
    t && (r |= 4), _h(n, e, r, t)
}
var ts = "_reactListening" + Math.random().toString(36).slice(2);

function fi(e) {
    if (!e[ts]) {
        e[ts] = !0, zp.forEach(function(n) {
            n !== "selectionchange" && (q0.has(n) || aa(n, !1, e), aa(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ts] || (t[ts] = !0, aa("selectionchange", !1, t))
    }
}

function _h(e, t, n, r) {
    switch (mh(t)) {
        case 1:
            var o = d0;
            break;
        case 4:
            o = f0;
            break;
        default:
            o = tc
    }
    n = o.bind(null, t, n, e), o = void 0, !Va || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function ua(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var u = s.tag;
                    if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = ir(l), s === null) return;
                if (u = s.tag, u === 5 || u === 6) {
                    r = i = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    th(function() {
        var c = i,
            d = qu(n),
            p = [];
        e: {
            var m = Th.get(e);
            if (m !== void 0) {
                var f = rc,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Ns(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        f = j0;
                        break;
                    case "focusin":
                        w = "focus", f = na;
                        break;
                    case "focusout":
                        w = "blur", f = na;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        f = na;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        f = Dd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        f = m0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        f = T0;
                        break;
                    case kh:
                    case jh:
                    case Ph:
                        f = y0;
                        break;
                    case Rh:
                        f = _0;
                        break;
                    case "scroll":
                        f = p0;
                        break;
                    case "wheel":
                        f = L0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        f = w0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        f = zd
                }
                var x = (t & 4) !== 0,
                    N = !x && e === "scroll",
                    v = x ? m !== null ? m + "Capture" : null : m;
                x = [];
                for (var g = c, y; g !== null;) {
                    y = g;
                    var E = y.stateNode;
                    if (y.tag === 5 && E !== null && (y = E, v !== null && (E = si(g, v), E != null && x.push(pi(g, E, y)))), N) break;
                    g = g.return
                }
                0 < x.length && (m = new f(m, w, null, n, d), p.push({
                    event: m,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", m && n !== Ba && (w = n.relatedTarget || n.fromElement) && (ir(w) || w[an])) break e;
                if ((f || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, f ? (w = n.relatedTarget || n.toElement, f = c, w = w ? ir(w) : null, w !== null && (N = br(w), w !== N || w.tag !== 5 && w.tag !== 6) && (w = null)) : (f = null, w = c), f !== w)) {
                    if (x = Dd, E = "onMouseLeave", v = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (x = zd, E = "onPointerLeave", v = "onPointerEnter", g = "pointer"), N = f == null ? m : $r(f), y = w == null ? m : $r(w), m = new x(E, g + "leave", f, n, d), m.target = N, m.relatedTarget = y, E = null, ir(d) === c && (x = new x(v, g + "enter", w, n, d), x.target = y, x.relatedTarget = N, E = x), N = E, f && w) t: {
                        for (x = f, v = w, g = 0, y = x; y; y = Lr(y)) g++;
                        for (y = 0, E = v; E; E = Lr(E)) y++;
                        for (; 0 < g - y;) x = Lr(x),
                        g--;
                        for (; 0 < y - g;) v = Lr(v),
                        y--;
                        for (; g--;) {
                            if (x === v || v !== null && x === v.alternate) break t;
                            x = Lr(x), v = Lr(v)
                        }
                        x = null
                    }
                    else x = null;
                    f !== null && Xd(p, m, f, x, !1), w !== null && N !== null && Xd(p, N, w, x, !0)
                }
            }
            e: {
                if (m = c ? $r(c) : window, f = m.nodeName && m.nodeName.toLowerCase(), f === "select" || f === "input" && m.type === "file") var C = B0;
                else if (Ud(m))
                    if (Nh) C = W0;
                    else {
                        C = V0;
                        var S = U0
                    }
                else(f = m.nodeName) && f.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = H0);
                if (C && (C = C(e, c))) {
                    wh(p, C, n, d);
                    break e
                }
                S && S(e, m, c),
                e === "focusout" && (S = m._wrapperState) && S.controlled && m.type === "number" && Ia(m, "number", m.value)
            }
            switch (S = c ? $r(c) : window, e) {
                case "focusin":
                    (Ud(S) || S.contentEditable === "true") && (Fr = S, Ga = c, qo = null);
                    break;
                case "focusout":
                    qo = Ga = Fr = null;
                    break;
                case "mousedown":
                    Ya = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ya = !1, Qd(p, n, d);
                    break;
                case "selectionchange":
                    if (G0) break;
                case "keydown":
                case "keyup":
                    Qd(p, n, d)
            }
            var b;
            if (ic) e: {
                switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                }
                R = void 0
            }
            else Dr ? yh(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");R && (vh && n.locale !== "ko" && (Dr || R !== "onCompositionStart" ? R === "onCompositionEnd" && Dr && (b = gh()) : (An = d, nc = "value" in An ? An.value : An.textContent, Dr = !0)), S = Us(c, R), 0 < S.length && (R = new Fd(R, e, null, n, d), p.push({
                event: R,
                listeners: S
            }), b ? R.data = b : (b = xh(n), b !== null && (R.data = b)))),
            (b = I0 ? D0(e, n) : F0(e, n)) && (c = Us(c, "onBeforeInput"), 0 < c.length && (d = new Fd("onBeforeInput", "beforeinput", null, n, d), p.push({
                event: d,
                listeners: c
            }), d.data = b))
        }
        Mh(p, t)
    })
}

function pi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Us(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = si(e, n), i != null && r.unshift(pi(e, i, o)), i = si(e, t), i != null && r.push(pi(e, i, o))), e = e.return
    }
    return r
}

function Lr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Xd(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var l = n,
            u = l.alternate,
            c = l.stateNode;
        if (u !== null && u === r) break;
        l.tag === 5 && c !== null && (l = c, o ? (u = si(n, i), u != null && s.unshift(pi(n, u, l))) : o || (u = si(n, i), u != null && s.push(pi(n, u, l)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Z0 = /\r\n?/g,
    J0 = /\u0000|\uFFFD/g;

function qd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Z0, `
`).replace(J0, "")
}

function ns(e, t, n) {
    if (t = qd(t), qd(e) !== t && n) throw Error(_(425))
}

function Vs() {}
var Xa = null,
    qa = null;

function Za(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ja = typeof setTimeout == "function" ? setTimeout : void 0,
    ex = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zd = typeof Promise == "function" ? Promise : void 0,
    tx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zd < "u" ? function(e) {
        return Zd.resolve(null).then(e).catch(nx)
    } : Ja;

function nx(e) {
    setTimeout(function() {
        throw e
    })
}

function ca(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), ui(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    ui(t)
}

function $n(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Jd(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var So = Math.random().toString(36).slice(2),
    Ut = "__reactFiber$" + So,
    hi = "__reactProps$" + So,
    an = "__reactContainer$" + So,
    eu = "__reactEvents$" + So,
    rx = "__reactListeners$" + So,
    ox = "__reactHandles$" + So;

function ir(e) {
    var t = e[Ut];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[an] || n[Ut]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Jd(e); e !== null;) {
                    if (n = e[Ut]) return n;
                    e = Jd(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Mi(e) {
    return e = e[Ut] || e[an], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function $r(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(_(33))
}

function xl(e) {
    return e[hi] || null
}
var tu = [],
    Br = -1;

function Xn(e) {
    return {
        current: e
    }
}

function pe(e) {
    0 > Br || (e.current = tu[Br], tu[Br] = null, Br--)
}

function ue(e, t) {
    Br++, tu[Br] = e.current, e.current = t
}
var Kn = {},
    $e = Xn(Kn),
    Je = Xn(!1),
    vr = Kn;

function po(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Kn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function et(e) {
    return e = e.childContextTypes, e != null
}

function Hs() {
    pe(Je), pe($e)
}

function ef(e, t, n) {
    if ($e.current !== Kn) throw Error(_(168));
    ue($e, t), ue(Je, n)
}

function Oh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(_(108, Uy(e) || "Unknown", o));
    return xe({}, n, r)
}

function Ws(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Kn, vr = $e.current, ue($e, e), ue(Je, Je.current), !0
}

function tf(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(_(169));
    n ? (e = Oh(e, t, vr), r.__reactInternalMemoizedMergedChildContext = e, pe(Je), pe($e), ue($e, e)) : pe(Je), ue(Je, n)
}
var en = null,
    wl = !1,
    da = !1;

function Lh(e) {
    en === null ? en = [e] : en.push(e)
}

function ix(e) {
    wl = !0, Lh(e)
}

function qn() {
    if (!da && en !== null) {
        da = !0;
        var e = 0,
            t = ne;
        try {
            var n = en;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            en = null, wl = !1
        } catch (o) {
            throw en !== null && (en = en.slice(e + 1)), ih(Zu, qn), o
        } finally {
            ne = t, da = !1
        }
    }
    return null
}
var Ur = [],
    Vr = 0,
    Ks = null,
    Qs = 0,
    ft = [],
    pt = 0,
    yr = null,
    nn = 1,
    rn = "";

function nr(e, t) {
    Ur[Vr++] = Qs, Ur[Vr++] = Ks, Ks = e, Qs = t
}

function Ah(e, t, n) {
    ft[pt++] = nn, ft[pt++] = rn, ft[pt++] = yr, yr = e;
    var r = nn;
    e = rn;
    var o = 32 - _t(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - _t(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, nn = 1 << 32 - _t(t) + o | n << o | r, rn = i + e
    } else nn = 1 << i | n << o | r, rn = e
}

function lc(e) {
    e.return !== null && (nr(e, 1), Ah(e, 1, 0))
}

function ac(e) {
    for (; e === Ks;) Ks = Ur[--Vr], Ur[Vr] = null, Qs = Ur[--Vr], Ur[Vr] = null;
    for (; e === yr;) yr = ft[--pt], ft[pt] = null, rn = ft[--pt], ft[pt] = null, nn = ft[--pt], ft[pt] = null
}
var it = null,
    ot = null,
    me = !1,
    Tt = null;

function Ih(e, t) {
    var n = ht(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function nf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, ot = $n(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, ot = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yr !== null ? {
                id: nn,
                overflow: rn
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = ht(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, it = e, ot = null, !0) : !1;
        default:
            return !1
    }
}

function nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ru(e) {
    if (me) {
        var t = ot;
        if (t) {
            var n = t;
            if (!nf(e, t)) {
                if (nu(e)) throw Error(_(418));
                t = $n(n.nextSibling);
                var r = it;
                t && nf(e, t) ? Ih(r, n) : (e.flags = e.flags & -4097 | 2, me = !1, it = e)
            }
        } else {
            if (nu(e)) throw Error(_(418));
            e.flags = e.flags & -4097 | 2, me = !1, it = e
        }
    }
}

function rf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    it = e
}

function rs(e) {
    if (e !== it) return !1;
    if (!me) return rf(e), me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Za(e.type, e.memoizedProps)), t && (t = ot)) {
        if (nu(e)) throw Dh(), Error(_(418));
        for (; t;) Ih(e, t), t = $n(t.nextSibling)
    }
    if (rf(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(_(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ot = $n(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ot = null
        }
    } else ot = it ? $n(e.stateNode.nextSibling) : null;
    return !0
}

function Dh() {
    for (var e = ot; e;) e = $n(e.nextSibling)
}

function ho() {
    ot = it = null, me = !1
}

function uc(e) {
    Tt === null ? Tt = [e] : Tt.push(e)
}
var sx = hn.ReactCurrentBatchConfig;

function Do(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(_(309));
                var r = n.stateNode
            }
            if (!r) throw Error(_(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(_(284));
        if (!n._owner) throw Error(_(290, e))
    }
    return e
}

function os(e, t) {
    throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function of (e) {
    var t = e._init;
    return t(e._payload)
}

function Fh(e) {
    function t(v, g) {
        if (e) {
            var y = v.deletions;
            y === null ? (v.deletions = [g], v.flags |= 16) : y.push(g)
        }
    }

    function n(v, g) {
        if (!e) return null;
        for (; g !== null;) t(v, g), g = g.sibling;
        return null
    }

    function r(v, g) {
        for (v = new Map; g !== null;) g.key !== null ? v.set(g.key, g) : v.set(g.index, g), g = g.sibling;
        return v
    }

    function o(v, g) {
        return v = Hn(v, g), v.index = 0, v.sibling = null, v
    }

    function i(v, g, y) {
        return v.index = y, e ? (y = v.alternate, y !== null ? (y = y.index, y < g ? (v.flags |= 2, g) : y) : (v.flags |= 2, g)) : (v.flags |= 1048576, g)
    }

    function s(v) {
        return e && v.alternate === null && (v.flags |= 2), v
    }

    function l(v, g, y, E) {
        return g === null || g.tag !== 6 ? (g = ya(y, v.mode, E), g.return = v, g) : (g = o(g, y), g.return = v, g)
    }

    function u(v, g, y, E) {
        var C = y.type;
        return C === Ir ? d(v, g, y.props.children, E, y.key) : g !== null && (g.elementType === C || typeof C == "object" && C !== null && C.$$typeof === kn && of (C) === g.type) ? (E = o(g, y.props), E.ref = Do(v, g, y), E.return = v, E) : (E = Ps(y.type, y.key, y.props, null, v.mode, E), E.ref = Do(v, g, y), E.return = v, E)
    }

    function c(v, g, y, E) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== y.containerInfo || g.stateNode.implementation !== y.implementation ? (g = xa(y, v.mode, E), g.return = v, g) : (g = o(g, y.children || []), g.return = v, g)
    }

    function d(v, g, y, E, C) {
        return g === null || g.tag !== 7 ? (g = mr(y, v.mode, E, C), g.return = v, g) : (g = o(g, y), g.return = v, g)
    }

    function p(v, g, y) {
        if (typeof g == "string" && g !== "" || typeof g == "number") return g = ya("" + g, v.mode, y), g.return = v, g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Qi:
                    return y = Ps(g.type, g.key, g.props, null, v.mode, y), y.ref = Do(v, null, g), y.return = v, y;
                case Ar:
                    return g = xa(g, v.mode, y), g.return = v, g;
                case kn:
                    var E = g._init;
                    return p(v, E(g._payload), y)
            }
            if (Ho(g) || _o(g)) return g = mr(g, v.mode, y, null), g.return = v, g;
            os(v, g)
        }
        return null
    }

    function m(v, g, y, E) {
        var C = g !== null ? g.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number") return C !== null ? null : l(v, g, "" + y, E);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Qi:
                    return y.key === C ? u(v, g, y, E) : null;
                case Ar:
                    return y.key === C ? c(v, g, y, E) : null;
                case kn:
                    return C = y._init, m(v, g, C(y._payload), E)
            }
            if (Ho(y) || _o(y)) return C !== null ? null : d(v, g, y, E, null);
            os(v, y)
        }
        return null
    }

    function f(v, g, y, E, C) {
        if (typeof E == "string" && E !== "" || typeof E == "number") return v = v.get(y) || null, l(g, v, "" + E, C);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case Qi:
                    return v = v.get(E.key === null ? y : E.key) || null, u(g, v, E, C);
                case Ar:
                    return v = v.get(E.key === null ? y : E.key) || null, c(g, v, E, C);
                case kn:
                    var S = E._init;
                    return f(v, g, y, S(E._payload), C)
            }
            if (Ho(E) || _o(E)) return v = v.get(y) || null, d(g, v, E, C, null);
            os(g, E)
        }
        return null
    }

    function w(v, g, y, E) {
        for (var C = null, S = null, b = g, R = g = 0, P = null; b !== null && R < y.length; R++) {
            b.index > R ? (P = b, b = null) : P = b.sibling;
            var M = m(v, b, y[R], E);
            if (M === null) {
                b === null && (b = P);
                break
            }
            e && b && M.alternate === null && t(v, b), g = i(M, g, R), S === null ? C = M : S.sibling = M, S = M, b = P
        }
        if (R === y.length) return n(v, b), me && nr(v, R), C;
        if (b === null) {
            for (; R < y.length; R++) b = p(v, y[R], E), b !== null && (g = i(b, g, R), S === null ? C = b : S.sibling = b, S = b);
            return me && nr(v, R), C
        }
        for (b = r(v, b); R < y.length; R++) P = f(b, v, R, y[R], E), P !== null && (e && P.alternate !== null && b.delete(P.key === null ? R : P.key), g = i(P, g, R), S === null ? C = P : S.sibling = P, S = P);
        return e && b.forEach(function(F) {
            return t(v, F)
        }), me && nr(v, R), C
    }

    function x(v, g, y, E) {
        var C = _o(y);
        if (typeof C != "function") throw Error(_(150));
        if (y = C.call(y), y == null) throw Error(_(151));
        for (var S = C = null, b = g, R = g = 0, P = null, M = y.next(); b !== null && !M.done; R++, M = y.next()) {
            b.index > R ? (P = b, b = null) : P = b.sibling;
            var F = m(v, b, M.value, E);
            if (F === null) {
                b === null && (b = P);
                break
            }
            e && b && F.alternate === null && t(v, b), g = i(F, g, R), S === null ? C = F : S.sibling = F, S = F, b = P
        }
        if (M.done) return n(v, b), me && nr(v, R), C;
        if (b === null) {
            for (; !M.done; R++, M = y.next()) M = p(v, M.value, E), M !== null && (g = i(M, g, R), S === null ? C = M : S.sibling = M, S = M);
            return me && nr(v, R), C
        }
        for (b = r(v, b); !M.done; R++, M = y.next()) M = f(b, v, R, M.value, E), M !== null && (e && M.alternate !== null && b.delete(M.key === null ? R : M.key), g = i(M, g, R), S === null ? C = M : S.sibling = M, S = M);
        return e && b.forEach(function(I) {
            return t(v, I)
        }), me && nr(v, R), C
    }

    function N(v, g, y, E) {
        if (typeof y == "object" && y !== null && y.type === Ir && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Qi:
                    e: {
                        for (var C = y.key, S = g; S !== null;) {
                            if (S.key === C) {
                                if (C = y.type, C === Ir) {
                                    if (S.tag === 7) {
                                        n(v, S.sibling), g = o(S, y.props.children), g.return = v, v = g;
                                        break e
                                    }
                                } else if (S.elementType === C || typeof C == "object" && C !== null && C.$$typeof === kn && of (C) === S.type) {
                                    n(v, S.sibling), g = o(S, y.props), g.ref = Do(v, S, y), g.return = v, v = g;
                                    break e
                                }
                                n(v, S);
                                break
                            } else t(v, S);
                            S = S.sibling
                        }
                        y.type === Ir ? (g = mr(y.props.children, v.mode, E, y.key), g.return = v, v = g) : (E = Ps(y.type, y.key, y.props, null, v.mode, E), E.ref = Do(v, g, y), E.return = v, v = E)
                    }
                    return s(v);
                case Ar:
                    e: {
                        for (S = y.key; g !== null;) {
                            if (g.key === S)
                                if (g.tag === 4 && g.stateNode.containerInfo === y.containerInfo && g.stateNode.implementation === y.implementation) {
                                    n(v, g.sibling), g = o(g, y.children || []), g.return = v, v = g;
                                    break e
                                } else {
                                    n(v, g);
                                    break
                                }
                            else t(v, g);
                            g = g.sibling
                        }
                        g = xa(y, v.mode, E),
                        g.return = v,
                        v = g
                    }
                    return s(v);
                case kn:
                    return S = y._init, N(v, g, S(y._payload), E)
            }
            if (Ho(y)) return w(v, g, y, E);
            if (_o(y)) return x(v, g, y, E);
            os(v, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, g !== null && g.tag === 6 ? (n(v, g.sibling), g = o(g, y), g.return = v, v = g) : (n(v, g), g = ya(y, v.mode, E), g.return = v, v = g), s(v)) : n(v, g)
    }
    return N
}
var mo = Fh(!0),
    zh = Fh(!1),
    Gs = Xn(null),
    Ys = null,
    Hr = null,
    cc = null;

function dc() {
    cc = Hr = Ys = null
}

function fc(e) {
    var t = Gs.current;
    pe(Gs), e._currentValue = t
}

function ou(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function qr(e, t) {
    Ys = e, cc = Hr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), e.firstContext = null)
}

function gt(e) {
    var t = e._currentValue;
    if (cc !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Hr === null) {
            if (Ys === null) throw Error(_(308));
            Hr = e, Ys.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Hr = Hr.next = e;
    return t
}
var sr = null;

function pc(e) {
    sr === null ? sr = [e] : sr.push(e)
}

function $h(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, pc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, un(e, r)
}

function un(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var jn = !1;

function hc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Bh(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function on(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Bn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Z & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, un(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, pc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, un(e, n)
}

function Es(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ju(e, n)
    }
}

function sf(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Xs(e, t, n, r) {
    var o = e.updateQueue;
    jn = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var u = l,
            c = u.next;
        u.next = null, s === null ? i = c : s.next = c, s = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = c : l.next = c, d.lastBaseUpdate = u))
    }
    if (i !== null) {
        var p = o.baseState;
        s = 0, d = c = u = null, l = i;
        do {
            var m = l.lane,
                f = l.eventTime;
            if ((r & m) === m) {
                d !== null && (d = d.next = {
                    eventTime: f,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var w = e,
                        x = l;
                    switch (m = t, f = n, x.tag) {
                        case 1:
                            if (w = x.payload, typeof w == "function") {
                                p = w.call(f, p, m);
                                break e
                            }
                            p = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = x.payload, m = typeof w == "function" ? w.call(f, p, m) : w, m == null) break e;
                            p = xe({}, p, m);
                            break e;
                        case 2:
                            jn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [l] : m.push(l))
            } else f = {
                eventTime: f,
                lane: m,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, d === null ? (c = d = f, u = p) : d = d.next = f, s |= m;
            if (l = l.next, l === null) {
                if (l = o.shared.pending, l === null) break;
                m = l, l = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = p), o.baseState = u, o.firstBaseUpdate = c, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        wr |= s, e.lanes = s, e.memoizedState = p
    }
}

function lf(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(_(191, o));
                o.call(r)
            }
        }
}
var _i = {},
    Wt = Xn(_i),
    mi = Xn(_i),
    gi = Xn(_i);

function lr(e) {
    if (e === _i) throw Error(_(174));
    return e
}

function mc(e, t) {
    switch (ue(gi, t), ue(mi, e), ue(Wt, _i), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Fa(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fa(t, e)
    }
    pe(Wt), ue(Wt, t)
}

function go() {
    pe(Wt), pe(mi), pe(gi)
}

function Uh(e) {
    lr(gi.current);
    var t = lr(Wt.current),
        n = Fa(t, e.type);
    t !== n && (ue(mi, e), ue(Wt, n))
}

function gc(e) {
    mi.current === e && (pe(Wt), pe(mi))
}
var ge = Xn(0);

function qs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var fa = [];

function vc() {
    for (var e = 0; e < fa.length; e++) fa[e]._workInProgressVersionPrimary = null;
    fa.length = 0
}
var Cs = hn.ReactCurrentDispatcher,
    pa = hn.ReactCurrentBatchConfig,
    xr = 0,
    ve = null,
    ke = null,
    Pe = null,
    Zs = !1,
    Zo = !1,
    vi = 0,
    lx = 0;

function Ie() {
    throw Error(_(321))
}

function yc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Lt(e[n], t[n])) return !1;
    return !0
}

function xc(e, t, n, r, o, i) {
    if (xr = i, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Cs.current = e === null || e.memoizedState === null ? dx : fx, e = n(r, o), Zo) {
        i = 0;
        do {
            if (Zo = !1, vi = 0, 25 <= i) throw Error(_(301));
            i += 1, Pe = ke = null, t.updateQueue = null, Cs.current = px, e = n(r, o)
        } while (Zo)
    }
    if (Cs.current = Js, t = ke !== null && ke.next !== null, xr = 0, Pe = ke = ve = null, Zs = !1, t) throw Error(_(300));
    return e
}

function wc() {
    var e = vi !== 0;
    return vi = 0, e
}

function Ft() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Pe === null ? ve.memoizedState = Pe = e : Pe = Pe.next = e, Pe
}

function vt() {
    if (ke === null) {
        var e = ve.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ke.next;
    var t = Pe === null ? ve.memoizedState : Pe.next;
    if (t !== null) Pe = t, ke = e;
    else {
        if (e === null) throw Error(_(310));
        ke = e, e = {
            memoizedState: ke.memoizedState,
            baseState: ke.baseState,
            baseQueue: ke.baseQueue,
            queue: ke.queue,
            next: null
        }, Pe === null ? ve.memoizedState = Pe = e : Pe = Pe.next = e
    }
    return Pe
}

function yi(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ha(e) {
    var t = vt(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = ke,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var l = s = null,
            u = null,
            c = i;
        do {
            var d = c.lane;
            if ((xr & d) === d) u !== null && (u = u.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var p = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (l = u = p, s = r) : u = u.next = p, ve.lanes |= d, wr |= d
            }
            c = c.next
        } while (c !== null && c !== i);
        u === null ? s = r : u.next = l, Lt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, ve.lanes |= i, wr |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function ma(e) {
    var t = vt(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        Lt(i, t.memoizedState) || (Ze = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Vh() {}

function Hh(e, t) {
    var n = ve,
        r = vt(),
        o = t(),
        i = !Lt(r.memoizedState, o);
    if (i && (r.memoizedState = o, Ze = !0), r = r.queue, Nc(Qh.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Pe !== null && Pe.memoizedState.tag & 1) {
        if (n.flags |= 2048, xi(9, Kh.bind(null, n, r, o, t), void 0, null), Re === null) throw Error(_(349));
        xr & 30 || Wh(n, t, o)
    }
    return o
}

function Wh(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ve.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Kh(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Gh(t) && Yh(e)
}

function Qh(e, t, n) {
    return n(function() {
        Gh(t) && Yh(e)
    })
}

function Gh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Lt(e, n)
    } catch {
        return !0
    }
}

function Yh(e) {
    var t = un(e, 1);
    t !== null && Ot(t, e, 1, -1)
}

function af(e) {
    var t = Ft();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yi,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = cx.bind(null, ve, e), [t.memoizedState, e]
}

function xi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ve.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Xh() {
    return vt().memoizedState
}

function Ss(e, t, n, r) {
    var o = Ft();
    ve.flags |= e, o.memoizedState = xi(1 | t, n, void 0, r === void 0 ? null : r)
}

function Nl(e, t, n, r) {
    var o = vt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ke !== null) {
        var s = ke.memoizedState;
        if (i = s.destroy, r !== null && yc(r, s.deps)) {
            o.memoizedState = xi(t, n, i, r);
            return
        }
    }
    ve.flags |= e, o.memoizedState = xi(1 | t, n, i, r)
}

function uf(e, t) {
    return Ss(8390656, 8, e, t)
}

function Nc(e, t) {
    return Nl(2048, 8, e, t)
}

function qh(e, t) {
    return Nl(4, 2, e, t)
}

function Zh(e, t) {
    return Nl(4, 4, e, t)
}

function Jh(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function em(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Nl(4, 4, Jh.bind(null, t, e), n)
}

function Ec() {}

function tm(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function nm(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function rm(e, t, n) {
    return xr & 21 ? (Lt(n, t) || (n = ah(), ve.lanes |= n, wr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n)
}

function ax(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = pa.transition;
    pa.transition = {};
    try {
        e(!1), t()
    } finally {
        ne = n, pa.transition = r
    }
}

function om() {
    return vt().memoizedState
}

function ux(e, t, n) {
    var r = Vn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, im(e)) sm(t, n);
    else if (n = $h(e, t, n, r), n !== null) {
        var o = Qe();
        Ot(n, e, r, o), lm(n, t, r)
    }
}

function cx(e, t, n) {
    var r = Vn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (im(e)) sm(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                l = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = l, Lt(l, s)) {
                var u = t.interleaved;
                u === null ? (o.next = o, pc(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = $h(e, t, o, r), n !== null && (o = Qe(), Ot(n, e, r, o), lm(n, t, r))
    }
}

function im(e) {
    var t = e.alternate;
    return e === ve || t !== null && t === ve
}

function sm(e, t) {
    Zo = Zs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function lm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ju(e, n)
    }
}
var Js = {
        readContext: gt,
        useCallback: Ie,
        useContext: Ie,
        useEffect: Ie,
        useImperativeHandle: Ie,
        useInsertionEffect: Ie,
        useLayoutEffect: Ie,
        useMemo: Ie,
        useReducer: Ie,
        useRef: Ie,
        useState: Ie,
        useDebugValue: Ie,
        useDeferredValue: Ie,
        useTransition: Ie,
        useMutableSource: Ie,
        useSyncExternalStore: Ie,
        useId: Ie,
        unstable_isNewReconciler: !1
    },
    dx = {
        readContext: gt,
        useCallback: function(e, t) {
            return Ft().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: gt,
        useEffect: uf,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ss(4194308, 4, Jh.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ss(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ss(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Ft();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Ft();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = ux.bind(null, ve, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ft();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: af,
        useDebugValue: Ec,
        useDeferredValue: function(e) {
            return Ft().memoizedState = e
        },
        useTransition: function() {
            var e = af(!1),
                t = e[0];
            return e = ax.bind(null, e[1]), Ft().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ve,
                o = Ft();
            if (me) {
                if (n === void 0) throw Error(_(407));
                n = n()
            } else {
                if (n = t(), Re === null) throw Error(_(349));
                xr & 30 || Wh(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, uf(Qh.bind(null, r, i, e), [e]), r.flags |= 2048, xi(9, Kh.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Ft(),
                t = Re.identifierPrefix;
            if (me) {
                var n = rn,
                    r = nn;
                n = (r & ~(1 << 32 - _t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = vi++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = lx++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    fx = {
        readContext: gt,
        useCallback: tm,
        useContext: gt,
        useEffect: Nc,
        useImperativeHandle: em,
        useInsertionEffect: qh,
        useLayoutEffect: Zh,
        useMemo: nm,
        useReducer: ha,
        useRef: Xh,
        useState: function() {
            return ha(yi)
        },
        useDebugValue: Ec,
        useDeferredValue: function(e) {
            var t = vt();
            return rm(t, ke.memoizedState, e)
        },
        useTransition: function() {
            var e = ha(yi)[0],
                t = vt().memoizedState;
            return [e, t]
        },
        useMutableSource: Vh,
        useSyncExternalStore: Hh,
        useId: om,
        unstable_isNewReconciler: !1
    },
    px = {
        readContext: gt,
        useCallback: tm,
        useContext: gt,
        useEffect: Nc,
        useImperativeHandle: em,
        useInsertionEffect: qh,
        useLayoutEffect: Zh,
        useMemo: nm,
        useReducer: ma,
        useRef: Xh,
        useState: function() {
            return ma(yi)
        },
        useDebugValue: Ec,
        useDeferredValue: function(e) {
            var t = vt();
            return ke === null ? t.memoizedState = e : rm(t, ke.memoizedState, e)
        },
        useTransition: function() {
            var e = ma(yi)[0],
                t = vt().memoizedState;
            return [e, t]
        },
        useMutableSource: Vh,
        useSyncExternalStore: Hh,
        useId: om,
        unstable_isNewReconciler: !1
    };

function bt(e, t) {
    if (e && e.defaultProps) {
        t = xe({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function iu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : xe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var El = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? br(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Qe(),
            o = Vn(e),
            i = on(r, o);
        i.payload = t, n != null && (i.callback = n), t = Bn(e, i, o), t !== null && (Ot(t, e, o, r), Es(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Qe(),
            o = Vn(e),
            i = on(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Bn(e, i, o), t !== null && (Ot(t, e, o, r), Es(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Qe(),
            r = Vn(e),
            o = on(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Bn(e, o, r), t !== null && (Ot(t, e, r, n), Es(t, e, r))
    }
};

function cf(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !di(n, r) || !di(o, i) : !0
}

function am(e, t, n) {
    var r = !1,
        o = Kn,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = gt(i) : (o = et(t) ? vr : $e.current, r = t.contextTypes, i = (r = r != null) ? po(e, o) : Kn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = El, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function df(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && El.enqueueReplaceState(t, t.state, null)
}

function su(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, hc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = gt(i) : (i = et(t) ? vr : $e.current, o.context = po(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (iu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && El.enqueueReplaceState(o, o.state, null), Xs(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function vo(e, t) {
    try {
        var n = "",
            r = t;
        do n += By(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function ga(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function lu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var hx = typeof WeakMap == "function" ? WeakMap : Map;

function um(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        tl || (tl = !0, vu = r), lu(e, t)
    }, n
}

function cm(e, t, n) {
    n = on(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            lu(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        lu(e, t), typeof r != "function" && (Un === null ? Un = new Set([this]) : Un.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function ff(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new hx;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Px.bind(null, e, t, n), t.then(e, e))
}

function pf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function hf(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, Bn(n, t, 1))), n.lanes |= 1), e)
}
var mx = hn.ReactCurrentOwner,
    Ze = !1;

function Ve(e, t, n, r) {
    t.child = e === null ? zh(t, null, n, r) : mo(t, e.child, n, r)
}

function mf(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return qr(t, o), r = xc(e, t, n, r, i, o), n = wc(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, cn(e, t, o)) : (me && n && lc(t), t.flags |= 1, Ve(e, t, r, o), t.child)
}

function gf(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Tc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, dm(e, t, i, r, o)) : (e = Ps(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : di, n(s, r) && e.ref === t.ref) return cn(e, t, o)
    }
    return t.flags |= 1, e = Hn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function dm(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (di(i, r) && e.ref === t.ref)
            if (Ze = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Ze = !0);
            else return t.lanes = e.lanes, cn(e, t, o)
    }
    return au(e, t, n, r, o)
}

function fm(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ue(Kr, nt), nt |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ue(Kr, nt), nt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, ue(Kr, nt), nt |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ue(Kr, nt), nt |= r;
    return Ve(e, t, o, n), t.child
}

function pm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function au(e, t, n, r, o) {
    var i = et(n) ? vr : $e.current;
    return i = po(t, i), qr(t, o), n = xc(e, t, n, r, i, o), r = wc(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, cn(e, t, o)) : (me && r && lc(t), t.flags |= 1, Ve(e, t, n, o), t.child)
}

function vf(e, t, n, r, o) {
    if (et(n)) {
        var i = !0;
        Ws(t)
    } else i = !1;
    if (qr(t, o), t.stateNode === null) bs(e, t), am(t, n, r), su(t, n, r, o), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var u = s.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = gt(c) : (c = et(n) ? vr : $e.current, c = po(t, c));
        var d = n.getDerivedStateFromProps,
            p = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || u !== c) && df(t, s, r, c), jn = !1;
        var m = t.memoizedState;
        s.state = m, Xs(t, r, s, o), u = t.memoizedState, l !== r || m !== u || Je.current || jn ? (typeof d == "function" && (iu(t, n, d, r), u = t.memoizedState), (l = jn || cf(t, n, l, r, m, u, c)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, Bh(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : bt(t.type, l), s.props = c, p = t.pendingProps, m = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = gt(u) : (u = et(n) ? vr : $e.current, u = po(t, u));
        var f = n.getDerivedStateFromProps;
        (d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || m !== u) && df(t, s, r, u), jn = !1, m = t.memoizedState, s.state = m, Xs(t, r, s, o);
        var w = t.memoizedState;
        l !== p || m !== w || Je.current || jn ? (typeof f == "function" && (iu(t, n, f, r), w = t.memoizedState), (c = jn || cf(t, n, c, r, m, w, u) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = u, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return uu(e, t, n, r, i, o)
}

function uu(e, t, n, r, o, i) {
    pm(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && tf(t, n, !1), cn(e, t, i);
    r = t.stateNode, mx.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = mo(t, e.child, null, i), t.child = mo(t, null, l, i)) : Ve(e, t, l, i), t.memoizedState = r.state, o && tf(t, n, !0), t.child
}

function hm(e) {
    var t = e.stateNode;
    t.pendingContext ? ef(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ef(e, t.context, !1), mc(e, t.containerInfo)
}

function yf(e, t, n, r, o) {
    return ho(), uc(o), t.flags |= 256, Ve(e, t, n, r), t.child
}
var cu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function du(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function mm(e, t, n) {
    var r = t.pendingProps,
        o = ge.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ue(ge, o & 1), e === null) return ru(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = bl(s, r, 0, null), e = mr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = du(n), t.memoizedState = cu, e) : Cc(t, s));
    if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return gx(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Hn(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Hn(l, i) : (i = mr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? du(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = cu, r
    }
    return i = e.child, e = i.sibling, r = Hn(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Cc(e, t) {
    return t = bl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function is(e, t, n, r) {
    return r !== null && uc(r), mo(t, e.child, null, n), e = Cc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function gx(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = ga(Error(_(422))), is(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = bl({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = mr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && mo(t, e.child, null, s), t.child.memoizedState = du(s), t.memoizedState = cu, i);
    if (!(t.mode & 1)) return is(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
        return r = l, i = Error(_(419)), r = ga(i, r, void 0), is(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, Ze || l) {
        if (r = Re, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, un(e, o), Ot(r, e, o, -1))
        }
        return Rc(), r = ga(Error(_(421))), is(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Rx.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, ot = $n(o.nextSibling), it = t, me = !0, Tt = null, e !== null && (ft[pt++] = nn, ft[pt++] = rn, ft[pt++] = yr, nn = e.id, rn = e.overflow, yr = t), t = Cc(t, r.children), t.flags |= 4096, t)
}

function xf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ou(e.return, t, n)
}

function va(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function gm(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (Ve(e, t, r.children, n), r = ge.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && xf(e, n, t);
            else if (e.tag === 19) xf(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ue(ge, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && qs(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), va(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && qs(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            va(t, !0, n, null, i);
            break;
        case "together":
            va(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function bs(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function cn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), wr |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child, n = Hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Hn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function vx(e, t, n) {
    switch (t.tag) {
        case 3:
            hm(t), ho();
            break;
        case 5:
            Uh(t);
            break;
        case 1:
            et(t.type) && Ws(t);
            break;
        case 4:
            mc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            ue(Gs, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ue(ge, ge.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? mm(e, t, n) : (ue(ge, ge.current & 1), e = cn(e, t, n), e !== null ? e.sibling : null);
            ue(ge, ge.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return gm(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ue(ge, ge.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, fm(e, t, n)
    }
    return cn(e, t, n)
}
var vm, fu, ym, xm;
vm = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
fu = function() {};
ym = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, lr(Wt.current);
        var i = null;
        switch (n) {
            case "input":
                o = La(e, o), r = La(e, r), i = [];
                break;
            case "select":
                o = xe({}, o, {
                    value: void 0
                }), r = xe({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = Da(e, o), r = Da(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vs)
        }
        za(n, r);
        var s;
        n = null;
        for (c in o)
            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
                if (c === "style") {
                    var l = o[c];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (oi.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (l = o != null ? o[c] : void 0, r.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in u) u.hasOwnProperty(s) && l[s] !== u[s] && (n || (n = {}), n[s] = u[s])
                    } else n || (i || (i = []), i.push(c, n)), n = u;
            else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (oi.hasOwnProperty(c) ? (u != null && c === "onScroll" && fe("scroll", e), i || l === u || (i = [])) : (i = i || []).push(c, u))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
xm = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Fo(e, t) {
    if (!me) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function yx(e, t, n) {
    var r = t.pendingProps;
    switch (ac(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return De(t), null;
        case 1:
            return et(t.type) && Hs(), De(t), null;
        case 3:
            return r = t.stateNode, go(), pe(Je), pe($e), vc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (rs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Tt !== null && (wu(Tt), Tt = null))), fu(e, t), De(t), null;
        case 5:
            gc(t);
            var o = lr(gi.current);
            if (n = t.type, e !== null && t.stateNode != null) ym(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(_(166));
                    return De(t), null
                }
                if (e = lr(Wt.current), rs(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Ut] = t, r[hi] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            fe("cancel", r), fe("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            fe("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Ko.length; o++) fe(Ko[o], r);
                            break;
                        case "source":
                            fe("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            fe("error", r), fe("load", r);
                            break;
                        case "details":
                            fe("toggle", r);
                            break;
                        case "input":
                            jd(r, i), fe("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, fe("invalid", r);
                            break;
                        case "textarea":
                            Rd(r, i), fe("invalid", r)
                    }
                    za(n, i), o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var l = i[s];
                            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && ns(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && ns(r.textContent, l, e), o = ["children", "" + l]) : oi.hasOwnProperty(s) && l != null && s === "onScroll" && fe("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Gi(r), Pd(r, i, !0);
                            break;
                        case "textarea":
                            Gi(r), Td(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Vs)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ut] = t, e[hi] = r, vm(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = $a(n, r), n) {
                            case "dialog":
                                fe("cancel", e), fe("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                fe("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Ko.length; o++) fe(Ko[o], e);
                                o = r;
                                break;
                            case "source":
                                fe("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                fe("error", e), fe("load", e), o = r;
                                break;
                            case "details":
                                fe("toggle", e), o = r;
                                break;
                            case "input":
                                jd(e, r), o = La(e, r), fe("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = xe({}, r, {
                                    value: void 0
                                }), fe("invalid", e);
                                break;
                            case "textarea":
                                Rd(e, r), o = Da(e, r), fe("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        za(n, o),
                        l = o;
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                var u = l[i];
                                i === "style" ? Xp(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Gp(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ii(e, u) : typeof u == "number" && ii(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (oi.hasOwnProperty(i) ? u != null && i === "onScroll" && fe("scroll", e) : u != null && Qu(e, i, u, s))
                            }
                        switch (n) {
                            case "input":
                                Gi(e), Pd(e, r, !1);
                                break;
                            case "textarea":
                                Gi(e), Td(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Wn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Qr(e, !!r.multiple, i, !1) : r.defaultValue != null && Qr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Vs)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return De(t), null;
        case 6:
            if (e && t.stateNode != null) xm(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
                if (n = lr(gi.current), lr(Wt.current), rs(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ut] = t, (i = r.nodeValue !== n) && (e = it, e !== null)) switch (e.tag) {
                        case 3:
                            ns(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ns(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ut] = t, t.stateNode = r
            }
            return De(t), null;
        case 13:
            if (pe(ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (me && ot !== null && t.mode & 1 && !(t.flags & 128)) Dh(), ho(), t.flags |= 98560, i = !1;
                else if (i = rs(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(_(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(_(317));
                        i[Ut] = t
                    } else ho(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    De(t), i = !1
                } else Tt !== null && (wu(Tt), Tt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ge.current & 1 ? je === 0 && (je = 3) : Rc())), t.updateQueue !== null && (t.flags |= 4), De(t), null);
        case 4:
            return go(), fu(e, t), e === null && fi(t.stateNode.containerInfo), De(t), null;
        case 10:
            return fc(t.type._context), De(t), null;
        case 17:
            return et(t.type) && Hs(), De(t), null;
        case 19:
            if (pe(ge), i = t.memoizedState, i === null) return De(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) Fo(i, !1);
                else {
                    if (je !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = qs(e), s !== null) {
                                for (t.flags |= 128, Fo(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return ue(ge, ge.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && Ce() > yo && (t.flags |= 128, r = !0, Fo(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = qs(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Fo(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !me) return De(t), null
                    } else 2 * Ce() - i.renderingStartTime > yo && n !== 1073741824 && (t.flags |= 128, r = !0, Fo(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ce(), t.sibling = null, n = ge.current, ue(ge, r ? n & 1 | 2 : n & 1), t) : (De(t), null);
        case 22:
        case 23:
            return Pc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(_(156, t.tag))
}

function xx(e, t) {
    switch (ac(t), t.tag) {
        case 1:
            return et(t.type) && Hs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return go(), pe(Je), pe($e), vc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return gc(t), null;
        case 13:
            if (pe(ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(_(340));
                ho()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return pe(ge), null;
        case 4:
            return go(), null;
        case 10:
            return fc(t.type._context), null;
        case 22:
        case 23:
            return Pc(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var ss = !1,
    ze = !1,
    wx = typeof WeakSet == "function" ? WeakSet : Set,
    D = null;

function Wr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Ee(e, t, r)
        } else n.current = null
}

function pu(e, t, n) {
    try {
        n()
    } catch (r) {
        Ee(e, t, r)
    }
}
var wf = !1;

function Nx(e, t) {
    if (Xa = $s, e = Sh(), sc(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    l = -1,
                    u = -1,
                    c = 0,
                    d = 0,
                    p = e,
                    m = null;
                t: for (;;) {
                    for (var f; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o), p !== i || r !== 0 && p.nodeType !== 3 || (u = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (f = p.firstChild) !== null;) m = p, p = f;
                    for (;;) {
                        if (p === e) break t;
                        if (m === n && ++c === o && (l = s), m === i && ++d === r && (u = s), (f = p.nextSibling) !== null) break;
                        p = m, m = p.parentNode
                    }
                    p = f
                }
                n = l === -1 || u === -1 ? null : {
                    start: l,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (qa = {
            focusedElem: e,
            selectionRange: n
        }, $s = !1, D = t; D !== null;)
        if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
        else
            for (; D !== null;) {
                t = D;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var x = w.memoizedProps,
                                    N = w.memoizedState,
                                    v = t.stateNode,
                                    g = v.getSnapshotBeforeUpdate(t.elementType === t.type ? x : bt(t.type, x), N);
                                v.__reactInternalSnapshotBeforeUpdate = g
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(_(163))
                    }
                } catch (E) {
                    Ee(t, t.return, E)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, D = e;
                    break
                }
                D = t.return
            }
    return w = wf, wf = !1, w
}

function Jo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && pu(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function Cl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function hu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function wm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, wm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ut], delete t[hi], delete t[eu], delete t[rx], delete t[ox])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Nm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Nf(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Nm(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function mu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Vs));
    else if (r !== 4 && (e = e.child, e !== null))
        for (mu(e, t, n), e = e.sibling; e !== null;) mu(e, t, n), e = e.sibling
}

function gu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (gu(e, t, n), e = e.sibling; e !== null;) gu(e, t, n), e = e.sibling
}
var Te = null,
    Rt = !1;

function En(e, t, n) {
    for (n = n.child; n !== null;) Em(e, t, n), n = n.sibling
}

function Em(e, t, n) {
    if (Ht && typeof Ht.onCommitFiberUnmount == "function") try {
        Ht.onCommitFiberUnmount(ml, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ze || Wr(n, t);
        case 6:
            var r = Te,
                o = Rt;
            Te = null, En(e, t, n), Te = r, Rt = o, Te !== null && (Rt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
            break;
        case 18:
            Te !== null && (Rt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? ca(e.parentNode, n) : e.nodeType === 1 && ca(e, n), ui(e)) : ca(Te, n.stateNode));
            break;
        case 4:
            r = Te, o = Rt, Te = n.stateNode.containerInfo, Rt = !0, En(e, t, n), Te = r, Rt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && pu(n, t, s), o = o.next
                } while (o !== r)
            }
            En(e, t, n);
            break;
        case 1:
            if (!ze && (Wr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                Ee(n, t, l)
            }
            En(e, t, n);
            break;
        case 21:
            En(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, En(e, t, n), ze = r) : En(e, t, n);
            break;
        default:
            En(e, t, n)
    }
}

function Ef(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new wx), t.forEach(function(r) {
            var o = Tx.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function Ct(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            Te = l.stateNode, Rt = !1;
                            break e;
                        case 3:
                            Te = l.stateNode.containerInfo, Rt = !0;
                            break e;
                        case 4:
                            Te = l.stateNode.containerInfo, Rt = !0;
                            break e
                    }
                    l = l.return
                }
                if (Te === null) throw Error(_(160));
                Em(i, s, o), Te = null, Rt = !1;
                var u = o.alternate;
                u !== null && (u.return = null), o.return = null
            } catch (c) {
                Ee(o, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Cm(t, e), t = t.sibling
}

function Cm(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ct(t, e), Dt(e), r & 4) {
                try {
                    Jo(3, e, e.return), Cl(3, e)
                } catch (x) {
                    Ee(e, e.return, x)
                }
                try {
                    Jo(5, e, e.return)
                } catch (x) {
                    Ee(e, e.return, x)
                }
            }
            break;
        case 1:
            Ct(t, e), Dt(e), r & 512 && n !== null && Wr(n, n.return);
            break;
        case 5:
            if (Ct(t, e), Dt(e), r & 512 && n !== null && Wr(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    ii(o, "")
                } catch (x) {
                    Ee(e, e.return, x)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    l = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    l === "input" && i.type === "radio" && i.name != null && Wp(o, i), $a(l, s);
                    var c = $a(l, i);
                    for (s = 0; s < u.length; s += 2) {
                        var d = u[s],
                            p = u[s + 1];
                        d === "style" ? Xp(o, p) : d === "dangerouslySetInnerHTML" ? Gp(o, p) : d === "children" ? ii(o, p) : Qu(o, d, p, c)
                    }
                    switch (l) {
                        case "input":
                            Aa(o, i);
                            break;
                        case "textarea":
                            Kp(o, i);
                            break;
                        case "select":
                            var m = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var f = i.value;
                            f != null ? Qr(o, !!i.multiple, f, !1) : m !== !!i.multiple && (i.defaultValue != null ? Qr(o, !!i.multiple, i.defaultValue, !0) : Qr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[hi] = i
                } catch (x) {
                    Ee(e, e.return, x)
                }
            }
            break;
        case 6:
            if (Ct(t, e), Dt(e), r & 4) {
                if (e.stateNode === null) throw Error(_(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (x) {
                    Ee(e, e.return, x)
                }
            }
            break;
        case 3:
            if (Ct(t, e), Dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                ui(t.containerInfo)
            } catch (x) {
                Ee(e, e.return, x)
            }
            break;
        case 4:
            Ct(t, e), Dt(e);
            break;
        case 13:
            Ct(t, e), Dt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (kc = Ce())), r & 4 && Ef(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (c = ze) || d, Ct(t, e), ze = c) : Ct(t, e), Dt(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1)
                    for (D = e, d = e.child; d !== null;) {
                        for (p = D = d; D !== null;) {
                            switch (m = D, f = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Jo(4, m, m.return);
                                    break;
                                case 1:
                                    Wr(m, m.return);
                                    var w = m.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (x) {
                                            Ee(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    Wr(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Sf(p);
                                        continue
                                    }
                            }
                            f !== null ? (f.return = m, D = f) : Sf(p)
                        }
                        d = d.sibling
                    }
                e: for (d = null, p = e;;) {
                    if (p.tag === 5) {
                        if (d === null) {
                            d = p;
                            try {
                                o = p.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode, u = p.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = Yp("display", s))
                            } catch (x) {
                                Ee(e, e.return, x)
                            }
                        }
                    } else if (p.tag === 6) {
                        if (d === null) try {
                            p.stateNode.nodeValue = c ? "" : p.memoizedProps
                        } catch (x) {
                            Ee(e, e.return, x)
                        }
                    } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                        p.child.return = p, p = p.child;
                        continue
                    }
                    if (p === e) break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === e) break e;
                        d === p && (d = null), p = p.return
                    }
                    d === p && (d = null), p.sibling.return = p.return, p = p.sibling
                }
            }
            break;
        case 19:
            Ct(t, e), Dt(e), r & 4 && Ef(e);
            break;
        case 21:
            break;
        default:
            Ct(t, e), Dt(e)
    }
}

function Dt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Nm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(_(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (ii(o, ""), r.flags &= -33);
                    var i = Nf(e);
                    gu(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = Nf(e);
                    mu(e, l, s);
                    break;
                default:
                    throw Error(_(161))
            }
        }
        catch (u) {
            Ee(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Ex(e, t, n) {
    D = e, Sm(e)
}

function Sm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null;) {
        var o = D,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || ss;
            if (!s) {
                var l = o.alternate,
                    u = l !== null && l.memoizedState !== null || ze;
                l = ss;
                var c = ze;
                if (ss = s, (ze = u) && !c)
                    for (D = o; D !== null;) s = D, u = s.child, s.tag === 22 && s.memoizedState !== null ? bf(o) : u !== null ? (u.return = s, D = u) : bf(o);
                for (; i !== null;) D = i, Sm(i), i = i.sibling;
                D = o, ss = l, ze = c
            }
            Cf(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, D = i) : Cf(e)
    }
}

function Cf(e) {
    for (; D !== null;) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ze || Cl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ze)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : bt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && lf(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            lf(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var p = d.dehydrated;
                                    p !== null && ui(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(_(163))
                }
                ze || t.flags & 512 && hu(t)
            } catch (m) {
                Ee(t, t.return, m)
            }
        }
        if (t === e) {
            D = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, D = n;
            break
        }
        D = t.return
    }
}

function Sf(e) {
    for (; D !== null;) {
        var t = D;
        if (t === e) {
            D = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, D = n;
            break
        }
        D = t.return
    }
}

function bf(e) {
    for (; D !== null;) {
        var t = D;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Cl(4, t)
                    } catch (u) {
                        Ee(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            Ee(t, o, u)
                        }
                    }
                    var i = t.return;
                    try {
                        hu(t)
                    } catch (u) {
                        Ee(t, i, u)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        hu(t)
                    } catch (u) {
                        Ee(t, s, u)
                    }
            }
        } catch (u) {
            Ee(t, t.return, u)
        }
        if (t === e) {
            D = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, D = l;
            break
        }
        D = t.return
    }
}
var Cx = Math.ceil,
    el = hn.ReactCurrentDispatcher,
    Sc = hn.ReactCurrentOwner,
    mt = hn.ReactCurrentBatchConfig,
    Z = 0,
    Re = null,
    be = null,
    _e = 0,
    nt = 0,
    Kr = Xn(0),
    je = 0,
    wi = null,
    wr = 0,
    Sl = 0,
    bc = 0,
    ei = null,
    qe = null,
    kc = 0,
    yo = 1 / 0,
    Jt = null,
    tl = !1,
    vu = null,
    Un = null,
    ls = !1,
    In = null,
    nl = 0,
    ti = 0,
    yu = null,
    ks = -1,
    js = 0;

function Qe() {
    return Z & 6 ? Ce() : ks !== -1 ? ks : ks = Ce()
}

function Vn(e) {
    return e.mode & 1 ? Z & 2 && _e !== 0 ? _e & -_e : sx.transition !== null ? (js === 0 && (js = ah()), js) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mh(e.type)), e) : 1
}

function Ot(e, t, n, r) {
    if (50 < ti) throw ti = 0, yu = null, Error(_(185));
    Ri(e, n, r), (!(Z & 2) || e !== Re) && (e === Re && (!(Z & 2) && (Sl |= n), je === 4 && Rn(e, _e)), tt(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (yo = Ce() + 500, wl && qn()))
}

function tt(e, t) {
    var n = e.callbackNode;
    s0(e, t);
    var r = zs(e, e === Re ? _e : 0);
    if (r === 0) n !== null && Od(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Od(n), t === 1) e.tag === 0 ? ix(kf.bind(null, e)) : Lh(kf.bind(null, e)), tx(function() {
            !(Z & 6) && qn()
        }), n = null;
        else {
            switch (uh(r)) {
                case 1:
                    n = Zu;
                    break;
                case 4:
                    n = sh;
                    break;
                case 16:
                    n = Fs;
                    break;
                case 536870912:
                    n = lh;
                    break;
                default:
                    n = Fs
            }
            n = _m(n, bm.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function bm(e, t) {
    if (ks = -1, js = 0, Z & 6) throw Error(_(327));
    var n = e.callbackNode;
    if (Zr() && e.callbackNode !== n) return null;
    var r = zs(e, e === Re ? _e : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
    else {
        t = r;
        var o = Z;
        Z |= 2;
        var i = jm();
        (Re !== e || _e !== t) && (Jt = null, yo = Ce() + 500, hr(e, t));
        do try {
            kx();
            break
        } catch (l) {
            km(e, l)
        }
        while (!0);
        dc(), el.current = i, Z = o, be !== null ? t = 0 : (Re = null, _e = 0, t = je)
    }
    if (t !== 0) {
        if (t === 2 && (o = Wa(e), o !== 0 && (r = o, t = xu(e, o))), t === 1) throw n = wi, hr(e, 0), Rn(e, r), tt(e, Ce()), n;
        if (t === 6) Rn(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !Sx(o) && (t = rl(e, r), t === 2 && (i = Wa(e), i !== 0 && (r = i, t = xu(e, i))), t === 1)) throw n = wi, hr(e, 0), Rn(e, r), tt(e, Ce()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(_(345));
                case 2:
                    rr(e, qe, Jt);
                    break;
                case 3:
                    if (Rn(e, r), (r & 130023424) === r && (t = kc + 500 - Ce(), 10 < t)) {
                        if (zs(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Qe(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Ja(rr.bind(null, e, qe, Jt), t);
                        break
                    }
                    rr(e, qe, Jt);
                    break;
                case 4:
                    if (Rn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - _t(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = Ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cx(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ja(rr.bind(null, e, qe, Jt), r);
                        break
                    }
                    rr(e, qe, Jt);
                    break;
                case 5:
                    rr(e, qe, Jt);
                    break;
                default:
                    throw Error(_(329))
            }
        }
    }
    return tt(e, Ce()), e.callbackNode === n ? bm.bind(null, e) : null
}

function xu(e, t) {
    var n = ei;
    return e.current.memoizedState.isDehydrated && (hr(e, t).flags |= 256), e = rl(e, t), e !== 2 && (t = qe, qe = n, t !== null && wu(t)), e
}

function wu(e) {
    qe === null ? qe = e : qe.push.apply(qe, e)
}

function Sx(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Lt(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Rn(e, t) {
    for (t &= ~bc, t &= ~Sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - _t(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function kf(e) {
    if (Z & 6) throw Error(_(327));
    Zr();
    var t = zs(e, 0);
    if (!(t & 1)) return tt(e, Ce()), null;
    var n = rl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Wa(e);
        r !== 0 && (t = r, n = xu(e, r))
    }
    if (n === 1) throw n = wi, hr(e, 0), Rn(e, t), tt(e, Ce()), n;
    if (n === 6) throw Error(_(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, rr(e, qe, Jt), tt(e, Ce()), null
}

function jc(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n, Z === 0 && (yo = Ce() + 500, wl && qn())
    }
}

function Nr(e) {
    In !== null && In.tag === 0 && !(Z & 6) && Zr();
    var t = Z;
    Z |= 1;
    var n = mt.transition,
        r = ne;
    try {
        if (mt.transition = null, ne = 1, e) return e()
    } finally {
        ne = r, mt.transition = n, Z = t, !(Z & 6) && qn()
    }
}

function Pc() {
    nt = Kr.current, pe(Kr)
}

function hr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ex(n)), be !== null)
        for (n = be.return; n !== null;) {
            var r = n;
            switch (ac(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Hs();
                    break;
                case 3:
                    go(), pe(Je), pe($e), vc();
                    break;
                case 5:
                    gc(r);
                    break;
                case 4:
                    go();
                    break;
                case 13:
                    pe(ge);
                    break;
                case 19:
                    pe(ge);
                    break;
                case 10:
                    fc(r.type._context);
                    break;
                case 22:
                case 23:
                    Pc()
            }
            n = n.return
        }
    if (Re = e, be = e = Hn(e.current, null), _e = nt = t, je = 0, wi = null, bc = Sl = wr = 0, qe = ei = null, sr !== null) {
        for (t = 0; t < sr.length; t++)
            if (n = sr[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o, r.next = s
                }
                n.pending = r
            }
        sr = null
    }
    return e
}

function km(e, t) {
    do {
        var n = be;
        try {
            if (dc(), Cs.current = Js, Zs) {
                for (var r = ve.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                Zs = !1
            }
            if (xr = 0, Pe = ke = ve = null, Zo = !1, vi = 0, Sc.current = null, n === null || n.return === null) {
                je = 1, wi = t, be = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    l = n,
                    u = t;
                if (t = _e, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u,
                        d = l,
                        p = d.tag;
                    if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var m = d.alternate;
                        m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var f = pf(s);
                    if (f !== null) {
                        f.flags &= -257, hf(f, s, l, i, t), f.mode & 1 && ff(i, c, t), t = f, u = c;
                        var w = t.updateQueue;
                        if (w === null) {
                            var x = new Set;
                            x.add(u), t.updateQueue = x
                        } else w.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ff(i, c, t), Rc();
                            break e
                        }
                        u = Error(_(426))
                    }
                } else if (me && l.mode & 1) {
                    var N = pf(s);
                    if (N !== null) {
                        !(N.flags & 65536) && (N.flags |= 256), hf(N, s, l, i, t), uc(vo(u, l));
                        break e
                    }
                }
                i = u = vo(u, l),
                je !== 4 && (je = 2),
                ei === null ? ei = [i] : ei.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var v = um(i, u, t);
                            sf(i, v);
                            break e;
                        case 1:
                            l = u;
                            var g = i.type,
                                y = i.stateNode;
                            if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Un === null || !Un.has(y)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var E = cm(i, l, t);
                                sf(i, E);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Rm(n)
        } catch (C) {
            t = C, be === n && n !== null && (be = n = n.return);
            continue
        }
        break
    } while (!0)
}

function jm() {
    var e = el.current;
    return el.current = Js, e === null ? Js : e
}

function Rc() {
    (je === 0 || je === 3 || je === 2) && (je = 4), Re === null || !(wr & 268435455) && !(Sl & 268435455) || Rn(Re, _e)
}

function rl(e, t) {
    var n = Z;
    Z |= 2;
    var r = jm();
    (Re !== e || _e !== t) && (Jt = null, hr(e, t));
    do try {
        bx();
        break
    } catch (o) {
        km(e, o)
    }
    while (!0);
    if (dc(), Z = n, el.current = r, be !== null) throw Error(_(261));
    return Re = null, _e = 0, je
}

function bx() {
    for (; be !== null;) Pm(be)
}

function kx() {
    for (; be !== null && !qy();) Pm(be)
}

function Pm(e) {
    var t = Mm(e.alternate, e, nt);
    e.memoizedProps = e.pendingProps, t === null ? Rm(e) : be = t, Sc.current = null
}

function Rm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = xx(n, t), n !== null) {
                n.flags &= 32767, be = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                je = 6, be = null;
                return
            }
        } else if (n = yx(n, t, nt), n !== null) {
            be = n;
            return
        }
        if (t = t.sibling, t !== null) {
            be = t;
            return
        }
        be = t = e
    } while (t !== null);
    je === 0 && (je = 5)
}

function rr(e, t, n) {
    var r = ne,
        o = mt.transition;
    try {
        mt.transition = null, ne = 1, jx(e, t, n, r)
    } finally {
        mt.transition = o, ne = r
    }
    return null
}

function jx(e, t, n, r) {
    do Zr(); while (In !== null);
    if (Z & 6) throw Error(_(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (l0(e, i), e === Re && (be = Re = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ls || (ls = !0, _m(Fs, function() {
            return Zr(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = mt.transition, mt.transition = null;
        var s = ne;
        ne = 1;
        var l = Z;
        Z |= 4, Sc.current = null, Nx(e, n), Cm(n, e), Q0(qa), $s = !!Xa, qa = Xa = null, e.current = n, Ex(n), Zy(), Z = l, ne = s, mt.transition = i
    } else e.current = n;
    if (ls && (ls = !1, In = e, nl = o), i = e.pendingLanes, i === 0 && (Un = null), t0(n.stateNode), tt(e, Ce()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (tl) throw tl = !1, e = vu, vu = null, e;
    return nl & 1 && e.tag !== 0 && Zr(), i = e.pendingLanes, i & 1 ? e === yu ? ti++ : (ti = 0, yu = e) : ti = 0, qn(), null
}

function Zr() {
    if (In !== null) {
        var e = uh(nl),
            t = mt.transition,
            n = ne;
        try {
            if (mt.transition = null, ne = 16 > e ? 16 : e, In === null) var r = !1;
            else {
                if (e = In, In = null, nl = 0, Z & 6) throw Error(_(331));
                var o = Z;
                for (Z |= 4, D = e.current; D !== null;) {
                    var i = D,
                        s = i.child;
                    if (D.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (D = c; D !== null;) {
                                    var d = D;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Jo(8, d, i)
                                    }
                                    var p = d.child;
                                    if (p !== null) p.return = d, D = p;
                                    else
                                        for (; D !== null;) {
                                            d = D;
                                            var m = d.sibling,
                                                f = d.return;
                                            if (wm(d), d === c) {
                                                D = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = f, D = m;
                                                break
                                            }
                                            D = f
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var x = w.child;
                                if (x !== null) {
                                    w.child = null;
                                    do {
                                        var N = x.sibling;
                                        x.sibling = null, x = N
                                    } while (x !== null)
                                }
                            }
                            D = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, D = s;
                    else e: for (; D !== null;) {
                        if (i = D, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Jo(9, i, i.return)
                        }
                        var v = i.sibling;
                        if (v !== null) {
                            v.return = i.return, D = v;
                            break e
                        }
                        D = i.return
                    }
                }
                var g = e.current;
                for (D = g; D !== null;) {
                    s = D;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null) y.return = s, D = y;
                    else e: for (s = g; D !== null;) {
                        if (l = D, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Cl(9, l)
                            }
                        } catch (C) {
                            Ee(l, l.return, C)
                        }
                        if (l === s) {
                            D = null;
                            break e
                        }
                        var E = l.sibling;
                        if (E !== null) {
                            E.return = l.return, D = E;
                            break e
                        }
                        D = l.return
                    }
                }
                if (Z = o, qn(), Ht && typeof Ht.onPostCommitFiberRoot == "function") try {
                    Ht.onPostCommitFiberRoot(ml, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            ne = n, mt.transition = t
        }
    }
    return !1
}

function jf(e, t, n) {
    t = vo(n, t), t = um(e, t, 1), e = Bn(e, t, 1), t = Qe(), e !== null && (Ri(e, 1, t), tt(e, t))
}

function Ee(e, t, n) {
    if (e.tag === 3) jf(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                jf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Un === null || !Un.has(r))) {
                    e = vo(n, e), e = cm(t, e, 1), t = Bn(t, e, 1), e = Qe(), t !== null && (Ri(t, 1, e), tt(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Px(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, Re === e && (_e & n) === n && (je === 4 || je === 3 && (_e & 130023424) === _e && 500 > Ce() - kc ? hr(e, 0) : bc |= n), tt(e, t)
}

function Tm(e, t) {
    t === 0 && (e.mode & 1 ? (t = qi, qi <<= 1, !(qi & 130023424) && (qi = 4194304)) : t = 1);
    var n = Qe();
    e = un(e, t), e !== null && (Ri(e, t, n), tt(e, n))
}

function Rx(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Tm(e, n)
}

function Tx(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(_(314))
    }
    r !== null && r.delete(t), Tm(e, n)
}
var Mm;
Mm = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ze = !1, vx(e, t, n);
            Ze = !!(e.flags & 131072)
        }
    else Ze = !1, me && t.flags & 1048576 && Ah(t, Qs, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            bs(e, t), e = t.pendingProps;
            var o = po(t, $e.current);
            qr(t, n), o = xc(null, t, r, e, o, n);
            var i = wc();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (i = !0, Ws(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, hc(t), o.updater = El, t.stateNode = o, o._reactInternals = t, su(t, r, e, n), t = uu(null, t, r, !0, i, n)) : (t.tag = 0, me && i && lc(t), Ve(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (bs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = _x(r), e = bt(r, e), o) {
                    case 0:
                        t = au(null, t, r, e, n);
                        break e;
                    case 1:
                        t = vf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = mf(null, t, r, e, n);
                        break e;
                    case 14:
                        t = gf(null, t, r, bt(r.type, e), n);
                        break e
                }
                throw Error(_(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bt(r, o), au(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bt(r, o), vf(e, t, r, o, n);
        case 3:
            e: {
                if (hm(t), e === null) throw Error(_(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                Bh(e, t),
                Xs(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = vo(Error(_(423)), t), t = yf(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = vo(Error(_(424)), t), t = yf(e, t, r, n, o);
                    break e
                } else
                    for (ot = $n(t.stateNode.containerInfo.firstChild), it = t, me = !0, Tt = null, n = zh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (ho(), r === o) {
                        t = cn(e, t, n);
                        break e
                    }
                    Ve(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Uh(t), e === null && ru(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Za(r, o) ? s = null : i !== null && Za(r, i) && (t.flags |= 32), pm(e, t), Ve(e, t, s, n), t.child;
        case 6:
            return e === null && ru(t), null;
        case 13:
            return mm(e, t, n);
        case 4:
            return mc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mo(t, null, r, n) : Ve(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bt(r, o), mf(e, t, r, o, n);
        case 7:
            return Ve(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ve(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ve(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ue(Gs, r._currentValue), r._currentValue = s, i !== null)
                    if (Lt(i.value, s)) {
                        if (i.children === o.children && !Je.current) {
                            t = cn(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var l = i.dependencies;
                            if (l !== null) {
                                s = i.child;
                                for (var u = l.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            u = on(-1, n & -n), u.tag = 2;
                                            var c = i.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var d = c.pending;
                                                d === null ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                                            }
                                        }
                                        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), ou(i.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(_(341));
                                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), ou(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                Ve(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, qr(t, n), o = gt(o), r = r(o), t.flags |= 1, Ve(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = bt(r, t.pendingProps), o = bt(r.type, o), gf(e, t, r, o, n);
        case 15:
            return dm(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bt(r, o), bs(e, t), t.tag = 1, et(r) ? (e = !0, Ws(t)) : e = !1, qr(t, n), am(t, r, o), su(t, r, o, n), uu(null, t, r, !0, e, n);
        case 19:
            return gm(e, t, n);
        case 22:
            return fm(e, t, n)
    }
    throw Error(_(156, t.tag))
};

function _m(e, t) {
    return ih(e, t)
}

function Mx(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ht(e, t, n, r) {
    return new Mx(e, t, n, r)
}

function Tc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function _x(e) {
    if (typeof e == "function") return Tc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Yu) return 11;
        if (e === Xu) return 14
    }
    return 2
}

function Hn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ht(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ps(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") Tc(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case Ir:
            return mr(n.children, o, i, t);
        case Gu:
            s = 8, o |= 8;
            break;
        case Ta:
            return e = ht(12, n, t, o | 2), e.elementType = Ta, e.lanes = i, e;
        case Ma:
            return e = ht(13, n, t, o), e.elementType = Ma, e.lanes = i, e;
        case _a:
            return e = ht(19, n, t, o), e.elementType = _a, e.lanes = i, e;
        case Up:
            return bl(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case $p:
                    s = 10;
                    break e;
                case Bp:
                    s = 9;
                    break e;
                case Yu:
                    s = 11;
                    break e;
                case Xu:
                    s = 14;
                    break e;
                case kn:
                    s = 16, r = null;
                    break e
            }
            throw Error(_(130, e == null ? e : typeof e, ""))
    }
    return t = ht(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function mr(e, t, n, r) {
    return e = ht(7, e, r, t), e.lanes = n, e
}

function bl(e, t, n, r) {
    return e = ht(22, e, r, t), e.elementType = Up, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function ya(e, t, n) {
    return e = ht(6, e, null, t), e.lanes = n, e
}

function xa(e, t, n) {
    return t = ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Ox(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Jl(0), this.expirationTimes = Jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Mc(e, t, n, r, o, i, s, l, u) {
    return e = new Ox(e, t, n, l, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ht(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, hc(i), e
}

function Lx(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ar,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Om(e) {
    if (!e) return Kn;
    e = e._reactInternals;
    e: {
        if (br(e) !== e || e.tag !== 1) throw Error(_(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (et(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(_(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (et(n)) return Oh(e, n, t)
    }
    return t
}

function Lm(e, t, n, r, o, i, s, l, u) {
    return e = Mc(n, r, !0, e, o, i, s, l, u), e.context = Om(null), n = e.current, r = Qe(), o = Vn(n), i = on(r, o), i.callback = t ? ? null, Bn(n, i, o), e.current.lanes = o, Ri(e, o, r), tt(e, r), e
}

function kl(e, t, n, r) {
    var o = t.current,
        i = Qe(),
        s = Vn(o);
    return n = Om(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bn(o, t, s), e !== null && (Ot(e, o, s, i), Es(e, o, s)), s
}

function ol(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Pf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function _c(e, t) {
    Pf(e, t), (e = e.alternate) && Pf(e, t)
}

function Ax() {
    return null
}
var Am = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Oc(e) {
    this._internalRoot = e
}
jl.prototype.render = Oc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(_(409));
    kl(e, t, null, null)
};
jl.prototype.unmount = Oc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Nr(function() {
            kl(null, e, null, null)
        }), t[an] = null
    }
};

function jl(e) {
    this._internalRoot = e
}
jl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = fh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Pn.length && t !== 0 && t < Pn[n].priority; n++);
        Pn.splice(n, 0, e), n === 0 && hh(e)
    }
};

function Lc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Pl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Rf() {}

function Ix(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = ol(s);
                i.call(c)
            }
        }
        var s = Lm(t, r, e, 0, null, !1, !1, "", Rf);
        return e._reactRootContainer = s, e[an] = s.current, fi(e.nodeType === 8 ? e.parentNode : e), Nr(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = ol(u);
            l.call(c)
        }
    }
    var u = Mc(e, 0, !1, null, null, !1, !1, "", Rf);
    return e._reactRootContainer = u, e[an] = u.current, fi(e.nodeType === 8 ? e.parentNode : e), Nr(function() {
        kl(t, u, n, r)
    }), u
}

function Rl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var u = ol(s);
                l.call(u)
            }
        }
        kl(t, s, e, o)
    } else s = Ix(n, t, e, o, r);
    return ol(s)
}
ch = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Wo(t.pendingLanes);
                n !== 0 && (Ju(t, n | 1), tt(t, Ce()), !(Z & 6) && (yo = Ce() + 500, qn()))
            }
            break;
        case 13:
            Nr(function() {
                var r = un(e, 1);
                if (r !== null) {
                    var o = Qe();
                    Ot(r, e, 1, o)
                }
            }), _c(e, 1)
    }
};
ec = function(e) {
    if (e.tag === 13) {
        var t = un(e, 134217728);
        if (t !== null) {
            var n = Qe();
            Ot(t, e, 134217728, n)
        }
        _c(e, 134217728)
    }
};
dh = function(e) {
    if (e.tag === 13) {
        var t = Vn(e),
            n = un(e, t);
        if (n !== null) {
            var r = Qe();
            Ot(n, e, t, r)
        }
        _c(e, t)
    }
};
fh = function() {
    return ne
};
ph = function(e, t) {
    var n = ne;
    try {
        return ne = e, t()
    } finally {
        ne = n
    }
};
Ua = function(e, t, n) {
    switch (t) {
        case "input":
            if (Aa(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = xl(r);
                        if (!o) throw Error(_(90));
                        Hp(r), Aa(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Kp(e, n);
            break;
        case "select":
            t = n.value, t != null && Qr(e, !!n.multiple, t, !1)
    }
};
Jp = jc;
eh = Nr;
var Dx = {
        usingClientEntryPoint: !1,
        Events: [Mi, $r, xl, qp, Zp, jc]
    },
    zo = {
        findFiberByHostInstance: ir,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Fx = {
        bundleType: zo.bundleType,
        version: zo.version,
        rendererPackageName: zo.rendererPackageName,
        rendererConfig: zo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: hn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = rh(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: zo.findFiberByHostInstance || Ax,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!as.isDisabled && as.supportsFiber) try {
        ml = as.inject(Fx), Ht = as
    } catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dx;
at.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lc(t)) throw Error(_(200));
    return Lx(e, t, null, n)
};
at.createRoot = function(e, t) {
    if (!Lc(e)) throw Error(_(299));
    var n = !1,
        r = "",
        o = Am;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Mc(e, 1, !1, null, null, n, !1, r, o), e[an] = t.current, fi(e.nodeType === 8 ? e.parentNode : e), new Oc(t)
};
at.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
    return e = rh(t), e = e === null ? null : e.stateNode, e
};
at.flushSync = function(e) {
    return Nr(e)
};
at.hydrate = function(e, t, n) {
    if (!Pl(t)) throw Error(_(200));
    return Rl(null, e, t, !0, n)
};
at.hydrateRoot = function(e, t, n) {
    if (!Lc(e)) throw Error(_(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = Am;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Lm(t, null, e, 1, n ? ? null, o, !1, i, s), e[an] = t.current, fi(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new jl(t)
};
at.render = function(e, t, n) {
    if (!Pl(t)) throw Error(_(200));
    return Rl(null, e, t, !1, n)
};
at.unmountComponentAtNode = function(e) {
    if (!Pl(e)) throw Error(_(40));
    return e._reactRootContainer ? (Nr(function() {
        Rl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[an] = null
        })
    }), !0) : !1
};
at.unstable_batchedUpdates = jc;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Pl(n)) throw Error(_(200));
    if (e == null || e._reactInternals === void 0) throw Error(_(38));
    return Rl(e, t, n, !1, r)
};
at.version = "18.3.1-next-f1338f8080-20240426";

function Im() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im)
    } catch (e) {
        console.error(e)
    }
}
Im(), Ip.exports = at;
var Oi = Ip.exports;
const Ac = Cp(Oi);
var Dm, Tf = Oi;
Dm = Tf.createRoot, Tf.hydrateRoot;
const zx = 1,
    $x = 1e6;
let wa = 0;

function Bx() {
    return wa = (wa + 1) % Number.MAX_SAFE_INTEGER, wa.toString()
}
const Na = new Map,
    Mf = e => {
        if (Na.has(e)) return;
        const t = setTimeout(() => {
            Na.delete(e), ni({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, $x);
        Na.set(e, t)
    },
    Ux = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, zx)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? Mf(n) : e.toasts.forEach(r => {
                        Mf(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    Rs = [];
let Ts = {
    toasts: []
};

function ni(e) {
    Ts = Ux(Ts, e), Rs.forEach(t => {
        t(Ts)
    })
}

function Vx({ ...e
}) {
    const t = Bx(),
        n = o => ni({
            type: "UPDATE_TOAST",
            toast: { ...o,
                id: t
            }
        }),
        r = () => ni({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return ni({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function Hx() {
    const [e, t] = h.useState(Ts);
    return h.useEffect(() => (Rs.push(t), () => {
        const n = Rs.indexOf(t);
        n > -1 && Rs.splice(n, 1)
    }), [e]), { ...e,
        toast: Vx,
        dismiss: n => ni({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function q(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function _f(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Ic(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = _f(o, t);
            return !n && typeof i == "function" && (n = !0), i
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const i = r[o];
                typeof i == "function" ? i() : _f(e[o], null)
            }
        }
    }
}

function Be(...e) {
    return h.useCallback(Ic(...e), e)
}

function Li(e, t = []) {
    let n = [];

    function r(i, s) {
        const l = h.createContext(s),
            u = n.length;
        n = [...n, s];
        const c = p => {
            var v;
            const {
                scope: m,
                children: f,
                ...w
            } = p, x = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[u]) || l, N = h.useMemo(() => w, Object.values(w));
            return a.jsx(x.Provider, {
                value: N,
                children: f
            })
        };
        c.displayName = i + "Provider";

        function d(p, m) {
            var x;
            const f = ((x = m == null ? void 0 : m[e]) == null ? void 0 : x[u]) || l,
                w = h.useContext(f);
            if (w) return w;
            if (s !== void 0) return s;
            throw new Error(`\`${p}\` must be used within \`${i}\``)
        }
        return [c, d]
    }
    const o = () => {
        const i = n.map(s => h.createContext(s));
        return function(l) {
            const u = (l == null ? void 0 : l[e]) || i;
            return h.useMemo(() => ({
                [`__scope${e}`]: { ...l,
                    [e]: u
                }
            }), [l, u])
        }
    };
    return o.scopeName = e, [r, Wx(o, ...t)]
}

function Wx(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((l, {
                useScope: u,
                scopeName: c
            }) => {
                const p = u(i)[`__scope${c}`];
                return { ...l,
                    ...p
                }
            }, {});
            return h.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function il(e) {
    const t = Qx(e),
        n = h.forwardRef((r, o) => {
            const {
                children: i,
                ...s
            } = r, l = h.Children.toArray(i), u = l.find(Yx);
            if (u) {
                const c = u.props.children,
                    d = l.map(p => p === u ? h.Children.count(c) > 1 ? h.Children.only(null) : h.isValidElement(c) ? c.props.children : null : p);
                return a.jsx(t, { ...s,
                    ref: o,
                    children: h.isValidElement(c) ? h.cloneElement(c, void 0, d) : null
                })
            }
            return a.jsx(t, { ...s,
                ref: o,
                children: i
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var Kx = il("Slot");

function Qx(e) {
    const t = h.forwardRef((n, r) => {
        const {
            children: o,
            ...i
        } = n;
        if (h.isValidElement(o)) {
            const s = qx(o),
                l = Xx(i, o.props);
            return o.type !== h.Fragment && (l.ref = r ? Ic(r, s) : s), h.cloneElement(o, l)
        }
        return h.Children.count(o) > 1 ? h.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Fm = Symbol("radix.slottable");

function Gx(e) {
    const t = ({
        children: n
    }) => a.jsx(a.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = Fm, t
}

function Yx(e) {
    return h.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fm
}

function Xx(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            const u = i(...l);
            return o(...l), u
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function qx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function Dc(e) {
    const t = e + "CollectionProvider",
        [n, r] = Li(t),
        [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = x => {
            const {
                scope: N,
                children: v
            } = x, g = O.useRef(null), y = O.useRef(new Map).current;
            return a.jsx(o, {
                scope: N,
                itemMap: y,
                collectionRef: g,
                children: v
            })
        };
    s.displayName = t;
    const l = e + "CollectionSlot",
        u = il(l),
        c = O.forwardRef((x, N) => {
            const {
                scope: v,
                children: g
            } = x, y = i(l, v), E = Be(N, y.collectionRef);
            return a.jsx(u, {
                ref: E,
                children: g
            })
        });
    c.displayName = l;
    const d = e + "CollectionItemSlot",
        p = "data-radix-collection-item",
        m = il(d),
        f = O.forwardRef((x, N) => {
            const {
                scope: v,
                children: g,
                ...y
            } = x, E = O.useRef(null), C = Be(N, E), S = i(d, v);
            return O.useEffect(() => (S.itemMap.set(E, {
                ref: E,
                ...y
            }), () => void S.itemMap.delete(E))), a.jsx(m, {
                [p]: "",
                ref: C,
                children: g
            })
        });
    f.displayName = d;

    function w(x) {
        const N = i(e + "CollectionConsumer", x);
        return O.useCallback(() => {
            const g = N.collectionRef.current;
            if (!g) return [];
            const y = Array.from(g.querySelectorAll(`[${p}]`));
            return Array.from(N.itemMap.values()).sort((S, b) => y.indexOf(S.ref.current) - y.indexOf(b.ref.current))
        }, [N.collectionRef, N.itemMap])
    }
    return [{
        Provider: s,
        Slot: c,
        ItemSlot: f
    }, w, r]
}
var Zx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    ce = Zx.reduce((e, t) => {
        const n = il(`Primitive.${t}`),
            r = h.forwardRef((o, i) => {
                const {
                    asChild: s,
                    ...l
                } = o, u = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), a.jsx(u, { ...l,
                    ref: i
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function sl(e, t) {
    e && Oi.flushSync(() => e.dispatchEvent(t))
}

function We(e) {
    const t = h.useRef(e);
    return h.useEffect(() => {
        t.current = e
    }), h.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function Jx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = We(e);
    h.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var ew = "DismissableLayer",
    Nu = "dismissableLayer.update",
    tw = "dismissableLayer.pointerDownOutside",
    nw = "dismissableLayer.focusOutside",
    Of, zm = h.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Tl = h.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: l,
            ...u
        } = e, c = h.useContext(zm), [d, p] = h.useState(null), m = (d == null ? void 0 : d.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, f] = h.useState({}), w = Be(t, b => p(b)), x = Array.from(c.layers), [N] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), v = x.indexOf(N), g = d ? x.indexOf(d) : -1, y = c.layersWithOutsidePointerEventsDisabled.size > 0, E = g >= v, C = ow(b => {
            const R = b.target,
                P = [...c.branches].some(M => M.contains(R));
            !E || P || (o == null || o(b), s == null || s(b), b.defaultPrevented || l == null || l())
        }, m), S = iw(b => {
            const R = b.target;
            [...c.branches].some(M => M.contains(R)) || (i == null || i(b), s == null || s(b), b.defaultPrevented || l == null || l())
        }, m);
        return Jx(b => {
            g === c.layers.size - 1 && (r == null || r(b), !b.defaultPrevented && l && (b.preventDefault(), l()))
        }, m), h.useEffect(() => {
            if (d) return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Of = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Lf(), () => {
                n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Of)
            }
        }, [d, m, n, c]), h.useEffect(() => () => {
            d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Lf())
        }, [d, c]), h.useEffect(() => {
            const b = () => f({});
            return document.addEventListener(Nu, b), () => document.removeEventListener(Nu, b)
        }, []), a.jsx(ce.div, { ...u,
            ref: w,
            style: {
                pointerEvents: y ? E ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: q(e.onFocusCapture, S.onFocusCapture),
            onBlurCapture: q(e.onBlurCapture, S.onBlurCapture),
            onPointerDownCapture: q(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
Tl.displayName = ew;
var rw = "DismissableLayerBranch",
    $m = h.forwardRef((e, t) => {
        const n = h.useContext(zm),
            r = h.useRef(null),
            o = Be(t, r);
        return h.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), a.jsx(ce.div, { ...e,
            ref: o
        })
    });
$m.displayName = rw;

function ow(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = We(e),
        r = h.useRef(!1),
        o = h.useRef(() => {});
    return h.useEffect(() => {
        const i = l => {
                if (l.target && !r.current) {
                    let u = function() {
                        Bm(tw, n, c, {
                            discrete: !0
                        })
                    };
                    const c = {
                        originalEvent: l
                    };
                    l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, {
                        once: !0
                    })) : u()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function iw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = We(e),
        r = h.useRef(!1);
    return h.useEffect(() => {
        const o = i => {
            i.target && !r.current && Bm(nw, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Lf() {
    const e = new CustomEvent(Nu);
    document.dispatchEvent(e)
}

function Bm(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? sl(o, i) : o.dispatchEvent(i)
}
var sw = Tl,
    lw = $m,
    yt = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {},
    aw = "Portal",
    Um = h.forwardRef((e, t) => {
        var l;
        const {
            container: n,
            ...r
        } = e, [o, i] = h.useState(!1);
        yt(() => i(!0), []);
        const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
        return s ? Ac.createPortal(a.jsx(ce.div, { ...r,
            ref: t
        }), s) : null
    });
Um.displayName = aw;

function uw(e, t) {
    return h.useReducer((n, r) => t[n][r] ? ? n, e)
}
var kr = e => {
    const {
        present: t,
        children: n
    } = e, r = cw(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : h.Children.only(n), i = Be(r.ref, dw(o));
    return typeof n == "function" || r.isPresent ? h.cloneElement(o, {
        ref: i
    }) : null
};
kr.displayName = "Presence";

function cw(e) {
    const [t, n] = h.useState(), r = h.useRef(null), o = h.useRef(e), i = h.useRef("none"), s = e ? "mounted" : "unmounted", [l, u] = uw(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return h.useEffect(() => {
        const c = us(r.current);
        i.current = l === "mounted" ? c : "none"
    }, [l]), yt(() => {
        const c = r.current,
            d = o.current;
        if (d !== e) {
            const m = i.current,
                f = us(c);
            e ? u("MOUNT") : f === "none" || (c == null ? void 0 : c.display) === "none" ? u("UNMOUNT") : u(d && m !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, u]), yt(() => {
        if (t) {
            let c;
            const d = t.ownerDocument.defaultView ? ? window,
                p = f => {
                    const x = us(r.current).includes(f.animationName);
                    if (f.target === t && x && (u("ANIMATION_END"), !o.current)) {
                        const N = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = N)
                        })
                    }
                },
                m = f => {
                    f.target === t && (i.current = us(r.current))
                };
            return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
                d.clearTimeout(c), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p)
            }
        } else u("ANIMATION_END")
    }, [t, u]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: h.useCallback(c => {
            r.current = c ? getComputedStyle(c) : null, n(c)
        }, [])
    }
}

function us(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function dw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var fw = Lp[" useInsertionEffect ".trim().toString()] || yt;

function Fc({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [o, i, s] = pw({
        defaultProp: t,
        onChange: n
    }), l = e !== void 0, u = l ? e : o; {
        const d = h.useRef(e !== void 0);
        h.useEffect(() => {
            const p = d.current;
            p !== l && console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), d.current = l
        }, [l, r])
    }
    const c = h.useCallback(d => {
        var p;
        if (l) {
            const m = hw(d) ? d(e) : d;
            m !== e && ((p = s.current) == null || p.call(s, m))
        } else i(d)
    }, [l, e, i, s]);
    return [u, c]
}

function pw({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = h.useState(e), o = h.useRef(n), i = h.useRef(t);
    return fw(() => {
        i.current = t
    }, [t]), h.useEffect(() => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n)
    }, [n, o]), [n, r, i]
}

function hw(e) {
    return typeof e == "function"
}
var mw = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    gw = "VisuallyHidden",
    Ml = h.forwardRef((e, t) => a.jsx(ce.span, { ...e,
        ref: t,
        style: { ...mw,
            ...e.style
        }
    }));
Ml.displayName = gw;
var Vm = Ml,
    zc = "ToastProvider",
    [$c, vw, yw] = Dc("Toast"),
    [Hm, DS] = Li("Toast", [yw]),
    [xw, _l] = Hm(zc),
    Wm = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
        } = e, [l, u] = h.useState(null), [c, d] = h.useState(0), p = h.useRef(!1), m = h.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${zc}\`. Expected non-empty \`string\`.`), a.jsx($c.Provider, {
            scope: t,
            children: a.jsx(xw, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: i,
                toastCount: c,
                viewport: l,
                onViewportChange: u,
                onToastAdd: h.useCallback(() => d(f => f + 1), []),
                onToastRemove: h.useCallback(() => d(f => f - 1), []),
                isFocusedToastEscapeKeyDownRef: p,
                isClosePausedRef: m,
                children: s
            })
        })
    };
Wm.displayName = zc;
var Km = "ToastViewport",
    ww = ["F8"],
    Eu = "toast.viewportPause",
    Cu = "toast.viewportResume",
    Qm = h.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = ww,
            label: o = "Notifications ({hotkey})",
            ...i
        } = e, s = _l(Km, n), l = vw(n), u = h.useRef(null), c = h.useRef(null), d = h.useRef(null), p = h.useRef(null), m = Be(t, p, s.onViewportChange), f = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), w = s.toastCount > 0;
        h.useEffect(() => {
            const N = v => {
                var y;
                r.length !== 0 && r.every(E => v[E] || v.code === E) && ((y = p.current) == null || y.focus())
            };
            return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N)
        }, [r]), h.useEffect(() => {
            const N = u.current,
                v = p.current;
            if (w && N && v) {
                const g = () => {
                        if (!s.isClosePausedRef.current) {
                            const S = new CustomEvent(Eu);
                            v.dispatchEvent(S), s.isClosePausedRef.current = !0
                        }
                    },
                    y = () => {
                        if (s.isClosePausedRef.current) {
                            const S = new CustomEvent(Cu);
                            v.dispatchEvent(S), s.isClosePausedRef.current = !1
                        }
                    },
                    E = S => {
                        !N.contains(S.relatedTarget) && y()
                    },
                    C = () => {
                        N.contains(document.activeElement) || y()
                    };
                return N.addEventListener("focusin", g), N.addEventListener("focusout", E), N.addEventListener("pointermove", g), N.addEventListener("pointerleave", C), window.addEventListener("blur", g), window.addEventListener("focus", y), () => {
                    N.removeEventListener("focusin", g), N.removeEventListener("focusout", E), N.removeEventListener("pointermove", g), N.removeEventListener("pointerleave", C), window.removeEventListener("blur", g), window.removeEventListener("focus", y)
                }
            }
        }, [w, s.isClosePausedRef]);
        const x = h.useCallback(({
            tabbingDirection: N
        }) => {
            const g = l().map(y => {
                const E = y.ref.current,
                    C = [E, ...Ow(E)];
                return N === "forwards" ? C : C.reverse()
            });
            return (N === "forwards" ? g.reverse() : g).flat()
        }, [l]);
        return h.useEffect(() => {
            const N = p.current;
            if (N) {
                const v = g => {
                    var C, S, b;
                    const y = g.altKey || g.ctrlKey || g.metaKey;
                    if (g.key === "Tab" && !y) {
                        const R = document.activeElement,
                            P = g.shiftKey;
                        if (g.target === N && P) {
                            (C = c.current) == null || C.focus();
                            return
                        }
                        const I = x({
                                tabbingDirection: P ? "backwards" : "forwards"
                            }),
                            K = I.findIndex(L => L === R);
                        Ea(I.slice(K + 1)) ? g.preventDefault() : P ? (S = c.current) == null || S.focus() : (b = d.current) == null || b.focus()
                    }
                };
                return N.addEventListener("keydown", v), () => N.removeEventListener("keydown", v)
            }
        }, [l, x]), a.jsxs(lw, {
            ref: u,
            role: "region",
            "aria-label": o.replace("{hotkey}", f),
            tabIndex: -1,
            style: {
                pointerEvents: w ? void 0 : "none"
            },
            children: [w && a.jsx(Su, {
                ref: c,
                onFocusFromOutsideViewport: () => {
                    const N = x({
                        tabbingDirection: "forwards"
                    });
                    Ea(N)
                }
            }), a.jsx($c.Slot, {
                scope: n,
                children: a.jsx(ce.ol, {
                    tabIndex: -1,
                    ...i,
                    ref: m
                })
            }), w && a.jsx(Su, {
                ref: d,
                onFocusFromOutsideViewport: () => {
                    const N = x({
                        tabbingDirection: "backwards"
                    });
                    Ea(N)
                }
            })]
        })
    });
Qm.displayName = Km;
var Gm = "ToastFocusProxy",
    Su = h.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, i = _l(Gm, n);
        return a.jsx(Ml, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var c;
                const l = s.relatedTarget;
                !((c = i.viewport) != null && c.contains(l)) && r()
            }
        })
    });
Su.displayName = Gm;
var Ai = "Toast",
    Nw = "toast.swipeStart",
    Ew = "toast.swipeMove",
    Cw = "toast.swipeCancel",
    Sw = "toast.swipeEnd",
    Ym = h.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
        } = e, [l, u] = Fc({
            prop: r,
            defaultProp: o ? ? !0,
            onChange: i,
            caller: Ai
        });
        return a.jsx(kr, {
            present: n || l,
            children: a.jsx(jw, {
                open: l,
                ...s,
                ref: t,
                onClose: () => u(!1),
                onPause: We(e.onPause),
                onResume: We(e.onResume),
                onSwipeStart: q(e.onSwipeStart, c => {
                    c.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: q(e.onSwipeMove, c => {
                    const {
                        x: d,
                        y: p
                    } = c.detail.delta;
                    c.currentTarget.setAttribute("data-swipe", "move"), c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
                }),
                onSwipeCancel: q(e.onSwipeCancel, c => {
                    c.currentTarget.setAttribute("data-swipe", "cancel"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: q(e.onSwipeEnd, c => {
                    const {
                        x: d,
                        y: p
                    } = c.detail.delta;
                    c.currentTarget.setAttribute("data-swipe", "end"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), u(!1)
                })
            })
        })
    });
Ym.displayName = Ai;
var [bw, kw] = Hm(Ai, {
    onClose() {}
}), jw = h.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: u,
        onResume: c,
        onSwipeStart: d,
        onSwipeMove: p,
        onSwipeCancel: m,
        onSwipeEnd: f,
        ...w
    } = e, x = _l(Ai, n), [N, v] = h.useState(null), g = Be(t, L => v(L)), y = h.useRef(null), E = h.useRef(null), C = o || x.duration, S = h.useRef(0), b = h.useRef(C), R = h.useRef(0), {
        onToastAdd: P,
        onToastRemove: M
    } = x, F = We(() => {
        var Y;
        (N == null ? void 0 : N.contains(document.activeElement)) && ((Y = x.viewport) == null || Y.focus()), s()
    }), I = h.useCallback(L => {
        !L || L === 1 / 0 || (window.clearTimeout(R.current), S.current = new Date().getTime(), R.current = window.setTimeout(F, L))
    }, [F]);
    h.useEffect(() => {
        const L = x.viewport;
        if (L) {
            const Y = () => {
                    I(b.current), c == null || c()
                },
                $ = () => {
                    const V = new Date().getTime() - S.current;
                    b.current = b.current - V, window.clearTimeout(R.current), u == null || u()
                };
            return L.addEventListener(Eu, $), L.addEventListener(Cu, Y), () => {
                L.removeEventListener(Eu, $), L.removeEventListener(Cu, Y)
            }
        }
    }, [x.viewport, C, u, c, I]), h.useEffect(() => {
        i && !x.isClosePausedRef.current && I(C)
    }, [i, C, x.isClosePausedRef, I]), h.useEffect(() => (P(), () => M()), [P, M]);
    const K = h.useMemo(() => N ? ng(N) : null, [N]);
    return x.viewport ? a.jsxs(a.Fragment, {
        children: [K && a.jsx(Pw, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: K
        }), a.jsx(bw, {
            scope: n,
            onClose: F,
            children: Oi.createPortal(a.jsx($c.ItemSlot, {
                scope: n,
                children: a.jsx(sw, {
                    asChild: !0,
                    onEscapeKeyDown: q(l, () => {
                        x.isFocusedToastEscapeKeyDownRef.current || F(), x.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: a.jsx(ce.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": x.swipeDirection,
                        ...w,
                        ref: g,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: q(e.onKeyDown, L => {
                            L.key === "Escape" && (l == null || l(L.nativeEvent), L.nativeEvent.defaultPrevented || (x.isFocusedToastEscapeKeyDownRef.current = !0, F()))
                        }),
                        onPointerDown: q(e.onPointerDown, L => {
                            L.button === 0 && (y.current = {
                                x: L.clientX,
                                y: L.clientY
                            })
                        }),
                        onPointerMove: q(e.onPointerMove, L => {
                            if (!y.current) return;
                            const Y = L.clientX - y.current.x,
                                $ = L.clientY - y.current.y,
                                V = !!E.current,
                                j = ["left", "right"].includes(x.swipeDirection),
                                T = ["left", "up"].includes(x.swipeDirection) ? Math.min : Math.max,
                                A = j ? T(0, Y) : 0,
                                H = j ? 0 : T(0, $),
                                z = L.pointerType === "touch" ? 10 : 2,
                                Q = {
                                    x: A,
                                    y: H
                                },
                                X = {
                                    originalEvent: L,
                                    delta: Q
                                };
                            V ? (E.current = Q, cs(Ew, p, X, {
                                discrete: !1
                            })) : Af(Q, x.swipeDirection, z) ? (E.current = Q, cs(Nw, d, X, {
                                discrete: !1
                            }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(Y) > z || Math.abs($) > z) && (y.current = null)
                        }),
                        onPointerUp: q(e.onPointerUp, L => {
                            const Y = E.current,
                                $ = L.target;
                            if ($.hasPointerCapture(L.pointerId) && $.releasePointerCapture(L.pointerId), E.current = null, y.current = null, Y) {
                                const V = L.currentTarget,
                                    j = {
                                        originalEvent: L,
                                        delta: Y
                                    };
                                Af(Y, x.swipeDirection, x.swipeThreshold) ? cs(Sw, f, j, {
                                    discrete: !0
                                }) : cs(Cw, m, j, {
                                    discrete: !0
                                }), V.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), x.viewport)
        })]
    }) : null
}), Pw = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = _l(Ai, t), [i, s] = h.useState(!1), [l, u] = h.useState(!1);
    return Mw(() => s(!0)), h.useEffect(() => {
        const c = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(c)
    }, []), l ? null : a.jsx(Um, {
        asChild: !0,
        children: a.jsx(Ml, { ...r,
            children: i && a.jsxs(a.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, Rw = "ToastTitle", Xm = h.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return a.jsx(ce.div, { ...r,
        ref: t
    })
});
Xm.displayName = Rw;
var Tw = "ToastDescription",
    qm = h.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return a.jsx(ce.div, { ...r,
            ref: t
        })
    });
qm.displayName = Tw;
var Zm = "ToastAction",
    Jm = h.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? a.jsx(tg, {
            altText: n,
            asChild: !0,
            children: a.jsx(Bc, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Zm}\`. Expected non-empty \`string\`.`), null)
    });
Jm.displayName = Zm;
var eg = "ToastClose",
    Bc = h.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = kw(eg, n);
        return a.jsx(tg, {
            asChild: !0,
            children: a.jsx(ce.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: q(e.onClick, o.onClose)
            })
        })
    });
Bc.displayName = eg;
var tg = h.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return a.jsx(ce.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function ng(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), _w(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...ng(r))
        }
    }), t
}

function cs(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? sl(o, i) : o.dispatchEvent(i)
}
var Af = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
};

function Mw(e = () => {}) {
    const t = We(e);
    yt(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function _w(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function Ow(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Ea(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var Lw = Wm,
    rg = Qm,
    og = Ym,
    ig = Xm,
    sg = qm,
    lg = Jm,
    ag = Bc;

function ug(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = ug(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function cg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = ug(e)) && (r && (r += " "), r += t);
    return r
}
const If = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    Df = cg,
    Ol = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return Df(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: i
        } = t, s = Object.keys(o).map(c => {
            const d = n == null ? void 0 : n[c],
                p = i == null ? void 0 : i[c];
            if (d === null) return null;
            const m = If(d) || If(p);
            return o[c][m]
        }), l = n && Object.entries(n).reduce((c, d) => {
            let [p, m] = d;
            return m === void 0 || (c[p] = m), c
        }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
            let {
                class: p,
                className: m,
                ...f
            } = d;
            return Object.entries(f).every(w => {
                let [x, N] = w;
                return Array.isArray(N) ? N.includes({ ...i,
                    ...l
                }[x]) : { ...i,
                    ...l
                }[x] === N
            }) ? [...c, p, m] : c
        }, []);
        return Df(e, s, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    dg = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Iw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dw = h.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...l
}, u) => h.createElement("svg", {
    ref: u,
    ...Iw,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: dg("lucide", o),
    ...l
}, [...s.map(([c, d]) => h.createElement(c, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = (e, t) => {
    const n = h.forwardRef(({
        className: r,
        ...o
    }, i) => h.createElement(Dw, {
        ref: i,
        iconNode: t,
        className: dg(`lucide-${Aw(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = ae("Award", [
    ["path", {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv"
    }],
    ["circle", {
        cx: "12",
        cy: "8",
        r: "6",
        key: "1vp47v"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = ae("BookOpen", [
    ["path", {
        d: "M12 7v14",
        key: "1akyts"
    }],
    ["path", {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fw = ae("Briefcase", [
    ["path", {
        d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
        key: "jecpp"
    }],
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "6",
        rx: "2",
        key: "i6l2r4"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zw = ae("Calendar", [
    ["path", {
        d: "M8 2v4",
        key: "1cmpym"
    }],
    ["path", {
        d: "M16 2v4",
        key: "4m81vk"
    }],
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        key: "1hopcy"
    }],
    ["path", {
        d: "M3 10h18",
        key: "8toen8"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $w = ae("ChartColumn", [
    ["path", {
        d: "M3 3v16a2 2 0 0 0 2 2h16",
        key: "c24i48"
    }],
    ["path", {
        d: "M18 17V9",
        key: "2bz60n"
    }],
    ["path", {
        d: "M13 17V5",
        key: "1frdt8"
    }],
    ["path", {
        d: "M8 17v-3",
        key: "17ska0"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bw = ae("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uc = ae("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fg = ae("Database", [
    ["ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3",
        key: "msslwz"
    }],
    ["path", {
        d: "M3 5V19A9 3 0 0 0 21 19V5",
        key: "1wlel7"
    }],
    ["path", {
        d: "M3 12A9 3 0 0 0 21 12",
        key: "mv7ke4"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ri = ae("FileText", [
    ["path", {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
    }],
    ["path", {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
    }],
    ["path", {
        d: "M10 9H8",
        key: "b1mrlr"
    }],
    ["path", {
        d: "M16 13H8",
        key: "t4e002"
    }],
    ["path", {
        d: "M16 17H8",
        key: "z1uh3a"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uw = ae("Github", [
    ["path", {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
    }],
    ["path", {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "9comsn"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pg = ae("Globe", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
        key: "13o1zl"
    }],
    ["path", {
        d: "M2 12h20",
        key: "9i4pu4"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vw = ae("GraduationCap", [
    ["path", {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0"
    }],
    ["path", {
        d: "M22 10v6",
        key: "1lu8f3"
    }],
    ["path", {
        d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
        key: "1r8lef"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vc = ae("Heart", [
    ["path", {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bu = ae("Lightbulb", [
    ["path", {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb"
    }],
    ["path", {
        d: "M9 18h6",
        key: "x1upvd"
    }],
    ["path", {
        d: "M10 22h4",
        key: "ceow96"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hw = ae("Linkedin", [
    ["path", {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f"
    }],
    ["rect", {
        width: "4",
        height: "12",
        x: "2",
        y: "9",
        key: "mk3on5"
    }],
    ["circle", {
        cx: "4",
        cy: "4",
        r: "2",
        key: "bt5ra8"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hg = ae("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mg = ae("MapPin", [
    ["path", {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
    }],
    ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ww = ae("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = ae("Monitor", [
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "3",
        rx: "2",
        key: "48i651"
    }],
    ["line", {
        x1: "8",
        x2: "16",
        y1: "21",
        y2: "21",
        key: "1svkeh"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "17",
        y2: "21",
        key: "vw1qmm"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vg = ae("Phone", [
    ["path", {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = ae("Rocket", [
    ["path", {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz"
    }],
    ["path", {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk"
    }],
    ["path", {
        d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
        key: "1f8sc4"
    }],
    ["path", {
        d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
        key: "qeys4"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kw = ae("SquareCheckBig", [
    ["path", {
        d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",
        key: "1uzm8b"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = ae("Target", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "6",
        key: "1vlfrh"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "2",
        key: "1c9p78"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qw = ae("Trophy", [
    ["path", {
        d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
        key: "17hqa7"
    }],
    ["path", {
        d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
        key: "lmptdp"
    }],
    ["path", {
        d: "M4 22h16",
        key: "57wxv0"
    }],
    ["path", {
        d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
        key: "1nw9bq"
    }],
    ["path", {
        d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
        key: "1np0yb"
    }],
    ["path", {
        d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
        key: "u46fv3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gw = ae("Twitter", [
    ["path", {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hc = ae("User", [
    ["path", {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
    }],
    ["circle", {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = ae("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yw = ae("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    Wc = "-",
    Xw = e => {
        const t = Zw(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const l = s.split(Wc);
                return l[0] === "" && l.length !== 1 && l.shift(), yg(l, t) || qw(s)
            },
            getConflictingClassGroupIds: (s, l) => {
                const u = n[s] || [];
                return l && r[s] ? [...u, ...r[s]] : u
            }
        }
    },
    yg = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? yg(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(Wc);
        return (s = t.validators.find(({
            validator: l
        }) => l(i))) == null ? void 0 : s.classGroupId
    },
    zf = /^\[(.+)\]$/,
    qw = e => {
        if (zf.test(e)) {
            const t = zf.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    Zw = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return e1(Object.entries(e.classGroups), n).forEach(([i, s]) => {
            ku(s, r, i, t)
        }), r
    },
    ku = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const i = o === "" ? t : $f(t, o);
                i.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (Jw(o)) {
                    ku(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([i, s]) => {
                ku(s, $f(t, i), n, r)
            })
        })
    },
    $f = (e, t) => {
        let n = e;
        return t.split(Wc).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    Jw = e => e.isThemeGetter,
    e1 = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
        return [n, o]
    }) : e,
    t1 = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const o = (i, s) => {
            n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s)
            }
        }
    },
    xg = "!",
    n1 = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, o = t[0], i = t.length, s = l => {
            const u = [];
            let c = 0,
                d = 0,
                p;
            for (let N = 0; N < l.length; N++) {
                let v = l[N];
                if (c === 0) {
                    if (v === o && (r || l.slice(N, N + i) === t)) {
                        u.push(l.slice(d, N)), d = N + i;
                        continue
                    }
                    if (v === "/") {
                        p = N;
                        continue
                    }
                }
                v === "[" ? c++ : v === "]" && c--
            }
            const m = u.length === 0 ? l : l.substring(d),
                f = m.startsWith(xg),
                w = f ? m.substring(1) : m,
                x = p && p > d ? p - d : void 0;
            return {
                modifiers: u,
                hasImportantModifier: f,
                baseClassName: w,
                maybePostfixModifierPosition: x
            }
        };
        return n ? l => n({
            className: l,
            parseClassName: s
        }) : s
    },
    r1 = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    o1 = e => ({
        cache: t1(e.cacheSize),
        parseClassName: n1(e),
        ...Xw(e)
    }),
    i1 = /\s+/,
    s1 = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o
        } = t, i = [], s = e.trim().split(i1);
        let l = "";
        for (let u = s.length - 1; u >= 0; u -= 1) {
            const c = s[u],
                {
                    modifiers: d,
                    hasImportantModifier: p,
                    baseClassName: m,
                    maybePostfixModifierPosition: f
                } = n(c);
            let w = !!f,
                x = r(w ? m.substring(0, f) : m);
            if (!x) {
                if (!w) {
                    l = c + (l.length > 0 ? " " + l : l);
                    continue
                }
                if (x = r(m), !x) {
                    l = c + (l.length > 0 ? " " + l : l);
                    continue
                }
                w = !1
            }
            const N = r1(d).join(":"),
                v = p ? N + xg : N,
                g = v + x;
            if (i.includes(g)) continue;
            i.push(g);
            const y = o(x, w);
            for (let E = 0; E < y.length; ++E) {
                const C = y[E];
                i.push(v + C)
            }
            l = c + (l.length > 0 ? " " + l : l)
        }
        return l
    };

function l1() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = wg(t)) && (r && (r += " "), r += n);
    return r
}
const wg = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = wg(e[r])) && (n && (n += " "), n += t);
    return n
};

function a1(e, ...t) {
    let n, r, o, i = s;

    function s(u) {
        const c = t.reduce((d, p) => p(d), e());
        return n = o1(c), r = n.cache.get, o = n.cache.set, i = l, l(u)
    }

    function l(u) {
        const c = r(u);
        if (c) return c;
        const d = s1(u, n);
        return o(u, d), d
    }
    return function() {
        return i(l1.apply(null, arguments))
    }
}
const de = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    Ng = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    u1 = /^\d+\/\d+$/,
    c1 = new Set(["px", "full", "screen"]),
    d1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    f1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    p1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    h1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    m1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    qt = e => to(e) || c1.has(e) || u1.test(e),
    Cn = e => bo(e, "length", C1),
    to = e => !!e && !Number.isNaN(Number(e)),
    Ca = e => bo(e, "number", to),
    $o = e => !!e && Number.isInteger(Number(e)),
    g1 = e => e.endsWith("%") && to(e.slice(0, -1)),
    W = e => Ng.test(e),
    Sn = e => d1.test(e),
    v1 = new Set(["length", "size", "percentage"]),
    y1 = e => bo(e, v1, Eg),
    x1 = e => bo(e, "position", Eg),
    w1 = new Set(["image", "url"]),
    N1 = e => bo(e, w1, b1),
    E1 = e => bo(e, "", S1),
    Bo = () => !0,
    bo = (e, t, n) => {
        const r = Ng.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    C1 = e => f1.test(e) && !p1.test(e),
    Eg = () => !1,
    S1 = e => h1.test(e),
    b1 = e => m1.test(e),
    k1 = () => {
        const e = de("colors"),
            t = de("spacing"),
            n = de("blur"),
            r = de("brightness"),
            o = de("borderColor"),
            i = de("borderRadius"),
            s = de("borderSpacing"),
            l = de("borderWidth"),
            u = de("contrast"),
            c = de("grayscale"),
            d = de("hueRotate"),
            p = de("invert"),
            m = de("gap"),
            f = de("gradientColorStops"),
            w = de("gradientColorStopPositions"),
            x = de("inset"),
            N = de("margin"),
            v = de("opacity"),
            g = de("padding"),
            y = de("saturate"),
            E = de("scale"),
            C = de("sepia"),
            S = de("skew"),
            b = de("space"),
            R = de("translate"),
            P = () => ["auto", "contain", "none"],
            M = () => ["auto", "hidden", "clip", "visible", "scroll"],
            F = () => ["auto", W, t],
            I = () => [W, t],
            K = () => ["", qt, Cn],
            L = () => ["auto", to, W],
            Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            $ = () => ["solid", "dashed", "dotted", "double", "none"],
            V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            T = () => ["", "0", W],
            A = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            H = () => [to, W];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Bo],
                spacing: [qt, Cn],
                blur: ["none", "", Sn, W],
                brightness: H(),
                borderColor: [e],
                borderRadius: ["none", "", "full", Sn, W],
                borderSpacing: I(),
                borderWidth: K(),
                contrast: H(),
                grayscale: T(),
                hueRotate: H(),
                invert: T(),
                gap: I(),
                gradientColorStops: [e],
                gradientColorStopPositions: [g1, Cn],
                inset: F(),
                margin: F(),
                opacity: H(),
                padding: I(),
                saturate: H(),
                scale: H(),
                sepia: T(),
                skew: H(),
                space: I(),
                translate: I()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", W]
                }],
                container: ["container"],
                columns: [{
                    columns: [Sn]
                }],
                "break-after": [{
                    "break-after": A()
                }],
                "break-before": [{
                    "break-before": A()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...Y(), W]
                }],
                overflow: [{
                    overflow: M()
                }],
                "overflow-x": [{
                    "overflow-x": M()
                }],
                "overflow-y": [{
                    "overflow-y": M()
                }],
                overscroll: [{
                    overscroll: P()
                }],
                "overscroll-x": [{
                    "overscroll-x": P()
                }],
                "overscroll-y": [{
                    "overscroll-y": P()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [x]
                }],
                "inset-x": [{
                    "inset-x": [x]
                }],
                "inset-y": [{
                    "inset-y": [x]
                }],
                start: [{
                    start: [x]
                }],
                end: [{
                    end: [x]
                }],
                top: [{
                    top: [x]
                }],
                right: [{
                    right: [x]
                }],
                bottom: [{
                    bottom: [x]
                }],
                left: [{
                    left: [x]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", $o, W]
                }],
                basis: [{
                    basis: F()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", W]
                }],
                grow: [{
                    grow: T()
                }],
                shrink: [{
                    shrink: T()
                }],
                order: [{
                    order: ["first", "last", "none", $o, W]
                }],
                "grid-cols": [{
                    "grid-cols": [Bo]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", $o, W]
                    }, W]
                }],
                "col-start": [{
                    "col-start": L()
                }],
                "col-end": [{
                    "col-end": L()
                }],
                "grid-rows": [{
                    "grid-rows": [Bo]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [$o, W]
                    }, W]
                }],
                "row-start": [{
                    "row-start": L()
                }],
                "row-end": [{
                    "row-end": L()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", W]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", W]
                }],
                gap: [{
                    gap: [m]
                }],
                "gap-x": [{
                    "gap-x": [m]
                }],
                "gap-y": [{
                    "gap-y": [m]
                }],
                "justify-content": [{
                    justify: ["normal", ...j()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...j(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...j(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [g]
                }],
                px: [{
                    px: [g]
                }],
                py: [{
                    py: [g]
                }],
                ps: [{
                    ps: [g]
                }],
                pe: [{
                    pe: [g]
                }],
                pt: [{
                    pt: [g]
                }],
                pr: [{
                    pr: [g]
                }],
                pb: [{
                    pb: [g]
                }],
                pl: [{
                    pl: [g]
                }],
                m: [{
                    m: [N]
                }],
                mx: [{
                    mx: [N]
                }],
                my: [{
                    my: [N]
                }],
                ms: [{
                    ms: [N]
                }],
                me: [{
                    me: [N]
                }],
                mt: [{
                    mt: [N]
                }],
                mr: [{
                    mr: [N]
                }],
                mb: [{
                    mb: [N]
                }],
                ml: [{
                    ml: [N]
                }],
                "space-x": [{
                    "space-x": [b]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [b]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, t]
                }],
                "min-w": [{
                    "min-w": [W, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [W, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [Sn]
                    }, Sn]
                }],
                h: [{
                    h: [W, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [W, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", Sn, Cn]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ca]
                }],
                "font-family": [{
                    font: [Bo]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", to, Ca]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", qt, W]
                }],
                "list-image": [{
                    "list-image": ["none", W]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", W]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [v]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [v]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...$(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", qt, Cn]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", qt, W]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: I()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", W]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [v]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...Y(), x1]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", y1]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, N1]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [w]
                }],
                "gradient-via-pos": [{
                    via: [w]
                }],
                "gradient-to-pos": [{
                    to: [w]
                }],
                "gradient-from": [{
                    from: [f]
                }],
                "gradient-via": [{
                    via: [f]
                }],
                "gradient-to": [{
                    to: [f]
                }],
                rounded: [{
                    rounded: [i]
                }],
                "rounded-s": [{
                    "rounded-s": [i]
                }],
                "rounded-e": [{
                    "rounded-e": [i]
                }],
                "rounded-t": [{
                    "rounded-t": [i]
                }],
                "rounded-r": [{
                    "rounded-r": [i]
                }],
                "rounded-b": [{
                    "rounded-b": [i]
                }],
                "rounded-l": [{
                    "rounded-l": [i]
                }],
                "rounded-ss": [{
                    "rounded-ss": [i]
                }],
                "rounded-se": [{
                    "rounded-se": [i]
                }],
                "rounded-ee": [{
                    "rounded-ee": [i]
                }],
                "rounded-es": [{
                    "rounded-es": [i]
                }],
                "rounded-tl": [{
                    "rounded-tl": [i]
                }],
                "rounded-tr": [{
                    "rounded-tr": [i]
                }],
                "rounded-br": [{
                    "rounded-br": [i]
                }],
                "rounded-bl": [{
                    "rounded-bl": [i]
                }],
                "border-w": [{
                    border: [l]
                }],
                "border-w-x": [{
                    "border-x": [l]
                }],
                "border-w-y": [{
                    "border-y": [l]
                }],
                "border-w-s": [{
                    "border-s": [l]
                }],
                "border-w-e": [{
                    "border-e": [l]
                }],
                "border-w-t": [{
                    "border-t": [l]
                }],
                "border-w-r": [{
                    "border-r": [l]
                }],
                "border-w-b": [{
                    "border-b": [l]
                }],
                "border-w-l": [{
                    "border-l": [l]
                }],
                "border-opacity": [{
                    "border-opacity": [v]
                }],
                "border-style": [{
                    border: [...$(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [l]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [l]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [v]
                }],
                "divide-style": [{
                    divide: $()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-s": [{
                    "border-s": [o]
                }],
                "border-color-e": [{
                    "border-e": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...$()]
                }],
                "outline-offset": [{
                    "outline-offset": [qt, W]
                }],
                "outline-w": [{
                    outline: [qt, Cn]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: K()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [v]
                }],
                "ring-offset-w": [{
                    "ring-offset": [qt, Cn]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", Sn, E1]
                }],
                "shadow-color": [{
                    shadow: [Bo]
                }],
                opacity: [{
                    opacity: [v]
                }],
                "mix-blend": [{
                    "mix-blend": [...V(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": V()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [u]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", Sn, W]
                }],
                grayscale: [{
                    grayscale: [c]
                }],
                "hue-rotate": [{
                    "hue-rotate": [d]
                }],
                invert: [{
                    invert: [p]
                }],
                saturate: [{
                    saturate: [y]
                }],
                sepia: [{
                    sepia: [C]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [u]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [c]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [d]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [p]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [v]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [y]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [C]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
                }],
                duration: [{
                    duration: H()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", W]
                }],
                delay: [{
                    delay: H()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", W]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [E]
                }],
                "scale-x": [{
                    "scale-x": [E]
                }],
                "scale-y": [{
                    "scale-y": [E]
                }],
                rotate: [{
                    rotate: [$o, W]
                }],
                "translate-x": [{
                    "translate-x": [R]
                }],
                "translate-y": [{
                    "translate-y": [R]
                }],
                "skew-x": [{
                    "skew-x": [S]
                }],
                "skew-y": [{
                    "skew-y": [S]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": I()
                }],
                "scroll-mx": [{
                    "scroll-mx": I()
                }],
                "scroll-my": [{
                    "scroll-my": I()
                }],
                "scroll-ms": [{
                    "scroll-ms": I()
                }],
                "scroll-me": [{
                    "scroll-me": I()
                }],
                "scroll-mt": [{
                    "scroll-mt": I()
                }],
                "scroll-mr": [{
                    "scroll-mr": I()
                }],
                "scroll-mb": [{
                    "scroll-mb": I()
                }],
                "scroll-ml": [{
                    "scroll-ml": I()
                }],
                "scroll-p": [{
                    "scroll-p": I()
                }],
                "scroll-px": [{
                    "scroll-px": I()
                }],
                "scroll-py": [{
                    "scroll-py": I()
                }],
                "scroll-ps": [{
                    "scroll-ps": I()
                }],
                "scroll-pe": [{
                    "scroll-pe": I()
                }],
                "scroll-pt": [{
                    "scroll-pt": I()
                }],
                "scroll-pr": [{
                    "scroll-pr": I()
                }],
                "scroll-pb": [{
                    "scroll-pb": I()
                }],
                "scroll-pl": [{
                    "scroll-pl": I()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", W]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [qt, Cn, Ca]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    j1 = a1(k1);

function we(...e) {
    return j1(cg(e))
}
const P1 = Lw,
    Cg = h.forwardRef(({
        className: e,
        ...t
    }, n) => a.jsx(rg, {
        ref: n,
        className: we("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
Cg.displayName = rg.displayName;
const R1 = Ol("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    Sg = h.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => a.jsx(og, {
        ref: r,
        className: we(R1({
            variant: t
        }), e),
        ...n
    }));
Sg.displayName = og.displayName;
const T1 = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx(lg, {
    ref: n,
    className: we("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
T1.displayName = lg.displayName;
const bg = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx(ag, {
    ref: n,
    className: we("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: a.jsx(Yw, {
        className: "h-4 w-4"
    })
}));
bg.displayName = ag.displayName;
const kg = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx(ig, {
    ref: n,
    className: we("text-sm font-semibold", e),
    ...t
}));
kg.displayName = ig.displayName;
const jg = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx(sg, {
    ref: n,
    className: we("text-sm opacity-90", e),
    ...t
}));
jg.displayName = sg.displayName;

function M1() {
    const {
        toasts: e
    } = Hx();
    return a.jsxs(P1, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: o,
            ...i
        }) {
            return a.jsxs(Sg, { ...i,
                children: [a.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && a.jsx(kg, {
                        children: n
                    }), r && a.jsx(jg, {
                        children: r
                    })]
                }), o, a.jsx(bg, {})]
            }, t)
        }), a.jsx(Cg, {})]
    })
}
var Bf = ["light", "dark"],
    _1 = "(prefers-color-scheme: dark)",
    O1 = h.createContext(void 0),
    L1 = {
        setTheme: e => {},
        themes: []
    },
    A1 = () => {
        var e;
        return (e = h.useContext(O1)) != null ? e : L1
    };
h.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: u
}) => {
    let c = i === "system",
        d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w=>`'${w}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        p = o ? Bf.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        m = (w, x = !1, N = !0) => {
            let v = s ? s[w] : w,
                g = x ? w + "|| ''" : `'${v}'`,
                y = "";
            return o && N && !x && Bf.includes(w) && (y += `d.style.colorScheme = '${w}';`), n === "class" ? x || v ? y += `c.add(${g})` : y += "null" : v && (y += `d[s](n,${g})`), y
        },
        f = e ? `!function(){${d}${m(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${_1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${m(s?"x[e]":"e",!0)}}${c?"":"else{"+m(i,!1,!1)+"}"}${p}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${m(s?"x[e]":"e",!0)}}else{${m(i,!1,!1)};}${p}}catch(t){}}();`;
    return h.createElement("script", {
        nonce: u,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
});
var I1 = e => {
        switch (e) {
            case "success":
                return z1;
            case "info":
                return B1;
            case "warning":
                return $1;
            case "error":
                return U1;
            default:
                return null
        }
    },
    D1 = Array(12).fill(0),
    F1 = ({
        visible: e,
        className: t
    }) => O.createElement("div", {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e
    }, O.createElement("div", {
        className: "sonner-spinner"
    }, D1.map((n, r) => O.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${r}`
    })))),
    z1 = O.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, O.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    $1 = O.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, O.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    B1 = O.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, O.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    U1 = O.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, O.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    V1 = O.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, O.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), O.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    H1 = () => {
        let [e, t] = O.useState(document.hidden);
        return O.useEffect(() => {
            let n = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), e
    },
    ju = 1,
    W1 = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {
                    message: n,
                    ...r
                } = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : ju++, i = this.toasts.find(l => l.id === o), s = e.dismissible === void 0 ? !0 : e.dismissible;
                return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({ ...l,
                    ...e,
                    id: o,
                    title: n
                }), { ...l,
                    ...e,
                    id: o,
                    dismissible: s,
                    title: n
                }) : l) : this.addToast({
                    title: n,
                    ...r,
                    dismissible: s,
                    id: o
                }), o
            }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts.forEach(t => {
                this.subscribers.forEach(n => n({
                    id: t.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({ ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: "loading",
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({ ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let r = e instanceof Promise ? e : e(),
                    o = n !== void 0,
                    i, s = r.then(async u => {
                        if (i = ["resolve", u], O.isValidElement(u)) o = !1, this.create({
                            id: n,
                            type: "default",
                            message: u
                        });
                        else if (Q1(u) && !u.ok) {
                            o = !1;
                            let c = typeof t.error == "function" ? await t.error(`HTTP error! status: ${u.status}`) : t.error,
                                d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${u.status}`) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: c,
                                description: d
                            })
                        } else if (t.success !== void 0) {
                            o = !1;
                            let c = typeof t.success == "function" ? await t.success(u) : t.success,
                                d = typeof t.description == "function" ? await t.description(u) : t.description;
                            this.create({
                                id: n,
                                type: "success",
                                message: c,
                                description: d
                            })
                        }
                    }).catch(async u => {
                        if (i = ["reject", u], t.error !== void 0) {
                            o = !1;
                            let c = typeof t.error == "function" ? await t.error(u) : t.error,
                                d = typeof t.description == "function" ? await t.description(u) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: c,
                                description: d
                            })
                        }
                    }).finally(() => {
                        var u;
                        o && (this.dismiss(n), n = void 0), (u = t.finally) == null || u.call(t)
                    }),
                    l = () => new Promise((u, c) => s.then(() => i[0] === "reject" ? c(i[1]) : u(i[1])).catch(c));
                return typeof n != "string" && typeof n != "number" ? {
                    unwrap: l
                } : Object.assign(n, {
                    unwrap: l
                })
            }, this.custom = (e, t) => {
                let n = (t == null ? void 0 : t.id) || ju++;
                return this.create({
                    jsx: e(n),
                    id: n,
                    ...t
                }), n
            }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
        }
    },
    Xe = new W1,
    K1 = (e, t) => {
        let n = (t == null ? void 0 : t.id) || ju++;
        return Xe.addToast({
            title: e,
            ...t,
            id: n
        }), n
    },
    Q1 = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    G1 = K1,
    Y1 = () => Xe.toasts,
    X1 = () => Xe.getActiveToasts();
Object.assign(G1, {
    success: Xe.success,
    info: Xe.info,
    warning: Xe.warning,
    error: Xe.error,
    custom: Xe.custom,
    message: Xe.message,
    promise: Xe.promise,
    dismiss: Xe.dismiss,
    loading: Xe.loading
}, {
    getHistory: Y1,
    getToasts: X1
});

function q1(e, {
    insertAt: t
} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
q1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function ds(e) {
    return e.label !== void 0
}
var Z1 = 3,
    J1 = "32px",
    e2 = "16px",
    Uf = 4e3,
    t2 = 356,
    n2 = 14,
    r2 = 20,
    o2 = 200;

function St(...e) {
    return e.filter(Boolean).join(" ")
}

function i2(e) {
    let [t, n] = e.split("-"), r = [];
    return t && r.push(t), n && r.push(n), r
}
var s2 = e => {
    var t, n, r, o, i, s, l, u, c, d, p;
    let {
        invert: m,
        toast: f,
        unstyled: w,
        interacting: x,
        setHeights: N,
        visibleToasts: v,
        heights: g,
        index: y,
        toasts: E,
        expanded: C,
        removeToast: S,
        defaultRichColors: b,
        closeButton: R,
        style: P,
        cancelButtonStyle: M,
        actionButtonStyle: F,
        className: I = "",
        descriptionClassName: K = "",
        duration: L,
        position: Y,
        gap: $,
        loadingIcon: V,
        expandByDefault: j,
        classNames: T,
        icons: A,
        closeButtonAriaLabel: H = "Close toast",
        pauseWhenPageIsHidden: z
    } = e, [Q, X] = O.useState(null), [Se, Le] = O.useState(null), [te, Pr] = O.useState(!1), [gn, Jn] = O.useState(!1), [vn, Rr] = O.useState(!1), [yn, Ui] = O.useState(!1), [Vl, Vi] = O.useState(!1), [Hl, To] = O.useState(0), [Tr, hd] = O.useState(0), Mo = O.useRef(f.duration || L || Uf), md = O.useRef(null), er = O.useRef(null), oy = y === 0, iy = y + 1 <= v, ct = f.type, Mr = f.dismissible !== !1, sy = f.className || "", ly = f.descriptionClassName || "", Hi = O.useMemo(() => g.findIndex(B => B.toastId === f.id) || 0, [g, f.id]), ay = O.useMemo(() => {
        var B;
        return (B = f.closeButton) != null ? B : R
    }, [f.closeButton, R]), gd = O.useMemo(() => f.duration || L || Uf, [f.duration, L]), Wl = O.useRef(0), _r = O.useRef(0), vd = O.useRef(0), Or = O.useRef(null), [uy, cy] = Y.split("-"), yd = O.useMemo(() => g.reduce((B, re, he) => he >= Hi ? B : B + re.height, 0), [g, Hi]), xd = H1(), dy = f.invert || m, Kl = ct === "loading";
    _r.current = O.useMemo(() => Hi * $ + yd, [Hi, yd]), O.useEffect(() => {
        Mo.current = gd
    }, [gd]), O.useEffect(() => {
        Pr(!0)
    }, []), O.useEffect(() => {
        let B = er.current;
        if (B) {
            let re = B.getBoundingClientRect().height;
            return hd(re), N(he => [{
                toastId: f.id,
                height: re,
                position: f.position
            }, ...he]), () => N(he => he.filter(wt => wt.toastId !== f.id))
        }
    }, [N, f.id]), O.useLayoutEffect(() => {
        if (!te) return;
        let B = er.current,
            re = B.style.height;
        B.style.height = "auto";
        let he = B.getBoundingClientRect().height;
        B.style.height = re, hd(he), N(wt => wt.find(Nt => Nt.toastId === f.id) ? wt.map(Nt => Nt.toastId === f.id ? { ...Nt,
            height: he
        } : Nt) : [{
            toastId: f.id,
            height: he,
            position: f.position
        }, ...wt])
    }, [te, f.title, f.description, N, f.id]);
    let xn = O.useCallback(() => {
        Jn(!0), To(_r.current), N(B => B.filter(re => re.toastId !== f.id)), setTimeout(() => {
            S(f)
        }, o2)
    }, [f, S, N, _r]);
    O.useEffect(() => {
        if (f.promise && ct === "loading" || f.duration === 1 / 0 || f.type === "loading") return;
        let B;
        return C || x || z && xd ? (() => {
            if (vd.current < Wl.current) {
                let re = new Date().getTime() - Wl.current;
                Mo.current = Mo.current - re
            }
            vd.current = new Date().getTime()
        })() : Mo.current !== 1 / 0 && (Wl.current = new Date().getTime(), B = setTimeout(() => {
            var re;
            (re = f.onAutoClose) == null || re.call(f, f), xn()
        }, Mo.current)), () => clearTimeout(B)
    }, [C, x, f, ct, z, xd, xn]), O.useEffect(() => {
        f.delete && xn()
    }, [xn, f.delete]);

    function fy() {
        var B, re, he;
        return A != null && A.loading ? O.createElement("div", {
            className: St(T == null ? void 0 : T.loader, (B = f == null ? void 0 : f.classNames) == null ? void 0 : B.loader, "sonner-loader"),
            "data-visible": ct === "loading"
        }, A.loading) : V ? O.createElement("div", {
            className: St(T == null ? void 0 : T.loader, (re = f == null ? void 0 : f.classNames) == null ? void 0 : re.loader, "sonner-loader"),
            "data-visible": ct === "loading"
        }, V) : O.createElement(F1, {
            className: St(T == null ? void 0 : T.loader, (he = f == null ? void 0 : f.classNames) == null ? void 0 : he.loader),
            visible: ct === "loading"
        })
    }
    return O.createElement("li", {
        tabIndex: 0,
        ref: er,
        className: St(I, sy, T == null ? void 0 : T.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[ct], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[ct]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = f.richColors) != null ? r : b,
        "data-styled": !(f.jsx || f.unstyled || w),
        "data-mounted": te,
        "data-promise": !!f.promise,
        "data-swiped": Vl,
        "data-removed": gn,
        "data-visible": iy,
        "data-y-position": uy,
        "data-x-position": cy,
        "data-index": y,
        "data-front": oy,
        "data-swiping": vn,
        "data-dismissible": Mr,
        "data-type": ct,
        "data-invert": dy,
        "data-swipe-out": yn,
        "data-swipe-direction": Se,
        "data-expanded": !!(C || j && te),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": E.length - y,
            "--offset": `${gn?Hl:_r.current}px`,
            "--initial-height": j ? "auto" : `${Tr}px`,
            ...P,
            ...f.style
        },
        onDragEnd: () => {
            Rr(!1), X(null), Or.current = null
        },
        onPointerDown: B => {
            Kl || !Mr || (md.current = new Date, To(_r.current), B.target.setPointerCapture(B.pointerId), B.target.tagName !== "BUTTON" && (Rr(!0), Or.current = {
                x: B.clientX,
                y: B.clientY
            }))
        },
        onPointerUp: () => {
            var B, re, he, wt;
            if (yn || !Mr) return;
            Or.current = null;
            let Nt = Number(((B = er.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                wn = Number(((re = er.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                tr = new Date().getTime() - ((he = md.current) == null ? void 0 : he.getTime()),
                Et = Q === "x" ? Nt : wn,
                Nn = Math.abs(Et) / tr;
            if (Math.abs(Et) >= r2 || Nn > .11) {
                To(_r.current), (wt = f.onDismiss) == null || wt.call(f, f), Le(Q === "x" ? Nt > 0 ? "right" : "left" : wn > 0 ? "down" : "up"), xn(), Ui(!0), Vi(!1);
                return
            }
            Rr(!1), X(null)
        },
        onPointerMove: B => {
            var re, he, wt, Nt;
            if (!Or.current || !Mr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0) return;
            let wn = B.clientY - Or.current.y,
                tr = B.clientX - Or.current.x,
                Et = (he = e.swipeDirections) != null ? he : i2(Y);
            !Q && (Math.abs(tr) > 1 || Math.abs(wn) > 1) && X(Math.abs(tr) > Math.abs(wn) ? "x" : "y");
            let Nn = {
                x: 0,
                y: 0
            };
            Q === "y" ? (Et.includes("top") || Et.includes("bottom")) && (Et.includes("top") && wn < 0 || Et.includes("bottom") && wn > 0) && (Nn.y = wn) : Q === "x" && (Et.includes("left") || Et.includes("right")) && (Et.includes("left") && tr < 0 || Et.includes("right") && tr > 0) && (Nn.x = tr), (Math.abs(Nn.x) > 0 || Math.abs(Nn.y) > 0) && Vi(!0), (wt = er.current) == null || wt.style.setProperty("--swipe-amount-x", `${Nn.x}px`), (Nt = er.current) == null || Nt.style.setProperty("--swipe-amount-y", `${Nn.y}px`)
        }
    }, ay && !f.jsx ? O.createElement("button", {
        "aria-label": H,
        "data-disabled": Kl,
        "data-close-button": !0,
        onClick: Kl || !Mr ? () => {} : () => {
            var B;
            xn(), (B = f.onDismiss) == null || B.call(f, f)
        },
        className: St(T == null ? void 0 : T.closeButton, (o = f == null ? void 0 : f.classNames) == null ? void 0 : o.closeButton)
    }, (i = A == null ? void 0 : A.close) != null ? i : V1) : null, f.jsx || h.isValidElement(f.title) ? f.jsx ? f.jsx : typeof f.title == "function" ? f.title() : f.title : O.createElement(O.Fragment, null, ct || f.icon || f.promise ? O.createElement("div", {
        "data-icon": "",
        className: St(T == null ? void 0 : T.icon, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.icon)
    }, f.promise || f.type === "loading" && !f.icon ? f.icon || fy() : null, f.type !== "loading" ? f.icon || (A == null ? void 0 : A[ct]) || I1(ct) : null) : null, O.createElement("div", {
        "data-content": "",
        className: St(T == null ? void 0 : T.content, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.content)
    }, O.createElement("div", {
        "data-title": "",
        className: St(T == null ? void 0 : T.title, (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.title)
    }, typeof f.title == "function" ? f.title() : f.title), f.description ? O.createElement("div", {
        "data-description": "",
        className: St(K, ly, T == null ? void 0 : T.description, (c = f == null ? void 0 : f.classNames) == null ? void 0 : c.description)
    }, typeof f.description == "function" ? f.description() : f.description) : null), h.isValidElement(f.cancel) ? f.cancel : f.cancel && ds(f.cancel) ? O.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: f.cancelButtonStyle || M,
        onClick: B => {
            var re, he;
            ds(f.cancel) && Mr && ((he = (re = f.cancel).onClick) == null || he.call(re, B), xn())
        },
        className: St(T == null ? void 0 : T.cancelButton, (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.cancelButton)
    }, f.cancel.label) : null, h.isValidElement(f.action) ? f.action : f.action && ds(f.action) ? O.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: f.actionButtonStyle || F,
        onClick: B => {
            var re, he;
            ds(f.action) && ((he = (re = f.action).onClick) == null || he.call(re, B), !B.defaultPrevented && xn())
        },
        className: St(T == null ? void 0 : T.actionButton, (p = f == null ? void 0 : f.classNames) == null ? void 0 : p.actionButton)
    }, f.action.label) : null))
};

function Vf() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}

function l2(e, t) {
    let n = {};
    return [e, t].forEach((r, o) => {
        let i = o === 1,
            s = i ? "--mobile-offset" : "--offset",
            l = i ? e2 : J1;

        function u(c) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${s}-${d}`] = typeof c == "number" ? `${c}px` : c
            })
        }
        typeof r == "number" || typeof r == "string" ? u(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(c => {
            r[c] === void 0 ? n[`${s}-${c}`] = l : n[`${s}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c]
        }) : u(l)
    }), n
}
var a2 = h.forwardRef(function(e, t) {
    let {
        invert: n,
        position: r = "bottom-right",
        hotkey: o = ["altKey", "KeyT"],
        expand: i,
        closeButton: s,
        className: l,
        offset: u,
        mobileOffset: c,
        theme: d = "light",
        richColors: p,
        duration: m,
        style: f,
        visibleToasts: w = Z1,
        toastOptions: x,
        dir: N = Vf(),
        gap: v = n2,
        loadingIcon: g,
        icons: y,
        containerAriaLabel: E = "Notifications",
        pauseWhenPageIsHidden: C
    } = e, [S, b] = O.useState([]), R = O.useMemo(() => Array.from(new Set([r].concat(S.filter(z => z.position).map(z => z.position)))), [S, r]), [P, M] = O.useState([]), [F, I] = O.useState(!1), [K, L] = O.useState(!1), [Y, $] = O.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), V = O.useRef(null), j = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), T = O.useRef(null), A = O.useRef(!1), H = O.useCallback(z => {
        b(Q => {
            var X;
            return (X = Q.find(Se => Se.id === z.id)) != null && X.delete || Xe.dismiss(z.id), Q.filter(({
                id: Se
            }) => Se !== z.id)
        })
    }, []);
    return O.useEffect(() => Xe.subscribe(z => {
        if (z.dismiss) {
            b(Q => Q.map(X => X.id === z.id ? { ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout(() => {
            Ac.flushSync(() => {
                b(Q => {
                    let X = Q.findIndex(Se => Se.id === z.id);
                    return X !== -1 ? [...Q.slice(0, X), { ...Q[X],
                        ...z
                    }, ...Q.slice(X + 1)] : [z, ...Q]
                })
            })
        })
    }), []), O.useEffect(() => {
        if (d !== "system") {
            $(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")), typeof window > "u") return;
        let z = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            z.addEventListener("change", ({
                matches: Q
            }) => {
                $(Q ? "dark" : "light")
            })
        } catch {
            z.addListener(({
                matches: X
            }) => {
                try {
                    $(X ? "dark" : "light")
                } catch (Se) {
                    console.error(Se)
                }
            })
        }
    }, [d]), O.useEffect(() => {
        S.length <= 1 && I(!1)
    }, [S]), O.useEffect(() => {
        let z = Q => {
            var X, Se;
            o.every(Le => Q[Le] || Q.code === Le) && (I(!0), (X = V.current) == null || X.focus()), Q.code === "Escape" && (document.activeElement === V.current || (Se = V.current) != null && Se.contains(document.activeElement)) && I(!1)
        };
        return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z)
    }, [o]), O.useEffect(() => {
        if (V.current) return () => {
            T.current && (T.current.focus({
                preventScroll: !0
            }), T.current = null, A.current = !1)
        }
    }, [V.current]), O.createElement("section", {
        ref: t,
        "aria-label": `${E} ${j}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, R.map((z, Q) => {
        var X;
        let [Se, Le] = z.split("-");
        return S.length ? O.createElement("ol", {
            key: z,
            dir: N === "auto" ? Vf() : N,
            tabIndex: -1,
            ref: V,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": Y,
            "data-y-position": Se,
            "data-lifted": F && S.length > 1 && !i,
            "data-x-position": Le,
            style: {
                "--front-toast-height": `${((X=P[0])==null?void 0:X.height)||0}px`,
                "--width": `${t2}px`,
                "--gap": `${v}px`,
                ...f,
                ...l2(u, c)
            },
            onBlur: te => {
                A.current && !te.currentTarget.contains(te.relatedTarget) && (A.current = !1, T.current && (T.current.focus({
                    preventScroll: !0
                }), T.current = null))
            },
            onFocus: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || A.current || (A.current = !0, T.current = te.relatedTarget)
            },
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                K || I(!1)
            },
            onDragEnd: () => I(!1),
            onPointerDown: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || L(!0)
            },
            onPointerUp: () => L(!1)
        }, S.filter(te => !te.position && Q === 0 || te.position === z).map((te, Pr) => {
            var gn, Jn;
            return O.createElement(s2, {
                key: te.id,
                icons: y,
                index: Pr,
                toast: te,
                defaultRichColors: p,
                duration: (gn = x == null ? void 0 : x.duration) != null ? gn : m,
                className: x == null ? void 0 : x.className,
                descriptionClassName: x == null ? void 0 : x.descriptionClassName,
                invert: n,
                visibleToasts: w,
                closeButton: (Jn = x == null ? void 0 : x.closeButton) != null ? Jn : s,
                interacting: K,
                position: z,
                style: x == null ? void 0 : x.style,
                unstyled: x == null ? void 0 : x.unstyled,
                classNames: x == null ? void 0 : x.classNames,
                cancelButtonStyle: x == null ? void 0 : x.cancelButtonStyle,
                actionButtonStyle: x == null ? void 0 : x.actionButtonStyle,
                removeToast: H,
                toasts: S.filter(vn => vn.position == te.position),
                heights: P.filter(vn => vn.position == te.position),
                setHeights: M,
                expandByDefault: i,
                gap: v,
                loadingIcon: g,
                expanded: F,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        })) : null
    }))
});
const u2 = ({ ...e
}) => {
    const {
        theme: t = "system"
    } = A1();
    return a.jsx(a2, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
};
var c2 = Lp[" useId ".trim().toString()] || (() => {}),
    d2 = 0;

function Pg(e) {
    const [t, n] = h.useState(c2());
    return yt(() => {
        e || n(r => r ? ? String(d2++))
    }, [e]), e || (t ? `radix-${t}` : "")
}
const f2 = ["top", "right", "bottom", "left"],
    Qn = Math.min,
    rt = Math.max,
    ll = Math.round,
    fs = Math.floor,
    Kt = e => ({
        x: e,
        y: e
    }),
    p2 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    h2 = {
        start: "end",
        end: "start"
    };

function Pu(e, t, n) {
    return rt(e, Qn(t, n))
}

function dn(e, t) {
    return typeof e == "function" ? e(t) : e
}

function fn(e) {
    return e.split("-")[0]
}

function ko(e) {
    return e.split("-")[1]
}

function Kc(e) {
    return e === "x" ? "y" : "x"
}

function Qc(e) {
    return e === "y" ? "height" : "width"
}
const m2 = new Set(["top", "bottom"]);

function Vt(e) {
    return m2.has(fn(e)) ? "y" : "x"
}

function Gc(e) {
    return Kc(Vt(e))
}

function g2(e, t, n) {
    n === void 0 && (n = !1);
    const r = ko(e),
        o = Gc(e),
        i = Qc(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = al(s)), [s, al(s)]
}

function v2(e) {
    const t = al(e);
    return [Ru(e), t, Ru(t)]
}

function Ru(e) {
    return e.replace(/start|end/g, t => h2[t])
}
const Hf = ["left", "right"],
    Wf = ["right", "left"],
    y2 = ["top", "bottom"],
    x2 = ["bottom", "top"];

function w2(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? Wf : Hf : t ? Hf : Wf;
        case "left":
        case "right":
            return t ? y2 : x2;
        default:
            return []
    }
}

function N2(e, t, n, r) {
    const o = ko(e);
    let i = w2(fn(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(Ru)))), i
}

function al(e) {
    return e.replace(/left|right|bottom|top/g, t => p2[t])
}

function E2(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function Rg(e) {
    return typeof e != "number" ? E2(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function ul(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function Kf(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const i = Vt(t),
        s = Gc(t),
        l = Qc(s),
        u = fn(t),
        c = i === "y",
        d = r.x + r.width / 2 - o.width / 2,
        p = r.y + r.height / 2 - o.height / 2,
        m = r[l] / 2 - o[l] / 2;
    let f;
    switch (u) {
        case "top":
            f = {
                x: d,
                y: r.y - o.height
            };
            break;
        case "bottom":
            f = {
                x: d,
                y: r.y + r.height
            };
            break;
        case "right":
            f = {
                x: r.x + r.width,
                y: p
            };
            break;
        case "left":
            f = {
                x: r.x - o.width,
                y: p
            };
            break;
        default:
            f = {
                x: r.x,
                y: r.y
            }
    }
    switch (ko(t)) {
        case "start":
            f[s] -= m * (n && c ? -1 : 1);
            break;
        case "end":
            f[s] += m * (n && c ? -1 : 1);
            break
    }
    return f
}
const C2 = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s
    } = n, l = i.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: d,
            y: p
        } = Kf(c, r, u),
        m = r,
        f = {},
        w = 0;
    for (let x = 0; x < l.length; x++) {
        const {
            name: N,
            fn: v
        } = l[x], {
            x: g,
            y,
            data: E,
            reset: C
        } = await v({
            x: d,
            y: p,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: f,
            rects: c,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = g ? ? d, p = y ? ? p, f = { ...f,
            [N]: { ...f[N],
                ...E
            }
        }, C && w <= 50 && (w++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (c = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects), {
            x: d,
            y: p
        } = Kf(c, m, u)), x = -1)
    }
    return {
        x: d,
        y: p,
        placement: m,
        strategy: o,
        middlewareData: f
    }
};
async function Ni(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: i,
        rects: s,
        elements: l,
        strategy: u
    } = e, {
        boundary: c = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: p = "floating",
        altBoundary: m = !1,
        padding: f = 0
    } = dn(t, e), w = Rg(f), N = l[m ? p === "floating" ? "reference" : "floating" : p], v = ul(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(N))) == null || n ? N : N.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: c,
        rootBoundary: d,
        strategy: u
    })), g = p === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), E = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, C = ul(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: g,
        offsetParent: y,
        strategy: u
    }) : g);
    return {
        top: (v.top - C.top + w.top) / E.y,
        bottom: (C.bottom - v.bottom + w.bottom) / E.y,
        left: (v.left - C.left + w.left) / E.x,
        right: (C.right - v.right + w.right) / E.x
    }
}
const S2 = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: s,
                elements: l,
                middlewareData: u
            } = t, {
                element: c,
                padding: d = 0
            } = dn(e, t) || {};
            if (c == null) return {};
            const p = Rg(d),
                m = {
                    x: n,
                    y: r
                },
                f = Gc(o),
                w = Qc(f),
                x = await s.getDimensions(c),
                N = f === "y",
                v = N ? "top" : "left",
                g = N ? "bottom" : "right",
                y = N ? "clientHeight" : "clientWidth",
                E = i.reference[w] + i.reference[f] - m[f] - i.floating[w],
                C = m[f] - i.reference[f],
                S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
            let b = S ? S[y] : 0;
            (!b || !await (s.isElement == null ? void 0 : s.isElement(S))) && (b = l.floating[y] || i.floating[w]);
            const R = E / 2 - C / 2,
                P = b / 2 - x[w] / 2 - 1,
                M = Qn(p[v], P),
                F = Qn(p[g], P),
                I = M,
                K = b - x[w] - F,
                L = b / 2 - x[w] / 2 + R,
                Y = Pu(I, L, K),
                $ = !u.arrow && ko(o) != null && L !== Y && i.reference[w] / 2 - (L < I ? M : F) - x[w] / 2 < 0,
                V = $ ? L < I ? L - I : L - K : 0;
            return {
                [f]: m[f] + V,
                data: {
                    [f]: Y,
                    centerOffset: L - Y - V,
                    ...$ && {
                        alignmentOffset: V
                    }
                },
                reset: $
            }
        }
    }),
    b2 = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: s,
                    initialPlacement: l,
                    platform: u,
                    elements: c
                } = t, {
                    mainAxis: d = !0,
                    crossAxis: p = !0,
                    fallbackPlacements: m,
                    fallbackStrategy: f = "bestFit",
                    fallbackAxisSideDirection: w = "none",
                    flipAlignment: x = !0,
                    ...N
                } = dn(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                const v = fn(o),
                    g = Vt(l),
                    y = fn(l) === l,
                    E = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)),
                    C = m || (y || !x ? [al(l)] : v2(l)),
                    S = w !== "none";
                !m && S && C.push(...N2(l, x, w, E));
                const b = [l, ...C],
                    R = await Ni(t, N),
                    P = [];
                let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                if (d && P.push(R[v]), p) {
                    const L = g2(o, s, E);
                    P.push(R[L[0]], R[L[1]])
                }
                if (M = [...M, {
                        placement: o,
                        overflows: P
                    }], !P.every(L => L <= 0)) {
                    var F, I;
                    const L = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1,
                        Y = b[L];
                    if (Y && (!(p === "alignment" ? g !== Vt(Y) : !1) || M.every(j => j.overflows[0] > 0 && Vt(j.placement) === g))) return {
                        data: {
                            index: L,
                            overflows: M
                        },
                        reset: {
                            placement: Y
                        }
                    };
                    let $ = (I = M.filter(V => V.overflows[0] <= 0).sort((V, j) => V.overflows[1] - j.overflows[1])[0]) == null ? void 0 : I.placement;
                    if (!$) switch (f) {
                        case "bestFit":
                            {
                                var K;
                                const V = (K = M.filter(j => {
                                    if (S) {
                                        const T = Vt(j.placement);
                                        return T === g || T === "y"
                                    }
                                    return !0
                                }).map(j => [j.placement, j.overflows.filter(T => T > 0).reduce((T, A) => T + A, 0)]).sort((j, T) => j[1] - T[1])[0]) == null ? void 0 : K[0];V && ($ = V);
                                break
                            }
                        case "initialPlacement":
                            $ = l;
                            break
                    }
                    if (o !== $) return {
                        reset: {
                            placement: $
                        }
                    }
                }
                return {}
            }
        }
    };

function Qf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function Gf(e) {
    return f2.some(t => e[t] >= 0)
}
const k2 = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: n
                } = t, {
                    strategy: r = "referenceHidden",
                    ...o
                } = dn(e, t);
                switch (r) {
                    case "referenceHidden":
                        {
                            const i = await Ni(t, { ...o,
                                    elementContext: "reference"
                                }),
                                s = Qf(i, n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: s,
                                    referenceHidden: Gf(s)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const i = await Ni(t, { ...o,
                                    altBoundary: !0
                                }),
                                s = Qf(i, n.floating);
                            return {
                                data: {
                                    escapedOffsets: s,
                                    escaped: Gf(s)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    Tg = new Set(["left", "top"]);
async function j2(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = fn(n), l = ko(n), u = Vt(n) === "y", c = Tg.has(s) ? -1 : 1, d = i && u ? -1 : 1, p = dn(t, e);
    let {
        mainAxis: m,
        crossAxis: f,
        alignmentAxis: w
    } = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return l && typeof w == "number" && (f = l === "end" ? w * -1 : w), u ? {
        x: f * d,
        y: m * c
    } : {
        x: m * c,
        y: f * d
    }
}
const P2 = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: i,
                    placement: s,
                    middlewareData: l
                } = t, u = await j2(t, e);
                return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + u.x,
                    y: i + u.y,
                    data: { ...u,
                        placement: s
                    }
                }
            }
        }
    },
    R2 = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: l = {
                        fn: N => {
                            let {
                                x: v,
                                y: g
                            } = N;
                            return {
                                x: v,
                                y: g
                            }
                        }
                    },
                    ...u
                } = dn(e, t), c = {
                    x: n,
                    y: r
                }, d = await Ni(t, u), p = Vt(fn(o)), m = Kc(p);
                let f = c[m],
                    w = c[p];
                if (i) {
                    const N = m === "y" ? "top" : "left",
                        v = m === "y" ? "bottom" : "right",
                        g = f + d[N],
                        y = f - d[v];
                    f = Pu(g, f, y)
                }
                if (s) {
                    const N = p === "y" ? "top" : "left",
                        v = p === "y" ? "bottom" : "right",
                        g = w + d[N],
                        y = w - d[v];
                    w = Pu(g, w, y)
                }
                const x = l.fn({ ...t,
                    [m]: f,
                    [p]: w
                });
                return { ...x,
                    data: {
                        x: x.x - n,
                        y: x.y - r,
                        enabled: {
                            [m]: i,
                            [p]: s
                        }
                    }
                }
            }
        }
    },
    T2 = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: s
                } = t, {
                    offset: l = 0,
                    mainAxis: u = !0,
                    crossAxis: c = !0
                } = dn(e, t), d = {
                    x: n,
                    y: r
                }, p = Vt(o), m = Kc(p);
                let f = d[m],
                    w = d[p];
                const x = dn(l, t),
                    N = typeof x == "number" ? {
                        mainAxis: x,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...x
                    };
                if (u) {
                    const y = m === "y" ? "height" : "width",
                        E = i.reference[m] - i.floating[y] + N.mainAxis,
                        C = i.reference[m] + i.reference[y] - N.mainAxis;
                    f < E ? f = E : f > C && (f = C)
                }
                if (c) {
                    var v, g;
                    const y = m === "y" ? "width" : "height",
                        E = Tg.has(fn(o)),
                        C = i.reference[p] - i.floating[y] + (E && ((v = s.offset) == null ? void 0 : v[p]) || 0) + (E ? 0 : N.crossAxis),
                        S = i.reference[p] + i.reference[y] + (E ? 0 : ((g = s.offset) == null ? void 0 : g[p]) || 0) - (E ? N.crossAxis : 0);
                    w < C ? w = C : w > S && (w = S)
                }
                return {
                    [m]: f,
                    [p]: w
                }
            }
        }
    },
    M2 = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: i,
                    platform: s,
                    elements: l
                } = t, {
                    apply: u = () => {},
                    ...c
                } = dn(e, t), d = await Ni(t, c), p = fn(o), m = ko(o), f = Vt(o) === "y", {
                    width: w,
                    height: x
                } = i.floating;
                let N, v;
                p === "top" || p === "bottom" ? (N = p, v = m === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (v = p, N = m === "end" ? "top" : "bottom");
                const g = x - d.top - d.bottom,
                    y = w - d.left - d.right,
                    E = Qn(x - d[N], g),
                    C = Qn(w - d[v], y),
                    S = !t.middlewareData.shift;
                let b = E,
                    R = C;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = y), (r = t.middlewareData.shift) != null && r.enabled.y && (b = g), S && !m) {
                    const M = rt(d.left, 0),
                        F = rt(d.right, 0),
                        I = rt(d.top, 0),
                        K = rt(d.bottom, 0);
                    f ? R = w - 2 * (M !== 0 || F !== 0 ? M + F : rt(d.left, d.right)) : b = x - 2 * (I !== 0 || K !== 0 ? I + K : rt(d.top, d.bottom))
                }
                await u({ ...t,
                    availableWidth: R,
                    availableHeight: b
                });
                const P = await s.getDimensions(l.floating);
                return w !== P.width || x !== P.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Ll() {
    return typeof window < "u"
}

function jo(e) {
    return Mg(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function st(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Yt(e) {
    var t;
    return (t = (Mg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Mg(e) {
    return Ll() ? e instanceof Node || e instanceof st(e).Node : !1
}

function At(e) {
    return Ll() ? e instanceof Element || e instanceof st(e).Element : !1
}

function Qt(e) {
    return Ll() ? e instanceof HTMLElement || e instanceof st(e).HTMLElement : !1
}

function Yf(e) {
    return !Ll() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof st(e).ShadowRoot
}
const _2 = new Set(["inline", "contents"]);

function Ii(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = It(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !_2.has(o)
}
const O2 = new Set(["table", "td", "th"]);

function L2(e) {
    return O2.has(jo(e))
}
const A2 = [":popover-open", ":modal"];

function Al(e) {
    return A2.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}
const I2 = ["transform", "translate", "scale", "rotate", "perspective"],
    D2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    F2 = ["paint", "layout", "strict", "content"];

function Yc(e) {
    const t = Xc(),
        n = At(e) ? It(e) : e;
    return I2.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || D2.some(r => (n.willChange || "").includes(r)) || F2.some(r => (n.contain || "").includes(r))
}

function z2(e) {
    let t = Gn(e);
    for (; Qt(t) && !xo(t);) {
        if (Yc(t)) return t;
        if (Al(t)) return null;
        t = Gn(t)
    }
    return null
}

function Xc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const $2 = new Set(["html", "body", "#document"]);

function xo(e) {
    return $2.has(jo(e))
}

function It(e) {
    return st(e).getComputedStyle(e)
}

function Il(e) {
    return At(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Gn(e) {
    if (jo(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Yf(e) && e.host || Yt(e);
    return Yf(t) ? t.host : t
}

function _g(e) {
    const t = Gn(e);
    return xo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qt(t) && Ii(t) ? t : _g(t)
}

function Ei(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = _g(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = st(o);
    if (i) {
        const l = Tu(s);
        return t.concat(s, s.visualViewport || [], Ii(o) ? o : [], l && n ? Ei(l) : [])
    }
    return t.concat(o, Ei(o, [], n))
}

function Tu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Og(e) {
    const t = It(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Qt(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        l = ll(n) !== i || ll(r) !== s;
    return l && (n = i, r = s), {
        width: n,
        height: r,
        $: l
    }
}

function qc(e) {
    return At(e) ? e : e.contextElement
}

function no(e) {
    const t = qc(e);
    if (!Qt(t)) return Kt(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: i
        } = Og(t);
    let s = (i ? ll(n.width) : n.width) / r,
        l = (i ? ll(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
        x: s,
        y: l
    }
}
const B2 = Kt(0);

function Lg(e) {
    const t = st(e);
    return !Xc() || !t.visualViewport ? B2 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function U2(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== st(e) ? !1 : t
}

function Cr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = qc(e);
    let s = Kt(1);
    t && (r ? At(r) && (s = no(r)) : s = no(e));
    const l = U2(i, n, r) ? Lg(i) : Kt(0);
    let u = (o.left + l.x) / s.x,
        c = (o.top + l.y) / s.y,
        d = o.width / s.x,
        p = o.height / s.y;
    if (i) {
        const m = st(i),
            f = r && At(r) ? st(r) : r;
        let w = m,
            x = Tu(w);
        for (; x && r && f !== w;) {
            const N = no(x),
                v = x.getBoundingClientRect(),
                g = It(x),
                y = v.left + (x.clientLeft + parseFloat(g.paddingLeft)) * N.x,
                E = v.top + (x.clientTop + parseFloat(g.paddingTop)) * N.y;
            u *= N.x, c *= N.y, d *= N.x, p *= N.y, u += y, c += E, w = st(x), x = Tu(w)
        }
    }
    return ul({
        width: d,
        height: p,
        x: u,
        y: c
    })
}

function Zc(e, t) {
    const n = Il(e).scrollLeft;
    return t ? t.left + n : Cr(Yt(e)).left + n
}

function Ag(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : Zc(e, r)),
        i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}

function V2(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const i = o === "fixed",
        s = Yt(r),
        l = t ? Al(t.floating) : !1;
    if (r === s || l && i) return n;
    let u = {
            scrollLeft: 0,
            scrollTop: 0
        },
        c = Kt(1);
    const d = Kt(0),
        p = Qt(r);
    if ((p || !p && !i) && ((jo(r) !== "body" || Ii(s)) && (u = Il(r)), Qt(r))) {
        const f = Cr(r);
        c = no(r), d.x = f.x + r.clientLeft, d.y = f.y + r.clientTop
    }
    const m = s && !p && !i ? Ag(s, u, !0) : Kt(0);
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - u.scrollLeft * c.x + d.x + m.x,
        y: n.y * c.y - u.scrollTop * c.y + d.y + m.y
    }
}

function H2(e) {
    return Array.from(e.getClientRects())
}

function W2(e) {
    const t = Yt(e),
        n = Il(e),
        r = e.ownerDocument.body,
        o = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Zc(e);
    const l = -n.scrollTop;
    return It(r).direction === "rtl" && (s += rt(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: i,
        x: s,
        y: l
    }
}

function K2(e, t) {
    const n = st(e),
        r = Yt(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        l = 0,
        u = 0;
    if (o) {
        i = o.width, s = o.height;
        const c = Xc();
        (!c || c && t === "fixed") && (l = o.offsetLeft, u = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: u
    }
}
const Q2 = new Set(["absolute", "fixed"]);

function G2(e, t) {
    const n = Cr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = Qt(e) ? no(e) : Kt(1),
        s = e.clientWidth * i.x,
        l = e.clientHeight * i.y,
        u = o * i.x,
        c = r * i.y;
    return {
        width: s,
        height: l,
        x: u,
        y: c
    }
}

function Xf(e, t, n) {
    let r;
    if (t === "viewport") r = K2(e, n);
    else if (t === "document") r = W2(Yt(e));
    else if (At(t)) r = G2(t, n);
    else {
        const o = Lg(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return ul(r)
}

function Ig(e, t) {
    const n = Gn(e);
    return n === t || !At(n) || xo(n) ? !1 : It(n).position === "fixed" || Ig(n, t)
}

function Y2(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Ei(e, [], !1).filter(l => At(l) && jo(l) !== "body"),
        o = null;
    const i = It(e).position === "fixed";
    let s = i ? Gn(e) : e;
    for (; At(s) && !xo(s);) {
        const l = It(s),
            u = Yc(s);
        !u && l.position === "fixed" && (o = null), (i ? !u && !o : !u && l.position === "static" && !!o && Q2.has(o.position) || Ii(s) && !u && Ig(e, s)) ? r = r.filter(d => d !== s) : o = l, s = Gn(s)
    }
    return t.set(e, r), r
}

function X2(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const s = [...n === "clippingAncestors" ? Al(t) ? [] : Y2(t, this._c) : [].concat(n), r],
        l = s[0],
        u = s.reduce((c, d) => {
            const p = Xf(t, d, o);
            return c.top = rt(p.top, c.top), c.right = Qn(p.right, c.right), c.bottom = Qn(p.bottom, c.bottom), c.left = rt(p.left, c.left), c
        }, Xf(t, l, o));
    return {
        width: u.right - u.left,
        height: u.bottom - u.top,
        x: u.left,
        y: u.top
    }
}

function q2(e) {
    const {
        width: t,
        height: n
    } = Og(e);
    return {
        width: t,
        height: n
    }
}

function Z2(e, t, n) {
    const r = Qt(t),
        o = Yt(t),
        i = n === "fixed",
        s = Cr(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const u = Kt(0);

    function c() {
        u.x = Zc(o)
    }
    if (r || !r && !i)
        if ((jo(t) !== "body" || Ii(o)) && (l = Il(t)), r) {
            const f = Cr(t, !0, i, t);
            u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop
        } else o && c();
    i && !r && o && c();
    const d = o && !r && !i ? Ag(o, l) : Kt(0),
        p = s.left + l.scrollLeft - u.x - d.x,
        m = s.top + l.scrollTop - u.y - d.y;
    return {
        x: p,
        y: m,
        width: s.width,
        height: s.height
    }
}

function Sa(e) {
    return It(e).position === "static"
}

function qf(e, t) {
    if (!Qt(e) || It(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Yt(e) === n && (n = n.ownerDocument.body), n
}

function Dg(e, t) {
    const n = st(e);
    if (Al(e)) return n;
    if (!Qt(e)) {
        let o = Gn(e);
        for (; o && !xo(o);) {
            if (At(o) && !Sa(o)) return o;
            o = Gn(o)
        }
        return n
    }
    let r = qf(e, t);
    for (; r && L2(r) && Sa(r);) r = qf(r, t);
    return r && xo(r) && Sa(r) && !Yc(r) ? n : r || z2(e) || n
}
const J2 = async function(e) {
    const t = this.getOffsetParent || Dg,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: Z2(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function eN(e) {
    return It(e).direction === "rtl"
}
const tN = {
    convertOffsetParentRelativeRectToViewportRelativeRect: V2,
    getDocumentElement: Yt,
    getClippingRect: X2,
    getOffsetParent: Dg,
    getElementRects: J2,
    getClientRects: H2,
    getDimensions: q2,
    getScale: no,
    isElement: At,
    isRTL: eN
};

function Fg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function nN(e, t) {
    let n = null,
        r;
    const o = Yt(e);

    function i() {
        var l;
        clearTimeout(r), (l = n) == null || l.disconnect(), n = null
    }

    function s(l, u) {
        l === void 0 && (l = !1), u === void 0 && (u = 1), i();
        const c = e.getBoundingClientRect(),
            {
                left: d,
                top: p,
                width: m,
                height: f
            } = c;
        if (l || t(), !m || !f) return;
        const w = fs(p),
            x = fs(o.clientWidth - (d + m)),
            N = fs(o.clientHeight - (p + f)),
            v = fs(d),
            y = {
                rootMargin: -w + "px " + -x + "px " + -N + "px " + -v + "px",
                threshold: rt(0, Qn(1, u)) || 1
            };
        let E = !0;

        function C(S) {
            const b = S[0].intersectionRatio;
            if (b !== u) {
                if (!E) return s();
                b ? s(!1, b) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            b === 1 && !Fg(c, e.getBoundingClientRect()) && s(), E = !1
        }
        try {
            n = new IntersectionObserver(C, { ...y,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C, y)
        }
        n.observe(e)
    }
    return s(!0), i
}

function rN(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: l = typeof IntersectionObserver == "function",
        animationFrame: u = !1
    } = r, c = qc(e), d = o || i ? [...c ? Ei(c) : [], ...Ei(t)] : [];
    d.forEach(v => {
        o && v.addEventListener("scroll", n, {
            passive: !0
        }), i && v.addEventListener("resize", n)
    });
    const p = c && l ? nN(c, n) : null;
    let m = -1,
        f = null;
    s && (f = new ResizeObserver(v => {
        let [g] = v;
        g && g.target === c && f && (f.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
            var y;
            (y = f) == null || y.observe(t)
        })), n()
    }), c && !u && f.observe(c), f.observe(t));
    let w, x = u ? Cr(e) : null;
    u && N();

    function N() {
        const v = Cr(e);
        x && !Fg(x, v) && n(), x = v, w = requestAnimationFrame(N)
    }
    return n(), () => {
        var v;
        d.forEach(g => {
            o && g.removeEventListener("scroll", n), i && g.removeEventListener("resize", n)
        }), p == null || p(), (v = f) == null || v.disconnect(), f = null, u && cancelAnimationFrame(w)
    }
}
const oN = P2,
    iN = R2,
    sN = b2,
    lN = M2,
    aN = k2,
    Zf = S2,
    uN = T2,
    cN = (e, t, n) => {
        const r = new Map,
            o = {
                platform: tN,
                ...n
            },
            i = { ...o.platform,
                _c: r
            };
        return C2(e, t, { ...o,
            platform: i
        })
    };
var dN = typeof document < "u",
    fN = function() {},
    Ms = dN ? h.useLayoutEffect : fN;

function cl(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!cl(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !cl(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function zg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Jf(e, t) {
    const n = zg(e);
    return Math.round(t * n) / n
}

function ba(e) {
    const t = h.useRef(e);
    return Ms(() => {
        t.current = e
    }), t
}

function pN(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: i,
            floating: s
        } = {},
        transform: l = !0,
        whileElementsMounted: u,
        open: c
    } = e, [d, p] = h.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [m, f] = h.useState(r);
    cl(m, r) || f(r);
    const [w, x] = h.useState(null), [N, v] = h.useState(null), g = h.useCallback(j => {
        j !== S.current && (S.current = j, x(j))
    }, []), y = h.useCallback(j => {
        j !== b.current && (b.current = j, v(j))
    }, []), E = i || w, C = s || N, S = h.useRef(null), b = h.useRef(null), R = h.useRef(d), P = u != null, M = ba(u), F = ba(o), I = ba(c), K = h.useCallback(() => {
        if (!S.current || !b.current) return;
        const j = {
            placement: t,
            strategy: n,
            middleware: m
        };
        F.current && (j.platform = F.current), cN(S.current, b.current, j).then(T => {
            const A = { ...T,
                isPositioned: I.current !== !1
            };
            L.current && !cl(R.current, A) && (R.current = A, Oi.flushSync(() => {
                p(A)
            }))
        })
    }, [m, t, n, F, I]);
    Ms(() => {
        c === !1 && R.current.isPositioned && (R.current.isPositioned = !1, p(j => ({ ...j,
            isPositioned: !1
        })))
    }, [c]);
    const L = h.useRef(!1);
    Ms(() => (L.current = !0, () => {
        L.current = !1
    }), []), Ms(() => {
        if (E && (S.current = E), C && (b.current = C), E && C) {
            if (M.current) return M.current(E, C, K);
            K()
        }
    }, [E, C, K, M, P]);
    const Y = h.useMemo(() => ({
            reference: S,
            floating: b,
            setReference: g,
            setFloating: y
        }), [g, y]),
        $ = h.useMemo(() => ({
            reference: E,
            floating: C
        }), [E, C]),
        V = h.useMemo(() => {
            const j = {
                position: n,
                left: 0,
                top: 0
            };
            if (!$.floating) return j;
            const T = Jf($.floating, d.x),
                A = Jf($.floating, d.y);
            return l ? { ...j,
                transform: "translate(" + T + "px, " + A + "px)",
                ...zg($.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: T,
                top: A
            }
        }, [n, l, $.floating, d.x, d.y]);
    return h.useMemo(() => ({ ...d,
        update: K,
        refs: Y,
        elements: $,
        floatingStyles: V
    }), [d, K, Y, $, V])
}
const hN = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? Zf({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? Zf({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    mN = (e, t) => ({ ...oN(e),
        options: [e, t]
    }),
    gN = (e, t) => ({ ...iN(e),
        options: [e, t]
    }),
    vN = (e, t) => ({ ...uN(e),
        options: [e, t]
    }),
    yN = (e, t) => ({ ...sN(e),
        options: [e, t]
    }),
    xN = (e, t) => ({ ...lN(e),
        options: [e, t]
    }),
    wN = (e, t) => ({ ...aN(e),
        options: [e, t]
    }),
    NN = (e, t) => ({ ...hN(e),
        options: [e, t]
    });
var EN = "Arrow",
    $g = h.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
        } = e;
        return a.jsx(ce.svg, { ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : a.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
$g.displayName = EN;
var CN = $g;

function SN(e) {
    const [t, n] = h.useState(void 0);
    return yt(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize" in i) {
                    const u = i.borderBoxSize,
                        c = Array.isArray(u) ? u[0] : u;
                    s = c.inlineSize, l = c.blockSize
                } else s = e.offsetWidth, l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var Bg = "Popper",
    [Ug, Vg] = Li(Bg),
    [FS, Hg] = Ug(Bg),
    Wg = "PopperAnchor",
    Kg = h.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, i = Hg(Wg, n), s = h.useRef(null), l = Be(t, s);
        return h.useEffect(() => {
            i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
        }), r ? null : a.jsx(ce.div, { ...o,
            ref: l
        })
    });
Kg.displayName = Wg;
var Jc = "PopperContent",
    [bN, kN] = Ug(Jc),
    Qg = h.forwardRef((e, t) => {
        var te, Pr, gn, Jn, vn, Rr;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: l = 0,
            avoidCollisions: u = !0,
            collisionBoundary: c = [],
            collisionPadding: d = 0,
            sticky: p = "partial",
            hideWhenDetached: m = !1,
            updatePositionStrategy: f = "optimized",
            onPlaced: w,
            ...x
        } = e, N = Hg(Jc, n), [v, g] = h.useState(null), y = Be(t, yn => g(yn)), [E, C] = h.useState(null), S = SN(E), b = (S == null ? void 0 : S.width) ? ? 0, R = (S == null ? void 0 : S.height) ? ? 0, P = r + (i !== "center" ? "-" + i : ""), M = typeof d == "number" ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, F = Array.isArray(c) ? c : [c], I = F.length > 0, K = {
            padding: M,
            boundary: F.filter(PN),
            altBoundary: I
        }, {
            refs: L,
            floatingStyles: Y,
            placement: $,
            isPositioned: V,
            middlewareData: j
        } = pN({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...yn) => rN(...yn, {
                animationFrame: f === "always"
            }),
            elements: {
                reference: N.anchor
            },
            middleware: [mN({
                mainAxis: o + R,
                alignmentAxis: s
            }), u && gN({
                mainAxis: !0,
                crossAxis: !1,
                limiter: p === "partial" ? vN() : void 0,
                ...K
            }), u && yN({ ...K
            }), xN({ ...K,
                apply: ({
                    elements: yn,
                    rects: Ui,
                    availableWidth: Vl,
                    availableHeight: Vi
                }) => {
                    const {
                        width: Hl,
                        height: To
                    } = Ui.reference, Tr = yn.floating.style;
                    Tr.setProperty("--radix-popper-available-width", `${Vl}px`), Tr.setProperty("--radix-popper-available-height", `${Vi}px`), Tr.setProperty("--radix-popper-anchor-width", `${Hl}px`), Tr.setProperty("--radix-popper-anchor-height", `${To}px`)
                }
            }), E && NN({
                element: E,
                padding: l
            }), RN({
                arrowWidth: b,
                arrowHeight: R
            }), m && wN({
                strategy: "referenceHidden",
                ...K
            })]
        }), [T, A] = Xg($), H = We(w);
        yt(() => {
            V && (H == null || H())
        }, [V, H]);
        const z = (te = j.arrow) == null ? void 0 : te.x,
            Q = (Pr = j.arrow) == null ? void 0 : Pr.y,
            X = ((gn = j.arrow) == null ? void 0 : gn.centerOffset) !== 0,
            [Se, Le] = h.useState();
        return yt(() => {
            v && Le(window.getComputedStyle(v).zIndex)
        }, [v]), a.jsx("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...Y,
                transform: V ? Y.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: Se,
                "--radix-popper-transform-origin": [(Jn = j.transformOrigin) == null ? void 0 : Jn.x, (vn = j.transformOrigin) == null ? void 0 : vn.y].join(" "),
                ...((Rr = j.hide) == null ? void 0 : Rr.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: a.jsx(bN, {
                scope: n,
                placedSide: T,
                onArrowChange: C,
                arrowX: z,
                arrowY: Q,
                shouldHideArrow: X,
                children: a.jsx(ce.div, {
                    "data-side": T,
                    "data-align": A,
                    ...x,
                    ref: y,
                    style: { ...x.style,
                        animation: V ? void 0 : "none"
                    }
                })
            })
        })
    });
Qg.displayName = Jc;
var Gg = "PopperArrow",
    jN = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Yg = h.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, i = kN(Gg, r), s = jN[i.placedSide];
        return a.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: a.jsx(CN, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
Yg.displayName = Gg;

function PN(e) {
    return e !== null
}
var RN = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var N, v, g;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, s = ((N = o.arrow) == null ? void 0 : N.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [c, d] = Xg(n), p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d], m = (((v = o.arrow) == null ? void 0 : v.x) ? ? 0) + l / 2, f = (((g = o.arrow) == null ? void 0 : g.y) ? ? 0) + u / 2;
        let w = "",
            x = "";
        return c === "bottom" ? (w = s ? p : `${m}px`, x = `${-u}px`) : c === "top" ? (w = s ? p : `${m}px`, x = `${r.floating.height+u}px`) : c === "right" ? (w = `${-u}px`, x = s ? p : `${f}px`) : c === "left" && (w = `${r.floating.width+u}px`, x = s ? p : `${f}px`), {
            data: {
                x: w,
                y: x
            }
        }
    }
});

function Xg(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var TN = Kg,
    MN = Qg,
    _N = Yg,
    [Dl, zS] = Li("Tooltip", [Vg]),
    ed = Vg(),
    qg = "TooltipProvider",
    ON = 700,
    ep = "tooltip.open",
    [LN, Zg] = Dl(qg),
    Jg = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = ON,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
        } = e, s = h.useRef(!0), l = h.useRef(!1), u = h.useRef(0);
        return h.useEffect(() => {
            const c = u.current;
            return () => window.clearTimeout(c)
        }, []), a.jsx(LN, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: n,
            onOpen: h.useCallback(() => {
                window.clearTimeout(u.current), s.current = !1
            }, []),
            onClose: h.useCallback(() => {
                window.clearTimeout(u.current), u.current = window.setTimeout(() => s.current = !0, r)
            }, [r]),
            isPointerInTransitRef: l,
            onPointerInTransitChange: h.useCallback(c => {
                l.current = c
            }, []),
            disableHoverableContent: o,
            children: i
        })
    };
Jg.displayName = qg;
var ev = "Tooltip",
    [$S, Fl] = Dl(ev),
    Mu = "TooltipTrigger",
    AN = h.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = Fl(Mu, n), i = Zg(Mu, n), s = ed(n), l = h.useRef(null), u = Be(t, l, o.onTriggerChange), c = h.useRef(!1), d = h.useRef(!1), p = h.useCallback(() => c.current = !1, []);
        return h.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), a.jsx(TN, {
            asChild: !0,
            ...s,
            children: a.jsx(ce.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: u,
                onPointerMove: q(e.onPointerMove, m => {
                    m.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0)
                }),
                onPointerLeave: q(e.onPointerLeave, () => {
                    o.onTriggerLeave(), d.current = !1
                }),
                onPointerDown: q(e.onPointerDown, () => {
                    o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", p, {
                        once: !0
                    })
                }),
                onFocus: q(e.onFocus, () => {
                    c.current || o.onOpen()
                }),
                onBlur: q(e.onBlur, o.onClose),
                onClick: q(e.onClick, o.onClose)
            })
        })
    });
AN.displayName = Mu;
var IN = "TooltipPortal",
    [BS, DN] = Dl(IN, {
        forceMount: void 0
    }),
    wo = "TooltipContent",
    tv = h.forwardRef((e, t) => {
        const n = DN(wo, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...i
            } = e,
            s = Fl(wo, e.__scopeTooltip);
        return a.jsx(kr, {
            present: r || s.open,
            children: s.disableHoverableContent ? a.jsx(nv, {
                side: o,
                ...i,
                ref: t
            }) : a.jsx(FN, {
                side: o,
                ...i,
                ref: t
            })
        })
    }),
    FN = h.forwardRef((e, t) => {
        const n = Fl(wo, e.__scopeTooltip),
            r = Zg(wo, e.__scopeTooltip),
            o = h.useRef(null),
            i = Be(t, o),
            [s, l] = h.useState(null),
            {
                trigger: u,
                onClose: c
            } = n,
            d = o.current,
            {
                onPointerInTransitChange: p
            } = r,
            m = h.useCallback(() => {
                l(null), p(!1)
            }, [p]),
            f = h.useCallback((w, x) => {
                const N = w.currentTarget,
                    v = {
                        x: w.clientX,
                        y: w.clientY
                    },
                    g = VN(v, N.getBoundingClientRect()),
                    y = HN(v, g),
                    E = WN(x.getBoundingClientRect()),
                    C = QN([...y, ...E]);
                l(C), p(!0)
            }, [p]);
        return h.useEffect(() => () => m(), [m]), h.useEffect(() => {
            if (u && d) {
                const w = N => f(N, d),
                    x = N => f(N, u);
                return u.addEventListener("pointerleave", w), d.addEventListener("pointerleave", x), () => {
                    u.removeEventListener("pointerleave", w), d.removeEventListener("pointerleave", x)
                }
            }
        }, [u, d, f, m]), h.useEffect(() => {
            if (s) {
                const w = x => {
                    const N = x.target,
                        v = {
                            x: x.clientX,
                            y: x.clientY
                        },
                        g = (u == null ? void 0 : u.contains(N)) || (d == null ? void 0 : d.contains(N)),
                        y = !KN(v, s);
                    g ? m() : y && (m(), c())
                };
                return document.addEventListener("pointermove", w), () => document.removeEventListener("pointermove", w)
            }
        }, [u, d, s, c, m]), a.jsx(nv, { ...e,
            ref: i
        })
    }),
    [zN, $N] = Dl(ev, {
        isInside: !1
    }),
    BN = Gx("TooltipContent"),
    nv = h.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...l
        } = e, u = Fl(wo, n), c = ed(n), {
            onClose: d
        } = u;
        return h.useEffect(() => (document.addEventListener(ep, d), () => document.removeEventListener(ep, d)), [d]), h.useEffect(() => {
            if (u.trigger) {
                const p = m => {
                    const f = m.target;
                    f != null && f.contains(u.trigger) && d()
                };
                return window.addEventListener("scroll", p, {
                    capture: !0
                }), () => window.removeEventListener("scroll", p, {
                    capture: !0
                })
            }
        }, [u.trigger, d]), a.jsx(Tl, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: p => p.preventDefault(),
            onDismiss: d,
            children: a.jsxs(MN, {
                "data-state": u.stateAttribute,
                ...c,
                ...l,
                ref: t,
                style: { ...l.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [a.jsx(BN, {
                    children: r
                }), a.jsx(zN, {
                    scope: n,
                    isInside: !0,
                    children: a.jsx(Vm, {
                        id: u.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
tv.displayName = wo;
var rv = "TooltipArrow",
    UN = h.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = ed(n);
        return $N(rv, n).isInside ? null : a.jsx(_N, { ...o,
            ...r,
            ref: t
        })
    });
UN.displayName = rv;

function VN(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function HN(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function WN(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function KN(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i],
            u = t[s],
            c = l.x,
            d = l.y,
            p = u.x,
            m = u.y;
        d > r != m > r && n < (p - c) * (r - d) / (m - d) + c && (o = !o)
    }
    return o
}

function QN(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), GN(t)
}

function GN(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var YN = Jg,
    ov = tv;
const XN = YN,
    qN = h.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => a.jsx(ov, {
        ref: r,
        sideOffset: t,
        className: we("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
qN.displayName = ov.displayName;
var zl = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    $l = typeof window > "u" || "Deno" in globalThis;

function kt() {}

function ZN(e, t) {
    return typeof e == "function" ? e(t) : e
}

function JN(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function eE(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function _u(e, t) {
    return typeof e == "function" ? e(t) : e
}

function tE(e, t) {
    return typeof e == "function" ? e(t) : e
}

function tp(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: o,
        predicate: i,
        queryKey: s,
        stale: l
    } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== td(s, t.options)) return !1
        } else if (!Si(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const u = t.isActive();
        if (n === "active" && !u || n === "inactive" && u) return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}

function np(e, t) {
    const {
        exact: n,
        status: r,
        predicate: o,
        mutationKey: i
    } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Ci(t.options.mutationKey) !== Ci(i)) return !1
        } else if (!Si(t.options.mutationKey, i)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function td(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Ci)(e)
}

function Ci(e) {
    return JSON.stringify(e, (t, n) => Ou(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function Si(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Si(e[n], t[n])) : !1
}

function iv(e, t) {
    if (e === t) return e;
    const n = rp(e) && rp(t);
    if (n || Ou(e) && Ou(t)) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            i = n ? t : Object.keys(t),
            s = i.length,
            l = n ? [] : {},
            u = new Set(r);
        let c = 0;
        for (let d = 0; d < s; d++) {
            const p = n ? d : i[d];
            (!n && u.has(p) || n) && e[p] === void 0 && t[p] === void 0 ? (l[p] = void 0, c++) : (l[p] = iv(e[p], t[p]), l[p] === e[p] && e[p] !== void 0 && c++)
        }
        return o === s && c === o ? e : l
    }
    return t
}

function rp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Ou(e) {
    if (!op(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!op(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function op(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function nE(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function rE(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? iv(e, t) : t
}

function oE(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function iE(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var nd = Symbol();

function sv(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === nd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var ar, Tn, ro, mp, sE = (mp = class extends zl {
        constructor() {
            super();
            J(this, ar);
            J(this, Tn);
            J(this, ro);
            U(this, ro, t => {
                if (!$l && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            k(this, Tn) || this.setEventListener(k(this, ro))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = k(this, Tn)) == null || t.call(this), U(this, Tn, void 0))
        }
        setEventListener(t) {
            var n;
            U(this, ro, t), (n = k(this, Tn)) == null || n.call(this), U(this, Tn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            k(this, ar) !== t && (U(this, ar, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof k(this, ar) == "boolean" ? k(this, ar) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, ar = new WeakMap, Tn = new WeakMap, ro = new WeakMap, mp),
    lv = new sE,
    oo, Mn, io, gp, lE = (gp = class extends zl {
        constructor() {
            super();
            J(this, oo, !0);
            J(this, Mn);
            J(this, io);
            U(this, io, t => {
                if (!$l && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            k(this, Mn) || this.setEventListener(k(this, io))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = k(this, Mn)) == null || t.call(this), U(this, Mn, void 0))
        }
        setEventListener(t) {
            var n;
            U(this, io, t), (n = k(this, Mn)) == null || n.call(this), U(this, Mn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            k(this, oo) !== t && (U(this, oo, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return k(this, oo)
        }
    }, oo = new WeakMap, Mn = new WeakMap, io = new WeakMap, gp),
    dl = new lE;

function aE() {
    let e, t;
    const n = new Promise((o, i) => {
        e = o, t = i
    });
    n.status = "pending", n.catch(() => {});

    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }), e(o)
    }, n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }), t(o)
    }, n
}

function uE(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function av(e) {
    return (e ? ? "online") === "online" ? dl.isOnline() : !0
}
var uv = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function ka(e) {
    return e instanceof uv
}

function cv(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const i = aE(),
        s = x => {
            var N;
            r || (m(new uv(x)), (N = e.abort) == null || N.call(e))
        },
        l = () => {
            t = !0
        },
        u = () => {
            t = !1
        },
        c = () => lv.isFocused() && (e.networkMode === "always" || dl.isOnline()) && e.canRun(),
        d = () => av(e.networkMode) && e.canRun(),
        p = x => {
            var N;
            r || (r = !0, (N = e.onSuccess) == null || N.call(e, x), o == null || o(), i.resolve(x))
        },
        m = x => {
            var N;
            r || (r = !0, (N = e.onError) == null || N.call(e, x), o == null || o(), i.reject(x))
        },
        f = () => new Promise(x => {
            var N;
            o = v => {
                (r || c()) && x(v)
            }, (N = e.onPause) == null || N.call(e)
        }).then(() => {
            var x;
            o = void 0, r || (x = e.onContinue) == null || x.call(e)
        }),
        w = () => {
            if (r) return;
            let x;
            const N = n === 0 ? e.initialPromise : void 0;
            try {
                x = N ? ? e.fn()
            } catch (v) {
                x = Promise.reject(v)
            }
            Promise.resolve(x).then(p).catch(v => {
                var S;
                if (r) return;
                const g = e.retry ? ? ($l ? 0 : 3),
                    y = e.retryDelay ? ? uE,
                    E = typeof y == "function" ? y(n, v) : y,
                    C = g === !0 || typeof g == "number" && n < g || typeof g == "function" && g(n, v);
                if (t || !C) {
                    m(v);
                    return
                }
                n++, (S = e.onFail) == null || S.call(e, n, v), nE(E).then(() => c() ? void 0 : f()).then(() => {
                    t ? m(v) : w()
                })
            })
        };
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(), i),
        cancelRetry: l,
        continueRetry: u,
        canStart: d,
        start: () => (d() ? w() : f().then(w), i)
    }
}
var cE = e => setTimeout(e, 0);

function dE() {
    let e = [],
        t = 0,
        n = l => {
            l()
        },
        r = l => {
            l()
        },
        o = cE;
    const i = l => {
            t ? e.push(l) : o(() => {
                n(l)
            })
        },
        s = () => {
            const l = e;
            e = [], l.length && o(() => {
                r(() => {
                    l.forEach(u => {
                        n(u)
                    })
                })
            })
        };
    return {
        batch: l => {
            let u;
            t++;
            try {
                u = l()
            } finally {
                t--, t || s()
            }
            return u
        },
        batchCalls: l => (...u) => {
            i(() => {
                l(...u)
            })
        },
        schedule: i,
        setNotifyFunction: l => {
            n = l
        },
        setBatchNotifyFunction: l => {
            r = l
        },
        setScheduler: l => {
            o = l
        }
    }
}
var Ke = dE(),
    ur, vp, dv = (vp = class {
        constructor() {
            J(this, ur)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), JN(this.gcTime) && U(this, ur, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? ($l ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            k(this, ur) && (clearTimeout(k(this, ur)), U(this, ur, void 0))
        }
    }, ur = new WeakMap, vp),
    so, cr, dt, dr, Fe, ki, fr, jt, Zt, yp, fE = (yp = class extends dv {
        constructor(t) {
            super();
            J(this, jt);
            J(this, so);
            J(this, cr);
            J(this, dt);
            J(this, dr);
            J(this, Fe);
            J(this, ki);
            J(this, fr);
            U(this, fr, !1), U(this, ki, t.defaultOptions), this.setOptions(t.options), this.observers = [], U(this, dr, t.client), U(this, dt, k(this, dr).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, U(this, so, hE(this.options)), this.state = t.state ? ? k(this, so), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = k(this, Fe)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...k(this, ki),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && k(this, dt).remove(this)
        }
        setData(t, n) {
            const r = rE(this.state.data, t, this.options);
            return Ae(this, jt, Zt).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            Ae(this, jt, Zt).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, o;
            const n = (r = k(this, Fe)) == null ? void 0 : r.promise;
            return (o = k(this, Fe)) == null || o.cancel(t), n ? n.then(kt).catch(kt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(k(this, so))
        }
        isActive() {
            return this.observers.some(t => tE(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === nd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(t => _u(t.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(t = 0) {
            return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !eE(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = k(this, Fe)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = k(this, Fe)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), k(this, dt).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (k(this, Fe) && (k(this, fr) ? k(this, Fe).cancel({
                revert: !0
            }) : k(this, Fe).cancelRetry()), this.scheduleGc()), k(this, dt).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Ae(this, jt, Zt).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var c, d, p;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (k(this, Fe)) return k(this, Fe).continueRetry(), k(this, Fe).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const m = this.observers.find(f => f.options.queryFn);
                m && this.setOptions(m.options)
            }
            const r = new AbortController,
                o = m => {
                    Object.defineProperty(m, "signal", {
                        enumerable: !0,
                        get: () => (U(this, fr, !0), r.signal)
                    })
                },
                i = () => {
                    const m = sv(this.options, n),
                        w = (() => {
                            const x = {
                                client: k(this, dr),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return o(x), x
                        })();
                    return U(this, fr, !1), this.options.persister ? this.options.persister(m, w, this) : m(w)
                },
                l = (() => {
                    const m = {
                        fetchOptions: n,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: k(this, dr),
                        state: this.state,
                        fetchFn: i
                    };
                    return o(m), m
                })();
            (c = this.options.behavior) == null || c.onFetch(l, this), U(this, cr, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = l.fetchOptions) == null ? void 0 : d.meta)) && Ae(this, jt, Zt).call(this, {
                type: "fetch",
                meta: (p = l.fetchOptions) == null ? void 0 : p.meta
            });
            const u = m => {
                var f, w, x, N;
                ka(m) && m.silent || Ae(this, jt, Zt).call(this, {
                    type: "error",
                    error: m
                }), ka(m) || ((w = (f = k(this, dt).config).onError) == null || w.call(f, m, this), (N = (x = k(this, dt).config).onSettled) == null || N.call(x, this.state.data, m, this)), this.scheduleGc()
            };
            return U(this, Fe, cv({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: l.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: m => {
                    var f, w, x, N;
                    if (m === void 0) {
                        u(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(m)
                    } catch (v) {
                        u(v);
                        return
                    }(w = (f = k(this, dt).config).onSuccess) == null || w.call(f, m, this), (N = (x = k(this, dt).config).onSettled) == null || N.call(x, m, this.state.error, this), this.scheduleGc()
                },
                onError: u,
                onFail: (m, f) => {
                    Ae(this, jt, Zt).call(this, {
                        type: "failed",
                        failureCount: m,
                        error: f
                    })
                },
                onPause: () => {
                    Ae(this, jt, Zt).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Ae(this, jt, Zt).call(this, {
                        type: "continue"
                    })
                },
                retry: l.options.retry,
                retryDelay: l.options.retryDelay,
                networkMode: l.options.networkMode,
                canRun: () => !0
            })), k(this, Fe).start()
        }
    }, so = new WeakMap, cr = new WeakMap, dt = new WeakMap, dr = new WeakMap, Fe = new WeakMap, ki = new WeakMap, fr = new WeakMap, jt = new WeakSet, Zt = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...pE(r.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return U(this, cr, void 0), { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const o = t.error;
                    return ka(o) && o.revert && k(this, cr) ? { ...k(this, cr),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: o,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), Ke.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), k(this, dt).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, yp);

function pE(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: av(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function hE(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var zt, xp, mE = (xp = class extends zl {
        constructor(t = {}) {
            super();
            J(this, zt);
            this.config = t, U(this, zt, new Map)
        }
        build(t, n, r) {
            const o = n.queryKey,
                i = n.queryHash ? ? td(o, n);
            let s = this.get(i);
            return s || (s = new fE({
                client: t,
                queryKey: o,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o)
            }), this.add(s)), s
        }
        add(t) {
            k(this, zt).has(t.queryHash) || (k(this, zt).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = k(this, zt).get(t.queryHash);
            n && (t.destroy(), n === t && k(this, zt).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            Ke.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return k(this, zt).get(t)
        }
        getAll() {
            return [...k(this, zt).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => tp(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => tp(t, r)) : n
        }
        notify(t) {
            Ke.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            Ke.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            Ke.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, zt = new WeakMap, xp),
    $t, Ue, pr, Bt, bn, wp, gE = (wp = class extends dv {
        constructor(t) {
            super();
            J(this, Bt);
            J(this, $t);
            J(this, Ue);
            J(this, pr);
            this.mutationId = t.mutationId, U(this, Ue, t.mutationCache), U(this, $t, []), this.state = t.state || vE(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            k(this, $t).includes(t) || (k(this, $t).push(t), this.clearGcTimeout(), k(this, Ue).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            U(this, $t, k(this, $t).filter(n => n !== t)), this.scheduleGc(), k(this, Ue).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            k(this, $t).length || (this.state.status === "pending" ? this.scheduleGc() : k(this, Ue).remove(this))
        }
        continue () {
            var t;
            return ((t = k(this, pr)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            var i, s, l, u, c, d, p, m, f, w, x, N, v, g, y, E, C, S, b, R;
            const n = () => {
                Ae(this, Bt, bn).call(this, {
                    type: "continue"
                })
            };
            U(this, pr, cv({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (P, M) => {
                    Ae(this, Bt, bn).call(this, {
                        type: "failed",
                        failureCount: P,
                        error: M
                    })
                },
                onPause: () => {
                    Ae(this, Bt, bn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: n,
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => k(this, Ue).canRun(this)
            }));
            const r = this.state.status === "pending",
                o = !k(this, pr).canStart();
            try {
                if (r) n();
                else {
                    Ae(this, Bt, bn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: o
                    }), await ((s = (i = k(this, Ue).config).onMutate) == null ? void 0 : s.call(i, t, this));
                    const M = await ((u = (l = this.options).onMutate) == null ? void 0 : u.call(l, t));
                    M !== this.state.context && Ae(this, Bt, bn).call(this, {
                        type: "pending",
                        context: M,
                        variables: t,
                        isPaused: o
                    })
                }
                const P = await k(this, pr).start();
                return await ((d = (c = k(this, Ue).config).onSuccess) == null ? void 0 : d.call(c, P, t, this.state.context, this)), await ((m = (p = this.options).onSuccess) == null ? void 0 : m.call(p, P, t, this.state.context)), await ((w = (f = k(this, Ue).config).onSettled) == null ? void 0 : w.call(f, P, null, this.state.variables, this.state.context, this)), await ((N = (x = this.options).onSettled) == null ? void 0 : N.call(x, P, null, t, this.state.context)), Ae(this, Bt, bn).call(this, {
                    type: "success",
                    data: P
                }), P
            } catch (P) {
                try {
                    throw await ((g = (v = k(this, Ue).config).onError) == null ? void 0 : g.call(v, P, t, this.state.context, this)), await ((E = (y = this.options).onError) == null ? void 0 : E.call(y, P, t, this.state.context)), await ((S = (C = k(this, Ue).config).onSettled) == null ? void 0 : S.call(C, void 0, P, this.state.variables, this.state.context, this)), await ((R = (b = this.options).onSettled) == null ? void 0 : R.call(b, void 0, P, t, this.state.context)), P
                } finally {
                    Ae(this, Bt, bn).call(this, {
                        type: "error",
                        error: P
                    })
                }
            } finally {
                k(this, Ue).runNext(this)
            }
        }
    }, $t = new WeakMap, Ue = new WeakMap, pr = new WeakMap, Bt = new WeakSet, bn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), Ke.batch(() => {
            k(this, $t).forEach(r => {
                r.onMutationUpdate(t)
            }), k(this, Ue).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, wp);

function vE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var tn, Pt, ji, Np, yE = (Np = class extends zl {
    constructor(t = {}) {
        super();
        J(this, tn);
        J(this, Pt);
        J(this, ji);
        this.config = t, U(this, tn, new Set), U(this, Pt, new Map), U(this, ji, 0)
    }
    build(t, n, r) {
        const o = new gE({
            mutationCache: this,
            mutationId: ++Wi(this, ji)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o), o
    }
    add(t) {
        k(this, tn).add(t);
        const n = ps(t);
        if (typeof n == "string") {
            const r = k(this, Pt).get(n);
            r ? r.push(t) : k(this, Pt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (k(this, tn).delete(t)) {
            const n = ps(t);
            if (typeof n == "string") {
                const r = k(this, Pt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else r[0] === t && k(this, Pt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ps(t);
        if (typeof n == "string") {
            const r = k(this, Pt).get(n),
                o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else return !0
    }
    runNext(t) {
        var r;
        const n = ps(t);
        if (typeof n == "string") {
            const o = (r = k(this, Pt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        Ke.batch(() => {
            k(this, tn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }), k(this, tn).clear(), k(this, Pt).clear()
        })
    }
    getAll() {
        return Array.from(k(this, tn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => np(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => np(t, n))
    }
    notify(t) {
        Ke.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ke.batch(() => Promise.all(t.map(n => n.continue().catch(kt))))
    }
}, tn = new WeakMap, Pt = new WeakMap, ji = new WeakMap, Np);

function ps(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}

function ip(e) {
    return {
        onFetch: (t, n) => {
            var d, p, m, f, w;
            const r = t.options,
                o = (m = (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : m.direction,
                i = ((f = t.state.data) == null ? void 0 : f.pages) || [],
                s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
            let l = {
                    pages: [],
                    pageParams: []
                },
                u = 0;
            const c = async () => {
                let x = !1;
                const N = y => {
                        Object.defineProperty(y, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? x = !0 : t.signal.addEventListener("abort", () => {
                                x = !0
                            }), t.signal)
                        })
                    },
                    v = sv(t.options, t.fetchOptions),
                    g = async (y, E, C) => {
                        if (x) return Promise.reject();
                        if (E == null && y.pages.length) return Promise.resolve(y);
                        const b = (() => {
                                const F = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: E,
                                    direction: C ? "backward" : "forward",
                                    meta: t.options.meta
                                };
                                return N(F), F
                            })(),
                            R = await v(b),
                            {
                                maxPages: P
                            } = t.options,
                            M = C ? iE : oE;
                        return {
                            pages: M(y.pages, R, P),
                            pageParams: M(y.pageParams, E, P)
                        }
                    };
                if (o && i.length) {
                    const y = o === "backward",
                        E = y ? xE : sp,
                        C = {
                            pages: i,
                            pageParams: s
                        },
                        S = E(r, C);
                    l = await g(C, S, y)
                } else {
                    const y = e ? ? i.length;
                    do {
                        const E = u === 0 ? s[0] ? ? r.initialPageParam : sp(r, l);
                        if (u > 0 && E == null) break;
                        l = await g(l, E), u++
                    } while (u < y)
                }
                return l
            };
            t.options.persister ? t.fetchFn = () => {
                var x, N;
                return (N = (x = t.options).persister) == null ? void 0 : N.call(x, c, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = c
        }
    }
}

function sp(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function xE(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Ne, _n, On, lo, ao, Ln, uo, co, Ep, wE = (Ep = class {
        constructor(e = {}) {
            J(this, Ne);
            J(this, _n);
            J(this, On);
            J(this, lo);
            J(this, ao);
            J(this, Ln);
            J(this, uo);
            J(this, co);
            U(this, Ne, e.queryCache || new mE), U(this, _n, e.mutationCache || new yE), U(this, On, e.defaultOptions || {}), U(this, lo, new Map), U(this, ao, new Map), U(this, Ln, 0)
        }
        mount() {
            Wi(this, Ln)._++, k(this, Ln) === 1 && (U(this, uo, lv.subscribe(async e => {
                e && (await this.resumePausedMutations(), k(this, Ne).onFocus())
            })), U(this, co, dl.subscribe(async e => {
                e && (await this.resumePausedMutations(), k(this, Ne).onOnline())
            })))
        }
        unmount() {
            var e, t;
            Wi(this, Ln)._--, k(this, Ln) === 0 && ((e = k(this, uo)) == null || e.call(this), U(this, uo, void 0), (t = k(this, co)) == null || t.call(this), U(this, co, void 0))
        }
        isFetching(e) {
            return k(this, Ne).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return k(this, _n).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = k(this, Ne).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
                n = k(this, Ne).build(this, t),
                r = n.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(_u(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r))
        }
        getQueriesData(e) {
            return k(this, Ne).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                o = k(this, Ne).get(r.queryHash),
                i = o == null ? void 0 : o.state.data,
                s = ZN(t, i);
            if (s !== void 0) return k(this, Ne).build(this, r).setData(s, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return Ke.batch(() => k(this, Ne).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = k(this, Ne).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = k(this, Ne);
            Ke.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = k(this, Ne);
            return Ke.batch(() => (n.findAll(e).forEach(r => {
                r.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, t)))
        }
        cancelQueries(e, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = Ke.batch(() => k(this, Ne).findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(kt).catch(kt)
        }
        invalidateQueries(e, t = {}) {
            return Ke.batch(() => (k(this, Ne).findAll(e).forEach(n => {
                n.invalidate()
            }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...e,
                type: (e == null ? void 0 : e.refetchType) ? ? (e == null ? void 0 : e.type) ? ? "active"
            }, t)))
        }
        refetchQueries(e, t = {}) {
            const n = { ...t,
                    cancelRefetch: t.cancelRefetch ? ? !0
                },
                r = Ke.batch(() => k(this, Ne).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
                    let i = o.fetch(void 0, n);
                    return n.throwOnError || (i = i.catch(kt)), o.state.fetchStatus === "paused" ? Promise.resolve() : i
                }));
            return Promise.all(r).then(kt)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = k(this, Ne).build(this, t);
            return n.isStaleByTime(_u(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(kt).catch(kt)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = ip(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(kt).catch(kt)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = ip(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return dl.isOnline() ? k(this, _n).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return k(this, Ne)
        }
        getMutationCache() {
            return k(this, _n)
        }
        getDefaultOptions() {
            return k(this, On)
        }
        setDefaultOptions(e) {
            U(this, On, e)
        }
        setQueryDefaults(e, t) {
            k(this, lo).set(Ci(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...k(this, lo).values()],
                n = {};
            return t.forEach(r => {
                Si(e, r.queryKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        setMutationDefaults(e, t) {
            k(this, ao).set(Ci(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...k(this, ao).values()],
                n = {};
            return t.forEach(r => {
                Si(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...k(this, On).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = td(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === nd && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...k(this, On).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            k(this, Ne).clear(), k(this, _n).clear()
        }
    }, Ne = new WeakMap, _n = new WeakMap, On = new WeakMap, lo = new WeakMap, ao = new WeakMap, Ln = new WeakMap, uo = new WeakMap, co = new WeakMap, Ep),
    NE = h.createContext(void 0),
    EE = ({
        client: e,
        children: t
    }) => (h.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), a.jsx(NE.Provider, {
        value: e,
        children: t
    }));
/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var lp = "popstate";

function CE(e = {}) {
    function t(r, o) {
        let {
            pathname: i,
            search: s,
            hash: l
        } = r.location;
        return Lu("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : bi(o)
    }
    return bE(t, n, null, e)
}

function ye(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Gt(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function SE() {
    return Math.random().toString(36).substring(2, 10)
}

function ap(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Lu(e, t, n = null, r) {
    return {
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: "",
        ...typeof t == "string" ? Po(t) : t,
        state: n,
        key: t && t.key || r || SE()
    }
}

function bi({
    pathname: e = "/",
    search: t = "",
    hash: n = ""
}) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e
}

function Po(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e)
    }
    return t
}

function bE(e, t, n, r = {}) {
    let {
        window: o = document.defaultView,
        v5Compat: i = !1
    } = r, s = o.history, l = "POP", u = null, c = d();
    c == null && (c = 0, s.replaceState({ ...s.state,
        idx: c
    }, ""));

    function d() {
        return (s.state || {
            idx: null
        }).idx
    }

    function p() {
        l = "POP";
        let N = d(),
            v = N == null ? null : N - c;
        c = N, u && u({
            action: l,
            location: x.location,
            delta: v
        })
    }

    function m(N, v) {
        l = "PUSH";
        let g = Lu(x.location, N, v);
        c = d() + 1;
        let y = ap(g, c),
            E = x.createHref(g);
        try {
            s.pushState(y, "", E)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            o.location.assign(E)
        }
        i && u && u({
            action: l,
            location: x.location,
            delta: 1
        })
    }

    function f(N, v) {
        l = "REPLACE";
        let g = Lu(x.location, N, v);
        c = d();
        let y = ap(g, c),
            E = x.createHref(g);
        s.replaceState(y, "", E), i && u && u({
            action: l,
            location: x.location,
            delta: 0
        })
    }

    function w(N) {
        return kE(N)
    }
    let x = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(N) {
            if (u) throw new Error("A history only accepts one active listener");
            return o.addEventListener(lp, p), u = N, () => {
                o.removeEventListener(lp, p), u = null
            }
        },
        createHref(N) {
            return t(o, N)
        },
        createURL: w,
        encodeLocation(N) {
            let v = w(N);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: m,
        replace: f,
        go(N) {
            return s.go(N)
        }
    };
    return x
}

function kE(e, t = !1) {
    let n = "http://localhost";
    typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href), ye(n, "No window.location.(origin|href) available to create URL");
    let r = typeof e == "string" ? e : bi(e);
    return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n)
}

function fv(e, t, n = "/") {
    return jE(e, t, n, !1)
}

function jE(e, t, n, r) {
    let o = typeof t == "string" ? Po(t) : t,
        i = pn(o.pathname || "/", n);
    if (i == null) return null;
    let s = pv(e);
    PE(s);
    let l = null;
    for (let u = 0; l == null && u < s.length; ++u) {
        let c = zE(i);
        l = DE(s[u], c, r)
    }
    return l
}

function pv(e, t = [], n = [], r = "", o = !1) {
    let i = (s, l, u = o, c) => {
        let d = {
            relativePath: c === void 0 ? s.path || "" : c,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: l,
            route: s
        };
        if (d.relativePath.startsWith("/")) {
            if (!d.relativePath.startsWith(r) && u) return;
            ye(d.relativePath.startsWith(r), `Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), d.relativePath = d.relativePath.slice(r.length)
        }
        let p = sn([r, d.relativePath]),
            m = n.concat(d);
        s.children && s.children.length > 0 && (ye(s.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${p}".`), pv(s.children, t, m, p, u)), !(s.path == null && !s.index) && t.push({
            path: p,
            score: AE(p, s.index),
            routesMeta: m
        })
    };
    return e.forEach((s, l) => {
        var u;
        if (s.path === "" || !((u = s.path) != null && u.includes("?"))) i(s, l);
        else
            for (let c of hv(s.path)) i(s, l, !0, c)
    }), t
}

function hv(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = hv(r.join("/")),
        l = [];
    return l.push(...s.map(u => u === "" ? i : [i, u].join("/"))), o && l.push(...s), l.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function PE(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : IE(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
var RE = /^:[\w-]+$/,
    TE = 3,
    ME = 2,
    _E = 1,
    OE = 10,
    LE = -2,
    up = e => e === "*";

function AE(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(up) && (r += LE), t && (r += ME), n.filter(o => !up(o)).reduce((o, i) => o + (RE.test(i) ? TE : i === "" ? _E : OE), r)
}

function IE(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function DE(e, t, n = !1) {
    let {
        routesMeta: r
    } = e, o = {}, i = "/", s = [];
    for (let l = 0; l < r.length; ++l) {
        let u = r[l],
            c = l === r.length - 1,
            d = i === "/" ? t : t.slice(i.length) || "/",
            p = fl({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: c
            }, d),
            m = u.route;
        if (!p && c && n && !r[r.length - 1].route.index && (p = fl({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: !1
            }, d)), !p) return null;
        Object.assign(o, p.params), s.push({
            params: o,
            pathname: sn([i, p.pathname]),
            pathnameBase: VE(sn([i, p.pathnameBase])),
            route: m
        }), p.pathnameBase !== "/" && (i = sn([i, p.pathnameBase]))
    }
    return s
}

function fl(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = FE(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        l = o.slice(1);
    return {
        params: r.reduce((c, {
            paramName: d,
            isOptional: p
        }, m) => {
            if (d === "*") {
                let w = l[m] || "";
                s = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const f = l[m];
            return p && !f ? c[d] = void 0 : c[d] = (f || "").replace(/%2F/g, "/"), c
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}

function FE(e, t = !1, n = !0) {
    Gt(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, u) => (r.push({
            paramName: l,
            isOptional: u != null
        }), u ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function zE(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Gt(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e
    }
}

function pn(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function $E(e, t = "/") {
    let {
        pathname: n,
        search: r = "",
        hash: o = ""
    } = typeof e == "string" ? Po(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : BE(n, t) : t,
        search: HE(r),
        hash: WE(o)
    }
}

function BE(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }), n.length > 1 ? n.join("/") : "/"
}

function ja(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function UE(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function mv(e) {
    let t = UE(e);
    return t.map((n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase)
}

function gv(e, t, n, r = !1) {
    let o;
    typeof e == "string" ? o = Po(e) : (o = { ...e
    }, ye(!o.pathname || !o.pathname.includes("?"), ja("?", "pathname", "search", o)), ye(!o.pathname || !o.pathname.includes("#"), ja("#", "pathname", "hash", o)), ye(!o.search || !o.search.includes("#"), ja("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "",
        s = i ? "/" : o.pathname,
        l;
    if (s == null) l = n;
    else {
        let p = t.length - 1;
        if (!r && s.startsWith("..")) {
            let m = s.split("/");
            for (; m[0] === "..";) m.shift(), p -= 1;
            o.pathname = m.join("/")
        }
        l = p >= 0 ? t[p] : "/"
    }
    let u = $E(o, l),
        c = s && s !== "/" && s.endsWith("/"),
        d = (i || s === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u
}
var sn = e => e.join("/").replace(/\/\/+/g, "/"),
    VE = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    HE = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    WE = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function KE(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
var vv = ["POST", "PUT", "PATCH", "DELETE"];
new Set(vv);
var QE = ["GET", ...vv];
new Set(QE);
var Ro = h.createContext(null);
Ro.displayName = "DataRouter";
var Bl = h.createContext(null);
Bl.displayName = "DataRouterState";
h.createContext(!1);
var yv = h.createContext({
    isTransitioning: !1
});
yv.displayName = "ViewTransition";
var GE = h.createContext(new Map);
GE.displayName = "Fetchers";
var YE = h.createContext(null);
YE.displayName = "Await";
var Xt = h.createContext(null);
Xt.displayName = "Navigation";
var Di = h.createContext(null);
Di.displayName = "Location";
var mn = h.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
mn.displayName = "Route";
var rd = h.createContext(null);
rd.displayName = "RouteError";

function XE(e, {
    relative: t
} = {}) {
    ye(Fi(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: n,
        navigator: r
    } = h.useContext(Xt), {
        hash: o,
        pathname: i,
        search: s
    } = zi(e, {
        relative: t
    }), l = i;
    return n !== "/" && (l = i === "/" ? n : sn([n, i])), r.createHref({
        pathname: l,
        search: s,
        hash: o
    })
}

function Fi() {
    return h.useContext(Di) != null
}

function Zn() {
    return ye(Fi(), "useLocation() may be used only in the context of a <Router> component."), h.useContext(Di).location
}
var xv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function wv(e) {
    h.useContext(Xt).static || h.useLayoutEffect(e)
}

function qE() {
    let {
        isDataRoute: e
    } = h.useContext(mn);
    return e ? cC() : ZE()
}

function ZE() {
    ye(Fi(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = h.useContext(Ro),
        {
            basename: t,
            navigator: n
        } = h.useContext(Xt),
        {
            matches: r
        } = h.useContext(mn),
        {
            pathname: o
        } = Zn(),
        i = JSON.stringify(mv(r)),
        s = h.useRef(!1);
    return wv(() => {
        s.current = !0
    }), h.useCallback((u, c = {}) => {
        if (Gt(s.current, xv), !s.current) return;
        if (typeof u == "number") {
            n.go(u);
            return
        }
        let d = gv(u, JSON.parse(i), o, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : sn([t, d.pathname])), (c.replace ? n.replace : n.push)(d, c.state, c)
    }, [t, n, i, o, e])
}
h.createContext(null);

function zi(e, {
    relative: t
} = {}) {
    let {
        matches: n
    } = h.useContext(mn), {
        pathname: r
    } = Zn(), o = JSON.stringify(mv(n));
    return h.useMemo(() => gv(e, JSON.parse(o), r, t === "path"), [e, o, r, t])
}

function JE(e, t) {
    return Nv(e, t)
}

function Nv(e, t, n, r, o) {
    var g;
    ye(Fi(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: i
    } = h.useContext(Xt), {
        matches: s
    } = h.useContext(mn), l = s[s.length - 1], u = l ? l.params : {}, c = l ? l.pathname : "/", d = l ? l.pathnameBase : "/", p = l && l.route; {
        let y = p && p.path || "";
        Ev(c, !p || y.endsWith("*") || y.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)
    }
    let m = Zn(),
        f;
    if (t) {
        let y = typeof t == "string" ? Po(t) : t;
        ye(d === "/" || ((g = y.pathname) == null ? void 0 : g.startsWith(d)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${y.pathname}" was given in the \`location\` prop.`), f = y
    } else f = m;
    let w = f.pathname || "/",
        x = w;
    if (d !== "/") {
        let y = d.replace(/^\//, "").split("/");
        x = "/" + w.replace(/^\//, "").split("/").slice(y.length).join("/")
    }
    let N = fv(e, {
        pathname: x
    });
    Gt(p || N != null, `No routes matched location "${f.pathname}${f.search}${f.hash}" `), Gt(N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0, `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let v = oC(N && N.map(y => Object.assign({}, y, {
        params: Object.assign({}, u, y.params),
        pathname: sn([d, i.encodeLocation ? i.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? d : sn([d, i.encodeLocation ? i.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), s, n, r, o);
    return t && v ? h.createElement(Di.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...f
            },
            navigationType: "POP"
        }
    }, v) : v
}

function eC() {
    let e = uC(),
        t = KE(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = "rgba(200,200,200, 0.5)",
        o = {
            padding: "0.5rem",
            backgroundColor: r
        },
        i = {
            padding: "2px 4px",
            backgroundColor: r
        },
        s = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e), s = h.createElement(h.Fragment, null, h.createElement("p", null, "💿 Hey developer 👋"), h.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", h.createElement("code", {
        style: i
    }, "ErrorBoundary"), " or", " ", h.createElement("code", {
        style: i
    }, "errorElement"), " prop on your route.")), h.createElement(h.Fragment, null, h.createElement("h2", null, "Unexpected Application Error!"), h.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? h.createElement("pre", {
        style: o
    }, n) : null, s)
}
var tC = h.createElement(eC, null),
    nC = class extends h.Component {
        constructor(e) {
            super(e), this.state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error
            }
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        static getDerivedStateFromProps(e, t) {
            return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation
            } : {
                error: e.error !== void 0 ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation
            }
        }
        componentDidCatch(e, t) {
            this.props.unstable_onError ? this.props.unstable_onError(e, t) : console.error("React Router caught the following error during render", e)
        }
        render() {
            return this.state.error !== void 0 ? h.createElement(mn.Provider, {
                value: this.props.routeContext
            }, h.createElement(rd.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function rC({
    routeContext: e,
    match: t,
    children: n
}) {
    let r = h.useContext(Ro);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), h.createElement(mn.Provider, {
        value: e
    }, n)
}

function oC(e, t = [], n = null, r = null, o = null) {
    if (e == null) {
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if (t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let i = e,
        s = n == null ? void 0 : n.errors;
    if (s != null) {
        let c = i.findIndex(d => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0);
        ye(c >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`), i = i.slice(0, Math.min(i.length, c + 1))
    }
    let l = !1,
        u = -1;
    if (n)
        for (let c = 0; c < i.length; c++) {
            let d = i[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id) {
                let {
                    loaderData: p,
                    errors: m
                } = n, f = d.route.loader && !p.hasOwnProperty(d.route.id) && (!m || m[d.route.id] === void 0);
                if (d.route.lazy || f) {
                    l = !0, u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((c, d, p) => {
        let m, f = !1,
            w = null,
            x = null;
        n && (m = s && d.route.id ? s[d.route.id] : void 0, w = d.route.errorElement || tC, l && (u < 0 && p === 0 ? (Ev("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, x = null) : u === p && (f = !0, x = d.route.hydrateFallbackElement || null)));
        let N = t.concat(i.slice(0, p + 1)),
            v = () => {
                let g;
                return m ? g = w : f ? g = x : d.route.Component ? g = h.createElement(d.route.Component, null) : d.route.element ? g = d.route.element : g = c, h.createElement(rC, {
                    match: d,
                    routeContext: {
                        outlet: c,
                        matches: N,
                        isDataRoute: n != null
                    },
                    children: g
                })
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0) ? h.createElement(nC, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: m,
            children: v(),
            routeContext: {
                outlet: null,
                matches: N,
                isDataRoute: !0
            },
            unstable_onError: r
        }) : v()
    }, null)
}

function od(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function iC(e) {
    let t = h.useContext(Ro);
    return ye(t, od(e)), t
}

function sC(e) {
    let t = h.useContext(Bl);
    return ye(t, od(e)), t
}

function lC(e) {
    let t = h.useContext(mn);
    return ye(t, od(e)), t
}

function id(e) {
    let t = lC(e),
        n = t.matches[t.matches.length - 1];
    return ye(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id
}

function aC() {
    return id("useRouteId")
}

function uC() {
    var r;
    let e = h.useContext(rd),
        t = sC("useRouteError"),
        n = id("useRouteError");
    return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n]
}

function cC() {
    let {
        router: e
    } = iC("useNavigate"), t = id("useNavigate"), n = h.useRef(!1);
    return wv(() => {
        n.current = !0
    }), h.useCallback(async (o, i = {}) => {
        Gt(n.current, xv), n.current && (typeof o == "number" ? e.navigate(o) : await e.navigate(o, {
            fromRouteId: t,
            ...i
        }))
    }, [e, t])
}
var cp = {};

function Ev(e, t, n) {
    !t && !cp[e] && (cp[e] = !0, Gt(!1, n))
}
h.memo(dC);

function dC({
    routes: e,
    future: t,
    state: n,
    unstable_onError: r
}) {
    return Nv(e, void 0, n, r, t)
}

function or(e) {
    ye(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function fC({
    basename: e = "/",
    children: t = null,
    location: n,
    navigationType: r = "POP",
    navigator: o,
    static: i = !1
}) {
    ye(!Fi(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let s = e.replace(/^\/*/, "/"),
        l = h.useMemo(() => ({
            basename: s,
            navigator: o,
            static: i,
            future: {}
        }), [s, o, i]);
    typeof n == "string" && (n = Po(n));
    let {
        pathname: u = "/",
        search: c = "",
        hash: d = "",
        state: p = null,
        key: m = "default"
    } = n, f = h.useMemo(() => {
        let w = pn(u, s);
        return w == null ? null : {
            location: {
                pathname: w,
                search: c,
                hash: d,
                state: p,
                key: m
            },
            navigationType: r
        }
    }, [s, u, c, d, p, m, r]);
    return Gt(f != null, `<Router basename="${s}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`), f == null ? null : h.createElement(Xt.Provider, {
        value: l
    }, h.createElement(Di.Provider, {
        children: t,
        value: f
    }))
}

function pC({
    children: e,
    location: t
}) {
    return JE(Au(e), t)
}

function Au(e, t = []) {
    let n = [];
    return h.Children.forEach(e, (r, o) => {
        if (!h.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === h.Fragment) {
            n.push.apply(n, Au(r.props.children, i));
            return
        }
        ye(r.type === or, `[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), ye(!r.props.index || !r.props.children, "An index route cannot have child routes.");
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            hydrateFallbackElement: r.props.hydrateFallbackElement,
            HydrateFallback: r.props.HydrateFallback,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Au(r.props.children, i)), n.push(s)
    }), n
}
var _s = "get",
    Os = "application/x-www-form-urlencoded";

function Ul(e) {
    return e != null && typeof e.tagName == "string"
}

function hC(e) {
    return Ul(e) && e.tagName.toLowerCase() === "button"
}

function mC(e) {
    return Ul(e) && e.tagName.toLowerCase() === "form"
}

function gC(e) {
    return Ul(e) && e.tagName.toLowerCase() === "input"
}

function vC(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function yC(e, t) {
    return e.button === 0 && (!t || t === "_self") && !vC(e)
}
var hs = null;

function xC() {
    if (hs === null) try {
        new FormData(document.createElement("form"), 0), hs = !1
    } catch {
        hs = !0
    }
    return hs
}
var wC = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Pa(e) {
    return e != null && !wC.has(e) ? (Gt(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Os}"`), null) : e
}

function NC(e, t) {
    let n, r, o, i, s;
    if (mC(e)) {
        let l = e.getAttribute("action");
        r = l ? pn(l, t) : null, n = e.getAttribute("method") || _s, o = Pa(e.getAttribute("enctype")) || Os, i = new FormData(e)
    } else if (hC(e) || gC(e) && (e.type === "submit" || e.type === "image")) {
        let l = e.form;
        if (l == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let u = e.getAttribute("formaction") || l.getAttribute("action");
        if (r = u ? pn(u, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || _s, o = Pa(e.getAttribute("formenctype")) || Pa(l.getAttribute("enctype")) || Os, i = new FormData(l, e), !xC()) {
            let {
                name: c,
                type: d,
                value: p
            } = e;
            if (d === "image") {
                let m = c ? `${c}.` : "";
                i.append(`${m}x`, "0"), i.append(`${m}y`, "0")
            } else c && i.append(c, p)
        }
    } else {
        if (Ul(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        n = _s, r = null, o = Os, s = e
    }
    return i && o === "text/plain" && (s = i, i = void 0), {
        action: r,
        method: n.toLowerCase(),
        encType: o,
        formData: i,
        body: s
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function sd(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function EC(e, t, n) {
    let r = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return r.pathname === "/" ? r.pathname = `_root.${n}` : t && pn(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/,"")}/_root.${n}` : r.pathname = `${r.pathname.replace(/\/$/,"")}.${n}`, r
}
async function CC(e, t) {
    if (e.id in t) return t[e.id];
    try {
        let n = await
        import (e.module);
        return t[e.id] = n, n
    } catch (n) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function SC(e) {
    return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string"
}
async function bC(e, t, n) {
    let r = await Promise.all(e.map(async o => {
        let i = t.routes[o.route.id];
        if (i) {
            let s = await CC(i, n);
            return s.links ? s.links() : []
        }
        return []
    }));
    return RC(r.flat(1).filter(SC).filter(o => o.rel === "stylesheet" || o.rel === "preload").map(o => o.rel === "stylesheet" ? { ...o,
        rel: "prefetch",
        as: "style"
    } : { ...o,
        rel: "prefetch"
    }))
}

function dp(e, t, n, r, o, i) {
    let s = (u, c) => n[c] ? u.route.id !== n[c].route.id : !0,
        l = (u, c) => {
            var d;
            return n[c].pathname !== u.pathname || ((d = n[c].route.path) == null ? void 0 : d.endsWith("*")) && n[c].params["*"] !== u.params["*"]
        };
    return i === "assets" ? t.filter((u, c) => s(u, c) || l(u, c)) : i === "data" ? t.filter((u, c) => {
        var p;
        let d = r.routes[u.route.id];
        if (!d || !d.hasLoader) return !1;
        if (s(u, c) || l(u, c)) return !0;
        if (u.route.shouldRevalidate) {
            let m = u.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                currentParams: ((p = n[0]) == null ? void 0 : p.params) || {},
                nextUrl: new URL(e, window.origin),
                nextParams: u.params,
                defaultShouldRevalidate: !0
            });
            if (typeof m == "boolean") return m
        }
        return !0
    }) : []
}

function kC(e, t, {
    includeHydrateFallback: n
} = {}) {
    return jC(e.map(r => {
        let o = t.routes[r.route.id];
        if (!o) return [];
        let i = [o.module];
        return o.clientActionModule && (i = i.concat(o.clientActionModule)), o.clientLoaderModule && (i = i.concat(o.clientLoaderModule)), n && o.hydrateFallbackModule && (i = i.concat(o.hydrateFallbackModule)), o.imports && (i = i.concat(o.imports)), i
    }).flat(1))
}

function jC(e) {
    return [...new Set(e)]
}

function PC(e) {
    let t = {},
        n = Object.keys(e).sort();
    for (let r of n) t[r] = e[r];
    return t
}

function RC(e, t) {
    let n = new Set;
    return new Set(t), e.reduce((r, o) => {
        let i = JSON.stringify(PC(o));
        return n.has(i) || (n.add(i), r.push({
            key: i,
            link: o
        })), r
    }, [])
}

function Cv() {
    let e = h.useContext(Ro);
    return sd(e, "You must render this element inside a <DataRouterContext.Provider> element"), e
}

function TC() {
    let e = h.useContext(Bl);
    return sd(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e
}
var ld = h.createContext(void 0);
ld.displayName = "FrameworkContext";

function Sv() {
    let e = h.useContext(ld);
    return sd(e, "You must render this element inside a <HydratedRouter> element"), e
}

function MC(e, t) {
    let n = h.useContext(ld),
        [r, o] = h.useState(!1),
        [i, s] = h.useState(!1),
        {
            onFocus: l,
            onBlur: u,
            onMouseEnter: c,
            onMouseLeave: d,
            onTouchStart: p
        } = t,
        m = h.useRef(null);
    h.useEffect(() => {
        if (e === "render" && s(!0), e === "viewport") {
            let x = v => {
                    v.forEach(g => {
                        s(g.isIntersecting)
                    })
                },
                N = new IntersectionObserver(x, {
                    threshold: .5
                });
            return m.current && N.observe(m.current), () => {
                N.disconnect()
            }
        }
    }, [e]), h.useEffect(() => {
        if (r) {
            let x = setTimeout(() => {
                s(!0)
            }, 100);
            return () => {
                clearTimeout(x)
            }
        }
    }, [r]);
    let f = () => {
            o(!0)
        },
        w = () => {
            o(!1), s(!1)
        };
    return n ? e !== "intent" ? [i, m, {}] : [i, m, {
        onFocus: Uo(l, f),
        onBlur: Uo(u, w),
        onMouseEnter: Uo(c, f),
        onMouseLeave: Uo(d, w),
        onTouchStart: Uo(p, f)
    }] : [!1, m, {}]
}

function Uo(e, t) {
    return n => {
        e && e(n), n.defaultPrevented || t(n)
    }
}

function _C({
    page: e,
    ...t
}) {
    let {
        router: n
    } = Cv(), r = h.useMemo(() => fv(n.routes, e, n.basename), [n.routes, e, n.basename]);
    return r ? h.createElement(LC, {
        page: e,
        matches: r,
        ...t
    }) : null
}

function OC(e) {
    let {
        manifest: t,
        routeModules: n
    } = Sv(), [r, o] = h.useState([]);
    return h.useEffect(() => {
        let i = !1;
        return bC(e, t, n).then(s => {
            i || o(s)
        }), () => {
            i = !0
        }
    }, [e, t, n]), r
}

function LC({
    page: e,
    matches: t,
    ...n
}) {
    let r = Zn(),
        {
            manifest: o,
            routeModules: i
        } = Sv(),
        {
            basename: s
        } = Cv(),
        {
            loaderData: l,
            matches: u
        } = TC(),
        c = h.useMemo(() => dp(e, t, u, o, r, "data"), [e, t, u, o, r]),
        d = h.useMemo(() => dp(e, t, u, o, r, "assets"), [e, t, u, o, r]),
        p = h.useMemo(() => {
            if (e === r.pathname + r.search + r.hash) return [];
            let w = new Set,
                x = !1;
            if (t.forEach(v => {
                    var y;
                    let g = o.routes[v.route.id];
                    !g || !g.hasLoader || (!c.some(E => E.route.id === v.route.id) && v.route.id in l && ((y = i[v.route.id]) != null && y.shouldRevalidate) || g.hasClientLoader ? x = !0 : w.add(v.route.id))
                }), w.size === 0) return [];
            let N = EC(e, s, "data");
            return x && w.size > 0 && N.searchParams.set("_routes", t.filter(v => w.has(v.route.id)).map(v => v.route.id).join(",")), [N.pathname + N.search]
        }, [s, l, r, o, c, t, e, i]),
        m = h.useMemo(() => kC(d, o), [d, o]),
        f = OC(d);
    return h.createElement(h.Fragment, null, p.map(w => h.createElement("link", {
        key: w,
        rel: "prefetch",
        as: "fetch",
        href: w,
        ...n
    })), m.map(w => h.createElement("link", {
        key: w,
        rel: "modulepreload",
        href: w,
        ...n
    })), f.map(({
        key: w,
        link: x
    }) => h.createElement("link", {
        key: w,
        nonce: n.nonce,
        ...x
    })))
}

function AC(...e) {
    return t => {
        e.forEach(n => {
            typeof n == "function" ? n(t) : n != null && (n.current = t)
        })
    }
}
var bv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    bv && (window.__reactRouterVersion = "7.8.2")
} catch {}

function IC({
    basename: e,
    children: t,
    window: n
}) {
    let r = h.useRef();
    r.current == null && (r.current = CE({
        window: n,
        v5Compat: !0
    }));
    let o = r.current,
        [i, s] = h.useState({
            action: o.action,
            location: o.location
        }),
        l = h.useCallback(u => {
            h.startTransition(() => s(u))
        }, [s]);
    return h.useLayoutEffect(() => o.listen(l), [o, l]), h.createElement(fC, {
        basename: e,
        children: t,
        location: i.location,
        navigationType: i.action,
        navigator: o
    })
}
var kv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Mt = h.forwardRef(function({
        onClick: t,
        discover: n = "render",
        prefetch: r = "none",
        relative: o,
        reloadDocument: i,
        replace: s,
        state: l,
        target: u,
        to: c,
        preventScrollReset: d,
        viewTransition: p,
        ...m
    }, f) {
        let {
            basename: w
        } = h.useContext(Xt), x = typeof c == "string" && kv.test(c), N, v = !1;
        if (typeof c == "string" && x && (N = c, bv)) try {
            let P = new URL(window.location.href),
                M = c.startsWith("//") ? new URL(P.protocol + c) : new URL(c),
                F = pn(M.pathname, w);
            M.origin === P.origin && F != null ? c = F + M.search + M.hash : v = !0
        } catch {
            Gt(!1, `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let g = XE(c, {
                relative: o
            }),
            [y, E, C] = MC(r, m),
            S = $C(c, {
                replace: s,
                state: l,
                target: u,
                preventScrollReset: d,
                relative: o,
                viewTransition: p
            });

        function b(P) {
            t && t(P), P.defaultPrevented || S(P)
        }
        let R = h.createElement("a", { ...m,
            ...C,
            href: N || g,
            onClick: v || i ? t : b,
            ref: AC(f, E),
            target: u,
            "data-discover": !x && n === "render" ? "true" : void 0
        });
        return y && !x ? h.createElement(h.Fragment, null, R, h.createElement(_C, {
            page: g
        })) : R
    });
Mt.displayName = "Link";
var DC = h.forwardRef(function({
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: o = !1,
    style: i,
    to: s,
    viewTransition: l,
    children: u,
    ...c
}, d) {
    let p = zi(s, {
            relative: c.relative
        }),
        m = Zn(),
        f = h.useContext(Bl),
        {
            navigator: w,
            basename: x
        } = h.useContext(Xt),
        N = f != null && WC(p) && l === !0,
        v = w.encodeLocation ? w.encodeLocation(p).pathname : p.pathname,
        g = m.pathname,
        y = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
    n || (g = g.toLowerCase(), y = y ? y.toLowerCase() : null, v = v.toLowerCase()), y && x && (y = pn(y, x) || y);
    const E = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
    let C = g === v || !o && g.startsWith(v) && g.charAt(E) === "/",
        S = y != null && (y === v || !o && y.startsWith(v) && y.charAt(v.length) === "/"),
        b = {
            isActive: C,
            isPending: S,
            isTransitioning: N
        },
        R = C ? t : void 0,
        P;
    typeof r == "function" ? P = r(b) : P = [r, C ? "active" : null, S ? "pending" : null, N ? "transitioning" : null].filter(Boolean).join(" ");
    let M = typeof i == "function" ? i(b) : i;
    return h.createElement(Mt, { ...c,
        "aria-current": R,
        className: P,
        ref: d,
        style: M,
        to: s,
        viewTransition: l
    }, typeof u == "function" ? u(b) : u)
});
DC.displayName = "NavLink";
var FC = h.forwardRef(({
    discover: e = "render",
    fetcherKey: t,
    navigate: n,
    reloadDocument: r,
    replace: o,
    state: i,
    method: s = _s,
    action: l,
    onSubmit: u,
    relative: c,
    preventScrollReset: d,
    viewTransition: p,
    ...m
}, f) => {
    let w = VC(),
        x = HC(l, {
            relative: c
        }),
        N = s.toLowerCase() === "get" ? "get" : "post",
        v = typeof l == "string" && kv.test(l),
        g = y => {
            if (u && u(y), y.defaultPrevented) return;
            y.preventDefault();
            let E = y.nativeEvent.submitter,
                C = (E == null ? void 0 : E.getAttribute("formmethod")) || s;
            w(E || y.currentTarget, {
                fetcherKey: t,
                method: C,
                navigate: n,
                replace: o,
                state: i,
                relative: c,
                preventScrollReset: d,
                viewTransition: p
            })
        };
    return h.createElement("form", {
        ref: f,
        method: N,
        action: x,
        onSubmit: r ? u : g,
        ...m,
        "data-discover": !v && e === "render" ? "true" : void 0
    })
});
FC.displayName = "Form";

function zC(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function jv(e) {
    let t = h.useContext(Ro);
    return ye(t, zC(e)), t
}

function $C(e, {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: o,
    relative: i,
    viewTransition: s
} = {}) {
    let l = qE(),
        u = Zn(),
        c = zi(e, {
            relative: i
        });
    return h.useCallback(d => {
        if (yC(d, t)) {
            d.preventDefault();
            let p = n !== void 0 ? n : bi(u) === bi(c);
            l(e, {
                replace: p,
                state: r,
                preventScrollReset: o,
                relative: i,
                viewTransition: s
            })
        }
    }, [u, l, c, n, r, t, e, o, i, s])
}
var BC = 0,
    UC = () => `__${String(++BC)}__`;

function VC() {
    let {
        router: e
    } = jv("useSubmit"), {
        basename: t
    } = h.useContext(Xt), n = aC();
    return h.useCallback(async (r, o = {}) => {
        let {
            action: i,
            method: s,
            encType: l,
            formData: u,
            body: c
        } = NC(r, t);
        if (o.navigate === !1) {
            let d = o.fetcherKey || UC();
            await e.fetch(d, n, o.action || i, {
                preventScrollReset: o.preventScrollReset,
                formData: u,
                body: c,
                formMethod: o.method || s,
                formEncType: o.encType || l,
                flushSync: o.flushSync
            })
        } else await e.navigate(o.action || i, {
            preventScrollReset: o.preventScrollReset,
            formData: u,
            body: c,
            formMethod: o.method || s,
            formEncType: o.encType || l,
            replace: o.replace,
            state: o.state,
            fromRouteId: n,
            flushSync: o.flushSync,
            viewTransition: o.viewTransition
        })
    }, [e, t, n])
}

function HC(e, {
    relative: t
} = {}) {
    let {
        basename: n
    } = h.useContext(Xt), r = h.useContext(mn);
    ye(r, "useFormAction must be used inside a RouteContext");
    let [o] = r.matches.slice(-1), i = { ...zi(e || ".", {
            relative: t
        })
    }, s = Zn();
    if (e == null) {
        i.search = s.search;
        let l = new URLSearchParams(i.search),
            u = l.getAll("index");
        if (u.some(d => d === "")) {
            l.delete("index"), u.filter(p => p).forEach(p => l.append("index", p));
            let d = l.toString();
            i.search = d ? `?${d}` : ""
        }
    }
    return (!e || e === ".") && o.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (i.pathname = i.pathname === "/" ? n : sn([n, i.pathname])), bi(i)
}

function WC(e, {
    relative: t
} = {}) {
    let n = h.useContext(yv);
    ye(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: r
    } = jv("useViewTransitionState"), o = zi(e, {
        relative: t
    });
    if (!n.isTransitioning) return !1;
    let i = pn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        s = pn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return fl(o.pathname, s) != null || fl(o.pathname, i) != null
}
const KC = Ol("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    He = h.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, i) => {
        const s = r ? Kx : "button";
        return a.jsx(s, {
            className: we(KC({
                variant: t,
                size: n,
                className: e
            })),
            ref: i,
            ...o
        })
    });
He.displayName = "Button";
var QC = h.createContext(void 0);

function GC(e) {
    const t = h.useContext(QC);
    return e || t || "ltr"
}

function YC(e) {
    const t = h.useRef({
        value: e,
        previous: e
    });
    return h.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var jr = "NavigationMenu",
    [ad, Pv, XC] = Dc(jr),
    [Iu, qC, ZC] = Dc(jr),
    [ud, US] = Li(jr, [XC, ZC]),
    [JC, xt] = ud(jr),
    [eS, tS] = ud(jr),
    Rv = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            value: r,
            onValueChange: o,
            defaultValue: i,
            delayDuration: s = 200,
            skipDelayDuration: l = 300,
            orientation: u = "horizontal",
            dir: c,
            ...d
        } = e, [p, m] = h.useState(null), f = Be(t, P => m(P)), w = GC(c), x = h.useRef(0), N = h.useRef(0), v = h.useRef(0), [g, y] = h.useState(!0), [E, C] = Fc({
            prop: r,
            onChange: P => {
                const M = P !== "",
                    F = l > 0;
                M ? (window.clearTimeout(v.current), F && y(!1)) : (window.clearTimeout(v.current), v.current = window.setTimeout(() => y(!0), l)), o == null || o(P)
            },
            defaultProp: i ? ? "",
            caller: jr
        }), S = h.useCallback(() => {
            window.clearTimeout(N.current), N.current = window.setTimeout(() => C(""), 150)
        }, [C]), b = h.useCallback(P => {
            window.clearTimeout(N.current), C(P)
        }, [C]), R = h.useCallback(P => {
            E === P ? window.clearTimeout(N.current) : x.current = window.setTimeout(() => {
                window.clearTimeout(N.current), C(P)
            }, s)
        }, [E, C, s]);
        return h.useEffect(() => () => {
            window.clearTimeout(x.current), window.clearTimeout(N.current), window.clearTimeout(v.current)
        }, []), a.jsx(Tv, {
            scope: n,
            isRootMenu: !0,
            value: E,
            dir: w,
            orientation: u,
            rootNavigationMenu: p,
            onTriggerEnter: P => {
                window.clearTimeout(x.current), g ? R(P) : b(P)
            },
            onTriggerLeave: () => {
                window.clearTimeout(x.current), S()
            },
            onContentEnter: () => window.clearTimeout(N.current),
            onContentLeave: S,
            onItemSelect: P => {
                C(M => M === P ? "" : P)
            },
            onItemDismiss: () => C(""),
            children: a.jsx(ce.nav, {
                "aria-label": "Main",
                "data-orientation": u,
                dir: w,
                ...d,
                ref: f
            })
        })
    });
Rv.displayName = jr;
var Du = "NavigationMenuSub",
    nS = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            value: r,
            onValueChange: o,
            defaultValue: i,
            orientation: s = "horizontal",
            ...l
        } = e, u = xt(Du, n), [c, d] = Fc({
            prop: r,
            onChange: o,
            defaultProp: i ? ? "",
            caller: Du
        });
        return a.jsx(Tv, {
            scope: n,
            isRootMenu: !1,
            value: c,
            dir: u.dir,
            orientation: s,
            rootNavigationMenu: u.rootNavigationMenu,
            onTriggerEnter: p => d(p),
            onItemSelect: p => d(p),
            onItemDismiss: () => d(""),
            children: a.jsx(ce.div, {
                "data-orientation": s,
                ...l,
                ref: t
            })
        })
    });
nS.displayName = Du;
var Tv = e => {
        const {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: r,
            dir: o,
            orientation: i,
            children: s,
            value: l,
            onItemSelect: u,
            onItemDismiss: c,
            onTriggerEnter: d,
            onTriggerLeave: p,
            onContentEnter: m,
            onContentLeave: f
        } = e, [w, x] = h.useState(null), [N, v] = h.useState(new Map), [g, y] = h.useState(null);
        return a.jsx(JC, {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: r,
            value: l,
            previousValue: YC(l),
            baseId: Pg(),
            dir: o,
            orientation: i,
            viewport: w,
            onViewportChange: x,
            indicatorTrack: g,
            onIndicatorTrackChange: y,
            onTriggerEnter: We(d),
            onTriggerLeave: We(p),
            onContentEnter: We(m),
            onContentLeave: We(f),
            onItemSelect: We(u),
            onItemDismiss: We(c),
            onViewportContentChange: h.useCallback((E, C) => {
                v(S => (S.set(E, C), new Map(S)))
            }, []),
            onViewportContentRemove: h.useCallback(E => {
                v(C => C.has(E) ? (C.delete(E), new Map(C)) : C)
            }, []),
            children: a.jsx(ad.Provider, {
                scope: t,
                children: a.jsx(eS, {
                    scope: t,
                    items: N,
                    children: s
                })
            })
        })
    },
    Mv = "NavigationMenuList",
    _v = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            ...r
        } = e, o = xt(Mv, n), i = a.jsx(ce.ul, {
            "data-orientation": o.orientation,
            ...r,
            ref: t
        });
        return a.jsx(ce.div, {
            style: {
                position: "relative"
            },
            ref: o.onIndicatorTrackChange,
            children: a.jsx(ad.Slot, {
                scope: n,
                children: o.isRootMenu ? a.jsx(Uv, {
                    asChild: !0,
                    children: i
                }) : i
            })
        })
    });
_v.displayName = Mv;
var Ov = "NavigationMenuItem",
    [rS, Lv] = ud(Ov),
    Av = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            value: r,
            ...o
        } = e, i = Pg(), s = r || i || "LEGACY_REACT_AUTO_VALUE", l = h.useRef(null), u = h.useRef(null), c = h.useRef(null), d = h.useRef(() => {}), p = h.useRef(!1), m = h.useCallback((w = "start") => {
            if (l.current) {
                d.current();
                const x = zu(l.current);
                x.length && fd(w === "start" ? x : x.reverse())
            }
        }, []), f = h.useCallback(() => {
            if (l.current) {
                const w = zu(l.current);
                w.length && (d.current = cS(w))
            }
        }, []);
        return a.jsx(rS, {
            scope: n,
            value: s,
            triggerRef: u,
            contentRef: l,
            focusProxyRef: c,
            wasEscapeCloseRef: p,
            onEntryKeyDown: m,
            onFocusProxyEnter: m,
            onRootContentClose: f,
            onContentFocusOutside: f,
            children: a.jsx(ce.li, { ...o,
                ref: t
            })
        })
    });
Av.displayName = Ov;
var Fu = "NavigationMenuTrigger",
    Iv = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            disabled: r,
            ...o
        } = e, i = xt(Fu, e.__scopeNavigationMenu), s = Lv(Fu, e.__scopeNavigationMenu), l = h.useRef(null), u = Be(l, s.triggerRef, t), c = Hv(i.baseId, s.value), d = Wv(i.baseId, s.value), p = h.useRef(!1), m = h.useRef(!1), f = s.value === i.value;
        return a.jsxs(a.Fragment, {
            children: [a.jsx(ad.ItemSlot, {
                scope: n,
                value: s.value,
                children: a.jsx(Vv, {
                    asChild: !0,
                    children: a.jsx(ce.button, {
                        id: c,
                        disabled: r,
                        "data-disabled": r ? "" : void 0,
                        "data-state": pd(f),
                        "aria-expanded": f,
                        "aria-controls": d,
                        ...o,
                        ref: u,
                        onPointerEnter: q(e.onPointerEnter, () => {
                            m.current = !1, s.wasEscapeCloseRef.current = !1
                        }),
                        onPointerMove: q(e.onPointerMove, pl(() => {
                            r || m.current || s.wasEscapeCloseRef.current || p.current || (i.onTriggerEnter(s.value), p.current = !0)
                        })),
                        onPointerLeave: q(e.onPointerLeave, pl(() => {
                            r || (i.onTriggerLeave(), p.current = !1)
                        })),
                        onClick: q(e.onClick, () => {
                            i.onItemSelect(s.value), m.current = f
                        }),
                        onKeyDown: q(e.onKeyDown, w => {
                            const N = {
                                horizontal: "ArrowDown",
                                vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
                            }[i.orientation];
                            f && w.key === N && (s.onEntryKeyDown(), w.preventDefault())
                        })
                    })
                })
            }), f && a.jsxs(a.Fragment, {
                children: [a.jsx(Vm, {
                    "aria-hidden": !0,
                    tabIndex: 0,
                    ref: s.focusProxyRef,
                    onFocus: w => {
                        const x = s.contentRef.current,
                            N = w.relatedTarget,
                            v = N === l.current,
                            g = x == null ? void 0 : x.contains(N);
                        (v || !g) && s.onFocusProxyEnter(v ? "start" : "end")
                    }
                }), i.viewport && a.jsx("span", {
                    "aria-owns": d
                })]
            })]
        })
    });
Iv.displayName = Fu;
var oS = "NavigationMenuLink",
    fp = "navigationMenu.linkSelect",
    Dv = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            active: r,
            onSelect: o,
            ...i
        } = e;
        return a.jsx(Vv, {
            asChild: !0,
            children: a.jsx(ce.a, {
                "data-active": r ? "" : void 0,
                "aria-current": r ? "page" : void 0,
                ...i,
                ref: t,
                onClick: q(e.onClick, s => {
                    const l = s.target,
                        u = new CustomEvent(fp, {
                            bubbles: !0,
                            cancelable: !0
                        });
                    if (l.addEventListener(fp, c => o == null ? void 0 : o(c), {
                            once: !0
                        }), sl(l, u), !u.defaultPrevented && !s.metaKey) {
                        const c = new CustomEvent(Ls, {
                            bubbles: !0,
                            cancelable: !0
                        });
                        sl(l, c)
                    }
                }, {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
Dv.displayName = oS;
var cd = "NavigationMenuIndicator",
    Fv = h.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...r
        } = e, o = xt(cd, e.__scopeNavigationMenu), i = !!o.value;
        return o.indicatorTrack ? Ac.createPortal(a.jsx(kr, {
            present: n || i,
            children: a.jsx(iS, { ...r,
                ref: t
            })
        }), o.indicatorTrack) : null
    });
Fv.displayName = cd;
var iS = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            ...r
        } = e, o = xt(cd, n), i = Pv(n), [s, l] = h.useState(null), [u, c] = h.useState(null), d = o.orientation === "horizontal", p = !!o.value;
        h.useEffect(() => {
            var x;
            const w = (x = i().find(N => N.value === o.value)) == null ? void 0 : x.ref.current;
            w && l(w)
        }, [i, o.value]);
        const m = () => {
            s && c({
                size: d ? s.offsetWidth : s.offsetHeight,
                offset: d ? s.offsetLeft : s.offsetTop
            })
        };
        return $u(s, m), $u(o.indicatorTrack, m), u ? a.jsx(ce.div, {
            "aria-hidden": !0,
            "data-state": p ? "visible" : "hidden",
            "data-orientation": o.orientation,
            ...r,
            ref: t,
            style: {
                position: "absolute",
                ...d ? {
                    left: 0,
                    width: u.size + "px",
                    transform: `translateX(${u.offset}px)`
                } : {
                    top: 0,
                    height: u.size + "px",
                    transform: `translateY(${u.offset}px)`
                },
                ...r.style
            }
        }) : null
    }),
    No = "NavigationMenuContent",
    zv = h.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...r
        } = e, o = xt(No, e.__scopeNavigationMenu), i = Lv(No, e.__scopeNavigationMenu), s = Be(i.contentRef, t), l = i.value === o.value, u = {
            value: i.value,
            triggerRef: i.triggerRef,
            focusProxyRef: i.focusProxyRef,
            wasEscapeCloseRef: i.wasEscapeCloseRef,
            onContentFocusOutside: i.onContentFocusOutside,
            onRootContentClose: i.onRootContentClose,
            ...r
        };
        return o.viewport ? a.jsx(sS, {
            forceMount: n,
            ...u,
            ref: s
        }) : a.jsx(kr, {
            present: n || l,
            children: a.jsx($v, {
                "data-state": pd(l),
                ...u,
                ref: s,
                onPointerEnter: q(e.onPointerEnter, o.onContentEnter),
                onPointerLeave: q(e.onPointerLeave, pl(o.onContentLeave)),
                style: {
                    pointerEvents: !l && o.isRootMenu ? "none" : void 0,
                    ...u.style
                }
            })
        })
    });
zv.displayName = No;
var sS = h.forwardRef((e, t) => {
        const n = xt(No, e.__scopeNavigationMenu),
            {
                onViewportContentChange: r,
                onViewportContentRemove: o
            } = n;
        return yt(() => {
            r(e.value, {
                ref: t,
                ...e
            })
        }, [e, t, r]), yt(() => () => o(e.value), [e.value, o]), null
    }),
    Ls = "navigationMenu.rootContentDismiss",
    $v = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            value: r,
            triggerRef: o,
            focusProxyRef: i,
            wasEscapeCloseRef: s,
            onRootContentClose: l,
            onContentFocusOutside: u,
            ...c
        } = e, d = xt(No, n), p = h.useRef(null), m = Be(p, t), f = Hv(d.baseId, r), w = Wv(d.baseId, r), x = Pv(n), N = h.useRef(null), {
            onItemDismiss: v
        } = d;
        h.useEffect(() => {
            const y = p.current;
            if (d.isRootMenu && y) {
                const E = () => {
                    var C;
                    v(), l(), y.contains(document.activeElement) && ((C = o.current) == null || C.focus())
                };
                return y.addEventListener(Ls, E), () => y.removeEventListener(Ls, E)
            }
        }, [d.isRootMenu, e.value, o, v, l]);
        const g = h.useMemo(() => {
            const E = x().map(M => M.value);
            d.dir === "rtl" && E.reverse();
            const C = E.indexOf(d.value),
                S = E.indexOf(d.previousValue),
                b = r === d.value,
                R = S === E.indexOf(r);
            if (!b && !R) return N.current;
            const P = (() => {
                if (C !== S) {
                    if (b && S !== -1) return C > S ? "from-end" : "from-start";
                    if (R && C !== -1) return C > S ? "to-start" : "to-end"
                }
                return null
            })();
            return N.current = P, P
        }, [d.previousValue, d.value, d.dir, x, r]);
        return a.jsx(Uv, {
            asChild: !0,
            children: a.jsx(Tl, {
                id: w,
                "aria-labelledby": f,
                "data-motion": g,
                "data-orientation": d.orientation,
                ...c,
                ref: m,
                disableOutsidePointerEvents: !1,
                onDismiss: () => {
                    var E;
                    const y = new Event(Ls, {
                        bubbles: !0,
                        cancelable: !0
                    });
                    (E = p.current) == null || E.dispatchEvent(y)
                },
                onFocusOutside: q(e.onFocusOutside, y => {
                    var C;
                    u();
                    const E = y.target;
                    (C = d.rootNavigationMenu) != null && C.contains(E) && y.preventDefault()
                }),
                onPointerDownOutside: q(e.onPointerDownOutside, y => {
                    var b;
                    const E = y.target,
                        C = x().some(R => {
                            var P;
                            return (P = R.ref.current) == null ? void 0 : P.contains(E)
                        }),
                        S = d.isRootMenu && ((b = d.viewport) == null ? void 0 : b.contains(E));
                    (C || S || !d.isRootMenu) && y.preventDefault()
                }),
                onKeyDown: q(e.onKeyDown, y => {
                    var S;
                    const E = y.altKey || y.ctrlKey || y.metaKey;
                    if (y.key === "Tab" && !E) {
                        const b = zu(y.currentTarget),
                            R = document.activeElement,
                            P = b.findIndex(I => I === R),
                            F = y.shiftKey ? b.slice(0, P).reverse() : b.slice(P + 1, b.length);
                        fd(F) ? y.preventDefault() : (S = i.current) == null || S.focus()
                    }
                }),
                onEscapeKeyDown: q(e.onEscapeKeyDown, y => {
                    s.current = !0
                })
            })
        })
    }),
    dd = "NavigationMenuViewport",
    Bv = h.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...r
        } = e, i = !!xt(dd, e.__scopeNavigationMenu).value;
        return a.jsx(kr, {
            present: n || i,
            children: a.jsx(lS, { ...r,
                ref: t
            })
        })
    });
Bv.displayName = dd;
var lS = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            children: r,
            ...o
        } = e, i = xt(dd, n), s = Be(t, i.onViewportChange), l = tS(No, e.__scopeNavigationMenu), [u, c] = h.useState(null), [d, p] = h.useState(null), m = u ? (u == null ? void 0 : u.width) + "px" : void 0, f = u ? (u == null ? void 0 : u.height) + "px" : void 0, w = !!i.value, x = w ? i.value : i.previousValue;
        return $u(d, () => {
            d && c({
                width: d.offsetWidth,
                height: d.offsetHeight
            })
        }), a.jsx(ce.div, {
            "data-state": pd(w),
            "data-orientation": i.orientation,
            ...o,
            ref: s,
            style: {
                pointerEvents: !w && i.isRootMenu ? "none" : void 0,
                "--radix-navigation-menu-viewport-width": m,
                "--radix-navigation-menu-viewport-height": f,
                ...o.style
            },
            onPointerEnter: q(e.onPointerEnter, i.onContentEnter),
            onPointerLeave: q(e.onPointerLeave, pl(i.onContentLeave)),
            children: Array.from(l.items).map(([v, {
                ref: g,
                forceMount: y,
                ...E
            }]) => {
                const C = x === v;
                return a.jsx(kr, {
                    present: y || C,
                    children: a.jsx($v, { ...E,
                        ref: Ic(g, S => {
                            C && S && p(S)
                        })
                    })
                }, v)
            })
        })
    }),
    aS = "FocusGroup",
    Uv = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            ...r
        } = e, o = xt(aS, n);
        return a.jsx(Iu.Provider, {
            scope: n,
            children: a.jsx(Iu.Slot, {
                scope: n,
                children: a.jsx(ce.div, {
                    dir: o.dir,
                    ...r,
                    ref: t
                })
            })
        })
    }),
    pp = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
    uS = "FocusGroupItem",
    Vv = h.forwardRef((e, t) => {
        const {
            __scopeNavigationMenu: n,
            ...r
        } = e, o = qC(n), i = xt(uS, n);
        return a.jsx(Iu.ItemSlot, {
            scope: n,
            children: a.jsx(ce.button, { ...r,
                ref: t,
                onKeyDown: q(e.onKeyDown, s => {
                    if (["Home", "End", ...pp].includes(s.key)) {
                        let u = o().map(p => p.ref.current);
                        if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && u.reverse(), pp.includes(s.key)) {
                            const p = u.indexOf(s.currentTarget);
                            u = u.slice(p + 1)
                        }
                        setTimeout(() => fd(u)), s.preventDefault()
                    }
                })
            })
        })
    });

function zu(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function fd(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}

function cS(e) {
    return e.forEach(t => {
        t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1")
    }), () => {
        e.forEach(t => {
            const n = t.dataset.tabindex;
            t.setAttribute("tabindex", n)
        })
    }
}

function $u(e, t) {
    const n = We(t);
    yt(() => {
        let r = 0;
        if (e) {
            const o = new ResizeObserver(() => {
                cancelAnimationFrame(r), r = window.requestAnimationFrame(n)
            });
            return o.observe(e), () => {
                window.cancelAnimationFrame(r), o.unobserve(e)
            }
        }
    }, [e, n])
}

function pd(e) {
    return e ? "open" : "closed"
}

function Hv(e, t) {
    return `${e}-trigger-${t}`
}

function Wv(e, t) {
    return `${e}-content-${t}`
}

function pl(e) {
    return t => t.pointerType === "mouse" ? e(t) : void 0
}
var Kv = Rv,
    Qv = _v,
    dS = Av,
    Gv = Iv,
    fS = Dv,
    Yv = Fv,
    Xv = zv,
    qv = Bv;
const Zv = h.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => a.jsxs(Kv, {
    ref: r,
    className: we("relative z-10 flex max-w-max flex-1 items-center justify-center", e),
    ...n,
    children: [t, a.jsx(ey, {})]
}));
Zv.displayName = Kv.displayName;
const Jv = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx(Qv, {
    ref: n,
    className: we("group flex flex-1 list-none items-center justify-center space-x-1", e),
    ...t
}));
Jv.displayName = Qv.displayName;
const ms = dS,
    pS = Ol("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),
    hS = h.forwardRef(({
        className: e,
        children: t,
        ...n
    }, r) => a.jsxs(Gv, {
        ref: r,
        className: we(pS(), "group", e),
        ...n,
        children: [t, " ", a.jsx(Bw, {
            className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
        })]
    }));
hS.displayName = Gv.displayName;
const mS = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx(Xv, {
    ref: n,
    className: we("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", e),
    ...t
}));
mS.displayName = Xv.displayName;
const gs = fS,
    ey = h.forwardRef(({
        className: e,
        ...t
    }, n) => a.jsx("div", {
        className: we("absolute left-0 top-full flex justify-center"),
        children: a.jsx(qv, {
            className: we("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", e),
            ref: n,
            ...t
        })
    }));
ey.displayName = qv.displayName;
const gS = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx(Yv, {
    ref: n,
    className: we("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", e),
    ...t,
    children: a.jsx("div", {
        className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
    })
}));
gS.displayName = Yv.displayName;
const vS = "/assets/digital-skills-icon-BpN1ykN-.png",
    $i = () => a.jsx("header", {
        className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: a.jsxs("div", {
            className: "container flex h-16 items-center justify-between",
            children: [a.jsxs(Mt, {
                to: "/",
                className: "flex items-center gap-3",
                children: [a.jsx("img", {
                    src: vS,
                    alt: "المهارات الرقمية",
                    className: "h-10 w-10"
                }), a.jsxs("div", {
                    className: "hidden sm:block",
                    children: [a.jsx("h1", {
                        className: "text-xl font-bold text-foreground",
                        children: "ملف الإنجاز الإلكتروني"
                    }), a.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "أ. شوق بن شلهوب"
                    })]
                })]
            }), a.jsx(Zv, {
                className: "hidden md:flex",
                children: a.jsxs(Jv, {
                    className: "gap-2",
                    children: [a.jsx(ms, {
                        children: a.jsx(gs, {
                            asChild: !0,
                            children: a.jsx(Mt, {
                                to: "/cv",
                                children: a.jsxs(He, {
                                    variant: "ghost",
                                    className: "gap-2",
                                    children: [a.jsx(Hc, {
                                        className: "h-4 w-4"
                                    }), "السيرة الذاتية"]
                                })
                            })
                        })
                    }), a.jsx(ms, {
                        children: a.jsx(gs, {
                            asChild: !0,
                            children: a.jsx(Mt, {
                                to: "/professional-development",
                                children: a.jsxs(He, {
                                    variant: "ghost",
                                    className: "gap-2",
                                    children: [a.jsx(Er, {
                                        className: "h-4 w-4"
                                    }), "التطوير المهني"]
                                })
                            })
                        })
                    }), a.jsx(ms, {
                        children: a.jsx(gs, {
                            asChild: !0,
                            children: a.jsx(Mt, {
                                to: "/subject-file",
                                children: a.jsxs(He, {
                                    variant: "ghost",
                                    className: "gap-2",
                                    children: [a.jsx(Jr, {
                                        className: "h-4 w-4"
                                    }), "ملف المادة"]
                                })
                            })
                        })
                    }), a.jsx(ms, {
                        children: a.jsx(gs, {
                            asChild: !0,
                            children: a.jsx(Mt, {
                                to: "/activities-projects",
                                children: a.jsxs(He, {
                                    variant: "ghost",
                                    className: "gap-2",
                                    children: [a.jsx(ri, {
                                        className: "h-4 w-4"
                                    }), "الأنشطة والمشاريع"]
                                })
                            })
                        })
                    })]
                })
            }), a.jsx(He, {
                variant: "outline",
                size: "icon",
                className: "md:hidden",
                children: a.jsx(Ww, {
                    className: "h-4 w-4"
                })
            })]
        })
    }),
    yS = Ol("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    });

function ee({
    className: e,
    variant: t,
    ...n
}) {
    return a.jsx("div", {
        className: we(yS({
            variant: t
        }), e),
        ...n
    })
}
const xS = "/assets/hero-digital-skills-Dchy7CzG.jpg",
    wS = () => a.jsxs("section", {
        className: "relative overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
            style: {
                backgroundImage: `url(${xS})`
            },
            children: a.jsx("div", {
                className: "absolute inset-0 bg-black/50"
            })
        }), a.jsx("div", {
            className: "relative container py-20 md:py-32",
            children: a.jsxs("div", {
                className: "max-w-4xl mx-auto text-center text-white",
                children: [a.jsx(ee, {
                    className: "mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30",
                    children: "ملف الإنجاز الإلكتروني"
                }), a.jsxs("h1", {
                    className: "text-4xl md:text-6xl font-bold mb-6 hero-text-shadow",
                    children: ["أ. شوق بن شلهوب", a.jsx("br", {}), a.jsx("span", {
                        className: "text-digital-accent",
                        children: "معلمة المهارات الرقمية"
                    })]
                }), a.jsx("p", {
                    className: "text-xl md:text-2xl mb-8 text-white/90 leading-relaxed",
                    children: "مهندسة شبكات حاسب - تخصص في تطوير المهارات الرقمية والتقنية الرقمية"
                }), a.jsxs("div", {
                    className: "flex flex-wrap justify-center gap-4 mb-8",
                    children: [a.jsxs("div", {
                        className: "flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full",
                        children: [a.jsx(Uc, {
                            className: "h-5 w-5"
                        }), a.jsx("span", {
                            children: "البرمجة"
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full",
                        children: [a.jsx(fg, {
                            className: "h-5 w-5"
                        }), a.jsx("span", {
                            children: "قواعد البيانات"
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full",
                        children: [a.jsx(pg, {
                            className: "h-5 w-5"
                        }), a.jsx("span", {
                            children: "تطوير الويب"
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full",
                        children: [a.jsx(gg, {
                            className: "h-5 w-5"
                        }), a.jsx("span", {
                            children: "التقنيات الرقمية"
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [a.jsx(He, {
                        size: "lg",
                        className: "bg-white text-black hover:bg-white/90 digital-glow",
                        children: "استكشف الملف"
                    }), a.jsx(He, {
                        size: "lg",
                        variant: "outline",
                        className: "border-white text-white hover:bg-white/10",
                        children: "تحميل السيرة الذاتية"
                    })]
                })]
            })
        })]
    }),
    oe = h.forwardRef(({
        className: e,
        ...t
    }, n) => a.jsx("div", {
        ref: n,
        className: we("rounded-lg border bg-card text-card-foreground shadow-sm", e),
        ...t
    }));
oe.displayName = "Card";
const ie = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx("div", {
    ref: n,
    className: we("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
ie.displayName = "CardHeader";
const se = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx("h3", {
    ref: n,
    className: we("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
se.displayName = "CardTitle";
const Me = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx("p", {
    ref: n,
    className: we("text-sm text-muted-foreground", e),
    ...t
}));
Me.displayName = "CardDescription";
const le = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx("div", {
    ref: n,
    className: we("p-6 pt-0", e),
    ...t
}));
le.displayName = "CardContent";
const NS = h.forwardRef(({
    className: e,
    ...t
}, n) => a.jsx("div", {
    ref: n,
    className: we("flex items-center p-6 pt-0", e),
    ...t
}));
NS.displayName = "CardFooter";
const ES = [{
        title: "السيرة الذاتية",
        description: "المعلومات الشخصية والمؤهلات التعليمية والخبرات المهنية",
        icon: Hc,
        color: "bg-gradient-to-br from-blue-500 to-cyan-600",
        content: ["المعلومات الشخصية", "المؤهلات التعليمية", "الخبرات المهنية", "المهارات والقدرات"]
    }, {
        title: "التطوير المهني",
        description: "الدورات التدريبية والشهادات والمشاركات في المؤتمرات",
        icon: Er,
        color: "bg-gradient-to-br from-green-500 to-emerald-600",
        content: ["الدورات التدريبية", "الشهادات المهنية", "المؤتمرات والندوات", "ورش العمل"]
    }, {
        title: "ملف المادة",
        description: "محتوى مقررات المهارات الرقمية والتقنية الرقمية",
        icon: Jr,
        color: "bg-gradient-to-br from-purple-500 to-violet-600",
        content: ["توصيف المقرر", "خطة التدريس", "المحاضرات والدروس", "الأنشطة التفاعلية"]
    }, {
        title: "الأنشطة والمشاريع",
        description: "المشاريع التقنية والأنشطة الطلابية والابتكارات",
        icon: ri,
        color: "bg-gradient-to-br from-orange-500 to-red-600",
        content: ["المشاريع التقنية", "الأنشطة الطلابية", "التطبيقات العملية", "الابتكارات والحلول"]
    }],
    CS = [{
        title: "البرمجة",
        icon: Uc,
        skills: ["Python", "JavaScript", "HTML/CSS", "React"]
    }, {
        title: "قواعد البيانات",
        icon: fg,
        skills: ["MySQL", "MongoDB", "SQL Server", "Firebase"]
    }, {
        title: "تطوير الويب",
        icon: pg,
        skills: ["React", "Node.js", "API Design", "Responsive Design"]
    }, {
        title: "التقنيات الرقمية",
        icon: gg,
        skills: ["Cloud Computing", "AI/ML", "IoT", "Cybersecurity"]
    }],
    SS = () => a.jsx("section", {
        className: "py-16 bg-gradient-to-b from-background to-muted/20",
        children: a.jsxs("div", {
            className: "container",
            children: [a.jsxs("div", {
                className: "text-center mb-12",
                children: [a.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "محتويات الملف"
                }), a.jsx("p", {
                    className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                    children: "بسم الله الرحمن الرحيم، الحمد لله الذي بنعمته تتم الصالحات. يسرني أن أقدم لكم ملف إنجازي الذي يوثق رحلتي التعليمية والمهنية في مجال المهارات الرقمية."
                })]
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16",
                children: ES.map(e => {
                    const t = e.icon;
                    return a.jsxs(oe, {
                        className: "card-hover group",
                        children: [a.jsx(ie, {
                            children: a.jsxs("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [a.jsx("div", {
                                    className: `p-3 rounded-lg ${e.color} text-white`,
                                    children: a.jsx(t, {
                                        className: "h-6 w-6"
                                    })
                                }), a.jsxs("div", {
                                    children: [a.jsx(se, {
                                        className: "text-xl",
                                        children: e.title
                                    }), a.jsx(Me, {
                                        className: "mt-1",
                                        children: e.description
                                    })]
                                })]
                            })
                        }), a.jsx(le, {
                            children: a.jsx("div", {
                                className: "grid grid-cols-1 gap-2",
                                children: e.content.map((n, r) => a.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                                    children: [a.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-primary rounded-full"
                                    }), n]
                                }, r))
                            })
                        })]
                    }, e.title)
                })
            }), a.jsxs("div", {
                className: "text-center mb-8",
                children: [a.jsx("h3", {
                    className: "text-2xl md:text-3xl font-bold mb-4",
                    children: "المهارات التقنية"
                }), a.jsx("p", {
                    className: "text-muted-foreground",
                    children: "المهارات والتقنيات المتخصصة في مجال التعليم الرقمي والتكنولوجيا"
                })]
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: CS.map(e => {
                    const t = e.icon;
                    return a.jsxs(oe, {
                        className: "card-hover text-center",
                        children: [a.jsxs(ie, {
                            className: "pb-3",
                            children: [a.jsx("div", {
                                className: "mx-auto mb-3 p-3 bg-primary/10 rounded-lg w-fit",
                                children: a.jsx(t, {
                                    className: "h-8 w-8 text-primary"
                                })
                            }), a.jsx(se, {
                                className: "text-lg",
                                children: e.title
                            })]
                        }), a.jsx(le, {
                            children: a.jsx("div", {
                                className: "flex flex-wrap gap-2 justify-center",
                                children: e.skills.map((n, r) => a.jsx(ee, {
                                    variant: "secondary",
                                    className: "text-xs",
                                    children: n
                                }, r))
                            })
                        })]
                    }, e.title)
                })
            })]
        })
    });
var bS = "Separator",
    hp = "horizontal",
    kS = ["horizontal", "vertical"],
    ty = h.forwardRef((e, t) => {
        const {
            decorative: n,
            orientation: r = hp,
            ...o
        } = e, i = jS(r) ? r : hp, l = n ? {
            role: "none"
        } : {
            "aria-orientation": i === "vertical" ? i : void 0,
            role: "separator"
        };
        return a.jsx(ce.div, {
            "data-orientation": i,
            ...l,
            ...o,
            ref: t
        })
    });
ty.displayName = bS;

function jS(e) {
    return kS.includes(e)
}
var ny = ty;
const ry = h.forwardRef(({
    className: e,
    orientation: t = "horizontal",
    decorative: n = !0,
    ...r
}, o) => a.jsx(ny, {
    ref: o,
    decorative: n,
    orientation: t,
    className: we("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
    ...r
}));
ry.displayName = ny.displayName;
const Bi = () => a.jsx("footer", {
        className: "bg-muted/50 border-t",
        children: a.jsxs("div", {
            className: "container py-12",
            children: [a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [a.jsxs("div", {
                    children: [a.jsx("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "معلومات التواصل"
                    }), a.jsxs("div", {
                        className: "space-y-3",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-3 text-muted-foreground",
                            children: [a.jsx(hg, {
                                className: "h-4 w-4"
                            }), a.jsx("span", {
                                children: "teacher@education.gov.sa"
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center gap-3 text-muted-foreground",
                            children: [a.jsx(vg, {
                                className: "h-4 w-4"
                            }), a.jsx("span", {
                                children: "+966 50 123 4567"
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center gap-3 text-muted-foreground",
                            children: [a.jsx(mg, {
                                className: "h-4 w-4"
                            }), a.jsx("span", {
                                children: "المملكة العربية السعودية"
                            })]
                        })]
                    })]
                }), a.jsxs("div", {
                    children: [a.jsx("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "روابط سريعة"
                    }), a.jsxs("div", {
                        className: "space-y-2",
                        children: [a.jsx(Mt, {
                            to: "/cv",
                            children: a.jsx(He, {
                                variant: "link",
                                className: "p-0 h-auto text-muted-foreground hover:text-foreground",
                                children: "السيرة الذاتية"
                            })
                        }), a.jsx("br", {}), a.jsx(Mt, {
                            to: "/professional-development",
                            children: a.jsx(He, {
                                variant: "link",
                                className: "p-0 h-auto text-muted-foreground hover:text-foreground",
                                children: "التطوير المهني"
                            })
                        }), a.jsx("br", {}), a.jsx(Mt, {
                            to: "/subject-file",
                            children: a.jsx(He, {
                                variant: "link",
                                className: "p-0 h-auto text-muted-foreground hover:text-foreground",
                                children: "ملف المادة"
                            })
                        }), a.jsx("br", {}), a.jsx(Mt, {
                            to: "/activities-projects",
                            children: a.jsx(He, {
                                variant: "link",
                                className: "p-0 h-auto text-muted-foreground hover:text-foreground",
                                children: "الأنشطة والمشاريع"
                            })
                        })]
                    })]
                }), a.jsxs("div", {
                    children: [a.jsx("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "تابعني على"
                    }), a.jsxs("div", {
                        className: "flex gap-3",
                        children: [a.jsx(He, {
                            variant: "outline",
                            size: "icon",
                            children: a.jsx(Uw, {
                                className: "h-4 w-4"
                            })
                        }), a.jsx(He, {
                            variant: "outline",
                            size: "icon",
                            children: a.jsx(Hw, {
                                className: "h-4 w-4"
                            })
                        }), a.jsx(He, {
                            variant: "outline",
                            size: "icon",
                            children: a.jsx(Gw, {
                                className: "h-4 w-4"
                            })
                        })]
                    })]
                })]
            }), a.jsx(ry, {
                className: "my-8"
            }), a.jsxs("div", {
                className: "flex flex-col md:flex-row justify-between items-center gap-4",
                children: [a.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "© 2024 ملف الإنجاز الإلكتروني - المهارات الرقمية والتقنية الرقمية"
                }), a.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "تم تطويره بتقنيات حديثة لعرض الإنجازات التعليمية والمهنية"
                })]
            })]
        })
    }),
    PS = () => a.jsxs("div", {
        className: "min-h-screen",
        children: [a.jsx($i, {}), a.jsxs("main", {
            children: [a.jsx(wS, {}), a.jsx(SS, {})]
        }), a.jsx(Bi, {})]
    }),
    RS = () => a.jsxs("div", {
        className: "min-h-screen",
        children: [a.jsx($i, {}), a.jsx("main", {
            className: "py-16 bg-gradient-to-b from-background to-muted/20",
            children: a.jsxs("div", {
                className: "container",
                children: [a.jsxs("div", {
                    className: "text-center mb-12",
                    children: [a.jsx("h1", {
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: "السيرة الذاتية"
                    }), a.jsx("p", {
                        className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                        children: "بسم الله الرحمن الرحيم، مرحباً بكم في ملف إنجازي الذي يوثق رحلتي التعليمية والمهنية"
                    })]
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12",
                    children: [a.jsxs(oe, {
                        className: "lg:col-span-2",
                        children: [a.jsx(ie, {
                            children: a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx("div", {
                                    className: "p-3 bg-primary/10 rounded-lg",
                                    children: a.jsx(Hc, {
                                        className: "h-6 w-6 text-primary"
                                    })
                                }), a.jsx(se, {
                                    className: "text-2xl",
                                    children: "المعلومات الشخصية"
                                })]
                            })
                        }), a.jsxs(le, {
                            className: "space-y-4",
                            children: [a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-semibold text-lg mb-2",
                                    children: "الاسم الكامل"
                                }), a.jsx("p", {
                                    className: "text-muted-foreground",
                                    children: "أ. شوق بن شلهوب"
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-semibold text-lg mb-2",
                                    children: "التخصص"
                                }), a.jsx("p", {
                                    className: "text-muted-foreground",
                                    children: "هندسة / شبكات الحاسب"
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-semibold text-lg mb-2",
                                    children: "الوظيفة الحالية"
                                }), a.jsx("p", {
                                    className: "text-muted-foreground",
                                    children: "معلمة مهارات رقمية – مدارس الامتياز (2025 – حالياً)"
                                })]
                            })]
                        })]
                    }), a.jsxs(oe, {
                        children: [a.jsx(ie, {
                            children: a.jsx(se, {
                                className: "text-xl",
                                children: "معلومات التواصل"
                            })
                        }), a.jsxs(le, {
                            className: "space-y-3",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx(hg, {
                                    className: "h-4 w-4 text-muted-foreground"
                                }), a.jsx("span", {
                                    className: "text-sm",
                                    children: "teacher@education.gov.sa"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx(vg, {
                                    className: "h-4 w-4 text-muted-foreground"
                                }), a.jsx("span", {
                                    className: "text-sm",
                                    children: "+966 50 123 4567"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx(mg, {
                                    className: "h-4 w-4 text-muted-foreground"
                                }), a.jsx("span", {
                                    className: "text-sm",
                                    children: "المملكة العربية السعودية"
                                })]
                            })]
                        })]
                    })]
                }), a.jsxs(oe, {
                    className: "mb-8",
                    children: [a.jsx(ie, {
                        children: a.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [a.jsx("div", {
                                className: "p-3 bg-green-500/10 rounded-lg",
                                children: a.jsx(Vw, {
                                    className: "h-6 w-6 text-green-600"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx(se, {
                                    className: "text-2xl",
                                    children: "المؤهل العلمي"
                                }), a.jsx(Me, {
                                    children: "التحصيل الأكاديمي والإنجازات التعليمية"
                                })]
                            })]
                        })
                    }), a.jsx(le, {
                        children: a.jsxs("div", {
                            className: "bg-muted/50 p-6 rounded-lg",
                            children: [a.jsx("h3", {
                                className: "font-semibold text-lg mb-2",
                                children: "بكالوريوس شبكات الحاسب"
                            }), a.jsx("p", {
                                className: "text-muted-foreground mb-3",
                                children: "جامعة الملك سعود"
                            }), a.jsx(ee, {
                                variant: "secondary",
                                className: "bg-green-100 text-green-700",
                                children: "المعدل: 4.15 من 5.00"
                            })]
                        })
                    })]
                }), a.jsxs(oe, {
                    className: "mb-8",
                    children: [a.jsx(ie, {
                        children: a.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [a.jsx("div", {
                                className: "p-3 bg-blue-500/10 rounded-lg",
                                children: a.jsx(Fw, {
                                    className: "h-6 w-6 text-blue-600"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx(se, {
                                    className: "text-2xl",
                                    children: "الخبرات العملية"
                                }), a.jsx(Me, {
                                    children: "المسيرة المهنية والوظائف السابقة"
                                })]
                            })]
                        })
                    }), a.jsxs(le, {
                        className: "space-y-6",
                        children: [a.jsxs("div", {
                            className: "border-r-4 border-primary pr-6",
                            children: [a.jsx("h3", {
                                className: "font-semibold text-lg",
                                children: "معلمة مهارات رقمية"
                            }), a.jsx("p", {
                                className: "text-muted-foreground",
                                children: "مدارس الامتياز"
                            }), a.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "2025 – حالياً"
                            })]
                        }), a.jsxs("div", {
                            className: "border-r-4 border-muted pr-6",
                            children: [a.jsx("h3", {
                                className: "font-semibold text-lg",
                                children: "متدربة تعاونية"
                            }), a.jsx("p", {
                                className: "text-muted-foreground",
                                children: "مجلس الشورى"
                            }), a.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "يناير 2024 – يوليو 2024"
                            })]
                        })]
                    })]
                }), a.jsxs(oe, {
                    children: [a.jsx(ie, {
                        children: a.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [a.jsx("div", {
                                className: "p-3 bg-purple-500/10 rounded-lg",
                                children: a.jsx(Vc, {
                                    className: "h-6 w-6 text-purple-600"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx(se, {
                                    className: "text-2xl",
                                    children: "الهوايات والاهتمامات"
                                }), a.jsx(Me, {
                                    children: "المجالات والأنشطة التي أهتم بها"
                                })]
                            })]
                        })
                    }), a.jsx(le, {
                        children: a.jsxs("div", {
                            className: "flex flex-wrap gap-3",
                            children: [a.jsx(ee, {
                                variant: "outline",
                                children: "تطوير المهارات التقنية"
                            }), a.jsx(ee, {
                                variant: "outline",
                                children: "التعليم"
                            }), a.jsx(ee, {
                                variant: "outline",
                                children: "العمل التطوعي"
                            }), a.jsx(ee, {
                                variant: "outline",
                                children: "تطوير البرمجيات"
                            }), a.jsx(ee, {
                                variant: "outline",
                                children: "الذكاء الاصطناعي"
                            })]
                        })
                    })]
                }), a.jsxs(oe, {
                    className: "mt-8",
                    children: [a.jsx(ie, {
                        children: a.jsx(se, {
                            className: "text-2xl",
                            children: "الملخص المهني"
                        })
                    }), a.jsx(le, {
                        children: a.jsx("p", {
                            className: "text-lg leading-relaxed text-muted-foreground",
                            children: "مهندسة شبكات حاسب، حاصلة على بكالوريوس من جامعة الملك سعود بمعدل (4.15). أعمل حالياً كمعلمة مهارات رقمية، وأسعى لتوظيف خبرتي التقنية في تطوير العملية التعليمية، وتحفيز الطالبات على التفكير الناقد والإبداع باستخدام التكنولوجيا. أؤمن أن التعليم رسالة لبناء جيل واعٍ قادر على مواجهة تحديات المستقبل، وأسعى أن أكون عنصراً فاعلاً في تحقيق رؤية المملكة 2030 في مجال التعليم."
                        })
                    })]
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-8",
                    children: [a.jsxs(oe, {
                        children: [a.jsx(ie, {
                            children: a.jsx(se, {
                                className: "text-xl",
                                children: "الرؤية"
                            })
                        }), a.jsx(le, {
                            children: a.jsx("p", {
                                className: "text-muted-foreground",
                                children: "معلمة تسعى لبناء جيل مبدع متعلم قادر على مواجهة تحديات المستقبل."
                            })
                        })]
                    }), a.jsxs(oe, {
                        children: [a.jsx(ie, {
                            children: a.jsx(se, {
                                className: "text-xl",
                                children: "الرسالة"
                            })
                        }), a.jsx(le, {
                            children: a.jsx("p", {
                                className: "text-muted-foreground",
                                children: "تقديم تعليم نوعي قائم على أسس تربوية حديثة، وتحفيز الطالبات على حب التعلم والإبداع."
                            })
                        })]
                    })]
                })]
            })
        }), a.jsx(Bi, {})]
    }),
    TS = () => a.jsxs("div", {
        className: "min-h-screen",
        children: [a.jsx($i, {}), a.jsx("main", {
            className: "py-16 bg-gradient-to-b from-background to-muted/20",
            children: a.jsxs("div", {
                className: "container",
                children: [a.jsxs("div", {
                    className: "text-center mb-12",
                    children: [a.jsx("h1", {
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: "التطوير المهني"
                    }), a.jsx("p", {
                        className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                        children: "رحلة التعلم المستمر والنمو المهني في مجال التعليم والتكنولوجيا"
                    })]
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
                    children: [a.jsxs(oe, {
                        className: "text-center card-hover",
                        children: [a.jsxs(ie, {
                            children: [a.jsx("div", {
                                className: "mx-auto mb-3 p-3 bg-blue-500/10 rounded-lg w-fit",
                                children: a.jsx(Jr, {
                                    className: "h-8 w-8 text-blue-600"
                                })
                            }), a.jsx(se, {
                                className: "text-lg",
                                children: "متدربة"
                            })]
                        }), a.jsx(le, {
                            children: a.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "المشاركة في الدورات التدريبية والتطوير المستمر"
                            })
                        })]
                    }), a.jsxs(oe, {
                        className: "text-center card-hover",
                        children: [a.jsxs(ie, {
                            children: [a.jsx("div", {
                                className: "mx-auto mb-3 p-3 bg-green-500/10 rounded-lg w-fit",
                                children: a.jsx(eo, {
                                    className: "h-8 w-8 text-green-600"
                                })
                            }), a.jsx(se, {
                                className: "text-lg",
                                children: "مدربة"
                            })]
                        }), a.jsx(le, {
                            children: a.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "تقديم ورش عمل ودورات تدريبية للزميلات"
                            })
                        })]
                    }), a.jsxs(oe, {
                        className: "text-center card-hover",
                        children: [a.jsxs(ie, {
                            children: [a.jsx("div", {
                                className: "mx-auto mb-3 p-3 bg-purple-500/10 rounded-lg w-fit",
                                children: a.jsx(bu, {
                                    className: "h-8 w-8 text-purple-600"
                                })
                            }), a.jsx(se, {
                                className: "text-lg",
                                children: "الإنتاج المعرفي"
                            })]
                        }), a.jsx(le, {
                            children: a.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "إعداد بحوث وأوراق عمل في التخصص"
                            })
                        })]
                    }), a.jsxs(oe, {
                        className: "text-center card-hover",
                        children: [a.jsxs(ie, {
                            children: [a.jsx("div", {
                                className: "mx-auto mb-3 p-3 bg-orange-500/10 rounded-lg w-fit",
                                children: a.jsx(eo, {
                                    className: "h-8 w-8 text-orange-600"
                                })
                            }), a.jsx(se, {
                                className: "text-lg",
                                children: "مجتمعات التعلم"
                            })]
                        }), a.jsx(le, {
                            children: a.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "تبادل الخبرات مع الزميلات والمعلمات"
                            })
                        })]
                    })]
                }), a.jsxs(oe, {
                    className: "mb-8",
                    children: [a.jsx(ie, {
                        children: a.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [a.jsx("div", {
                                className: "p-3 bg-blue-500/10 rounded-lg",
                                children: a.jsx(Er, {
                                    className: "h-6 w-6 text-blue-600"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx(se, {
                                    className: "text-2xl",
                                    children: "الدورات التدريبية"
                                }), a.jsx(Me, {
                                    children: "الدورات والبرامج التدريبية التي تم الحصول عليها"
                                })]
                            })]
                        })
                    }), a.jsx(le, {
                        children: a.jsxs("div", {
                            className: "text-center p-8",
                            children: [a.jsx("p", {
                                className: "text-muted-foreground text-lg",
                                children: "يمكنك إضافة الدورات التدريبية الخاصة بك هنا"
                            }), a.jsx("p", {
                                className: "text-sm text-muted-foreground mt-2",
                                children: "(اكتبي أهم الدورات التي حضرتيها)"
                            })]
                        })
                    })]
                }), a.jsxs(oe, {
                    className: "mb-8",
                    children: [a.jsx(ie, {
                        children: a.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [a.jsx("div", {
                                className: "p-3 bg-green-500/10 rounded-lg",
                                children: a.jsx(gr, {
                                    className: "h-6 w-6 text-green-600"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx(se, {
                                    className: "text-2xl",
                                    children: "الأهداف العامة للتعليم في المملكة"
                                }), a.jsx(Me, {
                                    children: "الأسس والمبادئ التي نسعى لتحقيقها"
                                })]
                            })]
                        })
                    }), a.jsx(le, {
                        children: a.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [a.jsxs("div", {
                                className: "space-y-4",
                                children: [a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                    }), a.jsx("p", {
                                        children: "ترسيخ العقيدة الإسلامية والقيم الحميدة"
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                    }), a.jsx("p", {
                                        children: "إعداد المواطن الصالح النافع لدينه ووطنه"
                                    })]
                                })]
                            }), a.jsxs("div", {
                                className: "space-y-4",
                                children: [a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                    }), a.jsx("p", {
                                        children: "تنمية مهارات التفكير والإبداع"
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                    }), a.jsx("p", {
                                        children: "مواكبة التطور العلمي والتقني"
                                    })]
                                })]
                            })]
                        })
                    })]
                }), a.jsxs(oe, {
                    className: "mb-8",
                    children: [a.jsx(ie, {
                        children: a.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [a.jsx("div", {
                                className: "p-3 bg-purple-500/10 rounded-lg",
                                children: a.jsx(Vc, {
                                    className: "h-6 w-6 text-purple-600"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx(se, {
                                    className: "text-2xl",
                                    children: "ميثاق أخلاقيات مهنة التعليم"
                                }), a.jsx(Me, {
                                    children: "المبادئ والقيم التي نلتزم بها كمعلمين"
                                })]
                            })]
                        })
                    }), a.jsx(le, {
                        children: a.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: [a.jsx(ee, {
                                variant: "outline",
                                className: "justify-center p-3 text-center",
                                children: "الإخلاص في العمل"
                            }), a.jsx(ee, {
                                variant: "outline",
                                className: "justify-center p-3 text-center",
                                children: "القدوة الحسنة"
                            }), a.jsx(ee, {
                                variant: "outline",
                                className: "justify-center p-3 text-center",
                                children: "احترام الطالبات"
                            }), a.jsx(ee, {
                                variant: "outline",
                                className: "justify-center p-3 text-center",
                                children: "الالتزام بالأنظمة"
                            }), a.jsx(ee, {
                                variant: "outline",
                                className: "justify-center p-3 text-center",
                                children: "التطوير المستمر"
                            }), a.jsx(ee, {
                                variant: "outline",
                                className: "justify-center p-3 text-center",
                                children: "تقدير الاحتياجات"
                            })]
                        })
                    })]
                }), a.jsxs(oe, {
                    children: [a.jsx(ie, {
                        children: a.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [a.jsx("div", {
                                className: "p-3 bg-orange-500/10 rounded-lg",
                                children: a.jsx(gr, {
                                    className: "h-6 w-6 text-orange-600"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx(se, {
                                    className: "text-2xl",
                                    children: "الأهداف الخاصة لتدريس المهارات الرقمية"
                                }), a.jsx(Me, {
                                    children: "أهدافنا المحددة في تعليم المهارات الرقمية"
                                })]
                            })]
                        })
                    }), a.jsx(le, {
                        children: a.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [a.jsxs("div", {
                                className: "space-y-4",
                                children: [a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                    }), a.jsx("p", {
                                        children: "تنمية مهارات الطالبات في مادة المهارات الرقمية"
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                    }), a.jsx("p", {
                                        children: "ربط المهارات الرقمية بواقع الحياة والتقنية الحديثة"
                                    })]
                                })]
                            }), a.jsxs("div", {
                                className: "space-y-4",
                                children: [a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                    }), a.jsx("p", {
                                        children: "تعزيز التفكير النقدي وحل المشكلات باستخدام التكنولوجيا"
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                    }), a.jsx("p", {
                                        children: "تشجيع العمل الجماعي والتعاوني في بيئة تعليمية تفاعلية"
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            })
        }), a.jsx(Bi, {})]
    }),
    MS = () => {
        const e = [{
            title: "جدول الحصص",
            icon: zw,
            color: "bg-blue-500/10 text-blue-600"
        }, {
            title: "توزيع المنهج",
            icon: Jr,
            color: "bg-green-500/10 text-green-600"
        }, {
            title: "خطة توزيع المهام",
            icon: gr,
            color: "bg-purple-500/10 text-purple-600"
        }, {
            title: "كشف أسماء الطالبات",
            icon: eo,
            color: "bg-orange-500/10 text-orange-600"
        }, {
            title: "سجل المتابعة",
            icon: Kw,
            color: "bg-red-500/10 text-red-600"
        }, {
            title: "نماذج أعمال الطالبات",
            icon: ri,
            color: "bg-cyan-500/10 text-cyan-600"
        }, {
            title: "الاختبارات (تشخيصية + فترية)",
            icon: ri,
            color: "bg-indigo-500/10 text-indigo-600"
        }, {
            title: "تحليل النتائج",
            icon: $w,
            color: "bg-pink-500/10 text-pink-600"
        }, {
            title: "الخطط العلاجية",
            icon: gr,
            color: "bg-emerald-500/10 text-emerald-600"
        }, {
            title: "أوراق العمل",
            icon: ri,
            color: "bg-amber-500/10 text-amber-600"
        }, {
            title: "التعزيز والتكريم",
            icon: Er,
            color: "bg-violet-500/10 text-violet-600"
        }, {
            title: "استراتيجيات التدريس",
            icon: Jr,
            color: "bg-rose-500/10 text-rose-600"
        }];
        return a.jsxs("div", {
            className: "min-h-screen",
            children: [a.jsx($i, {}), a.jsx("main", {
                className: "py-16 bg-gradient-to-b from-background to-muted/20",
                children: a.jsxs("div", {
                    className: "container",
                    children: [a.jsxs("div", {
                        className: "text-center mb-12",
                        children: [a.jsx("h1", {
                            className: "text-4xl md:text-5xl font-bold mb-4",
                            children: "ملف المادة"
                        }), a.jsx("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "ملف شامل يحتوي على جميع مكونات تدريس مادة المهارات الرقمية والتقنية الرقمية"
                        })]
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
                        children: e.map((t, n) => {
                            const r = t.icon;
                            return a.jsxs(oe, {
                                className: "card-hover group",
                                children: [a.jsxs(ie, {
                                    className: "text-center",
                                    children: [a.jsx("div", {
                                        className: `mx-auto mb-3 p-4 rounded-lg w-fit ${t.color}`,
                                        children: a.jsx(r, {
                                            className: "h-8 w-8"
                                        })
                                    }), a.jsx(se, {
                                        className: "text-lg",
                                        children: t.title
                                    })]
                                }), a.jsx(le, {
                                    children: a.jsx("p", {
                                        className: "text-sm text-muted-foreground text-center",
                                        children: "ملف منظم ومحدث بانتظام"
                                    })
                                })]
                            }, n)
                        })
                    }), a.jsxs(oe, {
                        className: "mb-8",
                        children: [a.jsx(ie, {
                            children: a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx("div", {
                                    className: "p-3 bg-primary/10 rounded-lg",
                                    children: a.jsx(Jr, {
                                        className: "h-6 w-6 text-primary"
                                    })
                                }), a.jsxs("div", {
                                    children: [a.jsx(se, {
                                        className: "text-2xl",
                                        children: "وصف المادة"
                                    }), a.jsx(Me, {
                                        children: "نظرة شاملة على مادة المهارات الرقمية والتقنية الرقمية"
                                    })]
                                })]
                            })
                        }), a.jsx(le, {
                            children: a.jsxs("div", {
                                className: "prose prose-lg max-w-none text-muted-foreground",
                                children: [a.jsx("p", {
                                    className: "mb-4",
                                    children: "تهدف مادة المهارات الرقمية والتقنية الرقمية إلى إعداد جيل قادر على التعامل مع التكنولوجيا الحديثة ومواكبة التطورات الرقمية في العصر الحالي."
                                }), a.jsx("p", {
                                    className: "mb-4",
                                    children: "تشمل المادة تعليم المفاهيم الأساسية للحوسبة، البرمجة، قواعد البيانات، تطوير الويب، والذكاء الاصطناعي، بالإضافة إلى المهارات الرقمية الأساسية."
                                }), a.jsx("p", {
                                    children: "نسعى من خلال هذه المادة إلى تنمية التفكير النقدي والإبداعي لدى الطالبات وتمكينهن من استخدام التكنولوجيا لحل المشكلات وإنتاج حلول مبتكرة."
                                })]
                            })
                        })]
                    }), a.jsxs(oe, {
                        className: "mb-8",
                        children: [a.jsx(ie, {
                            children: a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx("div", {
                                    className: "p-3 bg-green-500/10 rounded-lg",
                                    children: a.jsx(gr, {
                                        className: "h-6 w-6 text-green-600"
                                    })
                                }), a.jsxs("div", {
                                    children: [a.jsx(se, {
                                        className: "text-2xl",
                                        children: "أهداف المقرر"
                                    }), a.jsx(Me, {
                                        children: "الأهداف التعليمية المحددة للمادة"
                                    })]
                                })]
                            })
                        }), a.jsx(le, {
                            children: a.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [a.jsxs("div", {
                                    className: "space-y-4",
                                    children: [a.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [a.jsx("div", {
                                            className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                        }), a.jsx("p", {
                                            children: "فهم المفاهيم الأساسية للحوسبة والتكنولوجيا"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [a.jsx("div", {
                                            className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                        }), a.jsx("p", {
                                            children: "تطوير مهارات البرمجة الأساسية"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [a.jsx("div", {
                                            className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                        }), a.jsx("p", {
                                            children: "التعامل مع قواعد البيانات والمعلومات"
                                        })]
                                    })]
                                }), a.jsxs("div", {
                                    className: "space-y-4",
                                    children: [a.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [a.jsx("div", {
                                            className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                        }), a.jsx("p", {
                                            children: "إنشاء مواقع ويب بسيطة وتطبيقات تفاعلية"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [a.jsx("div", {
                                            className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                        }), a.jsx("p", {
                                            children: "فهم أساسيات الذكاء الاصطناعي وتطبيقاته"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [a.jsx("div", {
                                            className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                        }), a.jsx("p", {
                                            children: "تطبيق المهارات الرقمية في حل المشكلات"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    }), a.jsxs(oe, {
                        children: [a.jsx(ie, {
                            children: a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx("div", {
                                    className: "p-3 bg-purple-500/10 rounded-lg",
                                    children: a.jsx(Er, {
                                        className: "h-6 w-6 text-purple-600"
                                    })
                                }), a.jsxs("div", {
                                    children: [a.jsx(se, {
                                        className: "text-2xl",
                                        children: "مخرجات التعلم"
                                    }), a.jsx(Me, {
                                        children: "ما ستحققه الطالبات بعد دراسة المادة"
                                    })]
                                })]
                            })
                        }), a.jsx(le, {
                            children: a.jsxs("div", {
                                className: "flex flex-wrap gap-3",
                                children: [a.jsx(ee, {
                                    variant: "outline",
                                    className: "text-center p-2",
                                    children: "التفكير النقدي في التكنولوجيا"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    className: "text-center p-2",
                                    children: "مهارات البرمجة الأساسية"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    className: "text-center p-2",
                                    children: "تصميم وتطوير المواقع"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    className: "text-center p-2",
                                    children: "إدارة قواعد البيانات"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    className: "text-center p-2",
                                    children: "حل المشكلات رقمياً"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    className: "text-center p-2",
                                    children: "العمل الجماعي في البيئة الرقمية"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    className: "text-center p-2",
                                    children: "الأمان الرقمي والخصوصية"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    className: "text-center p-2",
                                    children: "الابتكار والإبداع التقني"
                                })]
                            })
                        })]
                    })]
                })
            }), a.jsx(Bi, {})]
        })
    },
    _S = () => {
        const e = [{
                title: "مبادرة دمج التقنية في التعليم",
                description: "تطوير استراتيجيات مبتكرة لدمج التكنولوجيا في العملية التعليمية",
                icon: Ff,
                color: "bg-blue-500/10 text-blue-600"
            }, {
                title: "مبادرة التفكير الناقد الرقمي",
                description: "تطوير مهارات الطالبات في التفكير الناقد عبر المشاريع الرقمية",
                icon: bu,
                color: "bg-purple-500/10 text-purple-600"
            }],
            t = [{
                title: "المشاريع التقنية",
                description: "مشاريع عملية تطبق المفاهيم التقنية المكتسبة",
                icon: Uc,
                examples: ["تطوير تطبيقات الويب", "برمجة الألعاب التعليمية", "إنشاء قواعد البيانات"]
            }, {
                title: "الأنشطة الطلابية",
                description: "أنشطة تفاعلية تعزز المشاركة والتعلم النشط",
                icon: eo,
                examples: ["ورش العمل التقنية", "المسابقات البرمجية", "الهاكاثون التعليمي"]
            }, {
                title: "التطبيقات العملية",
                description: "تطبيق المهارات الرقمية في حل مشكلات حقيقية",
                icon: gr,
                examples: ["مشاريع خدمة المجتمع", "حلول للمشاكل البيئية", "تطبيقات الذكاء الاصطناعي"]
            }, {
                title: "الابتكارات والحلول",
                description: "مشاريع إبداعية تقدم حلولاً مبتكرة للتحديات",
                icon: bu,
                examples: ["مشاريع الابتكار التقني", "الحلول الذكية", "التطبيقات المبتكرة"]
            }];
        return a.jsxs("div", {
            className: "min-h-screen",
            children: [a.jsx($i, {}), a.jsx("main", {
                className: "py-16 bg-gradient-to-b from-background to-muted/20",
                children: a.jsxs("div", {
                    className: "container",
                    children: [a.jsxs("div", {
                        className: "text-center mb-12",
                        children: [a.jsx("h1", {
                            className: "text-4xl md:text-5xl font-bold mb-4",
                            children: "الأنشطة والمشاريع"
                        }), a.jsx("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "مجموعة متنوعة من المشاريع التقنية والأنشطة التعليمية التي تطبق المهارات الرقمية عملياً"
                        })]
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",
                        children: t.map((n, r) => {
                            const o = n.icon;
                            return a.jsxs(oe, {
                                className: "card-hover",
                                children: [a.jsx(ie, {
                                    children: a.jsxs("div", {
                                        className: "flex items-center gap-3 mb-3",
                                        children: [a.jsx("div", {
                                            className: "p-3 bg-primary/10 rounded-lg",
                                            children: a.jsx(o, {
                                                className: "h-6 w-6 text-primary"
                                            })
                                        }), a.jsxs("div", {
                                            children: [a.jsx(se, {
                                                className: "text-xl",
                                                children: n.title
                                            }), a.jsx(Me, {
                                                children: n.description
                                            })]
                                        })]
                                    })
                                }), a.jsx(le, {
                                    children: a.jsxs("div", {
                                        className: "space-y-3",
                                        children: [a.jsx("h4", {
                                            className: "font-semibold text-sm",
                                            children: "أمثلة على المشاريع:"
                                        }), a.jsx("div", {
                                            className: "space-y-2",
                                            children: n.examples.map((i, s) => a.jsxs("div", {
                                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                                children: [a.jsx("div", {
                                                    className: "w-1.5 h-1.5 bg-primary rounded-full"
                                                }), i]
                                            }, s))
                                        })]
                                    })
                                })]
                            }, r)
                        })
                    }), a.jsxs(oe, {
                        className: "mb-8",
                        children: [a.jsx(ie, {
                            children: a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx("div", {
                                    className: "p-3 bg-green-500/10 rounded-lg",
                                    children: a.jsx(Ff, {
                                        className: "h-6 w-6 text-green-600"
                                    })
                                }), a.jsxs("div", {
                                    children: [a.jsx(se, {
                                        className: "text-2xl",
                                        children: "المبادرات التعليمية"
                                    }), a.jsx(Me, {
                                        children: "مبادرات مبتكرة لتطوير التعليم الرقمي"
                                    })]
                                })]
                            })
                        }), a.jsx(le, {
                            children: a.jsx("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: e.map((n, r) => {
                                    const o = n.icon;
                                    return a.jsxs("div", {
                                        className: "border rounded-lg p-6",
                                        children: [a.jsxs("div", {
                                            className: "flex items-center gap-3 mb-3",
                                            children: [a.jsx("div", {
                                                className: `p-2 rounded-lg ${n.color}`,
                                                children: a.jsx(o, {
                                                    className: "h-5 w-5"
                                                })
                                            }), a.jsx("h3", {
                                                className: "font-semibold text-lg",
                                                children: n.title
                                            })]
                                        }), a.jsx("p", {
                                            className: "text-muted-foreground",
                                            children: n.description
                                        })]
                                    }, r)
                                })
                            })
                        })]
                    }), a.jsxs(oe, {
                        className: "mb-8",
                        children: [a.jsx(ie, {
                            children: a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx("div", {
                                    className: "p-3 bg-orange-500/10 rounded-lg",
                                    children: a.jsx(eo, {
                                        className: "h-6 w-6 text-orange-600"
                                    })
                                }), a.jsxs("div", {
                                    children: [a.jsx(se, {
                                        className: "text-2xl",
                                        children: "اللجان والتكليفات"
                                    }), a.jsx(Me, {
                                        children: "المشاركات في الأنشطة المدرسية والمجتمعية"
                                    })]
                                })]
                            })
                        }), a.jsx(le, {
                            children: a.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [a.jsxs("div", {
                                    className: "text-center p-6 border rounded-lg",
                                    children: [a.jsx(eo, {
                                        className: "h-8 w-8 mx-auto mb-3 text-orange-600"
                                    }), a.jsx("h3", {
                                        className: "font-semibold mb-2",
                                        children: "عضوية لجان مدرسية"
                                    }), a.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "المشاركة الفعالة في لجان التطوير التعليمي"
                                    })]
                                }), a.jsxs("div", {
                                    className: "text-center p-6 border rounded-lg",
                                    children: [a.jsx(Vc, {
                                        className: "h-8 w-8 mx-auto mb-3 text-red-600"
                                    }), a.jsx("h3", {
                                        className: "font-semibold mb-2",
                                        children: "الإشراف على أنشطة طلابية"
                                    }), a.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "توجيه ومتابعة الأنشطة اللاصفية للطالبات"
                                    })]
                                }), a.jsxs("div", {
                                    className: "text-center p-6 border rounded-lg",
                                    children: [a.jsx(Qw, {
                                        className: "h-8 w-8 mx-auto mb-3 text-yellow-600"
                                    }), a.jsx("h3", {
                                        className: "font-semibold mb-2",
                                        children: "المشاركة في فعاليات المدرسة"
                                    }), a.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "المساهمة في تنظيم وتنفيذ الفعاليات التعليمية"
                                    })]
                                })]
                            })
                        })]
                    }), a.jsxs(oe, {
                        className: "mb-8",
                        children: [a.jsx(ie, {
                            children: a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx("div", {
                                    className: "p-3 bg-purple-500/10 rounded-lg",
                                    children: a.jsx(gr, {
                                        className: "h-6 w-6 text-purple-600"
                                    })
                                }), a.jsxs("div", {
                                    children: [a.jsx(se, {
                                        className: "text-2xl",
                                        children: "مهارات يتم تطويرها"
                                    }), a.jsx(Me, {
                                        children: "المهارات التي تكتسبها الطالبات من خلال المشاريع"
                                    })]
                                })]
                            })
                        }), a.jsx(le, {
                            children: a.jsxs("div", {
                                className: "flex flex-wrap gap-3",
                                children: [a.jsx(ee, {
                                    variant: "outline",
                                    children: "التفكير النقدي"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    children: "حل المشكلات"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    children: "العمل الجماعي"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    children: "القيادة"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    children: "الإبداع والابتكار"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    children: "التواصل الفعال"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    children: "إدارة المشاريع"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    children: "البحث والاستقصاء"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    children: "التعلم الذاتي"
                                }), a.jsx(ee, {
                                    variant: "outline",
                                    children: "التكيف مع التكنولوجيا"
                                })]
                            })
                        })]
                    }), a.jsxs(oe, {
                        children: [a.jsx(ie, {
                            children: a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx("div", {
                                    className: "p-3 bg-yellow-500/10 rounded-lg",
                                    children: a.jsx(Er, {
                                        className: "h-6 w-6 text-yellow-600"
                                    })
                                }), a.jsxs("div", {
                                    children: [a.jsx(se, {
                                        className: "text-2xl",
                                        children: "معرض الإنجازات"
                                    }), a.jsx(Me, {
                                        children: "نماذج من أعمال الطالبات ومشاريعهن المتميزة"
                                    })]
                                })]
                            })
                        }), a.jsx(le, {
                            children: a.jsxs("div", {
                                className: "text-center p-8 border-2 border-dashed border-muted rounded-lg",
                                children: [a.jsx(Er, {
                                    className: "h-16 w-16 mx-auto mb-4 text-muted-foreground/50"
                                }), a.jsx("h3", {
                                    className: "text-lg font-semibold mb-2",
                                    children: "معرض الأعمال المتميزة"
                                }), a.jsx("p", {
                                    className: "text-muted-foreground",
                                    children: "يمكن إضافة صور ومقاطع فيديو للمشاريع المتميزة للطالبات"
                                }), a.jsx("p", {
                                    className: "text-sm text-muted-foreground mt-2",
                                    children: "(سيتم تحديث هذا القسم بأعمال الطالبات المتميزة)"
                                })]
                            })
                        })]
                    })]
                })
            }), a.jsx(Bi, {})]
        })
    },
    OS = () => {
        const e = Zn();
        return h.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", e.pathname)
        }, [e.pathname]), a.jsx("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-100",
            children: a.jsxs("div", {
                className: "text-center",
                children: [a.jsx("h1", {
                    className: "text-4xl font-bold mb-4",
                    children: "404"
                }), a.jsx("p", {
                    className: "text-xl text-gray-600 mb-4",
                    children: "Oops! Page not found"
                }), a.jsx("a", {
                    href: "/",
                    className: "text-blue-500 hover:text-blue-700 underline",
                    children: "Return to Home"
                })]
            })
        })
    },
    LS = new wE,
    AS = () => a.jsx(EE, {
        client: LS,
        children: a.jsxs(XN, {
            children: [a.jsx(M1, {}), a.jsx(u2, {}), a.jsx(IC, {
                children: a.jsxs(pC, {
                    children: [a.jsx(or, {
                        path: "/",
                        element: a.jsx(PS, {})
                    }), a.jsx(or, {
                        path: "/cv",
                        element: a.jsx(RS, {})
                    }), a.jsx(or, {
                        path: "/professional-development",
                        element: a.jsx(TS, {})
                    }), a.jsx(or, {
                        path: "/subject-file",
                        element: a.jsx(MS, {})
                    }), a.jsx(or, {
                        path: "/activities-projects",
                        element: a.jsx(_S, {})
                    }), a.jsx(or, {
                        path: "*",
                        element: a.jsx(OS, {})
                    })]
                })
            })]
        })
    });
Dm(document.getElementById("root")).render(a.jsx(AS, {}));