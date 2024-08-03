import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material';

interface Option {
  id: string | number;
  value: string | number;
  label: string;
}

interface SelectDropdownProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (event: SelectChangeEvent<string | number>) => void;
  options: Option[];
}

export const SelectDropdown = ({
  label,
  value,
  name,
  onChange,
  options,
}: SelectDropdownProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        labelId={name + '-select-label-id'}
        id={name + '-select-id'}
        value={value}
        name={name}
        label={label}
        onChange={onChange}
        className="bg-gray-100 text-black"
      >
        {options.map((option) => (
          <MenuItem value={option.value} key={option.id}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
