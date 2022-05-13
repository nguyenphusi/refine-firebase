"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAuth = void 0;
var auth_1 = require("firebase/auth");
var FirebaseAuth = /** @class */ (function () {
    function FirebaseAuth(authActions, firebaseApp) {
        this.auth = (0, auth_1.getAuth)(firebaseApp);
        this.auth.useDeviceLanguage();
        this.getAuthProvider = this.getAuthProvider.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleResetPassword = this.handleResetPassword.bind(this);
        this.onUpdateUserData = this.onUpdateUserData.bind(this);
        this.getUserIdentity = this.getUserIdentity.bind(this);
        this.handleCheckAuth = this.handleCheckAuth.bind(this);
        this.createRecaptcha = this.createRecaptcha.bind(this);
        this.getPermissions = this.getPermissions.bind(this);
        this.authActions = authActions;
    }
    FirebaseAuth.prototype.handleLogOut = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, auth_1.signOut)(this.auth)];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, ((_b = (_a = this.authActions) === null || _a === void 0 ? void 0 : _a.onLogout) === null || _b === void 0 ? void 0 : _b.call(_a, this.auth))];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FirebaseAuth.prototype.handleRegister = function (args) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var email, password, displayName, userCredential, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 6, , 7]);
                        email = args.email, password = args.password, displayName = args.displayName;
                        return [4 /*yield*/, (0, auth_1.createUserWithEmailAndPassword)(this.auth, email, password)];
                    case 1:
                        userCredential = _c.sent();
                        return [4 /*yield*/, (0, auth_1.sendEmailVerification)(userCredential.user)];
                    case 2:
                        _c.sent();
                        if (!userCredential.user) return [3 /*break*/, 5];
                        if (!displayName) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, auth_1.updateProfile)(userCredential.user, { displayName: displayName })];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        (_b = (_a = this.authActions) === null || _a === void 0 ? void 0 : _a.onRegister) === null || _b === void 0 ? void 0 : _b.call(_a, userCredential.user);
                        _c.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _c.sent();
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseAuth.prototype.handleLogIn = function (_a) {
        var _b, _c, _d, _e;
        var email = _a.email, password = _a.password, remember = _a.remember;
        return __awaiter(this, void 0, void 0, function () {
            var userCredential, userToken, error_2;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 6, , 7]);
                        if (!this.auth) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.auth.setPersistence(remember ? auth_1.browserLocalPersistence : auth_1.browserSessionPersistence)];
                    case 1:
                        _f.sent();
                        return [4 /*yield*/, (0, auth_1.signInWithEmailAndPassword)(this.auth, email, password)];
                    case 2:
                        userCredential = _f.sent();
                        return [4 /*yield*/, ((_c = (_b = userCredential === null || userCredential === void 0 ? void 0 : userCredential.user) === null || _b === void 0 ? void 0 : _b.getIdToken) === null || _c === void 0 ? void 0 : _c.call(_b))];
                    case 3:
                        userToken = _f.sent();
                        if (userToken) {
                            (_e = (_d = this.authActions) === null || _d === void 0 ? void 0 : _d.onLogin) === null || _e === void 0 ? void 0 : _e.call(_d, userCredential.user);
                        }
                        else {
                            return [2 /*return*/, Promise.reject()];
                        }
                        return [3 /*break*/, 5];
                    case 4: return [2 /*return*/, Promise.reject()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _f.sent();
                        return [2 /*return*/, Promise.reject(error_2)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseAuth.prototype.handleResetPassword = function (email) {
        return (0, auth_1.sendPasswordResetEmail)(this.auth, email);
    };
    FirebaseAuth.prototype.onUpdateUserData = function (args) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var displayName, email, password, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        if (!((_a = this.auth) === null || _a === void 0 ? void 0 : _a.currentUser)) return [3 /*break*/, 6];
                        displayName = args.displayName, email = args.email, password = args.password;
                        if (!password) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, auth_1.updatePassword)(this.auth.currentUser, password)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(email && this.auth.currentUser.email !== email)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, auth_1.updateEmail)(this.auth.currentUser, email)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        if (!(displayName && this.auth.currentUser.displayName !== displayName)) return [3 /*break*/, 6];
                        return [4 /*yield*/, (0, auth_1.updateProfile)(this.auth.currentUser, { displayName: displayName })];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_3 = _b.sent();
                        return [2 /*return*/, Promise.reject(error_3)];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseAuth.prototype.getUserIdentity = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_b) {
                user = (_a = this.auth) === null || _a === void 0 ? void 0 : _a.currentUser;
                return [2 /*return*/, __assign(__assign({}, this.auth.currentUser), { email: (user === null || user === void 0 ? void 0 : user.email) || "", name: (user === null || user === void 0 ? void 0 : user.displayName) || "" })];
            });
        });
    };
    FirebaseAuth.prototype.handleCheckAuth = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if ((_a = this.auth) === null || _a === void 0 ? void 0 : _a.currentUser) {
                    return [2 /*return*/, Promise.resolve()];
                }
                else {
                    return [2 /*return*/, Promise.reject("User is not found")];
                }
                return [2 /*return*/];
            });
        });
    };
    FirebaseAuth.prototype.getPermissions = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var idTokenResult;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!((_a = this.auth) === null || _a === void 0 ? void 0 : _a.currentUser)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, auth_1.getIdTokenResult)(this.auth.currentUser)];
                    case 1:
                        idTokenResult = _b.sent();
                        return [2 /*return*/, idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.claims];
                    case 2: return [2 /*return*/, Promise.reject("User is not found")];
                }
            });
        });
    };
    FirebaseAuth.prototype.createRecaptcha = function (containerOrId, parameters) {
        return new auth_1.RecaptchaVerifier(containerOrId, parameters, this.auth);
    };
    FirebaseAuth.prototype.getAuthProvider = function () {
        return {
            login: this.handleLogIn,
            logout: this.handleLogOut,
            checkAuth: this.handleCheckAuth,
            checkError: function () { return Promise.resolve(); },
            getPermissions: this.getPermissions,
            getUserIdentity: this.getUserIdentity,
        };
    };
    return FirebaseAuth;
}());
exports.FirebaseAuth = FirebaseAuth;
