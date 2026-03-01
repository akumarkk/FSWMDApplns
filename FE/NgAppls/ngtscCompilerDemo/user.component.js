import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class UserComponent {
    constructor() {
        this.name = 'Guest';
        this.status = 'Active';
    }
}
UserComponent.ɵfac = function UserComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserComponent)(); };
UserComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserComponent, selectors: [["app-user"]], inputs: { name: "name" }, decls: 5, vars: 2, consts: [[1, "profile"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵdomElementStart(0, "div", 0)(1, "h2");
        i0.ɵɵtext(2);
        i0.ɵɵdomElementEnd();
        i0.ɵɵdomElementStart(3, "p");
        i0.ɵɵtext(4);
        i0.ɵɵdomElementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.name);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Status: ", ctx.status);
    } }, encapsulation: 2 });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserComponent, [{
        type: Component,
        args: [{
                selector: 'app-user',
                template: `
    <div class="profile">
      <h2>{{ name }}</h2>
      <p>Status: {{ status }}</p>
    </div>
  `
            }]
    }], null, { name: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserComponent, { className: "UserComponent", filePath: "user.component.ts", lineNumber: 12 }); })();
