import React from "react";
import { toast } from "sonner";

export default function useToastNotification() {
    //toast notification
    const showPromiseToast = async (fn, messages) => {
        toast.promise(fn, {
            loading: messages.loading,
            success: messages.sucess,
            error: messages.error,
        });
    };

    const showErrorToast = (message) => {
        toast.error(message);
    };

    return { showPromiseToast, showErrorToast };
}
