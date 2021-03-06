const URL = "https://api.github.com";

export const getAllRepos = async (user: string, page: number) => {
  try {
    const res = await fetch(
      `${URL}/users/${user}/repos?page=${page}&per_page=10&sort=created`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data: object = await res.json();

    return { status: res.status, data: data };
  } catch (err: any) {
    throw err;
  }
};
