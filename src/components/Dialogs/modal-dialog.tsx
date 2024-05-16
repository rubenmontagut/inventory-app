import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalDialogProps {
  title: string;
  description: string;
  trigger: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export default function ModalDialog(props: ModalDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>{props.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 sm:max-w-[425px]">{props.body}</div>
        <DialogFooter>{props.footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
