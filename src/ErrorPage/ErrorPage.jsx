import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../assets/404.svg"

function ErrorPage() {
  return (
    <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <img src={NotFound} alt="" />
        <p className="text-4xl font-bold">
          Sorry Couldn't find this page!!
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-stone-600 text-stone-50 dark:bg-violet-600 dark:text-gray-50"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage;
