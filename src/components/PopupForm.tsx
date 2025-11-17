"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PopupFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PopupForm({ open, onOpenChange }: PopupFormProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Get a Quote</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <label>Main Business Activity</label>
          <Input placeholder="Describe your business" />

          <label>How many bank accounts?</label>
          <Input type="number" />

          <label>Approx bank transactions / month?</label>
          <Input type="number" />

          <label>Cash transactions / month?</label>
          <Input type="number" />

          <label>How do you issue sales invoices?</label>
          <Input placeholder="Manual / Zoho / Excel" />

          <label>Sales invoices per month?</label>
          <Input type="number" />

          <label>Expenses details</label>
          <Textarea placeholder="Types of expenses and bills" />

          <Button className="w-full mt-3">Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
