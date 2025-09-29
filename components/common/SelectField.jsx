import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
export const SelectField = ({ label, name, options, value, onChange, error, placeholder,optional }) => (
  <div className="space-y-1">
    <Label htmlFor={name} className="text-black">
      {label} {!optional && <span className="text-copper">*</span>}
    </Label>
    <Select name={name} onValueChange={(val) => onChange(name, val)} value={value}>
      <SelectTrigger className={`w-full text-black ${error ? "border-red-500" : ""}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);