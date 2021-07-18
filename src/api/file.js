import $fetch from "@/utils/fetch";
import path from "@/utils/path";



export function getFileList(data) {
    return $fetch.post(path.filelist, data);
}

