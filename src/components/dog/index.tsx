import React from "react";
import Image from "next/image";

const Dog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache",
  })
    .then((res) => res.json())
    .then((res) => res);

  return (
    <div>
      <Image src={response.message} alt="test" width={300} height={300} />
    </div>
  );
};

export default Dog;
