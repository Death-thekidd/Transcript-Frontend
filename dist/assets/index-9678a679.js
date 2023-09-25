function qm(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in e)) {
					const o = Object.getOwnPropertyDescriptor(r, i);
					o &&
						Object.defineProperty(
							e,
							i,
							o.get ? o : { enumerable: !0, get: () => r[i] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
	);
}
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === "childList")
				for (const l of o.addedNodes)
					l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o);
	}
})();
function Wm(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var xp = { exports: {} },
	Ql = {},
	Sp = { exports: {} },
	re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gi = Symbol.for("react.element"),
	Hm = Symbol.for("react.portal"),
	Km = Symbol.for("react.fragment"),
	Gm = Symbol.for("react.strict_mode"),
	Ym = Symbol.for("react.profiler"),
	Xm = Symbol.for("react.provider"),
	Jm = Symbol.for("react.context"),
	Zm = Symbol.for("react.forward_ref"),
	ey = Symbol.for("react.suspense"),
	ty = Symbol.for("react.memo"),
	ny = Symbol.for("react.lazy"),
	af = Symbol.iterator;
function ry(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (af && e[af]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var kp = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Ep = Object.assign,
	Cp = {};
function Fr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Cp),
		(this.updater = n || kp);
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
Fr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jp() {}
jp.prototype = Fr.prototype;
function $u(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Cp),
		(this.updater = n || kp);
}
var Fu = ($u.prototype = new jp());
Fu.constructor = $u;
Ep(Fu, Fr.prototype);
Fu.isPureReactComponent = !0;
var sf = Array.isArray,
	Np = Object.prototype.hasOwnProperty,
	zu = { current: null },
	Pp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tp(e, t, n) {
	var r,
		i = {},
		o = null,
		l = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (l = t.ref),
		t.key !== void 0 && (o = "" + t.key),
		t))
			Np.call(t, r) && !Pp.hasOwnProperty(r) && (i[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) i.children = n;
	else if (1 < a) {
		for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
		i.children = s;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
	return {
		$$typeof: Gi,
		type: e,
		key: o,
		ref: l,
		props: i,
		_owner: zu.current,
	};
}
function iy(e, t) {
	return {
		$$typeof: Gi,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Uu(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Gi;
}
function oy(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var uf = /\/+/g;
function Da(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? oy("" + e.key)
		: t.toString(36);
}
function bo(e, t, n, r, i) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var l = !1;
	if (e === null) l = !0;
	else
		switch (o) {
			case "string":
			case "number":
				l = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case Gi:
					case Hm:
						l = !0;
				}
		}
	if (l)
		return (
			(l = e),
			(i = i(l)),
			(e = r === "" ? "." + Da(l, 0) : r),
			sf(i)
				? ((n = ""),
				  e != null && (n = e.replace(uf, "$&/") + "/"),
				  bo(i, t, n, "", function (u) {
						return u;
				  }))
				: i != null &&
				  (Uu(i) &&
						(i = iy(
							i,
							n +
								(!i.key || (l && l.key === i.key)
									? ""
									: ("" + i.key).replace(uf, "$&/") + "/") +
								e
						)),
				  t.push(i)),
			1
		);
	if (((l = 0), (r = r === "" ? "." : r + ":"), sf(e)))
		for (var a = 0; a < e.length; a++) {
			o = e[a];
			var s = r + Da(o, a);
			l += bo(o, t, n, s, i);
		}
	else if (((s = ry(e)), typeof s == "function"))
		for (e = s.call(e), a = 0; !(o = e.next()).done; )
			(o = o.value), (s = r + Da(o, a++)), (l += bo(o, t, n, s, i));
	else if (o === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead."
			))
		);
	return l;
}
function so(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		bo(e, r, "", "", function (o) {
			return t.call(n, o, i++);
		}),
		r
	);
}
function ly(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var Ye = { current: null },
	Io = { transition: null },
	ay = {
		ReactCurrentDispatcher: Ye,
		ReactCurrentBatchConfig: Io,
		ReactCurrentOwner: zu,
	};
re.Children = {
	map: so,
	forEach: function (e, t, n) {
		so(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			so(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			so(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Uu(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return e;
	},
};
re.Component = Fr;
re.Fragment = Km;
re.Profiler = Ym;
re.PureComponent = $u;
re.StrictMode = Gm;
re.Suspense = ey;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ay;
re.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = Ep({}, e.props),
		i = e.key,
		o = e.ref,
		l = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (l = zu.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (s in t)
			Np.call(t, s) &&
				!Pp.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		a = Array(s);
		for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
		r.children = a;
	}
	return { $$typeof: Gi, type: e.type, key: i, ref: o, props: r, _owner: l };
};
re.createContext = function (e) {
	return (
		(e = {
			$$typeof: Jm,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Xm, _context: e }),
		(e.Consumer = e)
	);
};
re.createElement = Tp;
re.createFactory = function (e) {
	var t = Tp.bind(null, e);
	return (t.type = e), t;
};
re.createRef = function () {
	return { current: null };
};
re.forwardRef = function (e) {
	return { $$typeof: Zm, render: e };
};
re.isValidElement = Uu;
re.lazy = function (e) {
	return { $$typeof: ny, _payload: { _status: -1, _result: e }, _init: ly };
};
re.memo = function (e, t) {
	return { $$typeof: ty, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
	var t = Io.transition;
	Io.transition = {};
	try {
		e();
	} finally {
		Io.transition = t;
	}
};
re.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
re.useCallback = function (e, t) {
	return Ye.current.useCallback(e, t);
};
re.useContext = function (e) {
	return Ye.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
	return Ye.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
	return Ye.current.useEffect(e, t);
};
re.useId = function () {
	return Ye.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
	return Ye.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
	return Ye.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
	return Ye.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
	return Ye.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
	return Ye.current.useReducer(e, t, n);
};
re.useRef = function (e) {
	return Ye.current.useRef(e);
};
re.useState = function (e) {
	return Ye.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
	return Ye.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
	return Ye.current.useTransition();
};
re.version = "18.2.0";
Sp.exports = re;
var O = Sp.exports;
const X = Wm(O),
	sy = qm({ __proto__: null, default: X }, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uy = O,
	cy = Symbol.for("react.element"),
	fy = Symbol.for("react.fragment"),
	dy = Object.prototype.hasOwnProperty,
	py = uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	hy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Op(e, t, n) {
	var r,
		i = {},
		o = null,
		l = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (l = t.ref);
	for (r in t) dy.call(t, r) && !hy.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: cy,
		type: e,
		key: o,
		ref: l,
		props: i,
		_owner: py.current,
	};
}
Ql.Fragment = fy;
Ql.jsx = Op;
Ql.jsxs = Op;
xp.exports = Ql;
var f = xp.exports,
	Rs = {},
	Rp = { exports: {} },
	ft = {},
	_p = { exports: {} },
	bp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(A, z) {
		var V = A.length;
		A.push(z);
		e: for (; 0 < V; ) {
			var G = (V - 1) >>> 1,
				J = A[G];
			if (0 < i(J, z)) (A[G] = z), (A[V] = J), (V = G);
			else break e;
		}
	}
	function n(A) {
		return A.length === 0 ? null : A[0];
	}
	function r(A) {
		if (A.length === 0) return null;
		var z = A[0],
			V = A.pop();
		if (V !== z) {
			A[0] = V;
			e: for (var G = 0, J = A.length, Z = J >>> 1; G < Z; ) {
				var te = 2 * (G + 1) - 1,
					ee = A[te],
					ne = te + 1,
					le = A[ne];
				if (0 > i(ee, V))
					ne < J && 0 > i(le, ee)
						? ((A[G] = le), (A[ne] = V), (G = ne))
						: ((A[G] = ee), (A[te] = V), (G = te));
				else if (ne < J && 0 > i(le, V)) (A[G] = le), (A[ne] = V), (G = ne);
				else break e;
			}
		}
		return z;
	}
	function i(A, z) {
		var V = A.sortIndex - z.sortIndex;
		return V !== 0 ? V : A.id - z.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var l = Date,
			a = l.now();
		e.unstable_now = function () {
			return l.now() - a;
		};
	}
	var s = [],
		u = [],
		d = 1,
		p = null,
		h = 3,
		v = !1,
		g = !1,
		x = !1,
		k = typeof setTimeout == "function" ? setTimeout : null,
		y = typeof clearTimeout == "function" ? clearTimeout : null,
		c = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function m(A) {
		for (var z = n(u); z !== null; ) {
			if (z.callback === null) r(u);
			else if (z.startTime <= A)
				r(u), (z.sortIndex = z.expirationTime), t(s, z);
			else break;
			z = n(u);
		}
	}
	function w(A) {
		if (((x = !1), m(A), !g))
			if (n(s) !== null) (g = !0), B(S);
			else {
				var z = n(u);
				z !== null && H(w, z.startTime - A);
			}
	}
	function S(A, z) {
		(g = !1), x && ((x = !1), y(j), (j = -1)), (v = !0);
		var V = h;
		try {
			for (
				m(z), p = n(s);
				p !== null && (!(p.expirationTime > z) || (A && !R()));

			) {
				var G = p.callback;
				if (typeof G == "function") {
					(p.callback = null), (h = p.priorityLevel);
					var J = G(p.expirationTime <= z);
					(z = e.unstable_now()),
						typeof J == "function" ? (p.callback = J) : p === n(s) && r(s),
						m(z);
				} else r(s);
				p = n(s);
			}
			if (p !== null) var Z = !0;
			else {
				var te = n(u);
				te !== null && H(w, te.startTime - z), (Z = !1);
			}
			return Z;
		} finally {
			(p = null), (h = V), (v = !1);
		}
	}
	var E = !1,
		C = null,
		j = -1,
		T = 5,
		P = -1;
	function R() {
		return !(e.unstable_now() - P < T);
	}
	function _() {
		if (C !== null) {
			var A = e.unstable_now();
			P = A;
			var z = !0;
			try {
				z = C(!0, A);
			} finally {
				z ? b() : ((E = !1), (C = null));
			}
		} else E = !1;
	}
	var b;
	if (typeof c == "function")
		b = function () {
			c(_);
		};
	else if (typeof MessageChannel < "u") {
		var D = new MessageChannel(),
			U = D.port2;
		(D.port1.onmessage = _),
			(b = function () {
				U.postMessage(null);
			});
	} else
		b = function () {
			k(_, 0);
		};
	function B(A) {
		(C = A), E || ((E = !0), b());
	}
	function H(A, z) {
		j = k(function () {
			A(e.unstable_now());
		}, z);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (A) {
			A.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			g || v || ((g = !0), B(S));
		}),
		(e.unstable_forceFrameRate = function (A) {
			0 > A || 125 < A
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (T = 0 < A ? Math.floor(1e3 / A) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return h;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s);
		}),
		(e.unstable_next = function (A) {
			switch (h) {
				case 1:
				case 2:
				case 3:
					var z = 3;
					break;
				default:
					z = h;
			}
			var V = h;
			h = z;
			try {
				return A();
			} finally {
				h = V;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (A, z) {
			switch (A) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					A = 3;
			}
			var V = h;
			h = A;
			try {
				return z();
			} finally {
				h = V;
			}
		}),
		(e.unstable_scheduleCallback = function (A, z, V) {
			var G = e.unstable_now();
			switch (
				(typeof V == "object" && V !== null
					? ((V = V.delay), (V = typeof V == "number" && 0 < V ? G + V : G))
					: (V = G),
				A)
			) {
				case 1:
					var J = -1;
					break;
				case 2:
					J = 250;
					break;
				case 5:
					J = 1073741823;
					break;
				case 4:
					J = 1e4;
					break;
				default:
					J = 5e3;
			}
			return (
				(J = V + J),
				(A = {
					id: d++,
					callback: z,
					priorityLevel: A,
					startTime: V,
					expirationTime: J,
					sortIndex: -1,
				}),
				V > G
					? ((A.sortIndex = V),
					  t(u, A),
					  n(s) === null &&
							A === n(u) &&
							(x ? (y(j), (j = -1)) : (x = !0), H(w, V - G)))
					: ((A.sortIndex = J), t(s, A), g || v || ((g = !0), B(S))),
				A
			);
		}),
		(e.unstable_shouldYield = R),
		(e.unstable_wrapCallback = function (A) {
			var z = h;
			return function () {
				var V = h;
				h = z;
				try {
					return A.apply(this, arguments);
				} finally {
					h = V;
				}
			};
		});
})(bp);
_p.exports = bp;
var vy = _p.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip = O,
	ut = vy;
function F(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var Ap = new Set(),
	Ei = {};
function ir(e, t) {
	Rr(e, t), Rr(e + "Capture", t);
}
function Rr(e, t) {
	for (Ei[e] = t, e = 0; e < t.length; e++) Ap.add(t[e]);
}
var Zt = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	_s = Object.prototype.hasOwnProperty,
	my =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	cf = {},
	ff = {};
function yy(e) {
	return _s.call(ff, e)
		? !0
		: _s.call(cf, e)
		? !1
		: my.test(e)
		? (ff[e] = !0)
		: ((cf[e] = !0), !1);
}
function gy(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function wy(e, t, n, r) {
	if (t === null || typeof t > "u" || gy(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function Xe(e, t, n, r, i, o, l) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = l);
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		ze[e] = new Xe(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	ze[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	ze[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	ze[e] = new Xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		ze[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	ze[e] = new Xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	ze[e] = new Xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	ze[e] = new Xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	ze[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vu = /[\-:]([a-z])/g;
function Qu(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Vu, Qu);
		ze[t] = new Xe(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Vu, Qu);
		ze[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Vu, Qu);
	ze[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	ze[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new Xe(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function (e) {
	ze[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bu(e, t, n, r) {
	var i = ze.hasOwnProperty(t) ? ze[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(wy(t, n, i, r) && (n = null),
		r || i === null
			? yy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rn = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	uo = Symbol.for("react.element"),
	cr = Symbol.for("react.portal"),
	fr = Symbol.for("react.fragment"),
	qu = Symbol.for("react.strict_mode"),
	bs = Symbol.for("react.profiler"),
	Mp = Symbol.for("react.provider"),
	Dp = Symbol.for("react.context"),
	Wu = Symbol.for("react.forward_ref"),
	Is = Symbol.for("react.suspense"),
	As = Symbol.for("react.suspense_list"),
	Hu = Symbol.for("react.memo"),
	an = Symbol.for("react.lazy"),
	Lp = Symbol.for("react.offscreen"),
	df = Symbol.iterator;
function Wr(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (df && e[df]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var xe = Object.assign,
	La;
function ni(e) {
	if (La === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			La = (t && t[1]) || "";
		}
	return (
		`
` +
		La +
		e
	);
}
var $a = !1;
function Fa(e, t) {
	if (!e || $a) return "";
	$a = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					l = i.length - 1,
					a = o.length - 1;
				1 <= l && 0 <= a && i[l] !== o[a];

			)
				a--;
			for (; 1 <= l && 0 <= a; l--, a--)
				if (i[l] !== o[a]) {
					if (l !== 1 || a !== 1)
						do
							if ((l--, a--, 0 > a || i[l] !== o[a])) {
								var s =
									`
` + i[l].replace(" at new ", " at ");
								return (
									e.displayName &&
										s.includes("<anonymous>") &&
										(s = s.replace("<anonymous>", e.displayName)),
									s
								);
							}
						while (1 <= l && 0 <= a);
					break;
				}
		}
	} finally {
		($a = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? ni(e) : "";
}
function xy(e) {
	switch (e.tag) {
		case 5:
			return ni(e.type);
		case 16:
			return ni("Lazy");
		case 13:
			return ni("Suspense");
		case 19:
			return ni("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Fa(e.type, !1)), e;
		case 11:
			return (e = Fa(e.type.render, !1)), e;
		case 1:
			return (e = Fa(e.type, !0)), e;
		default:
			return "";
	}
}
function Ms(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case fr:
			return "Fragment";
		case cr:
			return "Portal";
		case bs:
			return "Profiler";
		case qu:
			return "StrictMode";
		case Is:
			return "Suspense";
		case As:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Dp:
				return (e.displayName || "Context") + ".Consumer";
			case Mp:
				return (e._context.displayName || "Context") + ".Provider";
			case Wu:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case Hu:
				return (
					(t = e.displayName || null), t !== null ? t : Ms(e.type) || "Memo"
				);
			case an:
				(t = e._payload), (e = e._init);
				try {
					return Ms(e(t));
				} catch {}
		}
	return null;
}
function Sy(e) {
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
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
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
			return Ms(t);
		case 8:
			return t === qu ? "StrictMode" : "Mode";
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
			if (typeof t == "string") return t;
	}
	return null;
}
function On(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function $p(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function ky(e) {
	var t = $p(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (l) {
					(r = "" + l), o.call(this, l);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (l) {
					r = "" + l;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function co(e) {
	e._valueTracker || (e._valueTracker = ky(e));
}
function Fp(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = $p(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Go(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Ds(e, t) {
	var n = t.checked;
	return xe({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function pf(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = On(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function zp(e, t) {
	(t = t.checked), t != null && Bu(e, "checked", t, !1);
}
function Ls(e, t) {
	zp(e, t);
	var n = On(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? $s(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && $s(e, t.type, On(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function hf(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function $s(e, t, n) {
	(t !== "number" || Go(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ri = Array.isArray;
function Er(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + On(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function Fs(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
	return xe({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function vf(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(F(92));
			if (ri(n)) {
				if (1 < n.length) throw Error(F(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: On(n) };
}
function Up(e, t) {
	var n = On(t.value),
		r = On(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function mf(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vp(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function zs(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? Vp(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var fo,
	Qp = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				fo = fo || document.createElement("div"),
					fo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = fo.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Ci(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var ui = {
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
		strokeWidth: !0,
	},
	Ey = ["Webkit", "ms", "Moz", "O"];
Object.keys(ui).forEach(function (e) {
	Ey.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ui[t] = ui[e]);
	});
});
function Bp(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (ui.hasOwnProperty(e) && ui[e])
		? ("" + t).trim()
		: t + "px";
}
function qp(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = Bp(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var Cy = xe(
	{ menuitem: !0 },
	{
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
		wbr: !0,
	}
);
function Us(e, t) {
	if (t) {
		if (Cy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(F(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(F(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(F(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(F(62));
	}
}
function Vs(e, t) {
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
			return !0;
	}
}
var Qs = null;
function Ku(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Bs = null,
	Cr = null,
	jr = null;
function yf(e) {
	if ((e = Ji(e))) {
		if (typeof Bs != "function") throw Error(F(280));
		var t = e.stateNode;
		t && ((t = Kl(t)), Bs(e.stateNode, e.type, t));
	}
}
function Wp(e) {
	Cr ? (jr ? jr.push(e) : (jr = [e])) : (Cr = e);
}
function Hp() {
	if (Cr) {
		var e = Cr,
			t = jr;
		if (((jr = Cr = null), yf(e), t)) for (e = 0; e < t.length; e++) yf(t[e]);
	}
}
function Kp(e, t) {
	return e(t);
}
function Gp() {}
var za = !1;
function Yp(e, t, n) {
	if (za) return e(t, n);
	za = !0;
	try {
		return Kp(e, t, n);
	} finally {
		(za = !1), (Cr !== null || jr !== null) && (Gp(), Hp());
	}
}
function ji(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Kl(n);
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
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(F(231, t, typeof n));
	return n;
}
var qs = !1;
if (Zt)
	try {
		var Hr = {};
		Object.defineProperty(Hr, "passive", {
			get: function () {
				qs = !0;
			},
		}),
			window.addEventListener("test", Hr, Hr),
			window.removeEventListener("test", Hr, Hr);
	} catch {
		qs = !1;
	}
function jy(e, t, n, r, i, o, l, a, s) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (d) {
		this.onError(d);
	}
}
var ci = !1,
	Yo = null,
	Xo = !1,
	Ws = null,
	Ny = {
		onError: function (e) {
			(ci = !0), (Yo = e);
		},
	};
function Py(e, t, n, r, i, o, l, a, s) {
	(ci = !1), (Yo = null), jy.apply(Ny, arguments);
}
function Ty(e, t, n, r, i, o, l, a, s) {
	if ((Py.apply(this, arguments), ci)) {
		if (ci) {
			var u = Yo;
			(ci = !1), (Yo = null);
		} else throw Error(F(198));
		Xo || ((Xo = !0), (Ws = u));
	}
}
function or(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Xp(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function gf(e) {
	if (or(e) !== e) throw Error(F(188));
}
function Oy(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = or(e)), t === null)) throw Error(F(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return gf(i), e;
				if (o === r) return gf(i), t;
				o = o.sibling;
			}
			throw Error(F(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var l = !1, a = i.child; a; ) {
				if (a === n) {
					(l = !0), (n = i), (r = o);
					break;
				}
				if (a === r) {
					(l = !0), (r = i), (n = o);
					break;
				}
				a = a.sibling;
			}
			if (!l) {
				for (a = o.child; a; ) {
					if (a === n) {
						(l = !0), (n = o), (r = i);
						break;
					}
					if (a === r) {
						(l = !0), (r = o), (n = i);
						break;
					}
					a = a.sibling;
				}
				if (!l) throw Error(F(189));
			}
		}
		if (n.alternate !== r) throw Error(F(190));
	}
	if (n.tag !== 3) throw Error(F(188));
	return n.stateNode.current === n ? e : t;
}
function Jp(e) {
	return (e = Oy(e)), e !== null ? Zp(e) : null;
}
function Zp(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Zp(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var eh = ut.unstable_scheduleCallback,
	wf = ut.unstable_cancelCallback,
	Ry = ut.unstable_shouldYield,
	_y = ut.unstable_requestPaint,
	Ne = ut.unstable_now,
	by = ut.unstable_getCurrentPriorityLevel,
	Gu = ut.unstable_ImmediatePriority,
	th = ut.unstable_UserBlockingPriority,
	Jo = ut.unstable_NormalPriority,
	Iy = ut.unstable_LowPriority,
	nh = ut.unstable_IdlePriority,
	Bl = null,
	Vt = null;
function Ay(e) {
	if (Vt && typeof Vt.onCommitFiberRoot == "function")
		try {
			Vt.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var _t = Math.clz32 ? Math.clz32 : Ly,
	My = Math.log,
	Dy = Math.LN2;
function Ly(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((My(e) / Dy) | 0)) | 0;
}
var po = 64,
	ho = 4194304;
function ii(e) {
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
			return e;
	}
}
function Zo(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		l = n & 268435455;
	if (l !== 0) {
		var a = l & ~i;
		a !== 0 ? (r = ii(a)) : ((o &= l), o !== 0 && (r = ii(o)));
	} else (l = n & ~i), l !== 0 ? (r = ii(l)) : o !== 0 && (r = ii(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - _t(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function $y(e, t) {
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
			return -1;
	}
}
function Fy(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var l = 31 - _t(o),
			a = 1 << l,
			s = i[l];
		s === -1
			? (!(a & n) || a & r) && (i[l] = $y(a, t))
			: s <= t && (e.expiredLanes |= a),
			(o &= ~a);
	}
}
function Hs(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function rh() {
	var e = po;
	return (po <<= 1), !(po & 4194240) && (po = 64), e;
}
function Ua(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Yi(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - _t(t)),
		(e[t] = n);
}
function zy(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - _t(n),
			o = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
	}
}
function Yu(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - _t(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var se = 0;
function ih(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var oh,
	Xu,
	lh,
	ah,
	sh,
	Ks = !1,
	vo = [],
	gn = null,
	wn = null,
	xn = null,
	Ni = new Map(),
	Pi = new Map(),
	un = [],
	Uy =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function xf(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			gn = null;
			break;
		case "dragenter":
		case "dragleave":
			wn = null;
			break;
		case "mouseover":
		case "mouseout":
			xn = null;
			break;
		case "pointerover":
		case "pointerout":
			Ni.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Pi.delete(t.pointerId);
	}
}
function Kr(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = Ji(t)), t !== null && Xu(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function Vy(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (gn = Kr(gn, e, t, n, r, i)), !0;
		case "dragenter":
			return (wn = Kr(wn, e, t, n, r, i)), !0;
		case "mouseover":
			return (xn = Kr(xn, e, t, n, r, i)), !0;
		case "pointerover":
			var o = i.pointerId;
			return Ni.set(o, Kr(Ni.get(o) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (
				(o = i.pointerId), Pi.set(o, Kr(Pi.get(o) || null, e, t, n, r, i)), !0
			);
	}
	return !1;
}
function uh(e) {
	var t = qn(e.target);
	if (t !== null) {
		var n = or(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Xp(n)), t !== null)) {
					(e.blockedOn = t),
						sh(e.priority, function () {
							lh(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Ao(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Gs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Qs = r), n.target.dispatchEvent(r), (Qs = null);
		} else return (t = Ji(n)), t !== null && Xu(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Sf(e, t, n) {
	Ao(e) && n.delete(t);
}
function Qy() {
	(Ks = !1),
		gn !== null && Ao(gn) && (gn = null),
		wn !== null && Ao(wn) && (wn = null),
		xn !== null && Ao(xn) && (xn = null),
		Ni.forEach(Sf),
		Pi.forEach(Sf);
}
function Gr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Ks ||
			((Ks = !0),
			ut.unstable_scheduleCallback(ut.unstable_NormalPriority, Qy)));
}
function Ti(e) {
	function t(i) {
		return Gr(i, e);
	}
	if (0 < vo.length) {
		Gr(vo[0], e);
		for (var n = 1; n < vo.length; n++) {
			var r = vo[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		gn !== null && Gr(gn, e),
			wn !== null && Gr(wn, e),
			xn !== null && Gr(xn, e),
			Ni.forEach(t),
			Pi.forEach(t),
			n = 0;
		n < un.length;
		n++
	)
		(r = un[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < un.length && ((n = un[0]), n.blockedOn === null); )
		uh(n), n.blockedOn === null && un.shift();
}
var Nr = rn.ReactCurrentBatchConfig,
	el = !0;
function By(e, t, n, r) {
	var i = se,
		o = Nr.transition;
	Nr.transition = null;
	try {
		(se = 1), Ju(e, t, n, r);
	} finally {
		(se = i), (Nr.transition = o);
	}
}
function qy(e, t, n, r) {
	var i = se,
		o = Nr.transition;
	Nr.transition = null;
	try {
		(se = 4), Ju(e, t, n, r);
	} finally {
		(se = i), (Nr.transition = o);
	}
}
function Ju(e, t, n, r) {
	if (el) {
		var i = Gs(e, t, n, r);
		if (i === null) Xa(e, t, r, tl, n), xf(e, r);
		else if (Vy(i, e, t, n, r)) r.stopPropagation();
		else if ((xf(e, r), t & 4 && -1 < Uy.indexOf(e))) {
			for (; i !== null; ) {
				var o = Ji(i);
				if (
					(o !== null && oh(o),
					(o = Gs(e, t, n, r)),
					o === null && Xa(e, t, r, tl, n),
					o === i)
				)
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else Xa(e, t, r, null, n);
	}
}
var tl = null;
function Gs(e, t, n, r) {
	if (((tl = null), (e = Ku(r)), (e = qn(e)), e !== null))
		if (((t = or(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Xp(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (tl = e), null;
}
function ch(e) {
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
			switch (by()) {
				case Gu:
					return 1;
				case th:
					return 4;
				case Jo:
				case Iy:
					return 16;
				case nh:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var dn = null,
	Zu = null,
	Mo = null;
function fh() {
	if (Mo) return Mo;
	var e,
		t = Zu,
		n = t.length,
		r,
		i = "value" in dn ? dn.value : dn.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var l = n - e;
	for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
	return (Mo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Do(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function mo() {
	return !0;
}
function kf() {
	return !1;
}
function dt(e) {
	function t(n, r, i, o, l) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = l),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? mo
				: kf),
			(this.isPropagationStopped = kf),
			this
		);
	}
	return (
		xe(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = mo));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = mo));
			},
			persist: function () {},
			isPersistent: mo,
		}),
		t
	);
}
var zr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	ec = dt(zr),
	Xi = xe({}, zr, { view: 0, detail: 0 }),
	Wy = dt(Xi),
	Va,
	Qa,
	Yr,
	ql = xe({}, Xi, {
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
		getModifierState: tc,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== Yr &&
						(Yr && e.type === "mousemove"
							? ((Va = e.screenX - Yr.screenX), (Qa = e.screenY - Yr.screenY))
							: (Qa = Va = 0),
						(Yr = e)),
				  Va);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Qa;
		},
	}),
	Ef = dt(ql),
	Hy = xe({}, ql, { dataTransfer: 0 }),
	Ky = dt(Hy),
	Gy = xe({}, Xi, { relatedTarget: 0 }),
	Ba = dt(Gy),
	Yy = xe({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Xy = dt(Yy),
	Jy = xe({}, zr, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Zy = dt(Jy),
	eg = xe({}, zr, { data: 0 }),
	Cf = dt(eg),
	tg = {
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
		MozPrintableKey: "Unidentified",
	},
	ng = {
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
		224: "Meta",
	},
	rg = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function ig(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = rg[e]) ? !!t[e] : !1;
}
function tc() {
	return ig;
}
var og = xe({}, Xi, {
		key: function (e) {
			if (e.key) {
				var t = tg[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Do(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? ng[e.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: tc,
		charCode: function (e) {
			return e.type === "keypress" ? Do(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Do(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	lg = dt(og),
	ag = xe({}, ql, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	jf = dt(ag),
	sg = xe({}, Xi, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: tc,
	}),
	ug = dt(sg),
	cg = xe({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	fg = dt(cg),
	dg = xe({}, ql, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	pg = dt(dg),
	hg = [9, 13, 27, 32],
	nc = Zt && "CompositionEvent" in window,
	fi = null;
Zt && "documentMode" in document && (fi = document.documentMode);
var vg = Zt && "TextEvent" in window && !fi,
	dh = Zt && (!nc || (fi && 8 < fi && 11 >= fi)),
	Nf = String.fromCharCode(32),
	Pf = !1;
function ph(e, t) {
	switch (e) {
		case "keyup":
			return hg.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function hh(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var dr = !1;
function mg(e, t) {
	switch (e) {
		case "compositionend":
			return hh(t);
		case "keypress":
			return t.which !== 32 ? null : ((Pf = !0), Nf);
		case "textInput":
			return (e = t.data), e === Nf && Pf ? null : e;
		default:
			return null;
	}
}
function yg(e, t) {
	if (dr)
		return e === "compositionend" || (!nc && ph(e, t))
			? ((e = fh()), (Mo = Zu = dn = null), (dr = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return dh && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var gg = {
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
	week: !0,
};
function Tf(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!gg[e.type] : t === "textarea";
}
function vh(e, t, n, r) {
	Wp(r),
		(t = nl(t, "onChange")),
		0 < t.length &&
			((n = new ec("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var di = null,
	Oi = null;
function wg(e) {
	Nh(e, 0);
}
function Wl(e) {
	var t = vr(e);
	if (Fp(t)) return e;
}
function xg(e, t) {
	if (e === "change") return t;
}
var mh = !1;
if (Zt) {
	var qa;
	if (Zt) {
		var Wa = "oninput" in document;
		if (!Wa) {
			var Of = document.createElement("div");
			Of.setAttribute("oninput", "return;"),
				(Wa = typeof Of.oninput == "function");
		}
		qa = Wa;
	} else qa = !1;
	mh = qa && (!document.documentMode || 9 < document.documentMode);
}
function Rf() {
	di && (di.detachEvent("onpropertychange", yh), (Oi = di = null));
}
function yh(e) {
	if (e.propertyName === "value" && Wl(Oi)) {
		var t = [];
		vh(t, Oi, e, Ku(e)), Yp(wg, t);
	}
}
function Sg(e, t, n) {
	e === "focusin"
		? (Rf(), (di = t), (Oi = n), di.attachEvent("onpropertychange", yh))
		: e === "focusout" && Rf();
}
function kg(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return Wl(Oi);
}
function Eg(e, t) {
	if (e === "click") return Wl(t);
}
function Cg(e, t) {
	if (e === "input" || e === "change") return Wl(t);
}
function jg(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var It = typeof Object.is == "function" ? Object.is : jg;
function Ri(e, t) {
	if (It(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!_s.call(t, i) || !It(e[i], t[i])) return !1;
	}
	return !0;
}
function _f(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function bf(e, t) {
	var n = _f(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = _f(n);
	}
}
function gh(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? gh(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function wh() {
	for (var e = window, t = Go(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Go(e.document);
	}
	return t;
}
function rc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function Ng(e) {
	var t = wh(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		gh(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && rc(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = bf(n, o));
				var l = bf(n, r);
				i &&
					l &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== l.node ||
						e.focusOffset !== l.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(l.node, l.offset))
						: (t.setEnd(l.node, l.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var Pg = Zt && "documentMode" in document && 11 >= document.documentMode,
	pr = null,
	Ys = null,
	pi = null,
	Xs = !1;
function If(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Xs ||
		pr == null ||
		pr !== Go(r) ||
		((r = pr),
		"selectionStart" in r && rc(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(pi && Ri(pi, r)) ||
			((pi = r),
			(r = nl(Ys, "onSelect")),
			0 < r.length &&
				((t = new ec("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = pr))));
}
function yo(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var hr = {
		animationend: yo("Animation", "AnimationEnd"),
		animationiteration: yo("Animation", "AnimationIteration"),
		animationstart: yo("Animation", "AnimationStart"),
		transitionend: yo("Transition", "TransitionEnd"),
	},
	Ha = {},
	xh = {};
Zt &&
	((xh = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete hr.animationend.animation,
		delete hr.animationiteration.animation,
		delete hr.animationstart.animation),
	"TransitionEvent" in window || delete hr.transitionend.transition);
function Hl(e) {
	if (Ha[e]) return Ha[e];
	if (!hr[e]) return e;
	var t = hr[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in xh) return (Ha[e] = t[n]);
	return e;
}
var Sh = Hl("animationend"),
	kh = Hl("animationiteration"),
	Eh = Hl("animationstart"),
	Ch = Hl("transitionend"),
	jh = new Map(),
	Af =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function Mn(e, t) {
	jh.set(e, t), ir(t, [e]);
}
for (var Ka = 0; Ka < Af.length; Ka++) {
	var Ga = Af[Ka],
		Tg = Ga.toLowerCase(),
		Og = Ga[0].toUpperCase() + Ga.slice(1);
	Mn(Tg, "on" + Og);
}
Mn(Sh, "onAnimationEnd");
Mn(kh, "onAnimationIteration");
Mn(Eh, "onAnimationStart");
Mn("dblclick", "onDoubleClick");
Mn("focusin", "onFocus");
Mn("focusout", "onBlur");
Mn(Ch, "onTransitionEnd");
Rr("onMouseEnter", ["mouseout", "mouseover"]);
Rr("onMouseLeave", ["mouseout", "mouseover"]);
Rr("onPointerEnter", ["pointerout", "pointerover"]);
Rr("onPointerLeave", ["pointerout", "pointerover"]);
ir(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ir(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ir(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ir(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ir(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var oi =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	Rg = new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));
function Mf(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), Ty(r, t, void 0, e), (e.currentTarget = null);
}
function Nh(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var l = r.length - 1; 0 <= l; l--) {
					var a = r[l],
						s = a.instance,
						u = a.currentTarget;
					if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
					Mf(i, a, u), (o = s);
				}
			else
				for (l = 0; l < r.length; l++) {
					if (
						((a = r[l]),
						(s = a.instance),
						(u = a.currentTarget),
						(a = a.listener),
						s !== o && i.isPropagationStopped())
					)
						break e;
					Mf(i, a, u), (o = s);
				}
		}
	}
	if (Xo) throw ((e = Ws), (Xo = !1), (Ws = null), e);
}
function pe(e, t) {
	var n = t[nu];
	n === void 0 && (n = t[nu] = new Set());
	var r = e + "__bubble";
	n.has(r) || (Ph(t, e, 2, !1), n.add(r));
}
function Ya(e, t, n) {
	var r = 0;
	t && (r |= 4), Ph(n, e, r, t);
}
var go = "_reactListening" + Math.random().toString(36).slice(2);
function _i(e) {
	if (!e[go]) {
		(e[go] = !0),
			Ap.forEach(function (n) {
				n !== "selectionchange" && (Rg.has(n) || Ya(n, !1, e), Ya(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[go] || ((t[go] = !0), Ya("selectionchange", !1, t));
	}
}
function Ph(e, t, n, r) {
	switch (ch(t)) {
		case 1:
			var i = By;
			break;
		case 4:
			i = qy;
			break;
		default:
			i = Ju;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!qs ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1);
}
function Xa(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var l = r.tag;
			if (l === 3 || l === 4) {
				var a = r.stateNode.containerInfo;
				if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
				if (l === 4)
					for (l = r.return; l !== null; ) {
						var s = l.tag;
						if (
							(s === 3 || s === 4) &&
							((s = l.stateNode.containerInfo),
							s === i || (s.nodeType === 8 && s.parentNode === i))
						)
							return;
						l = l.return;
					}
				for (; a !== null; ) {
					if (((l = qn(a)), l === null)) return;
					if (((s = l.tag), s === 5 || s === 6)) {
						r = o = l;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	Yp(function () {
		var u = o,
			d = Ku(n),
			p = [];
		e: {
			var h = jh.get(e);
			if (h !== void 0) {
				var v = ec,
					g = e;
				switch (e) {
					case "keypress":
						if (Do(n) === 0) break e;
					case "keydown":
					case "keyup":
						v = lg;
						break;
					case "focusin":
						(g = "focus"), (v = Ba);
						break;
					case "focusout":
						(g = "blur"), (v = Ba);
						break;
					case "beforeblur":
					case "afterblur":
						v = Ba;
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
						v = Ef;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						v = Ky;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						v = ug;
						break;
					case Sh:
					case kh:
					case Eh:
						v = Xy;
						break;
					case Ch:
						v = fg;
						break;
					case "scroll":
						v = Wy;
						break;
					case "wheel":
						v = pg;
						break;
					case "copy":
					case "cut":
					case "paste":
						v = Zy;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						v = jf;
				}
				var x = (t & 4) !== 0,
					k = !x && e === "scroll",
					y = x ? (h !== null ? h + "Capture" : null) : h;
				x = [];
				for (var c = u, m; c !== null; ) {
					m = c;
					var w = m.stateNode;
					if (
						(m.tag === 5 &&
							w !== null &&
							((m = w),
							y !== null && ((w = ji(c, y)), w != null && x.push(bi(c, w, m)))),
						k)
					)
						break;
					c = c.return;
				}
				0 < x.length &&
					((h = new v(h, g, null, n, d)), p.push({ event: h, listeners: x }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((h = e === "mouseover" || e === "pointerover"),
					(v = e === "mouseout" || e === "pointerout"),
					h &&
						n !== Qs &&
						(g = n.relatedTarget || n.fromElement) &&
						(qn(g) || g[en]))
				)
					break e;
				if (
					(v || h) &&
					((h =
						d.window === d
							? d
							: (h = d.ownerDocument)
							? h.defaultView || h.parentWindow
							: window),
					v
						? ((g = n.relatedTarget || n.toElement),
						  (v = u),
						  (g = g ? qn(g) : null),
						  g !== null &&
								((k = or(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
								(g = null))
						: ((v = null), (g = u)),
					v !== g)
				) {
					if (
						((x = Ef),
						(w = "onMouseLeave"),
						(y = "onMouseEnter"),
						(c = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((x = jf),
							(w = "onPointerLeave"),
							(y = "onPointerEnter"),
							(c = "pointer")),
						(k = v == null ? h : vr(v)),
						(m = g == null ? h : vr(g)),
						(h = new x(w, c + "leave", v, n, d)),
						(h.target = k),
						(h.relatedTarget = m),
						(w = null),
						qn(d) === u &&
							((x = new x(y, c + "enter", g, n, d)),
							(x.target = m),
							(x.relatedTarget = k),
							(w = x)),
						(k = w),
						v && g)
					)
						t: {
							for (x = v, y = g, c = 0, m = x; m; m = sr(m)) c++;
							for (m = 0, w = y; w; w = sr(w)) m++;
							for (; 0 < c - m; ) (x = sr(x)), c--;
							for (; 0 < m - c; ) (y = sr(y)), m--;
							for (; c--; ) {
								if (x === y || (y !== null && x === y.alternate)) break t;
								(x = sr(x)), (y = sr(y));
							}
							x = null;
						}
					else x = null;
					v !== null && Df(p, h, v, x, !1),
						g !== null && k !== null && Df(p, k, g, x, !0);
				}
			}
			e: {
				if (
					((h = u ? vr(u) : window),
					(v = h.nodeName && h.nodeName.toLowerCase()),
					v === "select" || (v === "input" && h.type === "file"))
				)
					var S = xg;
				else if (Tf(h))
					if (mh) S = Cg;
					else {
						S = kg;
						var E = Sg;
					}
				else
					(v = h.nodeName) &&
						v.toLowerCase() === "input" &&
						(h.type === "checkbox" || h.type === "radio") &&
						(S = Eg);
				if (S && (S = S(e, u))) {
					vh(p, S, n, d);
					break e;
				}
				E && E(e, h, u),
					e === "focusout" &&
						(E = h._wrapperState) &&
						E.controlled &&
						h.type === "number" &&
						$s(h, "number", h.value);
			}
			switch (((E = u ? vr(u) : window), e)) {
				case "focusin":
					(Tf(E) || E.contentEditable === "true") &&
						((pr = E), (Ys = u), (pi = null));
					break;
				case "focusout":
					pi = Ys = pr = null;
					break;
				case "mousedown":
					Xs = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(Xs = !1), If(p, n, d);
					break;
				case "selectionchange":
					if (Pg) break;
				case "keydown":
				case "keyup":
					If(p, n, d);
			}
			var C;
			if (nc)
				e: {
					switch (e) {
						case "compositionstart":
							var j = "onCompositionStart";
							break e;
						case "compositionend":
							j = "onCompositionEnd";
							break e;
						case "compositionupdate":
							j = "onCompositionUpdate";
							break e;
					}
					j = void 0;
				}
			else
				dr
					? ph(e, n) && (j = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
			j &&
				(dh &&
					n.locale !== "ko" &&
					(dr || j !== "onCompositionStart"
						? j === "onCompositionEnd" && dr && (C = fh())
						: ((dn = d),
						  (Zu = "value" in dn ? dn.value : dn.textContent),
						  (dr = !0))),
				(E = nl(u, j)),
				0 < E.length &&
					((j = new Cf(j, e, null, n, d)),
					p.push({ event: j, listeners: E }),
					C ? (j.data = C) : ((C = hh(n)), C !== null && (j.data = C)))),
				(C = vg ? mg(e, n) : yg(e, n)) &&
					((u = nl(u, "onBeforeInput")),
					0 < u.length &&
						((d = new Cf("onBeforeInput", "beforeinput", null, n, d)),
						p.push({ event: d, listeners: u }),
						(d.data = C)));
		}
		Nh(p, t);
	});
}
function bi(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = ji(e, n)),
			o != null && r.unshift(bi(e, o, i)),
			(o = ji(e, t)),
			o != null && r.push(bi(e, o, i))),
			(e = e.return);
	}
	return r;
}
function sr(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Df(e, t, n, r, i) {
	for (var o = t._reactName, l = []; n !== null && n !== r; ) {
		var a = n,
			s = a.alternate,
			u = a.stateNode;
		if (s !== null && s === r) break;
		a.tag === 5 &&
			u !== null &&
			((a = u),
			i
				? ((s = ji(n, o)), s != null && l.unshift(bi(n, s, a)))
				: i || ((s = ji(n, o)), s != null && l.push(bi(n, s, a)))),
			(n = n.return);
	}
	l.length !== 0 && e.push({ event: t, listeners: l });
}
var _g = /\r\n?/g,
	bg = /\u0000|\uFFFD/g;
function Lf(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			_g,
			`
`
		)
		.replace(bg, "");
}
function wo(e, t, n) {
	if (((t = Lf(t)), Lf(e) !== t && n)) throw Error(F(425));
}
function rl() {}
var Js = null,
	Zs = null;
function eu(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var tu = typeof setTimeout == "function" ? setTimeout : void 0,
	Ig = typeof clearTimeout == "function" ? clearTimeout : void 0,
	$f = typeof Promise == "function" ? Promise : void 0,
	Ag =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof $f < "u"
			? function (e) {
					return $f.resolve(null).then(e).catch(Mg);
			  }
			: tu;
function Mg(e) {
	setTimeout(function () {
		throw e;
	});
}
function Ja(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), Ti(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	Ti(t);
}
function Sn(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function Ff(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Ur = Math.random().toString(36).slice(2),
	Ft = "__reactFiber$" + Ur,
	Ii = "__reactProps$" + Ur,
	en = "__reactContainer$" + Ur,
	nu = "__reactEvents$" + Ur,
	Dg = "__reactListeners$" + Ur,
	Lg = "__reactHandles$" + Ur;
function qn(e) {
	var t = e[Ft];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[en] || n[Ft])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Ff(e); e !== null; ) {
					if ((n = e[Ft])) return n;
					e = Ff(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Ji(e) {
	return (
		(e = e[Ft] || e[en]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function vr(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(F(33));
}
function Kl(e) {
	return e[Ii] || null;
}
var ru = [],
	mr = -1;
function Dn(e) {
	return { current: e };
}
function ve(e) {
	0 > mr || ((e.current = ru[mr]), (ru[mr] = null), mr--);
}
function de(e, t) {
	mr++, (ru[mr] = e.current), (e.current = t);
}
var Rn = {},
	qe = Dn(Rn),
	nt = Dn(!1),
	Jn = Rn;
function _r(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Rn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function rt(e) {
	return (e = e.childContextTypes), e != null;
}
function il() {
	ve(nt), ve(qe);
}
function zf(e, t, n) {
	if (qe.current !== Rn) throw Error(F(168));
	de(qe, t), de(nt, n);
}
function Th(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(F(108, Sy(e) || "Unknown", i));
	return xe({}, n, r);
}
function ol(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rn),
		(Jn = qe.current),
		de(qe, e),
		de(nt, nt.current),
		!0
	);
}
function Uf(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(F(169));
	n
		? ((e = Th(e, t, Jn)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  ve(nt),
		  ve(qe),
		  de(qe, e))
		: ve(nt),
		de(nt, n);
}
var Gt = null,
	Gl = !1,
	Za = !1;
function Oh(e) {
	Gt === null ? (Gt = [e]) : Gt.push(e);
}
function $g(e) {
	(Gl = !0), Oh(e);
}
function Ln() {
	if (!Za && Gt !== null) {
		Za = !0;
		var e = 0,
			t = se;
		try {
			var n = Gt;
			for (se = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Gt = null), (Gl = !1);
		} catch (i) {
			throw (Gt !== null && (Gt = Gt.slice(e + 1)), eh(Gu, Ln), i);
		} finally {
			(se = t), (Za = !1);
		}
	}
	return null;
}
var yr = [],
	gr = 0,
	ll = null,
	al = 0,
	mt = [],
	yt = 0,
	Zn = null,
	Yt = 1,
	Xt = "";
function Fn(e, t) {
	(yr[gr++] = al), (yr[gr++] = ll), (ll = e), (al = t);
}
function Rh(e, t, n) {
	(mt[yt++] = Yt), (mt[yt++] = Xt), (mt[yt++] = Zn), (Zn = e);
	var r = Yt;
	e = Xt;
	var i = 32 - _t(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - _t(t) + i;
	if (30 < o) {
		var l = i - (i % 5);
		(o = (r & ((1 << l) - 1)).toString(32)),
			(r >>= l),
			(i -= l),
			(Yt = (1 << (32 - _t(t) + i)) | (n << i) | r),
			(Xt = o + e);
	} else (Yt = (1 << o) | (n << i) | r), (Xt = e);
}
function ic(e) {
	e.return !== null && (Fn(e, 1), Rh(e, 1, 0));
}
function oc(e) {
	for (; e === ll; )
		(ll = yr[--gr]), (yr[gr] = null), (al = yr[--gr]), (yr[gr] = null);
	for (; e === Zn; )
		(Zn = mt[--yt]),
			(mt[yt] = null),
			(Xt = mt[--yt]),
			(mt[yt] = null),
			(Yt = mt[--yt]),
			(mt[yt] = null);
}
var st = null,
	at = null,
	ye = !1,
	Ot = null;
function _h(e, t) {
	var n = gt(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vf(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (st = e), (at = Sn(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (st = e), (at = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Zn !== null ? { id: Yt, overflow: Xt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = gt(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (st = e),
					  (at = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function iu(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ou(e) {
	if (ye) {
		var t = at;
		if (t) {
			var n = t;
			if (!Vf(e, t)) {
				if (iu(e)) throw Error(F(418));
				t = Sn(n.nextSibling);
				var r = st;
				t && Vf(e, t)
					? _h(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (ye = !1), (st = e));
			}
		} else {
			if (iu(e)) throw Error(F(418));
			(e.flags = (e.flags & -4097) | 2), (ye = !1), (st = e);
		}
	}
}
function Qf(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	st = e;
}
function xo(e) {
	if (e !== st) return !1;
	if (!ye) return Qf(e), (ye = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !eu(e.type, e.memoizedProps))),
		t && (t = at))
	) {
		if (iu(e)) throw (bh(), Error(F(418)));
		for (; t; ) _h(e, t), (t = Sn(t.nextSibling));
	}
	if ((Qf(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(F(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							at = Sn(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			at = null;
		}
	} else at = st ? Sn(e.stateNode.nextSibling) : null;
	return !0;
}
function bh() {
	for (var e = at; e; ) e = Sn(e.nextSibling);
}
function br() {
	(at = st = null), (ye = !1);
}
function lc(e) {
	Ot === null ? (Ot = [e]) : Ot.push(e);
}
var Fg = rn.ReactCurrentBatchConfig;
function Nt(e, t) {
	if (e && e.defaultProps) {
		(t = xe({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var sl = Dn(null),
	ul = null,
	wr = null,
	ac = null;
function sc() {
	ac = wr = ul = null;
}
function uc(e) {
	var t = sl.current;
	ve(sl), (e._currentValue = t);
}
function lu(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function Pr(e, t) {
	(ul = e),
		(ac = wr = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (et = !0), (e.firstContext = null));
}
function xt(e) {
	var t = e._currentValue;
	if (ac !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
			if (ul === null) throw Error(F(308));
			(wr = e), (ul.dependencies = { lanes: 0, firstContext: e });
		} else wr = wr.next = e;
	return t;
}
var Wn = null;
function cc(e) {
	Wn === null ? (Wn = [e]) : Wn.push(e);
}
function Ih(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), cc(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		tn(e, r)
	);
}
function tn(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var sn = !1;
function fc(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Ah(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Jt(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function kn(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), ie & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			tn(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), cc(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		tn(e, n)
	);
}
function Lo(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Yu(e, n);
	}
}
function Bf(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var l = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
			} while (n !== null);
			o === null ? (i = o = t) : (o = o.next = t);
		} else i = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function cl(e, t, n, r) {
	var i = e.updateQueue;
	sn = !1;
	var o = i.firstBaseUpdate,
		l = i.lastBaseUpdate,
		a = i.shared.pending;
	if (a !== null) {
		i.shared.pending = null;
		var s = a,
			u = s.next;
		(s.next = null), l === null ? (o = u) : (l.next = u), (l = s);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(a = d.lastBaseUpdate),
			a !== l &&
				(a === null ? (d.firstBaseUpdate = u) : (a.next = u),
				(d.lastBaseUpdate = s)));
	}
	if (o !== null) {
		var p = i.baseState;
		(l = 0), (d = u = s = null), (a = o);
		do {
			var h = a.lane,
				v = a.eventTime;
			if ((r & h) === h) {
				d !== null &&
					(d = d.next =
						{
							eventTime: v,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var g = e,
						x = a;
					switch (((h = t), (v = n), x.tag)) {
						case 1:
							if (((g = x.payload), typeof g == "function")) {
								p = g.call(v, p, h);
								break e;
							}
							p = g;
							break e;
						case 3:
							g.flags = (g.flags & -65537) | 128;
						case 0:
							if (
								((g = x.payload),
								(h = typeof g == "function" ? g.call(v, p, h) : g),
								h == null)
							)
								break e;
							p = xe({}, p, h);
							break e;
						case 2:
							sn = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(h = i.effects),
					h === null ? (i.effects = [a]) : h.push(a));
			} else
				(v = {
					eventTime: v,
					lane: h,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					d === null ? ((u = d = v), (s = p)) : (d = d.next = v),
					(l |= h);
			if (((a = a.next), a === null)) {
				if (((a = i.shared.pending), a === null)) break;
				(h = a),
					(a = h.next),
					(h.next = null),
					(i.lastBaseUpdate = h),
					(i.shared.pending = null);
			}
		} while (1);
		if (
			(d === null && (s = p),
			(i.baseState = s),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = d),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (l |= i.lane), (i = i.next);
			while (i !== t);
		} else o === null && (i.shared.lanes = 0);
		(tr |= l), (e.lanes = l), (e.memoizedState = p);
	}
}
function qf(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(F(191, i));
				i.call(r);
			}
		}
}
var Mh = new Ip.Component().refs;
function au(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : xe({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Yl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? or(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Ge(),
			i = Cn(e),
			o = Jt(r, i);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = kn(e, o, i)),
			t !== null && (bt(t, e, i, r), Lo(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Ge(),
			i = Cn(e),
			o = Jt(r, i);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = kn(e, o, i)),
			t !== null && (bt(t, e, i, r), Lo(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Ge(),
			r = Cn(e),
			i = Jt(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = kn(e, i, r)),
			t !== null && (bt(t, e, r, n), Lo(t, e, r));
	},
};
function Wf(e, t, n, r, i, o, l) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, l)
			: t.prototype && t.prototype.isPureReactComponent
			? !Ri(n, r) || !Ri(i, o)
			: !0
	);
}
function Dh(e, t, n) {
	var r = !1,
		i = Rn,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = xt(o))
			: ((i = rt(t) ? Jn : qe.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? _r(e, i) : Rn)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Yl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function Hf(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Yl.enqueueReplaceState(t, t.state, null);
}
function su(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = Mh), fc(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (i.context = xt(o))
		: ((o = rt(t) ? Jn : qe.current), (i.context = _r(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (au(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && Yl.enqueueReplaceState(i, i.state, null),
			cl(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xr(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(F(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(F(147, e));
			var i = r,
				o = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (l) {
						var a = i.refs;
						a === Mh && (a = i.refs = {}),
							l === null ? delete a[o] : (a[o] = l);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != "string") throw Error(F(284));
		if (!n._owner) throw Error(F(290, e));
	}
	return e;
}
function So(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			F(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e
			)
		))
	);
}
function Kf(e) {
	var t = e._init;
	return t(e._payload);
}
function Lh(e) {
	function t(y, c) {
		if (e) {
			var m = y.deletions;
			m === null ? ((y.deletions = [c]), (y.flags |= 16)) : m.push(c);
		}
	}
	function n(y, c) {
		if (!e) return null;
		for (; c !== null; ) t(y, c), (c = c.sibling);
		return null;
	}
	function r(y, c) {
		for (y = new Map(); c !== null; )
			c.key !== null ? y.set(c.key, c) : y.set(c.index, c), (c = c.sibling);
		return y;
	}
	function i(y, c) {
		return (y = jn(y, c)), (y.index = 0), (y.sibling = null), y;
	}
	function o(y, c, m) {
		return (
			(y.index = m),
			e
				? ((m = y.alternate),
				  m !== null
						? ((m = m.index), m < c ? ((y.flags |= 2), c) : m)
						: ((y.flags |= 2), c))
				: ((y.flags |= 1048576), c)
		);
	}
	function l(y) {
		return e && y.alternate === null && (y.flags |= 2), y;
	}
	function a(y, c, m, w) {
		return c === null || c.tag !== 6
			? ((c = ls(m, y.mode, w)), (c.return = y), c)
			: ((c = i(c, m)), (c.return = y), c);
	}
	function s(y, c, m, w) {
		var S = m.type;
		return S === fr
			? d(y, c, m.props.children, w, m.key)
			: c !== null &&
			  (c.elementType === S ||
					(typeof S == "object" &&
						S !== null &&
						S.$$typeof === an &&
						Kf(S) === c.type))
			? ((w = i(c, m.props)), (w.ref = Xr(y, c, m)), (w.return = y), w)
			: ((w = Qo(m.type, m.key, m.props, null, y.mode, w)),
			  (w.ref = Xr(y, c, m)),
			  (w.return = y),
			  w);
	}
	function u(y, c, m, w) {
		return c === null ||
			c.tag !== 4 ||
			c.stateNode.containerInfo !== m.containerInfo ||
			c.stateNode.implementation !== m.implementation
			? ((c = as(m, y.mode, w)), (c.return = y), c)
			: ((c = i(c, m.children || [])), (c.return = y), c);
	}
	function d(y, c, m, w, S) {
		return c === null || c.tag !== 7
			? ((c = Xn(m, y.mode, w, S)), (c.return = y), c)
			: ((c = i(c, m)), (c.return = y), c);
	}
	function p(y, c, m) {
		if ((typeof c == "string" && c !== "") || typeof c == "number")
			return (c = ls("" + c, y.mode, m)), (c.return = y), c;
		if (typeof c == "object" && c !== null) {
			switch (c.$$typeof) {
				case uo:
					return (
						(m = Qo(c.type, c.key, c.props, null, y.mode, m)),
						(m.ref = Xr(y, null, c)),
						(m.return = y),
						m
					);
				case cr:
					return (c = as(c, y.mode, m)), (c.return = y), c;
				case an:
					var w = c._init;
					return p(y, w(c._payload), m);
			}
			if (ri(c) || Wr(c))
				return (c = Xn(c, y.mode, m, null)), (c.return = y), c;
			So(y, c);
		}
		return null;
	}
	function h(y, c, m, w) {
		var S = c !== null ? c.key : null;
		if ((typeof m == "string" && m !== "") || typeof m == "number")
			return S !== null ? null : a(y, c, "" + m, w);
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case uo:
					return m.key === S ? s(y, c, m, w) : null;
				case cr:
					return m.key === S ? u(y, c, m, w) : null;
				case an:
					return (S = m._init), h(y, c, S(m._payload), w);
			}
			if (ri(m) || Wr(m)) return S !== null ? null : d(y, c, m, w, null);
			So(y, m);
		}
		return null;
	}
	function v(y, c, m, w, S) {
		if ((typeof w == "string" && w !== "") || typeof w == "number")
			return (y = y.get(m) || null), a(c, y, "" + w, S);
		if (typeof w == "object" && w !== null) {
			switch (w.$$typeof) {
				case uo:
					return (y = y.get(w.key === null ? m : w.key) || null), s(c, y, w, S);
				case cr:
					return (y = y.get(w.key === null ? m : w.key) || null), u(c, y, w, S);
				case an:
					var E = w._init;
					return v(y, c, m, E(w._payload), S);
			}
			if (ri(w) || Wr(w)) return (y = y.get(m) || null), d(c, y, w, S, null);
			So(c, w);
		}
		return null;
	}
	function g(y, c, m, w) {
		for (
			var S = null, E = null, C = c, j = (c = 0), T = null;
			C !== null && j < m.length;
			j++
		) {
			C.index > j ? ((T = C), (C = null)) : (T = C.sibling);
			var P = h(y, C, m[j], w);
			if (P === null) {
				C === null && (C = T);
				break;
			}
			e && C && P.alternate === null && t(y, C),
				(c = o(P, c, j)),
				E === null ? (S = P) : (E.sibling = P),
				(E = P),
				(C = T);
		}
		if (j === m.length) return n(y, C), ye && Fn(y, j), S;
		if (C === null) {
			for (; j < m.length; j++)
				(C = p(y, m[j], w)),
					C !== null &&
						((c = o(C, c, j)), E === null ? (S = C) : (E.sibling = C), (E = C));
			return ye && Fn(y, j), S;
		}
		for (C = r(y, C); j < m.length; j++)
			(T = v(C, y, j, m[j], w)),
				T !== null &&
					(e && T.alternate !== null && C.delete(T.key === null ? j : T.key),
					(c = o(T, c, j)),
					E === null ? (S = T) : (E.sibling = T),
					(E = T));
		return (
			e &&
				C.forEach(function (R) {
					return t(y, R);
				}),
			ye && Fn(y, j),
			S
		);
	}
	function x(y, c, m, w) {
		var S = Wr(m);
		if (typeof S != "function") throw Error(F(150));
		if (((m = S.call(m)), m == null)) throw Error(F(151));
		for (
			var E = (S = null), C = c, j = (c = 0), T = null, P = m.next();
			C !== null && !P.done;
			j++, P = m.next()
		) {
			C.index > j ? ((T = C), (C = null)) : (T = C.sibling);
			var R = h(y, C, P.value, w);
			if (R === null) {
				C === null && (C = T);
				break;
			}
			e && C && R.alternate === null && t(y, C),
				(c = o(R, c, j)),
				E === null ? (S = R) : (E.sibling = R),
				(E = R),
				(C = T);
		}
		if (P.done) return n(y, C), ye && Fn(y, j), S;
		if (C === null) {
			for (; !P.done; j++, P = m.next())
				(P = p(y, P.value, w)),
					P !== null &&
						((c = o(P, c, j)), E === null ? (S = P) : (E.sibling = P), (E = P));
			return ye && Fn(y, j), S;
		}
		for (C = r(y, C); !P.done; j++, P = m.next())
			(P = v(C, y, j, P.value, w)),
				P !== null &&
					(e && P.alternate !== null && C.delete(P.key === null ? j : P.key),
					(c = o(P, c, j)),
					E === null ? (S = P) : (E.sibling = P),
					(E = P));
		return (
			e &&
				C.forEach(function (_) {
					return t(y, _);
				}),
			ye && Fn(y, j),
			S
		);
	}
	function k(y, c, m, w) {
		if (
			(typeof m == "object" &&
				m !== null &&
				m.type === fr &&
				m.key === null &&
				(m = m.props.children),
			typeof m == "object" && m !== null)
		) {
			switch (m.$$typeof) {
				case uo:
					e: {
						for (var S = m.key, E = c; E !== null; ) {
							if (E.key === S) {
								if (((S = m.type), S === fr)) {
									if (E.tag === 7) {
										n(y, E.sibling),
											(c = i(E, m.props.children)),
											(c.return = y),
											(y = c);
										break e;
									}
								} else if (
									E.elementType === S ||
									(typeof S == "object" &&
										S !== null &&
										S.$$typeof === an &&
										Kf(S) === E.type)
								) {
									n(y, E.sibling),
										(c = i(E, m.props)),
										(c.ref = Xr(y, E, m)),
										(c.return = y),
										(y = c);
									break e;
								}
								n(y, E);
								break;
							} else t(y, E);
							E = E.sibling;
						}
						m.type === fr
							? ((c = Xn(m.props.children, y.mode, w, m.key)),
							  (c.return = y),
							  (y = c))
							: ((w = Qo(m.type, m.key, m.props, null, y.mode, w)),
							  (w.ref = Xr(y, c, m)),
							  (w.return = y),
							  (y = w));
					}
					return l(y);
				case cr:
					e: {
						for (E = m.key; c !== null; ) {
							if (c.key === E)
								if (
									c.tag === 4 &&
									c.stateNode.containerInfo === m.containerInfo &&
									c.stateNode.implementation === m.implementation
								) {
									n(y, c.sibling),
										(c = i(c, m.children || [])),
										(c.return = y),
										(y = c);
									break e;
								} else {
									n(y, c);
									break;
								}
							else t(y, c);
							c = c.sibling;
						}
						(c = as(m, y.mode, w)), (c.return = y), (y = c);
					}
					return l(y);
				case an:
					return (E = m._init), k(y, c, E(m._payload), w);
			}
			if (ri(m)) return g(y, c, m, w);
			if (Wr(m)) return x(y, c, m, w);
			So(y, m);
		}
		return (typeof m == "string" && m !== "") || typeof m == "number"
			? ((m = "" + m),
			  c !== null && c.tag === 6
					? (n(y, c.sibling), (c = i(c, m)), (c.return = y), (y = c))
					: (n(y, c), (c = ls(m, y.mode, w)), (c.return = y), (y = c)),
			  l(y))
			: n(y, c);
	}
	return k;
}
var Ir = Lh(!0),
	$h = Lh(!1),
	Zi = {},
	Qt = Dn(Zi),
	Ai = Dn(Zi),
	Mi = Dn(Zi);
function Hn(e) {
	if (e === Zi) throw Error(F(174));
	return e;
}
function dc(e, t) {
	switch ((de(Mi, t), de(Ai, e), de(Qt, Zi), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : zs(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = zs(t, e));
	}
	ve(Qt), de(Qt, t);
}
function Ar() {
	ve(Qt), ve(Ai), ve(Mi);
}
function Fh(e) {
	Hn(Mi.current);
	var t = Hn(Qt.current),
		n = zs(t, e.type);
	t !== n && (de(Ai, e), de(Qt, n));
}
function pc(e) {
	Ai.current === e && (ve(Qt), ve(Ai));
}
var ge = Dn(0);
function fl(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var es = [];
function hc() {
	for (var e = 0; e < es.length; e++)
		es[e]._workInProgressVersionPrimary = null;
	es.length = 0;
}
var $o = rn.ReactCurrentDispatcher,
	ts = rn.ReactCurrentBatchConfig,
	er = 0,
	we = null,
	Oe = null,
	Ie = null,
	dl = !1,
	hi = !1,
	Di = 0,
	zg = 0;
function Ue() {
	throw Error(F(321));
}
function vc(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!It(e[n], t[n])) return !1;
	return !0;
}
function mc(e, t, n, r, i, o) {
	if (
		((er = o),
		(we = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		($o.current = e === null || e.memoizedState === null ? Bg : qg),
		(e = n(r, i)),
		hi)
	) {
		o = 0;
		do {
			if (((hi = !1), (Di = 0), 25 <= o)) throw Error(F(301));
			(o += 1),
				(Ie = Oe = null),
				(t.updateQueue = null),
				($o.current = Wg),
				(e = n(r, i));
		} while (hi);
	}
	if (
		(($o.current = pl),
		(t = Oe !== null && Oe.next !== null),
		(er = 0),
		(Ie = Oe = we = null),
		(dl = !1),
		t)
	)
		throw Error(F(300));
	return e;
}
function yc() {
	var e = Di !== 0;
	return (Di = 0), e;
}
function $t() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return Ie === null ? (we.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie;
}
function St() {
	if (Oe === null) {
		var e = we.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = Oe.next;
	var t = Ie === null ? we.memoizedState : Ie.next;
	if (t !== null) (Ie = t), (Oe = e);
	else {
		if (e === null) throw Error(F(310));
		(Oe = e),
			(e = {
				memoizedState: Oe.memoizedState,
				baseState: Oe.baseState,
				baseQueue: Oe.baseQueue,
				queue: Oe.queue,
				next: null,
			}),
			Ie === null ? (we.memoizedState = Ie = e) : (Ie = Ie.next = e);
	}
	return Ie;
}
function Li(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function ns(e) {
	var t = St(),
		n = t.queue;
	if (n === null) throw Error(F(311));
	n.lastRenderedReducer = e;
	var r = Oe,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var l = i.next;
			(i.next = o.next), (o.next = l);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var a = (l = null),
			s = null,
			u = o;
		do {
			var d = u.lane;
			if ((er & d) === d)
				s !== null &&
					(s = s.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var p = {
					lane: d,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				s === null ? ((a = s = p), (l = r)) : (s = s.next = p),
					(we.lanes |= d),
					(tr |= d);
			}
			u = u.next;
		} while (u !== null && u !== o);
		s === null ? (l = r) : (s.next = a),
			It(r, t.memoizedState) || (et = !0),
			(t.memoizedState = r),
			(t.baseState = l),
			(t.baseQueue = s),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (o = i.lane), (we.lanes |= o), (tr |= o), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function rs(e) {
	var t = St(),
		n = t.queue;
	if (n === null) throw Error(F(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var l = (i = i.next);
		do (o = e(o, l.action)), (l = l.next);
		while (l !== i);
		It(o, t.memoizedState) || (et = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function zh() {}
function Uh(e, t) {
	var n = we,
		r = St(),
		i = t(),
		o = !It(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (et = !0)),
		(r = r.queue),
		gc(Bh.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (Ie !== null && Ie.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			$i(9, Qh.bind(null, n, r, i, t), void 0, null),
			Ae === null)
		)
			throw Error(F(349));
		er & 30 || Vh(n, t, i);
	}
	return i;
}
function Vh(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = we.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (we.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qh(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), qh(t) && Wh(e);
}
function Bh(e, t, n) {
	return n(function () {
		qh(t) && Wh(e);
	});
}
function qh(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !It(e, n);
	} catch {
		return !0;
	}
}
function Wh(e) {
	var t = tn(e, 1);
	t !== null && bt(t, e, 1, -1);
}
function Gf(e) {
	var t = $t();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Li,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = Qg.bind(null, we, e)),
		[t.memoizedState, e]
	);
}
function $i(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = we.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (we.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Hh() {
	return St().memoizedState;
}
function Fo(e, t, n, r) {
	var i = $t();
	(we.flags |= e),
		(i.memoizedState = $i(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xl(e, t, n, r) {
	var i = St();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (Oe !== null) {
		var l = Oe.memoizedState;
		if (((o = l.destroy), r !== null && vc(r, l.deps))) {
			i.memoizedState = $i(t, n, o, r);
			return;
		}
	}
	(we.flags |= e), (i.memoizedState = $i(1 | t, n, o, r));
}
function Yf(e, t) {
	return Fo(8390656, 8, e, t);
}
function gc(e, t) {
	return Xl(2048, 8, e, t);
}
function Kh(e, t) {
	return Xl(4, 2, e, t);
}
function Gh(e, t) {
	return Xl(4, 4, e, t);
}
function Yh(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function Xh(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Xl(4, 4, Yh.bind(null, t, e), n)
	);
}
function wc() {}
function Jh(e, t) {
	var n = St();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && vc(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Zh(e, t) {
	var n = St();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && vc(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function ev(e, t, n) {
	return er & 21
		? (It(n, t) || ((n = rh()), (we.lanes |= n), (tr |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
}
function Ug(e, t) {
	var n = se;
	(se = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = ts.transition;
	ts.transition = {};
	try {
		e(!1), t();
	} finally {
		(se = n), (ts.transition = r);
	}
}
function tv() {
	return St().memoizedState;
}
function Vg(e, t, n) {
	var r = Cn(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		nv(e))
	)
		rv(t, n);
	else if (((n = Ih(e, t, n, r)), n !== null)) {
		var i = Ge();
		bt(n, e, r, i), iv(n, t, r);
	}
}
function Qg(e, t, n) {
	var r = Cn(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (nv(e)) rv(t, i);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var l = t.lastRenderedState,
					a = o(l, n);
				if (((i.hasEagerState = !0), (i.eagerState = a), It(a, l))) {
					var s = t.interleaved;
					s === null
						? ((i.next = i), cc(t))
						: ((i.next = s.next), (s.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = Ih(e, t, i, r)),
			n !== null && ((i = Ge()), bt(n, e, r, i), iv(n, t, r));
	}
}
function nv(e) {
	var t = e.alternate;
	return e === we || (t !== null && t === we);
}
function rv(e, t) {
	hi = dl = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function iv(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Yu(e, n);
	}
}
var pl = {
		readContext: xt,
		useCallback: Ue,
		useContext: Ue,
		useEffect: Ue,
		useImperativeHandle: Ue,
		useInsertionEffect: Ue,
		useLayoutEffect: Ue,
		useMemo: Ue,
		useReducer: Ue,
		useRef: Ue,
		useState: Ue,
		useDebugValue: Ue,
		useDeferredValue: Ue,
		useTransition: Ue,
		useMutableSource: Ue,
		useSyncExternalStore: Ue,
		useId: Ue,
		unstable_isNewReconciler: !1,
	},
	Bg = {
		readContext: xt,
		useCallback: function (e, t) {
			return ($t().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: xt,
		useEffect: Yf,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Fo(4194308, 4, Yh.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Fo(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Fo(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = $t();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = $t();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = Vg.bind(null, we, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = $t();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Gf,
		useDebugValue: wc,
		useDeferredValue: function (e) {
			return ($t().memoizedState = e);
		},
		useTransition: function () {
			var e = Gf(!1),
				t = e[0];
			return (e = Ug.bind(null, e[1])), ($t().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = we,
				i = $t();
			if (ye) {
				if (n === void 0) throw Error(F(407));
				n = n();
			} else {
				if (((n = t()), Ae === null)) throw Error(F(349));
				er & 30 || Vh(r, t, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(i.queue = o),
				Yf(Bh.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				$i(9, Qh.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = $t(),
				t = Ae.identifierPrefix;
			if (ye) {
				var n = Xt,
					r = Yt;
				(n = (r & ~(1 << (32 - _t(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Di++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = zg++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	qg = {
		readContext: xt,
		useCallback: Jh,
		useContext: xt,
		useEffect: gc,
		useImperativeHandle: Xh,
		useInsertionEffect: Kh,
		useLayoutEffect: Gh,
		useMemo: Zh,
		useReducer: ns,
		useRef: Hh,
		useState: function () {
			return ns(Li);
		},
		useDebugValue: wc,
		useDeferredValue: function (e) {
			var t = St();
			return ev(t, Oe.memoizedState, e);
		},
		useTransition: function () {
			var e = ns(Li)[0],
				t = St().memoizedState;
			return [e, t];
		},
		useMutableSource: zh,
		useSyncExternalStore: Uh,
		useId: tv,
		unstable_isNewReconciler: !1,
	},
	Wg = {
		readContext: xt,
		useCallback: Jh,
		useContext: xt,
		useEffect: gc,
		useImperativeHandle: Xh,
		useInsertionEffect: Kh,
		useLayoutEffect: Gh,
		useMemo: Zh,
		useReducer: rs,
		useRef: Hh,
		useState: function () {
			return rs(Li);
		},
		useDebugValue: wc,
		useDeferredValue: function (e) {
			var t = St();
			return Oe === null ? (t.memoizedState = e) : ev(t, Oe.memoizedState, e);
		},
		useTransition: function () {
			var e = rs(Li)[0],
				t = St().memoizedState;
			return [e, t];
		},
		useMutableSource: zh,
		useSyncExternalStore: Uh,
		useId: tv,
		unstable_isNewReconciler: !1,
	};
function Mr(e, t) {
	try {
		var n = "",
			r = t;
		do (n += xy(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function is(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function uu(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Hg = typeof WeakMap == "function" ? WeakMap : Map;
function ov(e, t, n) {
	(n = Jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			vl || ((vl = !0), (wu = r)), uu(e, t);
		}),
		n
	);
}
function lv(e, t, n) {
	(n = Jt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				uu(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				uu(e, t),
					typeof r != "function" &&
						(En === null ? (En = new Set([this])) : En.add(this));
				var l = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: l !== null ? l : "",
				});
			}),
		n
	);
}
function Xf(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Hg();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = a0.bind(null, e, t, n)), t.then(e, e));
}
function Jf(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Zf(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = Jt(-1, 1)), (t.tag = 2), kn(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var Kg = rn.ReactCurrentOwner,
	et = !1;
function He(e, t, n, r) {
	t.child = e === null ? $h(t, null, n, r) : Ir(t, e.child, n, r);
}
function ed(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return (
		Pr(t, i),
		(r = mc(e, t, n, r, o, i)),
		(n = yc()),
		e !== null && !et
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  nn(e, t, i))
			: (ye && n && ic(t), (t.flags |= 1), He(e, t, r, i), t.child)
	);
}
function td(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!Pc(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), av(e, t, o, r, i))
			: ((e = Qo(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & i))) {
		var l = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Ri), n(l, r) && e.ref === t.ref)
		)
			return nn(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = jn(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function av(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (Ri(o, r) && e.ref === t.ref)
			if (((et = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
				e.flags & 131072 && (et = !0);
			else return (t.lanes = e.lanes), nn(e, t, i);
	}
	return cu(e, t, n, r, i);
}
function sv(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				de(Sr, lt),
				(lt |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					de(Sr, lt),
					(lt |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				de(Sr, lt),
				(lt |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			de(Sr, lt),
			(lt |= r);
	return He(e, t, i, n), t.child;
}
function uv(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function cu(e, t, n, r, i) {
	var o = rt(n) ? Jn : qe.current;
	return (
		(o = _r(t, o)),
		Pr(t, i),
		(n = mc(e, t, n, r, o, i)),
		(r = yc()),
		e !== null && !et
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  nn(e, t, i))
			: (ye && r && ic(t), (t.flags |= 1), He(e, t, n, i), t.child)
	);
}
function nd(e, t, n, r, i) {
	if (rt(n)) {
		var o = !0;
		ol(t);
	} else o = !1;
	if ((Pr(t, i), t.stateNode === null))
		zo(e, t), Dh(t, n, r), su(t, n, r, i), (r = !0);
	else if (e === null) {
		var l = t.stateNode,
			a = t.memoizedProps;
		l.props = a;
		var s = l.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = xt(u))
			: ((u = rt(n) ? Jn : qe.current), (u = _r(t, u)));
		var d = n.getDerivedStateFromProps,
			p =
				typeof d == "function" ||
				typeof l.getSnapshotBeforeUpdate == "function";
		p ||
			(typeof l.UNSAFE_componentWillReceiveProps != "function" &&
				typeof l.componentWillReceiveProps != "function") ||
			((a !== r || s !== u) && Hf(t, l, r, u)),
			(sn = !1);
		var h = t.memoizedState;
		(l.state = h),
			cl(t, r, l, i),
			(s = t.memoizedState),
			a !== r || h !== s || nt.current || sn
				? (typeof d == "function" && (au(t, n, d, r), (s = t.memoizedState)),
				  (a = sn || Wf(t, n, a, r, h, s, u))
						? (p ||
								(typeof l.UNSAFE_componentWillMount != "function" &&
									typeof l.componentWillMount != "function") ||
								(typeof l.componentWillMount == "function" &&
									l.componentWillMount(),
								typeof l.UNSAFE_componentWillMount == "function" &&
									l.UNSAFE_componentWillMount()),
						  typeof l.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (l.props = r),
				  (l.state = s),
				  (l.context = u),
				  (r = a))
				: (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(l = t.stateNode),
			Ah(e, t),
			(a = t.memoizedProps),
			(u = t.type === t.elementType ? a : Nt(t.type, a)),
			(l.props = u),
			(p = t.pendingProps),
			(h = l.context),
			(s = n.contextType),
			typeof s == "object" && s !== null
				? (s = xt(s))
				: ((s = rt(n) ? Jn : qe.current), (s = _r(t, s)));
		var v = n.getDerivedStateFromProps;
		(d =
			typeof v == "function" ||
			typeof l.getSnapshotBeforeUpdate == "function") ||
			(typeof l.UNSAFE_componentWillReceiveProps != "function" &&
				typeof l.componentWillReceiveProps != "function") ||
			((a !== p || h !== s) && Hf(t, l, r, s)),
			(sn = !1),
			(h = t.memoizedState),
			(l.state = h),
			cl(t, r, l, i);
		var g = t.memoizedState;
		a !== p || h !== g || nt.current || sn
			? (typeof v == "function" && (au(t, n, v, r), (g = t.memoizedState)),
			  (u = sn || Wf(t, n, u, r, h, g, s) || !1)
					? (d ||
							(typeof l.UNSAFE_componentWillUpdate != "function" &&
								typeof l.componentWillUpdate != "function") ||
							(typeof l.componentWillUpdate == "function" &&
								l.componentWillUpdate(r, g, s),
							typeof l.UNSAFE_componentWillUpdate == "function" &&
								l.UNSAFE_componentWillUpdate(r, g, s)),
					  typeof l.componentDidUpdate == "function" && (t.flags |= 4),
					  typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof l.componentDidUpdate != "function" ||
							(a === e.memoizedProps && h === e.memoizedState) ||
							(t.flags |= 4),
					  typeof l.getSnapshotBeforeUpdate != "function" ||
							(a === e.memoizedProps && h === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = g)),
			  (l.props = r),
			  (l.state = g),
			  (l.context = s),
			  (r = u))
			: (typeof l.componentDidUpdate != "function" ||
					(a === e.memoizedProps && h === e.memoizedState) ||
					(t.flags |= 4),
			  typeof l.getSnapshotBeforeUpdate != "function" ||
					(a === e.memoizedProps && h === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return fu(e, t, n, r, o, i);
}
function fu(e, t, n, r, i, o) {
	uv(e, t);
	var l = (t.flags & 128) !== 0;
	if (!r && !l) return i && Uf(t, n, !1), nn(e, t, o);
	(r = t.stateNode), (Kg.current = t);
	var a =
		l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && l
			? ((t.child = Ir(t, e.child, null, o)), (t.child = Ir(t, null, a, o)))
			: He(e, t, a, o),
		(t.memoizedState = r.state),
		i && Uf(t, n, !0),
		t.child
	);
}
function cv(e) {
	var t = e.stateNode;
	t.pendingContext
		? zf(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && zf(e, t.context, !1),
		dc(e, t.containerInfo);
}
function rd(e, t, n, r, i) {
	return br(), lc(i), (t.flags |= 256), He(e, t, n, r), t.child;
}
var du = { dehydrated: null, treeContext: null, retryLane: 0 };
function pu(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function fv(e, t, n) {
	var r = t.pendingProps,
		i = ge.current,
		o = !1,
		l = (t.flags & 128) !== 0,
		a;
	if (
		((a = l) ||
			(a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		a
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		de(ge, i & 1),
		e === null)
	)
		return (
			ou(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((l = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (l = { mode: "hidden", children: l }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = l))
								: (o = ea(l, r, 0, null)),
						  (e = Xn(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = pu(n)),
						  (t.memoizedState = du),
						  e)
						: xc(t, l))
		);
	if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
		return Gg(e, t, l, r, a, i, n);
	if (o) {
		(o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
		var s = { mode: "hidden", children: r.children };
		return (
			!(l & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = s),
				  (t.deletions = null))
				: ((r = jn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			a !== null ? (o = jn(a, o)) : ((o = Xn(o, l, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(l = e.child.memoizedState),
			(l =
				l === null
					? pu(n)
					: {
							baseLanes: l.baseLanes | n,
							cachePool: null,
							transitions: l.transitions,
					  }),
			(o.memoizedState = l),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = du),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = jn(o, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function xc(e, t) {
	return (
		(t = ea({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function ko(e, t, n, r) {
	return (
		r !== null && lc(r),
		Ir(t, e.child, null, n),
		(e = xc(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Gg(e, t, n, r, i, o, l) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = is(Error(F(422)))), ko(e, t, l, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (i = t.mode),
			  (r = ea({ mode: "visible", children: r.children }, i, 0, null)),
			  (o = Xn(o, i, l, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && Ir(t, e.child, null, l),
			  (t.child.memoizedState = pu(l)),
			  (t.memoizedState = du),
			  o);
	if (!(t.mode & 1)) return ko(e, t, l, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (o = Error(F(419))), (r = is(o, r, void 0)), ko(e, t, l, r);
	}
	if (((a = (l & e.childLanes) !== 0), et || a)) {
		if (((r = Ae), r !== null)) {
			switch (l & -l) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
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
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | l) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), tn(e, i), bt(r, e, i, -1));
		}
		return Nc(), (r = is(Error(F(421)))), ko(e, t, l, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = s0.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (at = Sn(i.nextSibling)),
		  (st = t),
		  (ye = !0),
		  (Ot = null),
		  e !== null &&
				((mt[yt++] = Yt),
				(mt[yt++] = Xt),
				(mt[yt++] = Zn),
				(Yt = e.id),
				(Xt = e.overflow),
				(Zn = t)),
		  (t = xc(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function id(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), lu(e.return, t, n);
}
function os(e, t, n, r, i) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i));
}
function dv(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((He(e, t, r.children, n), (r = ge.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && id(e, n, t);
				else if (e.tag === 19) id(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((de(ge, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && fl(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					os(t, !1, i, n, o);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && fl(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				os(t, !0, n, null, o);
				break;
			case "together":
				os(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function zo(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nn(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(tr |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(F(153));
	if (t.child !== null) {
		for (
			e = t.child, n = jn(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = jn(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Yg(e, t, n) {
	switch (t.tag) {
		case 3:
			cv(t), br();
			break;
		case 5:
			Fh(t);
			break;
		case 1:
			rt(t.type) && ol(t);
			break;
		case 4:
			dc(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			de(sl, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (de(ge, ge.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? fv(e, t, n)
					: (de(ge, ge.current & 1),
					  (e = nn(e, t, n)),
					  e !== null ? e.sibling : null);
			de(ge, ge.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return dv(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				de(ge, ge.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), sv(e, t, n);
	}
	return nn(e, t, n);
}
var pv, hu, hv, vv;
pv = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
hu = function () {};
hv = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), Hn(Qt.current);
		var o = null;
		switch (n) {
			case "input":
				(i = Ds(e, i)), (r = Ds(e, r)), (o = []);
				break;
			case "select":
				(i = xe({}, i, { value: void 0 })),
					(r = xe({}, r, { value: void 0 })),
					(o = []);
				break;
			case "textarea":
				(i = Fs(e, i)), (r = Fs(e, r)), (o = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = rl);
		}
		Us(n, r);
		var l;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var a = i[u];
					for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(Ei.hasOwnProperty(u)
							? o || (o = [])
							: (o = o || []).push(u, null));
		for (u in r) {
			var s = r[u];
			if (
				((a = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && s !== a && (s != null || a != null))
			)
				if (u === "style")
					if (a) {
						for (l in a)
							!a.hasOwnProperty(l) ||
								(s && s.hasOwnProperty(l)) ||
								(n || (n = {}), (n[l] = ""));
						for (l in s)
							s.hasOwnProperty(l) &&
								a[l] !== s[l] &&
								(n || (n = {}), (n[l] = s[l]));
					} else n || (o || (o = []), o.push(u, n)), (n = s);
				else
					u === "dangerouslySetInnerHTML"
						? ((s = s ? s.__html : void 0),
						  (a = a ? a.__html : void 0),
						  s != null && a !== s && (o = o || []).push(u, s))
						: u === "children"
						? (typeof s != "string" && typeof s != "number") ||
						  (o = o || []).push(u, "" + s)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (Ei.hasOwnProperty(u)
								? (s != null && u === "onScroll" && pe("scroll", e),
								  o || a === s || (o = []))
								: (o = o || []).push(u, s));
		}
		n && (o = o || []).push("style", n);
		var u = o;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
vv = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Jr(e, t) {
	if (!ye)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Ve(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Xg(e, t, n) {
	var r = t.pendingProps;
	switch ((oc(t), t.tag)) {
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
			return Ve(t), null;
		case 1:
			return rt(t.type) && il(), Ve(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Ar(),
				ve(nt),
				ve(qe),
				hc(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(xo(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Ot !== null && (ku(Ot), (Ot = null)))),
				hu(e, t),
				Ve(t),
				null
			);
		case 5:
			pc(t);
			var i = Hn(Mi.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				hv(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(F(166));
					return Ve(t), null;
				}
				if (((e = Hn(Qt.current)), xo(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[Ft] = t), (r[Ii] = o), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							pe("cancel", r), pe("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							pe("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < oi.length; i++) pe(oi[i], r);
							break;
						case "source":
							pe("error", r);
							break;
						case "img":
						case "image":
						case "link":
							pe("error", r), pe("load", r);
							break;
						case "details":
							pe("toggle", r);
							break;
						case "input":
							pf(r, o), pe("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								pe("invalid", r);
							break;
						case "textarea":
							vf(r, o), pe("invalid", r);
					}
					Us(n, o), (i = null);
					for (var l in o)
						if (o.hasOwnProperty(l)) {
							var a = o[l];
							l === "children"
								? typeof a == "string"
									? r.textContent !== a &&
									  (o.suppressHydrationWarning !== !0 &&
											wo(r.textContent, a, e),
									  (i = ["children", a]))
									: typeof a == "number" &&
									  r.textContent !== "" + a &&
									  (o.suppressHydrationWarning !== !0 &&
											wo(r.textContent, a, e),
									  (i = ["children", "" + a]))
								: Ei.hasOwnProperty(l) &&
								  a != null &&
								  l === "onScroll" &&
								  pe("scroll", r);
						}
					switch (n) {
						case "input":
							co(r), hf(r, o, !0);
							break;
						case "textarea":
							co(r), mf(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = rl);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(l = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = Vp(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = l.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = l.createElement(n, { is: r.is }))
								: ((e = l.createElement(n)),
								  n === "select" &&
										((l = e),
										r.multiple
											? (l.multiple = !0)
											: r.size && (l.size = r.size)))
							: (e = l.createElementNS(e, n)),
						(e[Ft] = t),
						(e[Ii] = r),
						pv(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((l = Vs(n, r)), n)) {
							case "dialog":
								pe("cancel", e), pe("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								pe("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < oi.length; i++) pe(oi[i], e);
								i = r;
								break;
							case "source":
								pe("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								pe("error", e), pe("load", e), (i = r);
								break;
							case "details":
								pe("toggle", e), (i = r);
								break;
							case "input":
								pf(e, r), (i = Ds(e, r)), pe("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = xe({}, r, { value: void 0 })),
									pe("invalid", e);
								break;
							case "textarea":
								vf(e, r), (i = Fs(e, r)), pe("invalid", e);
								break;
							default:
								i = r;
						}
						Us(n, i), (a = i);
						for (o in a)
							if (a.hasOwnProperty(o)) {
								var s = a[o];
								o === "style"
									? qp(e, s)
									: o === "dangerouslySetInnerHTML"
									? ((s = s ? s.__html : void 0), s != null && Qp(e, s))
									: o === "children"
									? typeof s == "string"
										? (n !== "textarea" || s !== "") && Ci(e, s)
										: typeof s == "number" && Ci(e, "" + s)
									: o !== "suppressContentEditableWarning" &&
									  o !== "suppressHydrationWarning" &&
									  o !== "autoFocus" &&
									  (Ei.hasOwnProperty(o)
											? s != null && o === "onScroll" && pe("scroll", e)
											: s != null && Bu(e, o, s, l));
							}
						switch (n) {
							case "input":
								co(e), hf(e, r, !1);
								break;
							case "textarea":
								co(e), mf(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + On(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? Er(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  Er(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = rl);
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
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return Ve(t), null;
		case 6:
			if (e && t.stateNode != null) vv(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
				if (((n = Hn(Mi.current)), Hn(Qt.current), xo(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Ft] = t),
						(o = r.nodeValue !== n) && ((e = st), e !== null))
					)
						switch (e.tag) {
							case 3:
								wo(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									wo(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Ft] = t),
						(t.stateNode = r);
			}
			return Ve(t), null;
		case 13:
			if (
				(ve(ge),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (ye && at !== null && t.mode & 1 && !(t.flags & 128))
					bh(), br(), (t.flags |= 98560), (o = !1);
				else if (((o = xo(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(F(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(F(317));
						o[Ft] = t;
					} else
						br(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Ve(t), (o = !1);
				} else Ot !== null && (ku(Ot), (Ot = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ge.current & 1 ? Re === 0 && (Re = 3) : Nc())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Ve(t),
				  null);
		case 4:
			return (
				Ar(), hu(e, t), e === null && _i(t.stateNode.containerInfo), Ve(t), null
			);
		case 10:
			return uc(t.type._context), Ve(t), null;
		case 17:
			return rt(t.type) && il(), Ve(t), null;
		case 19:
			if ((ve(ge), (o = t.memoizedState), o === null)) return Ve(t), null;
			if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
				if (r) Jr(o, !1);
				else {
					if (Re !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((l = fl(e)), l !== null)) {
								for (
									t.flags |= 128,
										Jr(o, !1),
										r = l.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(l = o.alternate),
										l === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = l.childLanes),
											  (o.lanes = l.lanes),
											  (o.child = l.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = l.memoizedProps),
											  (o.memoizedState = l.memoizedState),
											  (o.updateQueue = l.updateQueue),
											  (o.type = l.type),
											  (e = l.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return de(ge, (ge.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						Ne() > Dr &&
						((t.flags |= 128), (r = !0), Jr(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = fl(l)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Jr(o, !0),
							o.tail === null && o.tailMode === "hidden" && !l.alternate && !ye)
						)
							return Ve(t), null;
					} else
						2 * Ne() - o.renderingStartTime > Dr &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Jr(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((l.sibling = t.child), (t.child = l))
					: ((n = o.last),
					  n !== null ? (n.sibling = l) : (t.child = l),
					  (o.last = l));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = Ne()),
				  (t.sibling = null),
				  (n = ge.current),
				  de(ge, r ? (n & 1) | 2 : n & 1),
				  t)
				: (Ve(t), null);
		case 22:
		case 23:
			return (
				jc(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? lt & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Ve(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(F(156, t.tag));
}
function Jg(e, t) {
	switch ((oc(t), t.tag)) {
		case 1:
			return (
				rt(t.type) && il(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Ar(),
				ve(nt),
				ve(qe),
				hc(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return pc(t), null;
		case 13:
			if (
				(ve(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(F(340));
				br();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return ve(ge), null;
		case 4:
			return Ar(), null;
		case 10:
			return uc(t.type._context), null;
		case 22:
		case 23:
			return jc(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Eo = !1,
	Be = !1,
	Zg = typeof WeakSet == "function" ? WeakSet : Set,
	W = null;
function xr(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				ke(e, t, r);
			}
		else n.current = null;
}
function vu(e, t, n) {
	try {
		n();
	} catch (r) {
		ke(e, t, r);
	}
}
var od = !1;
function e0(e, t) {
	if (((Js = el), (e = wh()), rc(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var l = 0,
						a = -1,
						s = -1,
						u = 0,
						d = 0,
						p = e,
						h = null;
					t: for (;;) {
						for (
							var v;
							p !== n || (i !== 0 && p.nodeType !== 3) || (a = l + i),
								p !== o || (r !== 0 && p.nodeType !== 3) || (s = l + r),
								p.nodeType === 3 && (l += p.nodeValue.length),
								(v = p.firstChild) !== null;

						)
							(h = p), (p = v);
						for (;;) {
							if (p === e) break t;
							if (
								(h === n && ++u === i && (a = l),
								h === o && ++d === r && (s = l),
								(v = p.nextSibling) !== null)
							)
								break;
							(p = h), (h = p.parentNode);
						}
						p = v;
					}
					n = a === -1 || s === -1 ? null : { start: a, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Zs = { focusedElem: e, selectionRange: n }, el = !1, W = t; W !== null; )
		if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (W = e);
		else
			for (; W !== null; ) {
				t = W;
				try {
					var g = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (g !== null) {
									var x = g.memoizedProps,
										k = g.memoizedState,
										y = t.stateNode,
										c = y.getSnapshotBeforeUpdate(
											t.elementType === t.type ? x : Nt(t.type, x),
											k
										);
									y.__reactInternalSnapshotBeforeUpdate = c;
								}
								break;
							case 3:
								var m = t.stateNode.containerInfo;
								m.nodeType === 1
									? (m.textContent = "")
									: m.nodeType === 9 &&
									  m.documentElement &&
									  m.removeChild(m.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(F(163));
						}
				} catch (w) {
					ke(t, t.return, w);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (W = e);
					break;
				}
				W = t.return;
			}
	return (g = od), (od = !1), g;
}
function vi(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && vu(t, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function Jl(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function mu(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function mv(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), mv(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Ft], delete t[Ii], delete t[nu], delete t[Dg], delete t[Lg])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function yv(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ld(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || yv(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function yu(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = rl));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (yu(e, t, n), e = e.sibling; e !== null; ) yu(e, t, n), (e = e.sibling);
}
function gu(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (gu(e, t, n), e = e.sibling; e !== null; ) gu(e, t, n), (e = e.sibling);
}
var Le = null,
	Tt = !1;
function on(e, t, n) {
	for (n = n.child; n !== null; ) gv(e, t, n), (n = n.sibling);
}
function gv(e, t, n) {
	if (Vt && typeof Vt.onCommitFiberUnmount == "function")
		try {
			Vt.onCommitFiberUnmount(Bl, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Be || xr(n, t);
		case 6:
			var r = Le,
				i = Tt;
			(Le = null),
				on(e, t, n),
				(Le = r),
				(Tt = i),
				Le !== null &&
					(Tt
						? ((e = Le),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Le.removeChild(n.stateNode));
			break;
		case 18:
			Le !== null &&
				(Tt
					? ((e = Le),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Ja(e.parentNode, n)
							: e.nodeType === 1 && Ja(e, n),
					  Ti(e))
					: Ja(Le, n.stateNode));
			break;
		case 4:
			(r = Le),
				(i = Tt),
				(Le = n.stateNode.containerInfo),
				(Tt = !0),
				on(e, t, n),
				(Le = r),
				(Tt = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Be &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var o = i,
						l = o.destroy;
					(o = o.tag),
						l !== void 0 && (o & 2 || o & 4) && vu(n, t, l),
						(i = i.next);
				} while (i !== r);
			}
			on(e, t, n);
			break;
		case 1:
			if (
				!Be &&
				(xr(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					ke(n, t, a);
				}
			on(e, t, n);
			break;
		case 21:
			on(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((Be = (r = Be) || n.memoizedState !== null), on(e, t, n), (Be = r))
				: on(e, t, n);
			break;
		default:
			on(e, t, n);
	}
}
function ad(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Zg()),
			t.forEach(function (r) {
				var i = u0.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function jt(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					l = t,
					a = l;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(Le = a.stateNode), (Tt = !1);
							break e;
						case 3:
							(Le = a.stateNode.containerInfo), (Tt = !0);
							break e;
						case 4:
							(Le = a.stateNode.containerInfo), (Tt = !0);
							break e;
					}
					a = a.return;
				}
				if (Le === null) throw Error(F(160));
				gv(o, l, i), (Le = null), (Tt = !1);
				var s = i.alternate;
				s !== null && (s.return = null), (i.return = null);
			} catch (u) {
				ke(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) wv(t, e), (t = t.sibling);
}
function wv(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((jt(t, e), Lt(e), r & 4)) {
				try {
					vi(3, e, e.return), Jl(3, e);
				} catch (x) {
					ke(e, e.return, x);
				}
				try {
					vi(5, e, e.return);
				} catch (x) {
					ke(e, e.return, x);
				}
			}
			break;
		case 1:
			jt(t, e), Lt(e), r & 512 && n !== null && xr(n, n.return);
			break;
		case 5:
			if (
				(jt(t, e),
				Lt(e),
				r & 512 && n !== null && xr(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					Ci(i, "");
				} catch (x) {
					ke(e, e.return, x);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					l = n !== null ? n.memoizedProps : o,
					a = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						a === "input" && o.type === "radio" && o.name != null && zp(i, o),
							Vs(a, l);
						var u = Vs(a, o);
						for (l = 0; l < s.length; l += 2) {
							var d = s[l],
								p = s[l + 1];
							d === "style"
								? qp(i, p)
								: d === "dangerouslySetInnerHTML"
								? Qp(i, p)
								: d === "children"
								? Ci(i, p)
								: Bu(i, d, p, u);
						}
						switch (a) {
							case "input":
								Ls(i, o);
								break;
							case "textarea":
								Up(i, o);
								break;
							case "select":
								var h = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var v = o.value;
								v != null
									? Er(i, !!o.multiple, v, !1)
									: h !== !!o.multiple &&
									  (o.defaultValue != null
											? Er(i, !!o.multiple, o.defaultValue, !0)
											: Er(i, !!o.multiple, o.multiple ? [] : "", !1));
						}
						i[Ii] = o;
					} catch (x) {
						ke(e, e.return, x);
					}
			}
			break;
		case 6:
			if ((jt(t, e), Lt(e), r & 4)) {
				if (e.stateNode === null) throw Error(F(162));
				(i = e.stateNode), (o = e.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (x) {
					ke(e, e.return, x);
				}
			}
			break;
		case 3:
			if (
				(jt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Ti(t.containerInfo);
				} catch (x) {
					ke(e, e.return, x);
				}
			break;
		case 4:
			jt(t, e), Lt(e);
			break;
		case 13:
			jt(t, e),
				Lt(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(Ec = Ne())),
				r & 4 && ad(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((Be = (u = Be) || d), jt(t, e), (Be = u)) : jt(t, e),
				Lt(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !d && e.mode & 1)
				)
					for (W = e, d = e.child; d !== null; ) {
						for (p = W = d; W !== null; ) {
							switch (((h = W), (v = h.child), h.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									vi(4, h, h.return);
									break;
								case 1:
									xr(h, h.return);
									var g = h.stateNode;
									if (typeof g.componentWillUnmount == "function") {
										(r = h), (n = h.return);
										try {
											(t = r),
												(g.props = t.memoizedProps),
												(g.state = t.memoizedState),
												g.componentWillUnmount();
										} catch (x) {
											ke(r, n, x);
										}
									}
									break;
								case 5:
									xr(h, h.return);
									break;
								case 22:
									if (h.memoizedState !== null) {
										ud(p);
										continue;
									}
							}
							v !== null ? ((v.return = h), (W = v)) : ud(p);
						}
						d = d.sibling;
					}
				e: for (d = null, p = e; ; ) {
					if (p.tag === 5) {
						if (d === null) {
							d = p;
							try {
								(i = p.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == "function"
												? o.setProperty("display", "none", "important")
												: (o.display = "none"))
										: ((a = p.stateNode),
										  (s = p.memoizedProps.style),
										  (l =
												s != null && s.hasOwnProperty("display")
													? s.display
													: null),
										  (a.style.display = Bp("display", l)));
							} catch (x) {
								ke(e, e.return, x);
							}
						}
					} else if (p.tag === 6) {
						if (d === null)
							try {
								p.stateNode.nodeValue = u ? "" : p.memoizedProps;
							} catch (x) {
								ke(e, e.return, x);
							}
					} else if (
						((p.tag !== 22 && p.tag !== 23) ||
							p.memoizedState === null ||
							p === e) &&
						p.child !== null
					) {
						(p.child.return = p), (p = p.child);
						continue;
					}
					if (p === e) break e;
					for (; p.sibling === null; ) {
						if (p.return === null || p.return === e) break e;
						d === p && (d = null), (p = p.return);
					}
					d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
				}
			}
			break;
		case 19:
			jt(t, e), Lt(e), r & 4 && ad(e);
			break;
		case 21:
			break;
		default:
			jt(t, e), Lt(e);
	}
}
function Lt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (yv(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(F(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Ci(i, ""), (r.flags &= -33));
					var o = ld(e);
					gu(e, o, i);
					break;
				case 3:
				case 4:
					var l = r.stateNode.containerInfo,
						a = ld(e);
					yu(e, a, l);
					break;
				default:
					throw Error(F(161));
			}
		} catch (s) {
			ke(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function t0(e, t, n) {
	(W = e), xv(e);
}
function xv(e, t, n) {
	for (var r = (e.mode & 1) !== 0; W !== null; ) {
		var i = W,
			o = i.child;
		if (i.tag === 22 && r) {
			var l = i.memoizedState !== null || Eo;
			if (!l) {
				var a = i.alternate,
					s = (a !== null && a.memoizedState !== null) || Be;
				a = Eo;
				var u = Be;
				if (((Eo = l), (Be = s) && !u))
					for (W = i; W !== null; )
						(l = W),
							(s = l.child),
							l.tag === 22 && l.memoizedState !== null
								? cd(i)
								: s !== null
								? ((s.return = l), (W = s))
								: cd(i);
				for (; o !== null; ) (W = o), xv(o), (o = o.sibling);
				(W = i), (Eo = a), (Be = u);
			}
			sd(e);
		} else
			i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (W = o)) : sd(e);
	}
}
function sd(e) {
	for (; W !== null; ) {
		var t = W;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Be || Jl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !Be)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Nt(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && qf(t, o, r);
							break;
						case 3:
							var l = t.updateQueue;
							if (l !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								qf(t, l, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var s = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										s.autoFocus && n.focus();
										break;
									case "img":
										s.src && (n.src = s.src);
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
								var u = t.alternate;
								if (u !== null) {
									var d = u.memoizedState;
									if (d !== null) {
										var p = d.dehydrated;
										p !== null && Ti(p);
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
							throw Error(F(163));
					}
				Be || (t.flags & 512 && mu(t));
			} catch (h) {
				ke(t, t.return, h);
			}
		}
		if (t === e) {
			W = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (W = n);
			break;
		}
		W = t.return;
	}
}
function ud(e) {
	for (; W !== null; ) {
		var t = W;
		if (t === e) {
			W = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (W = n);
			break;
		}
		W = t.return;
	}
}
function cd(e) {
	for (; W !== null; ) {
		var t = W;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Jl(4, t);
					} catch (s) {
						ke(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							ke(t, i, s);
						}
					}
					var o = t.return;
					try {
						mu(t);
					} catch (s) {
						ke(t, o, s);
					}
					break;
				case 5:
					var l = t.return;
					try {
						mu(t);
					} catch (s) {
						ke(t, l, s);
					}
			}
		} catch (s) {
			ke(t, t.return, s);
		}
		if (t === e) {
			W = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (W = a);
			break;
		}
		W = t.return;
	}
}
var n0 = Math.ceil,
	hl = rn.ReactCurrentDispatcher,
	Sc = rn.ReactCurrentOwner,
	wt = rn.ReactCurrentBatchConfig,
	ie = 0,
	Ae = null,
	Pe = null,
	Fe = 0,
	lt = 0,
	Sr = Dn(0),
	Re = 0,
	Fi = null,
	tr = 0,
	Zl = 0,
	kc = 0,
	mi = null,
	Ze = null,
	Ec = 0,
	Dr = 1 / 0,
	Kt = null,
	vl = !1,
	wu = null,
	En = null,
	Co = !1,
	pn = null,
	ml = 0,
	yi = 0,
	xu = null,
	Uo = -1,
	Vo = 0;
function Ge() {
	return ie & 6 ? Ne() : Uo !== -1 ? Uo : (Uo = Ne());
}
function Cn(e) {
	return e.mode & 1
		? ie & 2 && Fe !== 0
			? Fe & -Fe
			: Fg.transition !== null
			? (Vo === 0 && (Vo = rh()), Vo)
			: ((e = se),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ch(e.type))),
			  e)
		: 1;
}
function bt(e, t, n, r) {
	if (50 < yi) throw ((yi = 0), (xu = null), Error(F(185)));
	Yi(e, n, r),
		(!(ie & 2) || e !== Ae) &&
			(e === Ae && (!(ie & 2) && (Zl |= n), Re === 4 && cn(e, Fe)),
			it(e, r),
			n === 1 && ie === 0 && !(t.mode & 1) && ((Dr = Ne() + 500), Gl && Ln()));
}
function it(e, t) {
	var n = e.callbackNode;
	Fy(e, t);
	var r = Zo(e, e === Ae ? Fe : 0);
	if (r === 0)
		n !== null && wf(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && wf(n), t === 1))
			e.tag === 0 ? $g(fd.bind(null, e)) : Oh(fd.bind(null, e)),
				Ag(function () {
					!(ie & 6) && Ln();
				}),
				(n = null);
		else {
			switch (ih(r)) {
				case 1:
					n = Gu;
					break;
				case 4:
					n = th;
					break;
				case 16:
					n = Jo;
					break;
				case 536870912:
					n = nh;
					break;
				default:
					n = Jo;
			}
			n = Tv(n, Sv.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Sv(e, t) {
	if (((Uo = -1), (Vo = 0), ie & 6)) throw Error(F(327));
	var n = e.callbackNode;
	if (Tr() && e.callbackNode !== n) return null;
	var r = Zo(e, e === Ae ? Fe : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
	else {
		t = r;
		var i = ie;
		ie |= 2;
		var o = Ev();
		(Ae !== e || Fe !== t) && ((Kt = null), (Dr = Ne() + 500), Yn(e, t));
		do
			try {
				o0();
				break;
			} catch (a) {
				kv(e, a);
			}
		while (1);
		sc(),
			(hl.current = o),
			(ie = i),
			Pe !== null ? (t = 0) : ((Ae = null), (Fe = 0), (t = Re));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = Hs(e)), i !== 0 && ((r = i), (t = Su(e, i)))), t === 1)
		)
			throw ((n = Fi), Yn(e, 0), cn(e, r), it(e, Ne()), n);
		if (t === 6) cn(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!r0(i) &&
					((t = yl(e, r)),
					t === 2 && ((o = Hs(e)), o !== 0 && ((r = o), (t = Su(e, o)))),
					t === 1))
			)
				throw ((n = Fi), Yn(e, 0), cn(e, r), it(e, Ne()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(F(345));
				case 2:
					zn(e, Ze, Kt);
					break;
				case 3:
					if (
						(cn(e, r), (r & 130023424) === r && ((t = Ec + 500 - Ne()), 10 < t))
					) {
						if (Zo(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							Ge(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = tu(zn.bind(null, e, Ze, Kt), t);
						break;
					}
					zn(e, Ze, Kt);
					break;
				case 4:
					if ((cn(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var l = 31 - _t(r);
						(o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
					}
					if (
						((r = i),
						(r = Ne() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * n0(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = tu(zn.bind(null, e, Ze, Kt), r);
						break;
					}
					zn(e, Ze, Kt);
					break;
				case 5:
					zn(e, Ze, Kt);
					break;
				default:
					throw Error(F(329));
			}
		}
	}
	return it(e, Ne()), e.callbackNode === n ? Sv.bind(null, e) : null;
}
function Su(e, t) {
	var n = mi;
	return (
		e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256),
		(e = yl(e, t)),
		e !== 2 && ((t = Ze), (Ze = n), t !== null && ku(t)),
		e
	);
}
function ku(e) {
	Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
}
function r0(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!It(o(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function cn(e, t) {
	for (
		t &= ~kc,
			t &= ~Zl,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - _t(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function fd(e) {
	if (ie & 6) throw Error(F(327));
	Tr();
	var t = Zo(e, 0);
	if (!(t & 1)) return it(e, Ne()), null;
	var n = yl(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Hs(e);
		r !== 0 && ((t = r), (n = Su(e, r)));
	}
	if (n === 1) throw ((n = Fi), Yn(e, 0), cn(e, t), it(e, Ne()), n);
	if (n === 6) throw Error(F(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		zn(e, Ze, Kt),
		it(e, Ne()),
		null
	);
}
function Cc(e, t) {
	var n = ie;
	ie |= 1;
	try {
		return e(t);
	} finally {
		(ie = n), ie === 0 && ((Dr = Ne() + 500), Gl && Ln());
	}
}
function nr(e) {
	pn !== null && pn.tag === 0 && !(ie & 6) && Tr();
	var t = ie;
	ie |= 1;
	var n = wt.transition,
		r = se;
	try {
		if (((wt.transition = null), (se = 1), e)) return e();
	} finally {
		(se = r), (wt.transition = n), (ie = t), !(ie & 6) && Ln();
	}
}
function jc() {
	(lt = Sr.current), ve(Sr);
}
function Yn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Ig(n)), Pe !== null))
		for (n = Pe.return; n !== null; ) {
			var r = n;
			switch ((oc(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && il();
					break;
				case 3:
					Ar(), ve(nt), ve(qe), hc();
					break;
				case 5:
					pc(r);
					break;
				case 4:
					Ar();
					break;
				case 13:
					ve(ge);
					break;
				case 19:
					ve(ge);
					break;
				case 10:
					uc(r.type._context);
					break;
				case 22:
				case 23:
					jc();
			}
			n = n.return;
		}
	if (
		((Ae = e),
		(Pe = e = jn(e.current, null)),
		(Fe = lt = t),
		(Re = 0),
		(Fi = null),
		(kc = Zl = tr = 0),
		(Ze = mi = null),
		Wn !== null)
	) {
		for (t = 0; t < Wn.length; t++)
			if (((n = Wn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var l = o.next;
					(o.next = i), (r.next = l);
				}
				n.pending = r;
			}
		Wn = null;
	}
	return e;
}
function kv(e, t) {
	do {
		var n = Pe;
		try {
			if ((sc(), ($o.current = pl), dl)) {
				for (var r = we.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				dl = !1;
			}
			if (
				((er = 0),
				(Ie = Oe = we = null),
				(hi = !1),
				(Di = 0),
				(Sc.current = null),
				n === null || n.return === null)
			) {
				(Re = 1), (Fi = t), (Pe = null);
				break;
			}
			e: {
				var o = e,
					l = n.return,
					a = n,
					s = t;
				if (
					((t = Fe),
					(a.flags |= 32768),
					s !== null && typeof s == "object" && typeof s.then == "function")
				) {
					var u = s,
						d = a,
						p = d.tag;
					if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
						var h = d.alternate;
						h
							? ((d.updateQueue = h.updateQueue),
							  (d.memoizedState = h.memoizedState),
							  (d.lanes = h.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null));
					}
					var v = Jf(l);
					if (v !== null) {
						(v.flags &= -257),
							Zf(v, l, a, o, t),
							v.mode & 1 && Xf(o, u, t),
							(t = v),
							(s = u);
						var g = t.updateQueue;
						if (g === null) {
							var x = new Set();
							x.add(s), (t.updateQueue = x);
						} else g.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							Xf(o, u, t), Nc();
							break e;
						}
						s = Error(F(426));
					}
				} else if (ye && a.mode & 1) {
					var k = Jf(l);
					if (k !== null) {
						!(k.flags & 65536) && (k.flags |= 256),
							Zf(k, l, a, o, t),
							lc(Mr(s, a));
						break e;
					}
				}
				(o = s = Mr(s, a)),
					Re !== 4 && (Re = 2),
					mi === null ? (mi = [o]) : mi.push(o),
					(o = l);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var y = ov(o, s, t);
							Bf(o, y);
							break e;
						case 1:
							a = s;
							var c = o.type,
								m = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof c.getDerivedStateFromError == "function" ||
									(m !== null &&
										typeof m.componentDidCatch == "function" &&
										(En === null || !En.has(m))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var w = lv(o, a, t);
								Bf(o, w);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			jv(n);
		} catch (S) {
			(t = S), Pe === n && n !== null && (Pe = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function Ev() {
	var e = hl.current;
	return (hl.current = pl), e === null ? pl : e;
}
function Nc() {
	(Re === 0 || Re === 3 || Re === 2) && (Re = 4),
		Ae === null || (!(tr & 268435455) && !(Zl & 268435455)) || cn(Ae, Fe);
}
function yl(e, t) {
	var n = ie;
	ie |= 2;
	var r = Ev();
	(Ae !== e || Fe !== t) && ((Kt = null), Yn(e, t));
	do
		try {
			i0();
			break;
		} catch (i) {
			kv(e, i);
		}
	while (1);
	if ((sc(), (ie = n), (hl.current = r), Pe !== null)) throw Error(F(261));
	return (Ae = null), (Fe = 0), Re;
}
function i0() {
	for (; Pe !== null; ) Cv(Pe);
}
function o0() {
	for (; Pe !== null && !Ry(); ) Cv(Pe);
}
function Cv(e) {
	var t = Pv(e.alternate, e, lt);
	(e.memoizedProps = e.pendingProps),
		t === null ? jv(e) : (Pe = t),
		(Sc.current = null);
}
function jv(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Jg(n, t)), n !== null)) {
				(n.flags &= 32767), (Pe = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Re = 6), (Pe = null);
				return;
			}
		} else if (((n = Xg(n, t, lt)), n !== null)) {
			Pe = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Pe = t;
			return;
		}
		Pe = t = e;
	} while (t !== null);
	Re === 0 && (Re = 5);
}
function zn(e, t, n) {
	var r = se,
		i = wt.transition;
	try {
		(wt.transition = null), (se = 1), l0(e, t, n, r);
	} finally {
		(wt.transition = i), (se = r);
	}
	return null;
}
function l0(e, t, n, r) {
	do Tr();
	while (pn !== null);
	if (ie & 6) throw Error(F(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(F(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(zy(e, o),
		e === Ae && ((Pe = Ae = null), (Fe = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Co ||
			((Co = !0),
			Tv(Jo, function () {
				return Tr(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = wt.transition), (wt.transition = null);
		var l = se;
		se = 1;
		var a = ie;
		(ie |= 4),
			(Sc.current = null),
			e0(e, n),
			wv(n, e),
			Ng(Zs),
			(el = !!Js),
			(Zs = Js = null),
			(e.current = n),
			t0(n),
			_y(),
			(ie = a),
			(se = l),
			(wt.transition = o);
	} else e.current = n;
	if (
		(Co && ((Co = !1), (pn = e), (ml = i)),
		(o = e.pendingLanes),
		o === 0 && (En = null),
		Ay(n.stateNode),
		it(e, Ne()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (vl) throw ((vl = !1), (e = wu), (wu = null), e);
	return (
		ml & 1 && e.tag !== 0 && Tr(),
		(o = e.pendingLanes),
		o & 1 ? (e === xu ? yi++ : ((yi = 0), (xu = e))) : (yi = 0),
		Ln(),
		null
	);
}
function Tr() {
	if (pn !== null) {
		var e = ih(ml),
			t = wt.transition,
			n = se;
		try {
			if (((wt.transition = null), (se = 16 > e ? 16 : e), pn === null))
				var r = !1;
			else {
				if (((e = pn), (pn = null), (ml = 0), ie & 6)) throw Error(F(331));
				var i = ie;
				for (ie |= 4, W = e.current; W !== null; ) {
					var o = W,
						l = o.child;
					if (W.flags & 16) {
						var a = o.deletions;
						if (a !== null) {
							for (var s = 0; s < a.length; s++) {
								var u = a[s];
								for (W = u; W !== null; ) {
									var d = W;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											vi(8, d, o);
									}
									var p = d.child;
									if (p !== null) (p.return = d), (W = p);
									else
										for (; W !== null; ) {
											d = W;
											var h = d.sibling,
												v = d.return;
											if ((mv(d), d === u)) {
												W = null;
												break;
											}
											if (h !== null) {
												(h.return = v), (W = h);
												break;
											}
											W = v;
										}
								}
							}
							var g = o.alternate;
							if (g !== null) {
								var x = g.child;
								if (x !== null) {
									g.child = null;
									do {
										var k = x.sibling;
										(x.sibling = null), (x = k);
									} while (x !== null);
								}
							}
							W = o;
						}
					}
					if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (W = l);
					else
						e: for (; W !== null; ) {
							if (((o = W), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										vi(9, o, o.return);
								}
							var y = o.sibling;
							if (y !== null) {
								(y.return = o.return), (W = y);
								break e;
							}
							W = o.return;
						}
				}
				var c = e.current;
				for (W = c; W !== null; ) {
					l = W;
					var m = l.child;
					if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (W = m);
					else
						e: for (l = c; W !== null; ) {
							if (((a = W), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											Jl(9, a);
									}
								} catch (S) {
									ke(a, a.return, S);
								}
							if (a === l) {
								W = null;
								break e;
							}
							var w = a.sibling;
							if (w !== null) {
								(w.return = a.return), (W = w);
								break e;
							}
							W = a.return;
						}
				}
				if (
					((ie = i), Ln(), Vt && typeof Vt.onPostCommitFiberRoot == "function")
				)
					try {
						Vt.onPostCommitFiberRoot(Bl, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(se = n), (wt.transition = t);
		}
	}
	return !1;
}
function dd(e, t, n) {
	(t = Mr(n, t)),
		(t = ov(e, t, 1)),
		(e = kn(e, t, 1)),
		(t = Ge()),
		e !== null && (Yi(e, 1, t), it(e, t));
}
function ke(e, t, n) {
	if (e.tag === 3) dd(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				dd(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(En === null || !En.has(r)))
				) {
					(e = Mr(n, e)),
						(e = lv(t, e, 1)),
						(t = kn(t, e, 1)),
						(e = Ge()),
						t !== null && (Yi(t, 1, e), it(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function a0(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Ge()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Ae === e &&
			(Fe & n) === n &&
			(Re === 4 || (Re === 3 && (Fe & 130023424) === Fe && 500 > Ne() - Ec)
				? Yn(e, 0)
				: (kc |= n)),
		it(e, t);
}
function Nv(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = ho), (ho <<= 1), !(ho & 130023424) && (ho = 4194304))
			: (t = 1));
	var n = Ge();
	(e = tn(e, t)), e !== null && (Yi(e, t, n), it(e, n));
}
function s0(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Nv(e, n);
}
function u0(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(F(314));
	}
	r !== null && r.delete(t), Nv(e, n);
}
var Pv;
Pv = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || nt.current) et = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), Yg(e, t, n);
			et = !!(e.flags & 131072);
		}
	else (et = !1), ye && t.flags & 1048576 && Rh(t, al, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			zo(e, t), (e = t.pendingProps);
			var i = _r(t, qe.current);
			Pr(t, n), (i = mc(null, t, r, e, i, n));
			var o = yc();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  rt(r) ? ((o = !0), ol(t)) : (o = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  fc(t),
					  (i.updater = Yl),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  su(t, r, e, n),
					  (t = fu(null, t, r, !0, o, n)))
					: ((t.tag = 0), ye && o && ic(t), He(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(zo(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = f0(r)),
					(e = Nt(r, e)),
					i)
				) {
					case 0:
						t = cu(null, t, r, e, n);
						break e;
					case 1:
						t = nd(null, t, r, e, n);
						break e;
					case 11:
						t = ed(null, t, r, e, n);
						break e;
					case 14:
						t = td(null, t, r, Nt(r.type, e), n);
						break e;
				}
				throw Error(F(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Nt(r, i)),
				cu(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Nt(r, i)),
				nd(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((cv(t), e === null)) throw Error(F(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					Ah(e, t),
					cl(t, r, null, n);
				var l = t.memoizedState;
				if (((r = l.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: l.cache,
							pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
							transitions: l.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(i = Mr(Error(F(423)), t)), (t = rd(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = Mr(Error(F(424)), t)), (t = rd(e, t, r, n, i));
						break e;
					} else
						for (
							at = Sn(t.stateNode.containerInfo.firstChild),
								st = t,
								ye = !0,
								Ot = null,
								n = $h(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((br(), r === i)) {
						t = nn(e, t, n);
						break e;
					}
					He(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Fh(t),
				e === null && ou(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(l = i.children),
				eu(r, i) ? (l = null) : o !== null && eu(r, o) && (t.flags |= 32),
				uv(e, t),
				He(e, t, l, n),
				t.child
			);
		case 6:
			return e === null && ou(t), null;
		case 13:
			return fv(e, t, n);
		case 4:
			return (
				dc(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Ir(t, null, r, n)) : He(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Nt(r, i)),
				ed(e, t, r, i, n)
			);
		case 7:
			return He(e, t, t.pendingProps, n), t.child;
		case 8:
			return He(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return He(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(l = i.value),
					de(sl, r._currentValue),
					(r._currentValue = l),
					o !== null)
				)
					if (It(o.value, l)) {
						if (o.children === i.children && !nt.current) {
							t = nn(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var a = o.dependencies;
							if (a !== null) {
								l = o.child;
								for (var s = a.firstContext; s !== null; ) {
									if (s.context === r) {
										if (o.tag === 1) {
											(s = Jt(-1, n & -n)), (s.tag = 2);
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var d = u.pending;
												d === null
													? (s.next = s)
													: ((s.next = d.next), (d.next = s)),
													(u.pending = s);
											}
										}
										(o.lanes |= n),
											(s = o.alternate),
											s !== null && (s.lanes |= n),
											lu(o.return, n, t),
											(a.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (o.tag === 10) l = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((l = o.return), l === null)) throw Error(F(341));
								(l.lanes |= n),
									(a = l.alternate),
									a !== null && (a.lanes |= n),
									lu(l, n, t),
									(l = o.sibling);
							} else l = o.child;
							if (l !== null) l.return = o;
							else
								for (l = o; l !== null; ) {
									if (l === t) {
										l = null;
										break;
									}
									if (((o = l.sibling), o !== null)) {
										(o.return = l.return), (l = o);
										break;
									}
									l = l.return;
								}
							o = l;
						}
				He(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				Pr(t, n),
				(i = xt(i)),
				(r = r(i)),
				(t.flags |= 1),
				He(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = Nt(r, t.pendingProps)),
				(i = Nt(r.type, i)),
				td(e, t, r, i, n)
			);
		case 15:
			return av(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Nt(r, i)),
				zo(e, t),
				(t.tag = 1),
				rt(r) ? ((e = !0), ol(t)) : (e = !1),
				Pr(t, n),
				Dh(t, r, i),
				su(t, r, i, n),
				fu(null, t, r, !0, e, n)
			);
		case 19:
			return dv(e, t, n);
		case 22:
			return sv(e, t, n);
	}
	throw Error(F(156, t.tag));
};
function Tv(e, t) {
	return eh(e, t);
}
function c0(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function gt(e, t, n, r) {
	return new c0(e, t, n, r);
}
function Pc(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function f0(e) {
	if (typeof e == "function") return Pc(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Wu)) return 11;
		if (e === Hu) return 14;
	}
	return 2;
}
function jn(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = gt(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Qo(e, t, n, r, i, o) {
	var l = 2;
	if (((r = e), typeof e == "function")) Pc(e) && (l = 1);
	else if (typeof e == "string") l = 5;
	else
		e: switch (e) {
			case fr:
				return Xn(n.children, i, o, t);
			case qu:
				(l = 8), (i |= 8);
				break;
			case bs:
				return (
					(e = gt(12, n, t, i | 2)), (e.elementType = bs), (e.lanes = o), e
				);
			case Is:
				return (e = gt(13, n, t, i)), (e.elementType = Is), (e.lanes = o), e;
			case As:
				return (e = gt(19, n, t, i)), (e.elementType = As), (e.lanes = o), e;
			case Lp:
				return ea(n, i, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case Mp:
							l = 10;
							break e;
						case Dp:
							l = 9;
							break e;
						case Wu:
							l = 11;
							break e;
						case Hu:
							l = 14;
							break e;
						case an:
							(l = 16), (r = null);
							break e;
					}
				throw Error(F(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = gt(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	);
}
function Xn(e, t, n, r) {
	return (e = gt(7, e, r, t)), (e.lanes = n), e;
}
function ea(e, t, n, r) {
	return (
		(e = gt(22, e, r, t)),
		(e.elementType = Lp),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function ls(e, t, n) {
	return (e = gt(6, e, null, t)), (e.lanes = n), e;
}
function as(e, t, n) {
	return (
		(t = gt(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function d0(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Ua(0)),
		(this.expirationTimes = Ua(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Ua(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function Tc(e, t, n, r, i, o, l, a, s) {
	return (
		(e = new d0(e, t, n, a, s)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = gt(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		fc(o),
		e
	);
}
function p0(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: cr,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function Ov(e) {
	if (!e) return Rn;
	e = e._reactInternals;
	e: {
		if (or(e) !== e || e.tag !== 1) throw Error(F(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (rt(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(F(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (rt(n)) return Th(e, n, t);
	}
	return t;
}
function Rv(e, t, n, r, i, o, l, a, s) {
	return (
		(e = Tc(n, r, !0, e, i, o, l, a, s)),
		(e.context = Ov(null)),
		(n = e.current),
		(r = Ge()),
		(i = Cn(n)),
		(o = Jt(r, i)),
		(o.callback = t ?? null),
		kn(n, o, i),
		(e.current.lanes = i),
		Yi(e, i, r),
		it(e, r),
		e
	);
}
function ta(e, t, n, r) {
	var i = t.current,
		o = Ge(),
		l = Cn(i);
	return (
		(n = Ov(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Jt(o, l)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = kn(i, t, l)),
		e !== null && (bt(e, i, l, o), Lo(e, i, l)),
		l
	);
}
function gl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function pd(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Oc(e, t) {
	pd(e, t), (e = e.alternate) && pd(e, t);
}
function h0() {
	return null;
}
var _v =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function Rc(e) {
	this._internalRoot = e;
}
na.prototype.render = Rc.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(F(409));
	ta(e, t, null, null);
};
na.prototype.unmount = Rc.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		nr(function () {
			ta(null, e, null, null);
		}),
			(t[en] = null);
	}
};
function na(e) {
	this._internalRoot = e;
}
na.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = ah();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
		un.splice(n, 0, e), n === 0 && uh(e);
	}
};
function _c(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ra(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function hd() {}
function v0(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r;
			r = function () {
				var u = gl(l);
				o.call(u);
			};
		}
		var l = Rv(t, r, e, 0, null, !1, !1, "", hd);
		return (
			(e._reactRootContainer = l),
			(e[en] = l.current),
			_i(e.nodeType === 8 ? e.parentNode : e),
			nr(),
			l
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var a = r;
		r = function () {
			var u = gl(s);
			a.call(u);
		};
	}
	var s = Tc(e, 0, !1, null, null, !1, !1, "", hd);
	return (
		(e._reactRootContainer = s),
		(e[en] = s.current),
		_i(e.nodeType === 8 ? e.parentNode : e),
		nr(function () {
			ta(t, s, n, r);
		}),
		s
	);
}
function ia(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var l = o;
		if (typeof i == "function") {
			var a = i;
			i = function () {
				var s = gl(l);
				a.call(s);
			};
		}
		ta(t, l, e, i);
	} else l = v0(n, t, e, i, r);
	return gl(l);
}
oh = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = ii(t.pendingLanes);
				n !== 0 &&
					(Yu(t, n | 1), it(t, Ne()), !(ie & 6) && ((Dr = Ne() + 500), Ln()));
			}
			break;
		case 13:
			nr(function () {
				var r = tn(e, 1);
				if (r !== null) {
					var i = Ge();
					bt(r, e, 1, i);
				}
			}),
				Oc(e, 1);
	}
};
Xu = function (e) {
	if (e.tag === 13) {
		var t = tn(e, 134217728);
		if (t !== null) {
			var n = Ge();
			bt(t, e, 134217728, n);
		}
		Oc(e, 134217728);
	}
};
lh = function (e) {
	if (e.tag === 13) {
		var t = Cn(e),
			n = tn(e, t);
		if (n !== null) {
			var r = Ge();
			bt(n, e, t, r);
		}
		Oc(e, t);
	}
};
ah = function () {
	return se;
};
sh = function (e, t) {
	var n = se;
	try {
		return (se = e), t();
	} finally {
		se = n;
	}
};
Bs = function (e, t, n) {
	switch (t) {
		case "input":
			if ((Ls(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = Kl(r);
						if (!i) throw Error(F(90));
						Fp(r), Ls(r, i);
					}
				}
			}
			break;
		case "textarea":
			Up(e, n);
			break;
		case "select":
			(t = n.value), t != null && Er(e, !!n.multiple, t, !1);
	}
};
Kp = Cc;
Gp = nr;
var m0 = { usingClientEntryPoint: !1, Events: [Ji, vr, Kl, Wp, Hp, Cc] },
	Zr = {
		findFiberByHostInstance: qn,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	y0 = {
		bundleType: Zr.bundleType,
		version: Zr.version,
		rendererPackageName: Zr.rendererPackageName,
		rendererConfig: Zr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: rn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Jp(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Zr.findFiberByHostInstance || h0,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!jo.isDisabled && jo.supportsFiber)
		try {
			(Bl = jo.inject(y0)), (Vt = jo);
		} catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m0;
ft.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!_c(t)) throw Error(F(200));
	return p0(e, t, null, n);
};
ft.createRoot = function (e, t) {
	if (!_c(e)) throw Error(F(299));
	var n = !1,
		r = "",
		i = _v;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = Tc(e, 1, !1, null, null, n, !1, r, i)),
		(e[en] = t.current),
		_i(e.nodeType === 8 ? e.parentNode : e),
		new Rc(t)
	);
};
ft.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(F(188))
			: ((e = Object.keys(e).join(",")), Error(F(268, e)));
	return (e = Jp(t)), (e = e === null ? null : e.stateNode), e;
};
ft.flushSync = function (e) {
	return nr(e);
};
ft.hydrate = function (e, t, n) {
	if (!ra(t)) throw Error(F(200));
	return ia(null, e, t, !0, n);
};
ft.hydrateRoot = function (e, t, n) {
	if (!_c(e)) throw Error(F(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = "",
		l = _v;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
		(t = Rv(t, null, e, 1, n ?? null, i, !1, o, l)),
		(e[en] = t.current),
		_i(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new na(t);
};
ft.render = function (e, t, n) {
	if (!ra(t)) throw Error(F(200));
	return ia(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function (e) {
	if (!ra(e)) throw Error(F(40));
	return e._reactRootContainer
		? (nr(function () {
				ia(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[en] = null);
				});
		  }),
		  !0)
		: !1;
};
ft.unstable_batchedUpdates = Cc;
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!ra(n)) throw Error(F(200));
	if (e == null || e._reactInternals === void 0) throw Error(F(38));
	return ia(e, t, n, !1, r);
};
ft.version = "18.2.0-next-9e3b772b8-20220608";
function bv() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv);
		} catch (e) {
			console.error(e);
		}
}
bv(), (Rp.exports = ft);
var bc = Rp.exports,
	vd = bc;
(Rs.createRoot = vd.createRoot), (Rs.hydrateRoot = vd.hydrateRoot);
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zi() {
	return (
		(zi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		zi.apply(this, arguments)
	);
}
var hn;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(hn || (hn = {}));
const md = "popstate";
function g0(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: o, search: l, hash: a } = r.location;
		return Eu(
			"",
			{ pathname: o, search: l, hash: a },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default"
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : wl(i);
	}
	return x0(t, n, null, e);
}
function Te(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ic(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function w0() {
	return Math.random().toString(36).substr(2, 8);
}
function yd(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Eu(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		zi(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? Vr(t) : t,
			{ state: n, key: (t && t.key) || r || w0() }
		)
	);
}
function wl(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function Vr(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf("?");
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function x0(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		l = i.history,
		a = hn.Pop,
		s = null,
		u = d();
	u == null && ((u = 0), l.replaceState(zi({}, l.state, { idx: u }), ""));
	function d() {
		return (l.state || { idx: null }).idx;
	}
	function p() {
		a = hn.Pop;
		let k = d(),
			y = k == null ? null : k - u;
		(u = k), s && s({ action: a, location: x.location, delta: y });
	}
	function h(k, y) {
		a = hn.Push;
		let c = Eu(x.location, k, y);
		n && n(c, k), (u = d() + 1);
		let m = yd(c, u),
			w = x.createHref(c);
		try {
			l.pushState(m, "", w);
		} catch (S) {
			if (S instanceof DOMException && S.name === "DataCloneError") throw S;
			i.location.assign(w);
		}
		o && s && s({ action: a, location: x.location, delta: 1 });
	}
	function v(k, y) {
		a = hn.Replace;
		let c = Eu(x.location, k, y);
		n && n(c, k), (u = d());
		let m = yd(c, u),
			w = x.createHref(c);
		l.replaceState(m, "", w),
			o && s && s({ action: a, location: x.location, delta: 0 });
	}
	function g(k) {
		let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
			c = typeof k == "string" ? k : wl(k);
		return (
			Te(
				y,
				"No window.location.(origin|href) available to create URL for href: " +
					c
			),
			new URL(c, y)
		);
	}
	let x = {
		get action() {
			return a;
		},
		get location() {
			return e(i, l);
		},
		listen(k) {
			if (s) throw new Error("A history only accepts one active listener");
			return (
				i.addEventListener(md, p),
				(s = k),
				() => {
					i.removeEventListener(md, p), (s = null);
				}
			);
		},
		createHref(k) {
			return t(i, k);
		},
		createURL: g,
		encodeLocation(k) {
			let y = g(k);
			return { pathname: y.pathname, search: y.search, hash: y.hash };
		},
		push: h,
		replace: v,
		go(k) {
			return l.go(k);
		},
	};
	return x;
}
var gd;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(gd || (gd = {}));
function S0(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? Vr(t) : t,
		i = Ac(r.pathname || "/", n);
	if (i == null) return null;
	let o = Iv(e);
	k0(o);
	let l = null;
	for (let a = 0; l == null && a < o.length; ++a) l = _0(o[a], A0(i));
	return l;
}
function Iv(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let i = (o, l, a) => {
		let s = {
			relativePath: a === void 0 ? o.path || "" : a,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: l,
			route: o,
		};
		s.relativePath.startsWith("/") &&
			(Te(
				s.relativePath.startsWith(r),
				'Absolute route path "' +
					s.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes."
			),
			(s.relativePath = s.relativePath.slice(r.length)));
		let u = Nn([r, s.relativePath]),
			d = n.concat(s);
		o.children &&
			o.children.length > 0 &&
			(Te(
				o.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".')
			),
			Iv(o.children, t, d, u)),
			!(o.path == null && !o.index) &&
				t.push({ path: u, score: O0(u, o.index), routesMeta: d });
	};
	return (
		e.forEach((o, l) => {
			var a;
			if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
			else for (let s of Av(o.path)) i(o, l, s);
		}),
		t
	);
}
function Av(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith("?"),
		o = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [o, ""] : [o];
	let l = Av(r.join("/")),
		a = [];
	return (
		a.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
		i && a.push(...l),
		a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
	);
}
function k0(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: R0(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const E0 = /^:\w+$/,
	C0 = 3,
	j0 = 2,
	N0 = 1,
	P0 = 10,
	T0 = -2,
	wd = (e) => e === "*";
function O0(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(wd) && (r += T0),
		t && (r += j0),
		n
			.filter((i) => !wd(i))
			.reduce((i, o) => i + (E0.test(o) ? C0 : o === "" ? N0 : P0), r)
	);
}
function R0(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function _0(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = "/",
		o = [];
	for (let l = 0; l < n.length; ++l) {
		let a = n[l],
			s = l === n.length - 1,
			u = i === "/" ? t : t.slice(i.length) || "/",
			d = b0(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
				u
			);
		if (!d) return null;
		Object.assign(r, d.params);
		let p = a.route;
		o.push({
			params: r,
			pathname: Nn([i, d.pathname]),
			pathnameBase: $0(Nn([i, d.pathnameBase])),
			route: p,
		}),
			d.pathnameBase !== "/" && (i = Nn([i, d.pathnameBase]));
	}
	return o;
}
function b0(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = I0(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let o = i[0],
		l = o.replace(/(.)\/+$/, "$1"),
		a = i.slice(1);
	return {
		params: r.reduce((u, d, p) => {
			if (d === "*") {
				let h = a[p] || "";
				l = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
			}
			return (u[d] = M0(a[p] || "", d)), u;
		}, {}),
		pathname: o,
		pathnameBase: l,
		pattern: e,
	};
}
function I0(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Ic(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
		);
	let r = [],
		i =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
				.replace(/\/:(\w+)/g, (l, a) => (r.push(a), "/([^\\/]+)"));
	return (
		e.endsWith("*")
			? (r.push("*"),
			  (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			? (i += "\\/*$")
			: e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
		[new RegExp(i, t ? void 0 : "i"), r]
	);
}
function A0(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			Ic(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + t + ").")
			),
			e
		);
	}
}
function M0(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			Ic(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' +
						e +
						'" is a malformed URL segment. This is probably') +
					(" due to a bad percent encoding (" + n + ").")
			),
			e
		);
	}
}
function Ac(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function D0(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = "",
	} = typeof e == "string" ? Vr(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : L0(n, t)) : t,
		search: F0(r),
		hash: z0(i),
	};
}
function L0(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((i) => {
			i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function ss(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		("`to." +
			t +
			"` field [" +
			JSON.stringify(r) +
			"].  Please separate it out to the ") +
		("`to." + n + "` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function Mv(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function Dv(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string"
		? (i = Vr(e))
		: ((i = zi({}, e)),
		  Te(
				!i.pathname || !i.pathname.includes("?"),
				ss("?", "pathname", "search", i)
		  ),
		  Te(
				!i.pathname || !i.pathname.includes("#"),
				ss("#", "pathname", "hash", i)
		  ),
		  Te(!i.search || !i.search.includes("#"), ss("#", "search", "hash", i)));
	let o = e === "" || i.pathname === "",
		l = o ? "/" : i.pathname,
		a;
	if (r || l == null) a = n;
	else {
		let p = t.length - 1;
		if (l.startsWith("..")) {
			let h = l.split("/");
			for (; h[0] === ".."; ) h.shift(), (p -= 1);
			i.pathname = h.join("/");
		}
		a = p >= 0 ? t[p] : "/";
	}
	let s = D0(i, a),
		u = l && l !== "/" && l.endsWith("/"),
		d = (o || l === ".") && n.endsWith("/");
	return !s.pathname.endsWith("/") && (u || d) && (s.pathname += "/"), s;
}
const Nn = (e) => e.join("/").replace(/\/\/+/g, "/"),
	$0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	F0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	z0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function U0(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const Lv = ["post", "put", "patch", "delete"];
new Set(Lv);
const V0 = ["get", ...Lv];
new Set(V0);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xl() {
	return (
		(xl = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		xl.apply(this, arguments)
	);
}
const Mc = O.createContext(null),
	Q0 = O.createContext(null),
	Qr = O.createContext(null),
	oa = O.createContext(null),
	$n = O.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	$v = O.createContext(null);
function B0(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	eo() || Te(!1);
	let { basename: r, navigator: i } = O.useContext(Qr),
		{ hash: o, pathname: l, search: a } = zv(e, { relative: n }),
		s = l;
	return (
		r !== "/" && (s = l === "/" ? r : Nn([r, l])),
		i.createHref({ pathname: s, search: a, hash: o })
	);
}
function eo() {
	return O.useContext(oa) != null;
}
function Br() {
	return eo() || Te(!1), O.useContext(oa).location;
}
function Fv(e) {
	O.useContext(Qr).static || O.useLayoutEffect(e);
}
function to() {
	let { isDataRoute: e } = O.useContext($n);
	return e ? o1() : q0();
}
function q0() {
	eo() || Te(!1);
	let e = O.useContext(Mc),
		{ basename: t, navigator: n } = O.useContext(Qr),
		{ matches: r } = O.useContext($n),
		{ pathname: i } = Br(),
		o = JSON.stringify(Mv(r).map((s) => s.pathnameBase)),
		l = O.useRef(!1);
	return (
		Fv(() => {
			l.current = !0;
		}),
		O.useCallback(
			function (s, u) {
				if ((u === void 0 && (u = {}), !l.current)) return;
				if (typeof s == "number") {
					n.go(s);
					return;
				}
				let d = Dv(s, JSON.parse(o), i, u.relative === "path");
				e == null &&
					t !== "/" &&
					(d.pathname = d.pathname === "/" ? t : Nn([t, d.pathname])),
					(u.replace ? n.replace : n.push)(d, u.state, u);
			},
			[t, n, o, i, e]
		)
	);
}
const W0 = O.createContext(null);
function H0(e) {
	let t = O.useContext($n).outlet;
	return t && O.createElement(W0.Provider, { value: e }, t);
}
function zv(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ matches: r } = O.useContext($n),
		{ pathname: i } = Br(),
		o = JSON.stringify(Mv(r).map((l) => l.pathnameBase));
	return O.useMemo(() => Dv(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function K0(e, t) {
	return G0(e, t);
}
function G0(e, t, n) {
	eo() || Te(!1);
	let { navigator: r } = O.useContext(Qr),
		{ matches: i } = O.useContext($n),
		o = i[i.length - 1],
		l = o ? o.params : {};
	o && o.pathname;
	let a = o ? o.pathnameBase : "/";
	o && o.route;
	let s = Br(),
		u;
	if (t) {
		var d;
		let x = typeof t == "string" ? Vr(t) : t;
		a === "/" || ((d = x.pathname) != null && d.startsWith(a)) || Te(!1),
			(u = x);
	} else u = s;
	let p = u.pathname || "/",
		h = a === "/" ? p : p.slice(a.length) || "/",
		v = S0(e, { pathname: h }),
		g = e1(
			v &&
				v.map((x) =>
					Object.assign({}, x, {
						params: Object.assign({}, l, x.params),
						pathname: Nn([
							a,
							r.encodeLocation
								? r.encodeLocation(x.pathname).pathname
								: x.pathname,
						]),
						pathnameBase:
							x.pathnameBase === "/"
								? a
								: Nn([
										a,
										r.encodeLocation
											? r.encodeLocation(x.pathnameBase).pathname
											: x.pathnameBase,
								  ]),
					})
				),
			i,
			n
		);
	return t && g
		? O.createElement(
				oa.Provider,
				{
					value: {
						location: xl(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							u
						),
						navigationType: hn.Pop,
					},
				},
				g
		  )
		: g;
}
function Y0() {
	let e = i1(),
		t = U0(e)
			? e.status + " " + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
		o = null;
	return O.createElement(
		O.Fragment,
		null,
		O.createElement("h2", null, "Unexpected Application Error!"),
		O.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? O.createElement("pre", { style: i }, n) : null,
		o
	);
}
const X0 = O.createElement(Y0, null);
class J0 extends O.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== "idle" && t.revalidation === "idle")
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error || n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			"React Router caught the following error during render",
			t,
			n
		);
	}
	render() {
		return this.state.error
			? O.createElement(
					$n.Provider,
					{ value: this.props.routeContext },
					O.createElement($v.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function Z0(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = O.useContext(Mc);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		O.createElement($n.Provider, { value: t }, r)
	);
}
function e1(e, t, n) {
	var r;
	if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null;
	}
	let o = e,
		l = (r = n) == null ? void 0 : r.errors;
	if (l != null) {
		let a = o.findIndex(
			(s) => s.route.id && (l == null ? void 0 : l[s.route.id])
		);
		a >= 0 || Te(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
	}
	return o.reduceRight((a, s, u) => {
		let d = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
			p = null;
		n && (p = s.route.errorElement || X0);
		let h = t.concat(o.slice(0, u + 1)),
			v = () => {
				let g;
				return (
					d
						? (g = p)
						: s.route.Component
						? (g = O.createElement(s.route.Component, null))
						: s.route.element
						? (g = s.route.element)
						: (g = a),
					O.createElement(Z0, {
						match: s,
						routeContext: { outlet: a, matches: h, isDataRoute: n != null },
						children: g,
					})
				);
			};
		return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
			? O.createElement(J0, {
					location: n.location,
					revalidation: n.revalidation,
					component: p,
					error: d,
					children: v(),
					routeContext: { outlet: null, matches: h, isDataRoute: !0 },
			  })
			: v();
	}, null);
}
var Uv = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			e
		);
	})(Uv || {}),
	Sl = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseLoaderData = "useLoaderData"),
			(e.UseActionData = "useActionData"),
			(e.UseRouteError = "useRouteError"),
			(e.UseNavigation = "useNavigation"),
			(e.UseRouteLoaderData = "useRouteLoaderData"),
			(e.UseMatches = "useMatches"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			(e.UseRouteId = "useRouteId"),
			e
		);
	})(Sl || {});
function t1(e) {
	let t = O.useContext(Mc);
	return t || Te(!1), t;
}
function n1(e) {
	let t = O.useContext(Q0);
	return t || Te(!1), t;
}
function r1(e) {
	let t = O.useContext($n);
	return t || Te(!1), t;
}
function Vv(e) {
	let t = r1(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || Te(!1), n.route.id;
}
function i1() {
	var e;
	let t = O.useContext($v),
		n = n1(Sl.UseRouteError),
		r = Vv(Sl.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function o1() {
	let { router: e } = t1(Uv.UseNavigateStable),
		t = Vv(Sl.UseNavigateStable),
		n = O.useRef(!1);
	return (
		Fv(() => {
			n.current = !0;
		}),
		O.useCallback(
			function (i, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof i == "number"
							? e.navigate(i)
							: e.navigate(i, xl({ fromRouteId: t }, o)));
			},
			[e, t]
		)
	);
}
function l1(e) {
	return H0(e.context);
}
function Un(e) {
	Te(!1);
}
function a1(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = hn.Pop,
		navigator: o,
		static: l = !1,
	} = e;
	eo() && Te(!1);
	let a = t.replace(/^\/*/, "/"),
		s = O.useMemo(() => ({ basename: a, navigator: o, static: l }), [a, o, l]);
	typeof r == "string" && (r = Vr(r));
	let {
			pathname: u = "/",
			search: d = "",
			hash: p = "",
			state: h = null,
			key: v = "default",
		} = r,
		g = O.useMemo(() => {
			let x = Ac(u, a);
			return x == null
				? null
				: {
						location: { pathname: x, search: d, hash: p, state: h, key: v },
						navigationType: i,
				  };
		}, [a, u, d, p, h, v, i]);
	return g == null
		? null
		: O.createElement(
				Qr.Provider,
				{ value: s },
				O.createElement(oa.Provider, { children: n, value: g })
		  );
}
function s1(e) {
	let { children: t, location: n } = e;
	return K0(Cu(t), n);
}
new Promise(() => {});
function Cu(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		O.Children.forEach(e, (r, i) => {
			if (!O.isValidElement(r)) return;
			let o = [...t, i];
			if (r.type === O.Fragment) {
				n.push.apply(n, Cu(r.props.children, o));
				return;
			}
			r.type !== Un && Te(!1), !r.props.index || !r.props.children || Te(!1);
			let l = {
				id: r.props.id || o.join("-"),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (l.children = Cu(r.props.children, o)), n.push(l);
		}),
		n
	);
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ju() {
	return (
		(ju = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		ju.apply(this, arguments)
	);
}
function u1(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function c1(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function f1(e, t) {
	return e.button === 0 && (!t || t === "_self") && !c1(e);
}
const d1 = [
		"onClick",
		"relative",
		"reloadDocument",
		"replace",
		"state",
		"target",
		"to",
		"preventScrollReset",
	],
	p1 = "startTransition",
	xd = sy[p1];
function h1(e) {
	let { basename: t, children: n, future: r, window: i } = e,
		o = O.useRef();
	o.current == null && (o.current = g0({ window: i, v5Compat: !0 }));
	let l = o.current,
		[a, s] = O.useState({ action: l.action, location: l.location }),
		{ v7_startTransition: u } = r || {},
		d = O.useCallback(
			(p) => {
				u && xd ? xd(() => s(p)) : s(p);
			},
			[s, u]
		);
	return (
		O.useLayoutEffect(() => l.listen(d), [l, d]),
		O.createElement(a1, {
			basename: t,
			children: n,
			location: a.location,
			navigationType: a.action,
			navigator: l,
		})
	);
}
const v1 =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	m1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Dc = O.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: i,
				reloadDocument: o,
				replace: l,
				state: a,
				target: s,
				to: u,
				preventScrollReset: d,
			} = t,
			p = u1(t, d1),
			{ basename: h } = O.useContext(Qr),
			v,
			g = !1;
		if (typeof u == "string" && m1.test(u) && ((v = u), v1))
			try {
				let c = new URL(window.location.href),
					m = u.startsWith("//") ? new URL(c.protocol + u) : new URL(u),
					w = Ac(m.pathname, h);
				m.origin === c.origin && w != null
					? (u = w + m.search + m.hash)
					: (g = !0);
			} catch {}
		let x = B0(u, { relative: i }),
			k = y1(u, {
				replace: l,
				state: a,
				target: s,
				preventScrollReset: d,
				relative: i,
			});
		function y(c) {
			r && r(c), c.defaultPrevented || k(c);
		}
		return O.createElement(
			"a",
			ju({}, p, { href: v || x, onClick: g || o ? r : y, ref: n, target: s })
		);
	});
var Sd;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher");
})(Sd || (Sd = {}));
var kd;
(function (e) {
	(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(kd || (kd = {}));
function y1(e, t) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: o,
			relative: l,
		} = t === void 0 ? {} : t,
		a = to(),
		s = Br(),
		u = zv(e, { relative: l });
	return O.useCallback(
		(d) => {
			if (f1(d, n)) {
				d.preventDefault();
				let p = r !== void 0 ? r : wl(s) === wl(u);
				a(e, { replace: p, state: i, preventScrollReset: o, relative: l });
			}
		},
		[s, a, u, r, i, n, e, o, l]
	);
}
var no = (e) => e.type === "checkbox",
	kr = (e) => e instanceof Date,
	Ke = (e) => e == null;
const Qv = (e) => typeof e == "object";
var _e = (e) => !Ke(e) && !Array.isArray(e) && Qv(e) && !kr(e),
	Bv = (e) =>
		_e(e) && e.target ? (no(e.target) ? e.target.checked : e.target.value) : e,
	g1 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
	qv = (e, t) => e.has(g1(t)),
	w1 = (e) => {
		const t = e.constructor && e.constructor.prototype;
		return _e(t) && t.hasOwnProperty("isPrototypeOf");
	},
	Lc =
		typeof window < "u" &&
		typeof window.HTMLElement < "u" &&
		typeof document < "u";
function Pt(e) {
	let t;
	const n = Array.isArray(e);
	if (e instanceof Date) t = new Date(e);
	else if (e instanceof Set) t = new Set(e);
	else if (
		!(Lc && (e instanceof Blob || e instanceof FileList)) &&
		(n || _e(e))
	)
		if (((t = n ? [] : {}), !n && !w1(e))) t = e;
		else for (const r in e) e.hasOwnProperty(r) && (t[r] = Pt(e[r]));
	else return e;
	return t;
}
var ro = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
	Ce = (e) => e === void 0,
	q = (e, t, n) => {
		if (!t || !_e(e)) return n;
		const r = ro(t.split(/[,[\].]+?/)).reduce((i, o) => (Ke(i) ? i : i[o]), e);
		return Ce(r) || r === e ? (Ce(e[t]) ? n : e[t]) : r;
	},
	vn = (e) => typeof e == "boolean";
const kl = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
	Rt = {
		onBlur: "onBlur",
		onChange: "onChange",
		onSubmit: "onSubmit",
		onTouched: "onTouched",
		all: "all",
	},
	Wt = {
		max: "max",
		min: "min",
		maxLength: "maxLength",
		minLength: "minLength",
		pattern: "pattern",
		required: "required",
		validate: "validate",
	},
	x1 = X.createContext(null),
	$c = () => X.useContext(x1);
var Wv = (e, t, n, r = !0) => {
		const i = { defaultValues: t._defaultValues };
		for (const o in e)
			Object.defineProperty(i, o, {
				get: () => {
					const l = o;
					return (
						t._proxyFormState[l] !== Rt.all &&
							(t._proxyFormState[l] = !r || Rt.all),
						n && (n[l] = !0),
						e[l]
					);
				},
			});
		return i;
	},
	ht = (e) => _e(e) && !Object.keys(e).length,
	Hv = (e, t, n, r) => {
		n(e);
		const { name: i, ...o } = e;
		return (
			ht(o) ||
			Object.keys(o).length >= Object.keys(t).length ||
			Object.keys(o).find((l) => t[l] === (!r || Rt.all))
		);
	},
	Bo = (e) => (Array.isArray(e) ? e : [e]),
	Kv = (e, t, n) =>
		n && t
			? e === t || (Array.isArray(e) && e.some((r) => r && n && r === t))
			: !e ||
			  !t ||
			  e === t ||
			  Bo(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Fc(e) {
	const t = X.useRef(e);
	(t.current = e),
		X.useEffect(() => {
			const n =
				!e.disabled &&
				t.current.subject &&
				t.current.subject.subscribe({ next: t.current.next });
			return () => {
				n && n.unsubscribe();
			};
		}, [e.disabled]);
}
function S1(e) {
	const t = $c(),
		{ control: n = t.control, disabled: r, name: i, exact: o } = e || {},
		[l, a] = X.useState(n._formState),
		s = X.useRef(!0),
		u = X.useRef({
			isDirty: !1,
			isLoading: !1,
			dirtyFields: !1,
			touchedFields: !1,
			isValidating: !1,
			isValid: !1,
			errors: !1,
		}),
		d = X.useRef(i);
	return (
		(d.current = i),
		Fc({
			disabled: r,
			next: (p) =>
				s.current &&
				Kv(d.current, p.name, o) &&
				Hv(p, u.current, n._updateFormState) &&
				a({ ...n._formState, ...p }),
			subject: n._subjects.state,
		}),
		X.useEffect(
			() => (
				(s.current = !0),
				u.current.isValid && n._updateValid(!0),
				() => {
					s.current = !1;
				}
			),
			[n]
		),
		Wv(l, n, u.current, !1)
	);
}
var zt = (e) => typeof e == "string",
	Gv = (e, t, n, r, i) =>
		zt(e)
			? (r && t.watch.add(e), q(n, e, i))
			: Array.isArray(e)
			? e.map((o) => (r && t.watch.add(o), q(n, o)))
			: (r && (t.watchAll = !0), n);
function k1(e) {
	const t = $c(),
		{
			control: n = t.control,
			name: r,
			defaultValue: i,
			disabled: o,
			exact: l,
		} = e || {},
		a = X.useRef(r);
	(a.current = r),
		Fc({
			disabled: o,
			subject: n._subjects.values,
			next: (d) => {
				Kv(a.current, d.name, l) &&
					u(Pt(Gv(a.current, n._names, d.values || n._formValues, !1, i)));
			},
		});
	const [s, u] = X.useState(n._getWatch(r, i));
	return X.useEffect(() => n._removeUnmounted()), s;
}
var zc = (e) => /^\w*$/.test(e),
	Yv = (e) => ro(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function fe(e, t, n) {
	let r = -1;
	const i = zc(t) ? [t] : Yv(t),
		o = i.length,
		l = o - 1;
	for (; ++r < o; ) {
		const a = i[r];
		let s = n;
		if (r !== l) {
			const u = e[a];
			s = _e(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
		}
		(e[a] = s), (e = e[a]);
	}
	return e;
}
function E1(e) {
	const t = $c(),
		{ name: n, disabled: r, control: i = t.control, shouldUnregister: o } = e,
		l = qv(i._names.array, n),
		a = k1({
			control: i,
			name: n,
			defaultValue: q(i._formValues, n, q(i._defaultValues, n, e.defaultValue)),
			exact: !0,
		}),
		s = S1({ control: i, name: n }),
		u = X.useRef(i.register(n, { ...e.rules, value: a }));
	return (
		(u.current = i.register(n, e.rules)),
		X.useEffect(() => {
			const d = i._options.shouldUnregister || o,
				p = (h, v) => {
					const g = q(i._fields, h);
					g && (g._f.mount = v);
				};
			if ((p(n, !0), d)) {
				const h = Pt(q(i._options.defaultValues, n));
				fe(i._defaultValues, n, h),
					Ce(q(i._formValues, n)) && fe(i._formValues, n, h);
			}
			return () => {
				(l ? d && !i._state.action : d) ? i.unregister(n) : p(n, !1);
			};
		}, [n, i, l, o]),
		X.useEffect(() => {
			i._updateDisabledField({ disabled: r, fields: i._fields, name: n });
		}, [r, n, i]),
		{
			field: {
				name: n,
				value: a,
				...(vn(r) ? { disabled: r } : {}),
				onChange: X.useCallback(
					(d) =>
						u.current.onChange({
							target: { value: Bv(d), name: n },
							type: kl.CHANGE,
						}),
					[n]
				),
				onBlur: X.useCallback(
					() =>
						u.current.onBlur({
							target: { value: q(i._formValues, n), name: n },
							type: kl.BLUR,
						}),
					[n, i]
				),
				ref: (d) => {
					const p = q(i._fields, n);
					p &&
						d &&
						(p._f.ref = {
							focus: () => d.focus(),
							select: () => d.select(),
							setCustomValidity: (h) => d.setCustomValidity(h),
							reportValidity: () => d.reportValidity(),
						});
				},
			},
			formState: s,
			fieldState: Object.defineProperties(
				{},
				{
					invalid: { enumerable: !0, get: () => !!q(s.errors, n) },
					isDirty: { enumerable: !0, get: () => !!q(s.dirtyFields, n) },
					isTouched: { enumerable: !0, get: () => !!q(s.touchedFields, n) },
					error: { enumerable: !0, get: () => q(s.errors, n) },
				}
			),
		}
	);
}
const Ed = (e) => e.render(E1(e));
var C1 = (e, t, n, r, i) =>
	t
		? {
				...n[e],
				types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: i || !0 },
		  }
		: {};
const Nu = (e, t, n) => {
	for (const r of n || Object.keys(e)) {
		const i = q(e, r);
		if (i) {
			const { _f: o, ...l } = i;
			if (o && t(o.name)) {
				if (o.ref.focus) {
					o.ref.focus();
					break;
				} else if (o.refs && o.refs[0].focus) {
					o.refs[0].focus();
					break;
				}
			} else _e(l) && Nu(l, t);
		}
	}
};
var Cd = (e) => ({
		isOnSubmit: !e || e === Rt.onSubmit,
		isOnBlur: e === Rt.onBlur,
		isOnChange: e === Rt.onChange,
		isOnAll: e === Rt.all,
		isOnTouch: e === Rt.onTouched,
	}),
	jd = (e, t, n) =>
		!n &&
		(t.watchAll ||
			t.watch.has(e) ||
			[...t.watch].some(
				(r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
			)),
	j1 = (e, t, n) => {
		const r = ro(q(e, n));
		return fe(r, "root", t[n]), fe(e, n, r), e;
	},
	Uc = (e) => e.type === "file",
	mn = (e) => typeof e == "function",
	El = (e) => {
		if (!Lc) return !1;
		const t = e ? e.ownerDocument : 0;
		return (
			e instanceof
			(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
		);
	},
	qo = (e) => zt(e),
	Vc = (e) => e.type === "radio",
	Cl = (e) => e instanceof RegExp;
const Nd = { value: !1, isValid: !1 },
	Pd = { value: !0, isValid: !0 };
var Xv = (e) => {
	if (Array.isArray(e)) {
		if (e.length > 1) {
			const t = e
				.filter((n) => n && n.checked && !n.disabled)
				.map((n) => n.value);
			return { value: t, isValid: !!t.length };
		}
		return e[0].checked && !e[0].disabled
			? e[0].attributes && !Ce(e[0].attributes.value)
				? Ce(e[0].value) || e[0].value === ""
					? Pd
					: { value: e[0].value, isValid: !0 }
				: Pd
			: Nd;
	}
	return Nd;
};
const Td = { isValid: !1, value: null };
var Jv = (e) =>
	Array.isArray(e)
		? e.reduce(
				(t, n) =>
					n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
				Td
		  )
		: Td;
function Od(e, t, n = "validate") {
	if (qo(e) || (Array.isArray(e) && e.every(qo)) || (vn(e) && !e))
		return { type: n, message: qo(e) ? e : "", ref: t };
}
var ur = (e) => (_e(e) && !Cl(e) ? e : { value: e, message: "" }),
	Rd = async (e, t, n, r, i) => {
		const {
				ref: o,
				refs: l,
				required: a,
				maxLength: s,
				minLength: u,
				min: d,
				max: p,
				pattern: h,
				validate: v,
				name: g,
				valueAsNumber: x,
				mount: k,
				disabled: y,
			} = e._f,
			c = q(t, g);
		if (!k || y) return {};
		const m = l ? l[0] : o,
			w = (_) => {
				r &&
					m.reportValidity &&
					(m.setCustomValidity(vn(_) ? "" : _ || ""), m.reportValidity());
			},
			S = {},
			E = Vc(o),
			C = no(o),
			j = E || C,
			T =
				((x || Uc(o)) && Ce(o.value) && Ce(c)) ||
				(El(o) && o.value === "") ||
				c === "" ||
				(Array.isArray(c) && !c.length),
			P = C1.bind(null, g, n, S),
			R = (_, b, D, U = Wt.maxLength, B = Wt.minLength) => {
				const H = _ ? b : D;
				S[g] = { type: _ ? U : B, message: H, ref: o, ...P(_ ? U : B, H) };
			};
		if (
			i
				? !Array.isArray(c) || !c.length
				: a &&
				  ((!j && (T || Ke(c))) ||
						(vn(c) && !c) ||
						(C && !Xv(l).isValid) ||
						(E && !Jv(l).isValid))
		) {
			const { value: _, message: b } = qo(a)
				? { value: !!a, message: a }
				: ur(a);
			if (
				_ &&
				((S[g] = {
					type: Wt.required,
					message: b,
					ref: m,
					...P(Wt.required, b),
				}),
				!n)
			)
				return w(b), S;
		}
		if (!T && (!Ke(d) || !Ke(p))) {
			let _, b;
			const D = ur(p),
				U = ur(d);
			if (!Ke(c) && !isNaN(c)) {
				const B = o.valueAsNumber || (c && +c);
				Ke(D.value) || (_ = B > D.value), Ke(U.value) || (b = B < U.value);
			} else {
				const B = o.valueAsDate || new Date(c),
					H = (V) => new Date(new Date().toDateString() + " " + V),
					A = o.type == "time",
					z = o.type == "week";
				zt(D.value) &&
					c &&
					(_ = A ? H(c) > H(D.value) : z ? c > D.value : B > new Date(D.value)),
					zt(U.value) &&
						c &&
						(b = A
							? H(c) < H(U.value)
							: z
							? c < U.value
							: B < new Date(U.value));
			}
			if ((_ || b) && (R(!!_, D.message, U.message, Wt.max, Wt.min), !n))
				return w(S[g].message), S;
		}
		if ((s || u) && !T && (zt(c) || (i && Array.isArray(c)))) {
			const _ = ur(s),
				b = ur(u),
				D = !Ke(_.value) && c.length > +_.value,
				U = !Ke(b.value) && c.length < +b.value;
			if ((D || U) && (R(D, _.message, b.message), !n))
				return w(S[g].message), S;
		}
		if (h && !T && zt(c)) {
			const { value: _, message: b } = ur(h);
			if (
				Cl(_) &&
				!c.match(_) &&
				((S[g] = { type: Wt.pattern, message: b, ref: o, ...P(Wt.pattern, b) }),
				!n)
			)
				return w(b), S;
		}
		if (v) {
			if (mn(v)) {
				const _ = await v(c, t),
					b = Od(_, m);
				if (b && ((S[g] = { ...b, ...P(Wt.validate, b.message) }), !n))
					return w(b.message), S;
			} else if (_e(v)) {
				let _ = {};
				for (const b in v) {
					if (!ht(_) && !n) break;
					const D = Od(await v[b](c, t), m, b);
					D &&
						((_ = { ...D, ...P(b, D.message) }), w(D.message), n && (S[g] = _));
				}
				if (!ht(_) && ((S[g] = { ref: m, ..._ }), !n)) return S;
			}
		}
		return w(!0), S;
	};
function N1(e, t) {
	const n = t.slice(0, -1).length;
	let r = 0;
	for (; r < n; ) e = Ce(e) ? r++ : e[t[r++]];
	return e;
}
function P1(e) {
	for (const t in e) if (e.hasOwnProperty(t) && !Ce(e[t])) return !1;
	return !0;
}
function De(e, t) {
	const n = Array.isArray(t) ? t : zc(t) ? [t] : Yv(t),
		r = n.length === 1 ? e : N1(e, n),
		i = n.length - 1,
		o = n[i];
	return (
		r && delete r[o],
		i !== 0 &&
			((_e(r) && ht(r)) || (Array.isArray(r) && P1(r))) &&
			De(e, n.slice(0, -1)),
		e
	);
}
function us() {
	let e = [];
	return {
		get observers() {
			return e;
		},
		next: (i) => {
			for (const o of e) o.next && o.next(i);
		},
		subscribe: (i) => (
			e.push(i),
			{
				unsubscribe: () => {
					e = e.filter((o) => o !== i);
				},
			}
		),
		unsubscribe: () => {
			e = [];
		},
	};
}
var jl = (e) => Ke(e) || !Qv(e);
function Kn(e, t) {
	if (jl(e) || jl(t)) return e === t;
	if (kr(e) && kr(t)) return e.getTime() === t.getTime();
	const n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (const i of n) {
		const o = e[i];
		if (!r.includes(i)) return !1;
		if (i !== "ref") {
			const l = t[i];
			if (
				(kr(o) && kr(l)) ||
				(_e(o) && _e(l)) ||
				(Array.isArray(o) && Array.isArray(l))
					? !Kn(o, l)
					: o !== l
			)
				return !1;
		}
	}
	return !0;
}
var Zv = (e) => e.type === "select-multiple",
	T1 = (e) => Vc(e) || no(e),
	cs = (e) => El(e) && e.isConnected,
	em = (e) => {
		for (const t in e) if (mn(e[t])) return !0;
		return !1;
	};
function Nl(e, t = {}) {
	const n = Array.isArray(e);
	if (_e(e) || n)
		for (const r in e)
			Array.isArray(e[r]) || (_e(e[r]) && !em(e[r]))
				? ((t[r] = Array.isArray(e[r]) ? [] : {}), Nl(e[r], t[r]))
				: Ke(e[r]) || (t[r] = !0);
	return t;
}
function tm(e, t, n) {
	const r = Array.isArray(e);
	if (_e(e) || r)
		for (const i in e)
			Array.isArray(e[i]) || (_e(e[i]) && !em(e[i]))
				? Ce(t) || jl(n[i])
					? (n[i] = Array.isArray(e[i]) ? Nl(e[i], []) : { ...Nl(e[i]) })
					: tm(e[i], Ke(t) ? {} : t[i], n[i])
				: (n[i] = !Kn(e[i], t[i]));
	return n;
}
var fs = (e, t) => tm(e, t, Nl(t)),
	nm = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
		Ce(e)
			? e
			: t
			? e === ""
				? NaN
				: e && +e
			: n && zt(e)
			? new Date(e)
			: r
			? r(e)
			: e;
function ds(e) {
	const t = e.ref;
	if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
		return Uc(t)
			? t.files
			: Vc(t)
			? Jv(e.refs).value
			: Zv(t)
			? [...t.selectedOptions].map(({ value: n }) => n)
			: no(t)
			? Xv(e.refs).value
			: nm(Ce(t.value) ? e.ref.value : t.value, e);
}
var O1 = (e, t, n, r) => {
		const i = {};
		for (const o of e) {
			const l = q(t, o);
			l && fe(i, o, l._f);
		}
		return {
			criteriaMode: n,
			names: [...e],
			fields: i,
			shouldUseNativeValidation: r,
		};
	},
	ei = (e) =>
		Ce(e)
			? e
			: Cl(e)
			? e.source
			: _e(e)
			? Cl(e.value)
				? e.value.source
				: e.value
			: e,
	R1 = (e) =>
		e.mount &&
		(e.required ||
			e.min ||
			e.max ||
			e.maxLength ||
			e.minLength ||
			e.pattern ||
			e.validate);
function _d(e, t, n) {
	const r = q(e, n);
	if (r || zc(n)) return { error: r, name: n };
	const i = n.split(".");
	for (; i.length; ) {
		const o = i.join("."),
			l = q(t, o),
			a = q(e, o);
		if (l && !Array.isArray(l) && n !== o) return { name: n };
		if (a && a.type) return { name: o, error: a };
		i.pop();
	}
	return { name: n };
}
var _1 = (e, t, n, r, i) =>
		i.isOnAll
			? !1
			: !n && i.isOnTouch
			? !(t || e)
			: (n ? r.isOnBlur : i.isOnBlur)
			? !e
			: (n ? r.isOnChange : i.isOnChange)
			? e
			: !0,
	b1 = (e, t) => !ro(q(e, t)).length && De(e, t);
const I1 = {
	mode: Rt.onSubmit,
	reValidateMode: Rt.onChange,
	shouldFocusError: !0,
};
function A1(e = {}, t) {
	let n = { ...I1, ...e },
		r = {
			submitCount: 0,
			isDirty: !1,
			isLoading: mn(n.defaultValues),
			isValidating: !1,
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			touchedFields: {},
			dirtyFields: {},
			errors: {},
		},
		i = {},
		o =
			_e(n.defaultValues) || _e(n.values)
				? Pt(n.defaultValues || n.values) || {}
				: {},
		l = n.shouldUnregister ? {} : Pt(o),
		a = { action: !1, mount: !1, watch: !1 },
		s = {
			mount: new Set(),
			unMount: new Set(),
			array: new Set(),
			watch: new Set(),
		},
		u,
		d = 0;
	const p = {
			isDirty: !1,
			dirtyFields: !1,
			touchedFields: !1,
			isValidating: !1,
			isValid: !1,
			errors: !1,
		},
		h = { values: us(), array: us(), state: us() },
		v = e.resetOptions && e.resetOptions.keepDirtyValues,
		g = Cd(n.mode),
		x = Cd(n.reValidateMode),
		k = n.criteriaMode === Rt.all,
		y = (N) => (I) => {
			clearTimeout(d), (d = setTimeout(N, I));
		},
		c = async (N) => {
			if (p.isValid || N) {
				const I = n.resolver ? ht((await T()).errors) : await R(i, !0);
				I !== r.isValid && h.state.next({ isValid: I });
			}
		},
		m = (N) => p.isValidating && h.state.next({ isValidating: N }),
		w = (N, I = [], M, K, Q = !0, L = !0) => {
			if (K && M) {
				if (((a.action = !0), L && Array.isArray(q(i, N)))) {
					const Y = M(q(i, N), K.argA, K.argB);
					Q && fe(i, N, Y);
				}
				if (L && Array.isArray(q(r.errors, N))) {
					const Y = M(q(r.errors, N), K.argA, K.argB);
					Q && fe(r.errors, N, Y), b1(r.errors, N);
				}
				if (p.touchedFields && L && Array.isArray(q(r.touchedFields, N))) {
					const Y = M(q(r.touchedFields, N), K.argA, K.argB);
					Q && fe(r.touchedFields, N, Y);
				}
				p.dirtyFields && (r.dirtyFields = fs(o, l)),
					h.state.next({
						name: N,
						isDirty: b(N, I),
						dirtyFields: r.dirtyFields,
						errors: r.errors,
						isValid: r.isValid,
					});
			} else fe(l, N, I);
		},
		S = (N, I) => {
			fe(r.errors, N, I), h.state.next({ errors: r.errors });
		},
		E = (N, I, M, K) => {
			const Q = q(i, N);
			if (Q) {
				const L = q(l, N, Ce(M) ? q(o, N) : M);
				Ce(L) || (K && K.defaultChecked) || I
					? fe(l, N, I ? L : ds(Q._f))
					: B(N, L),
					a.mount && c();
			}
		},
		C = (N, I, M, K, Q) => {
			let L = !1,
				Y = !1;
			const Se = { name: N };
			if (!M || K) {
				p.isDirty &&
					((Y = r.isDirty),
					(r.isDirty = Se.isDirty = b()),
					(L = Y !== Se.isDirty));
				const Ee = Kn(q(o, N), I);
				(Y = q(r.dirtyFields, N)),
					Ee ? De(r.dirtyFields, N) : fe(r.dirtyFields, N, !0),
					(Se.dirtyFields = r.dirtyFields),
					(L = L || (p.dirtyFields && Y !== !Ee));
			}
			if (M) {
				const Ee = q(r.touchedFields, N);
				Ee ||
					(fe(r.touchedFields, N, M),
					(Se.touchedFields = r.touchedFields),
					(L = L || (p.touchedFields && Ee !== M)));
			}
			return L && Q && h.state.next(Se), L ? Se : {};
		},
		j = (N, I, M, K) => {
			const Q = q(r.errors, N),
				L = p.isValid && vn(I) && r.isValid !== I;
			if (
				(e.delayError && M
					? ((u = y(() => S(N, M))), u(e.delayError))
					: (clearTimeout(d),
					  (u = null),
					  M ? fe(r.errors, N, M) : De(r.errors, N)),
				(M ? !Kn(Q, M) : Q) || !ht(K) || L)
			) {
				const Y = {
					...K,
					...(L && vn(I) ? { isValid: I } : {}),
					errors: r.errors,
					name: N,
				};
				(r = { ...r, ...Y }), h.state.next(Y);
			}
			m(!1);
		},
		T = async (N) =>
			n.resolver(
				l,
				n.context,
				O1(N || s.mount, i, n.criteriaMode, n.shouldUseNativeValidation)
			),
		P = async (N) => {
			const { errors: I } = await T(N);
			if (N)
				for (const M of N) {
					const K = q(I, M);
					K ? fe(r.errors, M, K) : De(r.errors, M);
				}
			else r.errors = I;
			return I;
		},
		R = async (N, I, M = { valid: !0 }) => {
			for (const K in N) {
				const Q = N[K];
				if (Q) {
					const { _f: L, ...Y } = Q;
					if (L) {
						const Se = s.array.has(L.name),
							Ee = await Rd(Q, l, k, n.shouldUseNativeValidation && !I, Se);
						if (Ee[L.name] && ((M.valid = !1), I)) break;
						!I &&
							(q(Ee, L.name)
								? Se
									? j1(r.errors, Ee, L.name)
									: fe(r.errors, L.name, Ee[L.name])
								: De(r.errors, L.name));
					}
					Y && (await R(Y, I, M));
				}
			}
			return M.valid;
		},
		_ = () => {
			for (const N of s.unMount) {
				const I = q(i, N);
				I &&
					(I._f.refs ? I._f.refs.every((M) => !cs(M)) : !cs(I._f.ref)) &&
					ne(N);
			}
			s.unMount = new Set();
		},
		b = (N, I) => (N && I && fe(l, N, I), !Kn(G(), o)),
		D = (N, I, M) =>
			Gv(N, s, { ...(a.mount ? l : Ce(I) ? o : zt(N) ? { [N]: I } : I) }, M, I),
		U = (N) => ro(q(a.mount ? l : o, N, e.shouldUnregister ? q(o, N, []) : [])),
		B = (N, I, M = {}) => {
			const K = q(i, N);
			let Q = I;
			if (K) {
				const L = K._f;
				L &&
					(!L.disabled && fe(l, N, nm(I, L)),
					(Q = El(L.ref) && Ke(I) ? "" : I),
					Zv(L.ref)
						? [...L.ref.options].forEach(
								(Y) => (Y.selected = Q.includes(Y.value))
						  )
						: L.refs
						? no(L.ref)
							? L.refs.length > 1
								? L.refs.forEach(
										(Y) =>
											(!Y.defaultChecked || !Y.disabled) &&
											(Y.checked = Array.isArray(Q)
												? !!Q.find((Se) => Se === Y.value)
												: Q === Y.value)
								  )
								: L.refs[0] && (L.refs[0].checked = !!Q)
							: L.refs.forEach((Y) => (Y.checked = Y.value === Q))
						: Uc(L.ref)
						? (L.ref.value = "")
						: ((L.ref.value = Q),
						  L.ref.type || h.values.next({ name: N, values: { ...l } })));
			}
			(M.shouldDirty || M.shouldTouch) &&
				C(N, Q, M.shouldTouch, M.shouldDirty, !0),
				M.shouldValidate && V(N);
		},
		H = (N, I, M) => {
			for (const K in I) {
				const Q = I[K],
					L = `${N}.${K}`,
					Y = q(i, L);
				(s.array.has(N) || !jl(Q) || (Y && !Y._f)) && !kr(Q)
					? H(L, Q, M)
					: B(L, Q, M);
			}
		},
		A = (N, I, M = {}) => {
			const K = q(i, N),
				Q = s.array.has(N),
				L = Pt(I);
			fe(l, N, L),
				Q
					? (h.array.next({ name: N, values: { ...l } }),
					  (p.isDirty || p.dirtyFields) &&
							M.shouldDirty &&
							h.state.next({
								name: N,
								dirtyFields: fs(o, l),
								isDirty: b(N, L),
							}))
					: K && !K._f && !Ke(L)
					? H(N, L, M)
					: B(N, L, M),
				jd(N, s) && h.state.next({ ...r }),
				h.values.next({ name: N, values: { ...l } }),
				!a.mount && t();
		},
		z = async (N) => {
			const I = N.target;
			let M = I.name,
				K = !0;
			const Q = q(i, M),
				L = () => (I.type ? ds(Q._f) : Bv(N));
			if (Q) {
				let Y, Se;
				const Ee = L(),
					ar = N.type === kl.BLUR || N.type === kl.FOCUS_OUT,
					Vm =
						(!R1(Q._f) && !n.resolver && !q(r.errors, M) && !Q._f.deps) ||
						_1(ar, q(r.touchedFields, M), r.isSubmitted, x, g),
					Aa = jd(M, s, ar);
				fe(l, M, Ee),
					ar
						? (Q._f.onBlur && Q._f.onBlur(N), u && u(0))
						: Q._f.onChange && Q._f.onChange(N);
				const Ma = C(M, Ee, ar, !1),
					Qm = !ht(Ma) || Aa;
				if (
					(!ar && h.values.next({ name: M, type: N.type, values: { ...l } }),
					Vm)
				)
					return (
						p.isValid && c(), Qm && h.state.next({ name: M, ...(Aa ? {} : Ma) })
					);
				if ((!ar && Aa && h.state.next({ ...r }), m(!0), n.resolver)) {
					const { errors: of } = await T([M]),
						Bm = _d(r.errors, i, M),
						lf = _d(of, i, Bm.name || M);
					(Y = lf.error), (M = lf.name), (Se = ht(of));
				} else
					(Y = (await Rd(Q, l, k, n.shouldUseNativeValidation))[M]),
						(K = Number.isNaN(Ee) || Ee === q(l, M, Ee)),
						K && (Y ? (Se = !1) : p.isValid && (Se = await R(i, !0)));
				K && (Q._f.deps && V(Q._f.deps), j(M, Se, Y, Ma));
			}
		},
		V = async (N, I = {}) => {
			let M, K;
			const Q = Bo(N);
			if ((m(!0), n.resolver)) {
				const L = await P(Ce(N) ? N : Q);
				(M = ht(L)), (K = N ? !Q.some((Y) => q(L, Y)) : M);
			} else
				N
					? ((K = (
							await Promise.all(
								Q.map(async (L) => {
									const Y = q(i, L);
									return await R(Y && Y._f ? { [L]: Y } : Y);
								})
							)
					  ).every(Boolean)),
					  !(!K && !r.isValid) && c())
					: (K = M = await R(i));
			return (
				h.state.next({
					...(!zt(N) || (p.isValid && M !== r.isValid) ? {} : { name: N }),
					...(n.resolver || !N ? { isValid: M } : {}),
					errors: r.errors,
					isValidating: !1,
				}),
				I.shouldFocus &&
					!K &&
					Nu(i, (L) => L && q(r.errors, L), N ? Q : s.mount),
				K
			);
		},
		G = (N) => {
			const I = { ...o, ...(a.mount ? l : {}) };
			return Ce(N) ? I : zt(N) ? q(I, N) : N.map((M) => q(I, M));
		},
		J = (N, I) => ({
			invalid: !!q((I || r).errors, N),
			isDirty: !!q((I || r).dirtyFields, N),
			isTouched: !!q((I || r).touchedFields, N),
			error: q((I || r).errors, N),
		}),
		Z = (N) => {
			N && Bo(N).forEach((I) => De(r.errors, I)),
				h.state.next({ errors: N ? r.errors : {} });
		},
		te = (N, I, M) => {
			const K = (q(i, N, { _f: {} })._f || {}).ref;
			fe(r.errors, N, { ...I, ref: K }),
				h.state.next({ name: N, errors: r.errors, isValid: !1 }),
				M && M.shouldFocus && K && K.focus && K.focus();
		},
		ee = (N, I) =>
			mn(N)
				? h.values.subscribe({ next: (M) => N(D(void 0, I), M) })
				: D(N, I, !0),
		ne = (N, I = {}) => {
			for (const M of N ? Bo(N) : s.mount)
				s.mount.delete(M),
					s.array.delete(M),
					I.keepValue || (De(i, M), De(l, M)),
					!I.keepError && De(r.errors, M),
					!I.keepDirty && De(r.dirtyFields, M),
					!I.keepTouched && De(r.touchedFields, M),
					!n.shouldUnregister && !I.keepDefaultValue && De(o, M);
			h.values.next({ values: { ...l } }),
				h.state.next({ ...r, ...(I.keepDirty ? { isDirty: b() } : {}) }),
				!I.keepIsValid && c();
		},
		le = ({ disabled: N, name: I, field: M, fields: K }) => {
			if (vn(N)) {
				const Q = N ? void 0 : q(l, I, ds(M ? M._f : q(K, I)._f));
				fe(l, I, Q), C(I, Q, !1, !1, !0);
			}
		},
		Je = (N, I = {}) => {
			let M = q(i, N);
			const K = vn(I.disabled);
			return (
				fe(i, N, {
					...(M || {}),
					_f: {
						...(M && M._f ? M._f : { ref: { name: N } }),
						name: N,
						mount: !0,
						...I,
					},
				}),
				s.mount.add(N),
				M ? le({ field: M, disabled: I.disabled, name: N }) : E(N, !0, I.value),
				{
					...(K ? { disabled: I.disabled } : {}),
					...(n.progressive
						? {
								required: !!I.required,
								min: ei(I.min),
								max: ei(I.max),
								minLength: ei(I.minLength),
								maxLength: ei(I.maxLength),
								pattern: ei(I.pattern),
						  }
						: {}),
					name: N,
					onChange: z,
					onBlur: z,
					ref: (Q) => {
						if (Q) {
							Je(N, I), (M = q(i, N));
							const L =
									(Ce(Q.value) &&
										Q.querySelectorAll &&
										Q.querySelectorAll("input,select,textarea")[0]) ||
									Q,
								Y = T1(L),
								Se = M._f.refs || [];
							if (Y ? Se.find((Ee) => Ee === L) : L === M._f.ref) return;
							fe(i, N, {
								_f: {
									...M._f,
									...(Y
										? {
												refs: [
													...Se.filter(cs),
													L,
													...(Array.isArray(q(o, N)) ? [{}] : []),
												],
												ref: { type: L.type, name: N },
										  }
										: { ref: L }),
								},
							}),
								E(N, !1, void 0, L);
						} else
							(M = q(i, N, {})),
								M._f && (M._f.mount = !1),
								(n.shouldUnregister || I.shouldUnregister) &&
									!(qv(s.array, N) && a.action) &&
									s.unMount.add(N);
					},
				}
			);
		},
		Dt = () => n.shouldFocusError && Nu(i, (N) => N && q(r.errors, N), s.mount),
		We = (N, I) => async (M) => {
			M && (M.preventDefault && M.preventDefault(), M.persist && M.persist());
			let K = Pt(l);
			if ((h.state.next({ isSubmitting: !0 }), n.resolver)) {
				const { errors: Q, values: L } = await T();
				(r.errors = Q), (K = L);
			} else await R(i);
			De(r.errors, "root"),
				ht(r.errors)
					? (h.state.next({ errors: {} }), await N(K, M))
					: (I && (await I({ ...r.errors }, M)), Dt(), setTimeout(Dt)),
				h.state.next({
					isSubmitted: !0,
					isSubmitting: !1,
					isSubmitSuccessful: ht(r.errors),
					submitCount: r.submitCount + 1,
					errors: r.errors,
				});
		},
		Et = (N, I = {}) => {
			q(i, N) &&
				(Ce(I.defaultValue)
					? A(N, q(o, N))
					: (A(N, I.defaultValue), fe(o, N, I.defaultValue)),
				I.keepTouched || De(r.touchedFields, N),
				I.keepDirty ||
					(De(r.dirtyFields, N),
					(r.isDirty = I.defaultValue ? b(N, q(o, N)) : b())),
				I.keepError || (De(r.errors, N), p.isValid && c()),
				h.state.next({ ...r }));
		},
		oe = (N, I = {}) => {
			const M = N ? Pt(N) : o,
				K = Pt(M),
				Q = N && !ht(N) ? K : o;
			if ((I.keepDefaultValues || (o = M), !I.keepValues)) {
				if (I.keepDirtyValues || v)
					for (const L of s.mount)
						q(r.dirtyFields, L) ? fe(Q, L, q(l, L)) : A(L, q(Q, L));
				else {
					if (Lc && Ce(N))
						for (const L of s.mount) {
							const Y = q(i, L);
							if (Y && Y._f) {
								const Se = Array.isArray(Y._f.refs) ? Y._f.refs[0] : Y._f.ref;
								if (El(Se)) {
									const Ee = Se.closest("form");
									if (Ee) {
										Ee.reset();
										break;
									}
								}
							}
						}
					i = {};
				}
				(l = e.shouldUnregister ? (I.keepDefaultValues ? Pt(o) : {}) : Pt(Q)),
					h.array.next({ values: { ...Q } }),
					h.values.next({ values: { ...Q } });
			}
			(s = {
				mount: new Set(),
				unMount: new Set(),
				array: new Set(),
				watch: new Set(),
				watchAll: !1,
				focus: "",
			}),
				!a.mount && t(),
				(a.mount = !p.isValid || !!I.keepIsValid),
				(a.watch = !!e.shouldUnregister),
				h.state.next({
					submitCount: I.keepSubmitCount ? r.submitCount : 0,
					isDirty: I.keepDirty
						? r.isDirty
						: !!(I.keepDefaultValues && !Kn(N, o)),
					isSubmitted: I.keepIsSubmitted ? r.isSubmitted : !1,
					dirtyFields: I.keepDirtyValues
						? r.dirtyFields
						: I.keepDefaultValues && N
						? fs(o, N)
						: {},
					touchedFields: I.keepTouched ? r.touchedFields : {},
					errors: I.keepErrors ? r.errors : {},
					isSubmitting: !1,
					isSubmitSuccessful: !1,
				});
		},
		Ct = (N, I) => oe(mn(N) ? N(l) : N, I);
	return {
		control: {
			register: Je,
			unregister: ne,
			getFieldState: J,
			handleSubmit: We,
			setError: te,
			_executeSchema: T,
			_getWatch: D,
			_getDirty: b,
			_updateValid: c,
			_removeUnmounted: _,
			_updateFieldArray: w,
			_updateDisabledField: le,
			_getFieldArray: U,
			_reset: oe,
			_resetDefaultValues: () =>
				mn(n.defaultValues) &&
				n.defaultValues().then((N) => {
					Ct(N, n.resetOptions), h.state.next({ isLoading: !1 });
				}),
			_updateFormState: (N) => {
				r = { ...r, ...N };
			},
			_subjects: h,
			_proxyFormState: p,
			get _fields() {
				return i;
			},
			get _formValues() {
				return l;
			},
			get _state() {
				return a;
			},
			set _state(N) {
				a = N;
			},
			get _defaultValues() {
				return o;
			},
			get _names() {
				return s;
			},
			set _names(N) {
				s = N;
			},
			get _formState() {
				return r;
			},
			set _formState(N) {
				r = N;
			},
			get _options() {
				return n;
			},
			set _options(N) {
				n = { ...n, ...N };
			},
		},
		trigger: V,
		register: Je,
		handleSubmit: We,
		watch: ee,
		setValue: A,
		getValues: G,
		reset: Ct,
		resetField: Et,
		clearErrors: Z,
		unregister: ne,
		setError: te,
		setFocus: (N, I = {}) => {
			const M = q(i, N),
				K = M && M._f;
			if (K) {
				const Q = K.refs ? K.refs[0] : K.ref;
				Q.focus && (Q.focus(), I.shouldSelect && Q.select());
			}
		},
		getFieldState: J,
	};
}
function rm(e = {}) {
	const t = X.useRef(),
		n = X.useRef(),
		[r, i] = X.useState({
			isDirty: !1,
			isValidating: !1,
			isLoading: mn(e.defaultValues),
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			submitCount: 0,
			dirtyFields: {},
			touchedFields: {},
			errors: {},
			defaultValues: mn(e.defaultValues) ? void 0 : e.defaultValues,
		});
	t.current ||
		(t.current = { ...A1(e, () => i((l) => ({ ...l }))), formState: r });
	const o = t.current.control;
	return (
		(o._options = e),
		Fc({
			subject: o._subjects.state,
			next: (l) => {
				Hv(l, o._proxyFormState, o._updateFormState, !0) &&
					i({ ...o._formState });
			},
		}),
		X.useEffect(() => {
			e.values && !Kn(e.values, n.current)
				? (o._reset(e.values, o._options.resetOptions), (n.current = e.values))
				: o._resetDefaultValues();
		}, [e.values, o]),
		X.useEffect(() => {
			o._state.mount || (o._updateValid(), (o._state.mount = !0)),
				o._state.watch &&
					((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
				o._removeUnmounted();
		}),
		(t.current.formState = Wv(r, o)),
		t.current
	);
}
function $e(e) {
	for (
		var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
		r < t;
		r++
	)
		n[r - 1] = arguments[r];
	throw Error(
		"[Immer] minified error nr: " +
			e +
			(n.length
				? " " +
				  n
						.map(function (i) {
							return "'" + i + "'";
						})
						.join(",")
				: "") +
			". Find the full error at: https://bit.ly/3cXEKWf"
	);
}
function At(e) {
	return !!e && !!e[he];
}
function Mt(e) {
	var t;
	return (
		!!e &&
		((function (n) {
			if (!n || typeof n != "object") return !1;
			var r = Object.getPrototypeOf(n);
			if (r === null) return !0;
			var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
			return (
				i === Object ||
				(typeof i == "function" && Function.toString.call(i) === Q1)
			);
		})(e) ||
			Array.isArray(e) ||
			!!e[gi] ||
			!!(!((t = e.constructor) === null || t === void 0) && t[gi]) ||
			la(e) ||
			aa(e))
	);
}
function M1(e) {
	return At(e) || $e(23, e), e[he].t;
}
function _n(e, t, n) {
	n === void 0 && (n = !1),
		bn(e) === 0
			? (n ? Object.keys : Or)(e).forEach(function (r) {
					(n && typeof r == "symbol") || t(r, e[r], e);
			  })
			: e.forEach(function (r, i) {
					return t(i, r, e);
			  });
}
function bn(e) {
	var t = e[he];
	return t
		? t.i > 3
			? t.i - 4
			: t.i
		: Array.isArray(e)
		? 1
		: la(e)
		? 2
		: aa(e)
		? 3
		: 0;
}
function Pn(e, t) {
	return bn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Wo(e, t) {
	return bn(e) === 2 ? e.get(t) : e[t];
}
function im(e, t, n) {
	var r = bn(e);
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function om(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function la(e) {
	return U1 && e instanceof Map;
}
function aa(e) {
	return V1 && e instanceof Set;
}
function Vn(e) {
	return e.o || e.t;
}
function Qc(e) {
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	var t = am(e);
	delete t[he];
	for (var n = Or(t), r = 0; r < n.length; r++) {
		var i = n[r],
			o = t[i];
		o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
			(o.get || o.set) &&
				(t[i] = {
					configurable: !0,
					writable: !0,
					enumerable: o.enumerable,
					value: e[i],
				});
	}
	return Object.create(Object.getPrototypeOf(e), t);
}
function Bc(e, t) {
	return (
		t === void 0 && (t = !1),
		qc(e) ||
			At(e) ||
			!Mt(e) ||
			(bn(e) > 1 && (e.set = e.add = e.clear = e.delete = D1),
			Object.freeze(e),
			t &&
				_n(
					e,
					function (n, r) {
						return Bc(r, !0);
					},
					!0
				)),
		e
	);
}
function D1() {
	$e(2);
}
function qc(e) {
	return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Bt(e) {
	var t = Ru[e];
	return t || $e(18, e), t;
}
function lm(e, t) {
	Ru[e] || (Ru[e] = t);
}
function Pu() {
	return Ui;
}
function ps(e, t) {
	t && (Bt("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Pl(e) {
	Tu(e), e.p.forEach(L1), (e.p = null);
}
function Tu(e) {
	e === Ui && (Ui = e.l);
}
function bd(e) {
	return (Ui = { p: [], l: Ui, h: e, m: !0, _: 0 });
}
function L1(e) {
	var t = e[he];
	t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function hs(e, t) {
	t._ = t.p.length;
	var n = t.p[0],
		r = e !== void 0 && e !== n;
	return (
		t.h.O || Bt("ES5").S(t, e, r),
		r
			? (n[he].P && (Pl(t), $e(4)),
			  Mt(e) && ((e = Tl(t, e)), t.l || Ol(t, e)),
			  t.u && Bt("Patches").M(n[he].t, e, t.u, t.s))
			: (e = Tl(t, n, [])),
		Pl(t),
		t.u && t.v(t.u, t.s),
		e !== Hc ? e : void 0
	);
}
function Tl(e, t, n) {
	if (qc(t)) return t;
	var r = t[he];
	if (!r)
		return (
			_n(
				t,
				function (a, s) {
					return Id(e, r, t, a, s, n);
				},
				!0
			),
			t
		);
	if (r.A !== e) return t;
	if (!r.P) return Ol(e, r.t, !0), r.t;
	if (!r.I) {
		(r.I = !0), r.A._--;
		var i = r.i === 4 || r.i === 5 ? (r.o = Qc(r.k)) : r.o,
			o = i,
			l = !1;
		r.i === 3 && ((o = new Set(i)), i.clear(), (l = !0)),
			_n(o, function (a, s) {
				return Id(e, r, i, a, s, n, l);
			}),
			Ol(e, i, !1),
			n && e.u && Bt("Patches").N(r, n, e.u, e.s);
	}
	return r.o;
}
function Id(e, t, n, r, i, o, l) {
	if (At(i)) {
		var a = Tl(e, i, o && t && t.i !== 3 && !Pn(t.R, r) ? o.concat(r) : void 0);
		if ((im(n, r, a), !At(a))) return;
		e.m = !1;
	} else l && n.add(i);
	if (Mt(i) && !qc(i)) {
		if (!e.h.D && e._ < 1) return;
		Tl(e, i), (t && t.A.l) || Ol(e, i);
	}
}
function Ol(e, t, n) {
	n === void 0 && (n = !1), !e.l && e.h.D && e.m && Bc(t, n);
}
function vs(e, t) {
	var n = e[he];
	return (n ? Vn(n) : e)[t];
}
function Ad(e, t) {
	if (t in e)
		for (var n = Object.getPrototypeOf(e); n; ) {
			var r = Object.getOwnPropertyDescriptor(n, t);
			if (r) return r;
			n = Object.getPrototypeOf(n);
		}
}
function fn(e) {
	e.P || ((e.P = !0), e.l && fn(e.l));
}
function ms(e) {
	e.o || (e.o = Qc(e.t));
}
function Ou(e, t, n) {
	var r = la(t)
		? Bt("MapSet").F(t, n)
		: aa(t)
		? Bt("MapSet").T(t, n)
		: e.O
		? (function (i, o) {
				var l = Array.isArray(i),
					a = {
						i: l ? 1 : 0,
						A: o ? o.A : Pu(),
						P: !1,
						I: !1,
						R: {},
						l: o,
						t: i,
						k: null,
						o: null,
						j: null,
						C: !1,
					},
					s = a,
					u = Vi;
				l && ((s = [a]), (u = li));
				var d = Proxy.revocable(s, u),
					p = d.revoke,
					h = d.proxy;
				return (a.k = h), (a.j = p), h;
		  })(t, n)
		: Bt("ES5").J(t, n);
	return (n ? n.A : Pu()).p.push(r), r;
}
function $1(e) {
	return (
		At(e) || $e(22, e),
		(function t(n) {
			if (!Mt(n)) return n;
			var r,
				i = n[he],
				o = bn(n);
			if (i) {
				if (!i.P && (i.i < 4 || !Bt("ES5").K(i))) return i.t;
				(i.I = !0), (r = Md(n, o)), (i.I = !1);
			} else r = Md(n, o);
			return (
				_n(r, function (l, a) {
					(i && Wo(i.t, l) === a) || im(r, l, t(a));
				}),
				o === 3 ? new Set(r) : r
			);
		})(e)
	);
}
function Md(e, t) {
	switch (t) {
		case 2:
			return new Map(e);
		case 3:
			return Array.from(e);
	}
	return Qc(e);
}
function F1() {
	function e(o, l) {
		var a = i[o];
		return (
			a
				? (a.enumerable = l)
				: (i[o] = a =
						{
							configurable: !0,
							enumerable: l,
							get: function () {
								var s = this[he];
								return Vi.get(s, o);
							},
							set: function (s) {
								var u = this[he];
								Vi.set(u, o, s);
							},
						}),
			a
		);
	}
	function t(o) {
		for (var l = o.length - 1; l >= 0; l--) {
			var a = o[l][he];
			if (!a.P)
				switch (a.i) {
					case 5:
						r(a) && fn(a);
						break;
					case 4:
						n(a) && fn(a);
				}
		}
	}
	function n(o) {
		for (var l = o.t, a = o.k, s = Or(a), u = s.length - 1; u >= 0; u--) {
			var d = s[u];
			if (d !== he) {
				var p = l[d];
				if (p === void 0 && !Pn(l, d)) return !0;
				var h = a[d],
					v = h && h[he];
				if (v ? v.t !== p : !om(h, p)) return !0;
			}
		}
		var g = !!l[he];
		return s.length !== Or(l).length + (g ? 0 : 1);
	}
	function r(o) {
		var l = o.k;
		if (l.length !== o.t.length) return !0;
		var a = Object.getOwnPropertyDescriptor(l, l.length - 1);
		if (a && !a.get) return !0;
		for (var s = 0; s < l.length; s++) if (!l.hasOwnProperty(s)) return !0;
		return !1;
	}
	var i = {};
	lm("ES5", {
		J: function (o, l) {
			var a = Array.isArray(o),
				s = (function (d, p) {
					if (d) {
						for (var h = Array(p.length), v = 0; v < p.length; v++)
							Object.defineProperty(h, "" + v, e(v, !0));
						return h;
					}
					var g = am(p);
					delete g[he];
					for (var x = Or(g), k = 0; k < x.length; k++) {
						var y = x[k];
						g[y] = e(y, d || !!g[y].enumerable);
					}
					return Object.create(Object.getPrototypeOf(p), g);
				})(a, o),
				u = {
					i: a ? 5 : 4,
					A: l ? l.A : Pu(),
					P: !1,
					I: !1,
					R: {},
					l,
					t: o,
					k: s,
					o: null,
					g: !1,
					C: !1,
				};
			return Object.defineProperty(s, he, { value: u, writable: !0 }), s;
		},
		S: function (o, l, a) {
			a
				? At(l) && l[he].A === o && t(o.p)
				: (o.u &&
						(function s(u) {
							if (u && typeof u == "object") {
								var d = u[he];
								if (d) {
									var p = d.t,
										h = d.k,
										v = d.R,
										g = d.i;
									if (g === 4)
										_n(h, function (m) {
											m !== he &&
												(p[m] !== void 0 || Pn(p, m)
													? v[m] || s(h[m])
													: ((v[m] = !0), fn(d)));
										}),
											_n(p, function (m) {
												h[m] !== void 0 || Pn(h, m) || ((v[m] = !1), fn(d));
											});
									else if (g === 5) {
										if ((r(d) && (fn(d), (v.length = !0)), h.length < p.length))
											for (var x = h.length; x < p.length; x++) v[x] = !1;
										else for (var k = p.length; k < h.length; k++) v[k] = !0;
										for (
											var y = Math.min(h.length, p.length), c = 0;
											c < y;
											c++
										)
											h.hasOwnProperty(c) || (v[c] = !0),
												v[c] === void 0 && s(h[c]);
									}
								}
							}
						})(o.p[0]),
				  t(o.p));
		},
		K: function (o) {
			return o.i === 4 ? n(o) : r(o);
		},
	});
}
function z1() {
	function e(r) {
		if (!Mt(r)) return r;
		if (Array.isArray(r)) return r.map(e);
		if (la(r))
			return new Map(
				Array.from(r.entries()).map(function (l) {
					return [l[0], e(l[1])];
				})
			);
		if (aa(r)) return new Set(Array.from(r).map(e));
		var i = Object.create(Object.getPrototypeOf(r));
		for (var o in r) i[o] = e(r[o]);
		return Pn(r, gi) && (i[gi] = r[gi]), i;
	}
	function t(r) {
		return At(r) ? e(r) : r;
	}
	var n = "add";
	lm("Patches", {
		$: function (r, i) {
			return (
				i.forEach(function (o) {
					for (var l = o.path, a = o.op, s = r, u = 0; u < l.length - 1; u++) {
						var d = bn(s),
							p = l[u];
						typeof p != "string" && typeof p != "number" && (p = "" + p),
							(d !== 0 && d !== 1) ||
								(p !== "__proto__" && p !== "constructor") ||
								$e(24),
							typeof s == "function" && p === "prototype" && $e(24),
							typeof (s = Wo(s, p)) != "object" && $e(15, l.join("/"));
					}
					var h = bn(s),
						v = e(o.value),
						g = l[l.length - 1];
					switch (a) {
						case "replace":
							switch (h) {
								case 2:
									return s.set(g, v);
								case 3:
									$e(16);
								default:
									return (s[g] = v);
							}
						case n:
							switch (h) {
								case 1:
									return g === "-" ? s.push(v) : s.splice(g, 0, v);
								case 2:
									return s.set(g, v);
								case 3:
									return s.add(v);
								default:
									return (s[g] = v);
							}
						case "remove":
							switch (h) {
								case 1:
									return s.splice(g, 1);
								case 2:
									return s.delete(g);
								case 3:
									return s.delete(o.value);
								default:
									return delete s[g];
							}
						default:
							$e(17, a);
					}
				}),
				r
			);
		},
		N: function (r, i, o, l) {
			switch (r.i) {
				case 0:
				case 4:
				case 2:
					return (function (a, s, u, d) {
						var p = a.t,
							h = a.o;
						_n(a.R, function (v, g) {
							var x = Wo(p, v),
								k = Wo(h, v),
								y = g ? (Pn(p, v) ? "replace" : n) : "remove";
							if (x !== k || y !== "replace") {
								var c = s.concat(v);
								u.push(
									y === "remove"
										? { op: y, path: c }
										: { op: y, path: c, value: k }
								),
									d.push(
										y === n
											? { op: "remove", path: c }
											: y === "remove"
											? { op: n, path: c, value: t(x) }
											: { op: "replace", path: c, value: t(x) }
									);
							}
						});
					})(r, i, o, l);
				case 5:
				case 1:
					return (function (a, s, u, d) {
						var p = a.t,
							h = a.R,
							v = a.o;
						if (v.length < p.length) {
							var g = [v, p];
							(p = g[0]), (v = g[1]);
							var x = [d, u];
							(u = x[0]), (d = x[1]);
						}
						for (var k = 0; k < p.length; k++)
							if (h[k] && v[k] !== p[k]) {
								var y = s.concat([k]);
								u.push({ op: "replace", path: y, value: t(v[k]) }),
									d.push({ op: "replace", path: y, value: t(p[k]) });
							}
						for (var c = p.length; c < v.length; c++) {
							var m = s.concat([c]);
							u.push({ op: n, path: m, value: t(v[c]) });
						}
						p.length < v.length &&
							d.push({
								op: "replace",
								path: s.concat(["length"]),
								value: p.length,
							});
					})(r, i, o, l);
				case 3:
					return (function (a, s, u, d) {
						var p = a.t,
							h = a.o,
							v = 0;
						p.forEach(function (g) {
							if (!h.has(g)) {
								var x = s.concat([v]);
								u.push({ op: "remove", path: x, value: g }),
									d.unshift({ op: n, path: x, value: g });
							}
							v++;
						}),
							(v = 0),
							h.forEach(function (g) {
								if (!p.has(g)) {
									var x = s.concat([v]);
									u.push({ op: n, path: x, value: g }),
										d.unshift({ op: "remove", path: x, value: g });
								}
								v++;
							});
					})(r, i, o, l);
			}
		},
		M: function (r, i, o, l) {
			o.push({ op: "replace", path: [], value: i === Hc ? void 0 : i }),
				l.push({ op: "replace", path: [], value: r });
		},
	});
}
var Dd,
	Ui,
	Wc = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
	U1 = typeof Map < "u",
	V1 = typeof Set < "u",
	Ld = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
	Hc = Wc
		? Symbol.for("immer-nothing")
		: (((Dd = {})["immer-nothing"] = !0), Dd),
	gi = Wc ? Symbol.for("immer-draftable") : "__$immer_draftable",
	he = Wc ? Symbol.for("immer-state") : "__$immer_state",
	Q1 = "" + Object.prototype.constructor,
	Or =
		typeof Reflect < "u" && Reflect.ownKeys
			? Reflect.ownKeys
			: Object.getOwnPropertySymbols !== void 0
			? function (e) {
					return Object.getOwnPropertyNames(e).concat(
						Object.getOwnPropertySymbols(e)
					);
			  }
			: Object.getOwnPropertyNames,
	am =
		Object.getOwnPropertyDescriptors ||
		function (e) {
			var t = {};
			return (
				Or(e).forEach(function (n) {
					t[n] = Object.getOwnPropertyDescriptor(e, n);
				}),
				t
			);
		},
	Ru = {},
	Vi = {
		get: function (e, t) {
			if (t === he) return e;
			var n = Vn(e);
			if (!Pn(n, t))
				return (function (i, o, l) {
					var a,
						s = Ad(o, l);
					return s
						? "value" in s
							? s.value
							: (a = s.get) === null || a === void 0
							? void 0
							: a.call(i.k)
						: void 0;
				})(e, n, t);
			var r = n[t];
			return e.I || !Mt(r)
				? r
				: r === vs(e.t, t)
				? (ms(e), (e.o[t] = Ou(e.A.h, r, e)))
				: r;
		},
		has: function (e, t) {
			return t in Vn(e);
		},
		ownKeys: function (e) {
			return Reflect.ownKeys(Vn(e));
		},
		set: function (e, t, n) {
			var r = Ad(Vn(e), t);
			if (r != null && r.set) return r.set.call(e.k, n), !0;
			if (!e.P) {
				var i = vs(Vn(e), t),
					o = i == null ? void 0 : i[he];
				if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
				if (om(n, i) && (n !== void 0 || Pn(e.t, t))) return !0;
				ms(e), fn(e);
			}
			return (
				(e.o[t] === n && (n !== void 0 || t in e.o)) ||
					(Number.isNaN(n) && Number.isNaN(e.o[t])) ||
					((e.o[t] = n), (e.R[t] = !0)),
				!0
			);
		},
		deleteProperty: function (e, t) {
			return (
				vs(e.t, t) !== void 0 || t in e.t
					? ((e.R[t] = !1), ms(e), fn(e))
					: delete e.R[t],
				e.o && delete e.o[t],
				!0
			);
		},
		getOwnPropertyDescriptor: function (e, t) {
			var n = Vn(e),
				r = Reflect.getOwnPropertyDescriptor(n, t);
			return (
				r && {
					writable: !0,
					configurable: e.i !== 1 || t !== "length",
					enumerable: r.enumerable,
					value: n[t],
				}
			);
		},
		defineProperty: function () {
			$e(11);
		},
		getPrototypeOf: function (e) {
			return Object.getPrototypeOf(e.t);
		},
		setPrototypeOf: function () {
			$e(12);
		},
	},
	li = {};
_n(Vi, function (e, t) {
	li[e] = function () {
		return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
	};
}),
	(li.deleteProperty = function (e, t) {
		return li.set.call(this, e, t, void 0);
	}),
	(li.set = function (e, t, n) {
		return Vi.set.call(this, e[0], t, n, e[0]);
	});
var B1 = (function () {
		function e(n) {
			var r = this;
			(this.O = Ld),
				(this.D = !0),
				(this.produce = function (i, o, l) {
					if (typeof i == "function" && typeof o != "function") {
						var a = o;
						o = i;
						var s = r;
						return function (x) {
							var k = this;
							x === void 0 && (x = a);
							for (
								var y = arguments.length, c = Array(y > 1 ? y - 1 : 0), m = 1;
								m < y;
								m++
							)
								c[m - 1] = arguments[m];
							return s.produce(x, function (w) {
								var S;
								return (S = o).call.apply(S, [k, w].concat(c));
							});
						};
					}
					var u;
					if (
						(typeof o != "function" && $e(6),
						l !== void 0 && typeof l != "function" && $e(7),
						Mt(i))
					) {
						var d = bd(r),
							p = Ou(r, i, void 0),
							h = !0;
						try {
							(u = o(p)), (h = !1);
						} finally {
							h ? Pl(d) : Tu(d);
						}
						return typeof Promise < "u" && u instanceof Promise
							? u.then(
									function (x) {
										return ps(d, l), hs(x, d);
									},
									function (x) {
										throw (Pl(d), x);
									}
							  )
							: (ps(d, l), hs(u, d));
					}
					if (!i || typeof i != "object") {
						if (
							((u = o(i)) === void 0 && (u = i),
							u === Hc && (u = void 0),
							r.D && Bc(u, !0),
							l)
						) {
							var v = [],
								g = [];
							Bt("Patches").M(i, u, v, g), l(v, g);
						}
						return u;
					}
					$e(21, i);
				}),
				(this.produceWithPatches = function (i, o) {
					if (typeof i == "function")
						return function (u) {
							for (
								var d = arguments.length, p = Array(d > 1 ? d - 1 : 0), h = 1;
								h < d;
								h++
							)
								p[h - 1] = arguments[h];
							return r.produceWithPatches(u, function (v) {
								return i.apply(void 0, [v].concat(p));
							});
						};
					var l,
						a,
						s = r.produce(i, o, function (u, d) {
							(l = u), (a = d);
						});
					return typeof Promise < "u" && s instanceof Promise
						? s.then(function (u) {
								return [u, l, a];
						  })
						: [s, l, a];
				}),
				typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
					this.setUseProxies(n.useProxies),
				typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
					this.setAutoFreeze(n.autoFreeze);
		}
		var t = e.prototype;
		return (
			(t.createDraft = function (n) {
				Mt(n) || $e(8), At(n) && (n = $1(n));
				var r = bd(this),
					i = Ou(this, n, void 0);
				return (i[he].C = !0), Tu(r), i;
			}),
			(t.finishDraft = function (n, r) {
				var i = n && n[he],
					o = i.A;
				return ps(o, r), hs(void 0, o);
			}),
			(t.setAutoFreeze = function (n) {
				this.D = n;
			}),
			(t.setUseProxies = function (n) {
				n && !Ld && $e(20), (this.O = n);
			}),
			(t.applyPatches = function (n, r) {
				var i;
				for (i = r.length - 1; i >= 0; i--) {
					var o = r[i];
					if (o.path.length === 0 && o.op === "replace") {
						n = o.value;
						break;
					}
				}
				i > -1 && (r = r.slice(i + 1));
				var l = Bt("Patches").$;
				return At(n)
					? l(n, r)
					: this.produce(n, function (a) {
							return l(a, r);
					  });
			}),
			e
		);
	})(),
	ct = new B1(),
	io = ct.produce,
	sm = ct.produceWithPatches.bind(ct);
ct.setAutoFreeze.bind(ct);
ct.setUseProxies.bind(ct);
var $d = ct.applyPatches.bind(ct);
ct.createDraft.bind(ct);
ct.finishDraft.bind(ct);
function Qi(e) {
	"@babel/helpers - typeof";
	return (
		(Qi =
			typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							typeof Symbol == "function" &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? "symbol"
							: typeof t;
				  }),
		Qi(e)
	);
}
function q1(e, t) {
	if (Qi(e) !== "object" || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Qi(r) !== "object") return r;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function W1(e) {
	var t = q1(e, "string");
	return Qi(t) === "symbol" ? t : String(t);
}
function H1(e, t, n) {
	return (
		(t = W1(t)),
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0,
			  })
			: (e[t] = n),
		e
	);
}
function Fd(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (i) {
				return Object.getOwnPropertyDescriptor(e, i).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function zd(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2
			? Fd(Object(n), !0).forEach(function (r) {
					H1(e, r, n[r]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: Fd(Object(n)).forEach(function (r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
			  });
	}
	return e;
}
function Qe(e) {
	return (
		"Minified Redux error #" +
		e +
		"; visit https://redux.js.org/Errors?code=" +
		e +
		" for the full message or use the non-minified dev environment for full errors. "
	);
}
var Ud = (function () {
		return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
	})(),
	ys = function () {
		return Math.random().toString(36).substring(7).split("").join(".");
	},
	Rl = {
		INIT: "@@redux/INIT" + ys(),
		REPLACE: "@@redux/REPLACE" + ys(),
		PROBE_UNKNOWN_ACTION: function () {
			return "@@redux/PROBE_UNKNOWN_ACTION" + ys();
		},
	};
function K1(e) {
	if (typeof e != "object" || e === null) return !1;
	for (var t = e; Object.getPrototypeOf(t) !== null; )
		t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function um(e, t, n) {
	var r;
	if (
		(typeof t == "function" && typeof n == "function") ||
		(typeof n == "function" && typeof arguments[3] == "function")
	)
		throw new Error(Qe(0));
	if (
		(typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
		typeof n < "u")
	) {
		if (typeof n != "function") throw new Error(Qe(1));
		return n(um)(e, t);
	}
	if (typeof e != "function") throw new Error(Qe(2));
	var i = e,
		o = t,
		l = [],
		a = l,
		s = !1;
	function u() {
		a === l && (a = l.slice());
	}
	function d() {
		if (s) throw new Error(Qe(3));
		return o;
	}
	function p(x) {
		if (typeof x != "function") throw new Error(Qe(4));
		if (s) throw new Error(Qe(5));
		var k = !0;
		return (
			u(),
			a.push(x),
			function () {
				if (k) {
					if (s) throw new Error(Qe(6));
					(k = !1), u();
					var c = a.indexOf(x);
					a.splice(c, 1), (l = null);
				}
			}
		);
	}
	function h(x) {
		if (!K1(x)) throw new Error(Qe(7));
		if (typeof x.type > "u") throw new Error(Qe(8));
		if (s) throw new Error(Qe(9));
		try {
			(s = !0), (o = i(o, x));
		} finally {
			s = !1;
		}
		for (var k = (l = a), y = 0; y < k.length; y++) {
			var c = k[y];
			c();
		}
		return x;
	}
	function v(x) {
		if (typeof x != "function") throw new Error(Qe(10));
		(i = x), h({ type: Rl.REPLACE });
	}
	function g() {
		var x,
			k = p;
		return (
			(x = {
				subscribe: function (c) {
					if (typeof c != "object" || c === null) throw new Error(Qe(11));
					function m() {
						c.next && c.next(d());
					}
					m();
					var w = k(m);
					return { unsubscribe: w };
				},
			}),
			(x[Ud] = function () {
				return this;
			}),
			x
		);
	}
	return (
		h({ type: Rl.INIT }),
		(r = { dispatch: h, subscribe: p, getState: d, replaceReducer: v }),
		(r[Ud] = g),
		r
	);
}
function G1(e) {
	Object.keys(e).forEach(function (t) {
		var n = e[t],
			r = n(void 0, { type: Rl.INIT });
		if (typeof r > "u") throw new Error(Qe(12));
		if (typeof n(void 0, { type: Rl.PROBE_UNKNOWN_ACTION() }) > "u")
			throw new Error(Qe(13));
	});
}
function Kc(e) {
	for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
		var i = t[r];
		typeof e[i] == "function" && (n[i] = e[i]);
	}
	var o = Object.keys(n),
		l;
	try {
		G1(n);
	} catch (a) {
		l = a;
	}
	return function (s, u) {
		if ((s === void 0 && (s = {}), l)) throw l;
		for (var d = !1, p = {}, h = 0; h < o.length; h++) {
			var v = o[h],
				g = n[v],
				x = s[v],
				k = g(x, u);
			if (typeof k > "u") throw (u && u.type, new Error(Qe(14)));
			(p[v] = k), (d = d || k !== x);
		}
		return (d = d || o.length !== Object.keys(s).length), d ? p : s;
	};
}
function _l() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	return t.length === 0
		? function (r) {
				return r;
		  }
		: t.length === 1
		? t[0]
		: t.reduce(function (r, i) {
				return function () {
					return r(i.apply(void 0, arguments));
				};
		  });
}
function Y1() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	return function (r) {
		return function () {
			var i = r.apply(void 0, arguments),
				o = function () {
					throw new Error(Qe(15));
				},
				l = {
					getState: i.getState,
					dispatch: function () {
						return o.apply(void 0, arguments);
					},
				},
				a = t.map(function (s) {
					return s(l);
				});
			return (
				(o = _l.apply(void 0, a)(i.dispatch)),
				zd(zd({}, i), {}, { dispatch: o })
			);
		};
	};
}
var bl = "NOT_FOUND";
function X1(e) {
	var t;
	return {
		get: function (r) {
			return t && e(t.key, r) ? t.value : bl;
		},
		put: function (r, i) {
			t = { key: r, value: i };
		},
		getEntries: function () {
			return t ? [t] : [];
		},
		clear: function () {
			t = void 0;
		},
	};
}
function J1(e, t) {
	var n = [];
	function r(a) {
		var s = n.findIndex(function (d) {
			return t(a, d.key);
		});
		if (s > -1) {
			var u = n[s];
			return s > 0 && (n.splice(s, 1), n.unshift(u)), u.value;
		}
		return bl;
	}
	function i(a, s) {
		r(a) === bl && (n.unshift({ key: a, value: s }), n.length > e && n.pop());
	}
	function o() {
		return n;
	}
	function l() {
		n = [];
	}
	return { get: r, put: i, getEntries: o, clear: l };
}
var Z1 = function (t, n) {
	return t === n;
};
function ew(e) {
	return function (n, r) {
		if (n === null || r === null || n.length !== r.length) return !1;
		for (var i = n.length, o = 0; o < i; o++) if (!e(n[o], r[o])) return !1;
		return !0;
	};
}
function _u(e, t) {
	var n = typeof t == "object" ? t : { equalityCheck: t },
		r = n.equalityCheck,
		i = r === void 0 ? Z1 : r,
		o = n.maxSize,
		l = o === void 0 ? 1 : o,
		a = n.resultEqualityCheck,
		s = ew(i),
		u = l === 1 ? X1(s) : J1(l, s);
	function d() {
		var p = u.get(arguments);
		if (p === bl) {
			if (((p = e.apply(null, arguments)), a)) {
				var h = u.getEntries(),
					v = h.find(function (g) {
						return a(g.value, p);
					});
				v && (p = v.value);
			}
			u.put(arguments, p);
		}
		return p;
	}
	return (
		(d.clearCache = function () {
			return u.clear();
		}),
		d
	);
}
function tw(e) {
	var t = Array.isArray(e[0]) ? e[0] : e;
	if (
		!t.every(function (r) {
			return typeof r == "function";
		})
	) {
		var n = t
			.map(function (r) {
				return typeof r == "function"
					? "function " + (r.name || "unnamed") + "()"
					: typeof r;
			})
			.join(", ");
		throw new Error(
			"createSelector expects all input-selectors to be functions, but received the following types: [" +
				n +
				"]"
		);
	}
	return t;
}
function nw(e) {
	for (
		var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
		r < t;
		r++
	)
		n[r - 1] = arguments[r];
	var i = function () {
		for (var l = arguments.length, a = new Array(l), s = 0; s < l; s++)
			a[s] = arguments[s];
		var u = 0,
			d,
			p = { memoizeOptions: void 0 },
			h = a.pop();
		if (
			(typeof h == "object" && ((p = h), (h = a.pop())), typeof h != "function")
		)
			throw new Error(
				"createSelector expects an output function after the inputs, but received: [" +
					typeof h +
					"]"
			);
		var v = p,
			g = v.memoizeOptions,
			x = g === void 0 ? n : g,
			k = Array.isArray(x) ? x : [x],
			y = tw(a),
			c = e.apply(
				void 0,
				[
					function () {
						return u++, h.apply(null, arguments);
					},
				].concat(k)
			),
			m = e(function () {
				for (var S = [], E = y.length, C = 0; C < E; C++)
					S.push(y[C].apply(null, arguments));
				return (d = c.apply(null, S)), d;
			});
		return (
			Object.assign(m, {
				resultFunc: h,
				memoizedResultFunc: c,
				dependencies: y,
				lastResult: function () {
					return d;
				},
				recomputations: function () {
					return u;
				},
				resetRecomputations: function () {
					return (u = 0);
				},
			}),
			m
		);
	};
	return i;
}
var wi = nw(_u);
function cm(e) {
	var t = function (r) {
		var i = r.dispatch,
			o = r.getState;
		return function (l) {
			return function (a) {
				return typeof a == "function" ? a(i, o, e) : l(a);
			};
		};
	};
	return t;
}
var fm = cm();
fm.withExtraArgument = cm;
const Vd = fm;
var dm =
		(globalThis && globalThis.__extends) ||
		(function () {
			var e = function (t, n) {
				return (
					(e =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (r, i) {
								r.__proto__ = i;
							}) ||
						function (r, i) {
							for (var o in i)
								Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
						}),
					e(t, n)
				);
			};
			return function (t, n) {
				if (typeof n != "function" && n !== null)
					throw new TypeError(
						"Class extends value " + String(n) + " is not a constructor or null"
					);
				e(t, n);
				function r() {
					this.constructor = t;
				}
				t.prototype =
					n === null
						? Object.create(n)
						: ((r.prototype = n.prototype), new r());
			};
		})(),
	rw =
		(globalThis && globalThis.__generator) ||
		function (e, t) {
			var n = {
					label: 0,
					sent: function () {
						if (o[0] & 1) throw o[1];
						return o[1];
					},
					trys: [],
					ops: [],
				},
				r,
				i,
				o,
				l;
			return (
				(l = { next: a(0), throw: a(1), return: a(2) }),
				typeof Symbol == "function" &&
					(l[Symbol.iterator] = function () {
						return this;
					}),
				l
			);
			function a(u) {
				return function (d) {
					return s([u, d]);
				};
			}
			function s(u) {
				if (r) throw new TypeError("Generator is already executing.");
				for (; n; )
					try {
						if (
							((r = 1),
							i &&
								(o =
									u[0] & 2
										? i.return
										: u[0]
										? i.throw || ((o = i.return) && o.call(i), 0)
										: i.next) &&
								!(o = o.call(i, u[1])).done)
						)
							return o;
						switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
							case 0:
							case 1:
								o = u;
								break;
							case 4:
								return n.label++, { value: u[1], done: !1 };
							case 5:
								n.label++, (i = u[1]), (u = [0]);
								continue;
							case 7:
								(u = n.ops.pop()), n.trys.pop();
								continue;
							default:
								if (
									((o = n.trys),
									!(o = o.length > 0 && o[o.length - 1]) &&
										(u[0] === 6 || u[0] === 2))
								) {
									n = 0;
									continue;
								}
								if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
									n.label = u[1];
									break;
								}
								if (u[0] === 6 && n.label < o[1]) {
									(n.label = o[1]), (o = u);
									break;
								}
								if (o && n.label < o[2]) {
									(n.label = o[2]), n.ops.push(u);
									break;
								}
								o[2] && n.ops.pop(), n.trys.pop();
								continue;
						}
						u = t.call(e, n);
					} catch (d) {
						(u = [6, d]), (i = 0);
					} finally {
						r = o = 0;
					}
				if (u[0] & 5) throw u[1];
				return { value: u[0] ? u[1] : void 0, done: !0 };
			}
		},
	Lr =
		(globalThis && globalThis.__spreadArray) ||
		function (e, t) {
			for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
			return e;
		},
	iw = Object.defineProperty,
	ow = Object.defineProperties,
	lw = Object.getOwnPropertyDescriptors,
	Qd = Object.getOwnPropertySymbols,
	aw = Object.prototype.hasOwnProperty,
	sw = Object.prototype.propertyIsEnumerable,
	Bd = function (e, t, n) {
		return t in e
			? iw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
			: (e[t] = n);
	},
	Tn = function (e, t) {
		for (var n in t || (t = {})) aw.call(t, n) && Bd(e, n, t[n]);
		if (Qd)
			for (var r = 0, i = Qd(t); r < i.length; r++) {
				var n = i[r];
				sw.call(t, n) && Bd(e, n, t[n]);
			}
		return e;
	},
	gs = function (e, t) {
		return ow(e, lw(t));
	},
	uw = function (e, t, n) {
		return new Promise(function (r, i) {
			var o = function (s) {
					try {
						a(n.next(s));
					} catch (u) {
						i(u);
					}
				},
				l = function (s) {
					try {
						a(n.throw(s));
					} catch (u) {
						i(u);
					}
				},
				a = function (s) {
					return s.done ? r(s.value) : Promise.resolve(s.value).then(o, l);
				};
			a((n = n.apply(e, t)).next());
		});
	},
	cw =
		typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			: function () {
					if (arguments.length !== 0)
						return typeof arguments[0] == "object"
							? _l
							: _l.apply(null, arguments);
			  };
function In(e) {
	if (typeof e != "object" || e === null) return !1;
	var t = Object.getPrototypeOf(e);
	if (t === null) return !0;
	for (var n = t; Object.getPrototypeOf(n) !== null; )
		n = Object.getPrototypeOf(n);
	return t === n;
}
var fw = (function (e) {
		dm(t, e);
		function t() {
			for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
			var i = e.apply(this, n) || this;
			return Object.setPrototypeOf(i, t.prototype), i;
		}
		return (
			Object.defineProperty(t, Symbol.species, {
				get: function () {
					return t;
				},
				enumerable: !1,
				configurable: !0,
			}),
			(t.prototype.concat = function () {
				for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
				return e.prototype.concat.apply(this, n);
			}),
			(t.prototype.prepend = function () {
				for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
				return n.length === 1 && Array.isArray(n[0])
					? new (t.bind.apply(t, Lr([void 0], n[0].concat(this))))()
					: new (t.bind.apply(t, Lr([void 0], n.concat(this))))();
			}),
			t
		);
	})(Array),
	dw = (function (e) {
		dm(t, e);
		function t() {
			for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
			var i = e.apply(this, n) || this;
			return Object.setPrototypeOf(i, t.prototype), i;
		}
		return (
			Object.defineProperty(t, Symbol.species, {
				get: function () {
					return t;
				},
				enumerable: !1,
				configurable: !0,
			}),
			(t.prototype.concat = function () {
				for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
				return e.prototype.concat.apply(this, n);
			}),
			(t.prototype.prepend = function () {
				for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
				return n.length === 1 && Array.isArray(n[0])
					? new (t.bind.apply(t, Lr([void 0], n[0].concat(this))))()
					: new (t.bind.apply(t, Lr([void 0], n.concat(this))))();
			}),
			t
		);
	})(Array);
function bu(e) {
	return Mt(e) ? io(e, function () {}) : e;
}
function pw(e) {
	return typeof e == "boolean";
}
function hw() {
	return function (t) {
		return vw(t);
	};
}
function vw(e) {
	e === void 0 && (e = {});
	var t = e.thunk,
		n = t === void 0 ? !0 : t;
	e.immutableCheck, e.serializableCheck;
	var r = new fw();
	return (
		n && (pw(n) ? r.push(Vd) : r.push(Vd.withExtraArgument(n.extraArgument))), r
	);
}
var mw = !0;
function yw(e) {
	var t = hw(),
		n = e || {},
		r = n.reducer,
		i = r === void 0 ? void 0 : r,
		o = n.middleware,
		l = o === void 0 ? t() : o,
		a = n.devTools,
		s = a === void 0 ? !0 : a,
		u = n.preloadedState,
		d = u === void 0 ? void 0 : u,
		p = n.enhancers,
		h = p === void 0 ? void 0 : p,
		v;
	if (typeof i == "function") v = i;
	else if (In(i)) v = Kc(i);
	else
		throw new Error(
			'"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
		);
	var g = l;
	typeof g == "function" && (g = g(t));
	var x = Y1.apply(void 0, g),
		k = _l;
	s && (k = cw(Tn({ trace: !mw }, typeof s == "object" && s)));
	var y = new dw(x),
		c = y;
	Array.isArray(h) ? (c = Lr([x], h)) : typeof h == "function" && (c = h(y));
	var m = k.apply(void 0, c);
	return um(v, d, m);
}
function ot(e, t) {
	function n() {
		for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
		if (t) {
			var o = t.apply(void 0, r);
			if (!o) throw new Error("prepareAction did not return an object");
			return Tn(
				Tn({ type: e, payload: o.payload }, "meta" in o && { meta: o.meta }),
				"error" in o && { error: o.error }
			);
		}
		return { type: e, payload: r[0] };
	}
	return (
		(n.toString = function () {
			return "" + e;
		}),
		(n.type = e),
		(n.match = function (r) {
			return r.type === e;
		}),
		n
	);
}
function pm(e) {
	var t = {},
		n = [],
		r,
		i = {
			addCase: function (o, l) {
				var a = typeof o == "string" ? o : o.type;
				if (a in t)
					throw new Error(
						"addCase cannot be called with two reducers for the same action type"
					);
				return (t[a] = l), i;
			},
			addMatcher: function (o, l) {
				return n.push({ matcher: o, reducer: l }), i;
			},
			addDefaultCase: function (o) {
				return (r = o), i;
			},
		};
	return e(i), [t, n, r];
}
function gw(e) {
	return typeof e == "function";
}
function ww(e, t, n, r) {
	n === void 0 && (n = []);
	var i = typeof t == "function" ? pm(t) : [t, n, r],
		o = i[0],
		l = i[1],
		a = i[2],
		s;
	if (gw(e))
		s = function () {
			return bu(e());
		};
	else {
		var u = bu(e);
		s = function () {
			return u;
		};
	}
	function d(p, h) {
		p === void 0 && (p = s());
		var v = Lr(
			[o[h.type]],
			l
				.filter(function (g) {
					var x = g.matcher;
					return x(h);
				})
				.map(function (g) {
					var x = g.reducer;
					return x;
				})
		);
		return (
			v.filter(function (g) {
				return !!g;
			}).length === 0 && (v = [a]),
			v.reduce(function (g, x) {
				if (x)
					if (At(g)) {
						var k = g,
							y = x(k, h);
						return y === void 0 ? g : y;
					} else {
						if (Mt(g))
							return io(g, function (c) {
								return x(c, h);
							});
						var y = x(g, h);
						if (y === void 0) {
							if (g === null) return g;
							throw Error(
								"A case reducer on a non-draftable value must not return undefined"
							);
						}
						return y;
					}
				return g;
			}, p)
		);
	}
	return (d.getInitialState = s), d;
}
function xw(e, t) {
	return e + "/" + t;
}
function Qn(e) {
	var t = e.name;
	if (!t) throw new Error("`name` is a required option for createSlice");
	typeof process < "u";
	var n =
			typeof e.initialState == "function" ? e.initialState : bu(e.initialState),
		r = e.reducers || {},
		i = Object.keys(r),
		o = {},
		l = {},
		a = {};
	i.forEach(function (d) {
		var p = r[d],
			h = xw(t, d),
			v,
			g;
		"reducer" in p ? ((v = p.reducer), (g = p.prepare)) : (v = p),
			(o[d] = v),
			(l[h] = v),
			(a[d] = g ? ot(h, g) : ot(h));
	});
	function s() {
		var d =
				typeof e.extraReducers == "function"
					? pm(e.extraReducers)
					: [e.extraReducers],
			p = d[0],
			h = p === void 0 ? {} : p,
			v = d[1],
			g = v === void 0 ? [] : v,
			x = d[2],
			k = x === void 0 ? void 0 : x,
			y = Tn(Tn({}, h), l);
		return ww(n, function (c) {
			for (var m in y) c.addCase(m, y[m]);
			for (var w = 0, S = g; w < S.length; w++) {
				var E = S[w];
				c.addMatcher(E.matcher, E.reducer);
			}
			k && c.addDefaultCase(k);
		});
	}
	var u;
	return {
		name: t,
		reducer: function (d, p) {
			return u || (u = s()), u(d, p);
		},
		actions: a,
		caseReducers: o,
		getInitialState: function () {
			return u || (u = s()), u.getInitialState();
		},
	};
}
var Sw = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
	hm = function (e) {
		e === void 0 && (e = 21);
		for (var t = "", n = e; n--; ) t += Sw[(Math.random() * 64) | 0];
		return t;
	},
	kw = ["name", "message", "stack", "code"],
	ws = (function () {
		function e(t, n) {
			(this.payload = t), (this.meta = n);
		}
		return e;
	})(),
	qd = (function () {
		function e(t, n) {
			(this.payload = t), (this.meta = n);
		}
		return e;
	})(),
	Ew = function (e) {
		if (typeof e == "object" && e !== null) {
			for (var t = {}, n = 0, r = kw; n < r.length; n++) {
				var i = r[n];
				typeof e[i] == "string" && (t[i] = e[i]);
			}
			return t;
		}
		return { message: String(e) };
	},
	Wd = (function () {
		function e(t, n, r) {
			var i = ot(t + "/fulfilled", function (u, d, p, h) {
					return {
						payload: u,
						meta: gs(Tn({}, h || {}), {
							arg: p,
							requestId: d,
							requestStatus: "fulfilled",
						}),
					};
				}),
				o = ot(t + "/pending", function (u, d, p) {
					return {
						payload: void 0,
						meta: gs(Tn({}, p || {}), {
							arg: d,
							requestId: u,
							requestStatus: "pending",
						}),
					};
				}),
				l = ot(t + "/rejected", function (u, d, p, h, v) {
					return {
						payload: h,
						error: ((r && r.serializeError) || Ew)(u || "Rejected"),
						meta: gs(Tn({}, v || {}), {
							arg: p,
							requestId: d,
							rejectedWithValue: !!h,
							requestStatus: "rejected",
							aborted: (u == null ? void 0 : u.name) === "AbortError",
							condition: (u == null ? void 0 : u.name) === "ConditionError",
						}),
					};
				}),
				a =
					typeof AbortController < "u"
						? AbortController
						: (function () {
								function u() {
									this.signal = {
										aborted: !1,
										addEventListener: function () {},
										dispatchEvent: function () {
											return !1;
										},
										onabort: function () {},
										removeEventListener: function () {},
										reason: void 0,
										throwIfAborted: function () {},
									};
								}
								return (u.prototype.abort = function () {}), u;
						  })();
			function s(u) {
				return function (d, p, h) {
					var v = r != null && r.idGenerator ? r.idGenerator(u) : hm(),
						g = new a(),
						x;
					function k(c) {
						(x = c), g.abort();
					}
					var y = (function () {
						return uw(this, null, function () {
							var c, m, w, S, E, C, j;
							return rw(this, function (T) {
								switch (T.label) {
									case 0:
										return (
											T.trys.push([0, 4, , 5]),
											(S =
												(c = r == null ? void 0 : r.condition) == null
													? void 0
													: c.call(r, u, { getState: p, extra: h })),
											jw(S) ? [4, S] : [3, 2]
										);
									case 1:
										(S = T.sent()), (T.label = 2);
									case 2:
										if (S === !1 || g.signal.aborted)
											throw {
												name: "ConditionError",
												message:
													"Aborted due to condition callback returning false.",
											};
										return (
											(E = new Promise(function (P, R) {
												return g.signal.addEventListener("abort", function () {
													return R({
														name: "AbortError",
														message: x || "Aborted",
													});
												});
											})),
											d(
												o(
													v,
													u,
													(m = r == null ? void 0 : r.getPendingMeta) == null
														? void 0
														: m.call(
																r,
																{ requestId: v, arg: u },
																{ getState: p, extra: h }
														  )
												)
											),
											[
												4,
												Promise.race([
													E,
													Promise.resolve(
														n(u, {
															dispatch: d,
															getState: p,
															extra: h,
															requestId: v,
															signal: g.signal,
															abort: k,
															rejectWithValue: function (P, R) {
																return new ws(P, R);
															},
															fulfillWithValue: function (P, R) {
																return new qd(P, R);
															},
														})
													).then(function (P) {
														if (P instanceof ws) throw P;
														return P instanceof qd
															? i(P.payload, v, u, P.meta)
															: i(P, v, u);
													}),
												]),
											]
										);
									case 3:
										return (w = T.sent()), [3, 5];
									case 4:
										return (
											(C = T.sent()),
											(w =
												C instanceof ws
													? l(null, v, u, C.payload, C.meta)
													: l(C, v, u)),
											[3, 5]
										);
									case 5:
										return (
											(j =
												r &&
												!r.dispatchConditionRejection &&
												l.match(w) &&
												w.meta.condition),
											j || d(w),
											[2, w]
										);
								}
							});
						});
					})();
					return Object.assign(y, {
						abort: k,
						requestId: v,
						arg: u,
						unwrap: function () {
							return y.then(Cw);
						},
					});
				};
			}
			return Object.assign(s, {
				pending: o,
				rejected: l,
				fulfilled: i,
				typePrefix: t,
			});
		}
		return (
			(e.withTypes = function () {
				return e;
			}),
			e
		);
	})();
function Cw(e) {
	if (e.meta && e.meta.rejectedWithValue) throw e.payload;
	if (e.error) throw e.error;
	return e.payload;
}
function jw(e) {
	return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Nw = function (e) {
		return e && typeof e.match == "function";
	},
	vm = function (e, t) {
		return Nw(e) ? e.match(t) : e(t);
	};
function qr() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return function (n) {
		return e.some(function (r) {
			return vm(r, n);
		});
	};
}
function xi() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return function (n) {
		return e.every(function (r) {
			return vm(r, n);
		});
	};
}
function sa(e, t) {
	if (!e || !e.meta) return !1;
	var n = typeof e.meta.requestId == "string",
		r = t.indexOf(e.meta.requestStatus) > -1;
	return n && r;
}
function oo(e) {
	return (
		typeof e[0] == "function" &&
		"pending" in e[0] &&
		"fulfilled" in e[0] &&
		"rejected" in e[0]
	);
}
function Gc() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return e.length === 0
		? function (n) {
				return sa(n, ["pending"]);
		  }
		: oo(e)
		? function (n) {
				var r = e.map(function (o) {
						return o.pending;
					}),
					i = qr.apply(void 0, r);
				return i(n);
		  }
		: Gc()(e[0]);
}
function Bi() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return e.length === 0
		? function (n) {
				return sa(n, ["rejected"]);
		  }
		: oo(e)
		? function (n) {
				var r = e.map(function (o) {
						return o.rejected;
					}),
					i = qr.apply(void 0, r);
				return i(n);
		  }
		: Bi()(e[0]);
}
function ua() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	var n = function (r) {
		return r && r.meta && r.meta.rejectedWithValue;
	};
	return e.length === 0
		? function (r) {
				var i = xi(Bi.apply(void 0, e), n);
				return i(r);
		  }
		: oo(e)
		? function (r) {
				var i = xi(Bi.apply(void 0, e), n);
				return i(r);
		  }
		: ua()(e[0]);
}
function lr() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return e.length === 0
		? function (n) {
				return sa(n, ["fulfilled"]);
		  }
		: oo(e)
		? function (n) {
				var r = e.map(function (o) {
						return o.fulfilled;
					}),
					i = qr.apply(void 0, r);
				return i(n);
		  }
		: lr()(e[0]);
}
function Iu() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return e.length === 0
		? function (n) {
				return sa(n, ["pending", "fulfilled", "rejected"]);
		  }
		: oo(e)
		? function (n) {
				for (var r = [], i = 0, o = e; i < o.length; i++) {
					var l = o[i];
					r.push(l.pending, l.rejected, l.fulfilled);
				}
				var a = qr.apply(void 0, r);
				return a(n);
		  }
		: Iu()(e[0]);
}
var Yc = "listenerMiddleware";
ot(Yc + "/add");
ot(Yc + "/removeAll");
ot(Yc + "/remove");
var ai = "RTK_autoBatch",
	xs = function () {
		return function (e) {
			var t;
			return { payload: e, meta: ((t = {}), (t[ai] = !0), t) };
		};
	},
	Hd;
typeof queueMicrotask == "function" &&
	queueMicrotask.bind(
		typeof window < "u" ? window : typeof global < "u" ? global : globalThis
	);
F1();
var Il =
		(globalThis && globalThis.__generator) ||
		function (e, t) {
			var n = {
					label: 0,
					sent: function () {
						if (o[0] & 1) throw o[1];
						return o[1];
					},
					trys: [],
					ops: [],
				},
				r,
				i,
				o,
				l;
			return (
				(l = { next: a(0), throw: a(1), return: a(2) }),
				typeof Symbol == "function" &&
					(l[Symbol.iterator] = function () {
						return this;
					}),
				l
			);
			function a(u) {
				return function (d) {
					return s([u, d]);
				};
			}
			function s(u) {
				if (r) throw new TypeError("Generator is already executing.");
				for (; n; )
					try {
						if (
							((r = 1),
							i &&
								(o =
									u[0] & 2
										? i.return
										: u[0]
										? i.throw || ((o = i.return) && o.call(i), 0)
										: i.next) &&
								!(o = o.call(i, u[1])).done)
						)
							return o;
						switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
							case 0:
							case 1:
								o = u;
								break;
							case 4:
								return n.label++, { value: u[1], done: !1 };
							case 5:
								n.label++, (i = u[1]), (u = [0]);
								continue;
							case 7:
								(u = n.ops.pop()), n.trys.pop();
								continue;
							default:
								if (
									((o = n.trys),
									!(o = o.length > 0 && o[o.length - 1]) &&
										(u[0] === 6 || u[0] === 2))
								) {
									n = 0;
									continue;
								}
								if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
									n.label = u[1];
									break;
								}
								if (u[0] === 6 && n.label < o[1]) {
									(n.label = o[1]), (o = u);
									break;
								}
								if (o && n.label < o[2]) {
									(n.label = o[2]), n.ops.push(u);
									break;
								}
								o[2] && n.ops.pop(), n.trys.pop();
								continue;
						}
						u = t.call(e, n);
					} catch (d) {
						(u = [6, d]), (i = 0);
					} finally {
						r = o = 0;
					}
				if (u[0] & 5) throw u[1];
				return { value: u[0] ? u[1] : void 0, done: !0 };
			}
		},
	Al =
		(globalThis && globalThis.__spreadArray) ||
		function (e, t) {
			for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
			return e;
		},
	Pw = Object.defineProperty,
	Tw = Object.defineProperties,
	Ow = Object.getOwnPropertyDescriptors,
	Ml = Object.getOwnPropertySymbols,
	mm = Object.prototype.hasOwnProperty,
	ym = Object.prototype.propertyIsEnumerable,
	Kd = function (e, t, n) {
		return t in e
			? Pw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
			: (e[t] = n);
	},
	je = function (e, t) {
		for (var n in t || (t = {})) mm.call(t, n) && Kd(e, n, t[n]);
		if (Ml)
			for (var r = 0, i = Ml(t); r < i.length; r++) {
				var n = i[r];
				ym.call(t, n) && Kd(e, n, t[n]);
			}
		return e;
	},
	Ut = function (e, t) {
		return Tw(e, Ow(t));
	},
	Gd = function (e, t) {
		var n = {};
		for (var r in e) mm.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && Ml)
			for (var i = 0, o = Ml(e); i < o.length; i++) {
				var r = o[i];
				t.indexOf(r) < 0 && ym.call(e, r) && (n[r] = e[r]);
			}
		return n;
	},
	Dl = function (e, t, n) {
		return new Promise(function (r, i) {
			var o = function (s) {
					try {
						a(n.next(s));
					} catch (u) {
						i(u);
					}
				},
				l = function (s) {
					try {
						a(n.throw(s));
					} catch (u) {
						i(u);
					}
				},
				a = function (s) {
					return s.done ? r(s.value) : Promise.resolve(s.value).then(o, l);
				};
			a((n = n.apply(e, t)).next());
		});
	},
	me;
(function (e) {
	(e.uninitialized = "uninitialized"),
		(e.pending = "pending"),
		(e.fulfilled = "fulfilled"),
		(e.rejected = "rejected");
})(me || (me = {}));
function Rw(e) {
	return {
		status: e,
		isUninitialized: e === me.uninitialized,
		isLoading: e === me.pending,
		isSuccess: e === me.fulfilled,
		isError: e === me.rejected,
	};
}
function _w(e) {
	return new RegExp("(^|:)//").test(e);
}
var bw = function (e) {
		return e.replace(/\/$/, "");
	},
	Iw = function (e) {
		return e.replace(/^\//, "");
	};
function Aw(e, t) {
	if (!e) return t;
	if (!t) return e;
	if (_w(t)) return t;
	var n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
	return (e = bw(e)), (t = Iw(t)), "" + e + n + t;
}
var Yd = function (e) {
	return [].concat.apply([], e);
};
function Mw() {
	return typeof navigator > "u" || navigator.onLine === void 0
		? !0
		: navigator.onLine;
}
function Dw() {
	return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var Xd = In;
function gm(e, t) {
	if (e === t || !((Xd(e) && Xd(t)) || (Array.isArray(e) && Array.isArray(t))))
		return t;
	for (
		var n = Object.keys(t),
			r = Object.keys(e),
			i = n.length === r.length,
			o = Array.isArray(t) ? [] : {},
			l = 0,
			a = n;
		l < a.length;
		l++
	) {
		var s = a[l];
		(o[s] = gm(e[s], t[s])), i && (i = e[s] === o[s]);
	}
	return i ? e : o;
}
var Jd = function () {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return fetch.apply(void 0, e);
	},
	Lw = function (e) {
		return e.status >= 200 && e.status <= 299;
	},
	$w = function (e) {
		return /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
	};
function Zd(e) {
	if (!In(e)) return e;
	for (var t = je({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
		var i = r[n],
			o = i[0],
			l = i[1];
		l === void 0 && delete t[o];
	}
	return t;
}
function Fw(e) {
	var t = this;
	e === void 0 && (e = {});
	var n = e,
		r = n.baseUrl,
		i = n.prepareHeaders,
		o =
			i === void 0
				? function (m) {
						return m;
				  }
				: i,
		l = n.fetchFn,
		a = l === void 0 ? Jd : l,
		s = n.paramsSerializer,
		u = n.isJsonContentType,
		d = u === void 0 ? $w : u,
		p = n.jsonContentType,
		h = p === void 0 ? "application/json" : p,
		v = n.jsonReplacer,
		g = n.timeout,
		x = n.responseHandler,
		k = n.validateStatus,
		y = Gd(n, [
			"baseUrl",
			"prepareHeaders",
			"fetchFn",
			"paramsSerializer",
			"isJsonContentType",
			"jsonContentType",
			"jsonReplacer",
			"timeout",
			"responseHandler",
			"validateStatus",
		]);
	return (
		typeof fetch > "u" &&
			a === Jd &&
			console.warn(
				"Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."
			),
		function (m, w) {
			return Dl(t, null, function () {
				var S,
					E,
					C,
					j,
					T,
					P,
					R,
					_,
					b,
					D,
					U,
					B,
					H,
					A,
					z,
					V,
					G,
					J,
					Z,
					te,
					ee,
					ne,
					le,
					Je,
					Dt,
					We,
					Et,
					oe,
					Ct,
					lo,
					Ia,
					ao,
					N,
					I,
					M,
					K;
				return Il(this, function (Q) {
					switch (Q.label) {
						case 0:
							return (
								(S = w.signal),
								(E = w.getState),
								(C = w.extra),
								(j = w.endpoint),
								(T = w.forced),
								(P = w.type),
								(_ = typeof m == "string" ? { url: m } : m),
								(b = _.url),
								(D = _.headers),
								(U = D === void 0 ? new Headers(y.headers) : D),
								(B = _.params),
								(H = B === void 0 ? void 0 : B),
								(A = _.responseHandler),
								(z = A === void 0 ? x ?? "json" : A),
								(V = _.validateStatus),
								(G = V === void 0 ? k ?? Lw : V),
								(J = _.timeout),
								(Z = J === void 0 ? g : J),
								(te = Gd(_, [
									"url",
									"headers",
									"params",
									"responseHandler",
									"validateStatus",
									"timeout",
								])),
								(ee = je(Ut(je({}, y), { signal: S }), te)),
								(U = new Headers(Zd(U))),
								(ne = ee),
								[
									4,
									o(U, {
										getState: E,
										extra: C,
										endpoint: j,
										forced: T,
										type: P,
									}),
								]
							);
						case 1:
							(ne.headers = Q.sent() || U),
								(le = function (L) {
									return (
										typeof L == "object" &&
										(In(L) || Array.isArray(L) || typeof L.toJSON == "function")
									);
								}),
								!ee.headers.has("content-type") &&
									le(ee.body) &&
									ee.headers.set("content-type", h),
								le(ee.body) &&
									d(ee.headers) &&
									(ee.body = JSON.stringify(ee.body, v)),
								H &&
									((Je = ~b.indexOf("?") ? "&" : "?"),
									(Dt = s ? s(H) : new URLSearchParams(Zd(H))),
									(b += Je + Dt)),
								(b = Aw(r, b)),
								(We = new Request(b, ee)),
								(Et = We.clone()),
								(R = { request: Et }),
								(Ct = !1),
								(lo =
									Z &&
									setTimeout(function () {
										(Ct = !0), w.abort();
									}, Z)),
								(Q.label = 2);
						case 2:
							return Q.trys.push([2, 4, 5, 6]), [4, a(We)];
						case 3:
							return (oe = Q.sent()), [3, 6];
						case 4:
							return (
								(Ia = Q.sent()),
								[
									2,
									{
										error: {
											status: Ct ? "TIMEOUT_ERROR" : "FETCH_ERROR",
											error: String(Ia),
										},
										meta: R,
									},
								]
							);
						case 5:
							return lo && clearTimeout(lo), [7];
						case 6:
							(ao = oe.clone()), (R.response = ao), (I = ""), (Q.label = 7);
						case 7:
							return (
								Q.trys.push([7, 9, , 10]),
								[
									4,
									Promise.all([
										c(oe, z).then(
											function (L) {
												return (N = L);
											},
											function (L) {
												return (M = L);
											}
										),
										ao.text().then(
											function (L) {
												return (I = L);
											},
											function () {}
										),
									]),
								]
							);
						case 8:
							if ((Q.sent(), M)) throw M;
							return [3, 10];
						case 9:
							return (
								(K = Q.sent()),
								[
									2,
									{
										error: {
											status: "PARSING_ERROR",
											originalStatus: oe.status,
											data: I,
											error: String(K),
										},
										meta: R,
									},
								]
							);
						case 10:
							return [
								2,
								G(oe, N)
									? { data: N, meta: R }
									: { error: { status: oe.status, data: N }, meta: R },
							];
					}
				});
			});
		}
	);
	function c(m, w) {
		return Dl(this, null, function () {
			var S;
			return Il(this, function (E) {
				switch (E.label) {
					case 0:
						return typeof w == "function"
							? [2, w(m)]
							: (w === "content-type" && (w = d(m.headers) ? "json" : "text"),
							  w !== "json" ? [3, 2] : [4, m.text()]);
					case 1:
						return (S = E.sent()), [2, S.length ? JSON.parse(S) : null];
					case 2:
						return [2, m.text()];
				}
			});
		});
	}
}
var ep = (function () {
		function e(t, n) {
			n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
		}
		return e;
	})(),
	qi = ot("__rtkq/focused"),
	Ll = ot("__rtkq/unfocused"),
	Wi = ot("__rtkq/online"),
	$l = ot("__rtkq/offline"),
	Ss = !1;
function zw(e, t) {
	function n() {
		var r = function () {
				return e(qi());
			},
			i = function () {
				return e(Ll());
			},
			o = function () {
				return e(Wi());
			},
			l = function () {
				return e($l());
			},
			a = function () {
				window.document.visibilityState === "visible" ? r() : i();
			};
		Ss ||
			(typeof window < "u" &&
				window.addEventListener &&
				(window.addEventListener("visibilitychange", a, !1),
				window.addEventListener("focus", r, !1),
				window.addEventListener("online", o, !1),
				window.addEventListener("offline", l, !1),
				(Ss = !0)));
		var s = function () {
			window.removeEventListener("focus", r),
				window.removeEventListener("visibilitychange", a),
				window.removeEventListener("online", o),
				window.removeEventListener("offline", l),
				(Ss = !1);
		};
		return s;
	}
	return t
		? t(e, { onFocus: qi, onFocusLost: Ll, onOffline: $l, onOnline: Wi })
		: n();
}
var qt;
(function (e) {
	(e.query = "query"), (e.mutation = "mutation");
})(qt || (qt = {}));
function wm(e) {
	return e.type === qt.query;
}
function Uw(e) {
	return e.type === qt.mutation;
}
function xm(e, t, n, r, i, o) {
	return Vw(e)
		? e(t, n, r, i).map(Au).map(o)
		: Array.isArray(e)
		? e.map(Au).map(o)
		: [];
}
function Vw(e) {
	return typeof e == "function";
}
function Au(e) {
	return typeof e == "string" ? { type: e } : e;
}
function ks(e) {
	return e != null;
}
var Hi = Symbol("forceQueryFn"),
	Mu = function (e) {
		return typeof e[Hi] == "function";
	};
function Qw(e) {
	var t = e.serializeQueryArgs,
		n = e.queryThunk,
		r = e.mutationThunk,
		i = e.api,
		o = e.context,
		l = new Map(),
		a = new Map(),
		s = i.internalActions,
		u = s.unsubscribeQueryResult,
		d = s.removeMutationResult,
		p = s.updateSubscriptionOptions;
	return {
		buildInitiateQuery: c,
		buildInitiateMutation: m,
		getRunningQueryThunk: g,
		getRunningMutationThunk: x,
		getRunningQueriesThunk: k,
		getRunningMutationsThunk: y,
		getRunningOperationPromises: v,
		removalWarning: h,
	};
	function h() {
		throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
	}
	function v() {
		typeof process < "u";
		var w = function (S) {
			return Array.from(S.values()).flatMap(function (E) {
				return E ? Object.values(E) : [];
			});
		};
		return Al(Al([], w(l)), w(a)).filter(ks);
	}
	function g(w, S) {
		return function (E) {
			var C,
				j = o.endpointDefinitions[w],
				T = t({ queryArgs: S, endpointDefinition: j, endpointName: w });
			return (C = l.get(E)) == null ? void 0 : C[T];
		};
	}
	function x(w, S) {
		return function (E) {
			var C;
			return (C = a.get(E)) == null ? void 0 : C[S];
		};
	}
	function k() {
		return function (w) {
			return Object.values(l.get(w) || {}).filter(ks);
		};
	}
	function y() {
		return function (w) {
			return Object.values(a.get(w) || {}).filter(ks);
		};
	}
	function c(w, S) {
		var E = function (C, j) {
			var T = j === void 0 ? {} : j,
				P = T.subscribe,
				R = P === void 0 ? !0 : P,
				_ = T.forceRefetch,
				b = T.subscriptionOptions,
				D = Hi,
				U = T[D];
			return function (B, H) {
				var A,
					z,
					V = t({ queryArgs: C, endpointDefinition: S, endpointName: w }),
					G = n(
						((A = {
							type: "query",
							subscribe: R,
							forceRefetch: _,
							subscriptionOptions: b,
							endpointName: w,
							originalArgs: C,
							queryCacheKey: V,
						}),
						(A[Hi] = U),
						A)
					),
					J = i.endpoints[w].select(C),
					Z = B(G),
					te = J(H()),
					ee = Z.requestId,
					ne = Z.abort,
					le = te.requestId !== ee,
					Je = (z = l.get(B)) == null ? void 0 : z[V],
					Dt = function () {
						return J(H());
					},
					We = Object.assign(
						U
							? Z.then(Dt)
							: le && !Je
							? Promise.resolve(te)
							: Promise.all([Je, Z]).then(Dt),
						{
							arg: C,
							requestId: ee,
							subscriptionOptions: b,
							queryCacheKey: V,
							abort: ne,
							unwrap: function () {
								return Dl(this, null, function () {
									var oe;
									return Il(this, function (Ct) {
										switch (Ct.label) {
											case 0:
												return [4, We];
											case 1:
												if (((oe = Ct.sent()), oe.isError)) throw oe.error;
												return [2, oe.data];
										}
									});
								});
							},
							refetch: function () {
								return B(E(C, { subscribe: !1, forceRefetch: !0 }));
							},
							unsubscribe: function () {
								R && B(u({ queryCacheKey: V, requestId: ee }));
							},
							updateSubscriptionOptions: function (oe) {
								(We.subscriptionOptions = oe),
									B(
										p({
											endpointName: w,
											requestId: ee,
											queryCacheKey: V,
											options: oe,
										})
									);
							},
						}
					);
				if (!Je && !le && !U) {
					var Et = l.get(B) || {};
					(Et[V] = We),
						l.set(B, Et),
						We.then(function () {
							delete Et[V], Object.keys(Et).length || l.delete(B);
						});
				}
				return We;
			};
		};
		return E;
	}
	function m(w) {
		return function (S, E) {
			var C = E === void 0 ? {} : E,
				j = C.track,
				T = j === void 0 ? !0 : j,
				P = C.fixedCacheKey;
			return function (R, _) {
				var b = r({
						type: "mutation",
						endpointName: w,
						originalArgs: S,
						track: T,
						fixedCacheKey: P,
					}),
					D = R(b),
					U = D.requestId,
					B = D.abort,
					H = D.unwrap,
					A = D.unwrap()
						.then(function (J) {
							return { data: J };
						})
						.catch(function (J) {
							return { error: J };
						}),
					z = function () {
						R(d({ requestId: U, fixedCacheKey: P }));
					},
					V = Object.assign(A, {
						arg: D.arg,
						requestId: U,
						abort: B,
						unwrap: H,
						unsubscribe: z,
						reset: z,
					}),
					G = a.get(R) || {};
				return (
					a.set(R, G),
					(G[U] = V),
					V.then(function () {
						delete G[U], Object.keys(G).length || a.delete(R);
					}),
					P &&
						((G[P] = V),
						V.then(function () {
							G[P] === V && (delete G[P], Object.keys(G).length || a.delete(R));
						})),
					V
				);
			};
		};
	}
}
function tp(e) {
	return e;
}
function Bw(e) {
	var t = this,
		n = e.reducerPath,
		r = e.baseQuery,
		i = e.context.endpointDefinitions,
		o = e.serializeQueryArgs,
		l = e.api,
		a = function (m, w, S) {
			return function (E) {
				var C = i[m];
				E(
					l.internalActions.queryResultPatched({
						queryCacheKey: o({
							queryArgs: w,
							endpointDefinition: C,
							endpointName: m,
						}),
						patches: S,
					})
				);
			};
		},
		s = function (m, w, S) {
			return function (E, C) {
				var j,
					T,
					P = l.endpoints[m].select(w)(C()),
					R = {
						patches: [],
						inversePatches: [],
						undo: function () {
							return E(l.util.patchQueryData(m, w, R.inversePatches));
						},
					};
				if (P.status === me.uninitialized) return R;
				if ("data" in P)
					if (Mt(P.data)) {
						var _ = sm(P.data, S),
							b = _[1],
							D = _[2];
						(j = R.patches).push.apply(j, b),
							(T = R.inversePatches).push.apply(T, D);
					} else {
						var U = S(P.data);
						R.patches.push({ op: "replace", path: [], value: U }),
							R.inversePatches.push({ op: "replace", path: [], value: P.data });
					}
				return E(l.util.patchQueryData(m, w, R.patches)), R;
			};
		},
		u = function (m, w, S) {
			return function (E) {
				var C;
				return E(
					l.endpoints[m].initiate(
						w,
						((C = { subscribe: !1, forceRefetch: !0 }),
						(C[Hi] = function () {
							return { data: S };
						}),
						C)
					)
				);
			};
		},
		d = function (m, w) {
			return Dl(t, [m, w], function (S, E) {
				var C,
					j,
					T,
					P,
					R,
					_,
					b,
					D,
					U,
					B,
					H,
					A,
					z,
					V,
					G,
					J,
					Z,
					te,
					ee = E.signal,
					ne = E.abort,
					le = E.rejectWithValue,
					Je = E.fulfillWithValue,
					Dt = E.dispatch,
					We = E.getState,
					Et = E.extra;
				return Il(this, function (oe) {
					switch (oe.label) {
						case 0:
							(C = i[S.endpointName]), (oe.label = 1);
						case 1:
							return (
								oe.trys.push([1, 8, , 13]),
								(j = tp),
								(T = void 0),
								(P = {
									signal: ee,
									abort: ne,
									dispatch: Dt,
									getState: We,
									extra: Et,
									endpoint: S.endpointName,
									type: S.type,
									forced: S.type === "query" ? p(S, We()) : void 0,
								}),
								(R = S.type === "query" ? S[Hi] : void 0),
								R ? ((T = R()), [3, 6]) : [3, 2]
							);
						case 2:
							return C.query
								? [4, r(C.query(S.originalArgs), P, C.extraOptions)]
								: [3, 4];
						case 3:
							return (
								(T = oe.sent()),
								C.transformResponse && (j = C.transformResponse),
								[3, 6]
							);
						case 4:
							return [
								4,
								C.queryFn(S.originalArgs, P, C.extraOptions, function (Ct) {
									return r(Ct, P, C.extraOptions);
								}),
							];
						case 5:
							(T = oe.sent()), (oe.label = 6);
						case 6:
							if ((typeof process < "u", T.error))
								throw new ep(T.error, T.meta);
							return (H = Je), [4, j(T.data, T.meta, S.originalArgs)];
						case 7:
							return [
								2,
								H.apply(void 0, [
									oe.sent(),
									((Z = {
										fulfilledTimeStamp: Date.now(),
										baseQueryMeta: T.meta,
									}),
									(Z[ai] = !0),
									Z),
								]),
							];
						case 8:
							if (((A = oe.sent()), (z = A), !(z instanceof ep)))
								return [3, 12];
							(V = tp),
								C.query &&
									C.transformErrorResponse &&
									(V = C.transformErrorResponse),
								(oe.label = 9);
						case 9:
							return (
								oe.trys.push([9, 11, , 12]),
								(G = le),
								[4, V(z.value, z.meta, S.originalArgs)]
							);
						case 10:
							return [
								2,
								G.apply(void 0, [
									oe.sent(),
									((te = { baseQueryMeta: z.meta }), (te[ai] = !0), te),
								]),
							];
						case 11:
							return (J = oe.sent()), (z = J), [3, 12];
						case 12:
							throw (typeof process < "u", console.error(z), z);
						case 13:
							return [2];
					}
				});
			});
		};
	function p(m, w) {
		var S,
			E,
			C,
			j,
			T =
				(E = (S = w[n]) == null ? void 0 : S.queries) == null
					? void 0
					: E[m.queryCacheKey],
			P = (C = w[n]) == null ? void 0 : C.config.refetchOnMountOrArgChange,
			R = T == null ? void 0 : T.fulfilledTimeStamp,
			_ = (j = m.forceRefetch) != null ? j : m.subscribe && P;
		return _ ? _ === !0 || (Number(new Date()) - Number(R)) / 1e3 >= _ : !1;
	}
	var h = Wd(n + "/executeQuery", d, {
			getPendingMeta: function () {
				var m;
				return (m = { startedTimeStamp: Date.now() }), (m[ai] = !0), m;
			},
			condition: function (m, w) {
				var S = w.getState,
					E,
					C,
					j,
					T = S(),
					P =
						(C = (E = T[n]) == null ? void 0 : E.queries) == null
							? void 0
							: C[m.queryCacheKey],
					R = P == null ? void 0 : P.fulfilledTimeStamp,
					_ = m.originalArgs,
					b = P == null ? void 0 : P.originalArgs,
					D = i[m.endpointName];
				return Mu(m)
					? !0
					: (P == null ? void 0 : P.status) === "pending"
					? !1
					: p(m, T) ||
					  (wm(D) &&
							(j = D == null ? void 0 : D.forceRefetch) != null &&
							j.call(D, {
								currentArg: _,
								previousArg: b,
								endpointState: P,
								state: T,
							}))
					? !0
					: !R;
			},
			dispatchConditionRejection: !0,
		}),
		v = Wd(n + "/executeMutation", d, {
			getPendingMeta: function () {
				var m;
				return (m = { startedTimeStamp: Date.now() }), (m[ai] = !0), m;
			},
		}),
		g = function (m) {
			return "force" in m;
		},
		x = function (m) {
			return "ifOlderThan" in m;
		},
		k = function (m, w, S) {
			return function (E, C) {
				var j = g(S) && S.force,
					T = x(S) && S.ifOlderThan,
					P = function (D) {
						return (
							D === void 0 && (D = !0),
							l.endpoints[m].initiate(w, { forceRefetch: D })
						);
					},
					R = l.endpoints[m].select(w)(C());
				if (j) E(P());
				else if (T) {
					var _ = R == null ? void 0 : R.fulfilledTimeStamp;
					if (!_) {
						E(P());
						return;
					}
					var b = (Number(new Date()) - Number(new Date(_))) / 1e3 >= T;
					b && E(P());
				} else E(P(!1));
			};
		};
	function y(m) {
		return function (w) {
			var S, E;
			return (
				((E = (S = w == null ? void 0 : w.meta) == null ? void 0 : S.arg) ==
				null
					? void 0
					: E.endpointName) === m
			);
		};
	}
	function c(m, w) {
		return {
			matchPending: xi(Gc(m), y(w)),
			matchFulfilled: xi(lr(m), y(w)),
			matchRejected: xi(Bi(m), y(w)),
		};
	}
	return {
		queryThunk: h,
		mutationThunk: v,
		prefetch: k,
		updateQueryData: s,
		upsertQueryData: u,
		patchQueryData: a,
		buildMatchThunkActions: c,
	};
}
function Sm(e, t, n, r) {
	return xm(
		n[e.meta.arg.endpointName][t],
		lr(e) ? e.payload : void 0,
		ua(e) ? e.payload : void 0,
		e.meta.arg.originalArgs,
		"baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
		r
	);
}
function No(e, t, n) {
	var r = e[t];
	r && n(r);
}
function Ki(e) {
	var t;
	return (t = "arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) != null
		? t
		: e.requestId;
}
function np(e, t, n) {
	var r = e[Ki(t)];
	r && n(r);
}
var ti = {};
function qw(e) {
	var t = e.reducerPath,
		n = e.queryThunk,
		r = e.mutationThunk,
		i = e.context,
		o = i.endpointDefinitions,
		l = i.apiUid,
		a = i.extractRehydrationInfo,
		s = i.hasRehydrationInfo,
		u = e.assertTagType,
		d = e.config,
		p = ot(t + "/resetApiState"),
		h = Qn({
			name: t + "/queries",
			initialState: ti,
			reducers: {
				removeQueryResult: {
					reducer: function (S, E) {
						var C = E.payload.queryCacheKey;
						delete S[C];
					},
					prepare: xs(),
				},
				queryResultPatched: function (S, E) {
					var C = E.payload,
						j = C.queryCacheKey,
						T = C.patches;
					No(S, j, function (P) {
						P.data = $d(P.data, T.concat());
					});
				},
			},
			extraReducers: function (S) {
				S.addCase(n.pending, function (E, C) {
					var j = C.meta,
						T = C.meta.arg,
						P,
						R,
						_ = Mu(T);
					(T.subscribe || _) &&
						((R = E[(P = T.queryCacheKey)]) != null ||
							(E[P] = {
								status: me.uninitialized,
								endpointName: T.endpointName,
							})),
						No(E, T.queryCacheKey, function (b) {
							(b.status = me.pending),
								(b.requestId = _ && b.requestId ? b.requestId : j.requestId),
								T.originalArgs !== void 0 && (b.originalArgs = T.originalArgs),
								(b.startedTimeStamp = j.startedTimeStamp);
						});
				})
					.addCase(n.fulfilled, function (E, C) {
						var j = C.meta,
							T = C.payload;
						No(E, j.arg.queryCacheKey, function (P) {
							var R;
							if (!(P.requestId !== j.requestId && !Mu(j.arg))) {
								var _ = o[j.arg.endpointName].merge;
								if (((P.status = me.fulfilled), _))
									if (P.data !== void 0) {
										var b = j.fulfilledTimeStamp,
											D = j.arg,
											U = j.baseQueryMeta,
											B = j.requestId,
											H = io(P.data, function (A) {
												return _(A, T, {
													arg: D.originalArgs,
													baseQueryMeta: U,
													fulfilledTimeStamp: b,
													requestId: B,
												});
											});
										P.data = H;
									} else P.data = T;
								else
									P.data =
										(R = o[j.arg.endpointName].structuralSharing) == null || R
											? gm(At(P.data) ? M1(P.data) : P.data, T)
											: T;
								delete P.error, (P.fulfilledTimeStamp = j.fulfilledTimeStamp);
							}
						});
					})
					.addCase(n.rejected, function (E, C) {
						var j = C.meta,
							T = j.condition,
							P = j.arg,
							R = j.requestId,
							_ = C.error,
							b = C.payload;
						No(E, P.queryCacheKey, function (D) {
							if (!T) {
								if (D.requestId !== R) return;
								(D.status = me.rejected), (D.error = b ?? _);
							}
						});
					})
					.addMatcher(s, function (E, C) {
						for (
							var j = a(C).queries, T = 0, P = Object.entries(j);
							T < P.length;
							T++
						) {
							var R = P[T],
								_ = R[0],
								b = R[1];
							((b == null ? void 0 : b.status) === me.fulfilled ||
								(b == null ? void 0 : b.status) === me.rejected) &&
								(E[_] = b);
						}
					});
			},
		}),
		v = Qn({
			name: t + "/mutations",
			initialState: ti,
			reducers: {
				removeMutationResult: {
					reducer: function (S, E) {
						var C = E.payload,
							j = Ki(C);
						j in S && delete S[j];
					},
					prepare: xs(),
				},
			},
			extraReducers: function (S) {
				S.addCase(r.pending, function (E, C) {
					var j = C.meta,
						T = C.meta,
						P = T.requestId,
						R = T.arg,
						_ = T.startedTimeStamp;
					R.track &&
						(E[Ki(j)] = {
							requestId: P,
							status: me.pending,
							endpointName: R.endpointName,
							startedTimeStamp: _,
						});
				})
					.addCase(r.fulfilled, function (E, C) {
						var j = C.payload,
							T = C.meta;
						T.arg.track &&
							np(E, T, function (P) {
								P.requestId === T.requestId &&
									((P.status = me.fulfilled),
									(P.data = j),
									(P.fulfilledTimeStamp = T.fulfilledTimeStamp));
							});
					})
					.addCase(r.rejected, function (E, C) {
						var j = C.payload,
							T = C.error,
							P = C.meta;
						P.arg.track &&
							np(E, P, function (R) {
								R.requestId === P.requestId &&
									((R.status = me.rejected), (R.error = j ?? T));
							});
					})
					.addMatcher(s, function (E, C) {
						for (
							var j = a(C).mutations, T = 0, P = Object.entries(j);
							T < P.length;
							T++
						) {
							var R = P[T],
								_ = R[0],
								b = R[1];
							((b == null ? void 0 : b.status) === me.fulfilled ||
								(b == null ? void 0 : b.status) === me.rejected) &&
								_ !== (b == null ? void 0 : b.requestId) &&
								(E[_] = b);
						}
					});
			},
		}),
		g = Qn({
			name: t + "/invalidation",
			initialState: ti,
			reducers: {},
			extraReducers: function (S) {
				S.addCase(h.actions.removeQueryResult, function (E, C) {
					for (
						var j = C.payload.queryCacheKey, T = 0, P = Object.values(E);
						T < P.length;
						T++
					)
						for (var R = P[T], _ = 0, b = Object.values(R); _ < b.length; _++) {
							var D = b[_],
								U = D.indexOf(j);
							U !== -1 && D.splice(U, 1);
						}
				})
					.addMatcher(s, function (E, C) {
						for (
							var j, T, P, R, _ = a(C).provided, b = 0, D = Object.entries(_);
							b < D.length;
							b++
						)
							for (
								var U = D[b], B = U[0], H = U[1], A = 0, z = Object.entries(H);
								A < z.length;
								A++
							)
								for (
									var V = z[A],
										G = V[0],
										J = V[1],
										Z =
											(R = (T = (j = E[B]) != null ? j : (E[B] = {}))[
												(P = G || "__internal_without_id")
											]) != null
												? R
												: (T[P] = []),
										te = 0,
										ee = J;
									te < ee.length;
									te++
								) {
									var ne = ee[te],
										le = Z.includes(ne);
									le || Z.push(ne);
								}
					})
					.addMatcher(qr(lr(n), ua(n)), function (E, C) {
						for (
							var j,
								T,
								P,
								R,
								_ = Sm(C, "providesTags", o, u),
								b = C.meta.arg.queryCacheKey,
								D = 0,
								U = Object.values(E);
							D < U.length;
							D++
						)
							for (
								var B = U[D], H = 0, A = Object.values(B);
								H < A.length;
								H++
							) {
								var z = A[H],
									V = z.indexOf(b);
								V !== -1 && z.splice(V, 1);
							}
						for (var G = 0, J = _; G < J.length; G++) {
							var Z = J[G],
								te = Z.type,
								ee = Z.id,
								ne =
									(R = (T = (j = E[te]) != null ? j : (E[te] = {}))[
										(P = ee || "__internal_without_id")
									]) != null
										? R
										: (T[P] = []),
								le = ne.includes(b);
							le || ne.push(b);
						}
					});
			},
		}),
		x = Qn({
			name: t + "/subscriptions",
			initialState: ti,
			reducers: {
				updateSubscriptionOptions: function (S, E) {},
				unsubscribeQueryResult: function (S, E) {},
				internal_probeSubscription: function (S, E) {},
			},
		}),
		k = Qn({
			name: t + "/internalSubscriptions",
			initialState: ti,
			reducers: {
				subscriptionsUpdated: {
					reducer: function (S, E) {
						return $d(S, E.payload);
					},
					prepare: xs(),
				},
			},
		}),
		y = Qn({
			name: t + "/config",
			initialState: je(
				{ online: Mw(), focused: Dw(), middlewareRegistered: !1 },
				d
			),
			reducers: {
				middlewareRegistered: function (S, E) {
					var C = E.payload;
					S.middlewareRegistered =
						S.middlewareRegistered === "conflict" || l !== C ? "conflict" : !0;
				},
			},
			extraReducers: function (S) {
				S.addCase(Wi, function (E) {
					E.online = !0;
				})
					.addCase($l, function (E) {
						E.online = !1;
					})
					.addCase(qi, function (E) {
						E.focused = !0;
					})
					.addCase(Ll, function (E) {
						E.focused = !1;
					})
					.addMatcher(s, function (E) {
						return je({}, E);
					});
			},
		}),
		c = Kc({
			queries: h.reducer,
			mutations: v.reducer,
			provided: g.reducer,
			subscriptions: k.reducer,
			config: y.reducer,
		}),
		m = function (S, E) {
			return c(p.match(E) ? void 0 : S, E);
		},
		w = Ut(
			je(
				je(je(je(je({}, y.actions), h.actions), x.actions), k.actions),
				v.actions
			),
			{
				unsubscribeMutationResult: v.actions.removeMutationResult,
				resetApiState: p,
			}
		);
	return { reducer: m, actions: w };
}
var Gn = Symbol.for("RTKQ/skipToken"),
	km = { status: me.uninitialized },
	rp = io(km, function () {}),
	ip = io(km, function () {});
function Ww(e) {
	var t = e.serializeQueryArgs,
		n = e.reducerPath,
		r = function (d) {
			return rp;
		},
		i = function (d) {
			return ip;
		};
	return {
		buildQuerySelector: a,
		buildMutationSelector: s,
		selectInvalidatedBy: u,
	};
	function o(d) {
		return je(je({}, d), Rw(d.status));
	}
	function l(d) {
		var p = d[n];
		return p;
	}
	function a(d, p) {
		return function (h) {
			var v = t({ queryArgs: h, endpointDefinition: p, endpointName: d }),
				g = function (k) {
					var y, c, m;
					return (m =
						(c = (y = l(k)) == null ? void 0 : y.queries) == null
							? void 0
							: c[v]) != null
						? m
						: rp;
				},
				x = h === Gn ? r : g;
			return wi(x, o);
		};
	}
	function s() {
		return function (d) {
			var p, h;
			typeof d == "object" ? (h = (p = Ki(d)) != null ? p : Gn) : (h = d);
			var v = function (x) {
					var k, y, c;
					return (c =
						(y = (k = l(x)) == null ? void 0 : k.mutations) == null
							? void 0
							: y[h]) != null
						? c
						: ip;
				},
				g = h === Gn ? i : v;
			return wi(g, o);
		};
	}
	function u(d, p) {
		for (
			var h, v = d[n], g = new Set(), x = 0, k = p.map(Au);
			x < k.length;
			x++
		) {
			var y = k[x],
				c = v.provided[y.type];
			if (c)
				for (
					var m =
							(h = y.id !== void 0 ? c[y.id] : Yd(Object.values(c))) != null
								? h
								: [],
						w = 0,
						S = m;
					w < S.length;
					w++
				) {
					var E = S[w];
					g.add(E);
				}
		}
		return Yd(
			Array.from(g.values()).map(function (C) {
				var j = v.queries[C];
				return j
					? [
							{
								queryCacheKey: C,
								endpointName: j.endpointName,
								originalArgs: j.originalArgs,
							},
					  ]
					: [];
			})
		);
	}
}
var Po = WeakMap ? new WeakMap() : void 0,
	op = function (e) {
		var t = e.endpointName,
			n = e.queryArgs,
			r = "",
			i = Po == null ? void 0 : Po.get(n);
		if (typeof i == "string") r = i;
		else {
			var o = JSON.stringify(n, function (l, a) {
				return In(a)
					? Object.keys(a)
							.sort()
							.reduce(function (s, u) {
								return (s[u] = a[u]), s;
							}, {})
					: a;
			});
			In(n) && (Po == null || Po.set(n, o)), (r = o);
		}
		return t + "(" + r + ")";
	};
function Hw() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return function (r) {
		var i = _u(function (d) {
				var p, h;
				return (h = r.extractRehydrationInfo) == null
					? void 0
					: h.call(r, d, {
							reducerPath: (p = r.reducerPath) != null ? p : "api",
					  });
			}),
			o = Ut(
				je(
					{
						reducerPath: "api",
						keepUnusedDataFor: 60,
						refetchOnMountOrArgChange: !1,
						refetchOnFocus: !1,
						refetchOnReconnect: !1,
					},
					r
				),
				{
					extractRehydrationInfo: i,
					serializeQueryArgs: function (d) {
						var p = op;
						if ("serializeQueryArgs" in d.endpointDefinition) {
							var h = d.endpointDefinition.serializeQueryArgs;
							p = function (v) {
								var g = h(v);
								return typeof g == "string"
									? g
									: op(Ut(je({}, v), { queryArgs: g }));
							};
						} else r.serializeQueryArgs && (p = r.serializeQueryArgs);
						return p(d);
					},
					tagTypes: Al([], r.tagTypes || []),
				}
			),
			l = {
				endpointDefinitions: {},
				batch: function (d) {
					d();
				},
				apiUid: hm(),
				extractRehydrationInfo: i,
				hasRehydrationInfo: _u(function (d) {
					return i(d) != null;
				}),
			},
			a = {
				injectEndpoints: u,
				enhanceEndpoints: function (d) {
					var p = d.addTagTypes,
						h = d.endpoints;
					if (p)
						for (var v = 0, g = p; v < g.length; v++) {
							var x = g[v];
							o.tagTypes.includes(x) || o.tagTypes.push(x);
						}
					if (h)
						for (var k = 0, y = Object.entries(h); k < y.length; k++) {
							var c = y[k],
								m = c[0],
								w = c[1];
							typeof w == "function"
								? w(l.endpointDefinitions[m])
								: Object.assign(l.endpointDefinitions[m] || {}, w);
						}
					return a;
				},
			},
			s = e.map(function (d) {
				return d.init(a, o, l);
			});
		function u(d) {
			for (
				var p = d.endpoints({
						query: function (w) {
							return Ut(je({}, w), { type: qt.query });
						},
						mutation: function (w) {
							return Ut(je({}, w), { type: qt.mutation });
						},
					}),
					h = 0,
					v = Object.entries(p);
				h < v.length;
				h++
			) {
				var g = v[h],
					x = g[0],
					k = g[1];
				if (!d.overrideExisting && x in l.endpointDefinitions) {
					typeof process < "u";
					continue;
				}
				l.endpointDefinitions[x] = k;
				for (var y = 0, c = s; y < c.length; y++) {
					var m = c[y];
					m.injectEndpoint(x, k);
				}
			}
			return a;
		}
		return a.injectEndpoints({ endpoints: r.endpoints });
	};
}
function Kw(e) {
	for (var t in e) return !1;
	return !0;
}
var Gw = 2147483647 / 1e3 - 1,
	Yw = function (e) {
		var t = e.reducerPath,
			n = e.api,
			r = e.context,
			i = e.internalState,
			o = n.internalActions,
			l = o.removeQueryResult,
			a = o.unsubscribeQueryResult;
		function s(h) {
			var v = i.currentSubscriptions[h];
			return !!v && !Kw(v);
		}
		var u = {},
			d = function (h, v, g) {
				var x;
				if (a.match(h)) {
					var k = v.getState()[t],
						y = h.payload.queryCacheKey;
					p(
						y,
						(x = k.queries[y]) == null ? void 0 : x.endpointName,
						v,
						k.config
					);
				}
				if (n.util.resetApiState.match(h))
					for (var c = 0, m = Object.entries(u); c < m.length; c++) {
						var w = m[c],
							S = w[0],
							E = w[1];
						E && clearTimeout(E), delete u[S];
					}
				if (r.hasRehydrationInfo(h))
					for (
						var k = v.getState()[t],
							C = r.extractRehydrationInfo(h).queries,
							j = 0,
							T = Object.entries(C);
						j < T.length;
						j++
					) {
						var P = T[j],
							y = P[0],
							R = P[1];
						p(y, R == null ? void 0 : R.endpointName, v, k.config);
					}
			};
		function p(h, v, g, x) {
			var k,
				y = r.endpointDefinitions[v],
				c =
					(k = y == null ? void 0 : y.keepUnusedDataFor) != null
						? k
						: x.keepUnusedDataFor;
			if (c !== 1 / 0) {
				var m = Math.max(0, Math.min(c, Gw));
				if (!s(h)) {
					var w = u[h];
					w && clearTimeout(w),
						(u[h] = setTimeout(function () {
							s(h) || g.dispatch(l({ queryCacheKey: h })), delete u[h];
						}, m * 1e3));
				}
			}
		}
		return d;
	},
	Xw = function (e) {
		var t = e.reducerPath,
			n = e.context,
			r = e.context.endpointDefinitions,
			i = e.mutationThunk,
			o = e.api,
			l = e.assertTagType,
			a = e.refetchQuery,
			s = o.internalActions.removeQueryResult,
			u = qr(lr(i), ua(i)),
			d = function (h, v) {
				u(h) && p(Sm(h, "invalidatesTags", r, l), v),
					o.util.invalidateTags.match(h) &&
						p(xm(h.payload, void 0, void 0, void 0, void 0, l), v);
			};
		function p(h, v) {
			var g = v.getState(),
				x = g[t],
				k = o.util.selectInvalidatedBy(g, h);
			n.batch(function () {
				for (
					var y, c = Array.from(k.values()), m = 0, w = c;
					m < w.length;
					m++
				) {
					var S = w[m].queryCacheKey,
						E = x.queries[S],
						C = (y = x.subscriptions[S]) != null ? y : {};
					E &&
						(Object.keys(C).length === 0
							? v.dispatch(s({ queryCacheKey: S }))
							: E.status !== me.uninitialized && v.dispatch(a(E, S)));
				}
			});
		}
		return d;
	},
	Jw = function (e) {
		var t = e.reducerPath,
			n = e.queryThunk,
			r = e.api,
			i = e.refetchQuery,
			o = e.internalState,
			l = {},
			a = function (v, g) {
				(r.internalActions.updateSubscriptionOptions.match(v) ||
					r.internalActions.unsubscribeQueryResult.match(v)) &&
					u(v.payload, g),
					(n.pending.match(v) || (n.rejected.match(v) && v.meta.condition)) &&
						u(v.meta.arg, g),
					(n.fulfilled.match(v) ||
						(n.rejected.match(v) && !v.meta.condition)) &&
						s(v.meta.arg, g),
					r.util.resetApiState.match(v) && p();
			};
		function s(v, g) {
			var x = v.queryCacheKey,
				k = g.getState()[t],
				y = k.queries[x],
				c = o.currentSubscriptions[x];
			if (!(!y || y.status === me.uninitialized)) {
				var m = h(c);
				if (Number.isFinite(m)) {
					var w = l[x];
					w != null &&
						w.timeout &&
						(clearTimeout(w.timeout), (w.timeout = void 0));
					var S = Date.now() + m,
						E = (l[x] = {
							nextPollTimestamp: S,
							pollingInterval: m,
							timeout: setTimeout(function () {
								(E.timeout = void 0), g.dispatch(i(y, x));
							}, m),
						});
				}
			}
		}
		function u(v, g) {
			var x = v.queryCacheKey,
				k = g.getState()[t],
				y = k.queries[x],
				c = o.currentSubscriptions[x];
			if (!(!y || y.status === me.uninitialized)) {
				var m = h(c);
				if (!Number.isFinite(m)) {
					d(x);
					return;
				}
				var w = l[x],
					S = Date.now() + m;
				(!w || S < w.nextPollTimestamp) && s({ queryCacheKey: x }, g);
			}
		}
		function d(v) {
			var g = l[v];
			g != null && g.timeout && clearTimeout(g.timeout), delete l[v];
		}
		function p() {
			for (var v = 0, g = Object.keys(l); v < g.length; v++) {
				var x = g[v];
				d(x);
			}
		}
		function h(v) {
			v === void 0 && (v = {});
			var g = Number.POSITIVE_INFINITY;
			for (var x in v)
				v[x].pollingInterval && (g = Math.min(v[x].pollingInterval, g));
			return g;
		}
		return a;
	},
	Zw = function (e) {
		var t = e.reducerPath,
			n = e.context,
			r = e.api,
			i = e.refetchQuery,
			o = e.internalState,
			l = r.internalActions.removeQueryResult,
			a = function (u, d) {
				qi.match(u) && s(d, "refetchOnFocus"),
					Wi.match(u) && s(d, "refetchOnReconnect");
			};
		function s(u, d) {
			var p = u.getState()[t],
				h = p.queries,
				v = o.currentSubscriptions;
			n.batch(function () {
				for (var g = 0, x = Object.keys(v); g < x.length; g++) {
					var k = x[g],
						y = h[k],
						c = v[k];
					if (!(!c || !y)) {
						var m =
							Object.values(c).some(function (w) {
								return w[d] === !0;
							}) ||
							(Object.values(c).every(function (w) {
								return w[d] === void 0;
							}) &&
								p.config[d]);
						m &&
							(Object.keys(c).length === 0
								? u.dispatch(l({ queryCacheKey: k }))
								: y.status !== me.uninitialized && u.dispatch(i(y, k)));
					}
				}
			});
		}
		return a;
	},
	lp = new Error("Promise never resolved before cacheEntryRemoved."),
	ex = function (e) {
		var t = e.api,
			n = e.reducerPath,
			r = e.context,
			i = e.queryThunk,
			o = e.mutationThunk;
		e.internalState;
		var l = Iu(i),
			a = Iu(o),
			s = lr(i, o),
			u = {},
			d = function (v, g, x) {
				var k = p(v);
				if (i.pending.match(v)) {
					var y = x[n].queries[k],
						c = g.getState()[n].queries[k];
					!y &&
						c &&
						h(
							v.meta.arg.endpointName,
							v.meta.arg.originalArgs,
							k,
							g,
							v.meta.requestId
						);
				} else if (o.pending.match(v)) {
					var c = g.getState()[n].mutations[k];
					c &&
						h(
							v.meta.arg.endpointName,
							v.meta.arg.originalArgs,
							k,
							g,
							v.meta.requestId
						);
				} else if (s(v)) {
					var m = u[k];
					m != null &&
						m.valueResolved &&
						(m.valueResolved({ data: v.payload, meta: v.meta.baseQueryMeta }),
						delete m.valueResolved);
				} else if (
					t.internalActions.removeQueryResult.match(v) ||
					t.internalActions.removeMutationResult.match(v)
				) {
					var m = u[k];
					m && (delete u[k], m.cacheEntryRemoved());
				} else if (t.util.resetApiState.match(v))
					for (var w = 0, S = Object.entries(u); w < S.length; w++) {
						var E = S[w],
							C = E[0],
							m = E[1];
						delete u[C], m.cacheEntryRemoved();
					}
			};
		function p(v) {
			return l(v)
				? v.meta.arg.queryCacheKey
				: a(v)
				? v.meta.requestId
				: t.internalActions.removeQueryResult.match(v)
				? v.payload.queryCacheKey
				: t.internalActions.removeMutationResult.match(v)
				? Ki(v.payload)
				: "";
		}
		function h(v, g, x, k, y) {
			var c = r.endpointDefinitions[v],
				m = c == null ? void 0 : c.onCacheEntryAdded;
			if (m) {
				var w = {},
					S = new Promise(function (R) {
						w.cacheEntryRemoved = R;
					}),
					E = Promise.race([
						new Promise(function (R) {
							w.valueResolved = R;
						}),
						S.then(function () {
							throw lp;
						}),
					]);
				E.catch(function () {}), (u[x] = w);
				var C = t.endpoints[v].select(c.type === qt.query ? g : x),
					j = k.dispatch(function (R, _, b) {
						return b;
					}),
					T = Ut(je({}, k), {
						getCacheEntry: function () {
							return C(k.getState());
						},
						requestId: y,
						extra: j,
						updateCachedData:
							c.type === qt.query
								? function (R) {
										return k.dispatch(t.util.updateQueryData(v, g, R));
								  }
								: void 0,
						cacheDataLoaded: E,
						cacheEntryRemoved: S,
					}),
					P = m(g, T);
				Promise.resolve(P).catch(function (R) {
					if (R !== lp) throw R;
				});
			}
		}
		return d;
	},
	tx = function (e) {
		var t = e.api,
			n = e.context,
			r = e.queryThunk,
			i = e.mutationThunk,
			o = Gc(r, i),
			l = Bi(r, i),
			a = lr(r, i),
			s = {},
			u = function (d, p) {
				var h, v, g;
				if (o(d)) {
					var x = d.meta,
						k = x.requestId,
						y = x.arg,
						c = y.endpointName,
						m = y.originalArgs,
						w = n.endpointDefinitions[c],
						S = w == null ? void 0 : w.onQueryStarted;
					if (S) {
						var E = {},
							C = new Promise(function (U, B) {
								(E.resolve = U), (E.reject = B);
							});
						C.catch(function () {}), (s[k] = E);
						var j = t.endpoints[c].select(w.type === qt.query ? m : k),
							T = p.dispatch(function (U, B, H) {
								return H;
							}),
							P = Ut(je({}, p), {
								getCacheEntry: function () {
									return j(p.getState());
								},
								requestId: k,
								extra: T,
								updateCachedData:
									w.type === qt.query
										? function (U) {
												return p.dispatch(t.util.updateQueryData(c, m, U));
										  }
										: void 0,
								queryFulfilled: C,
							});
						S(m, P);
					}
				} else if (a(d)) {
					var R = d.meta,
						k = R.requestId,
						_ = R.baseQueryMeta;
					(h = s[k]) == null || h.resolve({ data: d.payload, meta: _ }),
						delete s[k];
				} else if (l(d)) {
					var b = d.meta,
						k = b.requestId,
						D = b.rejectedWithValue,
						_ = b.baseQueryMeta;
					(g = s[k]) == null ||
						g.reject({
							error: (v = d.payload) != null ? v : d.error,
							isUnhandledError: !D,
							meta: _,
						}),
						delete s[k];
				}
			};
		return u;
	},
	nx = function (e) {
		var t = e.api,
			n = e.context.apiUid,
			r = e.reducerPath;
		return function (i, o) {
			var l, a;
			t.util.resetApiState.match(i) &&
				o.dispatch(t.internalActions.middlewareRegistered(n)),
				typeof process < "u";
		};
	},
	ap,
	rx =
		typeof queueMicrotask == "function"
			? queueMicrotask.bind(
					typeof window < "u"
						? window
						: typeof global < "u"
						? global
						: globalThis
			  )
			: function (e) {
					return (ap || (ap = Promise.resolve())).then(e).catch(function (t) {
						return setTimeout(function () {
							throw t;
						}, 0);
					});
			  },
	ix = function (e) {
		var t = e.api,
			n = e.queryThunk,
			r = e.internalState,
			i = t.reducerPath + "/subscriptions",
			o = null,
			l = !1,
			a = t.internalActions,
			s = a.updateSubscriptionOptions,
			u = a.unsubscribeQueryResult,
			d = function (p, h) {
				var v, g, x, k, y, c, m, w, S;
				if (s.match(h)) {
					var E = h.payload,
						C = E.queryCacheKey,
						j = E.requestId,
						T = E.options;
					return (
						(v = p == null ? void 0 : p[C]) != null && v[j] && (p[C][j] = T), !0
					);
				}
				if (u.match(h)) {
					var P = h.payload,
						C = P.queryCacheKey,
						j = P.requestId;
					return p[C] && delete p[C][j], !0;
				}
				if (t.internalActions.removeQueryResult.match(h))
					return delete p[h.payload.queryCacheKey], !0;
				if (n.pending.match(h)) {
					var R = h.meta,
						_ = R.arg,
						j = R.requestId;
					if (_.subscribe) {
						var b = (x = p[(g = _.queryCacheKey)]) != null ? x : (p[g] = {});
						return (
							(b[j] =
								(y = (k = _.subscriptionOptions) != null ? k : b[j]) != null
									? y
									: {}),
							!0
						);
					}
				}
				if (n.rejected.match(h)) {
					var D = h.meta,
						U = D.condition,
						_ = D.arg,
						j = D.requestId;
					if (U && _.subscribe) {
						var b = (m = p[(c = _.queryCacheKey)]) != null ? m : (p[c] = {});
						return (
							(b[j] =
								(S = (w = _.subscriptionOptions) != null ? w : b[j]) != null
									? S
									: {}),
							!0
						);
					}
				}
				return !1;
			};
		return function (p, h) {
			var v, g;
			if (
				(o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))),
				t.util.resetApiState.match(p))
			)
				return (o = r.currentSubscriptions = {}), [!0, !1];
			if (t.internalActions.internal_probeSubscription.match(p)) {
				var x = p.payload,
					k = x.queryCacheKey,
					y = x.requestId,
					c = !!((v = r.currentSubscriptions[k]) != null && v[y]);
				return [!1, c];
			}
			var m = d(r.currentSubscriptions, p);
			if (m) {
				l ||
					(rx(function () {
						var C = JSON.parse(JSON.stringify(r.currentSubscriptions)),
							j = sm(o, function () {
								return C;
							}),
							T = j[1];
						h.next(t.internalActions.subscriptionsUpdated(T)),
							(o = C),
							(l = !1);
					}),
					(l = !0));
				var w = !!((g = p.type) != null && g.startsWith(i)),
					S = n.rejected.match(p) && p.meta.condition && !!p.meta.arg.subscribe,
					E = !w && !S;
				return [E, !1];
			}
			return [!0, !1];
		};
	};
function ox(e) {
	var t = e.reducerPath,
		n = e.queryThunk,
		r = e.api,
		i = e.context,
		o = i.apiUid,
		l = { invalidateTags: ot(t + "/invalidateTags") },
		a = function (p) {
			return !!p && typeof p.type == "string" && p.type.startsWith(t + "/");
		},
		s = [nx, Yw, Xw, Jw, ex, tx],
		u = function (p) {
			var h = !1,
				v = { currentSubscriptions: {} },
				g = Ut(je({}, e), { internalState: v, refetchQuery: d }),
				x = s.map(function (c) {
					return c(g);
				}),
				k = ix(g),
				y = Zw(g);
			return function (c) {
				return function (m) {
					h ||
						((h = !0), p.dispatch(r.internalActions.middlewareRegistered(o)));
					var w = Ut(je({}, p), { next: c }),
						S = p.getState(),
						E = k(m, w, S),
						C = E[0],
						j = E[1],
						T;
					if (
						(C ? (T = c(m)) : (T = j),
						p.getState()[t] && (y(m, w, S), a(m) || i.hasRehydrationInfo(m)))
					)
						for (var P = 0, R = x; P < R.length; P++) {
							var _ = R[P];
							_(m, w, S);
						}
					return T;
				};
			};
		};
	return { middleware: u, actions: l };
	function d(p, h, v) {
		return (
			v === void 0 && (v = {}),
			n(
				je(
					{
						type: "query",
						endpointName: p.endpointName,
						originalArgs: p.originalArgs,
						subscribe: !1,
						forceRefetch: !0,
						queryCacheKey: h,
					},
					v
				)
			)
		);
	}
}
function ln(e) {
	for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	Object.assign.apply(Object, Al([e], t));
}
var sp = Symbol(),
	lx = function () {
		return {
			name: sp,
			init: function (e, t, n) {
				var r = t.baseQuery,
					i = t.tagTypes,
					o = t.reducerPath,
					l = t.serializeQueryArgs,
					a = t.keepUnusedDataFor,
					s = t.refetchOnMountOrArgChange,
					u = t.refetchOnFocus,
					d = t.refetchOnReconnect;
				z1();
				var p = function (Z) {
					return typeof process < "u", Z;
				};
				Object.assign(e, {
					reducerPath: o,
					endpoints: {},
					internalActions: {
						onOnline: Wi,
						onOffline: $l,
						onFocus: qi,
						onFocusLost: Ll,
					},
					util: {},
				});
				var h = Bw({
						baseQuery: r,
						reducerPath: o,
						context: n,
						api: e,
						serializeQueryArgs: l,
					}),
					v = h.queryThunk,
					g = h.mutationThunk,
					x = h.patchQueryData,
					k = h.updateQueryData,
					y = h.upsertQueryData,
					c = h.prefetch,
					m = h.buildMatchThunkActions,
					w = qw({
						context: n,
						queryThunk: v,
						mutationThunk: g,
						reducerPath: o,
						assertTagType: p,
						config: {
							refetchOnFocus: u,
							refetchOnReconnect: d,
							refetchOnMountOrArgChange: s,
							keepUnusedDataFor: a,
							reducerPath: o,
						},
					}),
					S = w.reducer,
					E = w.actions;
				ln(e.util, {
					patchQueryData: x,
					updateQueryData: k,
					upsertQueryData: y,
					prefetch: c,
					resetApiState: E.resetApiState,
				}),
					ln(e.internalActions, E);
				var C = ox({
						reducerPath: o,
						context: n,
						queryThunk: v,
						mutationThunk: g,
						api: e,
						assertTagType: p,
					}),
					j = C.middleware,
					T = C.actions;
				ln(e.util, T), ln(e, { reducer: S, middleware: j });
				var P = Ww({ serializeQueryArgs: l, reducerPath: o }),
					R = P.buildQuerySelector,
					_ = P.buildMutationSelector,
					b = P.selectInvalidatedBy;
				ln(e.util, { selectInvalidatedBy: b });
				var D = Qw({
						queryThunk: v,
						mutationThunk: g,
						api: e,
						serializeQueryArgs: l,
						context: n,
					}),
					U = D.buildInitiateQuery,
					B = D.buildInitiateMutation,
					H = D.getRunningMutationThunk,
					A = D.getRunningMutationsThunk,
					z = D.getRunningQueriesThunk,
					V = D.getRunningQueryThunk,
					G = D.getRunningOperationPromises,
					J = D.removalWarning;
				return (
					ln(e.util, {
						getRunningOperationPromises: G,
						getRunningOperationPromise: J,
						getRunningMutationThunk: H,
						getRunningMutationsThunk: A,
						getRunningQueryThunk: V,
						getRunningQueriesThunk: z,
					}),
					{
						name: sp,
						injectEndpoint: function (Z, te) {
							var ee,
								ne,
								le = e;
							(ne = (ee = le.endpoints)[Z]) != null || (ee[Z] = {}),
								wm(te)
									? ln(
											le.endpoints[Z],
											{ name: Z, select: R(Z, te), initiate: U(Z, te) },
											m(v, Z)
									  )
									: Uw(te) &&
									  ln(
											le.endpoints[Z],
											{ name: Z, select: _(), initiate: B(Z) },
											m(g, Z)
									  );
						},
					}
				);
			},
		};
	},
	Em = { exports: {} },
	Cm = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $r = O;
function ax(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sx = typeof Object.is == "function" ? Object.is : ax,
	ux = $r.useState,
	cx = $r.useEffect,
	fx = $r.useLayoutEffect,
	dx = $r.useDebugValue;
function px(e, t) {
	var n = t(),
		r = ux({ inst: { value: n, getSnapshot: t } }),
		i = r[0].inst,
		o = r[1];
	return (
		fx(
			function () {
				(i.value = n), (i.getSnapshot = t), Es(i) && o({ inst: i });
			},
			[e, n, t]
		),
		cx(
			function () {
				return (
					Es(i) && o({ inst: i }),
					e(function () {
						Es(i) && o({ inst: i });
					})
				);
			},
			[e]
		),
		dx(n),
		n
	);
}
function Es(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !sx(e, n);
	} catch {
		return !0;
	}
}
function hx(e, t) {
	return t();
}
var vx =
	typeof window > "u" ||
	typeof window.document > "u" ||
	typeof window.document.createElement > "u"
		? hx
		: px;
Cm.useSyncExternalStore =
	$r.useSyncExternalStore !== void 0 ? $r.useSyncExternalStore : vx;
Em.exports = Cm;
var mx = Em.exports,
	jm = { exports: {} },
	Nm = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ca = O,
	yx = mx;
function gx(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wx = typeof Object.is == "function" ? Object.is : gx,
	xx = yx.useSyncExternalStore,
	Sx = ca.useRef,
	kx = ca.useEffect,
	Ex = ca.useMemo,
	Cx = ca.useDebugValue;
Nm.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
	var o = Sx(null);
	if (o.current === null) {
		var l = { hasValue: !1, value: null };
		o.current = l;
	} else l = o.current;
	o = Ex(
		function () {
			function s(v) {
				if (!u) {
					if (((u = !0), (d = v), (v = r(v)), i !== void 0 && l.hasValue)) {
						var g = l.value;
						if (i(g, v)) return (p = g);
					}
					return (p = v);
				}
				if (((g = p), wx(d, v))) return g;
				var x = r(v);
				return i !== void 0 && i(g, x) ? g : ((d = v), (p = x));
			}
			var u = !1,
				d,
				p,
				h = n === void 0 ? null : n;
			return [
				function () {
					return s(t());
				},
				h === null
					? void 0
					: function () {
							return s(h());
					  },
			];
		},
		[t, n, r, i]
	);
	var a = xx(e, o[0], o[1]);
	return (
		kx(
			function () {
				(l.hasValue = !0), (l.value = a);
			},
			[a]
		),
		Cx(a),
		a
	);
};
jm.exports = Nm;
var jx = jm.exports;
function Nx(e) {
	e();
}
let Pm = Nx;
const Px = (e) => (Pm = e),
	Tx = () => Pm,
	up = Symbol.for("react-redux-context"),
	cp = typeof globalThis < "u" ? globalThis : {};
function Ox() {
	var e;
	if (!O.createContext) return {};
	const t = (e = cp[up]) != null ? e : (cp[up] = new Map());
	let n = t.get(O.createContext);
	return n || ((n = O.createContext(null)), t.set(O.createContext, n)), n;
}
const An = Ox();
function Xc(e = An) {
	return function () {
		return O.useContext(e);
	};
}
const Tm = Xc(),
	Rx = () => {
		throw new Error("uSES not initialized!");
	};
let Om = Rx;
const _x = (e) => {
		Om = e;
	},
	bx = (e, t) => e === t;
function Ix(e = An) {
	const t = e === An ? Tm : Xc(e);
	return function (r, i = {}) {
		const {
				equalityFn: o = bx,
				stabilityCheck: l = void 0,
				noopCheck: a = void 0,
			} = typeof i == "function" ? { equalityFn: i } : i,
			{
				store: s,
				subscription: u,
				getServerState: d,
				stabilityCheck: p,
				noopCheck: h,
			} = t();
		O.useRef(!0);
		const v = O.useCallback(
				{
					[r.name](x) {
						return r(x);
					},
				}[r.name],
				[r, p, l]
			),
			g = Om(u.addNestedSub, s.getState, d || s.getState, v, o);
		return O.useDebugValue(g), g;
	};
}
const Ax = Ix();
var Rm = { exports: {} },
	ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Me = typeof Symbol == "function" && Symbol.for,
	Jc = Me ? Symbol.for("react.element") : 60103,
	Zc = Me ? Symbol.for("react.portal") : 60106,
	fa = Me ? Symbol.for("react.fragment") : 60107,
	da = Me ? Symbol.for("react.strict_mode") : 60108,
	pa = Me ? Symbol.for("react.profiler") : 60114,
	ha = Me ? Symbol.for("react.provider") : 60109,
	va = Me ? Symbol.for("react.context") : 60110,
	ef = Me ? Symbol.for("react.async_mode") : 60111,
	ma = Me ? Symbol.for("react.concurrent_mode") : 60111,
	ya = Me ? Symbol.for("react.forward_ref") : 60112,
	ga = Me ? Symbol.for("react.suspense") : 60113,
	Mx = Me ? Symbol.for("react.suspense_list") : 60120,
	wa = Me ? Symbol.for("react.memo") : 60115,
	xa = Me ? Symbol.for("react.lazy") : 60116,
	Dx = Me ? Symbol.for("react.block") : 60121,
	Lx = Me ? Symbol.for("react.fundamental") : 60117,
	$x = Me ? Symbol.for("react.responder") : 60118,
	Fx = Me ? Symbol.for("react.scope") : 60119;
function pt(e) {
	if (typeof e == "object" && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case Jc:
				switch (((e = e.type), e)) {
					case ef:
					case ma:
					case fa:
					case pa:
					case da:
					case ga:
						return e;
					default:
						switch (((e = e && e.$$typeof), e)) {
							case va:
							case ya:
							case xa:
							case wa:
							case ha:
								return e;
							default:
								return t;
						}
				}
			case Zc:
				return t;
		}
	}
}
function _m(e) {
	return pt(e) === ma;
}
ue.AsyncMode = ef;
ue.ConcurrentMode = ma;
ue.ContextConsumer = va;
ue.ContextProvider = ha;
ue.Element = Jc;
ue.ForwardRef = ya;
ue.Fragment = fa;
ue.Lazy = xa;
ue.Memo = wa;
ue.Portal = Zc;
ue.Profiler = pa;
ue.StrictMode = da;
ue.Suspense = ga;
ue.isAsyncMode = function (e) {
	return _m(e) || pt(e) === ef;
};
ue.isConcurrentMode = _m;
ue.isContextConsumer = function (e) {
	return pt(e) === va;
};
ue.isContextProvider = function (e) {
	return pt(e) === ha;
};
ue.isElement = function (e) {
	return typeof e == "object" && e !== null && e.$$typeof === Jc;
};
ue.isForwardRef = function (e) {
	return pt(e) === ya;
};
ue.isFragment = function (e) {
	return pt(e) === fa;
};
ue.isLazy = function (e) {
	return pt(e) === xa;
};
ue.isMemo = function (e) {
	return pt(e) === wa;
};
ue.isPortal = function (e) {
	return pt(e) === Zc;
};
ue.isProfiler = function (e) {
	return pt(e) === pa;
};
ue.isStrictMode = function (e) {
	return pt(e) === da;
};
ue.isSuspense = function (e) {
	return pt(e) === ga;
};
ue.isValidElementType = function (e) {
	return (
		typeof e == "string" ||
		typeof e == "function" ||
		e === fa ||
		e === ma ||
		e === pa ||
		e === da ||
		e === ga ||
		e === Mx ||
		(typeof e == "object" &&
			e !== null &&
			(e.$$typeof === xa ||
				e.$$typeof === wa ||
				e.$$typeof === ha ||
				e.$$typeof === va ||
				e.$$typeof === ya ||
				e.$$typeof === Lx ||
				e.$$typeof === $x ||
				e.$$typeof === Fx ||
				e.$$typeof === Dx))
	);
};
ue.typeOf = pt;
Rm.exports = ue;
var zx = Rm.exports,
	bm = zx,
	Ux = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
	},
	Vx = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0,
	},
	Im = {};
Im[bm.ForwardRef] = Ux;
Im[bm.Memo] = Vx;
var ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tf = Symbol.for("react.element"),
	nf = Symbol.for("react.portal"),
	Sa = Symbol.for("react.fragment"),
	ka = Symbol.for("react.strict_mode"),
	Ea = Symbol.for("react.profiler"),
	Ca = Symbol.for("react.provider"),
	ja = Symbol.for("react.context"),
	Qx = Symbol.for("react.server_context"),
	Na = Symbol.for("react.forward_ref"),
	Pa = Symbol.for("react.suspense"),
	Ta = Symbol.for("react.suspense_list"),
	Oa = Symbol.for("react.memo"),
	Ra = Symbol.for("react.lazy"),
	Bx = Symbol.for("react.offscreen"),
	Am;
Am = Symbol.for("react.module.reference");
function kt(e) {
	if (typeof e == "object" && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case tf:
				switch (((e = e.type), e)) {
					case Sa:
					case Ea:
					case ka:
					case Pa:
					case Ta:
						return e;
					default:
						switch (((e = e && e.$$typeof), e)) {
							case Qx:
							case ja:
							case Na:
							case Ra:
							case Oa:
							case Ca:
								return e;
							default:
								return t;
						}
				}
			case nf:
				return t;
		}
	}
}
ce.ContextConsumer = ja;
ce.ContextProvider = Ca;
ce.Element = tf;
ce.ForwardRef = Na;
ce.Fragment = Sa;
ce.Lazy = Ra;
ce.Memo = Oa;
ce.Portal = nf;
ce.Profiler = Ea;
ce.StrictMode = ka;
ce.Suspense = Pa;
ce.SuspenseList = Ta;
ce.isAsyncMode = function () {
	return !1;
};
ce.isConcurrentMode = function () {
	return !1;
};
ce.isContextConsumer = function (e) {
	return kt(e) === ja;
};
ce.isContextProvider = function (e) {
	return kt(e) === Ca;
};
ce.isElement = function (e) {
	return typeof e == "object" && e !== null && e.$$typeof === tf;
};
ce.isForwardRef = function (e) {
	return kt(e) === Na;
};
ce.isFragment = function (e) {
	return kt(e) === Sa;
};
ce.isLazy = function (e) {
	return kt(e) === Ra;
};
ce.isMemo = function (e) {
	return kt(e) === Oa;
};
ce.isPortal = function (e) {
	return kt(e) === nf;
};
ce.isProfiler = function (e) {
	return kt(e) === Ea;
};
ce.isStrictMode = function (e) {
	return kt(e) === ka;
};
ce.isSuspense = function (e) {
	return kt(e) === Pa;
};
ce.isSuspenseList = function (e) {
	return kt(e) === Ta;
};
ce.isValidElementType = function (e) {
	return (
		typeof e == "string" ||
		typeof e == "function" ||
		e === Sa ||
		e === Ea ||
		e === ka ||
		e === Pa ||
		e === Ta ||
		e === Bx ||
		(typeof e == "object" &&
			e !== null &&
			(e.$$typeof === Ra ||
				e.$$typeof === Oa ||
				e.$$typeof === Ca ||
				e.$$typeof === ja ||
				e.$$typeof === Na ||
				e.$$typeof === Am ||
				e.getModuleId !== void 0))
	);
};
ce.typeOf = kt;
function qx() {
	const e = Tx();
	let t = null,
		n = null;
	return {
		clear() {
			(t = null), (n = null);
		},
		notify() {
			e(() => {
				let r = t;
				for (; r; ) r.callback(), (r = r.next);
			});
		},
		get() {
			let r = [],
				i = t;
			for (; i; ) r.push(i), (i = i.next);
			return r;
		},
		subscribe(r) {
			let i = !0,
				o = (n = { callback: r, next: null, prev: n });
			return (
				o.prev ? (o.prev.next = o) : (t = o),
				function () {
					!i ||
						t === null ||
						((i = !1),
						o.next ? (o.next.prev = o.prev) : (n = o.prev),
						o.prev ? (o.prev.next = o.next) : (t = o.next));
				}
			);
		},
	};
}
const fp = { notify() {}, get: () => [] };
function Wx(e, t) {
	let n,
		r = fp;
	function i(p) {
		return s(), r.subscribe(p);
	}
	function o() {
		r.notify();
	}
	function l() {
		d.onStateChange && d.onStateChange();
	}
	function a() {
		return !!n;
	}
	function s() {
		n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = qx()));
	}
	function u() {
		n && (n(), (n = void 0), r.clear(), (r = fp));
	}
	const d = {
		addNestedSub: i,
		notifyNestedSubs: o,
		handleChangeWrapper: l,
		isSubscribed: a,
		trySubscribe: s,
		tryUnsubscribe: u,
		getListeners: () => r,
	};
	return d;
}
const Hx =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	Kx = Hx ? O.useLayoutEffect : O.useEffect;
function dp(e, t) {
	return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Fl(e, t) {
	if (dp(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	const n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let i = 0; i < n.length; i++)
		if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !dp(e[n[i]], t[n[i]]))
			return !1;
	return !0;
}
function Gx({
	store: e,
	context: t,
	children: n,
	serverState: r,
	stabilityCheck: i = "once",
	noopCheck: o = "once",
}) {
	const l = O.useMemo(() => {
			const u = Wx(e);
			return {
				store: e,
				subscription: u,
				getServerState: r ? () => r : void 0,
				stabilityCheck: i,
				noopCheck: o,
			};
		}, [e, r, i, o]),
		a = O.useMemo(() => e.getState(), [e]);
	Kx(() => {
		const { subscription: u } = l;
		return (
			(u.onStateChange = u.notifyNestedSubs),
			u.trySubscribe(),
			a !== e.getState() && u.notifyNestedSubs(),
			() => {
				u.tryUnsubscribe(), (u.onStateChange = void 0);
			}
		);
	}, [l, a]);
	const s = t || An;
	return O.createElement(s.Provider, { value: l }, n);
}
function Mm(e = An) {
	const t = e === An ? Tm : Xc(e);
	return function () {
		const { store: r } = t();
		return r;
	};
}
const Dm = Mm();
function Yx(e = An) {
	const t = e === An ? Dm : Mm(e);
	return function () {
		return t().dispatch;
	};
}
const rf = Yx();
_x(jx.useSyncExternalStoreWithSelector);
Px(bc.unstable_batchedUpdates);
var Xx =
		(globalThis && globalThis.__spreadArray) ||
		function (e, t) {
			for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
			return e;
		},
	Jx = Object.defineProperty,
	Zx = Object.defineProperties,
	e2 = Object.getOwnPropertyDescriptors,
	pp = Object.getOwnPropertySymbols,
	t2 = Object.prototype.hasOwnProperty,
	n2 = Object.prototype.propertyIsEnumerable,
	hp = function (e, t, n) {
		return t in e
			? Jx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
			: (e[t] = n);
	},
	Ht = function (e, t) {
		for (var n in t || (t = {})) t2.call(t, n) && hp(e, n, t[n]);
		if (pp)
			for (var r = 0, i = pp(t); r < i.length; r++) {
				var n = i[r];
				n2.call(t, n) && hp(e, n, t[n]);
			}
		return e;
	},
	Ho = function (e, t) {
		return Zx(e, e2(t));
	};
function vp(e, t, n, r) {
	var i = O.useMemo(
			function () {
				return {
					queryArgs: e,
					serialized:
						typeof e == "object"
							? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
							: e,
				};
			},
			[e, t, n, r]
		),
		o = O.useRef(i);
	return (
		O.useEffect(
			function () {
				o.current.serialized !== i.serialized && (o.current = i);
			},
			[i]
		),
		o.current.serialized === i.serialized ? o.current.queryArgs : e
	);
}
var Cs = Symbol();
function js(e) {
	var t = O.useRef(e);
	return (
		O.useEffect(
			function () {
				Fl(t.current, e) || (t.current = e);
			},
			[e]
		),
		Fl(t.current, e) ? t.current : e
	);
}
var To = WeakMap ? new WeakMap() : void 0,
	r2 = function (e) {
		var t = e.endpointName,
			n = e.queryArgs,
			r = "",
			i = To == null ? void 0 : To.get(n);
		if (typeof i == "string") r = i;
		else {
			var o = JSON.stringify(n, function (l, a) {
				return In(a)
					? Object.keys(a)
							.sort()
							.reduce(function (s, u) {
								return (s[u] = a[u]), s;
							}, {})
					: a;
			});
			In(n) && (To == null || To.set(n, o)), (r = o);
		}
		return t + "(" + r + ")";
	},
	i2 =
		typeof window < "u" && window.document && window.document.createElement
			? O.useLayoutEffect
			: O.useEffect,
	o2 = function (e) {
		return e;
	},
	l2 = function (e) {
		return e.isUninitialized
			? Ho(Ht({}, e), {
					isUninitialized: !1,
					isFetching: !0,
					isLoading: e.data === void 0,
					status: me.pending,
			  })
			: e;
	};
function a2(e) {
	var t = e.api,
		n = e.moduleOptions,
		r = n.batch,
		i = n.useDispatch,
		o = n.useSelector,
		l = n.useStore,
		a = n.unstable__sideEffectsInRender,
		s = e.serializeQueryArgs,
		u = e.context,
		d = a
			? function (x) {
					return x();
			  }
			: O.useEffect;
	return { buildQueryHooks: v, buildMutationHook: g, usePrefetch: h };
	function p(x, k, y) {
		if (k != null && k.endpointName && x.isUninitialized) {
			var c = k.endpointName,
				m = u.endpointDefinitions[c];
			s({
				queryArgs: k.originalArgs,
				endpointDefinition: m,
				endpointName: c,
			}) === s({ queryArgs: y, endpointDefinition: m, endpointName: c }) &&
				(k = void 0);
		}
		var w = x.isSuccess ? x.data : k == null ? void 0 : k.data;
		w === void 0 && (w = x.data);
		var S = w !== void 0,
			E = x.isLoading,
			C = !S && E,
			j = x.isSuccess || (E && S);
		return Ho(Ht({}, x), {
			data: w,
			currentData: x.data,
			isFetching: E,
			isLoading: C,
			isSuccess: j,
		});
	}
	function h(x, k) {
		var y = i(),
			c = js(k);
		return O.useCallback(
			function (m, w) {
				return y(t.util.prefetch(x, m, Ht(Ht({}, c), w)));
			},
			[x, y, c]
		);
	}
	function v(x) {
		var k = function (m, w) {
				var S = w === void 0 ? {} : w,
					E = S.refetchOnReconnect,
					C = S.refetchOnFocus,
					j = S.refetchOnMountOrArgChange,
					T = S.skip,
					P = T === void 0 ? !1 : T,
					R = S.pollingInterval,
					_ = R === void 0 ? 0 : R,
					b = t.endpoints[x].initiate,
					D = i(),
					U = vp(P ? Gn : m, r2, u.endpointDefinitions[x], x),
					B = js({
						refetchOnReconnect: E,
						refetchOnFocus: C,
						pollingInterval: _,
					}),
					H = O.useRef(!1),
					A = O.useRef(),
					z = A.current || {},
					V = z.queryCacheKey,
					G = z.requestId,
					J = !1;
				if (V && G) {
					var Z = D(
						t.internalActions.internal_probeSubscription({
							queryCacheKey: V,
							requestId: G,
						})
					);
					J = !!Z;
				}
				var te = !J && H.current;
				return (
					d(function () {
						H.current = J;
					}),
					d(
						function () {
							te && (A.current = void 0);
						},
						[te]
					),
					d(
						function () {
							var ee,
								ne = A.current;
							if ((typeof process < "u", U === Gn)) {
								ne == null || ne.unsubscribe(), (A.current = void 0);
								return;
							}
							var le =
								(ee = A.current) == null ? void 0 : ee.subscriptionOptions;
							if (!ne || ne.arg !== U) {
								ne == null || ne.unsubscribe();
								var Je = D(b(U, { subscriptionOptions: B, forceRefetch: j }));
								A.current = Je;
							} else B !== le && ne.updateSubscriptionOptions(B);
						},
						[D, b, j, U, B, te]
					),
					O.useEffect(function () {
						return function () {
							var ee;
							(ee = A.current) == null || ee.unsubscribe(),
								(A.current = void 0);
						};
					}, []),
					O.useMemo(function () {
						return {
							refetch: function () {
								var ee;
								if (!A.current)
									throw new Error(
										"Cannot refetch a query that has not been started yet."
									);
								return (ee = A.current) == null ? void 0 : ee.refetch();
							},
						};
					}, [])
				);
			},
			y = function (m) {
				var w = m === void 0 ? {} : m,
					S = w.refetchOnReconnect,
					E = w.refetchOnFocus,
					C = w.pollingInterval,
					j = C === void 0 ? 0 : C,
					T = t.endpoints[x].initiate,
					P = i(),
					R = O.useState(Cs),
					_ = R[0],
					b = R[1],
					D = O.useRef(),
					U = js({
						refetchOnReconnect: S,
						refetchOnFocus: E,
						pollingInterval: j,
					});
				d(
					function () {
						var A,
							z,
							V = (A = D.current) == null ? void 0 : A.subscriptionOptions;
						U !== V &&
							((z = D.current) == null || z.updateSubscriptionOptions(U));
					},
					[U]
				);
				var B = O.useRef(U);
				d(
					function () {
						B.current = U;
					},
					[U]
				);
				var H = O.useCallback(
					function (A, z) {
						z === void 0 && (z = !1);
						var V;
						return (
							r(function () {
								var G;
								(G = D.current) == null || G.unsubscribe(),
									(D.current = V =
										P(
											T(A, { subscriptionOptions: B.current, forceRefetch: !z })
										)),
									b(A);
							}),
							V
						);
					},
					[P, T]
				);
				return (
					O.useEffect(function () {
						return function () {
							var A;
							(A = D == null ? void 0 : D.current) == null || A.unsubscribe();
						};
					}, []),
					O.useEffect(
						function () {
							_ !== Cs && !D.current && H(_, !0);
						},
						[_, H]
					),
					O.useMemo(
						function () {
							return [H, _];
						},
						[H, _]
					)
				);
			},
			c = function (m, w) {
				var S = w === void 0 ? {} : w,
					E = S.skip,
					C = E === void 0 ? !1 : E,
					j = S.selectFromResult,
					T = t.endpoints[x].select,
					P = vp(C ? Gn : m, s, u.endpointDefinitions[x], x),
					R = O.useRef(),
					_ = O.useMemo(
						function () {
							return wi(
								[
									T(P),
									function (H, A) {
										return A;
									},
									function (H) {
										return P;
									},
								],
								p
							);
						},
						[T, P]
					),
					b = O.useMemo(
						function () {
							return j ? wi([_], j) : _;
						},
						[_, j]
					),
					D = o(function (H) {
						return b(H, R.current);
					}, Fl),
					U = l(),
					B = _(U.getState(), R.current);
				return (
					i2(
						function () {
							R.current = B;
						},
						[B]
					),
					D
				);
			};
		return {
			useQueryState: c,
			useQuerySubscription: k,
			useLazyQuerySubscription: y,
			useLazyQuery: function (m) {
				var w = y(m),
					S = w[0],
					E = w[1],
					C = c(E, Ho(Ht({}, m), { skip: E === Cs })),
					j = O.useMemo(
						function () {
							return { lastArg: E };
						},
						[E]
					);
				return O.useMemo(
					function () {
						return [S, C, j];
					},
					[S, C, j]
				);
			},
			useQuery: function (m, w) {
				var S = k(m, w),
					E = c(
						m,
						Ht(
							{
								selectFromResult:
									m === Gn || (w != null && w.skip) ? void 0 : l2,
							},
							w
						)
					),
					C = E.data,
					j = E.status,
					T = E.isLoading,
					P = E.isSuccess,
					R = E.isError,
					_ = E.error;
				return (
					O.useDebugValue({
						data: C,
						status: j,
						isLoading: T,
						isSuccess: P,
						isError: R,
						error: _,
					}),
					O.useMemo(
						function () {
							return Ht(Ht({}, E), S);
						},
						[E, S]
					)
				);
			},
		};
	}
	function g(x) {
		return function (k) {
			var y = k === void 0 ? {} : k,
				c = y.selectFromResult,
				m = c === void 0 ? o2 : c,
				w = y.fixedCacheKey,
				S = t.endpoints[x],
				E = S.select,
				C = S.initiate,
				j = i(),
				T = O.useState(),
				P = T[0],
				R = T[1];
			O.useEffect(
				function () {
					return function () {
						(P != null && P.arg.fixedCacheKey) || P == null || P.reset();
					};
				},
				[P]
			);
			var _ = O.useCallback(
					function (ne) {
						var le = j(C(ne, { fixedCacheKey: w }));
						return R(le), le;
					},
					[j, C, w]
				),
				b = (P || {}).requestId,
				D = O.useMemo(
					function () {
						return wi(
							[
								E({
									fixedCacheKey: w,
									requestId: P == null ? void 0 : P.requestId,
								}),
							],
							m
						);
					},
					[E, P, m, w]
				),
				U = o(D, Fl),
				B = w == null ? (P == null ? void 0 : P.arg.originalArgs) : void 0,
				H = O.useCallback(
					function () {
						r(function () {
							P && R(void 0),
								w &&
									j(
										t.internalActions.removeMutationResult({
											requestId: b,
											fixedCacheKey: w,
										})
									);
						});
					},
					[j, w, P, b]
				),
				A = U.endpointName,
				z = U.data,
				V = U.status,
				G = U.isLoading,
				J = U.isSuccess,
				Z = U.isError,
				te = U.error;
			O.useDebugValue({
				endpointName: A,
				data: z,
				status: V,
				isLoading: G,
				isSuccess: J,
				isError: Z,
				error: te,
			});
			var ee = O.useMemo(
				function () {
					return Ho(Ht({}, U), { originalArgs: B, reset: H });
				},
				[U, B, H]
			);
			return O.useMemo(
				function () {
					return [_, ee];
				},
				[_, ee]
			);
		};
	}
}
var zl;
(function (e) {
	(e.query = "query"), (e.mutation = "mutation");
})(zl || (zl = {}));
function s2(e) {
	return e.type === zl.query;
}
function u2(e) {
	return e.type === zl.mutation;
}
function Ns(e) {
	return e.replace(e[0], e[0].toUpperCase());
}
function Oo(e) {
	for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	Object.assign.apply(Object, Xx([e], t));
}
var c2 = Symbol(),
	f2 = function (e) {
		var t = e === void 0 ? {} : e,
			n = t.batch,
			r = n === void 0 ? bc.unstable_batchedUpdates : n,
			i = t.useDispatch,
			o = i === void 0 ? rf : i,
			l = t.useSelector,
			a = l === void 0 ? Ax : l,
			s = t.useStore,
			u = s === void 0 ? Dm : s,
			d = t.unstable__sideEffectsInRender,
			p = d === void 0 ? !1 : d;
		return {
			name: c2,
			init: function (h, v, g) {
				var x = v.serializeQueryArgs,
					k = h,
					y = a2({
						api: h,
						moduleOptions: {
							batch: r,
							useDispatch: o,
							useSelector: a,
							useStore: u,
							unstable__sideEffectsInRender: p,
						},
						serializeQueryArgs: x,
						context: g,
					}),
					c = y.buildQueryHooks,
					m = y.buildMutationHook,
					w = y.usePrefetch;
				return (
					Oo(k, { usePrefetch: w }),
					Oo(g, { batch: r }),
					{
						injectEndpoint: function (S, E) {
							if (s2(E)) {
								var C = c(S),
									j = C.useQuery,
									T = C.useLazyQuery,
									P = C.useLazyQuerySubscription,
									R = C.useQueryState,
									_ = C.useQuerySubscription;
								Oo(k.endpoints[S], {
									useQuery: j,
									useLazyQuery: T,
									useLazyQuerySubscription: P,
									useQueryState: R,
									useQuerySubscription: _,
								}),
									(h["use" + Ns(S) + "Query"] = j),
									(h["useLazy" + Ns(S) + "Query"] = T);
							} else if (u2(E)) {
								var b = m(S);
								Oo(k.endpoints[S], { useMutation: b }),
									(h["use" + Ns(S) + "Mutation"] = b);
							}
						},
					}
				);
			},
		};
	},
	d2 = Hw(lx(), f2());
const Ul = d2({
		reducerPath: "userApiSlice",
		baseQuery: Fw({ baseUrl: "https://api.transcript.dtkapp.com.ng" }),
		endpoints: (e) => ({
			registerUser: e.mutation({
				query: (t) => ({
					url: "/signup",
					method: "POST",
					body: t,
					headers: { "Content-Type": "application/json; charset=UTF-8" },
				}),
				transformResponse: (t) => t.message,
			}),
			getUsers: e.query({
				query: () => ({
					url: "/users",
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}),
				transformResponse: (t) => t.data,
			}),
			getUser: e.query({
				query: (t) => `/user/${t}`,
				transformResponse: (t) => t.data,
			}),
			loginUser: e.mutation({
				query: (t) => ({
					url: "/login",
					method: "POST",
					body: t,
					headers: { "Content-Type": "application/json" },
				}),
				transformResponse: (t) => t.user,
			}),
			getDepartments: e.query({
				query: () => ({
					url: "/departments",
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}),
				transformResponse: (t) => t.data,
			}),
			getDepartment: e.query({
				query: (t) => ({
					url: `/department/${t}`,
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}),
				transformResponse: (t) => t.data,
			}),
			createDepartment: e.mutation({
				query: (t) => ({
					url: "/create-department",
					method: "POST",
					body: t,
					headers: { "Content-Type": "application/json" },
				}),
			}),
			deleteDepartment: e.mutation({
				query: (t) => ({
					url: `/delete-department/${t}`,
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
				}),
			}),
			editDepartment: e.mutation({
				query: (t) => ({
					url: `/edit-department/${t}`,
					method: "PATCH",
					headers: { "Content-Type": "application/json" },
				}),
			}),
			getColleges: e.query({
				query: () => ({
					url: "/colleges",
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}),
				transformResponse: (t) => t.data,
			}),
			getCollege: e.query({
				query: (t) => ({
					url: `/college/${t}`,
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}),
				transformResponse: (t) => t.data,
			}),
			createCollege: e.mutation({
				query: (t) => ({
					url: "/create-college",
					method: "POST",
					body: t,
					headers: { "Content-Type": "application/json" },
				}),
			}),
			deleteCollege: e.mutation({
				query: (t) => ({
					url: `/delete-college/${t}`,
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
				}),
			}),
			editCollege: e.mutation({
				query: (t) => ({
					url: `/edit-college/${t}`,
					method: "PATCH",
					headers: { "Content-Type": "application/json" },
				}),
			}),
			getDestinations: e.query({
				query: () => ({
					url: "/destinations",
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}),
				transformResponse: (t) => t.data,
			}),
			getDestination: e.query({
				query: (t) => ({
					url: `/destination/${t}`,
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}),
				transformResponse: (t) => t.data,
			}),
			createDestination: e.mutation({
				query: (t) => ({
					url: "/create-destination",
					method: "POST",
					body: t,
					headers: { "Content-Type": "application/json" },
				}),
			}),
			deleteDestination: e.mutation({
				query: (t) => ({
					url: `/delete-destination/${t}`,
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
				}),
			}),
			editDestination: e.mutation({
				query: (t) => ({
					url: `/edit-destination/${t}`,
					method: "PATCH",
					headers: { "Content-Type": "application/json" },
				}),
			}),
			logoutUser: e.mutation({
				query: () => ({ url: "/logout" }),
				async onQueryStarted({ queryFulfilled: t }) {
					try {
						await t, localStorage.removeItem("transcript-uid");
					} catch (n) {
						console.log(n);
					}
				},
			}),
		}),
	}),
	{
		useRegisterUserMutation: p2,
		useGetUsersQuery: h2,
		useGetUserQuery: v2,
		useGetCollegesQuery: m2,
		useGetCollegeQuery: X2,
		useCreateCollegeMutation: J2,
		useDeleteCollegeMutation: Z2,
		useEditCollegeMutation: eS,
		useGetDepartmentQuery: tS,
		useGetDepartmentsQuery: y2,
		useCreateDepartmentMutation: nS,
		useDeleteDepartmentMutation: rS,
		useEditDepartmentMutation: iS,
		useGetDestinationQuery: oS,
		useGetDestinationsQuery: lS,
		useCreateDestinationMutation: aS,
		useDeleteDestinationMutation: sS,
		useEditDestinationMutation: uS,
		useLoginUserMutation: g2,
		useLogoutUserMutation: cS,
	} = Ul;
function Lm(e) {
	var t,
		n,
		r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object")
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++)
				e[t] && (n = Lm(e[t])) && (r && (r += " "), (r += n));
		else for (t in e) e[t] && (r && (r += " "), (r += t));
	return r;
}
function yn() {
	for (var e, t, n = 0, r = ""; n < arguments.length; )
		(e = arguments[n++]) && (t = Lm(e)) && (r && (r += " "), (r += t));
	return r;
}
const Si = (e) => typeof e == "number" && !isNaN(e),
	rr = (e) => typeof e == "string",
	tt = (e) => typeof e == "function",
	Ko = (e) => (rr(e) || tt(e) ? e : null),
	Ps = (e) => O.isValidElement(e) || rr(e) || tt(e) || Si(e);
function w2(e, t, n) {
	n === void 0 && (n = 300);
	const { scrollHeight: r, style: i } = e;
	requestAnimationFrame(() => {
		(i.minHeight = "initial"),
			(i.height = r + "px"),
			(i.transition = `all ${n}ms`),
			requestAnimationFrame(() => {
				(i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
			});
	});
}
function _a(e) {
	let {
		enter: t,
		exit: n,
		appendPosition: r = !1,
		collapse: i = !0,
		collapseDuration: o = 300,
	} = e;
	return function (l) {
		let {
			children: a,
			position: s,
			preventExitTransition: u,
			done: d,
			nodeRef: p,
			isIn: h,
		} = l;
		const v = r ? `${t}--${s}` : t,
			g = r ? `${n}--${s}` : n,
			x = O.useRef(0);
		return (
			O.useLayoutEffect(() => {
				const k = p.current,
					y = v.split(" "),
					c = (m) => {
						m.target === p.current &&
							(k.dispatchEvent(new Event("d")),
							k.removeEventListener("animationend", c),
							k.removeEventListener("animationcancel", c),
							x.current === 0 &&
								m.type !== "animationcancel" &&
								k.classList.remove(...y));
					};
				k.classList.add(...y),
					k.addEventListener("animationend", c),
					k.addEventListener("animationcancel", c);
			}, []),
			O.useEffect(() => {
				const k = p.current,
					y = () => {
						k.removeEventListener("animationend", y), i ? w2(k, d, o) : d();
					};
				h ||
					(u
						? y()
						: ((x.current = 1),
						  (k.className += ` ${g}`),
						  k.addEventListener("animationend", y)));
			}, [h]),
			X.createElement(X.Fragment, null, a)
		);
	};
}
function mp(e, t) {
	return e != null
		? {
				content: e.content,
				containerId: e.props.containerId,
				id: e.props.toastId,
				theme: e.props.theme,
				type: e.props.type,
				data: e.props.data || {},
				isLoading: e.props.isLoading,
				icon: e.props.icon,
				status: t,
		  }
		: {};
}
const vt = {
		list: new Map(),
		emitQueue: new Map(),
		on(e, t) {
			return (
				this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
			);
		},
		off(e, t) {
			if (t) {
				const n = this.list.get(e).filter((r) => r !== t);
				return this.list.set(e, n), this;
			}
			return this.list.delete(e), this;
		},
		cancelEmit(e) {
			const t = this.emitQueue.get(e);
			return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
		},
		emit(e) {
			this.list.has(e) &&
				this.list.get(e).forEach((t) => {
					const n = setTimeout(() => {
						t(...[].slice.call(arguments, 1));
					}, 0);
					this.emitQueue.has(e) || this.emitQueue.set(e, []),
						this.emitQueue.get(e).push(n);
				});
		},
	},
	Ro = (e) => {
		let { theme: t, type: n, ...r } = e;
		return X.createElement("svg", {
			viewBox: "0 0 24 24",
			width: "100%",
			height: "100%",
			fill:
				t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
			...r,
		});
	},
	Ts = {
		info: function (e) {
			return X.createElement(
				Ro,
				{ ...e },
				X.createElement("path", {
					d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
				})
			);
		},
		warning: function (e) {
			return X.createElement(
				Ro,
				{ ...e },
				X.createElement("path", {
					d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
				})
			);
		},
		success: function (e) {
			return X.createElement(
				Ro,
				{ ...e },
				X.createElement("path", {
					d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
				})
			);
		},
		error: function (e) {
			return X.createElement(
				Ro,
				{ ...e },
				X.createElement("path", {
					d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
				})
			);
		},
		spinner: function () {
			return X.createElement("div", { className: "Toastify__spinner" });
		},
	};
function x2(e) {
	const [, t] = O.useReducer((v) => v + 1, 0),
		[n, r] = O.useState([]),
		i = O.useRef(null),
		o = O.useRef(new Map()).current,
		l = (v) => n.indexOf(v) !== -1,
		a = O.useRef({
			toastKey: 1,
			displayedToast: 0,
			count: 0,
			queue: [],
			props: e,
			containerId: null,
			isToastActive: l,
			getToast: (v) => o.get(v),
		}).current;
	function s(v) {
		let { containerId: g } = v;
		const { limit: x } = a.props;
		!x ||
			(g && a.containerId !== g) ||
			((a.count -= a.queue.length), (a.queue = []));
	}
	function u(v) {
		r((g) => (v == null ? [] : g.filter((x) => x !== v)));
	}
	function d() {
		const { toastContent: v, toastProps: g, staleId: x } = a.queue.shift();
		h(v, g, x);
	}
	function p(v, g) {
		let { delay: x, staleId: k, ...y } = g;
		if (
			!Ps(v) ||
			(function (_) {
				return (
					!i.current ||
					(a.props.enableMultiContainer &&
						_.containerId !== a.props.containerId) ||
					(o.has(_.toastId) && _.updateId == null)
				);
			})(y)
		)
			return;
		const { toastId: c, updateId: m, data: w } = y,
			{ props: S } = a,
			E = () => u(c),
			C = m == null;
		C && a.count++;
		const j = {
			...S,
			style: S.toastStyle,
			key: a.toastKey++,
			...Object.fromEntries(
				Object.entries(y).filter((_) => {
					let [b, D] = _;
					return D != null;
				})
			),
			toastId: c,
			updateId: m,
			data: w,
			closeToast: E,
			isIn: !1,
			className: Ko(y.className || S.toastClassName),
			bodyClassName: Ko(y.bodyClassName || S.bodyClassName),
			progressClassName: Ko(y.progressClassName || S.progressClassName),
			autoClose:
				!y.isLoading &&
				((T = y.autoClose),
				(P = S.autoClose),
				T === !1 || (Si(T) && T > 0) ? T : P),
			deleteToast() {
				const _ = mp(o.get(c), "removed");
				o.delete(c), vt.emit(4, _);
				const b = a.queue.length;
				if (
					((a.count = c == null ? a.count - a.displayedToast : a.count - 1),
					a.count < 0 && (a.count = 0),
					b > 0)
				) {
					const D = c == null ? a.props.limit : 1;
					if (b === 1 || D === 1) a.displayedToast++, d();
					else {
						const U = D > b ? b : D;
						a.displayedToast = U;
						for (let B = 0; B < U; B++) d();
					}
				} else t();
			},
		};
		var T, P;
		(j.iconOut = (function (_) {
			let { theme: b, type: D, isLoading: U, icon: B } = _,
				H = null;
			const A = { theme: b, type: D };
			return (
				B === !1 ||
					(tt(B)
						? (H = B(A))
						: O.isValidElement(B)
						? (H = O.cloneElement(B, A))
						: rr(B) || Si(B)
						? (H = B)
						: U
						? (H = Ts.spinner())
						: ((z) => z in Ts)(D) && (H = Ts[D](A))),
				H
			);
		})(j)),
			tt(y.onOpen) && (j.onOpen = y.onOpen),
			tt(y.onClose) && (j.onClose = y.onClose),
			(j.closeButton = S.closeButton),
			y.closeButton === !1 || Ps(y.closeButton)
				? (j.closeButton = y.closeButton)
				: y.closeButton === !0 &&
				  (j.closeButton = !Ps(S.closeButton) || S.closeButton);
		let R = v;
		O.isValidElement(v) && !rr(v.type)
			? (R = O.cloneElement(v, { closeToast: E, toastProps: j, data: w }))
			: tt(v) && (R = v({ closeToast: E, toastProps: j, data: w })),
			S.limit && S.limit > 0 && a.count > S.limit && C
				? a.queue.push({ toastContent: R, toastProps: j, staleId: k })
				: Si(x)
				? setTimeout(() => {
						h(R, j, k);
				  }, x)
				: h(R, j, k);
	}
	function h(v, g, x) {
		const { toastId: k } = g;
		x && o.delete(x);
		const y = { content: v, props: g };
		o.set(k, y),
			r((c) => [...c, k].filter((m) => m !== x)),
			vt.emit(4, mp(y, y.props.updateId == null ? "added" : "updated"));
	}
	return (
		O.useEffect(
			() => (
				(a.containerId = e.containerId),
				vt
					.cancelEmit(3)
					.on(0, p)
					.on(1, (v) => i.current && u(v))
					.on(5, s)
					.emit(2, a),
				() => {
					o.clear(), vt.emit(3, a);
				}
			),
			[]
		),
		O.useEffect(() => {
			(a.props = e), (a.isToastActive = l), (a.displayedToast = n.length);
		}),
		{
			getToastToRender: function (v) {
				const g = new Map(),
					x = Array.from(o.values());
				return (
					e.newestOnTop && x.reverse(),
					x.forEach((k) => {
						const { position: y } = k.props;
						g.has(y) || g.set(y, []), g.get(y).push(k);
					}),
					Array.from(g, (k) => v(k[0], k[1]))
				);
			},
			containerRef: i,
			isToastActive: l,
		}
	);
}
function yp(e) {
	return e.targetTouches && e.targetTouches.length >= 1
		? e.targetTouches[0].clientX
		: e.clientX;
}
function gp(e) {
	return e.targetTouches && e.targetTouches.length >= 1
		? e.targetTouches[0].clientY
		: e.clientY;
}
function S2(e) {
	const [t, n] = O.useState(!1),
		[r, i] = O.useState(!1),
		o = O.useRef(null),
		l = O.useRef({
			start: 0,
			x: 0,
			y: 0,
			delta: 0,
			removalDistance: 0,
			canCloseOnClick: !0,
			canDrag: !1,
			boundingRect: null,
			didMove: !1,
		}).current,
		a = O.useRef(e),
		{
			autoClose: s,
			pauseOnHover: u,
			closeToast: d,
			onClick: p,
			closeOnClick: h,
		} = e;
	function v(w) {
		if (e.draggable) {
			w.nativeEvent.type === "touchstart" && w.nativeEvent.preventDefault(),
				(l.didMove = !1),
				document.addEventListener("mousemove", y),
				document.addEventListener("mouseup", c),
				document.addEventListener("touchmove", y),
				document.addEventListener("touchend", c);
			const S = o.current;
			(l.canCloseOnClick = !0),
				(l.canDrag = !0),
				(l.boundingRect = S.getBoundingClientRect()),
				(S.style.transition = ""),
				(l.x = yp(w.nativeEvent)),
				(l.y = gp(w.nativeEvent)),
				e.draggableDirection === "x"
					? ((l.start = l.x),
					  (l.removalDistance = S.offsetWidth * (e.draggablePercent / 100)))
					: ((l.start = l.y),
					  (l.removalDistance =
							S.offsetHeight *
							(e.draggablePercent === 80
								? 1.5 * e.draggablePercent
								: e.draggablePercent / 100)));
		}
	}
	function g(w) {
		if (l.boundingRect) {
			const { top: S, bottom: E, left: C, right: j } = l.boundingRect;
			w.nativeEvent.type !== "touchend" &&
			e.pauseOnHover &&
			l.x >= C &&
			l.x <= j &&
			l.y >= S &&
			l.y <= E
				? k()
				: x();
		}
	}
	function x() {
		n(!0);
	}
	function k() {
		n(!1);
	}
	function y(w) {
		const S = o.current;
		l.canDrag &&
			S &&
			((l.didMove = !0),
			t && k(),
			(l.x = yp(w)),
			(l.y = gp(w)),
			(l.delta = e.draggableDirection === "x" ? l.x - l.start : l.y - l.start),
			l.start !== l.x && (l.canCloseOnClick = !1),
			(S.style.transform = `translate${e.draggableDirection}(${l.delta}px)`),
			(S.style.opacity = "" + (1 - Math.abs(l.delta / l.removalDistance))));
	}
	function c() {
		document.removeEventListener("mousemove", y),
			document.removeEventListener("mouseup", c),
			document.removeEventListener("touchmove", y),
			document.removeEventListener("touchend", c);
		const w = o.current;
		if (l.canDrag && l.didMove && w) {
			if (((l.canDrag = !1), Math.abs(l.delta) > l.removalDistance))
				return i(!0), void e.closeToast();
			(w.style.transition = "transform 0.2s, opacity 0.2s"),
				(w.style.transform = `translate${e.draggableDirection}(0)`),
				(w.style.opacity = "1");
		}
	}
	O.useEffect(() => {
		a.current = e;
	}),
		O.useEffect(
			() => (
				o.current && o.current.addEventListener("d", x, { once: !0 }),
				tt(e.onOpen) &&
					e.onOpen(O.isValidElement(e.children) && e.children.props),
				() => {
					const w = a.current;
					tt(w.onClose) &&
						w.onClose(O.isValidElement(w.children) && w.children.props);
				}
			),
			[]
		),
		O.useEffect(
			() => (
				e.pauseOnFocusLoss &&
					(document.hasFocus() || k(),
					window.addEventListener("focus", x),
					window.addEventListener("blur", k)),
				() => {
					e.pauseOnFocusLoss &&
						(window.removeEventListener("focus", x),
						window.removeEventListener("blur", k));
				}
			),
			[e.pauseOnFocusLoss]
		);
	const m = { onMouseDown: v, onTouchStart: v, onMouseUp: g, onTouchEnd: g };
	return (
		s && u && ((m.onMouseEnter = k), (m.onMouseLeave = x)),
		h &&
			(m.onClick = (w) => {
				p && p(w), l.canCloseOnClick && d();
			}),
		{
			playToast: x,
			pauseToast: k,
			isRunning: t,
			preventExitTransition: r,
			toastRef: o,
			eventHandlers: m,
		}
	);
}
function $m(e) {
	let { closeToast: t, theme: n, ariaLabel: r = "close" } = e;
	return X.createElement(
		"button",
		{
			className: `Toastify__close-button Toastify__close-button--${n}`,
			type: "button",
			onClick: (i) => {
				i.stopPropagation(), t(i);
			},
			"aria-label": r,
		},
		X.createElement(
			"svg",
			{ "aria-hidden": "true", viewBox: "0 0 14 16" },
			X.createElement("path", {
				fillRule: "evenodd",
				d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
			})
		)
	);
}
function k2(e) {
	let {
		delay: t,
		isRunning: n,
		closeToast: r,
		type: i = "default",
		hide: o,
		className: l,
		style: a,
		controlledProgress: s,
		progress: u,
		rtl: d,
		isIn: p,
		theme: h,
	} = e;
	const v = o || (s && u === 0),
		g = {
			...a,
			animationDuration: `${t}ms`,
			animationPlayState: n ? "running" : "paused",
			opacity: v ? 0 : 1,
		};
	s && (g.transform = `scaleX(${u})`);
	const x = yn(
			"Toastify__progress-bar",
			s
				? "Toastify__progress-bar--controlled"
				: "Toastify__progress-bar--animated",
			`Toastify__progress-bar-theme--${h}`,
			`Toastify__progress-bar--${i}`,
			{ "Toastify__progress-bar--rtl": d }
		),
		k = tt(l) ? l({ rtl: d, type: i, defaultClassName: x }) : yn(x, l);
	return X.createElement("div", {
		role: "progressbar",
		"aria-hidden": v ? "true" : "false",
		"aria-label": "notification timer",
		className: k,
		style: g,
		[s && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
			s && u < 1
				? null
				: () => {
						p && r();
				  },
	});
}
const E2 = (e) => {
		const {
				isRunning: t,
				preventExitTransition: n,
				toastRef: r,
				eventHandlers: i,
			} = S2(e),
			{
				closeButton: o,
				children: l,
				autoClose: a,
				onClick: s,
				type: u,
				hideProgressBar: d,
				closeToast: p,
				transition: h,
				position: v,
				className: g,
				style: x,
				bodyClassName: k,
				bodyStyle: y,
				progressClassName: c,
				progressStyle: m,
				updateId: w,
				role: S,
				progress: E,
				rtl: C,
				toastId: j,
				deleteToast: T,
				isIn: P,
				isLoading: R,
				iconOut: _,
				closeOnClick: b,
				theme: D,
			} = e,
			U = yn(
				"Toastify__toast",
				`Toastify__toast-theme--${D}`,
				`Toastify__toast--${u}`,
				{ "Toastify__toast--rtl": C },
				{ "Toastify__toast--close-on-click": b }
			),
			B = tt(g)
				? g({ rtl: C, position: v, type: u, defaultClassName: U })
				: yn(U, g),
			H = !!E || !a,
			A = { closeToast: p, type: u, theme: D };
		let z = null;
		return (
			o === !1 ||
				(z = tt(o) ? o(A) : O.isValidElement(o) ? O.cloneElement(o, A) : $m(A)),
			X.createElement(
				h,
				{ isIn: P, done: T, position: v, preventExitTransition: n, nodeRef: r },
				X.createElement(
					"div",
					{ id: j, onClick: s, className: B, ...i, style: x, ref: r },
					X.createElement(
						"div",
						{
							...(P && { role: S }),
							className: tt(k) ? k({ type: u }) : yn("Toastify__toast-body", k),
							style: y,
						},
						_ != null &&
							X.createElement(
								"div",
								{
									className: yn("Toastify__toast-icon", {
										"Toastify--animate-icon Toastify__zoom-enter": !R,
									}),
								},
								_
							),
						X.createElement("div", null, l)
					),
					z,
					X.createElement(k2, {
						...(w && !H ? { key: `pb-${w}` } : {}),
						rtl: C,
						theme: D,
						delay: a,
						isRunning: t,
						isIn: P,
						closeToast: p,
						hide: d,
						type: u,
						style: m,
						className: c,
						controlledProgress: H,
						progress: E || 0,
					})
				)
			)
		);
	},
	ba = function (e, t) {
		return (
			t === void 0 && (t = !1),
			{
				enter: `Toastify--animate Toastify__${e}-enter`,
				exit: `Toastify--animate Toastify__${e}-exit`,
				appendPosition: t,
			}
		);
	},
	C2 = _a(ba("bounce", !0));
_a(ba("slide", !0));
_a(ba("zoom"));
_a(ba("flip"));
const Du = O.forwardRef((e, t) => {
	const { getToastToRender: n, containerRef: r, isToastActive: i } = x2(e),
		{ className: o, style: l, rtl: a, containerId: s } = e;
	function u(d) {
		const p = yn(
			"Toastify__toast-container",
			`Toastify__toast-container--${d}`,
			{ "Toastify__toast-container--rtl": a }
		);
		return tt(o)
			? o({ position: d, rtl: a, defaultClassName: p })
			: yn(p, Ko(o));
	}
	return (
		O.useEffect(() => {
			t && (t.current = r.current);
		}, []),
		X.createElement(
			"div",
			{ ref: r, className: "Toastify", id: s },
			n((d, p) => {
				const h = p.length ? { ...l } : { ...l, pointerEvents: "none" };
				return X.createElement(
					"div",
					{ className: u(d), style: h, key: `container-${d}` },
					p.map((v, g) => {
						let { content: x, props: k } = v;
						return X.createElement(
							E2,
							{
								...k,
								isIn: i(k.toastId),
								style: { ...k.style, "--nth": g + 1, "--len": p.length },
								key: `toast-${k.key}`,
							},
							x
						);
					})
				);
			})
		)
	);
});
(Du.displayName = "ToastContainer"),
	(Du.defaultProps = {
		position: "top-right",
		transition: C2,
		autoClose: 5e3,
		closeButton: $m,
		pauseOnHover: !0,
		pauseOnFocusLoss: !0,
		closeOnClick: !0,
		draggable: !0,
		draggablePercent: 80,
		draggableDirection: "x",
		role: "alert",
		theme: "light",
	});
let Os,
	Bn = new Map(),
	si = [],
	j2 = 1;
function Fm() {
	return "" + j2++;
}
function N2(e) {
	return e && (rr(e.toastId) || Si(e.toastId)) ? e.toastId : Fm();
}
function ki(e, t) {
	return (
		Bn.size > 0 ? vt.emit(0, e, t) : si.push({ content: e, options: t }),
		t.toastId
	);
}
function Vl(e, t) {
	return { ...t, type: (t && t.type) || e, toastId: N2(t) };
}
function _o(e) {
	return (t, n) => ki(t, Vl(e, n));
}
function ae(e, t) {
	return ki(e, Vl("default", t));
}
(ae.loading = (e, t) =>
	ki(
		e,
		Vl("default", {
			isLoading: !0,
			autoClose: !1,
			closeOnClick: !1,
			closeButton: !1,
			draggable: !1,
			...t,
		})
	)),
	(ae.promise = function (e, t, n) {
		let r,
			{ pending: i, error: o, success: l } = t;
		i && (r = rr(i) ? ae.loading(i, n) : ae.loading(i.render, { ...n, ...i }));
		const a = {
				isLoading: null,
				autoClose: null,
				closeOnClick: null,
				closeButton: null,
				draggable: null,
			},
			s = (d, p, h) => {
				if (p == null) return void ae.dismiss(r);
				const v = { type: d, ...a, ...n, data: h },
					g = rr(p) ? { render: p } : p;
				return (
					r ? ae.update(r, { ...v, ...g }) : ae(g.render, { ...v, ...g }), h
				);
			},
			u = tt(e) ? e() : e;
		return u.then((d) => s("success", l, d)).catch((d) => s("error", o, d)), u;
	}),
	(ae.success = _o("success")),
	(ae.info = _o("info")),
	(ae.error = _o("error")),
	(ae.warning = _o("warning")),
	(ae.warn = ae.warning),
	(ae.dark = (e, t) => ki(e, Vl("default", { theme: "dark", ...t }))),
	(ae.dismiss = (e) => {
		Bn.size > 0
			? vt.emit(1, e)
			: (si = si.filter((t) => e != null && t.options.toastId !== e));
	}),
	(ae.clearWaitingQueue = function (e) {
		return e === void 0 && (e = {}), vt.emit(5, e);
	}),
	(ae.isActive = (e) => {
		let t = !1;
		return (
			Bn.forEach((n) => {
				n.isToastActive && n.isToastActive(e) && (t = !0);
			}),
			t
		);
	}),
	(ae.update = function (e, t) {
		t === void 0 && (t = {}),
			setTimeout(() => {
				const n = (function (r, i) {
					let { containerId: o } = i;
					const l = Bn.get(o || Os);
					return l && l.getToast(r);
				})(e, t);
				if (n) {
					const { props: r, content: i } = n,
						o = {
							delay: 100,
							...r,
							...t,
							toastId: t.toastId || e,
							updateId: Fm(),
						};
					o.toastId !== e && (o.staleId = e);
					const l = o.render || i;
					delete o.render, ki(l, o);
				}
			}, 0);
	}),
	(ae.done = (e) => {
		ae.update(e, { progress: 1 });
	}),
	(ae.onChange = (e) => (
		vt.on(4, e),
		() => {
			vt.off(4, e);
		}
	)),
	(ae.POSITION = {
		TOP_LEFT: "top-left",
		TOP_RIGHT: "top-right",
		TOP_CENTER: "top-center",
		BOTTOM_LEFT: "bottom-left",
		BOTTOM_RIGHT: "bottom-right",
		BOTTOM_CENTER: "bottom-center",
	}),
	(ae.TYPE = {
		INFO: "info",
		SUCCESS: "success",
		WARNING: "warning",
		ERROR: "error",
		DEFAULT: "default",
	}),
	vt
		.on(2, (e) => {
			(Os = e.containerId || e),
				Bn.set(Os, e),
				si.forEach((t) => {
					vt.emit(0, t.content, t.options);
				}),
				(si = []);
		})
		.on(3, (e) => {
			Bn.delete(e.containerId || e), Bn.size === 0 && vt.off(0).off(1).off(5);
		});
const wp = { userId: null, route: null },
	zm = Qn({
		initialState: wp,
		name: "userSlice",
		reducers: {
			logout: () => wp,
			setUserId: (e, t) => {
				e.userId = t.payload;
			},
			setRoute: (e, t) => {
				e.route = t.payload;
			},
		},
	}),
	P2 = zm.reducer,
	{ logout: fS, setUserId: Lu, setRoute: dS } = zm.actions,
	T2 = "/assets/us-59accbac.svg",
	O2 = "/assets/tr-be7d115b.svg",
	R2 = "/assets/br-ce7e334e.svg",
	_2 = "/assets/in-9a372951.svg",
	b2 = "/assets/de-d5f40046.svg",
	I2 = "/assets/profile-16-91b2a660.jpeg",
	A2 = "/assets/profile-15-875e870e.jpeg",
	M2 = "/assets/profile-21-b531d25a.jpeg",
	D2 = "/assets/avatars-4-f85ede15.jpg",
	L2 = "/assets/avatars-5-e5d43db6.jpg",
	$2 = "/assets/logo-7474c172.png",
	F2 = "/assets/logo1-df827e01.png",
	z2 = "/assets/logo2-ad22b1ad.png",
	U2 = "/assets/user-a20086cd.svg",
	V2 = "/assets/archive-9df6a3a6.svg",
	be = {
		us: T2,
		tr: O2,
		br: R2,
		ind: _2,
		de: b2,
		pfp16: I2,
		pfp15: A2,
		pfp21: M2,
		pfp30: D2,
		pfp0: L2,
		logo: $2,
		logo1: F2,
		logo2: z2,
		user: U2,
		archive: V2,
	},
	Q2 = () => {
		var g, x;
		const [e] = O.useState(localStorage.getItem("transcript-uid")),
			{ register: t, handleSubmit: n } = rm(),
			[r, { isLoading: i, isError: o, isSuccess: l, data: a, error: s }] = g2(),
			u = Br(),
			d = to(),
			p = rf(),
			h =
				((x = (g = u.state) == null ? void 0 : g.from) == null
					? void 0
					: x.pathname) || "/app",
			v = (k) => {
				console.log(k), r(k);
			};
		return (
			O.useEffect(() => {
				e &&
					(p(Lu(e)),
					setTimeout(() => {
						d("/app");
					}, 2e3));
			}, [e, d]),
			O.useEffect(() => {
				l &&
					(ae.success("Sign in succesful"),
					console.log(a),
					localStorage.setItem("transcript-uid", a == null ? void 0 : a.id),
					p(Lu(a == null ? void 0 : a.id)),
					setTimeout(() => {
						d(h);
					}, 2e3)),
					o &&
						(console.log(s),
						s
							? ae.error(s, { position: "top-right" })
							: ae.error("Login Error", { position: "top-right" }));
			}, [i]),
			f.jsx("div", {
				className: "auth-container d-flex",
				children: f.jsx("div", {
					className: "container mx-auto align-self-center",
					children: f.jsx("div", {
						className: "row",
						children: f.jsx("div", {
							className:
								"col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-12 d-flex flex-column align-self-center mx-auto",
							children: f.jsx("div", {
								className: "card mt-3 mb-3",
								children: f.jsx("div", {
									className: "card-body",
									children: f.jsxs("form", {
										className: "row",
										onSubmit: n(v),
										children: [
											f.jsx("div", {
												className: "col-md-12 mb-3",
												children: f.jsx("img", { src: be.logo }),
											}),
											f.jsx("div", {
												className: "col-md-12",
												children: f.jsxs("div", {
													className: "mb-3",
													children: [
														f.jsx("label", {
															className: "form-label",
															children: "Email",
														}),
														f.jsx("input", {
															type: "email",
															className: "form-control",
															...t("email", { required: !0 }),
														}),
													],
												}),
											}),
											f.jsx("div", {
												className: "col-12",
												children: f.jsxs("div", {
													className: "mb-4",
													children: [
														f.jsx("label", {
															className: "form-label",
															children: "Password",
														}),
														f.jsx("input", {
															type: "password",
															className: "form-control",
															...t("password", { required: !0 }),
														}),
													],
												}),
											}),
											f.jsx("div", {
												className: "col-12",
												children: f.jsx("div", {
													className: "mb-3",
													children: f.jsxs("div", {
														className:
															"form-check form-check-primary form-check-inline",
														children: [
															f.jsx("input", {
																className: "form-check-input me-3",
																type: "checkbox",
																id: "form-check-default",
															}),
															f.jsx("label", {
																className: "form-check-label",
																htmlFor: "form-check-default",
																children: "Remember me",
															}),
														],
													}),
												}),
											}),
											f.jsx("div", {
												className: "col-12",
												children: f.jsx("div", {
													className: "mb-4",
													children: f.jsx("button", {
														className: "btn btn-secondary w-100",
														children: "SIGN IN",
													}),
												}),
											}),
											f.jsx("div", {
												className: "col-12",
												children: f.jsx("div", {
													className: "text-center",
													children: f.jsxs("p", {
														className: "mb-0",
														children: [
															"Don't have an account ?",
															" ",
															f.jsx(Dc, {
																to: "/signup",
																className: "text-warning",
																children: "Sign Up",
															}),
														],
													}),
												}),
											}),
										],
									}),
								}),
							}),
						}),
					}),
				}),
			})
		);
	};
const B2 = () => {
		const e = Br(),
			t = to(),
			n = [
				{ name: "Dashboard", icon: be.user, path: "/app" },
				{ name: "Users", icon: be.archive, path: "/app/users" },
				{ name: "Colleges", icon: be.archive, path: "/app/colleges" },
				{ name: "Departments", icon: be.archive, path: "/app/departments" },
			];
		O.useEffect(() => {
			const i = document.createElement("script");
			return (
				(i.src = "/scripts/app.js"),
				(i.async = !0),
				document.body.appendChild(i),
				() => {
					document.body.removeChild(i);
				}
			);
		}, []);
		const r = localStorage.getItem("transcript-uid");
		return (
			O.useEffect(() => {
				console.log(r), r || t("/login");
			}, [r, t]),
			f.jsxs(f.Fragment, {
				children: [
					f.jsx("div", {
						className: "header-container container-xxl",
						children: f.jsxs("header", {
							className: "header navbar navbar-expand-sm expand-header",
							children: [
								f.jsx("a", {
									className: "sidebarCollapse",
									children: f.jsxs("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "24",
										height: "24",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										"stroke-width": "2",
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										className: "feather feather-menu",
										children: [
											f.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
											f.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
											f.jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" }),
										],
									}),
								}),
								f.jsxs("div", {
									className: "search-animated toggle-search",
									children: [
										f.jsxs("svg", {
											xmlns: "http://www.w3.org/2000/svg",
											width: "24",
											height: "24",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											"stroke-width": "2",
											"stroke-linecap": "round",
											"stroke-linejoin": "round",
											className: "feather feather-search",
											children: [
												f.jsx("circle", { cx: "11", cy: "11", r: "8" }),
												f.jsx("line", {
													x1: "21",
													y1: "21",
													x2: "16.65",
													y2: "16.65",
												}),
											],
										}),
										f.jsx("form", {
											className: "form-inline search-full form-inline search",
											role: "search",
											children: f.jsxs("div", {
												className: "search-bar",
												children: [
													f.jsx("input", {
														type: "text",
														className:
															"form-control search-form-control  ml-lg-auto",
														placeholder: "Search...",
													}),
													f.jsxs("svg", {
														xmlns: "http://www.w3.org/2000/svg",
														width: "24",
														height: "24",
														viewBox: "0 0 24 24",
														fill: "none",
														stroke: "currentColor",
														"stroke-width": "2",
														"stroke-linecap": "round",
														"stroke-linejoin": "round",
														className: "feather feather-x search-close",
														children: [
															f.jsx("line", {
																x1: "18",
																y1: "6",
																x2: "6",
																y2: "18",
															}),
															f.jsx("line", {
																x1: "6",
																y1: "6",
																x2: "18",
																y2: "18",
															}),
														],
													}),
												],
											}),
										}),
										f.jsx("span", {
											className: "badge badge-secondary",
											children: "Ctrl + /",
										}),
									],
								}),
								f.jsxs("ul", {
									className: "navbar-item flex-row ms-lg-auto ms-0",
									children: [
										f.jsxs("li", {
											className: "nav-item dropdown language-dropdown",
											children: [
												f.jsx("a", {
													href: "javascript:void(0);",
													className: "nav-link dropdown-toggle",
													id: "language-dropdown",
													"data-bs-toggle": "dropdown",
													"aria-haspopup": "true",
													"aria-expanded": "false",
													children: f.jsx("img", {
														src: be.us,
														className: "flag-width",
														alt: "flag",
													}),
												}),
												f.jsxs("div", {
													className: "dropdown-menu position-absolute",
													"aria-labelledby": "language-dropdown",
													children: [
														f.jsxs("a", {
															className: "dropdown-item d-flex",
															href: "javascript:void(0);",
															children: [
																f.jsx("img", {
																	src: be.us,
																	className: "flag-width",
																	alt: "flag",
																}),
																" ",
																f.jsx("span", {
																	className: "align-self-center",
																	children: " English",
																}),
															],
														}),
														f.jsxs("a", {
															className: "dropdown-item d-flex",
															href: "javascript:void(0);",
															children: [
																f.jsx("img", {
																	src: be.tr,
																	className: "flag-width",
																	alt: "flag",
																}),
																" ",
																f.jsx("span", {
																	className: "align-self-center",
																	children: " Turkish",
																}),
															],
														}),
														f.jsxs("a", {
															className: "dropdown-item d-flex",
															href: "javascript:void(0);",
															children: [
																f.jsx("img", {
																	src: be.br,
																	className: "flag-width",
																	alt: "flag",
																}),
																" ",
																f.jsx("span", {
																	className: "align-self-center",
																	children: " Portuguese",
																}),
															],
														}),
														f.jsxs("a", {
															className: "dropdown-item d-flex",
															href: "javascript:void(0);",
															children: [
																f.jsx("img", {
																	src: be.ind,
																	className: "flag-width",
																	alt: "flag",
																}),
																" ",
																f.jsx("span", {
																	className: "align-self-center",
																	children: " Hindi",
																}),
															],
														}),
														f.jsxs("a", {
															className: "dropdown-item d-flex",
															href: "javascript:void(0);",
															children: [
																f.jsx("img", {
																	src: be.de,
																	className: "flag-width",
																	alt: "flag",
																}),
																" ",
																f.jsx("span", {
																	className: "align-self-center",
																	children: " German",
																}),
															],
														}),
													],
												}),
											],
										}),
										f.jsx("li", {
											className: "nav-item theme-toggle-item",
											children: f.jsxs("a", {
												href: "javascript:void(0);",
												className: "nav-link theme-toggle",
												children: [
													f.jsx("svg", {
														xmlns: "http://www.w3.org/2000/svg",
														width: "24",
														height: "24",
														viewBox: "0 0 24 24",
														fill: "none",
														stroke: "currentColor",
														"stroke-width": "2",
														"stroke-linecap": "round",
														"stroke-linejoin": "round",
														className: "feather feather-moon dark-mode",
														children: f.jsx("path", {
															d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
														}),
													}),
													f.jsxs("svg", {
														xmlns: "http://www.w3.org/2000/svg",
														width: "24",
														height: "24",
														viewBox: "0 0 24 24",
														fill: "none",
														stroke: "currentColor",
														"stroke-width": "2",
														"stroke-linecap": "round",
														"stroke-linejoin": "round",
														className: "feather feather-sun light-mode",
														children: [
															f.jsx("circle", { cx: "12", cy: "12", r: "5" }),
															f.jsx("line", {
																x1: "12",
																y1: "1",
																x2: "12",
																y2: "3",
															}),
															f.jsx("line", {
																x1: "12",
																y1: "21",
																x2: "12",
																y2: "23",
															}),
															f.jsx("line", {
																x1: "4.22",
																y1: "4.22",
																x2: "5.64",
																y2: "5.64",
															}),
															f.jsx("line", {
																x1: "18.36",
																y1: "18.36",
																x2: "19.78",
																y2: "19.78",
															}),
															f.jsx("line", {
																x1: "1",
																y1: "12",
																x2: "3",
																y2: "12",
															}),
															f.jsx("line", {
																x1: "21",
																y1: "12",
																x2: "23",
																y2: "12",
															}),
															f.jsx("line", {
																x1: "4.22",
																y1: "19.78",
																x2: "5.64",
																y2: "18.36",
															}),
															f.jsx("line", {
																x1: "18.36",
																y1: "5.64",
																x2: "19.78",
																y2: "4.22",
															}),
														],
													}),
												],
											}),
										}),
										f.jsxs("li", {
											className: "nav-item dropdown notification-dropdown",
											children: [
												f.jsxs("a", {
													href: "javascript:void(0);",
													className: "nav-link dropdown-toggle",
													id: "notificationDropdown",
													"data-bs-toggle": "dropdown",
													"aria-haspopup": "true",
													"aria-expanded": "false",
													children: [
														f.jsxs("svg", {
															xmlns: "http://www.w3.org/2000/svg",
															width: "24",
															height: "24",
															viewBox: "0 0 24 24",
															fill: "none",
															stroke: "currentColor",
															"stroke-width": "2",
															"stroke-linecap": "round",
															"stroke-linejoin": "round",
															className: "feather feather-bell",
															children: [
																f.jsx("path", {
																	d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
																}),
																f.jsx("path", {
																	d: "M13.73 21a2 2 0 0 1-3.46 0",
																}),
															],
														}),
														f.jsx("span", { className: "badge badge-success" }),
													],
												}),
												f.jsxs("div", {
													className: "dropdown-menu position-absolute",
													"aria-labelledby": "notificationDropdown",
													children: [
														f.jsx("div", {
															className: "drodpown-title message",
															children: f.jsxs("h6", {
																className: "d-flex justify-content-between",
																children: [
																	f.jsx("span", {
																		className: "align-self-center",
																		children: "Messages",
																	}),
																	" ",
																	f.jsx("span", {
																		className: "badge badge-primary",
																		children: "9 Unread",
																	}),
																],
															}),
														}),
														f.jsxs("div", {
															className: "notification-scroll",
															children: [
																f.jsx("div", {
																	className: "dropdown-item",
																	children: f.jsxs("div", {
																		className: "media server-log",
																		children: [
																			f.jsx("img", {
																				src: be.pfp16,
																				className: "img-fluid me-2",
																				alt: "avatar",
																			}),
																			f.jsxs("div", {
																				className: "media-body",
																				children: [
																					f.jsxs("div", {
																						className: "data-info",
																						children: [
																							f.jsx("h6", {
																								className: "",
																								children: "Kara Young",
																							}),
																							f.jsx("p", {
																								className: "",
																								children: "1 hr ago",
																							}),
																						],
																					}),
																					f.jsx("div", {
																						className: "icon-status",
																						children: f.jsxs("svg", {
																							xmlns:
																								"http://www.w3.org/2000/svg",
																							width: "24",
																							height: "24",
																							viewBox: "0 0 24 24",
																							fill: "none",
																							stroke: "currentColor",
																							"stroke-width": "2",
																							"stroke-linecap": "round",
																							"stroke-linejoin": "round",
																							className: "feather feather-x",
																							children: [
																								f.jsx("line", {
																									x1: "18",
																									y1: "6",
																									x2: "6",
																									y2: "18",
																								}),
																								f.jsx("line", {
																									x1: "6",
																									y1: "6",
																									x2: "18",
																									y2: "18",
																								}),
																							],
																						}),
																					}),
																				],
																			}),
																		],
																	}),
																}),
																f.jsx("div", {
																	className: "dropdown-item",
																	children: f.jsxs("div", {
																		className: "media ",
																		children: [
																			f.jsx("img", {
																				src: be.pfp15,
																				className: "img-fluid me-2",
																				alt: "avatar",
																			}),
																			f.jsxs("div", {
																				className: "media-body",
																				children: [
																					f.jsxs("div", {
																						className: "data-info",
																						children: [
																							f.jsx("h6", {
																								className: "",
																								children: "Daisy Anderson",
																							}),
																							f.jsx("p", {
																								className: "",
																								children: "8 hrs ago",
																							}),
																						],
																					}),
																					f.jsx("div", {
																						className: "icon-status",
																						children: f.jsxs("svg", {
																							xmlns:
																								"http://www.w3.org/2000/svg",
																							width: "24",
																							height: "24",
																							viewBox: "0 0 24 24",
																							fill: "none",
																							stroke: "currentColor",
																							"stroke-width": "2",
																							"stroke-linecap": "round",
																							"stroke-linejoin": "round",
																							className: "feather feather-x",
																							children: [
																								f.jsx("line", {
																									x1: "18",
																									y1: "6",
																									x2: "6",
																									y2: "18",
																								}),
																								f.jsx("line", {
																									x1: "6",
																									y1: "6",
																									x2: "18",
																									y2: "18",
																								}),
																							],
																						}),
																					}),
																				],
																			}),
																		],
																	}),
																}),
																f.jsx("div", {
																	className: "dropdown-item",
																	children: f.jsxs("div", {
																		className: "media file-upload",
																		children: [
																			f.jsx("img", {
																				src: be.pfp21,
																				className: "img-fluid me-2",
																				alt: "avatar",
																			}),
																			f.jsxs("div", {
																				className: "media-body",
																				children: [
																					f.jsxs("div", {
																						className: "data-info",
																						children: [
																							f.jsx("h6", {
																								className: "",
																								children: "Oscar Garner",
																							}),
																							f.jsx("p", {
																								className: "",
																								children: "14 hrs ago",
																							}),
																						],
																					}),
																					f.jsx("div", {
																						className: "icon-status",
																						children: f.jsxs("svg", {
																							xmlns:
																								"http://www.w3.org/2000/svg",
																							width: "24",
																							height: "24",
																							viewBox: "0 0 24 24",
																							fill: "none",
																							stroke: "currentColor",
																							"stroke-width": "2",
																							"stroke-linecap": "round",
																							"stroke-linejoin": "round",
																							className: "feather feather-x",
																							children: [
																								f.jsx("line", {
																									x1: "18",
																									y1: "6",
																									x2: "6",
																									y2: "18",
																								}),
																								f.jsx("line", {
																									x1: "6",
																									y1: "6",
																									x2: "18",
																									y2: "18",
																								}),
																							],
																						}),
																					}),
																				],
																			}),
																		],
																	}),
																}),
																f.jsx("div", {
																	className: "drodpown-title notification mt-2",
																	children: f.jsxs("h6", {
																		className: "d-flex justify-content-between",
																		children: [
																			f.jsx("span", {
																				className: "align-self-center",
																				children: "Notifications",
																			}),
																			" ",
																			f.jsx("span", {
																				className: "badge badge-secondary",
																				children: "16 New",
																			}),
																		],
																	}),
																}),
																f.jsx("div", {
																	className: "dropdown-item",
																	children: f.jsxs("div", {
																		className: "media server-log",
																		children: [
																			f.jsxs("svg", {
																				xmlns: "http://www.w3.org/2000/svg",
																				width: "24",
																				height: "24",
																				viewBox: "0 0 24 24",
																				fill: "none",
																				stroke: "currentColor",
																				"stroke-width": "2",
																				"stroke-linecap": "round",
																				"stroke-linejoin": "round",
																				className: "feather feather-server",
																				children: [
																					f.jsx("rect", {
																						x: "2",
																						y: "2",
																						width: "20",
																						height: "8",
																						rx: "2",
																						ry: "2",
																					}),
																					f.jsx("rect", {
																						x: "2",
																						y: "14",
																						width: "20",
																						height: "8",
																						rx: "2",
																						ry: "2",
																					}),
																					f.jsx("line", {
																						x1: "6",
																						y1: "6",
																						x2: "6",
																						y2: "6",
																					}),
																					f.jsx("line", {
																						x1: "6",
																						y1: "18",
																						x2: "6",
																						y2: "18",
																					}),
																				],
																			}),
																			f.jsxs("div", {
																				className: "media-body",
																				children: [
																					f.jsxs("div", {
																						className: "data-info",
																						children: [
																							f.jsx("h6", {
																								className: "",
																								children: "Server Rebooted",
																							}),
																							f.jsx("p", {
																								className: "",
																								children: "45 min ago",
																							}),
																						],
																					}),
																					f.jsx("div", {
																						className: "icon-status",
																						children: f.jsxs("svg", {
																							xmlns:
																								"http://www.w3.org/2000/svg",
																							width: "24",
																							height: "24",
																							viewBox: "0 0 24 24",
																							fill: "none",
																							stroke: "currentColor",
																							"stroke-width": "2",
																							"stroke-linecap": "round",
																							"stroke-linejoin": "round",
																							className: "feather feather-x",
																							children: [
																								f.jsx("line", {
																									x1: "18",
																									y1: "6",
																									x2: "6",
																									y2: "18",
																								}),
																								f.jsx("line", {
																									x1: "6",
																									y1: "6",
																									x2: "18",
																									y2: "18",
																								}),
																							],
																						}),
																					}),
																				],
																			}),
																		],
																	}),
																}),
																f.jsx("div", {
																	className: "dropdown-item",
																	children: f.jsxs("div", {
																		className: "media file-upload",
																		children: [
																			f.jsxs("svg", {
																				xmlns: "http://www.w3.org/2000/svg",
																				width: "24",
																				height: "24",
																				viewBox: "0 0 24 24",
																				fill: "none",
																				stroke: "currentColor",
																				"stroke-width": "2",
																				"stroke-linecap": "round",
																				"stroke-linejoin": "round",
																				className: "feather feather-file-text",
																				children: [
																					f.jsx("path", {
																						d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
																					}),
																					f.jsx("polyline", {
																						points: "14 2 14 8 20 8",
																					}),
																					f.jsx("line", {
																						x1: "16",
																						y1: "13",
																						x2: "8",
																						y2: "13",
																					}),
																					f.jsx("line", {
																						x1: "16",
																						y1: "17",
																						x2: "8",
																						y2: "17",
																					}),
																					f.jsx("polyline", {
																						points: "10 9 9 9 8 9",
																					}),
																				],
																			}),
																			f.jsxs("div", {
																				className: "media-body",
																				children: [
																					f.jsxs("div", {
																						className: "data-info",
																						children: [
																							f.jsx("h6", {
																								className: "",
																								children: "Kelly Portfolio.pdf",
																							}),
																							f.jsx("p", {
																								className: "",
																								children: "670 kb",
																							}),
																						],
																					}),
																					f.jsx("div", {
																						className: "icon-status",
																						children: f.jsxs("svg", {
																							xmlns:
																								"http://www.w3.org/2000/svg",
																							width: "24",
																							height: "24",
																							viewBox: "0 0 24 24",
																							fill: "none",
																							stroke: "currentColor",
																							"stroke-width": "2",
																							"stroke-linecap": "round",
																							"stroke-linejoin": "round",
																							className: "feather feather-x",
																							children: [
																								f.jsx("line", {
																									x1: "18",
																									y1: "6",
																									x2: "6",
																									y2: "18",
																								}),
																								f.jsx("line", {
																									x1: "6",
																									y1: "6",
																									x2: "18",
																									y2: "18",
																								}),
																							],
																						}),
																					}),
																				],
																			}),
																		],
																	}),
																}),
																f.jsx("div", {
																	className: "dropdown-item",
																	children: f.jsxs("div", {
																		className: "media ",
																		children: [
																			f.jsx("svg", {
																				xmlns: "http://www.w3.org/2000/svg",
																				width: "24",
																				height: "24",
																				viewBox: "0 0 24 24",
																				fill: "none",
																				stroke: "currentColor",
																				"stroke-width": "2",
																				"stroke-linecap": "round",
																				"stroke-linejoin": "round",
																				className: "feather feather-heart",
																				children: f.jsx("path", {
																					d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
																				}),
																			}),
																			f.jsxs("div", {
																				className: "media-body",
																				children: [
																					f.jsxs("div", {
																						className: "data-info",
																						children: [
																							f.jsx("h6", {
																								className: "",
																								children:
																									"Licence Expiring Soon",
																							}),
																							f.jsx("p", {
																								className: "",
																								children: "8 hrs ago",
																							}),
																						],
																					}),
																					f.jsx("div", {
																						className: "icon-status",
																						children: f.jsxs("svg", {
																							xmlns:
																								"http://www.w3.org/2000/svg",
																							width: "24",
																							height: "24",
																							viewBox: "0 0 24 24",
																							fill: "none",
																							stroke: "currentColor",
																							"stroke-width": "2",
																							"stroke-linecap": "round",
																							"stroke-linejoin": "round",
																							className: "feather feather-x",
																							children: [
																								f.jsx("line", {
																									x1: "18",
																									y1: "6",
																									x2: "6",
																									y2: "18",
																								}),
																								f.jsx("line", {
																									x1: "6",
																									y1: "6",
																									x2: "18",
																									y2: "18",
																								}),
																							],
																						}),
																					}),
																				],
																			}),
																		],
																	}),
																}),
															],
														}),
													],
												}),
											],
										}),
										f.jsxs("li", {
											className:
												"nav-item dropdown user-profile-dropdown  order-lg-0 order-1",
											children: [
												f.jsx("a", {
													href: "javascript:void(0);",
													className: "nav-link dropdown-toggle user",
													id: "userProfileDropdown",
													"data-bs-toggle": "dropdown",
													"aria-haspopup": "true",
													"aria-expanded": "false",
													children: f.jsx("div", {
														className: "avatar-container",
														children: f.jsx("div", {
															className:
																"avatar avatar-sm avatar-indicators avatar-online",
															children: f.jsx("img", {
																alt: "avatar",
																src: be.pfp30,
																className: "rounded-circle",
															}),
														}),
													}),
												}),
												f.jsxs("div", {
													className: "dropdown-menu position-absolute",
													"aria-labelledby": "userProfileDropdown",
													children: [
														f.jsx("div", {
															className: "user-profile-section",
															children: f.jsxs("div", {
																className: "media mx-auto",
																children: [
																	f.jsx("div", {
																		className: "emoji me-2",
																		children: "👋",
																	}),
																	f.jsxs("div", {
																		className: "media-body",
																		children: [
																			f.jsx("h5", { children: "Shaun Park" }),
																			f.jsx("p", {
																				children: "Project Leader",
																			}),
																		],
																	}),
																],
															}),
														}),
														f.jsx("div", {
															className: "dropdown-item",
															children: f.jsxs("a", {
																href: "user-profile.html",
																children: [
																	f.jsxs("svg", {
																		xmlns: "http://www.w3.org/2000/svg",
																		width: "24",
																		height: "24",
																		viewBox: "0 0 24 24",
																		fill: "none",
																		stroke: "currentColor",
																		"stroke-width": "2",
																		"stroke-linecap": "round",
																		"stroke-linejoin": "round",
																		className: "feather feather-user",
																		children: [
																			f.jsx("path", {
																				d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
																			}),
																			f.jsx("circle", {
																				cx: "12",
																				cy: "7",
																				r: "4",
																			}),
																		],
																	}),
																	" ",
																	f.jsx("span", { children: "Profile" }),
																],
															}),
														}),
														f.jsx("div", {
															className: "dropdown-item",
															children: f.jsxs("a", {
																href: "app-mailbox.html",
																children: [
																	f.jsxs("svg", {
																		xmlns: "http://www.w3.org/2000/svg",
																		width: "24",
																		height: "24",
																		viewBox: "0 0 24 24",
																		fill: "none",
																		stroke: "currentColor",
																		"stroke-width": "2",
																		"stroke-linecap": "round",
																		"stroke-linejoin": "round",
																		className: "feather feather-inbox",
																		children: [
																			f.jsx("polyline", {
																				points:
																					"22 12 16 12 14 15 10 15 8 12 2 12",
																			}),
																			f.jsx("path", {
																				d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
																			}),
																		],
																	}),
																	" ",
																	f.jsx("span", { children: "Inbox" }),
																],
															}),
														}),
														f.jsx("div", {
															className: "dropdown-item",
															children: f.jsxs("a", {
																href: "auth-boxed-lockscreen.html",
																children: [
																	f.jsxs("svg", {
																		xmlns: "http://www.w3.org/2000/svg",
																		width: "24",
																		height: "24",
																		viewBox: "0 0 24 24",
																		fill: "none",
																		stroke: "currentColor",
																		"stroke-width": "2",
																		"stroke-linecap": "round",
																		"stroke-linejoin": "round",
																		className: "feather feather-lock",
																		children: [
																			f.jsx("rect", {
																				x: "3",
																				y: "11",
																				width: "18",
																				height: "11",
																				rx: "2",
																				ry: "2",
																			}),
																			f.jsx("path", {
																				d: "M7 11V7a5 5 0 0 1 10 0v4",
																			}),
																		],
																	}),
																	" ",
																	f.jsx("span", { children: "Lock Screen" }),
																],
															}),
														}),
														f.jsx("div", {
															className: "dropdown-item",
															children: f.jsxs("a", {
																href: "auth-boxed-signin.html",
																children: [
																	f.jsxs("svg", {
																		xmlns: "http://www.w3.org/2000/svg",
																		width: "24",
																		height: "24",
																		viewBox: "0 0 24 24",
																		fill: "none",
																		stroke: "currentColor",
																		"stroke-width": "2",
																		"stroke-linecap": "round",
																		"stroke-linejoin": "round",
																		className: "feather feather-log-out",
																		children: [
																			f.jsx("path", {
																				d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
																			}),
																			f.jsx("polyline", {
																				points: "16 17 21 12 16 7",
																			}),
																			f.jsx("line", {
																				x1: "21",
																				y1: "12",
																				x2: "9",
																				y2: "12",
																			}),
																		],
																	}),
																	" ",
																	f.jsx("span", { children: "Log Out" }),
																],
															}),
														}),
													],
												}),
											],
										}),
									],
								}),
							],
						}),
					}),
					f.jsxs("div", {
						className: "main-container ",
						id: "container",
						children: [
							f.jsx("div", { className: "overlay" }),
							f.jsx("div", { className: "search-overlay" }),
							f.jsx("div", {
								className: "sidebar-wrapper sidebar-theme",
								children: f.jsxs("nav", {
									id: "sidebar",
									children: [
										f.jsxs("div", {
											className: "navbar-nav theme-brand flex-row  text-center",
											children: [
												f.jsxs("div", {
													className: "nav-logo",
													children: [
														f.jsx("div", {
															className: "nav-item theme-logo",
															children: f.jsx("a", {
																href: "index.html",
																children: f.jsx("img", {
																	src: be.logo1,
																	className: "navbar-logo",
																	alt: "logo",
																}),
															}),
														}),
														f.jsx("div", {
															className: "nav-item theme-text",
															children: f.jsxs("a", {
																href: "index.html",
																className: "nav-link",
																children: [" ", "Transcript", " "],
															}),
														}),
													],
												}),
												f.jsx("div", {
													className: "nav-item sidebar-toggle",
													children: f.jsx("div", {
														className: "btn-toggle sidebarCollapse",
														children: f.jsxs("svg", {
															xmlns: "http://www.w3.org/2000/svg",
															width: "24",
															height: "24",
															viewBox: "0 0 24 24",
															fill: "none",
															stroke: "currentColor",
															"stroke-width": "2",
															"stroke-linecap": "round",
															"stroke-linejoin": "round",
															className: "feather feather-chevrons-left",
															children: [
																f.jsx("polyline", {
																	points: "11 17 6 12 11 7",
																}),
																f.jsx("polyline", {
																	points: "18 17 13 12 18 7",
																}),
															],
														}),
													}),
												}),
											],
										}),
										f.jsx("ul", {
											className: "list-unstyled menu-categories",
											id: "accordionExample",
											children: n.map((i, o) =>
												f.jsx(
													"li",
													{
														className:
															e.pathname === i.path ? "menu active" : "menu",
														children: f.jsx(Dc, {
															to: i.path,
															className: "dropdown-toggle",
															children: f.jsxs("div", {
																className: "",
																children: [
																	f.jsxs("svg", {
																		xmlns: "http://www.w3.org/2000/svg",
																		width: "24",
																		height: "24",
																		viewBox: "0 0 24 24",
																		fill: "none",
																		stroke: "currentColor",
																		"stroke-width": "2",
																		"stroke-linecap": "round",
																		"stroke-linejoin": "round",
																		className: "feather feather-monitor",
																		children: [
																			f.jsx("rect", {
																				x: "2",
																				y: "3",
																				width: "20",
																				height: "14",
																				rx: "2",
																				ry: "2",
																			}),
																			f.jsx("line", {
																				x1: "8",
																				y1: "21",
																				x2: "16",
																				y2: "21",
																			}),
																			f.jsx("line", {
																				x1: "12",
																				y1: "17",
																				x2: "12",
																				y2: "21",
																			}),
																		],
																	}),
																	f.jsx("span", { children: `  ${i.name}` }),
																],
															}),
														}),
													},
													o
												)
											),
										}),
									],
								}),
							}),
							f.jsxs("div", {
								id: "content",
								className: "main-content",
								children: [
									f.jsx("div", {
										className: "layout-px-spacing",
										children: f.jsx(l1, {}),
									}),
									f.jsxs("div", {
										className: "footer-wrapper",
										children: [
											f.jsx("div", {
												className: "footer-section f-section-1",
												children: f.jsxs("p", {
													className: "",
													children: [
														"Copyright © ",
														f.jsx("span", {
															className: "dynamic-year",
															children: "2022",
														}),
														" ",
														f.jsx("a", {
															target: "_blank",
															href: "https://my-portfolio-death-thekidd.vercel.app/",
															children: "Deaththekidd",
														}),
														", All rights reserved.",
													],
												}),
											}),
											f.jsx("div", {
												className: "footer-section f-section-2",
												children: f.jsxs("p", {
													className: "",
													children: [
														"Coded with",
														" ",
														f.jsx("svg", {
															xmlns: "http://www.w3.org/2000/svg",
															width: "24",
															height: "24",
															viewBox: "0 0 24 24",
															fill: "none",
															stroke: "currentColor",
															"stroke-width": "2",
															"stroke-linecap": "round",
															"stroke-linejoin": "round",
															className: "feather feather-heart",
															children: f.jsx("path", {
																d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
															}),
														}),
													],
												}),
											}),
										],
									}),
								],
							}),
						],
					}),
				],
			})
		);
	},
	q2 = () => {
		const [e] = O.useState(localStorage.getItem("transcript-uid")),
			{ register: t, handleSubmit: n, control: r } = rm(),
			i = to(),
			o = rf(),
			[l, { isLoading: a, isError: s, error: u, isSuccess: d }] = p2(),
			{ data: p = [] } = m2(""),
			{ data: h = [] } = y2(""),
			[v, g] = O.useState([]),
			x = "/login",
			k = (y) => {
				console.log(y),
					console.log({ ...y, role: "User", userType: "Student" }),
					l({ ...y, role: "User", userType: "Student" });
			};
		return (
			O.useEffect(() => {
				e &&
					(o(Lu(e)),
					setTimeout(() => {
						i("/dashboard/account");
					}, 2e3));
			}, [e, i]),
			O.useEffect(() => {
				d &&
					(ae.success("You succesfully registered"),
					setTimeout(() => {
						i(x);
					}, 2e3)),
					s &&
						(console.log(u),
						u != null && u.data
							? ae.error(u == null ? void 0 : u.data.message, {
									position: "top-right",
							  })
							: ae.error("Registration failed", { position: "top-right" }));
			}, [a]),
			f.jsx("div", {
				className: "auth-container d-flex",
				children: f.jsx("div", {
					className: "container mx-auto align-self-center",
					children: f.jsx("form", {
						className: "row",
						onSubmit: n(k),
						children: f.jsx("div", {
							id: "flLoginForm",
							className: "col-lg-12 layout-spacing",
							children: f.jsxs("div", {
								className: "statbox widget box box-shadow",
								children: [
									f.jsx("div", {
										className: "widget-header",
										children: f.jsx("div", {
											className: "row",
											children: f.jsx("div", {
												className: "col-xl-12 col-md-12 col-sm-12 col-12",
												children: f.jsx("img", { src: be.logo }),
											}),
										}),
									}),
									f.jsx("div", {
										className: "widget-content widget-content-area",
										children: f.jsxs("div", {
											className: "row g-3",
											children: [
												f.jsxs("div", {
													className: "col-md-6",
													children: [
														f.jsx("label", {
															htmlFor: "inputEmail4",
															className: "form-label",
															children: "Email",
														}),
														f.jsx("input", {
															type: "email",
															className: "form-control",
															id: "inputEmail4",
															...t("email", { required: !0 }),
														}),
													],
												}),
												f.jsxs("div", {
													className: "col-md-6",
													children: [
														f.jsx("label", {
															htmlFor: "inputPassword4",
															className: "form-label",
															children: "Password",
														}),
														f.jsx("input", {
															type: "password",
															className: "form-control",
															id: "inputPassword4",
															...t("password", { required: !0 }),
														}),
													],
												}),
												f.jsxs("div", {
													className: "col-md-6",
													children: [
														f.jsx("label", {
															htmlFor: "inputName4",
															className: "form-label",
															children: "Full Name",
														}),
														f.jsx("input", {
															type: "full-name",
															className: "form-control",
															id: "inputName4",
															...t("name", { required: !0 }),
														}),
													],
												}),
												f.jsxs("div", {
													className: "col-md-6",
													children: [
														f.jsx("label", {
															htmlFor: "inputSchoolId4",
															className: "form-label",
															children: "School ID",
														}),
														f.jsx("input", {
															type: "password",
															className: "form-control",
															id: "inputSchoolId4",
															...t("schoolId", { required: !0 }),
														}),
													],
												}),
												f.jsxs("div", {
													className: "col-md-6",
													children: [
														f.jsx("label", {
															htmlFor: "inputCollege",
															className: "form-label",
															children: "Select College:",
														}),
														f.jsx(Ed, {
															name: "college",
															control: r,
															defaultValue: "",
															render: ({ field: y }) =>
																f.jsxs("select", {
																	id: "inputCollege",
																	className: "form-select",
																	...y,
																	onChange: (c) => {
																		const m = c.target.value;
																		console.log(m), y.onChange(c);
																		const w =
																			h == null
																				? void 0
																				: h.filter(
																						(S) =>
																							(S == null
																								? void 0
																								: S.collegeName) === m
																				  );
																		g(w);
																	},
																	children: [
																		f.jsx("option", {
																			value: "",
																			children: "Select a college",
																		}),
																		p == null
																			? void 0
																			: p.map((c) =>
																					f.jsx(
																						"option",
																						{
																							value:
																								c == null ? void 0 : c.name,
																							children:
																								c == null ? void 0 : c.name,
																						},
																						c == null ? void 0 : c.id
																					)
																			  ),
																	],
																}),
														}),
													],
												}),
												f.jsxs("div", {
													className: "col-md-6",
													children: [
														f.jsx("label", {
															htmlFor: "inputFaculty",
															className: "form-label",
															children: "Select Department:",
														}),
														f.jsx(Ed, {
															name: "faculty",
															control: r,
															defaultValue: "",
															render: ({ field: y }) =>
																f.jsxs("select", {
																	id: "inputFaculty",
																	className: "form-select",
																	...y,
																	children: [
																		f.jsx("option", {
																			value: "",
																			children: "Select a faculty",
																		}),
																		v == null
																			? void 0
																			: v.map((c) =>
																					f.jsx(
																						"option",
																						{
																							value:
																								c == null ? void 0 : c.name,
																							children:
																								c == null ? void 0 : c.name,
																						},
																						c == null ? void 0 : c.id
																					)
																			  ),
																	],
																}),
														}),
													],
												}),
												f.jsx("div", {
													className: "col-12",
													children: f.jsxs("div", {
														className: "form-check",
														children: [
															f.jsx("input", {
																className: "form-check-input",
																type: "checkbox",
																id: "gridCheck",
															}),
															f.jsx("label", {
																className: "form-check-label",
																htmlFor: "gridCheck",
																children: "I accept the terms and conditions",
															}),
														],
													}),
												}),
												f.jsx("div", {
													className: "col-12",
													children: f.jsx("button", {
														type: "submit",
														className: "btn btn-primary",
														children: "Sign up",
													}),
												}),
												f.jsx("div", {
													className: "col-12",
													children: f.jsx("div", {
														className: "text-center",
														children: f.jsxs("p", {
															className: "mb-0",
															children: [
																"Already have an account ?",
																" ",
																f.jsx(Dc, {
																	to: "/login",
																	className: "text-warning",
																	children: "Sign In",
																}),
															],
														}),
													}),
												}),
											],
										}),
									}),
								],
							}),
						}),
					}),
				}),
			})
		);
	};
const W2 = () => {
	const [e] = O.useState(localStorage.getItem("transcript-uid")),
		{ data: t } = v2(e);
	return f.jsx(f.Fragment, {
		children: f.jsxs("div", {
			className: "middle-content container-xxl p-0",
			children: [
				f.jsx("div", {
					className: "page-meta",
					children: f.jsx("nav", {
						className: "breadcrumb-style-one",
						"aria-label": "breadcrumb",
						children: f.jsxs("ol", {
							className: "breadcrumb",
							children: [
								f.jsx("li", {
									className: "breadcrumb-item",
									children: f.jsx("a", { href: "#", children: "App" }),
								}),
								f.jsx("li", {
									className: "breadcrumb-item active",
									"aria-current": "page",
									children: "User",
								}),
							],
						}),
					}),
				}),
				f.jsx("div", {
					className:
						"mx-auto align-self-center col-xl-5 col-lg-12 col-md-12 col-sm-12 layout-top-spacing",
					children: f.jsx("div", {
						className: "user-profile",
						children: f.jsxs("div", {
							className: "widget-content widget-content-area",
							children: [
								f.jsxs("div", {
									className: "d-flex justify-content-between",
									children: [
										f.jsx("h3", { className: "", children: "Profile" }),
										f.jsxs("a", {
											href: "./user-account-settings.html",
											className: "mt-2 edit-profile",
											children: [
												" ",
												f.jsxs("svg", {
													xmlns: "http://www.w3.org/2000/svg",
													width: "24",
													height: "24",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "currentColor",
													"stroke-width": "2",
													"stroke-linecap": "round",
													"stroke-linejoin": "round",
													className: "feather feather-edit-3",
													children: [
														f.jsx("path", { d: "M12 20h9" }),
														f.jsx("path", {
															d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
														}),
													],
												}),
											],
										}),
									],
								}),
								f.jsxs("div", {
									className: "text-center user-info",
									children: [
										f.jsx("img", { src: be.pfp0, alt: "avatar" }),
										f.jsx("p", {
											className: "",
											children: t == null ? void 0 : t.name,
										}),
									],
								}),
								f.jsx("div", {
									className: "user-info-list",
									children: f.jsxs("div", {
										className: "",
										children: [
											f.jsxs("ul", {
												className: "contacts-block list-unstyled",
												children: [
													f.jsxs("li", {
														className: "contacts-block__item",
														children: [
															f.jsxs("svg", {
																xmlns: "http://www.w3.org/2000/svg",
																width: "24",
																height: "24",
																viewBox: "0 0 24 24",
																fill: "none",
																stroke: "currentColor",
																"stroke-width": "2",
																"stroke-linecap": "round",
																"stroke-linejoin": "round",
																className: "feather feather-coffee me-3",
																children: [
																	f.jsx("path", {
																		d: "M18 8h1a4 4 0 0 1 0 8h-1",
																	}),
																	f.jsx("path", {
																		d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z",
																	}),
																	f.jsx("line", {
																		x1: "6",
																		y1: "1",
																		x2: "6",
																		y2: "4",
																	}),
																	f.jsx("line", {
																		x1: "10",
																		y1: "1",
																		x2: "10",
																		y2: "4",
																	}),
																	f.jsx("line", {
																		x1: "14",
																		y1: "1",
																		x2: "14",
																		y2: "4",
																	}),
																],
															}),
															" ",
															t == null ? void 0 : t.userType,
														],
													}),
													f.jsxs("li", {
														className: "contacts-block__item",
														children: [
															f.jsxs("svg", {
																xmlns: "http://www.w3.org/2000/svg",
																width: "24",
																height: "24",
																viewBox: "0 0 24 24",
																fill: "none",
																stroke: "currentColor",
																"stroke-width": "2",
																"stroke-linecap": "round",
																"stroke-linejoin": "round",
																className: "feather feather-book me-3",
																children: [
																	f.jsx("path", {
																		d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
																	}),
																	f.jsx("path", {
																		d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
																	}),
																],
															}),
															t == null ? void 0 : t.schoolId,
														],
													}),
													f.jsxs("li", {
														className: "contacts-block__item",
														children: [
															f.jsxs("svg", {
																xmlns: "http://www.w3.org/2000/svg",
																width: "24",
																height: "24",
																viewBox: "0 0 24 24",
																fill: "none",
																stroke: "currentColor",
																"stroke-width": "2",
																"stroke-linecap": "round",
																"stroke-linejoin": "round",
																className: "feather feather-map-pin me-3",
																children: [
																	f.jsx("path", {
																		d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
																	}),
																	f.jsx("circle", {
																		cx: "12",
																		cy: "10",
																		r: "3",
																	}),
																],
															}),
															"New York, USA",
														],
													}),
													f.jsx("li", {
														className: "contacts-block__item",
														children: f.jsxs("a", {
															href: "mailto:example@mail.com",
															children: [
																f.jsxs("svg", {
																	xmlns: "http://www.w3.org/2000/svg",
																	width: "24",
																	height: "24",
																	viewBox: "0 0 24 24",
																	fill: "none",
																	stroke: "currentColor",
																	"stroke-width": "2",
																	"stroke-linecap": "round",
																	"stroke-linejoin": "round",
																	className: "feather feather-mail me-3",
																	children: [
																		f.jsx("path", {
																			d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
																		}),
																		f.jsx("polyline", {
																			points: "22,6 12,13 2,6",
																		}),
																	],
																}),
																t == null ? void 0 : t.email,
															],
														}),
													}),
													f.jsxs("li", {
														className: "contacts-block__item",
														children: [
															f.jsx("svg", {
																xmlns: "http://www.w3.org/2000/svg",
																width: "24",
																height: "24",
																viewBox: "0 0 24 24",
																fill: "none",
																stroke: "currentColor",
																"stroke-width": "2",
																"stroke-linecap": "round",
																"stroke-linejoin": "round",
																className: "feather feather-phone me-3",
																children: f.jsx("path", {
																	d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
																}),
															}),
															" ",
															"+1 (530) 555-12121",
														],
													}),
												],
											}),
											f.jsxs("ul", {
												className: "list-inline mt-4",
												children: [
													f.jsx("li", {
														className: "list-inline-item mb-0",
														children: f.jsx("a", {
															className: "btn btn-info btn-icon btn-rounded",
															href: "javascript:void(0);",
															children: f.jsx("svg", {
																xmlns: "http://www.w3.org/2000/svg",
																width: "24",
																height: "24",
																viewBox: "0 0 24 24",
																fill: "none",
																stroke: "currentColor",
																"stroke-width": "2",
																"stroke-linecap": "round",
																"stroke-linejoin": "round",
																className: "feather feather-twitter",
																children: f.jsx("path", {
																	d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
																}),
															}),
														}),
													}),
													f.jsx("li", {
														className: "list-inline-item mb-0",
														children: f.jsx("a", {
															className: "btn btn-danger btn-icon btn-rounded",
															href: "javascript:void(0);",
															children: f.jsxs("svg", {
																xmlns: "http://www.w3.org/2000/svg",
																width: "24",
																height: "24",
																viewBox: "0 0 24 24",
																fill: "none",
																stroke: "currentColor",
																"stroke-width": "2",
																"stroke-linecap": "round",
																"stroke-linejoin": "round",
																className: "feather feather-dribbble",
																children: [
																	f.jsx("circle", {
																		cx: "12",
																		cy: "12",
																		r: "10",
																	}),
																	f.jsx("path", {
																		d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32",
																	}),
																],
															}),
														}),
													}),
													f.jsx("li", {
														className: "list-inline-item mb-0",
														children: f.jsx("a", {
															className: "btn btn-dark btn-icon btn-rounded",
															href: "javascript:void(0);",
															children: f.jsx("svg", {
																xmlns: "http://www.w3.org/2000/svg",
																width: "24",
																height: "24",
																viewBox: "0 0 24 24",
																fill: "none",
																stroke: "currentColor",
																"stroke-width": "2",
																"stroke-linecap": "round",
																"stroke-linejoin": "round",
																className: "feather feather-github",
																children: f.jsx("path", {
																	d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
																}),
															}),
														}),
													}),
												],
											}),
										],
									}),
								}),
							],
						}),
					}),
				}),
			],
		}),
	});
};
const H2 = () => {
		const { data: e } = h2(""),
			t = O.useRef(null);
		return (
			console.log(e),
			O.useEffect(() => {
				if (!t.current) {
					console.log("agai");
					const n = document.createElement("script");
					(n.src = "/scripts/datatables.js"),
						(n.async = !0),
						document.body.appendChild(n);
				}
			}, []),
			O.useEffect(() => {
				var n;
				if (e && document.getElementById("style-1") && !t.current) {
					const i =
						(n = $("#style-1")) == null
							? void 0
							: n?.DataTable({
									headerCallback: function (o) {
										o.getElementsByTagName("th")[0].innerHTML = `
                        <div class="form-check form-check-primary d-block">
                            <input class="form-check-input chk-parent" type="checkbox" id="form-check-default">
                        </div>`;
									},
									columnDefs: [
										{
											targets: 0,
											width: "30px",
											className: "",
											orderable: !1,
											render: function () {
												return `
                            <div class="form-check form-check-primary d-block">
                                <input class="form-check-input child-chk" type="checkbox" id="form-check-default">
                            </div>`;
											},
										},
									],
									dom: "<'dt--top-section'<'row'<'col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center'l><'col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3'f>>><'table-responsive'tr><'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
									oLanguage: {
										oPaginate: {
											sPrevious:
												'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
											sNext:
												'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
										},
										sInfo: "Showing page _PAGE_ of _PAGES_",
										sSearch:
											'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
										sSearchPlaceholder: "Search...",
										sLengthMenu: "Results :  _MENU_",
									},
									lengthMenu: [5, 10, 20, 50],
									pageLength: 10,
							  });
					t.current = i;
				}
			}, [e]),
			f.jsxs("div", {
				className: "middle-content container-xxl p-0",
				children: [
					f.jsx("div", {
						className: "page-meta",
						children: f.jsx("nav", {
							className: "breadcrumb-style-one",
							"aria-label": "breadcrumb",
							children: f.jsxs("ol", {
								className: "breadcrumb",
								children: [
									f.jsx("li", {
										className: "breadcrumb-item",
										children: f.jsx("a", { href: "#", children: "App" }),
									}),
									f.jsx("li", {
										className: "breadcrumb-item active",
										"aria-current": "page",
										children: "Users",
									}),
								],
							}),
						}),
					}),
					f.jsx("div", {
						className: "row layout-top-spacing d-flex",
						children: f.jsx("div", {
							className: "col-lg-12",
							children: f.jsx("div", {
								className: "statbox widget box box-shadow",
								children: f.jsx("div", {
									className: "widget-content widget-content-area",
									children: f.jsxs("table", {
										id: "style-1",
										className: "table style-1 dt-table-hover non-hover",
										children: [
											f.jsx("thead", {
												children: f.jsxs("tr", {
													children: [
														f.jsxs("th", {
															className: "checkbox-column dt-no-sorting",
															children: [" ", "Record no.", " "],
														}),
														f.jsx("th", { children: "Name" }),
														f.jsx("th", { children: "User Type" }),
														f.jsx("th", { children: "Email" }),
														f.jsx("th", { children: "School ID" }),
														f.jsx("th", { className: "", children: "Role" }),
														f.jsx("th", {
															className: "text-center dt-no-sorting",
															children: "Action",
														}),
													],
												}),
											}),
											f.jsx("tbody", {
												children:
													e == null
														? void 0
														: e.map((n, r) =>
																f.jsxs("tr", {
																	children: [
																		f.jsxs("td", {
																			className: "checkbox-column",
																			children: [" ", r, " "],
																		}),
																		f.jsx("td", {
																			className: "user-name",
																			children: n == null ? void 0 : n.name,
																		}),
																		f.jsx("td", {
																			className: "",
																			children: n == null ? void 0 : n.userType,
																		}),
																		f.jsx("td", {
																			children: n == null ? void 0 : n.email,
																		}),
																		f.jsx("td", {
																			children: n == null ? void 0 : n.schoolId,
																		}),
																		f.jsx("td", {
																			children: f.jsxs("div", {
																				className: "d-flex",
																				children: [
																					f.jsx("div", {
																						className:
																							" align-self-center d-m-success  mr-1 data-marker",
																					}),
																					f.jsx("span", {
																						className: "label label-success",
																						children:
																							n != null && n.isAdmin
																								? "Admin"
																								: "User",
																					}),
																				],
																			}),
																		}),
																		f.jsx("td", {
																			className: "text-center",
																			children: f.jsxs("div", {
																				className: "dropdown",
																				children: [
																					f.jsx("a", {
																						className: "dropdown-toggle",
																						href: "#",
																						role: "button",
																						id: "dropdownMenuLink2",
																						"data-bs-toggle": "dropdown",
																						"aria-haspopup": "true",
																						"aria-expanded": "true",
																						children: f.jsxs("svg", {
																							xmlns:
																								"http://www.w3.org/2000/svg",
																							width: "24",
																							height: "24",
																							viewBox: "0 0 24 24",
																							fill: "none",
																							stroke: "currentColor",
																							"stroke-width": "2",
																							"stroke-linecap": "round",
																							"stroke-linejoin": "round",
																							className:
																								"feather feather-more-horizontal",
																							children: [
																								f.jsx("circle", {
																									cx: "12",
																									cy: "12",
																									r: "1",
																								}),
																								f.jsx("circle", {
																									cx: "19",
																									cy: "12",
																									r: "1",
																								}),
																								f.jsx("circle", {
																									cx: "5",
																									cy: "12",
																									r: "1",
																								}),
																							],
																						}),
																					}),
																					f.jsxs("div", {
																						className: "dropdown-menu",
																						"aria-labelledby":
																							"dropdownMenuLink2",
																						children: [
																							f.jsx("a", {
																								className: "dropdown-item",
																								href: "javascript:void(0);",
																								children: "View",
																							}),
																							f.jsx("a", {
																								className: "dropdown-item",
																								href: "javascript:void(0);",
																								children: "Edit",
																							}),
																							f.jsx("a", {
																								className: "dropdown-item",
																								href: "javascript:void(0);",
																								children: "Delete",
																							}),
																						],
																					}),
																				],
																			}),
																		}),
																	],
																})
														  ),
											}),
										],
									}),
								}),
							}),
						}),
					}),
				],
			})
		);
	},
	K2 = () => {
		const e = to();
		return (
			O.useEffect(() => {
				e("/login");
			}, [e]),
			f.jsx("div", { children: f.jsx("h1", { children: "Home" }) })
		);
	};
function G2() {
	return (
		O.useEffect(() => {}, []),
		f.jsxs(f.Fragment, {
			children: [
				f.jsx(Du, {}),
				f.jsxs(s1, {
					children: [
						f.jsx(Un, { path: "/", element: f.jsx(K2, {}) }),
						f.jsx(Un, { path: "/login", element: f.jsx(Q2, {}) }),
						f.jsx(Un, { path: "/signup", element: f.jsx(q2, {}) }),
						f.jsxs(Un, {
							path: "/app",
							element: f.jsx(B2, {}),
							children: [
								f.jsx(Un, { index: !0, element: f.jsx(W2, {}) }),
								f.jsx(Un, { path: "users", element: f.jsx(H2, {}) }),
							],
						}),
					],
				}),
			],
		})
	);
}
const Y2 = Kc({ user: P2, [Ul.reducerPath]: Ul.reducer }),
	Um = yw({ reducer: Y2, middleware: (e) => e({}).concat([Ul.middleware]) });
zw(Um.dispatch);
Rs.createRoot(document.getElementById("root")).render(
	f.jsx(X.StrictMode, {
		children: f.jsx(Gx, {
			store: Um,
			children: f.jsx(h1, { children: f.jsx(G2, {}) }),
		}),
	})
);
