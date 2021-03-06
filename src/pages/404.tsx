import Image from "next/image";

function NotFoundError() {
  return (
    <div className="w-screen h-screen c-container flex flex-col justify-center items-center">
      <h1 className="title text-warning">There is nothing here!</h1>
      <Image
        src="/error/error-memoji.png"
        alt={"Error Memoji"}
        width={200}
        height={200}
        priority
        aria-label={"Error Memoji"}
      />
    </div>
  );
}

export default NotFoundError;
