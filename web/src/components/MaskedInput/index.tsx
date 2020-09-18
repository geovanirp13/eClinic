import React, { InputHTMLAttributes, useCallback } from 'react';
import { cnpj, phone, whatsapp } from '../MaskedInput/masks';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cnpj" | "phone" | "whatsapp";
}

const MaskedInput: React.FC<InputProps> = ({ mask, ...props }) => {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {

    if (mask === 'cnpj') {
      cnpj(e);
    }
    if (mask === 'phone') {
      phone(e);
    }
    if (mask === 'whatsapp') {
      whatsapp(e);
    }

  }, [mask]);

  return (
    <div>
      <input {...props} onKeyUp={handleKeyUp}/>
    </div>
  );
};

export default MaskedInput;