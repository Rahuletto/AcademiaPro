import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p className="credits">
        Made by <Link href="https://marban.is-a.dev">Marban</Link> and{' '}
        <Link href="https://www.linkedin.com/in/srivishal-sivasubramanian-1a09b9240/">
          root-daemon
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
