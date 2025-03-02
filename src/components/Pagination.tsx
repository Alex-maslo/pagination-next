import React from "react";
import Link from "next/link";

const Pagination = async ({ page }: { page: number }) => {
  return (
    <div className="flex justify-center">
      <div className="join grid grid-cols-2">
        <Link
          href={`/recipes?page=${page - 1}`}
          className="join-item btn btn-outline"
        >
          Previous page
        </Link>
        <Link
          href={`/recipes?page=${page + 1}`}
          className="join-item btn btn-outline"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
