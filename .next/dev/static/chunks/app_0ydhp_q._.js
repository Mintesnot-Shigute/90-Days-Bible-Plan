(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://mwhvzkteqqfgfkiefgec.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13aHZ6a3RlcXFmZ2ZraWVmZ2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMDA2MDYsImV4cCI6MjA5NTg3NjYwNn0.1LZVx2z_cnD-30HFLnXF127oZJTIEYbCLSSU1idM2DQ");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/NameGate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NameGate",
    ()=>NameGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.mjs [app-client] (ecmascript) <export default as LogIn>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function NameGate({ readers, onSelectReader, loading }) {
    _s();
    const [newName, setNewName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedReader, setSelectedReader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [verifyPassword, setVerifyPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isJoining, setIsJoining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSelectExisting = async (name)=>{
        setSelectedReader(name);
        setVerifyPassword("");
        setError("");
    };
    const handleVerifyPassword = ()=>{
        if (!selectedReader) return;
        const stored = localStorage.getItem(`reader_${selectedReader}_password`);
        if (stored === verifyPassword) {
            // Password matches
            onSelectReader(selectedReader);
            setSelectedReader(null);
            setVerifyPassword("");
        } else {
            setError("Incorrect password");
        }
    };
    const handleJoinNew = async ()=>{
        const trimmed = newName.trim();
        if (!trimmed) {
            setError("Please enter a name");
            return;
        }
        if (!newPassword) {
            setError("Please set a password to protect your account");
            return;
        }
        if (newPassword.length < 2) {
            setError("Password must be at least 2 characters");
            return;
        }
        if (readers.some((r)=>r.name.toLowerCase() === trimmed.toLowerCase())) {
            setError("That name is already taken");
            return;
        }
        setIsJoining(true);
        setError("");
        try {
            const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("readers").insert({
                name: trimmed
            });
            if (insertError) throw insertError;
            // Store password locally for this reader
            localStorage.setItem(`reader_${trimmed}_password`, newPassword);
            onSelectReader(trimmed);
        } catch (err) {
            setError("Failed to join. Please try again.");
            console.error(err);
        } finally{
            setIsJoining(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-cream via-parchment to-gold bg-opacity-20 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-ink text-lg font-serif",
                animate: {
                    opacity: [
                        0.6,
                        1,
                        0.6
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/components/NameGate.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/NameGate.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this);
    }
    // Show password verification screen
    if (selectedReader) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-cream via-parchment to-gold bg-opacity-20 flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "max-w-md w-full",
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "bg-white rounded-2xl shadow-elevation p-6 sm:p-8 border border-gold border-opacity-30 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-12 h-12 bg-gold bg-opacity-10 rounded-full flex items-center justify-center",
                                animate: {
                                    scale: [
                                        1,
                                        1.05,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-6 h-6 text-gold"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/NameGate.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/NameGate.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif text-center text-ink mb-2",
                            children: "Welcome Back"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NameGate.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-ink-light mb-6 text-sm uppercase tracking-widest font-medium",
                            children: selectedReader
                        }, void 0, false, {
                            fileName: "[project]/app/components/NameGate.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-ink mb-2 uppercase tracking-widest pl-3",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: verifyPassword,
                                    onChange: (e)=>{
                                        setVerifyPassword(e.target.value);
                                        setError("");
                                    },
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter") {
                                            handleVerifyPassword();
                                        }
                                    },
                                    placeholder: "Enter your password",
                                    className: "w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl mb-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold focus:ring-opacity-50 focus:shadow-glow transition-all hover:border-opacity-50 bg-white hover:bg-gray-50",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "text-red-600 text-sm font-medium",
                                    initial: {
                                        opacity: 0,
                                        y: -5
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NameGate.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: handleVerifyPassword,
                                    whileHover: {
                                        scale: 1.02,
                                        y: -2
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    className: "w-full px-4 py-3 bg-gradient-to-r from-gold to-gold-light text-white rounded-xl hover:shadow-elevation transition-all font-semibold uppercase tracking-widest text-sm border-0 cursor-pointer group overflow-hidden relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10",
                                            children: "Unlock Account"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NameGate.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-light opacity-0 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NameGate.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>{
                                        setSelectedReader(null);
                                        setVerifyPassword("");
                                        setError("");
                                    },
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    className: "w-full px-4 py-2 bg-gray-100 text-ink rounded-lg hover:bg-gray-200 transition-all font-medium text-sm",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NameGate.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NameGate.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/NameGate.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/NameGate.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-cream via-parchment to-gold bg-opacity-20 flex items-center justify-center px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "max-w-md w-full",
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.5
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "text-xs sm:text-sm text-gold font-light tracking-widest mb-2 font-serif italic",
                            initial: {
                                opacity: 0,
                                y: -10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.05
                            },
                            children: "Naioth in Ramah"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NameGate.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            className: "text-5xl sm:text-6xl font-serif text-ink mb-3",
                            initial: {
                                opacity: 0,
                                y: -20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.1
                            },
                            children: "90-Day Bible"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NameGate.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "text-ink-light text-lg font-light tracking-widest",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.2
                            },
                            children: "Share the journey with friends"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NameGate.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NameGate.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "bg-white rounded-3xl shadow-elevation p-6 sm:p-8 border-2 border-gold border-opacity-40 backdrop-blur-sm hover:border-opacity-60 transition-all",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.1
                    },
                    whileHover: {
                        y: -2
                    },
                    children: [
                        readers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mb-6",
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.15
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xs sm:text-sm font-semibold text-ink mb-3 uppercase tracking-widest text-center pl-3",
                                    children: "👥 Existing Readers"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: readers.map((reader, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: ()=>handleSelectExisting(reader.name),
                                            whileHover: {
                                                scale: 1.02,
                                                y: -2
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.2 + idx * 0.05
                                            },
                                            className: "w-full px-4 py-3 rounded-lg border-2 border-gold text-gold hover:bg-gold hover:text-white hover:shadow-glow transition-all text-sm font-medium uppercase tracking-wide group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: reader.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/NameGate.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                                        className: "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/NameGate.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/NameGate.tsx",
                                                lineNumber: 243,
                                                columnNumber: 21
                                            }, this)
                                        }, reader.name, false, {
                                            fileName: "[project]/app/components/NameGate.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "my-4 border-t-2 border-gold border-opacity-20",
                                    initial: {
                                        scaleX: 0
                                    },
                                    animate: {
                                        scaleX: 1
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.4
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NameGate.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.45
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xs sm:text-sm font-semibold text-ink mb-4 uppercase tracking-widest text-center pl-3",
                                    children: "✨ Create New Account"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-ink-light mb-1.5 uppercase tracking-widest pl-3",
                                                    children: "Your Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/NameGate.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: newName,
                                                    onChange: (e)=>{
                                                        setNewName(e.target.value);
                                                        setError("");
                                                    },
                                                    placeholder: "Enter your name",
                                                    className: "w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold focus:ring-opacity-50 focus:shadow-glow transition-all hover:border-opacity-50 bg-white hover:bg-gray-50",
                                                    disabled: isJoining
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/NameGate.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/NameGate.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-ink-light mb-1.5 uppercase tracking-widest pl-3",
                                                    children: "Password (2+ characters)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/NameGate.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    value: newPassword,
                                                    onChange: (e)=>{
                                                        setNewPassword(e.target.value);
                                                        setError("");
                                                    },
                                                    placeholder: "Create a password",
                                                    className: "w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold focus:ring-opacity-50 focus:shadow-glow transition-all hover:border-opacity-50 bg-white hover:bg-gray-50",
                                                    disabled: isJoining
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/NameGate.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/NameGate.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            className: "text-red-600 text-sm font-medium",
                                            initial: {
                                                opacity: 0,
                                                y: -5
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NameGate.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: handleJoinNew,
                                            disabled: isJoining,
                                            whileHover: {
                                                scale: 1.02,
                                                y: -2
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            className: "w-full px-4 py-3 bg-gradient-to-r from-gold to-gold-light text-white rounded-xl hover:shadow-elevation transition-all font-semibold uppercase tracking-widest text-sm disabled:opacity-50 mt-2 border-0 cursor-pointer group overflow-hidden relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative z-10",
                                                    children: isJoining ? "Creating Account..." : "Create Account"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/NameGate.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-light opacity-0 group-hover:opacity-100 transition-opacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/NameGate.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/NameGate.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/NameGate.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NameGate.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NameGate.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    className: "text-center text-ink-light text-xs mt-6 tracking-widest",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.8
                    },
                    children: "🔒 Your account is password protected"
                }, void 0, false, {
                    fileName: "[project]/app/components/NameGate.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/NameGate.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/NameGate.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_s(NameGate, "aWZ8QV4THlKHLomVti6+bMi978k=");
_c = NameGate;
var _c;
__turbopack_context__.k.register(_c, "NameGate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/stats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateGroupPercent",
    ()=>calculateGroupPercent,
    "calculateStreak",
    ()=>calculateStreak,
    "countCompleteDays",
    ()=>countCompleteDays,
    "getDayPercent",
    ()=>getDayPercent,
    "getFirstIncompletDay",
    ()=>getFirstIncompletDay,
    "getReaderProgress",
    ()=>getReaderProgress,
    "getReaderStats",
    ()=>getReaderStats,
    "isDayComplete",
    ()=>isDayComplete
]);
function getReaderProgress(readerName, progress) {
    const map = new Map();
    progress.filter((p)=>p.reader_name === readerName).forEach((p)=>{
        map.set(p.day, {
            ot: p.ot,
            nt: p.nt,
            ps: p.ps,
            pr: p.pr
        });
    });
    return map;
}
function getDayPercent(readerName, day, progress) {
    const p = progress.find((x)=>x.reader_name === readerName && x.day === day);
    if (!p) return 0;
    return Math.round((p.ot + p.nt + p.ps + p.pr) / 4);
}
function isDayComplete(readerName, day, progress) {
    const p = progress.find((x)=>x.reader_name === readerName && x.day === day);
    return p ? p.ot === 100 && p.nt === 100 && p.ps === 100 && p.pr === 100 : false;
}
function countCompleteDays(readerName, progress) {
    return progress.filter((p)=>p.reader_name === readerName && p.ot === 100 && p.nt === 100 && p.ps === 100 && p.pr === 100).length;
}
function calculateStreak(readerName, progress) {
    let streak = 0;
    for(let day = 1; day <= 90; day++){
        if (isDayComplete(readerName, day, progress)) {
            streak++;
        } else {
            break;
        }
    }
    return streak;
}
function calculateGroupPercent(readers, progress) {
    if (readers.length === 0) return 0;
    const totalDays = readers.length * 90;
    const completedDays = readers.reduce((sum, reader)=>{
        return sum + countCompleteDays(reader.name, progress);
    }, 0);
    return Math.round(completedDays / totalDays * 100);
}
function getFirstIncompletDay(readerName, progress) {
    for(let day = 1; day <= 90; day++){
        if (!isDayComplete(readerName, day, progress)) {
            return day;
        }
    }
    return 90;
}
function getReaderStats(readerName, readers, progress) {
    const daysComplete = countCompleteDays(readerName, progress);
    const streak = calculateStreak(readerName, progress);
    return {
        daysComplete,
        streak,
        percent: Math.round(daysComplete / 90 * 100)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
;
;
function Header({ currentReader, readers, progress, onOpenMenu }) {
    const daysComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countCompleteDays"])(currentReader, progress);
    const streak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateStreak"])(currentReader, progress);
    const groupPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateGroupPercent"])(readers, progress);
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: -10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 backdrop-blur-md bg-white bg-opacity-80 border-b border-gold border-opacity-20 shadow-soft",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "max-w-md mx-auto px-5 sm:px-6 py-4 sm:py-5",
            initial: "hidden",
            animate: "visible",
            variants: containerVariants,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex items-center justify-between mb-4",
                    variants: itemVariants,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: onOpenMenu,
                            whileHover: {
                                scale: 1.08
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            className: "p-2 hover:bg-gold hover:bg-opacity-10 rounded-lg transition-colors flex-shrink-0 mr-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-5 h-5 sm:w-6 sm:h-6 text-ink"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl font-serif font-bold text-ink",
                                children: currentReader
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Header.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex items-center justify-between text-xs sm:text-sm gap-4",
                    variants: itemVariants,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex gap-4 sm:gap-6",
                            whileHover: {
                                scale: 1.02
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ink-light text-caption uppercase tracking-wide font-medium pl-3",
                                            children: "Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl sm:text-2xl font-serif font-bold text-ink mt-1",
                                            children: [
                                                daysComplete,
                                                "/90"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Header.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Header.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                streak > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                            className: "w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0 mt-0.5 animate-pulse-gentle"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-ink-light text-caption uppercase tracking-wide font-medium",
                                                    children: "Streak"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl sm:text-2xl font-serif font-bold text-gold mt-1",
                                                    children: streak
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Header.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Header.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex flex-col items-end",
                            whileHover: {
                                scale: 1.05
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ink-light text-caption uppercase tracking-wide font-medium pl-3",
                                    children: "Group"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl sm:text-2xl font-serif font-bold text-gold mt-1",
                                    children: [
                                        groupPercent,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Header.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Header.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Header.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Header.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/plan.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAN",
    ()=>PLAN
]);
const PLAN = [
    {
        day: 1,
        ot: "Gen 1-7",
        nt: "Matt 1-4",
        ps: "Ps 1-3",
        pr: "Prov 1:1-7"
    },
    {
        day: 2,
        ot: "Gen 8-16",
        nt: "Matt 5-6",
        ps: "Ps 4-6",
        pr: "Prov 1:8-19"
    },
    {
        day: 3,
        ot: "Gen 17-23",
        nt: "Matt 7-9",
        ps: "Ps 7-8",
        pr: "Prov 1:20-33"
    },
    {
        day: 4,
        ot: "Gen 24-30",
        nt: "Matt 10-11",
        ps: "Ps 9",
        pr: "Prov 2:1-10"
    },
    {
        day: 5,
        ot: "Gen 31-36",
        nt: "Matt 12-13",
        ps: "Ps 10-12",
        pr: "Prov 2:11-22"
    },
    {
        day: 6,
        ot: "Gen 37-42",
        nt: "Matt 14-16",
        ps: "Ps 13-16",
        pr: "Prov 3:1-7"
    },
    {
        day: 7,
        ot: "Gen 43-50",
        nt: "Matt 17-19",
        ps: "Ps 17",
        pr: "Prov 3:8-15"
    },
    {
        day: 8,
        ot: "Exod 1-8",
        nt: "Matt 20-21",
        ps: "Ps 18",
        pr: "Prov 3:16-26"
    },
    {
        day: 9,
        ot: "Exod 9-15",
        nt: "Matt 22-23",
        ps: "Ps 19-20",
        pr: "Prov 3:27-35"
    },
    {
        day: 10,
        ot: "Exod 16-23",
        nt: "Matt 24-25",
        ps: "Ps 21",
        pr: "Prov 4:1-8"
    },
    {
        day: 11,
        ot: "Exod 24-30",
        nt: "Matt 26",
        ps: "Ps 22",
        pr: "Prov 4:9-19"
    },
    {
        day: 12,
        ot: "Exod 31-37",
        nt: "Matt 27-28",
        ps: "Ps 23-24",
        pr: "Prov 4:20-27"
    },
    {
        day: 13,
        ot: "Exod 38-40, Lev 1-6",
        nt: "Mark 1-2",
        ps: "Ps 25-26",
        pr: "Prov 5:1-11"
    },
    {
        day: 14,
        ot: "Lev 7-13",
        nt: "Mark 3-4",
        ps: "Ps 27-28",
        pr: "Prov 5:12-23"
    },
    {
        day: 15,
        ot: "Lev 14-20",
        nt: "Mark 5-6",
        ps: "Ps 29-30",
        pr: "Prov 6:1-11"
    },
    {
        day: 16,
        ot: "Lev 21-27",
        nt: "Mark 7-8",
        ps: "Ps 31-32",
        pr: "Prov 6:12-19"
    },
    {
        day: 17,
        ot: "Num 1-4",
        nt: "Mark 9-10",
        ps: "Ps 33",
        pr: "Prov 6:20-35"
    },
    {
        day: 18,
        ot: "Num 5-9",
        nt: "Mark 11-12",
        ps: "Ps 34",
        pr: "Prov 7:1-5"
    },
    {
        day: 19,
        ot: "Num 10-16",
        nt: "Mark 13-14",
        ps: "Ps 35-36",
        pr: "Prov 7:6-14"
    },
    {
        day: 20,
        ot: "Num 17-24",
        nt: "Mark 15-16",
        ps: "Ps 37",
        pr: "Prov 7:15-27"
    },
    {
        day: 21,
        ot: "Num 25-29",
        nt: "Luke 1",
        ps: "Ps 38",
        pr: "Prov 8:1-8"
    },
    {
        day: 22,
        ot: "Num 30-36",
        nt: "Luke 2:1-4:13",
        ps: "Ps 39",
        pr: "Prov 8:9-19"
    },
    {
        day: 23,
        ot: "Deut 1-5",
        nt: "Luke 4:14-5:39",
        ps: "Ps 40",
        pr: "Prov 8:20-26"
    },
    {
        day: 24,
        ot: "Deut 6-13",
        nt: "Luke 6-7",
        ps: "Ps 41-43",
        pr: "Prov 8:27-36"
    },
    {
        day: 25,
        ot: "Deut 14-22",
        nt: "Luke 8:1-9:22",
        ps: "Ps 44",
        pr: "Prov 9:1-12"
    },
    {
        day: 26,
        ot: "Deut 23-29",
        nt: "Luke 9:23-10:42",
        ps: "Ps 45-47",
        pr: "Prov 9:13-18"
    },
    {
        day: 27,
        ot: "Deut 30-34, Josh 1-4",
        nt: "Luke 11-12",
        ps: "Ps 48-49",
        pr: "Prov 10:1-14"
    },
    {
        day: 28,
        ot: "Josh 5-10",
        nt: "Luke 13-15",
        ps: "Ps 50",
        pr: "Prov 10:15-23"
    },
    {
        day: 29,
        ot: "Josh 11-16",
        nt: "Luke 16-17",
        ps: "Ps 51",
        pr: "Prov 10:24-32"
    },
    {
        day: 30,
        ot: "Josh 17-24",
        nt: "Luke 18-19",
        ps: "Ps 52-54",
        pr: "Prov 11:1-12"
    },
    {
        day: 31,
        ot: "Judg 1-7",
        nt: "Luke 20-21",
        ps: "Ps 55",
        pr: "Prov 11:13-21"
    },
    {
        day: 32,
        ot: "Judg 8-15",
        nt: "Luke 22",
        ps: "Ps 56-58",
        pr: "Prov 11:22-31"
    },
    {
        day: 33,
        ot: "Judg 16-21, Ruth 1-4",
        nt: "Luke 23-24",
        ps: "Ps 59-60",
        pr: "Prov 12:1-13"
    },
    {
        day: 34,
        ot: "1 Sam 1-10",
        nt: "John 1-2",
        ps: "Ps 61-62",
        pr: "Prov 12:14-28"
    },
    {
        day: 35,
        ot: "1 Sam 11-16",
        nt: "John 3-4",
        ps: "Ps 63-64",
        pr: "Prov 13:1-6"
    },
    {
        day: 36,
        ot: "1 Sam 17-24",
        nt: "John 5-6",
        ps: "Ps 65-66",
        pr: "Prov 13:7-14"
    },
    {
        day: 37,
        ot: "1 Sam 25-31",
        nt: "John 7-8",
        ps: "Ps 67-68",
        pr: "Prov 13:15-25"
    },
    {
        day: 38,
        ot: "2 Sam 1-10",
        nt: "John 9-10",
        ps: "Ps 69",
        pr: "Prov 14:1-9"
    },
    {
        day: 39,
        ot: "2 Sam 11-19",
        nt: "John 11",
        ps: "Ps 70",
        pr: "Prov 14:10-21"
    },
    {
        day: 40,
        ot: "2 Sam 20-24",
        nt: "John 12-13",
        ps: "Ps 71",
        pr: "Prov 14:22-35"
    },
    {
        day: 41,
        ot: "1 Kings 1-6",
        nt: "John 14-16",
        ps: "Ps 72-73",
        pr: "Prov 15:1-7"
    },
    {
        day: 42,
        ot: "1 Kings 7-12",
        nt: "John 17-19",
        ps: "Ps 74",
        pr: "Prov 15:8-16"
    },
    {
        day: 43,
        ot: "1 Kings 13-18",
        nt: "John 20-21",
        ps: "Ps 75-76",
        pr: "Prov 15:17-33"
    },
    {
        day: 44,
        ot: "1 Kings 19-22",
        nt: "Acts 1-3",
        ps: "Ps 77",
        pr: "Prov 16:1-7"
    },
    {
        day: 45,
        ot: "2 Kings 1-11",
        nt: "Acts 4-6",
        ps: "Ps 78:1-38",
        pr: "Prov 16:8-16"
    },
    {
        day: 46,
        ot: "2 Kings 12-17",
        nt: "Acts 7-8",
        ps: "Ps 78:39-72",
        pr: "Prov 16:17-23"
    },
    {
        day: 47,
        ot: "2 Kings 18-25",
        nt: "Acts 9-10",
        ps: "Ps 79",
        pr: "Prov 16:24-33"
    },
    {
        day: 48,
        ot: "1 Chron 1-5",
        nt: "Acts 11:1-13:41",
        ps: "Ps 80-81",
        pr: "Prov 17:1-8"
    },
    {
        day: 49,
        ot: "1 Chron 6-9",
        nt: "Acts 13:42-15:41",
        ps: "Ps 82-83",
        pr: "Prov 17:9-17"
    },
    {
        day: 50,
        ot: "1 Chron 10-19",
        nt: "Acts 16-17",
        ps: "Ps 84-85",
        pr: "Prov 17:18-28"
    },
    {
        day: 51,
        ot: "1 Chron 20-29",
        nt: "Acts 18-19",
        ps: "Ps 86-87",
        pr: "Prov 18:1-9"
    },
    {
        day: 52,
        ot: "2 Chron 1-8",
        nt: "Acts 20:1-22:21",
        ps: "Ps 88",
        pr: "Prov 18:10-24"
    },
    {
        day: 53,
        ot: "2 Chron 9-19",
        nt: "Acts 22:22-25:27",
        ps: "Ps 89",
        pr: "Prov 19:1-7"
    },
    {
        day: 54,
        ot: "2 Chron 20-28",
        nt: "Acts 26-28",
        ps: "Ps 90",
        pr: "Prov 19:8-17"
    },
    {
        day: 55,
        ot: "2 Chron 29-36",
        nt: "Rom 1-3",
        ps: "Ps 91-92",
        pr: "Prov 19:18-29"
    },
    {
        day: 56,
        ot: "Ezra 1-10",
        nt: "Rom 4-6",
        ps: "Ps 93-94",
        pr: "Prov 20:1-12"
    },
    {
        day: 57,
        ot: "Neh 1-7",
        nt: "Rom 7-9",
        ps: "Ps 95-96",
        pr: "Prov 20:13-20"
    },
    {
        day: 58,
        ot: "Neh 8-13",
        nt: "Rom 10-12",
        ps: "Ps 97-98",
        pr: "Prov 20:21-30"
    },
    {
        day: 59,
        ot: "Esther 1-10",
        nt: "Rom 13-16",
        ps: "Ps 99-101",
        pr: "Prov 21:1-9"
    },
    {
        day: 60,
        ot: "Job 1-9",
        nt: "1 Cor 1-3",
        ps: "Ps 102",
        pr: "Prov 21:10-19"
    },
    {
        day: 61,
        ot: "Job 10-20",
        nt: "1 Cor 4-7",
        ps: "Ps 103",
        pr: "Prov 21:20-31"
    },
    {
        day: 62,
        ot: "Job 21-28",
        nt: "1 Cor 8-11",
        ps: "Ps 104",
        pr: "Prov 22:1-8"
    },
    {
        day: 63,
        ot: "Job 29-34",
        nt: "1 Cor 12-14",
        ps: "Ps 105:1-18",
        pr: "Prov 22:9-16"
    },
    {
        day: 64,
        ot: "Job 35-42",
        nt: "1 Cor 15-16",
        ps: "Ps 105:19-45",
        pr: "Prov 22:17-29"
    },
    {
        day: 65,
        ot: "Eccles 1-12",
        nt: "2 Cor 1-4",
        ps: "Ps 106",
        pr: "Prov 23:1-10"
    },
    {
        day: 66,
        ot: "Song 1-8, Isa 1-5",
        nt: "2 Cor 5-8",
        ps: "Ps 107",
        pr: "Prov 23:11-21"
    },
    {
        day: 67,
        ot: "Isa 6-21",
        nt: "2 Cor 9-13",
        ps: "Ps 108",
        pr: "Prov 23:22-35"
    },
    {
        day: 68,
        ot: "Isa 22-29",
        nt: "Gal 1:1-3:18",
        ps: "Ps 109",
        pr: "Prov 24:1-10"
    },
    {
        day: 69,
        ot: "Isa 30-40",
        nt: "Gal 3:19-6:18",
        ps: "Ps 110-112",
        pr: "Prov 24:11-22"
    },
    {
        day: 70,
        ot: "Isa 41-49",
        nt: "Eph 1-4",
        ps: "Ps 113-115",
        pr: "Prov 24:23-34"
    },
    {
        day: 71,
        ot: "Isa 50-66",
        nt: "Eph 5-6",
        ps: "Ps 116-117",
        pr: "Prov 25:1-8"
    },
    {
        day: 72,
        ot: "Jer 1-6",
        nt: "Phil 1-4",
        ps: "Ps 118",
        pr: "Prov 25:9-18"
    },
    {
        day: 73,
        ot: "Jer 7-14",
        nt: "Col 1-4",
        ps: "Ps 119:1-32",
        pr: "Prov 25:19-28"
    },
    {
        day: 74,
        ot: "Jer 15-23",
        nt: "1 Thess 1-5",
        ps: "Ps 119:33-56",
        pr: "Prov 26:1-13"
    },
    {
        day: 75,
        ot: "Jer 24-32",
        nt: "2 Thess 1-3",
        ps: "Ps 119:57-88",
        pr: "Prov 26:14-28"
    },
    {
        day: 76,
        ot: "Jer 33-41",
        nt: "1 Tim 1-6",
        ps: "Ps 119:89-120",
        pr: "Prov 27:1-8"
    },
    {
        day: 77,
        ot: "Jer 42-50",
        nt: "2 Tim 1-4",
        ps: "Ps 119:121-144",
        pr: "Prov 27:9-16"
    },
    {
        day: 78,
        ot: "Jer 51-52, Lam 1-5",
        nt: "Philem, Heb 1-4",
        ps: "Ps 119:145-176",
        pr: "Prov 27:17-27"
    },
    {
        day: 79,
        ot: "Ezek 1-10",
        nt: "Heb 5-8",
        ps: "Ps 120-122",
        pr: "Prov 28:1-8"
    },
    {
        day: 80,
        ot: "Ezek 11-17",
        nt: "Heb 9-10",
        ps: "Ps 123-126",
        pr: "Prov 28:9-17"
    },
    {
        day: 81,
        ot: "Ezek 18-24",
        nt: "Heb 11-13",
        ps: "Ps 127-130",
        pr: "Prov 28:18-28"
    },
    {
        day: 82,
        ot: "Ezek 25-32",
        nt: "James 1-5",
        ps: "Ps 131-133",
        pr: "Prov 29:1-8"
    },
    {
        day: 83,
        ot: "Ezek 33-39",
        nt: "1 Pet 1-5",
        ps: "Ps 134-135",
        pr: "Prov 29:9-16"
    },
    {
        day: 84,
        ot: "Ezek 40-48",
        nt: "2 Pet 1-3",
        ps: "Ps 136-137",
        pr: "Prov 29:17-27"
    },
    {
        day: 85,
        ot: "Dan 1-7",
        nt: "1 John 1-5",
        ps: "Ps 138-139",
        pr: "Prov 30:1-10"
    },
    {
        day: 86,
        ot: "Dan 8-12, Hos 1-14",
        nt: "2 John, 3 John, Jude",
        ps: "Ps 140-141",
        pr: "Prov 30:11-20"
    },
    {
        day: 87,
        ot: "Joel 1-3, Amos 1-9",
        nt: "Rev 1-6",
        ps: "Ps 142-143",
        pr: "Prov 30:21-33"
    },
    {
        day: 88,
        ot: "Obad, Jonah 1-4, Micah 1-7, Nah 1-3",
        nt: "Rev 7-12",
        ps: "Ps 144-145",
        pr: "Prov 31:1-9"
    },
    {
        day: 89,
        ot: "Hab 1-3, Zeph 1-3, Haggai 1-2",
        nt: "Rev 13-17",
        ps: "Ps 146-147",
        pr: "Prov 31:10-19"
    },
    {
        day: 90,
        ot: "Zech 1-14, Mal 1-4",
        nt: "Rev 18-22",
        ps: "Ps 148-150",
        pr: "Prov 31:20-31"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/dates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "START_DATE",
    ()=>START_DATE,
    "formatDateShort",
    ()=>formatDateShort,
    "getDayDate",
    ()=>getDayDate,
    "getTodaysDayNumber",
    ()=>getTodaysDayNumber,
    "isPlanComplete",
    ()=>isPlanComplete
]);
const START_DATE = new Date(2026, 5, 1); // June 1, 2026
function getDayDate(dayNumber) {
    const date = new Date(START_DATE);
    date.setDate(date.getDate() + (dayNumber - 1));
    return date;
}
function getTodaysDayNumber() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDateCopy = new Date(START_DATE);
    startDateCopy.setHours(0, 0, 0, 0);
    const daysDiff = Math.floor((today.getTime() - startDateCopy.getTime()) / (1000 * 60 * 60 * 24));
    const dayNumber = daysDiff + 1;
    return Math.max(1, Math.min(90, dayNumber));
}
function formatDateShort(date) {
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });
}
function isPlanComplete() {
    return getTodaysDayNumber() > 90;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/groupStats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatTimeAgo",
    ()=>formatTimeAgo,
    "getCompletedDaysReport",
    ()=>getCompletedDaysReport,
    "getDayGroupStats",
    ()=>getDayGroupStats,
    "getReaderActivity",
    ()=>getReaderActivity,
    "getReaderStatus",
    ()=>getReaderStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/stats.ts [app-client] (ecmascript)");
;
function getDayGroupStats(day, readers, progress) {
    const readerStats = readers.map((reader)=>{
        const dayPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayPercent"])(reader.name, day, progress);
        const dayCompleted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayComplete"])(reader.name, day, progress);
        return {
            name: reader.name,
            dayPercent,
            dayCompleted
        };
    });
    const totalReadingsPercent = Math.round(readerStats.reduce((sum, stats)=>sum + stats.dayPercent, 0) / readers.length);
    const readersCompleteDay = readerStats.filter((s)=>s.dayCompleted).length;
    return {
        day,
        totalReadingsPercent,
        readersCompleteDay,
        completionPercent: totalReadingsPercent,
        readerStats
    };
}
function getCompletedDaysReport(readers, progress) {
    const completed = progress.filter((p)=>p.ot === 100 && p.nt === 100 && p.ps === 100 && p.pr === 100).map((p)=>({
            readerName: p.reader_name,
            day: p.day,
            dayPercent: 100,
            timestamp: new Date(p.updated_at)
        })).sort((a, b)=>b.timestamp.getTime() - a.timestamp.getTime());
    return completed;
}
function getReaderActivity(readers, progress, limit = 10) {
    const events = progress.filter((p)=>p.updated_at).map((p)=>({
            readerName: p.reader_name,
            day: p.day,
            timestamp: new Date(p.updated_at),
            type: p.ot === 100 && p.nt === 100 && p.ps === 100 && p.pr === 100 ? "day_complete" : "reading_complete"
        })).sort((a, b)=>b.timestamp.getTime() - a.timestamp.getTime()).slice(0, limit);
    return events;
}
function formatTimeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (seconds < 60) return "now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
}
function getReaderStatus(readerDayNumber, todaysDayNumber) {
    if (readerDayNumber > todaysDayNumber) return "ahead";
    if (readerDayNumber === todaysDayNumber) return "on-track";
    return "behind";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ReadingSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadingSection",
    ()=>ReadingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
;
const readingConfig = {
    ot: {
        color: "#b45d0f",
        lightColor: "rgba(180, 93, 15, 0.1)",
        icon: "📕",
        label: "Old Testament"
    },
    nt: {
        color: "#b91c1c",
        lightColor: "rgba(185, 28, 28, 0.1)",
        icon: "📗",
        label: "New Testament"
    },
    ps: {
        color: "#1e40af",
        lightColor: "rgba(30, 64, 175, 0.1)",
        icon: "📘",
        label: "Psalms"
    },
    pr: {
        color: "#6b21a8",
        lightColor: "rgba(107, 33, 168, 0.1)",
        icon: "📙",
        label: "Proverbs"
    }
};
const percentOptions = [
    0,
    25,
    50,
    75,
    100
];
function ReadingSection({ type, label, reference, percentage, isExpanded, onPercentageChange, onToggleExpand, children, isLocked = false }) {
    const config = readingConfig[type];
    const isComplete = percentage === 100;
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: -8
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };
    const expandVariants = {
        collapsed: {
            height: 0,
            opacity: 0
        },
        expanded: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: containerVariants,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: onToggleExpand,
                disabled: isLocked,
                whileHover: isLocked ? {} : {
                    y: -2
                },
                whileTap: isLocked ? {} : {
                    scale: 0.98
                },
                className: `w-full p-4 sm:p-5 rounded-xl transition-all border ${isLocked ? "opacity-50 cursor-not-allowed border-gray-200 bg-gray-50" : isComplete ? `border-2 shadow-elevation` : `border shadow-soft hover:shadow-subtle`}`,
                style: {
                    borderColor: isLocked ? "transparent" : isComplete ? config.color : "rgba(26, 26, 26, 0.1)",
                    backgroundColor: isLocked ? "rgba(0, 0, 0, 0.02)" : isComplete ? config.lightColor : "rgba(255, 255, 255, 0.5)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-3 sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start flex-1 gap-3 sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10
                                    },
                                    className: "w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-white text-sm shadow-soft",
                                    style: {
                                        backgroundColor: isLocked ? "rgba(0, 0, 0, 0.2)" : isComplete ? config.color : "#c4b5a0"
                                    },
                                    children: [
                                        percentage,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ReadingSection.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-xs font-medium uppercase tracking-widest text-ink-light",
                                            children: [
                                                config.icon,
                                                " ",
                                                label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ReadingSection.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base font-serif font-semibold mt-1 truncate",
                                            style: {
                                                color: config.color
                                            },
                                            children: reference
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ReadingSection.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ReadingSection.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ReadingSection.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: isExpanded ? 180 : 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-5 h-5 sm:w-6 sm:h-6",
                                style: {
                                    color: config.color,
                                    opacity: isLocked ? 0.5 : 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/ReadingSection.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ReadingSection.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ReadingSection.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ReadingSection.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "collapsed",
                animate: isExpanded ? "expanded" : "collapsed",
                variants: expandVariants,
                className: "mt-2 overflow-hidden",
                children: [
                    children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/components/ReadingSection.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -8
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.1,
                            duration: 0.3
                        },
                        className: "p-4 sm:p-5 rounded-xl shadow-soft border",
                        style: {
                            backgroundColor: "rgba(255, 255, 255, 0.6)",
                            borderColor: "rgba(26, 26, 26, 0.08)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-widest text-ink-light mb-3 sm:mb-4 pl-3",
                                children: "Mark Completion"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ReadingSection.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 sm:gap-2.5 p-1.5 rounded-lg bg-white bg-opacity-50 border border-gray-100",
                                children: percentOptions.map((pct, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>{
                                            if (!isLocked) {
                                                onPercentageChange(pct);
                                            }
                                        },
                                        disabled: isLocked,
                                        whileHover: isLocked ? {} : {
                                            scale: 1.05
                                        },
                                        whileTap: isLocked ? {} : {
                                            scale: 0.95
                                        },
                                        className: `flex-1 py-2.5 sm:py-3 px-1 sm:px-2 rounded-md font-semibold text-xs sm:text-sm transition-all ${isLocked ? "opacity-50 cursor-not-allowed" : ""}`,
                                        style: {
                                            backgroundColor: percentage === pct ? config.color : "transparent",
                                            color: percentage === pct ? "white" : config.color,
                                            boxShadow: percentage === pct ? "0 4px 12px rgba(26, 26, 26, 0.15)" : "none"
                                        },
                                        children: [
                                            pct,
                                            "%"
                                        ]
                                    }, pct, true, {
                                        fileName: "[project]/app/components/ReadingSection.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ReadingSection.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ReadingSection.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ReadingSection.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ReadingSection.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c = ReadingSection;
var _c;
__turbopack_context__.k.register(_c, "ReadingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/DayGroupTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DayGroupTracker",
    ()=>DayGroupTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$groupStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/groupStats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function DayGroupTracker({ day, readers, progress }) {
    _s();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$groupStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayGroupStats"])(day, readers, progress);
    // Sort readers by dayPercent descending (highest achievement first)
    const sortedReaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DayGroupTracker.useMemo[sortedReaders]": ()=>{
            return [
                ...stats.readerStats
            ].sort({
                "DayGroupTracker.useMemo[sortedReaders]": (a, b)=>b.dayPercent - a.dayPercent
            }["DayGroupTracker.useMemo[sortedReaders]"]);
        }
    }["DayGroupTracker.useMemo[sortedReaders]"], [
        stats.readerStats
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-r from-cream to-parchment rounded-xl p-4 sm:p-5 border border-gold border-opacity-30 shadow-soft",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-ink text-center uppercase tracking-wide mb-4",
                children: [
                    "Day ",
                    day,
                    " Group Ranking"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DayGroupTracker.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2.5",
                children: sortedReaders.map((reader, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-3 sm:p-3.5 rounded-lg border transition-all ${reader.dayCompleted ? "bg-gold bg-opacity-8 border-gold border-opacity-50" : "bg-white bg-opacity-40 border-gray-200"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-base sm:text-lg font-bold font-serif w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 ${reader.dayCompleted ? "bg-gold bg-opacity-25 text-gold" : "bg-gray-200 text-ink-light"}`,
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/app/components/DayGroupTracker.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `font-semibold text-sm truncate ${reader.dayCompleted ? "text-ink" : "text-gray-700"}`,
                                            children: reader.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/DayGroupTracker.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 h-2 bg-gray-200 rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gold h-full transition-all duration-300",
                                                        style: {
                                                            width: `${reader.dayPercent}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/DayGroupTracker.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DayGroupTracker.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs sm:text-sm font-bold text-ink-light whitespace-nowrap",
                                                    children: [
                                                        reader.dayPercent,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DayGroupTracker.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/DayGroupTracker.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/DayGroupTracker.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/DayGroupTracker.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    }, reader.name, false, {
                        fileName: "[project]/app/components/DayGroupTracker.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/DayGroupTracker.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-4 border-t border-gold border-opacity-20 flex items-center justify-between text-xs sm:text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-ink-light font-medium pl-3",
                                children: "Complete"
                            }, void 0, false, {
                                fileName: "[project]/app/components/DayGroupTracker.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-gold",
                                children: [
                                    stats.readersCompleteDay,
                                    "/",
                                    readers.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/DayGroupTracker.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DayGroupTracker.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-ink-light font-medium pl-3",
                                children: "Average"
                            }, void 0, false, {
                                fileName: "[project]/app/components/DayGroupTracker.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-ink",
                                children: [
                                    stats.completionPercent,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/DayGroupTracker.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DayGroupTracker.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DayGroupTracker.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/DayGroupTracker.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(DayGroupTracker, "cWp3iaKnaf5k7iTGzUf4yB7y4uY=");
_c = DayGroupTracker;
var _c;
__turbopack_context__.k.register(_c, "DayGroupTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ActivityFeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityFeed",
    ()=>ActivityFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$groupStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/groupStats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
;
;
;
function ActivityFeed({ readers, progress }) {
    const activities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$groupStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReaderActivity"])(readers, progress, 8);
    if (activities.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-4 text-gray-500 text-sm",
            children: "No activity yet"
        }, void 0, false, {
            fileName: "[project]/app/components/ActivityFeed.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-ink mb-3",
                children: "Recently Completed"
            }, void 0, false, {
                fileName: "[project]/app/components/ActivityFeed.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            activities.map((activity, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 p-2 rounded-lg hover:bg-gold hover:bg-opacity-5 transition-colors",
                    children: [
                        activity.type === "day_complete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            className: "w-4 h-4 text-gold flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ActivityFeed.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "w-4 h-4 text-gold flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ActivityFeed.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-ink truncate",
                                    children: activity.readerName
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ActivityFeed.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600",
                                    children: [
                                        activity.type === "day_complete" ? "Finished" : "Read",
                                        " Day ",
                                        activity.day
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ActivityFeed.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ActivityFeed.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500 flex-shrink-0 whitespace-nowrap",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$groupStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeAgo"])(activity.timestamp)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ActivityFeed.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, `${activity.readerName}-${activity.day}-${idx}`, true, {
                    fileName: "[project]/app/components/ActivityFeed.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ActivityFeed.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ActivityFeed;
var _c;
__turbopack_context__.k.register(_c, "ActivityFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AnimatedProgressRing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedProgressRing",
    ()=>AnimatedProgressRing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function AnimatedProgressRing({ percentage, size = 120, strokeWidth = 8, color = "#b8860b", backgroundColor = "#d4a574" }) {
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - percentage / 100 * circumference;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedProgressRing.useEffect": ()=>{
            if (svgRef.current) {
                svgRef.current.style.strokeDashoffset = offset.toString();
            }
        }
    }["AnimatedProgressRing.useEffect"], [
        offset
    ]);
    // Animate counter
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedProgressRing.useEffect": ()=>{
            if (!textRef.current) return;
            const start = 0;
            const end = percentage;
            const duration = 800;
            const startTime = Date.now();
            const animate = {
                "AnimatedProgressRing.useEffect.animate": ()=>{
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const current = Math.floor(start + (end - start) * progress);
                    if (textRef.current) {
                        textRef.current.textContent = `${current}%`;
                    }
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                }
            }["AnimatedProgressRing.useEffect.animate"];
            animate();
        }
    }["AnimatedProgressRing.useEffect"], [
        percentage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: `0 0 ${size} ${size}`,
                className: "transform -rotate-90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: size / 2,
                        cy: size / 2,
                        r: radius,
                        fill: "none",
                        stroke: backgroundColor,
                        strokeWidth: strokeWidth
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnimatedProgressRing.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        ref: svgRef,
                        cx: size / 2,
                        cy: size / 2,
                        r: radius,
                        fill: "none",
                        stroke: color,
                        strokeWidth: strokeWidth,
                        strokeDasharray: circumference,
                        strokeDashoffset: circumference,
                        strokeLinecap: "round",
                        className: "transition-all duration-1000 ease-out"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnimatedProgressRing.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnimatedProgressRing.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: textRef,
                className: "absolute inset-0 flex items-center justify-center text-lg font-bold text-ink",
                children: "0%"
            }, void 0, false, {
                fileName: "[project]/app/components/AnimatedProgressRing.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AnimatedProgressRing.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(AnimatedProgressRing, "uFmEP3906n2rqybESpPk1OdepIs=");
_c = AnimatedProgressRing;
var _c;
__turbopack_context__.k.register(_c, "AnimatedProgressRing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Celebration.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Celebration",
    ()=>Celebration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Celebration({ trigger }) {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Celebration.useEffect": ()=>{
            if (trigger) {
                setShow(true);
                const timer = setTimeout({
                    "Celebration.useEffect.timer": ()=>setShow(false)
                }["Celebration.useEffect.timer"], 2000);
                return ({
                    "Celebration.useEffect": ()=>clearTimeout(timer)
                })["Celebration.useEffect"];
            }
        }
    }["Celebration.useEffect"], [
        trigger
    ]);
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 1,
                    scale: 0
                },
                animate: {
                    opacity: 0,
                    scale: 2
                },
                transition: {
                    duration: 0.8
                },
                className: "absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-gold via-gold-light to-gold rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/app/components/Celebration.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            [
                ...Array(6)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 1,
                        x: 0,
                        y: 0
                    },
                    animate: {
                        opacity: 0,
                        x: Math.cos(i / 6 * Math.PI * 2) * 120,
                        y: Math.sin(i / 6 * Math.PI * 2) * 120
                    },
                    transition: {
                        duration: 1.2
                    },
                    className: "absolute top-1/2 left-1/2 w-2 h-2 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2"
                }, i, false, {
                    fileName: "[project]/app/components/Celebration.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: -40
                },
                exit: {
                    opacity: 0,
                    scale: 0.8,
                    y: -80
                },
                transition: {
                    duration: 0.6
                },
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-3xl font-serif font-bold text-gold",
                    children: "Day Complete! 🎉"
                }, void 0, false, {
                    fileName: "[project]/app/components/Celebration.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Celebration.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Celebration.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Celebration, "bXBd/WbmO9A8Q7bxaOKZvuJyGc0=");
_c = Celebration;
var _c;
__turbopack_context__.k.register(_c, "Celebration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/TodayTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TodayTab",
    ()=>TodayTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/plan.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/dates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$groupStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/groupStats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReadingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ReadingSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DayGroupTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/DayGroupTracker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ActivityFeed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnimatedProgressRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AnimatedProgressRing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Celebration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Celebration.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
function TodayTab({ currentReader, readers, progress, onRefresh }) {
    _s();
    const todaysDayNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTodaysDayNumber"])();
    const [selectedDay, setSelectedDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TodayTab.useState": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlanComplete"])()) {
                return 90;
            }
            return todaysDayNumber;
        }
    }["TodayTab.useState"]);
    const [expandedReading, setExpandedReading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [celebrateDay, setCelebrateDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previousPercentage, setPreviousPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const dayPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TodayTab.useMemo[dayPlan]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAN"].find({
                "TodayTab.useMemo[dayPlan]": (p)=>p.day === selectedDay
            }["TodayTab.useMemo[dayPlan]"])
    }["TodayTab.useMemo[dayPlan]"], [
        selectedDay
    ]);
    const dayProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TodayTab.useMemo[dayProgress]": ()=>progress.find({
                "TodayTab.useMemo[dayProgress]": (p)=>p.reader_name === currentReader && p.day === selectedDay
            }["TodayTab.useMemo[dayProgress]"])
    }["TodayTab.useMemo[dayProgress]"], [
        progress,
        currentReader,
        selectedDay
    ]);
    const readerCurrentDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TodayTab.useMemo[readerCurrentDay]": ()=>{
            for(let day = 1; day <= 90; day++){
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayComplete"])(currentReader, day, progress)) {
                    return day;
                }
            }
            return 90;
        }
    }["TodayTab.useMemo[readerCurrentDay]"], [
        progress,
        currentReader
    ]);
    const dayPercentage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TodayTab.useMemo[dayPercentage]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayPercent"])(currentReader, selectedDay, progress);
        }
    }["TodayTab.useMemo[dayPercentage]"], [
        currentReader,
        selectedDay,
        progress
    ]);
    // Trigger celebration when day completes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TodayTab.useEffect": ()=>{
            if (dayPercentage === 100 && previousPercentage < 100) {
                setCelebrateDay(true);
            }
            setPreviousPercentage(dayPercentage);
        }
    }["TodayTab.useEffect"], [
        dayPercentage,
        previousPercentage
    ]);
    const isDayLocked = selectedDay > todaysDayNumber;
    const readerStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$groupStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReaderStatus"])(readerCurrentDay, todaysDayNumber);
    const updateReading = async (field, value)=>{
        if (!dayPlan || isDayLocked) return;
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("progress").upsert({
                reader_name: currentReader,
                day: selectedDay,
                [field]: value,
                updated_at: new Date().toISOString()
            }, {
                onConflict: "reader_name,day"
            });
            if (error) throw error;
            onRefresh();
        } catch (err) {
            console.error("Failed to update progress:", err);
        }
    };
    if (!dayPlan) return null;
    const readings = [
        {
            key: "ot",
            label: "Old Testament",
            value: dayPlan.ot,
            color: "#b45d0f"
        },
        {
            key: "nt",
            label: "New Testament",
            value: dayPlan.nt,
            color: "#b91c1c"
        },
        {
            key: "ps",
            label: "Psalms",
            value: dayPlan.ps,
            color: "#1e40af"
        },
        {
            key: "pr",
            label: "Proverbs",
            value: dayPlan.pr,
            color: "#6b21a8"
        }
    ];
    const getStatusBadge = ()=>{
        if (isDayLocked) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full font-medium flex items-center gap-1 shadow-soft",
                initial: {
                    scale: 0.8,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TodayTab.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    " Locked"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TodayTab.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this);
        }
        const badgeStyles = {
            ahead: {
                bg: "bg-green-50",
                text: "text-green-700",
                label: "Ahead 🚀"
            },
            "on-track": {
                bg: "bg-blue-50",
                text: "text-blue-700",
                label: "On track 📍"
            },
            behind: {
                bg: "bg-amber-50",
                text: "text-amber-700",
                label: "Catching up 💪"
            }
        };
        const style = badgeStyles[readerStatus] || badgeStyles.behind;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            className: `text-xs px-3 py-1.5 rounded-full font-medium shadow-soft border ${style.bg} ${style.text} border-current border-opacity-20`,
            initial: {
                scale: 0.8,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10
            },
            children: style.label
        }, void 0, false, {
            fileName: "[project]/app/components/TodayTab.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this);
    };
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "pb-8 px-5 sm:px-6 max-w-md mx-auto space-y-5 sm:space-y-6",
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Celebration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Celebration"], {
                trigger: celebrateDay
            }, void 0, false, {
                fileName: "[project]/app/components/TodayTab.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex items-center justify-between pt-4 sm:pt-6",
                variants: itemVariants,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>setSelectedDay(Math.max(1, selectedDay - 1)),
                        disabled: selectedDay === 1,
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        className: "p-2 disabled:opacity-40 hover:bg-gold hover:bg-opacity-10 rounded-lg transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-6 h-6 sm:w-7 sm:h-7 text-gold"
                        }, void 0, false, {
                            fileName: "[project]/app/components/TodayTab.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TodayTab.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                className: "text-2xl sm:text-3xl font-serif font-bold text-ink",
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: [
                                    "Day ",
                                    selectedDay
                                ]
                            }, selectedDay, true, {
                                fileName: "[project]/app/components/TodayTab.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-ink-light mt-1",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateShort"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayDate"])(selectedDay))
                            }, void 0, false, {
                                fileName: "[project]/app/components/TodayTab.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            selectedDay === todaysDayNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-xs text-gold font-medium mt-1.5 font-semibold",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.2
                                },
                                children: "Today"
                            }, void 0, false, {
                                fileName: "[project]/app/components/TodayTab.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            isDayLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-xs text-ink-light mt-1.5 flex items-center justify-center gap-1 font-medium",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TodayTab.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    " Unlocks tomorrow"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TodayTab.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/TodayTab.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>setSelectedDay(Math.min(90, selectedDay + 1)),
                        disabled: selectedDay === 90 || isDayLocked,
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        className: "p-2 disabled:opacity-40 hover:bg-gold hover:bg-opacity-10 rounded-lg transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-6 h-6 sm:w-7 sm:h-7 text-gold"
                        }, void 0, false, {
                            fileName: "[project]/app/components/TodayTab.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TodayTab.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TodayTab.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex flex-col items-center justify-center py-4 sm:py-6 px-4 sm:px-6 rounded-2xl shadow-elevation",
                style: {
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 100%)",
                    border: "1px solid rgba(184, 134, 11, 0.1)"
                },
                variants: itemVariants,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnimatedProgressRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedProgressRing"], {
                        percentage: dayPercentage,
                        size: 140,
                        strokeWidth: 8,
                        color: "#b8860b",
                        backgroundColor: "#d4a574"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TodayTab.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-ink-light uppercase tracking-widest font-medium mt-4 pl-3",
                        children: dayPercentage === 100 ? "Day Complete!" : "Today's Progress"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TodayTab.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TodayTab.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex items-center justify-between pl-2",
                variants: itemVariants,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-ink-light uppercase tracking-wide pl-3",
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TodayTab.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    getStatusBadge()
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TodayTab.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: itemVariants,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DayGroupTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayGroupTracker"], {
                    day: selectedDay,
                    readers: readers,
                    progress: progress
                }, void 0, false, {
                    fileName: "[project]/app/components/TodayTab.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/TodayTab.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "space-y-4",
                variants: itemVariants,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-ink text-center uppercase tracking-wide",
                        children: "Readings for Today"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TodayTab.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "space-y-3",
                        variants: containerVariants,
                        children: readings.map((reading, idx)=>{
                            const percentage = dayProgress?.[reading.key] ?? 0;
                            const isExpanded = expandedReading === reading.key;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                custom: idx,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReadingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadingSection"], {
                                    type: reading.key,
                                    label: reading.label,
                                    reference: reading.value,
                                    percentage: percentage,
                                    isExpanded: isExpanded,
                                    onPercentageChange: (pct)=>updateReading(reading.key, pct),
                                    onToggleExpand: ()=>setExpandedReading(isExpanded ? null : reading.key),
                                    isLocked: isDayLocked,
                                    children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "p-4 sm:p-5 rounded-lg shadow-soft border",
                                        style: {
                                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                                            borderColor: reading.color,
                                            borderLeft: `4px solid ${reading.color}`
                                        },
                                        initial: {
                                            opacity: 0,
                                            y: -8
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-ink-light font-medium",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-ink",
                                                        children: reading.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/TodayTab.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TodayTab.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                    href: `https://www.biblegateway.com/passage/?search=${encodeURIComponent(reading.value)}&version=NIV`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all shadow-soft",
                                                    style: {
                                                        backgroundColor: `${reading.color}15`,
                                                        color: reading.color
                                                    },
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    children: [
                                                        "Read on BibleGateway",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TodayTab.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TodayTab.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TodayTab.tsx",
                                            lineNumber: 309,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TodayTab.tsx",
                                        lineNumber: 298,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TodayTab.tsx",
                                    lineNumber: 284,
                                    columnNumber: 17
                                }, this)
                            }, reading.key, false, {
                                fileName: "[project]/app/components/TodayTab.tsx",
                                lineNumber: 279,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/TodayTab.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TodayTab.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "border-t border-gold border-opacity-20 pt-4 sm:pt-5",
                variants: itemVariants,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivityFeed"], {
                    readers: readers,
                    progress: progress
                }, void 0, false, {
                    fileName: "[project]/app/components/TodayTab.tsx",
                    lineNumber: 345,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/TodayTab.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TodayTab.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(TodayTab, "b8oiOr9VJzkONfdEf5FhflEg/l4=");
_c = TodayTab;
var _c;
__turbopack_context__.k.register(_c, "TodayTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/PlanTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlanTab",
    ()=>PlanTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/dates.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function PlanTab({ currentReader, progress, onSelectDay }) {
    _s();
    const gridData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlanTab.useMemo[gridData]": ()=>{
            const data = [];
            for(let day = 1; day <= 90; day++){
                const complete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayComplete"])(currentReader, day, progress);
                const percentage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayPercent"])(currentReader, day, progress);
                data.push({
                    day,
                    complete,
                    percentage
                });
            }
            return data;
        }
    }["PlanTab.useMemo[gridData]"], [
        progress,
        currentReader
    ]);
    const getGradientId = (day)=>`grad-${day}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-8 px-5 sm:px-6 max-w-md mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl sm:text-3xl font-serif text-ink mb-6 pt-6",
                children: "90-Day Plan"
            }, void 0, false, {
                fileName: "[project]/app/components/PlanTab.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-6 sm:grid-cols-9 md:grid-cols-10 gap-2",
                children: gridData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelectDay(item.day),
                        title: `Day ${item.day} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateShort"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayDate"])(item.day))}`,
                        className: "aspect-square rounded-lg border-2 border-gray-300 hover:border-gold transition-all relative overflow-hidden group",
                        children: item.complete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-gold flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-xs sm:text-sm font-bold",
                                children: item.day
                            }, void 0, false, {
                                fileName: "[project]/app/components/PlanTab.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/PlanTab.tsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-full h-full absolute inset-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: getGradientId(item.day),
                                                x1: "0%",
                                                y1: "100%",
                                                x2: "0%",
                                                y2: `${100 - item.percentage}%`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "#b8860b"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PlanTab.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PlanTab.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PlanTab.tsx",
                                                lineNumber: 57,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PlanTab.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "100%",
                                            height: "100%",
                                            fill: `url(#${getGradientId(item.day)})`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PlanTab.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PlanTab.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm font-bold text-ink group-hover:text-gold",
                                        children: item.day
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PlanTab.tsx",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PlanTab.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, item.day, false, {
                        fileName: "[project]/app/components/PlanTab.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/PlanTab.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mt-4",
                children: "Tap a day to jump to it. Filled days are complete."
            }, void 0, false, {
                fileName: "[project]/app/components/PlanTab.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PlanTab.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(PlanTab, "GX3M+gcfCMUEpO1A89wrhbJ//S0=");
_c = PlanTab;
var _c;
__turbopack_context__.k.register(_c, "PlanTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/GroupProgressHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupProgressHero",
    ()=>GroupProgressHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/stats.ts [app-client] (ecmascript)");
;
;
function GroupProgressHero({ readers, progress }) {
    const percent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateGroupPercent"])(readers, progress);
    // Encouraging messages based on progress
    const getMessage = (p)=>{
        if (p === 0) return "Let's get started! 📖";
        if (p < 10) return "Off to a great start! 🙏";
        if (p < 25) return "One quarter done! 🌟";
        if (p < 50) return "Halfway through! 💪";
        if (p < 75) return "Three quarters there! 🔥";
        if (p < 90) return "Almost there! 🎯";
        return "Complete! 🎉";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-gold from-20% via-gold via-50% to-amber-900 to-100% rounded-2xl p-6 text-white shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-serif mb-2",
                children: "Your Group's Journey"
            }, void 0, false, {
                fileName: "[project]/app/components/GroupProgressHero.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-24 h-24 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-24 h-24 transform -rotate-90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "48",
                                        cy: "48",
                                        r: "44",
                                        fill: "none",
                                        stroke: "rgba(255,255,255,0.2)",
                                        strokeWidth: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GroupProgressHero.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "48",
                                        cy: "48",
                                        r: "44",
                                        fill: "none",
                                        stroke: "white",
                                        strokeWidth: "4",
                                        strokeDasharray: `${percent / 100 * 276.3} 276.3`,
                                        strokeLinecap: "round",
                                        className: "transition-all duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GroupProgressHero.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GroupProgressHero.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold",
                                    children: [
                                        percent,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/GroupProgressHero.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/GroupProgressHero.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/GroupProgressHero.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm opacity-90 mb-2",
                                children: [
                                    readers.length * 90,
                                    " readings total to complete"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GroupProgressHero.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mb-2",
                                children: getMessage(percent)
                            }, void 0, false, {
                                fileName: "[project]/app/components/GroupProgressHero.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm opacity-90",
                                children: [
                                    readers.length,
                                    " friends reading together through the Bible"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GroupProgressHero.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/GroupProgressHero.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GroupProgressHero.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 w-full bg-white bg-opacity-20 rounded-full h-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white h-full rounded-full transition-all duration-500",
                    style: {
                        width: `${percent}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/GroupProgressHero.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/GroupProgressHero.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GroupProgressHero.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = GroupProgressHero;
var _c;
__turbopack_context__.k.register(_c, "GroupProgressHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/CalendarHeatmap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarHeatmap",
    ()=>CalendarHeatmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/dates.ts [app-client] (ecmascript)");
;
;
function CalendarHeatmap({ reader, progress }) {
    const getIntensity = (day)=>{
        const dayProgress = progress.find((p)=>p.reader_name === reader && p.day === day);
        if (!dayProgress) return 0;
        const completed = [
            dayProgress.ot,
            dayProgress.nt,
            dayProgress.ps,
            dayProgress.pr
        ].filter(Boolean).length;
        return completed; // 0-4
    };
    const getColor = (intensity)=>{
        if (intensity === 0) return "bg-gray-100";
        if (intensity === 1) return "bg-gold bg-opacity-25";
        if (intensity === 2) return "bg-gold bg-opacity-50";
        if (intensity === 3) return "bg-gold bg-opacity-75";
        return "bg-gold";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-ink",
                        children: "90-Day Heatmap"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CalendarHeatmap.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Less"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CalendarHeatmap.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-3 h-3 rounded ${getColor(i)}`
                                    }, i, false, {
                                        fileName: "[project]/app/components/CalendarHeatmap.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/CalendarHeatmap.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "More"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CalendarHeatmap.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CalendarHeatmap.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CalendarHeatmap.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-10 gap-1",
                children: Array.from({
                    length: 90
                }, (_, i)=>i + 1).map((day)=>{
                    const intensity = getIntensity(day);
                    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayDate"])(day);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        title: `Day ${day} · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateShort"])(date)}`,
                        className: `aspect-square rounded text-xs font-bold flex items-center justify-center cursor-pointer transition-opacity hover:opacity-75 ${getColor(intensity)}`,
                        children: day % 10 === 0 ? (day / 10).toFixed(0) : ""
                    }, day, false, {
                        fileName: "[project]/app/components/CalendarHeatmap.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/components/CalendarHeatmap.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-500 mt-2",
                children: "Days are shown every 10th to keep compact"
            }, void 0, false, {
                fileName: "[project]/app/components/CalendarHeatmap.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CalendarHeatmap.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = CalendarHeatmap;
var _c;
__turbopack_context__.k.register(_c, "CalendarHeatmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/GroupTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupTab",
    ()=>GroupTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GroupProgressHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GroupProgressHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CalendarHeatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CalendarHeatmap.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function GroupTab({ currentReader, readers, progress }) {
    _s();
    const groupPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GroupTab.useMemo[groupPercent]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateGroupPercent"])(readers, progress)
    }["GroupTab.useMemo[groupPercent]"], [
        readers,
        progress
    ]);
    const leaderboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GroupTab.useMemo[leaderboard]": ()=>{
            return readers.map({
                "GroupTab.useMemo[leaderboard]": (reader)=>({
                        name: reader.name,
                        daysComplete: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countCompleteDays"])(reader.name, progress),
                        streak: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateStreak"])(reader.name, progress)
                    })
            }["GroupTab.useMemo[leaderboard]"]).sort({
                "GroupTab.useMemo[leaderboard]": (a, b)=>{
                    if (b.daysComplete !== a.daysComplete) {
                        return b.daysComplete - a.daysComplete;
                    }
                    return b.streak - a.streak;
                }
            }["GroupTab.useMemo[leaderboard]"]);
        }
    }["GroupTab.useMemo[leaderboard]"], [
        readers,
        progress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-8 px-5 sm:px-6 max-w-md mx-auto space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GroupProgressHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupProgressHero"], {
                    readers: readers,
                    progress: progress
                }, void 0, false, {
                    fileName: "[project]/app/components/GroupTab.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/GroupTab.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base sm:text-lg font-serif text-ink text-center mb-4 sm:mb-5",
                        children: "Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GroupTab.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5",
                        children: leaderboard.map((entry, index)=>{
                            const isCurrentUser = entry.name === currentReader;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3.5 sm:p-4 rounded-xl border shadow-soft ${isCurrentUser ? "bg-gold bg-opacity-8 border-gold border-opacity-60" : "border-gray-200 hover:shadow-subtle transition-shadow"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-base sm:text-lg font-bold font-serif w-8 h-8 flex items-center justify-center rounded-lg ${isCurrentUser ? "bg-gold bg-opacity-20 text-gold" : "bg-gray-100 text-ink-light"}`,
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/GroupTab.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `font-semibold text-sm sm:text-base ${isCurrentUser ? "text-gold" : "text-ink"}`,
                                                    children: entry.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/GroupTab.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-1.5 flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 h-2 bg-gray-200 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gold h-full transition-all duration-500",
                                                                style: {
                                                                    width: `${entry.daysComplete / 90 * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/GroupTab.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/GroupTab.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs sm:text-sm font-semibold text-ink-light whitespace-nowrap",
                                                            children: [
                                                                entry.daysComplete,
                                                                "/90"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/GroupTab.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/GroupTab.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/GroupTab.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this),
                                        entry.streak > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 flex-shrink-0 whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                    className: "w-4 h-4 text-gold"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/GroupTab.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold text-gold",
                                                    children: entry.streak
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/GroupTab.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/GroupTab.tsx",
                                            lineNumber: 89,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/GroupTab.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this)
                            }, entry.name, false, {
                                fileName: "[project]/app/components/GroupTab.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/GroupTab.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GroupTab.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base sm:text-lg font-serif text-ink mb-4",
                        children: "Individual Heatmaps"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GroupTab.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: leaderboard.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CalendarHeatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarHeatmap"], {
                                reader: entry.name,
                                progress: progress
                            }, entry.name, false, {
                                fileName: "[project]/app/components/GroupTab.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/GroupTab.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GroupTab.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GroupTab.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(GroupTab, "2rEt+0gix/0NJwNtvXz4Y6YqPlc=");
_c = GroupTab;
var _c;
__turbopack_context__.k.register(_c, "GroupTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ReportTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportTab",
    ()=>ReportTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$groupStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/groupStats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/dates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function ReportTab({ readers, progress }) {
    _s();
    const completedDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportTab.useMemo[completedDays]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$groupStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompletedDaysReport"])(readers, progress)
    }["ReportTab.useMemo[completedDays]"], [
        readers,
        progress
    ]);
    const summaryStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportTab.useMemo[summaryStats]": ()=>{
            const perReaderDays = readers.map({
                "ReportTab.useMemo[summaryStats].perReaderDays": (reader)=>({
                        name: reader.name,
                        completedDays: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countCompleteDays"])(reader.name, progress)
                    })
            }["ReportTab.useMemo[summaryStats].perReaderDays"]);
            const totalDaysCompleted = perReaderDays.reduce({
                "ReportTab.useMemo[summaryStats].totalDaysCompleted": (sum, r)=>sum + r.completedDays
            }["ReportTab.useMemo[summaryStats].totalDaysCompleted"], 0);
            const groupPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateGroupPercent"])(readers, progress);
            return {
                perReaderDays,
                totalDaysCompleted,
                groupPercent,
                avgDaysPerReader: readers.length > 0 ? Math.round(totalDaysCompleted / readers.length) : 0
            };
        }
    }["ReportTab.useMemo[summaryStats]"], [
        readers,
        progress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-8 px-5 sm:px-6 max-w-md mx-auto space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl font-serif text-ink",
                        children: "Completion Report"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ReportTab.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-2",
                        children: "Fully completed days (100% on all sections)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ReportTab.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ReportTab.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-parchment rounded-lg p-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl sm:text-4xl font-bold text-gold",
                                children: summaryStats.totalDaysCompleted
                            }, void 0, false, {
                                fileName: "[project]/app/components/ReportTab.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-gray-600 mt-2",
                                children: "Days Completed"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ReportTab.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ReportTab.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-parchment rounded-lg p-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl sm:text-4xl font-bold text-gold",
                                children: [
                                    summaryStats.groupPercent,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ReportTab.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-gray-600 mt-2",
                                children: "Group Progress"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ReportTab.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ReportTab.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ReportTab.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base sm:text-lg font-serif text-ink mb-3",
                        children: "Per Reader"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ReportTab.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: summaryStats.perReaderDays.map((reader)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 bg-parchment rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-ink truncate",
                                        children: reader.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ReportTab.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold text-gold",
                                                children: reader.completedDays
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ReportTab.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "w-4 h-4 text-gold"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ReportTab.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ReportTab.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, reader.name, true, {
                                fileName: "[project]/app/components/ReportTab.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ReportTab.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ReportTab.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            completedDays.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base sm:text-lg font-serif text-ink mb-3",
                        children: "Recently Completed"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ReportTab.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: completedDays.slice(0, 20).map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-3 bg-cream border border-gold border-opacity-30 rounded-lg hover:bg-parchment transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ReportTab.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-sm text-ink truncate",
                                                children: entry.readerName
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ReportTab.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 mt-0.5",
                                                children: [
                                                    "Day ",
                                                    entry.day,
                                                    " · ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateShort"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayDate"])(entry.day))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/ReportTab.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ReportTab.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 flex-shrink-0 whitespace-nowrap",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$groupStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeAgo"])(entry.timestamp)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ReportTab.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/components/ReportTab.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ReportTab.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ReportTab.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-4 text-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm",
                    children: "No completed days yet. Keep going! 📖"
                }, void 0, false, {
                    fileName: "[project]/app/components/ReportTab.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ReportTab.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ReportTab.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(ReportTab, "e5aw9dmJcKJYzI2u1Fiv9lbhqZg=");
_c = ReportTab;
var _c;
__turbopack_context__.k.register(_c, "ReportTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NameGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NameGate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TodayTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TodayTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PlanTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PlanTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GroupTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GroupTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReportTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ReportTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DayGroupTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/DayGroupTracker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ActivityFeed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CalendarHeatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CalendarHeatmap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GroupProgressHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GroupProgressHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReadingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ReadingSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnimatedProgressRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AnimatedProgressRing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Celebration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Celebration.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useReaders.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReaders",
    ()=>useReaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useReaders() {
    _s();
    const [readers, setReaders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReaders.useEffect": ()=>{
            // Initial fetch
            const fetchReaders = {
                "useReaders.useEffect.fetchReaders": async ()=>{
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("readers").select("*").order("created_at", {
                        ascending: true
                    });
                    if (!error) {
                        setReaders(data || []);
                    }
                    setLoading(false);
                }
            }["useReaders.useEffect.fetchReaders"];
            fetchReaders();
            // Subscribe to realtime changes
            const subscription = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel("public:readers").on("postgres_changes", {
                event: "*",
                schema: "public",
                table: "readers"
            }, {
                "useReaders.useEffect.subscription": (payload)=>{
                    if (payload.eventType === "INSERT") {
                        setReaders({
                            "useReaders.useEffect.subscription": (prev)=>[
                                    ...prev,
                                    payload.new
                                ]
                        }["useReaders.useEffect.subscription"]);
                    } else if (payload.eventType === "DELETE") {
                        setReaders({
                            "useReaders.useEffect.subscription": (prev)=>prev.filter({
                                    "useReaders.useEffect.subscription": (r)=>r.name !== payload.old.name
                                }["useReaders.useEffect.subscription"])
                        }["useReaders.useEffect.subscription"]);
                    }
                }
            }["useReaders.useEffect.subscription"]).subscribe();
            return ({
                "useReaders.useEffect": ()=>{
                    subscription.unsubscribe();
                }
            })["useReaders.useEffect"];
        }
    }["useReaders.useEffect"], []);
    return {
        readers,
        loading
    };
}
_s(useReaders, "7/yfmNooN/1hZMINIiTjah024HE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useProgress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProgress",
    ()=>useProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useProgress() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProgress.useEffect": ()=>{
            // Initial fetch
            const fetchProgress = {
                "useProgress.useEffect.fetchProgress": async ()=>{
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("progress").select("*");
                    if (!error) {
                        setProgress(data || []);
                    }
                }
            }["useProgress.useEffect.fetchProgress"];
            fetchProgress();
            // Subscribe to realtime changes
            const subscription = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel("public:progress").on("postgres_changes", {
                event: "*",
                schema: "public",
                table: "progress"
            }, {
                "useProgress.useEffect.subscription": (payload)=>{
                    setProgress({
                        "useProgress.useEffect.subscription": (prev)=>{
                            const index = prev.findIndex({
                                "useProgress.useEffect.subscription.index": (p)=>p.reader_name === payload.new.reader_name && p.day === payload.new.day
                            }["useProgress.useEffect.subscription.index"]);
                            if (payload.eventType === "INSERT") {
                                if (index === -1) {
                                    return [
                                        ...prev,
                                        payload.new
                                    ];
                                }
                                return prev;
                            } else if (payload.eventType === "UPDATE") {
                                if (index !== -1) {
                                    const updated = [
                                        ...prev
                                    ];
                                    updated[index] = payload.new;
                                    return updated;
                                }
                                return prev;
                            } else if (payload.eventType === "DELETE") {
                                return prev.filter({
                                    "useProgress.useEffect.subscription": (p)=>!(p.reader_name === payload.old.reader_name && p.day === payload.old.day)
                                }["useProgress.useEffect.subscription"]);
                            }
                            return prev;
                        }
                    }["useProgress.useEffect.subscription"]);
                }
            }["useProgress.useEffect.subscription"]).subscribe();
            return ({
                "useProgress.useEffect": ()=>{
                    subscription.unsubscribe();
                }
            })["useProgress.useEffect"];
        }
    }["useProgress.useEffect"], []);
    return {
        progress
    };
}
_s(useProgress, "8jJgzF0v1bZeyYWckDqhz5/ms2k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useCurrentReader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentReader",
    ()=>useCurrentReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useCurrentReader() {
    _s();
    const [currentReader, setCurrentReaderState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCurrentReader.useEffect": ()=>{
            const stored = localStorage.getItem("currentReader");
            setCurrentReaderState(stored);
        }
    }["useCurrentReader.useEffect"], []);
    const setCurrentReader = (name)=>{
        if (name) {
            localStorage.setItem("currentReader", name);
        } else {
            localStorage.removeItem("currentReader");
        }
        setCurrentReaderState(name);
    };
    return {
        currentReader,
        setCurrentReader
    };
}
_s(useCurrentReader, "gDfxt+EWjxrckuQ6k2+IF5SGXjU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useBibleVerses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchDayVerses",
    ()=>fetchDayVerses,
    "useBibleVerses",
    ()=>useBibleVerses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useBibleVerses = (reference)=>{
    _s();
    const [verse, setVerse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        book: "",
        chapter: 0,
        verses: "",
        text: "",
        loading: true,
        error: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBibleVerses.useEffect": ()=>{
            const fetchVerse = {
                "useBibleVerses.useEffect.fetchVerse": async ()=>{
                    try {
                        setVerse({
                            "useBibleVerses.useEffect.fetchVerse": (prev)=>({
                                    ...prev,
                                    loading: true,
                                    error: null
                                })
                        }["useBibleVerses.useEffect.fetchVerse"]);
                        // Use Bible API (free, no authentication required)
                        const response = await fetch(`https://bible-api.com/${encodeURIComponent(reference)}?translation=web`);
                        if (!response.ok) {
                            throw new Error("Verse not found");
                        }
                        const data = await response.json();
                        setVerse({
                            book: data.verses[0].book_name,
                            chapter: data.verses[0].chapter,
                            verses: `${data.verses[0].chapter}:${data.verses[0].verse}-${data.verses[data.verses.length - 1].verse}`,
                            text: data.text,
                            loading: false,
                            error: null
                        });
                    } catch (err) {
                        setVerse({
                            "useBibleVerses.useEffect.fetchVerse": (prev)=>({
                                    ...prev,
                                    loading: false,
                                    error: err instanceof Error ? err.message : "Failed to load verse"
                                })
                        }["useBibleVerses.useEffect.fetchVerse"]);
                    }
                }
            }["useBibleVerses.useEffect.fetchVerse"];
            if (reference) {
                fetchVerse();
            }
        }
    }["useBibleVerses.useEffect"], [
        reference
    ]);
    return verse;
};
_s(useBibleVerses, "mVcazXjCek0j+z2SrEnmBloXIjY=");
const fetchDayVerses = async (otRef, ntRef, psRef, prRef)=>{
    try {
        const results = await Promise.all([
            fetch(`https://bible-api.com/${encodeURIComponent(otRef)}?translation=web`),
            fetch(`https://bible-api.com/${encodeURIComponent(ntRef)}?translation=web`),
            fetch(`https://bible-api.com/${encodeURIComponent(psRef)}?translation=web`),
            fetch(`https://bible-api.com/${encodeURIComponent(prRef)}?translation=web`)
        ]);
        const data = await Promise.all(results.map((r)=>r.json()));
        return {
            ot: data[0].text,
            nt: data[1].text,
            ps: data[2].text,
            pr: data[3].text
        };
    } catch (err) {
        console.error("Failed to fetch verses:", err);
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useReaders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useProgress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useCurrentReader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useCurrentReader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useBibleVerses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useBibleVerses.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NameGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NameGate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TodayTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TodayTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PlanTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PlanTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GroupTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GroupTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReportTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ReportTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useReaders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useProgress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useCurrentReader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useCurrentReader.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Home() {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('today');
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refreshTrigger, setRefreshTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { currentReader, setCurrentReader } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useCurrentReader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentReader"])();
    const { readers, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReaders"])();
    const { progress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgress"])();
    const handleRefresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleRefresh]": ()=>{
            setRefreshTrigger({
                "Home.useCallback[handleRefresh]": (prev)=>prev + 1
            }["Home.useCallback[handleRefresh]"]);
        }
    }["Home.useCallback[handleRefresh]"], []);
    if (!currentReader) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NameGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NameGate"], {
            readers: readers,
            onSelectReader: setCurrentReader,
            loading: loading
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    const handleSwitchReader = (newReader)=>{
        setCurrentReader(newReader);
        setMenuOpen(false);
        setTab('today');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-parchment",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                currentReader: currentReader,
                readers: readers,
                progress: progress,
                onOpenMenu: ()=>setMenuOpen(!menuOpen)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b-2 border-gold",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md mx-auto px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-3",
                            children: "Switch reader:"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 mb-4",
                            children: readers.map((reader)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSwitchReader(reader.name),
                                    className: `w-full text-left px-4 py-2 rounded transition-colors ${reader.name === currentReader ? 'bg-gold text-white font-medium' : 'bg-gray-100 text-ink hover:bg-gray-200'}`,
                                    children: reader.name
                                }, reader.name, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setCurrentReader(null);
                                setMenuOpen(false);
                            },
                            className: "w-full px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm",
                            children: "Sign Out"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto px-5 sm:px-6 pt-4 sm:pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 pb-20",
                    children: [
                        tab === 'today' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TodayTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TodayTab"], {
                            currentReader: currentReader,
                            readers: readers,
                            progress: progress,
                            onRefresh: handleRefresh
                        }, refreshTrigger, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        tab === 'plan' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PlanTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlanTab"], {
                            currentReader: currentReader,
                            progress: progress,
                            onSelectDay: (day)=>{
                                setTab('today');
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        tab === 'group' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GroupTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupTab"], {
                            currentReader: currentReader,
                            readers: readers,
                            progress: progress
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        tab === 'report' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReportTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReportTab"], {
                            readers: readers,
                            progress: progress
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gold",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md mx-auto flex items-center justify-around text-sm sm:text-base",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setTab('today'),
                            className: `flex-1 py-3 sm:py-4 font-medium transition-colors min-h-[44px] flex items-center justify-center ${tab === 'today' ? 'text-gold border-t-2 border-gold' : 'text-ink hover:text-gold'}`,
                            children: "Today"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setTab('plan'),
                            className: `flex-1 py-3 sm:py-4 font-medium transition-colors min-h-[44px] flex items-center justify-center ${tab === 'plan' ? 'text-gold border-t-2 border-gold' : 'text-ink hover:text-gold'}`,
                            children: "Plan"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setTab('group'),
                            className: `flex-1 py-3 sm:py-4 font-medium transition-colors min-h-[44px] flex items-center justify-center ${tab === 'group' ? 'text-gold border-t-2 border-gold' : 'text-ink hover:text-gold'}`,
                            children: "Group"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setTab('report'),
                            className: `flex-1 py-3 sm:py-4 font-medium transition-colors min-h-[44px] flex items-center justify-center ${tab === 'report' ? 'text-gold border-t-2 border-gold' : 'text-ink hover:text-gold'}`,
                            children: "Report"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-24"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Home, "7JrHFYwfmje138RNx5tjIjGJY5E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useCurrentReader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentReader"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReaders"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgress"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_0ydhp_q._.js.map