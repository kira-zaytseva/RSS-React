import React from 'react';

export interface SearchBarProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (e: React.FormEvent<HTMLFormElement>) => void;
  searchValue?: string;
}
