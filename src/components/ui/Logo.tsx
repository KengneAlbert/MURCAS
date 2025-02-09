import React from 'react';
import logoLight from '../../assets/images/logo-murcas.png';
import logoDark from '../../assets/images/logo-murcas.png';

type LogoProps = {
  variant?: 'light' | 'dark';
}

export function Logo({ variant = 'light' }: LogoProps) {
  return (
    <img 
      src={variant === 'light' ? logoLight : logoDark}
      alt="MURCAS FASAS"
      className="h-12 w-auto"
    />
  );
}