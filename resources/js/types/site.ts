export type Flash = {
    orderSuccessKey?: string | null;
    orderReference?: string | null;
    dashboardSuccessKey?: string | null;
};

export type Site = {
    appUrl: string;
    businessName: string;
    primaryPhone: string;
    secondaryPhone: string;
    phoneDisplay: string;
    salesEmail: string;
    telegramUrl: string;
    mapUrl: string;
    serviceZone: string;
    responseHours: string;
    paymentMethods: string[];
    deliveryDays: string[];
};