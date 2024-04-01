"use server";

// const handleForm = async () => {} // 표현식 방법 (아래 선언식 방법과 같은 의미이다.)
export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState);
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  return {
    error: ["wrong password", "password too short"],
  };
}
