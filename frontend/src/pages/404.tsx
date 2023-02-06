import Link from "next/link"

export default function Custom404() {
  // todo: custom 404
  return (
    <div className={"text-center"}>
      <h1 className={"text-5xl m-auto"}>404 Not Found</h1>
      <p className={"text-2xl my-5 font-light"}>
        {"Back to "}
        <Link href={"/"} className={"font-normal hover:underline text-bo"}>
          home
        </Link>
        ...
      </p>
    </div>
  )
}
