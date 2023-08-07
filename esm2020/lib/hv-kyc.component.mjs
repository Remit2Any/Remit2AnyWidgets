import { Component, Input, ViewChild, } from '@angular/core';
import { KYCStatus, } from './hv-kyc-model';
import * as i0 from "@angular/core";
import * as i1 from "./script.service";
const SCRIPT_PATH = 'https://hv-camera-web-sg.s3-ap-southeast-1.amazonaws.com/hyperverge-web-sdk@5.2.8/src/sdk.min.js';
export class HvKycComponent {
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
HvKycComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HvKycComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i1.ScriptService }], target: i0.ɵɵFactoryTarget.Component });
HvKycComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: HvKycComponent, selector: "remit2any-hv-kyc", inputs: { onSuccess: "onSuccess", onFailure: "onFailure", kycInputs: "kycInputs" }, viewQueries: [{ propertyName: "not_started", first: true, predicate: ["not_started"], descendants: true }, { propertyName: "started", first: true, predicate: ["started"], descendants: true }, { propertyName: "user_cancelled", first: true, predicate: ["user_cancelled"], descendants: true }, { propertyName: "auto_approved", first: true, predicate: ["auto_approved"], descendants: true }, { propertyName: "manually_approved", first: true, predicate: ["manually_approved"], descendants: true }, { propertyName: "needs_review", first: true, predicate: ["needs_review"], descendants: true }, { propertyName: "error", first: true, predicate: ["error"], descendants: true }, { propertyName: "auto_declined", first: true, predicate: ["auto_declined"], descendants: true }, { propertyName: "manually_declined", first: true, predicate: ["manually_declined"], descendants: true }], ngImport: i0, template: "<button type=\"button\"\n  (click)=\"startKYCProcess(kycInputs.authToken, kycInputs.kycUniqueReferenceId)\"\n  [class]=\"kycInputs.cssClassNames\"\n  >\n\n  {{kycInputs.label}}\n</button>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HvKycComponent, decorators: [{
            type: Component,
            args: [{ selector: 'remit2any-hv-kyc', template: "<button type=\"button\"\n  (click)=\"startKYCProcess(kycInputs.authToken, kycInputs.kycUniqueReferenceId)\"\n  [class]=\"kycInputs.cssClassNames\"\n  >\n\n  {{kycInputs.label}}\n</button>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.ScriptService }]; }, propDecorators: { not_started: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHYta3ljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2h2LWt5Yy9zcmMvbGliL2h2LWt5Yy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9odi1reWMvc3JjL2xpYi9odi1reWMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxLQUFLLEVBS0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFLTCxTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3hCLE1BQU0sV0FBVyxHQUFHLGtHQUFrRyxDQUFDO0FBUXZILE1BQU0sT0FBTyxjQUFjO0lBc0J6QixZQUNtQixrQkFBcUMsRUFDOUMsUUFBbUIsRUFDbkIsYUFBNEI7UUFGbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBdEIvQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFXcEIsY0FBUyxHQUF3QixHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7UUFDakYsY0FBUyxHQUF3QixHQUFHLEVBQUUsR0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUM7UUFJakYsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFrQzVCLHFCQUFnQixHQUFHLENBQUMsY0FBbUIsRUFBRSxFQUFFO1lBRS9DLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNoQztZQUVELDhDQUE4QztZQUM5QyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsZ0JBQWdCO1lBQ2hCLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxlQUFlLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDbEM7UUFDTCxDQUFDLENBQUM7SUEzQ0UsQ0FBQztJQUVMLFFBQVE7UUFDTixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBZ0I7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxLQUFhLEVBQUUsb0JBQTRCO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sV0FBVyxDQUFDLFFBQWE7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFFBQVEsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNwQixLQUFLLFNBQVMsQ0FBQyxpQkFBaUI7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsYUFBYTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLE1BQU07U0FDVDtJQUNILENBQUM7SUFtQk8sZ0JBQWdCLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDbEQsYUFBYTtRQUNiLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUN2QyxLQUFLLEVBQ0wsb0JBQW9CLEVBQ3BCLElBQUksQ0FDTCxDQUFDO1FBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7OzJHQS9FVSxjQUFjOytGQUFkLGNBQWMsby9CQzNCM0IsK0xBT0E7MkZEb0JhLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0Usa0JBQWtCOzRKQVNGLFdBQVc7c0JBQXBDLFNBQVM7dUJBQUMsYUFBYTtnQkFDRixPQUFPO3NCQUE1QixTQUFTO3VCQUFDLFNBQVM7Z0JBQ1MsY0FBYztzQkFBMUMsU0FBUzt1QkFBQyxnQkFBZ0I7Z0JBQ0MsYUFBYTtzQkFBeEMsU0FBUzt1QkFBQyxlQUFlO2dCQUNNLGlCQUFpQjtzQkFBaEQsU0FBUzt1QkFBQyxtQkFBbUI7Z0JBQ0gsWUFBWTtzQkFBdEMsU0FBUzt1QkFBQyxjQUFjO2dCQUNMLEtBQUs7c0JBQXhCLFNBQVM7dUJBQUMsT0FBTztnQkFDVSxhQUFhO3NCQUF4QyxTQUFTO3VCQUFDLGVBQWU7Z0JBQ00saUJBQWlCO3NCQUFoRCxTQUFTO3VCQUFDLG1CQUFtQjtnQkFFckIsU0FBUztzQkFBakIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBLWUNJbml0aWF0ZSxcbiAgS1lDSW5wdXRzLFxuICBLWUNJbnF1aXJ5UmVzcG9uc2UsXG4gIEtZQ1Byb2Nlc3MsXG4gIEtZQ1N0YXR1cyxcbn0gZnJvbSAnLi9odi1reWMtbW9kZWwnO1xuaW1wb3J0IHsgU2NyaXB0U2VydmljZSB9IGZyb20gJy4vc2NyaXB0LnNlcnZpY2UnO1xuXG5jb25zdCBTQ1JJUFRfUEFUSCA9ICdodHRwczovL2h2LWNhbWVyYS13ZWItc2cuczMtYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9oeXBlcnZlcmdlLXdlYi1zZGtANS4yLjgvc3JjL3Nkay5taW4uanMnO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JlbWl0MmFueS1odi1reWMnLFxuICB0ZW1wbGF0ZVVybDogJy4vaHYta3ljLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaHYta3ljLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEh2S3ljQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblt4OiBzdHJpbmddOiBhbnk7XG4gIHByaXZhdGUga3ljU3RlcDogS1lDU3RhdHVzIHwgdW5kZWZpbmVkO1xuICBwdWJsaWMga3ljQnRuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBLWUNTdGF0dXMgPSBLWUNTdGF0dXM7XG4gIEBWaWV3Q2hpbGQoJ25vdF9zdGFydGVkJykgbm90X3N0YXJ0ZWQ6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG4gIEBWaWV3Q2hpbGQoJ3N0YXJ0ZWQnKSBzdGFydGVkOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCd1c2VyX2NhbmNlbGxlZCcpIHVzZXJfY2FuY2VsbGVkOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdhdXRvX2FwcHJvdmVkJykgYXV0b19hcHByb3ZlZDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcbiAgQFZpZXdDaGlsZCgnbWFudWFsbHlfYXBwcm92ZWQnKSBtYW51YWxseV9hcHByb3ZlZDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcbiAgQFZpZXdDaGlsZCgnbmVlZHNfcmV2aWV3JykgbmVlZHNfcmV2aWV3OiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdlcnJvcicpIGVycm9yOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdhdXRvX2RlY2xpbmVkJykgYXV0b19kZWNsaW5lZDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcbiAgQFZpZXdDaGlsZCgnbWFudWFsbHlfZGVjbGluZWQnKSBtYW51YWxseV9kZWNsaW5lZDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKSBvblN1Y2Nlc3M6IChhcmdzOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IGNvbnNvbGUubG9nKFwiZGVmYXVsdCBpbXBsZW1lbnRhdGlvblwiKSB9O1xuICBASW5wdXQoKSBvbkZhaWx1cmU6IChhcmdzOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7Y29uc29sZS5sb2coXCJkZWZhdWx0IGltcGxlbWVudGF0aW9uXCIpfTtcblxuICBASW5wdXQoKSBreWNJbnB1dHMhOiBLWUNJbnB1dHM7XG5cbiAgcHVibGljIHNlcnZlckVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzZXJ2ZXJFcnJvck1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNjcmlwdFNlcnZpY2U6IFNjcmlwdFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBzY3JpcHRFbGVtZW50ID0gdGhpcy5zY3JpcHRTZXJ2aWNlLmxvYWRKc1NjcmlwdCh0aGlzLnJlbmRlcmVyLCBTQ1JJUFRfUEFUSCk7XG4gIH1cblxuICBnb0JhY2sodmFsdWU6IEtZQ1N0YXR1cykge1xuICAgIHRoaXMua3ljU3RlcCA9IHZhbHVlO1xuICAgIHRoaXMua3ljQnRuID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc3RhcnRLWUNQcm9jZXNzKHRva2VuOiBzdHJpbmcsIGt5Y1VuaXF1ZVJlZmVyZW5jZUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxhdW5jaEh5cGVyVmVyZ2UodG9rZW4sIGt5Y1VuaXF1ZVJlZmVyZW5jZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3RhdGVLWUMocmVzcG9uc2U6IGFueSkge1xuICAgIHRoaXMua3ljU3RlcCA9IHJlc3BvbnNlLmt5Y1N0YXR1cztcbiAgICB0aGlzLmt5Y0J0biA9IGZhbHNlO1xuICAgIHN3aXRjaCAodGhpcy5reWNTdGVwKSB7XG4gICAgICBjYXNlIEtZQ1N0YXR1cy5tYW51YWxseV9hcHByb3ZlZDpcbiAgICAgICAgdGhpcy5reWNCdG4gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS1lDU3RhdHVzLmF1dG9fYXBwcm92ZWQ6XG4gICAgICAgIHRoaXMua3ljQnRuID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBreWNXaWRnZXRIYW5kbGVyID0gKEh5cGVyS3ljUmVzdWx0OiBhbnkpID0+IHtcblxuICAgICAgaWYgKEh5cGVyS3ljUmVzdWx0LnN0YXR1cyA9PT0gXCJ1c2VyX2NhbmNlbGxlZFwiKSB7XG4gICAgICAgIHRoaXMub25GYWlsdXJlKEh5cGVyS3ljUmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgLy8gU29tZSBlcnJvciB3aXRoIHRoZSBmbG93IGxpa2UgdG9rZW4gZXhwaXJlZFxuICAgICAgaWYgKEh5cGVyS3ljUmVzdWx0LnN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgIHRoaXMub25GYWlsdXJlKEh5cGVyS3ljUmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgLy8gQXV0byBhcHByb3ZlZFxuICAgICAgaWYgKEh5cGVyS3ljUmVzdWx0LnN0YXR1cyA9PT0gXCJhdXRvX2FwcHJvdmVkXCIpIHtcbiAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhIeXBlckt5Y1Jlc3VsdCk7XG4gICAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBsYXVuY2hIeXBlclZlcmdlKHRva2VuOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBoeXBlckt5Y0NvbmZpZyA9IG5ldyBIeXBlckt5Y0NvbmZpZyhcbiAgICAgIHRva2VuLFxuICAgICAgJ2RpZ2lsb2NrZXItREJjaGVjaycsXG4gICAgICB1dWlkXG4gICAgKTtcbiAgICB3aW5kb3cuSHlwZXJLWUNNb2R1bGUubGF1bmNoKGh5cGVyS3ljQ29uZmlnLCB0aGlzLmt5Y1dpZGdldEhhbmRsZXIpO1xuICB9XG59XG4iLCI8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAoY2xpY2spPVwic3RhcnRLWUNQcm9jZXNzKGt5Y0lucHV0cy5hdXRoVG9rZW4sIGt5Y0lucHV0cy5reWNVbmlxdWVSZWZlcmVuY2VJZClcIlxuICBbY2xhc3NdPVwia3ljSW5wdXRzLmNzc0NsYXNzTmFtZXNcIlxuICA+XG5cbiAge3treWNJbnB1dHMubGFiZWx9fVxuPC9idXR0b24+XG4iXX0=