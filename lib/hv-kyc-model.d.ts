interface Common {
    status: string;
    statusCode: number;
}
export interface KYCInitiate {
    kycUniqueReferenceId: string;
    token: string;
}
export declare enum KYCStatus {
    not_started = "not_started",
    started = "started",
    user_cancelled = "user_cancelled",
    error = "error",
    needs_review = "needs_review",
    manually_approved = "manually_approved",
    auto_approved = "auto_approved",
    manually_declined = "manually_declined",
    auto_declined = "auto_declined"
}
export interface KYCInquiryResponse extends Common {
    userId: string;
    kycStatus: KYCStatus;
}
export interface KYCDetail {
    details: any;
    userID: string;
    transactionId: string;
    status: string;
}
export interface KYCProcess extends KYCInquiryResponse {
}
export interface KYCInputs {
    kycUniqueReferenceId: string;
    authToken: string;
    label?: string;
    cssClassNames?: string;
}
export {};
