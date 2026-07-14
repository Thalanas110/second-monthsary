import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function VoiceWarningDialog({ open, onOpenChange, message }: { open: boolean; onOpenChange: (open: boolean) => void; message: string }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Voice warning</DialogTitle>
                    <DialogDescription>{message}</DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <button className="ml-auto rounded-xl border border-input px-4 py-2 text-sm font-medium hover:bg-secondary">Understood</button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}