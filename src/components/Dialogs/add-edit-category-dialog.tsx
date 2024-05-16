import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AddEditCategoryDialogProps {
  title: string;
  description: string;
  buttonText: string;
  saveButtonText: string;
  create: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveCategory: () => void;
}

export default function AddEditCategoryDialog(
  props: AddEditCategoryDialogProps
) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    props.handleInputChange(e);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={`${props.create ? "btn-add" : "btn-edit"}`}>
          {props.buttonText}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>{props.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Nombre
            </label>
            <input
              id="name"
              defaultValue={""}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose
            type="submit"
            className="btn-add"
            onClick={props.handleSaveCategory}
            disabled={inputValue.trim() === ""}
          >
            {props.saveButtonText}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
