// Note: This is AppHead not Header: <head> not <header>.

import Head from 'next/head';

const AppHead = ({ title }: { title?: string }): JSX.Element => {
  return (
    <Head>
      <title>Only1 | {title || 'Home'}</title>
    </Head>
  );
};

export default AppHead;
