import React from "react";
import Link from "next/link";
import NextLink from "next/link";
const MyButton = ({ href, children }) => {
  return (
    <div className="my-button">
      <Link href={href}>
        {/* <a className="button">{children}</a> */}
        {children}
      </Link>
      {/* <NextLink href={href} passHref>
        <a className="button">{children}</a>
      </NextLink> */}
    </div>
  );
};

export default MyButton;
