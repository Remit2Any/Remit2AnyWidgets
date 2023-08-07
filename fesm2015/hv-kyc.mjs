import * as i0 from '@angular/core';
import { Injectable, Inject, Component, ViewChild, Input, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';

var KYCStatus;
(function (KYCStatus) {
    // Not started before
    KYCStatus["not_started"] = "not_started";
    // started
    KYCStatus["started"] = "started";
    // KYC verification issue
    KYCStatus["user_cancelled"] = "user_cancelled";
    KYCStatus["error"] = "error";
    // No actions from user, Waiting on us to review and verify
    KYCStatus["needs_review"] = "needs_review";
    // Manual approval steps
    KYCStatus["manually_approved"] = "manually_approved";
    KYCStatus["auto_approved"] = "auto_approved";
    // Start KYC process again
    KYCStatus["manually_declined"] = "manually_declined";
    KYCStatus["auto_declined"] = "auto_declined";
})(KYCStatus || (KYCStatus = {}));

class ScriptService {
    constructor(document) {
        this.document = document;
    }
    /**
     * Append the JS tag to the Document Body.
     * @param renderer The Angular Renderer
     * @param src The path to the script
     * @returns the script element
     */
    loadJsScript(renderer, src) {
        const script = renderer.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        renderer.appendChild(this.document.body, script);
        return script;
    }
}
ScriptService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ScriptService, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
ScriptService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ScriptService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ScriptService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () {
        return [{ type: Document, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }];
    } });

const SCRIPT_PATH = 'https://hv-camera-web-sg.s3-ap-southeast-1.amazonaws.com/hyperverge-web-sdk@5.2.8/src/sdk.min.js';
class HvKycComponent {
    constructor(_changeDetectorRef, renderer, scriptService) {
        this._changeDetectorRef = _changeDetectorRef;
        this.renderer = renderer;
        this.scriptService = scriptService;
        this.kycBtn = false;
        this.KYCStatus = KYCStatus;
        this.onSuccess = () => { console.log("default implementation"); };
        this.onFailure = () => { console.log("default implementation"); };
        this.serverError = false;
        this.kycWidgetHandler = (HyperKycResult) => {
            if (HyperKycResult.status === "user_cancelled") {
                this.onFailure(HyperKycResult);
            }
            // Some error with the flow like token expired
            if (HyperKycResult.status === "error") {
                this.onFailure(HyperKycResult);
            }
            // Auto approved
            if (HyperKycResult.status === "auto_approved") {
                this.onSuccess(HyperKycResult);
            }
        };
    }
    ngOnInit() {
        const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH);
    }
    goBack(value) {
        this.kycStep = value;
        this.kycBtn = false;
    }
    startKYCProcess(token, kycUniqueReferenceId) {
        this.launchHyperVerge(token, kycUniqueReferenceId);
    }
    setStateKYC(response) {
        this.kycStep = response.kycStatus;
        this.kycBtn = false;
        switch (this.kycStep) {
            case KYCStatus.manually_approved:
                this.kycBtn = true;
                break;
            case KYCStatus.auto_approved:
                this.kycBtn = true;
                break;
        }
    }
    launchHyperVerge(token, uuid) {
        // @ts-ignore
        const hyperKycConfig = new HyperKycConfig(token, 'digilocker-DBcheck', uuid);
        window.HyperKYCModule.launch(hyperKycConfig, this.kycWidgetHandler);
    }
}
HvKycComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HvKycComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: ScriptService }], target: i0.ɵɵFactoryTarget.Component });
HvKycComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: HvKycComponent, selector: "remit2any-hv-kyc", inputs: { onSuccess: "onSuccess", onFailure: "onFailure", kycInputs: "kycInputs" }, viewQueries: [{ propertyName: "not_started", first: true, predicate: ["not_started"], descendants: true }, { propertyName: "started", first: true, predicate: ["started"], descendants: true }, { propertyName: "user_cancelled", first: true, predicate: ["user_cancelled"], descendants: true }, { propertyName: "auto_approved", first: true, predicate: ["auto_approved"], descendants: true }, { propertyName: "manually_approved", first: true, predicate: ["manually_approved"], descendants: true }, { propertyName: "needs_review", first: true, predicate: ["needs_review"], descendants: true }, { propertyName: "error", first: true, predicate: ["error"], descendants: true }, { propertyName: "auto_declined", first: true, predicate: ["auto_declined"], descendants: true }, { propertyName: "manually_declined", first: true, predicate: ["manually_declined"], descendants: true }], ngImport: i0, template: "<button type=\"button\"\n  (click)=\"startKYCProcess(kycInputs.authToken, kycInputs.kycUniqueReferenceId)\"\n  [class]=\"kycInputs.cssClassNames\"\n  >\n\n  {{kycInputs.label}}\n</button>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HvKycComponent, decorators: [{
            type: Component,
            args: [{ selector: 'remit2any-hv-kyc', template: "<button type=\"button\"\n  (click)=\"startKYCProcess(kycInputs.authToken, kycInputs.kycUniqueReferenceId)\"\n  [class]=\"kycInputs.cssClassNames\"\n  >\n\n  {{kycInputs.label}}\n</button>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: ScriptService }]; }, propDecorators: { not_started: [{
                type: ViewChild,
                args: ['not_started']
            }], started: [{
                type: ViewChild,
                args: ['started']
            }], user_cancelled: [{
                type: ViewChild,
                args: ['user_cancelled']
            }], auto_approved: [{
                type: ViewChild,
                args: ['auto_approved']
            }], manually_approved: [{
                type: ViewChild,
                args: ['manually_approved']
            }], needs_review: [{
                type: ViewChild,
                args: ['needs_review']
            }], error: [{
                type: ViewChild,
                args: ['error']
            }], auto_declined: [{
                type: ViewChild,
                args: ['auto_declined']
            }], manually_declined: [{
                type: ViewChild,
                args: ['manually_declined']
            }], onSuccess: [{
                type: Input
            }], onFailure: [{
                type: Input
            }], kycInputs: [{
                type: Input
            }] } });

class HvKycModule {
}
HvKycModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HvKycModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HvKycModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: HvKycModule, declarations: [HvKycComponent], imports: [CommonModule], exports: [HvKycComponent] });
HvKycModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HvKycModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HvKycModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HvKycComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        HvKycComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of hv-kyc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HvKycComponent, HvKycModule };
//# sourceMappingURL=hv-kyc.mjs.map
