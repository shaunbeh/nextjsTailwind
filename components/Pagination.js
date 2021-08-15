import Link from "next/link";

export default function Pagination({ currentPage, numPages }) {
  return (
    <div className="flex justify-center w-full p-2">
      <div className="flex items-center justify-between rounded-full shadow-md px-4 py-2 mt-2">
        {currentPage !== 1 && (
          <Link
            className="focus: text-red-400"
            href={`/blog/page/${currentPage - 1}`}
          >
            <a className="hover:text-indigo-600">{"< Prev"}</a>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`}>
            <li
              className={` relative py-2 block px-3 leading-none  rounded-full text-gray-800 ml-3 hover:bg-gray-200 cursor-pointer ${
                currentPage - 1 == i && "bg-indigo-100 pointer-events-none"
              }`}
            >
              {i + 1}
            </li>
          </Link>
        ))}
        {currentPage !== numPages && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <a className="hover:text-indigo-600 ml-3">{"Next >"}</a>
          </Link>
        )}
      </div>
    </div>
  );
}
