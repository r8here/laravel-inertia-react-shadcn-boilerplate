import { Button } from "@/shadcn/ui/button";
import { LoaderIcon } from "lucide-react";

export default function LoadingButton({ loading, loadingText="", children, ...props }) {
    return (
        <Button {...props}>{loading ? <LoaderIcon className="w-4 h-4 mr-2 animate-spin" /> : ''}{children}</Button>
    );
}