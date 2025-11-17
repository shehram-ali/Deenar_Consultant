// src/components/QuoteFormPopup.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Building2, CreditCard, Package, Target, Sparkles } from "lucide-react";

interface QuoteFormPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteFormPopup = ({ open, onOpenChange }: QuoteFormPopupProps) => {
  const [formData, setFormData] = useState({
    businessActivity: "",
    bankAccounts: "",
    bankTransactions: "",
    cashTransactions: "",
    invoiceMethod: "",
    invoiceCount: "",
    expenseTypes: "",
    expenseCount: "",
    payroll: "",
    backlogOrOngoing: "",
    recordKeeping: "",
    expectations: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // You can integrate with your backend API here
    // Example: await fetch('/api/quote', { method: 'POST', body: JSON.stringify(formData) })

    alert("Thank you! We'll get back to you soon inshaAllah. ✨");
    onOpenChange(false);

    // Reset form
    setFormData({
      businessActivity: "",
      bankAccounts: "",
      bankTransactions: "",
      cashTransactions: "",
      invoiceMethod: "",
      invoiceCount: "",
      expenseTypes: "",
      expenseCount: "",
      payroll: "",
      backlogOrOngoing: "",
      recordKeeping: "",
      expectations: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-gray-50 to-white border-2 border-[#194074]/20 shadow-2xl">
        <DialogHeader className="relative pb-6 border-b border-gray-200">
          <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-[#194074]/10 to-[#4a7ba7]/10 rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#194074] to-[#4a7ba7] rounded-2xl mb-4 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-[#194074] to-[#4a7ba7] bg-clip-text text-transparent">
              Get Your Free Quote
            </DialogTitle>
            {/* <p className="text-[#6D6E70] mt-2 text-base">
              Just a few quick questions to understand your business better
              inshaAllah
            </p> */}
          </div>
        </DialogHeader>

        <form className="space-y-8 mt-6 pb-2" onSubmit={handleSubmit}>
          {/* BUSINESS OVERVIEW */}
          <div className="space-y-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#194074] to-[#4a7ba7] rounded-xl flex items-center justify-center shadow-md">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <label className="text-lg font-bold text-[#194074]">
                Business Overview
              </label>
            </div>
            <textarea
              name="businessActivity"
              value={formData.businessActivity}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all resize-none hover:border-[#194074]/50"
              placeholder="Tell us about your main business activity. Do you sell goods, services, or both?"
              rows={3}
              required
            />
          </div>

          {/* BANKING */}
          <div className="space-y-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#194074] to-[#4a7ba7] rounded-xl flex items-center justify-center shadow-md">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <label className="text-lg font-bold text-[#194074]">
                Banking & Transactions
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#6D6E70]">
                  Bank Accounts
                </label>
                <input
                  name="bankAccounts"
                  value={formData.bankAccounts}
                  onChange={handleChange}
                  type="number"
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all hover:border-[#194074]/50"
                  placeholder="Number of bank accounts"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#6D6E70]">
                  Bank Transactions/Month
                </label>
                <input
                  name="bankTransactions"
                  value={formData.bankTransactions}
                  onChange={handleChange}
                  type="number"
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all hover:border-[#194074]/50"
                  placeholder="Approximate number"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6D6E70]">
                Cash Transactions (Optional)
              </label>
              <input
                name="cashTransactions"
                value={formData.cashTransactions}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all hover:border-[#194074]/50"
                placeholder="Do you handle cash? If yes, how many transactions monthly?"
              />
            </div>
          </div>

          {/* SALES & EXPENSES */}
          <div className="space-y-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#194074] to-[#4a7ba7] rounded-xl flex items-center justify-center shadow-md">
                <Package className="w-5 h-5 text-white" />
              </div>
              <label className="text-lg font-bold text-[#194074]">
                Sales & Expenses
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#6D6E70]">
                  Invoice Method
                </label>
                <input
                  name="invoiceMethod"
                  value={formData.invoiceMethod}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all hover:border-[#194074]/50"
                  placeholder="Manual, Zoho, Excel, etc."
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#6D6E70]">
                  Invoices per Month
                </label>
                <input
                  name="invoiceCount"
                  value={formData.invoiceCount}
                  onChange={handleChange}
                  type="number"
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all hover:border-[#194074]/50"
                  placeholder="Approximate number"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6D6E70]">
                Expense Details
              </label>
              <textarea
                name="expenseTypes"
                value={formData.expenseTypes}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all resize-none hover:border-[#194074]/50"
                placeholder="Types of expenses and whether bills are properly maintained"
                rows={2}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#6D6E70]">
                  Expense Transactions/Month
                </label>
                <input
                  name="expenseCount"
                  value={formData.expenseCount}
                  onChange={handleChange}
                  type="number"
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all hover:border-[#194074]/50"
                  placeholder="Approximate number"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#6D6E70]">
                  Payroll Processing
                </label>
                <input
                  name="payroll"
                  value={formData.payroll}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all hover:border-[#194074]/50"
                  placeholder="Number of employees"
                  required
                />
              </div>
            </div>
          </div>

          {/* GOALS */}
          <div className="space-y-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#194074] to-[#4a7ba7] rounded-xl flex items-center justify-center shadow-md">
                <Target className="w-5 h-5 text-white" />
              </div>
              <label className="text-lg font-bold text-[#194074]">
                Goals & Expectations
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6D6E70]">
                Service Type
              </label>
              <input
                name="backlogOrOngoing"
                value={formData.backlogOrOngoing}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all hover:border-[#194074]/50"
                placeholder="Backlog accounting or ongoing bookkeeping?"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6D6E70]">
                Record Keeping Preference
              </label>
              <input
                name="recordKeeping"
                value={formData.recordKeeping}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all hover:border-[#194074]/50"
                placeholder="Zoho Books, Excel, or other?"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6D6E70]">
                Your Expectations
              </label>
              <textarea
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#194074] focus:ring-2 focus:ring-[#194074]/20 focus:outline-none transition-all resize-none hover:border-[#194074]/50"
                placeholder="Compliance only, or analytical reports and insights as well?"
                rows={2}
                required
              />
            </div>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#194074] via-[#2c5a8f] to-[#194074] hover:from-[#0f2d52] hover:via-[#194074] hover:to-[#0f2d52] text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Submit Quote Request
                <Sparkles className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4a7ba7] to-[#194074] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            {/* <p className="text-center text-sm text-[#6D6E70] mt-4">
              We'll review your information and get back to you within 24 hours
              inshaAllah
            </p> */}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormPopup;
