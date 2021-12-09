import $fetch from "@/utils/fetch";

import path from "@/utils/path";

export function getMenu() {
  return $fetch.post(path.getMenu);
}
