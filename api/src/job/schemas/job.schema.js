"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSchema = exports.Job = exports.Location = exports.Coordinates = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose = require("mongoose");
var Coordinates = exports.Coordinates = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _coordinates_decorators;
    var _coordinates_initializers = [];
    var Coordinates = _classThis = /** @class */ (function () {
        function Coordinates_1() {
            this.type = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _type_initializers, void 0));
            this.coordinates = __runInitializers(this, _coordinates_initializers, void 0);
        }
        return Coordinates_1;
    }());
    __setFunctionName(_classThis, "Coordinates");
    (function () {
        _type_decorators = [(0, mongoose_1.Prop)()];
        _coordinates_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } } }, _type_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _coordinates_decorators, { kind: "field", name: "coordinates", static: false, private: false, access: { has: function (obj) { return "coordinates" in obj; }, get: function (obj) { return obj.coordinates; }, set: function (obj, value) { obj.coordinates = value; } } }, _coordinates_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Coordinates = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Coordinates = _classThis;
}();
var Location = exports.Location = function () {
    var _classDecorators_1 = [(0, mongoose_1.Schema)()];
    var _classDescriptor_1;
    var _classExtraInitializers_1 = [];
    var _classThis_1;
    var _instanceExtraInitializers_1 = [];
    var _lat_decorators;
    var _lat_initializers = [];
    var _lon_decorators;
    var _lon_initializers = [];
    var _coordinares_decorators;
    var _coordinares_initializers = [];
    var Location = _classThis_1 = /** @class */ (function () {
        function Location_1() {
            this.lat = (__runInitializers(this, _instanceExtraInitializers_1), __runInitializers(this, _lat_initializers, void 0));
            this.lon = __runInitializers(this, _lon_initializers, void 0);
            this.coordinares = __runInitializers(this, _coordinares_initializers, void 0);
        }
        return Location_1;
    }());
    __setFunctionName(_classThis_1, "Location");
    (function () {
        _lat_decorators = [(0, mongoose_1.Prop)()];
        _lon_decorators = [(0, mongoose_1.Prop)()];
        _coordinares_decorators = [(0, mongoose_1.Prop)({ type: Coordinates })];
        __esDecorate(null, null, _lat_decorators, { kind: "field", name: "lat", static: false, private: false, access: { has: function (obj) { return "lat" in obj; }, get: function (obj) { return obj.lat; }, set: function (obj, value) { obj.lat = value; } } }, _lat_initializers, _instanceExtraInitializers_1);
        __esDecorate(null, null, _lon_decorators, { kind: "field", name: "lon", static: false, private: false, access: { has: function (obj) { return "lon" in obj; }, get: function (obj) { return obj.lon; }, set: function (obj, value) { obj.lon = value; } } }, _lon_initializers, _instanceExtraInitializers_1);
        __esDecorate(null, null, _coordinares_decorators, { kind: "field", name: "coordinares", static: false, private: false, access: { has: function (obj) { return "coordinares" in obj; }, get: function (obj) { return obj.coordinares; }, set: function (obj, value) { obj.coordinares = value; } } }, _coordinares_initializers, _instanceExtraInitializers_1);
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        Location = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return Location = _classThis_1;
}();
var Job = exports.Job = function () {
    var _classDecorators_2 = [(0, mongoose_1.Schema)()];
    var _classDescriptor_2;
    var _classExtraInitializers_2 = [];
    var _classThis_2;
    var _instanceExtraInitializers_2 = [];
    var _body_decorators;
    var _body_initializers = [];
    var _career_area_name_decorators;
    var _career_area_name_initializers = [];
    var _city_name_decorators;
    var _city_name_initializers = [];
    var _company_name_decorators;
    var _company_name_initializers = [];
    var _company_raw_decorators;
    var _company_raw_initializers = [];
    var _edulevels_name_decorators;
    var _edulevels_name_initializers = [];
    var _employment_type_name_decorators;
    var _employment_type_name_initializers = [];
    var _location_decorators;
    var _location_initializers = [];
    var _max_salary_decorators;
    var _max_salary_initializers = [];
    var _min_edulevels_name_decorators;
    var _min_edulevels_name_initializers = [];
    var _min_salary_decorators;
    var _min_salary_initializers = [];
    var _min_years_experience_decorators;
    var _min_years_experience_initializers = [];
    var _onet_decorators;
    var _onet_initializers = [];
    var _onet_name_decorators;
    var _onet_name_initializers = [];
    var _posted_decorators;
    var _posted_initializers = [];
    var _remote_type_decorators;
    var _remote_type_initializers = [];
    var _remote_type_name_decorators;
    var _remote_type_name_initializers = [];
    var _salary_decorators;
    var _salary_initializers = [];
    var _score_decorators;
    var _score_initializers = [];
    var _skills_name_decorators;
    var _skills_name_initializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_name_decorators;
    var _title_name_initializers = [];
    var _title_raw_decorators;
    var _title_raw_initializers = [];
    var _url_decorators;
    var _url_initializers = [];
    var _riasec_decorators;
    var _riasec_initializers = [];
    var _is_earn_and_learn_decorators;
    var _is_earn_and_learn_initializers = [];
    var _is_gateway_job_decorators;
    var _is_gateway_job_initializers = [];
    var _expiredAt_decorators;
    var _expiredAt_initializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var Job = _classThis_2 = /** @class */ (function () {
        function Job_1() {
            this.body = (__runInitializers(this, _instanceExtraInitializers_2), __runInitializers(this, _body_initializers, void 0));
            this.career_area_name = __runInitializers(this, _career_area_name_initializers, void 0);
            this.city_name = __runInitializers(this, _city_name_initializers, void 0);
            this.company_name = __runInitializers(this, _company_name_initializers, void 0);
            this.company_raw = __runInitializers(this, _company_raw_initializers, void 0);
            this.edulevels_name = __runInitializers(this, _edulevels_name_initializers, void 0);
            this.employment_type_name = __runInitializers(this, _employment_type_name_initializers, void 0);
            this.location = __runInitializers(this, _location_initializers, void 0);
            this.max_salary = __runInitializers(this, _max_salary_initializers, void 0);
            this.min_edulevels_name = __runInitializers(this, _min_edulevels_name_initializers, void 0);
            this.min_salary = __runInitializers(this, _min_salary_initializers, void 0);
            this.min_years_experience = __runInitializers(this, _min_years_experience_initializers, void 0);
            this.onet = __runInitializers(this, _onet_initializers, void 0);
            this.onet_name = __runInitializers(this, _onet_name_initializers, void 0);
            this.posted = __runInitializers(this, _posted_initializers, void 0);
            this.remote_type = __runInitializers(this, _remote_type_initializers, void 0);
            this.remote_type_name = __runInitializers(this, _remote_type_name_initializers, void 0);
            this.salary = __runInitializers(this, _salary_initializers, void 0);
            this.score = __runInitializers(this, _score_initializers, void 0);
            this.skills_name = __runInitializers(this, _skills_name_initializers, void 0);
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.title_name = __runInitializers(this, _title_name_initializers, void 0);
            this.title_raw = __runInitializers(this, _title_raw_initializers, void 0);
            this.url = __runInitializers(this, _url_initializers, void 0);
            this.riasec = __runInitializers(this, _riasec_initializers, void 0);
            this.is_earn_and_learn = __runInitializers(this, _is_earn_and_learn_initializers, void 0);
            this.is_gateway_job = __runInitializers(this, _is_gateway_job_initializers, void 0);
            this.expiredAt = __runInitializers(this, _expiredAt_initializers, void 0);
            this.createdAt = __runInitializers(this, _createdAt_initializers, void 0);
            this.updatedAt = __runInitializers(this, _updatedAt_initializers, void 0);
        }
        return Job_1;
    }());
    __setFunctionName(_classThis_2, "Job");
    (function () {
        _body_decorators = [(0, mongoose_1.Prop)()];
        _career_area_name_decorators = [(0, mongoose_1.Prop)()];
        _city_name_decorators = [(0, mongoose_1.Prop)()];
        _company_name_decorators = [(0, mongoose_1.Prop)()];
        _company_raw_decorators = [(0, mongoose_1.Prop)()];
        _edulevels_name_decorators = [(0, mongoose_1.Prop)({ type: [Object] })];
        _employment_type_name_decorators = [(0, mongoose_1.Prop)()];
        _location_decorators = [(0, mongoose_1.Prop)()];
        _max_salary_decorators = [(0, mongoose_1.Prop)()];
        _min_edulevels_name_decorators = [(0, mongoose_1.Prop)()];
        _min_salary_decorators = [(0, mongoose_1.Prop)()];
        _min_years_experience_decorators = [(0, mongoose_1.Prop)()];
        _onet_decorators = [(0, mongoose_1.Prop)()];
        _onet_name_decorators = [(0, mongoose_1.Prop)()];
        _posted_decorators = [(0, mongoose_1.Prop)()];
        _remote_type_decorators = [(0, mongoose_1.Prop)()];
        _remote_type_name_decorators = [(0, mongoose_1.Prop)()];
        _salary_decorators = [(0, mongoose_1.Prop)({ type: Number, nullable: true })];
        _score_decorators = [(0, mongoose_1.Prop)()];
        _skills_name_decorators = [(0, mongoose_1.Prop)({ type: [Object] })];
        _title_decorators = [(0, mongoose_1.Prop)()];
        _title_name_decorators = [(0, mongoose_1.Prop)()];
        _title_raw_decorators = [(0, mongoose_1.Prop)()];
        _url_decorators = [(0, mongoose_1.Prop)({ type: [Object] })];
        _riasec_decorators = [(0, mongoose_1.Prop)()];
        _is_earn_and_learn_decorators = [(0, mongoose_1.Prop)()];
        _is_gateway_job_decorators = [(0, mongoose_1.Prop)()];
        _expiredAt_decorators = [(0, mongoose_1.Prop)({ type: mongoose.Schema.Types.Date, nullable: true })];
        _createdAt_decorators = [(0, mongoose_1.Prop)()];
        _updatedAt_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _body_decorators, { kind: "field", name: "body", static: false, private: false, access: { has: function (obj) { return "body" in obj; }, get: function (obj) { return obj.body; }, set: function (obj, value) { obj.body = value; } } }, _body_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _career_area_name_decorators, { kind: "field", name: "career_area_name", static: false, private: false, access: { has: function (obj) { return "career_area_name" in obj; }, get: function (obj) { return obj.career_area_name; }, set: function (obj, value) { obj.career_area_name = value; } } }, _career_area_name_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _city_name_decorators, { kind: "field", name: "city_name", static: false, private: false, access: { has: function (obj) { return "city_name" in obj; }, get: function (obj) { return obj.city_name; }, set: function (obj, value) { obj.city_name = value; } } }, _city_name_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _company_name_decorators, { kind: "field", name: "company_name", static: false, private: false, access: { has: function (obj) { return "company_name" in obj; }, get: function (obj) { return obj.company_name; }, set: function (obj, value) { obj.company_name = value; } } }, _company_name_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _company_raw_decorators, { kind: "field", name: "company_raw", static: false, private: false, access: { has: function (obj) { return "company_raw" in obj; }, get: function (obj) { return obj.company_raw; }, set: function (obj, value) { obj.company_raw = value; } } }, _company_raw_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _edulevels_name_decorators, { kind: "field", name: "edulevels_name", static: false, private: false, access: { has: function (obj) { return "edulevels_name" in obj; }, get: function (obj) { return obj.edulevels_name; }, set: function (obj, value) { obj.edulevels_name = value; } } }, _edulevels_name_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _employment_type_name_decorators, { kind: "field", name: "employment_type_name", static: false, private: false, access: { has: function (obj) { return "employment_type_name" in obj; }, get: function (obj) { return obj.employment_type_name; }, set: function (obj, value) { obj.employment_type_name = value; } } }, _employment_type_name_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: function (obj) { return "location" in obj; }, get: function (obj) { return obj.location; }, set: function (obj, value) { obj.location = value; } } }, _location_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _max_salary_decorators, { kind: "field", name: "max_salary", static: false, private: false, access: { has: function (obj) { return "max_salary" in obj; }, get: function (obj) { return obj.max_salary; }, set: function (obj, value) { obj.max_salary = value; } } }, _max_salary_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _min_edulevels_name_decorators, { kind: "field", name: "min_edulevels_name", static: false, private: false, access: { has: function (obj) { return "min_edulevels_name" in obj; }, get: function (obj) { return obj.min_edulevels_name; }, set: function (obj, value) { obj.min_edulevels_name = value; } } }, _min_edulevels_name_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _min_salary_decorators, { kind: "field", name: "min_salary", static: false, private: false, access: { has: function (obj) { return "min_salary" in obj; }, get: function (obj) { return obj.min_salary; }, set: function (obj, value) { obj.min_salary = value; } } }, _min_salary_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _min_years_experience_decorators, { kind: "field", name: "min_years_experience", static: false, private: false, access: { has: function (obj) { return "min_years_experience" in obj; }, get: function (obj) { return obj.min_years_experience; }, set: function (obj, value) { obj.min_years_experience = value; } } }, _min_years_experience_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _onet_decorators, { kind: "field", name: "onet", static: false, private: false, access: { has: function (obj) { return "onet" in obj; }, get: function (obj) { return obj.onet; }, set: function (obj, value) { obj.onet = value; } } }, _onet_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _onet_name_decorators, { kind: "field", name: "onet_name", static: false, private: false, access: { has: function (obj) { return "onet_name" in obj; }, get: function (obj) { return obj.onet_name; }, set: function (obj, value) { obj.onet_name = value; } } }, _onet_name_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _posted_decorators, { kind: "field", name: "posted", static: false, private: false, access: { has: function (obj) { return "posted" in obj; }, get: function (obj) { return obj.posted; }, set: function (obj, value) { obj.posted = value; } } }, _posted_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _remote_type_decorators, { kind: "field", name: "remote_type", static: false, private: false, access: { has: function (obj) { return "remote_type" in obj; }, get: function (obj) { return obj.remote_type; }, set: function (obj, value) { obj.remote_type = value; } } }, _remote_type_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _remote_type_name_decorators, { kind: "field", name: "remote_type_name", static: false, private: false, access: { has: function (obj) { return "remote_type_name" in obj; }, get: function (obj) { return obj.remote_type_name; }, set: function (obj, value) { obj.remote_type_name = value; } } }, _remote_type_name_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _salary_decorators, { kind: "field", name: "salary", static: false, private: false, access: { has: function (obj) { return "salary" in obj; }, get: function (obj) { return obj.salary; }, set: function (obj, value) { obj.salary = value; } } }, _salary_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _score_decorators, { kind: "field", name: "score", static: false, private: false, access: { has: function (obj) { return "score" in obj; }, get: function (obj) { return obj.score; }, set: function (obj, value) { obj.score = value; } } }, _score_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _skills_name_decorators, { kind: "field", name: "skills_name", static: false, private: false, access: { has: function (obj) { return "skills_name" in obj; }, get: function (obj) { return obj.skills_name; }, set: function (obj, value) { obj.skills_name = value; } } }, _skills_name_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } } }, _title_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _title_name_decorators, { kind: "field", name: "title_name", static: false, private: false, access: { has: function (obj) { return "title_name" in obj; }, get: function (obj) { return obj.title_name; }, set: function (obj, value) { obj.title_name = value; } } }, _title_name_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _title_raw_decorators, { kind: "field", name: "title_raw", static: false, private: false, access: { has: function (obj) { return "title_raw" in obj; }, get: function (obj) { return obj.title_raw; }, set: function (obj, value) { obj.title_raw = value; } } }, _title_raw_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } } }, _url_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _riasec_decorators, { kind: "field", name: "riasec", static: false, private: false, access: { has: function (obj) { return "riasec" in obj; }, get: function (obj) { return obj.riasec; }, set: function (obj, value) { obj.riasec = value; } } }, _riasec_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _is_earn_and_learn_decorators, { kind: "field", name: "is_earn_and_learn", static: false, private: false, access: { has: function (obj) { return "is_earn_and_learn" in obj; }, get: function (obj) { return obj.is_earn_and_learn; }, set: function (obj, value) { obj.is_earn_and_learn = value; } } }, _is_earn_and_learn_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _is_gateway_job_decorators, { kind: "field", name: "is_gateway_job", static: false, private: false, access: { has: function (obj) { return "is_gateway_job" in obj; }, get: function (obj) { return obj.is_gateway_job; }, set: function (obj, value) { obj.is_gateway_job = value; } } }, _is_gateway_job_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _expiredAt_decorators, { kind: "field", name: "expiredAt", static: false, private: false, access: { has: function (obj) { return "expiredAt" in obj; }, get: function (obj) { return obj.expiredAt; }, set: function (obj, value) { obj.expiredAt = value; } } }, _expiredAt_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } } }, _createdAt_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } } }, _updatedAt_initializers, _instanceExtraInitializers_2);
        __esDecorate(null, _classDescriptor_2 = { value: _classThis_2 }, _classDecorators_2, { kind: "class", name: _classThis_2.name }, null, _classExtraInitializers_2);
        Job = _classThis_2 = _classDescriptor_2.value;
        __runInitializers(_classThis_2, _classExtraInitializers_2);
    })();
    return Job = _classThis_2;
}();
exports.JobSchema = mongoose_1.SchemaFactory.createForClass(Job);
