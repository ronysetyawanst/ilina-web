import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function ErrorPages(props) {
  const { code, title } = props;

  return (
    <section className="m-auto min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold tracking-wider text-cyan-500">
          {code}
        </h1>
        <p className="text-2xl font-semibold uppercase py-4">{title}</p>
        <Link href="/">
          <a className="bg-cyan-500 hover:bg-cyan-600 font-semibold rounded-lg text-red-50 p-2">
            Home
          </a>
        </Link>
      </div>
    </section>
  );
}

ErrorPages.defaultProps = {
  code: '',
  title: ''
};

ErrorPages.propTypes = {
  code: PropTypes.string,
  title: PropTypes.string
};
